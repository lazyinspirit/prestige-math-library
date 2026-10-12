from pathlib import Path
import re,json,yaml
run='physics-cm-qm-gr-79-2026-10-11';b=Path('research')/(run+'-resumed-orchestration/session-recovery-20261012/batch1-geometry-repair')
def load(id):
 s=(Path('items')/(id+'.md')).read_text(); fm=yaml.safe_load(re.split(r'^---\s*$',s,flags=re.M)[1]);return fm,s

def sec(id,heading):
 s=load(id)[1];m=re.search(r'^## '+re.escape(heading)+r'\s*\n(.*?)(?=^## |\Z)',s,re.M|re.S);return m.group(1).strip()
ids=['def-cm-constrained-configuration-and-mass-metric','def-cm-traction-and-stress','ex-cm-mass-metric-on-a-sphere','lem-cm-so3-is-a-matrix-group']
p=Path('research')/(run+'-batch-1.pages.json');d=json.load(open(p))
for page in d:
 for k in ['items','examples']:
  for a in page.get(k,[]):
   if a['id'] not in ids:continue
   fm,s=load(a['id']);a['statement']=sec(a['id'],{'definition':'Definition','example':'Example','lemma':'Statement'}[fm['kind']])
   for field in ['deps','dependency_roles','provenance','sources','dependency_level']:a[field]=fm[field]
 if page['id']=='cm-math-geometry-examples':
  for x in ['rank-theorems-and-embedded-submanifolds','fundamental-trigonometric-identities']:
   if x not in page['requires']:page['requires'].append(x)
p.write_text(json.dumps(d,indent=2)+'\n')
p=Path('library/non-relativistic-classical-mechanics-mathematics/cm-math-geometry-examples.md');s=p.read_text().replace('"sine-cosine-and-the-definition-of-pi"]','"sine-cosine-and-the-definition-of-pi","rank-theorems-and-embedded-submanifolds","fundamental-trigonometric-identities"]');s=s.replace('evaluates the mass metric','establishes the smooth two-dimensional sphere and the spherical chart away from the poles and longitude seam, then evaluates the mass metric');p.write_text(s)
p=Path('library/non-relativistic-classical-mechanics-mathematics/cm-math-geometry.md');s=p.read_text().replace('nondegeneracy criterion [[lem-cm-mass-metric-positivity]],','nondegeneracy criterion [[lem-cm-mass-metric-positivity]], keeping the intrinsic dimension of the configuration manifold distinct from the ambient particle dimension $3N$,');p.write_text(s)
p=Path('research')/(run+'-batch-1.proof-contracts.json');d=json.load(open(p))
for id,c in d['contracts'].items():
 for cite in c.get('citations',[]):
  if cite['source']=='def-cm-constrained-configuration-and-mass-metric':cite['quote']=sec(cite['source'],'Definition')[:500]
c=d['contracts']['lem-cm-so3-is-a-matrix-group'];src='thm-real-square-matrix-invertible-iff-determinant-nonzero';c['citations'].append({'fact':'L4','source':src,'source_section':'Statement','quote':sec(src,'Statement'),'uses':['2.1']})
id='ex-cm-mass-metric-on-a-sphere';c=d['contracts'][id];fm,s=load(id)
uses={'L1':['1.1','2.1','3.1'],'L2':['1.2'],'L3':['1.1','1.2','1.3','2.1'],'L4':['1.1','1.3'],'L5':['1.2','1.3']};sources={'L1':['def-cm-constrained-configuration-and-mass-metric','lem-cm-mass-metric-positivity'],'L2':['def-total-derivative-in-euclidean-space','def-immersion-submersion-and-constant-rank-map'],'L3':['def-euclidean-inner-product','cor-trigonometric-parity-and-pythagorean-identity','thm-sine-and-cosine-derivatives'],'L4':['thm-a-regular-level-set-is-an-embedded-submanifold','prop-smoothness-into-an-embedded-submanifold-is-an-initial-property','thm-smooth-inverse-function-theorem-on-manifolds'],'L5':['thm-sine-cosine-signs-monotonicity-and-ranges','thm-sine-and-cosine-parametrize-the-unit-circle']}
c['citations']=[]
for fact,targets in sources.items():
 for target in targets:
  heading='Definition' if load(target)[0]['kind']=='definition' else 'Statement'
  c['citations'].append({'fact':fact,'source':target,'source_section':heading,'quote':sec(target,heading)[:500],'uses':uses[fact]})
c['derivations']=[]
for para in sec(id,'Verification').split('\n\n'):
 m=re.match(r'(\d+\.\d+) (.*)',para,re.S)
 if not m:continue
 step=m[1];tags=re.search(r'\[([^\]]+)\]\s*∎?\s*$',para)[1].split(',');inp=[x.strip().removeprefix('step ') for x in tags if x.strip() not in ['algebra','construct']]
 c['derivations'].append({'id':'step-'+step.replace('.','-'),'claim':m[2].split(' [')[0],'step':step,'inputs':inp})
for a in c['boundaries']:
 if a['case']=='nonempty-choice':a.update(reason='Step 1.1 supplies the explicit fibre point e3; step 1.3 uses uniquely determined angles and smooth local inverses, with no arbitrary-family choice.')
 if a['case']=='endpoints':a.update(reason='The open chart excludes both poles and the longitude seam; no extension across these boundaries is claimed.')
p.write_text(json.dumps(d,indent=2)+'\n')
# Coverage already retains all promised claims; add the repaired exact chart prerequisite to the existing sphere entry.
p=Path('research')/(run+'-batch-1.coverage.json');d=json.load(open(p));d['scope_prerequisite_repairs']=[{'item':ids[0],'disposition':'Ambient dimension 3N distinct from intrinsic d; all existing configuration and metric claims retained.'},{'item':ids[2],'disposition':'Regular level set establishes smooth embedded S2; spherical parametrization proved diffeomorphic onto the exact open complement of poles/longitude seam.'}];p.write_text(json.dumps(d,indent=2)+'\n')
