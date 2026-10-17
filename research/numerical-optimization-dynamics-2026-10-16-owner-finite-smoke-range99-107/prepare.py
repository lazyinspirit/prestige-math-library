import json,difflib,re
from pathlib import Path
D=Path(__file__).parent;ROOT=Path.cwd();packet=json.load(open(ROOT/'research/numerical-optimization-dynamics-2026-10-16-owner-boundary99-107-proposals/finite-smoke-intended-cases.json'))
fixtures=[('numerical-elliptic-control-fixture','heat-three-node-mode-and-box-projection',101),('numerical-multirate-fixture','coupled-fast-two-microsteps',104),('numerical-multirate-fixture','frozen-versus-midpoint-macro-nodes',104),('numerical-multirate-fixture','electromechanical-four-microsteps-and-cost',104),('numerical-sensitivity-fixture','two-outcome-perfect-correlation-shapley',107),('numerical-sensitivity-fixture','ishigami-six-variance-coefficient-cases',107),('numerical-sensitivity-fixture','four-sign-tensor-and-sobol',107),('numerical-sensitivity-fixture','constant-four-point-undefined-indices',107),('numerical-sensitivity-fixture','two-row-bernoulli-returned-ratio',107)]
ops=[];guards=[]
for entry,(check,fixture,batch) in zip(packet,fixtures):
 id=entry['id'];p=ROOT/f'research/numerical-optimization-dynamics-2026-10-16-batch-{batch}.proof-contracts.json';x=json.load(open(p));before=x['contracts'][id]['finite_smoke'];source=(ROOT/entry['source']).read_text();assertion=entry['exact_source_assertion']
 if assertion not in source:
  # Phase formatting may have changed. Preserve full actual current paragraph.
  paragraphs=source.split('\n\n');preferred=next((z for z in paragraphs if z.startswith('3.1 ') and 'variance' in z.lower()),None)
  if preferred is None: raise ValueError('Source excerpt changed; explicit review required: '+id)
  assertion=preferred
 assert assertion in source
 proposed=[{'check':check,'parameters':{'fixture':fixture},'asserts':assertion,'claim':entry['intended_case'],'scope':'Bounded independent computations only; not a general proof or reading claim. Research implementation is unexecuted.','historical_declarative_entries':before}]
 op={'file':str(p.relative_to(ROOT)),'path':['contracts',id,'finite_smoke'],'before':before,'proposed':proposed,'source':entry['source'],'fixture':fixture};ops.append(op)
 for branch,data in [('before',before),('proposed',proposed)]:
  q=D/branch/(id+'.finite_smoke.json');q.parent.mkdir(parents=True,exist_ok=True);q.write_text(json.dumps(data,indent=2,ensure_ascii=False)+'\n')
 a=json.dumps(before,indent=2,ensure_ascii=False)+'\n';b=json.dumps(proposed,indent=2,ensure_ascii=False)+'\n';q=D/'diffs'/(id+'.diff');q.parent.mkdir(parents=True,exist_ok=True);q.write_text(''.join(difflib.unified_diff(a.splitlines(True),b.splitlines(True),fromfile='before/'+id,tofile='proposed/'+id)))
 q=D/'source-before'/entry['source'];q.parent.mkdir(parents=True,exist_ok=True);q.write_text(source)
 guards.append({'id':id,'source':entry['source'],'exact_current_asserts':assertion,'check':check,'fixture':fixture,'evidence':'Current exact text comparison only; fixture code not executed.'})
(D/'operations.json').write_text(json.dumps(ops,indent=2,ensure_ascii=False)+'\n');(D/'source-assertions.json').write_text(json.dumps(guards,indent=2,ensure_ascii=False)+'\n')
(D/'completion.json').write_text(json.dumps({'status':'research-proposal-ready-unexecuted','rows':9,'check_keys':[f[0] for f in fixtures[::4]],'exports':['numericalControlChecks','numericalMultirateChecks','numericalSensitivityChecks'],'fixture_execution':False,'canonical_writes':False,'root_actions':['Review exact code/source assertions','Merge registry/imports under root ownership','Execute fixed suites and parameter-rejection cases','Apply guarded finite_smoke metadata rows only if approved'],'preserved_history':'Each proposed row retains original entries under historical_declarative_entries; full before carrier also archived.'},indent=2)+'\n')
print('Prepared9 finite_smoke rows, nine exact source excerpts and source snapshots; no fixture/check execution.')
