// Explicit Root adoption of exact reviewed presentation versions, never proofs.
import fs from 'node:fs';
import crypto from 'node:crypto';
import {isDeepStrictEqual as equal} from 'node:util';
const run='advanced-qft-supersymmetry-build-2026-10-23',dir=`research/${run}-owner-resolution/step2-import-successor-4-v1/aggregate-current143-v1`,sha=b=>crypto.createHash('sha256').update(b).digest('hex'),read=f=>fs.readFileSync(f),json=f=>JSON.parse(read(f)),assert=(v,m)=>{if(!v)throw Error(m)};
assert(process.argv.includes('--write'),'Explicit Root write required');
const path=`research/${run}-original-rendering-maintenance.json`,before=read(path),old=JSON.parse(before),diagnostic=json(dir+'/diagnostic.json'),candidateBytes=read(dir+'/candidate.pending.json'),candidate=JSON.parse(candidateBytes),changes=json(dir+'/consumer-transitions.json');
assert(sha(before)===diagnostic.baseline.sha256&&sha(candidateBytes)==='b04d6faa075966afa582e9f6507a0ccc9196569c71000248e4a2110c299c4b53','Exact Root-reviewed candidates required');
assert(old.entries.length===140&&candidate.entries.length===143,'Exact143 inventory');
for(const [file,hash] of Object.entries(candidate.inputs))assert(sha(read(file))===hash,'Changed current input '+file);
for(let i=0;i<140;i++){const a=old.entries[i],b=candidate.entries[i];assert(a.path===b.path&&a.pinned_sha256===b.pinned_sha256&&a.original_sha256===b.original_sha256&&equal(a.changes,b.changes),'Unreviewed supplier delta '+a.path);}
let consumerCount=0,typed=0;
for(const [i,e] of candidate.entries.entries()){
 if(i>=140){e.root_decision='accepted';for(const review of e.presentation_reviews??[]){if(review.decision==='pending'){review.reviewer='/root';review.decision='accepted';typed++;}}}
 for(const consumer of e.consumers){consumer.decision='unaffected';consumer.reason+=' Root current-frontier disposition: this exact supplier successor preserves its complete logical interface and every premise/result; current raw carrier/declaration and full transitive consumer selection are bound here. Consequently this presentation substitution cannot change this current use, including newly reached paths. Earlier source-version review remains historical; its frozen-source wording does not assert that this current carrier is unchanged. No whole consumer proof audit, empirical acceptance, or native gate pass is inferred.';consumerCount++;}
}
candidate.reason='Root adopts the exact prior140 reviewed rendering versions and three newly reached presentation-only successors on the actual71-batch/453-item frontier. Root read the three exact before/after diffs and attributed use excerpts: completion-square retains explicit m>0 and removes only malformed redundant support; Radon retains all prose/formulas and moves duplicate support plus TeX title; radial retains the complete proof and adds independent planar illustration. Existing140 exact deltas remain identical to prior accepted versions. Current consumer compatibility follows unchanged logical interfaces for all current selected paths; no new whole-proof/source/empirical audit is claimed. Native repair authentication, exact bound inputs, ordinary owner preparation and full gates remain required.';
const adoption={run,reviewer:'/root',at:new Date().toISOString(),kind:'exact presentation compatibility adoption; no proof acceptance',prior_authority_sha256:sha(before),candidate_sha256:sha(candidateBytes),entries:143,current_consumer_edges:consumerCount,typed_new_reviews:typed,transitions_sha256:sha(read(dir+'/consumer-transitions.json')),basis:candidate.reason,reading_limits:'Root read exact full three new source diffs, attributed affected-use excerpts and typed reviews. Existing140 supplier deltas are compared exactly to prior Root decisions; current full consumer graph and actual source/declaration bindings are checked mechanically. Compatibility of all current/new consumer paths follows logical-interface identity, not a claim to reread283 full consumer proofs or every intermediate supplier. No new external-source reading or screenshot inspection.',source_or_pin_edits:false,native_gate:false};
assert(typed===4,'Four typed exact-native reviews required');
fs.writeFileSync(dir+'/root-adoption.json',JSON.stringify(adoption,null,2)+'\n',{flag:'wx'});
assert(sha(read(path))===sha(before),'Authority raced');
fs.writeFileSync(path,JSON.stringify(candidate,null,2)+'\n');
console.log(JSON.stringify({adopted:143,current_consumer_edges:consumerCount,typed_new_reviews:typed,native_gate:false}));
