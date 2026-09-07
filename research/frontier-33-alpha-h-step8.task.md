# Step 8 adjudication — group **h**, run `frontier-33`

You are the group Alpha for batches **19**, **20**: 4 A/B pair(s), 8 page(s), 127 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-33-alpha-h-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-33-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 19 | `formal-set-theoretic-syntax-structures-and-satisfaction` | A | foundations | 655 | `construction-of-the-natural-numbers` |
| 19 | `formal-set-theoretic-syntax-structures-and-satisfaction-examples` | B | foundations | 656 | `formal-set-theoretic-syntax-structures-and-satisfaction` |
| 19 | `well-founded-relations-rank-and-the-cumulative-hierarchy` | A | foundations | 661 | `ordinals-and-transfinite-recursion` |
| 19 | `well-founded-relations-rank-and-the-cumulative-hierarchy-examples` | B | foundations | 662 | `well-founded-relations-rank-and-the-cumulative-hierarchy` |
| 20 | `weak-choice-principles-and-sierpinskis-theorem` | A | foundations | 665 | `cardinal-arithmetic-and-cofinality`, `filters-and-ultrafilters`, `compactness-in-metric-spaces` |
| 20 | `weak-choice-principles-and-sierpinskis-theorem-examples` | B | foundations | 666 | `weak-choice-principles-and-sierpinskis-theorem` |
| 20 | `club-stationary-sets-and-pressing-down` | A | foundations | 669 | `cardinal-arithmetic-and-cofinality` |
| 20 | `club-stationary-sets-and-pressing-down-examples` | B | foundations | 670 | `club-stationary-sets-and-pressing-down` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `formal-set-theoretic-syntax-structures-and-satisfaction` — Formal Set-Theoretic Syntax, Structures, and Satisfaction (19 item(s))

- `def-set-signature-and-finite-syntax-strings` · definition — Set signatures and finite syntax strings
- `def-set-coded-terms-and-formulas` · definition — Terms and formulas as finite set codes
- `lem-unique-parsing-of-set-coded-syntax` · lemma — Unique parsing of finite syntax
- `thm-structural-recursion-on-set-coded-syntax` · theorem — Structural induction and recursion on syntax
- `def-free-variables-and-syntactic-substitution` · definition — Free variables and free-for substitution
- `def-set-structures-and-variable-assignments` · definition — Structures and variable assignments
- `def-term-denotation-in-a-set-structure` · definition — Term denotation
- `thm-set-structure-satisfaction-recursion` · theorem — Existence and uniqueness of set satisfaction
- `lem-satisfaction-coincidence` · lemma — Coincidence for term values and satisfaction
- `lem-term-substitution-denotation` · lemma — Term substitution commutes with evaluation
- `lem-formula-substitution-satisfaction` · lemma — Free-for substitution commutes with satisfaction
- `lem-fresh-bound-variable-renaming` · lemma — Fresh bound-variable renaming preserves truth
- `prop-capture-avoiding-substitution` · proposition — Canonical capture-avoiding substitution
- `cor-semantic-equivalence-under-substitution` · corollary — Semantic equivalence is preserved by substitution
- `def-theories-models-and-semantic-consequence` · definition — Theories, models and semantic consequence
- `prop-isomorphism-invariance-of-satisfaction` · proposition — Isomorphisms preserve satisfaction
- `def-relativization-to-a-definable-class` · definition — Relativization to sets and definable classes
- `thm-relativization-and-set-satisfaction` · theorem — Relativization agrees with induced set satisfaction
- `rem-tarski-truth-definition-interface` · remark — Set truth and the Tarski interface

### `formal-set-theoretic-syntax-structures-and-satisfaction-examples` — Formal Set-Theoretic Syntax, Structures, and Satisfaction: Examples and Counterexamples (5 item(s))

- `ex-membership-formula-parsing-and-assignment` · example — Parsing and evaluating a membership formula
- `cex-variable-capture-changes-satisfaction` · counterexample — Variable capture changes satisfaction
- `ex-relativizing-to-the-empty-class` · example — Relativization to the empty class
- `cex-truth-at-one-assignment-does-not-survive-substitution` · counterexample — Agreement at one assignment is insufficient
- `fs-v-has-a-definable-truth-predicate` · false-statement — V has a definable truth predicate

### `well-founded-relations-rank-and-the-cumulative-hierarchy` — Well-Founded Relations, Rank, and the Cumulative Hierarchy (30 item(s))

- `def-well-founded-setlike-relations` · definition — Well-founded and setlike relations
- `def-accessible-pointed-membership-graphs` · definition — Accessible pointed membership graphs
- `lem-finite-predecessor-closure-is-a-set` · lemma — Finite predecessor closures are sets
- `thm-induction-on-well-founded-relations` · theorem — Induction on well-founded setlike relations
- `lem-compatible-well-founded-recursion-attempts` · lemma — Compatible recursion attempts
- `thm-recursion-on-well-founded-setlike-relations` · theorem — Recursion on well-founded setlike relations
- `def-transitive-closure-of-a-set` · definition — Transitive closure of a set
- `prop-transitive-closure-minimality` · proposition — Minimality and closure laws of TC
- `def-rank-of-a-well-founded-relation` · definition — Ordinal rank of a well-founded relation
- `prop-ordinal-ranking-characterizes-well-foundedness` · proposition — Ordinal rankings characterize well-foundedness
- `prop-well-foundedness-and-descending-sequences` · proposition — Descending sequences and the choice hypothesis
- `def-cumulative-hierarchy-stages` · definition — The cumulative hierarchy
- `prop-cumulative-hierarchy-transitivity-and-growth` · proposition — Transitivity and growth of hierarchy stages
- `thm-foundation-equivalent-to-hierarchy-exhaustion` · theorem — Equivalent forms of Foundation
- `def-membership-rank-of-a-set` · definition — Membership rank under Foundation
- `thm-membership-rank-and-hierarchy-levels` · theorem — Rank characterizes hierarchy membership
- `cor-universe-is-the-class-union-of-its-stages` · corollary — The universe is the class union of its stages
- `prop-ranks-of-ordinals-and-hierarchy-stages` · proposition — Ranks of ordinals and hierarchy stages
- `def-extensional-relation-and-collapse-map` · definition — Extensional relations and collapse maps
- `lem-extensional-collapse-is-injective` · lemma — An extensional collapse is injective
- `thm-mostowski-collapse-for-extensional-relations` · theorem — Mostowski collapse for extensional relations
- `cor-well-founded-pointed-graphs-have-unique-decorations` · corollary — Well-founded pointed graphs have unique decorations
- `prop-minimum-rank-selection-and-collection` · proposition — Minimum-rank selection and Collection
- `def-hereditary-size-and-h-kappa` · definition — Hereditary size and H_kappa
- `lem-small-transitive-sets-have-small-ranks` · lemma — A small transitive set bounds its ranks
- `thm-h-kappa-is-a-transitive-set` · theorem — H_kappa is a transitive subset of V_kappa
- `cor-hereditary-size-exhausts-the-universe-under-choice` · corollary — Hereditary size exhausts V under Choice
- `prop-hereditarily-finite-sets-are-v-omega` · proposition — H_omega equals V_omega
- `def-grothendieck-universe-closure-convention` · definition — Grothendieck universe closure convention
- `rem-grothendieck-universe-orientation` · remark — Grothendieck universes and relative size

### `well-founded-relations-rank-and-the-cumulative-hierarchy-examples` — Well-Founded Relations, Rank, and the Cumulative Hierarchy: Examples and Counterexamples (5 item(s))

- `ex-first-hierarchy-stages-and-ranks` · example — First hierarchy stages and their ranks
- `ex-collapse-of-a-nontransitive-well-founded-relation` · example — Collapsing a relation that is not transitive
- `cex-extensionality-is-needed-for-injective-collapse` · counterexample — Extensionality is needed for injective collapse
- `ex-singleton-rank-and-hereditary-size` · example — A singleton can have large rank and hereditary size
- `fs-v-is-a-set` · false-statement — V is a set

### `weak-choice-principles-and-sierpinskis-theorem` — Weak Choice Principles and Sierpiński's Theorem (26 item(s))

- `def-choice-for-pairs-and-countable-finite-choice` · definition — Choice for pairs and countable finite choice
- `def-multiple-and-dependent-multiple-choice` · definition — Multiple choice and dependent multiple choice
- `thm-choice-implies-dependent-implies-countable-choice` · theorem — AC implies DC implies countable choice
- `lem-starting-point-free-dependent-choice` · lemma — Recovering a prescribed starting point in DC
- `thm-dependent-choice-and-finite-multiple-selections` · theorem — DC and finite multiple selections
- `def-families-of-finite-character` · definition — Families of finite character
- `thm-tukey-finite-character-equivalent-to-choice` · theorem — Tukey finite character is equivalent to AC
- `lem-multiple-choice-produces-maximal-antichains` · lemma — Multiple choice produces maximal antichains
- `lem-antichains-well-order-linearly-ordered-sets` · lemma — Maximal antichains well-order linearly ordered sets
- `lem-bounded-hierarchy-for-the-multiple-choice-argument` · lemma — A bounded hierarchy for the multiple-choice argument
- `thm-multiple-choice-equivalent-to-choice-in-zf` · theorem — Multiple choice is equivalent to AC in ZF
- `def-dedekind-infinite-set` · definition — Dedekind-infinite and Dedekind-finite sets
- `thm-dedekind-infinite-iff-countable-subset` · theorem — Dedekind infinitude is equivalent to a countable subset
- `thm-countable-choice-gives-countable-subsets` · theorem — Countable choice gives countable subsets of infinite sets
- `cor-countable-choice-and-omega-one-cofinality` · corollary — Countable choice makes omega-one regular
- `thm-dependent-choice-detects-non-well-orders` · theorem — DC detects non-well-orders by descending sequences
- `def-local-gch-for-arbitrary-sets` · definition — Local GCH for arbitrary sets
- `lem-canonical-sequence-coding-for-well-orders` · lemma — Canonical finite-sequence coding from a supplied well-order
- `thm-halbeisen-shelah-no-powerset-sequence-injection` · theorem — No injection of a power set into finite sequences
- `lem-local-gch-absorbs-sums-and-squares` · lemma — Local GCH absorbs sums and squares
- `lem-hartogs-iterated-powerset-bounds` · lemma — Hartogs bounds in iterated power sets
- `lem-powerset-fibres-force-well-orderability` · lemma — Power-set fibres force well-orderability
- `lem-local-gch-hartogs-dichotomy` · lemma — The local-GCH Hartogs dichotomy
- `thm-specker-two-local-gch` · theorem — Specker’s two-local-GCH theorem
- `thm-sierpinski-arbitrary-set-gch-implies-choice` · theorem — Sierpiński: arbitrary-set GCH implies AC in ZF
- `rem-weak-choice-nonimplication-destinations` · remark — Nonimplication ledger and model destinations

### `weak-choice-principles-and-sierpinskis-theorem-examples` — Weak Choice Principles and Sierpiński's Theorem: Examples and Counterexamples (6 item(s))

- `ex-weak-choice-implication-map` · example — A choice-strength implication map
- `ex-countable-choice-spent-on-enumerations` · example — Where countable-union proofs spend choice
- `ex-dependent-choice-partial-tuples` · example — Dependent choices as extending partial tuples
- `ex-finite-character-partial-choice-graphs` · example — Partial choice graphs have finite character
- `ex-local-gch-at-omega-and-its-power-set` · example — The two local hypotheses at omega
- `fs-gch-on-alephs-is-a-choice-free-formulation` · false-statement — The aleph equation carries no well-orderability assertion

### `club-stationary-sets-and-pressing-down` — Club, Stationary Sets, and Pressing Down (29 item(s))

- `def-club-subsets-of-ordinals` · definition — Closed unbounded subsets of ordinals
- `lem-closure-points-on-regular-cardinals` · lemma — Closure points form a club
- `lem-limit-points-of-unbounded-sets` · lemma — Limit points of an unbounded set form a club
- `thm-small-intersections-of-clubs` · theorem — Intersections of fewer than the cofinality many clubs
- `def-club-filter-and-nonstationary-ideal` · definition — The club filter and nonstationary ideal
- `prop-basic-stationary-set-calculus` · proposition — Basic stationary-set calculus
- `def-diagonal-club-intersection` · definition — Diagonal intersection and union
- `thm-diagonal-intersection-of-clubs` · theorem — The diagonal intersection of clubs is club
- `def-regressive-function-on-ordinals` · definition — Regressive functions on ordinals
- `thm-fodor-pressing-down` · theorem — Fodor’s pressing-down lemma
- `def-normal-filter-on-a-regular-cardinal` · definition — Normal filters on a regular cardinal
- `thm-normality-and-positive-pressing-down` · theorem — Normality is equivalent to positive pressing down
- `cor-club-filter-is-least-normal-tail-filter` · corollary — The club filter is the least normal tail filter
- `def-normal-ordinal-function` · definition — Normal ordinal functions
- `thm-clubs-and-normal-enumerations` · theorem — Clubs are ranges of normal enumerations
- `thm-normal-function-fixed-points-form-a-club` · theorem — Fixed points of a normal function form a club
- `def-cofinality-strata-and-stationary-trace` · definition — Cofinality strata, trace, and reflection
- `thm-regular-cofinality-strata-are-stationary` · theorem — Regular cofinality strata are stationary
- `lem-stationary-set-minus-its-trace` · lemma — Removing the trace preserves a stationary remainder
- `lem-unbounded-stationary-fibres-yield-a-partition` · lemma — Unboundedly many stationary fibres yield a partition
- `lem-splitting-stationary-sets-of-fixed-cofinality` · lemma — Splitting stationary sets of fixed smaller cofinality
- `lem-splitting-stationary-regular-cardinals` · lemma — Splitting a stationary set concentrated on regular cardinals
- `thm-solovay-stationary-partition` · theorem — Solovay’s stationary partition theorem
- `cor-club-filter-not-an-ultrafilter` · corollary — The club filter is never an ultrafilter
- `def-stationary-antichains-modulo-nonstationary` · definition — Stationary antichains modulo the nonstationary ideal
- `lem-skolem-witness-closure-on-a-cardinal` · lemma — Skolem witness closure on a cardinal
- `thm-elementary-initial-segments-form-a-club` · theorem — Elementary initial segments form a club
- `thm-stationarity-via-elementary-initial-segments` · theorem — Stationarity characterized by elementary initial segments
- `rem-square-and-club-guessing-orientation` · remark — Square and club-guessing orientation

### `club-stationary-sets-and-pressing-down-examples` — Club, Stationary Sets, and Pressing Down: Examples and Counterexamples (7 item(s))

- `ex-club-tails-limits-and-diagonal` · example — Tails, limits, and diagonal intersection
- `ex-stationary-cofinality-strata` · example — Cofinality strata and stationary costationary sets
- `cex-unbounded-domain-does-not-suffice-for-fodor` · counterexample — An unbounded regressive domain without a stationary fibre
- `ex-transfinite-subway-pressing-down` · example — The transfinite subway argument
- `ex-reflection-of-cofinality-omega-and-omega-one` · example — A trace computation for cofinality strata
- `fs-countable-intersections-of-clubs-are-always-club` · false-statement — Countable intersections of clubs are always club
- `ex-normal-function-fixed-points-at-omega-one` · example — Normal functions and fixed points at omega-one

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-33-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-33`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-33-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-8 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-33-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-33-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-33-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-33-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
