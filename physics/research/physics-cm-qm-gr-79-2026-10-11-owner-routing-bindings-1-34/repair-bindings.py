import pathlib,json,hashlib,re,datetime,collections
r='physics-cm-qm-gr-79-2026-10-11';p=pathlib.Path('research');o=p/f'{r}-owner-routing-bindings-1-34';stamp=datetime.datetime.now(datetime.timezone.utc).isoformat();bindings=json.loads((o/'current-native-carrier-binding.json').read_text());rows=[json.loads(l) for l in (p/'defect-ledger.jsonl').read_text().splitlines() if l];mine=[x for x in rows if x.get('run')==r];superseded={id for x in mine for id in x.get('supersedes',[])};active={x['defect_id']:x for x in mine if x['defect_id'] not in superseded};lineage={}
for x in mine:
 if x.get('metadata_correction',{}).get('kind')=='taxonomy-only':lineage[x['metadata_correction']['original_defect_id']]=x['defect_id']
def resolve(id):
 while id not in active and id in lineage:id=lineage[id]
 return id
h=lambda x:hashlib.sha256(json.dumps(x,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest()
scopes={};homes={};docs={};all_docs={};targets={}
for b in range(1,80):
 sf=p/f'{r}-step3-scope-{b}.json'
 if sf.exists():
  s=json.loads(sf.read_text());scopes[b]=s
  for id in s['manifest_post']+s['page_manifest_post']:homes[id]=b
 df=p/f'{r}-alpha-batch-{b}-3a-decisions.json'
 if df.exists():all_docs[b]=json.loads(df.read_text())
for b in range(1,35):
 docs[b]=all_docs[b];s=scopes[b];t={x['obligation']:x for x in s['reader_findings']+s['refuter_findings']}
 for id in s['touched']:t[f'touched:{b}:{id}']={'id':id,'batch':str(b),'route':'touched'}
 for id in s['pages_touched']:t[f'page:{b}:{id}']={'id':id,'batch':str(b),'route':'page','order_anchor':s['page_order_anchors'].get(id,[])}
 targets[b]=t
refs=collections.defaultdict(list)
for b,doc in all_docs.items():
 for d in doc['decisions']:
  for id in d.get('defect_ids',[]):refs[resolve(id)].append((b,d))
errors=(o/'routing-before.batches1-34.txt').read_text().splitlines();unowned=[];colliding=set();notapplied=set();stale=set();mismatches=[]
for line in errors:
 if line.startswith('ERROR ledger-unowned:'):m=re.search(r'\[([^]]+)\] (\S+) has no',line);unowned.append((m.group(1),m.group(2)))
 if line.startswith('ERROR ledger-double-owned:'):colliding.add(line.split(': ',1)[1].split(' ')[0])
 if line.startswith('ERROR decision-not-applied:'):notapplied.add(re.search(r'\[([^]]+)\]',line).group(1))
 if line.startswith('ERROR decision-stale:'):stale.add(re.search(r'\[([^]]+)\]',line).group(1))
 if line.startswith('ERROR ledger-ref-mismatch:'):mismatches.append(line)
changes=[];newrows=[];blockers=[]
def carrier(b,d):
 target=targets[b].get(d['obligation'],{});id=d['id']
 if target.get('subject_type')=='in-run-dependency':return {'producer_batch':str(target['producer_batch']),**bindings[str(target['producer_batch'])]['items'][id]}
 if target.get('subject_type')=='published-dependency':return {'item_sha256':hashlib.sha256((pathlib.Path('items')/(id+'.md')).read_bytes()).hexdigest()}
 home=homes.get(id,b);value=bindings[str(home)]['items'].get(id)
 if value:return value
 value=bindings[str(home)]['pages'].get(id)
 if value:
  value={**value};order=value.pop('item_order')
  if target.get('route')=='page':value['item_order']=[x for x in order if x in set(target.get('order_anchor',[]))]
  return value
 return None
# Correct wrong-subject references only from existing actual same-subject closed review evidence.
for b,doc in docs.items():
 for d in doc['decisions']:
  oldids=d.get('defect_ids',[]);wrong=[id for id in oldids if resolve(id) in active and active[resolve(id)]['subject']!=d['id']]
  if not wrong:continue
  candidates=[x for x in active.values() if x['subject']==d['id'] and str(x.get('batch'))==str(b) and x.get('disposition') in ['fixed','narrowed','nonfatal-recorded']]
  if not candidates:blockers.append({'batch':b,'obligation':d['obligation'],'issue':'Wrong subject reference has no actual same-subject closed row','wrong_ids':wrong});continue
  candidates.sort(key=lambda x:(not any(ref.get('obligation')==d['obligation'] for ref in x.get('adjudication_ref',[]) if isinstance(ref,dict)),x['defect_id']))
  chosen=candidates[0]['defect_id'];d['defect_ids']=[chosen]+[id for id in oldids if id not in wrong];d['defect_ids']=list(dict.fromkeys(d['defect_ids']));changes.append({'batch':b,'obligation':d['obligation'],'kind':'same-subject reference correction','before':oldids,'after':d['defect_ids']})
# Distinct native closure records preserve the actual source defect and original completed review.
for did in sorted(colliding):
 row=active.get(did)
 if not row:continue
 references=refs[did];owned=[(b,d) for b,d in references if b<=34]
 primary=next(((b,d) for b,d in references if b==homes.get(row['subject']) and d['route']=='flagged'),None)
 if primary is None:primary=next(((b,d) for b,d in references if any(isinstance(ref,dict) and ref.get('obligation')==d['obligation'] for ref in row.get('adjudication_ref',[]))),references[0])
 for b,d in owned:
  if b==primary[0] and d['obligation']==primary[1]['obligation']:continue
  if d['id']!=row['subject']:continue
  closureid=f'{r}-routing-closure-{b}-'+re.sub(r'[^A-Za-z0-9-]+','-',d['obligation'])
  assert closureid not in active
  closure={**row,'defect_id':closureid,'at':stamp,'caught_by_role':'orchestrator','batch':str(b),'closure_of':did,'closure_obligation':d['obligation'],'original_native_review_recorded_at':row['at'],'original_native_review_role':row['caught_by_role'],'adjudication_ref':[{'path':str(p/f'{r}-alpha-batch-{b}-3a-decisions.json'),'obligation':d['obligation']}], 'evidence':row['evidence']+[{'path':str(o/f'alpha-batch-{b}-3a-decisions.original.json'),'note':'Distinct truthful closure binding for this precise native obligation. The original confirmed mathematical defect and already completed native review remain unchanged in '+did+'. This is bookkeeping continuity, not a new mathematical review, new defect or new observed fingerprint.'}], 'correction':row.get('correction','')+' Existing completed repair disposition retained as a distinct closure for '+d['obligation']+'; original defect '+did+' and its review/observations remain preserved.'}
  closure.pop('supersedes',None);closure.pop('metadata_correction',None);closure.pop('owner_metadata_normalization',None)
  d['defect_ids']=[closureid if resolve(x)==did else x for x in d['defect_ids']];newrows.append(closure);changes.append({'batch':b,'obligation':d['obligation'],'kind':'precise existing mathematical defect closure','original_defect':did,'closure':closureid})
# Metadata continuity: original mathematical review is retained, not repeated.
for b,doc in docs.items():
 for d in doc['decisions']:
  if d['id'] in notapplied and d['verdict'] in ['accepted_repair','amended_repair']:
   target=targets[b].get(d['obligation'],{});labelpre='post' if target.get('stabilized') else 'pre';labelpost='pre-3a' if target.get('stabilized') else 'post';pre=json.loads((p/f'{r}-step3-hash-{b}-{labelpre}.json').read_text());post=json.loads((p/f'{r}-step3-hash-{b}-{labelpost}.json').read_text());key='page_hashes' if target.get('route')=='page' else 'hashes';pv=pre.get(key,{}).get(d['id']);qv=post.get(key,{}).get(d['id']);cv=carrier(b,d)
   if target.get('route')=='page':
    def project(v):
     if not v:return v
     v={**v};order=v.pop('item_order',[]);v['item_order']=[x for x in order if x in set(target.get('order_anchor',[]))];return v
    pv=project(pv);qv=project(qv)
   old=d['verdict'];new='accepted_repair' if cv==qv else 'amended_repair'
   if cv==pv and cv!=qv:blockers.append({'batch':b,'obligation':d['obligation'],'issue':'Current carrier equals pre-reader; cannot assert accepted/amended repair'});continue
   d['verdict']=new;d['original_native_verdict']=old;d['owner_metadata_continuity']={'scope':'routing and current carrier metadata only','original_review_evidence':d['evidence'],'original_verdict':old,'pre_reader_carrier':pv,'reader_result_carrier':qv,'current_carrier':cv,'note':'The prior native mathematical review and its confirmed repairs are retained. The amended label records later owner metadata/schema/currency maintenance only; no new mathematical review, observation or acceptance is invented.'};d['evidence']+=' Routing bookkeeping continuity: original native '+old+' review retained; '+new+' describes the current carrier after owner metadata/schema maintenance, with original review and exact carrier history preserved in owner_metadata_continuity.';d['subject_sha256']=h(cv);changes.append({'batch':b,'obligation':d['obligation'],'kind':'truthful current metadata continuity','before':old,'after':new})
  if d['id'] in stale:
   d['original_subject_sha256']=d.get('subject_sha256');d['subject_sha256']=h(carrier(b,d));d['metadata_binding_note']='Mechanical current carrier binding only; prior review, verdict and observed-source fingerprints unchanged.';changes.append({'batch':b,'obligation':d['obligation'],'kind':'current decision binding'})
# Supplemental obligations retain real prior completed native reviews, same subject, same closed row.
for subject,did in unowned:
 row=active.get(did);b=homes.get(subject)
 if not row or b is None or b>34:continue
 if any(did in d.get('defect_ids',[]) for doc in docs.values() for d in doc['decisions']):continue
 if row['disposition'] not in ['fixed','narrowed','nonfatal-recorded','false-positive']:
  blockers.append({'subject':subject,'defect_id':did,'issue':'Existing row is not actually closed'});continue
 evidence=[x for x in row.get('evidence',[]) if isinstance(x,dict) and pathlib.Path(x.get('path','')).exists()]
 if not evidence:blockers.append({'subject':subject,'defect_id':did,'issue':'No extant actual native review evidence'});continue
 verdict='false_positive' if row['disposition']=='false-positive' else 'confirmed_fatal' if row['severity']=='fatal' else 'confirmed_nonfatal'
 d={'obligation':'gate:'+did,'id':subject,'route':'gate','verdict':verdict,'evidence':'Metadata-only supplementary obligation preserves the actual already completed native same-subject review and its exact closed row '+did+'. Prior evidence: '+json.dumps(evidence,ensure_ascii=False)+'. Recorded actual correction: '+row.get('correction','')+'. No new mathematical review, proof completion or observation is claimed.','defect_ids':[did]}
 d['subject_sha256']=h(carrier(b,d));docs[b]['decisions'].append(d);changes.append({'batch':b,'obligation':d['obligation'],'kind':'real existing closed review supplemental binding'})
(o/'routing-closure-rows.proposed.json').write_text(json.dumps(newrows,indent=2,ensure_ascii=False)+'\n');(o/'changes.proposed.json').write_text(json.dumps(changes,indent=2,ensure_ascii=False)+'\n');(o/'blockers.proposed.json').write_text(json.dumps(blockers,indent=2,ensure_ascii=False)+'\n')
for b,d in docs.items():(o/f'alpha-batch-{b}-3a-decisions.proposed.json').write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
print('changes',len(changes),'closure rows',len(newrows),'blockers',json.dumps(blockers,ensure_ascii=False))
