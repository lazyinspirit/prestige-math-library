from pathlib import Path
import json,re
O=Path('research/quantum-build-60-2026-10-15-owner/complex/consumer-check-round2');x=json.load(open(O/'source-use-sites.json'));lines=[]
for r in x['rows']:
 if r['changed_interface_seed'] or r['direct_changed_supplier']:continue
 us=sorted(r['uses'],key=lambda u:(not bool(u['proof_uses']),not bool(u['cited_passages'])))
 u=us[0];ps=u['proof_uses'] or u['cited_passages'] or [r['consumer_statement_or_definition']];p=ps[0];p=re.sub(r'\[\[[^\]]+\]\]','',p);p=re.sub(r'\s+',' ',p)
 # whole short source use, otherwise its first two sentences; exact complete argument remains in JSON.
 if len(p)>300:p=p[:300]+' …'
 lines.append(f"[{r['index']}] {p}")
for n in range(0,len(lines),80):(O/f'inspect-indirect-{n//80:02d}.txt').write_text('\n'.join(lines[n:n+80])+'\n')
print(len(lines),(len(lines)+79)//80)
