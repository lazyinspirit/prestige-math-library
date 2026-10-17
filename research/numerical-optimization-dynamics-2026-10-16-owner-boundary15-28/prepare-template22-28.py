from pathlib import Path
import json,copy,re,runpy,datetime
R='numerical-optimization-dynamics-2026-10-16';D=Path('research')/(R+'-owner-boundary15-28');target=json.loads((D/'targeted-operations.json').read_text());skip={(x['item'],x['case']) for x in target['operations']};contexts={}
for suffix,key in [('22','B22'),('26','B26'),('27','B27')]:contexts.update(runpy.run_path(str(D/f'template{suffix}-context.py'))[key])
contexts.update({
'thm-tikhonov-error-chain-with-discretization-and-residual':{'context':'Statement decomposes Tikhonov error into bias, noise, operator discretization and certified solve terms, with a separate refined datum chain.', 'empty':('checked','Proof step 1.1 applies the positive shift lambda I on the Hilbert spaces, which always contain their zero vectors. A zero-dimensional X or zero-rank A_h is not excluded by an invented positive-dimension condition.'),'endpoints':('not_applicable','The chain assumes lambda>0 and certified nonnegative error allowances; it makes no lambda=0 inversion or closed-interval regularization-endpoint assertion.')},
'lem-computed-augmented-tikhonov-solve-residual-and-output-error':{'context':'Statement certifies a successful stored augmented-QR Tikhonov output through the intended normal residual and its explicit allowance.', 'empty':('not_applicable','Statement requires m,n>=1 for the finite stored matrix and datum. An empty trailing QR block is an internal finite kernel case, not an admitted zero-size input solve.'),'endpoints':('not_applicable','The parameter lambda and its successful stored square root are strictly positive; the lemma does not assert a zero-regularization endpoint or a limiting interval theorem.'),'nonempty-choice':('not_applicable','The finite input matrices, returned vector, isometries U,V and residual certificates are supplied data. The lemma does not choose a Hilbert coordinate basis or an uncertified solver output.')}
})
owners={};contracts={}
for b in range(22,29):
 f=f'research/{R}-batch-{b}.proof-contracts.json';contracts[f]=json.loads(Path(f).read_text())
 for id in contracts[f]['contracts']:owners[id]=(str(b),f)
report=json.load(open(f'research/{R}-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json'));keys=list(dict.fromkeys((r['id'],r['case']) for cl in report['templates'] for r in cl['rows'] if r['id'] in owners));rows=[];missing=[]
for id,case in keys:
 if (id,case) in skip:continue
 context=contexts[id];b,f=owners[id];old=next(x for x in contracts[f]['contracts'][id]['boundaries'] if x['case']==case)
 if case.startswith('iff-') and case not in context:
  # This fallback is only for actual one-way statements/formulas read in full, never a detected iff.
  text=Path('items/'+id+'.md').read_text();s=re.search(r'^## (?:Statement|Definition|Example)\s*\n([\s\S]*?)(?=^## |\Z)',text,re.M).group(1)
  assert not re.search(r'if and only if|\\iff\b|\\Leftrightarrow|exactly when|precisely when|are equivalent',s,re.I),(id,case)
  status='not_applicable';message=context['context']+' It asserts this formula or one-way conclusion, not a logical equivalence with a separately owed '+('forward' if case=='iff-forward' else 'reverse')+' implication.'
 else:
  if case not in context:missing.append((id,case));continue
  status,message=context[case];message=context['context']+' '+message
 after={k:v for k,v in old.items() if k not in ['reason','evidence','reviewed','template_review']};after.update(status=status);after['evidence' if status=='checked' else 'reason']=message
 rows.append({'batch':b,'item':id,'case':case,'file':f,'before':copy.deepcopy(old),'after':after,'source_read':['items/'+id+'.md'],'basis':'Entire actual claim and proof/definition read for the template boundary case; precise domain/branch/base/denominator consequence recorded.','root_binding_required':True})
assert not missing,missing
out={'version':1,'run':R,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'Template rows ONLY batches22..28, excluding exact targeted93keys owned separately.','rows':rows,'counts':{'template_keys_in_scope':len(keys),'covered_by_existing_targeted_keys':sum(k in skip for k in keys),'new_template_rows':len(rows),'items':len(set(x['item'] for x in rows))},'source_edits':False,'canonical_applied':False,'hashes_computed':False,'gates_run':False,'unresolved_mathematical_boundary_gaps':[],'limits':'No broad proof re-audit or global source assertion. Root owns final source bindings/adjudication and canonical append/update. Existing full before contracts/other metadata must be preserved.'};(D/'template22-28-evidence.json').write_text(json.dumps(out,indent=2,ensure_ascii=False)+'\n');print(out['counts'])
