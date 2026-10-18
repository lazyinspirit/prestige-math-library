from pathlib import Path
import json,copy,hashlib,subprocess
R='non-ml-math-remaining-81-2026-10-18'; root=Path.cwd(); out=root/f'research/{R}-owner-final-coverage-preparation/algebra-proposals'; before=out/'before'; before.mkdir(exist_ok=True)
H=lambda b:hashlib.sha256(b).hexdigest()
read=lambda p:json.loads((root/p).read_text())
write=lambda p,d:p.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
kinds={'research article':'paper','full lecture-note book':'lecture-notes','full lecture-note book':'lecture-notes','full lecture notes':'lecture-notes','full-text book':'monograph','full research article':'paper'}
recs=[]
for batch in [3,40,41,42,69]:
 stem=f'{R}-batch-{batch}'; originals={}
 for ext in ['coverage.json','source-coverage.json','notes.md','pages.json']:
  p=root/'research'/f'{stem}.{ext}'
  if p.exists():
   (before/p.name).write_bytes(p.read_bytes()); originals[ext]=p
 cov=read(f'research/{stem}.coverage.json'); manifest=read(f'research/{stem}.pages.json'); source=read(f'research/{stem}.source-coverage.json') if 'source-coverage.json' in originals else None
 # Preserve exact current manifest alongside isolated proposals so structural
 # checker cross-checks genuine IDs instead of accepting a manifest-free file.
 (out/f'{stem}.pages.json').write_bytes(originals['pages.json'].read_bytes())
 reasons=[]
 if batch==3:
  for pg in cov['pages']:
   for s in pg.get('sources',[]):
    for row in s.get('contents',[]):
     if row.get('disposition')=='owner-escalation':
      assert row['item'] in ['fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions','cex-a-c1-map-whose-critical-values-have-positive-measure']
      row['disposition_history']=[{'disposition':row['disposition'],'reason':row.get('reason'),'evidence':f'research/{stem}.notes.md'}]
      row['disposition']='included'
      row['reason']='The historical missing local refutation/counterexample was supplied by the accepted focused Sard repair. The current carrier consumes the proved A-page Cantor-sum witness; this reclassification adds no external-source reading or native audit coverage.'
      row['owner_repair_evidence']=f'research/{R}-owner-sard-completion/source-review.md'
  reasons.append('Five owner-escalation rows become included only for the two exact repaired, still-manifested published carriers. Original dispositions and reasons retained verbatim in disposition_history; source headings/locators unchanged.')
 if batch==42:
  for s in cov['pages'][0]['sources']:
   detailed=next(x for x in source['pages'][0]['sources'] if x['url']==s['url'])
   for k,v in detailed.items():
    if k not in s:s[k]=copy.deepcopy(v)
  cov['retrieval_history']=copy.deepcopy(source['retrieval_history'])
  reasons.append('Canonical source stubs enriched only from matching-URL sibling source-coverage records: original stub fields retained, full original harvest/read evidence/fetch/recovery copied, failed Gerstenhaber retrieval history retained.')
 for doc in [cov,source]:
  if doc is None:continue
  for pg in doc['pages']:
   for s in pg.get('sources',[]):
    if s.get('kind') in kinds:s['kind']=kinds[s['kind']]
    if batch==41:
     s['kind']='reference-work' if 'Stacks Project' in s['title'] else 'lecture-notes'
    for row in s.get('contents',[]):
     if not row.get('name'):
      assert row.get('locator');row['name']=row['locator']
 if batch==41:
  reasons.append('Source kind supplied as reference-work for Stacks and lecture-notes for Keller. Keller retained full text abstract and §1.1 explicitly identify expanded minicourse lecture notes. Each missing name is copied byte-for-byte from its existing locator, never from an invented heading.')
 if batch==42:
  reasons.append('Missing source harvest names copied exactly from already recorded per-result locators; kind vocabulary normalized to lecture-notes/monograph/paper. No additional source section or reading extent claimed.')
 if batch==40:reasons.append('Three nonstandard full-lecture kind strings normalized to lecture-notes; original source identities, read evidence and all retrieval/fetch histories retained.')
 if batch==3:reasons.append('research article kind normalized to paper; nothing else about the source identity or reading changes.')
 if batch in [40,41,42,69]:
  A,B=cov['pages'];assert A['sources'] and not B['sources']
  B['sources']=copy.deepcopy(A['sources'])
  for s in B['sources']:
   s['inherited_context']={'page':A['page'],'coverage_file':f'research/{stem}.coverage.json','attribution':'Existing A-page source-reading and fetch history inherited as definition/convention context for the companion. No separate B-page external reading or source proof of its locally verified examples is claimed.'}
  B['source_context']='Inherited A-page full-text definition/convention context only; each B example/counterexample is proved in its own local carrier. Original A reading/fetch attribution is retained, not new B source-reading evidence.'
  if batch==42:
   assert not B['canonical'];B['canonical']=[]
   for row in B['examples']:
    named=copy.deepcopy(row);named['name']=next(x['title'] for x in manifest[1]['items'] if x['id']==row['item']);B['canonical'].append(named)
  if batch==69:
   B['canonical']=[{'name':x['title'],'item':x['id'],'disposition':'included','reason':'The companion local carrier verifies this finite model directly; inherited external sources supply only the recorded quasi/weak conventions and general construction context.'} for x in manifest[1]['items']]
  reasons.append('Explicit companion source context materializes existing A-to-B definition/convention inheritance with original complete source records and attribution. It does not assert a new reading or that the sources prove the exact local examples.')
  if batch==42:reasons.append('Existing examples rows retained and additionally exposed in the checker-recognized canonical field; names are exact current manifest titles, not source headings.')
  if batch==69:reasons.append('B canonical rows name exactly its three current manifest items and titles; all were already named in A source dispositions or explained in the native notes as local examples. Historical weak-unit proof-limit reasons remain unchanged; accepted later repair is separately documented in notes/source-review.')
  if source:
   # Preserve narrower source-coverage scope: no artificial B source-reading page.
   reasons.append('Sibling source-coverage retains its original A-only page inventory and original reading/fetch history; companion inheritance is represented only in coverage.json.')
 def delta(a,b,path=''):
  rows=[]
  if type(a)!=type(b):return [{'pointer':path,'before':a,'after':b}]
  if isinstance(a,dict):
   for k in sorted(a.keys()|b.keys()):
    ptr=path+'/'+k.replace('~','~0').replace('/','~1')
    if k not in a:rows.append({'pointer':ptr,'added':b[k]})
    elif k not in b:rows.append({'pointer':ptr,'removed':a[k]})
    else:rows+=delta(a[k],b[k],ptr)
  elif isinstance(a,list):
   if len(a)!=len(b):rows.append({'pointer':path,'before':a,'after':b})
   else:
    for i,(x,y) in enumerate(zip(a,b)):rows+=delta(x,y,path+'/'+str(i))
  elif a!=b:rows.append({'pointer':path,'before':a,'after':b})
  return rows
 changes=[]
 for ext,doc in [('coverage.json',cov),('source-coverage.json',source)]:
  if doc is None:continue
  orig=json.loads(originals[ext].read_text());ds=delta(orig,doc)
  if ds:
   name=f'{stem}.{ext}';write(out/name,doc); changes.append({'canonical_path':'research/'+name,'original_sha256':H(originals[ext].read_bytes()),'proposal_path':str((out/name).relative_to(root)),'proposal_sha256':H((out/name).read_bytes()),'delta':ds})
 write(out/f'batch-{batch}-delta.json',{'batch':batch,'notes':reasons,'files':changes,'new_external_reading':False,'new_native_audit_or_execution_coverage':False})
 # Only a structural check of isolated proposals and retained manifest; no native gates/readiness/runtime.
 r=subprocess.run(['node','tools/coverage-checklist.mjs',str(out/f'{stem}.coverage.json'),'--require-destination','--json'],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
 (out/f'batch-{batch}-structural-check.json').write_bytes(r.stdout)
 recs.append({'batch':batch,'structural_exit':r.returncode,'summary':json.loads(r.stdout)['summary'],'notes':reasons,'files':[{k:v for k,v in x.items() if k!='delta'} for x in changes]})
write(out/'proposal-index.json',{'run':R,'scope':'isolated source-coverage reconciliation proposals; no canonical integration','batches':recs})
print(json.dumps([(x['batch'],x['summary']) for x in recs],indent=2))
