"""Exact owner placement repair; scientific source bytes stay unchanged."""
import pathlib,json,hashlib,datetime,re,copy
run='physics-non-fluid-129-2026-10-21-r2'
root=pathlib.Path('.')
read=lambda p:json.loads(pathlib.Path(p).read_text())
sha=lambda b:hashlib.sha256(b).hexdigest()
assert not pathlib.Path('.physics-autopilot/'+run+'/controller.lock').exists()
assert all(x.get('endedAt') for x in read('.physics-autopilot/'+run+'/state.json')['dispatches'].values())
report=read('research/'+run+'-owner-cw-placement/report.json')
out=pathlib.Path('research/'+run+'-owner-cw-placement/application');out.mkdir()
pending={};original={}
def load(p):
 p=str(p)
 if p not in original:original[p]=pathlib.Path(p).read_bytes()
 return json.loads(original[p])
def put(p,d):pending[str(p)]=(json.dumps(d,indent=2,ensure_ascii=False)+'\n').encode()
def field(text,k,values):
 replacement=k+':\n'+''.join('  - '+v+'\n' for v in values) if values else k+': []\n'
 pattern=r'^'+re.escape(k)+r':[^\n]*\n(?:[ \t]+[^\n]*\n)*'
 assert len(re.findall(pattern,text,re.M))==1,k
 return re.sub(pattern,lambda m:replacement,text,count=1,flags=re.M)
id=report['rehome']['id'];gr_id=report['rehome']['to_page'];qft_id=report['rehome']['from_page']
paths={b:f'research/{run}-batch-{b}.pages.json' for b in [42,78]}
man={b:load(p) for b,p in paths.items()}
gr=next(p for p in man[42] if p['id']==gr_id);qft=next(p for p in man[78] if p['id']==qft_id)
item=next(i for i in qft['items'] if i['id']==id)
assert not any(i['id']==id for i in gr['items'])
qft['items']=[i for i in qft['items'] if i['id']!=id];gr['items'].insert(0,item)
gr['requires']=report['page_requirements']['GR_A'];qft['requires']=report['page_requirements']['QFT_A']
for b in man:put(paths[b],man[b])
planpath='research/plan-spec.json';plan=load(planpath)
for p in plan['pages']:
 if p['id'] in [gr_id,qft_id]:
  p['requires']=(gr if p['id']==gr_id else qft)['requires']
  if p.get('items'):
   p['items']=[i for i in p['items'] if i['id']!=id]
   if p['id']==gr_id:p['items'].insert(0,item)
for p in report['add_existing_published_P_wrappers']:
 if not any(z['id']==p['id'] for z in plan['pages']):plan['pages'].append({k:v for k,v in p.items() if k not in ['source_status','source_path']})
put(planpath,plan)
for p in [gr,qft]:
 path=f"library/{p['category']}/{p['id']}.md";original[path]=pathlib.Path(path).read_bytes();text=original[path].decode();text=field(field(text,'items',[i['id'] for i in p['items']]),'requires',p['requires']);pending[path]=text.encode()
contracts={b:load(f'research/{run}-batch-{b}.proof-contracts.json') for b in [42,78]}
entry=contracts[78]['contracts'].pop(id);contracts[78]['scope'].remove(id)
assert id not in contracts[42]['contracts'];contracts[42]['contracts'][id]=entry;contracts[42]['scope'].insert(0,id)
for b,d in contracts.items():put(f'research/{run}-batch-{b}.proof-contracts.json',d)
# Retain original source reading/harvest; its existing helper now has an earlier home.
coverage={b:load(f'research/{run}-batch-{b}.coverage.json') for b in [42,78]}
dest=next(p for p in coverage[42]['pages'] if p['page']==gr_id)
for page in coverage[78]['pages']:
 for source in page.get('sources',[]):
  relevant=[copy.deepcopy(c) for c in source.get('contents',[]) if c.get('item')==id]
  if not relevant:continue
  imported=copy.deepcopy(source);imported['contents']=relevant;imported['placement_evidence']=f"Existing native batch78 source-reading evidence retained; unchanged helper rehomed to {gr_id}. No new external reading is asserted by this placement operation."
  dest['sources'].append(imported)
  for c in source['contents']:
   if c.get('item')==id:
    c['placement_history']={'previous_disposition':c['disposition'],'previous_item':id,'owner_report':f'research/{run}-owner-cw-placement/report.json'}
    c['disposition']='deferred';c['destination']=gr_id;c['reason']='The same already-authored unchanged CW supplier is now on the earlier GR page, supporting both thin transport and the finite BF consumers.'
for b,d in coverage.items():put(f'research/{run}-batch-{b}.coverage.json',d)
ledger={b:load(f'research/{run}-batch-{b}.cross-batch-dependencies.json') for b in [42,78]}
retired=[r for r in ledger[42] if r.get('supplier')==id]
ledger[42]=[r for r in ledger[42] if r.get('supplier')!=id]
new=[{'kind':'page','consumer':qft_id,'supplier':gr_id,'status':'verified','evidence':f'Owner reviewed the unchanged finite-CW supplier and all three QFT uses; it now resides before both GR and QFT consumers. Exact placement and actual source-use evidence: research/{run}-owner-cw-placement/report.json.'}]
for consumer in report['direct_consumers']:
 if consumer=='prop-gr-fx-thin-transport-invariance':continue
 if isinstance(consumer,dict):consumer=consumer['id']
 new.append({'kind':'item','consumer':consumer,'supplier':id,'status':'verified','evidence':f'Same owner read the exact unchanged CW Statement/entire proof and this actual consumer. Finite connected CW graph generators, attaching face relators and normal-closure quotient apply as recorded in research/{run}-owner-cw-placement/report.json; only the supplier home changes, no theorem acceptance is asserted.'})
for row in new:
 assert not any(all(x.get(k)==row[k] for k in ['kind','consumer','supplier']) for x in ledger[78])
 ledger[78].append(row)
for b,d in ledger.items():put(f'research/{run}-batch-{b}.cross-batch-dependencies.json',d)
changes=[]
for p,b in pending.items():
 assert pathlib.Path(p).read_bytes()==original[p],p
 archive=out/'before'/p;archive.parent.mkdir(parents=True,exist_ok=True);archive.write_bytes(original[p]);changes.append({'path':p,'before_sha256':sha(original[p]),'after_sha256':sha(b)})
for p,b in pending.items():pathlib.Path(p).write_bytes(b)
(out/'receipt.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'source_body_changed':False,'changes':changes,'retired_now_intrabatch_reviews':retired,'item':id,'from':qft_id,'to':gr_id},indent=2)+'\n')
print(json.dumps({'files':len(changes),'source_unchanged':True,'helper_home':gr_id,'new_QFT_ledger_rows':len(new)}))
