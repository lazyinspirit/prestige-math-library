#!/usr/bin/env python3
"""Prepare NEW research-only current69/71 metadata projection. Does not apply canonical files."""
from pathlib import Path
import importlib.util,json,copy,re,hashlib,difflib,ast
ROOT=Path.cwd();R='numerical-optimization-dynamics-2026-10-16';BASE=Path(__file__).parent
spec=importlib.util.spec_from_file_location('exact',BASE/'verify-source-exactness.py')
# The verifier CLI is deliberately not imported; reuse its source-text helpers only.
module=(BASE/'verify-source-exactness.py').read_text().split('ap=argparse.ArgumentParser')[0];ns={};exec(compile(module,'verify-source-exactness.py','exec'),ns)
d=Path('research')/(R+'-owner-step2-b69-b71-metadata-r2');d.mkdir(exist_ok=True);ops=[];sources={};superseded=[];files={}
def src(id):
 p='items/'+id+'.md';s=Path(p).read_text();sources[p]=hashlib.sha256(s.encode()).hexdigest();return s
def sec(t,k):return ns['section'](t,k)
def op(file,id,mode,obj,field,after):
 old=copy.deepcopy(obj.get(field))
 if old!=after:ops.append({'file':file,'id':id,'mode':mode,'field':field,'before':old,'after':after});obj[field]=copy.deepcopy(after)
for b in ['69','71']:
 pf=f'research/{R}-batch-{b}.pages.json';cf=f'research/{R}-batch-{b}.proof-contracts.json';pages=json.loads(Path(pf).read_text());contracts=json.loads(Path(cf).read_text());files[pf]=pages;files[cf]=contracts
 for pg in pages:
  for item in pg.get('items',[]):op(pf,item['id'],'manifest-item',item,'deps',ns['front'](src(item['id'])).get('deps',[]))
 for id,c in contracts['contracts'].items():
  text=src(id);steps=ns['phase_steps'](text);oldby={x.get('step'):x for x in c.get('derivations',[])};der=[{**oldby.get(x['step'],{}),'id':oldby.get(x['step'],{}).get('id','derive-'+x['step'].replace('.','-')),**x} for x in steps];op(cf,id,'contract',c,'derivations',der)
  facts=sec(text,'Facts & Assumptions') or '';new=[];old=c.get('citations',[])
  for m in re.finditer(r'^\[([FA]\d+)\][ \t]+([\s\S]*?)(?=^\[[FA]\d+\]|^##[ \t]+|\Z)',facts,re.M):
   fact=m.group(1)
   for supplier in dict.fromkeys(re.findall(r'\[\[([^\]|#]+)',m.group(2))):
    prev=next((x for x in old if x.get('fact')==fact and x.get('source')==supplier),{});body=src(supplier);section=prev.get('source_section');quote=sec(body,section) if section else None
    if quote is None:section=next(x for x in ['Statement','Definition','Example','Postulate'] if sec(body,x) is not None);quote=sec(body,section)
    new.append({**prev,'fact':fact,'source':supplier,'source_section':section,'quote':quote,'uses':[x['step'] for x in steps if fact in x['inputs']]})
  # Preserve real non-FA citations and refresh them too; remove only superseded F/A supplier identities.
  for prev in old:
   if any(x['fact']==prev['fact'] and x['source']==prev['source'] for x in new):continue
   if not re.fullmatch(r'[FA]\d+',prev.get('fact','')):
    new.append({**prev,'quote':sec(src(prev['source']),prev['source_section']),'uses':[x['step'] for x in steps if prev.get('fact') in x['inputs']]})
   else:superseded.append({'id':id,'old_fact':prev['fact'],'old_source':prev['source'],'disposition':'Superseded source Fact mapping; original metadata preserved in before/. Current declared supplier identities projected exactly.'})
  op(cf,id,'contract',c,'citations',new)
projection={'version':1,'run':R,'batches':['69','71'],'purpose':'ROOT-ONLY r2 current source-exact metadata mirrors; retains original joint utility/history unchanged. No mathematical/native/publication acceptance.','source_guards':[{'path':p,'raw_sha256':h} for p,h in sorted(sources.items())],'operations':ops,'superseded_old_citations':superseded,'excluded':['published69/71 ordinary repair receipt acceptance remains pending','source edits','native acceptance/history','gates/levels/frontier hashes/verification stamps','nonproof items with no existing proof contract: no invented contracts','risk-review attestations preserved']}
raw=(json.dumps(projection,indent=2,ensure_ascii=False)+'\n').encode();(d/'projection.json').write_bytes(raw);patch=''
for f,obj in files.items():
 before=Path(f).read_text();after=json.dumps(obj,indent=2,ensure_ascii=False)+'\n'
 for sub,body in [('before',before),('proposed',after)]:p=d/sub/f;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(body)
 patch+=''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='a/'+f,tofile='b/'+f))
(d/'projection.patch').write_text(patch)
u=Path(f'research/{R}-owner-step2-b97/metadata-projection/apply-root-only.py').read_text();u=u.replace('2ee52d09b4d788e98b04409be44628c9c6dd901550bdc48feff7444d9f748e54',hashlib.sha256(raw).hexdigest()).replace('.b97-root-projection-','.b69-b71-r2-root-projection-');a=u.index('"""');z=u.index('"""',a+3)+3;u=u[:a]+'''"""ROOT ONLY granular current69/71 r2 projection. Default describes without writes.
--apply-69, --apply-71 or --apply-all apply only exact guarded metadata fields.
Does not accept published receipts or native content and does not run gates.
"""'''+u[z:];a=u.index('ap=argparse.ArgumentParser');u=u[:a]+'''ap=argparse.ArgumentParser(description=__doc__);g=ap.add_mutually_exclusive_group();g.add_argument('--describe',action='store_true');g.add_argument('--apply-69',action='store_true');g.add_argument('--apply-71',action='store_true');g.add_argument('--apply-all',action='store_true');args=ap.parse_args()
if args.apply_69:result=apply(['69'])
elif args.apply_71:result=apply(['71'])
elif args.apply_all:result=apply(['69','71'])
else:result={'canonical_writes':False,'operations':[{k:op[k] for k in ['file','id','mode','field']} for op in P['operations']],'excluded':P['excluded'],'superseded_old_citations':P['superseded_old_citations']}
print(json.dumps(result,indent=2,ensure_ascii=False))
''';ast.parse(u);(d/'apply-root-only.py').write_text(u);(d/'preparation.json').write_text(json.dumps({'canonical_apply':False,'syntax_parse_only':True,'operation_count':len(ops),'source_guards':len(sources),'field_counts':{f:sum(x['field']==f for x in ops) for f in sorted(set(x['field'] for x in ops))},'superseded_old_citation_count':len(superseded),'original_joint_projection_untouched':True},indent=2)+'\n');print(d)
