# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 9's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/phase-2-wave-1-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-8
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-8 task's explicit exception; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-wave-1
role: alpha-adjudicate
label: step8-b
covers: 14, 15

# Step 8 adjudication — group **b**, run `phase-2-wave-1`

You are the group Alpha for batches **14**, **15**: 3 A/B pair(s), 6 page(s), 100 item(s), 15 open rejection(s) over 15 item(s).

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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
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

| item | page | model | context_sha256 |
|---|---|---|---|
| `def-aronszajn-suslin-and-special-tree` | `set-theoretic-trees-delta-systems-and-diamond` | gpt-5.6-terra | `15093ab0d961de5ec49904d3313ad5973d4c6e8a487fd05cf66bc65777ec3da6` |
| `def-coded-first-order-zf-theory` | `deduction-soundness-completeness-and-compactness` | gpt-5.6-terra | `aa63d7ddf6c97b29be392a455080aea1d360fdfe99886252f1884fb5a92bbccd` |
| `def-diamond-on-omega-one` | `set-theoretic-trees-delta-systems-and-diamond` | gpt-5.6-terra | `ef57afa47a800917014cdfec5c4ba291afa01b24df5416eee1731c3a88e6ad7c` |
| `ex-first-order-sentence-deduction` | `deduction-soundness-completeness-and-compactness-examples` | gpt-5.6-terra | `2276064f8204c0f35600165cc756c07d984bcb4e16105adabb0c3b4fc35b0f2d` |
| `fs-every-omega-one-tree-has-a-cofinal-branch` | `set-theoretic-trees-delta-systems-and-diamond-examples` | gpt-5.6-terra | `616ae24af9d65cc617529a7fc9a798a1ca979d668cac8a8c2fac2bd8dffd0b79` |
| `lem-consistent-sentence-decision` | `deduction-soundness-completeness-and-compactness` | gpt-5.6-terra | `f6eae6af0c6fe3e3264f0df1865bb5b4d7a1153a241fa502a404dd8b08093d5a` |
| `lem-finite-knaster-poset-products` | `set-theoretic-trees-delta-systems-and-diamond` | gpt-5.6-terra | `a806b3d2d75ad4f188a32a91134bade4cbd13126affccac852391c1e610ec9f4` |
| `lem-fresh-henkin-axiom-preserves-consistency` | `deduction-soundness-completeness-and-compactness` | gpt-5.6-terra | `08a3eabe27375007cbfa5139d77e98f1cd4bddfdaee5ea1cd82e68cf9cf52f46` |
| `thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf` | `dependent-choice-and-the-complete-metric-baire-theorem` | gpt-5.6-terra | `312e42afe121b49d11f45bf3bedd55c87b1c2706dee645cef19e8c052aaf4e0b` |
| `thm-elementary-ordinal-chain-union` | `deduction-soundness-completeness-and-compactness` | gpt-5.6-terra | `1296a6ca4d34526b8a742805373300fec8940c79295e3f302de8659bad6211f1` |
| `thm-henkin-closed-term-truth-lemma` | `deduction-soundness-completeness-and-compactness` | gpt-5.6-terra | `1e657d8caf7788360c040f7fbbb22c423d14f85495edd067834087d2f66eeff9` |
| `thm-special-aronszajn-tree-construction` | `set-theoretic-trees-delta-systems-and-diamond` | gpt-5.6-terra | `1bb4357dc19217820c770dbd12b322010e4f1f9b5cf9271f0eef86c18268c351` |
| `thm-tarski-vaught-set-structure-test` | `deduction-soundness-completeness-and-compactness` | gpt-5.6-terra | `dca5bbbb71acbc27b9c871b9753c3f861380ada67a81eea9f2311b682f50e657` |
| `thm-upward-lowenheim-skolem-with-choice` | `deduction-soundness-completeness-and-compactness` | gpt-5.6-terra | `5ae6f66e90fe0caf873515a1f9d7704f6231d4ab9341a1cbd5e4752413a0c9be` |
| `thm-well-ordered-language-henkin-completeness` | `deduction-soundness-completeness-and-compactness` | gpt-5.6-terra | `b9e8ac3a2b64d61cf46dae9d9c729b5082e2420c4f69e75954b3502736459b87` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `phase-2-wave-1`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

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


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
