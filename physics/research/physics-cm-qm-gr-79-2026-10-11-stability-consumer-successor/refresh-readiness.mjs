import{readFileSync,writeFileSync,existsSync}from'node:fs';import{loadStep3}from'../../tools/physics-support/frontier-snapshot.mjs';import{step1Decision,recordStep1}from'../../tools/physics-support/step1-decisions.mjs';
const run='physics-cm-qm-gr-79-2026-10-11',dir=`research/${run}-stability-consumer-successor`,doc=JSON.parse(readFileSync(dir+'/review.json')),s=loadStep3(process.cwd(),run),rows=[];
for(const review of doc.consumer_reviews){const id=review.id;if(!['3','4','7','20','25','27'].includes(review.batch))continue;const previous=step1Decision(s,id),path=`research/${run}-step1-${id}.json`;
if(previous.closed){rows.push({id,action:'retained-current',sha256:previous.row.sha256});continue;}
if(previous.row?.decision==='escalated'){rows.push({id,action:'held-escalated',reason:previous.row.reason});continue;}
const old=existsSync(path)?JSON.parse(readFileSync(path)):null,entry=s.items.get(id);if(!entry)throw Error(id);
const dependencies=[...new Set([...(old?.dependencies??[]),...(entry.item.deps??[])])];
const reason=(old?.reason??'')+`; Successor /root/physics_stability_consumer_successor actually re-reviewed changed suppliers and complete old/current/alias affected cone; current local focused disposition ${dir}/review.json, exact repairs ${dir}/findings.json and scoped checks ${dir}/final-checks.json plus scoped-policy-checks.json. Original author/history preserved; this is current authoring readiness, not independent audit.`;
const row=recordStep1(process.cwd(),{run,item:id,decision:'ready',owner:old?.owner??false,dependencies,reason});rows.push({id,action:'recorded-current',sha256:row.sha256,prior_sha256:old?.sha256??null});}
writeFileSync(dir+'/readiness-refresh.json',JSON.stringify({run,at:new Date().toISOString(),reviewer:'successor /root/physics_stability_consumer_successor',rows},null,2)+'\n');console.log(rows.map(r=>r.action).reduce((a,b)=>(a[b]=(a[b]??0)+1,a),{}));
