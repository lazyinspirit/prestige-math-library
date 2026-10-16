from pathlib import Path
import json,re
b=Path(__file__).parent;a=json.load(open(b/'source-use-inventory.json'));direct=[r for r in a if r['direct_roots']];out=[]
for r in direct:
 s=Path(r['file']).read_text();g=re.search(r'\*\*Given:\*\*(.*?)(?=\n\n)',s,re.S);hyp=g[1].strip().replace('\n',' ')if g else(r['statement']or'')
 labels=[]
 for v in r['direct_supplier_uses']:
  m=re.match(r'\[([FLA]\d+)\]',v['text'])
  if m:labels.append(m[1])
 steps=[]
 for paragraph in s.split('\n\n'):
  if re.match(r'\d+\.\d+ ',paragraph) and (any(re.search(r'\b'+re.escape(l)+r'\b',paragraph)for l in labels) or any(root in paragraph for root in r['direct_roots'])):steps.append(paragraph)
 record={'id':r['id'],'hypotheses':hyp,'fact_labels':labels,'supplier_uses':r['direct_supplier_uses'],'relevant_steps':steps}
 out.append(record)
(b/'direct-source-windows.json').write_text(json.dumps(out,indent=2)+'\n')
for k in range(0,len(out),20):
 text=[]
 for r in out[k:k+20]:
  text.append('FILE '+r['id']+'\nHYP '+r['hypotheses'][:220]);text.append('USE '+' | '.join(v['text'][:240]for v in r['supplier_uses']))
  if r['relevant_steps']:
   for st in r['relevant_steps'][:2]:text.append('STEP '+st[:440])
  else:text.append('STEP no separately labelled arithmetic step; supplier use is in definition prose or included among a compound fact.')
 (b/f'direct-{k//20+1:02}.txt').write_text('\n'.join(text)+'\n')
print(len(out))
