const JSON_HEADERS={"content-type":"application/json; charset=utf-8","cache-control":"no-store","x-content-type-options":"nosniff"};
const response=(obj,status=200)=>new Response(JSON.stringify(obj),{status,headers:JSON_HEADERS});
const validEmail=x=>typeof x==='string'&&x.length<=254&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(url.pathname!=='/api/inquiry')return env.ASSETS.fetch(request);
  if(request.method!=='POST')return response({ok:false,error:'Method not allowed'},405);
  const origin=request.headers.get('origin');
  if(origin&&origin!==url.origin)return response({ok:false,error:'Invalid origin'},403);
  if(Number(request.headers.get('content-length')||0)>12000)return response({ok:false,error:'Payload too large'},413);
  let body;
  try{const raw=await request.text();if(raw.length>12000)return response({ok:false,error:'Payload too large'},413);body=JSON.parse(raw);}catch{return response({ok:false,error:'Invalid JSON'},400)}
  const {name,email,topic,message,consent,website}=body||{};
  if(website)return response({ok:true}); // spam honeypot
  const topics=['Live 同步展演','小型展演活動','活動行銷','其他合作'];
  if(typeof name!=='string'||name.trim().length<1||name.length>100||!validEmail(email)||!topics.includes(topic)||typeof message!=='string'||message.trim().length<10||message.length>3000||consent!=='on')return response({ok:false,error:'Invalid fields'},400);
  if(!env.EMAIL||!env.CONTACT_DESTINATION)return response({ok:false,error:'Email service not configured'},503);
  const clean=s=>String(s).replace(/[\r\n\u0000-\u001F]+/g,' ').trim();
  const from=env.CONTACT_SENDER||'hello@edot-entertainment.com';
  try{
   await env.EMAIL.send({to:env.CONTACT_DESTINATION,from,replyTo:clean(email),subject:`[E.DOT Inquiry] ${clean(topic)}`,text:`E.DOT website inquiry\n\nName: ${clean(name)}\nEmail: ${clean(email)}\nTopic: ${clean(topic)}\nLanguage: ${body.language==='en'?'EN':'ZH'}\n\nMessage:\n${message.trim()}\n`});
   return response({ok:true});
  }catch(err){console.error('E.DOT inquiry email delivery failed',err?.code||'unknown');return response({ok:false,error:'Email delivery failed'},502);}
 }
};
