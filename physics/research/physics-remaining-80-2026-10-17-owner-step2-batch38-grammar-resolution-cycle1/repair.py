import pathlib,json,re,copy,hashlib,difflib
base=pathlib.Path(__file__).parent
source=pathlib.Path('items/ex-qsm-quasilocal-infinite-tail-observable.md');contract=pathlib.Path('research/physics-remaining-80-2026-10-17-batch-38.proof-contracts.json');state=pathlib.Path('research/physics-remaining-80-2026-10-17-scope-review/batch-38/state.json')
assert json.load(open(state))['phase']=='held'
old=source.read_text();cd=json.loads(contract.read_text());prior=copy.deepcopy(cd)
for p in [source,contract,state]:
 b=base/'before'/p;b.parent.mkdir(parents=True,exist_ok=True);assert not b.exists();b.write_bytes(p.read_bytes())
r=[r for r in json.load(open(base/'precheck.txt'))['results'] if r['item_id']==source.stem][0];assert r['status']=='repair'
step_re=r'^\d+\.\d+ .*?(?=\n\n|\Z)'
existing=list(re.finditer(step_re,old,re.M|re.S));canonical=list(re.finditer(step_re,r['proposed_proof'],re.M|re.S));assert len(existing)==len(canonical)==4
new=old[:existing[0].start()]+'\n\n'.join(s.group() for s in canonical)+old[existing[-1].end():]
new=new.replace('**Given:** The sequence $(H_N)$ and facts [F1]–[F3].','**Given:** The sequence $(H_N)$ and facts [F1]–[F4].')
assert sorted(re.findall(r'\$\$.*?\$\$|\$(?!\$).*?\$',old,re.S))==sorted(re.findall(r'\$\$.*?\$\$|\$(?!\$).*?\$',new,re.S))
def sec(id,heading):
 t=pathlib.Path('items/'+id+'.md').read_text();m=re.search(r'^## '+re.escape(heading)+r'\n(.*?)(?=^## |\Z)',t,re.M|re.S);assert m;return m[1].strip()
entry=cd['contracts'][source.stem]
# All supplier sections were read directly before these exact quotation bindings.
cs=[('F1','def-qsm-local-spin-algebras','Definition',['1.1','3.1']),('F1','def-int-operations','Definition',['1.1','3.1']),('F1','def-int-order','Definition',['1.1','3.1']),('F1','thm-int-ordered-ring','Statement',['1.1','3.1']),('F2','def-int-order','Definition',['1.1']),('F2','def-int-operations','Definition',['1.1']),('F2','def-integers','Definition',['1.1']),('F2','def-natural-numbers','Definition',['1.1']),('F2','lem-nat-order-is-membership','Statement',['1.1']),('F3','def-qsm-local-spin-algebras','Definition',['1.2','2.1']),('F3','lem-qsm-local-spin-inclusions-isometric','Statement',['1.2','2.1']),('F4','def-qsm-quasilocal-spin-algebra','Definition',['1.2','2.1','3.1']),('F4','lem-qsm-quasilocal-completion','Statement',['1.2','2.1','3.1'])]
entry['citations']=[{'fact':f,'source':s,'source_section':h,'quote':sec(s,h),'uses':u} for f,s,h,u in cs]
newsteps=list(re.finditer(step_re,new,re.M|re.S));stable=['finite-positive-site-outside-region','step-1-1','step-2-1','step-3-1'];dr=[]
for st,id in zip(newsteps,stable):
 text=st.group();label,body=text.split(' ',1);m=re.match(r'(.*?)\s+\[([^\[\]]*)\]\s*∎?$',body,re.S);assert m
 dr.append({'id':id,'claim':m[1],'step':label,'inputs':[x.strip() for x in m[2].split(',')]})
entry['derivations']=dr
bounds={v['case']:v for v in entry['boundaries']}
bounds['empty']['evidence']='Statement fixes d=1,q=2 and positive sites n≥1. Step 1.1 permits an empty finite region or no positive sites in it: r=0 gives S=0 and the omitted site m=1.'
bounds['one']['evidence']='Statement gives H_1=2^{-1}Z_1; step 1.2 proves the geometric-tail estimate for the sequence beginning at this one-site approximant.'
bounds['endpoints']['evidence']='Step 2.1 proves [H_N,X_k]=2^{-k}(2iY)_k for every N≥k, including N=k, and passes to the norm limit.'
bounds['nonempty-choice']['evidence']='Step 1.1 constructs an omitted positive site m=1+sum_{n in Lambda,n>0}n, including empty sum zero. Step 3.1 uses it to contradict finite localization; no unprovided infinitude supplier or arbitrary choice is invoked.'
for id in prior['contracts']:
 if id!=source.stem:assert prior['contracts'][id]==cd['contracts'][id]
assert source.read_text()==old and json.loads(contract.read_text())==prior and json.load(open(state))['phase']=='held'
source.write_text(new);contract.write_text(json.dumps(cd,indent=2)+'\n')
(base/'source-repair.patch').write_text(''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='before/'+str(source),tofile='after/'+str(source))))
(base/'repair-delta.json').write_text(json.dumps({'source':str(source),'source_change':'Canonical proof ordinal/reference repair and Given fact rangeF1–F4 only. Every math span preserved. Public Statement/Facts unchanged.','worksheet':str(contract),'worksheet_change':'Tail contract alone: actual13 source/fact bindings;4 actual proof derivations with original3 IDs retained;4 obsolete boundary anchors corrected. Unrelated entries unchanged.','state_guard':'Actual38phase held immediately before source/worksheet writes; no engine,state,counter,report edits.'},indent=2)+'\n')
print('Applied held38 canonical proof and exact tail worksheet repair.')
