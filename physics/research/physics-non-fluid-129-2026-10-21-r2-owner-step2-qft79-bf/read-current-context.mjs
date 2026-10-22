import fs from 'node:fs';import crypto from 'node:crypto';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',dir=`research/${run}-owner-step2-qft79-bf`,s=loadStep1Record(process.cwd(),run),out=[];
for(const batch of ['75','77'])for(const pg of s.pages.filter(p=>p.batch===batch))for(const {id} of pg.items){const d=step1Decision(s,id);out.push({id,page:pg.id,closed:d.closed,reason:d.reason??null,recordAt:d.row?.at??null,recordSha256:d.row?.sha256??null,sourceSha256:crypto.createHash('sha256').update(fs.readFileSync(`items/${id}.md`)).digest('hex')});}
fs.writeFileSync(`${dir}/page-prerequisite-current-readiness.json`,JSON.stringify({at:new Date().toISOString(),records:out,note:'Read-only native currency observation, not independent acceptance; page79 required edge retained.'},null,2)+'\n');console.log(JSON.stringify(out.map(x=>({id:x.id,closed:x.closed,reason:x.reason})),null,2));
