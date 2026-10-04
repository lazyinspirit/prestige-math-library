from pathlib import Path
import json,hashlib,re
p=Path(__file__).parent; root=Path.cwd();d=json.loads((p/'inventory.json').read_text());base='physics/research/first-principles-2026-10-03/thermodynamics/'
mp={
 'def-tdmath-poisson-configuration-reference':('L21','Simple locally finite configurations; normalized unit Poisson independent-cell reference; AC/standard-Borel extension'),
 'thm-tdmath-monotone-convergence':('M27','Nonnegative measurable increasing sequence; passage of limit through integral'),
 'thm-tdmath-finite-range-lattice-pressure-limit':('M28','Finite alphabet, bounded translation-invariant finite-range list on cubes; boundary count proof'),
 'thm-tdmath-ising-chain-limit':('M18','Exact periodic one-dimensional Ising transfer eigenvalues and compact-parameter derivative bounds'),
 'thm-tdmath-stable-tempered-free-cube-grand-pressure':('L19','Stable even Borel potential plus two-sided power tail; grand positional pressure on free cubes only'),
 'thm-tdmath-canonical-interior-density-limit':('L24','Stable power-tail pair model; any exact N/volume→positive interior attainable density; no close-packing endpoint claim'),
 'lem-tdmath-integrable-tail-diagonal-gap':('L27','Nonnegative decreasing integrable radial majorant outside R; diagonal gap packing; free cubes'),
 'thm-tdmath-canonical-grand-duality':('L26','Closed upper-semicontinuous concave canonical extension; grand/canonical free-cube thermodynamic duality; not local equivalence'),
 'thm-tdmath-continuum-variational-pressure':('L23','SS and regular pair potential; normalized Poisson reference; free/periodic pressure with compact local-tame variational minimizer set; converse DLR not proved'),
 'thm-tdmath-retained-hard-zero-beta-limit':('L23a','beta=0 weight z^N times retained forbidden-pair admissibility indicator; Poisson only if no forbidden pairs'),
 'thm-tdmath-uniform-tempered-exterior-pressure':('L28','Stable regular potential plus genuine positive nonintegrably divergent core; fixed uniformly tempered square-count exterior class; explicit parameter sandwich'),
 'thm-tdmath-superstable-van-hove-pressure':('L29','Actual cell superstability and decreasing-integrable regular tails; arbitrary bounded measurable vanHove free regions; Ruelle finite-region correlation bound'),
 'thm-tdmath-periodic-fixed-n-limit':('L30','SS regular potential,beta>0,interior attainable density; periodic exact-N positional rate equals free cube rate'),
 'thm-tdmath-fixed-n-local-ensemble-equivalence':('L30','Exact-N local-tame limits in supporting grand VARIATIONAL minimizer set; singleton for actual convergence'),
 'thm-tdmath-controlled-shell-three-ensemble-equivalence':('L31','SS regular,beta>0,interior density,differentiable F_beta,supporting singleton minimizer; constructed slowly shrinking positional energy-density shell'),
 'thm-tdmath-van-hove-fixed-n-limit':('L32','SS regular arbitrary vanHove free regions; exact N/volume→positive interior density; exact remainder-core packing')}
records=[]
for i in d['external_supplier_ids']:
 consumers=[r['id'] for r in d['items'] if i in r['deps']]
 if i in mp:
  g,scope=mp[i];fname='completed-developments.md' if g.startswith('M') else 'ly-closure-developments.md';path=base+'scaffold/'+fname
  records.append(dict(id=i,path=path,proof_module=path+'#'+g.lower(),module=g,domain='mathematics',statement_hypotheses=scope,status='completed-restricted-research-argument; not presumed production-published',actual_reading='Complete actual relevant module text and current closure/source ledger records inspected this session',consumer_uses=consumers,raw_sha256=hashlib.sha256((root/path).read_bytes()).hexdigest()))
 else:
  path='items/'+i+'.md';f=root/path
  assert f.exists(),(i,'unresolved actual supplier')
  text=f.read_text();status=re.search(r'^status: (.+)$',text,re.M)[1]
  records.append(dict(id=i,path=path,domain='mathematics',statement_hypotheses={'def-countable-choice':'Countably indexed nonempty-set family admits choice function; inherited extension use','thm-caratheodory-extension-theorem':'Countable Choice; premeasure on algebra extends to generated sigma algebra','thm-dynkin-pi-lambda':'A pi-system generates the same lambda and sigma system; probability uniqueness','thm-gaussian-integral':'Improper real Gaussian integral equals sqrt(pi); positive scaling and finite products are local/M17 arguments','thm-tonelli-theorem-for-sigma-finite-product-spaces':'Sigma-finite product spaces and nonnegative product-measurable function; iterated integrals/measurability'}[i],status=status,actual_reading='Full current Statement/Definition, Facts and Proof/Remarks read this session; transitive original proofs not all reread',consumer_uses=consumers,raw_sha256=hashlib.sha256(f.read_bytes()).hexdigest()))
(p/'supplier-map.json').write_text(json.dumps({'version':1,'suppliers':records,'source_scope_note':'Thermo source proofs and predecessor closure are existing completed local suppliers, with their inherited reading evidence preserved; this worker does not claim fresh whole-reading of those PDFs. New lattice claims have complete independent arguments with the actually retrieved/read Friedli-Velenik argument extents.'},indent=2)+'\n')
manifest=[]
for f in (p/'raw').glob('*'):
 manifest.append({'path':str(f.relative_to(p)),'bytes':f.stat().st_size,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
(p/'source-manifest.json').write_text(json.dumps({'retrievals':[{'title':'Friedli and Velenik, Statistical Mechanics of Lattice Systems','requested_url':'https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf','retrieved':'2026-10-04 session','pdf_pages':590,'edition':'revised August22,2017 author complete PDF','reading_record':'source-reading.md'}],'artifacts':manifest,'failed_retrievals':[]},indent=2)+'\n')
