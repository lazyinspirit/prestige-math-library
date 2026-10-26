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
