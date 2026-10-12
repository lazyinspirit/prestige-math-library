# Batch 14 Step-1 scaffold — `the-kazhdan-lusztig-character-and-multiplicity-theorem`

Run `frontier-44-special-representation-examples-28`, batch 14 (orders 1784/1785),
category `special-topics-in-representation-theory`. Owned pair:

- A `the-kazhdan-lusztig-character-and-multiplicity-theorem`
- B `the-kazhdan-lusztig-character-and-multiplicity-theorem-examples`

Owned outputs written in this dispatch: `…-batch-14.pages.json` (11 items: 7 A + 4 B),
`…-batch-14.coverage.json` (with `fetch_verified` stamps for all 6 source entries),
the 11 `…-step1-<item>.json` readiness records, `…-batch-14.cross-batch-dependencies.json`
(8 rows), this note, and the owned "Batch 14 Step-1 scaffold" section appended to
`briefs/tasks/frontier-dependency-ledger.md`. No published item, shared plan, engine
state or verdict was edited.

## 1. Binding direction and plan reconciliation

`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
was read in full before construction. It authorises the pair, requires suppliers before
consumers, preserves every approved claim and directs precise escalation of unclosable
proof obligations; the Category O order decision keeps the current orders and the exact
supplier interfaces. Nothing in it conflicts with this scaffold, and no item consumes a
late QG5/parabolic item.

`research/plan-kazhdan-lusztig-track.md` KL-4 (line 133) is the inventory source, and
`research/plan-spec.json` carries both pages with `items: []`, order 1784/1785, category
`special-topics-in-representation-theory`, companion pointers and `requires`
(`projective-functors-and-the-soergel-functor-in-category-o`,
`weyl-character-and-multiplicity-formulas`) identical to the design table and the
manifest. **No design-versus-plan conflict exists**; there is no plan item text to
override. All seven design A items are scaffolded under the design's exact item ids,
and the four design B items under their exact ids. The only recorded scope decision is
the numerical form of the transport proposition (section 3).

## 2. Construction summary

11 items in prerequisite order, 7 A + 4 B, `dependency_level` 13…18. Levels were
computed with `tools/item-dependency-levels.mjs` over the whole run (in-run suppliers
raise the level; published suppliers do not) and written back after the last dependency
edit; the computed levels equal the labels for all 11 items. Every `deps` array is
explicit, every id is new (checked against `plan-spec.json` and `items/`), no cycle
exists, and no dependency points to a later page or to a B-page item. A-page order:
labelling conventions → standard-rank lemma → projective-Verma multiplicities = KL
values at one → composition multiplicities → character formula → transport of the
theorem → Koszul-scope remark. All four B items depend only on the A page plus published
items (B2 also on the earlier B1, a legal same-page backward edge).

Mathematical route actually scaffolded (all suppliers published or owner-ready in-run):

- `V(P(w·λ)) = \bar B_{w^{-1}}` (KL-3) + KL-3's standard-support rank comparison give
  `(P(w·λ):Δ(y·λ)) = Σ_d r_{y^{-1},d}(B_{w^{-1}})`.
- KL-2's character theorem `ch(B_{w^{-1}}) = \underline H_{w^{-1}}` in the split
  Grothendieck group identified with the Hecke algebra by `[B_x] ↦ H_x` gives
  `Σ_d r_{x,d} v^d = p_{x,w^{-1}}(v)` in the $h_\Delta$-convention of
  [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]].
- `v=1`, the conversion `p_{y,w} = v^{ℓ(w)-ℓ(y)}P_{y,w}(v^{-2})` and the **published**
  simultaneous-inversion clause `p_{y^{-1},w^{-1}} = p_{y,w}` of
  [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]] give
  `(P(w·λ):Δ(y·λ)) = P_{y,w}(1)`.
- BGG reciprocity converts this to `[M(y·λ):L(w·λ)] = P_{y,w}(1)`; inverting the
  unitriangular matrix `P(1)` by KL-1's chain inverse gives
  `ch L(w·λ) = Σ_x q'_{w,x}(1) ch M(x·λ)` supported on `x ≥ w`, with the signed form
  `Σ_x (-1)^{ℓ(w)-ℓ(x)} q_{w,x}(1) ch M(x·λ)`.

The design's warnings are preserved: ordinary multiplicities are the **value at q=1**,
never individual coefficients; the auxiliary Soergel grading is bookkeeping and no
grading on category O is asserted (the dedicated remark records this); no Ext/Koszul
statement is made.

## 3. Mathematical decisions and corrections recorded

1. **Transport proposition kept in numerical form.** The design's
   `prop-translation-identifies-regular-integral-blocks` is proved as: every pair of
   dominant regular integral blocks has the same Verma-flag and composition matrices,
   both equal to the KL values `P_{y,w}(1)`, because the multiplicity theorem is stated
   for an arbitrary dominant regular integral weight and its inputs are weight-independent
   (type-A Hecke algebra and polynomial Soergel category). The stronger categorical
   equivalence `O_λ ≅ O_μ` carrying `L(w·λ) ↦ L(w·μ)` (Soergel 1990 §2.5 Theorem 11;
   Lin Chen Lecture 9 Theorem 3.13, Examples 3.15–3.16) is **recorded, not claimed**:
   it is disposed `out-of-scope` in the coverage with a specific reason, since a local
   proof would need a projective-generator module-category (Morita) presentation that
   this page does not scaffold. This is a scope decision, not a proof gap in a claimed
   statement.
2. **No new inversion-symmetry lemma was added.** The label reversal in the Soergel
   dictionary (`V(P(w·λ)) = \bar B_{w^{-1}}`, standard support at `x` ↔ `Δ(x^{-1}·λ)`)
   is exactly compensated by the published clause `p_{y^{-1},w^{-1}} = p_{y,w}` of the
   KL-basis theorem, verified in the item text and in the published multiplication-formula
   item's facts. The alternative route (a fresh lemma on the reversal anti-involution)
   was written out and discarded as duplicate of the published clause.
3. **Triangularity without a new reversal lemma.** The needed implication "nonzero
   multiplicity forces `y ≤ w`" is the published
   [[lem-jordan-holder-factors-of-verma-modules-lie-above-the-head]] (strong linkage plus
   the positive pairings), and the design's "Bruhat reversal" is frozen as the exact
   proven direction `y ≤ w ⟹ w·λ ≤ y·λ` (the computation inside the published
   [[lem-dominant-integral-dot-translates-embed-in-the-verma-module]]). The full
   order-isomorphism statement was not needed for any claim on this page and is not
   claimed.
4. **Grading conventions checked.** `r_{x,d}` are pre-reduction standard-support ranks
   with `h_Δ(M) = Σ (M:Δ_x(d)) v^d \widetilde T_x`, so the `v=1` evaluation is
   convention-independent; only the value at one is used anywhere.
5. **Examples verified by exact arithmetic before writing.** An independent
   Laurent-polynomial implementation of the normalized Hecke algebra reproduced the
   owner-audited S₃ table (all `P_{y,w}=1`, `\underline H_{321} = H_{321}+v(H_{231}+H_{312})+v^2(H_{132}+H_{213})+v^3H_{123}`),
   the S₄ value `P_{1324,3412} = 1+q` (Björner–Brenti p.135 and the published interval
   example), the zeta matrix of the S₃ Bruhat poset and its integer Möbius inverse, and
   the S₂ block data for `l = 0, 1`. The counterexample's comparison is
   `P_{1324,3412}(1) = 2 ≠ 1 =` leading coefficient.
6. **Choice boundary.** A2–A6 and B1–B4 assume AC and declare it; the assumption is
   inherited from the published category-O/BGG/KL-3 items only (no new choice is used).
   A1 (labelling conventions) and A7 (scope remark) are choice-free.
7. **Observation for the owner.** The sibling Batch 13 ledger section states orders
   1544/1545 for `projective-functors-and-the-soergel-functor-in-category-o`; the current
   plan and manifests use 1782/1783 after the owner's order correction. Not edited here
   (other batches' sections are their own); recorded for reconciliation.
   The same Batch 13 section's readiness narrative ("17 ready and 8 escalated") is also
   stale: the eight escalated batch-13 suppliers — including this batch's direct
   suppliers `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules`
   and `prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v` — were
   subsequently repaired and re-recorded `ready` (`owner: true`, 2026-10-08T14:38Z), and
   all four direct cross-batch suppliers of this batch are current in the run-wide
   `step1-decisions check`. History is preserved in the readiness files; only the
   ledger-section prose is outdated.

## 4. Readiness records

All 11 items are recorded **ready** with `owner: false` through
`node tools/step1-decisions.mjs record --run … --item … --decision ready --dependencies … --reason …`;
each reason names the examined dependency ids and the evidence (owner-ready supplier
records, published items, source passages read, and the independent finite
computations). No item is escalated: every in-run transitive prerequisite (45 items
across batches 5–13) currently carries a `ready` Step-1 record, and every published
supplier resolves to a published item on disk. A readiness record is not a proof
approval; Step 3 authors and Steps 5–8 reviewers follow.

Four post-record refinements were made to item texts before freezing: A1's clause (ii)
was re-scoped to the two directions actually used and proved (no poset-isomorphism
claim), A5's Möbius/inversion wording was tightened, and B1 was corrected to *nineteen*
comparable Bruhat pairs and the single `v^2 H_{123}` term in
`\underline H_{321}`. Because each record hashes its item text, **all 11 records were
re-recorded `ready`** (same dependencies, updated reasons naming the repaired clauses)
against these final bytes; `step1-decisions check` lists no batch-14 work row.

## 5. Coverage and sources

`…-batch-14.coverage.json` has three sources on the A page (Soergel 1990 preprint;
Lin Chen Lecture 8; Björner–Brenti, *Combinatorics of Coxeter Groups*, author-hosted
complete PDF) and three on the B page (Björner–Brenti; Lin Chen Lectures 8 and 9), every
one of kind `paper`/`lecture-notes`/`textbook` and every one read in the recorded
locator ranges. 54 harvested results carry dispositions: 23 `included` (13 A-page +
10 B-page rows, of which 12 distinct authored carriers are checked by
`source-backing`), 15 `already-published` (KL-1, KL-2/KL-3 or the RL-4/RL-5 duality,
projectivity, BGG and translation items), 12 `inline` (absorbed into named items) and
4 `out-of-scope` with per-result reasons. The
advisory `coverage-low-yield` warning for the A page reflects that most of Soergel's and
Chen's read ranges are covered by owner-ready KL-2/KL-3 items rather than by this
batch. Exact URLs, locators and `fetch_verified` stamps are in the coverage file.

## 6. Checks actually run (with results)

- `node tools/manifest-deps.mjs research/…-batch-*.pages.json` — 438 items,
  0 missing, 0 errors. Pass.
- `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` —
  438 scoped items, 0 errors, 0 warnings. Pass.
- `node tools/coverage-checklist.mjs research/…-batch-14.coverage.json --require-destination`
  — 2 pages, 54 harvested results, 0 errors, 1 advisory warning
  (`coverage-low-yield`, 13/42 A-page results scaffolded).
- `node tools/tsx-run.mjs tools/frontier-item-gate.mjs --run … --tool validate-plan`
  — re-run on the final bytes: this pair validates (acyclic, orders 1784/1785, all
  suppliers present); the run-wide result is FAIL due solely to an other-batch error
  on `balanced-triples-and-global-crystal-bases` (its item
  `thm-the-highest-weight-crystal-triple-is-balanced` depends on
  `lem-negative-half-reversal-preserves-integral-and-crystal-lattices`, which appears
  later on the same page). This page carries one advisory, `redundant-prereq` for
  `weyl-character-and-multiplicity-formulas` (already reachable through
  `projective-functors-and-the-soergel-functor-in-category-o`); it is inherited verbatim
  from the plan-spec/design `requires` list, not introduced here, and the exact supplier
  interfaces were kept as specified. (Earlier run, before other batches' scaffolds
  landed: OK with all advisories on other batches.)
- `node tools/source-fetch-check.mjs --coverage …-batch-14.coverage.json --stamp`
  — 6/6 sources fetch-verified (newly stamped); check mode 6/6 resolved.
- `node tools/url-sweep.mjs --coverage …-batch-14.coverage.json --out <temp> --recover --fail-on-dead`
  — 4/4 live, 0 failed (temp output; the run's canonical liveness file is engine-owned).
- `node tools/source-backing.mjs --coverage …-batch-14.coverage.json --liveness <temp>`
  — 12 authored results, every one backed.
- `node tools/step1-decisions.mjs check --run …` — all 11 batch-14 items have current
  records (no work row) after the post-record re-recording. The whole-run check lists 86
  work rows, none in this batch: 58 stale `ready` rows from concurrent manifest edits
  (`Item or dependency changed`), 21 rows without a record (20 `Empty scaffold
  inventory` planned pages plus 1 `Readiness record missing`) and 7 escalations.
- `node tools/item-dependency-levels.mjs` (function reuse, whole-run manifests) —
  batch-14 labels equal the computed levels; the CLI check currently fails only on
  other batches' `empty scaffold inventory` rows.
- `node tools/tsx-run.mjs tools/frontier-item-gate.mjs --run … --tool extcheck` and
  `--tool depsource` — attempted, not applicable at Step 1: their manifest-scoped
  subjects resolve to item carriers that do not exist before authoring, so the engine
  deliberately defers extcheck to Step 3 (comment at
  `tools/autopilot/stages/mathlib.mts` ~1553) and depsource likewise. Recorded honestly
  rather than reported as passes.
- `node tools/frontier-dependency-ledger.mjs refresh --run … --require-reviewed` —
  the unified ledger was refreshed; all 8 batch-14 rows carry review evidence, but the
  run-wide `--require-reviewed` condition still fails pending consumer inputs for
  batches 9, 10, 11, 15, 16, 17, 18, 23, 24, 25 (the engine's join-time condition).
- Re-run on the frozen final bytes after the post-record refinements, unchanged results:
  `manifest-deps` 438 items / 0 errors; `content-policy --manifest-only` 438 / 0 / 0;
  `coverage-checklist --require-destination` 0 errors + the same 1 `coverage-low-yield`
  advisory; `source-fetch-check` 6/6 fetch-verified and 6/6 resolved;
  `item-dependency-levels check --run` reports no batch-14 issue (only other batches'
  empty inventories).

## 7. Unresolved findings and escalations

No item of this batch is escalated and no unclosable proof obligation was found. The
deliberately unclaimed categorical equivalence is recorded above and in the coverage.
No consumed published item was found defective in this scaffold; the one note-level
inconsistency is Batch 13's ledger-section prose (stale order values and stale
readiness narrative; section 3.7), whose current records are all owner-ready.
One other-batch plan error is visible in the final `validate-plan` run (the intra-order
edge on `balanced-triples-and-global-crystal-bases` quoted in section 6); it is not in
this batch's closure and is left to its owner.
Publication and pushing remain owner actions; this note is not a mathematical approval.
