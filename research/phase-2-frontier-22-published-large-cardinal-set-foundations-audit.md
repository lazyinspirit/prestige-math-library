# Published large-cardinal set-foundation audit

Date: 2026-09-11

## Scope and deduplication

This bounded pass reads seven published interfaces used by the current
large-cardinal branch, including every mathematical statement or definition,
every proof where present, and the exact clauses cited by the active consumers.

| Published item | SHA-256 | Pre-pass index state | Disposition |
|---|---|---|---|
| `thm-hartogs` | `55a8f04cb974fe4a84c0c6fc3219f40c97bec2acc093b2fc24e7568f58244065` | unclassified | bounded clear |
| `thm-mostowski-collapse` | `f7d994c682156f3575478403dc65034e1aedd96d3416ad307a63f8deb5e27f4f` | unclassified | bounded clear |
| `thm-ordinal-arithmetic-monotonicity` | `bdc6e9183e3169f88964538dcfe101b6f85efc2967a59528fdf49ca1936817bd` | unclassified | bounded clear |
| `def-club-subsets-of-ordinals` | `40de141ffa0efb583c1ef728081f49c07c5a3a193ddcd4ef78873c5a5b0efc76` | unclassified | bounded clear |
| `def-cofinality` | `e34c9b2b4b695e0b30dec7653e9bf284f694c47b79d59fdb6fd0b66b6c4aa532` | U-P | bounded clear |
| `def-partition-arrow-notation` | `0a36c551abbad7cb350d6878dd26c686f531a9938528e488b436660f9899c250` | unclassified | bounded clear |
| `def-hereditary-size-and-h-kappa` | `b80834ef4548d9578918f90975b348e0f6f0da0aaad1cad27f5aeb00dc9a11e6` | unclassified | bounded clear |

Before classification, the whole canonical ledger was searched by each exact
ID; the aliases `thm-hartogs-number`, `hartogs-number`, `thm-order-type`,
`mostowski-collapse`, `thm-ordinal-monotonicity`, `def-regular-cardinal` and
`def-singular-cardinal`; and the Hartogs, collapse, ordinal-continuity,
club/cofinality, partition-arrow and hereditary-size mechanisms. It was also
searched for the supplying IDs `lem-cofinality-is-well-defined`,
`thm-cofinality-basics` and `prop-transitive-closure-minimality`.

The first, second, third, fourth, sixth and seventh targets had no classification
row. `def-cofinality` had exactly one U-P row, inherited from the old
Recorded-Not-Proved page reconciliation. That section identifies its
`justified_by` edge as legitimate and records no defect in the definition.
Accordingly this pass moves that one row rather than introducing another.

## Hartogs and order type

`thm-mostowski-collapse` defines the collapse by the unique recursion

`F(a) = {F(b) : b<a}`.

Replacement collects the values. Transfinite induction makes each value an
ordinal; the defining equation gives the forward order implication, and ordinal
well-foundedness/trichotomy gives the converse. The range is therefore an
ordinal order-isomorphic to the given well-order. If two ordinal targets
existed, the smaller would be a proper initial segment of the larger, contrary
to well-order rigidity. This is a definable construction and uses no choice.

`thm-hartogs` first forms the set of every pair `(S,R)` where `S` is a subset of
the given set and `R` well-orders it. Thus it does not choose one well-order for
each subset. Replacement maps each pair to its unique order type. The resulting
set `H` is transitive and hence an ordinal. Every member of `H` injects into the
given set. An injection `H` into that set would place the order type `H` in
`H`, contradicting ordinal irreflexivity; ordinal trichotomy then proves
minimality. The construction is choice-free.

The current coordinate-family argument uses exactly this minimum non-injecting
ordinal to obtain an initial ordinal above `kappa+lambda`, and uses the unique
collapse to assign `otp(x intersect t_alpha)`. Both published clauses supply
those uses.

## Ordinal arithmetic

The induction in `thm-ordinal-arithmetic-monotonicity` handles zero, successor
and limit stages separately. Addition is strictly increasing in its right
argument and weakly increasing in its left; multiplication has the analogous
strict result when the left factor is positive. The proof does not reverse
these asymmetric claims. For a cofinal `D` in a limit ordinal, every earlier
index lies below some member of `D`, so strict monotonicity makes the two
displayed suprema agree. If an addition or positive multiplication at a limit
were a successor, that successor would already be bounded by an earlier value,
contradicting strictness. This proves the exact current uses
`kappa <= kappa+alpha`, strictness in `alpha`, and continuity at limits without
choice.

## Club, cofinality, partition and hereditary-size conventions

`def-cofinality` names the least cofinal-map length whose existence and strictly
increasing witness are supplied by `lem-cofinality-is-well-defined`; it correctly
leaves regularity of that value to `thm-cofinality-basics`. The zero, successor,
regular and singular conventions agree with those suppliers and use no choice.

`def-club-subsets-of-ordinals` tests closure only at nonzero limit accumulation
points below the ambient nonzero limit ordinal and separately requires
unboundedness. This supports the current regular-cardinal club and gap-endpoint
uses without an endpoint ambiguity.

`def-partition-arrow-notation` fixes the arity before quantifying over colorings,
requires a nonzero color cardinal, and states cardinal rather than order-type
homogeneity. Its `n=0`, too-small homogeneous set and target-larger-than-source
boundaries are coherent. The current weak-compactness definition consumes
exactly the unordered-pair, nonzero-color clause.

`def-hereditary-size-and-h-kappa` uses the root-inclusive
`TC({x})`, so the represented object is present in its own hereditary-size
witness. Its equivalence with the `TC(x)` convention is choice-free. For finite
`lambda`, adjoining the root changes the target to `lambda+1<kappa`. For an
infinite initial ordinal `lambda`, the injection

`s(xi)=xi+1` for finite `xi`, and `s(xi)=xi` for `xi>=omega`,

maps `lambda` injectively into `lambda` while avoiding zero; zero can therefore
represent the adjoined root. Restriction proves the reverse implication. This
is exactly the root-inclusive convention used in the current hereditary-rank
and anticipation arguments.

## Frontier impact and limits

All seven published interfaces are adequate for the exact current uses. No
local bypass, new supplier, axiom propagation or Phase-2 pair is required, and
this batch creates no current frontier blocker.

This is a bounded audit of these seven targets and their cited clauses. It does
not certify all published consumers, the full transitive dependency closures or
the rest of the large-cardinal development. No published item was edited, no
new external-source reading was needed, and no independent judgment or
exhaustive discovery claim is made.
