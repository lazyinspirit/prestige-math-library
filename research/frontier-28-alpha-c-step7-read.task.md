# Step 8 — group **c**, run `frontier-28`

You are the group Alpha for batches **4**, **5**, **6**: 3 A/B pair(s), 6 page(s), 80 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-28-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-28-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `the-duality-of-lp-and-lq` | A | measure-theory | 288.031 | `density-separability-and-convolution-in-lp-examples` |
| 4 | `the-duality-of-lp-and-lq-examples` | B | measure-theory | 288.032 | `the-duality-of-lp-and-lq` |
| 5 | `bounded-linear-operators-and-quotient-spaces` | A | functional-analysis | 288.049 | `normed-and-banach-spaces-examples` |
| 5 | `bounded-linear-operators-and-quotient-spaces-examples` | B | functional-analysis | 288.05 | `bounded-linear-operators-and-quotient-spaces` |
| 6 | `chebyshev-bounds-and-mertens-theorems` | A | number-theory | 348.005 | `average-orders-divisor-sums-and-representation-counts-examples`, `the-gamma-function` |
| 6 | `chebyshev-bounds-and-mertens-theorems-examples` | B | number-theory | 348.006 | `chebyshev-bounds-and-mertens-theorems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-duality-of-lp-and-lq` — The Duality of $L^p$ and Lq (15 item(s))

- `def-bounded-linear-functional-on-l-p-and-its-operator-norm` · definition — A bounded linear functional on $L^p(\mu)$ and its operator norm
- `thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p` · theorem — Every $g\in L^q(\mu)$ defines a bounded linear functional on $L^p(\mu)$
- `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm` · proposition — The functional $\Lambda_g$ has norm $\|g\|_q$; for $q=\infty$ assume $\mu$ is semifinite
- `prop-semifinite-measures-make-l-q-representatives-unique` · proposition — On a semifinite measure space, a representing $L^q$ function is unique
- `lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p` · lemma — For $1 \le p < \infty$, every $L^p(\mu)$ class has a sigma-finite essential support
- `lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures` · lemma — On a finite-measure space, a bounded functional on $L^p$ defines a finite signed or complex measure
- `lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu` · lemma — The measure defined by a bounded $L^p$ functional is absolutely continuous with respect to $\mu$
- `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities` · lemma — On a finite-measure space, a bounded $L^p$ functional is integration against its Radon-Nikodym density
- `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q` · lemma — The Radon-Nikodym density of a bounded $L^p$ functional belongs to $L^q$
- `thm-sigma-finite-duality-for-bounded-functionals-on-l-p` · theorem — On a sigma-finite measure space, every bounded linear functional on $L^p$ is integration against a unique $L^q$ function
- `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity` · theorem — For $1 < p < \infty$, the same representation theorem holds on arbitrary measure spaces
- `cor-l-p-norm-recovery-by-unit-l-q-pairings` · corollary — The $L^p$ norm is the supremum of pairings against unit $L^q$ functions
- `cor-ell-p-duality-by-counting-measure` · corollary — Counting measure specializes the representation theorem to $\ell^p$ and $\ell^q$
- `rem-the-p-equals-infinity-case-is-recorded-not-proved-here` · remark — The $p=\infty$ case is recorded but not proved here
- `rem-duality-as-a-dual-space-statement` · remark — Orientation only: the dual-space phrasing of the concrete $L^p$ theorem

### `the-duality-of-lp-and-lq-examples` — The Duality of $L^p$ and Lq — Examples (6 item(s))

- `ex-a-power-function-realises-the-duality-norm-on-unit-interval` · example — A power function on $(0,1]$ realizes the duality norm on the unit interval
- `ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q` · example — The functional $f\mapsto\int_0^{1/2} f$ on $L^p[0,1]$ has norm $2^{-1/q}$
- `ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing` · example — Every bounded linear functional on $\ell^2$ is summation against a unique $\ell^2$ sequence
- `cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval` · counterexample — Point evaluation at $0$ is not well defined on $L^p[0,1]$
- `cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality` · counterexample — The zero-countable / infinity-cocountable measure space breaks the $p=1$ endpoint of duality
- `rem-a-bounded-functional-on-l-infinity-of-unit-interval-need-not-come-from-l-one` · remark — A bounded functional on $L^\infty[0,1]$ need not come from $L^1[0,1]$

### `bounded-linear-operators-and-quotient-spaces` — Bounded Linear Operators and Quotient Spaces (26 item(s))

- `def-bounded-linear-operator` · definition — A bounded linear operator between normed spaces
- `thm-bounded-linear-operator-equivalences` · theorem — For a linear operator, boundedness, continuity at 0, continuity, and Lipschitz continuity are equivalent
- `def-operator-norm` · definition — The operator norm as the least bound and as the unit-sphere or unit-ball supremum
- `lem-operator-norm-is-a-norm` · lemma — The operator norm is a norm on the space of bounded linear operators
- `lem-composition-operator-norm-inequality` · lemma — Composition satisfies \|ST\|\le\|S\|\,\|T\|
- `def-space-of-bounded-linear-operators` · definition — The spaces \(\mathcal B(X,Y)\) and \(\mathcal B(X)\) of bounded linear operators
- `thm-bounded-operator-space-is-banach` · theorem — If \(Y\) is Banach then \(\mathcal B(X,Y)\) is Banach
- `thm-extension-of-a-bounded-map-from-a-dense-subspace` · theorem — A bounded linear map from a dense normed subspace into a Banach space extends uniquely with the same norm
- `def-topological-isomorphism-of-normed-spaces` · definition — A topological isomorphism of normed spaces
- `def-bounded-bilinear-map` · definition — A bounded bilinear map between normed spaces
- `thm-bounded-bilinear-map-equivalences` · theorem — For a bilinear map, boundedness is equivalent to joint continuity
- `def-quotient-vector-space-coset-notation` · definition — The quotient vector space \(X/M\), its cosets, and the quotient map \(q:X\to X/M\)
- `def-quotient-seminorm` · definition — The quotient seminorm \(\|x+M\|_{X/M}=\inf_{m\in M}\|x+m\|=\operatorname{dist}(x,M)\)
- `lem-quotient-seminorm-is-representative-independent` · lemma — The quotient seminorm is independent of the chosen coset representative
- `lem-quotient-seminorm-triangle-inequality` · lemma — The quotient seminorm satisfies the triangle inequality
- `thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed` · theorem — The quotient seminorm is a norm exactly when the subspace is closed
- `thm-quotient-map-is-open` · theorem — The quotient map sends every open ball onto a set containing the corresponding quotient ball
- `thm-quotient-of-banach-by-closed-subspace-is-banach` · theorem — A quotient of a Banach space by a closed subspace is Banach
- `thm-universal-property-of-the-normed-quotient` · theorem — A bounded operator that vanishes on a subspace factors uniquely through the normed quotient
- `def-complemented-subspace` · definition — A complemented closed subspace of a normed space
- `thm-complemented-subspace-iff-range-of-a-bounded-projection` · theorem — A closed subspace is complemented exactly when it is the range of a bounded projection
- `def-bounded-below-operator` · definition — A bounded operator that is bounded below
- `thm-bounded-below-iff-injective-with-closed-range` · theorem — For a bounded operator between Banach spaces, being bounded below is equivalent to being injective with closed range
- `def-bounded-left-and-right-inverses` · definition — Bounded left inverses and bounded right inverses
- `thm-bounded-right-inverse-iff-kernel-is-complemented` · theorem — A surjective bounded operator between Banach spaces has a bounded right inverse exactly when its kernel is complemented
- `thm-bounded-left-inverse-iff-range-is-complemented` · theorem — An injective bounded operator between Banach spaces has a bounded left inverse exactly when its range is closed and complemented

### `bounded-linear-operators-and-quotient-spaces-examples` — Bounded Linear Operators and Quotient Spaces — Examples (8 item(s))

- `ex-coordinate-projections-and-inclusions-on-product-banach-spaces` · example — Coordinate projections and inclusions on a finite product Banach space
- `ex-shift-operators-on-classical-sequence-spaces` · example — Forward and backward shifts on classical sequence spaces and their exact operator norms
- `ex-evaluation-functional-on-c-of-k` · example — The evaluation functional on \(C(K)\) has norm one
- `ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm` · example — Differentiation on polynomials is unbounded for the supremum norm
- `ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm` · example — The quotient by the kernel is isometric to the range with its induced quotient norm
- `ex-c-mod-constants-and-oscillation-norm` · example — For real continuous functions modulo constants, the quotient norm is half the oscillation
- `cex-a-closed-subspace-need-not-have-a-best-approximation` · counterexample — A closed subspace of a Banach space need not contain a nearest point to every ambient vector
- `cex-an-algebraic-complement-need-not-be-topological` · counterexample — An algebraic complement need not be a topological complement

### `chebyshev-bounds-and-mertens-theorems` — Chebyshev Bounds and Mertens Theorems (18 item(s))

- `def-prime-counting-function` · definition — The prime-counting function
- `def-chebyshev-theta-function` · definition — Chebyshev's theta function
- `def-chebyshev-psi-function` · definition — Chebyshev's psi function
- `lem-chebyshev-psi-prime-power-expansion` · lemma — Prime-power expansion of Chebyshev's psi function
- `lem-prime-counting-chebyshev-partial-summation` · lemma — Abel summation recovers the prime-counting function from theta
- `lem-central-binomial-coefficient-bounds` · lemma — Central binomial coefficient bounds
- `lem-central-binomial-coefficient-prime-valuation` · lemma — Prime valuations in the central binomial coefficient
- `thm-chebyshev-theta-linear-bounds` · theorem — Chebyshev's theta function has linear lower and upper bounds
- `lem-chebyshev-functions-prime-power-comparison` · lemma — Psi and theta differ by at most a square-root term
- `thm-chebyshev-prime-counting-bounds` · theorem — Chebyshev bounds for the prime-counting function
- `thm-bertrands-postulate` · theorem — Bertrand's postulate
- `lem-weighted-von-mangoldt-harmonic-estimate` · lemma — The von Mangoldt harmonic sum is log x plus O(1)
- `thm-first-mertens-theorem-for-primes` · theorem — Mertens' first theorem for primes
- `def-meissel-mertens-constant` · definition — The Meissel-Mertens constant
- `thm-second-mertens-theorem-for-primes` · theorem — Mertens' second theorem for primes
- `thm-third-mertens-theorem-for-primes` · theorem — Mertens' third theorem for primes
- `cor-sum-of-reciprocals-of-primes-diverges` · corollary — The sum of the reciprocals of the primes diverges
- `cor-euler-prime-product-tends-to-zero` · corollary — Euler's prime product tends to zero

### `chebyshev-bounds-and-mertens-theorems-examples` — Chebyshev Bounds and Mertens Theorems — Examples (7 item(s))

- `ex-prime-counting-theta-and-psi-table` · example — A table of pi(x), theta(x), and psi(x)
- `ex-chebyshev-binomial-coefficient-estimate` · example — Factoring a central binomial coefficient to detect interval primes
- `ex-bertrand-finite-range-verification` · example — The residual finite-range check for Bertrand's postulate
- `ex-first-and-second-mertens-numerics` · example — Numerics for the first and second Mertens theorems
- `ex-third-mertens-product-numerics` · example — Numerics for the third Mertens theorem
- `cex-chebyshev-bounds-do-not-give-the-prime-number-theorem` · counterexample — Two-sided Chebyshev bounds do not imply the prime number theorem
- `cex-shoups-product-bound-does-not-determine-mertens-constant` · counterexample — A Theta(1/log x) product bound does not determine the Mertens constant

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-28-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-28`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
