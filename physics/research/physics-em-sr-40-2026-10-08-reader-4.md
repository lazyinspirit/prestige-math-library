# Reader 4 — batch 4

Independent Step 5a review; all carriers remain draft. This report records reading and repairs, not judgment or certification.

## Opened inventory

Rules read: ../CLAUDE.md, CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, ../PHYSICS-CONTENT-MODEL.md, briefs/reader.md, and the current run owner-authoring direction. The batch manifest and batch proof contracts were inspected as evidence. No rendered reader bundle was found in the current run paths searched.

- `library/special-relativity/sr-observer-measurements.md` (A)
  - `items/def-sr-chart-tetrad-and-congruence-distinction.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/def-flat-covariant-derivative-on-affine-minkowski-space.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/def-sr-observer-congruence-and-kinematics.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/def-sr-simultaneity-slice-and-rest-distance.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/def-sr-operational-radar-protocol.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/lem-sr-radar-midpoint-for-inertial-observer.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/pthm-sr-radar-synchronization-of-inertial-observers.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/lem-sr-boost-time-length-and-velocity-formulas.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/pthm-sr-observer-time-length-and-velocity-measurements.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/def-sr-fermi-walker-transport.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/lem-sr-fermi-walker-transport-existence-and-uniqueness.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/thm-sr-local-congruence-adapted-charts-and-frobenius.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/lem-sr-closed-one-form-primitive-on-simply-connected-open-sets.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/thm-sr-fermi-walker-and-rigid-observer-examples.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/thm-sr-smooth-local-herglotz-noether.md`: full authored body and metadata opened; supplier-first assigned ordering.
- `library/special-relativity/sr-observer-measurements-examples.md` (B)
  - `items/ex-sr-radar-round-trip-3-4-5.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/ex-sr-time-dilation-at-beta-three-fifths.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/ex-sr-length-contraction-of-a-moving-rod.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/ex-sr-velocity-transformation-worked.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/ex-sr-rindler-wedge-congruence-worked.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/ex-sr-rigid-rotation-simultaneity-holonomy.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/ex-sr-bell-congruence-fails-born-rigidity.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/cex-sr-born-rigid-motion-need-not-be-killing.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/cex-sr-simultaneity-is-observer-dependent.md`: full authored body and metadata opened; supplier-first assigned ordering.
  - `items/ex-sr-fermi-walker-transport-along-hyperbolic-motion.md`: full authored body and metadata opened; supplier-first assigned ordering.

External suppliers: all 87 distinct direct dependencies in the assigned carriers were opened, chiefly their exact Definition/Statement sections. Full proofs additionally opened for the choice-free inverse-function and compact-interval linear-matrix-ODE suppliers. This is relevant prerequisite reading, not a recursive audit of the imported mathematical corpus.

Additional suppliers opened: `thm-continuous-image-of-a-compact-space-is-compact` and `lem-p-norms-are-norms-and-induce-the-published-metrics` (statements and proofs).

## Repairs and evidence

The repair entries below record confirmed defects and their local mathematical evidence.

- `def-sr-chart-tetrad-and-congruence-distinction`: Definition (b) called a vector of square −c² unit and did not specify the along-worldline restriction. Replaced it by the normalized tangent formula and the separate congruence condition; the earlier worldline definition supplies nonvanishing timelike tangents. No existence of an ambient extension is asserted.

- `def-sr-observer-congruence-and-kinematics`: Definition (c) reused θ for a tensor and its scalar trace, leaving θ=0 in (d) ambiguous and shear merely named. Distinguished the scalar as ϑ, defined σ and h with raised indices, made the tensor-vanishing criterion explicit, and supplied the evaluation formula for the Lie derivative. The direct decomposition and Lie-derivative cancellation already prove these identities; zero trace alone is not rigidity.

- `def-sr-simultaneity-slice-and-rest-distance`: Definition (e) and the last remark conflated affine tangent slices with integral hypersurfaces. Clarified that Frobenius integrates the rest distribution, with generally curved leaves; the assigned Frobenius theorem states exactly the tangent-space condition.

- `def-sr-operational-radar-protocol`: The reparametrization assertion omitted the positive-derivative condition needed for a worldline under lem-sr-proper-time-reparametrization-invariance (a cubic monotone map can have zero tangent). Added that condition and a common clock origin. The last remark conflated one observer’s radar assignment with congruence synchronization; distinguished them. All existing inertial and Rindler radar uses remain valid and involve regular proper-time parametrizations.

- `def-sr-fermi-walker-transport`: Definition (d) previously permitted zero spatial legs and so did not define a tetrad. Added the required pointwise orthonormal pairings and basis justification. Corrected the claimed location of metric preservation (the lemma defers it to the theorem). Made the optional tensor extension precise with the induced Fermi–Walker derivative rather than unspecified covariant argument derivatives.

- `lem-sr-radar-midpoint-for-inertial-observer`: Fact F2 cited definitions that did not establish the pairing-sign criterion for arbitrary n and incorrectly called the causal cone a component of the causal set. Supplied the finite-dimensional decomposition and timelike-path proof. Removed the contradictory intermediate sign in step 2.1; the null equations and positive root then give the same midpoint and distance.

- `thm-sr-local-congruence-adapted-charts-and-frobenius`: Step 2.1 falsely inferred η(a,Y)=0 from both vectors being horizontal. Corrected the cancellation to use n♭(X)=n♭(Y)=0 and the correct acceleration-term sign. Step 4.1 now distinguishes tangent rest hypersurfaces from complete affine planes. The claimed Frobenius equivalence is preserved.

- `lem-sr-boost-time-length-and-velocity-formulas`: Statement omitted arbitrary-origin translations and step 2.4 differentiated x′⁰ rather than t′=x′⁰/c. Retained arbitrary origins with b, proved length comparison using affine differences, restored 1/c, and supplied the positive-time inverse/difference-quotient argument. Explicitly included the null branch promised by the equality case. Earlier suppliers: inertial transition, boosts, causal curves and cor-mean-value-theorem. Timelike conclusions and numeric values are preserved.

- `pthm-sr-observer-time-length-and-velocity-measurements`: Step 1.2 described a clock as both at rest and moving at −v in the primed chart; corrected it. Setup now explicitly uses origin-independent differences. Distinguished the coordinate triple w′ from the rest-space velocity vector in (iv) and step 1.5. Conditional ideal-model conclusions and empirical exclusions are preserved.

- `ex-sr-velocity-transformation-worked`: The collinear example compared with a Galilean sum instead of the passive Galilean difference w−v=c/5. Corrected the comparison and L1 to include the explicit null branch, and specified affine curves on R. Values 5c/13, (−3c/5,2c/5,0), and c are unchanged.

- `lem-sr-closed-one-form-primitive-on-simply-connected-open-sets`: Conventions mismatched x⁰,…,x³ with coefficients a₁,…,a₄. Fixed indexing throughout. Fact F7 used continuous-image compactness and ambient covers without their exact suppliers; declared the opened compact-image, intrinsic-compactness and norm-metric dictionary items. Added the singleton-path case before the affine reparametrization in step 6.1. The finite mesh/unique-integral primitive argument itself is sound.

- `thm-sr-fermi-walker-and-rigid-observer-examples`: Rindler slices inside the wedge are open portions of hyperplanes, not whole planes. Step 3.1 omitted c from the claimed four-velocity components; restored it. Defined the time-oriented synchronization differential concretely as df(∂t)>0 with C1 regularity and gave the Killing-equation definition before use. Metric preservation, ambient rotation, ring holonomy and Bell contraction remain unchanged.

- `thm-sr-smooth-local-herglotz-noether`: The label computation (old step 1.5) used the curve and affine-leaf construction supplied only in step 2.3. Moved it to step 2.4 and the converse to 2.5, with all step references updated. Clarified that the coordinate image is star-shaped and leaves are open affine-plane portions. Independently checked the coframe/connection equations, quotient curvature identity, basic vorticity/acceleration, Cartan contraction for da=0, Killing converse dichotomy, and both irrotational directions against Giulini §5.5, Theorems 15/19 and Lemmas 16–18 (printed pp.41–49). No global quotient assumption is imported.

- `ex-sr-rindler-wedge-congruence-worked`: Example (d) and step 4.2 called wedge-restricted slices whole hyperplanes and used coth at θ=0 where it is undefined. Replaced the description by {x⁰=tanh θ x}∩W, valid for every θ. The final acceleration remark no longer uses “rigid” for an unrelated constant-acceleration requirement. Connection, acceleration and bracket calculations are correct.

- `ex-sr-length-contraction-of-a-moving-rod`: Step 1.1 repurposed the positive conversion constant c as an endpoint position and set it to zero. Renamed that auxiliary position ℓ. Exact witness coordinates and lengths are unchanged.

- `ex-sr-time-dilation-at-beta-three-fifths`: Specified the all-real domain and smooth curve in A. Replaced the unsupported physical “clock reads” wording by elapsed model proper time, appropriate to this mathematics-domain example without a physical postulate dependency. Corrected “boost image” to inverse passive-boost image under the established sign convention; all exact values are preserved.

- `ex-sr-bell-congruence-fails-born-rigidity`: The last remark incorrectly called γ-based expressions rational functions and called the computed longitudinal deformation transverse. Corrected both descriptions. Removed the claim that kinematic stretching itself requires elasticity: breaking/stress require additional material assumptions, whereas internal metric change is already kinematic (as the next-page consumer states).

- `cex-sr-simultaneity-is-observer-dependent`: The final remark’s proposed argument for all rest spaces being distinct did not follow from equality of the orthogonal complements (n is not in its own complement). Replaced it with the rest projection, positive definiteness, and future unit normalization. The explicit e1 counterexample and rational pairings are already correct.

- `ex-sr-fermi-walker-transport-along-hyperbolic-motion`: Specified the domain and curve type for the hyperbolic worldline. All derivative, norm, transport and tetrad calculations were checked directly and remain unchanged.

## Local validation

- def-sr-chart-tetrad-and-congruence-distinction: reflow exit 0, precheck exit 0.
- def-sr-observer-congruence-and-kinematics: reflow exit 0, precheck exit 0.
- def-sr-simultaneity-slice-and-rest-distance: reflow exit 0, precheck exit 0.
- def-sr-operational-radar-protocol: reflow exit 0, precheck exit 0.
- def-sr-fermi-walker-transport: reflow exit 0, precheck exit 0.
- lem-sr-radar-midpoint-for-inertial-observer: reflow exit 0, precheck exit 0.
- thm-sr-local-congruence-adapted-charts-and-frobenius: reflow exit 0, precheck exit 0.
- lem-sr-boost-time-length-and-velocity-formulas: reflow exit 0, precheck exit 0.
- pthm-sr-observer-time-length-and-velocity-measurements: reflow exit 0, precheck exit 0.
- ex-sr-velocity-transformation-worked: reflow exit 0, precheck exit 0.
- lem-sr-closed-one-form-primitive-on-simply-connected-open-sets: reflow exit 0, precheck exit 0.
- thm-sr-fermi-walker-and-rigid-observer-examples: reflow exit 0, precheck exit 0.
- thm-sr-smooth-local-herglotz-noether: initial reflow exit 0, precheck exit 1 (canonical reordering requested); subsequently adopted the complete proposed canonical form, restored Proof/Remarks headings, reran reflow and precheck, and obtained exit 0 for both.
- ex-sr-rindler-wedge-congruence-worked: reflow exit 0, precheck exit 0.
- ex-sr-length-contraction-of-a-moving-rod: reflow exit 0, precheck exit 0.
- ex-sr-time-dilation-at-beta-three-fifths: reflow exit 0, precheck exit 0.
- ex-sr-bell-congruence-fails-born-rigidity: reflow exit 0, precheck exit 0.
- cex-sr-simultaneity-is-observer-dependent: reflow exit 0, precheck exit 0.
- ex-sr-fermi-walker-transport-along-hyperbolic-motion: reflow exit 0, precheck exit 0.

- `cex-sr-born-rigid-motion-need-not-be-killing`: removed the unsupported, non-load-bearing claim that the defining hyperbolic antiderivatives are non-elementary; the construction needs only the stated FTC, whose use was checked. No witness or counterexample conclusion changed.

Additional radar scope clarification: the original general-worldline definition was accompanied by wording that appeared to exclude accelerated observers. The conditional assignment now explicitly includes the supplied worldline while disclaiming general existence, uniqueness and synchronization theorems for accelerated observers. Existing Rindler consumers supply their own null-trip existence proofs; no empirical scope is added.

Final checks after the last item edit/formatter:

- Command: `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-4.proof-contracts.json --strict`; exit 0. Output: proof-contract: 0 error(s), 0 warning(s), 25/25 item(s) checked 
- Command: `node tools/physics-support/rendercheck.mjs items/lem-sr-closed-one-form-primitive-on-simply-connected-open-sets.md items/def-sr-chart-tetrad-and-congruence-distinction.md items/def-flat-covariant-derivative-on-affine-minkowski-space.md items/def-sr-operational-radar-protocol.md items/def-sr-fermi-walker-transport.md items/def-sr-observer-congruence-and-kinematics.md items/def-sr-simultaneity-slice-and-rest-distance.md items/lem-sr-boost-time-length-and-velocity-formulas.md items/lem-sr-fermi-walker-transport-existence-and-uniqueness.md items/lem-sr-radar-midpoint-for-inertial-observer.md items/thm-sr-local-congruence-adapted-charts-and-frobenius.md items/cex-sr-simultaneity-is-observer-dependent.md items/ex-sr-length-contraction-of-a-moving-rod.md items/ex-sr-time-dilation-at-beta-three-fifths.md items/ex-sr-velocity-transformation-worked.md items/pthm-sr-radar-synchronization-of-inertial-observers.md items/thm-sr-fermi-walker-and-rigid-observer-examples.md items/thm-sr-smooth-local-herglotz-noether.md items/ex-sr-radar-round-trip-3-4-5.md items/pthm-sr-observer-time-length-and-velocity-measurements.md items/cex-sr-born-rigid-motion-need-not-be-killing.md items/ex-sr-bell-congruence-fails-born-rigidity.md items/ex-sr-fermi-walker-transport-along-hyperbolic-motion.md items/ex-sr-rigid-rotation-simultaneity-holonomy.md items/ex-sr-rindler-wedge-congruence-worked.md library/special-relativity/sr-observer-measurements.md library/special-relativity/sr-observer-measurements-examples.md --quiet`; exit 0. Output: OK — 27 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's YAML parser. 
- Command: `node tools/physics-support/proof-layout.mjs items/def-sr-chart-tetrad-and-congruence-distinction.md items/def-sr-observer-congruence-and-kinematics.md items/def-sr-simultaneity-slice-and-rest-distance.md items/def-sr-operational-radar-protocol.md items/def-sr-fermi-walker-transport.md items/lem-sr-radar-midpoint-for-inertial-observer.md items/thm-sr-local-congruence-adapted-charts-and-frobenius.md items/lem-sr-boost-time-length-and-velocity-formulas.md items/pthm-sr-observer-time-length-and-velocity-measurements.md items/ex-sr-velocity-transformation-worked.md items/lem-sr-closed-one-form-primitive-on-simply-connected-open-sets.md items/thm-sr-fermi-walker-and-rigid-observer-examples.md items/thm-sr-smooth-local-herglotz-noether.md items/ex-sr-rindler-wedge-congruence-worked.md items/ex-sr-length-contraction-of-a-moving-rod.md items/ex-sr-time-dilation-at-beta-three-fifths.md items/ex-sr-bell-congruence-fails-born-rigidity.md items/cex-sr-simultaneity-is-observer-dependent.md items/ex-sr-fermi-walker-transport-along-hyperbolic-motion.md items/cex-sr-born-rigid-motion-need-not-be-killing.md`; exit 0. Output: proof-layout: 20 items, 109 steps, 0 defects 

## Exact external item inventory

The first 87 interfaces were opened before assigned consumers. Three additional exact suppliers were opened during the primitive-proof repair; these are marked below. Imported carriers were read only. Published statements were used with their actual hypotheses; outside draft interfaces were read as authored, draft suppliers, without treating author decisions as acceptance.

- `cor-archimedean-reciprocal` — published, corollary, pinned import; Definition/Statement/Postulate interface opened.
- `cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains` — published, corollary, pinned import; Definition/Statement/Postulate interface opened.
- `cor-codimension-one-frobenius-criterion` — published, corollary, pinned import; Definition/Statement/Postulate interface opened.
- `cor-conservative-fields-are-path-independent-and-have-zero-circulation` — published, corollary, pinned import; Definition/Statement/Postulate interface opened.
- `cor-mean-value-theorem` — published, corollary, pinned import; Definition/Statement/Postulate interface opened.
- `cor-zero-derivative-implies-constant` — published, corollary, pinned import; Definition/Statement/Postulate interface opened.
- `def-based-loops-and-fundamental-group` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-causal-classification-of-lorentz-vectors` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-ck-and-multi-index-notation-in-several-variables` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-ck-tensor-field-on-minkowski-space` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-closed-and-exact-differential-forms` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-connection-one-form-in-a-local-frame` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-continuity-real` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-derivative` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-diffeomorphism-and-local-diffeomorphism-of-manifolds` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-euclidean-inner-product` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-exterior-derivative-by-the-invariant-vector-field-formula` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-homotopy-relative-and-path-homotopy` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-hyperbolic-functions` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-inertial-frame-and-inertial-chart` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-integral-curve-of-a-vector-field` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-interval` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-levi-civita-connection` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-lie-bracket-of-smooth-vector-fields` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-lie-derivative-of-a-differential-form` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-lie-derivative-of-a-tensor-field` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-lie-derivative-of-a-vector-field` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-lorentz-boost` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-lorentz-map-and-lorentz-group` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-lorentz-orthogonality-and-orthogonal-complement` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-metric-compactness` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-nullhomotopic-map-and-contractible-space` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-p-norms-on-rn` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-piecewise-c1-path-connected-conservative-and-path-independent` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-piecewise-c1-path-operations-and-oriented-reparametrizations` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-riemann-curvature-four-tensor` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-simply-connected` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-smooth-manifold` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-spatial-euclidean-structure-of-an-inertial-frame` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-sr-affine-minkowski-model` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-sr-four-velocity-and-four-acceleration` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-sr-proper-time` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-sr-regular-causal-curve-and-worldline` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-sr-si-units-and-coordinate-conventions` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-time-orientation-and-future-causal-sets` — draft, definition, local supplier; Definition/Statement/Postulate interface opened.
- `def-vector-field-and-section-along-a-smooth-curve` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-vector-valued-derivative-and-integral` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `def-wedge-product-of-differential-forms` — published, definition, pinned import; Definition/Statement/Postulate interface opened.
- `lem-affine-minkowski-charts-form-a-smooth-atlas` — draft, lemma, local supplier; Definition/Statement/Postulate interface opened.
- `lem-boost-is-proper-orthochronous-with-inverse` — draft, lemma, local supplier; Definition/Statement/Postulate interface opened.
- `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space` — published, lemma, pinned import; Definition/Statement/Postulate interface opened.
- `lem-compactness-is-intrinsic` — published, lemma, pinned import; Definition/Statement/Postulate interface opened (added exact supplier).
- `lem-future-oriented-inertial-frames-exist` — draft, lemma, local supplier; Definition/Statement/Postulate interface opened.
- `lem-inertial-chart-transitions-are-affine-lorentz` — draft, lemma, local supplier; Definition/Statement/Postulate interface opened.
- `lem-line-integrals-are-independent-of-the-piecewise-c1-partition` — published, lemma, pinned import; Definition/Statement/Postulate interface opened.
- `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval` — published, lemma, pinned import; Definition/Statement/Postulate interface opened.
- `lem-lorentz-form-has-orthonormal-basis` — draft, lemma, local supplier; Definition/Statement/Postulate interface opened.
- `lem-lorentz-map-preserves-metric-and-causal-structure` — draft, lemma, local supplier; Definition/Statement/Postulate interface opened.
- `lem-p-norms-are-norms-and-induce-the-published-metrics` — published, lemma, pinned import; Definition/Statement/Postulate interface opened (added exact supplier).
- `lem-sr-proper-time-reparametrization-invariance` — draft, lemma, local supplier; Definition/Statement/Postulate interface opened.
- `lem-tangent-space-of-affine-minkowski-space-is-v` — draft, lemma, local supplier; Definition/Statement/Postulate interface opened.
- `lem-timelike-cone-has-two-convex-components` — draft, lemma, local supplier; Definition/Statement/Postulate interface opened.
- `post-sr-ideal-clocks-and-light` — draft, postulate, local supplier; Definition/Statement/Postulate interface opened.
- `post-sr-inertial-covariance` — draft, postulate, local supplier; Definition/Statement/Postulate interface opened.
- `prop-coordinate-formula-for-the-lie-bracket` — published, proposition, pinned import; Definition/Statement/Postulate interface opened.
- `thm-algebra-of-derivatives` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-cartans-magic-formula` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-chain-rule` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-chain-rule-for-total-derivatives` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-continuous-image-of-a-compact-space-is-compact` — published, theorem, pinned import; Definition/Statement/Postulate interface opened (added exact supplier).
- `thm-continuous-partial-derivatives-imply-total-differentiability` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-curvature-two-form-structure-equation` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-flow-box-theorem` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-ftc-first-part` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-fundamental-theorem-of-riemannian-geometry` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-gradient-theorem-for-line-integrals` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-gram-schmidt-orthonormalisation` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-heine-borel-rn` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-heine-cantor-metric` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-hyperbolic-identities-and-derivatives` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-line-integrals-under-oriented-reparametrization` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-line-integrals-under-reversal-and-concatenation` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-local-coordinate-formula-for-the-exterior-derivative` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-poincare-lemma-for-differential-forms-on-star-shaped-domains` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-sr-proper-time-and-observer-decomposition` — draft, theorem, local supplier; Definition/Statement/Postulate interface opened.
- `thm-sr-tensor-and-current-transformation` — draft, theorem, local supplier; Definition/Statement/Postulate interface opened.
- `thm-the-exterior-derivative-squares-to-zero` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-unique-maximal-integral-curve-through-each-point` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.
- `thm-young-mixed-partial-theorem` — published, theorem, pinned import; Definition/Statement/Postulate interface opened.

## Source reading and uncertainty

Retrieved [Giulini, Algebraic and geometric structures of Special Relativity, arXiv:math-ph/0602018v2](https://arxiv.org/pdf/math-ph/0602018), the rigidity definition at printed p.41, and the relevant rotational and irrotational arguments at printed pp.44–49: Theorems 15 and 19, Lemmas 16–18, equations (142)–(149), (150)–(158), and rotating rest synchronization (160b)/(163). The source states the quotient curvature identity without proof; the assigned theorem supplies its own coframe/flatness derivation, which was checked. Its unrestricted orbit-quotient language was not used: the item works on a local flow box. The signature and normalization conversion were checked against the local formulas rather than copied from the source.

The [Carroll PDF](https://arxiv.org/pdf/gr-qc/9712019) was opened, but this session did not read all of its cited page ranges. Retrieval of the cited Crowell archive PDF through the web tool failed. No claim is made that all textbook locator ranges or entire books were independently rechecked. The elementary calculations and all assigned proofs were checked locally; the unavailable Crowell retrieval did not supply an otherwise missing proof.

## Consumer review of interface repairs

All assigned consumers were read after their assigned suppliers. Outside this batch, focused interface passages were opened for:
- `lem-sr-perfect-fluid-conservation-equations`.
- `ex-sr-bell-congruence-rest-separation-worked`.
- `post-sr-matter-models-and-evolution`.
- `texp-sr-bell-rockets-thread`.
- `pthm-sr-rindler-horizons-and-radar`.
- `lem-sr-connecting-field-stretching`.
- `def-sr-proper-acceleration`.
- `lem-sr-hyperbolic-motion-worldline`.
- `pthm-sr-guided-ring-sagnac-delay`.
- `ex-sr-twin-simultaneity-gap-at-the-turn`.
- `rem-sr-twin-acceleration-and-synchronization-caveats`.
- `ex-sr-rindler-radar-distance-worked`.
- `cex-sr-rindler-radar-distance-is-not-symmetric`.
- `pthm-sr-local-stress-energy-conservation`.

These were focused checks of the changed supplier interfaces, not full independent audits of every outside consumer proof. Constant-vector simultaneity, timelike boost differences, the tensor rigidity criterion, and the c² acceleration conversion are preserved. The Rindler radar theorem's steps 1.2, 2.3, 3.3, 3.4 and 4.1, and the full displayed verification/counterexample steps of its radar-distance example and asymmetric-distance counterexample were additionally opened. They construct distinct-reflector future-null round trips and use regular proper-time parametrizations and the same ideal apparatus conditions, so the radar clarification creates no new missing prerequisite in these uses. No outside carrier was edited.

## Contracts and final state

Updated the batch-local proof contracts for repaired items and assigned consumers of repaired supplier interfaces: exact quotes, actual fact uses, derivation text/inputs, null/end-point boundaries and reordered Herglotz references. The final strict check covers all 25 assigned contracts with zero errors or warnings. The shared aggregate contract document was not edited; batch integration remains the lead/engine's responsibility.

No judge records were present in the repaired carriers at handoff, and no judgment, audit, publication or proof-certification stamp was added. The final Herglotz numbering has leaves in step 2.3, labels/formulas in 3.1, connection entries in 3.2, and the irrotational converse in 4.1; the canonical reorder preserves the argument and all backward references. Proof/Remarks were explicitly separated before contract regeneration. The A-page prose now says that the expansion tensor vanishes for every index, matching the repaired definition.

All 21 changed items received reflow and precheck; the radar definition and Born-rigid counterexample were rerun after their final follow-up edits. Final rendercheck covered all 25 assigned items and both pages (27 files). The earlier layout invocation covered 20 items and 109 steps. The final invocation after completing the trigonometric/inverse-function prerequisites covered all 21 changed items and 115 steps with zero defects. These are mechanical checks, not mathematical acceptance gates.

The four unedited assigned items were also read: def-flat-covariant-derivative-on-affine-minkowski-space, lem-sr-fermi-walker-transport-existence-and-uniqueness, pthm-sr-radar-synchronization-of-inertial-observers, ex-sr-radar-round-trip-3-4-5. Their assigned claims and computations yielded no remaining substantive defect in this review.

## Uneditable defect and page verdicts

- sr-observer-measurements (A): reader repairs complete; the conditional measurement statements and local geometric proofs retain their scope. No remaining assigned-item proof gap was identified. This is a reader verdict, not certification.
- sr-observer-measurements-examples (B): needs correction in its read-only page prose, lines 35–37. The velocity paragraph lists “exact values $5/13$, $2c/5$”. Its cited item proves collinear velocity $5c/13$ and transverse component $2c/5$. The first number has lost its velocity scale while the second retains it. Write $5c/13$, or explicitly identify $5/13$ as the dimensionless ratio $w'_1/c$. Classified ill-formed, fatal as a defective stated computation; its correction is outside reader authority for B prose. The B page was left untouched.

No withdrawal is proposed. No uneditable published or other-batch supplier defect was established. The remaining blocker is the B-page prose correction. Coverage is the assigned pages/items, stated supplier interfaces, and focused consumer uses above; it is not a recursive proof audit of all imports or an exhaustive primary-source audit.

- `thm-sr-fermi-walker-and-rigid-observer-examples`: Final inventory check found undeclared sine/cosine derivative, Pythagorean, period and circle-parametrization prerequisites in the ring computation, and a smooth logarithmic inverse assertion without its proof tool. Added the opened exact published suppliers as F10 and mathematical dependency roles. Rindler inverse smoothness now follows from determinant ρ>0 and the already-opened choice-free inverse-function theorem; log is explicitly its positive-domain inverse-exponential definition. No geometric or physical conclusion changes.

- `ex-sr-rindler-wedge-congruence-worked`: Completed the same Rindler inverse-smoothness prerequisite in its worked verification using the explicit nonzero Jacobian and the exact inverse-function supplier; defined log on its positive domain. This closes the analytic tool gap without assuming smoothness from the mere inverse formula.

- `ex-sr-rigid-rotation-simultaneity-holonomy`: Added the exact trigonometric definitions, derivative/identity and angular-period suppliers to the explicit norm, cylinder-metric and one-circuit calculations. The numerical values and local/global integrability distinction are unchanged.

## Final prerequisite completion and validation

Six additional published interfaces were opened during the final elementary-function prerequisite check:

- `def-sine-and-cosine-by-power-series` — exact Definition/Statement opened before revised uses.
- `thm-sine-and-cosine-derivatives` — exact Definition/Statement opened before revised uses.
- `cor-trigonometric-parity-and-pythagorean-identity` — exact Definition/Statement opened before revised uses.
- `thm-sine-cosine-zero-sets-and-fundamental-period` — exact Definition/Statement opened before revised uses.
- `thm-sine-and-cosine-parametrize-the-unit-circle` — exact Definition/Statement opened before revised uses.
- `def-natural-logarithm` — exact Definition/Statement opened before revised uses.

The final direct external supplier inventory is therefore 96 (the preceding 90 plus these six). The already-opened choice-free inverse-function theorem was also declared in the Rindler theorem/example. The 25/25 strict contract check was rerun and passed with zero errors/warnings. The three affected trigonometric/Rindler carriers received fresh reflow and precheck, all exit 0. These additions close silently assumed analytic inputs; no standard-background waiver is used.

- Final command: `node tools/physics-support/rendercheck.mjs items/lem-sr-closed-one-form-primitive-on-simply-connected-open-sets.md items/def-sr-chart-tetrad-and-congruence-distinction.md items/def-flat-covariant-derivative-on-affine-minkowski-space.md items/def-sr-operational-radar-protocol.md items/def-sr-fermi-walker-transport.md items/def-sr-observer-congruence-and-kinematics.md items/def-sr-simultaneity-slice-and-rest-distance.md items/lem-sr-boost-time-length-and-velocity-formulas.md items/lem-sr-fermi-walker-transport-existence-and-uniqueness.md items/lem-sr-radar-midpoint-for-inertial-observer.md items/thm-sr-local-congruence-adapted-charts-and-frobenius.md items/cex-sr-simultaneity-is-observer-dependent.md items/ex-sr-length-contraction-of-a-moving-rod.md items/ex-sr-time-dilation-at-beta-three-fifths.md items/ex-sr-velocity-transformation-worked.md items/pthm-sr-radar-synchronization-of-inertial-observers.md items/thm-sr-fermi-walker-and-rigid-observer-examples.md items/thm-sr-smooth-local-herglotz-noether.md items/ex-sr-radar-round-trip-3-4-5.md items/pthm-sr-observer-time-length-and-velocity-measurements.md items/cex-sr-born-rigid-motion-need-not-be-killing.md items/ex-sr-bell-congruence-fails-born-rigidity.md items/ex-sr-fermi-walker-transport-along-hyperbolic-motion.md items/ex-sr-rigid-rotation-simultaneity-holonomy.md items/ex-sr-rindler-wedge-congruence-worked.md library/special-relativity/sr-observer-measurements.md library/special-relativity/sr-observer-measurements-examples.md --quiet`; exit 0. OK — 27 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's YAML parser. 
- Final command: `node tools/physics-support/proof-layout.mjs items/def-sr-chart-tetrad-and-congruence-distinction.md items/def-sr-observer-congruence-and-kinematics.md items/def-sr-simultaneity-slice-and-rest-distance.md items/def-sr-operational-radar-protocol.md items/def-sr-fermi-walker-transport.md items/lem-sr-radar-midpoint-for-inertial-observer.md items/thm-sr-local-congruence-adapted-charts-and-frobenius.md items/lem-sr-boost-time-length-and-velocity-formulas.md items/pthm-sr-observer-time-length-and-velocity-measurements.md items/ex-sr-velocity-transformation-worked.md items/lem-sr-closed-one-form-primitive-on-simply-connected-open-sets.md items/thm-sr-fermi-walker-and-rigid-observer-examples.md items/thm-sr-smooth-local-herglotz-noether.md items/ex-sr-rindler-wedge-congruence-worked.md items/ex-sr-length-contraction-of-a-moving-rod.md items/ex-sr-time-dilation-at-beta-three-fifths.md items/ex-sr-bell-congruence-fails-born-rigidity.md items/cex-sr-simultaneity-is-observer-dependent.md items/ex-sr-fermi-walker-transport-along-hyperbolic-motion.md items/cex-sr-born-rigid-motion-need-not-be-killing.md items/ex-sr-rigid-rotation-simultaneity-holonomy.md`; exit 0. proof-layout: 21 items, 115 steps, 0 defects 
