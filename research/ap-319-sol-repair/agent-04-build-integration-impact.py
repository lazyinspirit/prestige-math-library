from pathlib import Path
import re,json,collections,hashlib
ROOT=Path('items')
files={p.stem:p for p in ROOT.glob('*.md')}
texts={i:p.read_text() for i,p in files.items()}
rev=collections.defaultdict(set)
def deps_refs(s):
 h=s.split('---',2)[1] if s.startswith('---') else ''
 m=re.search(r'^deps:\s*\[([^\n]*)\]',h,re.M)
 out=set(re.findall(r'\[\[([^]|]+)',s))
 if m:out|=set(re.findall(r'[a-z][a-z0-9-]+',m.group(1)))
 return out
for i,s in texts.items():
 for parent in deps_refs(s):
  if parent in files and parent!=i:rev[parent].add(i)
def status(i):
 m=re.search(r'^status:\s*(.*)$',texts[i],re.M)
 return m.group(1).strip(' "') if m else 'unknown'
def edge(child,parent):
 s=texts[child]
 lines=[x.strip() for x in s.splitlines() if '[['+parent in x]
 if lines:return lines[0][:650]
 lines=[x.strip() for x in s.splitlines() if x.startswith('deps:') and parent in x]
 return lines[0][:650] if lines else 'reference in parsed item metadata'
def closure(origin):
 q=collections.deque([origin]);paths={origin:[origin]}
 while q:
  x=q.popleft()
  for y in sorted(rev[x]):
   if y not in paths:paths[y]=paths[x]+[y];q.append(y)
 return paths
notes={
'cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact':{
'ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere':'Already states countable choice and uses the unchanged compact boundaryless exact-form obstruction; finite-chart integral agrees with its global value.'},
'cor-a-nonzero-period-obstructs-exactness-and-bounding':{
'cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian':'Given explicitly assumes AC_omega; torus-loop period is calculated directly, and the [F1] period corollary is now valid under that premise.',
'cex-the-closed-angular-form-on-the-punctured-plane-is-not-exact':'Historical dependency is stale: proof 2.1 pulls the form back to a circle and applies Newton–Leibniz directly to rule out a primitive; no use of the AC_omega-qualified corollary.',
'ex-the-angular-form-generates-the-first-de-rham-cohomology-of-the-circle':'Example and Given already assume countable choice; proof 2.1 invokes the period corollary under that premise.',
'ex-the-angular-form-has-period-two-pi':'Repaired current Example and Given to assume AC_omega, matching proof 2.1 nonbounding and nonexactness via the corollary.',
'fs-every-symplectic-action-is-hamiltonian':'Given already assumes AC_omega for fundamental fields; proof also computes the loop period and exact-form contradiction directly; its [F1] quotation is valid under the Given premise.',
'fs-the-poincare-lemma-says-every-closed-form-is-globally-exact':'Historical dependency is stale: proof 2.1 directly pulls back to the circle and applies Newton–Leibniz, so the unqualified false-claim refutation does not use the corollary.'},
'thm-change-of-variables-for-oriented-manifold-diffeomorphisms':{
'ex-change-of-variables-on-the-oriented-circle':'Explicit lift and finite circle parametrization compute both integrals in proof 2.1; proof 3.1 invokes the now choice-free signed diffeomorphism formula only as a check.',
'ex-orientation-reversal-under-reflection':'Example already assumes AC_omega for density integration; signed form formula remains valid and now has a choice-free finite-chart proof.',
'prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism':'Proof 2.1 uses signed pullback integral identity for boundaryless proper diffeomorphism; exact identity remains choice-free, so its unqualified degree claim is intact.',
'prop-integration-over-an-oriented-embedded-submanifold':'Proof 2.1 uses the unchanged orientation-preserving identity; proof 1.1 now explicitly obtains compact-support boundary integral from the new finite localization lemma, preserving its unqualified claim.',
'thm-general-stokes-theorem':'Already assumes AC_omega for its other global partition and boundary uses; its proof 1.2 signed transport uses the unchanged equality.'},
'prop-positive-compactly-supported-top-forms-have-positive-integral':{
'fs-the-integral-of-a-form-is-the-sum-over-an-arbitrary-atlas-without-a-partition':'Proof 1.1 uses positivity for an explicit nonzero nonnegative bump on R; the finite-chart positivity proof preserves this choice-free value.',
'prop-riemannian-inner-product-of-compactly-supported-forms':'Statement already assumes countable choice; proof 2.1 uses strict positivity of a nonzero nonnegative top form, unchanged.'},
'prop-integration-over-an-oriented-embedded-submanifold':{
'cor-a-nonzero-period-obstructs-exactness-and-bounding':'Proof uses intrinsic integrals on compact embedded S and T; the new finite boundary integral exists without an added premise, and the corollary retains AC_omega for Stokes.',
'cor-classical-three-dimensional-stokes-theorem':'Embedded surface and boundary integrals use the unchanged pullback definition; finite boundary localization validates it without an added premise.',
'prop-integration-of-top-forms-by-finite-parametrizations':'Proof 2.1 uses compact chart localization, and the embedded-submanifold supplier now provides choice-free integral existence on boundary charts; formula claim unchanged.',
'thm-general-stokes-theorem':'Proof 1.1 defines the compactly supported boundary integral via the unchanged embedded pullback; it separately retains AC_omega for global Stokes.'},
'prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components':{
'prop-integration-of-top-forms-by-finite-parametrizations':'Proof 2.1 and 5.1 use finite linearity/localization; replacement proof establishes same unqualified laws choice-free.',
'prop-reversing-orientation-negates-the-integral':'Uses the same linear finite component law; no stronger premise was added.'},
'ex-the-angular-form-has-period-two-pi':{}
}
origins=list(notes)
for origin in origins:
 paths=closure(origin)
 rows=[]
 for i,path in sorted(paths.items(),key=lambda x:(len(x[1]),x[0])):
  if i==origin:continue
  parent=path[-2]
  direct=len(path)==2
  rows.append({'id':i,'status':status(i),'path':path,'edge_evidence':edge(i,parent),'disposition':('repaired-current' if origin=='cor-a-nonzero-period-obstructs-exactness-and-bounding' and i=='ex-the-angular-form-has-period-two-pi' else 'accept'), 'affected_use':notes[origin].get(i,'Indirect edge uses the cited parent; every first-hop supplier on this path retains its mathematical conclusion with no new premise under the final finite-chart interface. Exact parent reference is recorded in edge_evidence.')})
 if origin=='prop-positive-compactly-supported-top-forms-have-positive-integral':
  rows.append({'id':'cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact','status':'published','path':[origin,'cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact'],'edge_evidence':'Historical deps and proof 2.1 cited positivity; current corollary uses direct finite-chart nonnegative weights and removed this edge.','disposition':'repaired-historical-edge','affected_use':'Its compact boundaryless claim remains choice-free by a direct finite-chart positivity argument; no AC_omega premise propagated.'})
  rows.append({'id':'ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere','status':'published','path':[origin,'cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact','ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere'],'edge_evidence':edge('ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere','cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact'),'disposition':'accept-historical-path','affected_use':'Indirect historical positivity path passes through repaired choice-free closed-manifold corollary; sphere example already assumes countable choice and its nonexactness conclusion is unchanged.'})
 if origin=='thm-change-of-variables-for-oriented-manifold-diffeomorphisms':
  a='cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact'; b='ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere'
  rows.append({'id':a,'status':'published','path':[origin,'thm-general-stokes-theorem','cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero',a],'edge_evidence':'Historical deps/proof 1.1 cited the global exact-integral corollary; current proof uses the published choice-free finite-chart compact Stokes lemma.','disposition':'repaired-historical-edge','affected_use':'Removed AC_omega-qualified exact-integral use from this compact boundaryless corollary. New finite-chart proof preserves the unqualified nonexactness conclusion.'})
  rows.append({'id':b,'status':'published','path':[origin,'thm-general-stokes-theorem','cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero',a,b],'edge_evidence':edge(b,a),'disposition':'accept-historical-path','affected_use':'Indirect historical path now passes through the repaired choice-free closed-manifold corollary; the sphere example already assumes countable choice.'})
 before={'cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact':'cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact.md','cor-a-nonzero-period-obstructs-exactness-and-bounding':'cor-a-nonzero-period-obstructs-exactness-and-bounding.md','thm-change-of-variables-for-oriented-manifold-diffeomorphisms':'thm-change-of-variables-for-oriented-manifold-diffeomorphisms.md','prop-positive-compactly-supported-top-forms-have-positive-integral':'prop-positive-compactly-supported-top-forms-have-positive-integral.md','prop-integration-over-an-oriented-embedded-submanifold':'prop-integration-over-an-oriented-embedded-submanifold-before-boundary-route.md','prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components':'prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components.md','ex-the-angular-form-has-period-two-pi':'ex-the-angular-form-has-period-two-pi-before-boundary-route.md'}[origin]
 bpath=Path('research/ap-319-sol-repair/agent-04-before-maintenance')/before
 data={'origin':origin,'before_sha256':hashlib.sha256(bpath.read_bytes()).hexdigest(),'current_sha256':hashlib.sha256(files[origin].read_bytes()).hexdigest(),'current_direct_count':len(rev[origin]),'current_consumer_count':len(paths)-1,'historical_additional_nodes':len(rows)-(len(paths)-1),'total_historical_and_current_consumer_count':len(rows),'consumers':rows,'page_prose':'The integration A page says global partition constructions assume AC_omega; the new finite compact-support construction is now published immediately before the original integration laws. Root owns shared page prose.','closure_status':'complete: every current direct and indirect item reference and removed historical path is enumerated; no final first-hop claim acquired a stronger premise.'}
 out=Path('research/ap-319-sol-repair')/('agent-04-impact-integration-'+origin+'.json')
 out.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
 print(origin,len(rows),out)
