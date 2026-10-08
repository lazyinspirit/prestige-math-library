import json,re,yaml,hashlib
from pathlib import Path
ids=['thm-classification-of-the-irreducible-unitary-dual-of-sl2-r','thm-plancherel-support-for-sl2-r','thm-tempered-status-of-the-sl2-r-unitary-series']
def read(id):
 t=Path('items',id+'.md').read_text();m=re.match(r'^---\n(.*?)\n---\n(.*)$',t,re.S);assert m,id;return yaml.safe_load(m[1]),m[2]
def section(t,h):
 m=re.search(r'^## '+re.escape(h)+r'\s*\n(.*?)(?=^## |\Z)',t,re.M|re.S);return m[1].strip() if m else ''
def quote(id):
 f,t=read(id)
 for h in ['Statement','Definition','Example','Remark']:
  if section(t,h):return h,section(t,h)
 raise Exception(id)
base='research/frontier-43-complex-representation-15-batch-5.'
pages=json.load(open(base+'pages.json'));cs=json.load(open(base+'proof-contracts.json'))
B={
ids[0]:{'empty':'Statement assumes nonzero irreducibles, and Proof2.1 obtains a nonzero K-type.','zero':'Proof5.1 includes the even zero principal parameter and separates the odd zero direct sum.','one':'Proof2.1 proves each K-line has dimension at most one; Proof5.1 includes the trivial one-dimensional singleton.','degenerate':'Proof5.1–7.1 treat all exceptional strings, finite strings and the reducible odd endpoint.','endpoints':'Proof5.1–7.1 distinguish I00 from the two odd limits and exclude reducible I10 from the dual.','nonempty-choice':'Proof8.1 chooses a countable dense group subset under AC; phase recursion is fixed from one initial vector.','iff-forward':'Proof3.1 gives compacts/GCR; Proof8.1 uses actual local GCR-to-factor/type-I and group Fell/Mackey interfaces.','iff-reverse':None},
ids[1]:{'empty':'Statement assumes the nonempty group SL2(R); Proof5.1 extends fields by zero off the conull support.','zero':'Proof6.1 includes the zero test and Proof9.1 excludes zero range fibres by the common countable dense smooth family.','one':'Proof10.2 treats a single atomic discrete fibre with arbitrary rank-one vectors, including unit vectors.','degenerate':'Proof4.1 removes redundant sign copies; Proof5.1 uses a conull inverse and zero extensions without a global selector.','endpoints':'Proof2.1 and Proof7.1 show no zero atoms but positive support at I00 and both limits; Proof10.1 uses genuine class kernels at null endpoints.','nonempty-choice':'Proof1.4 chooses countable smooth approximants, Proof5.1 uses actual conull selections and Proof9.1 chooses one genuine irreducible fibre after countably many null exclusions.','iff-forward':'Proof6.1 gives isometry and Proof7.2–9.1 prove onto; Proof10.1 identifies support with regular weak containment.','iff-reverse':'Proof10.1 proves both directions of the class-kernel/support identity; Proof1.3 excludes complementary and trivial classes by positive reduced-algebra witnesses.'},
ids[2]:{'empty':'Statement concerns irreducible dual classes and excludes the reducible odd zero sum.','zero':'Proof2.1 treats the even zero principal class and the two odd zero irreducible summands.','one':'Proof3.1 excludes the one-dimensional trivial class by the positive witness in its Plancherel supplier.','degenerate':'Proof2.1 explicitly separates the reducible I10 from its two tempered irreducible summands.','endpoints':'Proof2.1 includes the principal zero endpoint and limits; Proof3.1 covers both signs of the open complementary interval.','nonempty-choice':'Statement inherits AC from the exact suppliers; Proof1.1–3.1 introduces no new vector/field choice.','iff-forward':'Proof1.1 uses the actual kernel/closed-support bridge proved in the Plancherel supplier, and Proof2.1 locates all asserted tempered classes.','iff-reverse':'Proof3.1 excludes every complementary class, by sign equivalence to the positive representative, and the trivial class.'}}
for id in ids:
 f,t=read(id)
 for p in pages:
  for row in p['items']:
   if row['id']==id:
    row['deps']=f['deps'];row['statement']=section(t,'Statement');row['provenance']=f['provenance'];row['sources']=f['sources'];row['strategy']='Full actual supplier-first local argument in the item Proof. '+('The single exact authorized original Harish-Chandra trace identity remains cited; Haar conversion, formal degrees, field/isometry/onto, support and exclusions are local.' if id==ids[1] else 'All former missing-supplier caveats are reconciled against the completed local interfaces.')
 facts=[]
 for b in re.split(r'\n\s*\n',section(t,'Facts & Assumptions')):
  m=re.match(r'\[([FAL]\d+)\]\s*(.*)',b,re.S)
  if m:facts.append((m[1],re.findall(r'\[\[([^\]|]+)',m[2])))
 steps=[(m[1],m[2].strip()) for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',section(t,'Proof'),re.M|re.S)]
 citations=[]
 for fact,links in facts:
  for source in links:
   h,q=quote(source);citations.append(dict(fact=fact,source=source,source_section=h,quote=q,uses=[n for n,s in steps if re.search(r'\b'+fact+r'\b',s)]))
 deriv=[]
 for n,s in steps:
  inp=[]
  for a,b in re.findall(r'\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b',s):
   tok='step '+a if a else b
   if tok not in inp:inp.append(tok)
  deriv.append(dict(id='derivation-'+n,claim=re.sub(r'\s*\[[^\]\n]+\]\s*(?:∎)?\s*$','',s).strip(),step=n,inputs=inp))
 bounds=[dict(case=c,status='checked',evidence=e) if e else dict(case=c,status='not_applicable',reason='The Statement is a classification/exhaustion conclusion, not a separate converse implication.') for c,e in B[id].items()]
 cs['contracts'][id]=dict(citations=citations,derivations=deriv,routine_steps=[],boundaries=bounds)
 print(id,len(citations),len(steps))
# Current quotations to changed suppliers, and completed external supplier interfaces in these actual consumers.
for id,entry in cs['contracts'].items():
 for c in entry.get('citations',[]):
  if c['source'] in ids or id in ids:
   h,q=quote(c['source']);c['source_section']=h;c['quote']=q
# Exact external A homes used by the added field/HS/smoothing proof steps.
extra=['measurable-hilbert-fields-and-direct-integral-operators','orthonormal-bases-parseval-and-fourier-series','compact-self-adjoint-hilbert-schmidt-and-trace-class-operators','square-integrable-kernels-and-hilbert-schmidt-compactness','the-lebesgue-integral-and-the-convergence-theorems','measures-and-their-basic-properties','density-separability-and-convolution-in-lp']
for p in pages:
 if p['kind']=='A':
  for home in extra:
   if home not in p['requires']:p['requires'].append(home)
page=Path('library/representation-theory/sl2-r-discrete-series-and-unitary-dual.md');t=page.read_text();r=next(p['requires'] for p in pages if p['kind']=='A');t=re.sub(r'^requires:.*$',lambda _:'requires: ['+', '.join(r)+']',t,flags=re.M);page.write_text(t)
for suffix,d in [('pages',pages),('proof-contracts',cs)]:Path(base+suffix+'.json').write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
# Cross-input evidence retains root-owned statuses; this is actual-use provenance, not a decision.
cross=json.load(open(base+'cross-batch-dependencies.json'))
for row in cross:
 if row.get('consumer') in ids and row.get('kind')=='item':
  supplier=row['supplier'];h=hashlib.sha256(Path('items',supplier+'.md').read_bytes()).hexdigest()
  row['evidence']='Same-owner focused round1 actual-use reconciliation against stable supplier raw SHA256 '+h+'. Complete current supplier proof and this exact consumer use were read; former absent/draft-only caveats are resolved by local field/Borel/compact or endpoint arguments. Root retains item decisions and stable run certification. Evidence: research/frontier-43-complex-representation-15-sl2-batch5-typei-round1-evidence/evidence.json.'
# Newly explicit batch1 criteria/coding/field bridge edges only.
allrows={(r.get('consumer'),r.get('supplier')) for r in cross}
for id in ids:
 f,t=read(id)
 for supplier in f['deps']:
  sf,_=read(supplier)
  if sf.get('pipeline_run')=='frontier-43-complex-representation-15' and supplier not in [x['id'] for p in pages for x in p['items']] and (id,supplier) not in allrows:
   cross.append(dict(kind='item',consumer=id,supplier=supplier,status='open',evidence='Actual local supplier interface reviewed by same repair owner; raw SHA256 '+hashlib.sha256(Path('items',supplier+'.md').read_bytes()).hexdigest()+'. Root owns decisions/certification; see focused round1 evidence.'))
Path(base+'cross-batch-dependencies.json').write_text(json.dumps(cross,indent=2,ensure_ascii=False)+'\n')
# Preserve fetch receipts; make source audit versus actual local proof boundaries explicit.
cov=json.load(open(base+'coverage.json'))
for page in cov['pages']:
 for src in page['sources']:
  for row in src['contents']:
   if row.get('item')==ids[1]:
    if 'Hochs' in src['title']:
     row['reason']='Complete notes were read for the existing source audit. The original trace identity alone is cited under the exact recorded HC authority (original unread); smooth norm identity, native/source scale, positive-parameter quotient, formal degrees, HS field/isometry/onto and closed-support/tempered bridge are proved locally. The source character/orbital derivations are not imported as local proofs.'
    elif 'Frahm' in src['title']:row['reason']='Corroborating source audit only; no imported character or Plancherel-onto proof is claimed. The full actual range/support proof is local.'
Path(base+'coverage.json').write_text(json.dumps(cov,indent=2,ensure_ascii=False)+'\n')
