from pathlib import Path
import yaml,json,hashlib,re,datetime
B=Path('research/fluid-dynamics-all-47-2026-10-23-owner-step4-classical-examples')
H=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
D={};T={}
for p in Path('items').glob('*fd*.md'):
 t=p.read_text();d=yaml.safe_load(t.split('---',2)[1]);D[d['id']]=d;T[d['id']]=t
# No aliases of either changed definition are declared. All textual x00 mentions
# were separately located using repository-wide rg, including library carriers.
assert not D['def-fd-x00'].get('aliases') and not D['def-fd-incompressible-euler-system'].get('aliases')
def closure(root):
 r=set();n={root}
 while n:
  r|=n;n={i for i,d in D.items() if i not in r and any(x in r for k in ['deps','justified_by'] for x in (d.get(k) or []))}
 return r-{root}
c=closure('def-fd-x00');assert len(c)==58,len(c)
changes=json.loads((B/'draft-change-index.json').read_text())['changes'];changed={x['id'] for x in changes}
notes={
'def-fd-incompressible-euler-system':'Repeats spacetime-pressure/spatial-integral omission; companion Definition draft fixes time; PDE, pressure-stress sign and S subset Omega unchanged.',
'def-fd-incompressible-euler-model':'Consumes only divergence-free local Euler equation, constant density and multiplier convention; no stress-integral definition is used.',
'def-fd-rotating-stratified-shallow-equations':'Uses x00 Cartesian operators and regularity on open R3 periodic lifts. Defines own torus measure and distinct 2D system; no changed curve/surface observable use.',
'def-fd-wall-defect-capillary-models':'Uses Cartesian PDE operators and defines own residual, traces and capillary system. No changed circulation/traction definition use.',
'ex-fd-x06-formal-verification':'Explicit ACω adoption proposed; stationary Stokes field, stress and exact force unchanged. Boundary surface integral is separately supplied by x06 theorem and its area-density suppliers.',
'ex-fd-x07-formal-verification':'Only scope precision changes: valid h bound and exact ratio h/pi for stated mode. No optimal global constant asserted. No x00 integral definition used.',
'ex-fd-x08-formal-verification':'Periodic branch needs independent ν=1 adoption. Material-loop integral is explicitly defined through torus lifts by x08; no Euclidean-to-torus extrapolation.',
'ex-fd-x08-application':'Same independent periodic ν=1 omission repaired. F2 retains distinct Euclidean section convention and explicitly supplied torus lift circulation. Physical description changes only by supplied numerical diffusivity; no downstream item consumes this leaf.',
'ex-fd-x06-application':'ACω already explicitly adopted. F2 definition-only draft removes proof-history attribution from the axiom definition; actual upstream x06 annular proof does use ACω. Values and public Example unchanged.',
'pthm-fd-px08-prediction':'Euclidean circulation mention is the fixed-time convention; actual torus proof uses explicit periodic lift integral at time t. Entire torus proof retains its own closed lift/material condition. No claim/hypothesis changes.',
'ex-fd-x09-application':'Steady velocity on a moving radius-one material circle; displayed Gamma(t) evaluates u(t,X(t,theta)) at each fixed time. Fixed-time definition now licenses it directly.',
'pthm-fd-px05-prediction':'Both velocities are steady spatial maps. Circulation is on closed circle in punctured Euclidean domain; x00 draft expressly retains spatial shorthand for steady sections. Bernoulli/streamline use unchanged.',
'ex-fd-x05-application':'Steady punctured-axis field, closed radius-two circle. Its u(gamma) notation is licensed by stationary section convention; curl and streamline clauses unchanged.',
'pthm-fd-px13-prediction':'Uses unchanged Euler differential equations and x13 exact exterior solution and boundary values; sphere pressure formula is the restriction of x13 smooth r>0 extension, so its independent antipodal integral computation remains valid.',
'ex-fd-x13-application':'Uses physical sphere supplier exact boundary pressure. Same boundary values and antipodal zero resultant; numerical pressures 100002 and 99997.5 unchanged.',
'ex-fd-x13-formal-verification':'Unit-sphere boundary values are inherited from exact x13 extension/restriction convention. Pressure -5/8+9 n_x²/8 and zero resultant unchanged.',
'pthm-fd-px06-prediction':'Steady Stokes field and sphere boundary derivatives are explicit in mathematical supplier. Pressure/viscous traction and 6piμaU unaffected by fixing time; ACω already assumed.',
'pthm-fd-px07-prediction':'Uses unchanged NS/Stokes differential equations, residual theorem and direct periodic-cell FTC. Spatial L2 estimates already apply to stationary fields. No changed line/surface observable use.',
'pthm-fd-px09-prediction':'Barotropic PDE and curl conventions unchanged. Its material-loop circulation already fixes t explicitly inside u(t,X(t,s)); steady example equally compatible.',
'pthm-fd-px10-prediction':'Uses unchanged NS/Poincare interfaces and explicit E(t)=integral |w(t,x)|². No circulation/traction/resultant use.',
'pthm-fd-px01-prediction':'Uses unchanged dimensional PDE scaling, stress algebra and frame conventions; momentum scaling is evaluated on corresponding spatial slices. No changed line/surface observable use.',
'pthm-fd-px04-prediction':'Stationary channel/pipe profiles, fixed-coordinate stress components and volume flux integrals. All spatial sections are time independent; values and ansatz-limited uniqueness unaffected.',
}
mathnotes={
'x01':'Exact positive scale substitutions and PDE operators only; no changed spatial observable use.',
'x02':'Barotropic/rotating linear equations and Cartesian derivatives only; finite-mode statements untouched.',
'x03':'Uses scalar Cartesian Laplacian only; finite-depth mode and hyperbolic error estimates unchanged.',
'x04':'Time-independent channel/pipe sections; stress algebra and flux integrals remain identical, including full-disk axis regularity.',
'x05':'Steady Euclidean circulation is licensed by stationary section shorthand; domain excludes axis, path closed, nonzero circulation computation unchanged.',
'x06':'Uses stationary Stokes/stress conventions. Surface force defined and computed using explicit sphere parametrization and published area integrals. Annular proof still explicitly assumes ACω.',
'x07':'Uses only unchanged NS/Stokes PDE system. Generic bounded-domain residual and separate nonsharp periodic h bound unchanged.',
'x08':'Half-space PDE unchanged; torus circulation is explicitly defined through periodic lifts, at each fixed t, independent of x00 Euclidean curve interface.',
'x09':'Material-loop Gamma(t) already evaluates u(t,X(t,s)) at fixed time; barotropic equations, streamline domain and Kelvin proof unchanged.',
'x10':'Uses unchanged differential equations and x07 bound. Energy E(t) already evaluated on each time slice; no changed surface/line observable.',
'x11':'Uses only Cartesian scalar Laplacian, reduced by third-coordinate independence. Linear interface mode and Sobolev claims unchanged.',
'x13':'Proof-only extension on D={r>0} supplies stationary smooth ambient field around sphere; original Statement retained byte-identically, and all parameters including U=0 remain allowed.'}
for k,v in mathnotes.items():notes['thm-fd-'+k]=v
branch={
'ex-fd-x01-application':'scaled incompressible shear and independent barotropic equilibrium; periodic-lift equations',
'ex-fd-x01-formal-verification':'positive parameter/Re/Ma algebra',
'ex-fd-x02-application':'acoustic/inertial finite-mode substitution',
'ex-fd-x03-application':'finite-depth mode and relative-error substitutions',
'ex-fd-x04-application':'stationary channel/pipe flux and shear values',
'ex-fd-x04-formal-verification':'stationary channel/pipe exact profiles and spatial flux integrals',
'ex-fd-x05-formal-verification':'stationary closed-circle vortex circulation and rotation Bernoulli values',
'ex-fd-x07-application':'stationary rotating-ball residual; common velocity means zero velocity error',
'ex-fd-x09-formal-verification':'uniform steady field and explicitly timed translating material circle',
'ex-fd-x10-application':'explicit timed periodic shear energy decay',
'ex-fd-x10-formal-verification':'explicit timed periodic shear energy decay',
'ex-fd-x11-application':'exact linear vortex-sheet growing mode',
'ex-fd-capillary-restoring-sign':'locally defined periodic Fourier mode and capillary symbol',
'ex-fd-capillary-zero-tension-limit':'mode frequency algebra and zero-tension parameter limit',
'ex-fd-coriolis-no-work':'pointwise algebraic Coriolis orthogonality',
'ex-fd-geophysical-rest-state':'locally defined torus energy integral for stationary fields',
'post-fd-capillary-linear-free-surface':'own first-order capillary equations/trace definitions, reached through wall/capillary mathematical formulation',
'post-fd-geophysical-model-branches':'own linear Boussinesq/shallow-water model assumptions, reached through derivative conventions',
'pthm-fd-capillary-wave-model-prediction':'own Fourier-mode definitions and first-order capillary boundary model',
'pthm-fd-geophysical-conditional-energy':'explicit time-section energy integral from unchanged stratified supplier',
' thm-fd-capillary-gravity-dispersion-energy':'explicit time-section energy integrals and periodic boundary model',
' thm-fd-common-wall-residual-error':'explicit time-section L2 residual norms and wall-trace differences',
' thm-fd-shallow-water-smooth-energy':'own 2D differential equation and time-section energy integral',
' thm-fd-stratified-linear-energy':'own 3D equation and explicit time-section energy integral'}
for k,v in branch.items():notes[k.strip()]='Consumes '+v+'. The inherited x00 Cartesian differential/steady conventions are unchanged; no use requires an unfixed spacetime field in a spatial line/surface integral.'
assert c<=notes.keys(),sorted(c-notes.keys())
rows=[]
for i in sorted(c):
 pars=T[i].split('---',2)[2].split('\n\n')
 direct=[x for k in ['deps','justified_by'] for x in D[i].get(k,[]) or [] if x=='def-fd-x00' or x in c]
 excerpts=[q for q in pars if '[[def-fd-x00]]' in q or any('[['+x+']]' in q for x in direct)]
 rows.append(dict(id=i,path='items/'+i+'.md',raw_sha256=H('items/'+i+'.md'),domain=D[i].get('domain'),reached_suppliers=direct,disposition='proposal-repair' if i in changed else 'unchanged-interface-use-compatible',reviewed_use=notes[i],source_excerpts=excerpts,review_limit='Focused changed-interface use/assumption check; not a fresh independent audit of every inherited proof.'))
(B/'consumer-use-matrix.json').write_text(json.dumps({'run':'fluid-dynamics-all-47-2026-10-23','reviewer':'/root/fluid_step4_classical_examples','native_review':False,'x00_declared_closure_count':len(c),'euler_definition_closure':sorted(closure('def-fd-incompressible-euler-system')),'rows':rows},indent=2)+'\n')
# Public example/scope changes are generated leaves; verify exact identifiers occur
# in no other item body or metadata. Library inventories are placement only.
leaves=['ex-fd-x06-formal-verification','ex-fd-x07-formal-verification','ex-fd-x08-formal-verification','ex-fd-x08-application']
leafrows=[]
for i in leaves:
 mentions=[p.stem for p in Path('items').glob('*.md') if p.stem!=i and i in p.read_text()]
 assert not mentions,(i,mentions)
 leafrows.append({'id':i,'other_item_mentions':mentions,'finding':'No direct, indirect or nonlogical item consumers. Existing compact page inventory placement remains unchanged.'})
(B/'leaf-interface-consumers.json').write_text(json.dumps(leafrows,indent=2)+'\n')
imports=json.load(open('research/math-imports.json'));pins={x['path']:x['sha256'] for x in imports['files']}
sourceids=['def-divergence-and-curl-of-a-c1-vector-field','def-laplacian-of-a-c2-function','def-jacobian-matrix-and-gradient','def-euclidean-inner-product','def-scalar-and-vector-line-integrals-along-piecewise-c1-paths','def-oriented-unit-normal-and-flux-of-a-surface-patch','def-first-fundamental-form-and-surface-area-density','def-surface-area-and-scalar-surface-integral-of-a-patch','def-countable-choice','thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann']
inputs={x['path']:x['before_raw_sha256'] for x in changes}
inputs.update({r['path']:r['raw_sha256'] for r in rows})
sources=[]
for i in sourceids:
 p='items/'+i+'.md';h=H(p);sources.append({'id':i,'path':p,'raw_sha256':h,'import_pin':pins.get(p),'pin_matches':pins.get(p)==h,'reading':'Read complete current local imported carrier; no canonical original edits and no external full-text retrieval claimed.'});inputs[p]=h
inputs['research/math-imports.json']=H('research/math-imports.json')
(B/'source-evidence.json').write_text(json.dumps({'local_published_suppliers':sources,'local_draft_suppliers_fully_read':['thm-fd-x06','thm-fd-x07','thm-fd-x08','thm-fd-x09','def-fd-incompressible-euler-system'],'external_source_reading':'None newly retrieved. Literature citations remain existing contextual references; all proposed corrections follow direct typed definitions and explicit algebra in actual carriers. Prior Step3 reports used as historical navigation only; their reviews not adopted as new native evidence.'},indent=2)+'\n')
(B/'reviewed-input-raw-guards.json').write_text(json.dumps(inputs,indent=2)+'\n')
print('Consumer rows',len(rows),'Euler-definition closure',len(closure('def-fd-incompressible-euler-system')),'source pins all match',all(x['pin_matches'] for x in sources))
print('Current source drift',[(x['id'],H(x['path'])!=x['before_raw_sha256']) for x in changes])
