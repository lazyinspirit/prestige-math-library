# Step 3b dispatch report — A/B pair `complete-reducibility-for-compact-groups`

- Run: `frontier-37-owner-30`
- Role: alpha-high (Step 3b scaffold auditor and item author)
- Batch: 15 (`research/frontier-37-owner-30-batch-15.pages.json`; only this pair)
- A page: `complete-reducibility-for-compact-groups` (14 items)
- B page: `complete-reducibility-for-compact-groups-examples` (4 items)
- Dispatch task: `research/frontier-37-owner-30-step3b-pair-complete-reducibility-for-compact-groups-ae6fd3b9f16c058e.task.md`
- Date: 2026-09-30

## 1. Completed item IDs

All 18 assigned items are authored (`status: draft`, `origin: pipeline`,
`pipeline_run: frontier-37-owner-30`), on the A/B pages above, with proof
contracts in `research/frontier-37-owner-30-batch-15.proof-contracts.json` and
Step-3b item decisions recorded (18/18 closed; scope review receipt for the pair
remains current and `sufficient`).

Level 0 (A): `def-averaged-hermitian-form-for-a-compact-group` (accept),
`def-haar-averaging-operator-on-hom-spaces` (accept),
`lem-a-compact-scalar-identity-forces-finite-dimension` (accept),
`lem-compact-convolution-operators-are-hilbert-schmidt` (repaired),
`lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous` (accept),
`lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements`
(accept).

Level 0 (B): `cex-haar-averaging-does-not-produce-a-finite-measure-for-a-noncompact-group`
(repaired — drafted "Statement refuted" had its conclusion inverted),
`ex-compact-group-with-no-faithful-finite-dimensional-representation` (accept).

Level 1 (A): `lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner`
(repaired — missing step tag), `lem-averaging-makes-a-finite-dimensional-representation-unitary`
(accept), `lem-haar-averaging-projects-onto-the-intertwiner-space` (accept).

Level 2: `thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional`
(accept), `thm-finite-dimensional-compact-group-representations-are-completely-reducible`
(accept), `ex-averaging-a-form-for-a-circle-representation` (B, accept).

Level 3: `def-compact-group-isotypic-projection` (accept),
`thm-schur-orthogonality-for-compact-groups` (repaired).

Level 4: `thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections`
(repaired).

Level 5 (B): `ex-isotypic-projections-for-a-finite-group-as-a-compact-group`
(repaired).

## 2. Repairs made during authoring (concrete defects, with evidence)

1. **`thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections`**
   (two repairs, both in-session).
   - The drafted step 1.7 built the auxiliary intertwiners from
     `ψ_{i,w}(y)=∫conj(⟨w,σ(k)e_i⟩)⟨y,π(k)v⟩dμ`, which is conjugate-linear in
     `w`; the resulting `A_i` was conjugate-linear and equivariance failed.
     Replaced by the Bochner averages
     `A_i(w)=∫_K⟨w,σ(k)e_i⟩π(k)v dμ(k)` (linear in `w`, intertwining via
     `k↦h^{-1}k`, image a σ-copy by Schur), with fact [F8] rewritten to the
     Bochner framework and deps updated (dropped
     `thm-riesz-representation-for-hilbert-space`,
     `def-dimensional-linear-subspace`; added the five Bochner items and
     `def-countable-choice`).
   - Step 1.4 claimed a single substitution `k↦kg` turns
     `∫conj(χ(k))⟨π(kg)v,y⟩dμ(k)` into
     `∫conj(χ(k))⟨π(gk)v,y⟩dμ(k)`; that equality needs the class-function
     identity and a second substitution, and the single-substitution reading is
     false for a non-abelian character weight. Rewritten as the chain
     `k=ug^{-1}` (right translation), `χ(ug^{-1})=χ(g^{-1}u)` [F3], `u=gk`
     (left translation), tags now [F2, F3, F4]. The **claim** (equivariance) was
     true; the written argument was not. Confidence in the defect: high
     (one-line check with a non-abelian finite group; the corrected chain was
     independently re-derived before editing).

2. **`thm-schur-orthogonality-for-compact-groups`** (found this session).
   Step 1.4 contained a false intermediate equality
   `Σ_i⟨e_i,v'⟩⟨v,e_i⟩=⟨v,Σ_i⟨e_i,v'⟩e_i⟩`: with `d=1`, `v=v'=i` the left side
   is `⟨v,v'⟩=-i` while the right side is `⟨v',v⟩=i`. The endpoint
   `tr(T)=⟨v,v'⟩` is correct. Rewritten as
   `Σ_i⟨e_i,v'⟩⟨v,e_i⟩=Σ_i⟨v,e_i⟩⟨e_i,v'⟩=⟨Σ_i⟨v,e_i⟩e_i,v'⟩=⟨v,v'⟩`, and
   [F5] extended to record linearity of the pairing in the first variable for
   finite sums (target `def-real-and-complex-inner-product-space`, already a
   dep). Confidence: high (scalar `d=1` counterexample to the printed equality).

3. Earlier-session repairs recorded in the item decisions and notes:
   `cex-haar-averaging-…` (inverted drafted statement, rewritten to the manifest
   claim); `lem-compact-convolution-operators-…` (missing `[A1]` tag on step
   3.1); `lem-a-rank-one-…` (missing `[A10]` tag on step 5.2);
   `ex-isotypic-projections-…` (step 6.1 irreducibility reason via
   `cor-finite-dimensional-subspaces-are-closed`, plus character-level
   inequivalence of `σ_0,σ_1`).

After each repair the affected contracts were regenerated with
`tools/regen-contract-entries.mjs`; the strict contract gate returns to 0
errors. Items whose inputs changed after a decision was recorded would have
required a fresh decision; the decisions were recorded **after** the last edit,
so all 18 receipts match the current bytes.

## 3. Checks actually run (batch 15, current bytes)

| Check | Command | Result |
|---|---|---|
| precheck (explicit paths, 18 items) | `node tools/tsx-run.mjs tools/precheck.mts <18 item paths>` | PASS — 15 proof-bearing checked, 0 failing; 3 definitions have no phase body |
| rendering | `node tools/rendercheck.mjs <18 items> <both library pages>` | OK — 20 files, no wikilink-in-math, no multiline display block, all math parses under KaTeX |
| content policy | `node tools/content-policy.mjs research/frontier-37-owner-30-batch-15.pages.json` | 18 scoped items, 0 errors, 0 warnings |
| proof contracts (strict) | `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-15.proof-contracts.json --strict` | 0 errors, 0 warnings, 18/18 |
| boundary audit | `node tools/boundary-audit.mjs … --fail-on-template --fail-on-contradicted` | exit 0; no template clusters; no contradicted rows; 2 rows upheld by review (`def-haar-averaging-operator-on-hom-spaces` iff rows) |
| citation fidelity | `node tools/citation-fidelity.mjs … --fail-on-missing-quote` | 0 missing quotes; no widening candidates |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | 812 items / 60 pages, no errors; batch-15 item order and levels clean |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | OK — acyclic page order, no item-level cycles, no B-page deps, no unresolved ids among pages that carry item lists |
| Step-3 decisions | `tools/step3-decisions.mjs record-item` × 18, then closure check | 18 recorded (12 accept, 6 repaired), 18/18 closed; pair scope `sufficient` and current |
| run-level dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30 --require-reviewed` | **BLOCKED by another pair** — see §5 |

`content-policy --manifest-only` is the pre-authoring mint check and reports
`batch-item-already-exists` for every authored batch (verified also on a sibling
batch); the plain (post-authoring) invocation is the applicable one and is
green.

Two run-level diagnostics were run for information. `tools/manifest-deps.mjs`
on the batch: 18 items, 0 errors (every row carries an explicit `deps` array).
The repo-wide `tools/depcheck.mjs --quiet` currently reports FAIL, but every
failure it lists is in other pairs' in-progress drafts (unresolved wikilinks and
page listings for not-yet-created items in the scheme-theory/elliptic-curve
work); filtering its output for this pair's 18 item ids and both page ids yields
nothing, so no batch-15 signal is hidden in it.

## 4. Dependency and supplier audit

- No item created in this dispatch: all 18 ids existed in the scaffold and were
  authored in place; **no local suppliers added**, and no promised claim was
  dropped or replaced. Page-level `requires` (all six published) and item-level
  deps are unchanged in kind.
- Every direct dependency of the 18 items resolves either to a **published**
  library item or to an **earlier item of this same pair** (ascending level
  order was audited level by level, and `item-dependency-levels` confirms the
  order). No assigned item cites an unfinished in-run supplier, so **no item
  decision is escalated** for a supplier gap, and no "flagged supplier" row is
  owed.
- B-page items depend only on A-page items and published library items
  (checked by `validate-plan` and by the manifest rows); no B-on-B edge.
- Cross-batch input: `research/frontier-37-owner-30-batch-15.cross-batch-dependencies.json`
  is `[]`. Recomputed independently from current item frontmatter and the run
  manifests: batch 15 declares no cross-batch item edge and no cross-batch page
  edge (the B→A `requires` is intra-batch; all other `requires` targets are
  published and outside the run). Preserved as-is for the serial reconciler.
- AC bookkeeping: the pair assumes AC where Haar-measure existence/uniqueness,
  the Bochner framework (Countable Choice) and the Hilbert-space suppliers
  require it; the choice-free items
  (`lem-a-compact-scalar-identity-forces-finite-dimension`,
  `lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements`,
  `cex-haar-averaging-…`, `ex-compact-group-with-no-faithful-…`) state their
  choice freedom and do not smuggle in a principle; AC is declared in each
  affected statement and consumed at named steps (e.g. `[A1]` in the
  convolution item, `[A6]`/`[A7]`/`[A8]` in the rank-one item).
- No Peter–Weyl, density, dual-sum or `Σ_σ P_σ=I_H` assertion is made anywhere
  in the pair; the coverage's 12 deferrals to RG-22 are respected. The
  recorded Serganova Exercise 2.10 `1/dim ρ` discrepancy is not used (the pair takes
  `P_σ=d_σ∫conj(χ_σ)π dμ`, matching Kowalski Thm 5.5.1(2) and Vogan Cor 2.16).

## 5. Escalation to the owner (cross-group, blocking a run-level gate)

- **What fails.** `node tools/frontier-dependency-ledger.mjs refresh --run
  frontier-37-owner-30 --require-reviewed` dies in `collect()` with
  `YAMLParseError: Invalid escape sequence \c at line 26, column 170` while
  parsing the frontmatter of **`items/def-modular-specht-form-and-radical-quotient.md`**
  (listed in `research/frontier-37-owner-30-batch-23.pages.json`; pair
  `integral-specht-modules-and-modular-simple-modules`). The offending scalar is
  the double-quoted `sources.references[1].title` containing the raw sequence
  `S^lambda/(S^lambda\cap(S^lambda)^perp)`; `\c` is not a legal YAML escape.
- **Why it is not mine to fix.** It is another pair's item file; this dispatch
  forbids editing other pairs' files.
- **Proposed remedy (one character class).** In that title, either double the
  backslashes (`\\cap`, `\\perp`) or convert the scalar to single quotes. The
  ledger reads every item frontmatter of the run, so the whole run's
  `refresh --require-reviewed` gate is red until this is fixed.
- **Blast radius.** Run-level only: batch 15's own cross-batch review input is
  `[]` and its edge set was recomputed as empty (§4); no batch-15 edge is
  blocked by this defect.

## 6. Open obligations at handoff

1. Rerun `frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30
   --require-reviewed` after the batch-23 YAML escape is repaired (§5).
2. `plan-spec.json` still carries empty item arrays for this pair (pages
   510.071/510.072) until the Step-4 splice; `validate-plan` therefore only
   guarantees reading order for the pair. This is the expected pre-splice
   mismatch and is reported for Step 4, not a defect of the batch.
3. The five row-less items flagged by the Step-3a scope review
   (`lem-haar-averaging-projects-onto-the-intertwiner-space`,
   `lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous`,
   `lem-a-compact-scalar-identity-forces-finite-dimension`,
   `ex-averaging-a-form-for-a-circle-representation`,
   `ex-isotypic-projections-for-a-finite-group-as-a-compact-group`) each carry a
   complete local argument now; no residual obligation.
4. No owner-held escalation is overridden; no judge/audit stamp was written; no
   published content, Recorded result or other pair's file was touched.

## 7. Published-item concerns

None raised by this dispatch. The published suppliers actually cited were read
only for the hypothesis-level use recorded in the proof contracts (exact-quote
fidelity is machine-checked), not re-audited as mathematics — that independent
review is Steps 5–8 work. No suspicion of a defect in a published item arose
while authoring; the only recorded source-level discrepancy is the Serganova
Exercise 2.10 prefactor (§4), which is a property of the source, not of a
published item, and is not relied upon.
