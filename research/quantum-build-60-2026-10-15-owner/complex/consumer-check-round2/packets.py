from pathlib import Path
import json,re
O=Path('research/quantum-build-60-2026-10-15-owner/complex/consumer-check-round2');x=json.load(open(O/'source-use-sites.json'));direct=[];indirect=[]
for r in x['rows']:
 if r['changed_interface_seed']:continue
 if r['direct_changed_supplier']:
  text=f"\n[{r['index']}] {r['id']}\nHYP: {r['consumer_statement_or_definition'][:650]}\n"
  for u in r['uses']:
   if not u['equivalence_obligation']:continue
   text+='FROM '+u['supplier']+'\n'+'\n'.join(dict.fromkeys(u['cited_passages']+u['proof_uses']))+'\n'
  direct.append(text)
 else:
  text=f"\n[{r['index']}] {r['id']}\n"
  # inspect representative actual argument for every direct supplier edge; no claim of whole-proof audit.
  for u in r['uses']:
   p=(u['proof_uses'] or u['cited_passages'] or [r['consumer_statement_or_definition']])[0]
   p=re.sub(r'\[\[[^\]]+\]\]','',p);p=re.sub(r'\s+',' ',p)
   text+=u['supplier']+' '+p[:135]+'\n'
  indirect.append(text)
for name,parts in [('direct',direct),('indirect',indirect)]:
 chunks=[];s=''
 for part in parts:
  if len(s)+len(part)>21000 and s:chunks.append(s);s=''
  s+=part
 if s:chunks.append(s)
 for n,s in enumerate(chunks):(O/f'review-{name}-{n:02d}.txt').write_text(s)
 print(name,'rows',len(parts),'chunks',len(chunks),'bytes',sum(len(s) for s in chunks))
