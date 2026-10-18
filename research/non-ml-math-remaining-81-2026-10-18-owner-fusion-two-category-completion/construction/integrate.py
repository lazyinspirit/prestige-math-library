from pathlib import Path
import json,yaml,re,datetime
run='non-ml-math-remaining-81-2026-10-18';b=Path('research')/(run+'-owner-fusion-two-category-completion');prefix=Path('research')/(run+'-batch-79')
old=json.loads((b/'before/research'/f'{run}-batch-79.pages.json').read_text());ids=[i['id']for p in old for i in p['items']];original=set(ids)
for folder in ['algebra-proposal','finiteness-proposal','deformation-proposal','dimension-proposal']:
 for p in sorted((b/folder).glob('*.md')):
  s=p.read_text()
  if not s.startswith('---\n'):continue
  i=yaml.safe_load(s.split('---',2)[1])['id']
  if i not in ids:ids.append(i)
assert len(ids)==39
texts={i:Path('items',i+'.md').read_text() for i in ids};meta={i:yaml.safe_load(texts[i].split('---',2)[1])for i in ids}
ordered=[];todo=set(ids)
while todo:
 ready=sorted(i for i in todo if not(set(meta[i].get('deps',[]))&todo));assert ready,'local cycle';ordered+=ready;todo-=set(ready)
rows={i['id']:i for p in old for i in p['items']}
def claim(s):
 m=re.search(r'^## (?:Definition|Statement|Example)\n(.*?)(?=\n## |\Z)',s,re.S|re.M);assert m;return m.group(1).strip()
for p in old:
 select=[i for i in ordered if(meta[i]['kind']=='example')==(p['kind']=='B')];out=[]
 for i in select:
  m=meta[i];row=rows.get(i,{}).copy();row.update(id=i,kind=m['kind'],title=m['title'],deps=m.get('deps',[]),statement=claim(texts[i]),provenance=m['provenance'],sources=m.get('sources',{}).get('references',[]))
  if 'dependency_level'in m:row['dependency_level']=m['dependency_level']
  out.append(row)
 p['items']=out
Path(str(prefix)+'.pages.json').write_text(json.dumps(old,indent=2,ensure_ascii=False)+'\n');Path(str(prefix)+'.item-scope.json').write_text(json.dumps(ordered,indent=2)+'\n')
inv={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'ids':ordered,'original_ids':sorted(original),'created_ids':sorted(set(ids)-original),'proof_bearing':[i for i in ordered if meta[i]['kind']!='definition'],'definitions':[i for i in ordered if meta[i]['kind']=='definition'],'levels_owner':'root; original labels retained, no numeric reconciliation performed','external_dependencies':sorted({d for i in ids for d in meta[i].get('deps',[])if d not in ids})};(b/'construction/integrated-item-inventory.json').write_text(json.dumps(inv,indent=2)+'\n')
p=Path('library/hall-algebras-and-tensor-categories/higher-categorical-symmetry-and-defect-algebras.md');s=p.read_text();fm=yaml.safe_load(s.split('---',2)[1]);fm['items']=[i['id']for i in old[0]['items']];header='---\n'+yaml.safe_dump(fm,sort_keys=False,allow_unicode=True)+'---\n\n';body=s.split('---',2)[2].strip();body=body.replace('The general $\\operatorname{Mod}(\\mathcal C)$ theorem is retained at its full scope; its Eilenberg–Watts, finite semisimple hom-category, relative Deligne product, braided separability, finite-rank, deformation, open-orbit, adjoint, monad-splitting, and object-duality proofs are explicitly unfinished and escalated in the linked draft items.','The general $\\operatorname{Mod}(\\mathcal C)$ theorem is proved for braided fusion categories over algebraically closed fields of characteristic zero, with AC through the stated classical algebraic geometry suppliers. Its local chain constructs nonpivotal canonical-algebra separability, Eilenberg–Watts, finite semisimple hom categories, adjoints, monad splittings, both object duals, relative products and coherence, explicit fusion-data rank bounds, normalized deformation contraction, and finite-type open-orbit finiteness. All carriers remain draft.');body=body.replace('The algebraic Mod(C) theorem above has no logical dependency on RT data.','The algebraic Mod(C) theorem above has no logical dependency on RT data. The live batch-78 supplier and this conditional interface are guarded for their owning reviewer after genuine writer completion.');body=body.split('\n\nThe algebra model uses left algebra modules.')[0];body+='\n\nThe algebra model uses left algebra modules. An $A$-$B$ bimodule acts from left $B$-modules to left $A$-modules, so the model identifies the module $2$-category with the $1$-morphism-opposite of the stated algebra bicategory. Tensor multiplication uses the positive middle braiding; the right-to-left action conversion uses its specified inverse. The negative opposite gives a left algebra-bicategory dual and the positive opposite gives a right dual, with their roles exchanged after reversing $1$-morphisms. No pivotal or unitary enhancement is assumed.\n';p.write_text(header+body+'\n')
print(json.dumps({'items':len(ids),'A':len(old[0]['items']),'B':len(old[1]['items']),'proofs':len(inv['proof_bearing'])}))
