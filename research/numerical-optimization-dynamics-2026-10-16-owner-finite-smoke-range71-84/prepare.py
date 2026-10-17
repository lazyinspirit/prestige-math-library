from pathlib import Path
import json,re,copy,difflib
B=Path(__file__).resolve().parent;ROOT=B.parents[1];R='numerical-optimization-dynamics-2026-10-16'
entries={
77:[('ex-parareal-dissipative-scalar-heat-mode','numerical-time-parallel-fixture','dissipative-heat','Direct subtraction gives'),('ex-parareal-oscillatory-coarse-phase-error','numerical-time-parallel-fixture','phase-mismatch','Therefore $'),('ex-parareal-nonlinear-tube-escape','numerical-time-parallel-fixture','nonlinear-tube','Coarse initialization gives'),('ex-mgrit-scalar-diffusion-two-grid-contraction','numerical-time-parallel-fixture','mgrit-two-grid','Therefore $E$')],
79:[('ex-narrow-maturation-kernel-delay-approximation','numerical-population-fixture','triangular-maturation','A finite-width fertility is not'),('ex-half-size-division-numerical-moment-budget','numerical-population-fixture','half-size-division','The rightward internal flux'),('ex-constant-mortality-and-age-localized-fertility','numerical-population-fixture','localized-fertility','With $'),('ex-age-cutoff-versus-outflow-tail-error','numerical-population-fixture','cutoff-shift','For $T=k=')],
82:[('alg-golub-welsch-certified-node-and-weight-enclosures','numerical-gauss-fixture','one-node-discrete','3. If $m=1$'),('ex-two-node-gauss-weights-from-cardinal-squares','numerical-gauss-fixture','cardinal-squares','The formula for'),('ex-four-dimensional-gauss-product-has-sixteen-nodes','numerical-gauss-fixture','tensor-four','The node-count statement'),('ex-two-node-gauss-legendre-exact-through-degree-three','numerical-gauss-fixture','legendre-two-node','For either unit eigenvector')]
}
ops=[];sources=[]
for n,items in entries.items():
 rel=Path('research')/f'{R}-batch-{n}.proof-contracts.json';raw=(ROOT/rel).read_bytes();doc=json.loads(raw);out=copy.deepcopy(doc)
 for id,check,variant,needle in items:
  source=Path('items')/(id+'.md');text=(ROOT/source).read_text();paragraphs=text.split('\n\n');matches=[p for p in paragraphs if needle in p];assert len(matches)==1,(id,needle,len(matches));assertion=matches[0].strip()
  old=copy.deepcopy(out['contracts'][id]['finite_smoke']);assert len(old)==1,id;new=copy.deepcopy(old[0]);new.update({'check':check,'parameters':{'variant':variant},'asserts':assertion,'checked_in':'Exact current source assertion excerpt; proposed bounded fixture, execution still pending root.'});out['contracts'][id]['finite_smoke']=[new]
  ops.append({'batch':n,'id':id,'before':old,'after':[new],'truth':'Only named finite_smoke field is proposed; no execution or general proof coverage claimed.'});p=B/'source-before'/source;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes((ROOT/source).read_bytes());sources.append(str(source))
 for kind,data in [('before',raw),('proposed',(json.dumps(out,indent=2,ensure_ascii=False)+'\n').encode())]:
  p=B/kind/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(data)
 (B/f'batch-{n}.diff').write_text(''.join(difflib.unified_diff(raw.decode().splitlines(True),(json.dumps(out,indent=2,ensure_ascii=False)+'\n').splitlines(True),fromfile=str(rel),tofile=str(rel)+' (proposed)')))
(B/'operations.json').write_text(json.dumps({'canonical_writes':False,'checks_executed':False,'operations':ops},indent=2)+'\n');(B/'source-assertions.json').write_text(json.dumps([{'id':x['id'],'batch':x['batch'],'check':x['after'][0]['check'],'parameters':x['after'][0]['parameters'],'asserts':x['after'][0]['asserts']}for x in ops],indent=2,ensure_ascii=False)+'\n');print('Prepared',len(ops),'unexecuted finite-fixture metadata proposals')
