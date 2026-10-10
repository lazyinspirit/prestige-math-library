# Step 3b authoring report — pair `sr-forces-and-continuum` / `sr-forces-and-continuum-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha-high (Step 3b scaffold auditor and item author); batch 9; 2026-10-09.
- A page: `sr-forces-and-continuum` (order 225, category `special-relativity`, library `physics`).
- B page: `sr-forces-and-continuum-examples` (order 226).
- Controlling design: `research/plan-special-relativity-track.md` L196–L221 (SR09) with the S3/S9/G5 flat-restriction promises; Step 3a scope review `research/physics-em-sr-40-2026-10-08-step3a-pair-sr-forces-and-continuum.md` and receipt `...-step3a-review-sr-forces-and-continuum.json` (decision `sufficient`).
- Owner authoring direction: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, fourth-reconciliation continuum section (continuous symmetric tensors; `C^1` divergence; compactly supported density differences; off-shell divergence identity; dust straight flow; perfect-fluid branch structure; opposite-face flux cancellation; transverse-area factors; zero/nonzero plane-wave branches).

## Owned items and authoring order (assigned dependency order)

| level | item | page | status |
|---|---|---|---|
| 5 | `lem-sr-compact-variation-and-fundamental-lemma` | A | authored |
| 9 | `lem-sr-scalar-field-euler-lagrange` | A | authored |
| 10 | `def-sr-stress-energy-tensor-and-force-density` | A | authored |
| 11 | `lem-sr-scalar-field-hilbert-stress-energy` | A | authored |
| 11 | `thm-sr-stress-balance-and-finite-flux` | A | authored |
| 11 | `cex-sr-prescribed-stress-energy-need-not-be-conserved` | B | authored |
| 11 | `ex-sr-static-tension-stress-balance` | B | authored |
| 12 | `lem-sr-dust-conservation-equivalence` | A | authored |
| 12 | `lem-sr-observer-stress-energy-decomposition` | A | authored |
| 12 | `lem-sr-scalar-field-stress-divergence-identity` | A | authored |
| 12 | `thm-sr-antisymmetric-observer-decomposition` | A | authored |
| 12 | `cex-sr-divergence-free-stress-energy-with-varying-slice-momentum` | B | authored |
| 12 | `ex-sr-box-flux-balance-worked` | B | authored |
| 13 | `lem-sr-perfect-fluid-conservation-equations` | A | authored |
| 13 | `ex-sr-constant-velocity-dust-with-transverse-profile` | B | authored |
| 13 | `ex-sr-dust-stress-energy-under-a-boost` | B | authored |
| 13 | `ex-sr-scalar-field-plane-wave-stress-energy` | B | authored |
| 14 | `ex-sr-perfect-fluid-rest-and-moving-frame` | B | authored |
| 16 | `post-sr-matter-models-and-evolution` | A | authored |
| 17 | `post-sr-matter-isolation-and-total-stress-energy` | A | authored |
| 17 | `pthm-sr-local-stress-energy-conservation` | A | authored |
| 18 | `pthm-sr-integrated-conservation-for-isolated-matter` | A | authored |
| 19 | `rem-sr-continuum-force-and-conservation-scope` | A | authored |

## Open obligations at entry

- **Unfinished in-run suppliers (all 26 out-of-pair `deps` targets).** At entry no
  physics item file existed anywhere in `items/`; every supplier on batches 1–4 and 8
  (`sr-spacetime-primitives`, `sr-lorentz-transformations`, `sr-worldlines-and-clocks`,
  `sr-observer-measurements`, `sr-energy-momentum`) is an unauthored scaffold statement.
  Per the dispatch, consumers are authored anyway and every item whose proof uses an
  unfinished supplier is left `escalate` at `record-item` time, with the supplier ID,
  consumer ID and consuming step flagged below; the escalated decisions stay owner-held
  until the completed supplier and its actual use are reconciled.
- The 35 published imported mathematics suppliers are present and read-only.
- The exhaustiveness of the citation/contract worksheet and all Step-3 gates depend on
  the eventual authored supplier texts; the batch-9 proof contract records exact quotes
  only from authored items (in-pair or imported).

## Checkpoints (per item: claim/conventions, sources, deps, decision, checks, next action)

(appended as each item is completed; see the running log below)

## Final handoff (2026-10-09)

### Status: all 23 owned items authored, checked, and decided

- 23/23 items fully authored on disk. Decisions recorded with
  `tools/physics-support/step3-decisions.mjs record-item` (no `--owner`, no judge
  or audit stamps): **12 `accept`, 11 `repaired`**, every one confidence 1 with
  its examined dependency ID list; receipts live at
  `research/physics-em-sr-40-2026-10-08-step3b-review-<item>.json`.
- The Step 3a scope decision for this pair is closed: review receipt
  `...-step3a-review-sr-forces-and-continuum.json` (`sufficient`) hashes to the
  current scope (`scopeHash`); no owner receipt is required; the run-wide
  `check --phase scope` is closed for all 40 pairs.
- `check --phase final` (run-wide) returns **zero work rows for these 23 items**;
  the remaining open rows belong to other owners' pairs (227 at the time of
  writing) and are not this pair's obligation.
- At entry every in-run supplier item was still an unauthored scaffold, so the
  original plan was to escalate consumers. Before handoff all 26 out-of-pair
  supplier IDs and all 54 imported mathematics suppliers of this batch are
  present and authored on disk, and the 108 cross-batch consumer edges of this
  batch are all reviewed (104 `verified`, 4 `removed` with reasons). The entry
  escalation condition therefore no longer holds and no consumer decision was
  left `escalate`.

### Per-item checkpoint and decision summary

Conventions common to all items: signature $(-,+,+,+)$, $x^0=ct$, SI units only
in the two physical postulates, Riemann (Darboux) integrals, no choice principle
used anywhere. Sources are the three references recorded in the batch manifest
(Crowell, *Special Relativity* rev. 2020-12-10, Ch. 9 pp. 179–197; Tong,
*General Relativity*, 4.5.1–4.5.5 pp. 181–191; Carroll, arXiv:gr-qc/9712019v1,
Ch. 1 pp. 28–30 and Ch. 5 pp. 138–139), with item-level locators as recorded in
each manifest entry; the defective Crowell p. 191 dominant-energy-condition
inequality is excluded everywhere.

| level | item | decision | checkpoint / repair |
|---|---|---|---|
| 5 | `lem-sr-compact-variation-and-fundamental-lemma` | repaired | F8 = exact sum/scalar-multiple/product rules used in steps 1.3, 2.5; claims (a)–(c), choice-free, Riemann-only scope unchanged |
| 9 | `lem-sr-scalar-field-euler-lagrange` | repaired | added cited dependency `def-inertial-frame-and-inertial-chart`; no uncited deps; first variation and both iff directions complete |
| 10 | `def-sr-stress-energy-tensor-and-force-density` | accept | nonproof definition; $C^k$ scope, numerical component conventions, divergence only for $k\ge1$, explicit non-assertion of conservation |
| 11 | `lem-sr-scalar-field-hilbert-stress-energy` | accept | compactly supported metric variation; derivative formula, symmetry and uniqueness by the fundamental lemma; unrestricted open $\Omega$ |
| 11 | `thm-sr-stress-balance-and-finite-flux` | repaired | F5 restated for $n\ge1$ so the repeated-integral citation covers the $\mathbb R^3$/$\mathbb R^4$ boxes; box identity, slice balance, side-flux conservation complete |
| 11 | `cex-sr-prescribed-stress-energy-need-not-be-conserved` | accept | witness $F=(x^1)^2$ gives $f=(0,2x^1,0,0)\ne0$ off a hyperplane; covariance does not imply conservation; refutation complete |
| 11 | `ex-sr-static-tension-stress-balance` | repaired | dropped uncited `thm-algebra-of-derivatives`; F3 = constant/one-variable-restriction facts; $f^1=P'(x^1)$, conservation $\iff P$ constant, $\rho$ unconstrained |
| 12 | `lem-sr-dust-conservation-equivalence` | accept | iff continuity + inertial flow, $\rho\ge0$ branch restricted to $\{\rho>0\}$, affine flow lines; product/contraction steps complete |
| 12 | `lem-sr-observer-stress-energy-decomposition` | accept | pointwise decomposition, horizontality, contraction $T^{ab}n_b=-\varepsilon n^a-c\pi^a$, uniqueness and adapted-frame components; asserts no measurement |
| 12 | `lem-sr-scalar-field-stress-divergence-identity` | accept | off-shell identity; on-shell conservation; converse with exact $d\varphi=0$ caveat; Young cancellation verified |
| 12 | `thm-sr-antisymmetric-observer-decomposition` | repaired | missing supplier `thm-sr-proper-orthochronous-lorentz-algebra` replaced by on-disk `lem-boost-rotation-factorization` (iii); step 5.1 rewritten as a complete $SO(3)$-invariance proof of the $I_1,I_2$ basis; F3 updated |
| 12 | `cex-sr-divergence-free-stress-energy-with-varying-slice-momentum` | repaired | dropped uncited `thm-algebra-of-derivatives`; F2 cites only `def-directional-and-partial-derivatives`; $f=0$ yet $Q^0=ALs$ varies (witness re-verified) |
| 12 | `ex-sr-box-flux-balance-worked` | repaired | dropped uncited `thm-algebra-of-derivatives`; F2 re-cited; identity re-verified ($2A\Delta t\Delta x$ both sides; $72=36+36$) |
| 13 | `lem-sr-perfect-fluid-conservation-equations` | repaired | F1/F2 citations matched to the actual facts (`thm-algebra-of-derivatives`, `def-directional-and-partial-derivatives`, `def-lorentz-form-and-inertia`); divergence identity and iff re-derived |
| 13 | `ex-sr-constant-velocity-dust-with-transverse-profile` | repaired | dropped `thm-sr-proper-time-and-observer-decomposition`, added `def-directional-and-partial-derivatives`; transverse-profile family and finite-box constancy re-verified |
| 13 | `ex-sr-dust-stress-energy-under-a-boost` | accept | boosted components and factorization $T'=\rho n'\otimes n'$ correct; explicitly not a source derivation |
| 13 | `ex-sr-scalar-field-plane-wave-stress-energy` | accept | null plane-wave solves massless equation; $T^{ab}=Kf'^2k^ak^b$, nonnegativity and conservation verified |
| 14 | `ex-sr-perfect-fluid-rest-and-moving-frame` | repaired | missing supplier replaced by `lem-boost-is-proper-orthochronous-with-inverse`; step 3.1 states $\varepsilon'-\varepsilon=(\gamma^2-1)(\varepsilon+P)$, $\varepsilon'\ge\varepsilon$ iff $\varepsilon+P\ge0$ |
| 16 | `post-sr-matter-models-and-evolution` | accept | postulate: scalar/dust/fluid model equations, units and observer readings; asserts no conservation, force law, equation of state or empirical premise |
| 17 | `post-sr-matter-isolation-and-total-stress-energy` | accept | postulate: total-tensor, localisation, failure-of-isolation, unmodelled-matter and exclusion-caution clauses; does not supply $f=0$ |
| 17 | `pthm-sr-local-stress-energy-conservation` | repaired | added `def-lorentz-boost`; step 1.5 computes $T'^{00}=\gamma^2\rho$ from the rank-two law; F5 extended to state both clause (iii) and clause (iv) of `thm-sr-tensor-and-current-transformation` |
| 18 | `pthm-sr-integrated-conservation-for-isolated-matter` | accept | conditional finite-box constancy of $Q^b(s)$, $P^b=Q^b/c$ constant, mass $s$-independent; no four-vector or noncompact claim |
| 19 | `rem-sr-continuum-force-and-conservation-scope` | accept | remark: two force carriers, conditionality of conservation, exclusion list and the defective Crowell inequality |

### Checks actually run on the final text (exact commands)

1. `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/{23 ids}.md`
   → `21 checked, 0 failing — all clean` (the pure definition and remark have no
   phase-format body and are skipped as not-applicable by the checker; the two
   postulates pass nonproof structure).
2. `node tools/physics-support/proof-layout.mjs items/{23 ids}.md` (single batched
   command, rerun after the last edit) → `23 items, 101 steps, 0 defects`.
3. `node tools/physics-support/rendercheck.mjs items/{23 ids}.md library/special-relativity/sr-forces-and-continuum.md library/special-relativity/sr-forces-and-continuum-examples.md`
   → `OK — 25 file(s)`.
4. `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-9.pages.json`
   → `23 scoped item(s), 0 error(s), 0 warning(s)`.
5. `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-9.proof-contracts.json --strict`
   → `0 error(s), 23/23 item(s) checked`; 3 tolerated `shotgun-bracket` warnings
   (`lem-sr-scalar-field-euler-lagrange`, `lem-sr-scalar-field-hilbert-stress-energy`,
   `thm-sr-stress-balance-and-finite-flux`): the named facts are cited at the
   steps that use them and the remaining steps are pure restatements; no padding added.
6. `node tools/physics-support/boundary-audit.mjs …batch-9.proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template`
   → 168 rows, 29 `not_applicable`; no template clusters ≥3; no contradicted
   dispositions.
7. `node tools/physics-support/citation-fidelity.mjs …batch-9.proof-contracts.json --items-dir items --fail-on-missing-quote`
   → `110 citation(s) over 23 authored item(s)`; no missing quotes, no widening
   candidates.
8. `node tools/physics-support/finite-smoke.mjs …batch-9.proof-contracts.json`
   → `0 error(s), 0 check(s)` (no obligations recorded in the ownership field).
9. `node tools/physics-support/risk-report.mjs …batch-9.proof-contracts.json`
   → `0 error(s), 23 item(s) routed` (routing signal for Step 5; the two
   postulates and the two `pthm-` items are the higher-routed ones).
10. `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool depcheck`
    → run-wide FAIL, **0 findings touching the 23 owned items** (the batch's one
    former `cited-not-in-deps` finding, on `lem-sr-scalar-field-euler-lagrange`,
    is fixed).
11. `… --tool fwdcheck` and `… --tool extcheck` → run-wide FAIL, **0 findings
    touching the owned items**.
12. `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
    → one run-wide error outside this batch
    (`lem-em-outgoing-source-helmholtz-and-diffraction`: level 1 vs computed 0);
    all 23 batch-9 levels match the computed values.
13. `… --tool validate-plan` against `research/plan-spec.json` → one row for this
    page (below); other rows are on EM pages.
14. `node tools/physics-support/step3-decisions.mjs check --run … --phase final`
    → 0 work rows for the 23 owned items (run-wide not yet closed: 227 rows on
    other owners' items).

### Dependency changes, mirrored everywhere

- **Added:** `def-inertial-frame-and-inertial-chart` →
  `lem-sr-scalar-field-euler-lagrange` (cited-not-in-deps fix);
  `lem-boost-rotation-factorization` →
  `thm-sr-antisymmetric-observer-decomposition` (replacing the absent
  `thm-sr-proper-orthochronous-lorentz-algebra`);
  `lem-boost-is-proper-orthochronous-with-inverse` →
  `ex-sr-perfect-fluid-rest-and-moving-frame` (same replacement);
  `def-lorentz-boost` → `pthm-sr-local-stress-energy-conservation`;
  `def-directional-and-partial-derivatives` →
  `ex-sr-constant-velocity-dust-with-transverse-profile`.
- **Removed with reasons:** `thm-algebra-of-derivatives` from
  `cex-sr-divergence-free-stress-energy-with-varying-slice-momentum`,
  `ex-sr-static-tension-stress-balance`, `ex-sr-box-flux-balance-worked`
  (uncited); `thm-sr-proper-time-and-observer-decomposition` from
  `ex-sr-constant-velocity-dust-with-transverse-profile` (re-cited);
  `def-causal-classification-of-lorentz-vectors` from
  `lem-sr-perfect-fluid-conservation-equations` (supplied transitively);
  `thm-sr-proper-orthochronous-lorentz-algebra` from the two consumer items
  above (absent supplier replaced).
- Every change is mirrored in `research/physics-em-sr-40-2026-10-08-batch-9.pages.json`
  (manifest deps = file deps for all 23 items, verified programmatically) and in
  the two `library/special-relativity/sr-forces-and-continuum*.md` page lists,
  whose item order equals the manifest order (rendercheck OK).
- `research/physics-em-sr-40-2026-10-08-batch-9.cross-batch-dependencies.json`
  was refreshed (109 rows: 105 verified + 4 removed) and the unified
  `research/physics-em-sr-40-2026-10-08-cross-batch-dependencies.json` was
  refreshed with `frontier-dependency-ledger.mjs refresh --run …`; the 108
  consumer edges of this batch all carry reviewer rows (104 verified, 4 removed).
- The batch-9 proof contract was rebuilt after the final text edit
  (`0 errors` strict, re-audited as in checks 5–8).

### Open obligations for Step 4 / other owners (not hidden)

1. **Plan prerequisite (Step 4 remedy, exact item):** `validate-plan` reports
   `[undeclared-prereq] page sr-forces-and-continuum has an item depending on
   partitions-of-unity-and-paracompactness, which is NOT in the closure of its
   declared requires`. Cause: `lem-sr-compact-variation-and-fundamental-lemma`
   and `lem-sr-scalar-field-euler-lagrange` cite the published imported item
   `lem-algebra-of-continuous-real-maps-on-a-space`, whose home page is
   `partitions-of-unity-and-paracompactness`. Remedy: Step 4/owner adds that
   page id to the `requires` list of `sr-forces-and-continuum` in
   `research/plan-spec.json`. I did not edit `plan-spec.json` (owner-held).
2. **Run-wide gate failures owned elsewhere** (all with 0 findings in this
   batch): `depcheck` (19 `cited-not-in-deps` + `dep-unresolved`/
   `link-unresolved` in EM/SR batches, e.g.
   `thm-sr-proper-orthochronous-lorentz-algebra` cites
   `def-lorentz-form-and-inertia` without declaring it;
   `cex-sr-simultaneity-is-observer-dependent` cites
   `def-sr-affine-minkowski-model` without declaring it;
   `thm-sr-local-congruence-adapted-charts-and-frobenius` cites
   `def-sr-affine-minkowski-model` and
   `lem-affine-minkowski-charts-form-a-smooth-atlas` without declaring them;
   `def-em-field-action-definition` declares `lem-em-particle-curve-variation`
   which resolves to nothing), `fwdcheck`, `extcheck`
   (`focus-item-unknown` for e.g. `rem-em-radiation-reaction-limits`),
   `item-dependency-levels` (`lem-em-outgoing-source-helmholtz-and-diffraction`),
   and 45 unreviewed ledger edges in batches 4, 5, 31, 33, 35, 37, 39.
   These are other owners' Step-3/4 obligations; this pair does not block on them.
3. **Direct-prerequisite pair `sr-energy-momentum`:** all of its items are
   authored on disk and the page-level edge `sr-forces-and-continuum →
   sr-energy-momentum` plus every item-level use are `verified` in the ledger;
   the consumers' final receipts hash the current supplier texts. No unresolved
   supplier obligation remains from this pair; any later edit to
   `sr-energy-momentum` items will stale the affected receipts mechanically
   (standard re-audit path, not a defect).
4. **Step 5 attention (routing only):** `risk-report` routes the two `pthm-`
   conservation items and the isolation postulate as the highest-risk items of
   the batch (dependency counts, boundary-sensitive language, both-direction
   claims); the finite-smoke tool found no obligations to discharge.

### Published concerns / source caveats carried forward

- **Crowell p. 191 dominant-energy-condition inequality is defective**
  (confirmed against the source text; the printed inequality conflicts with the
  standard condition). It is excluded from every item and source note of this
  pair; downstream pairs must not import it from this page.
- No measurement, statistical or empirical claim is made anywhere in this pair;
  the two postulates are adopted model premises and their readings are marked as
  interpretations.
- No mathematical defect remains known to me in the 23 items after the repairs
  above; the only unresolved item-level items are the mechanical, other-owner
  findings listed under obligation 2 (suspicion vs confirmed: those are
  confirmed mechanical depcheck findings by the tool, not yet triaged by their
  owners).

### Boundary of edits

Only this pair's 23 item files, `research/physics-em-sr-40-2026-10-08-batch-9.pages.json`,
the two `library/special-relativity/sr-forces-and-continuum*.md` page files, the
batch-9 proof-contract, cross-batch-dependency and 23 decision-receipt files,
this report, and the derived unified ledger (via the standard refresh command)
were written. No other pair's items, pages, manifests or decisions were edited;
`plan-spec.json` and published mathematical suppliers were left untouched.

