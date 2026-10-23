import json,pathlib,copy,datetime,hashlib,re
run='fluid-dynamics-all-47-2026-10-23';base=pathlib.Path('research')/(run+'-owner-construction-gate-repair');out=base/'coverage-integration.json'
if out.exists():raise Exception('Already integrated')
read=lambda p:json.loads(pathlib.Path(p).read_text());docs={};changes=[]
def doc(p):
 if p not in docs:docs[p]=read(p)
 return docs[p]
def parts(ptr):return [x.replace('~1','/').replace('~0','~')for x in ptr.strip('/').split('/')]
def parent(d,ptr):
 ps=parts(ptr);a=d
 for k in ps[:-1]:a=a[int(k)]if isinstance(a,list)else a[k]
 return a,int(ps[-1])if isinstance(a,list)else ps[-1]
def setv(p,ptr,value,before='__unchecked__'):
 a,k=parent(doc(p),ptr);old=a[k]if isinstance(a,list)or k in a else None
 if old==value:return
 if before!='__unchecked__'and old!=before:raise Exception('Preimage mismatch '+p+' '+ptr)
 if str(k)=='kind'and old is not None:a.setdefault('source_form',old)
 if str(k)=='disposition'and old is not None:a.setdefault('original_disposition',old)
 a[k]=copy.deepcopy(value);changes.append({'file':p,'path':ptr,'before':old,'after':value})
def preserve_remove(p,index):
 d=doc(p);row=d['pages'][index];d.setdefault('owner_preserved_companion_entries',[]).append(copy.deepcopy(row));d['pages'].pop(index);changes.append({'file':p,'removed_optional_entry':row['page'],'preserved_intact':'owner_preserved_companion_entries'})
a=read(base/'coverage-completed-review.json')
for x in a['coverage_exact_field_operations']:
 p=x['file'];ptr='/'+x['path']
 if 'new_disposition'in x:
  setv(p,ptr+'/disposition',x['new_disposition'],x['old_disposition']);setv(p,ptr+'/reason',x['new_reason'])
 else:setv(p,ptr,x['new'],x.get('old'))
for x in a['coverage_pair_authority_operations']:
 p=x['file'];d=doc(p);idx=x['remove_page_entry_index']
 if d['pages'][idx]['page']!=x['page_id']:raise Exception('Companion preimage')
 if x.get('preserve_by_move'):
  m=x['preserve_by_move'];a1,k1=parent(d,'/'+m['from']);a2,k2=parent(d,'/'+m['append_to']);old=a1[k1]
  if old!=m['exact_entries']:raise Exception('Move preimage')
  a2.setdefault(k2,[]).extend(copy.deepcopy(old))
 preserve_remove(p,idx)
w=read(base/'balances-weak-review.json')
for x in w['coverage_exact_patches']:setv(x['file'],x['pointer'],x['after'],x['before'])
p=read(base/'phasefield-creeping-review.json')
for f in p['exact_metadata_patches']:
 if not f['file'].endswith('.coverage.json')or'-batch-14.'in f['file']:continue
 for x in f['json_patch']:
  if x['op']=='remove':
   a0,k=parent(doc(f['file']),x['path']);removed=copy.deepcopy(a0[k]);doc(f['file']).setdefault('owner_preserved_companion_entries',[]).append(removed);a0.pop(k);changes.append({'file':f['file'],'path':x['path'],'removed_and_preserved':removed.get('page')})
  else:setv(f['file'],x['path'],x['value'])
s=read(base/'statistical-review.json');x=s['coverage34_plan'];p=x['file'];d=doc(p)
for fix in x['exact_kind_replacements']:
 idx=next(i for i,v in enumerate(d['pages'][0]['sources'])if v['url']==fix['url']);setv(p,f'/pages/0/sources/{idx}/kind',fix['to'],fix['from'])
idx=next(i for i,v in enumerate(d['pages'])if v['page']=='fd-st03-examples');preserve_remove(p,idx)
p=f'research/{run}-batch-36.coverage.json';d=doc(p)
for fix in s['coverage36_exact_additions']:
 url=re.search(r'sources\[url=(.*?)\]\.locator',fix['path'])[1];idx=next(i for i,v in enumerate(d['pages'][0]['sources'])if v['url']==url);setv(p,f'/pages/0/sources/{idx}/locator',fix['value'])
# Remaining four schema-only failures: reuse existing item labels/locators, never invent harvest.
manifest={i['id']:i for p in pathlib.Path('research').glob(run+'-batch-*.pages.json')for pg in read(p)for i in pg['items']}
for n in[2,23,27,30]:
 p=f'research/{run}-batch-{n}.coverage.json';d=doc(p)
 for pi,pg in enumerate(d['pages']):
  for si,source in enumerate(pg.get('sources',[])):
   kind=source.get('kind');mapping={'research-paper':'paper','research-article':'paper','handbook-chapter':'survey','textbook-chapter':'textbook'}
   if kind in mapping:setv(p,f'/pages/{pi}/sources/{si}/kind',mapping[kind],kind)
   for ci,row in enumerate(source.get('contents',[])):
    ptr=f'/pages/{pi}/sources/{si}/contents/{ci}'
    if not row.get('name'):
     if row.get('item')not in manifest:raise Exception('Unnamed harvest lacks current item')
     setv(p,ptr+'/name',manifest[row['item']]['title']+' — '+row.get('locator','existing attributed source passage'))
    if row.get('disposition')=='not-used':setv(p,ptr+'/disposition','out-of-scope','not-used')
 for i in range(len(d['pages'])-1,-1,-1):
  pg=d['pages'][i]
  if pg['page'].endswith('-examples')and not pg.get('sources'):preserve_remove(p,i)
# Check proposed dropped-source alternatives name only genuine current dependencies.
for p,d in docs.items():
 mp=p.replace('.coverage.json','.pages.json');items={i['id']:i for pg in read(mp)for i in pg['items']}
 for pg in d['pages']:
  for src in pg.get('sources',[]):
   for alt in src.get('source_resolution',{}).get('alternatives',[]):
    if alt.get('item')not in items or not set(alt.get('deps',[]))<=set(items[alt['item']].get('deps',[])):raise Exception('Still-stale alternative '+p+' '+str(alt.get('item')))
archive=base/'before-coverage-integration';archive.mkdir();before=[]
for p,d in docs.items():
 path=pathlib.Path(p);dest=archive/str(path).replace('/','__');dest.write_bytes(path.read_bytes());before.append({'path':p,'archive':str(dest),'sha256':hashlib.sha256(path.read_bytes()).hexdigest()});path.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
out.write_text(json.dumps({'run':run,'owner':'/root','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'before':before,'changes':changes,'reviews':['coverage-completed-review.json','phasefield-creeping-review.json','balances-weak-review.json','statistical-review.json'],'source_reading_credit':'Original native history preserved. No new source reading attributed by schema integration.','gates_attempted':0,'complete':True},indent=2,ensure_ascii=False)+'\n');print(json.dumps({'coverage_files':len(docs),'field_operations':len(changes),'gates':0}))
