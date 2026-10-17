from pathlib import Path
import re,json
B=Path(__file__).resolve().parents[2];R='physics-remaining-80-2026-10-17'
def txt(i):return (B/'items'/f'{i}.md').read_text()
def section(i,name):
 m=re.search(r'^## '+re.escape(name)+r'\s*\n(.*?)(?=^## |\Z)',txt(i),re.S|re.M);assert m,(i,name);return m.group(1).strip()
def statement(i):
 for n in ['Statement','Definition','Example']:
  try:return section(i,n)
  except AssertionError:pass
 raise ValueError(i)
def cite(e,fact,source,uses,quote=None):
 q=quote if quote is not None else statement(source);assert q in statement(source),(fact,source)
 e['citations'].append({'fact':fact,'source':source,'source_section':'Definition'if source.startswith('def-')else'Statement','quote':q,'uses':uses})
def refresh_derivations(e,i):
 s=section(i,'Proof'if '## Proof'in txt(i)else'Verification');old={x['step']:x for x in e['derivations']}
 entries=[]
 for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |^## |\Z)',s,re.M|re.S):
  num,claim=m.group(1),m.group(2).strip();refs=[]
  for bracket in re.findall(r'\[([^\[\]]+)\]',claim):
   for x in bracket.split(','):
    x=x.strip()
    if re.fullmatch(r'(?:[FAL]\d+|step \d+\.\d+|given|algebra|construct)',x)and x not in refs:refs.append(x)
  cl=re.sub(r'\s*\[[^\[\]]+\](?:\s*∎)?\s*$','',claim).strip();entry=old.get(num,{'id':'step-'+num.replace('.','-'),'step':num});entry['claim']=cl;entry['inputs']=refs;entries.append(entry)
 e['derivations']=entries
# Exact optional definition citation in the mathematical example.
p=B/'items/ex-emgmath-ml-b05.md';s=p.read_text();s=s.replace(r'[A1] $\mathrm{AC}_\omega$ is exactly the countable-choice assumption required by [F3]; no full Axiom of Choice is assumed.',r'[A1] Assume the indexed Axiom $\mathrm{AC}_\omega$ of [[def-countable-choice]]: every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a function $f$ on $\mathbb N$ with $f(n)\in X_n$ for every $n$. This is the assumption required by [F3]; no full Axiom of Choice is assumed.');p.write_text(s)
for batch,items in [(17,['cor-emg-regular-counterpoised-sphere','ex-emgmath-ml-b05']),(20,['pthm-emg-counterpoised-smooth-sphere','ex-emg-ml-b05','ex-emg-ml-b06'])]:
 p=B/'research'/f'{R}-batch-{batch}.proof-contracts.json';d=json.loads(p.read_text())
 for i in items:
  e=d['contracts'][i];refresh_derivations(e,i)
  if i=='cor-emg-regular-counterpoised-sphere':
   for c in e['citations']:
    if c['fact']in('F12','F13'):c['uses']=sorted(set(c['uses'])|{'2.3','6.1'},key=lambda x:tuple(map(int,x.split('.'))))
   cite(e,'F14','thm-monotonicity-of-the-integral',['2.3','6.1'],statement('thm-monotonicity-of-the-integral').split('**Equality')[0].strip())
  elif i=='ex-emgmath-ml-b05':
   for c in e['citations']:
    if c['fact']=='F1':c['quote']=statement(c['source']).split('This is a conditional mathematical')[0].strip();c['uses']=['1.2','2.1','3.1']
    if c['fact']=='F3':c['uses']=sorted(set(c['uses'])|{'1.1'},key=lambda x:tuple(map(int,x.split('.'))))
   for source in ['lem-emg-positive-square-root-smoothness','thm-chain-rule','thm-algebra-of-derivatives']:
    q=statement(source)
    if source=='thm-chain-rule':q=q.split('**Both limit-point')[0].strip()
    if source=='thm-algebra-of-derivatives':q=q.split('Each claim')[0].strip()
    cite(e,'F4',source,['1.1','2.1'],q)
   cite(e,'F5','thm-local-coordinate-formula-for-the-exterior-derivative',['2.1'])
   if not any(c['fact']=='A1'and c['source']=='def-countable-choice'for c in e['citations']):cite(e,'A1','def-countable-choice',['1.2'])
  elif i=='pthm-emg-counterpoised-smooth-sphere':
   for c in e['citations']:
    if c['fact']=='F1':c['quote']=statement(c['source']).split('This is a conditional mathematical')[0].strip();c['uses']=['1.1','2.1','3.1']
   q=statement('lem-emg-conformastatic-curvature');q=q[q.index('The displayed Christoffel coefficients'):q.index('The Ricci components')].strip();cite(e,'F3','lem-emg-conformastatic-curvature',['1.2','1.3'],q)
   cite(e,'F4','thm-local-coordinate-formula-for-the-exterior-derivative',['1.2'])
   cite(e,'F5','thm-algebra-of-derivatives',['1.1','1.2'],statement('thm-algebra-of-derivatives').split('Each claim')[0].strip());cite(e,'F5','def-emg-explicit-power-regimes',['1.1','1.2'])
   cite(e,'A2','def-countable-choice',['1.1','1.2','1.3','2.1','3.1'])
  else:
   for c in e['citations']:
    if c['fact']=='F1':c['quote']=statement('pthm-emg-counterpoised-smooth-sphere')
   cite(e,'A1','def-countable-choice',['1.1','2.1'])
 p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 print('worksheet',batch,'updated only',items)
