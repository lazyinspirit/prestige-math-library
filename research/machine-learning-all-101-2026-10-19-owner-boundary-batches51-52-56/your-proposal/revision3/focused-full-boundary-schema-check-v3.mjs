import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {fileURLToPath} from 'node:url';
const base=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(base,'../../../..');
const {numberedProofSteps,splitFrontmatter}=await import(path.join(root,'tools/facts-block.mjs'));
const load=f=>JSON.parse(fs.readFileSync(f,'utf8')),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const native=fs.readFileSync(path.join(root,'tools/proof-contract.mjs'),'utf8');
const standards=native.match(/const STANDARD_BOUNDARIES = (\[[\s\S]*?\]);/)[1];
const STANDARD_BOUNDARIES=Function('return '+standards)();
const errors=[],error=(code,message,id=null)=>errors.push({code,message,id});
function validateBoundaries(id, boundaries, steps) {
  if (!Array.isArray(boundaries)) {
    error('boundary-shape', '`boundaries` must be an array', id);
    return;
  }
  const seen = new Set();
  for (const boundary of boundaries) {
    if (!boundary || typeof boundary !== 'object' || Array.isArray(boundary)) {
      error('boundary-entry-shape', 'each boundary entry must be an object', id);
      continue;
    }
    const { case: name, status, evidence, reason } = boundary;
    if (!STANDARD_BOUNDARIES.includes(name)) {
      error('boundary-case', `${name ?? '(missing)'} is not a standard boundary case`, id);
      continue;
    }
    if (seen.has(name)) error('boundary-duplicate', `${name} is listed twice`, id);
    seen.add(name);
    if (!['checked', 'not_applicable'].includes(status)) error('boundary-status', `${name} must be checked or not_applicable`, id);
    if (status === 'checked') {
      if (typeof evidence !== 'string' || !evidence.trim()) error('boundary-evidence', `${name} needs evidence`, id);
      else {
        const references = [...evidence.matchAll(/\b(?:steps?\s+)?(\d+\.\d+)\b/gi)]
          .filter(m => /^steps?\s/i.test(m[0]) || steps.has(m[1])).map(m => m[1]);
        if (!references.length && !/statement|definition|example|counterexample/i.test(evidence)) {
          error('boundary-evidence-unanchored', `${name} evidence must name a step or statement`, id);
        }
        for (const stepId of references) if (!steps.has(stepId)) error('boundary-evidence-step-missing', `${name} names missing step ${stepId}`, id);
      }
    }
    if (status === 'not_applicable' && (typeof reason !== 'string' || !reason.trim())) {
      error('boundary-na-reason', `${name} needs a specific not_applicable reason`, id);
    }
  }
  for (const name of STANDARD_BOUNDARIES) if (!seen.has(name)) error('boundary-missing', `${name} has no worksheet disposition`, id);
}


const nativeFn=native.slice(native.indexOf('function validateBoundaries('),native.indexOf('\nfunction loadItem(',native.indexOf('function validateBoundaries(')));
if(validateBoundaries.toString()!==nativeFn.trim())error('function-parity','Native function is not byte-identical');
const ops=load(path.join(base,'boundary-object-CAS-all-v3.json')),prior=load(path.join(base,'../revision2/boundary-object-CAS-all-v2.json')),guards=load(path.join(base,'source-guards-all-v3.json'));
if(JSON.stringify(guards)!==JSON.stringify(load(path.join(base,'../revision2/source-guards-all-v2.json'))))error('guard-change','V2 source guards changed');
for(const g of guards)if(sha(fs.readFileSync(path.join(root,g.path)))!==g.sha256)error('source-drift',g.path);
let added=0,allRows=0,checked=0,na=0,affectedItems=0;
for(let i=0;i<ops.length;i++){
 const op=ops[i],v2=prior[i],a=structuredClone(op),b=structuredClone(v2);
 if(JSON.stringify(op)!==JSON.stringify(v2)){
  added++;if(op.replacement.status!=='not_applicable'||'reason' in v2.replacement||op.replacement.reason!==v2.replacement.evidence)error('unexpected-addition','Reason must copy existing concrete evidence',op.consumer);
  delete a.replacement.reason;
 }
 if(JSON.stringify(a)!==JSON.stringify(b))error('v2-drift','Field other than the three reason additions changed',op.consumer);
}
if(added!==3)error('addition-count',String(added));
for(const batch of [51,52,56]){
 const local=ops.filter(o=>o.file.includes(`-batch-${batch}.`)),ids=[...new Set(local.map(o=>o.consumer))],doc=load(path.join(base,`batch-${batch}.proof-contracts-v3.json`)),actual=load(path.join(root,local[0].file));
 const composed=structuredClone(actual);
 for(const op of local){
  const rows=composed.contracts[op.consumer].boundaries,found=rows.map((v,i)=>v.case===op.boundary_case?i:-1).filter(i=>i>=0);
  if(found.length!==1||JSON.stringify(rows[found[0]])!==JSON.stringify(op.expected))error('CAS-drift',op.boundary_case,op.consumer);
  else rows[found[0]]=op.replacement;
 }
 // Full contract review aids must be precisely the row-CAS result; no foreign-field changes.
 if(JSON.stringify(composed)!==JSON.stringify(doc))error('composed-contract-drift',String(batch));
 for(const id of ids){
  const body=splitFrontmatter(fs.readFileSync(path.join(root,'items',`${id}.md`),'utf8')).body,steps=new Set(numberedProofSteps(body).map(s=>s.id)),rows=doc.contracts[id].boundaries;
  validateBoundaries(id,rows,steps);affectedItems++;allRows+=rows.length;
  checked+=rows.filter(r=>r.status==='checked').length;na+=rows.filter(r=>r.status==='not_applicable').length;
 }
}
const result={ok:errors.length===0,revision:3,original_CAS_rows:ops.length,source_guards:guards.length,affected_items:affectedItems,all_worksheet_rows_validated:allRows,checked_rows_validated:checked,not_applicable_rows_validated:na,reason_fields_added:added,native_validateBoundaries_function_byte_parity:validateBoundaries.toString()===nativeFn.trim(),native_validator_sha256:sha(native),errors,native_gate_run:false,source_or_math_changes:false,new_mathematical_review_credit:false};
fs.writeFileSync(path.join(base,'focused-full-boundary-schema-results-v3.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));process.exitCode=errors.length?1:0;
