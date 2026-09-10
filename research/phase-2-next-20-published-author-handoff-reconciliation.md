# Original-next-20 published author-handoff reconciliation

Date: 2026-09-11.

Scope: four exact published proof concerns reported during active authoring or
independent review: the maximal-function path into the Carleson single-tree
draft, the complex binomial theorem, finite balls for word metrics, and RMK
uniqueness among Radon measures. This is a bounded read of the complete current
targets and the supplier clauses named below. It is not a whole-closure audit or
an exhaustive search for published defects. No published item was edited.

Before classification, the entire canonical ledger was searched by exact ID,
aliases, reported proof mechanism and supplying IDs. The Marcinkiewicz item had
one existing U-P index row and extensive existing evidence; it is moved rather
than duplicated. The binomial and word-metric IDs had no classification row.
The word-metric mechanism had been reported twice in the historical
`frontier-18-alpha-step8-d.md` judge reconciliation and is consolidated here
into one canonical row. The RMK ID was absent from the index; its DC-qualified
cutoff mechanism was already recorded on two distinct published consumers, but
neither record covers this theorem. All four targets have no relevant alias that
identifies another canonical item.

## Marcinkiewicz interpolation and the live Euclidean specialization

Target:
`thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity`, full
current read, SHA-256
`3df42b651df72ec35a6def274be1f0d1ec7b07416924a74fe339bd2ccecdcafc`.

The theorem states the result for an arbitrary measure space. Proof 4.1 swaps
the integrations over `X` and the positive real axis by Tonelli. The only
published Tonelli theorem for this use,
`thm-tonelli-theorem-for-sigma-finite-product-spaces`, requires both factors to
be sigma-finite, and the proof does not establish sigma-finiteness of the
arbitrary measure on `X`. This is genuine general-proof debt. The earlier
ledger evidence also records the omitted tail-integrability inequality in
proof 2.1 and the need to state the proof-1.1 endpoint estimate outside one null
set. The theorem's conclusion is standard and can be repaired on arbitrary
measure spaces by the already-recorded simple-function and monotone-convergence
route, so this finding is A-P rather than a counterexample to the statement.
The existing U-P row moves to A-P after this full-target reconciliation.

The exact live path is
`lem-carleson-single-tree-estimate` ->
`cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded` -> the
Marcinkiewicz theorem. The corollary was read completely at SHA-256
`70ec3cb76633aa1c835cc2fd3eea7affb6cb1738dece268f7c2d4e76348e287f`.
It assumes countable choice and applies interpolation only to Lebesgue measure
on `R^n`. Under that assumption,
`prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets` supplies
sigma-finiteness. Consequently the printed Tonelli calculation is valid after
specialization to this exact measure space; the tail estimate follows directly
from `|f| <= a^(1-p)|f|^p` on `{|f|>a}`, and the endpoint estimate is used only
as a measure inequality. These are correct implicit uses of adequate published
interfaces, so this Marcinkiewicz defect creates no additional live Carleson
blocker. It does not close the other explicit, substantial gaps in the draft
single-tree proof.

Repair strategy and suppliers: for the general theorem, retain the existing
simple-approximation/MCT repair using published
`thm-nonnegative-measurable-functions-admit-increasing-simple-approximations`
and `thm-monotone-convergence-for-the-integral`, with the recorded integral-
convention qualification. For the Euclidean corollary, make the sigma-finite
specialization and tail inequality explicit if desired. No new Phase-2 item is
needed.

## Complex binomial base case

Target: `lem-binomial-theorem-over-complex-numbers`, full current read,
SHA-256
`f764866444dd5d6d0e261676c3abdef8f52b5f58fa932ed95163f5b94051d117`.

Proof 1.1 says that at `n=0` both sides are the empty-sum convention `1`.
The right side is not empty: the index condition `k<=0` leaves the single term
`k=0`. Its value is nevertheless `1`, because
`binom(0,0)=1`, `z^0=w^0=1`, and the canonical natural embeds `1` as the
complex multiplicative identity. Thus the statement is true and the defect is
a false base-case justification. Repair proof 1.1 by computing this single
term and identifying only the left side as a zeroth power.

The induction steps are terse but state the standard complete algebraic route:
multiply by `z+w`, split and shift the two initial-segment sums, apply Pascal's
rule including the endpoints, and group equal powers. The published generic
finite-monoid recursion and generalized commutativity can be read additively
in the complex additive commutative monoid. Their implicit use is adequate
under the canonical rule and is not a separate dependency defect. Exact
existing suppliers are `def-binomial-coefficient`,
`def-complex-integer-powers`, `def-monoid-finite-product`,
`thm-generalised-associativity`, `thm-pascals-rule`, and
`def-canonical-natural`. No new Phase-2 item is needed. Classification: new
A-P row for the one false proof sentence.

## Infinite generating set and the identity

Target:
`prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite`,
full current read, SHA-256
`d5700e0a8ca22c52c4246061a1e0c33501460705498051d5f1862bf11c57d80a`.

Proof 2.1 says that every element of `S union S^{-1}` has word length `1`.
The definitions allow the identity to lie in `S`, and
`def-word-length-with-respect-to-a-generating-set` explicitly gives it word
length `0`. The displayed reason is therefore false. The conclusion remains
valid: every generator or inverse has a one-letter expression and hence word
length at most `1`; all lie in the open ball of radius `2`. If `S` is infinite,
then `S union S^{-1}` is infinite because it contains `S`. The finite-generator
direction through local finiteness is unaffected.

Repair proof 2.1 by replacing `has word length 1` with `has word length at most
1`, or exclude the identity before asserting equality. The exact published
definition already supplies this argument; the listed
`lem-word-length-is-well-defined-and-satisfies-the-length-laws` supplies the
zero-length identity clause as well. No new Phase-2 item is needed.
Classification: new A-P row, consolidating the two matching historical judge
reports and the current author handoff into one canonical record.

## RMK uniqueness and the cutoff hypothesis

Target: `thm-rmk-uniqueness-among-radon-measures`, full current read, SHA-256
`c15056e9f2a4465edd321aa73d8248e34110ef79b2a8b7f13227708dd3c23462`.

Proof 1.1 invokes
`lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set` to compare the
two measures on a compact set and an open neighbourhood. The complete cutoff
supplier, SHA-256
`d135daf41aa0aff042fcade715e676d08c413dff89ccf3d9db0b463a1d2fb17b`,
explicitly assumes Dependent Choice because it uses the published Urysohn
lemma. The uniqueness theorem has no DC hypothesis in its Statement or Given.
This is a genuine inherited-hypothesis defect, not a missing redundant edge:
the named supplier's applicable clause is conditional on DC.

Add and declare `def-dependent-choice`, or prove a cutoff for the needed scope
without that principle. Once the cutoff is available, the compact/open/Borel
comparison in proofs 1.1--2.1 is sound, including infinite measure values. The
live Fourier consumer `cor-uniqueness-of-finite-borel-measures-from-their-
fourier-transforms` assumes full AC, so it supplies DC and is not blocked by
this published contract omission. Existing published suppliers suffice and no
new Phase-2 pair is needed. Classification: one new A-P row. The originating
independent-review handoff is
`research/phase-2-fourier-support-2-alpha-a-5a.md`, Published finding pending
canonical merge.

## Index effect

One existing U-P row moves to A-P and two new published IDs enter A-P. During
this reconciliation, the separately evidenced Fourier Step-5A finding for
`thm-rmk-uniqueness-among-radon-measures` also entered A-P after an exact-ID and
cutoff-mechanism check. Starting from the mechanically verified 2,431-ID index,
the resulting state is U-P 1,406, U-C 15, A-R 187, A-P 173 and 653 bounded
clears, for 2,434 unique indexed published IDs. The current publication census
is 15,930, leaving 13,496 IDs outside the index. These counts require mechanical
verification after the ledger edit.
