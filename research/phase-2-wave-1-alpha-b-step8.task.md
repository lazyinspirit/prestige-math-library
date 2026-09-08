# Step 8 adjudication — group **b**, run `phase-2-wave-1`

You are the group Alpha for batches **14**, **15**: 3 A/B pair(s), 6 page(s), 100 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/phase-2-wave-1-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-wave-1-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 14 | `deduction-soundness-completeness-and-compactness` | A | foundations | 657 | `formal-set-theoretic-syntax-structures-and-satisfaction`, `countability-and-uncountability`, `cardinal-arithmetic-and-cofinality` |
| 14 | `deduction-soundness-completeness-and-compactness-examples` | B | foundations | 658 | `deduction-soundness-completeness-and-compactness` |
| 14 | `set-theoretic-trees-delta-systems-and-diamond` | A | foundations | 671 | `club-stationary-sets-and-pressing-down`, `filters-and-ultrafilters` |
| 14 | `set-theoretic-trees-delta-systems-and-diamond-examples` | B | foundations | 672 | `set-theoretic-trees-delta-systems-and-diamond` |
| 15 | `dependent-choice-and-the-complete-metric-baire-theorem` | A | foundations | 664.1 | `relations-functions-and-quotients`, `completeness-and-uniform-continuity` |
| 15 | `dependent-choice-and-the-complete-metric-baire-theorem-examples` | B | foundations | 664.2 | `dependent-choice-and-the-complete-metric-baire-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `deduction-soundness-completeness-and-compactness` — Deduction, Soundness, Completeness, and Compactness (35 item(s))

- `def-set-coded-formal-derivation` · definition — Formal proofs from sentence theories
- `def-first-order-syntactic-consistency` · definition — Consistency and syntactic completeness
- `lem-derivation-finite-support-and-concatenation` · lemma — Finite support, weakening, and composition of derivations
- `lem-hilbert-propositional-and-equality-rules` · lemma — Derived propositional, quantifier and equality rules
- `thm-first-order-sentence-deduction` · theorem — Deduction theorem for sentence assumptions
- `thm-set-language-first-order-soundness` · theorem — Soundness for arbitrary set signatures
- `lem-proof-fresh-constant-elimination` · lemma — Fresh constants may be eliminated from a finite proof
- `lem-consistent-sentence-decision` · lemma — A consistent theory can decide one sentence
- `def-henkin-witness-extension` · definition — Witness constants and Henkin theories
- `lem-fresh-henkin-axiom-preserves-consistency` · lemma — Adding one fresh witness preserves consistency
- `lem-countable-henkin-syntax-coding` · lemma — Canonical natural-number codes for countable Henkin syntax
- `thm-countable-lindenbaum-henkin-completion` · theorem — Canonical countable Lindenbaum–Henkin construction
- `lem-complete-henkin-theory-truth-rules` · lemma — Boolean and witness closure of a complete Henkin theory
- `lem-henkin-term-equality-congruence` · lemma — Provable equality is a congruence on closed terms
- `def-henkin-closed-term-model` · definition — The closed-term quotient structure
- `thm-henkin-closed-term-truth-lemma` · theorem — Truth lemma for the term quotient
- `thm-countable-first-order-completeness` · theorem — Completeness for explicitly countable set languages
- `thm-countable-first-order-compactness` · theorem — Compactness for explicitly countable languages
- `def-elementary-set-structure-embedding` · definition — Elementary embeddings, substructures and chains
- `thm-tarski-vaught-set-structure-test` · theorem — Tarski–Vaught witness test
- `def-skolem-witness-hull` · definition — Witness functions and their hulls
- `lem-skolem-hull-size-and-elementarity` · lemma — Skolem hulls are small elementary substructures
- `thm-downward-lowenheim-skolem-with-parameters` · theorem — Downward Löwenheim–Skolem with parameters
- `thm-elementary-ordinal-chain-union` · theorem — Unions of nonempty elementary chains
- `thm-well-ordered-language-henkin-completeness` · theorem — Well-ordered language completeness with a size bound
- `def-elementary-diagram-of-set-structure` · definition — Elementary diagrams
- `lem-elementary-diagram-embedding` · lemma — Models of the elementary diagram yield elementary embeddings
- `thm-upward-lowenheim-skolem-with-choice` · theorem — Upward Löwenheim–Skolem, including elementary extensions
- `cor-arbitrarily-large-finite-models-give-infinite-model` · corollary — Arbitrarily large finite models imply an infinite model
- `def-nonstandard-natural-number-structure` · definition — Nonstandard models of the complete natural-number theory
- `thm-nonstandard-natural-number-model-exists` · theorem — A countable nonstandard model has an element above all numerals
- `cor-countable-los-vaught-test` · corollary — The infinite-model categoricity test for completeness
- `def-coded-first-order-zf-theory` · definition — The set of first-order ZF axiom sentences
- `lem-models-of-coded-zf-are-infinite` · lemma — Every set model of first-order ZF has infinitely many elements
- `rem-first-order-choice-strength-boundary` · remark — Choice ledger and arbitrary-language boundary

### `deduction-soundness-completeness-and-compactness-examples` — Deduction, Soundness, Completeness, and Compactness: Examples and Counterexamples (6 item(s))

- `ex-first-order-sentence-deduction` · example — A two-premise formal deduction
- `cex-generalization-after-open-assumption` · counterexample — The deduction theorem needs its free-variable restriction
- `ex-seed-constant-for-empty-signature` · example — The empty signature still needs a nonempty term domain
- `cex-isomorphic-inclusion-need-not-be-elementary` · counterexample — Isomorphism does not make an inclusion elementary
- `ex-nonstandard-element-above-every-numeral` · example — Compactness produces a genuinely nonstandard element
- `fs-categorical-first-order-zf` · false-statement — FALSE: consistent first-order ZF has a unique model up to isomorphism

### `set-theoretic-trees-delta-systems-and-diamond` — Set-Theoretic Trees, Delta Systems, and Diamond (42 item(s))

- `def-set-theoretic-tree-and-levels` · definition — Set-theoretic trees, heights, levels, branches and antichains
- `lem-tree-predecessors-and-common-extensions` · lemma — Tree predecessors and compatibility
- `def-kappa-tree-and-tree-property` · definition — κ-trees and the tree property
- `def-normal-splitting-set-theoretic-tree` · definition — Normal and splitting trees
- `lem-normal-set-theoretic-tree-sequence-representation` · lemma — Normal trees have faithful sequence representations
- `def-aronszajn-suslin-and-special-tree` · definition — Aronszajn, Suslin and special trees
- `thm-konig-finite-level-tree` · theorem — König’s lemma for finite levels
- `lem-countable-normal-tree-cofinal-branch` · lemma — Branches through countable normal trees of limit height
- `lem-splitting-cofinal-branch-gives-antichain` · lemma — Splitting turns an uncountable branch into an antichain
- `lem-bounded-rational-tree-limit-extension` · lemma — Rational bounds at countable limit levels
- `thm-special-aronszajn-tree-construction` · theorem — A special Aronszajn tree exists
- `def-finite-delta-system` · definition — Delta systems and roots
- `thm-regular-uncountable-finite-delta-system` · theorem — The finite delta-system lemma at a regular uncountable cardinal
- `cor-indexed-omega-one-delta-system` · corollary — The indexed delta-system lemma
- `def-poset-ccc-and-knaster-property` · definition — Compatibility, ccc and Knaster for posets
- `def-finite-support-poset-product` · definition — Finite-support products
- `lem-finite-knaster-poset-products` · lemma — Finite products preserve Knaster
- `thm-finite-support-knaster-poset-products` · theorem — Finite-support products of Knaster posets are Knaster
- `lem-cocountable-ultrafilter-on-uncountable-set` · lemma — An ultrafilter containing all cocountable subsets
- `lem-aronszajn-finite-petals-incomparability` · lemma — Two finite disjoint petals can be made cross-incomparable
- `def-finite-aronszajn-specialization-poset` · definition — Finite specializing conditions
- `thm-aronszajn-specialization-poset-ccc` · theorem — Finite specialization of an Aronszajn tree is ccc
- `lem-specialization-dense-domains-and-union` · lemma — Dense domains and directed unions of specializing conditions
- `def-diamond-on-omega-one` · definition — Diamond on ω1
- `prop-diamond-implies-continuum-hypothesis` · proposition — Diamond implies CH
- `def-ostaszewski-club-principle` · definition — The Ostaszewski club principle
- `prop-diamond-implies-ostaszewski-club` · proposition — Diamond implies clubsuit
- `def-jensen-square-sequence` · definition — Jensen’s square principle with its order-type bound
- `lem-countable-tree-antichain-sealing` · lemma — Seal a maximal antichain at a countable limit level
- `lem-club-tree-coding-antichain-reflection` · lemma — A club of correctly coded maximal-antichain restrictions
- `thm-diamond-constructs-normal-suslin-tree` · theorem — Diamond constructs a normal splitting Suslin tree
- `thm-splitting-suslin-tree-poset-square-not-ccc` · theorem — A ccc tree poset whose square is not ccc
- `def-suslin-line-order-interface` · definition — Suslin lines in order language
- `rem-kurepa-suslin-line-tree-interface` · remark — Kurepa’s line/tree correspondence: downstream proof contract
- `def-partition-arrow-notation` · definition — Partition arrows and homogeneous sets
- `thm-infinite-ramsey-finite-colors` · theorem — Infinite Ramsey theorem for fixed finite arity and colors
- `def-finite-beth-iteration-above-a-cardinal` · definition — Finite beth iteration above an infinite cardinal
- `lem-erdos-rado-pattern-closure-and-end-homogeneity` · lemma — Pattern closure yields an end-homogeneous sequence
- `thm-general-cardinal-erdos-rado` · theorem — Erdős–Rado for arbitrary infinite cardinals and finite arity
- `rem-ramsey-and-erdos-rado-orientation` · remark — Ramsey and Erdős–Rado: exact orientation obligations
- `def-pruned-tree-products-and-dense-matrices` · definition — Finite products of pruned trees and dense matrices
- `rem-halpern-lauchli-finite-tree-statement` · remark — Halpern–Läuchli matrix statement and proof destination

### `set-theoretic-trees-delta-systems-and-diamond-examples` — Set-Theoretic Trees, Delta Systems, and Diamond: Examples and Counterexamples (7 item(s))

- `ex-binary-tree-and-konig-branch` · example — The binary tree and a cofinal branch
- `cex-countable-levels-do-not-suffice-for-konig` · counterexample — Countable levels do not suffice for König’s lemma
- `ex-uncountable-delta-system-with-one-point-root` · example — An explicit uncountable delta system
- `cex-infinite-sets-delta-system-hypothesis` · counterexample — Finite sets cannot be replaced by arbitrary countable sets
- `ex-finite-specialization-compatibility` · example — Agreement on overlap is insufficient for specialization compatibility
- `ex-diamond-suslin-ccc-square` · example — Under diamond, ccc fails to survive a square
- `fs-every-omega-one-tree-has-a-cofinal-branch` · false-statement — FALSE: every ω1-tree has a cofinal branch

### `dependent-choice-and-the-complete-metric-baire-theorem` — Dependent Choice and the Complete-Metric Baire Theorem (9 item(s))

- `def-serial-relation-dependent-choice-principle-over-zf` · definition — The serial-relation Dependent Choice principle over ZF
- `lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf` · lemma — Prescribed-start and starting-point-free serial choice are equivalent in ZF
- `def-complete-metric-baire-principle-over-zf` · definition — The complete-metric Baire principle over ZF
- `lem-open-dense-and-closed-nowhere-dense-baire-forms-are-equivalent-in-zf` · lemma — Open-dense and closed-nowhere-dense Baire forms are equivalent in ZF
- `thm-serial-dependent-choice-implies-complete-metric-baire-over-zf` · theorem — Serial Dependent Choice implies the complete-metric Baire principle over ZF
- `lem-discrete-sequence-spaces-are-complete-in-zf` · lemma — Discrete sequence spaces are complete in ZF
- `lem-serial-relation-successor-sets-are-open-dense` · lemma — Successor-occurrence sets of a serial relation are open and dense
- `thm-complete-metric-baire-principle-implies-dependent-choice-over-zf` · theorem — The complete-metric Baire principle implies Dependent Choice over ZF
- `thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf` · theorem — Dependent Choice is equivalent to the complete-metric Baire principle over ZF

### `dependent-choice-and-the-complete-metric-baire-theorem-examples` — Dependent Choice and the Complete-Metric Baire Theorem — Examples (1 item(s))

- `ex-blair-sequence-space-for-a-serial-relation` · example — Blair's sequence space for a serial relation

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
`research/phase-2-wave-1-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `phase-2-wave-1`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete any authorized repair and focused
checks, then proceed to the next. Inspect related items first only when necessary.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-wave-1-judge-adjudications.jsonl`
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
decision in `research/phase-2-wave-1-step8-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-wave-1-step8-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-wave-1-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/phase-2-wave-1-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
