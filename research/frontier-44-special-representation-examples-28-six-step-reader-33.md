# Reader 33 — batch 33

Run: `frontier-44-special-representation-examples-28-six-step`.
Independent mathematical review; no judging, stamping, publication or workflow transition.

## Opened assigned inventory

Both assigned pages were opened, including frontmatter and complete prose:
- `library/algebraic-geometry/complex-algebraic-stratified-topology.md` (A).
- `library/algebraic-geometry/complex-algebraic-stratified-topology-examples.md` (B).

All 18 assigned carriers were opened, including frontmatter, complete mathematical bodies and remarks. The owned proof contracts were checked against current step records and supplier quotations, and all boundary entries were reviewed. Assigned geometric suppliers were considered before their consumers; several external statement checks followed the first carrier read and preceded final assessment.

- `items/def-finite-complex-algebraic-whitney-stratification-and-control-data.md`.
- `items/lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs.md`.
- `items/lem-generic-complex-algebraic-whitney-regularity.md`.
- `items/lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications.md`.
- `items/thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications.md`.
- `items/lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts.md`.
- `items/lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions.md`.
- `items/lem-whitney-stratifications-admit-compatible-control-data.md`.
- `items/lem-controlled-stratified-submersions-have-continuous-local-trivializations.md`.
- `items/thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods.md`.
- `items/lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars.md`.
- `items/lem-finite-simplicial-maps-have-explicit-compatible-triangulated-mapping-cylinders.md`.
- `items/lem-compact-semialgebraic-families-admit-compatible-finite-triangulations.md`.
- `items/lem-finite-simplicial-open-stars-have-explicit-conical-product-charts.md`.
- `items/lem-finite-cell-local-system-cohomology-is-finite-and-commutes-with-field-extension.md`.
- `items/thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology.md`.
- `items/lem-complex-algebraic-stratifications-have-finite-conical-cochain-models.md`.
- `items/ex-a-noncompact-algebraic-line-needs-a-deleted-boundary-triangulation.md`.

## Repairs and evidence

- `lem-generic-complex-algebraic-whitney-regularity`, F6 and steps 1.1, 5.1, 6.1, 7.1: replaced the false Zariski rectangle-basis argument with the explicit two-polynomial fibre argument; Jacobian kernels, not equation-row spaces, are tangent planes; sign choices recover unit representatives of limiting real lines; the zero tangent vector needs no secant construction; only ambient charts meeting the irreducible lower stratum are included, and chart exceptional sets are closed up with a justified dimension drop. Its Statement is preserved. Evidence: the opened Jacobian-kernel and Grassmannian chart suppliers and elementary principal-open intersection calculation.
- `lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions`, Statement/Given and step 4.1: prescribed positive bounds must have positive local lower bounds (continuous positive bounds suffice). Arbitrary pointwise bounds need not admit any positive continuous minorant: take values tending to zero on a sequence approaching a point with bound one. Also replaced the invalid claim that a finite cover of local injectivity neighbourhoods supplies injectivity on their union; a single local injectivity neighbourhood contains the required small bundle-coordinate domain.
- `lem-whitney-stratifications-admit-compatible-control-data`, Statement/Given, F2, step 6.1: require the stratified subset W itself to be locally closed, then intersect a compact tube-parameter slice with W inside an ambient neighbourhood where W is closed. Otherwise W = {origin} union the open upper half-plane is a finite Whitney space whose closed radial slices at the origin are not compact. The F2 size-bound citation now retains its supplier qualification. Continuous positive distance/cutoff bounds in the construction meet it.
- `lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications`, step 3.1: a partition piece dominating a target component need not be contained in the selected target open preimage. Replaced that incorrect assertion with the actual intersections, which still partition that preimage.
- `lem-finite-simplicial-maps-have-explicit-compatible-triangulated-mapping-cylinders`, steps 4.1 and 5.1: solve the positive threshold equation only for 0<t<1 and define both endpoints separately; at t=0 its unique threshold is zero, contrary to the old m>0 assertion. The subcylinder calculation now concerns K_j, rather than incorrectly substituting the generally larger f^{-1}(L_j). Forward and inverse source-support formulas prove the claimed compatibility.
- `lem-finite-simplicial-open-stars-have-explicit-conical-product-charts`, step 2.1: repaired the malformed inline apex expression to a valid mathematical singleton.
- `lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs`, step 9.1: supplied the identity/translation chart for ambient dimension M=1 instead of invoking the implicit-function supplier with no dependent variables; explained the restriction from the normalization of the closed curve to its affine open curve. Statement preserved.

Affected owned proof-contract derivations and citation quotes were updated. No existing judge record remains on changed carriers. The initial seven edited carriers passed individual reflow and precheck; final checks follow the additional radial-time repair.

## Authoritative source evidence

Read Goresky, *Lecture Notes on Sheaves and Perverse Sheaves*, https://www.math.ias.edu/~goresky/pdf/all2.pdf, PDF/printed pp. 24–29, §§8.1–8.11. The source defines stratifications on closed ambient subsets, states the conical link theorem in §8.4 (p.26), the proper first isotopy lemma in §8.5 (p.26), the three control identities in §8.7 (p.27), and compatible Whitney stratification and triangulation in §8.10 (p.28). These statements clarify the local-closedness and actual properness qualifications; source citations do not replace local proofs. The web fetch failed twice; the PDF was downloaded successfully and these complete sections read using PyMuPDF. No claim of reading the 1978 image scan is made.

## Uneditable supplier findings

`lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model` belongs to current-run batch 32, confirmed from the exact six-step manifest. Its complete body was opened in bounded sections. In step 6.2 the asserted cone lower bound omits H^0(F;k)=k via the unit: choose F two points, B=k in degree zero, b=0, R=1. All stated positive-degree vanishings hold, but Cone(k→k²) has H^0=k, contradicting concentration in degrees ≥2. Needed repair: require a nonempty connected fibre/unit isomorphism on H^0, or use a reduced-cohomology condition including degree zero. This is a fatal false claim in an outside-batch supplier. The assigned constructible-model theorem reaches this supplier directly, though its contractible ball application does satisfy the missing connectivity hypothesis. This is now a historical pre-reader defect: the producer corrected it during the review, as recorded below.

## Page assessment and remaining work

A page: **hold for Step 3b**. Eight local carrier repairs are complete, but analytic connectedness of the algebraically irreducible emitted strata remains an unmet prerequisite of the unedited Whitney existence theorem. The outside-batch incidence findings below are historical; their producer corrected both during this review. No withdrawal was applied: all theorem carriers remain present for the lead.
B page: **no defect found in its own claim or witness**. The explicit octahedron/radial normalization/stereographic witness and noncompactness computation are sound; prose unchanged.

Handoff: the lead must route the uneditable supplier findings and establish analytic connectedness for the Whitney existence theorem. No worker transition or gate was attempted. The status command found this six-step run paused at 3a-read with no engine worker running; the current git tip is `55d77ee44` (rebuilt six-step engine integration).

Additional repairs found during contract reconciliation: the commuting-radial-collar proof step 4.1 now allows negative and zero logarithmic times. The smooth-stratification proof step 5.1 explicitly handles zero-dimensional charts and maps, equation-free standard presentations, and uses local polynomial quotients for regular-map coordinates. All owned contract step records now match current carrier steps; inaccurate boundary entries (the dimension-one finite fibre, irreducibility of the graph closure, maximal rather than minimal empty-link stratum, arbitrary-size bounds, and empty markings versus zero objects) and stale supplier quotations were corrected. These are contract corrections, not mathematical acceptance records.

## Further proof gap and source check

`thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`, Statement and Proof steps 2.1/5.1: the emitted strata are smooth and algebraically irreducible; the connected-stratum requirement of `def-analytic-topology-and-finite-smooth-algebraic-stratifications` clause (c), used by the assigned Whitney definition, is in the analytic topology. The local Jacobian/holomorphic chart suppliers give local manifolds, not global analytic connectedness. The proof supplies no comparison between algebraic irreducibility/Zariski connectedness and analytic connectedness. This prerequisite is not treated as background. A local proved comparison theorem, or a construction of analytically connected algebraic strata with the same finite frontier and map properties, is needed. The carrier was left unchanged and present for Step 3b because a sound local repair was not completed.

Milne, *Algebraic Varieties over the Complex Numbers*, https://www.jmilne.org/math/CourseNotes/AG15.pdf, Chapter 15, Proposition 15.1, PDF pp.1–2, confirms the needed comparison for nonsingular varieties. The complete three-page chapter was opened. It proves the curve case using Riemann–Roch and compact holomorphic-function arguments, then refers the higher-dimensional induction to Shafarevich VII.2. That higher-dimensional proof was not recovered here; this reference is evidence identifying the missing prerequisite, not a substitute for a local proof. The additional opened item `lem-algebraic-open-inclusion-surjects-on-fundamental-groups` starts with connectedness as a hypothesis, so cannot discharge it.

A second outside-batch incidence-model issue occurs at Proof step 5.3: the fixed finite collection of simplex open stars is called a basis for the ordinary topology. Already in one closed edge, its edge-interior star cannot refine arbitrarily small intervals around an interior point. Agreement of a derived comparison on those fixed stars alone therefore does not justify the asserted sheaf isomorphism. This is a nonfatal local proof omission: repeat the preceding closed-cell support/acyclicity calculation on a cofinal family of sufficiently small cellwise convex balls and check compatibility with restriction, or first establish constructibility of the comparison cone and use its stalk calculations. The underlying local comparison is not refuted by this finding.

Both historical incidence findings bind the **pre-reader** raw source SHA-256 `bec800c25532b9fde20336747615df77aa478ecd7eb7ae0d62e77fcdb30b21aa`. This hash was computed from the actual opened file before and after its body reading, and later matched the exact `item_carriers` entry in `research/frontier-44-special-representation-examples-28-six-step-step3-auditor-baseline.json`; the baseline alone is not the evidence of observation. Batch 32 rewrote the supplier during this review. Its new Proof step 6.1 includes the missing degree-zero/unit qualification, and its steps 4.1/5.1 use small-ball acyclicity and an actual termwise comparison. The rewritten body was reopened; further producer changes mean I do not claim a complete audit of its final bytes. The exact current-run owner is batch 32, and the assigned direct consumer is `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`. No outside carrier was edited. Per dispatch instructions the historical evidence remains in findings and is not attributed to corrected current bytes.

The curve-arc proof step 10.1 was also corrected for z in O: a sufficiently small disk has **no nonzero** parameter in the bad-set preimage; zero itself need not be in that preimage. This retains the claimed arc for both z in O and z outside O.

## External item inventory and reading limits

The following 89 distinct direct suppliers were opened at their complete relevant Statement/Definition or the clauses needed by the assigned citations. This is a statement-level prerequisite review, not a whole-proof audit of every published supplier. The substantive outside draft incidence, Čech descent, polyhedral dimension, relative fitting, compact-corner triangulation and smooth-bundle triangulation arguments were also opened in bounded sections.

- `items/cor-every-vector-space-has-a-basis.md`.
- `items/cor-free-modules-are-projective-and-flat.md`.
- `items/cor-noether-normalisation-module-finiteness.md`.
- `items/def-ag-standard-smooth-algebra.md`.
- `items/def-analytic-topology-and-finite-smooth-algebraic-stratifications.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-based-cellular-chain-complex-of-a-universal-cover.md`.
- `items/def-c-soft-sheaf.md`.
- `items/def-classical-algebraic-prevariety-regular-maps-and-varieties.md`.
- `items/def-compactly-supported-global-sections.md`.
- `items/def-continuous-map-top.md`.
- `items/def-derived-category-of-an-abelian-category.md`.
- `items/def-derived-hom-in-the-bounded-setting.md`.
- `items/def-direct-image-sheaf.md`.
- `items/def-extension-by-zero-abelian-sheaf.md`.
- `items/def-flat-and-faithfully-flat-modules-and-ring-maps.md`.
- `items/def-geometric-realization-of-an-abstract-simplicial-complex.md`.
- `items/def-homeomorphism-and-open-maps.md`.
- `items/def-initial-and-final-topology.md`.
- `items/def-inverse-image-presheaf-and-sheaf.md`.
- `items/def-irreducible-topological-space-and-subset.md`.
- `items/def-local-system-of-r-modules-and-its-pullback.md`.
- `items/def-metric-topology.md`.
- `items/def-quotient-topology.md`.
- `items/def-regular-local-ring-geometric-point.md`.
- `items/def-simplicial-subcomplex-star-closure-and-link.md`.
- `items/def-singular-and-cellular-chain-complexes-with-local-coefficients.md`.
- `items/def-smooth-morphism-classical.md`.
- `items/def-subspace-topology-top.md`.
- `items/lem-algebra-of-continuous-real-maps-on-a-space.md`.
- `items/lem-bounded-below-complexes-admit-injective-replacements.md`.
- `items/lem-c-soft-field-sheaves-are-compact-support-acyclic.md`.
- `items/lem-classical-variety-noetherian-components.md`.
- `items/lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward.md`.
- `items/lem-continuity-is-local-and-pastes.md`.
- `items/lem-dimension-nonempty-open-subset.md`.
- `items/lem-extension-by-zero-short-exact-sequence.md`.
- `items/lem-filtered-colimits-of-abelian-groups-are-exact.md`.
- `items/lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology.md`.
- `items/lem-finite-poset-diagrams-have-bounded-finite-bar-models.md`.
- `items/lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model.md`.
- `items/lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology.md`.
- `items/lem-grassmannian-standard-affine-charts.md`.
- `items/lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent.md`.
- `items/lem-nonsingular-complex-algebraic-curve-holomorphic-charts.md`.
- `items/lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection.md`.
- `items/lem-ringed-space-module-sheaves-enough-injectives.md`.
- `items/lem-sections-near-a-compact-set-are-sections-on-that-set.md`.
- `items/lem-smooth-map-tangent-surjectivity-criterion.md`.
- `items/prop-a-finite-simplicial-complex-has-compact-hausdorff-realization.md`.
- `items/rem-complex-euclidean-space-dictionary.md`.
- `items/thm-acyclic-resolution-theorem-for-right-derived-functors.md`.
- `items/thm-affine-domain-dimension-transcendence-degree.md`.
- `items/thm-cellular-chains-compute-homology-with-local-coefficients.md`.
- `items/thm-cellular-cochains-compute-cohomology-with-local-coefficients.md`.
- `items/thm-choice-implies-dependent-implies-countable-choice.md`.
- `items/thm-closed-subspace-of-a-compact-space-is-compact.md`.
- `items/thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations.md`.
- `items/thm-compact-subset-of-a-hausdorff-space-is-closed.md`.
- `items/thm-compactness-under-continuous-maps.md`.
- `items/thm-constant-rank-theorem-for-manifolds.md`.
- `items/thm-dimension-at-most-embedding-dimension.md`.
- `items/thm-dimension-equals-transcendence-degree.md`.
- `items/thm-dimension-formula-for-affine-domains.md`.
- `items/thm-euclidean-tubular-neighbourhood-theorem.md`.
- `items/thm-exactness-of-sheaves-stalkwise.md`.
- `items/thm-extension-by-zero-adjunction-exactness.md`.
- `items/thm-finite-morphism-integral-closed.md`.
- `items/thm-finite-products-of-compact-spaces.md`.
- `items/thm-flasque-sheaves-acyclic.md`.
- `items/thm-generic-fibre-dimension.md`.
- `items/thm-generic-smoothness-characteristic-zero.md`.
- `items/thm-heine-borel-rn.md`.
- `items/thm-hilbert-basis-theorem.md`.
- `items/thm-holomorphic-constant-rank-theorem.md`.
- `items/thm-holomorphic-implicit-function-theorem.md`.
- `items/thm-injective-complexes-model-the-bounded-below-derived-category.md`.
- `items/thm-inverse-direct-image-adjunction.md`.
- `items/thm-krull-height-theorem.md`.
- `items/thm-locally-compact-hausdorff-basics.md`.
- `items/thm-lying-over.md`.
- `items/thm-nonempty-regular-locus-reduced-variety-perfect-field.md`.
- `items/thm-normalization-reduced-curve-exists-finite.md`.
- `items/thm-regular-equals-smooth-over-perfect-field.md`.
- `items/thm-regular-local-rings-are-domains-and-cohen-macaulay.md`.
- `items/thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation.md`.
- `items/thm-smooth-dependence-of-ode-solutions-on-parameters.md`.
- `items/thm-smooth-partitions-of-unity-exist-on-manifolds.md`.
- `items/thm-zariski-tangent-space-jacobian-kernel.md`.

## Focused consumer checks for changed Statements

The relative-tube lemma has one direct consumer, `lem-whitney-stratifications-admit-compatible-control-data`: the actual bounds are positive distances from closed frontiers/incomparable closures, cutoffs plus distances, and smooth variable radii, all with positive local lower bounds. Its citation and proof were repaired accordingly.

The control-data lemma has three direct consumers, all opened in full: `lem-controlled-stratified-submersions-have-continuous-local-trivializations` explicitly assumes a locally closed W; `lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars` assumes compact W in a Hausdorff Euclidean ambient space, hence closed; `thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods` uses quasi-projective locally closed algebraic embeddings and explicitly works where X is closed in an ambient chart. Thus all three meet the repaired premise and retain their original conclusions. Owned downstream triangulation and cochain consumers were reviewed above with these same supplied conclusions.

The current manifest graph reaches the following transitive consumers. Their incoming intermediate Statement interfaces are unchanged after the three direct applicability checks, so the hypothesis corrections require no further carrier changes. This list is a reachability/impact inventory, **not** a claim of full independent proof audits or of opening every outside descendant:

- `cex-specializing-v-to-one-forgets-graded-decomposition-information`: retained intermediate interface.
- `cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group`: retained intermediate interface.
- `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`: retained intermediate interface.
- `def-equivariant-borel-moore-homology-and-correspondence-convolution`: retained intermediate interface.
- `def-graded-adjustment-polynomials-in-positive-characteristic`: retained intermediate interface.
- `def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators`: retained intermediate interface.
- `ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class`: retained intermediate interface.
- `ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition`: retained intermediate interface.
- `ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy`: retained intermediate interface.
- `ex-dualizing-and-closed-support-shifts-on-the-complex-line`: retained intermediate interface.
- `ex-equal-color-quiver-flag-correspondence-is-nilhecke`: retained intermediate interface.
- `ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite`: retained intermediate interface.
- `ex-hypercover-total-degree-uses-only-a-finite-matching-truncation`: retained intermediate interface.
- `ex-projective-perverse-decomposition-for-projective-space-to-a-point`: retained intermediate interface.
- `ex-projective-versus-simple-grothendieck-classes-in-a-small-block`: retained intermediate interface.
- `ex-proper-cech-descent-does-not-require-acyclic-fibers`: retained intermediate interface.
- `ex-signed-two-direction-multiedge-quiver-flag-crossing`: retained intermediate interface.
- `ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift`: retained intermediate interface.
- `lem-affine-morphisms-have-one-sided-perverse-exactness`: retained intermediate interface.
- `lem-analytic-constructible-sheaves-admit-coherent-six-operations`: retained intermediate interface.
- `lem-artin-affine-vanishing-for-constructible-perverse-sheaves`: retained intermediate interface.
- `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`: retained intermediate interface.
- `lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars`: retained intermediate interface.
- `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations`: retained intermediate interface.
- `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`: retained intermediate interface.
- `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`: retained intermediate interface.
- `lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description`: retained intermediate interface.
- `lem-controlled-stratified-submersions-have-continuous-local-trivializations`: retained intermediate interface.
- `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`: retained intermediate interface.
- `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative`: retained intermediate interface.
- `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences`: retained intermediate interface.
- `lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact`: retained intermediate interface.
- `lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism`: retained intermediate interface.
- `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`: retained intermediate interface.
- `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`: retained intermediate interface.
- `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`: retained intermediate interface.
- `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves`: retained intermediate interface.
- `lem-reduction-of-characteristic-zero-simple-modules-modulo-p`: retained intermediate interface.
- `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure`: retained intermediate interface.
- `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus`: retained intermediate interface.
- `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations`: retained intermediate interface.
- `lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects`: retained intermediate interface.
- `lem-whitney-stratifications-admit-compatible-control-data`: retained intermediate interface.
- `prop-qg8-categorification-transports-across-the-hecke-klr-bridge`: retained intermediate interface.
- `rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers`: retained intermediate interface.
- `thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods`: retained intermediate interface.
- `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`: retained intermediate interface.
- `thm-ariki-canonical-basis-theorem-in-characteristic-zero`: retained intermediate interface.
- `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`: retained intermediate interface.
- `thm-constructible-six-functors-proper-base-change-and-verdier-duality`: retained intermediate interface.
- `thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars`: retained intermediate interface.
- `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`: retained intermediate interface.
- `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero`: retained intermediate interface.
- `thm-graded-specht-classes-realize-standard-fock-vectors`: retained intermediate interface.
- `thm-graded-specht-heads-classify-the-graded-simple-modules`: retained intermediate interface.
- `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`: retained intermediate interface.
- `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images`: retained intermediate interface.
- `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`: retained intermediate interface.
- `thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment`: retained intermediate interface.
- `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology`: retained intermediate interface.
- `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`: retained intermediate interface.
- `thm-proper-hypercovers-compute-constructible-derived-cohomology`: retained intermediate interface.
- `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product`: retained intermediate interface.
- `thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations`: retained intermediate interface.
- `thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis`: retained intermediate interface.
- `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps`: retained intermediate interface.
- `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`: retained intermediate interface.
- `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`: retained intermediate interface.
- `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`: retained intermediate interface.
- `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes`: retained intermediate interface.
- `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`: retained intermediate interface.
- `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution`: retained intermediate interface.
- `thm-verdier-duality-on-oriented-stratified-complex-varieties`: retained intermediate interface.

## Validation and limitations

Every one of the eight changed carriers passed its individual `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` checks after its final mathematical edit; reflow changed only the line wrapping of the boundary-arc and smooth-stratification carriers. No judge was run or new verification stamp awarded. The final single batched `node tools/proof-layout.mjs` invocation included all eight changed paths and passed: **8 items, 49 steps, 0 defects** (exit 0). The scoped `node tools/rendercheck.mjs --quiet` invocation over the same eight paths passed (exit 0): frontmatter YAML and all mathematical spans parsed under the actual renderer/KaTeX. These are local mechanical checks, not independent mathematical acceptance.

Limitations: the higher-dimensional analytic-connectedness comparison remains unproved locally; the Goresky 1978 image scan and the general Shafarevich induction were not read. The finite triangulation/core/collar argument was assessed from its complete authored proof and exact supplier contracts, with Goresky §§8.1–8.11 as a source check, not by claiming a full historical triangulation-paper reconstruction. Outside descendant impacts were traced through unchanged intermediate interfaces, not independently audited in their entirety. The three findings below preserve these limitations for routing. All repaired subjects are excluded from the findings array.

The additional new incidence dependency `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions` was opened at its complete Statement and frontmatter. Its bounded/bounded-below internal-Hom interface supports the rewritten incidence proof. The owned contract quotations of the incidence Statement were updated to retain the newly explicit constructible-base-object qualification; both assigned consumers use constructible base objects.

Final write scope: eight assigned item carriers, the owned batch-33 proof-contract file, this task-named report and the task-named findings JSON. No page, other batch, plan specification or published carrier was edited. All eight item layout checks occurred after the final item edit and formatter. No proposed withdrawal was executed; the unresolved Whitney theorem remains available to Step 3b.

Final baseline comparison confirmed that precisely the eight listed assigned carriers changed. Every finding names a carrier outside that changed set; the unresolved assigned Whitney theorem matches its pre-reader carrier hash. The final owned contract consistency check and stale-judge check passed.
