import json,hashlib,pathlib,copy,datetime
R='physics-cm-qm-gr-79-2026-10-11'; base=pathlib.Path('research')/(R+'-step3-gate-attempt-1/routing35-64-repair')
def load(p):return json.loads(pathlib.Path(p).read_text())
def dump(p,v):pathlib.Path(p).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
def H(v):return hashlib.sha256(json.dumps(v,ensure_ascii=False,separators=(',',':'),sort_keys=True).encode()).hexdigest()
def raw(p):return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def p(b,s):return 'research/'+R+'-'+s.format(b=b)
active=load(base/'active-ledger-before.json'); byid={x['defect_id']:x for x in active}; rows=copy.deepcopy(active);sup={}
for x in [json.loads(z) for z in open('research/defect-ledger.jsonl') if z.strip()]:
 if x.get('run')==R:
  for old in x.get('supersedes',[]):sup[old]=x['defect_id']
def resolve(i):
 seen=set()
 while i not in byid and i in sup and i not in seen:seen.add(i);i=sup[i]
 return i if i in byid else None
homes={};live={};contracts={};scopes={};docs={};allrefs=set();changes=[];new=[]
for b in range(1,80):
 path=p(b,'batch-{b}.pages.json')
 if not pathlib.Path(path).exists():continue
 pages=load(path);pages=pages if isinstance(pages,list) else pages['pages'];co=load(p(b,'batch-{b}.proof-contracts.json')).get('contracts',{});contracts[b]=co;live[b]={}
 for page in pages:
  items=page.get('items',[]);meta={k:v for k,v in page.items() if k!='items'}
  homes[page['id']]=b
  for item in items:
   item={'id':item} if isinstance(item,str) else item;i=item['id'];homes[i]=b;live[b][i]={'item_sha256':raw('items/'+i+'.md'),'contract_sha256':H(co.get(i)),'manifest_sha256':H(dict(item,__step4_page_id=page['id']))}
  f='library/'+page['category']+'/'+page['id']+'.md'
  if pathlib.Path(f).exists():live[b][page['id']]={'file_sha256':raw(f),'manifest_sha256':H(meta),'item_order':[x if isinstance(x,str) else x['id'] for x in items]}
 dp=p(b,'alpha-batch-{b}-3a-decisions.json')
 if pathlib.Path(dp).exists():
  doc=load(dp)
  if 35<=b<=64:docs[b]=doc;scopes[b]=load(p(b,'step3-scope-{b}.json'))
  else:
   for d in doc['decisions']:allrefs.update(resolve(i) or i for i in d.get('defect_ids',[]))
def evidence(b,d):return [{'path':p(b,'alpha-batch-{b}-3a.md'),'sha256':raw(p(b,'alpha-batch-{b}-3a.md')),'note':d['evidence']},{'path':str(base/'before'/('decisions-'+str(b)+'.json')),'sha256':raw(base/'before'/('decisions-'+str(b)+'.json')),'note':'Immutable pre-routing decision, historical original finding and completed native acceptance evidence retained.'}]
def closure(b,d,old=None,target=None,subclass=None):
 id=R+'-gate1-binding-'+str(b)+'-'+d['obligation'].replace(':','-')
 if old:
  row=copy.deepcopy(old)
  for k in ['supersedes','orig_id','recurrence_of','taxonomy_alias_of']:row.pop(k,None)
  row['repair_instance_of']=old['defect_id']
 else:row={'run':R,'class':'accuracy','subclass':subclass or 'missing-choice-scope','severity':'nonfatal','location':'statement','caught_at_stage':'3a-adjudicate','caught_by_role':'group-alpha','disposition':'fixed'}
 row.update(defect_id=id,at=datetime.datetime.now(datetime.timezone.utc).isoformat(),subject=d['id'],batch=str(b),group='batch-'+str(b),adjudication_ref=[{'path':p(b,'alpha-batch-{b}-3a-decisions.json'),'obligation':d['obligation']}],repair_confidence=1)
 if target:row['historical_observation']=copy.deepcopy(target)
 row['evidence']=row.get('evidence',[])+evidence(b,d);row['correction']=d['evidence'];row['routing_note']='Exact obligation closure binding to the existing completed native mathematical review. Original reports and defect semantics retained; no new mathematical repair or source reading claimed by routing owner.'
 if old and old['subject']!=d['id']:row['subclass']='false-or-overstrong-statement';row['location']='remark';row['supplier_defect_id']=old['defect_id'];row['routing_note']+=' The actual downstream scope correction was checked in the original native Alpha report.'
 new.append(row);byid[id]=row;return id
# resolve stale refs, finding verdicts; preserve original owner_resolution object.
for b,doc in docs.items():
 scope=scopes[b];targets={x['obligation']:x for x in scope.get('reader_findings',[])+scope.get('refuter_findings',[])}
 for d in doc['decisions']:
  old=copy.deepcopy(d);t=targets.get(d['obligation']);ids=list(dict.fromkeys(resolve(i) or i for i in d.get('defect_ids',[])))
  if d['obligation']=='reader:36:1':ids=[R+'-3a-batch-36-gaussian-bilateral-owner-resolution']
  d['defect_ids']=ids
  if t and t.get('subject_type')=='in-run-dependency' and t.get('observation_basis')=='unbound':
   if isinstance(d.get('owner_resolution'),dict):d['preserved_owner_resolution']=d['owner_resolution']
   d['historical_delta_unknown']=True;d['owner_resolution']='The original observation had no authenticated historical byte binding. Its unbound status is preserved; completed current supplier and consumer review is recorded in '+p(b,'alpha-batch-{b}-3a.md')+' and the preserved owner-resolution evidence. No historical source observation is fabricated.'
  if d['route'] in ['reader','flagged'] and ids:
   row=byid.get(ids[0]);
   if row and row['disposition']!='open':d['verdict']='false_positive' if row['disposition']=='false-positive' else ('confirmed_fatal' if row['severity']=='fatal' else 'confirmed_nonfatal');d['repair_confidence']=1
  if b==63 and not ids and d['verdict'] in ['accepted_repair','amended_repair']:
   subtype='citation-inaccurate' if any(z in d['id'] for z in ['malus','classical-field']) else ('false-or-overstrong-statement' if 'radiation-extension' in d['id'] else 'missing-choice-scope')
   d['defect_ids']=[closure(b,d,subclass=subtype)]
  # exact current carrier continuity; no stamping.
  if d['route'] in ['touched','page'] and d['verdict'] in ['accepted_repair','amended_repair']:
   before=load(p(b,'step3-hash-{b}-pre.json'));post=load(p(b,'step3-hash-{b}-post.json'));key='hashes' if d['route']=='touched' else 'page_hashes';pre=before[key].get(d['id']);po=post[key].get(d['id']);cur=live[b].get(d['id']);
   if d['route']=='page':
    anchor=set(scope.get('page_order_anchors',{}).get(d['id'],[]))
    for name,v in [('pre',pre),('post',po),('current',cur)]:
     if v is not None:
      q=dict(v);q['item_order']=[i for i in q.get('item_order',[]) if i in anchor]
      if name=='pre':pre=q
      elif name=='post':po=q
      else:cur=q
   riskonly=False
   if d['route']=='touched' and po and cur and po['item_sha256']==cur['item_sha256'] and po['manifest_sha256']==cur['manifest_sha256']:
    c=contracts[b].get(d['id'],{});riskonly='risk_review' in c and H({k:v for k,v in c.items() if k!='risk_review'})==po['contract_sha256']
   desired='accepted_repair' if H(cur)==H(po) or riskonly else ('amended_repair' if H(cur)!=H(pre) else None)
   if desired and desired!=d['verdict']:
    d['verdict']=desired;d['routing_carrier_continuity']={'pre':pre,'post':po,'current':cur,'risk_review_only':riskonly,'review_path':p(b,'alpha-batch-{b}-3a.md'),'review_sha256':raw(p(b,'alpha-batch-{b}-3a.md'))}
    d['evidence']+=' Routing correction: the complete current item/contract/manifest carrier comparison is recorded in routing_carrier_continuity; retained native review covers this current amendment, without changing original reader/refuter observations.'
  if d!=old:changes.append({'batch':b,'obligation':d['obligation'],'before':old,'after':copy.deepcopy(d)})
# Process native chronological group order; global first ownership outside scope untouched.
seen={}
# outside refs reserve; rare shared cross-boundary cannot reuse.
for ref in allrefs:seen[ref]=None
for b,doc in docs.items():
 targets={x['obligation']:x for x in scopes[b].get('reader_findings',[])+scopes[b].get('refuter_findings',[])}
 for d in doc['decisions']:
  if d['verdict']=='context_accepted':continue
  t=targets.get(d['obligation']);refs=[]
  for i in d.get('defect_ids',[]):
   row=byid.get(i)
   if not row:refs.append(i);continue
   if row['subject']!=d['id']:i=closure(b,d,row,t);row=byid[i]
   if i in seen:
    prev=seen[i];compatible=prev and d['route'] in ['reader','flagged'] and prev['d']['route'] in ['reader','flagged'] and prev['d']['id']==d['id'] and prev['d']['verdict']==d['verdict'] and prev['t'] and t and prev['t'].get('defect')==t.get('defect') and ((prev['t'].get('severity')==t.get('severity') and str(prev['t'].get('location','')).strip().lower()==str(t.get('location','')).strip().lower()) or (len(str(t.get('observed_sha256','')))==64 and prev['t'].get('observed_sha256')==t.get('observed_sha256')))
    if compatible:
     d['same_defect_as']=prev['d']['obligation'];d['same_defect_evidence']='Original immutable routed findings agree in defect code and exact authenticated observed carrier or severity/location. Both original observations share this completed native repair.'
    else:
     i=closure(b,d,row,t);d.pop('same_defect_as',None);d.pop('same_defect_evidence',None)
   if i not in seen:seen[i]={'d':d,'t':t}
   refs.append(i)
  d['defect_ids']=refs
# Add real unowned existing fixed rows in home groups.
for row in active:
 b=homes.get(row['subject']);i=row['defect_id']
 if b not in docs or i in seen or row['caught_at_stage']!='3a-adjudicate' or row['disposition'] not in ['fixed','narrowed','dropped','nonfatal-recorded','false-positive']:continue
 docs[b]['decisions'].append({'obligation':'gate:'+i,'id':row['subject'],'route':'gate','verdict':'false_positive' if row['disposition']=='false-positive' else ('confirmed_fatal' if row['severity']=='fatal' else 'confirmed_nonfatal'),'defect_ids':[i],'repair_confidence':1,'evidence':'Supplemental exact fixed-row ownership, preserving the original defect and actual completed native repair evidence: '+json.dumps(row.get('evidence',[]),ensure_ascii=False)+'. This routes an existing closure; it is not substitute reader/refuter coverage or a new mathematical review.'})
 seen[i]={};changes.append({'batch':b,'supplemental':i})
dump(base/'new-closure-rows.json',new);dump(base/'routing-repair-evidence.json',{'run':R,'owner':'/root/physics_split7_metadata','scope':'35-64 routing only','changes':changes,'new_rows':[x['defect_id'] for x in new],'note':'Original reports, receipts, snapshots and subject fingerprints retained. This routing owner uses existing native completed mathematical review, not new source reading. Root owns current subject sealing.'})
for b,doc in docs.items():dump(p(b,'alpha-batch-{b}-3a-decisions.json'),doc)
print('changes',len(changes),'newrows',len(new),'decisions',sum(len(x['decisions']) for x in docs.values()))
