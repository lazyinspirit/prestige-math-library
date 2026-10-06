import json,re,pathlib,hashlib
root=pathlib.Path('.')
out=root/'research/frontier-41-ha-dt-29-owner5b-completion-group-3'
p=json.loads((root/'research/frontier-41-ha-dt-29-owner5b-completion-worklists/group-3.json').read_text())
reviewer='/root/step5b_completion_g3 (owner helper, current interface checks)'
def raw(i):return (root/'items'/f'{i}.md').read_text()
def body(i):return raw(i).split('---',2)[2]
def sha(i):return hashlib.sha256((root/'items'/f'{i}.md').read_bytes()).hexdigest()
# Mathematical interfaces checked against current carrier clauses, not native verdicts.
R={}
def put(s,r):R[s]=r
lines='''
cor-an-oriented-sphere-self-map-is-a-homotopy-equivalence-iff-its-degree-is-plus-or-minus-one|The degree +/-1 criterion is used only for sphere self-maps in positive dimension; reflection has degree -1.
cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic|Closedness and odd dimension are essential; boundary examples refute dropping closedness and do not apply the conclusion to a disk.
cor-diagonal-self-intersection-is-the-euler-number-of-tm|The diagonal is oriented from the base and its tangent-first normal identification gives the tangent Euler number.
cor-lefschetz-number-is-homotopy-invariant|The actual homotopy induces identical rational homology maps; the geometric comparison is used only with isolated fixed points.
cor-lefschetz-number-of-the-identity-is-the-euler-characteristic|Identity traces equal finite Betti dimensions; maps compared with it have an explicit homotopy.
cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree|The domain is the connected oriented positive-dimensional sphere; free homotopy classification and integer realization apply.
cor-morse-euler-characteristic-identity|The finite-CW-model Euler characteristic equals the rational Betti alternating sum, so it matches the later compact-manifold definition.
cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda|At a Morse critical point the gradient linearization is g^-1 Hess f; positive metric determinant leaves the sign (-1)^lambda.
cor-nowhere-zero-vector-field-forces-zero-euler-characteristic|The closed positive-dimensional manifold has an empty zero set, whose Poincare-Hopf sum is zero.
def-algebraic-lefschetz-number|The carrier uses the rational alternating homology trace of a continuous self-map of a closed smooth manifold; AC and finite-dimensionality are supplied where the general definition is invoked.
def-euler-characteristic-of-a-compact-manifold|The Euler value is the rational Betti alternating sum, including boundary and empty cases; explicit disk/sphere homology or the finiteness proposition supplies its existence.
def-frame-bundle-of-a-smooth-manifold|A point frame is R^m to T_xM and a normal trivialization is its inverse; tangent-bundle charts and determinant components use this direction consistently.
def-framed-cobordism-of-embedded-submanifolds|The actual track is compact and neat with literal product ends and constant normal-quotient framings over the full end collars; arbitrary collar straightening is not assumed.
def-framed-regular-preimage-of-a-map-to-a-sphere|The normal framing is beta composed with the quotient differential at the supplied regular value; positive target basis and empty fibres are handled explicitly.
def-framing-of-a-normal-bundle|The framing is an actual smooth normal-quotient isomorphism to the trivial rank-k bundle; basis descriptions use its inverse, including rank zero.
def-framing-sign-of-a-zero-dimensional-regular-preimage|The inverse frame and the normal trivialization have the same orientation sign; beta is positive so it agrees with the regular-preimage differential sign.
def-geometric-intersection-pairing-on-a-closed-oriented-manifold|The graph is the first factor and the diagonal second; the ordered transverse intersection gives det(I-Df), with no factor-order sign omitted.
def-global-geometric-lefschetz-number|The index sum is finite for isolated fixed points on a closed positive-dimensional manifold; identities with non-isolated fixed points use only the algebraic number.
def-isolated-zero-and-local-index-of-a-vector-field|The normalized chart field degree is used at isolated interior zeros; in dimension one it is the balanced S0 reduced degree and base/fibre orientations match.
def-local-fixed-point-index|The displacement is u-fhat(u), so the local sign is I-Df; isolatedness permits the degree also at degenerate points.
def-mod-two-degree-of-a-map-to-a-sphere|A finite regular fibre contributes its cardinality modulo two, with empty fibre zero and no source orientation required.
def-nondegenerate-fixed-point|Nondegeneracy means invertibility of I-Df, equivalent to graph-diagonal transversality; it is stronger than isolatedness.
def-nondegenerate-zero-of-a-vector-field|The vertical derivative at a zero is the derivative of chart components, conjugates under chart change, and invertibility isolates the zero.
def-pontryagin-thom-collapse-of-a-framed-neat-cobordism|The product-compatible neat tube and normalized cutoff produce endpoint collapses with the actual end framings, hence a homotopy on X_+.
def-pontryagin-thom-map-of-a-framed-submanifold|The normalized representative has orientation-preserving centre coordinate and exact centre differential phi; its X_+ basepoint does not impose a sphere basepoint.
def-reduced-degree-into-the-zero-sphere|The source is balanced: S0 or an oriented 1-manifold boundary. Half the signed value sum is integral; ordinary connected-manifold degree is not used on S0.
def-self-intersection-number-of-an-oriented-submanifold|The normalized tube has identity normal differential; the ordered count uses the submanifold first and the push-off second, with matching induced orientations.
def-stabilized-framed-cobordism-colimit|The construction is the colimit of actual embedded normal framings, with the new equatorial normal prepended and addition transported at a common level.
lem-a-closed-discrete-subset-of-a-compact-space-is-finite|The zero or fixed set is closed and every point isolated in the compact source; no arbitrary choice of isolating neighbourhoods is required.
lem-a-handle-decomposition-gives-a-relative-cw-complex|Only a finite CW model up to homotopy is required; the carrier does not claim a CW structure on the original smooth manifold.
lem-based-and-free-homotopy-classes-of-sphere-maps-agree|Both sphere dimensions are positive; the forgetful bijection converts the free class of a collapse to the based homotopy class.
lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps|Both maps have framed-cobordant regular preimages with positive bases; composing the collapse inverse homotopies supplies the desired map homotopy.
lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy|The framing is held fixed while compatible tubes, metrics and radii change; their collapse classes agree through metric radial comparison.
lem-closed-connected-one-manifolds-are-circles|The one-dimensional branch is nonempty, closed and connected; the empty case is treated separately.
lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map|The normalized centre case uses fibre coordinates with derivative I; arbitrary positive bases/regular values are compared by rotation and framed cylinders. The locally smooth continuous variant is used for suspension.
lem-components-of-the-frame-bundle-of-a-connected-manifold|Orientable connected bases have two sign components; a nonorientable connected base has a connected frame bundle. The carrier's moves preserve this distinction.
lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball|The boundary sphere has positive dimension and degree zero; the smooth extension is fixed radially near its boundary, enabling smooth field gluing.
lem-equal-framing-sign-points-do-not-cancel-in-oriented-zero-bordism|Signed boundary counts agree under oriented ambient framed cobordism; same-sign pairs cannot disappear and opposite-sign pairs can cancel locally.
lem-every-integer-degree-is-realized-by-a-map-to-the-sphere|The carrier uses the explicit smooth pinch model, its unique regular centre fibre and chart-sign adjustment; the nonorientable application uses the local model only, not an oriented integer degree on its domain.
lem-exact-sequence-dimension-inequality|The finite-range rational vector-space exact sequence is evaluated at -1, giving alternating-dimension cancellation; relative terms are finite before applying it.
lem-fixed-points-are-graph-diagonal-intersections|The graph preimage of the diagonal is exactly the fixed set; the graph embedding and closed diagonal give closedness and the local tangent calculation uses this same set.
lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps|The supplied framed cobordism gives a homotopy of X_+ collapses, including empty ends; tube comparison replaces the induced endpoint data.
lem-framed-cobordism-is-an-equivalence-relation|Composition uses rescaling and gluing matching literal product collars with identical end framings; no disjoint union of intersecting tracks is asserted.
lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant|A smooth endpoint-flat frame path gives its time graph and quotient framing b(t)^-1(v-a gamma'); stationary cylinders are added only when disjoint.
lem-graph-transversality-is-fixed-point-nondegeneracy|At an actual fixed point, graph plus diagonal spans the ambient tangent precisely when I-Df is invertible.
lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages|The endpoints have a common regular value; relative transversality on an endpoint-flat homotopy supplies a neat framed preimage with fixed product collars.
lem-index-sum-of-an-outward-field-is-the-gauss-degree|The first clause needs only nonzero boundary values and isolated zeros, and gives the boundary degree. Strict outwardness is needed only for replacing that map by the Gauss map.
lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold|The even-dimensional outward branch doubles the field, obtains twice the same index sum and uses zero Euler characteristic of its odd-dimensional boundary.
lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent|Only equality of degrees and locality of the germ are consumed; the carrier does not demand homotopy of distinct constant S0 maps across charts.
lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation|The compared maps are locally conjugate through an actual diffeomorphism; source and target orientation changes cancel also for reduced degree.
lem-local-fixed-point-index-splits-under-perturbation|An isolated fixed point is replaced in an admissible chart ball, with boundary displacement unchanged and total index preserved; no new fixed points occur outside the support.
lem-local-index-is-additive-under-a-transverse-perturbation|Embedded-ball base and fibre orientations match; the interior perturbation preserves boundary values and the finite zero index sum, including n=1.
lem-mod-two-degree-is-well-defined-and-homotopy-invariant|Positive-dimensional sphere regular values exist under countable choice; framed 1-bordism preserves parity, so continuous representatives give a single invariant.
lem-negation-scales-the-local-index-by-minus-one-to-the-dimension|Negation composes the normalized map with the antipodal map of degree (-1)^n; the same identity holds for reduced degree at n=1.
lem-normal-push-off-zeros-are-self-intersection-points|The carrier uses the positive-rank block determinant in a normalized horizontal-then-vertical tube; the supplier's rank-zero determinant-ray caveat is not discarded in a zero-rank application.
lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold|The carrier uses the absolute image of the supported Thom class and tangent-first cap sign (-1)^(rz); on the diagonal it cancels the (-1)^n normal orientation comparison.
lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball|The embedded ball contains exactly the two opposite-index zeros and no boundary zero; the smooth degree-zero extension replaces them while retaining a boundary collar.
lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs|The opposite chart signs are put in one ball; an explicit staple with vertical end collars and dual quotient framing cancels the pair.
lem-orientation-coefficients-as-deck-eigenspaces-and-product-pairings|The (-,+) and (+,-) deck eigenspaces implement the two product coefficient systems; finite rational Kunneth and perfect twisted pairings supply the diagonal tests.
lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace|The coefficient is pulled back through the graph's first projection, hence no f-orientation lift is required; the normalized u-v Thom pullback gives det(I-Df).
lem-pontryagin-thom-signed-preimage-count-equals-the-dg-degree|The equidimensional regular fibre has phi=beta df with beta positive, hence its signed framing count is the regular-value integer degree.
lem-positively-oriented-bases-are-path-connected|Only frames in the same orientation component are connected; the smooth path can be flattened at its two ends to satisfy collar data.
lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative|The domain is balanced and the second composition factor is S0 to S0; constant, identity and antipodal cases give exactly the used multiplication and homotopy rules.
lem-reflection-of-an-outward-field-extends-over-the-double|The field-adapted flow collar makes the reflected field smooth and zero-free at the seam; the second copy has index of -X.
lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold|The actual normalized collapse, not an arbitrary radial representative, has centre fibre N and exactly phi as quotient differential.
lem-regular-value-choice-does-not-change-the-framed-cobordism-class|The target dimension is at least one; positive basis changes use framed cylinders and value changes use rotations plus relative transversality.
lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map|The added equatorial normal is prepended; the smash suspension has centre differential (a,v) to (a,phi v), agreeing with that framing.
lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover|The carrier assumes a commuting lift explicitly or invokes the derivative construction only for local diffeomorphisms; no lift for a general smooth map is inferred.
lem-the-local-intersection-sign-of-the-graph-and-diagonal|The ordered block matrix for graph first, diagonal second gives det(I-Df); changing factor order would give (-1)^n.
lem-the-orientable-double-cover-of-a-smooth-manifold|The tautological orientation cover has its stated deck action and compact total space over closed M; orientable bases may yield two components.
lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball|The branch has n>=2 and a connected boundaryless source; only the other currently occupied zeros are forbidden, so overlapping successive supports are allowed.
lem-vector-field-index-is-independent-of-chart-ball-and-trivialization|The carrier chooses matching base/fibre orientations; a sole fibre reversal is not treated as invariance, and S0 chart maps need only have equal degree.
prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product|The actual framing gives Th(nu) to N_+ smash S^k, with metric comparisons cancelling exactly; rank zero gives N_+ and empty N gives a point.
prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions|Clause (i) supplies finite rational Betti groups, clause (ii) identifies relative cell count, and clause (iii) is used only for gluing along collar cofibrations.
prop-mod-two-self-intersection-needs-no-orientation|The general rank-equals-base-dimension section clause gives unsigned zero count equal to the top Stiefel-Whitney evaluation, without orientability.
prop-morse-handle-chain-complex-computes-singular-homology|The actual use is a finite index-ordered handle complex computing rational singular homology, or the finite handle presentation for a CW model; it requires no orientation.
prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices|The tangent-family clause requires isolated fixed points in a common neighbourhood. The normal-projection family has exactly X's zeros; a genuine flow uses the nondegenerate branch.
prop-vector-field-zero-index-is-a-zero-section-intersection-number|The zero section is ordered before the section graph; horizontal-then-vertical orientation gives det(DX), exactly the vector-field local index.
rem-connectedness-is-needed-for-a-single-degree-invariant|The carrier's disconnected example preserves separate component degrees; a total degree is not asserted to classify its maps.
rem-isolated-does-not-imply-nondegenerate|The z+z^2 model is isolated with Df=I, so its index uses degree of -z^2 rather than a determinant formula.
thm-converse-poincare-hopf-for-nowhere-zero-fields|The source is closed and connected; the theorem is used as a comparison or existence statement only when its zero-Euler hypothesis holds.
thm-hopf-degree-classification-for-oriented-domains|The classified source is nonempty closed connected oriented of positive dimension; countable choice and continuous-to-smooth representative independence are retained.
thm-hopf-mod-two-degree-classification-for-nonorientable-domains|The source is connected and nonorientable; parity is the complete invariant and local pinch realizes one without assigning integer degree to it.
thm-index-of-a-nondegenerate-fixed-point|At the used point I-Df is invertible, so the chart displacement index is its determinant sign, also at n=1 by reduced degree.
thm-index-of-a-nondegenerate-vector-field-zero|At the used zero the vertical derivative is invertible; determinant sign gives the index, with reduced degree supporting n=1.
thm-lefschetz-fixed-point-theorem|The carrier applies only the nonzero-L implication or exhibits a zero-L example; it does not infer the converse.
thm-lefschetz-hopf-index-formula|The smooth self-map of a closed positive-dimensional manifold has only isolated fixed points, possibly degenerate and nonorientable; the full retained theorem equates its index sum with L.
thm-oriented-zero-dimensional-framed-bordism-is-the-integers|The ambient is closed connected oriented and positive-dimensional; same signed counts classify configurations using finite collision-avoiding moves, including the separate circle branch.
thm-poincare-hopf-for-closed-manifolds|The field is smooth on a closed positive-dimensional manifold with isolated or empty zeros; the rational Betti Euler characteristic matches its index sum.
thm-poincare-hopf-with-outward-pointing-boundary|The applied field is strictly outward and has isolated interior zeros; inward/nonzero-only examples explicitly violate the hypothesis rather than applying its conclusion.
thm-pontryagin-thom-correspondence-in-fixed-codimension|The ambient is S^n with n>=k>=1; collapse and regular preimage classify actual fixed-codimension framings, converting free classes through the based/free bijection.
thm-self-intersection-is-the-euler-number-of-the-normal-bundle|The general oriented rank-r bundle over a closed oriented r-manifold clause identifies signed transverse zeros with Euler evaluation; the diagonal uses its tangent-first normal version.
thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems|The carrier uses the compatible colimit bijection and transported abelian law; geometric union requires separate-chart packing rather than arbitrary intersecting embeddings.
thm-unoriented-zero-dimensional-bordism-is-mod-two|The ambient is closed connected nonorientable; its connected frame bundle permits either terminal chart sign, while compact 1-bordism preserves cardinality parity.
'''
for z in lines.strip().splitlines():k,v=z.split('|',1);put(k,v)
ss={s for c in p['pending_direct_consumers'] for s in c['changed_suppliers']}|{e['to'] for e in p['pending_edges']}
assert ss==set(R),(ss-set(R),set(R)-ss)
# Exact locators for implicit and non-load-bearing dependency uses.
implicit={
'cex-changing-a-framing-can-change-the-pontryagin-thom-class':{'def-framed-regular-preimage-of-a-map-to-a-sphere':'Counterexample 1.1: the normal differential of h along U is multiplication by 1/z1, of real rank two, and the positive basis gives the Hopf framing.','lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map':'Counterexample 1.1 explicitly invokes the regular-preimage collapse lemma to identify the collapse with h.'},
'cex-vanishing-lefschetz-number-allows-fixed-points':{'def-global-geometric-lefschetz-number':'Counterexample 1.1 has exactly the two nondegenerate points with sum -1+1=0, the finite geometric sum.','thm-lefschetz-fixed-point-theorem':'Statement refuted denies the converse; Counterexample 2.1 computes L=0 with two fixed points, without applying a nonzero implication.'},
'cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic':{'def-euler-characteristic-of-a-compact-manifold':'F3 and Proof 1.1 use cor-morse-euler-characteristic-identity; its finite-model Euler value is explicitly the same rational Betti sum.'},
'def-framed-regular-preimage-of-a-map-to-a-sphere':{'def-framing-of-a-normal-bundle':'Definition normal differential followed by beta gives nu(N) to N times R^k; rank-zero and empty framing clauses are explicit.'},
'def-pontryagin-thom-collapse-of-a-framed-neat-cobordism':{'def-framing-of-a-normal-bundle':'Definition first paragraph extends Psi constantly over the product cylinders; the prescribed normal identification is Psi^-1.'},
'ex-a-degenerate-isolated-fixed-point-with-nonzero-local-index':{'def-global-geometric-lefschetz-number':'Verification 1.1 computes the finite fixed set {0,infinity} and I(f)=2+1=3.'},
'ex-degree-d-map-on-a-sphere-has-lefschetz-number-one-plus-minus-d':{'def-global-geometric-lefschetz-number':'Verification 2.1 counts d+1 nondegenerate fixed points of the polynomial model.','def-local-fixed-point-index':'Verification 2.1 uses thm-index-of-a-nondegenerate-fixed-point for the same u-f displacement convention.'},
'ex-pontryagin-thom-map-of-the-standard-framed-equator':{'thm-pontryagin-thom-correspondence-in-fixed-codimension':'No direct use: F3 and Verification 1.3/2.1 prove nullhomotopy directly from the constructed framed cobordism; the theorem is a redundant dependency.'},
'ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map':{'thm-pontryagin-thom-correspondence-in-fixed-codimension':'No separate use: Verification 1.2/1.3 computes degree +1 of the actual normalized point collapses, then F3 uses stabilization compatibility.'},
'lem-diagonal-class-expansion-gives-the-alternating-trace':{'def-algebraic-lefschetz-number':'Proof 1.1 uses F1 twisted-diagonal graph pullback; that supplier identifies the alternating rational trace with L.'},
'lem-graph-transversality-is-fixed-point-nondegeneracy':{'lem-fixed-points-are-graph-diagonal-intersections':'Statement and Proof 1.1 work at (x,x) for an actual fixed point, computing graph and diagonal tangent spaces there.'},
'lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold':{'def-nondegenerate-zero-of-a-vector-field':'F1 and Proof 1.1 use the transverse-perturbation supplier to make every interior zero nondegenerate.'},
'lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball':{'def-isolated-zero-and-local-index-of-a-vector-field':'F1 and Proof 1.1 identify the normalized boundary field degree with the two zero indices.'},
'lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs':{'def-framing-sign-of-a-zero-dimensional-regular-preimage':'Proof 2.1 computes opposite endpoint signs of inverse quotient framings and Proof 3.1 matches the prescribed signs.','lem-components-of-the-frame-bundle-of-a-connected-manifold':'No use: Proof 3.1 uses positive-base path-connectedness at two fixed points, not global frame-bundle connectivity.','lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant':'No use: Proof 3.1 constructs stationary framed cylinders directly; it does not invoke a moving-point frame path.'},
'lem-reflection-of-an-outward-field-extends-over-the-double':{'def-isolated-zero-and-local-index-of-a-vector-field':'Proof 3.1 applies F5 chart invariance and negation to the two copies of each isolated zero.'},
'lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold':{'def-framing-of-a-normal-bundle':'Proof 2.1 identifies the normal quotient differential with the given normal trivialization phi.','lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy':'Statement last sentence compares unnormalized representatives only at the homotopy-class level; Proof 2.1 uses only the fixed normalized representative.','prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product':'F1 uses the normalized PT definition, whose framing coordinates realize the framed Thom projection; Proof 2.1 uses its exact centre differential.'},
'lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map':{'prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product':'F3 and Proof 1.1 use the normalized PT collapse; Proof 2.1 computes its centre differential in framed sphere coordinates.'},
'lem-the-local-intersection-sign-of-the-graph-and-diagonal':{'def-local-fixed-point-index':'F3 and Proof 1.1 use the nondegenerate fixed-point theorem in the I-Df convention.','lem-fixed-points-are-graph-diagonal-intersections':'Proof 1.1 identifies the intersection point (x,x); Proof 2.1 sums exactly over the fixed points.'},
'prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices':{'thm-index-of-a-nondegenerate-fixed-point':'No use of its determinant conclusion is needed: Proof 2.1 compares normalized displacement degrees directly and Proof 3.1 establishes isolation by the inverse function theorem.'},
'prop-vector-field-zero-index-is-a-zero-section-intersection-number':{'def-isolated-zero-and-local-index-of-a-vector-field':'F4 and Proof 2.1 invoke the nondegenerate vector-field index theorem for the same chart index.'},
'rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary':{'lem-index-sum-of-an-outward-field-is-the-gauss-degree':'No boundary-degree lemma is used in the witness: the prose computes the inward radial determinant and contractible-ball Euler value directly.'},
 'thm-converse-poincare-hopf-for-nowhere-zero-fields':{'def-nondegenerate-zero-of-a-vector-field':'F3 and Proof 1.2 use the Morse gradient supplier to obtain finitely many nondegenerate zeros.','lem-local-index-is-additive-under-a-transverse-perturbation':'No direct perturbation is used: Proof 1.2 starts with a Morse gradient; Proof 2.1 uses the cancellation supplier, whose F1 boundary-degree interface is retained.'},
 'thm-poincare-hopf-with-outward-pointing-boundary':{'def-isolated-zero-and-local-index-of-a-vector-field':'F5 and Proof 1.1 use the local transverse-perturbation supplier at isolated interior zeros, retaining the original index sum.','prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions':'F1 uses the even-dimensional boundary lemma, whose F4 invokes clause (iii) for the collar-cofibration double; the odd branch uses homotopy invariance for W.'},
 'thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems':{'def-framed-regular-preimage-of-a-map-to-a-sphere':'F3 and Proof 2.1 give the centre fibre of the packed smooth map and its transported quotient framings.','lem-framed-cobordism-is-an-equivalence-relation':'F1 levelwise bijections act on framed cobordism classes; no additional gluing beyond that interface is used.','lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages':'No direct use: F1 takes the already-proved levelwise bijections; F3 compares a map with the collapse of its actual framed fibre.','lem-regular-value-choice-does-not-change-the-framed-cobordism-class':'No direct use: the regular value is the normalized fixed centre in Proof 2.1; choice independence is inherited through F1.'}
}
checks=[]
def clause(i,s):
 t=body(i);pars=t.split('\n\n'); matches=[z.strip() for z in pars if s in z]
 if not matches:
  a=implicit[i][s];loc=a.split(':',1)[0];return loc,a,[],[]
 facts=[];steps=[]
 for z in matches:
  m=re.match(r'\[(F\d+|L\d+|A\d+)\]',z)
  if m:facts.append(m.group(1))
 for z in pars:
  m=re.match(r'(\d+\.\d+) ',z)
  if m and (s in z or any(re.search(r'\b'+f+r'\b',z) for f in facts)):steps.append(m.group(1))
 loc=('Facts '+','.join(facts) if facts else 'Definition/Statement/Remarks')+('; argument '+','.join(steps) if steps else '')
 excerpt=' '.join(matches[0].split())
 return loc,excerpt,matches,steps
def make(i,s):
 loc,excerpt,pars,steps=clause(i,s)
 supplier=body(s).split('## Facts')[0].strip()
 rationale=R[s]
 if i in implicit and s in implicit[i] and implicit[i][s].startswith('No '):rationale='Not load-bearing in this current argument. '+rationale
 row={'consumer':i,'supplier':s,'consumer_sha256':sha(i),'supplier_sha256':sha(s),'consumer_locator':loc,'consumer_clause':excerpt,'consumer_exact_paragraphs':pars,'argument_steps':steps,'supplier_clause':supplier,'assessment':rationale,'reviewer':reviewer}
 checks.append(row)
 return f'{s}: {loc}: "{excerpt[:450]}". {rationale}'
# Dependency-ordered scope; stored receipts remain in required worklist order.
allpairs={(e['from'],e['to']) for e in p['pending_edges']}|{(c['id'],s) for c in p['pending_direct_consumers'] for s in c['changed_suppliers']}
seen=set();ordered=[]
def visit(i):
 if i in seen:return
 seen.add(i)
 for j in re.findall(r'\[\[([^]|]+)',body(i)):
  if any(j==a for a,b in allpairs):visit(j)
 ordered.append(i)
for i in sorted({a for a,b in allpairs}):visit(i)
notes={}
for i in ordered:
 for a,b in sorted(allpairs):
  if a==i:notes[a,b]=make(a,b)
edges=[dict(kind='edge',from_sha256=sha(e['from']),to_sha256=sha(e['to']),verdict='accurate',defect_ids=[],note=notes[e['from'],e['to']],reviewer=reviewer,**{k:e[k] for k in ['from','to','from_group','to_group']}) for e in p['pending_edges']]
(out/'edge-verdicts.jsonl').write_text(''.join(json.dumps(e)+'\n' for e in edges))
d=[]
for c in p['pending_direct_consumers']:
 d.append(dict(id=c['id'],status='still-licensed',reviewer=reviewer,consumer_sha256=sha(c['id']),changed_suppliers=c['changed_suppliers'],notes='\n'.join(notes[c['id'],s] for s in c['changed_suppliers'])))
(out/'impact-dispositions.json').write_text(json.dumps(dict(run=p['run'],group=3,dispositions=d),indent=2)+'\n')
(out/'clause-checks.json').write_text(json.dumps(dict(run=p['run'],group=3,reviewer=reviewer,scope='current supplier interfaces only; no whole-proof or native-author audit',dependency_order=ordered,checks=checks),indent=2)+'\n')
(out/'defect-proposals.json').write_text('[]\n');(out/'carrier-deltas.json').write_text('[]\n')
print('edges',len(edges),'consumers',len(d),'unique interface checks',len(checks))
