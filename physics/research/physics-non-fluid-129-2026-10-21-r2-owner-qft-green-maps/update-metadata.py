import json,re,os,yaml,hashlib
from pathlib import Path
run='physics-non-fluid-129-2026-10-21-r2';base=Path(f'research/{run}-owner-qft-green-maps')
manifest=Path(f'research/{run}-batch-68.pages.json');pages=json.loads(manifest.read_text())
for page in pages:
 for row in page.get('items',[])+page.get('examples',[]):
  s=Path('items',row['id']+'.md').read_text();_,fm,b=s.split('---',2);m=yaml.safe_load(fm)
  for k in ['deps','dependency_roles','dependency_level']:row[k]=m[k]
  h='Definition' if m['kind']=='definition' else 'Statement';row['statement']=re.search(r'^## '+h+r'\n\n(.*?)(?=\n## |\Z)',b,re.M|re.S).group(1).strip()
def atomic(p,x):
 t=p.with_suffix('.new');t.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n');os.replace(t,p)
atomic(manifest,pages)
contract=Path(f'research/{run}-batch-68.proof-contracts.json');d=json.loads(contract.read_text())
new=['lem-qftx-compact-green-support-overlap','lem-qftx-smooth-scalar-cauchy-evolution','thm-qftx-green-hyperbolic-existence']
notes={
new[0]:{'empty':'Step 2.1 uses the empty cover when either compact is empty.','zero':'Step 1.1 uses nonzero future timelike coordinate tangents, avoiding a zero-velocity causal curve.','one':'Step 2.1 includes singleton input sets with the same finite-diamond enclosure.','degenerate':'The Statement uses closed actual overlaps; step 2.1 does not assume a closed causal future.','endpoints':'Step 1.1 includes endpoints of the straight smooth coordinate segments.','nonempty-choice':'Step 2.1 selects a finite subcover from all eligible boxes, without infinite choices.'},
new[1]:{'empty':'Step 3.1 gives the zero solution when all data and source supports are empty.','zero':'Steps 2.2 and 2.3 prove zero-data/source uniqueness by nonnegative energy and Gronwall.','degenerate':'Step 1.2 has positive A0 for every smooth Lorentzian splitting and no sign restriction on V.','endpoints':'Step 3.1 excludes finite continuation endpoints using a common local time after homogeneous normalization.','nonempty-choice':'Fact A1 and steps 1.1 and 3.1 distinguish countable slab choices from DC in causal limit curves.'},
new[2]:{'empty':'Step 1.1 explicitly defines E±0=0 without taking a minimum over empty support.','zero':'Step 1.2 proves linearity and both inverse identities including the zero test.','degenerate':'The Statement permits arbitrary smooth real V; no positivity is used in step 3.1.','endpoints':'Step 1.1 chooses slices strictly before or after compact source support and proves choice independence.','nonempty-choice':'Fact A1 and step 1.1 inherit CC+DC from the actual Cauchy construction.'}}
for id in new:
 bd=[]
 for case in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']:
  if case in notes[id]:bd.append({'case':case,'status':'checked','evidence':notes[id][case]})
  else:bd.append({'case':case,'status':'not_applicable','reason':'The statement is a construction/uniqueness assertion, with no separate '+case+' equivalence or cardinality boundary.'})
 d['contracts'][id]={'citations':[],'derivations':[],'routine_steps':[],'boundaries':bd}
d['scope']=new+d['scope']
# Staged regeneration keeps canonical JSON atomic.
atomic(base/'contracts.staged.json',d)
coverage=Path(f'research/{run}-batch-68.coverage.json');c=json.loads(coverage.read_text())
c['status']='authored; owner Green construction and closed-support CC repair supplied; prior source-fetch history preserved'
for src in c['pages'][0]['sources']:
 if src['url']=='https://arxiv.org/pdf/0806.1036':
  for content in src['contents']:
   if content['disposition']=='deferred':
    content.update(name='Smooth scalar Cauchy evolution (Theorems 3.2.11–3.2.12) and continuous Green maps (Corollary 3.4.3)',disposition='included',item='thm-qftx-green-hyperbolic-existence',reason='The local Cauchy reduction, metric causal support, compact-slab continuation, energy estimates and LF continuity are now proved in lem-qftx-smooth-scalar-cauchy-evolution; the Green maps are constructed in the named theorem. No external proof input is adopted.')
    content.pop('destination',None)
    content['source_review']={'read_extent':'The batch author prior reading remains recorded above. Escalation owner separately retrieved the complete PDF and read Theorems 3.2.11–3.2.12, their full proofs (printed pp.85–86), and the Green construction/Corollary3.4.3/adjoint overlap passages (printed pp.87–90).','supports':'Smooth compact-data Cauchy evolution, continuity and retarded/advanced existence are the literature-derived statement targets.','limitations':'The new proofs use the actual local published symmetric-hyperbolic and geometry suppliers, not BGP theorem import. No claim of whole-monograph reading or independent mathematical acceptance.'}
  src['contents'].append({'name':'Closed advanced-retarded support overlap under Countable Choice','disposition':'included','item':'lem-qftx-compact-green-support-overlap','source_review':{'read_extent':'Green adjoint overlap argument in Lemma3.4.4, printed pp.89–90.','supports':'Compact overlap permits integration by parts for oppositely supported Green solutions.','limitations':'The CC-only finite coordinate-box/compact-diamond enclosure is explicitly proved locally; no DC-free causal-simplicity claim is made.'}})
atomic(coverage,c)
