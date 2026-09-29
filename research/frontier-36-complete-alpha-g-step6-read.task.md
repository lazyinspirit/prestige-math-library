# Step 6 whole-group reading — group **g**, run `frontier-36-complete`

You are the group Alpha for batches **11**, **12**, **30**: 3 A/B pair(s), 6 page(s), 80 item(s).

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
| 11 | `fundamental-solutions-newtonian-potentials-and-green-functions` | A | pde | 458.007 | `distributions-test-functions-and-differentiation`, `maximum-principles-harnack-and-liouville-in-rn`, `smooth-partitions-of-unity-and-exhaustions` |
| 11 | `fundamental-solutions-newtonian-potentials-and-green-functions-examples` | B | pde | 458.008 | `fundamental-solutions-newtonian-potentials-and-green-functions` |
| 12 | `bessel-potential-completions-and-real-order-sobolev-spaces` | A | pde | 458.026001 | `normed-and-banach-spaces`, `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform`, `hilbert-space-geometry-and-riesz-representation` |
| 12 | `bessel-potential-completions-and-real-order-sobolev-spaces-examples` | B | pde | 458.026002 | `bessel-potential-completions-and-real-order-sobolev-spaces` |
| 30 | `weak-derivatives-and-sobolev-spaces` | A | pde | 458.019 | `distributions-test-functions-and-differentiation`, `hilbert-space-geometry-and-riesz-representation`, `smooth-partitions-of-unity-and-exhaustions` |
| 30 | `weak-derivatives-and-sobolev-spaces-examples` | B | pde | 458.02 | `weak-derivatives-and-sobolev-spaces` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fundamental-solutions-newtonian-potentials-and-green-functions` — Fundamental Solutions Newtonian Potentials and Green Functions (22 item(s))

- `def-fundamental-solution-of-a-constant-coefficient-operator` · definition — Fundamental solution of a constant-coefficient operator
- `def-laplace-fundamental-solution-with-positive-minus-laplacian-sign` · definition — Fundamental solution for the positive operator minus Laplacian
- `lem-laplace-fundamental-kernel-is-locally-integrable` · lemma — Local integrability of the Laplace fundamental kernel
- `lem-laplace-fundamental-solution-is-harmonic-off-its-pole` · lemma — The Laplace fundamental solution is harmonic off its pole
- `thm-minus-laplacian-of-the-fundamental-solution-is-dirac` · theorem — The fundamental solution has unit Dirac Laplacian
- `def-newtonian-potential` · definition — Newtonian potential of compactly supported data
- `lem-distributional-derivatives-commute-with-convolution-against-test-functions` · lemma — Distributional derivatives commute with test-function convolution
- `lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data` · lemma — Bounded compact data give an everywhere finite Newtonian potential
- `thm-decay-of-the-newtonian-potential-of-compactly-supported-data` · theorem — Far-field asymptotics of compact-source Newtonian potentials
- `thm-newtonian-potential-solves-poisson-distributionally` · theorem — Newtonian potentials solve the distributional Poisson equation
- `thm-newtonian-potential-for-holder-data-is-classical` · theorem — Hölder data give a classical Newtonian solution
- `def-dirichlet-green-function-for-minus-laplacian` · definition — Dirichlet Green function for minus Laplacian
- `lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness` · lemma — Puncturing a connected open subset of $\\mathbb{R}^n$ preserves path-connectedness for $n\\ge2$
- `lem-dirichlet-green-function-is-unique-and-positive` · lemma — A bounded-domain Dirichlet Green function is unique and positive
- `thm-green-function-symmetry` · theorem — Symmetry of the Dirichlet Green function
- `def-poisson-kernel-from-a-green-function` · definition — Poisson kernel from a Dirichlet Green function
- `thm-green-representation-formula` · theorem — Green representation for classical Poisson data
- `cor-zero-dirichlet-green-representation-for-poisson-data` · corollary — Zero-Dirichlet Green representation for Poisson data
- `cor-classical-dirichlet-and-poisson-problems-are-unique` · corollary — Uniqueness of classical Dirichlet and compatible Neumann solutions
- `lem-neumann-compatibility-from-the-divergence-theorem` · lemma — Necessary compatibility for the classical Neumann Poisson problem
- `cor-neumann-solutions-are-unique-modulo-componentwise-constants` · corollary — Classical Neumann solutions differ by componentwise constants
- `rem-green-identities-come-from-the-euclidean-integration-pair` · remark — The Green identities used here are Euclidean

### `fundamental-solutions-newtonian-potentials-and-green-functions-examples` — Fundamental Solutions Newtonian Potentials and Green Functions — Examples (9 item(s))

- `ex-flux-of-the-laplace-fundamental-solution` · example — Flux normalization on every centered sphere
- `ex-two-dimensional-logarithmic-kernel-has-unit-normalised-flux` · example — The two-dimensional logarithmic kernel has unit normalized flux
- `ex-adding-a-harmonic-function-preserves-a-fundamental-solution` · example — Adding an entire harmonic function preserves a Laplace fundamental solution
- `ex-newtonian-potential-of-a-radial-density` · example — Newtonian potential of radial compact data
- `ex-newtons-shell-theorem-from-the-mean-property` · example — Newton shell theorem from harmonic mean values
- `cex-second-derivatives-of-the-fundamental-solution-are-not-locally-integrable-absolutely` · counterexample — The fundamental Hessian is not absolutely locally integrable
- `cex-green-functions-need-not-exist-with-the-naive-boundary-regularity` · counterexample — An isolated boundary point obstructs pointwise-zero Green data
- `cex-neumann-poisson-problem-needs-the-compatibility-condition` · counterexample — Neumann Poisson data require a flux compatibility equation
- `ex-one-dimensional-green-function-on-an-interval` · example — One-dimensional Dirichlet Green kernel on an interval

### `bessel-potential-completions-and-real-order-sobolev-spaces` — Bessel-Potential Completions and Real-Order Sobolev Spaces (8 item(s))

- `lem-japanese-bracket-powers-preserve-schwartz-space` · lemma — Real powers of the Japanese bracket act on Schwartz space
- `def-bessel-potential-pre-hilbert-norm-on-schwartz-space` · definition — Weighted Fourier candidate norm on Schwartz space
- `lem-bessel-potential-norm-is-positive-definite` · lemma — The weighted Fourier seminorm separates Schwartz functions
- `lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo` · lemma — Weighted Fourier transforms of Schwartz functions are dense in L2
- `def-real-order-bessel-potential-sobolev-space` · definition — Real-order Bessel-potential completion H^s
- `thm-bessel-potential-completions-embed-in-tempered-distributions` · theorem — The Bessel completion embeds canonically in tempered distributions
- `cor-bessel-potential-spaces-are-hilbert-and-complete` · corollary — Every real-order Bessel-potential completion is Hilbert
- `thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation` · theorem — Weighted tempered-distribution characterization of H^s

### `bessel-potential-completions-and-real-order-sobolev-spaces-examples` — Bessel-Potential Completions and Real-Order Sobolev Spaces — Examples (2 item(s))

- `ex-zero-order-bessel-completion-is-ltwo` · example — The zero-order Bessel completion is exactly L2
- `ex-schwartz-functions-in-every-bessel-potential-completion` · example — Every Schwartz function belongs to every real-order H^s

### `weak-derivatives-and-sobolev-spaces` — Weak Derivatives and Sobolev Spaces (28 item(s))

- `def-locally-integrable-function-as-a-regular-distribution` · definition — Locally integrable functions as regular distributions
- `def-weak-derivative-of-a-locally-integrable-function` · definition — Weak derivative of a locally integrable function
- `lem-weak-derivative-is-independent-of-lp-representatives` · lemma — Weak differentiation ignores null-set changes
- `lem-weak-derivatives-are-unique-almost-everywhere` · lemma — Uniqueness of a weak derivative as an almost-everywhere class
- `lem-classical-derivatives-are-weak-derivatives` · lemma — Classical derivatives agree with weak derivatives
- `lem-weak-derivative-linearity-locality-and-commutation` · lemma — Linearity, locality, and commutation of weak derivatives
- `thm-zero-weak-gradient-implies-componentwise-constancy` · theorem — Zero weak gradient gives componentwise constants
- `lem-weak-leibniz-rule-with-a-smooth-factor` · lemma — Weak Leibniz rule with a smooth factor
- `lem-sobolev-integration-by-parts-for-dual-exponents` · lemma — Integration by parts for dual-exponent Sobolev functions
- `lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces` · lemma — Restriction and smooth cutoff are bounded on Sobolev spaces
- `lem-sobolev-pasting-across-an-overlap` · lemma — Sobolev functions paste across an overlap
- `def-sobolev-space-wkp-and-its-norm` · definition — Integer-order Sobolev spaces and their norms
- `lem-sobolev-norm-is-well-defined-and-definite` · lemma — The Sobolev norm descends to equivalence classes
- `thm-sobolev-spaces-are-banach-spaces` · theorem — Integer-order Sobolev spaces are Banach
- `lem-weak-lower-semicontinuity-of-the-sobolev-norm` · lemma — Weak lower semicontinuity of the Sobolev norm
- `def-hk-and-hk-zero-notation` · definition — The notation Hk and the reserved zero-boundary symbol
- `thm-hk-is-a-hilbert-space` · theorem — Hk has the derivative-sum Hilbert inner product
- `lem-weak-stability-of-sobolev-derivatives` · lemma — Weak derivatives persist under local Lp limits
- `cor-weak-derivative-operator-is-closed-between-lp-spaces` · corollary — Weak differentiation has a closed graph on its natural domains
- `def-absolute-continuity-on-almost-every-coordinate-line` · definition — Absolute continuity on almost every coordinate line
- `lem-acl-representatives-reconstruct-weak-gradients-by-fubini` · lemma — ACL line derivatives reconstruct weak gradients
- `thm-acl-characterisation-of-w-one-p` · theorem — ACL characterization of W1p
- `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives` · corollary — One-dimensional Sobolev functions have unique AC representatives
- `thm-sobolev-chain-rule-for-c-one-lipschitz-compositions` · theorem — Chain rule for a C1 function with bounded derivative
- `thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions` · theorem — Chain rule for globally Lipschitz scalar maps
- `cor-positive-negative-part-and-truncation-calculus-in-w-one-p` · corollary — Positive, negative, and truncated Sobolev functions
- `cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p` · corollary — Sobolev maxima and minima form a lattice
- `rem-weak-derivatives-are-distributional-derivatives-with-function-values` · remark — Weak derivatives are represented distributional derivatives

### `weak-derivatives-and-sobolev-spaces-examples` — Weak Derivatives and Sobolev Spaces — Examples (11 item(s))

- `ex-absolute-value-has-a-weak-first-derivative` · example — The absolute value has a weak first derivative
- `ex-absolute-value-has-dirac-second-distributional-derivative` · example — Absolute value has a Dirac second derivative
- `cex-step-function-has-no-locally-integrable-weak-derivative` · counterexample — A step has no locally integrable weak derivative
- `cex-cantor-function-is-not-w-one-one-despite-being-absolutely-continuous-off-a-null-set` · counterexample — Cantor function has singular distributional derivative
- `ex-radial-power-membership-in-w-one-p` · example — Sharp Sobolev threshold for a radial power
- `cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold` · counterexample — Subcritical W1p is not closed under multiplication
- `ex-piecewise-c-one-functions-with-matching-traces` · example — Matching pieces across a hyperplane have no jump derivative
- `cex-a-jump-across-a-hypersurface-is-not-in-w-one-p` · counterexample — A hypersurface jump is not W1p
- `cex-lp-functions-need-not-have-point-values` · counterexample — Lp and Sobolev classes do not determine point values
- `cex-w-one-p-point-evaluation-is-unbounded-in-the-subcritical-and-higher-dimensional-critical-cases` · counterexample — Point evaluation is unbounded below the Sobolev continuity threshold
- `ex-sobolev-truncations-preserve-zero-regions` · example — A clipped affine function keeps its zero region

## Your seams

Another group's pages depend on yours:

- `fourier-multipliers-and-sobolev-characterisations` (group c) requires your `weak-derivatives-and-sobolev-spaces`
- `fourier-multipliers-and-sobolev-characterisations` (group c) requires your `bessel-potential-completions-and-real-order-sobolev-spaces`
- `green-functions-harmonic-measure-and-conformal-invariance` (group d) requires your `fundamental-solutions-newtonian-potentials-and-green-functions`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 — group reading digest, `frontier-36-complete`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

The reply is parsed as JSON, so every backslash inside a string is an escape:
write a LaTeX command as a doubled backslash (`\\perp`, `\\omega`), never as
`\perp`. An invalid escape invalidates the whole digest. When a symbol is
available in plain text or Unicode (⊥, ω, ≤, ∈), prefer it over TeX.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
