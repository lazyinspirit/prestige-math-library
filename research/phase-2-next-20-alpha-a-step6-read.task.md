# Step 6 whole-group reading — group **a**, run `phase-2-next-20`

You are the group Alpha for batches **1**, **5**: 3 A/B pair(s), 6 page(s), 51 item(s).

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
| 1 | `weak-mixing-and-the-chacon-transformation` | A | measure-theory | 288.0423 | `measure-preserving-systems-and-mixing-criteria`, `complex-lp-spaces-and-test-function-conventions`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `lebesgue-measure-on-euclidean-space`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial` |
| 1 | `weak-mixing-and-the-chacon-transformation-examples` | B | measure-theory | 288.0424 | `weak-mixing-and-the-chacon-transformation` |
| 5 | `kolmogorov-block-construction-and-almost-everywhere-divergence` | A | fourier-analysis | 288.140165 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `fejer-and-poisson-summability-of-fourier-series`, `orthonormal-bases-parseval-and-fourier-series`, `measures-and-their-basic-properties` |
| 5 | `kolmogorov-block-construction-and-almost-everywhere-divergence-examples` | B | fourier-analysis | 288.14017 | `kolmogorov-block-construction-and-almost-everywhere-divergence` |
| 5 | `carleson-hunt-time-frequency-theorem` | A | fourier-analysis | 288.140175 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `fejer-and-poisson-summability-of-fourier-series`, `schwartz-space-and-the-plancherel-theorem`, `the-maximal-function-and-lebesgue-differentiation` |
| 5 | `carleson-hunt-time-frequency-theorem-examples` | B | fourier-analysis | 288.1401775 | `carleson-hunt-time-frequency-theorem`, `kolmogorov-block-construction-and-almost-everywhere-divergence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `weak-mixing-and-the-chacon-transformation` — Weak Mixing and the Chacon Transformation (21 item(s))

- `def-unitary-eigenfunction-for-a-probability-system` · definition — Unitary eigenfunction for a probability system
- `def-l-two-operator-conventions-for-weak-mixing` · definition — L two operator conventions for weak mixing
- `lem-closed-l-two-subspaces-have-orthogonal-projections` · lemma — Closed l two subspaces have orthogonal projections
- `lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace` · lemma — Hilbert cesaro averages converge to the fixed subspace
- `lem-product-rectangle-kernels-are-dense-in-complex-l-two` · lemma — Product rectangle kernels are dense in complex l two
- `lem-square-integrable-kernels-define-bounded-compact-integral-operators` · lemma — Square integrable kernels define bounded compact integral operators
- `lem-conjugate-transpose-kernels-give-adjoints` · lemma — Conjugate transpose kernels give adjoints
- `lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner` · lemma — Invariant square integrable kernel produces a compact intertwiner
- `lem-nonzero-compact-kernel-operators-yield-nonzero-positive-compact-k-star-k` · lemma — Nonzero compact kernel operators yield nonzero positive compact k star k
- `lem-nonzero-positive-compact-self-adjoint-operators-have-positive-finite-dimensional-eigenspaces` · lemma — Nonzero positive compact self adjoint operators have positive finite dimensional eigenspaces
- `lem-compact-intertwiners-produce-finite-dimensional-invariant-subspaces` · lemma — Compact intertwiners produce finite dimensional invariant subspaces
- `lem-nonzero-finite-dimensional-complex-invariant-subspaces-have-unitary-eigenvectors` · lemma — Nonzero finite dimensional complex invariant subspaces have unitary eigenvectors
- `thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions` · theorem — Weak mixing is equivalent to absence of nonconstant eigenfunctions
- `def-chacon-three-cut-one-spacer-towers` · definition — Chacon three cut one spacer towers
- `lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets` · lemma — Chacon partial maps extend to an invertible map mod null sets
- `lem-chacon-levels-approximate-measurable-sets` · lemma — Chacon levels approximate measurable sets
- `thm-chacon-transformation-is-ergodic` · theorem — Chacon transformation is ergodic
- `lem-chacon-eigenfunctions-are-constant` · lemma — Chacon eigenfunctions are constant
- `lem-chacon-tower-height-correlations-obstruct-mixing` · lemma — Chacon tower height correlations obstruct mixing
- `thm-chacon-transformation-is-weakly-mixing-but-not-mixing` · theorem — Chacon transformation is weakly mixing but not mixing
- `fs-weak-mixing-implies-strong-mixing` · false-statement — Weak mixing implies strong mixing

### `weak-mixing-and-the-chacon-transformation-examples` — Weak Mixing and the Chacon Transformation — Examples (3 item(s))

- `ex-first-three-chacon-tower-heights` · example — First three chacon tower heights
- `ex-chacon-spacer-measure-budget` · example — Chacon spacer measure budget
- `cex-chacon-correlation-subsequence-prevents-mixing` · counterexample — Chacon correlation subsequence prevents mixing

### `kolmogorov-block-construction-and-almost-everywhere-divergence` — Kolmogorov’s Block Construction and Almost-Everywhere Divergence (8 item(s))

- `def-kolmogorov-analytic-partial-sum-maximal-function` · definition — Kolmogorov analytic partial sum maximal function
- `lem-kolmogorov-simultaneous-phase-approximation` · lemma — Kolmogorov simultaneous phase approximation
- `lem-kolmogorov-atomic-kernel-maxima` · lemma — Kolmogorov atomic kernel maxima
- `lem-kolmogorov-block-polynomial-with-large-partial-sums` · lemma — Kolmogorov block polynomial with large partial sums
- `lem-separated-frequency-blocks-do-not-disturb-earlier-partial-sum-maxima` · lemma — Separated frequency blocks do not disturb earlier partial sum maxima
- `lem-kolmogorov-gliding-hump-series-converges-in-lone` · lemma — Kolmogorov gliding hump series converges in lone
- `lem-kolmogorov-block-maxima-diverge-off-a-null-limsup-set` · lemma — Kolmogorov block maxima diverge off a null limsup set
- `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere` · theorem — Kolmogorov lone fourier series diverges almost everywhere

### `kolmogorov-block-construction-and-almost-everywhere-divergence-examples` — Kolmogorov’s Block Construction and Almost-Everywhere Divergence: Examples (2 item(s))

- `ex-one-finite-kolmogorov-frequency-block` · example — One finite kolmogorov frequency block
- `ex-summable-exceptional-measures-in-the-kolmogorov-induction` · example — Summable exceptional measures in the kolmogorov induction

### `carleson-hunt-time-frequency-theorem` — The Carleson–Hunt Time–Frequency Theorem (14 item(s))

- `def-carleson-operator-and-measurable-linearisation` · definition — Carleson operator and measurable linearisation
- `def-carleson-tiles-wave-packets-and-tile-order` · definition — Carleson tiles wave packets and tile order
- `lem-wave-packet-model-dominates-the-linearised-carleson-operator` · lemma — Wave packet model dominates the linearised carleson operator
- `def-density-size-and-tree-count-for-carleson-tiles` · definition — Density size and tree count for carleson tiles
- `lem-carleson-density-selection` · lemma — Carleson density selection
- `lem-carleson-size-selection` · lemma — Carleson size selection
- `lem-carleson-single-tree-estimate` · lemma — Carleson single tree estimate
- `lem-carleson-forest-summation-gives-restricted-weak-ltwo` · lemma — Carleson forest summation gives restricted weak ltwo
- `lem-carleson-signed-tree-weak-one-one-estimate` · lemma — Carleson signed tree weak one one estimate
- `lem-hunt-exceptional-set-and-distribution-estimates` · lemma — Hunt exceptional set and distribution estimates
- `lem-carleson-restricted-weak-interpolation` · lemma — Carleson restricted weak interpolation
- `thm-carleson-maximal-operator-is-strong-ltwo` · theorem — Carleson maximal operator is strong ltwo
- `lem-carleson-real-line-to-torus-transfer` · lemma — Carleson real line to torus transfer
- `thm-carleson-hunt-maximal-inequality-on-the-torus` · theorem — Carleson hunt maximal inequality on the torus

### `carleson-hunt-time-frequency-theorem-examples` — The Carleson–Hunt Time–Frequency Theorem: Examples (3 item(s))

- `ex-two-comparable-and-two-incomparable-carleson-tiles` · example — Two comparable and two incomparable carleson tiles
- `ex-balancing-density-and-size-levels-in-the-carleson-sum` · example — Balancing density and size levels in the carleson sum
- `rem-carleson-hunt-does-not-include-the-lone-endpoint` · remark — Carleson hunt does not include the lone endpoint

## Your seams

Your pages depend on another group's:

- `carleson-hunt-time-frequency-theorem` requires `schwartz-space-and-the-plancherel-theorem` (group b, batch 15)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 — group reading digest, `phase-2-next-20`

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
