from pathlib import Path
import yaml,re,json,hashlib
out=Path('research/frontier-44-special-representation-examples-28-six-step-published-owner-repairs/batch-2')
texts={p.stem:p.read_text() for p in Path('items').glob('*.md')}
def lists(s,key):
 fm=re.match(r'^---\n(.*?)\n---\n',s,re.S)[1]
 m=re.search(r'^'+key+r':[^\n]*(?:\n(?:[ \t]+[^\n]*|- [^\n]*))*',fm,re.M)
 return (yaml.safe_load(m[0]) or {}).get(key,[]) or [] if m else []
alias={x:i for i,s in texts.items() for x in [i]+lists(s,'aliases')}
deps={i:set(alias.get(d,d) for d in lists(s,'deps')) for i,s in texts.items()}
for p in (out/'before').glob('*.md'):
 deps[p.stem]|={alias.get(d,d) for d in lists(p.read_text(),'deps')}
records={}
for target in ['def-dependent-choice','thm-countable-union-of-countable']:
 seen={target}; levels=[]
 while True:
  new={i for i,ds in deps.items() if i not in seen and ds&seen}
  if not new:break
  levels.append(sorted(new));seen|=new
 direct=sorted(i for i,ds in deps.items() if target in ds)
 records[target]={'method':'Mechanically read complete source bytes and union old/current deps and aliases; this inventory is not a mathematical audit.','direct':direct,'levels':levels,'total':len(seen)-1}
 excerpts=[]
 for i in direct:
  s=texts[i];blocks=s.split('\n\n'); keys=[target]+lists(texts[target],'aliases')
  selected=[b for b in blocks if not b.startswith('---') and any(k in b for k in keys)]
  excerpts.append('## '+i+'\n\n'+'\n\n'.join(selected))
 (out/(target+'-direct-use-extracts.md')).write_text('\n\n'.join(excerpts)+'\n')
 print(target,'direct',len(direct),'closure',len(seen)-1,'extract bytes',sum(len(x) for x in excerpts))
(out/'consumer-closure.json').write_text(json.dumps(records,indent=2)+'\n')
projections={}
for i in ['thm-schroder-bernstein','thm-n-cross-n-countable','def-dependent-choice','thm-countable-union-of-countable']:
 old=(out/'before'/(i+'.md')).read_text();cur=texts[i]
 if i=='def-dependent-choice':
  def proj(s):return s[s.index('## Definition'):s.index('**The starting point may be dropped.')]
 elif i=='thm-countable-union-of-countable':
  def proj(s):return s[s.index('## Statement'):s.index('**The ')] + s[s.index('## Facts & Assumptions'):s.index('## Remarks')]
 else:
  def proj(s):return s[s.index('## Statement'):s.index('## Remarks')]
 a,b=proj(old),proj(cur); assert a==b,i
 projections[i]={'projection_equal':True,'sha256':hashlib.sha256(a.encode()).hexdigest(),'description':'DC defining axiom and preceding explanation; union formal theorem plus facts and proof; other theorem full Statement/Facts/Proof. Explanatory/remark repairs outside projection.'}
(out/'unchanged-consumer-interfaces.json').write_text(json.dumps(projections,indent=2)+'\n')
