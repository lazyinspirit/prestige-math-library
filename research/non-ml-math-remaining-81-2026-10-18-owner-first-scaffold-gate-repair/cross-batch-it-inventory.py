import pathlib,json,yaml,hashlib,shutil,datetime
r='non-ml-math-remaining-81-2026-10-18';b=pathlib.Path('research')/(r+'-owner-first-scaffold-gate-repair/cross-batch-it');(b/'before').mkdir(parents=True,exist_ok=True);(b/'proposals').mkdir(exist_ok=True);homes={};records=[]
for p in pathlib.Path('research').glob(r+'-batch-*.pages.json'):
 n=p.name.split('-batch-')[1].split('.')[0]
 for pg in json.load(open(p)):
  homes[('page',pg['id'])]=n;records.append(('page',pg['id'],n,pg,str(p)))
  for x in pg.get('items',[]):homes[('item',x['id'])]=n;records.append(('item',x['id'],n,x,str(p)))
needed={};inputpaths=[];errors=[]
for kind,i,n,data,mp in records:
 if not 1<=int(n)<=27:continue
 path='items/'+i+'.md' if kind=='item' else 'library/'+data['category']+'/'+i+'.md';p=pathlib.Path(path);carriers=[(data,mp)]
 if p.exists():carriers.append((yaml.safe_load(p.read_text().split('---',2)[1]) or {},path))
 for obj,f in carriers:
  for field in ['requires'] if kind=='page' else ['deps','justified_by','forward_refs']:
   vals=obj.get(field,[])
   if not isinstance(vals,list):errors.append({'path':f,'field':field,'value':vals});continue
   for s in vals:
    sn=homes.get((kind,s))
    if sn and sn!=n:
     key=(kind,i,s);row=needed.setdefault(key,{'kind':kind,'consumer':i,'supplier':s,'consumer_batch':n,'supplier_batch':sn,'declarations':[],'consumer_source':path,'supplier_source':('items/'+s+'.md') if kind=='item' else next((rr[4].replace('research/','') for rr in []),None)})
     if f+'#'+field not in row['declarations']:row['declarations'].append(f+'#'+field)
inputpaths=[pathlib.Path('research')/(r+'-batch-'+str(n)+'.pages.json') for n in range(1,28)]
inputpaths += [pathlib.Path('research')/(r+'-batch-'+str(n)+'.cross-batch-dependencies.json') for n in range(1,28)]
obs=pathlib.Path('research')/(r+'-owner-first-scaffold-gate-repair/cross-batch-inputs/current-observation.json');inputpaths.append(obs);idx=[];absent=[];moves=[]
for p in inputpaths:
 if not p.exists():absent.append(str(p));continue
 q=b/'before'/p;q.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,q);raw=p.read_bytes();idx.append({'path':str(p),'sha256':hashlib.sha256(raw).hexdigest(),'bytes':len(raw)})
for n in range(1,28):
 if n in [18,20,23,24]:continue
 p=pathlib.Path('research')/(r+'-batch-'+str(n)+'.cross-batch-dependencies.json');arr=json.load(open(p)) if p.exists() else [];assert isinstance(arr,list)
 if n in [1,4]:assert not any(x['consumer_batch']==str(n) for x in needed.values())
 if n==9:
  kept=[]
  for j,row in enumerate(arr):
   if homes.get((row.get('kind'),row.get('consumer')))!=str(n):
    assert row['consumer']=='cor-iid-finite-variance-weak-law';moves.append({'batch':9,'original_index':j,'original_row':row,'reason':'Published outside-run consumer; retains reviewed transitive supplier context in sidecar, cannot be a typed owned9consumer row. Actual owned lem-finite-alphabet-iid-information-aep uses F7/step3.1 to invoke this published weaklaw; no new in-run declared edge is created.'})
   else:kept.append(row)
  arr=kept
 keys={(x['kind'],x['consumer'],x['supplier']) for x in arr}
 assert all((x['kind'],x['consumer'],x['supplier']) in keys for x in needed.values() if x['consumer_batch']==str(n))
 out=b/'proposals'/p.name;out.write_text(json.dumps(arr,indent=2,ensure_ascii=False)+'\n')
(b/'before-index.json').write_text(json.dumps({'observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':idx,'absent_inputs':absent},indent=2)+'\n');(b/'actual-declared-edges.json').write_text(json.dumps({'observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'Consumerbatches1–27 only; allcurrentmanifest+actualsource requires/deps/justified_by/forward_refs union','errors':errors,'edges':list(needed.values())},indent=2)+'\n');(b/'external-context-history.json').write_text(json.dumps({'original_reviews_retained':moves},indent=2,ensure_ascii=False)+'\n');assert not errors;print('27batch raw/context archive;23complete baseproposals; actualdeclarededges',len(needed),'publishedcontextrows separated',len(moves))
