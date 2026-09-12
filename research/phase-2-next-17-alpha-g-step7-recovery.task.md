# Step 7 adjudication — group **g**, run `phase-2-next-17`

You are the group Alpha for batches **11**: 2 A/B pair(s), 4 page(s), 37 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-17-alpha-g-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-17-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 11 | `condensation-gch-and-diamond-in-l` | A | foundations | 677 | `the-constructible-hierarchy-and-inner-models`, `set-theoretic-trees-delta-systems-and-diamond`, `arithmetization-incompleteness-and-relative-consistency` |
| 11 | `condensation-gch-and-diamond-in-l-examples` | B | foundations | 678 | `condensation-gch-and-diamond-in-l` |
| 11 | `the-forcing-theorem-and-formal-consistency-transfer` | A | foundations | 681 | `forcing-orders-names-and-generic-extensions`, `arithmetization-incompleteness-and-relative-consistency` |
| 11 | `the-forcing-theorem-and-formal-consistency-transfer-examples` | B | foundations | 682 | `the-forcing-theorem-and-formal-consistency-transfer`, `condensation-gch-and-diamond-in-l` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `condensation-gch-and-diamond-in-l` — Condensation, GCH, and Diamond in L (14 item(s))

- `def-skolem-hulls-in-constructible-levels` · definition — Canonical Skolem hulls in constructible levels
- `lem-canonical-small-skolem-hulls-in-l` · lemma — Canonical L-hulls are elementary and small
- `lem-finite-stage-l-history-and-limit-level-absoluteness` · lemma — Finite-stage L histories and weak limit-level absoluteness
- `lem-finite-support-constructibility-absoluteness` · lemma — Finite support for constructibility absoluteness
- `thm-condensation-for-constructible-levels` · theorem — Condensation for constructible levels
- `lem-cardinality-of-infinite-constructible-levels` · lemma — Cardinality of infinite constructible levels
- `lem-definable-subsets-of-constructible-levels-are-small` · lemma — Definable subsets of a constructible level are small
- `thm-constructible-subsets-appear-before-successor-cardinals` · theorem — Constructible subsets appear before successor cardinals
- `thm-generalized-continuum-hypothesis-in-l` · theorem — The generalized continuum hypothesis holds in L
- `thm-v-equals-l-implies-diamond` · theorem — V equals L implies diamond
- `cor-v-equals-l-gives-a-suslin-tree` · corollary — V equals L gives a Suslin tree
- `lem-finite-fragment-l-interpretation-with-gch` · lemma — Finite-fragment interpretation in L with GCH
- `thm-formal-consistency-of-zfc-plus-gch-from-zf` · theorem — Formal consistency of ZFC plus GCH relative to ZF
- `cor-positive-relative-consistency-of-ch-and-gch` · corollary — Positive relative consistency of CH and GCH

### `condensation-gch-and-diamond-in-l-examples` — Condensation, GCH, and Diamond in L: Examples and Counterexamples (2 item(s))

- `ex-condensation-bounds-a-constructible-real` · example — Condensation bounds a constructible real
- `ex-diamond-seals-a-maximal-antichain-in-l` · example — A diamond guess seals a maximal antichain

### `the-forcing-theorem-and-formal-consistency-transfer` — The Forcing Theorem and Formal Consistency Transfer (15 item(s))

- `def-forcing-relation-for-atomic-formulas` · definition — Atomic forcing relation
- `lem-atomic-forcing-relation-is-well-founded-and-definable` · lemma — Atomic forcing is well-founded and definable
- `def-forcing-relation-for-formulas` · definition — Forcing relation for all formulas
- `lem-forcing-monotonicity-density-and-decision` · lemma — Monotonicity, density, and decision for forcing
- `lem-forcing-truth-lemma` · lemma — Truth lemma
- `thm-forcing-theorem` · theorem — Forcing theorem
- `thm-generic-extensions-satisfy-zf-and-zfc` · theorem — Generic extensions satisfy ZF and preserve ground-model Choice
- `thm-forcing-preserves-ordinals` · theorem — Forcing preserves ordinals
- `lem-dense-forcing-name-translations-preserve-forcing` · lemma — Dense forcing name translations preserve forcing
- `thm-forcing-equivalence-and-boolean-completion` · theorem — Forcing equivalence and Boolean completion
- `rem-intermediate-models-and-complete-subalgebras` · remark — Orientation for intermediate models and complete subalgebras
- `thm-semantic-generic-extension-theorem-for-countable-transitive-models` · theorem — Semantic generic extensions of countable transitive models
- `lem-forcing-transfer-for-finite-zfc-fragments` · lemma — Forcing transfer for finite ZFC fragments
- `thm-formal-consistency-transfer-by-forcing` · theorem — Formal consistency transfer by forcing
- `cor-relative-consistency-from-a-forced-sentence` · corollary — Relative consistency from a forced sentence

### `the-forcing-theorem-and-formal-consistency-transfer-examples` — The Forcing Theorem and Formal Consistency Transfer: Examples and Counterexamples (6 item(s))

- `ex-atomic-forcing-of-check-names` · example — Atomic forcing of check names
- `ex-trivial-forcing-recovers-the-ground-model` · example — Trivial forcing recovers the ground model
- `cex-forcing-is-not-upward-monotone-to-weaker-conditions` · counterexample — Forcing is not monotone toward weaker conditions
- `ex-dense-equivalent-forcing-presentations` · example — Dense-equivalent forcing presentations
- `fs-the-ctm-presentation-proves-con-zfc` · false-statement — False statement: the CTM presentation proves Con(ZFC)
- `fs-l-equals-v-in-zf` · false-statement — False statement: ZF proves L equals V

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

5 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-8bee6c602c3188442aa984ef · `fs-l-equals-v-in-zf`** (from group g, would-be-fatal) — Step 3.1 asserts rather than derives that the Cohen construction 'has the uniform formal verification required by F5': it claims a PA-verified total primitive-recursive constructor from ZFC+¬(V=L) refutations to ZFC refutations, but only sketches the matrix-expansion blocks for target axioms and the extra tag, and it never names the reflection/source-fragment-existence constructor that the cited corollary (through lem-forcing-transfer-for-finite-zfc-fragments) also requires. The companion items thm-formal-consistency-transfer-by-forcing and cor-relative-consistency-from-a-forced-sentence deliberately carry this verification data as a hypothesis, so discharging it is this item's own burden. If the sketch is judged insufficient the refutation has no Con(ZFC+¬(V=L)) premise (the conclusion ZF ⊬ V=L is true but this route would be unproved). Note the Foundations bootstrapping boundary forbids importing the recorded not-proved-here Cohen page instead.
- **s8a-03c40d84a82f7b5345b7d75c · `lem-finite-stage-l-history-and-limit-level-absoluteness`** (from group g, gap-a-reader-closes) — Items 3 and 4 of the statement (one fixed finite sentence C holds in every nonzero limit L-level and characterizes the nonempty transitive sets that are L-levels; the fixed χ agrees with <_L in every nonzero limit level) are the sole supplier for both condensation and the V=L → ◊ proof. The proof supports them with a bespoke formalization: an inventory of W-clauses summarized as 'the existence and exactness of the assignment and truth tables for every nonempty carrier', external inductions through accepted histories, and stage-counting for H_γ ∈ L_{γ+8}, R_γ ∈ L_{γ+32}, K_γ ∈ L_{γ+40}. I traced the strategy (external induction makes internal histories actual; limit prefixes are bounded unions; the bounds have slack) and found no false step, but the exact clause list of W and the successor/limit stage arithmetic should be checked clause by clause. No consumer uses the numeric bounds quantitatively, so only a failure of the C/χ characterization would be fatal.
- **s8a-8077b3d25799299bdfeb2178 · `thm-v-equals-l-implies-diamond`** (from group g, gap-a-reader-closes) — Two steps needed for the contradiction are compressed. (a) Step 3.1 'Elementarity makes X ∩ ω1 an ordinal' silently uses that X is downward closed in ordinals: the reconstruction needs ω ⊆ X (empty set plus closure under the successor formulas) and, for ξ ∈ X ∩ ω1, a surjection ω → ξ inside X so that every η < ξ is f(n) with n ∈ X. (b) Step 5.1 'any preceding pair would belong to M' needs M = L_γ to be an initial segment of the χ-order (cited from the finite-stage lemma) together with absoluteness of the bounded badness predicate between the transitive M and the universe; the text states these facts only in passing. Both reconstructions go through, but a Step-7 reader must supply them.
- **s8a-b528f4715f020ef7cb4d3fe2 · `def-skolem-hulls-in-constructible-levels`** (from group g, presentation) — The definition says 'Fix an enumeration (φ_i) of all membership formulas with a distinguished witness variable' and then concludes that 'the enumeration, default and least-witness rule are fixed; no family of arbitrary choices is implicit'. The hull is canonical only relative to that fixed enumeration: the definition never ties it to the published definable syntax coding (def-set-coded-terms-and-formulas / lem-canonical-well-order-of-finite-definition-codes), so as written it hides one parameter. Elementarity and the size claims are enumeration-independent and consumers only need some hull with the stated properties, so this is wording-level; the title and the no-choice wording overstate what is literally defined.
- **s8a-464aac44342b3d02f826ae91 · `lem-finite-fragment-l-interpretation-with-gch`** (from group g, gap-a-reader-closes) — The statement asserts that for the fixed certified presentations the axiom and proof translators can be chosen primitive recursive and that PA verifies their totality and checker acceptance, and step 2.1 fixes the eight constant blocks (six ZF axiom tags plus the selected AC and GCH sentences). The proof argues the dispatcher's correctness by induction on the formula/line schedule but never exhibits those fixed derivations; the AC and GCH blocks in particular run through the condensation-side machinery. The underlying Gödel-style L-interpretation is standard and the item is explicit that the claim concerns fixed presentations, so this is a bookkeeping (not plausibility) burden: a Step-7 check should confirm that no uniform internal all-fragment assertion is being smuggled in and that the constant blocks are indeed finite.

Append one owning-group disposition per warning to `research/phase-2-next-17-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-17`

Read `research/phase-2-next-17-judge-closure.json`,
`research/phase-2-next-17-judge.jsonl`,
`research/phase-2-next-17-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-17-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-17-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-17-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
