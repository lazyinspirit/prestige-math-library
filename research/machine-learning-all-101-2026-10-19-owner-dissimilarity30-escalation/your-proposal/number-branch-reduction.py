from pathlib import Path
import json,re
p=Path(__file__).parent
ops=json.loads((p/'operations.json').read_text())
ops=[o for o in ops if not o['old'].startswith('## Proof')]
for id,tag in [('lem-fedavg-one-round-progress','F10'),('lem-fedavg-local-drift','F6'),('thm-fedavg-under-gradient-dissimilarity','F9')]:
 path='items/'+id+'.md'
 s=(p/'before'/path).read_text()
 for o in ops:
  if o['path']==path:
   assert s.count(o['old'])==1;s=s.replace(o['old'],o['new'],1)
 old='## Proof\n\n1.1 '
 new=f'## Proof\n\n1.1 In the standard-condition branch, [{tag}] supplies the displayed gap-form assumption with unchanged $G,B$; in the original gap-form branch it is already assumed. '
 assert s.count(old)==1
 s=s.replace(old,new,1);ops.append({'path':path,'old':old,'new':new,'expected_count':1})
 block=re.search(r'(?s)1\.1 .*?(?=\n\n(?:1\.2|2\.1))',s).group()
 m=list(re.finditer(r'\[([^\]]+)\]',block))[-1]
 old=m.group();new='['+tag+', '+m.group(1)+']'
 # The specific complete first-step trailing group must be unique in this carrier.
 assert s.count(old)==1,(id,old)
 s=s.replace(old,new,1);ops.append({'path':path,'old':old,'new':new,'expected_count':1})
 (p/'candidates'/path).write_text(s)
(p/'operations.json').write_text(json.dumps(ops,indent=2)+'\n')
