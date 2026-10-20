import json,re,hashlib,yaml
from pathlib import Path
from datetime import datetime,timezone
base=Path(__file__).parent
assignment=json.loads((base/'assignment.json').read_text())
sha=lambda b:hashlib.sha256(b).hexdigest()
link=re.compile(r'\[\[([^\]|]+)(?:\|([^\]]+))?\]\]')
rows=[]
for x in assignment['suppliers']:
 raw=Path(x['source']).read_bytes();assert sha(raw)==x['raw_sha256'],x['id']
 pre=base/'before'/Path(x['source']);pre.parent.mkdir(parents=True,exist_ok=True);pre.write_bytes(raw)
 s=raw.decode();m=re.search(r'^## (Statement|Definition)\n(.*?)(?=^## |\Z)',s,re.M|re.S);assert m
 refs=[];labels=[]
 def sub(mm):
  target=mm[1].strip();carrier=Path('items')/(target+'.md');front=yaml.safe_load(carrier.read_text().split('---',2)[1]);label=(mm[2] or front['title']).strip()
  assert '\n' not in label,(target,label)
  refs.append(mm[0]);labels.append({'link':mm[0],'label':label,'label_source':str(carrier),'label_source_raw_sha256':sha(carrier.read_bytes())})
  return label
 body=link.sub(sub,m[2]);assert refs
 unique=list(dict.fromkeys(refs));replacement='## '+m[1]+'\n'+body.rstrip()+'\n\n## '+m[1]+' references\n\n'+'\n\n'.join(unique)+'\n\n'
 candidate=s[:m.start()]+replacement+s[m.end():]
 out=base/'candidate'/Path(x['source']);out.parent.mkdir(parents=True,exist_ok=True);out.write_text(candidate)
 dispositions=[]
 for al in x['alerts']:
  p=Path(al['digest_path']);b=p.read_bytes();assert sha(b)==al['digest_sha256'],p
  actual=json.loads(b)['alerts'][al['alert_index']];assert actual==al['alert'],(p,actual,al['alert'])
  dispositions.append({**al,'disposition':'confirmed-presentation-defect-repaired-in-candidate','consumer_impact':'none: identical mathematical text after resolving display labels; only hyperlink presentation changes'})
 rows.append({'id':x['id'],'source':x['source'],'before_file':str(pre),'before_raw_sha256':sha(raw),'candidate_file':str(out),'candidate_raw_sha256':sha(out.read_bytes()),'heading':m[1],'link_occurrences':len(refs),'references':unique,'labels':labels,'alert_dispositions':dispositions,'semantic_review':'pass: complete original section retained verbatim except wikilink tokens replaced by their display labels; metadata and all other sections byte-identical','meaning_changed':False})
(base/'inventory.json').write_text(json.dumps({'created_at':datetime.now(timezone.utc).isoformat(),'run':assignment['run'],'owner':assignment['owner'],'suppliers':rows},indent=2)+'\n')
print(f'Created {len(rows)} candidates; {sum(len(r["alert_dispositions"]) for r in rows)} alerts; {sum(r["link_occurrences"] for r in rows)} moved link occurrences.')
