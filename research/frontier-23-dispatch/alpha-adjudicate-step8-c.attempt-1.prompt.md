# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-23-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-23
role: alpha-adjudicate
label: step8-c
covers: 6, 7

# Step 8 — group **c**, run `frontier-23`

You are the group Alpha for batches **6**, **7**: 3 A/B pair(s), 6 page(s), 111 item(s), 77 open rejection(s) over 77 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-23-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-23-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `product-measures-and-the-fubini-tonelli-theorems` | A | measure-theory | 288.021 | `countability-axioms-and-cardinal-functions`, `modes-of-convergence-egorov-and-lusin-examples`, `the-real-gamma-and-beta-functions` |
| 6 | `product-measures-and-the-fubini-tonelli-theorems-examples` | B | measure-theory | 288.022 | `product-measures-and-the-fubini-tonelli-theorems`, `further-trigonometric-identities-and-inverses` |
| 7 | `conformal-mapping-branches-and-the-schwarz-lemma` | A | complex-analysis | 325 | `the-riemann-sphere-and-mobius-transformations`, `the-winding-number-and-the-global-cauchy-theorem`, `the-logarithm-and-general-powers`, `roots-and-rational-powers` |
| 7 | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | B | complex-analysis | 326 | `conformal-mapping-branches-and-the-schwarz-lemma` |
| 7 | `infinite-products-and-weierstrass-factorisation` | A | complex-analysis | 337 | `normal-families-and-montels-theorem`, `the-identity-theorem-and-the-open-mapping-theorem`, `absolute-convergence-and-rearrangement` |
| 7 | `infinite-products-and-weierstrass-factorisation-examples` | B | complex-analysis | 338 | `infinite-products-and-weierstrass-factorisation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `product-measures-and-the-fubini-tonelli-theorems` — Product Measures and the Fubini Tonelli Theorems (39 item(s))

- `def-measurable-rectangle` · definition — Measurable rectangles in a product of measurable spaces
- `def-product-sigma-algebra-and-finite-product-sigma-algebras` · definition — The product $\sigma$-algebra and its finite iterates
- `lem-finite-rectangle-unions-form-a-generating-algebra` · lemma — Finite disjoint unions of measurable rectangles form an algebra generating the product $\sigma$-algebra
- `rem-caratheodory-also-constructs-the-product-measure` · remark — The product measure can also be constructed from the rectangle algebra by Caratheodory extension
- `def-sections-of-sets-and-functions-on-products` · definition — Sections E_x, E^y, f_x, and f^y on a product
- `thm-sections-of-product-measurable-sets-are-measurable` · theorem — Every section of a product-measurable set is measurable
- `thm-sections-of-product-measurable-functions-are-measurable` · theorem — Every section of a product-measurable function is measurable
- `fs-measurable-sections-imply-product-measurability` · false-statement — FALSE: if every horizontal and vertical section is measurable, then the set is product-measurable
- `prop-sigma-finite-section-measure-functions-are-measurable` · proposition — For $\sigma$-finite measures, the section-measure functions are measurable
- `thm-iterated-section-measures-agree-on-product-measurable-sets` · theorem — For $\sigma$-finite measures, the two section-measure integrals of a measurable set agree
- `def-product-measure-on-sigma-finite-spaces` · definition — The product measure of two $\sigma$-finite measure spaces
- `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` · theorem — For $\sigma$-finite factors, the product measure exists, has the rectangle formula, is $\sigma$-finite, and is unique
- `fs-product-measure-is-unique-without-sigma-finiteness` · false-statement — FALSE: the rectangle formula determines a unique product measure without any $\sigma$-finiteness hypothesis
- `thm-tonelli-theorem-for-sigma-finite-product-spaces` · theorem — Tonelli's theorem for nonnegative measurable functions on a $\sigma$-finite product
- `fs-tonelli-holds-without-sigma-finiteness` · false-statement — FALSE: Tonelli's theorem still holds without any $\sigma$-finiteness hypothesis
- `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` · theorem — Fubini's theorem for $L^1$ functions on a $\sigma$-finite product
- `rem-fubini-should-be-applied-after-tonelli-on-absolute-values` · remark — To use Fubini safely, first use Tonelli on $|f|$
- `def-completed-product-measure` · definition — The completed product measure
- `thm-tonelli-and-fubini-for-completed-product-measures` · theorem — Tonelli and Fubini for the completed product, with only almost-everywhere section measurability
- `fs-completed-product-sections-are-measurable-for-every-parameter` · false-statement — FALSE: every section of a completed-product measurable function is measurable
- `thm-borel-products-of-euclidean-spaces-are-euclidean-borel` · theorem — The Borel product of $\mathbb R^m$ and $\mathbb R^n$ is the Borel $\sigma$-algebra of $\mathbb R^{m+n}$
- `rem-borel-product-equality-needs-second-countability` · remark — The equality B(X) tensor B(Y) = B(X x Y) needs second countability
- `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets` · theorem — On Borel subsets of $\mathbb R^{m+n}$, the product $\lambda_m \times \lambda_n$ agrees with $\lambda_{m+n}$
- `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures` · theorem — The Euclidean Lebesgue measure is the completion of the product of the factor Lebesgue measures
- `fs-product-of-complete-measure-spaces-is-complete` · false-statement — FALSE: the product of two complete measure spaces is complete
- `fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra` · false-statement — FALSE: $\mathcal L(\mathbb R^m) \otimes \mathcal L(\mathbb R^n)$ already equals $\mathcal L(\mathbb R^{m+n})$
- `thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral` · theorem — The region under a nonnegative measurable function is product-measurable and has measure equal to the integral
- `cor-graph-of-a-measurable-function-is-lebesgue-null` · corollary — The graph of a measurable function $\mathbb R^n \to \mathbb R$ is Lebesgue null
- `def-distribution-function-of-absolute-value` · definition — The distribution function of absolute value
- `thm-layer-cake-formula-for-l-p-powers` · theorem — For $0 < p < \infty$, the layer-cake formula computes $\int |f|^p$ from the distribution function
- `def-polar-surface-measure-on-the-unit-sphere` · definition — The Borel measure on $S^{n-1}$ induced by polar decomposition
- `thm-polar-coordinates-formula-for-lebesgue-measure` · theorem — Polar coordinates decompose Lebesgue measure into $r^{n-1} \, dr \, d\sigma$
- `rem-polar-coordinates-recover-the-published-ball-volume-and-gaussian-formulas` · remark — The polar formula recovers the published $n$-ball volumes and Gaussian constants
- `lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets` · lemma — A $C^1$ diffeomorphism maps Lebesgue null sets to Lebesgue null sets
- `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets` · lemma — A $C^1$ diffeomorphism maps Lebesgue measurable sets to Lebesgue measurable sets
- `lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands` · lemma — The published Riemann change-of-variables theorem already gives the Lebesgue formula for continuous compactly supported integrands
- `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` · theorem — A $C^1$ diffeomorphism satisfies the change-of-variables formula for nonnegative Lebesgue measurable functions
- `cor-c-one-change-of-variables-for-l-one-functions` · corollary — A $C^1$ diffeomorphism satisfies the change-of-variables formula for $L^1$ functions
- `rem-finite-product-measures-are-the-base-case-for-countable-product-constructions` · remark — Finite product measures are the base case for later countable-product constructions

### `product-measures-and-the-fubini-tonelli-theorems-examples` — Product Measures and the Fubini Tonelli Theorems — Examples (11 item(s))

- `ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates` · example — Tonelli and the plane polar formula give $\int_{\mathbb R} e^{-x^2} \, dx = \sqrt{\pi}$
- `ex-zeta-two-from-tonelli-and-the-geometric-series` · example — Tonelli and the geometric series compute $\int_0^1 \! \int_0^1 \frac{1}{1-xy} \, dx \, dy = \pi^2/6$
- `ex-region-under-x-squared-has-measure-one-third` · example — The region under $x \mapsto x^2$ on $[0,1]$ has measure $1/3$
- `ex-cavalieri-computes-the-area-of-the-unit-disc` · example — Cavalieri computes the area of the unit disc from its sections
- `cex-measurable-sections-do-not-imply-product-measurability` · counterexample — A set can have measurable horizontal and vertical sections and still fail to be product-measurable
- `cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal` · counterexample — The diagonal under Lebesgue times counting measure shows that Tonelli needs $\sigma$-finiteness
- `cex-fubini-fails-without-l-one-integrability` · counterexample — The function $(x^2-y^2)/(x^2+y^2)^2$ shows that Fubini's integrability hypothesis is not decorative
- `cex-equal-iterated-integrals-do-not-imply-l-one-integrability` · counterexample — Equal iterated integrals still do not imply product integrability
- `cex-product-measure-need-not-be-unique-without-sigma-finiteness` · counterexample — Without $\sigma$-finiteness, the rectangle formula need not determine a unique product measure
- `cex-product-of-complete-measures-need-not-be-complete` · counterexample — A nonmeasurable subset of a null line shows that the product of complete measures need not be complete
- `cex-completed-product-sections-need-not-be-pointwise-measurable` · counterexample — A completed-product measurable set can have a nonmeasurable exceptional section

### `conformal-mapping-branches-and-the-schwarz-lemma` — Conformal Mapping, Branches, and the Schwarz Lemma (23 item(s))

- `rem-holomorphic-logarithm-and-principal-power-dictionary` · remark — Dictionary for holomorphic logarithm branches, the principal logarithm, and principal powers
- `def-complex-power-from-holomorphic-logarithm-branch` · definition — Complex powers defined from a holomorphic logarithm branch
- `thm-branch-power-agrees-with-integer-powers` · theorem — Branch-defined complex powers agree with integer powers
- `thm-principal-branch-power-agrees-with-positive-real-power` · theorem — On positive reals, the principal branch power agrees with the published real power
- `thm-branch-discrepancies-for-logarithm-and-complex-powers` · theorem — Different branches shift logarithms by $2\pi i k$ and complex powers by roots of unity
- `def-conformal-equivalence-and-automorphism-group` · definition — Conformal equivalence and the automorphism group of a domain
- `def-unit-disc-upper-half-plane-and-blaschke-factor` · definition — The unit disc, the upper half-plane, and Blaschke factors
- `thm-blaschke-factor-is-a-disc-automorphism` · theorem — Blaschke factors are automorphisms of the disc
- `thm-unit-disc-schwarz-lemma-with-rigidity` · theorem — Schwarz lemma with the equality cases
- `thm-schwarz-pick-lemma-on-the-unit-disc` · theorem — Schwarz-Pick lemma on the unit disc
- `thm-disc-automorphisms-are-rotated-blaschke-factors` · theorem — Every automorphism of the disc is a rotated Blaschke factor
- `thm-upper-half-plane-automorphisms-are-real-mobius-maps` · theorem — Automorphisms of the upper half-plane are real Mobius maps
- `def-poincare-metric-and-distance-on-the-disc` · definition — The Poincare metric and distance on the unit disc
- `thm-poincare-distance-formula-and-disc-automorphism-invariance` · theorem — The Poincare distance has the formula $2\operatorname{artanh}|\varphi_z(w)|$ and is disc-automorphism invariant
- `rem-biholomorphisms-are-conformal-with-holomorphic-inverse` · remark — Biholomorphisms are conformal and have holomorphic inverse
- `thm-conformal-equivalence-is-an-equivalence-relation` · theorem — Conformal equivalence is an equivalence relation
- `thm-sector-power-map-is-biholomorphic-on-narrow-sectors` · theorem — Power maps are biholomorphisms on sectors of width less than $2\pi/n$
- `thm-slit-plane-root-branch-biholomorphism-to-a-sector` · theorem — A slit-plane root branch biholomorphically parametrizes a sector
- `thm-principal-logarithm-biholomorphism-to-the-principal-strip` · theorem — The principal logarithm is a biholomorphism from the slit plane to the principal strip
- `thm-principal-exponential-biholomorphism-from-principal-strip` · theorem — The exponential is the inverse biholomorphism from the principal strip to the slit plane
- `thm-joukowski-biholomorphism-outside-unit-disc` · theorem — The Joukowski map is a biholomorphism from the exterior disc onto $\mathbb{C}\setminus[-1,1]$
- `thm-sine-biholomorphism-from-upper-half-strip` · theorem — The sine map biholomorphically sends an upper half-strip onto the upper half-plane
- `thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic` · theorem — The sphere, the plane, and the disc are pairwise non-biholomorphic

### `conformal-mapping-branches-and-the-schwarz-lemma-examples` — Conformal Mapping, Branches, and the Schwarz Lemma — Examples (10 item(s))

- `ex-principal-logarithm-breaks-additivity-at-minus-one` · example — The principal logarithm fails to turn multiplication into addition at $(-1,-1)$
- `ex-principal-square-root-breaks-multiplicativity-at-minus-one` · example — The principal square root fails to respect products at $(-1,-1)$
- `ex-strip-to-disc-biholomorphism-by-exponential-and-cayley` · example — A horizontal strip is mapped biholomorphically to the disc by an exponential and a Cayley transform
- `ex-disc-automorphism-swapping-two-points` · example — A disc automorphism carrying one prescribed point to another
- `ex-power-map-sends-a-sector-to-a-half-plane` · example — A power map sends a sector to a half-plane
- `ex-joukowski-sends-circles-to-ellipses` · example — The Joukowski map sends circles centered at the origin to ellipses
- `ex-sine-sends-a-half-strip-to-the-upper-half-plane` · example — Boundary tracking for the sine biholomorphism of the upper half-strip
- `cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal` · counterexample — Complex conjugation preserves angle magnitudes but is not conformal
- `fs-conformal-maps-preserve-euclidean-lengths` · false-statement — FALSE: conformal maps preserve Euclidean lengths
- `fs-schwarz-lemma-holds-without-a-fixed-point-at-zero` · false-statement — FALSE: Schwarz's lemma remains true without the hypothesis $f(0)=0$

### `infinite-products-and-weierstrass-factorisation` — Infinite Products and the Weierstrass Factorisation Theorem (20 item(s))

- `rem-complex-infinite-product-dictionary` · remark — Dictionary for using the published infinite-product definition over $\mathbb{C}$
- `thm-absolute-convergence-criterion-for-complex-infinite-products` · theorem — Absolute convergence criterion for complex infinite products
- `def-normal-convergence-of-holomorphic-products` · definition — Normal convergence of holomorphic products
- `thm-normal-convergence-of-holomorphic-products` · theorem — Normally convergent products define holomorphic functions with the expected zeros
- `cor-logarithmic-derivative-of-a-normally-convergent-product` · corollary — The logarithmic derivative of a normally convergent product
- `def-weierstrass-elementary-factor` · definition — Weierstrass elementary factors
- `lem-unit-disc-estimate-for-weierstrass-elementary-factors` · lemma — The unit-disc estimate for Weierstrass elementary factors
- `def-weierstrass-products-canonical-products-and-genus` · definition — Weierstrass products, canonical products, and genus
- `def-exponent-of-convergence-of-a-zero-sequence` · definition — The exponent of convergence of a zero sequence
- `thm-canonical-product-convergence-from-exponent-sum` · theorem — A canonical product converges when the $(p+1)$-power reciprocal sum converges
- `thm-weierstrass-product-theorem-on-the-complex-plane` · theorem — Weierstrass product theorem on the complex plane
- `thm-weierstrass-factorization-for-entire-functions` · theorem — Weierstrass factorization for entire functions
- `cor-meromorphic-functions-on-the-plane-are-entire-quotients` · corollary — Every meromorphic function on $\mathbb{C}$ is a quotient of entire functions
- `thm-sine-has-its-weierstrass-product` · theorem — The Weierstrass product for sine
- `thm-jensen-formula-on-a-disc` · theorem — Jensen's formula on a disc
- `cor-jensen-zero-counting-bound` · corollary — Jensen's formula bounds the number of zeros in a smaller disc
- `def-order-of-an-entire-function` · definition — The order of an entire function
- `thm-zero-exponent-is-bounded-by-entire-order` · theorem — The zero-sequence exponent is at most the entire order
- `thm-hadamard-factorization-for-finite-order-entire-functions` · theorem — Hadamard factorization for finite-order entire functions
- `cor-nonintegral-entire-order-bounds-canonical-genus` · corollary — A nonintegral order bounds the canonical genus by its floor

### `infinite-products-and-weierstrass-factorisation-examples` — Infinite Products and the Weierstrass Factorisation Theorem — Examples (8 item(s))

- `ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free` · example — The product $\prod_{n \ge 1}(1 + z/2^n)$ defines an entire zero-free function
- `ex-sine-product-recovers-the-basel-sum` · example — The sine product recovers the Basel sum
- `ex-jensen-formula-for-a-polynomial` · example — Jensen's formula for a polynomial
- `ex-canonical-product-for-zeros-at-the-squares` · example — A genus-zero canonical product for zeros at the squares
- `cex-conditional-linear-sum-does-not-force-product-convergence` · counterexample — A conditionally convergent linear term does not force a nonzero product limit
- `fs-weierstrass-factorization-is-unique` · false-statement — FALSE: Weierstrass factorization is unique
- `fs-every-zero-sequence-admits-a-genus-zero-canonical-product` · false-statement — FALSE: every discrete zero sequence admits a genus-zero canonical product
- `fs-entire-order-equals-canonical-genus` · false-statement — FALSE: the order of an entire function always equals the canonical genus in its factorization

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-completed-product-sections-need-not-be-pointwise-measurable` | `product-measures-and-the-fubini-tonelli-theorems-examples` | gpt-5.6-terra | `e85867d44da3ed6f2408e49014e190ae88e18bd2918f5ca18273746681041c83` |
| `cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal` | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | gpt-5.6-terra | `e99736ee879fafafcedb0a880ac13924d443142d247875adcb853aa6523f49df` |
| `cex-conditional-linear-sum-does-not-force-product-convergence` | `infinite-products-and-weierstrass-factorisation-examples` | gpt-5.6-terra | `89524bbf3dc0a4cfe4a073561162beb44de9661780a86dde67e3e49bd621d27d` |
| `cex-fubini-fails-without-l-one-integrability` | `product-measures-and-the-fubini-tonelli-theorems-examples` | gpt-5.6-terra | `190faefdd4b0ea933865fa22ca77f814a0559e2b044cc5ce8021c077a2a2e766` |
| `cex-product-of-complete-measures-need-not-be-complete` | `product-measures-and-the-fubini-tonelli-theorems-examples` | gpt-5.6-terra | `93bf5599b34b78e20024e0e5ae4b6e23a42c758bca23da18ff1a2472e1f7e424` |
| `cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal` | `product-measures-and-the-fubini-tonelli-theorems-examples` | gpt-5.6-terra | `497791bf86695eb191cf8fbaa0efe905a05306748101c4d28a0294aa542a542e` |
| `cor-c-one-change-of-variables-for-l-one-functions` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `0c739620a6a55066bc8c7e3d66d4a60ca3559f51b573ea6efe0704e8902f6b0c` |
| `cor-graph-of-a-measurable-function-is-lebesgue-null` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `8c57fc548b04a35e465b385d4b4b2e57e70ea54a4fdb7a39739ffed0ce10eeac` |
| `cor-jensen-zero-counting-bound` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `f603c920322720fa3a3fed9802ea6e63444d08175bf26466795875e82e95aa29` |
| `cor-logarithmic-derivative-of-a-normally-convergent-product` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `73f1b7b5748ee925beee76545856288af83d88e75a958a067541f4d3058da54c` |
| `cor-meromorphic-functions-on-the-plane-are-entire-quotients` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `cc629270ddaef23f86eea3d9f3cfef5e15fcf68de46e2f32af5fa4e9c7eef449` |
| `def-completed-product-measure` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `6ac3305d416b435be8dbba2f221a775274ca3f9b216afa62ee504d5debbaae38` |
| `def-complex-power-from-holomorphic-logarithm-branch` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `996ac6d113f2cb7157736a59c1636b8b6a261470ae25839928ea9e952af183e9` |
| `def-conformal-equivalence-and-automorphism-group` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `accbed25b8ada3ca17489e403d4fa5a8997ad748ced2e7d73d5e450a01a74735` |
| `def-poincare-metric-and-distance-on-the-disc` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `9bbd45fe31494ad305061e1b5beb4f427987399c7e4cd606ae26d316be886c6d` |
| `def-polar-surface-measure-on-the-unit-sphere` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `c212224e229936c85d80bb213f7bc23dc11a9571e0e7978677a85f1d71b377ac` |
| `def-product-sigma-algebra-and-finite-product-sigma-algebras` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `f415ccb6423e606c94108671758ef8ecb13fd123eab6388a0c455bc523bfbf85` |
| `def-unit-disc-upper-half-plane-and-blaschke-factor` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `414c2b0891750917b09c2254b7f49d7ce3e12751f9710c102d201feaf91f7e26` |
| `def-weierstrass-products-canonical-products-and-genus` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `66b103a030da3a8916e769e468cbd5f24873bac2e70a55719b606f196aefcf79` |
| `ex-canonical-product-for-zeros-at-the-squares` | `infinite-products-and-weierstrass-factorisation-examples` | gpt-5.6-terra | `d455d6eb3def103e565bbd1a8099fa240b27137ed9263d58d8f660cc3cef6bb1` |
| `ex-cavalieri-computes-the-area-of-the-unit-disc` | `product-measures-and-the-fubini-tonelli-theorems-examples` | gpt-5.6-terra | `185760792813a039582d64e41fe4a2807dd78e20f0324816c4b5a6725adaf824` |
| `ex-disc-automorphism-swapping-two-points` | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | gpt-5.6-terra | `f373bab27f26e0f1b8c398240511e599a2b3980c5d43e36fdbb6a8aadb592dd9` |
| `ex-jensen-formula-for-a-polynomial` | `infinite-products-and-weierstrass-factorisation-examples` | gpt-5.6-terra | `074d3cefd0f9b919a798d5ca5aca2370ff684c635e2a6440943fe580d12a130c` |
| `ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates` | `product-measures-and-the-fubini-tonelli-theorems-examples` | gpt-5.6-terra | `bac3a7dcc4ae07eded5b48ad29d1035cc1f07bf99f1362b3129e08b9c56f11bc` |
| `ex-principal-square-root-breaks-multiplicativity-at-minus-one` | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | gpt-5.6-terra | `5dd5b46d491246137d1ac3abb87df914b54db5af70497ee5a770e1f7fb82ac02` |
| `ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free` | `infinite-products-and-weierstrass-factorisation-examples` | gpt-5.6-terra | `1444e116c43003f55f4a9d5e9d2f951f609d3cf5bd356eae01f427bc475585be` |
| `ex-region-under-x-squared-has-measure-one-third` | `product-measures-and-the-fubini-tonelli-theorems-examples` | gpt-5.6-terra | `ab0b1ae2b9c65561006a02d472a2dfcf338ac74eda7b2323b94de1383400c23f` |
| `ex-sine-product-recovers-the-basel-sum` | `infinite-products-and-weierstrass-factorisation-examples` | gpt-5.6-terra | `ec99da50a997ad996675526e9c3b52062ecdf02f1b07824ec9b1c0281aa63dea` |
| `ex-sine-sends-a-half-strip-to-the-upper-half-plane` | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | gpt-5.6-terra | `b5e737665ccbf2905d2b61a2d1accddfb29b7c7a769fcccc09935dfff808dbbf` |
| `ex-strip-to-disc-biholomorphism-by-exponential-and-cayley` | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | gpt-5.6-terra | `1e62403a79109ed021489d5cb2d8e6185f57a653355a7d90292aac275f02467d` |
| `ex-zeta-two-from-tonelli-and-the-geometric-series` | `product-measures-and-the-fubini-tonelli-theorems-examples` | gpt-5.6-terra | `d0e5abcada0df94a0b6013d51458251113fbb951528ebfe07df61a6c47d25e26` |
| `fs-entire-order-equals-canonical-genus` | `infinite-products-and-weierstrass-factorisation-examples` | gpt-5.6-terra | `96ce7f1696d2e877ca872cc9f2f49a8dce66e672ca1007b3fe9c5d48270fa6bf` |
| `fs-every-zero-sequence-admits-a-genus-zero-canonical-product` | `infinite-products-and-weierstrass-factorisation-examples` | gpt-5.6-terra | `38dd64fab5679798d1d7945b29f4f077a72a1101f7c994540d22b864fe41fdc9` |
| `fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `7d6e934c512b8707175d22f47b8d3e079045ecba96aaf066a6ed93bf3174ea52` |
| `fs-weierstrass-factorization-is-unique` | `infinite-products-and-weierstrass-factorisation-examples` | gpt-5.6-terra | `3450c4814b894f26782ecc36b8c54ccc629c29ec8f4f8ca0ca887b9167e28702` |
| `lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `a853f2ce6fc358268edb854c087c7e7b0a6ebfd25f906c7d915a75ed0f951ccc` |
| `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `1b5af6a9c4964ec0b6b4f73904d1d9e5dfa6e89571fc00f96bbf2fb6c66b6b4c` |
| `lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `6a6f32d24f734745324ed11db0e336833914aa10585f20e3ebe3cd3d929af055` |
| `lem-finite-rectangle-unions-form-a-generating-algebra` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `32ae212e3f708d7081764bd7f6fd4627efc7b34db0803234d59a3be85ada2f6e` |
| `lem-unit-disc-estimate-for-weierstrass-elementary-factors` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `ed33df8c289d268a8a6b4d3afbb2cad88f6624d88b040f039f11faad80a8550f` |
| `prop-sigma-finite-section-measure-functions-are-measurable` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `a35889cd9090954389108b232ad1f8e0953940dfaee4a48dc58695b95304297f` |
| `rem-caratheodory-also-constructs-the-product-measure` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `a9814f717badf2a32e0e1f4e806262c05b10a0e01ef35cb1ec9db413da625a82` |
| `rem-complex-infinite-product-dictionary` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `1c05a0c60d801417a69ee16f4443bc6eb61c17ac0e2551298ccff65931edcc7d` |
| `rem-finite-product-measures-are-the-base-case-for-countable-product-constructions` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `335c7bf1a7eafd9fc5f1a8fc939b7c6e063083add4869e95561e32f81188a007` |
| `rem-polar-coordinates-recover-the-published-ball-volume-and-gaussian-formulas` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `44e947efe57bb3380da1f1a53db0a4c34aa8f0e7303a585d2a880036241362f4` |
| `thm-absolute-convergence-criterion-for-complex-infinite-products` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `2e34bc64dd1da7aa896bfcc89a0d94f38622c96fc2fa371d77ee33dbd8f3f4d6` |
| `thm-branch-discrepancies-for-logarithm-and-complex-powers` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `9207ded34af927aaa865864cc49c0fe2b039ee2cff9c3556907c5ccabd975be4` |
| `thm-branch-power-agrees-with-integer-powers` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `d6d2f9f4611aa9e3973841fb9a5f8fe35f212c9ab9590db477c446eab995c0ca` |
| `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `d20047e1befc0e95a7f9d1cc7493ba55411451438e6ca88682bc5a063186db4f` |
| `thm-canonical-product-convergence-from-exponent-sum` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `bac75d167d349f70f5644ffbfbb824373172ac0e31be685b60f28dcae57605d7` |
| `thm-conformal-equivalence-is-an-equivalence-relation` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `7978ac37f025a5562ec82ee7a40921c4cc3ed35df3ce2809fda55c4bdb6eee6a` |
| `thm-disc-automorphisms-are-rotated-blaschke-factors` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `3c6a0e141d79bf8feb9799ee5856cf566bb49f8bb0d3409cf66bf509e3214643` |
| `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `2bb9570ffa5fab8f6523e45aa1a996673c1867541b124f0181a6ce979fd8fdf3` |
| `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `51537a5dcf3d99d32f39b5125cf3b8f1366ec8b5fbecd990eb11d2ea04c40f88` |
| `thm-hadamard-factorization-for-finite-order-entire-functions` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `c9b8e75358e68aaf91de437e322403960b858fa6f3c8240bc8f69862ef9dbe09` |
| `thm-iterated-section-measures-agree-on-product-measurable-sets` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `6cfb888bfb907eb2c6921293f21244cc10ee1d7d3e2a3caebf2da3c925824995` |
| `thm-joukowski-biholomorphism-outside-unit-disc` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `b85f55c4edcc9a3669d7ad6646a87cbc0d29e65074dfcec08ed0f1f8a55c8005` |
| `thm-layer-cake-formula-for-l-p-powers` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `9ace85873ef6d490a53757404766b8e13a649889e317431940121891a255c953` |
| `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `8f428e86a5f776ee58aa831279419870965018328967eceb30f6036cdffb595e` |
| `thm-poincare-distance-formula-and-disc-automorphism-invariance` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `a2605f2ed6f23de0bda014dc80187965db9ce2c948a1de75ef9252c065436147` |
| `thm-polar-coordinates-formula-for-lebesgue-measure` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `99c9cbe4e9dc76d6fe1da0b046976743a06087ab89490982aa23065a036d9738` |
| `thm-principal-exponential-biholomorphism-from-principal-strip` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `b0cc57664258268b8c75eccf097dfe1b8a933f37ddbe2dd114dcfebcfa760a70` |
| `thm-principal-logarithm-biholomorphism-to-the-principal-strip` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `25cf0cb1d715dcfd2a7cd41d93cd2c347f70d0c0ba5f88be664f95f2c7e657ec` |
| `thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `73a25c7f47172d073af8bf78e729acb3c116d4672d9590d86f2049b2a21ad1e0` |
| `thm-schwarz-pick-lemma-on-the-unit-disc` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `8c334e59d9495065f1bad13ed9633c4b5abb8e45a1332af8c107ba5a5b26c421` |
| `thm-sector-power-map-is-biholomorphic-on-narrow-sectors` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `1a9cd1d6890f4cd7ae9035928c929039b3f480334ef37cdace99b1b26ba744e5` |
| `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `943d1345cc1acf6147c5ed9c8938e1df44161c25d6cf28c606ac2b29f8837f9f` |
| `thm-sine-biholomorphism-from-upper-half-strip` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `2e0faf3fbdd97f5a698f0eeffb232142ce05fe8a9ae7eacbf09d2545ae4be162` |
| `thm-sine-has-its-weierstrass-product` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `497507c728b0f99aa85b320d713f69c813422404f615dafe84139b4751db8f6b` |
| `thm-slit-plane-root-branch-biholomorphism-to-a-sector` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `5bca1951890a03885dfc92ce19d073eae5898eb3f24dc1478efcec4a53e59ec9` |
| `thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `981c6407e58e72ebff9eecfc27d394d5b92d048b249ffcad75abeb4811a7ffef` |
| `thm-tonelli-and-fubini-for-completed-product-measures` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `14489cc1eba2d982522d4f5f7cffc49d4f1df0f4df0f7ed4a0d79ed77a7e68c3` |
| `thm-tonelli-theorem-for-sigma-finite-product-spaces` | `product-measures-and-the-fubini-tonelli-theorems` | gpt-5.6-terra | `ff0122ddc2c33b30ad24cd6dd7842642278fee9665eb991df100841f292fce37` |
| `thm-upper-half-plane-automorphisms-are-real-mobius-maps` | `conformal-mapping-branches-and-the-schwarz-lemma` | gpt-5.6-terra | `3ef1df4206da9a494dfb04ddbd118063d51ae4c28d85efaa77fcae2bf749ed92` |
| `thm-weierstrass-factorization-for-entire-functions` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `138f38dbcc5ef4df5557355fc538d9b8c51f71bf515efe9f652412e9f1ade20a` |
| `thm-weierstrass-product-theorem-on-the-complex-plane` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `5d73d7c6b49194be6ec668c4a5e04d8edde25e1976df48aeec4e20efe632bb97` |
| `thm-zero-exponent-is-bounded-by-entire-order` | `infinite-products-and-weierstrass-factorisation` | gpt-5.6-terra | `53f1318f3231c176a285b0d9381dad78497039da3c35bf42dd1a5eb1d43f7247` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-23`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-23-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-23-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-23-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-23-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
