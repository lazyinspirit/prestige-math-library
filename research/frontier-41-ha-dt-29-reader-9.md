# Reader 9 — batch 9, frontier-41-ha-dt-29

## Outcome

Reviewed both assigned pages and all 25 assigned item bodies. Repaired 23 assigned draft items, their affected proof contracts, and the assigned A-page prose. No proposed withdrawal is needed. Two fatal defects remain in the B-page prose, which this reader is not authorized to edit. No unresolved item-proof blocker was identified. These are reader conclusions and local checks, not judge/audit stamps or publication decisions.

## Scope and evidence

Read CLAUDE.md, README.md, briefs/reader.md, SCHEMA.md relevant content clauses, the batch manifest and proof contracts. The inspected live state was `5a-read`; git head was `36dfbe698` (Scope plan gates to current frontier and retain supplier graph checks). Assigned carriers were draft items of this run. Manifest statements and old contracts were treated as evidence, and several were contradicted by the authored mathematics. New suppliers were opened as gaps were discovered, before writing the corresponding dependent repairs. No other batch, B-page prose, published content, plan-spec or verification judgment was edited.

Authoritative passages read: [Milnor, Topology from the Differentiable Viewpoint](https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf), Section 7, printed pp.48–50, including the p.48 cutoff footnote and complete Lemma 4 comparison argument; [Freed, Bordism: Old and New](https://people.math.harvard.edu/~dafr/bordism.pdf), Theorem 3.7 and proof of Theorem 3.9/Lemma 3.12, printed pp.26–28, plus Lemma 4.16 at p.32 and (4.42)–(4.43) at p.36. These establish the relevant cutoff, neat-tube, inverse-comparison, based/free and prepended-normal conventions. The repairs below include the local arguments instead of treating those conventions as an unexplained prerequisite.

## Assigned opened inventory

- `library/differential-topology/pontryagin-thom-and-framed-cobordism.md` (A).
  - `items/def-framing-of-a-normal-bundle.md` — read; no defect found.
  - `items/def-framed-cobordism-of-embedded-submanifolds.md` — read; no defect found.
  - `items/lem-framed-cobordism-is-an-equivalence-relation.md` — repaired.
  - `items/prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product.md` — repaired.
  - `items/def-pontryagin-thom-map-of-a-framed-submanifold.md` — repaired.
  - `items/lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy.md` — repaired.
  - `items/def-pontryagin-thom-collapse-of-a-framed-neat-cobordism.md` — repaired.
  - `items/lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps.md` — repaired.
  - `items/def-framed-regular-preimage-of-a-map-to-a-sphere.md` — repaired.
  - `items/lem-positively-oriented-bases-are-path-connected.md` — repaired.
  - `items/lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages.md` — repaired.
  - `items/lem-regular-value-choice-does-not-change-the-framed-cobordism-class.md` — repaired.
  - `items/lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold.md` — repaired.
  - `items/lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map.md` — repaired.
  - `items/lem-based-and-free-homotopy-classes-of-sphere-maps-agree.md` — repaired.
  - `items/thm-pontryagin-thom-correspondence-in-fixed-codimension.md` — repaired.
  - `items/def-stabilized-framed-cobordism-colimit.md` — repaired.
  - `items/lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map.md` — repaired.
  - `items/thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems.md` — repaired.
  - `items/rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data.md` — repaired.
- `library/differential-topology/pontryagin-thom-and-framed-cobordism-examples.md` (B).
  - `items/ex-framed-zero-manifolds-and-signed-points.md` — repaired.
  - `items/ex-pontryagin-thom-map-of-the-standard-framed-equator.md` — repaired.
  - `items/ex-framed-links-represent-elements-of-pi-three-of-s-two.md` — repaired.
  - `items/cex-changing-a-framing-can-change-the-pontryagin-thom-class.md` — repaired.
  - `items/ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map.md` — repaired.

## Supplier inventory and depth of reading

Opened the following 92 published supplier carriers. For basic definitions, algebra/calculus facts, degree, fibration, stable-stem and approximation results, the exact Definition/Statement clauses needed by the consumers were inspected. Full relevant bodies/arguments were read for the normal-bundle constructions, Thom metric/trivial-bundle comparisons, collapse continuity/independence, prescribed-normal tubular charts, neat slice charts, transverse normal structure, point transversality, relative transversality, dense regular values, the smooth ambient tubular-neighbourhood theorem and the quotient-circle homeomorphism. This is a selective supplier audit, not an exhaustive proof audit of their entire published transitive closure.

- `items/cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map.md`.
- `items/cor-invertible-matrix-has-unit-determinant.md`.
- `items/cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus.md`.
- `items/cor-real-line-is-universal-cover-of-circle.md`.
- `items/cor-regular-values-form-a-dense-g-delta-set.md`.
- `items/cor-sine-and-cosine-are-one-lipschitz.md`.
- `items/cor-trigonometric-parity-and-pythagorean-identity.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-compact-space.md`.
- `items/def-compactly-generated-based-space-and-well-pointed-object.md`.
- `items/def-countable-choice.md`.
- `items/def-diffeomorphism-and-local-diffeomorphism-of-manifolds.md`.
- `items/def-disk-bundle-sphere-bundle-and-thom-space.md`.
- `items/def-disk-sphere-and-thom-space-of-a-metric-vector-bundle.md`.
- `items/def-elementary-matrix.md`.
- `items/def-equivalence-relation.md`.
- `items/def-euclidean-spheres-and-closed-balls.md`.
- `items/def-higher-homotopy-group-by-based-cubes.md`.
- `items/def-homotopy-relative-and-path-homotopy.md`.
- `items/def-invertible-matrix-and-general-linear-group.md`.
- `items/def-matrix-product-and-identity-matrix.md`.
- `items/def-natural-logarithm.md`.
- `items/def-neat-submanifold-of-a-manifold-with-boundary.md`.
- `items/def-normal-and-conormal-bundles-of-an-embedded-submanifold.md`.
- `items/def-orientation-of-a-finite-dimensional-real-vector-space.md`.
- `items/def-path-connected.md`.
- `items/def-pontryagin-thom-collapse-of-an-embedded-submanifold.md`.
- `items/def-reduced-cone-suspension-and-cofiber-sequence.md`.
- `items/def-smash-product-of-based-spaces.md`.
- `items/def-smooth-embedding.md`.
- `items/def-smooth-manifold.md`.
- `items/def-smooth-vector-bundle-rank-fibre-and-trivial-bundle.md`.
- `items/def-stable-normal-bundle-of-a-compact-smooth-manifold.md`.
- `items/def-stable-stem-of-the-sphere.md`.
- `items/def-suspension-prespectrum-and-sphere-prespectrum.md`.
- `items/def-the-standard-smooth-step-function.md`.
- `items/def-transverse-smooth-maps.md`.
- `items/def-unoriented-smooth-cobordism-of-closed-manifolds.md`.
- `items/def-wedge-of-pointed-spaces.md`.
- `items/lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint.md`.
- `items/lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy.md`.
- `items/lem-covering-homotopies-lift-by-finite-local-strips.md`.
- `items/lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes.md`.
- `items/lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres.md`.
- `items/lem-smooth-maps-paste-over-an-open-cover.md`.
- `items/lem-stabilizing-a-normal-bundle-suspends-its-thom-space.md`.
- `items/lem-straight-line-homotopies-are-continuous.md`.
- `items/lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism.md`.
- `items/lem-tubular-charts-realize-a-prescribed-normal-identification.md`.
- `items/prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle.md`.
- `items/prop-cubical-and-spherical-models-of-higher-homotopy-agree.md`.
- `items/prop-loop-suspension-adjunction-on-based-homotopy-classes.md`.
- `items/prop-normal-and-conormal-bundles-are-smooth-vector-bundles.md`.
- `items/prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure.md`.
- `items/prop-relative-transversality-preserves-a-map-on-a-closed-good-region.md`.
- `items/prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms.md`.
- `items/prop-the-sphere-prespectrum-homotopy-groups-are-the-stable-stems.md`.
- `items/prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product.md`.
- `items/prop-thom-space-of-zero-and-trivial-bundles.md`.
- `items/prop-transversality-to-a-point-is-the-regular-value-condition.md`.
- `items/prop-transverse-preimage-carries-a-pulled-back-normal-structure.md`.
- `items/thm-based-sphere-maps-are-classified-by-geometric-degree.md`.
- `items/thm-chain-rule-for-differentials-of-smooth-maps.md`.
- `items/thm-compact-subset-of-a-hausdorff-space-is-closed.md`.
- `items/thm-compactness-under-continuous-maps.md`.
- `items/thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic.md`.
- `items/thm-covering-space-lifting-criterion.md`.
- `items/thm-derivative-of-exponential.md`.
- `items/thm-determinant-multiplicative.md`.
- `items/thm-determinant-of-a-triangular-matrix.md`.
- `items/thm-disjoint-union-makes-bordism-classes-abelian-groups.md`.
- `items/thm-euclidean-tubular-neighbourhood-theorem.md`.
- `items/thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space.md`.
- `items/thm-finite-products-of-compact-spaces.md`.
- `items/thm-heine-borel-r.md`.
- `items/thm-heine-cantor-metric.md`.
- `items/thm-higher-dimensional-spheres-are-simply-connected.md`.
- `items/thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one.md`.
- `items/thm-intermediate-value.md`.
- `items/thm-invertible-matrices-factor-into-elementary-matrices.md`.
- `items/thm-logarithm-derivative-and-integral.md`.
- `items/thm-long-exact-sequence-of-homotopy-groups-of-a-fibration.md`.
- `items/thm-lower-dimensional-sphere-maps-are-based-nullhomotopic.md`.
- `items/thm-morse-sard-for-smooth-manifolds.md`.
- `items/thm-neat-submanifolds-have-boundary-adapted-slice-charts.md`.
- `items/thm-numerable-fiber-bundles-are-hurewicz-fibrations.md`.
- `items/thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle.md`.
- `items/thm-regular-value-formula-for-degree.md`.
- `items/thm-sine-and-cosine-derivatives.md`.
- `items/thm-smooth-inverse-function-theorem-on-manifolds.md`.
- `items/thm-stable-normal-bundle-is-independent-of-the-embedding.md`.
- `items/thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold.md`.

## Item repairs and their evidence

### lem-framed-cobordism-is-an-equivalence-relation

Proof 1.1 used epsilon=1/2, excluded by the definition requiring epsilon<1/2. Changed it to 1/4 with the corresponding collars. F4 now supplies compactness of I and finite products by the opened Heine–Borel and finite-product statements, and step 2.1 explicitly credits the earlier framing transport.

### prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product

Statement and proof 1.1 conflated rank-zero Thom spaces with one-point spaces and described every empty-base space as one point. The opened Thom definitions give Th(0_N)=N_+, while the sphere target remains S^k. Corrected both degenerate clauses and retained the radial comparison argument.

### def-pontryagin-thom-map-of-a-framed-submanifold

The old v/(1-|v|) formula is not smooth at zero (already for a normal line), is not constant near the tube boundary, and is incompatible with the claimed arbitrary-metric literal framing recovery. Replaced it with a squared-norm smooth cutoff a, finite target coordinate u/a(|u|^2), and its smooth infinity coordinate a(|u|^2)u/|u|^2. Near zero this is exactly the framing coordinate. Gave the radial disk homotopy to ordinary collapse, distinguished the class from its normalized representative, and distinguished X_+ from X with a preselected basepoint. Milnor p.48 cutoff footnote resolves the correct model; the local formulas and homotopy are supplied explicitly.

### lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy

Corrected the empty/rank-zero conclusion: empty N gives the constant sphere map; rank zero gives the characteristic map of clopen N, not maps of one-point spaces. Specified smooth supplied metrics. The exact metric cancellation is supported by the opened radial comparison and framing-homeomorphism suppliers.

### def-pontryagin-thom-collapse-of-a-framed-neat-cobordism

The boundaryless compatible-chart lemma did not provide a product neat tube. The old finite normal-coordinate-over-radius formula in a one-point compactification did not tend to infinity at the boundary and also applied Psi to a coordinate already in R^k. Extended W by its literal cylinders into X times (-1,2), supplied compatible boundaryless tubes, and made them products on end collars by blending germs through a Euclidean smooth retraction. Verified the induced normal differential, local invertibility and compact uniform injectivity. Used the corrected smooth collapse with actual endpoint restrictions. Freed Theorem 3.7 and proof of Theorem 3.9, pp.26–27, identify the missing product-tube requirement; opened embedding, Euclidean-tube and inverse-function suppliers support the explicit local repair. Updated dependency level to 3.

### lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps

Retained the endpoint collapse/comparison proof with the repaired neat supplier. Replaced the false rank-zero one-point-map conclusion by constancy of every path into S^0; empty ends remain constant at the sphere basepoint.

### def-framed-regular-preimage-of-a-map-to-a-sphere

For k=0 the fibre is clopen and has dimension dim X, not a finite zero-manifold. Corrected that clause. Clarified that the transverse zero-section supplier is applied locally in a chart centred at y with differential beta, rather than pretending an arbitrary regular value is the fixed Thom centre.

### lem-positively-oriented-bases-are-path-connected

The cited trigonometric continuity facts did not supply the claimed smooth paths; added the opened sine/cosine derivative supplier and the repeated-derivative argument. Corrected the smooth concatenation explanation: the step function is endpoint-flat, not constant near the junction in the displayed concatenation. Removed the inaccurate rotation-conjugacy wording in the paired sign-flip step; retained the explicit rotation formula.

### lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages

The old global sphere diffeomorphism with an arbitrary prescribed derivative was not established by choosing a local chart, and the published relative-transversality statement was boundaryless. Replaced the global normalization with local target coordinates. Flattened and extended the homotopy to X times R, applied the published theorem there relative to the closed exterior ends, then restricted to I. Verified compactness, boundary transversality, product collars and constant framings. No boundary extension of that supplier is assumed.

### lem-regular-value-choice-does-not-change-the-framed-cobordism-class

The k=0 value-independence claim is false: a constant map to S^0 has fibres X and empty at its two regular values. Added k>=1, which preserves every downstream positive-codimension use. F6 falsely inferred regularity of endpoint maps from regularity of a homotopy; for F(x,t)=t, the full differential can be onto while both endpoint spatial derivatives vanish. Instead choose a common regular value of the two endpoint maps, using compact closed critical sets and Sard. Handled equal target values by the identity rotation. Added the corresponding earlier-step credits.

### lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold

Rebuilt the recovery computation for the normalized smooth representative: centre fibre is N and its normal derivative is exactly phi. Qualified literal recovery, which does not hold for arbitrary positive-scale or arbitrary-metric collapse models. The original cited collapse supplied a scaled derivative, not the displayed nonsmooth formula.

### lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map

The estimate |phi(u)|>=delta|u| does not imply phi(u) dot u>=delta|u|^2: phi=-I is an immediate counterexample. Rebuilt the argument in actual framing coordinates, where the normal derivative is I and a uniform Taylor estimate gives F dot u>0. The old local-support statement also compared f|N=y with g|N=y_0; qualified that stronger local assertion by the necessary fixed-centre/fixed-basis normalization. Preserved the general smooth inverse via a rotation, a positive-basis cylinder and the framed-cobordism supplier. Added the continuous/local-smooth extension needed by the suspension argument. Milnor Lemma 4, pp.48–50, and Freed Lemma 3.12, pp.27–28, were read completely for these local comparison arguments.

### lem-based-and-free-homotopy-classes-of-sphere-maps-agree

The original wedge homotopy was undefined when H(*,t) moved: the two wedge summands no longer agreed there. Replaced it by an explicit minimal-rotation matrix Q(a,b), a finite interval lift P_t of the basepoint path, and a plane-rotation path in its endpoint stabilizer SO(k). This proves actual based injectivity. Supplied compactness/uniform continuity for the finite subdivision and the published cubical/spherical model comparison. Freed Lemma 4.16, p.32, states the desired bijection; the repaired proof closes the specific moving-basepoint gap directly.

### thm-pontryagin-thom-correspondence-in-fixed-codimension

Proof 1.1 treated a map based at the disjoint point of (S^n)_+ as based at a chosen point of S^n. Defined its pi_n class by applying the inverse of the repaired based/free forgetful bijection to the restriction free class. Rechecked both inverse compositions against the repaired suppliers; all uses have n>=k>=1.

### def-stabilized-framed-cobordism-colimit

The ordinary abstract unoriented bordism law does not prove independence of unions of embedded framed representatives. Defined the colimit operation by transported addition at a common level, with explicit well-definedness supplied by the stable theorem (justified_by). Separated stable framed bordism classes from stable framings on a fixed manifold. Specified the chosen northern-hemisphere outward normal with the new coordinate first, preserving the prepended-normal/sphere-prespectrum convention.

### lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map

The old proof asserted a pointwise equality between a radial product-tube collapse and a suspended collapse without supplying it. Now choose a representative avoiding the sphere basepoint, represent suspension by the one-point compactification of (t,x) mapping to (t,z(f(x))), and compute its regular centre fibre and prepended framing. The continuous/local-smooth inverse supplier gives the required homotopy-class equality. This avoids an unjustified smooth equator identification of arbitrary reduced-cone coordinates.

### thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems

An arbitrary cubical quotient homeomorphism is not a smooth coordinate chart, the old proof silently assumed the chosen basepoint missed each framed submanifold, and individual cobordism tracks need not form an embedded disjoint union. Chose an explicit logit/stereographic quotient chart smooth on its interior and representatives constant near the basepoint. Constructed the two half-space packing embeddings and the smooth pinch map. Supplied the complete quotient framing of each individual track, including its time derivative, and never unioned the tracks. The resulting packed regular fibre has exactly the sum class, proving representative independence, stabilization compatibility and the group law through the PT bijection. Opened exponential/logarithm suppliers establish the coordinate smoothness and inverse identities. Read Freed (4.42)–(4.43), p.36, for the geometric convention.

### rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data

Stated the inherited countable-choice assumption and included homotopy in the stable-framing conventions. Retained the actual/stable normal and stable tangential distinctions after opening both stable-normal suppliers.

### ex-framed-zero-manifolds-and-signed-points

Stated inherited countable choice in the Example and Given, and supplied the compact singleton-cover argument for finiteness. Rechecked signs and degree against the opened regular-value formula, degree classification and repaired normalized collapse. Kept n>=1 explicitly.

### ex-pontryagin-thom-map-of-the-standard-framed-equator

Replaced the schematic sweep with the explicit neat level set height=h(t), h(t)=2t sigma(8t-1), capped at time 1/2; checked the regular cap and nonvanishing normal extending the outward collar framing. Removed the false assertion that this equator stabilizes the lower-dimensional equator. Stabilization preserves its dimension and sends its zero class to zero in higher codimension. Restricted the single-point generator contrast to m=1; for m>1 it lies in a different stem. Stated inherited choice and retained the two opposite signs at m=1.

### ex-framed-links-represent-elements-of-pi-three-of-s-two

Corrected the stated differential location and real rank: delta z_2/z_1 has complex rank one and real rank two along U. Gave the smooth CP^1/S^2 chart identification, both local Hopf bundle sections and a finite support-subordinate partition, rather than assuming numerability. Added the actual covering-map lifting criterion and unit-circle/quotient-circle identification to justify pi_j(S^1)=0. Kept full AC specifically for the numerable-bundle theorem.

### cex-changing-a-framing-can-change-the-pontryagin-thom-class

A disk in S^3 has rank-one normal bundle and is not the claimed rank-two neat cobordism. Supplied an explicit bent neat disk in S^3 times I with the ordered normal pair e_4 and (height gradient,-h prime), extending the bounding collar framing. Supplied Hopf numerability, real-rank computation and the actual circle lifting criterion as in the example. The same underlying unknot still has a nonzero Hopf class and zero bounding-framing class; added the exact earlier-step credits.

### ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map

Stated countable choice in the Example and identified the resulting stable class specifically as a class in pi_0^s. Rechecked the prepended-normal orientation and degree-generator computation against the clarified stabilization convention and the repaired compatibility theorem.

## Page repairs and verdicts

- `pontryagin-thom-and-framed-cobordism` (A): no remaining defect found after repair. Its summary now says the homotopy class, rather than the literal map, is independent of tube/metric/radius and distinguishes countable choice in the theory from full AC in the Hopf-bundle examples. The fixed theorem and stable group claims are supported by the repaired suppliers.
- `pontryagin-thom-and-framed-cobordism-examples` (B): requires prose repair. Its first paragraph needs n>=1, and its second paragraph confuses stabilization of fixed-dimensional framed data with increasing the equator dimension. The item repairs do not correct these uneditable summary sentences.

## Uneditable findings

- **missing-hypothesis; fatal** — `pontryagin-thom-and-framed-cobordism-examples`, library/differential-topology/pontryagin-thom-and-framed-cobordism-examples.md:12–18, first prose paragraph. The summary classifies framed zero-submanifolds of S^n by signed count without n>=1. The assigned example ex-framed-zero-manifolds-and-signed-points and fixed-codimension theorem require n>=1. For n=0, each point of S^0 has a unique rank-zero framing; the two singleton subsets cannot be framed cobordant, since a rank-zero cobordism is clopen in S^0 times I and therefore has constant characteristic map on each time interval. An orientation reversal of the empty framing is unavailable. State n>=1 in this summary. B-page prose is outside reader edit authority.

- **false-claim; fatal** — `pontryagin-thom-and-framed-cobordism-examples`, library/differential-topology/pontryagin-thom-and-framed-cobordism-examples.md:23–26, second prose paragraph. The page says the equator is the equatorial stabilization of the equator one dimension lower. Stabilization in def-stabilized-framed-cobordism-colimit preserves submanifold dimension and raises codimension. Stabilizing S^(m-2) in S^(m-1) gives a submanifold of dimension m-2 and codimension two in S^m, whereas its equator S^(m-1) has dimension m-1 and codimension one. The single-positive-point contrast also belongs to dimension zero. The repaired assigned equator example instead stabilizes the fixed (m-1)-dimensional equator into S^(m+1) and restricts the point contrast to m=1. Revise the page accordingly; B-page prose is outside reader edit authority.

## Contracts, validation and handoff

Updated all 18 proof-bearing contracts in `research/frontier-41-ha-dt-29-batch-9.proof-contracts.json`: current exact supplier quotes, actual proof-step inputs, derivations and reviewed boundary cases. No finite-smoke test or source reading is claimed that was not performed. All edited item carriers have no `verification.judge` record. Definitions/remark were checked with the required tools and correctly return not-applicable for phase-format proof checks.

- Reflow and precheck ran for every changed item. Initial proposed formatting repairs were resolved with dependency-preserving phase numbers and one complete paragraph per step; all final prechecks passed.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-9.proof-contracts.json --strict`: 0 errors, 0 warnings, 18/18 items.
- `node tools/depcheck.mjs --items-file /tmp/reader9-items.json --quiet`: selected item checks, selected page metadata and dependency-closure cycle checks passed; the selector contains exactly the 25 manifest items.
- Final proof-layout command after the final item edits and reflow: 23 items, 77 steps, 0 defects, exit 0. The explicit batched command was:

```sh
node tools/proof-layout.mjs items/lem-framed-cobordism-is-an-equivalence-relation.md items/prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product.md items/def-pontryagin-thom-map-of-a-framed-submanifold.md items/lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy.md items/def-pontryagin-thom-collapse-of-a-framed-neat-cobordism.md items/lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps.md items/def-framed-regular-preimage-of-a-map-to-a-sphere.md items/lem-positively-oriented-bases-are-path-connected.md items/lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages.md items/lem-regular-value-choice-does-not-change-the-framed-cobordism-class.md items/lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold.md items/lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map.md items/lem-based-and-free-homotopy-classes-of-sphere-maps-agree.md items/thm-pontryagin-thom-correspondence-in-fixed-codimension.md items/def-stabilized-framed-cobordism-colimit.md items/lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map.md items/thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems.md items/rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data.md items/ex-framed-zero-manifolds-and-signed-points.md items/ex-pontryagin-thom-map-of-the-standard-framed-equator.md items/ex-framed-links-represent-elements-of-pi-three-of-s-two.md items/cex-changing-a-framing-can-change-the-pontryagin-thom-class.md items/ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map.md
```

One attempt to obtain depcheck help unexpectedly invoked its whole-corpus default and returned unrelated failures. That invocation was not used as batch evidence, and no unrelated repair was attempted; the explicit scoped invocation above supersedes it.

Findings handoff: `research/frontier-41-ha-dt-29-reader-findings-9.json` contains the two B-page findings only. Repaired defects are confined to this report and the item/A-page/contract byte changes. The Step 5b lead must repair the B-page summary; the normal independent review and judge stages remain engine-owned.

## Coverage limitations

Opened both assigned pages and all 25 assigned items; inspected the supplier clauses needed for their claims and repaired 23 items plus A-page prose. Read relevant Milnor Section 7 and Freed Lectures 3–4 passages. Published supplier proofs were checked selectively; the full published closure and other bibliographic references were not exhaustively audited. Two B-page prose findings remain.
No independent check of Ranicki, May, Munkres or every other bibliographic locator was completed; no exhaustive published-library audit or independent certification is claimed. Source ambiguity affecting the actual repaired arguments was resolved by the specified Milnor/Freed passages and opened local suppliers.
