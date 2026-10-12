import json,pathlib,hashlib,re,copy,yaml,datetime
R='frontier-44-special-representation-examples-28'; OUT=pathlib.Path('research/'+R+'-owner-greeting-recovery-20261011/prepare-gate-metadata'); BASE=pathlib.Path('research/'+R+'-owner-one-time-exhausted-exception-20261011')
def sha(b):return hashlib.sha256(b if isinstance(b,bytes) else b.encode()).hexdigest()
def load(p):return json.loads(pathlib.Path(p).read_text())
def section(t,h):
 m=re.search(r'^## '+re.escape(h)+r'\s*\n([\s\S]*?)(?=^## |\Z)',t,re.M);assert m,(h,t[:80]);return m[1].strip()
def fm(t):return yaml.safe_load(t.split('---',2)[1])
def get(o,p):
 for k in p.strip('/').split('/'):o=o[int(k)] if isinstance(o,list) else o[k]
 return o
def setval(o,p,v):
 ks=p.strip('/').split('/');par=o
 for k in ks[:-1]:par=par[int(k)] if isinstance(par,list) else par[k]
 k=ks[-1];par[int(k) if isinstance(par,list) else k]=v
carriers={}; guards={};inputs=[];sources={}
def input_file(p,role):
 p=str(p);guards[p]=sha(pathlib.Path(p).read_bytes());inputs.append({'path':p,'raw_sha256':guards[p],'role':role});return p

def carrier(p):
 p=str(p)
 if p not in carriers:
  obj=load(p);carriers[p]={'path':p,'before_raw_sha256':sha(pathlib.Path(p).read_bytes()),'original':obj,'proposed':copy.deepcopy(obj),'edits':[]}
 return carriers[p]
def edit(p,pointer,value,reason,author):
 c=carrier(p);before=get(c['proposed'],pointer)
 if before==value:return
 c['edits'].append({'pointer':pointer,'before':copy.deepcopy(before),'after':copy.deepcopy(value),'before_value_sha256':sha(json.dumps(before,ensure_ascii=False,separators=(',',':'))),'reason':reason,'original_author':author});setval(c['proposed'],pointer,copy.deepcopy(value))
notation=load(input_file(BASE/'exception_finite_w_right_invariance_constructor/notation-gate-first1/guarded-normalization-plan.json','original notation author packet'))
quotes=load(input_file(BASE/'exception_finite_w_right_invariance_constructor/notation-gate-first1/coalescer-quote-refresh-plan.json','original notation quote plan'))
for i in notation['items']:
 input_file(i['proposal_path'],'original authored notation proposal');sources[i['id']]=pathlib.Path(i['proposal_path']).read_text()
quote_count=0
for c in quotes['carriers']:
 for q in c['quote_refreshes']:
  val=q['recommended_current_full_source_section'];assert sha(val)==q['recommended_quote_sha256'];assert section(sources[q['supplier']],q['source_section'])==val
  old=get(carrier(c['path'])['original'],q['pointer']);assert sha(old)==q['before_quote_sha256']
  edit(c['path'],q['pointer'],val,'Equivalent typed notation: literal source quotation refresh only',notation['author']);quote_count+=1
assert quote_count==108
sign=load(input_file(BASE/'exception_sign_tilting_constructor/first1-forward-link-repairs/guarded-proposal-evidence.json','original forward/local finite-fibre author packet'))
# locate original authored proposed files rather than copying old metadata snapshots
conid='lem-complex-algebraic-stratifications-have-finite-conical-cochain-models';fid='lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions'
cp=BASE/'exception_crystal_standard_kernel_constructor/gatefailure-first1-local-conical'/ (conid+'.proposed.md');fp=BASE/'exception_sign_tilting_constructor/first1-forward-link-repairs'/(fid+'.proposed.md')
con=load(input_file(cp.parent/'guarded-proof-evidence.json','original local conical author packet'))
for p in [cp,fp]: input_file(p,'original complete local proof proposal');sources[fm(p.read_text())['id']]=p.read_text()
manifest_files=sorted(pathlib.Path('research').glob(R+'-batch-*.pages.json'))
inventory=[];graph_pages=[]
for p in manifest_files:
 obj=load(p);graph=copy.deepcopy(obj)
 for pi,page in enumerate(obj):
  for ii,item in enumerate(page['items']):
   id=item['id'];inventory.append({'id':id,'page':page['id'],'batch':re.search(r'batch-(\d+)',str(p))[1]})
   if id in [conid,fid]:
    deps=fm(sources[id])['deps'];edit(p,f'/{pi}/items/{ii}/deps',deps,'Dependencies match completed local replacement, without later analytic suppliers',con['author'] if id==conid else sign.get('author','/root/exception_sign_tilting_constructor'));graph[pi]['items'][ii]['deps']=deps
   if id in sources and 'statement' in item:
    kind=fm(sources[id])['kind'];h='Definition' if kind=='definition' else 'Statement';value=section(sources[id],h)
    old=section(pathlib.Path('items/'+id+'.md').read_text(),h)
    # Only actual full claim text mirrors; scaffold summaries remain original.
    if re.sub(r'\s+',' ',item['statement']).strip()==re.sub(r'\s+',' ',old).strip(): edit(p,f'/{pi}/items/{ii}/statement',value,'Actual claim-text mirror of equivalent typed original-authored notation',notation['author'])
 graph_pages+=graph
assert len(inventory)==875 and len({x['id'] for x in inventory})==875
(OUT/'proposed-graph-pages.json').write_text(json.dumps(graph_pages,indent=2)+'\n')
(OUT/'inventory.json').write_text(json.dumps(inventory,indent=2)+'\n')
# Derivation rows faithfully mirror actual supplied steps and trailing input tags.
def steps(t):
 result=[]
 for m in re.finditer(r'^(\d+\.\d+) ([\s\S]*?)(?=^\d+\.\d+ |^## |\Z)',section(t,'Proof'),re.M):
  step,body=m.groups();body=body.strip();tags=re.search(r'\[([^\[\]]+)\](?:\s*∎)?$',body);assert tags,(step,body[-90:]);claim=body[:tags.start()].strip();result.append({'id':'step-'+step.replace('.','-'),'claim':claim,'step':step,'inputs':[x.strip() for x in tags[1].split(',')]})
 return result
for id,batch,author in [(conid,37,con['author']),(fid,32,sign.get('author','/root/exception_sign_tilting_constructor'))]:
 p=pathlib.Path('research/'+R+f'-batch-{batch}.proof-contracts.json');base='/contracts/'+id;c=carrier(p)['proposed']['contracts'][id];ds=steps(sources[id]);facts=section(sources[id],'Facts & Assumptions');cites=copy.deepcopy(c['citations'])
 if id==conid:
  cites=[x for x in cites if x['source'] not in con['deps_removed_only_after_local_clause_replacement']]
  shift={'1.1':'5.1','1.2':'6.1','2.1':'7.1'}
  for x in cites:x['uses']=[shift.get(v,v) for v in x['uses']]
  for fact in ['F7','F8']:
   factbody=re.search(r'\['+fact+r'\] ([\s\S]*?)(?=\n\n\[|\Z)',facts)[1];uses=[d['step'] for d in ds if fact in d['inputs']]
   for supplier in dict.fromkeys(re.findall(r'\[\[([^]|]+)',factbody)):
    sp='items/'+supplier+'.md';input_file(sp,'actual conical prerequisite quotation carrier');st=pathlib.Path(sp).read_text();h='Definition' if fm(st)['kind']=='definition' else 'Statement';cites.append({'fact':fact,'source':supplier,'source_section':h,'quote':section(st,h),'uses':uses})
  # Actual A1/F4 now also used in the new local clauses.
  for x in cites:
   if x['fact'] in ['A1','F4']: x['uses']=[d['step'] for d in ds if x['fact'] in d['inputs']]
 else:
  cites=[x for x in cites if x['source']!='lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions']
  sp='items/lem-ringed-space-module-sheaves-enough-injectives.md';input_file(sp,'actual finite-fibre local section adjunction quotation');st=pathlib.Path(sp).read_text();pr=steps(st);quoted=next(d['claim'] for d in pr if d['step']=='1.4');cites.append({'fact':'F2','source':'lem-ringed-space-module-sheaves-enough-injectives','source_section':'Proof','quote':quoted,'uses':['1.1','2.1','3.1']})
 edit(p,base+'/citations',cites,'Exact fact/source quotation and actual step-use maps for completed local replacement',author)
 edit(p,base+'/derivations',ds,'Exact claims and trailing input tags of original-authored supplied proof',author)
 # Boundary statuses and native risk/review fields are preserved; phase reference shifts only.
 if id==conid:
  bounds=copy.deepcopy(c['boundaries'])
  for row in bounds:
   for key in ['evidence','reason']:
    if key in row:row[key]=re.sub(r'\b(1\.1|1\.2|2\.1)\b',lambda m:shift[m[1]],row[key])
  edit(p,base+'/boundaries',bounds,'Preserve original boundary dispositions with shifted geometric proof references',author)
 # merged contract successor is coherent if present; preserve all unrelated merged rows
 mp='research/'+R+'-proof-contracts.json'
 if id in carrier(mp)['original']['contracts']:
  for field in ['citations','derivations','boundaries']:
   edit(mp,base+'/'+field,carrier(p)['proposed']['contracts'][id][field],'Mirror current batch contract fields only; preserve all original review/risk dispositions',author)
# Save interim carrier data for the single graph calculation and final sealing.
(OUT/'interim.json').write_text(json.dumps({'carriers':carriers,'inputs':inputs,'quote_count':quote_count,'source_proofs':{'conical':str(cp),'finite_fibre':str(fp)}},indent=2)+'\n')
print('Prepared',len(carriers),'guarded carrier snapshots; quote count',quote_count)
