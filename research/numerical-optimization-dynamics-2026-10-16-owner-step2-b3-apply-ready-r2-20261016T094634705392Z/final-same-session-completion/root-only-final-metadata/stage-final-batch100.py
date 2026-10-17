#!/usr/bin/env python3
"""Root invokes only after original100 source is final. Writes research proposals only."""
import json,re,difflib
from pathlib import Path
b=Path(__file__).resolve().parent;repo=Path.cwd();d=json.loads((b/'integration.json').read_text());pending=json.loads((b/'batch100-pending.json').read_text());rel=pending['target'];owed=set(pending['sources'])
if rel in d['canonical_targets']:raise SystemExit('Batch100 already staged; do not overwrite prior guards/history.')
old=(repo/rel).read_text();payload=json.loads(old);sources={rel};ops=[]
for i,c in payload['contracts'].items():
 for q in c.get('citations',[]):
  if q.get('source')not in owed:continue
  src=q['source'];path=f'items/{src}.md';t=(repo/path).read_text();sources.add(path);sec=q.get('source_section','Definition');m=re.search(r'^## '+re.escape(sec)+r'\s*\n(.*?)(?=^## |\Z)',t,re.M|re.S)
  if not m:raise SystemExit('Missing section '+src+':'+sec)
  exact=m[1].strip()
  if q['quote']!=exact:q['quote']=exact;ops.append(dict(consumer=i,supplier=src,field='quote',section=sec))
new=json.dumps(payload,ensure_ascii=False,indent=2)+'\n'
for sub,txt in [('before',old),('proposed',new)]:
 p=b/sub/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(txt)
(b/'diffs'/(rel.replace('/','__')+'.diff')).write_text(''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile=rel,tofile=rel)))
for path in sources:
 p=b/'guards'/path
 if p.exists()and p.read_bytes()!=(repo/path).read_bytes():raise SystemExit('Existing main source guard mismatch; root must rebase explicitly: '+path)
 p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes((repo/path).read_bytes())
d['canonical_targets'].append(rel);d['source_guard_paths']=sorted(set(d['source_guard_paths'])|sources);d['existing_quote_operations'].extend(ops);d['status']='ROOTONLY unapplied; batch100 staged from root-confirmed final current source';d['excluded'][0]='No outside65/75/97/100 new contracts or duplicated preserved classifications.'
(b/'integration.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');pending.update(status='staged-root-final-source',quote_operations=ops);(b/'batch100-pending.json').write_text(json.dumps(pending,ensure_ascii=False,indent=2)+'\n');print('Research-only batch100 staged:',len(ops),'exact existing quote updates. Run verify.py and integrate.py read-only before root application.')
