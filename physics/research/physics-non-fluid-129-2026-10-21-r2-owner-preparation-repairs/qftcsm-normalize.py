from pathlib import Path
import json,re,hashlib
b=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-preparation-repairs');ids=json.loads((b/'qftcsm-items.json').read_text());rows=[]
for id in ids:
 p=Path('items')/(id+'.md');old=p.read_text();s=old;displays=[]
 if id in ['lem-qftx-finite-heavy-gaussian-square','thm-qftx-heavy-derivative-bound','prop-qftx-finite-gaussian-shell-semigroup']:
  def display(m):
   x=m.group(0)
   if '\n' not in x:return x
   y='$$'+re.sub(r'\s+',' ',x[2:-2]).strip()+'$$';assert re.sub(r'\s+','',x)==re.sub(r'\s+','',y);displays.append({'before':x,'after':y});return y
  s=re.sub(r'\$\$[\s\S]*?\$\$',display,s)
 # Only true numbered proof paragraphs are normalized: blank-line-separated
 # blocks in proof-like sections, not arbitrary lines resembling step labels.
 count=[0]
 def proof(m):
  text=m.group(0);out=[]
  for par in re.split(r'(\n\s*\n)',text):
   if re.match(r'^\d+\.\d+\s',par):
    lines=par.splitlines();new=[]
    for line in lines:
     if new and not line.lstrip().startswith('$$') and not new[-1].rstrip().endswith('$$'):
      new[-1]+=' '+line.strip();count[0]+=1
     else:new.append(line)
    par='\n'.join(new)
   out.append(par)
  return ''.join(out)
 s=re.sub(r'(?ms)^## (?:Proof|Verification)\n.*?(?=^## |\Z)',proof,s)
 assert re.sub(r'\s+','',old)==re.sub(r'\s+','',s),(id,'nonwhitespace change')
 p.write_text(s);rows.append({'id':id,'display_changes':displays,'soft_wraps_joined':count[0],'before_sha256':hashlib.sha256(old.encode()).hexdigest(),'after_sha256':hashlib.sha256(s.encode()).hexdigest()})
(b/'qftcsm-initial-whitespace-normalization.json').write_text(json.dumps(rows,indent=2)+'\n')
print(json.dumps([{'id':x['id'],'joined_displays':len(x['display_changes']),'soft_wraps':x['soft_wraps_joined']} for x in rows],indent=2))
