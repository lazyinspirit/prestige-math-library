# Batch 7 authoring notes — `emg-cp02`

## Scope and plan reconciliation

- Authored only the assigned A/B pair `emg-cp02` / `emg-cp02-examples`, its 11 reserved item files, the two page files, and this batch's evidence. The A page contains 9 items and remains below the 100-item cap; the B page contains one example and one scope remark.
- The active `plan-spec.json`, assigned task and current batch manifest require `emg-cp01`, `inverse-and-implicit-function-theorems`, `gr-gr13-convex-normal-neighborhoods`, and `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability` for A. The older prose design at `research/plan-einstein-maxwell-models-track.md` L270 lists only CP01 and the inverse/implicit-function page; the old proposed inventory lists CP01 only. The active plan/task/manifest control, so the A page records all four. B requires A.
- `plan-spec.json` keeps the pair's item arrays empty by scaffold convention. The proposed item inventory and assigned task supply the reserved IDs; all 9 A IDs and 2 B IDs are retained in the local pages and batch manifest. No shared plan or other pair inventory was edited.
- The page preserves the planned field-strength route: real two-form $F$ (no global potential), signature $(-,+,+,+)$, $K=+\frac12\mathcal L_nh$, oriented tetrad convention $F_{0i}=-e_i$, $F_{ij}=\epsilon_{ijk}b_k$, SI $e=E/c$, $b=B$, Maxwell Gauss propagation, the algebraic Maxwell stress, harmonic subsidiary recovery, smooth local geometry and the bounded smooth GHD conclusion. It does not assert geodesic completeness, a measured field, or model applicability to nature.

## CP01 carrier audit and conditional status

The current `research/physics-remaining-80-2026-10-17-batch-6.pages.json` lists the CP01 A/B items. The exact CP01 files were inspected and the consuming items reconciled against their actual statements and proofs. The required supplier items are `status: draft` with `verification.precheck: pending`; they are not treated as proved by their IDs or presence. Dependent CP02 arguments remain conditional and readiness is escalated until those draft proof statuses are resolved.

| CP01 supplier inspected | Actual interface checked against use | Actual status |
|---|---|---|
| `def-emg-electrovacuum-cauchy-system` | Signature $(-,+,+,+)$; $\kappa=8\pi G_N/c^4$, $\mu_0>0$, $\Lambda\in\mathbb R$; $Q_{ab}=F_{ac}F_b{}^c-\frac14g_{ab}F^2$; $T=\mu_0^{-1}Q$; source-free $G+\Lambda g=\kappa T$, $dF=d\star_gF=0$; no global potential; the same SI $e,b$ and $K$ convention. | Draft; precheck pending; listed in batch-6 manifest. |
| `def-emg-periodic-high-sobolev-state` | Real componentwise Fourier $H^s(\mathbb T^3_{2\pi})$, integer $s\ge5$, continuous representative with compact value range, bounded norm; explicitly assumes only $\mathrm{AC}_\omega$. | Draft; precheck pending; listed in batch-6 manifest. |
| `thm-emg-symmetric-hyperbolic-research-supplier` | Smooth periodic symmetric matrices, smooth lower-order term, uniformly positive time matrix on compact admissible neighborhoods, $H^s$ data with $s\ge5$, common time, $L^\infty H^s\cap C H^{s-1}$, $\partial_tU\in L^\infty H^{s-1}$, compact state range, uniqueness/stability and smooth persistence by current GR suppliers. | Draft; precheck pending; listed in batch-6 manifest. The proof is conditional on the inspected current GR PDE items. |
| `lem-emg-maxwell-stress-conservation` | For $\nabla_aF^{ab}=-\mu_0J^b$, $\nabla^aT_{ab}=-F_{bc}J^c$; for $J=0$, conservation. Observer energy is $(|e|^2+|b|^2)/(2\mu_0)$ and mixed component is $-(e\times b)_i/\mu_0$. The sign and units match the CP02 constraints and gauge proof. | Draft; precheck pending; listed in batch-6 manifest. Its product-rule/Bianchi proof was inspected. |
| `thm-emg-gauss-codazzi-maxwell-constraints` | Maxwell constraints $D_ie^i=D_ib^i=0$; Hamiltonian $R+\tau^2-|K|^2=2\Lambda+\frac\kappa{\mu_0}(|e|^2+|b|^2)$; momentum $D^jK_{ji}-D_i\tau=-\frac\kappa{\mu_0}(e\times_hb)_i$. The sign matches the imported normal-frame GR theorem. | Draft; precheck pending; listed in batch-6 manifest. Its full contractions and pullback proof were inspected. |
| `lem-emg-fixed-smooth-background-harmonic-data` | For fixed smooth positive $\gamma$, $Q^i=h^{jk}(\Gamma(h)^i{}_{jk}-\Gamma(\gamma)^i{}_{jk})$, $\partial_0g_{0i}=h_{ij}Q^j$, $\partial_0g_{00}=-2\operatorname{tr}_hK$, $\partial_0g_{ij}=2K_{ij}$, and $H=0$; finite-regularity terms have the required $H^s$ regularity. | Draft; precheck pending; listed in batch-6 manifest. Its Christoffel and Sobolev proof was inspected. |

The direct CP01 interfaces match the consumers in stress sign, normal/tetrad orientation, positive-$K$ convention, SI normalization, constraint directions, $\mathrm{AC}_\omega$ strength, Sobolev order, background smoothness and initial gauge. The unresolved condition is the suppliers' draft/pending proof status, not an interface mismatch. `def-emg-constrained-electrovacuum-data` was also inspected because the constraint theorem depends on it; it has the same draft/pending status and uses exactly these four constraints.

## Dependency levels

The batch dependency file assigns batch 6 level 0 and batch 7 level 1. Item levels use the actual item DAG: within CP01 the inspected supplier files carry levels 0 (`def-emg-electrovacuum-cauchy-system`), 1 (`def-emg-periodic-high-sobolev-state`, `lem-emg-maxwell-stress-conservation`), 2 (`thm-emg-symmetric-hyperbolic-research-supplier`, `def-emg-constrained-electrovacuum-data`), and 3 (`thm-emg-gauss-codazzi-maxwell-constraints`, `lem-emg-fixed-smooth-background-harmonic-data`). Each CP02 level is zero with no in-run suppliers, otherwise one plus the maximum level among its actual in-run item suppliers; out-of-run mathematical imports do not raise the level.

| Item | Level | Highest in-run supplier(s) |
|---|---:|---|
| `lem-emg-fieldstrength-positive-symmetric-reduction` | 1 | CP01 model definition (0) |
| `thm-emg-maxwell-gauss-propagation` | 2 | field-strength reduction (1) |
| `lem-emg-coupled-reduced-einstein-evolution` | 4 | CP01 harmonic initialization (3) |
| `thm-emg-einstein-gauge-propagation` | 5 | coupled reduction (4) |
| `thm-emg-local-high-sobolev-electrovacuum` | 6 | Einstein gauge propagation (5) |
| `prop-emg-local-sobolev-stability-continuation` | 7 | local high-Sobolev theorem (6) |
| `thm-emg-smooth-local-geometric-uniqueness` | 7 | local high-Sobolev theorem (6) |
| `lem-emg-smooth-geometric-causal-research-suppliers` | 0 | no in-run item supplier |
| `thm-emg-sourcefree-smooth-maximal-development` | 8 | local geometric uniqueness (7) |
| `ex-emg-nonzero-parallel-field-data` | 7 | local high-Sobolev theorem (6) |
| `rem-emg-maximal-is-not-complete` | 9 | source-free smooth maximal development (8) |

The current CP02 item levels match the in-run dependency graph above. The run-wide `item-dependency-levels.mjs check` still reports 89 empty inventories and 8 pre-existing item-level mismatches in other batches; it reports no CP02 level mismatch. The read-only run-wide `batch-dependency-levels.mjs check` is blocked because its snapshot requests missing `physics-remaining-80-2026-10-17-batch-58.pages.json`. These unrelated artifacts were not edited.

## Source reading and dispositions

- Chruściel's complete 132-page Roscoff lecture notes were fetched and inspected in full-text form; the complete relevant §1.6, printed pp. 23–25, was read. They supply the full-lecture-notes treatment on the A page and are recorded as context where their potential formulation does not prove the field-strength block.
- Alcubierre, Degollado and Salgado, arXiv:0907.1151v2, complete 20-page PDF: §II and §II.A, printed pp. 3–8, and §II.C, printed pp. 8–9, were read. It supports the electric/magnetic split and constraint context but its selected coupled Einstein evolution is not used as the CP02 existence proof.
- Sbierski, arXiv:1309.7591v3, complete 25-page PDF: Definitions and Theorems 2.6–2.8, printed pp. 10–12, and complete proofs §§3.1–3.3, printed pp. 12–24, were read. The source is vacuum-only; the CP02 use is limited to the global quotient route through the current generic GR theorem after local EMG hypotheses are discharged.
- Ringström's *The Cauchy Problem in General Relativity* mirror returned HTTP 404. Search found his author-hosted 26-page Einstein–scalar MGHD manuscript, pp. 1–5 of which were inspected for scope. It is not an equivalent Einstein–Maxwell treatment and is recorded out-of-scope, not as a replacement supplier. This failed optional mirror is preserved in coverage `retrieval_history`; no source was dropped, no item was supported by the failed URL, and two independent A-page treatments remain available.
- `research/physics-remaining-80-2026-10-17-batch-7-source-coverage.json` retains full-text fetch stamps. The companion `batch-7.coverage.json` records every harvested result, per-item disposition and reason.

## Final scoped checks

After final item, page, manifest, contract and coverage edits:

- `proof-layout.mjs` on all 11 assigned items: 11 items, 44 steps, 0 defects.
- `precheck.mts` on all 11 assigned items: 11 checked, 0 failing.
- `proof-contract.mjs --strict`: 0 errors, 0 warnings, 11/11 items checked.
- `rendercheck.mjs` on 11 items and 2 pages: 13 files, no defects.
- `content-policy.mjs` on this batch manifest: 11 scoped items, 0 errors, 0 warnings.
- `coverage-checklist.mjs` with destination checks: 2 pages, 23 harvested results, 0 errors, 0 warnings. `source-fetch-check.mjs`: 7/7 sources fetch-verified and resolved.
- Focused `depcheck.mjs` on the 11 assigned items: selected item/page checks and prerequisite-cycle checks pass across 2,315 items and 301 pages. CP02 item dependency levels match the actual in-run graph.
- Run-wide checks remain blocked outside this assignment: `proof-contract-coverage.mjs` finds empty page inventory `emg-pcp01`; `validate-plan.mjs` stops at batch 34 because `lem-csm-examples-gamma-gaussian-tools` depends on unresolved ID `research-thermo-M17-controlled-continuous-integral` and `pthm-csm-ising-ring-correlation` depends on unresolved ID `research-thermo-M18-1D-Ising-transfer`; `item-dependency-levels.mjs check` reports the unrelated empty inventories and 8 unrelated level mismatches; `batch-dependency-levels.mjs check` requests absent `physics-remaining-80-2026-10-17-batch-58.pages.json`. No other batch or shared plan was changed.

Step-1 readiness records are recorded separately for each of the 11 assigned items. The ten EMG claims depending transitively on CP01 are escalated because their inspected CP01 carrier files remain draft with `verification.precheck: pending`; the independent smooth causal-supplier lemma is ready on its existing current prerequisites. These records are authoring evidence, not approval or proof acceptance.
