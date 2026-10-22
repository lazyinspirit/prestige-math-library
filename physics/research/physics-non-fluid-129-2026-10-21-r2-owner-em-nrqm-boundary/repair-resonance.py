from pathlib import Path
import json,hashlib
base=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-em-nrqm-boundary');p=Path('items/def-nrqmx-resonance-matrix-element-poles.md');old=p.read_text()
archive=base/(p.name+'.preimage')
assert not archive.exists(), 'Applied repair: refuse to overwrite the archived preimage'
archive.write_bytes(p.read_bytes())
a='for the stated $f,h\\in X$. If $z_0\\in D$ is nonreal and for some $f,h\\in X$ the continued function satisfies'
b='for the stated $f,h\\in X$. A **meromorphic continuation** on $D$ is instead a specified family $\\widetilde r_{f,h}$ agreeing with $r_{f,h}$ on $D\\cap\\{\\operatorname{Im}z>0\\}$, holomorphic on a neighborhood of $E_0$, and holomorphic elsewhere on $D$ except for isolated poles. For such a meromorphic continuation, if $z_0\\in D$ is nonreal and for some $f,h\\in X$ the continued function satisfies'
assert old.count(a)==1
new=old.replace(a,b).replace('near $z_0$, for an integer $k','on a punctured neighborhood of $z_0$, for an integer $k')
p.write_text(new)
oldbody=old.split('## Definition\n\n',1)[1].split('\n## Definition references')[0].strip();newbody=new.split('## Definition\n\n',1)[1].split('\n## Definition references')[0].strip()
proposals=[]
for path in [Path('research/physics-non-fluid-129-2026-10-21-r2-batch-45.pages.json')]:
 d=json.loads(path.read_text())
 def walk(x,pointer=''):
  if isinstance(x,dict):
   for k,v in x.items():walk(v,pointer+'/'+k)
  elif isinstance(x,list):
   for k,v in enumerate(x):walk(v,pointer+'/'+str(k))
  elif isinstance(x,str) and oldbody==x:proposals.append({'path':str(path),'pointer':pointer,'old':x,'new':newbody})
 walk(d)
(base/'resonance-definition-repair.json').write_text(json.dumps({'source':str(p),'before_sha256':hashlib.sha256(old.encode()).hexdigest(),'after_sha256':hashlib.sha256(new.encode()).hexdigest(),'old_definition':oldbody,'new_definition':newbody,'page_mirror_proposals':proposals,'direct_and_indirect_consumers':['lem-nrqmx-gaussian-resolvent-continuation','thm-nrqmx-rank-one-resonance-continuation'],'consumer_dispositions':{'lem-nrqmx-gaussian-resolvent-continuation':'The explicit formula is holomorphic on D avoiding zero and agrees in the upper half; it retains exactly the regular analytic-continuation subcase. Full current argument read. No source change needed.','thm-nrqmx-rank-one-resonance-continuation':'Free matrix elements and numerator factors remain holomorphic on D; their quotient by finite-order denominator zeros is meromorphic, regular near crossing where the denominator is nonzero, and has the asserted lower-half-plane pole. Full current argument read. No source change needed.'}},indent=2)+'\n')
