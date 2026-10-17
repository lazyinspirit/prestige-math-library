from pathlib import Path
import json,re,yaml,copy,difflib
R='numerical-optimization-dynamics-2026-10-16'; B=Path(__file__).parent
manifests={p:json.loads(p.read_text()) for p in sorted(Path('research').glob(R+'-batch-*.pages.json'))}
items={};errors=[];sources={};raw={}
for p,pages in manifests.items():
 for pi,page in enumerate(pages):
  for ii,item in enumerate(page['items']):
   id=item['id']
   if id in items:errors.append('duplicate '+id)
   items[id]=(p,pi,ii,item)
   sp=Path('items')/(id+'.md'); t=sp.read_text();raw[id]=t
   sources[id]=yaml.safe_load(t.split('---',2)[1])
levels={};active=[]
def visit(id):
 if id in levels:return levels[id]
 if id in active:raise RuntimeError('cycle '+' -> '.join(active+[id]))
 active.append(id); deps=sources[id].get('deps',[])
 if not isinstance(deps,list):raise RuntimeError('invalid deps '+id)
 value=max((visit(d)+1 for d in deps if d in items),default=0)
 active.pop();levels[id]=value;return value
for id in items:visit(id)
changes=[];proposed=copy.deepcopy(manifests);source_edits=[]
for id,(p,pi,ii,item) in items.items():
 s=sources[id];dest=proposed[p][pi]['items'][ii]
 for field in ['id','kind','title','deps','dependency_level']:
  target=levels[id] if field=='dependency_level' else s.get(field)
  old=item.get(field)
  same=sorted(old)==sorted(target) if field=='deps' and isinstance(old,list) and isinstance(target,list) else old==target
  if not same:
   changes.append({'id':id,'manifest':str(p),'pointer':f'/{pi}/items/{ii}/{field}','field':field,'before':old,'after':target});dest[field]=target
 if s.get('dependency_level')!=levels[id]:
  before=raw[id];old='dependency_level: '+str(s.get('dependency_level'));new='dependency_level: '+str(levels[id])
  if before.count(old)!=1:raise RuntimeError('level literal ambiguous '+id)
  after=before.replace(old,new,1);sp=Path('items')/(id+'.md')
  source_edits.append({'id':id,'path':str(sp),'source_excerpt':old,'proposed_replacement':new,'before':s.get('dependency_level'),'after':levels[id]})
  for sub,t in [('before',before),('proposed',after)]:
   out=B/sub/sp;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(t)
for p,pages in proposed.items():
 if pages==manifests[p]:continue
 before=p.read_text();after=json.dumps(pages,ensure_ascii=False,indent=2)+'\n'
 for sub,t in [('before',before),('proposed',after)]:
  out=B/sub/p;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(t)
 out=B/(p.name+'.diff');out.write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='a/'+str(p),tofile='b/'+str(p))))
support=[]
for rp in Path('research',R+'-step5-v2').glob('step5-v2-initial-r1-u*.json'):
 row=json.loads(rp.read_text())
 for p in proposed:
  if proposed[p]!=manifests[p] and str(p) in row.get('supporting_evidence',{}):
   support.append({'report':str(rp),'unit':row['unit'],'carrier':str(p),'original_raw_sha256_copied_not_recomputed':row['supporting_evidence'][str(p)]})
summary={'research_only':True,'review_cycle':1,'inventory':{'manifests':len(manifests),'items':len(items)},'errors':errors,'manifest_corrections':changes,'source_level_corrections':source_edits,'affected_original_supporting_evidence':support,'hashes_computed':False,'canonical_edits':False}
(B/'preview.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(summary,ensure_ascii=False,indent=2))
