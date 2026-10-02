# Step 3b auditor/author report — pair `analytic-hypersurfaces-and-local-parametrisation`

- Run: `frontier-37-owner-30` (stage `3b-author`), dispatch label
  `step3b-pair-analytic-hypersurfaces-and-local-parametrisation-fb1b2075e588d7f6`.
- Role: alpha-high author (not owner). No owner ruling was used beyond the
  recorded scope decision named in §1; none was invented.
- A page: `analytic-hypersurfaces-and-local-parametrisation` — batch 30,
  order 869, category `complex-analysis`, 21 items.
- B page: `analytic-hypersurfaces-and-local-parametrisation-examples` —
  batch 30, order 870, 8 items.
- Batch 30 contains this pair only; its shared files carry no sibling rows.
- Handoff status: all 29 assigned items authored and checked; both library
  pages written; manifest, coverage and the 29-item proof-contract file
  updated in place; this report replaces the skeleton left by the earlier
  attempt at this dispatch.
- Posture: this is an author-level readiness audit. Independent mathematical
  auditing and systematic defect repair belong to Steps 5–8.

## 1. Inputs read and scope posture

- `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/group-author.md`.
- Batch inputs: `research/frontier-37-owner-30-batch-30.pages.json`,
  `…-batch-30.coverage.json`, `…-batch-30.notes.md`,
  `…-batch-30.cross-batch-dependencies.json` (`[]`).
- Scope: `research/frontier-37-owner-30-step3a-pair-analytic-hypersurfaces-and-local-parametrisation.md`
  (review decision `sufficient`, `sha256 5d856482…`), sealed for Step 3b by
  `research/frontier-37-owner-30-ready-pair-authoring.json` (owner
  authorization 2026-09-30T10:20:44Z). After the two local additions in §2
  the owner recorded `proceed` on the refreshed 29-item scope
  (`research/frontier-37-owner-30-step3a-owner-analytic-hypersurfaces-and-local-parametrisation.json`,
  `sha256 beaf5fb26a7b2c8ab2b1487f1aaa3699a61fd528fee83533f308205c5ba6ca19`,
  2026-09-30T12:22:49Z); the current item decisions close on that receipt.
- `research/frontier-37-owner-30-pre-splice-plan-findings.json`: 67 findings,
  **zero** naming this pair, either page or any of its 29 ids — nothing to
  resolve for this batch.
- `research/frontier-37-owner-30-owner-authoring-direction.md` exists: it is
  transport-recovery authorization whose concrete fixes target batches
  1/5/6/9/14/16/19/23/24/26/28; it names nothing in batch 30 and adds no
  batch-30-specific obligation.
- Design: `research/plan-complex-analysis-track.md` SC-8 lines 4282–4323;
  choice row 428 (“SC-5 / SC-8 … ZF relative to prerequisites”);
  well-definedness rows 506/507/510; scope boundary row 527.
- Direct in-run prerequisite pairs to inspect: none. External direct
  dependencies: the 29 items together declare 96 distinct direct dependency
  ids — 19 are in-run items of this pair, 77 are external items, all
  `status: published`, 0 missing, and none is a `proved_here: false` Recorded
  result.
- The pair is a dependency leaf: no in-run consumer names either page; the
  unified ledger `research/frontier-37-owner-30-cross-batch-dependencies.json`
  has `reviewed_batches` including `30` and no edge naming this pair.

## 2. Author-level scaffold audit and local repairs

Two genuine authoring-readiness gaps were repaired by local additions on the
assigned A page. Both ids were absent from the pre-author baseline, so under
the dispatch rule they carry no author receipts; they were registered in the
manifest, coverage, contracts and the page file, and authored before every
consumer:

| added item | level | why it is load-bearing | consumers |
| --- | --- | --- | --- |
| `def-irreducible-hypersurface-germ` | 6 | the promised statements of the decomposition, pure-codimension and Puiseux items use irreducibility of a hypersurface germ, which no published or scaffolded item defined | `lem-irreducible-holomorphic-germ-is-prime`, `thm-local-irreducible-decomposition-hypersurface-germ`, `thm-hypersurface-germs-have-pure-codimension-one`, `thm-puiseux-parametrisation-plane-curve-germ` |
| `lem-irreducible-holomorphic-germ-is-prime` | 0 | the decomposition, pure-codimension and total-fraction proofs need “irreducible in the holomorphic UFD ⇒ prime”; only PID/polynomial-ring special cases are published | `thm-local-irreducible-decomposition-hypersurface-germ`, `thm-hypersurface-germs-have-pure-codimension-one`, `lem-total-fractions-split-over-hypersurface-branches`, `thm-puiseux-parametrisation-plane-curve-germ` |

Five original items were recorded `repaired` after concrete local defects were
found while authoring; each receipt in
`research/frontier-37-owner-30-step3b-review-<id>.json` carries the exact
repair:

- `thm-singular-locus-reduced-hypersurface` — adopted the precheck canonical
  proof-step numbering (2.4/2.5, 3.1–3.3, 4.1, 5.1) and restored the
  `## Proof` heading lost in the rewrite, so all 18 facts, 15 steps and the
  8-case boundary worksheet resolve; AC is declared and spent only through
  [F13] in steps 3.1, 4.1 and 5.1.
- `ex-regular-hyperplane-hypersurface-germ` — restored the missing
  `## Verification` heading so steps 1.1–4.1 resolve; AC is declared for
  [F7] only (the numerical dimension fact).
- `ex-nonreduced-equation-same-hypersurface-germ` — restored the missing
  `## Verification` heading so steps 1.1–3.1 resolve.
- `lem-total-fractions-split-over-hypersurface-branches` — removed a
  declared-but-never-cited context fact (branch-equation restatement) and
  renumbered F5→F4, so every declared fact has an actual step use.
- `cor-normalisation-plane-curve-germ` — removed the uncited
  order-factorisation fact, renumbered F13–F15→F12–F14, and cited F2 at step
  3.2, where $K_i=\operatorname{Frac}(A_i)$ needs $A_i$ to be a domain.

All other scaffolds were authoring-ready: hypotheses, direct suppliers and
proof routes were confirmed item by item against the published statements in
the coverage record. No promised claim was dropped, weakened or replaced by
an examples-page dependency; no item consumes a Recorded result.

## 3. Authoring order actually used (recomputed after the local additions)

Levels recomputed from the current manifest with
`tools/item-dependency-levels.mjs` (its `check` exits 0: every manifest
`dependency_level` matches the computed level). Order is level, then page
order (A 869 < B 870), then item id — identical to the dispatch order.

| level | item | page | item decision |
| --- | --- | --- | --- |
| 0 | `def-reduced-holomorphic-germ-for-hypersurface` | A | accept |
| 0 | `lem-dimension-of-holomorphic-germ-ring` | A | accept |
| 0 | `lem-irreducible-holomorphic-germ-is-prime` | A | added (baseline-absent; no author receipt) |
| 1 | `lem-reduced-prepared-polynomial-has-nonzero-discriminant` | A | accept |
| 1 | `lem-square-free-reduction-of-holomorphic-germ` | A | accept |
| 2 | `thm-weierstrass-finite-projection-hypersurface-germ` | A | accept |
| 3 | `def-discriminant-and-branch-locus-weierstrass-hypersurface` | A | accept |
| 4 | `lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve` | A | accept |
| 4 | `lem-reduced-prepared-hypersurface-remains-reduced-near-germ` | A | accept |
| 4 | `lem-vanishing-ideal-of-a-reduced-hypersurface-germ` | A | accept |
| 5 | `def-complex-analytic-hypersurface-germ-and-reduced-equation` | A | accept |
| 5 | `thm-puiseux-parametrisation-plane-curve-germ` | A | accept |
| 6 | `def-irreducible-hypersurface-germ` | A | added (baseline-absent; no author receipt) |
| 6 | `def-local-dimension-hypersurface-germ` | A | accept |
| 6 | `def-regular-singular-point-analytic-hypersurface` | A | accept |
| 6 | `def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ` | A | accept |
| 6 | `rem-general-analytic-sets-need-more-than-hypersurface-arguments` | B | accept |
| 7 | `thm-local-irreducible-decomposition-hypersurface-germ` | A | accept |
| 7 | `cex-projection-branch-locus-is-not-singular-locus` | B | accept |
| 7 | `ex-cusp-puiseux-y-two-equals-x-five` | B | accept |
| 7 | `ex-cusp-puiseux-y-two-equals-x-three` | B | accept |
| 7 | `ex-nonreduced-equation-same-hypersurface-germ` | B | repaired |
| 7 | `ex-regular-hyperplane-hypersurface-germ` | B | repaired |
| 8 | `lem-total-fractions-split-over-hypersurface-branches` | A | repaired |
| 8 | `thm-hypersurface-germs-have-pure-codimension-one` | A | accept |
| 8 | `ex-crossing-coordinate-axes-hypersurface` | B | accept |
| 8 | `ex-ordinary-node-plane-curve-germ` | B | accept |
| 9 | `cor-normalisation-plane-curve-germ` | A | repaired |
| 9 | `thm-singular-locus-reduced-hypersurface` | A | repaired |

## 4. Completed items and conventions

Completed IDs (29/29 authored; every item file exists with `status: draft`
and `verification.precheck` `pass` for the 21 proof-bearing items or `n/a`
for the 8 not-applicable ones):

- 22 items with an author `accept` receipt at `confidence 1`:
  `def-reduced-holomorphic-germ-for-hypersurface`,
  `lem-dimension-of-holomorphic-germ-ring`,
  `lem-reduced-prepared-polynomial-has-nonzero-discriminant`,
  `lem-square-free-reduction-of-holomorphic-germ`,
  `thm-weierstrass-finite-projection-hypersurface-germ`,
  `def-discriminant-and-branch-locus-weierstrass-hypersurface`,
  `lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve`,
  `lem-reduced-prepared-hypersurface-remains-reduced-near-germ`,
  `lem-vanishing-ideal-of-a-reduced-hypersurface-germ`,
  `def-complex-analytic-hypersurface-germ-and-reduced-equation`,
  `thm-puiseux-parametrisation-plane-curve-germ`,
  `def-local-dimension-hypersurface-germ`,
  `def-regular-singular-point-analytic-hypersurface`,
  `def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ`,
  `rem-general-analytic-sets-need-more-than-hypersurface-arguments`,
  `thm-local-irreducible-decomposition-hypersurface-germ`,
  `cex-projection-branch-locus-is-not-singular-locus`,
  `ex-cusp-puiseux-y-two-equals-x-five`,
  `ex-cusp-puiseux-y-two-equals-x-three`,
  `thm-hypersurface-germs-have-pure-codimension-one`,
  `ex-crossing-coordinate-axes-hypersurface`,
  `ex-ordinary-node-plane-curve-germ`.
- 5 items with an author `repaired` receipt at `confidence 1`
  (`thm-singular-locus-reduced-hypersurface`,
  `ex-regular-hyperplane-hypersurface-germ`,
  `ex-nonreduced-equation-same-hypersurface-germ`,
  `lem-total-fractions-split-over-hypersurface-branches`,
  `cor-normalisation-plane-curve-germ`) — repairs detailed in §2.
- 2 baseline-absent additions without author receipts by rule
  (`def-irreducible-hypersurface-germ`,
  `lem-irreducible-holomorphic-germ-is-prime`); see §6/§7.

Each receipt records the examined dependency ids, equal to the item's sorted
frontmatter `deps`; each receipt's `sha256` is `itemHash(item, deps)` and is
current (the `--phase final` check shows no stale receipt for this pair).

Conventions fixed by the authored items (checked against the Step-3a
qualifications):

- The branch set is defined for the fixed projection and can be nonempty on a
  smooth germ (`cex-projection-branch-locus-is-not-singular-locus`), so
  branch locus is never conflated with singular locus.
- The reduced equation is unique up to a unit; the zero germ and unit germs
  are excluded from hypersurface equations, and definitions using them are
  `provenance.proof: not-applicable`.
- Puiseux normalises $\gamma(t)=(t^m,h(t))$ with $\operatorname{ord}h>m$ after
  a linear coordinate choice and declares uniqueness only up to
  $t\mapsto\zeta t$, $\zeta^m=1$; convergence of $h$ is proved (no
  formal-series gap), and the finite-projection, connected-cover and
  normalisation steps do not assume it.
- The normalisation corollary asserts branch separation and integral closures
  explicitly rather than assuming a normality theorem, and
  `lem-total-fractions-split-over-hypersurface-branches` supplies the
  branch-wise total-fraction splitting without a later normalisation theorem.
- Dimension assertions handle $n\ge1$ uniformly with the $n=1$ cases explicit
  ($\dim_pX=0$; singular locus empty); the pure-codimension and
  singular-locus statements assert nothing about arbitrary analytic ideals.

Choice accounting: 4 of the 29 items declare the Axiom of Choice and list
`def-axiom-of-choice` as a declared dependency —
`lem-dimension-of-holomorphic-germ-ring` (Krull height bound, step 5.2 /
[F8]), `thm-hypersurface-germs-have-pure-codimension-one` (integral-extension
dimension equality, [F6]), `thm-singular-locus-reduced-hypersurface` (only
via [F13] in steps 3.1/4.1/5.1), and B
`ex-regular-hyperplane-hypersurface-germ` (only through
$\dim\mathcal O_{\mathbb C^m,0}=m$, [F7]). All other 25 items are choice-free,
and no incompatible-axiom branch exists anywhere in the pair. There is no
in-run consumer of this pair, so no assumption-propagation action is due in
this run; later consumers must inherit the four declared dependencies.

## 5. Checks actually run

Explicit-path battery on the 29 item files and 2 library pages of the pair,
then the batch gate; all commands were run from the repository root:

- `node tools/tsx-run.mjs tools/precheck.mts <29 explicit item paths>` →
  `21 checked, 0 failing — all clean`. The 8 items with
  `provenance.proof: not-applicable` (7 definitions + 1 remark) are skipped by
  the tool by design; they are covered by rendercheck and content-policy.
- `node tools/rendercheck.mjs <31 explicit paths>` → `OK — 31 file(s)` (no
  wikilink in math, no nested/unbalanced delimiters, no multiline display
  block, every math span parses under KaTeX, every frontmatter block parses).
- `node tools/content-policy.mjs research/frontier-37-owner-30-batch-30.pages.json`
  → `content-policy: 29 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-30.proof-contracts.json --strict`
  → exit 0; `0 error(s), 1 warning(s), 29/29 item(s) checked`. The contract
  file carries 292 citation entries (exact source excerpts), 171 step
  derivations and 8-case boundary worksheets for all 29 items.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` →
  exit 0; `812 item(s) checked across 60 page(s); maximum level 24`; the
  recomputed levels for this pair match every manifest label (table in §3).
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0; declared
  page order acyclic and consistent, no item-level cycles, forward references,
  B-page dependencies or unresolved ids among the 1300 pages with item lists;
  367 planned pages still carry no item list (other pairs' unspliced
  inventories). Only the pre-existing advisory redundant direct page
  prerequisite notes for this A page remain (see §7).
- `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-30.coverage.json`
  → `2 page(s), 65 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/tsx-run.mjs tools/author-check.mts frontier-37-owner-30 30` →
  `ok: true`, fingerprint
  `49be8d2844e147d5b2549abfceac04ae529a54cf82a3f606f8ed236ddbf19065`
  (precheck 21 clean, rendercheck 31 files, content-policy 29/0/0,
  proof-contract 0 errors / 1 warning).
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final`
  → this pair's only open work rows are the two baseline-absent additions;
  the other 27 receipts are current at `confidence 1`.
- Artifact accounting via `tools/dispatch-author-artifacts.mjs`: the 33
  expected carriers (29 item files + 2 library pages + 1 proof-contract file
  + this report) are present and non-empty.

## 6. Flags, escalations and published concerns

- Supplier flags: **none**. Every direct dependency id of every authored item
  resolves — 19 in-run ids inside this pair and 77 published external ids,
  0 missing, 0 unpublished, no `proved_here: false` use. No consumer was left
  citing an unauthored supplier, so no escalated item exists for this pair.
- Escalations: none recorded (`escalate` receipts: 0). Nothing is
  owner-held.
- Potentially defective published items: **none identified** during this
  author-level audit. There is consequently no suspicion or confirmed defect
  to report with ids/evidence/confidence/repair strategy for this pair. This
  is an authoring-readiness conclusion only; Steps 5–8 own the independent
  audit of the published suppliers.
- Residual non-blocking warning: strict proof-contract
  `WARN shotgun-bracket [lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve]: 1.1 cites 5 of 10 declared facts while 2 other step(s) cite none`.
  Judgement: each declared fact is cited at the step that actually uses it
  (step 1.1 uses [F1]–[F5]; steps 3.1 and 10.1 are the contradiction
  assumption and its discharge and use no external fact), so this is a style
  heuristic, not a mathematical or contract error; left unrepaired
  deliberately, because renumbering would invalidate a verified receipt over
  a stylistic warning. Recorded for Step 4/owner visibility only.
- The two baseline-absent additions carry no author receipts by the immutable
  baseline rule, and were deliberately not sent through the ordinary
  self-review loop; the engine is expected to give them the current
  scope/item certifications after this successful dispatch.

## 7. Open obligations carried to Step 4

1. Carried scope observations (record-level; none changes an item claim,
   none blocks this handoff):
   - (i) the SC-5 page `the-dbar-complex-and-integral-solutions` is declared in
     the A page `requires` by the design but is not in any item's transitive
     dependency closure — a plan/owner decision whether to keep or drop it;
   - (ii) Freitag Ch. I §§1–4 is named by the design but was not harvested;
     the pair carries the fetch-verified Demailly text as the second
     independent treatment, and the pair-backing matrix row's “Demailly
     Ch. VIII” label is a similar record-level oddity for a plan refresh;
   - (iii) Lebl Exercise 6.7.6 has no coverage disposition row; its content is
     essentially the branch-separation clause of
     `cor-normalisation-plane-curve-germ` in the pair's own formulation — a
     future coverage refresh could add the row;
   - (iv) Demailly (4.19) is `included` while Lebl 6.7.4 (the general local
     parametrisation theorem, stated without proof there) is `out-of-scope`;
     both dispositions are honest to the declared boundary (finite projection
     retained, disc parametrisation of arbitrary-dimension germs excluded).
2. Pre-splice plan findings: zero for this pair; nothing to reconcile from
   that snapshot in Step 4.
3. Plan splice: `research/plan-spec.json` still carries empty item lists for
   both pages (Step 4 splices; the batch manifest is the inventory of record);
   `validate-plan` reports only the pre-existing advisory redundant direct
   page prerequisite(s) for the A page.
4. Cross-batch input: `research/frontier-37-owner-30-batch-30.cross-batch-dependencies.json`
   remains `[]` (correct — no cross-batch edges); the unified ledger
   `research/frontier-37-owner-30-cross-batch-dependencies.json` already lists
   batch 30 as reviewed and has no edge naming this pair. The serial
   reconciler owns that ledger; this handoff does not touch it.
5. Choice propagation: the four AC-declaring items and their
   `def-axiom-of-choice` dependency are recorded in every receipt and
   contract; any future consumer must inherit the assumption. No in-run
   consumer exists today.
6. Engine certification of the two baseline-absent ids is outstanding by
   rule: if the engine does not certify
   `def-irreducible-hypersurface-germ` and
   `lem-irreducible-holomorphic-germ-is-prime` after this dispatch, the owner
   must be informed, since no author receipt exists for them.
7. The single contract warning in §6 is carried as an advisory only; the
   strict contract gate itself passes with 0 errors and the batch-level
   author-check is `ok: true`.
