from pathlib import Path
import json,re,yaml,sys
id,old,new,before=sys.argv[1:];p=Path('research/plan-spec.json');s=p.read_text();d=json.loads(s)
op=next(x for x in d['pages'] if x['id']==Path(old).stem);np=next(x for x in d['pages'] if x['id']==Path(new).stem)
rec=next(x for x in op['items'] if x['id']==id)
for name in [old,new]:
 q=Path(name);t=q.read_text();snap=Path('research/ap-131-sol-repair/before')/q.name
 if not snap.exists():snap.write_text(t)
 m=re.match(r'^---\n(.*?)\n---',t,re.S);fm=yaml.safe_load(m[1]);key='examples' if rec['kind'] in ['example','counterexample'] else 'items';a=fm[key]
 if name==old:a.remove(id)
 else:a.insert(a.index(before) if before!='APPEND' else len(a),id)
 t=re.sub(r'(?ms)^'+key+r': \[.*?\]', key+': '+json.dumps(a,ensure_ascii=False),t,count=1);q.write_text(t)
pos=s.index('"id": "'+id+'"',s.index('"id": "'+op['id']+'"'));start=s.rfind('        {',0,pos);obj,n=json.JSONDecoder().raw_decode(s[start:].lstrip());end=start+len(s[start:])-len(s[start:].lstrip())+n
if s[end:end+1]==',':end+=2
else:start=s.rfind(',',0,start)
s=s[:start]+s[end:]
anchor=before if before!='APPEND' else np['items'][-1]['id'];pos=s.index('"id": "'+anchor+'"',s.index('"id": "'+np['id']+'"'));start=s.rfind('        {',0,pos)
entry='\n'.join('        '+l for l in json.dumps(rec,ensure_ascii=False,indent=2).splitlines())
if before=='APPEND':
 obj,n=json.JSONDecoder().raw_decode(s[start:].lstrip());end=start+len(s[start:])-len(s[start:].lstrip())+n;s=s[:end]+',\n'+entry+s[end:]
else:s=s[:start]+entry+',\n'+s[start:]
json.loads(s);p.write_text(s)
print(id,old,'->',new)
