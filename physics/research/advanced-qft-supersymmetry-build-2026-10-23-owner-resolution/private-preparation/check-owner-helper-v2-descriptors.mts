// Read-only descriptor inventory. Does not import/execute the receipt helper or run gates.
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,resolve} from 'node:path';
import assert from 'node:assert/strict';
import {readStatementPolicy} from '../../../../tools/statement-first-policy.mjs';
import {stagesForRun as baseStagesForRun} from '../../../../tools/physics-autopilot/stages/mathlib.mts';
import {stagesForRun as compactStagesForRun} from '../../../../tools/physics-autopilot/stages/mathlib.compact.mts';
import {stagesForRun as statementFirstStagesForRun} from '../../../../tools/physics-autopilot/stages/mathlib.statement-first.mts';
const root=process.cwd(),run='advanced-qft-supersymmetry-build-2026-10-23',prep=join(root,'research',run+'-owner-resolution/private-preparation'),file=join(prep,'review-authored-step1-owner-request-v2.mts'),source=readFileSync(file,'utf8'),cli=readFileSync(join(root,'tools/physics-autopilot/bin/autopilot.mts'),'utf8');
const selection=source.split('\n').find(line=>line.startsWith('const editorialPolicy='));assert(selection);
assert(cli.includes("readStatementPolicy(repo, editorialRun, 'physics')"));assert(cli.includes("editorialPolicy.page_layout === 'compact-v1'\n      ? 'mathlib.compact.mts' : 'mathlib.statement-first.mts'"));
// Evaluate only the exact versioned helper selector, with actual native stage factories.
const choose=new Function('root','run','readStatementPolicy','compactStagesForRun','statementFirstStagesForRun','baseStagesForRun',selection+'return stagesForRun;');
const selected=choose(root,run,readStatementPolicy,compactStagesForRun,statementFirstStagesForRun,baseStagesForRun);
const policy=readStatementPolicy(root,run,'physics');assert.equal(policy?.page_layout,'compact-v1');assert.equal(selected,compactStagesForRun);
for(const [value,expected] of [[null,baseStagesForRun],[{standard:'statement-first-v1'},statementFirstStagesForRun],[{page_layout:'compact-v1'},compactStagesForRun]])assert.equal(choose(root,run,()=>value,compactStagesForRun,statementFirstStagesForRun,baseStagesForRun),expected);
const ctx:any={repo:root,run,dispatchDir:join(root,'research',run+'-dispatch'),config:{stateDir:join(root,'.physics-autopilot',run)},doctor:false};
function inventory(factory:any){const stage=factory(ctx).find((s:any)=>s.id==='1-scaffold');assert(stage);const gates=typeof stage.gates==='function'?stage.gates(ctx):stage.gates;assert(gates.length);return gates.map((g:any)=>({...g,argv:typeof g.argv==='function'?g.argv():[...g.argv],needs:typeof g.needs==='function'?g.needs():g.needs}));}
const actual=inventory(selected),native=inventory(compactStagesForRun),base=inventory(baseStagesForRun);assert.deepEqual(actual,native);assert.deepEqual(actual.slice(0,base.length),base);assert.deepEqual(actual.slice(base.length).map((g:any)=>g.id),['statement-first','page-layout']);assert(actual.some((g:any)=>g.ownerReviewInputs));
const old=readFileSync(join(prep,'review-authored-step1-owner-request.mts'));assert.equal(createHash('sha256').update(old).digest('hex'),'9a4cb72583d141823e1316a07bd06558c53158133228368195c70ab59c039ed1');
console.log(JSON.stringify({kind:'read-only actual descriptor inventory',helper_sha256:createHash('sha256').update(source).digest('hex'),policy,cli_selected_stage_adapter:'tools/physics-autopilot/stages/mathlib.compact.mts',base_gate_count:base.length,selected_gate_count:actual.length,gate_ids:actual.map((g:any)=>g.id),owner_review_inputs:actual.filter((g:any)=>g.ownerReviewInputs).map((g:any)=>({id:g.id,ownerReviewInputs:g.ownerReviewInputs})),descriptors_equal_actual_native_compact:true,base_descriptors_preserved:true,helper_executed:false,gates_executed:false,snapshot_built:false,request_or_receipt_written:false},null,2));
