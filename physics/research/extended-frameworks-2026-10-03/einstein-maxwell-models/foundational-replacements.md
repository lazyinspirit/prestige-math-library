# Typed mathematical replacements for inherited remark dependencies

2026-10-16. These are explicit proposed mathematical suppliers for the nine inherited root remark targets listed in the audit. The existing root/physics supplier bytes are read-only. **Their actual dependency closure remains OPEN** until the owner repairs the listed outside edges or authors exact replacement suppliers. These proposed definitions/proofs are available locally, but adding them to an EMG inventory does not rewrite or certify the outside original graph. No remark or open problem may serve as a logical premise, and a domain-only scan is not closure. The accompanying audit JSON lists actual inherited consumers and shortest paths. This is an established-content authoring/metadata obligation, not an unresolved mathematical problem. Exact current mathematical suppliers now appear in each local inventory record.

<a id="supremum-domain"></a>
## Definition: finite-real supremum and infimum domain

Work in the real complete ordered field of `def-real-numbers` and `def-complete-ordered-field`. For S⊂R, sup S denotes a least upper bound only when S is nonempty and bounded above; completeness gives existence and antisymmetry gives uniqueness. For infimum use `def-infimum` and `thm-infimum-property`: if S is nonempty and bounded below, −S is nonempty and bounded above, and negating sup(−S) gives its greatest lower bound by order reversal. Do not evaluate sup∅ in R. When an application defines a nonnegative separation function with the **stipulated value zero for an empty path family**, that is a separate total definition, not an assertion sup∅=0. Use `def-extended-reals` when infinite values are required; no extended-real field algebra is presumed. These exact current suppliers replace `rem-sup-conventions` at the local use.

<a id="metric-definition"></a>
## Definition: real metric and pseudometric convention

A real metric on X is a map d:X×X→R with d(x,y)=0 iff x=y, symmetry, and the triangle inequality, as in `def-metric-space`. A pseudometric replaces the iff clause by d(x,x)=0 and retains symmetry and the triangle inequality. Infinite values are outside both definitions. The ordinary metric topology has basis {y:d(x,y)<r}, r>0, after nonnegativity is proved below. No semimetric/quasimetric nomenclature is consumed. The local replacement uses `def-real-numbers`, `def-complete-ordered-field`, `def-ordered-field`, and `def-metric-space`, not the extended-metric discussion in `rem-metric-axiom-conventions`.

<a id="metric-nonnegativity"></a>
## Lemma: nonnegativity from metric axioms

For either of the preceding structures, 0=d(x,x)≤d(x,y)+d(y,x)=2d(x,y). Dividing the ordered-field inequality by the positive number 2 proves d(x,y)≥0. Thus d takes values in [0,∞), without having assumed a fourth axiom. Empty X makes the quantified assertion vacuous. This is the full proof route and also supplies the nonnegativity used when balls, norm metrics or diameters are defined.

<a id="power-domain"></a>
## Definition: explicit power regimes

For a>0, integer m and positive integer n, use `def-rational-power`: a^(m/n) is the mth integer power of the unique positive nth root, with reciprocals for negative m. `thm-nth-roots-exist` gives the root; `lem-rational-power-well-defined` proves independence of the fraction representative, and `lem-rational-power-laws` supplies the laws. For real exponents use `def-real-power`, a^x=exp(x log a), and `thm-real-power-laws`; do not infer these laws from rational roots. The positive square-root function is smooth by the local lemma below and the published smooth inverse-function theorem. These exact suppliers replace the relevant clauses of `rem-real-exponents-deferred`.

<a id="heine-choice"></a>
## Lemma: sequence criterion with its explicit choice assumption

Let A⊂R, c a limit point of A, f:A→R and L∈R, with ACω. The epsilon-delta limit of `def-function-limit` is equivalent to convergence of `def-real-limit` for every sequence `def-sequence` with x_n∈A\{c} and x_n→c. The forward direction fixes ε, takes δ from the function limit, and uses sequence convergence to put every sufficiently late term within δ; it uses no choice. If the epsilon-delta condition fails, there is ε₀>0 for which each X_n={x∈A:0<|x−c|<1/(n+1), |f(x)−L|≥ε₀} is nonempty. ACω chooses x_n∈X_n. The Archimedean reciprocal property makes x_n→c, while f(x_n) fails to converge to L, a contradiction. This proves the reverse direction and identifies the sole choice use. The local inventory records the exact real-limit, sequence, limit-point, order, Archimedean, reciprocal and absolute-value suppliers; the proof does not consume `rem-heine-criterion-choice-cost`.

<a id="boundaryless-domain"></a>
## Definition: boundaryless geometric completeness domain

For two-sided geodesic-flow and Hopf–Rinow statements, use `def-smooth-manifold` with no manifold boundary and `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`. Metric completeness means every Cauchy sequence in the induced `def-metric-space` converges; two-sided geodesic completeness means every maximal affine geodesic is defined on all R. These are distinct definitions; their equivalence is the actual Hopf–Rinow theorem under its own hypotheses, not an editorial convention. Boundaryful variants require a separate theorem. The interval [0,1] with Euclidean metric is metrically complete, but the affine geodesic from 1/2 with velocity 1 remains in it only for −1/2≤t≤1/2, so it has no two-sided extension inside that interval. This verifies why the boundaryless hypothesis matters. These exact type definitions replace `rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow`.

<a id="positive-root-smoothness"></a>
## Lemma: the positive square-root branch is smooth

Let s:(0,∞)→(0,∞) send x to its unique positive square root, whose existence and uniqueness follow from `thm-nth-roots-exist`. The polynomial P:(0,∞)→(0,∞), P(t)=t², is smooth and P′(t)=2t by the product rule. For each t>0, DP(t) is invertible. The published `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space` gives a smooth local inverse near x=t². After shrinking, that inverse is positive and therefore equals s by uniqueness of the positive root. These neighborhoods cover (0,∞), so s is smooth; differentiating P(s(x))=x gives s′(x)=1/(2s(x)).

<a id="scalar-normed-spaces"></a>
## Definition: real or complex normed spaces

Fix K=R or C using `def-real-numbers` and `def-complex-numbers-and-arithmetic`; use `def-complex-conjugate-real-imaginary-part-and-modulus` for |λ| when λ is complex. A K-vector space has the operations of `def-vector-space`. A real norm has the axioms of `def-norm-and-normed-space`; the complex extension is exactly `def-complex-norm-and-complex-normed-space`. The induced real metric is d(v,w)=||v−w||, and Banach means complete for that metric. A complex inner product is a separate structure. The full metric deduction is the local `lem-emg-norm-induces-metric` below. These exact typed suppliers replace `rem-real-and-complex-normed-space-convention`.

<a id="norm-induced-metric"></a>
## Lemma: a norm induces a metric

Let V be a normed space over R or C and set d(v,w)=||v−w||. Nonnegativity and d(v,w)=0 iff v=w are norm axioms. Since |−1|=1, absolute homogeneity gives d(v,w)=||−(w−v)||=d(w,v). Finally v−z=(v−w)+(w−z), so the norm triangle inequality gives d(v,z)≤d(v,w)+d(w,z). Thus d is a metric. This deduction uses no completeness, inner product, or choice assumption.

<a id="extended-product"></a>
## Definition: extended pointwise product with zero at infinite factors

Use the ordered set R∪{−∞,+∞} from `def-extended-reals`. For a,b in it, define a⋆b=0 if a=0 or b=0; use ordinary multiplication if both are finite; in all other cases use the product of the signs of the nonzero factors and infinite magnitude. Thus (+∞)⋆(−2)=−∞, (−∞)⋆(−∞)=+∞, and 0⋆(±∞)=0 by convention. For functions f,g:X→R∪{±∞}, set (f⋆g)(x)=f(x)⋆g(x). This is a specified pointwise operation, not a limit rule or field operation. Any measurability theorem must partition the finite, zero and positive/negative infinite factor sets and prove measurability on each part. This replaces the convention in `rem-zero-times-infinity-convention-for-pointwise-products`.

<a id="lp-representatives"></a>
## Definition: quotient Lp and explicit representatives

Given `def-measure-space` (X,Σ,μ), use real-valued measurable functions from `def-measurable-function-between-measurable-spaces` and the exact quotient definition `def-l-p-space-as-a-quotient-by-null-functions`. For 1≤p<∞, f∼g iff μ({x:f(x)≠g(x)})=0 on functions with ∫|f|^p dμ<∞; for p=∞ use the essentially bounded real-valued class. The element is [f], and a representative is a specific measurable f in that class. A pointwise statement f(x)=0 concerns that representative; an almost-everywhere property is a property of the class. The published `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space` supplies the exact well-defined quotient norm, including null-set invariance. Complex Sobolev states in the coupled PDE branch are represented by their real and imaginary coordinates; no complex-valued Lp quotient is asserted here. This replaces the representative convention in `rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative`.

<a id="category-size"></a>
## Definition: set-sized objects and definable-class schemas

Work in the first-order set-theory language of `def-language-of-set-theory` with the stated power-set and separation axioms. A “definable class” abbreviates a formula with set parameters; it is not an additional set or a domain for unrestricted set quantification. A small category has a set of objects and a set of arrows, source/target maps, identities and associative composition on composable pairs. It is locally small when each hom-collection is a set; a definable large category is expressed by a schema of formulas. In CP08, a development is encoded by an open D⊂Σ×R, graphs of the metric and two-form as subsets of fixed tensor-bundle total spaces over Σ×R, a time orientation and the fixed initial embedding. Each coordinate is a subset of a fixed product/power set; separation selects the tuples satisfying smoothness, Lorentzian, field-equation and initial-data predicates. Thus the family of codes is a set; no proper-class representative choice is made. The exact set suppliers are `def-ordered-pair`, `def-cartesian-product`, `def-function`, `def-axiom-of-power-set`, and `def-axiom-schema-of-separation`. No Grothendieck universe or category of all large categories is presumed.

## Production placement amendment — 2026-10-16 owner round 2

Root authorized the seven typed prerequisite IDs at #supremum-domain through #category-size, together with `lem-emg-positive-square-root-smoothness`, on the earliest owned draft A page `emg-mg02`, before its existing four items. The published `emg-mg01` page is unchanged. Exact carrier IDs and all approved claims are retained; no later pair's distinct replacement inventory is duplicated. The local power definition retains its square-root well-definedness obligation. All eight carriers now contain local definitions/proofs; this is authoring, not independent acceptance. Root owns numeric levels, current hash bindings, readiness and gates.

The actual inherited closure still includes `def-emg-local-potentials-and-circle-data -> def-emg-lorentzian-forms -> thm-gr-curvature-tensoriality-and-coordinate-formula -> thm-gr-point-normal-and-exponential-coordinate-charts -> def-geodesic-of-an-affine-connection -> rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow`. This imported invalid remark premise is outside source-edit authority and remains an explicit owner obligation. Local typed replacements do not rewrite that edge. The new boundaryless definition avoids assuming the imported geodesic helper by defining its equation locally using exact covariant-derivative and Levi-Civita coordinate suppliers. No original or imported snapshot was changed.

### Superseding disposition of the kind-only remark flag

The round-2 annotation above incorrectly classified the imported boundaryless-convention remark as an invalid premise. Root reviewed the exact audited carrier and its substantive Verification of the interval counterexample; this is a valid mathematical supplier, not a recorded unproved result. Recorded imports with omitted domain normalize to mathematics under `physics-content.mjs`. The separate disposition `research/physics-remaining-80-2026-10-17-owner-emg-typed-remark-false-positive-disposition.json` withdraws this blocker while retaining the original metadata observation. No original/import repair or whole-cone audit is implied. The actual eight local typed authoring obligations and their draft review duties are unchanged.
