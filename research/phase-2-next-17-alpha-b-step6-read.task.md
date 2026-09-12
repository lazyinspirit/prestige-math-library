# Step 6 whole-group reading — group **b**, run `phase-2-next-17`

You are the group Alpha for batches **2**: 2 A/B pair(s), 4 page(s), 85 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `weak-and-weak-star-topologies` | A | functional-analysis | 288.061 | `locally-convex-spaces-and-continuous-separation`, `nets-and-filters` |
| 2 | `weak-and-weak-star-topologies-examples` | B | functional-analysis | 288.062 | `weak-and-weak-star-topologies` |
| 2 | `distributions-test-functions-and-differentiation` | A | functional-analysis | 288.093 | `order-zorn-and-the-axiom-of-choice`, `schwartz-space-and-the-plancherel-theorem`, `the-divergence-theorem-and-classical-stokes` |
| 2 | `distributions-test-functions-and-differentiation-examples` | B | functional-analysis | 288.094 | `distributions-test-functions-and-differentiation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `weak-and-weak-star-topologies` — Weak and Weak Star Topologies (19 item(s))

- `def-weak-topology-on-a-normed-space` · definition — Weak topology on a normed space
- `lem-basic-weak-neighborhoods` · lemma — Basic weak neighborhoods
- `thm-weak-topology-is-hausdorff` · theorem — Weak topology is hausdorff
- `def-weak-convergence-of-nets-and-sequences` · definition — Weak convergence of nets and sequences
- `lem-basic-weak-star-neighborhoods` · lemma — Basic weak star neighborhoods
- `def-weak-star-convergence` · definition — Weak star convergence
- `thm-continuous-dual-of-a-weak-topology` · theorem — Continuous dual of a weak topology
- `thm-continuous-dual-of-a-weak-star-topology` · theorem — Continuous dual of a weak star topology
- `thm-norm-closed-convex-iff-weakly-closed` · theorem — Norm closed convex iff weakly closed
- `cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball` · corollary — Weak closure of the unit sphere is the closed unit ball
- `thm-weakly-convergent-sequences-are-norm-bounded` · theorem — Weakly convergent sequences are norm bounded
- `cor-weak-convergence-implies-lower-semicontinuity-of-the-norm` · corollary — Weak convergence implies lower semicontinuity of the norm
- `thm-weak-and-norm-topologies-agree-iff-finite-dimensional` · theorem — Weak and norm topologies agree iff finite dimensional
- `thm-infinite-dimensional-weak-topology-is-not-first-countable` · theorem — Infinite dimensional weak topology is not first countable
- `lem-annihilators-are-weak-and-weak-star-closed` · lemma — Annihilators are weak and weak star closed
- `thm-transpose-is-weak-to-weak-continuous` · theorem — Transpose is weak to weak continuous
- `thm-transpose-is-weak-star-to-weak-star-continuous` · theorem — Transpose is weak star to weak star continuous
- `def-strong-and-weak-operator-topologies` · definition — Strong and weak operator topologies
- `lem-norm-implies-strong-implies-weak-operator-convergence` · lemma — Norm implies strong implies weak operator convergence

### `weak-and-weak-star-topologies-examples` — Weak and Weak Star Topologies — Examples (9 item(s))

- `ex-coordinate-vectors-converge-weakly-to-zero-in-ell-p` · example — Coordinate vectors converge weakly to zero in ell p
- `cex-coordinate-vectors-do-not-converge-weakly-to-zero-in-ell-one` · counterexample — Coordinate vectors do not converge weakly to zero in ell one
- `ex-coordinate-evaluations-converge-weak-star-to-zero-in-ell-one-star` · example — Coordinate evaluations converge weak star to zero in ell one star
- `cex-weak-star-and-weak-topologies-on-a-dual-can-differ` · counterexample — Weak star and weak topologies on a dual can differ
- `cex-weak-closure-can-exceed-sequential-weak-closure` · counterexample — Weak closure can exceed sequential weak closure
- `ex-right-shift-powers-converge-in-wot-not-sot` · example — Right shift powers converge in wot not sot
- `ex-left-shift-powers-converge-in-sot-not-operator-norm` · example — Left shift powers converge in sot not operator norm
- `cex-pointwise-boundedness-without-a-uniform-bound-on-an-incomplete-domain` · counterexample — Pointwise boundedness without a uniform bound on an incomplete domain
- `cex-a-weakly-convergent-net-need-not-be-eventually-norm-bounded` · counterexample — A weakly convergent net need not be eventually norm bounded

### `distributions-test-functions-and-differentiation` — Distributions Test Functions and Differentiation (49 item(s))

- `def-test-function-space-d-of-an-open-set` · definition — Test function space d of an open set
- `def-fixed-support-test-function-frechet-space` · definition — Fixed support test function frechet space
- `def-test-function-topology` · definition — Test function topology
- `def-distribution` · definition — Distribution
- `def-regular-distribution-from-a-locally-integrable-function` · definition — Regular distribution from a locally integrable function
- `def-convolution-of-a-distribution-with-a-test-function` · definition — Convolution of a distribution with a test function
- `lem-test-function-cutoffs-and-euclidean-localization` · lemma — Test function cutoffs and euclidean localization
- `lem-fixed-support-test-function-spaces-are-complete` · lemma — Fixed support test function spaces are complete
- `lem-test-function-lf-topology-universal-property` · lemma — Test function lf topology universal property
- `thm-test-function-operations-are-continuous` · theorem — Test function operations are continuous
- `thm-local-finite-order-characterization-of-distributions` · theorem — Local finite order characterization of distributions
- `def-order-of-a-distribution-on-a-compact-set` · definition — Order of a distribution on a compact set
- `def-distributional-derivative` · definition — Distributional derivative
- `def-multiplication-of-a-distribution-by-a-smooth-function` · definition — Multiplication of a distribution by a smooth function
- `thm-leibniz-rule-for-distributions` · theorem — Leibniz rule for distributions
- `def-dirac-delta-and-its-derivatives` · definition — Dirac delta and its derivatives
- `thm-distributions-form-a-sheaf` · theorem — Distributions form a sheaf
- `def-support-of-a-distribution` · definition — Support of a distribution
- `thm-compactly-supported-distributions-have-global-finite-order` · theorem — Compactly supported distributions have global finite order
- `thm-distributions-supported-at-one-point` · theorem — Distributions supported at one point
- `lem-bounded-test-function-sets-have-common-compact-support` · lemma — Bounded test function sets have common compact support
- `thm-sequential-convergence-in-test-function-space` · theorem — Sequential convergence in test function space
- `def-weak-and-strong-topologies-on-distributions` · definition — Weak and strong topologies on distributions
- `thm-locally-integrable-functions-embed-in-distributions` · theorem — Locally integrable functions embed in distributions
- `lem-strong-distribution-convergence-implies-weak-convergence` · lemma — Strong distribution convergence implies weak convergence
- `lem-riemann-lebesgue-comparison-for-distribution-test-integrands` · lemma — Riemann–Lebesgue comparison for distribution test integrands
- `thm-distributional-differentiation-is-continuous-and-commutes` · theorem — Distributional differentiation is continuous and commutes
- `lem-distribution-pairing-with-smooth-parameter-families` · lemma — Distribution pairing with smooth parameter families
- `thm-convolution-with-a-test-function-is-smooth` · theorem — Convolution with a test function is smooth
- `thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions` · theorem — Uniform finite order bounds for pointwise bounded distributions
- `def-pullback-of-a-distribution-by-a-diffeomorphism` · definition — Pullback of a distribution by a diffeomorphism
- `def-tensor-product-of-distributions` · definition — Tensor product of distributions
- `lem-compactly-supported-distributions-extend-to-smooth-functions` · lemma — Compactly supported distributions extend to smooth functions
- `thm-sequential-convergence-of-smooth-multipliers-and-distributions` · theorem — Sequential convergence of smooth multipliers and distributions
- `thm-extension-by-zero-for-distributions-with-ambient-closed-support` · theorem — Extension by zero for distributions with ambient closed support
- `thm-translation-invariant-test-function-operators-are-convolutions` · theorem — Translation invariant test function operators are convolutions
- `lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities` · lemma — Complex l one functionals on finite measure spaces have bounded densities
- `thm-local-structure-of-distributions-as-derivatives-of-continuous-functions` · theorem — Local structure of distributions as derivatives of continuous functions
- `lem-compact-support-continuous-primitive-representation` · lemma — Compact support continuous primitive representation
- `thm-global-locally-finite-structure-of-distributions` · theorem — Global locally finite structure of distributions
- `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets` · lemma — Finite sums of product tests are dense on product open sets
- `thm-tensor-product-distributions-and-iterated-pairings` · theorem — Tensor product distributions and iterated pairings
- `def-convolution-of-distributions-when-one-has-compact-support` · definition — Convolution of distributions when one has compact support
- `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis` · lemma — Convolution of distributions is well defined under the support hypothesis
- `thm-mollifier-approximation-in-distributions` · theorem — Mollifier approximation in distributions
- `thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant` · theorem — A distribution with zero derivatives on a connected open set is constant
- `cor-smooth-functions-are-weakly-dense-in-distributions` · corollary — Smooth functions are weakly dense in distributions
- `thm-associativity-of-distribution-convolution-under-compact-support` · theorem — Associativity of distribution convolution under compact support
- `thm-closed-bounded-test-function-sets-are-compact` · theorem — Closed bounded test function sets are compact

### `distributions-test-functions-and-differentiation-examples` — Distributions Test Functions and Differentiation — Examples (8 item(s))

- `ex-derivative-of-the-heaviside-function-is-dirac-delta` · example — Derivative of the heaviside function is dirac delta
- `ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas` · example — Derivatives of piecewise smooth functions include jump deltas
- `ex-distributional-laplacian-of-the-newtonian-kernel` · example — Distributional laplacian of the newtonian kernel
- `ex-principal-value-distribution-one-over-x` · example — Principal value distribution one over x
- `cex-not-every-distribution-is-a-locally-integrable-function` · counterexample — Not every distribution is a locally integrable function
- `cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control` · counterexample — Pointwise convergent functions need not converge as distributions without local control
- `ex-compactly-supported-distributions-have-global-finite-order` · example — Compactly supported distributions have global finite order
- `rem-sobolev-weak-derivatives-belong-to-pde` · remark — Sobolev weak derivatives belong to pde

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-17`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
