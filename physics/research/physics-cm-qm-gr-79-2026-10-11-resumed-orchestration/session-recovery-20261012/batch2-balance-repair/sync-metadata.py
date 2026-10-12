from guarded_io import *
import yaml
changed={'lem-cm-piecewise-c1-jump-derivative','thm-cm-compact-continuation-for-locally-lipschitz-odes','thm-cm-work-energy-balance','thm-cm-impulse-restitution-and-energy-loss','ex-cm-balances-continuation-boundary-checks','pthm-cm15-impact-balance','cex-cm15-restitution-above-one-increases-energy'}
for batch in [2,31]:
 f=f'research/{RUN}-batch-{batch}.pages.json';d=json.load(open(f))
 for page in d:
  for row in page['items']:
   if row['id'] not in changed:continue
   s=item(row['id']);parts=re.split(r'^---\s*$',s,flags=re.M);m=yaml.safe_load(parts[1]);body=parts[2].strip();heading={'lemma':'Statement','theorem':'Statement','physics-theorem':'Statement','example':'Example','counterexample':'Statement refuted'}[m['kind']];match=re.search(r'^## '+re.escape(heading)+r'\s*\n([\s\S]*?)(?=^## |\Z)',body,re.M);claim=match[1].strip();row['statement']=('## '+heading+'\n\n'+claim) if row.get('statement','').startswith('## ') else claim
   for key in ['title','deps','dependency_roles','physical_scope','dependency_level']:
    if key in m:row[key]=m[key]
 write(f,json.dumps(d,indent=2,ensure_ascii=False)+'\n')
# Existing geometry source bindings in batch31 cross-batch-dependencies are not rewritten.
