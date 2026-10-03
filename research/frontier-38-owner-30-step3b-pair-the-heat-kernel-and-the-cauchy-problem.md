# Step 3b — pair `the-heat-kernel-and-the-cauchy-problem` (batch 3)

Run `frontier-38-owner-30`, role alpha-high, dispatch
`step3b-pair-the-heat-kernel-and-the-cauchy-problem-d0dcde39ded9e2e1`.
Owned pages: A `the-heat-kernel-and-the-cauchy-problem` (order 458.011) and
B `the-heat-kernel-and-the-cauchy-problem-examples` (order 458.012). Batch 3
contains only this pair, so no sibling rows exist to preserve in the shared
batch files; the manifest carries exactly these two pages (20 A + 8 B items).

## Completed items

All 28 in-scope items are authored on disk, registered in the manifest, both
page files, coverage (now 64 harvested rows) and the batch proof contracts, and
checked in the dispatch dependency-level order. Every promised claim of the
scope-repaired scaffold is preserved except the single defective membership
assertion reported as obligation 1 below. No pair was added, no published
content was edited, and no sibling row was disturbed.

Level 0: `def-heat-equation-heat-operator-and-cauchy-problem`,
`def-heat-kernel`. Level 1:
`lem-heat-kernel-normalisation-scaling-and-derivatives`. Level 2:
`lem-first-and-second-moments-of-the-heat-kernel`,
`lem-gaussian-kernels-form-an-approximate-identity`,
`lem-heat-kernel-semigroup-identity`,
`thm-heat-kernel-is-the-causal-fundamental-solution`,
`def-heat-evolution-of-initial-data`, `ex-fourier-transform-of-the-heat-kernel`,
`rem-heat-kernel-conventions-and-diffusivity`. Level 3:
`lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time`,
`thm-heat-cauchy-solution-for-bounded-continuous-data`,
`thm-heat-cauchy-solution-for-lp-data`,
`thm-uniqueness-of-lp-mild-heat-solutions-in-the-convolution-class`,
`lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data`,
`cor-heat-flow-preserves-mass-and-positivity`,
`cor-heat-flow-is-order-preserving-and-lp-contractive`,
`thm-lp-to-lq-heat-kernel-estimate`,
`thm-spatial-derivative-estimates-for-heat-flow`,
`thm-positive-time-spatial-analyticity-of-heat-kernel-solutions`,
`cor-heat-equation-has-infinite-propagation-in-the-positive-kernel-class`,
`ex-gaussian-data-remain-gaussian-under-heat-flow`,
`ex-heat-flow-of-an-indicator-function`,
`ex-self-similar-heat-kernel-solution`. Level 4:
`cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm`,
`ex-heat-evolution-of-affine-and-quadratic-polynomials`,
`ex-heat-lp-to-lq-time-exponent-is-forced-by-parabolic-scaling`. Level 5:
`cex-heat-equation-does-not-have-finite-propagation`.

## Scaffold audit, repairs and registration

- **Statement repair (owner scope action owed).** The scaffold statement of
  `cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm`
  asserted `f=1_{[0,∞)} ∈ L^∞(R) ∩ ⋂_{1≤p<∞}L^p(R)`, which is false:
  `∫_R 1_{[0,∞)} = ∞`, so the half-line witness lies in no finite-`p` space.
  The authored item keeps that half-line witness and its exact value
  `H_tf(0)=1/2` (which only needs the `p=∞` clause of the evolution
  definition), and adds the compactly supported witness `f_0=1_{[0,1)}`,
  which does lie in `L^∞∩⋂_{1≤p<∞}L^p` and satisfies
  `1-∫_0^1Γ(y,t)dy > 1/2` for every `t>0`; the refuted claim is stated
  exactly in the item's `## Statement refuted` section. The batch manifest
  row still carries the scaffold's false membership sentence: amending it is
  an owner/Step-4 action (obligation 1). No other scaffold statement, title,
  kind or ID was changed.
- **Local additions:** none. Every prerequisite is either a published item or
  an earlier item of this pair; no Recorded result and no forward reference is
  used. The six overlay items added by the scope repair are all fully authored.
- **Dependency registration:** item frontmatter `deps` and manifest `deps` are
  now identical for all 28 items (9 items were synchronised), unused scaffold
  deps were dropped (`thm-young-convolution-inequality` on the uniqueness
  theorem; four unused suppliers on the fundamental-solution theorem) and
  actually used published suppliers were added (for example the C¹
  change-of-variables theorem, `thm-chain-rule`, `thm-algebra-of-derivatives`,
  `thm-derivative-of-exponential`, `cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions`,
  `thm-minkowski-integral-inequality`, `thm-newton-leibniz-with-interior-derivative`,
  `thm-exponential-addition-formula`, `cor-mean-value-theorem`,
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
  `prop-indicator-function-is-measurable-iff-its-set-is-measurable`,
  `lem-euclidean-balls-have-positive-finite-lebesgue-measure` and
  `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`).
  Levels were recomputed after every change; all declared
  `dependency_level`s still match the computed ones.
- **Coverage registration:** six items (`def-heat-equation-...`,
  `def-heat-evolution-of-initial-data`, `lem-heat-kernel-semigroup-identity`,
  `cor-heat-flow-is-order-preserving-and-lp-contractive`,
  `thm-lp-to-lq-heat-kernel-estimate`, `rem-heat-kernel-conventions-and-diffusivity`)
  were absent from the harvested row set; six exact-locator `included` rows
  were added to the existing sources (Teschl (6.32)–(6.38) and Problem 6.8;
  MIT Theorem 1.1/(1.1.12); Hunter (5.6)–(5.7) and p. 131; Ivrii §3.1.1),
  each with a support note. Coverage is now 64 rows, 0 errors 0 warnings.
- **Structurally required shape repairs:** all 24 proof-bearing items are
  written in the canonical shape (`## Statement`/`## Example`/
  `## Statement refuted`, `## Facts & Assumptions`, then `## Proof`/
  `## Verification`/`## Counterexample`); the precheck canonical numbering was
  adopted wherever the phase checker proposed it; each numbered step is one
  paragraph with a blank line before it and valid trailing tags.

## Sources

Source backing is the scope-repair's independently verified full-text record
(Hunter complete 242-page PDF fetched 2026-10-03, SHA256
`0dbade1806f7a1ea79cc444a0eecfe19e157b286c964f1f48f2d744c460c12dd`, printed
pp. 129–131 and 137 read in full; MIT Lecture 5 complete note; archived Teschl
§6.2; Ivrii §§3.1–3.2), together with the eight verified source entries in
`research/frontier-38-owner-30-batch-3.coverage.json`. This dispatch did not
re-fetch the external PDFs; every mathematical use is discharged against a
published library item whose exact statement was read while writing, and the
185 proof-contract citations quote those items verbatim from the sections the
contract checker reads. No unresolved source qualification remains for this
pair: the Hunter p. 137 analyticity statement is in the `H^s` setting and is
used only as corroboration, while the authored proof supplies the full `L^p`
argument locally.

## Checks actually run (this dispatch)

- `node tools/tsx-run.mjs tools/precheck.mts` (explicit paths, all 28 items):
  24 phase-bearing items PASS, 0 failing (the three definitions and the remark
  carry no phase body).
- `node tools/proof-layout.mjs` (explicit paths, all 28 items):
  28 items, 117 steps, 0 defects.
- `node tools/rendercheck.mjs` (28 item files + both page files): OK — no
  wikilink inside math, no nested or unbalanced delimiters, no multiline
  display block, every math span parses under the real KaTeX, every
  frontmatter block parses.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-3.pages.json`:
  28 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-3.pages.json`:
  28 items, 0 normalizations, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-3.coverage.json --require-destination`:
  2 pages, 64 harvested results, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`:
  816 items over 60 pages, pass; all 28 declared levels equal the computed
  levels (0,0,1,2×6,3×9,4×11,5 — matching the dispatch order exactly).
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-3.proof-contracts.json --strict`:
  0 errors, 0 warnings, 24/24 items checked, 185 citation entries with verbatim
  quotes and per-step derivations.
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote`: every
  recorded quote occurs in its cited section; no widening candidates.
- `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template`:
  192 boundary rows (48 `not_applicable`), no template clusters and no
  contradicted dispositions.
- `node tools/finite-smoke.mjs ...`: 0 errors (the PDE items carry no
  finite-model obligations in that registry).
- `node tools/risk-report.mjs ...`: 0 errors, 24 items routed to the later
  risk review, no `--require-reviewed` demand at this stage.
- `node tools/validate-plan.mjs research/plan-spec.json`: OK — acyclic page
  order, no item-level cycles, forward references, B-page dependencies or
  unresolved ids; both pages are validated at page level at present.
- `node tools/depcheck.mjs`: no error and no warning names any item of this
  pair (the B-leaf defect found mid-authoring on
  `rem-heat-kernel-conventions-and-diffusivity` was repaired by removing the
  dependency on the examples-page-only item;
  run-wide errors remaining belong to other pairs' in-flight pages).
- `node tools/fwdcheck.mjs`, `node tools/extcheck.mjs`, `node tools/depsource.mjs`:
  no finding names this pair (fwdcheck's current failure is
  `items/thm-singular-inner-function-properties.md`, another pair's item).
- Cross-batch input: `research/frontier-38-owner-30-batch-3.cross-batch-dependencies.json`
  is `[]`, and that remains correct — every dependency of the 28 items is
  either a published item or an earlier item of this same pair, so there is no
  in-run cross-batch edge to declare.

## Pre-splice plan findings recheck

`research/plan-spec.json` already carries both pages with the correct order
(458.011/.012), category `pde`, companion pointers and `requires` (A requires
`poisson-problems-and-interior-harmonic-estimates`, B requires A). Their
`items` lists are still empty and are filled only by the Step-4 splice; no
other Step-4 mismatch is known for this pair at handoff. The manifest lists
exactly 20 A + 8 B ids, all resolving to files on disk, and no page retains a
reference to an unbuilt or unselected pair.

## Concerns and obligations for later stages

1. **Owner action — scaffold statement defect and scope record.** The batch
   manifest row `cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm`
   still carries the false sentence `f=1_{[0,∞)} ∈ L^∞∩⋂_{1≤p<∞}L^p`; the
   authored item file carries the corrected statement (half-line witness kept
   for the exact value `1/2`, compactly supported witness added for the
   intersection class). Remedy: amend that manifest statement text (and, if
   desired, the item title unchanged) at Step 4 or by owner direction; because
   the scope hash covers statement text, applying the amendment changes the
   pair scope hash from `713a5b330961dc200bd7370ca5c277ff75859743b968ee039c20c363a0013b92`
   and will require the owner to re-record `proceed` for the pair (which will
   in turn invalidate the item receipts for this pair, after which fresh
   receipts can be written from the unchanged files).
2. **Run-level scope-decision gate.** `node tools/scope-decisions.mjs check --run frontier-38-owner-30`
   currently reports 302 pending decline decisions across the run, two of them
   on this pair: `§5.1.3 Irreversibility of the heat semiflow` (A page) and
   `Problems 6.7–6.8` (B page). Both rows stand: the first is commissioned for
   the PDE-8 pair `heat-equation-maximum-principles-duhamel-and-smoothing`, the
   second is an exercise set outside this pair's example inventory and consumed
   by no prerequisite. This dispatch did not write the group decision file
   (`research/frontier-38-owner-30-alpha-h-scope-decisions.json`, shared with
   batches 4 and 30) because it is a group artifact owned by the group/owner
   process; the two rows above are ready to be marked `stands` with this
   evidence.
3. **Run-level blocker — sibling YAML defect stops the shared ledger refresh.**
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
   fails parsing `items/thm-mod-two-intersection-number-is-homotopy-invariant.md`
   (line 22, locator containing `$\#f^{-1}(y)+\#g^{-1}(y)$` inside a
   double-quoted YAML scalar): `Invalid escape sequence \#`. The file belongs
   to another pair, so it was not edited here. Remedy: escape the backslashes
   (`\\#`) or use a single-quoted/block scalar in that locator. Batch 3's own
   input is `[]` and needs no row.
4. **Published-item concerns.** No mathematical defect was found in any cited
   published supplier: each statement was read against its exact hypotheses
   while writing, including the endpoint conventions of the
   approximate-identity, Holder, Young and L^p convergence theorems. One
   pre-existing metadata defect surfaced incidentally and is reported for the
   published-defect ledger: the published item
   `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension` declares a
   dependency on `ex-heat-and-poisson-semigroups-as-fourier-multipliers`, which
   is homed only on the B/examples page
   `fourier-multipliers-and-sobolev-characterisations-examples`; depcheck
   reports `[b-leaf-content]` for it. Evidence: `node tools/depcheck.mjs`
   output at handoff; the rule is SCHEMA's B-leaf containment. Confidence:
   confirmed as a metadata/containment defect (not a mathematical error).
   Repair strategy for the owning pair: replace the edge with an A-page
   supplier (for example `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space`
   for the Poisson-extension content) or rehome the example. This pair's own
   dependency of that kind was removed during authoring, so this dispatch is
   not the owner of the remaining edge.
5. **Source-recovery limits.** As recorded by the scope repair, Hunter's
   printed p. 137 states spatial analyticity in the `H^s` setting without
   proof, and Evans was never read; no item attributes a proof of the extended
   `L^p` data classes to either source. No unresolved source qualification
   remains otherwise.

## Handoff

All 28 assigned items and both pages are fully authored and registered.
`node tools/step3-decisions.mjs record-item` was run for all 28 items with the
examined dependency arrays (each item's exact `deps`) and concrete evidence:
27 items are recorded `accept` with confidence 1 and are closed; the corrected
counterexample `cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm`
is recorded `escalate` (owner-held) exactly because its commissioned manifest
statement is defective and the authored file therefore differs from the
scaffold text — that is obligation 1. `checkStep3 --phase final` therefore
shows 27 of the pair's items closed and one owner-held; any receipt invalidated
by the owner action in obligation 1, by a later statement edit, or by another
writer's change to a supplier in the transitive closure will need
re-recording after that change lands. Added suppliers are listed under
"Scaffold audit"; the open obligations are the escalated counterexample
(obligation 1), the run-level scope-decision rows (obligation 2) and the
sibling YAML repair needed for the shared ledger (obligation 3), none of which
is a mathematical gap in this pair.

## Owned IDs (dependency-level order)

Level 0: `def-heat-equation-heat-operator-and-cauchy-problem`,
`def-heat-kernel`. Level 1:
`lem-heat-kernel-normalisation-scaling-and-derivatives`. Level 2:
`def-heat-evolution-of-initial-data`,
`lem-first-and-second-moments-of-the-heat-kernel`,
`lem-gaussian-kernels-form-an-approximate-identity`,
`lem-heat-kernel-semigroup-identity`,
`rem-heat-kernel-conventions-and-diffusivity`,
`thm-heat-kernel-is-the-causal-fundamental-solution`,
`ex-fourier-transform-of-the-heat-kernel`. Level 3:
`cor-heat-flow-preserves-mass-and-positivity`,
`lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time`,
`thm-heat-cauchy-solution-for-bounded-continuous-data`,
`thm-heat-cauchy-solution-for-lp-data`,
`thm-lp-to-lq-heat-kernel-estimate`,
`ex-gaussian-data-remain-gaussian-under-heat-flow`,
`ex-heat-evolution-of-affine-and-quadratic-polynomials`,
`ex-self-similar-heat-kernel-solution`. Level 4:
`cor-heat-equation-has-infinite-propagation-in-the-positive-kernel-class`,
`cor-heat-flow-is-order-preserving-and-lp-contractive`,
`lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data`,
`thm-positive-time-spatial-analyticity-of-heat-kernel-solutions`,
`thm-spatial-derivative-estimates-for-heat-flow`,
`thm-uniqueness-of-lp-mild-heat-solutions-in-the-convolution-class`,
`cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm`,
`ex-heat-flow-of-an-indicator-function`,
`ex-heat-lp-to-lq-time-exponent-is-forced-by-parabolic-scaling`. Level 5:
`cex-heat-equation-does-not-have-finite-propagation`.

## Open obligations at entry

1. All 28 item files are absent; every item must be authored from the
   scope-repaired scaffold preserving its exact statement.
2. Both page files (`library/pde/the-heat-kernel-and-the-cauchy-problem.md`,
   `library/pde/the-heat-kernel-and-the-cauchy-problem-examples.md`) are absent.
3. `research/frontier-38-owner-30-batch-3.proof-contracts.json` is absent.
4. 28 Step-3b item decisions are owed (none recorded).
5. Run-level: `tools/scope-decisions.mjs check --run frontier-38-owner-30`
   currently fails with 302 pending decline decisions, two of them on this
   pair (`§5.1.3 Irreversibility of the heat semiflow`; `Problems 6.7–6.8`).
   This is a run-wide gate, not a per-pair artifact; flagged for the owner
   below with this pair's two rows shown to stand.

## Checkpoint log

- Entry: read the dispatch, `briefs/group-author.md`, `briefs/alpha.md`,
  `CLAUDE.md`, `SCHEMA.md`, the scope repair
  (`research/frontier-38-owner-30-batch-3.scope-repair.md` and `.json`), the
  Step 3a owner scope decision (`proceed`, sha
  `713a5b330961dc200bd7370ca5c277ff75859743b968ee039c20c363a0013b92`), the
  batch manifests, coverage (58 rows), and the cross-batch input (`[]`).
  Verified: all 54 external dependency IDs resolve to published items on disk;
  `manifest-deps` 28 items 0 errors; `coverage-checklist --require-destination`
  2 pages 58 rows 0 errors 0 warnings. The owner scope proceed is current
  (no statement, title, kind or id is changed by authoring), so item decisions
  can be recorded at handoff.

- Authored and precheck-clean so far (draft files on disk):
  `def-heat-equation-heat-operator-and-cauchy-problem`, `def-heat-kernel`,
  `lem-heat-kernel-normalisation-scaling-and-derivatives`,
  `def-heat-evolution-of-initial-data`,
  `lem-first-and-second-moments-of-the-heat-kernel`,
  `lem-gaussian-kernels-form-an-approximate-identity`,
  `lem-heat-kernel-semigroup-identity`,
  `rem-heat-kernel-conventions-and-diffusivity`,
  `thm-heat-kernel-is-the-causal-fundamental-solution`,
  `ex-fourier-transform-of-the-heat-kernel`. Manifest dep additions on this
  pair only (all published suppliers): smoothness/positivity, C¹
  change-of-variables, chain/product rules and exp derivative on the
  normalisation lemma; `thm-lebesgue-outer-measure-...` on the evolution
  definition; Gaussian integral, product-measure completion and the L¹
  change-of-variables corollary on the moments lemma; C¹ change of variables
  on the approximate-identity lemma; five integration suppliers on the
  semigroup lemma; `cor-mean-value-theorem` on the fundamental-solution
  theorem; `ex-heat-and-poisson-semigroups-as-fourier-multipliers` on the
  diffusivity remark. Levels rechecked: `item-dependency-levels` 816 items
  across 60 pages, pass.
