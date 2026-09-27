# Step 3a scope review — `erdos-hajnal-for-the-e-graph-and-bird` (batch 1, orders 441/442)

- Run: `frontier-35-ten-categories`, batch 1, role alpha (Step 3a scope reviewer).
- A page: `erdos-hajnal-for-the-e-graph-and-bird` (order 441).
- B page: `erdos-hajnal-for-the-e-graph-and-bird-examples` (order 442).
- Date: 2026-09-24. One A page in this pair; one scope decision recorded below.

## Decision

- `erdos-hajnal-for-the-e-graph-and-bird` — **sufficient**. Planned definitions,
  results and examples cover the intended subject; no owner action requested.

## Intended subject (prose design)

`research/plan-combinatorics-and-categories.md` L3920, row 441/442: "Explicit
final deductions of Theorems 1.10–1.11 and a dependency ledger." §16.4 fixes the
two routes: E = pendant-leaf deletion to $P_5$, wonderfulness, property (*) from
co-E structure and the $H_5$/co-E auxiliary class, generalized niceness, then EH;
Bird = deletion to the bull, using the established E theorem as auxiliary input;
"Both routes must be explicit theorem items on 441, not mere prose inferences
after Lemma 6.5." §16.3 requires B items to check figures by finite adjacency
data; §16.5 already records the correction that Section 6.2's hypothesis is
co-Bird-free, not Bird-free.

Source check against `https://arxiv.org/html/2606.06258v2` (HTML fetched
2026-09-24, 1,138,623 bytes; §1.4, §2, Lemma 5.1, §6–§6.2, Lemmas 6.3–6.5):
Theorem 1.10 is exactly "E-graph has the Erdős–Hajnal property"; Theorem 1.11 is
exactly "Bird has the Erdős–Hajnal property"; §2 says "E-graph and Bird are
leaf-reducible"; §6 opens "we prove that co-E-free graphs and co-Bird-free graphs
satisfy the hypothesis of Lemma 5.1, which implies that E-graph and Bird satisfy
the Erdős–Hajnal property". The paper claims nothing further at these two
theorems, so the pair's stated subject is the whole of it.

## Coverage of the subject by the planned items

A page (6 items): `lem-the-e-graph-and-the-bird-are-leaf-reducible` (E − q = P5,
Bird − w = bull, both reduced singleton families EH via the published P5 and bull
results); `cor-the-e-graph-is-generalized-nice`;
`thm-the-e-graph-has-the-erdos-hajnal-property`
(= Thm 1.10); `cor-the-singleton-family-containing-bird-has-property-star`;
`cor-the-bird-graph-is-generalized-nice`; `thm-the-bird-graph-has-the-erdos-hajnal-property`
(= Thm 1.11).

Every step of both designed routes has an explicit home: leaf reduction (local
lemma); wonderfulness (published `lem-the-e-graph-and-the-bird-graph-are-wonderful`);
E property (*) (published `cor-the-singleton-family-containing-e-has-property-star`)
→ E generalized niceness (local) → E EH (local); Bird property (*) (local, from
published `thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition` and
published `thm-special-vertex-local-structural-partition-criterion-implies-property-star`
with $\mathcal F_1=\mathcal F_2=\{E\}$, hence depending on the local E theorem)
→ Bird generalized niceness (local) → Bird EH (local). The two EH statements are
explicit theorem items, not prose inferences, as §16.4 demands. The "dependency
ledger" clause is discharged by the coverage `canonical` dispositions
(`research/frontier-35-ten-categories-batch-1.coverage.json`) plus the explicit
`deps` of all eight items; if the owner intended a separate page-level ledger
artifact, that is an owner decision, not an omission of mathematics.

B page (2 items) — leaves, no later proof uses them:
`ex-the-e-graph-theorem-properly-extends-the-p-five-case` (P5 is E-free but not
P5-free; every P5-free graph is E-free) and
`ex-the-bird-theorem-properly-extends-the-bull-case` (bull is Bird-free but not
bull-free; every bull-free graph is Bird-free). These are exactly the strict
class-containment claims of HJZ §1.4, checked by finite adjacency data.
The §16.3 figure checks for E/Bird and their complements are already published
on `small-graph-erdos-hajnal-consequences-examples`
(`ex-the-e-graph-and-co-e-graph-by-adjacency`,
`ex-the-bird-graph-and-co-bird-graph-by-adjacency`), and the E-to-P5 deletion is
already published on `leaf-reducibility-and-wonderful-families-examples`; the new
B page does not need to duplicate them.

## Evidence checks performed

- Manifests: `research/frontier-35-ten-categories-batch-1.pages.json` (orders
  441/442; A requires `from-generalized-niceness-to-erdos-hajnal`,
  `co-bird-free-comb-structure`, matching `plan-spec.json`); item statements,
  kinds, dependency lists and provenance read in full.
- Suppliers: all 20 external dependency ids resolve to published items under
  `items/` (checked `status: published`), including the E property (*) corollary,
  Lemmas 3.5/4.5/5.1 equivalents, Lemma 6.3/6.4/6.5 equivalents, the wonderfulness
  lemma, the leaf/co-leaf transfer corollary and the definitions (E, co-E, Bird,
  co-Bird, bull, leaf-reducible, property (*), generalized nice, EH constant).
  The 6 remaining in-run dependency ids are the pair's own A items. Stated
  hypotheses were compared with the published statements (co-E and co-Bird comb
  partitions; common EH constant $c\in(0,1]$ in the local criterion; downward
  closure of EH constants is published as `lem-erdos-hajnal-constants-are-downward-closed`).
- Prerequisites: `research/frontier-35-ten-categories-batch-1.cross-batch-dependencies.json`
  is `[]`; the drift entry for this page shows the declared-requires closure (81
  pages) contains every page hosting a dependency item (`co-e-free-comb-structure`,
  `property-star-and-comb-outcomes`, `the-structural-criterion-for-property-star`,
  `leaf-reducibility-and-wonderful-families`, `small-graph-erdos-hajnal-consequences`,
  `bull-free-graphs-and-the-erdos-hajnal-property`,
  `erdos-hajnal-property-and-homogeneous-sets`,
  `induced-subgraphs-and-hereditary-graph-classes`).
- Structural checks run this session: `coverage-checklist --require-destination`
  → 0 errors, 2 warnings (this page 6/16 harvested results scaffolded, the rest
  absorbed inline / already published — the warning asks Alpha to confirm the
  declines at Step 5); `manifest-deps` on batch 1 → 12 items, 0 errors;
  `validate-plan` on `plan-spec.json` → passes (441/442 plan entries still carry
  empty item arrays, as expected before the Step 4 splice).
- Source coverage: the paper and Nguyen's notes are recorded with fetch hash,
  byte count and per-heading disposition; the 7 "already-published" dispositions
  (Lemma 2.2, 3.5, 4.5, 5.1, 6.3, 6.4 and Nguyen Lemma 5.3) each name a published
  item that exists. I re-read the paper sections cited above; I did not re-fetch
  Nguyen's notes this session and relied on the recorded Step-1 fetch evidence
  for that secondary cross-check.
- Library role: terminal page of the CB-16 Erdős–Hajnal block; its only planned
  consumer is its own B page, and no published item, page or article references
  its six item ids or the page id.
- Owner decisions: `frontier-35-ten-categories-owner-authoring-direction.md`
  defers only the batch-8 pair and one batch-13 item; this pair is in the active
  scope ledger (batch 1) and in neither deferred list.

## Observations and unresolved uncertainty

1. HJZ §6.2's heading says "Bird-free" while Lemma 6.5 and its use are
   co-Bird-free. The plan's correction ledger and the local items keep the
   co-Bird-free hypothesis; no scope action needed, but Step 3b must not follow
   the loose heading.
2. Potential published dependency-record observation (not a scope blocker, not
   mine to edit): `items/lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property.md`
   states HJZ Corollary 1.8 as source-quoted Fact [F4] and uses it in steps 1.2–2.1,
   while the published `cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property`
   implements the same transfer and is absent from that lemma's `deps`. SCHEMA
   permits source-cited facts, so this is dependency hygiene rather than a
   mathematical error; the page's own `cor-the-e-graph-is-generalized-nice` lists
   the library corollary explicitly ("supplies the transfer dependency omitted
   from the published H5 proof"). Recommend the owner decide whether to record it
   in `research/published-consumer-supplier-ledger.md` and schedule the minimal
   published-content repair if so. I did not audit that lemma's proof further.
3. I did not re-derive any proof (out of role): this decision is about planned
   scope, not proof correctness, exponents, or dependency authoring.

## Non-actions

No scaffold, manifest, item, page, coverage, ledger or owner record was edited.
No item approvals were recorded.
