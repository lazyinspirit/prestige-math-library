import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {verifyNativeAppendReport} from '../../drift-owner-resolutions.mjs';
test('native append preserves exact original and refuses appended-report tampering',t=>{
 const root=mkdtempSync(join(tmpdir(),'drift-append-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 mkdirSync(join(root,'research/archive'),{recursive:true});const hash=x=>createHash('sha256').update(x).digest('hex');
 const original=Buffer.from('Original blocked verdict\n'),added='Fresh no-drift verdict\n',merged=Buffer.from(original+'\n\n<!-- native append review 1; original preimage retained in research/archive -->\n'+added);
 writeFileSync(join(root,'research/demo-frontier-appends.json'),JSON.stringify({appends:[{number:1,archive:'research/archive',report:'research/added.md'}]}));
 writeFileSync(join(root,'research/added.md'),added);
 writeFileSync(join(root,'research/archive/review-applied.json'),JSON.stringify({run:'demo',number:1,inventoriesPreserved:true,originalReportSha256:hash(original),reportSha256:hash(added),mergedReportSha256:hash(merged)}));
 assert.equal(verifyNativeAppendReport(root,'demo',original,merged),true);
 assert.throws(()=>verifyNativeAppendReport(root,'demo',original,Buffer.from(merged+'edited')),/outside native append/);
 writeFileSync(join(root,'research/added.md'),added+'edited');
 assert.throws(()=>verifyNativeAppendReport(root,'demo',original,merged),/invalid native append/);
});

test('pending append suffix does not invalidate an exact earlier owner-bound native prefix', t => {
 const root=mkdtempSync(join(tmpdir(),'drift-pending-append-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 mkdirSync(join(root,'research/applied'),{recursive:true});
 const hash=x=>createHash('sha256').update(x).digest('hex');
 const original=Buffer.from('Original exact report\n'),added='Actual append report\n';
 const merged=Buffer.from(original+'\n\n<!-- native append review 1; original preimage retained in research/applied -->\n'+added);
 writeFileSync(join(root,'research/demo-frontier-appends.json'),JSON.stringify({appends:[
   {number:1,archive:'research/applied',report:'research/added.md'},
   {number:2,archive:'research/pending',report:'research/pending.md'}]}));
 writeFileSync(join(root,'research/added.md'),added);
 writeFileSync(join(root,'research/applied/review-applied.json'),JSON.stringify({run:'demo',number:1,inventoriesPreserved:true,
   originalReportSha256:hash(original),reportSha256:hash(added),mergedReportSha256:hash(merged)}));
 assert.equal(verifyNativeAppendReport(root,'demo',original,merged,hash(original)),true);
 assert.equal(verifyNativeAppendReport(root,'demo',original,merged,hash(merged)),true);
 assert.throws(()=>verifyNativeAppendReport(root,'demo',original,merged,'0'.repeat(64)),/not an authenticated native prefix/);
 assert.throws(()=>verifyNativeAppendReport(root,'demo',original,Buffer.from(merged+'\nUNAPPLIED CONTENT')),/outside native append/);
});

test('an applied generation after an unapplied generation is rejected', t => {
 const root=mkdtempSync(join(tmpdir(),'drift-append-gap-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 mkdirSync(join(root,'research/later'),{recursive:true});
 writeFileSync(join(root,'research/demo-frontier-appends.json'),JSON.stringify({appends:[
   {number:1,archive:'research/pending',report:'research/pending.md'},
   {number:2,archive:'research/later',report:'research/later.md'}]}));
 writeFileSync(join(root,'research/later/review-applied.json'),'{}');
 assert.throws(()=>verifyNativeAppendReport(root,'demo',Buffer.from('Original'),Buffer.from('Original')),/application gap/);
});
