from pathlib import Path
import json,yaml,re,hashlib
R=Path('research/quantum-build-60-2026-10-15-owner/complex');O=R/'consumer-check-round2';L=getattr(yaml,'CSafeLoader',yaml.SafeLoader)
def digest(s):return hashlib.sha256(s.encode()).hexdigest()
def sect(s,h):
 m=re.search(r'^## '+re.escape(h)+r'\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M);return m.group(1).strip() if m else ''
def contract(s):return '\n'.join(sect(s,h) for h in ['Statement','Definition','Example','Statement refuted','Open problem'])
items={};aliases={}
for p in Path('items').glob('*.md'):
 try:
  s=p.read_text();d=yaml.load(s.split('---',2)[1],Loader=L);items[d['id']]={'path':str(p),'s':s,'d':d};aliases.update({a:d['id'] for a in d.get('aliases',[])})
 except:pass
changed={p.stem for p in (R/'before').glob('*.md') if contract(p.read_text())!=contract((R/'items'/p.name).read_text())}
seen=set(changed);front=set(changed)
while front:
 nxt={i for i,v in items.items() if i not in seen and any(aliases.get(d,d) in front for d in v['d'].get('deps',[]))};seen|=nxt;front=nxt
(O/'items').mkdir(exist_ok=True)
p=R/'items/def-complex-contours-reversal-concatenation-and-closedness.md';s=p.read_text().replace('If complex contours $\\alpha,\\beta:[0,1]\\to\\mathbb C$ satisfy','For arbitrary maps $\\alpha,\\beta:[0,1]\\to\\mathbb C$ satisfying').replace('Endpoint matching makes the two expressions agree at $1/2$ and makes the map continuous there. The concatenation is rectifiable','Endpoint matching makes the two expressions agree at $1/2$, so this formula defines a map even when the factors are not paths. If both factors are complex contours, their continuity and endpoint matching make the concatenation continuous, including at the join. In this case the concatenation is rectifiable');(O/'items'/p.name).write_text(s)
rows=[];edges=[]
for idx,i in enumerate(sorted(seen),1):
 v=items[i];s=v['s'];body=s.split('---',2)[2];ps=[p.strip() for p in re.split(r'\n\s*\n',body) if p.strip()];ds=sorted({aliases.get(x,x) for x in v['d'].get('deps',[])}&seen);uses=[]
 for d in ds:
  spellings=[d]+[a for a,c in aliases.items() if c==d];cited=[p for p in ps if any('[['+q+']]' in p or '[['+q+'|' in p for q in spellings)];labels=[m.group(1) for p in cited for m in [re.match(r'^\[([FLA]\d+)\]',p)] if m];steps=[p for p in ps if re.match(r'^\d+\.\d+',p) and any(re.search(r'(?<!\w)'+q+r'(?!\w)',p) for q in labels)];up=items[d]['s'];proposal=O/'items'/(d+'.md');proposal=proposal if proposal.exists() else R/'items'/(d+'.md');after=proposal.read_text() if proposal.exists() else up;oldcontract=contract(up);newcontract=contract(after)
  uses.append({'supplier':d,'source_contract_sha256':digest(oldcontract),'proposed_contract_sha256':digest(newcontract),'contract_identical':oldcontract==newcontract,'equivalence_obligation':d if oldcontract!=newcontract else None,'cited_passages':cited,'fact_labels':labels,'proof_uses':steps,'explicit_body_citation':bool(cited)})
  edges.append((idx,i,d,bool(cited)))
 rows.append({'index':idx,'id':i,'path':v['path'],'raw_sha256':digest(s),'changed_interface_seed':i in changed,'consumer_statement_or_definition':contract(s),'consumer_proposed_contract_identical':contract(s)==contract((O/'items'/(i+'.md')).read_text() if (O/'items'/(i+'.md')).exists() else (R/'items'/(i+'.md')).read_text() if (R/'items'/(i+'.md')).exists() else s),'uses':uses,'direct_changed_supplier':any(x['supplier'] in changed for x in uses)})
(O/'source-use-sites.json').write_text(json.dumps({'changed_interface_seeds':sorted(changed),'consumer_count':len(rows),'rows':rows},ensure_ascii=False,indent=2)+'\n')
print('changed',sorted(changed),'rows',len(rows),'direct',sum(r['direct_changed_supplier'] for r in rows),'edges',len(edges),'nonexplicit',sum(not e[3] for e in edges))
# review packets: full relevant use-site paragraphs and the supplied hypotheses for direct changed edges.
for n in range(0,len(rows),100):
 batch=rows[n:n+100];t=[]
 for r in batch:
  ds=[u for u in r['uses'] if u['equivalence_obligation']]
  if ds:
   t.append(f"\n{r['index']} {r['id']}\nCONTRACT {r['consumer_statement_or_definition']}\n")
   for u in ds:t.append('SUPPLIER '+u['supplier']+'\n'+'\n'.join(u['cited_passages']+u['proof_uses'])+'\n')
 (O/f'direct-packet-{n//100:02d}.txt').write_text('\n'.join(t))
# compact indirect ledger includes actual cited clause and linked fact usage; full exact paragraphs retained in JSON.
compact=[]
for r in rows:
 if r['direct_changed_supplier']:continue
 for u in r['uses']:
  if not u['contract_identical']:continue
  p=(u['proof_uses'] or u['cited_passages'] or [r['consumer_statement_or_definition']])[0]
  p=re.sub(r'\[\[[^\]]+\]\]','',p);p=re.sub(r'\s+',' ',p)
  compact.append(f"{r['index']} {p[:190]}")
(O/'indirect-use-ledger.txt').write_text('\n'.join(compact)+'\n')
