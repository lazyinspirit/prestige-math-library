# Frontier-22 complex Lp and completed-product audit

Date: 2026-09-11

This bounded audit follows the actual published interfaces used by the active
Fourier, Carleson and weak-mixing drafts. Before classification, the canonical
ledger was searched by all four exact IDs below, aliases, the completed-product
section/exceptional-value mechanism, complex component subsequences, smooth
density, and the supplying IDs. None had an index row and none has an alias.
All four files are published.

## Complex Lp dispositions

`thm-complex-lp-completeness-and-almost-everywhere-subsequences`, SHA-256
`f8d05942f799f7b391919477217b8d6c6d457554bc0c6784b5feee491122aae8`,
is clear in the exact used scope. Under its explicit countable-choice
assumption, real and imaginary components of a complex Cauchy sequence are
real `L^p` Cauchy sequences. Real completeness gives their limit classes and
the component inequalities recombine them. For an already convergent
sequence, two successive applications of the real a.e.-subsequence theorem
give a common subsubsequence, and the union of the two measurable exceptional
null sets remains null. This correctly inherits the choice contract missing
from the separately A-P real corollary. It does not consume that corollary
without the hypothesis.

`lem-complex-lp-completeness-density-and-inner-product`, SHA-256
`6a3df71c3499237279b0bf0af0341b95c3512056457d1f44352ceef318db1656`,
is also clear. It is a wrapper applying the preceding theorem under the same
explicit countable choice, the already-cleared finite-simple/smooth-density
supplier, and the already-cleared complex `L^2` pairing theorem. Its finite-p,
Euclidean and equality-case hypotheses match those suppliers. This is the
exact interface used by eight active Fourier/Carleson drafts.

These clears do not re-audit every real `L^p`, Euclidean smoothing or
inner-product supplier.

## Completed-product defect

`thm-tonelli-and-fubini-for-completed-product-measures`, SHA-256
`c400f37f521b68aaccc5291b613e659b9d5553765a09aa557875e75dfaec4246`,
has two related proof/interface gaps and is A-P.

Both parts prove section measurability only for almost every parameter, yet
their displayed iterated integrals use `f_x` and `f^y` for all outer
parameters. On an exceptional parameter the section can be nonmeasurable, so
its inner Lebesgue integral is not defined. The statement and proof never
define the outer integrand to be zero on the measurable exceptional null set.
This is not cosmetic: published
`fs-completed-product-sections-are-measurable-for-every-parameter` supplies the
standard null-strip example whose section at zero is the indicator of a
nonmeasurable set.

In the nonnegative branch, the completion-representative theorem as stated
returns an extended-real base-measurable `g` equal to nonnegative `f` almost
everywhere. Step 2.1 applies Tonelli directly to `g` without first making it
pointwise nonnegative. Replacing it by `g^+=max(g,0)` is base measurable,
nonnegative and still equal to `f` almost everywhere, and repairs this branch.

Repair both statement clauses by naming measurable factor-null exceptional
sets and defining each section-integral function as the inner integral off its
exceptional set and zero on it. In the proof use `g^+` in the nonnegative
case; for the integrable complex case apply the same null-cover/section
argument to the selected product-measurable complex representative and make
the zero assignments explicit. Then the existing uncompleted Tonelli/Fubini,
completion representative, ae-integral and complete-factor measurability
suppliers prove the result. No new Phase-2 item is required.

The four active weak-mixing drafts are not blocked by this wording defect.
`lem-square-integrable-kernels-define-bounded-compact-integral-operators`
chooses a product-measurable kernel representative and explicitly sets the
section integral to zero on a measurable null exceptional set. Its downstream
adjoint/intertwiner/weak-mixing items inherit that operator convention. The
published false-statement item above is itself a bounded clear: its null-strip
refutation directly proves failure at one parameter and uses the completed
theorem only for the correct contextual a.e. contrast.

This audit does not certify all product-measure construction or all completed
function-representative dependencies.
