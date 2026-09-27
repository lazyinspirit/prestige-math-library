from pathlib import Path
import json,re,sys,yaml
BASE=Path(__file__).parent
reg=json.loads((BASE/'new-item-registry.json').read_text())
plan=Path('research/plan-spec.json');s=plan.read_text()
for id in sys.argv[1:]:
 r=next(x for x in reg if x['id']==id);item=Path('items')/(id+'.md')
 meta=yaml.safe_load(re.match(r'^---\n(.*?)\n---',item.read_text(),re.S)[1]);assert meta['status']=='published'
 p=Path(r['home']);t=p.read_text();snap=BASE/'before'/p.name
 if not snap.exists():snap.write_text(t)
 fm=yaml.safe_load(re.match(r'^---\n(.*?)\n---',t,re.S)[1])
 if id not in fm.get('items',[]):
  anchor=r['before']
  if anchor:
   assert anchor in fm['items'];at=t.index(anchor);t=t[:at]+id+',\n        '+t[at:]
  else:
   m=re.search(r'(?ms)^items: \[.*?\]',t);assert m;at=m.end()-1;t=t[:at]+', '+json.dumps(id)+t[at:]
  p.write_text(t)
 d=json.loads(s);page=next(x for x in d['pages'] if x['id']==p.stem)
 if not any(x['id']==id for x in page['items']):
  rec={k:meta[k] for k in ['id','kind','title','deps']};rec['provenance']=meta.get('provenance',{})
  # Find the approved target page object and its insertion anchor without serializing unrelated data.
  pagepos=s.index('"id": "'+page['id']+'"')
  anchor=r['before'] or page['items'][-1]['id']
  pos=s.index('"id": "'+anchor+'"',pagepos);start=s.rfind('        {',pagepos,pos)
  if not r['before']:
   obj,n=json.JSONDecoder().raw_decode(s[start:].lstrip());end=start+len(s[start:])-len(s[start:].lstrip())+n
   entry=',\n'+'\n'.join('        '+l for l in json.dumps(rec,ensure_ascii=False,indent=2).splitlines());s=s[:end]+entry+s[end:]
   r['status']='registered';r['deps']=meta.get('deps',[]);print(id,'->',r['home']);continue
  entry='\n'.join('        '+l for l in json.dumps(rec,ensure_ascii=False,indent=2).splitlines())+',\n'
  s=s[:start]+entry+s[start:]
 r['status']='registered';r['deps']=meta.get('deps',[])
 print(id,'->',r['home'])
json.loads(s);plan.write_text(s);(BASE/'new-item-registry.json').write_text(json.dumps(reg,indent=2)+'\n')
