# Frontier-22 published core calculus, Kac--Moody and measure audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit covers high-use direct suppliers in the active 22-pair
frontier and only the exact clauses used there. Before classification, the
complete canonical ledger was searched by every exact target ID, its aliases,
the mechanisms below and the exact supplier IDs. Four targets already had one
classification row each: `thm-continuous-implies-integrable` was A-P, while
`def-measure`, `def-probability-measure` and
`def-ck-and-multi-index-notation-in-several-variables` were U-P. None of the
other seventeen targets had a classification row. Supplier-map and prose
occurrences were not counted as classifications.

The current files and SHA-256 hashes are:

| Published item | SHA-256 |
|---|---|
| `def-kac-moody-category-o` | `1f2975e894903e3a40956aaed97af8298f0c79e6509ebc7ed8a7f44662f6b95f` |
| `prop-kac-moody-root-spaces-are-finite-dimensional` | `e7f163dee458656c8a226ad2c5e49cfb9fba1254e6ae739da24886884401f1f1` |
| `thm-integration-by-parts` | `3e78408080639461fee2e6a09b11270a20355e3102c337b18741d1b249765d59` |
| `thm-exponential-beats-every-polynomial` | `ed1bfa5bb0cefe4cf5e27e3d42bcd6bb659159c75946f7683192d53a85eef5e7` |
| `prop-dirac-measure-is-a-probability-measure` | `e0b81983ae9fa09025dbbb0fe84089675d2b875da94662696496d43193bdd9db` |
| `thm-symmetry-of-higher-mixed-partials` | `97ad567ca8605bd51a8797e0533cf19a29bd9df8f1ae5bb50793dc0d5c88c0c1` |
| `thm-substitution` | `dd10d819c28d699a516aa91247852844d3aff001391cde6632be0c92ed5e8aef` |
| `thm-composition-with-a-continuous-function` | `fca933a1b039143f69dd10b6083a5450f4bffe5e402bf5a2484ecade4ced91e9` |
| `cor-integrability-of-absolute-values-products-and-lattice-operations` | `be4b6928ebb2f7b73bb5d82bc7c17a163fcd7be4d4a8bb6a24a5a9ea2428dfc9` |
| `cor-primitives-of-a-continuous-function` | `61f0942ab51868d435048cd580ce70d08d30902f9e9c948d4eec15ad08c28706` |
| `thm-clairaut-schwarz-mixed-partials` | `5861796855a3760debd1ff04d33f36d58ab3ef8e20ce8b52f243070068821593` |
| `thm-peano-mixed-partial-theorem` | `645f4c4ed373715bddf26b3976026946c9ec49b8d308456304d255d37a6c66ae` |
| `lem-rectangle-second-difference-mean-value-formula` | `40a07d72793ea1e633f2d88050032f69b30236bf57be88debaf59e3a71ea8b02` |
| `def-directional-and-partial-derivatives` | `adcd3f1ed530839aa5fefe29bfa39a20646731dc48baaaa8117cd698206d6e6a` |
| `def-dirac-measure` | `e5035d51edcaff30fd888ce4b191d10d115e533f6783d8efb55d610b0ba88b22` |
| `def-nonnegative-extended-series` | `11c3e63a5f71c4c88c4209bc1d0e403662ad125fc933c93cb555c3c4bbb9892a` |
| `def-measure` | `74573c93ffc6088ee53a894571a504780f230e4d2d4471b9daa307a4c48faa9d` |
| `def-measure-space` | `adb74cbd4a1a2f17089da5e1d1588ec91802b27db47cb3d48833217f74ec902e` |
| `def-probability-measure` | `d27ccb062816799f7da52de7e2bd9452aa9426e76b5f3ac616f7f7693c1864ad` |
| `def-ck-and-multi-index-notation-in-several-variables` | `c73596c02c8feb4bb0c0c4152213f1de3e181760b097948da58831ee0af1f552` |
| `thm-continuous-implies-integrable` | `9f7b29a64854ed16e3f116268e0b8ccfff9f2d57416b9a38e6ad0d86fb318edc` |

## Calculus chain and choice accounting

The product-rule/FTC proof of integration by parts establishes integrability of
both products before integrating the derivative. The substitution proof uses a
primitive on the stated nondegenerate order-convex set, handles both endpoint
orders through the oriented integral and proves composite integrability before
FTC. The primitive corollary's local closed interval construction covers
interior and one-sided endpoint derivatives. The composition theorem's single
per-index oscillation estimate correctly replaces a split into good and bad
index sets, and the absolute-value/product/lattice corollary then uses only
finite algebra and integral linearity/monotonicity.

The existing A-P row for `thm-continuous-implies-integrable` treated its direct
call to `thm-heine-cantor-r` as an undeclared inherited countable-choice defect.
That supplier's published Statement is unconditional, its body explicitly
identifies its sole countable-choice step and declares
`def-countable-choice`, and the canonical index already classifies that exact
supplier bounded clear. Under the canonical rule that a correct implicit use
of an adequate published supplier is clear, the missing repeated direct edge
is optional metadata. The continuous-integrability proof's uniform-partition
calculation is otherwise complete. Its A-P history is retained here while the
item moves to bounded clear. For the same reason, no transitive CC rows are
created on integration by parts, composition, the lattice corollary, primitive
existence or substitution. The distinct alias collision already recorded on
`thm-algebra-of-derivatives` remains A-P, but these consumers use its exact ID
and sound product clause, so that metadata defect does not infect them.

Classification: seven new bounded clears and one A-P-to-clear move.

## Mixed partials

The rectangle lemma applies the one-variable mean-value theorem first to the
horizontal difference and then to the resulting partial derivative in the
vertical variable. Peano's theorem obtains a joint limit of rectangle
quotients from continuity of `f_xy` and the iterated limit from existence of
`f_yx`; uniqueness gives equality. Clairaut applies this pointwise under the
ordered `C^2` convention. Adjacent swaps then generate every finite
permutation, and the `C^k` definition supplies the remaining outer
derivatives. The definition deliberately does not assume mixed-partial
symmetry in advance.

Classification: four new bounded clears and two U-P-to-clear moves.

## Dirac and measure foundations

The extended nonnegative series is a well-defined increasing sequence of
partial sums followed by the complete-lattice supremum. Measure, measure-space
and probability-measure definitions use it coherently. For a disjoint sequence
of sets, the distinguished point lies in at most one member, so the Dirac sum
is identically zero or eventually one; this proves countable additivity and
total mass one without selecting a family.

Classification: five new bounded clears and one U-P-to-clear move.

## Kac--Moody and exponential interfaces

The triangular grading gives one sign for every nonzero Kac--Moody root. At
fixed height, right-nested words in the finitely many simple generators span,
giving the stated finite bound; on a simple-root line only the length-one word
survives. In category O, each vector has finite weight support and only finitely
many positive root degrees can land back in a finite union of downward cones.
Finite Lagrange interpolation separates the finitely many weights of a vector,
so submodules and quotients retain the asserted weight decompositions and
bounds.

For exponential domination, retaining the `(m+1)`st nonnegative series term
gives the displayed constant multiple of `1/x`; the epsilon definition at
positive infinity proves that bound tends to zero. No logarithm, arbitrary
selection or unstated limit theorem is required.

Classification: three new bounded clears.

## Limits

This audit checks the displayed target claims and the exact dependency clauses
used by active consumers. It does not certify every clause of the transitive
real-analysis, measure-theory or Kac--Moody closures. No external source was
newly consulted, no published item was edited and no independent judge result
or exhaustive-discovery claim is made. No current Step-3 acceptance blocker is
identified: active consumers that mention choice already carry AC or CC, and
the reviewed local calculations are complete.
