# Step 3b authoring report — pair `sr-energy-momentum` / `sr-energy-momentum-examples`

- Run: `physics-em-sr-40-2026-10-08`, role `alpha-high`, label
  `step3b-pair-sr-energy-momentum-432bc142b392567e` (attempt 3; earlier attempts
  `5ec4f745f863e7d2` and `e022009a93205177` authored the carriers but were cut
  off before decisions and handoff). Batch 8 (the pair is the whole of batch 8;
  no sibling pair shares it).
- A page `sr-energy-momentum` (13 items), B page `sr-energy-momentum-examples`
  (8 items); 21 owned items in total.

Attempt-3 entry state (2026-10-09): all 21 item carriers and both page
carriers exist on disk; every direct in-run supplier now has an authored
carrier except the `sr-observer-measurements` page-level reading-order edge
(its 15 items are authored, its page carriers are not). The historical entry
snapshot below is preserved from the earlier attempt.

## Owned items and authoring order (from the dispatch, by dependency level)

| level | id | status |
|---|---|---|
| 11 | `def-sr-proper-time-derivative-and-four-force` | done (attempt 3) |
| 12 | `def-sr-observed-energy-momentum-and-kinetic-energy` | done (attempt 3) |
| 13 | `def-sr-total-four-momentum-and-invariant-mass` | done (attempt 3) |
| 13 | `lem-sr-energy-momentum-observer-identities` | done (attempt 3) |
| 14 | `def-sr-collision-datum-and-conservation` | done (attempt 3) |
| 14 | `lem-sr-center-of-momentum-frame` | done (attempt 3) |
| 14 | `lem-sr-finite-future-causal-sums` | done (attempt 3) |
| 14 | `lem-sr-four-momentum-in-inertial-frame` | done (attempt 3) |
| 14 | `post-sr-ideal-massless-particle-momentum` | done (attempt 3) |
| 14 | `cex-sr-massless-momentum-not-mu-at-zero-mass` (B) | done (attempt 3) |
| 15 | `lem-sr-collision-necessary-conditions` | done (attempt 3) |
| 15 | `lem-sr-four-force-and-work-energy-identities` | done (attempt 3) |
| 15 | `post-sr-massive-particle-dynamics` | done (attempt 3) |
| 15 | `ex-sr-four-momentum-at-beta-three-fifths` (B) | done (attempt 3) |
| 16 | `pthm-sr-momentum-and-four-force` | done (attempt 3) |
| 16 | `ex-sr-equal-mass-head-on-collision-mass` (B) | done (attempt 3) |
| 16 | `ex-sr-four-momentum-boost-to-rest` (B) | done (attempt 3) |
| 16 | `ex-sr-null-pair-invariant-mass` (B) | done (attempt 3) |
| 16 | `ex-sr-stationary-target-threshold` (B) | done (attempt 3) |
| 17 | `cex-sr-kinetic-energy-is-observer-dependent` (B) | done (attempt 3) |
| 17 | `ex-sr-perfectly-inelastic-collision-rest-mass` (B) | done (attempt 3) |

## Inputs read before authoring

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`,
  `briefs/group-author.md`, `briefs/tasks/frontier-dependency-ledger.md`,
  `physics-em-sr-40-2026-10-08-owner-authoring-direction.md`.
- Batch 8 scaffold manifest (all 21 item statements, strategies, deps,
  dependency roles, sources, provenance), batch 8 coverage, notes and
  cross-batch dependency input; Step 3a pair report and scope decision
  `…-step3a-review-sr-energy-momentum.json` (scope `sufficient`, closed).
- Supplier scaffolds read at statement level (batches 1–3 pages manifests):
  `def-sr-affine-minkowski-model`, `def-lorentz-form-and-inertia`,
  `def-causal-classification-of-lorentz-vectors`,
  `def-time-orientation-and-future-causal-sets`,
  `lem-lorentz-form-has-orthonormal-basis`,
  `lem-future-oriented-inertial-frames-exist`,
  `lem-timelike-cone-has-two-convex-components`,
  `def-inertial-frame-and-inertial-chart`,
  `def-spatial-euclidean-structure-of-an-inertial-frame`,
  `def-oriented-minkowski-volume-form`, `def-sr-si-units-and-coordinate-conventions`,
  `def-sr-regular-causal-curve-and-worldline`, `def-sr-proper-time`,
  `lem-sr-proper-time-parametrization`, `def-sr-four-velocity-and-four-acceleration`,
  `thm-sr-proper-time-and-observer-decomposition`, `def-lorentz-boost`,
  `lem-boost-is-proper-orthochronous-with-inverse`,
  `thm-sr-tensor-and-current-transformation`.
- Published imported suppliers cited by the scaffolds: `thm-cauchy-schwarz-finite`,
  `def-rational-power`, `def-linear-map`, `def-vector-valued-derivative-and-integral`,
  `def-derivative`, `def-interval`, `def-euclidean-inner-product`,
  `def-finite-sum-in-a-commutative-monoid`, `thm-induction-principle`.

## Open obligations at attempt-2 entry (historical snapshot)

- **Unfinished in-run suppliers.** At entry no item file exists under `items/`
  for any Special Relativity id (all 193 in-run SR items are scaffold-only).
  Every cross-batch supplier listed in `…-batch-8.cross-batch-dependencies.json`
  is therefore unauthored, notably `thm-sr-proper-time-and-observer-decomposition`
  (levels 11), `def-sr-proper-time` (8), `lem-sr-proper-time-parametrization` (9),
  `def-sr-four-velocity-and-four-acceleration` (10), the batch-1 primitives and
  the batch-2 Lorentz-transformation items. Each consumer use is flagged below
  as it is consumed; decisions stay `escalate` until the supplier carrier and
  the actual proof use are reconciled.
- Page carriers `library/special-relativity/sr-energy-momentum.md` and
  `…-examples.md` do not exist yet; they are authored here with `library: physics`.

## Per-item checkpoint log

- `def-sr-proper-time-derivative-and-four-force` (11) — authored; body
  `## Definition` (a)–(c). Local repair vs scaffold: the four-force is defined
  only when the four-velocity is $C^1$ (guaranteed by $x$ of class $C^2$),
  since $\dot P$ needs $P'$; the hypothesis is now explicit. Added published
  math dep `thm-chain-rule` (used for
  $(P\circ\rho)'(\tau(s))=P'(s)/\tau'(s)$ via the componentwise derivative of
  [[def-vector-valued-derivative-and-integral]]). Checks: rendercheck OK,
  precheck n/a (no phase body).
- `def-sr-observed-energy-momentum-and-kinetic-energy` (12) — authored;
  `## Definition` (a)–(d) as scaffolded, including the uniqueness of the
  decomposition $P=(E_n/c)n+q_n$ and the $\eta(P,P)$-only dependence of
  $m(P)$. Checks: rendercheck OK, precheck n/a.
- `def-sr-total-four-momentum-and-invariant-mass` (13) — authored;
  `## Definition` (a)–(e); the equivalence in (c) is stated precisely as
  $q_{e_0}(P_{\mathrm{tot}})=0\iff P_{\mathrm{tot}}\in\mathrm{span}(e_0)$, with
  “positive multiple” asserted only in the future timelike case (a negative
  multiple of $e_0$ also has vanishing spatial momentum). Checks: rendercheck
  OK, precheck n/a.
- `lem-sr-energy-momentum-observer-identities` (13) — authored; 10 numbered
  steps in layers 1–4, Facts [F1]–[F10], `proof_strategy: direct`. Uses the
  orthonormal-chart positivity argument of the scaffold; added published math
  dep `lem-rational-power-laws` (also linked in [F10]) for
  $\sqrt{\lambda^2}=\lambda$ ($\lambda>0$) and
  $\gamma\sqrt{1-\gamma^{-2}}=\sqrt{\gamma^2-1}$. Checks: precheck PASS
  (direct), proof-layout 11 steps 0 defects, rendercheck OK.
- `def-sr-collision-datum-and-conservation` (14) — authored; `## Definition`
  (a)–(d). Clarified that a recorded mass of a massive leg is necessarily its
  invariant mass $m(P)$ (uniqueness of $U$ and $m$ in $P=mU$), and that
  conservation is compared through the side totals only. Checks: rendercheck
  OK, precheck n/a.
- `lem-sr-center-of-momentum-frame` (14) — authored; 9 numbered steps, Facts
  [F1]–[F11], `proof_strategy: direct`. Existence is an explicit orthonormal
  basis of $n_Q^\perp$ plus an orientation correction by negating $e_1$;
  uniqueness compares any center-of-momentum $e_0$ with $n_Q$; the null case
  contradicts timelikeness. Checks: precheck PASS (direct), proof-layout 10
  steps 0 defects.
- `lem-sr-finite-future-causal-sums` (14) — authored; `proof_strategy:
  induction` with `[base]`/`[ih]`/`[discharge-induction: step 2.1]`; 8 steps,
  Facts [F1]–[F10]. Local repair vs scaffold strategy: the nonzeroness
  argument is stated correctly as $S=\sum_{i<N}P_i\in
  \mathrm{cl}(C^+)\cap(-\mathrm{cl}(C^+))$ (the scaffold strategy text
  mis-assigned the sign); equality case of $-\eta(v,w)=0$ proved as “$v=0$,
  $w=0$, or both nonzero future null with $w=\lambda v$, $\lambda>0$”. The
  two-null witness is $e_0+e_1$, $e_0+e_2$. Checks: precheck PASS (induction),
  proof-layout 8 steps 0 defects.
- `lem-sr-four-momentum-in-inertial-frame` (14) — authored; 9 steps, Facts
  [F1]–[F10], `proof_strategy: direct`; component law from
  `thm-sr-tensor-and-current-transformation` with the boost matrix of
  `def-lorentz-boost`, quadratic-combination invariance by explicit
  cancellation using $\gamma_v^2(1-v^2/c^2)=1$, null case via the observer
  identities in both frames. Checks: precheck PASS, proof-layout 9 steps 0
  defects, rendercheck OK.
- `post-sr-ideal-massless-particle-momentum` (14) — authored as `## Postulate`
  (i)–(iv) with `physical_scope` and `provenance.proof: not-applicable`;
  $E_n=c|q_n|>0$ is cited from the observer-identity lemma as mathematics, not
  adopted. Checks: precheck PASS (nonproof structure).
- `cex-sr-massless-momentum-not-mu-at-zero-mass` (B, 14) — authored;
  `## Statement refuted` + `## Facts & Assumptions` + `## Counterexample`,
  4 steps, `provenance.statement: ai-generated` with
  `generation.role: counterexample` (allowed leaf class; nothing depends on
  it). Added in-run dep `lem-timelike-cone-has-two-convex-components` (batch
  1) to place the witness $P=(E/c)(e_0+e_1)$ in $\mathrm{cl}(C^+)$; ledger row
  to be added. Checks: precheck PASS (direct).
- `lem-sr-collision-necessary-conditions` (15) — authored; 14 steps in layers
  1–5, Facts [F1]–[F11]. (a) energy sums and $M\ge\sum m_\ell$ with equality
  case, (b) null total forcing parallel legs, (c) $M^2=m_1^2+m_2^2+2m_2E/c^2$
  and the two threshold forms, (d) null-pair mass $\sqrt{2E_1E_2(1-\cos\theta)}/c^2$
  and the one-null-leg impossibility. Added published math dep
  `lem-rational-power-laws` (square roots). Checks: precheck PASS (direct),
  proof-layout 14 steps 0 defects.
- `lem-sr-four-force-and-work-energy-identities` (15) — authored; 8 steps in
  layers 1–4, Facts [F1]–[F10]: $F=mA$ and $\eta(P,F)=0$, $dE/dt=\mathbf
  f\cdot\mathbf w$, $F=\gamma(\mathbf f\cdot\mathbf w/c,\mathbf f)$, and the
  variable-mass identity $\eta(P,F)=-mc^2\,dm/d\tau$. Added published math dep
  `lem-rational-power-laws`. Checks: precheck PASS (direct), proof-layout 8
  steps 0 defects.
- `post-sr-massive-particle-dynamics` (15) — authored as `## Postulate`
  (i)–(iv): constant-mass $P=mU$, observer-measurement identification,
  isolated-collision balance, and the equation of motion for a stipulated
  force (with the force law and solution theory explicitly not adopted).
  Checks: precheck PASS (nonproof structure).
- `ex-sr-four-momentum-at-beta-three-fifths` (B, 15) — authored;
  `## Example` + `## Verification`, 6 steps, exact arithmetic
  $\gamma_w=5/4$, $P=(5mc/4,3mc/4,0,0)$, $T_n=mc^2/4>9mc^2/50$. Checks:
  precheck PASS (direct), proof-layout 6 steps 0 defects, rendercheck OK.

## Checks actually run

_(appended at handoff)_

## Handoff


Attempt 3 (label `432bc142b392567e`) re-read every carrier at its current
bytes, re-ran the whole battery, and completed the following; the entries
above describe the same carriers and remain accurate.

- `pthm-sr-momentum-and-four-force` (16) — physics-theorem audited; the two
  postulates are the physical assumptions and every clause (a)–(f) is a
  conditional deduction from them plus the page lemmas, with
  `empirical_premises: []` and no measurement claim. Carrier deps
  `def-causal-classification-of-lorentz-vectors` and
  `def-lorentz-form-and-inertia` (used at [F12]) were registered in the
  manifest. Checks: precheck PASS (direct), proof-layout 0 defects.
- `ex-sr-equal-mass-head-on-collision-mass` (B, 16) — Example + Verification
  audited; $Q=(5mc/2,0,0,0)$, $M=5m/2$, $e_0=Q/(Mc)$ is the
  center-of-momentum frame, strictness checked against the collision-lemma
  equality case, excess $mc^2/2$ equals the total kinetic energy. The stale
  manifest deps `thm-sr-proper-time-and-observer-decomposition` and
  `def-rational-power` are not direct uses (the direct prerequisite is
  [[ex-sr-four-momentum-at-beta-three-fifths]]); the manifest was reconciled
  to the carrier and the ledger edge marked `removed`.
- `ex-sr-four-momentum-boost-to-rest` (B, 16) — Verification audited;
  $\gamma_v=5/4$, $E'=mc^2$, $p'_\parallel=0$, $P'=(mc,0,0,0)$, rest frame
  identified by $T_{e'_0}=0$. Supplier
  [[thm-sr-tensor-and-current-transformation]] is now authored; clauses (i)
  and (vi) supply exactly the used transformation law, and the ledger row was
  reconciled to `verified`.
- `ex-sr-null-pair-invariant-mass` (B, 16) — Verification audited;
  $M=2\sqrt{E_1E_2}/c^2$, equal-energy case $2E/c^2$, the displayed frame is
  the center-of-momentum frame exactly when $E_1=E_2$, and the parallel case
  is future null with $M=0$ and no center-of-momentum frame. Carrier deps
  `def-sr-observed-energy-momentum-and-kinetic-energy`,
  `lem-timelike-cone-has-two-convex-components` and
  `lem-rational-power-laws` registered in the manifest.
- `ex-sr-stationary-target-threshold` (B, 16) — Verification audited;
  $E\ge mc^2+2\mu c^2+\mu^2c^2/(2m)$, $T\ge 2\mu c^2+\mu^2c^2/(2m)$, hence
  $E\ge7mc^2/2$, $T\ge5mc^2/2$ at $\mu=m$, stated as necessary kinematic
  thresholds only. Carrier dep `lem-rational-power-laws` registered.
- `cex-sr-kinetic-energy-is-observer-dependent` (B, 17) — Refutation audited;
  $n_1=e_0\ne n_2=U/c$ both future unit, $T_{n_1}=mc^2/4$, $T_{n_2}=0$,
  $m(P)=m$ observer-independent. No content change.
- `ex-sr-perfectly-inelastic-collision-rest-mass` (B, 17) — Verification
  audited; the two-into-one datum conserves with outgoing mass $5m/2$, and
  the alternative outgoing pair $m(ce_0)$, $(3m/2)(ce_0)$ gives the same
  total. Carrier dep `def-inertial-frame-and-inertial-chart` (used in [F3])
  registered in the manifest.

## Reconciliation performed in attempt 3

- **Manifest deps vs. carriers.** 14 of the 21 batch-8 manifest item
  entries carried stale `deps`/`dependency_roles` (suppliers added to the
  carriers during authoring were missing; two scaffold deps were no longer
  used). Each manifest item was reconciled to its authored carrier, with
  `dependency_level` re-checked: all 21 computed levels are unchanged
  (11×1, 12×1, 13×2, 14×6, 15×4, 16×5, 17×2, exactly the dispatch order),
  and `item-dependency-levels check --run` passes
  across the run. The two removed direct edges were recorded `removed` in
  the ledger input
  (`lem-sr-center-of-momentum-frame -> lem-lorentz-form-has-orthonormal-basis`,
  `ex-sr-equal-mass-head-on-collision-mass -> thm-sr-proper-time-and-observer-decomposition`)
  with the reason the use is gone.
- **`thm-sr-tensor-and-current-transformation`.** The supplier carrier is
  authored on disk (batch 2, home `sr-lorentz-transformations`). Its clauses
  (i) and (vi) were read and match the uses in
  `lem-sr-four-momentum-in-inertial-frame` proof step 1.3 and
  `ex-sr-four-momentum-boost-to-rest` verification step 2.1; both ledger rows
  were updated from `open` to `verified`. The supplier's own pair has not yet
  recorded its item decisions; the consumer receipts bind the current
  supplier bytes, so any later supplier edit invalidates them.
- **`sr-observer-measurements` (page level).** The pair's 15 items are
  authored on disk, but no page carrier exists under
  `library/special-relativity/` yet, so the page-level reading-order row
  `sr-energy-momentum -> sr-observer-measurements` remains `open`. No item of
  this pair cites an item homed on that page, so the 21 item decisions are
  unaffected; the page row is for the owning pair to close when its pages
  land.

## Checks actually run

All commands were run from `/home/lazyinspirit/Projects/prestige-math-library/physics`
on the frozen bytes at 2026-10-09 UTC; the 21 item paths were passed
explicitly:

- `node tools/physics-support/proof-layout.mjs <21 item files>`
  → `proof-layout: 21 items, 114 steps, 0 defects`.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts <21 item files>`
  → `17 checked, 0 failing — all clean` (the 4 definitions are non-proof).
- `node tools/physics-support/rendercheck.mjs <21 item files>
  library/special-relativity/sr-energy-momentum.md
  library/special-relativity/sr-energy-momentum-examples.md`
  → `OK — 23 file(s)` (KaTeX parse, wikilink/math separation, YAML).
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-8.pages.json`
  → `21 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-8.proof-contracts.json --strict`
  → `0 error(s), 0 warning(s), 21/21 item(s) checked`.
- `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-8.coverage.json`
  → `1 page(s), 39 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-8.coverage.json`
  → `3/3 source(s) fetch-verified; 3/3 source(s) resolved`.
- `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-8.pages.json`
  → `21 item(s), 0 normalized, 0 error(s)`.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
  → `473 item(s) checked across 80 page(s); maximum level 24`.
- `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool depcheck -- --json`
  → no error or warning mentions any of this pair's pages/items (run-wide
  `focus-item-unknown` rows are for carriers of unfinished pairs elsewhere).
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08`
  → `refreshed and deduplicated`; all 136 batch-8 consumer edges have rows
  (133 verified, 2 removed, 1 page-level open), 0 orphaned reviews.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08`
  → `FAIL` with 33 run-wide plan warnings (19 `redundant-prereq`, 14
  `undeclared-prereq`) on other pages (mostly EM prerequisites, plus
  `sr-spacetime-primitives`, `sr-lorentz-transformations`,
  `sr-forces-and-continuum`). No warning names `sr-energy-momentum` or
  `sr-energy-momentum-examples`; reported for Step 4, not hidden.
- `step3-decisions.mjs record-item` receipts: 21/21 recorded with confidence
  1 (14 `repaired`, 7 `accept`); re-checked via `itemDecision`:
  `closed: 21 / 21`. The receipts were written last, after the manifest and
  ledger reconciliation, so they bind the current item, manifest and supplier
  bytes; any later edit to a supplier's carrier or manifest entry invalidates
  the affected receipt under the ordinary hash rule and requires a fresh
  audit of that consumer.
- `frontier-item-gate … --tool fwdcheck` and `--tool extcheck`: no error row
  names any item or page of this pair (run-wide rows concern other pairs).

## Handoff

- **Completed IDs (21/21).** A page `sr-energy-momentum`:
  `def-sr-proper-time-derivative-and-four-force`,
  `def-sr-observed-energy-momentum-and-kinetic-energy`,
  `def-sr-total-four-momentum-and-invariant-mass`,
  `lem-sr-energy-momentum-observer-identities`,
  `def-sr-collision-datum-and-conservation`,
  `lem-sr-center-of-momentum-frame`, `lem-sr-finite-future-causal-sums`,
  `lem-sr-four-momentum-in-inertial-frame`,
  `post-sr-ideal-massless-particle-momentum`,
  `lem-sr-collision-necessary-conditions`,
  `lem-sr-four-force-and-work-energy-identities`,
  `post-sr-massive-particle-dynamics`, `pthm-sr-momentum-and-four-force`;
  B page `sr-energy-momentum-examples`:
  `cex-sr-massless-momentum-not-mu-at-zero-mass`,
  `ex-sr-four-momentum-at-beta-three-fifths`,
  `ex-sr-equal-mass-head-on-collision-mass`,
  `ex-sr-four-momentum-boost-to-rest`, `ex-sr-null-pair-invariant-mass`,
  `ex-sr-stationary-target-threshold`,
  `cex-sr-kinetic-energy-is-observer-dependent`,
  `ex-sr-perfectly-inelastic-collision-rest-mass`. Page carriers
  `library/special-relativity/sr-energy-momentum.md` and
  `…-examples.md` authored with `library: physics`. All 21 step-3b item
  receipts recorded; 14 are `repaired` (manifest dependency registration
  reconciled to the carrier; no item body changed in attempt 3), 7 `accept`.
- **Added suppliers / files.** No new item IDs were created by this pair.
  Batch-8 manifest, coverage, proof-contracts, cross-batch input and the
  unified dependency ledger were maintained/refreshed; the two removed
  ledger edges are documented above.
- **Published concerns.** None introduced by this pair. Run-wide (outside
  this pair, reported not edited): `validate-plan` fails with 33 warnings on
  other pages (list above) that Step 4 must reconcile;
  `sr-observer-measurements` has authored items but no page carrier;
  `sr-lorentz-transformations` (home of
  `thm-sr-tensor-and-current-transformation`) has authored carriers but no
  recorded item decisions yet; several other in-run pairs still lack
  carriers (run-wide depcheck `focus-item-unknown` rows).
- **Open obligations.**
  1. Page-level edge `sr-energy-momentum -> sr-observer-measurements` remains
     `open` until that pair lands its page carriers; no item of this pair
     depends on it.
  2. Consumer decisions for `lem-sr-four-momentum-in-inertial-frame` and
     `ex-sr-four-momentum-boost-to-rest` bind the current bytes of
     `thm-sr-tensor-and-current-transformation`; if the supplier's owning
     pair later edits that carrier, these receipts invalidate and require a
     fresh consumer decision (ordinary hash rule).
  3. Steps 5–8 independent review/judgment of this pair remains outstanding,
     as does the run-level `validate-plan` reconciliation owned by Step 4.
