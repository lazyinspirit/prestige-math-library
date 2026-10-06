import pathlib,json,re,hashlib
out=pathlib.Path('research/frontier-41-ha-dt-29-owner5b-six-requires-repair');before=out/'before';before.mkdir(exist_ok=True)
fixes=[(1,'handle-decompositions-duality-and-rearrangement','hurewicz-whitehead-freudenthal-and-cw-approximation'),(2,'intersection-pairings-self-intersection-and-euler-classes','chern-weil-theory-and-characteristic-forms'),(3,'handle-cancellation-slides-and-elementary-moves','hurewicz-whitehead-freudenthal-and-cw-approximation'),(7,'vector-field-index-euler-characteristic-and-poincare-hopf','chern-weil-theory-and-characteristic-forms'),(10,'the-hopf-degree-theorem','oriented-and-mod-two-intersection-numbers'),(19,'isotopy-extension-and-embedding-theory-beyond-whitney','regular-homotopy-and-sphere-eversion')]
records=[]
def archive(path):
 data=path.read_bytes();dest=before/path;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(data);return hashlib.sha256(data).hexdigest()
# Read each file immediately before its mutation; only the requires field is changed.
for b,id,supplier in fixes:
 mf=pathlib.Path(f'research/frontier-41-ha-dt-29-batch-{b}.pages.json');raw=mf.read_bytes();d=json.loads(raw);pg=next(p for p in d if p['id']==id);old=pg['requires'][:];assert supplier not in old;pg['requires']=old+[supplier]
 archive(mf);mf.write_text(json.dumps(d,indent=2)+'\n');check=json.loads(mf.read_text());expected=json.loads(raw);next(p for p in expected if p['id']==id)['requires']=old+[supplier];assert check==expected
 pf=next(pathlib.Path('library').rglob(id+'.md'));txt=pf.read_text();h=archive(pf);match=re.search(r'^requires:\s*.*(?:\n[ \t]*-[^\n]*)*',txt,re.M)
 newline='requires: ['+', '.join(old+[supplier])+']'
 if match:newtxt=txt[:match.start()]+newline+txt[match.end():]
 else:newtxt=txt.replace('\nstatus: draft\n','\nstatus: draft\n'+newline+'\n',1);assert newtxt!=txt
 pf.write_text(newtxt);assert pf.read_text().split('---',2)[2]==txt.split('---',2)[2]
 records.append({'batch':b,'page':id,'added_supplier_page':supplier,'before_requires':old,'after_requires':old+[supplier],'page_path':str(pf),'page_before_sha256':h,'page_after_sha256':hashlib.sha256(pf.read_bytes()).hexdigest(),'manifest_before_sha256':hashlib.sha256(raw).hexdigest(),'manifest_after_sha256':hashlib.sha256(mf.read_bytes()).hexdigest()})
# Plan is root-delegated; preserve all unrelated fields with a fresh final read.
sp=pathlib.Path('research/plan-spec.json');raw=sp.read_bytes();spec=json.loads(raw);original=json.loads(raw);archive(sp)
for b,id,supplier in fixes:
 pg=next(p for p in spec['pages'] if p['id']==id);assert supplier not in pg['requires'];pg['requires'].append(supplier)
sp.write_text(json.dumps(spec,indent=2)+'\n')
for b,id,supplier in fixes:next(p for p in original['pages'] if p['id']==id)['requires'].append(supplier)
assert json.loads(sp.read_text())==original
(out/'provenance.json').write_text(json.dumps({'run':'frontier-41-ha-dt-29','reviewer':'/root/step5b_completion_g2','authority':'Root explicitly delegated only these six Requires additions, their page/plan/batch mirrors, and supported splice for six batches; source items/proofs unchanged.','repairs':records,'plan_before_sha256':hashlib.sha256(raw).hexdigest(),'plan_after_sha256':hashlib.sha256(sp.read_bytes()).hexdigest()},indent=2)+'\n')
print('Mirrored six exact Requires additions; archived exact prior bytes; all unrelated JSON fields and page bodies verified unchanged.')
