# Reader 2 — batch 2, frontier-41-ha-dt-29

Independent Step 5a review completed. All 21 assigned item carriers and both page carriers were opened. Seventeen assigned items and the assigned A-page prose were repaired. No published item, other-batch item, B-page prose, plan-spec, judge record or certification artifact was edited. There is one uneditable published-supplier finding for Step 5b; no local withdrawal is proposed.

## Scope and opened inventory

Read the canonical `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the assigned pages manifest, the empty cross-batch-dependencies manifest, the reader dispatch prompt, and the batch proof contracts. The manifest’s mathematical drafts were treated as evidence, not as current verdicts. No rendered evidence bundle was supplied or found in the run directory. The current carriers were read in supplier-before-consumer order; added repair prerequisites were opened before use.

Opened page carriers:

- `library/differential-topology/intersection-pairings-self-intersection-and-euler-classes.md` (A).
- `library/differential-topology/intersection-pairings-self-intersection-and-euler-classes-examples.md` (B; prose left unchanged).

Opened assigned items, including complete mathematical bodies and metadata:

- `items/def-geometric-intersection-pairing-on-a-closed-oriented-manifold.md` — repaired.
- `items/lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles.md` — repaired.
- `items/lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold.md` — repaired.
- `items/lem-normal-bundle-of-the-zero-locus-of-a-transverse-section.md` — repaired.
- `items/lem-pullback-of-the-thom-class-along-a-transverse-section.md` — repaired.
- `items/prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual.md` — repaired.
- `items/thm-geometric-intersection-equals-the-poincare-dual-cup-pairing.md` — repaired.
- `items/rem-cap-product-order-awaits-the-at-sign-convention.md` — no carrier edit required.
- `items/def-self-intersection-number-of-an-oriented-submanifold.md` — repaired.
- `items/lem-normal-push-off-zeros-are-self-intersection-points.md` — repaired.
- `items/thm-self-intersection-is-the-euler-number-of-the-normal-bundle.md` — repaired.
- `items/lem-normal-bundle-of-the-diagonal-is-canonically-tm.md` — repaired.
- `items/cor-diagonal-self-intersection-is-the-euler-number-of-tm.md` — no carrier edit required.
- `items/prop-mod-two-self-intersection-needs-no-orientation.md` — repaired.
- `items/cor-nowhere-zero-section-forces-the-euler-class-to-vanish.md` — repaired.
- `items/rem-euler-class-construction-remains-owned-by-at.md` — no carrier edit required.
- `items/rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally.md` — no carrier edit required.
- `items/ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle.md` — repaired.
- `items/ex-diagonal-in-the-two-sphere-has-self-intersection-two.md` — repaired.
- `items/ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus.md` — repaired.
- `items/cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection.md` — repaired.

## Repairs and evidence

The core convention is unchanged: geometric signs list the source/submanifold first; normal bundles use tangent-first orientation; cap evaluates the front face and retains the back face. The normal Thom identity has shuffle factor (-1)^(rz), while complementary geometric intersection equals the stated ordered PD cup evaluation. Small normal push-offs are oriented from their source, use normalized normal differentials, and yield the Euler number.

- **`lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles`**: Replaced dimension subtraction by codimension subtraction; corrected the endpoint tangent and quotient-orientation argument; proved general transversality using a collar, double and simultaneous good parameters. A nontransverse boundary cannot become transverse while fixed. Evidence: boundary-preimage theorem, boundary orientation definition, relative transversality proposition, and the explicit collar/double constructions.
- **`lem-normal-bundle-of-the-zero-locus-of-a-transverse-section`**: Replaced the ill-typed pullback s^*E by E restricted to Z, proved the quotient map directly, specified the induced orientation, and stated inherited Countable Choice and the empty high-rank case. Evidence: the vertical derivative in bundle charts and the transverse-preimage theorem.
- **`lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold`**: Separated the supported relative class from its absolute image; made punctured-fibre, compact-support and excision maps explicit; required a normalized tube. Replaced the ill-typed tangent-first AW contraction and unidentified torus formula with normal-first AW and a direct shuffle sign derivation. Evidence: relative-cap definition, compact-support cap-duality definition, AW/shuffle theorem, and the ambient tubular supplier’s derivative calculation and quotient transport.
- **`lem-pullback-of-the-thom-class-along-a-transverse-section`**: Lifted the disk/sphere Thom class to the punctured-disk pair before pulling back through a section; supplied a smooth metric and normalized tube. Corrected the positive-rank zero-section transversality claim. Evidence: pair sequence, radial retraction, smooth metric theorem, local inverse function theorem, and absolute homotopy invariance.
- **`prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual`**: Removed the ill-typed general Euler evaluation and replaced the alleged equivalence with the actual PD equivalence of nonzero classes. Kept numerical counts only in matching rank/dimension and explained disconnected cancellation. Corrected the rank-zero dimension and induced orientation. Evidence: repaired normal Thom/pullback suppliers and the cap-duality isomorphism.
- **`thm-geometric-intersection-equals-the-poincare-dual-cup-pairing`**: Used a transverse map on the original source rather than assuming a transverse embedded image. Replaced the inapplicable global zero-locus-section assertion for an inclusion by a directly typed pair pullback and local normal-coordinate calculation; retained the cancellation of the two (-1)^(ab) signs. Evidence: actual transversality theorem, normal Thom supplier, local inverse chart, finite relative evaluation and cap projection formula.
- **`def-geometric-intersection-pairing-on-a-closed-oriented-manifold`**: Corrected the homology-descent pointer: bordism invariance alone does not identify all homologous cycles. The cup-pairing theorem now supplies homology invariance.
- **`def-self-intersection-number-of-an-oriented-submanifold`**: Made compactness, push-off orientation and normal differential normalization explicit. Supplied transverse-section existence using finitely many spanning sections and parametric transversality; proved embedding and homotopy independence without treating a tube-germ isomorphism as an isotopy. Evidence: section extension lemma, parametric transversality, normalized tubular construction, and two-map diagonal intersection argument.
- **`lem-normal-push-off-zeros-are-self-intersection-points`**: Specified compactness, parametrized push-off orientation and normalized tube. Added the determinant-ray computation for dimension zero, where an unsigned empty matrix does not encode supplied point signs; explicitly retained the orientation-free set/transversality clause. Evidence: the block determinant in local charts and the point-sign clause of the local intersection definition.
- **`thm-self-intersection-is-the-euler-number-of-the-normal-bundle`**: Supplied small transverse-section existence and Thom admissibility, corrected the zero-locus normal restriction and the augmentation/evaluation operation, and proved independence by the common Euler number rather than a nonexistent tube-isotopy supplier. Kept the general rank-equals-dimension signed-zero clause.
- **`lem-normal-bundle-of-the-diagonal-is-canonically-tm`**: Made the orientation claim conditional on M being oriented and stated inherited Countable Choice. The difference map w-v and its positive block determinant remain unchanged.
- **`prop-mod-two-self-intersection-needs-no-orientation`**: Required compact boundaryless A, supplied transverse-section existence and smooth-base Thom admissibility, and corrected the general numerical clause to rank equal to base dimension. A finite empty zero locus does not license evaluation in another degree.
- **`cor-nowhere-zero-section-forces-the-euler-class-to-vanish`**: Restricted numerical evaluation to matching degree, used cap bilinearity for arbitrary-R class-level consequences, and scaled the nowhere-zero normal field into the tube. Preserved the failure of the converse with a concise rank-three bundle over S^4 argument using A-page clutching, quaternion-cover, sphere, UCT, splitting and covering suppliers; did not make the A-page corollary depend on a B-page example.
- **`ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle`**: Specified AC, smoothness and the base-first/fibre-second total-space orientation; supplied the zero-section and tangent-kernel prerequisites. Removed the unsupplied and convention-dependent clutching-integer sentence. The explicit two pole derivatives remain -I and +I, both with positive determinant.
- **`ex-diagonal-in-the-two-sphere-has-self-intersection-two`**: Specified AC, corrected transport of the diagonal orientation from S^2, and supplied the tangent-kernel justification for the explicit tangent field. The computed self-intersection remains two.
- **`ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus`**: Constructed the smooth quotient-circle charts, including Hausdorffness, second countability and compactness; stated AC. Clarified the display title and prose as an alternating matrix and verified mq-np on the span of the two classes. This is a terminology clarification: the B-page displayed matrix fixes its convention, so its word “hyperbolic” alone is not routed as a mathematical defect.
- **`cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection`**: Replaced the trivial minus-one-on-both-overlaps cocycle by an explicit antiperiodic quotient, supplied its smooth/topological bundle checks, and exhibited epsilon sin(pi t) with one simple zero. Removed the inapplicable rank-one projective fibre-generator citation and the false overall-sign-only claim; distinguished untwisted integral counts from twisted Euler classes. Evidence: explicit deck derivative, explicit section derivative, and the mod-two self-intersection supplier.

The A-page first paragraph now distinguishes bordism invariance from homology invariance, which follows from the cup-pairing theorem. Its prose also explicitly requires compact boundaryless submanifolds for numerical self-intersection even in a noncompact ambient manifold.

Updated `research/frontier-41-ha-dt-29-batch-2.proof-contracts.json`: refreshed each affected source quotation, fact use and derivation against current carriers. Corrected stale boundary evidence, including: rank-one zeros on a noncompact base need not be finite; a=0 does not make the normal derivative a one-by-one matrix; empty submanifolds are allowed in any dimension; the diagonal normal identification has no additional (-1)^n factor; a single transverse zero is not supplied by the S^2 computation; and arbitrary rank-zero orientation units must be retained. Refreshed the unchanged diagonal corollary’s affected supplier quote and boundary evidence. Proof repairs now carry `provenance.proof: ai-altered` where appropriate. No changed carrier contained a judge record to retain; none was introduced.

## Authoritative source checks

- [Cohen, Bundles, Manifolds, and Homotopy, bookR4](https://math.stanford.edu/~ralph/bookR4.pdf), printed pp.250–258, PDF pp.261–269: read Proposition 9.1, Theorem 9.2 and Corollary 9.3 with their displayed arguments, and the complete relevant proof of Theorem 9.4; read Theorem 9.5 and the following representability remark. The collapse-to-duality argument uses the absolute pullback of the Thom class, and the transverse-map extension supports keeping the original source rather than an embedded image. The library’s shuffle signs were derived locally, not copied across differing source conventions.
- [Ionel/Lin, Stanford Math 215B notes](https://web.stanford.edu/~lindrew/math215B.pdf), printed pp.43–45: read Theorems 138–139 and the full proof of 139, including its compact-supported duality qualification. Its rigorous formula uses the collapse pullback before cap evaluation.

The representability remark remains a source-recorded caveat; this review does not claim to have reproved Thom’s realization theorem or a Steenrod-operation obstruction. Bibliographic entries for Guillemin–Pollack and Milnor–Stasheff were not independently checked against their full texts.

## Uneditable finding

**Published `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle`, Proof 4.1, line 64 — false claim, fatal.** The statement admits an R-oriented rank-zero bundle in the general Thom scope, but step 4.1 sets its Euler class to 1 and treats the cup map as an identity. `def-euler-class-by-zero-section-pullback-of-the-thom-class`, Definition, explicitly gives e(0_B,o)=o for an arbitrary supplied orientation unit. Take B a point, R=Z and o=-1: the Euler class and the cup map are -1, so the proof’s claimed identity is false. Repair by retaining o and multiplication by that unit, or explicitly restrict that boundary sentence to the standard orientation. The general displayed Gysin sequence remains the unit-multiplication exact sequence. Assigned consumer `prop-mod-two-self-intersection-needs-no-orientation` reaches it through `thm-mod-two-euler-class-is-the-top-stiefel-whitney-class`; that mod-two application itself uses the standard canonical orientation and is not a counterexample to the assigned result. The supplier was read but is published and outside this dispatch’s edit authority. `observed_source` is null because this is a published dependency.

The current title of `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section` says only that a transverse section has a submanifold zero set, matching its conditional statement. The identifier does not license a perturbation theorem. No supplier finding is routed for this: the assigned existence gap was repaired by an explicit finite-parameter construction. Likewise the B-page’s displayed alternating torus matrix specifies its signs, so its use of “hyperbolic block” is treated as terminology, not a confirmed defective mathematical assertion.

## Page verdicts and blockers

- **A — `intersection-pairings-self-intersection-and-euler-classes`:** mathematically supportable after the recorded repairs. The four unedited carriers (three seam/representability remarks and the diagonal Euler corollary) were read and are compatible with the repaired interfaces. The representability caveat is recorded from Cohen rather than proved locally. One published dependency boundary-case claim remains for Step 5b disposition.
- **B — `intersection-pairings-self-intersection-and-euler-classes-examples`:** computations agree with the repaired items: trivial plane bundle 0, tangent-plane bundle and S^2 diagonal 2, torus entries 0,1,-1,0, and Möbius parity 1. The replacement Möbius witness supplies the actual nontrivial line bundle. No B-prose repair or local withdrawal is required.

No unresolved assigned-item proof gap is being handed off. The published Gysin orientation correction is outside this reader’s authority; resolving or disposing of it belongs to the lead. These are reader conclusions, not judge or publication stamps.

## Validation

After the final item edits, reflow and precheck completed successfully for each of the 17 changed items. Initial phase/dependency-order and multiline-step formatting failures were corrected with mathematically equivalent canonical ordering; all final invocations passed. Definition carriers were included; precheck reports no proof section to check for those carriers.

- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-2.proof-contracts.json --strict`: 21/21 items, 0 errors, 0 warnings.
- Explicit-path `node tools/rendercheck.mjs ...`: 17 changed items plus both pages, 19 files, all YAML and math spans passed the real renderer/KaTeX checks.
- `node tools/depcheck.mjs --items-file /tmp/reader2_scope.json --json`: all 21 assigned items and both pages selected, 0 errors, 0 warnings. Its loaded closure is context, not an assertion that this reader audited all those suppliers.
- One final batched `node tools/proof-layout.mjs` invocation on all 17 changed item paths: **17 items, 50 steps, 0 defects**. No item edits or formatter ran after that invocation.

## Supplier inventory and coverage limits

The following 112 current direct suppliers were opened. Their statement/definition interfaces and metadata were checked; proofs were read where needed for the intersection/homotopy, boundary, tube, cap/AW, Thom/Euler, orientability, metric, collar/double and CW-admissibility arguments. Late-added clutching/covering suppliers were read at statement level and used through those exact interfaces. This is not a fresh audit of every recursively reachable foundational proof. Partial tool outputs were continued for relevant argument portions; no missing claim was inferred from truncation.

- `items/cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary.md`.
- `items/cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section.md`.
- `items/cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction.md`.
- `items/cor-homology-of-spheres.md`.
- `items/cor-homotopic-maps-induce-the-same-map-on-singular-homology.md`.
- `items/cor-poincare-duality-gives-a-nonsingular-cup-pairing.md`.
- `items/cor-real-line-is-universal-cover-of-circle.md`.
- `items/cor-short-exact-sequences-of-vector-bundles-split-over-the-base.md`.
- `items/def-a-smooth-map-transverse-to-an-embedded-submanifold.md`.
- `items/def-alexander-whitney-diagonal-approximation.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-cap-duality-map-for-an-oriented-manifold.md`.
- `items/def-cap-product-with-cohomology-first.md`.
- `items/def-circle-as-real-line-mod-integers.md`.
- `items/def-compactly-supported-singular-cohomology-of-a-locally-compact-space.md`.
- `items/def-countable-choice.md`.
- `items/def-differential-of-a-smooth-map.md`.
- `items/def-disk-sphere-and-thom-space-of-a-metric-vector-bundle.md`.
- `items/def-embedded-smooth-submanifold-with-boundary.md`.
- `items/def-embedded-submanifold-and-slice-chart.md`.
- `items/def-euclidean-spheres-and-closed-balls.md`.
- `items/def-euler-class-by-zero-section-pullback-of-the-thom-class.md`.
- `items/def-fundamental-class-of-a-compact-oriented-manifold.md`.
- `items/def-induced-boundary-orientation.md`.
- `items/def-kronecker-evaluation-pairing.md`.
- `items/def-local-oriented-intersection-sign.md`.
- `items/def-mod-two-intersection-number.md`.
- `items/def-neat-submanifold-of-a-manifold-with-boundary.md`.
- `items/def-normal-and-conormal-bundles-of-an-embedded-submanifold.md`.
- `items/def-oriented-intersection-number.md`.
- `items/def-product-orientation.md`.
- `items/def-pullback-vector-bundle-as-a-fibre-product.md`.
- `items/def-r-oriented-vector-bundle-and-orientation-local-system.md`.
- `items/def-real-projective-bundle-and-tautological-line.md`.
- `items/def-relative-cap-product.md`.
- `items/def-relative-cup-product.md`.
- `items/def-relative-singular-cochain-complex.md`.
- `items/def-singular-chain-cross-product-on-generators.md`.
- `items/def-smooth-map-between-manifolds-with-boundary.md`.
- `items/def-smooth-section-local-section-and-support.md`.
- `items/def-smooth-vector-bundle-rank-fibre-and-trivial-bundle.md`.
- `items/def-stiefel-whitney-classes-from-the-projective-bundle-relation.md`.
- `items/def-tangent-bundle-as-a-disjoint-union.md`.
- `items/def-tautological-degree-one-class-on-a-real-projective-bundle.md`.
- `items/def-thom-class-by-fiberwise-normalization.md`.
- `items/def-thom-euler-class-of-an-oriented-vector-bundle.md`.
- `items/def-transverse-complementary-dimensional-intersection-set.md`.
- `items/def-transverse-embedded-submanifolds.md`.
- `items/def-tubular-neighbourhood-of-an-embedded-submanifold.md`.
- `items/def-two-dimensional-torus.md`.
- `items/def-vector-bundle-chart-and-transition-function.md`.
- `items/def-vector-bundle-map-over-a-smooth-base-map.md`.
- `items/def-whitney-sum-of-vector-bundles.md`.
- `items/lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family.md`.
- `items/lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls.md`.
- `items/lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space.md`.
- `items/lem-compact-transverse-complementary-intersections-are-finite.md`.
- `items/lem-compatible-local-orientation-classes-exist-over-compact-subsets.md`.
- `items/lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section.md`.
- `items/lem-mod-two-cohomology-ring-of-infinite-real-projective-space.md`.
- `items/lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count.md`.
- `items/lem-pi-three-so-three-generated-by-the-quaternion-double-cover.md`.
- `items/lem-second-countable-smooth-manifolds-have-cw-homotopy-type.md`.
- `items/lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal.md`.
- `items/lem-tautological-degree-one-class-is-well-defined-and-fiber-generating.md`.
- `items/prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish.md`.
- `items/prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold.md`.
- `items/prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set.md`.
- `items/prop-cap-product-naturality-and-projection-formula.md`.
- `items/prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles.md`.
- `items/prop-first-stiefel-whitney-class-classifies-orientability.md`.
- `items/prop-normal-and-conormal-bundles-are-smooth-vector-bundles.md`.
- `items/prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure.md`.
- `items/prop-relative-transversality-preserves-a-map-on-a-closed-good-region.md`.
- `items/prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components.md`.
- `items/prop-tangent-space-of-a-regular-level-set-is-the-kernel.md`.
- `items/prop-the-diagonal-is-an-embedded-submanifold.md`.
- `items/prop-the-zero-section-is-a-smooth-embedding.md`.
- `items/prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section.md`.
- `items/thm-a-regular-level-set-is-an-embedded-submanifold.md`.
- `items/thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle.md`.
- `items/thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses.md`.
- `items/thm-canonical-tangent-and-cotangent-splittings-for-products.md`.
- `items/thm-cap-product-boundary-identity.md`.
- `items/thm-collar-neighborhood-theorem.md`.
- `items/thm-covering-space-lifting-criterion.md`.
- `items/thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric.md`.
- `items/thm-excision-for-singular-cohomology.md`.
- `items/thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle.md`.
- `items/thm-higher-dimensional-spheres-are-simply-connected.md`.
- `items/thm-homotopic-maps-induce-equal-maps-in-singular-cohomology.md`.
- `items/thm-intersection-number-under-factor-interchange.md`.
- `items/thm-long-exact-sequence-of-a-pair-in-singular-cohomology.md`.
- `items/thm-mod-two-euler-class-is-the-top-stiefel-whitney-class.md`.
- `items/thm-mod-two-intersection-number-is-homotopy-invariant.md`.
- `items/thm-naturality-and-uniqueness-of-thom-classes.md`.
- `items/thm-naturality-of-stiefel-whitney-classes.md`.
- `items/thm-naturality-of-the-singular-cohomology-pair-sequence.md`.
- `items/thm-oriented-clutching-classifies-oriented-bundles-over-spheres.md`.
- `items/thm-oriented-intersection-number-is-homotopy-invariant.md`.
- `items/thm-parametric-transversality.md`.
- `items/thm-poincare-duality-for-oriented-topological-manifolds.md`.
- `items/thm-singular-cohomology-is-graded-commutative.md`.
- `items/thm-the-double-has-a-well-defined-smooth-structure.md`.
- `items/thm-the-pullback-fibre-product-is-a-smooth-vector-bundle.md`.
- `items/thm-thom-isomorphism-for-oriented-vector-bundles.md`.
- `items/thm-topological-universal-coefficient-short-exact-sequence-for-cohomology.md`.
- `items/thm-transversality-homotopy-theorem.md`.
- `items/thm-transverse-preimage-for-manifolds-with-boundary.md`.
- `items/thm-transverse-preimage-theorem.md`.
- `items/thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold.md`.
- `items/thm-whitney-sum-formula-for-stiefel-whitney-classes.md`.

Additional opened supplier/context items (not all remain direct dependencies):

- `items/def-double-of-a-smooth-manifold-with-boundary.md`.
- `items/def-smooth-collar-of-a-manifold-boundary.md`.
- `items/prop-pointwise-orientation-sign-of-a-local-diffeomorphism.md`.
- `items/def-local-degree-at-an-isolated-preimage.md`.
- `items/thm-regular-value-formula-for-compact-support-degree.md`.
- `items/cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section.md`.
