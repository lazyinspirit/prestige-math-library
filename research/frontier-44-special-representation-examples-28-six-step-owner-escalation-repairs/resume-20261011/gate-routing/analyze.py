import pathlib,json,hashlib,collections,re
R=pathlib.Path('.');run='frontier-44-special-representation-examples-28-six-step';research=R/'research';B=research/f'{run}-owner-escalation-repairs/resume-20261011/gate-routing'
H=lambda x:hashlib.sha256((json.dumps(x,sort_keys=True,ensure_ascii=False,separators=(',',':'))).encode()).hexdigest();raw=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();read=lambda p:json.loads(p.read_text());live={};owners={};pages={}
for p in research.glob(run+'-batch-*.pages.json'):
 batch=re.search(r'batch-(\d+)',p.name)[1];live[batch]={'items':{},'pages':{}};co=read(research/f'{run}-batch-{batch}.proof-contracts.json')['contracts']
 for page in read(p):
  fields={k:v for k,v in page.items() if k!='items'};live[batch]['pages'][page['id']]={'file_sha256':raw(R/'library'/page['category']/(page['id']+'.md')),'manifest_sha256':H(fields),'item_order':[i['id'] for i in page['items']]};pages[page['id']]=batch
  for i in page['items']:
   owners[i['id']]=batch;live[batch]['items'][i['id']]={'item_sha256':raw(R/'items'/(i['id']+'.md')),'contract_sha256':H(co.get(i['id'])),'manifest_sha256':H({**i,'__step4_page_id':page['id']})}
rows=[]
for p in research.glob(run+'-alpha-*-3a-decisions.json'):
 doc=read(p)
 for d in doc['decisions']:
  t=d.get('target',{});batch=str(t.get('batch') or owners.get(d['id']) or pages.get(d['id']));kind='page' if t.get('route')=='page' or d['id'] in pages else 'item';cur=None
  if t.get('subject_type')=='in-run-dependency':cur=live[str(t['producer_batch'])]['items'].get(d['id'])
  elif t.get('subject_type')=='published-dependency':cur={'item_sha256':raw(R/'items'/(d['id']+'.md'))}
  else:cur=live.get(batch,{}).get(kind+'s',{}).get(d['id'])
  def carrier(v):
   if not v or kind!='page':return v
   v=dict(v);order=v.pop('item_order',[])
   if t.get('order_anchor') is not None:v['item_order']=[i for i in order if i in t['order_anchor']]
   return v
  cur=carrier(cur);before=after=None
  if t.get('route') in ['page','touched']:
   p1='post' if t.get('stabilized') else 'pre';p2='pre-3a' if t.get('stabilized') else 'post';key='page_hashes' if kind=='page' else 'hashes';before=carrier(read(research/f'{run}-step3-hash-{batch}-{p1}.json')[key].get(d['id']));after=carrier(read(research/f'{run}-step3-hash-{batch}-{p2}.json')[key].get(d['id']))
  rows.append({'decision_file':str(p),'obligation':d['obligation'],'id':d['id'],'batch':batch,'kind':kind,'verdict':d['verdict'],'decision':d,'before':before,'reader_result':after,'current':cur,'stale':H(cur)!=d.get('subject_sha256'),'same_current_reader_source':bool(cur and after and cur.get('item_sha256',cur.get('file_sha256'))==after.get('item_sha256',after.get('file_sha256'))),'current_equals_pre':cur==before,'current_equals_post':cur==after})
(B/'decision-carrier-inventory.json').write_text(json.dumps({'run':run,'rows':rows},indent=2)+'\n');print('stale',sum(r['stale'] for r in rows));print('accepted mismatches',collections.Counter((r['kind'],r['same_current_reader_source']) for r in rows if r['verdict']=='accepted_repair' and not r['current_equals_post']));print('amended equals',[(r['obligation'],r['current_equals_pre'],r['current_equals_post']) for r in rows if r['verdict']=='amended_repair' and (r['current_equals_pre'] or r['current_equals_post'])]);print('confirmed unchanged',[(r['obligation'],r['id']) for r in rows if r['decision'].get('target',{}).get('observed_sha256')==H(r['current']) and r['verdict'].startswith('confirmed')])
