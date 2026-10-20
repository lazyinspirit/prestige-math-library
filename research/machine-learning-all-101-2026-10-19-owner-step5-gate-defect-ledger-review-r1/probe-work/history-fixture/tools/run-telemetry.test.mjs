import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import {join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {normalizeDispatch,usageAvailability,counterDelta,safeRelative,sourceKind,collect,verify} from './run-telemetry.mjs';

test('allowlist excludes prose and credentials, preserves unknown usage',()=>{
  const r=normalizeDispatch({run:'test',tail:'SECRET',prompt:'SECRET',session_home:'SECRET',token_usage:{available:false}});
  assert.equal(JSON.stringify(r).includes('SECRET'),false);
  assert.equal(r.token_usage.available,false);
  assert.equal(usageAvailability({}),'missing');
  assert.equal(usageAvailability({pt:0,ct:0}),'reported-zero-ambiguous');
  assert.equal(usageAvailability({pt:12,ct:3}),'reported');
});
test('cumulative usage handles repeats and resets',()=>{
  assert.deepEqual(counterDelta({input_tokens:10},{input_tokens:10}),{input_tokens:0});
  assert.deepEqual(counterDelta({input_tokens:10},{input_tokens:3}),{input_tokens:3});
  assert.deepEqual(counterDelta(null,{input_tokens:10}),{input_tokens:10});
  assert.equal(sourceKind('research/run-judge-attempts.jsonl'),'judge-attempt');
  assert.equal(sourceKind('research/run-judge-adjudications.jsonl'),'workflow-ledger');
  assert.equal(sourceKind('research/run-dispatch/checkpoint/agent.log'),'log');
});
test('collection accounts for aliases, malformed lines and actual untimed repeats; verifies corruption',async()=>{
  const root=fs.mkdtempSync(join(os.tmpdir(),'prestige-telemetry-test-'));
  try {
    execFileSync('git',['init','-q'],{cwd:root});
    execFileSync('git',['-c','user.name=Test','-c','user.email=test@example.invalid','commit','--allow-empty','-qm','fixture'],{cwd:root});
    fs.mkdirSync(join(root,'research/test-dispatch'),{recursive:true});
    const receipt=join(root,'research/test-dispatch/one.result.json');
    fs.writeFileSync(receipt,JSON.stringify({run:'test',ok:true,tail:'SECRET',token_usage:{available:true,input_tokens:8,output_tokens:2}}));
    fs.linkSync(receipt,join(root,'research/test-dispatch/alias.result.json'));
    fs.writeFileSync(join(root,'research/test-cost.jsonl'),'{"pt":2,"ct":1}\n{"pt":2,"ct":1}\nmalformed\n');
    assert.throws(()=>safeRelative(root,'../escape'));
    assert.throws(()=>safeRelative(root,'.'));
    fs.symlinkSync(os.tmpdir(),join(root,'link'));
    assert.throws(()=>safeRelative(root,'link/example'));
    const out=join(root,'archive'),summary=await collect(root,out);
    assert.equal(summary.source_files,3);
    assert.equal(summary.records.dispatches,1);
    assert.equal(summary.records['judge-cost'],2);
    assert.equal(summary.gaps[0].count,1);
    assert.equal(summary.source_accounting['hardlink-alias'],1);
    await verify(out);
    fs.writeFileSync(join(root,'research/test-adjudications.jsonl'),'{"id":"item","outcome":"repaired","reason":"SECRET"}\n');
    const supplement=await collect(root,join(root,'supplement'),out);
    assert.equal(supplement.source_files,1);
    assert.equal(supplement.records['workflow-ledger'],1);
    await verify(join(root,'supplement'));
    fs.appendFileSync(join(out,'runs.tsv'),'corrupt');
    await assert.rejects(verify(out),/archive mismatch/);
  } finally { fs.rmSync(root,{recursive:true,force:true}); }
});
