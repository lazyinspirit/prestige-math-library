# Step 3b dispatch report — `the-direct-method-and-euler-lagrange-equations`

- Run `frontier-39-analysis-30`, role `alpha-high`, label
  `step3b-pair-the-direct-method-and-euler-lagrange-equations-fc8c37001b0937c9`.
- Pair: A `the-direct-method-and-euler-lagrange-equations` (order 458.039) /
  B `the-direct-method-and-euler-lagrange-equations-examples` (order 458.04),
  batch 15, category `pde`. Both pages live in the single manifest
  `research/frontier-39-analysis-30-batch-15.pages.json`.
- Inventory: **36 items** — 26 A items and 10 B items — and both
  `library/pde/...` pages, all absent from `items/` and `library/` at entry.
- Direct in-run prerequisite pair to inspect:
  `weak-elliptic-maximum-principles-and-holder-regularity` (batch 14).
- Cross-batch consumers: the batch-16 pair
  `constrained-variational-problems-and-variational-inequalities`; its owner
  owns its rows and decisions.

## Entry state (open obligations)

1. Author all 36 item files in the dispatch's dependency-level order (all 36
   absent from `items/` at entry) and both `library/pde/...` pages (absent at
   entry). Statements are frozen by the Step-3a `sufficient` scope decision
   (`research/frontier-39-analysis-30-step3a-review-the-direct-method-and-euler-lagrange-equations.json`);
   only deps and non-scope fields may move.
2. Keep `research/frontier-39-analysis-30-batch-15.pages.json` rows consistent
   with the item files (deps/dependency_level) without touching sibling batches.
3. Write the strict proof contract
   `research/frontier-39-analysis-30-batch-15.proof-contracts.json` with all 36
   items in scope and the 8 standard boundary rows per item.
4. Reconcile the 13 rows of
   `research/frontier-39-analysis-30-batch-15.cross-batch-dependencies.json`
   (1 page + 12 item edges) against actual proof uses; several suppliers are
   sibling drafts still under construction, so their rows stay `open` with the
   consuming step named, and their consumers' decisions are escalated.
5. Record current Step-3b item decisions in dependency order after content and
   manifest rows are final; `accept` only for items whose suppliers are
   authored and verified, `escalate` for consumers of unfinished suppliers.
6. Append a Step 3b checkpoint to
   `research/frontier-39-analysis-30-batch-15.notes.md` (preserve existing
   Step-1 content).
7. Run, on explicit paths and at batch level: `precheck`, `rendercheck`,
   `proof-layout`, `content-policy`, `manifest-deps`,
   `item-dependency-levels`, `validate-plan`, coverage checklist, and the
   strict proof contract against `research/plan-spec.json`.

## Checkpoints

- 2026-10-05 (entry): Step-3a scope decision for the pair is current and
  `sufficient` (rechecked with
  `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase scope`).
  Scaffold audit of all 36 manifest rows complete: hypotheses, sources,
  direct suppliers and proof routes read; statements frozen as scaffolded.
  Toolchain verified in this sandbox (`node tools/precheck.mts`,
  `tools/proof-layout.mjs`, `tools/rendercheck.mjs` all run without the
  `PRESTIGE_APP_DIR` override).

### Checkpoint — dependency level 0 (7 items)

- Authored, checked (`precheck` clean, `proof-layout` 0 defects, `rendercheck`
  OK), and manifest rows synced: `def-gateaux-and-frechet-derivatives-of-a-functional`,
  `def-proper-coercive-and-weakly-lower-semicontinuous-functional`,
  `lem-a-twice-differentiable-local-minimiser-has-nonnegative-second-variation`,
  `lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence`,
  `lem-caratheodory-composition-is-measurable`,
  `lem-fundamental-lemma-of-the-calculus-of-variations`,
  `lem-norm-closed-convex-sets-are-weakly-closed`.
- Dependency additions and their exact uses (recorded for the strict contract):
  - `lem-caratheodory-composition-is-measurable` added
    `thm-lebesgue-measure-is-a-complete-measure` (upgrading an a.e. identity to
    measurability on a complete measure space, used in the final step).
  - `lem-fundamental-lemma-of-the-calculus-of-variations` added
    `def-lebesgue-point-and-lebesgue-set`,
    `thm-almost-every-point-is-a-lebesgue-point`,
    `lem-radial-majorized-kernels-recover-lebesgue-point-values`,
    `def-radial-mollifier-family-in-rn`, `def-countable-choice` and
    `thm-lebesgue-measure-is-a-complete-measure`; the proof is the localised
    Lebesgue-point/mollifier argument (never the distributional embedding
    theorem it is meant to supply, per the scaffold strategy). **Open
    qualification:** the Lebesgue-point suppliers assume the Axiom of
    Countable Choice, so the proof uses ACC while the frozen statement does
    not name it; recorded in the item's Facts and deps and reported here for
    owner reconciliation. Not a scope change.
  - `lem-a-twice-differentiable-local-minimiser-has-nonnegative-second-variation`
    keeps the scaffolded link to the one-variable `def-local-extremum`; the
    proof makes the reduction to the one-variable function
    $\varepsilon\mapsto F(u+\varepsilon v)$ explicit, so the citation is
    load-bearing and within that definition's scope (authoring note).
- `manifest-deps` on batch 15: 36 items, 0 errors.

### Checkpoint — dependency levels 1–2 (11 items)

- Authored, checked and synced: level 1 —
  `def-convex-and-strictly-convex-functionals-on-a-banach-space`,
  `lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed`,
  `lem-boundary-fundamental-lemma-of-the-calculus-of-variations`,
  `lem-coercivity-makes-every-finite-level-minimising-sequence-bounded`,
  `lem-differentiation-of-an-integral-functional`,
  `lem-liminf-passage-makes-the-weak-limit-a-minimiser`,
  `lem-weak-closedness-keeps-the-direct-method-limit-admissible`,
  `thm-first-variation-vanishes-at-an-interior-minimiser`; level 2 —
  `cor-strict-convexity-gives-uniqueness-of-a-minimiser`,
  `lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous`,
  `thm-weak-euler-lagrange-equation-for-integral-functionals`.
- Dependency changes (manifest rows updated in the same pass):
  - `lem-boundary-fundamental-lemma...` added
    `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`
    (AC yields the countable-choice convention under which the boundary
    charts, ambient partitions and bumps lemma are stated).
  - `lem-differentiation-of-an-integral-functional` replaced the unused
    `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`
    (the completed argument obtains the a.e. limit pointwise from the
    $C^1$ calculus; no subsequence extraction is used) and added
    `thm-holder-inequality-for-integrals`, `cor-mean-value-theorem`,
    `thm-chain-rule-for-total-derivatives` and
    `thm-continuous-partial-derivatives-imply-total-differentiability`.
  - `lem-convex-norm-lower-semicontinuous-functionals...` added
    `def-limsup-liminf` (subsequence-in-sublevel-set step) and
    `def-axiom-of-choice` (the closed-convex weak-closure lemma).
  - `thm-weak-euler-lagrange-equation-for-integral-functionals` added
    `thm-sobolev-spaces-are-banach-spaces` and `def-axiom-of-choice`.
- **Choice propagation note (owner-visible).** The frozen statements of
  `lem-convex-norm-lower-semicontinuous-functionals...` and
  `thm-weak-euler-lagrange-equation-for-integral-functionals` (and, below,
  every consumer of the trace/Sobolev framework) do not name a choice
  principle, but their proofs use one through the cited suppliers. The items
  record the exact use in Facts and `deps`; the consumer
  `thm-direct-method-in-a-reflexive-banach-space` states ultrafilter lemma,
  DC and HB explicitly. A statement-wording amendment is an owner decision;
  the mathematical content is unaffected.
- **Statement-wording finding (owner-visible, non-blocking).**
  `cor-strict-convexity-gives-uniqueness-of-a-minimiser`: under the literal
  reading in which a point with $I(u)=+\infty$ can be a minimiser, the claim
  is false ($K=\{0,1\}$, $I\equiv+\infty$ is vacuously strictly convex with
  two distinct minimisers). The item records the standard finite-minimiser
  convention in a Remark and proves the claim under it; the recommended
  owner repair is to add "proper" or "$\inf_KI<+\infty$" to the statement.

### Checkpoint — dependency levels 3–12 (18 items: 8 A and all 10 B items)

- Authored, checked and manifest-synced in ascending level order: level 3 —
  `cor-classical-euler-lagrange-equation-under-regularity`,
  `thm-direct-method-in-a-reflexive-banach-space`,
  `thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional`,
  `cex-nonstrict-convexity-allows-many-minimisers` (B); level 4 —
  `rem-euler-lagrange-is-necessary-not-sufficient-without-convexity`,
  `thm-direct-method-for-convex-integral-functionals`,
  `thm-natural-boundary-condition-for-free-boundary-variations`,
  `cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity` (B),
  `cex-a-minimising-sequence-need-not-converge-strongly` (B),
  `cex-a-norm-closed-nonconvex-set-need-not-be-weakly-closed` (B),
  `cex-euler-lagrange-stationarity-does-not-imply-a-minimum` (B),
  `ex-one-dimensional-euler-lagrange-equation` (B); level 5 —
  `cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity` (B),
  `ex-natural-neumann-condition-from-a-free-endpoint` (B); level 8 —
  `thm-dirichlet-principle-for-poisson-equation`; level 9 —
  `ex-dirichlet-energy-with-affine-boundary-data` (B),
  `ex-fixed-trace-and-free-trace-variations-give-different-boundary-equations`
  (B); level 12 —
  `cor-minimisers-are-classical-when-elliptic-regularity-applies`. Each item
  passed `precheck` (PASS), `rendercheck` (OK) and `proof-layout` (0 defects)
  before the next level was opened.

### Audit findings repaired in this pass (rechecked against current inputs)

1. **`b-leaf-content` (depcheck) on three B counterexamples.** The published
   scaffolding cited B/examples-page-only items for the weak convergence
   `e_k ⇀ 0`. Repaired by replacing `ex-standard-basis-of-ell-two` and
   `ex-coordinate-vectors-converge-weakly-to-zero-in-ell-p` with the published
   A-page `cor-ell-p-duality-by-counting-measure` plus a complete local
   argument: for every bounded functional `Λ` on `ℓ²` the duality corollary
   writes `Λ(a) = Σ a_k b_k` with `b ∈ ℓ²`, so `Λ(e_k) = b_k → 0` by the
   small-tail property of square-summable families. Affected:
   `cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity`,
   `cex-a-minimising-sequence-need-not-converge-strongly`,
   `cex-a-norm-closed-nonconvex-set-need-not-be-weakly-closed`. The last two
   also gained `lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence`
   and a precise use in step 4.1 / the norm-closure argument. The third item
   was narrowed from "any infinite-dimensional Hilbert space" to
   `ℓ²(ℕ,ℝ)`, keeping the design's promised counterexample
   (the unit sphere is norm closed but not weakly sequentially closed).
2. **`cited-not-in-deps`.** Added to `thm-direct-method-for-convex-integral-functionals`:
   `cor-strict-convexity-gives-uniqueness-of-a-minimiser` (used in `[F9]` and
   step 6.1). Added to `thm-dirichlet-principle-for-poisson-equation`:
   `thm-sharp-trace-theorem-for-w-one-p` and `def-hk-and-hk-zero-notation`
   (used in `[F1]` and `[F5]`).
3. **Dimension hypotheses.** `thm-direct-method-for-convex-integral-functionals`
   and `thm-dirichlet-principle-for-poisson-equation` said `n ≥ 1` while
   citing the trace/fractional-boundary theory of
   `def-bounded-c-k-domain-and-boundary-charts`, which assumes `n ≥ 2`; both now
   state `n ≥ 2` in the item and the manifest. The other trace-consuming items
   import `n ≥ 2` through the linked definition, as is the library convention.
4. **Properness in `cor-strict-convexity-gives-uniqueness-of-a-minimiser`.**
   Under the literal reading the scaffold statement is false for
   `K = {0,1}`, `I ≡ +∞` (two "minimisers"); the statement now assumes the
   functional proper, the Remarks record why, and every consumer supplies
   properness (the functionals are finite on their admissible classes).
5. **Content policy.** `lem-w-one-p-is-reflexive` renamed its embedding map
   from `\iota` to `\Phi` (rule `notation-iota-applied`).
6. **Dependency lists** corrected for 26 items to the suppliers actually used
   (exact uses in Facts/steps and the manifest rows), levels recomputed;
   `item-dependency-levels` reports no batch-15 error.

### Strict proof contract and boundary evidence

`research/frontier-39-analysis-30-batch-15.proof-contracts.json` (version 1,
scope = all 37 items) carries, per item, the exact citation quotes with the
proof steps that use each fact, one derivation entry per numbered step with
its stated inputs, and all eight boundary rows (`empty`, `zero`, `one`,
`degenerate`, `endpoints`, `nonempty-choice`, `iff-forward`, `iff-reverse`)
with item-specific evidence. `proof-contract --strict` is clean (0 errors,
0 warnings) for the 36 items whose suppliers are reconciled; the single
remaining error is the citation contract for the not-yet-authored supplier
`cor-smooth-weak-dirichlet-solutions-are-classical` in
`cor-minimisers-are-classical-when-elliptic-regularity-applies`. The boundary
worksheet gives a disposition for every axis: the `empty`/`zero`/`one`/
`degenerate`/`endpoints` axes are `checked` where the item genuinely treats
the case (for example `lem-norm-closed-convex-sets-are-weakly-closed` step 1.1
for `K = ∅`, `lem-fundamental-lemma...` step 1.1 for `g = 0`,
`cex-nonconvex-gradient-energy...` for the one-dimensional sawtooth, the
α = −∞ branch of `thm-direct-method-in-a-reflexive-banach-space`) and
`not_applicable` with a specific reason where the object is not present
(no interval/order structure, no biconditional, no choice use). The
`nonempty-choice` rows name the exact consuming step of each principle:
AC for the weak-closure/separation lemmas and the trace class, the ultrafilter
lemma + DC + HB for the reflexive-subsequence and direct-method statements,
Countable Choice through the Lebesgue-point, mollifier and measure
conventions. `boundary-audit` finds **no template cluster (≥3) and no
contradicted disposition** on the 296 rows. Choice propagation: the frozen
statements of `lem-convex-norm-lower-semicontinuous-functionals...`,
`thm-weak-euler-lagrange-equation-...` and `thm-dirichlet-principle-...`
do not name a choice principle although their proofs use one through cited
suppliers; the exact uses are recorded in Facts and deps and are reported for
owner wording reconciliation (owner-visible, non-blocking).

### Supplier reconciliation (cross-batch input)

`research/frontier-39-analysis-30-batch-15.cross-batch-dependencies.json` now
carries 15 consumer rows. `verified` (12): `thm-poincare-inequality-for-w-one-p-zero`
for `thm-direct-method-for-convex-integral-functionals` (smallness condition
and step 2.3), for `thm-dirichlet-principle...` (`[F5]`, step 5.1), for
`ex-dirichlet-energy...` and for `cex-euler-lagrange-stationarity...`; the
batch-10 items `def-weak-dirichlet-solution-...`, `thm-existence-and-uniqueness-...`,
`cor-inhomogeneous-...`, `lem-classical-solutions-...` and
`thm-weak-neumann-...` for `thm-dirichlet-principle...`,
`cor-minimisers-...` and `ex-fixed-trace-...`; and
`thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian` (authored by
the batch-13 sibling during this pass) for `cor-minimisers-...` step 2.2.
`open` (3): the page prerequisite `weak-elliptic-maximum-principles-and-holder-regularity`
(batch-14 pair still under construction; no batch-15 item cites a batch-14
item, so it is a reading-order edge only) and, for
`cor-minimisers-are-classical-when-elliptic-regularity-applies`, the
unfinished batch-12 supplier `cor-smooth-weak-dirichlet-solutions-are-classical`
(Fact `[F2]`, step 2.1). `frontier-dependency-ledger.mjs refresh` is clean,
0 orphans, and every declared edge has a review row.

### Escalation and decisions

- **Escalated (owner-held):** `cor-minimisers-are-classical-when-elliptic-regularity-applies`.
  Fact `[F2]` and step 2.1 consume
  `cor-smooth-weak-dirichlet-solutions-are-classical` (batch 12,
  `interior-and-boundary-sobolev-elliptic-regularity`), whose item file does
  not exist at handoff; the exact claim to supply is recorded in the
  cross-batch row, and `depcheck` reports exactly that one unresolved id for
  the whole pair (three findings: one `dep-unresolved`, two `link-unresolved`).
  The item is fully authored and states the open obligation in `[F2]`.
  Remedy: author the supplier, reconcile the row and the item use, then
  re-record this decision (only the owner resolves it).
- **Scope decision:** refreshed `sufficient` by this author for the current
  hash ("Step-3b local-repair refresh; author is not the original reviewer;
  recorded for Step-5 scrutiny"), covering the two statement strengthenings
  (f ∈ C² and properness), the two dimension corrections (n ≥ 2), the
  `cex-nonstrict-convexity` wording trim, the three B-counterexample
  localisations and the addition `lem-w-one-p-is-reflexive`; page identity,
  order, kinds and all promised claims are preserved.
  `step3-decisions.mjs check --phase scope` now shows the pair closed.
- **Items:** 35 of the 36 scaffold items recorded `accept` (11) or `repaired`
  (24) with confidence 1 and the examined dependency IDs; the 36th is the
  escalation above. **The addition `lem-w-one-p-is-reflexive` receives its
  scope and item certification from the engine after successful dispatch and
  was deliberately not put through a self-review.**
  `check --phase final` lists exactly two open batch-15 rows: the addition
  (awaiting engine certification) and the escalated consumer.

### Completed IDs

A page (27): `def-proper-coercive-and-weakly-lower-semicontinuous-functional`,
`def-gateaux-and-frechet-derivatives-of-a-functional`,
`lem-norm-closed-convex-sets-are-weakly-closed`,
`lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence`,
`lem-w-one-p-is-reflexive` (**added**),
`lem-caratheodory-composition-is-measurable`,
`lem-fundamental-lemma-of-the-calculus-of-variations`,
`lem-a-twice-differentiable-local-minimiser-has-nonnegative-second-variation`,
`def-convex-and-strictly-convex-functionals-on-a-banach-space`,
`lem-coercivity-makes-every-finite-level-minimising-sequence-bounded`,
`lem-weak-closedness-keeps-the-direct-method-limit-admissible`,
`lem-liminf-passage-makes-the-weak-limit-a-minimiser`,
`lem-differentiation-of-an-integral-functional`,
`thm-first-variation-vanishes-at-an-interior-minimiser`,
`lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed`,
`lem-boundary-fundamental-lemma-of-the-calculus-of-variations`,
`lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous`,
`cor-strict-convexity-gives-uniqueness-of-a-minimiser`,
`thm-weak-euler-lagrange-equation-for-integral-functionals`,
`thm-direct-method-in-a-reflexive-banach-space`,
`thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional`,
`cor-classical-euler-lagrange-equation-under-regularity`,
`thm-direct-method-for-convex-integral-functionals`,
`thm-natural-boundary-condition-for-free-boundary-variations`,
`rem-euler-lagrange-is-necessary-not-sufficient-without-convexity`,
`thm-dirichlet-principle-for-poisson-equation`,
`cor-minimisers-are-classical-when-elliptic-regularity-applies`.
B page (10): `cex-nonstrict-convexity-allows-many-minimisers`,
`cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity`,
`cex-a-minimising-sequence-need-not-converge-strongly`,
`cex-a-norm-closed-nonconvex-set-need-not-be-weakly-closed`,
`cex-euler-lagrange-stationarity-does-not-imply-a-minimum`,
`ex-one-dimensional-euler-lagrange-equation`,
`cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity`,
`ex-natural-neumann-condition-from-a-free-endpoint`,
`ex-dirichlet-energy-with-affine-boundary-data`,
`ex-fixed-trace-and-free-trace-variations-give-different-boundary-equations`.
Both library pages are written as drafts.

### Checks actually run (final pass, explicit paths)

- `node tools/tsx-run.mjs tools/precheck.mts <all 37 items>` — **33 checked,
  0 failing, all clean** (the four non-proof items are three definitions and a
  remark).
- `node tools/rendercheck.mjs <37 items + 2 pages>` — **OK, 39 files**.
- `node tools/proof-layout.mjs <all 37 items>` (single batched command) —
  **37 items, 152 steps, 0 defects**.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-15.pages.json`
  — **37 scoped items, 0 errors, 0 warnings**.
- `node tools/manifest-deps.mjs ...pages.json` — **37 items, 0 errors**.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  — exit 1 whole-run with **0 batch-15 errors**; the 34 reported errors are
  items of sibling pairs still being written concurrently.
- `node tools/validate-plan.mjs research/plan-spec.json` — **exit 0**.
- `node tools/coverage-checklist.mjs ...coverage.json --require-destination`
  — **2 pages, 73 harvested results, 0/0**.
- `node tools/source-backing.mjs --coverage ... --liveness /tmp/b15work/b15-url-liveness.json`
  — **28/28 authored results still backed** by an openable source.
- `node tools/proof-contract.mjs ...proof-contracts.json --strict` — **1 error
  (the escalated missing supplier citation), 37/37 checked**; with
  `--items` equal to the 36 items whose suppliers are reconciled,
  **0 errors, 0 warnings, 36/36**.
- `node tools/boundary-audit.mjs ...proof-contracts.json` — 296 rows,
  **no template cluster, no contradicted disposition**.
- `node tools/depcheck.mjs` — 3 findings for the pair, all naming
  `cor-smooth-weak-dirichlet-solutions-are-classical`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  — refreshed, 0 orphans.
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` — 60/60
  pages, **no scope drift**.
- `node tools/step3-decisions.mjs check --phase scope` — pair closed;
  `--phase final` — 35 closed item decisions, 2 open (addition, escalated
  consumer).

### Published concerns

None found. The published items consumed load-bearingly (FA reflexivity/weak
topology items, the trace and measure items, the convexity/Taylor items, the
ℓ^p–ℓ^q duality corollary, the B/examples items detached above) were read at
their statements and, where load-bearing, at their proofs; no defect was
submitted to the canonical ledger. Owner-visible, non-blocking findings for
Step 4/5: the two statement repairs and two dimension corrections listed
above; the properness amendment of `cor-strict-convexity-...`; the Choice
wording note; and the batch-12 supplier escalation.

### Open obligations at handoff

1. Author batch-12 `cor-smooth-weak-dirichlet-solutions-are-classical` with
   the claim in the cross-batch row, then re-record the escalated consumer
   decision (owner-held).
2. The batch-14 page prerequisite
   `weak-elliptic-maximum-principles-and-holder-regularity` is still under
   construction; the row stays open (no batch-15 item cites it).
3. `lem-w-one-p-is-reflexive` awaits the engine's auditor-item certification
   after dispatch (scope and item), as does the refreshed pair scope
   certification path.
4. Choice-wording reconciliation for the frozen statements listed above.


## Owner follow-up — smooth nonzero boundary lift (2026-10-05)

Case (i) of cor-minimisers-are-classical-when-elliptic-regularity-applies now retains smooth nonzero boundary data by assuming a smooth extension G of g. The proof sets v=u0-G in H^1_0(Omega), derives -Delta v=f+Delta G from compact-test integration by parts and density, applies the zero-trace smooth regularity corollary, then restores G. The current consumer statement, dependencies, manifest and regenerated contract are synchronized; focused proof-layout passes. The Batch-15 cross-batch row stays open for independent re-review, with evidence updated to the repaired proof. No receipt or gate was recorded.

## Current Step 3b receipt refresh — 2026-10-05

The latest task carrier was
`research/frontier-39-analysis-30-step3b-pair-the-direct-method-and-euler-lagrange-equations-717881eba18c3e21.task.md`.
The B15 batch currently has 37/37 current item decisions: 15 `accept`, 22
`repaired`, and no open or escalated item decisions. The four refreshed items
are:

- `thm-dirichlet-principle-for-poisson-equation` —
  `854b989bae5f6ac5434bfd8b465ddc83f55c848e7e046b2fe4e41377fc420c76`;
- `ex-dirichlet-energy-with-affine-boundary-data` —
  `90817af9cd78ce041be9a3a356faa8610c80761a7388c78278bcb3bd44dd47bb`;
- `ex-fixed-trace-and-free-trace-variations-give-different-boundary-equations` —
  `c78a3150cc062dc8655aee5b48e67c0947c342681a4f5ca1312751eaa5e843b7`;
- `cor-minimisers-are-classical-when-elliptic-regularity-applies` —
  `92da8c3326ccd7ffbe2cf82169d0890fd7f13bc6b4022347bbf3c87b91a7f24d`.

The theorem contract's F4 quote now matches the exact current B10 trace-lifting
Statement. Focused strict-contract checking passes for the four items (4/4,
0 errors and 0 warnings), and proof-layout passes (4 items, 19 steps,
0 defects). No B15 item Statement or Definition changed. The scope hash remains
`0554ebe3e770178d55d35c90a6855de9ec7f54a2af1f8bc9b6c53498c80e35b3`.

The affine-energy example's F3/step-4.1 aside now makes the general
Dirichlet-principle choice hypotheses explicit; the unconditional conclusion
still follows from the completion-of-the-square proof. Its unused direct
dependencies on the weak-solution definition and weak Euler-Lagrange theorem
were removed from B15 item frontmatter and the page manifest. The direct B15
cross-batch edge to the weak-solution definition is therefore obsolete and
needs to be marked `removed` by the root-level ledger refresh.

Two consumer edges remain open in the B15 batch cross-batch carrier for the
root-level shared-ledger refresh; I did not edit that carrier or either
supplier:

- `cor-minimisers-are-classical-when-elliptic-regularity-applies` →
  B12 `cor-smooth-weak-dirichlet-solutions-are-classical` (current supplier
  item hash `36cc3dceddb7764d5a36a9aaeb991c5f25016a8c681898cb2b1e8e25b9d0c461`).
- `ex-fixed-trace-and-free-trace-variations-give-different-boundary-equations` →
  B10 `thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace` (current
  supplier item hash `4f26181d019c1d8a87ad25b6adc3f218453fc2f16ccb3fe712df5184432e9b7b`).

Current carrier hashes: B15 scope
`0554ebe3e770178d55d35c90a6855de9ec7f54a2af1f8bc9b6c53498c80e35b3`;
batch-15 manifest `ac9ee23b31fdd438bfbbfc3d1f0ee6231ae6d09e90d3db9b0854f92d279c0627`;
proof contracts `216261913dd3686ec16ff278e6f55621c3644fa4bdc3d996639382ea46e47e39`.
