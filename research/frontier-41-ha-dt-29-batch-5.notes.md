# Batch 5 notes — Morse trajectory moduli spaces and the Morse differential

Run `frontier-41-ha-dt-29`, role beta, label batch-5, covers 5. Date 2026-10-05.
Owned pair: `morse-trajectory-moduli-spaces-and-the-morse-differential` (A, order 537) and
`morse-trajectory-moduli-spaces-and-the-morse-differential-examples` (B, order 538).

## 1. What was constructed

Output manifest `research/frontier-41-ha-dt-29-batch-5.pages.json`: 17 A-page items and
5 B-page items, each with an explicit `deps` array, a statement, a proof strategy,
provenance and per-item sources, and a computed `dependency_level`. Coverage record
`research/frontier-41-ha-dt-29-batch-5.coverage.json`. Readiness records
`research/frontier-41-ha-dt-29-step1-<id>.json` for all 22 items (decision `ready`).
Cross-batch input `research/frontier-41-ha-dt-29-batch-5.cross-batch-dependencies.json`
(empty array — this pair has no cross-batch dependency inside the run).

A page (all design ids preserved; dependency_level in brackets):

0. `def-mod-two-morse-chain-group` [0]; 0. `def-broken-morse-trajectory` [0];
0. `def-orientation-line-of-a-morse-critical-point` [0];
1. `def-geometric-convergence-to-a-broken-morse-trajectory` [1];
1. `lem-breaking-length-is-bounded-by-index-drop` [1];
1. `lem-unstable-orientations-induce-trajectory-moduli-orientations` [1];
2. `thm-morse-trajectory-compactness-up-to-breaking` [2];
2. `lem-gluing-broken-index-two-trajectories-gives-collar-ends` [2];
3. `cor-index-one-trajectory-moduli-spaces-are-finite` [3];
3. `rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package` [3];
4. `def-mod-two-morse-differential` [4];
4. `thm-index-two-compactification-is-a-compact-one-manifold-with-boundary` [4];
5. `thm-mod-two-morse-differential-squares-to-zero` [5];
5. `def-signed-morse-differential-over-the-integers` [5];
5. `lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli` [5];
6. `thm-integral-morse-differential-squares-to-zero` [6];
7. `rem-morse-homology-over-the-integers-does-not-require-orientability-of-m` [7].

B page: `ex-morse-complex-of-the-circle` [6], `ex-morse-complex-of-the-two-sphere` [6],
`ex-broken-trajectories-in-an-index-two-torus-moduli-space` [5],
`ex-changing-an-unstable-orientation-changes-two-basis-signs` [7],
`cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero` [7].

The sixteen design ids of DT-9's `l`-list plus the design's 17th remark are all present;
no item was dropped, no page split was needed (17 + 5 items is far below the 100-item cap).

## 2. Design / plan comparison and recorded conflicts

- `research/plan-spec.json` gives the page at order 537 with exactly the four declared
  `requires` of the dispatch and an empty item list (items land as the page is authored).
  No plan conflict was found for the page, its order, its requires, or its companion.
- The design lists its item 8 (index-two compactification theorem) **before** its item 9
  (gluing lemma), but the theorem's boundary identification uses the gluing lemma. The
  manifest orders the gluing lemma first (no forward dependency); both ids are unchanged.
  This is a design-order correction, not a scope change.
- The design's item 4 ("compactness up to breaking") is strengthened to include the
  compactification's metrizability, second-countability, openness/density of the interior
  and the height-parametrization homeomorphism, because items 6, 9 and 10 of the design
  consume those clauses and no other item supplies them. This did not add an item id.
- The design's item 5 overlaps the published DT-4 lemma
  `lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices`.
  It is kept, but specialised: it records the finite product decomposition of
  `Mbar(p,q)` and the drop-two case (unique intermediate index `λ(p)−1`), and cites the
  published lemma instead of re-minting it.
- Design source line suggested `N §§2.5 and 4.4–4.5`. In this scaffold `N §2.5` is used
  (oriented complex, no ambient orientability); `N §§4.4–4.5` was not needed by any item
  statement and was not read or harvested, so it carries no disposition.
- Plan §8's DT-9 row names Audin–Damian + Ritter (+ Cohen). Those three are harvested in
  full for the ranges claimed. Because the design's item 14 (boundary orientation sign)
  is explicitly left to the reader by Audin–Damian §3.3–3.4 and is omitted by Ritter
  (Lecture 19 says orientations are left out of the course), two treatments that perform
  the sign computation were added and read: Fowdar §§5–8 and Abbondandolo–Majer §2.8.
  No source shortfall remains; no `source_resolution` is needed.

## 3. Dependency and readiness verification

- All in-run dependencies of batch 5 are inside batch 5 itself; every other `deps` entry
  resolves to a **published** item on disk (checked file-by-file): DT-3 items, DT-4 items
  (including the post-2026-09-24 repaired `lem-morse-smale-transversality-…`,
  `lem-universal-metric-trajectory-projection-is-fredholm`,
  `lem-first-order-asymptotically-hyperbolic-operator-is-fredholm`), the DG orientation
  items, the Ascoli–Arzelà/metric-compactness items, the function-space topology items
  and the compact-one-manifold boundary lemmas. No circular, forward, missing or
  non-positive-drop dependency remains; every `[[link]]` in a statement or strategy is
  declared in that item's `deps` (checked mechanically).
- B-page leaf invariant: every B item depends only on A items of this pair or on earlier
  items of the same B page (B item 5 depends on B item 3). No dependency reaches any
  other B/examples page, and no A item depends on a B item.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` fails **only**
  on the 28 not-yet-scaffolded batches ("empty scaffold inventory"); at the time of
  writing, batches 1, 2, 5, 9, 21 and 25 are populated. For batch 5 alone all 22 labels equal
  the tool's computed levels (verified with the same algorithm); batch 1/9/21/25 items
  introduced no cycle or label error affecting batch 5.
- `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` reports other
  batches' items as missing readiness records, as expected; all 22 batch-5 items are
  closed `ready` with their examined dependency lists and evidence, and records were
  refreshed after every manifest edit.

## 4. Axiom-strength bookkeeping

- The Axiom of Choice is declared in `thm-morse-trajectory-compactness-up-to-breaking`
  (the published equicontinuity/Arzelà–Ascoli supplier assumes AC), in
  `cor-index-one-trajectory-moduli-spaces-are-finite`, in the gluing lemma and the
  index-two theorem (the published Fredholm/implicit-function suppliers assume AC), in
  `lem-boundary-orientation-…` and in `thm-integral-morse-differential-squares-to-zero`.
- Choice-free items: both chain-group/differential definitions, the broken-trajectory and
  geometric-convergence definitions, the orientation-line and unstable-orientation items,
  and both remarks. `AC_ω`/DC enter only through `thm-metric-compactness-equivalences`
  and the published boundary-count lemmas, and are recorded in the strategies.
- No item consumes a Recorded result to prove a replacement, and no path reaches
  `deferred-set-theory-beyond-choice`.

## 5. Sources, stamps and coverage

- Sources harvested (all URLs live and full text fetch-verified):
  Audin–Damian, *Morse Theory and Floer Homology*, Ch. 3 §§3.1–3.4, printed pp. 55–78;
  Ritter, Part III *Morse Homology*, Lectures 17–19, PDF pp. 76–91;
  Nicolaescu, *An Invitation to Morse Theory*, §2.5, printed pp. 60–66;
  Cohen, *Bundles, Manifolds, and Homotopy*, Ch. 13 §13.4 + Appendix A, printed pp. 507–534;
  Fowdar, *A Functional Analytic Approach to Morse Homology*, §§5–8, printed pp. 35–75;
  Abbondandolo–Majer, *Lectures on the Morse Complex*, §2.8, printed pp. 69–73.
- Two independent full treatments (Audin–Damian, Ritter) plus a monograph
  (Nicolaescu) and a third textbook (Cohen) back every A-page item; the two hardest
  items (compactness/gluing and the boundary sign) each additionally have an analytic
  treatment (Fowdar; Abbondandolo–Majer).
- The circle example is not stated verbatim by any source at the claimed ranges; it is
  disposed through the page-level `canonical` harvest row as the direct two-trajectory
  instance of this page's definitions.

## 6. Command results (actual)

| check | result |
|---|---|
| `coverage-checklist --require-destination` (batch 5) | 2 pages, 55 harvested results, 0 errors, 0 warnings |
| `source-fetch-check --stamp` / check (batch 5) | 9/9 sources fetch-verified; check mode 9/9 resolved |
| `url-sweep --recover --fail-on-dead` (batch 5) | 6/6 live, 0 failed, 6 citation decisions |
| `source-backing` (batch 5) | 23 authored results, all backed |
| `manifest-deps` (all present batches) | 148 items, 0 missing, 0 errors |
| `content-policy --manifest-only` (all present batches) | 148 scoped items, 0 errors, 0 warnings |
| `validate-plan research/plan-spec.json` | exit 0; acyclic order, no item-level cycles/forward refs/B-page deps/unresolved ids among pages with item lists |
| `extcheck` | exit 0 (no new unproved consequences from this batch) |
| `drift-review-check --run` (+`--before-apply`) | 29 pages reviewed, 0 blocked edges; this page `no-drift` |
| `frontier-dependency-ledger refresh --run` | refreshed; 0 edges for batch 5 (`[]` input) |
| `frontier-dependency-ledger refresh --require-reviewed` | fails only because other batches have not supplied their inputs yet |
| `item-dependency-levels check --run` | fails only on other batches' empty inventories (see §3) |
| `step1-decisions check --run` | all batch-5 items ready; other batches incomplete (see §3) |

## 7. Published items examined; possible findings for the canonical ledger

- **Minor formatting defect (published).** `items/def-parametrized-morse-trajectory-space.md`
  line 26 contains `p,qquad \lim_{t\to+\infty}` (missing backslash) in the displayed
  endpoint equations: the second separator renders as literal “qquad”. Exact evidence:
  `sed -n 26p items/def-parametrized-morse-trajectory-space.md`. Publication state:
  `status: published` (frontier-32). Planned supplier: none needed; repair strategy:
  replace `,qquad ` by `,\qquad `. Not repaired here (published content is outside this
  scaffold's write scope; the defect is typographical and does not affect any statement
  this batch consumes).
- **Ledger reconciliation candidate.** `research/published-consumer-supplier-ledger.md`
  (entry around line 1450) records `lem-morse-smale-transversality-is-equivalent-to-
  surjectivity-of-the-linearized-flow-operator` as a U-P candidate whose proof invoked an
  unsupplied asymptotically hyperbolic first-order operator theorem. On disk the item now
  (verification dated 2026-09-24) depends on the published
  `lem-first-order-asymptotically-hyperbolic-operator-is-fredholm` and
  `lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse`, so the finding
  appears superseded by the September repair runs; flagged for owner reconciliation of the
  canonical ledger rather than edited here.
- No other defect was found in the published prerequisites actually consumed by this
  batch (DT-3/DT-4 A-page items, DG orientation items, topology items).

## 8. Remaining uncertainty and next steps

- Step 3 must supply the analytic details that the strategies name: the uniform
  square-root/equicontinuity constants in the compactness proof, the linear gluing
  isomorphism and uniform right inverse in the collar lemma, and the exact sign
  normalisation in the boundary-orientation lemma. The page fixes the conventions once
  (unstable-manifold orientations; flow-first on parametrized moduli; outward-normal-first
  on the compactified boundary) and every later item cites them, so a single global
  convention choice propagates.
- Owner/operator reconciliation and the engine gate follow construction; these readiness
  records are not independent mathematical approval.

---

## Step 3b authoring record (alpha-high, 2026-10-06)

Author: `step3b-pair-morse-trajectory-moduli-spaces-and-the-morse-differential-5a4487d2726e34ef`.
Report: `research/frontier-41-ha-dt-29-step3b-pair-morse-trajectory-moduli-spaces-and-the-morse-differential.md`.

- All 17 A design items and all 5 B design items are authored in `items/` with complete
  statements, facts, proofs and source locators; both library pages are written as drafts.
- **One local supplier added on the A page:**
  `lem-broken-trajectories-are-limits-of-ordinary-trajectories` (level 2), consumed by
  `thm-morse-trajectory-compactness-up-to-breaking` for the density clause of its part (2).
  The general gluing existence statement is not supplied by the drop-two collar lemma, so
  the scaffold's own compactness strategy (pre-glue + Fredholm + IFT) was factored into this
  lemma. It is a registered addition (manifest, coverage canonical row, proof contract, page).
- **One scaffold statement repaired before authoring:** in
  `lem-breaking-length-is-bounded-by-index-drop`, the clause "every broken trajectory is
  once-broken" in index drop two is false for ordinary (length-one) trajectories, e.g. the
  tilted-torus interior `M(a,d)`; the authored clause restricts it to length `r >= 2`. The
  same correction is reflected in the manifest statement.
- **Choice accounting.** AC/AC_omega hypotheses are declared in the Given blocks and deps of
  every item whose proof spends them: compactness, finiteness corollary, gluing, index-two
  compactification, boundary orientation, integral `d^2=0`, both differential definitions,
  the orientation lemma and the four affected B items. `def-axiom-of-choice` and the bridge
  `thm-choice-implies-dependent-implies-countable-choice` are declared where AC has to
  discharge AC_omega/DC suppliers. The broken-trajectory, chain-group, geometric-convergence
  and orientation-line definitions and the two remarks remain choice-free.
- **Level recomputation.** The addition moved `thm-morse-trajectory-compactness-up-to-breaking`
  from level 2 to 3 and every downstream item of this pair by +1 (final levels: A page
  0,0,0,1,1,1,2,2,3,3,4,4,5,5,6,8 and B page 6,7,8,8,9 as recorded in the manifest). The
  cascade also raises the *computed* levels of 24 batch-6 items that its manifest already
  records; those labels are owned by the batch-6 writer and must be refreshed (exact IDs in
  the Step 3b report).
- **Decisions.** The 22 original scaffold IDs could not be recorded in this dispatch:
  `record-item` refuses while the pair scope is open, and the scope hash changed because of
  the statement repair and the addition. The engine's `auditor-created-certifications` pass
  closes both (baseline 3a review sha `1089175094...` matches the baseline scope hash; the
  addition is certified from this dispatch's result). A follow-up final-phase dispatch records
  the 22 item decisions.
- **Checks (actual).** `proof-layout` 23 items/66 steps, 0 defects; `precheck` 15 checked,
  0 failing (23 explicit paths); `rendercheck` 23 files OK; `content-policy` (batch-5
  manifest) 23 scoped items, 0 errors/0 warnings; `proof-contract --strict` on the batch-5
  file 0 errors, 15/15; `finite-smoke`/`boundary-audit`/`citation-fidelity` clean on batch 5;
  `coverage-checklist --require-destination` 2 pages/56 rows, 0 errors; `manifest-deps`
  23 items, 0 errors; `validate-plan` OK; `item-dependency-levels` reports no error for any
  batch-5 item (the 32 reported mismatches are all outside this batch); `depcheck` reports
  no finding touching this pair (the repository carries 1060 pre-existing errors elsewhere);
  `fwdcheck` fails only on `thm-smale-hirsch-for-open-source-manifolds` (batch 17);
  `extcheck` OK; `frontier-dependency-ledger refresh --run` refreshed, batch-5 input `[]`.

### Final re-verification (same dispatch, end of session)

Items untouched since the checks above; re-ran every gate on the frozen batch-5 content.
Batch-scoped results unchanged: `proof-layout` 23/66/0, `precheck` 15 checked/0 failing,
`rendercheck` OK, `content-policy` 23/0/0, `proof-contract --strict` (batch-5 file) 0/0
15/15, `finite-smoke` 0 errors, `boundary-audit` 120 rows/5 n-a/no contradicted/no
template, `citation-fidelity` all quotes found, `coverage-checklist` 2 pages/57 rows/0
(after the Nicolaescu 4.4-4.5 disposition below was added),
`manifest-deps` 23/0, `validate-plan` OK, `item-dependency-levels` no batch-5 error (52
mismatches elsewhere at the final check). Run-wide counts moved with other writers:
`depcheck` 1400 findings (none naming a batch-5 ID), `fwdcheck` 84 errors (none batch-5),
`extcheck` OK; `frontier-dependency-ledger refresh` now aborts on batch-19's
cross-batch input, with batch-5's own input `[]`. Manifest and item frontmatter
`dependency_level`s re-checked pairwise (23/23 equal). The 22 original items still carry no
recorded decision because the pair scope is open ("current scope review required"), exactly
as documented in the report §6; the engine's `step3-auditor-items.mjs` baseline for this
pair stores 17 items and scope sha `1089175094776a26…`, equal to the Step 3a `sufficient`
review sha, so the certification pass can close the delta.

Also in this pass: the Step 3a design-source finding (Nicolaescu sections 4.4-4.5, printed
pp. 183-200, no coverage disposition) is closed by an added `out-of-scope` row in the
batch-5 coverage file, with the review's reason (no DT-9 item consumes the range; its
Prop. 4.4.2/4.4.3 and Example 4.4.4 are covered by item-linked rows). Coverage now
`57 harvested results, 0 errors, 0 warnings` under `--require-destination`.
