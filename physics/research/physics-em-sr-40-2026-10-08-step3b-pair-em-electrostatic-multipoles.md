# Step 3b pair report — `em-electrostatic-multipoles` / `em-electrostatic-multipoles-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha-high (Step 3b scaffold auditor and item author); batch 27; 2026-10-09.
- A page: `em-electrostatic-multipoles` (order 333). B page: `em-electrostatic-multipoles-examples` (order 334). Category `classical-electromagnetism`, library `physics`.
- Dispatch labels: authoring dispatch `step3b-pair-em-electrostatic-multipoles-ecee81836a9c441a`; re-audit/reconciliation dispatch `step3b-pair-em-electrostatic-multipoles-07d0d7d1f06dac16`. Output: this report (updated by the recheck dispatch).
- Owned IDs (dependency-level order; actual computed levels equal the manifest labels): `def-em-electric-moments` (16), `pthm-em-electric-dipole-expansion` (17), `pthm-em-moment-origin-change` (17), `pthm-em-electric-dipole-torque` (18), `pthm-em-electric-general-multipoles` (18), `ex-em-quadrupole-symmetry` (18), `ex-em-two-charge-dipole` (18).
- Inputs read at entry: `CLAUDE.md`, `../CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`; `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`; batch-27 manifest / coverage / notes / cross-batch input; the Step 3a pair report and its scope receipt; the design carriers (`definition-contracts.md#def-em-electric-moments`, `core-conditional-proofs.md#K4`, `mathematical-prerequisites.md#M06`, `worked-example-verifications.md#X2`); the current scaffold statements of every direct in-run supplier (batches 1/13/16/18/23/25) and the published imported suppliers cited by the scaffolds.

## Status after the recheck dispatch (07d0d7d1f06dac16, 2026-10-09)

All seven owned items and both page carriers are authored on disk. The recheck dispatch
re-read the items, reconciled every declared in-run supplier use against the suppliers now
present on disk (statement level), refreshed the cross-batch input and the unified ledger,
re-ran the explicit-path checks, and re-recorded the item decisions. Two in-run suppliers
remain unauthored, so `pthm-em-electric-general-multipoles` stays **escalated**; the other six
items are recorded `repaired` (the metadata repair listed below plus the authoring-dispatch
repairs).

- **Handoff inventory.** Completed IDs: `def-em-electric-moments`,
  `pthm-em-moment-origin-change`, `pthm-em-electric-dipole-expansion`,
  `pthm-em-electric-dipole-torque`, `pthm-em-electric-general-multipoles`,
  `ex-em-quadrupole-symmetry`, `ex-em-two-charge-dipole`; pages
  `library/classical-electromagnetism/em-electrostatic-multipoles.md`,
  `...-examples.md` and `_category.md`; contract file
  `research/physics-em-sr-40-2026-10-08-batch-27.proof-contracts.json`; this report.
  **Added suppliers: none** — the seven design items were authored on the existing scaffold
  inventory (no new local prerequisite item was required; the dependency additions recorded
  below are to already-planned or published items).
- **Dependency levels.** Current manifest labels and levels computed from the items' actual
  dependencies agree for all seven items (16/17/17/18/18/18/18);
  `item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` is clean over all 473
  run items. This dispatch added `dependency_level` to the seven item frontmatters so the
  level is recorded in both the item metadata and the manifest entry.
- **Statement preservation.** Every item preserves its frozen manifest statement. The only
  scaffold-level corrections are those recorded in the authoring checkpoint log below (the
  definition's branch count, the quantified leading-term clause, two published suppliers added
  to the origin-shift theorem, and two dependency additions on the general-multipoles theorem
  that leave its level at 18).
- **Supplier reconciliation (statement level, current files).**
  - `lem-em-coulomb-dipole-remainder` (batch 13) is authored; its Statement states exactly the
    expansion `Q/r + p·x/r³ + R₀(x)`, `|R₀(x)| ≤ 16a²‖ρ‖₁/r³` for `r ≥ 2a` under the same
    a.e.-support hypothesis, matching `pthm-em-electric-dipole-expansion` [F6] / step 2.1 and
    `pthm-em-electric-general-multipoles` step 3.1. No mismatch. The supplier was revised by its
    authorized writer during this dispatch (2026-10-09T07:31:38Z): it now states that `p` lies in
    `ℂ³` for complex densities and in `ℝ³` for real densities, with `R` real in the real case;
    the hypothesis, expansion and bound are unchanged, and both consumers use the real-density
    case, so the consuming steps remain covered (direct-consumer check of the statement change).
    The two recorded citation quotes were refreshed verbatim to the current Statement text
    (a strict-contract run had flagged the stale quote before the refresh).
  - `pthm-em-coulomb-solution` (batch 25) is authored; clauses (a) and (c) supply the smooth
    and `L¹` potential properties and the distributional Poisson identity used at
    `pthm-em-electric-dipole-expansion` steps 1.1/4.1, `pthm-em-electric-general-multipoles`
    steps 2.1/6.1 and `ex-em-two-charge-dipole` step 1.1; clause (d) supplies the point-charge
    distributional identities used at `ex-em-two-charge-dipole` step 1.1. No mismatch.
  - `def-em-electrostatic-regime` (batch 25) is authored; clauses (c)–(f) supply the reduced
    equations, fixed-time reading, static-to-distributional dictionary and stationary-point-charge
    reading used by five of the seven items. No mismatch.
  - `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-sources`, `def-em-fields`,
    `post-em-lorentz-coupling`, `def-em-electromagnetic-tensor`,
    `def-em-relativistic-worldlines-frames`, `post-em-vacuum-maxwell` (batches 23/25) and
    `def-spatial-euclidean-structure-of-an-inertial-frame` (batch 1) are authored; the exact
    clauses used (`ε₀=(μ₀c²)⁻¹` and the unit table; chart origin and frame Euclidean structure;
    charge parameter; `C^k` field object; postulate (i) `m dU/dτ = qΦ(U)` with
    `m dU^μ/dτ = qF^{μν}U_ν` and (ii) `ρE+J×B`; `F_{0i}=F^{i0}=-E_i/c`; `U=γ(c,r')` so
    `U=(c,0,0,0)` at an instant of rest; the four smooth/weak Maxwell equations) were checked
    against the consuming steps. No mismatch.
  - `thm-em-spherical-multipole-basis` (batch 18) is now authored; its Statement (a)–(c)
    supplies the exterior expansion, geometric tail bound, degree-zero/one remainder
    identification and termwise differentiation used at `pthm-em-electric-general-multipoles`
    steps 2.1, 3.1, 5.1. No mismatch. Its own proof closure still contains the two unauthored
    batch-16 items below; that obligation belongs to the batch-16 pair.
  - `lem-em-convergent-legendre-kernel` (batch 16) is authored; its Statement supplies
    `|P_l| ≤ 1`, `P_l(1)=1` and the generating identity used at
    `pthm-em-electric-general-multipoles` [F9] / step 4.1. No mismatch.
  - `lem-em-spherical-harmonic-basis-and-addition` and
    `lem-em-ball-poisson-series-boundary-convergence` (batch 16, page
    `em-expanded-analysis-prerequisites`, order 310) remain unauthored; the batch-16 pair report
    lists them as pending items 18 and 20. Exact consuming steps and the current scaffold
    content are recorded in the two open cross-batch input rows.
- **Cross-batch input and ledger.** `...-batch-27.cross-batch-dependencies.json` has 36 rows
  (34 verified, 2 open): the row
  `pthm-em-electric-general-multipoles <- lem-em-coulomb-dipole-remainder` was added, and the
  rows for `thm-em-spherical-multipole-basis` and the page edge
  `em-electrostatic-multipoles <- em-boundary-and-spectral-prerequisites` were updated to
  `verified` after the statement-level recheck. `frontier-dependency-ledger.mjs refresh` now
  succeeds (it was blocked by a sibling frontmatter defect, since fixed): 0 unreviewed batches,
  0 orphaned reviews, all 36 batch-27 consumer edges carry a review row.
- **Plan sync (no pre-splice mismatch for this pair).** The batch-27 manifest `requires`
  entries for both pages match `research/plan-spec.json` exactly (checked this dispatch; the
  authoring dispatch's recorded overlay addition is already synced). The 33 `validate-plan`
  `undeclared-prereq` errors are sibling-owned (finding 6 below).
- **Owner direction.** `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was
  re-read for this pair; it contains no multipole-specific formula or interface correction.
  The applicable general requirements are respected: each item keeps its promised claim and its
  exact Choice and regularity assumptions (AC_ω through the Lebesgue/distribution/spherical
  interfaces; the finite-point branches choice-free), and the retarded/multipole branches of
  other pairs that consume these items are untouched.
- **Item decisions.** Re-recorded with confidence 1, examined dependency IDs and concrete
  evidence: `repaired` for `def-em-electric-moments`, `pthm-em-moment-origin-change`,
  `pthm-em-electric-dipole-expansion`, `pthm-em-electric-dipole-torque`,
  `ex-em-quadrupole-symmetry`, `ex-em-two-charge-dipole` (final receipts dated
  2026-10-09T07:34:41Z to T07:36:21Z after the quote refresh; `pthm-em-electric-dipole-torque`
  was re-recorded after one further observed sibling drift. The immediately following
  `step3-decisions.mjs check --phase final` at 07:36:34Z showed the six current — 65 of 473
  run items accepted at that instant — with only the escalated item in this pair's work list).
  `pthm-em-electric-general-multipoles` remains `escalate` (owner-held: the tool refuses a
  non-owner re-record while the previous escalation exists, so the owner resolves it once the
  two suppliers are authored and the recorded uses re-checked).
- **Concurrency note.** The run is write-active: sibling authors changed items inside this
  pair's transitive supplier closure within about one second of the first recording pass
  (evidence: `items/lem-sr-proper-time-parametrization.md` and
  `research/physics-em-sr-40-2026-10-08-batch-3.pages.json` after 2026-10-09T07:30:36Z; and
  `items/lem-sr-four-force-and-work-energy-identities.md`,
  `items/lem-sr-compact-variation-and-fundamental-lemma.md`,
  `items/lem-rapidity-parametrization-of-collinear-boosts.md` and batch-24 manifest edits after
  2026-10-09T07:34:44Z). Any
  `accept`/`repaired` receipt hash can therefore go stale through a shared supplier even though
  this pair's own files are stable. If the Step-3 final gate later reports "current item audit
  required" for the six closed items, that is hash drift through a shared supplier, not missing
  authoring; re-record on the settled input, as the frontier-dependency-ledger brief prescribes.

## Open obligations at entry (authoring dispatch `ecee81836a9c441a`; kept as history)

1. Author the seven owned items in the dispatched dependency order; write the two page carriers and the batch proof-contract file.
2. Reconcile every declared in-run supplier use against the actual authored proof use, and flag any supplier that is still unauthored at handoff with its exact consumer and consuming step.
3. Correct scaffold-level defects found during authoring (recorded below); do not edit the frozen manifest statements (they bind the Step 3a scope hash).
4. Run the explicit-path checks (precheck, rendercheck on items and pages, content policy, strict proof contracts, dependency levels, `validate-plan`) and `proof-layout` on the changed item paths.
5. Reconcile the batch-27 cross-batch dependency input and refresh the unified ledger; record `step3-decisions` item receipts (`accept`/`repaired` after checks, otherwise `escalate`).

## Authoring checkpoint log (dispatch `ecee81836a9c441a`)

### 1. `def-em-electric-moments` (level 16) — authored

- Wrote `items/def-em-electric-moments.md` (definition, domain physics, status draft, `provenance.proof: not-applicable`). Manifest statement preserved except that the scaffold's "Two branches are declared" is corrected to "Three branches are declared" (clauses (a)/(b)/(c) with (d) the scope clause); the finite-sum branch, the locally integrable branch with real exponent `L`, the empty-sum and empty-index-list conventions and the tracelessness derivation are stated explicitly. The manifest was not edited (it binds the recorded Step 3a scope hash).
- Checks: explicit-path `precheck` reports no failure (the definition has no phase body, so it is not-applicable); `rendercheck` OK (YAML and KaTeX).

### 2. `pthm-em-moment-origin-change` (level 17) — authored

- Wrote `items/pthm-em-moment-origin-change.md` (physics-theorem). Statement gives the `b`-moments by replacing `y` by `y-b`, absolute convergence with the envelope `(a+|b|)^l`, and clauses (a)–(e) (charge invariance, `p^{(b)}=p-Qb` with the exact invariance condition, the subset expansion with the `S^c`-index convention, the quadrupole transformation and its `Q=p=0` invariance, scope). Proof in 7 steps (1.1, 1.2, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1) by polynomial expansion and termwise integration, with the finite-point branch choice-free.
- Checks: `precheck` PASS (direct); `rendercheck` OK.

### 3. `pthm-em-electric-dipole-expansion` (level 17) — authored

- Wrote `items/pthm-em-electric-dipole-expansion.md`. Statement gives the uniform monopole-dipole expansion with `|R(x)| <= 16 a^2 ||rho||_1/(4 pi eps0 r^3)` for `r >= 2a`, the leading-term form (including the quantified sense in which the dipole term dominates for `Q=0`, `p!=0`), the physical reading through the Coulomb solution's `L^1` and smooth branches, and the scope exclusions. Proof in 5 steps (1.1–5.1): reverse-triangle domination and Coulomb identification, application of `lem-em-coulomb-dipole-remainder` with the `(4 pi eps0)^{-1}` scaling, Cauchy-Schwarz leading-term estimate, Coulomb-solution clauses (a)/(c) and the fixed-time dictionary, scope.
- Open obligation: the supplier `lem-em-coulomb-dipole-remainder` (batch 13) and the physical suppliers `pthm-em-coulomb-solution`, `def-em-electrostatic-regime`, `def-em-si-conventions`, `def-em-fields` (batches 23/25) are still unauthored item files at this checkpoint; the proof uses their current scaffold statements, to be reconciled once authored.
- Checks: `precheck` PASS (direct); `rendercheck` OK.

### 4. `pthm-em-electric-dipole-torque` (level 18) — authored

- Wrote `items/pthm-em-electric-dipole-torque.md`. The statement keeps the explicitly adopted `rho E_ext` model for compact `L^1` data and Lipschitz data, with `F=QE_ext(0)+R_F`, `|R_F|<=La||rho||_1`, `tau=p x E_ext(0)+R_tau`, `|R_tau|<=La^2||rho||_1`, the neutral case, the exact reference-point shift, the ideal two-test-charge branch with `|R_F|<=2|q|La`, `|R_tau|<=2|q|La^2`, and the covariant sufficient specialization with the sign check `q'F^{i0}U_0=q'E_i`. Proof in 9 steps (1.1-9.1) in a strictly increasing citation chain consistent with the precheck layer repair.
- Open obligation: suppliers `post-em-lorentz-coupling`, `def-em-electromagnetic-tensor`, `def-em-relativistic-worldlines-frames`, `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-fields` (batches 23) are still unauthored item files at this checkpoint; the covariant clause (d1) and force model are proved against their current scaffold statements.
- Checks: `precheck` PASS (direct); `rendercheck` OK.

### 5. `pthm-em-electric-general-multipoles` (level 18) — authored

- Wrote `items/pthm-em-electric-general-multipoles.md`. Statement keeps the exterior spherical expansion with the spherical moments `q_lm`, the geometric tail bound, the degree-0/1 identification plus supplier remainder, the degree-2 traceless-quadrupole term `n_i Q_ij n_j/(8 pi eps0 r^3)`, the `C^infinity`/termwise-differentiation clause and the independent source-free ball branch with its `L^2` data, bound, uniqueness and continuous Poisson form. Proof in 8 steps (1.1-8.1): coefficient convergence, scaled supplier expansion, degree-0/1 identification, degree-2 computation via the addition theorem and `P_2(z)=(3z^2-1)/2` extracted from the Legendre generating identity, termwise differentiation, scope, and the ball/Maxwell branch.
- Recorded dependency additions on the item (not the frozen manifest): `def-newtonian-potential` (the potential object is defined through it by `pthm-em-coulomb-solution`) and `lem-em-coulomb-dipole-remainder` (the explicit bound named in the supplier's clause and used in the degree-0/1 identification). Neither changes the computed level 18 (both are level-0 mathematical items).
- Open obligation: suppliers `thm-em-spherical-multipole-basis` (batch 18), `lem-em-convergent-legendre-kernel`, `lem-em-spherical-harmonic-basis-and-addition`, `lem-em-ball-poisson-series-boundary-convergence` (batch 16), `pthm-em-electric-dipole-expansion` (this pair), `pthm-em-coulomb-solution` and `def-em-electrostatic-regime` (batch 25), `post-em-vacuum-maxwell` and the batch-23 interface items are still unauthored item files at this checkpoint; the proof uses their current scaffold statements, to be reconciled once authored.
- Checks: `precheck` PASS (direct); `rendercheck` OK.

### 6. `ex-em-quadrupole-symmetry` (level 18, B page) — authored

- Wrote `items/ex-em-quadrupole-symmetry.md` (example, domain physics). Statement preserved from the manifest (four charges `+q` at `±a e1`, `-q` at `±a e2`; `Q=p=0`, vanishing odd moments, `M_ij=2qa^2(delta_i1 delta_j1 - delta_i2 delta_j2)`, `Q_ij=6qa^2(delta_i1 delta_j1 - delta_i2 delta_j2)`, reference-point independence by the origin-shift theorem, scope). Verification in 5 steps by the finite sums of the moment definition, the central-reflection pairing and the `delta`-orthonormality of the frame basis; choice-free.
- Checks: `precheck` PASS (direct); `rendercheck` OK.

### 7. `ex-em-two-charge-dipole` (level 18, B page) — authored

- Wrote `items/ex-em-two-charge-dipole.md` (example, domain physics). Statement preserved from the manifest (exact two-charge potential and its distributional equations by linearity of distributional differentiation, moments `Q=0`, `p=qd`, vanishing even moments and vanishing traceless quadrupole at the symmetric origin, the direct two-kernel remainder bound `8|q|a^2/(pi eps0 r^3)` for `r>=|d|`, the explicit non-application of the `L^1` density theorem, and the general-reference-point quadrupole transformation). Verification in 6 steps: distributional linearity, finite moments, the origin-shift qualification, the twice-fundamental-theorem kernel computation on `s in [0,1]`, the substitution and the comparison with the density theorem.
- Open obligation: `pthm-em-coulomb-solution` and `def-em-electrostatic-regime` (batch 25) were authored while this item was in progress; the current statements were re-read and cover the point-charge clauses used. `lem-em-coulomb-dipole-remainder` and other published suppliers are on disk.
- Checks: `precheck` PASS (direct); `rendercheck` OK.

## Page carriers and contracts

- Created the category file `library/classical-electromagnetism/_category.md` (library `physics`, draft) and the pair's pages `library/classical-electromagnetism/em-electrostatic-multipoles.md` (A page; lists the five A items in dependency order) and `library/classical-electromagnetism/em-electrostatic-multipoles-examples.md` (B page; lists the two examples under `examples:`). The frozen batch-27 manifest was not edited.
- Wrote `research/physics-em-sr-40-2026-10-08-batch-27.proof-contracts.json` (version 1, scope = the seven owned IDs) with 106 citation rows (each quote extracted verbatim from the cited item's current `Statement`/`Definition`/`Postulate` section), one derivation per numbered step with its actual claim and explicit inputs, empty `routine_steps`/`finite_smoke`, and eight item-specific boundary worksheet rows per proof item.
- Recheck dispatch: the contract file was re-validated, not rewritten — all 106 quotes still
  appear in their cited items (citation-fidelity) and the only strict-mode failures are the
  three `citation-source-missing` rows for the two unauthored batch-16 items; those quotes are
  from the current batch-16 scaffold statements and must be re-checked when the items are
  authored. The pages and category file were re-rendered unchanged (no edits needed).

## Checks actually run (2026-10-09)

Authoring dispatch `ecee81836a9c441a`:

| Check | Command | Result |
|---|---|---|
| precheck (explicit paths) | `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<id>.md` for all seven | 6 PASS (direct), the definition has no phase body (not applicable); 0 failing |
| rendercheck (explicit paths) | `node tools/physics-support/rendercheck.mjs items/<7>.md library/classical-electromagnetism/{em-electrostatic-multipoles,em-electrostatic-multipoles-examples,_category}.md` | OK: 10 files, no wikilink in math, no multiline displays, all KaTeX spans parse, all frontmatter parses |
| proof layout | `node tools/physics-support/proof-layout.mjs items/<all seven>` | 7 items, 41 steps, 0 defects |
| content policy (batch scope) | `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-27.pages.json` | 7 scoped items, 0 errors, 0 warnings |
| strict proof contracts | `node tools/physics-support/proof-contract.mjs research/...-batch-27.proof-contracts.json --strict` | 3 remaining `citation-source-missing` errors, all from the still-unauthored batch-16 suppliers (see open obligations); every other check over the 7 items passes |
| boundary audit | `node tools/physics-support/boundary-audit.mjs research/...-batch-27.proof-contracts.json --fail-on-contradicted --fail-on-template` | 56 rows, 17 not-applicable, no template clusters, no contradicted dispositions |
| citation fidelity | `node tools/physics-support/citation-fidelity.mjs research/...-batch-27.proof-contracts.json --fail-on-missing-quote` | every recorded quote appears in its cited item; no widening candidates |
| finite smoke / risk routing | `node tools/physics-support/finite-smoke.mjs ...` / `risk-report.mjs ...` | 0 errors, 0 smoke obligations defined by this pair; 7 items routed by the risk heuristic |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run ...` | no error names a batch-27 item; the 4 reported errors are SR items (`lem-sr-endpoint-displacement-of-a-future-timelike-worldline`, `thm-sr-endpoint-proper-time-bound-and-flat-maximum`, `ex-sr-two-leg-itinerary-versus-straight-clock`, `cex-sr-past-directed-itinerary-attains-the-endpoint-bound`) whose labels differ from their computed levels — sibling-owned |
| plan validation | `node tools/physics-support/frontier-item-gate.mjs --run ... --tool validate-plan` | exits 1 with 26 `undeclared-prereq` errors, none naming `em-electrostatic-multipoles` or `-examples`; they name sr-spacetime-primitives, sr-forces-and-continuum, em-elementary-mathematical-prerequisites, em-expanded-analysis-prerequisites, em-boundary-and-spectral-prerequisites, em-experiment-analysis-prerequisites(-examples), em-maxwell-integral-and-constraints, em-electrostatic-boundaries-and-conductors and em-material-response — sibling-owned manifest `requires` gaps |
| cross-batch input | updated `research/...-batch-27.cross-batch-dependencies.json` in place (35 rows: 31 `verified`, 4 `open`) and attempted `frontier-dependency-ledger.mjs refresh --run ...` | refresh currently fails on a sibling defect, see finding 1; retry pending |
| item decisions | `node tools/physics-support/step3-decisions.mjs record-item ...` | 3 `accept` (`pthm-em-electric-dipole-torque`, `ex-em-quadrupole-symmetry`, `ex-em-two-charge-dipole`), 3 `repaired` (`def-em-electric-moments`, `pthm-em-moment-origin-change`, `pthm-em-electric-dipole-expansion`), 1 `escalate` (`pthm-em-electric-general-multipoles`); the four accept/repaired hashes must be re-recorded once the supplier writers settle |

Recheck dispatch `07d0d7d1f06dac16` (all re-run after the `dependency_level` metadata edits):

| Check | Command | Result |
|---|---|---|
| precheck (explicit paths) | `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<id>.md` for all seven | 6 PASS (direct), the definition has no phase body; 0 failing |
| rendercheck (explicit paths) | items + both pages + `_category.md` (10 files) | OK: every KaTeX span and frontmatter block parses |
| proof layout (final batched run) | `node tools/physics-support/proof-layout.mjs items/<all seven>` | 7 items, 41 steps, 0 defects |
| content policy (batch scope) | `node tools/physics-support/content-policy.mjs research/...-batch-27.pages.json` | 7 scoped items, 0 errors, 0 warnings |
| strict proof contracts | `node tools/physics-support/proof-contract.mjs research/...-batch-27.proof-contracts.json --strict` | 3 `citation-source-missing` errors, exactly the rows citing the two unauthored batch-16 items (F7/F8 → `lem-em-spherical-harmonic-basis-and-addition`, F11 → `lem-em-ball-poisson-series-boundary-convergence`); 7/7 items checked |
| strict proof contracts (repeat after the supplier revision) | same command after refreshing the two `lem-em-coulomb-dipole-remainder` quotes | back to exactly the 3 `citation-source-missing` errors above; a transient `citation-quote-mismatch` from the sibling's 07:31:38Z revision was fixed by the quote refresh |
| citation fidelity | `node tools/physics-support/citation-fidelity.mjs research/...-batch-27.proof-contracts.json --fail-on-missing-quote` | 106 citations; every recorded quote appears in its cited item; the 2 referenced items not on disk are skipped, not passed |
| boundary audit | `node tools/physics-support/boundary-audit.mjs research/...-batch-27.proof-contracts.json --fail-on-contradicted --fail-on-template` | 56 rows, 17 not-applicable, no template clusters, no contradicted dispositions |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | clean: 473 items, 80 pages, maximum level 24 (the four SR level errors reported by the authoring dispatch are fixed by their owners) |
| scoped depcheck | `node tools/physics-support/depcheck.mjs --items-file <seven IDs>` | 7 errors, all the unresolved deps/links of `pthm-em-electric-general-multipoles` to the two unauthored items; nothing else |
| plan validation | `node tools/physics-support/frontier-item-gate.mjs --run ... --tool validate-plan` | exits 1 with 33 `undeclared-prereq` errors, none naming `em-electrostatic-multipoles` or `-examples` (sibling manifest `requires` gaps for Step 4) |
| unified ledger | `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` | refreshed: 36 batch-27 consumer edges, all reviewed; 0 unreviewed batches; 0 orphaned reviews |
| item decisions | `node tools/physics-support/step3-decisions.mjs record-item ...` (six items) | 6 `repaired`, confidence 1, examined dependency IDs recorded; `pthm-em-electric-general-multipoles` remains `escalate` (owner-held) |

## Findings and open obligations (current)

1. **Escalated consumer (open, owner-held).** `pthm-em-electric-general-multipoles` consumes two
   still-unauthored batch-16 items and its decision stays `escalate`:
   - `lem-em-spherical-harmonic-basis-and-addition` (page `em-expanded-analysis-prerequisites`,
     order 310, level 1): used at proof steps 1.1, 2.1, 3.1, 4.1, 5.1 (diagonal addition
     theorem and the `|Y_{lm}| ≤ √((2l+1)/(4π))` bound; orthonormal degree-`l` expansions and
     pairings; the `l=2` addition theorem; degree terms of the exterior series). The current
     scaffold statement covers all these uses; the F7/F8 citation quotes remain unverified
     against a completed item.
   - `lem-em-ball-poisson-series-boundary-convergence` (same page, level 2): used at proof
     step 7.1 (ball series, uniform derivative convergence on closed smaller balls,
     harmonicity, radial `L²` bound, `L²` boundary convergence, uniqueness, Poisson
     representation and continuous boundary extension). The current scaffold statement covers
     these uses; the F11 citation quote remains unverified against a completed item.
   Remedy: the batch-16 pair authors both items on their assigned A page (its report lists them
   as pending items 18 and 20); the recorded quotes are then re-checked against the completed
   Statements and the consumer's escalation is resolved by the owner. Never mark the consumer
   complete while these rows are open.
2. **Page edges reconciled.** `em-electrostatic-multipoles <- em-boundary-and-spectral-prerequisites`
   was updated to `verified` (its only item-level use, `thm-em-spherical-multipole-basis`, is
   authored and matches at statement level); `em-electrostatics-in-vacuum` was already
   `verified`. The batch-27 cross-batch input now has 36 rows (34 `verified`, 2 `open`), and the
   unified ledger is refreshed with no unreviewed batches or orphaned reviews.
3. **Authoring-dispatch repairs (kept, not manifest edits).** `def-em-electric-moments`
   corrected the scaffold's "Two branches" count to the three declared branches;
   `pthm-em-moment-origin-change` added the two published suppliers used by the
   reverse-triangle/inner-product steps (`thm-cauchy-schwarz-and-the-euclidean-norm`,
   `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`);
   `pthm-em-electric-dipole-expansion` quantified the leading-term clause with its explicit
   threshold; `pthm-em-electric-general-multipoles` added `def-newtonian-potential` and
   `lem-em-coulomb-dipole-remainder` to its deps (both level-0 mathematical items; level 18
   unchanged). Recheck-dispatch repair: `dependency_level` added to all seven item frontmatters
   (16/17/17/18/18/18/18), matching the manifest labels and the computed levels. The frozen
   manifest statements were left untouched because they bind the recorded Step 3a scope hash;
   Step 4 may fold these interface additions into the plan.
4. **Choice accounting.** Countable Choice is declared and used only through the cited
   Lebesgue/measure, distribution and spherical-harmonic interfaces; `ex-em-quadrupole-symmetry`
   and the finite-point branches are choice-free. No item uses full Choice or Dependent Choice.
5. **No empirical content.** The pair contains no experiment, measurement, sampling or
   statistical inference; every item's scope clause excludes fields, forces, self-energy and
   empirical readings, so no statistical qualifications are owed beyond those clauses.
6. **Sibling plan defects (report only).** The 33 `validate-plan` `undeclared-prereq` errors
   are distributed over sibling pages (sr-spacetime-primitives and its examples,
   sr-forces-and-continuum, em-elementary-mathematical-prerequisites,
   em-variational-mathematical-prerequisites and its examples, em-expanded-analysis-prerequisites,
   em-boundary-and-spectral-prerequisites, em-experiment-analysis-prerequisites and its examples,
   em-maxwell-integral-and-constraints, em-electrostatic-boundaries-and-conductors,
   em-material-response and its examples); none names this pair, and Step 4 owns the shared
   splice. The previously reported sibling frontmatter defect
   (`items/lem-sr-closed-one-form-primitive-on-simply-connected-open-sets.md`) and the four SR
   dependency-level mismatches are fixed; re-verified this dispatch.
7. **Superseded findings.** The authoring dispatch's finding 1 (sibling YAML defect) and
   finding 2's first supplier (`thm-em-spherical-multipole-basis`) are resolved as recorded
   above; the remaining two suppliers are finding 1 of this list.
