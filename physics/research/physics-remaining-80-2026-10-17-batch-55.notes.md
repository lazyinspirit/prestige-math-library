# Batch 55 — authoring notes

Run: `physics-remaining-80-2026-10-17`  
Pair: `tgr-mc02` / `tgr-mc02-examples`

## Plan and design reconciliation

- `research/plan-spec.json` controls A/B order 607/608, category `thermodynamics-and-general-relativity-mathematics`, `library: mathematics`, and the page requirements. It requires both `tgr-mc01` and `the-heat-kernel-and-the-cauchy-problem`; the older reservation lists only TGR-MC01. Batch 55 follows the canonical plan and records the additional heat-kernel supplier here.
- The complete TGR-MC02 design section at `research/plan-thermodynamics-and-general-relativity-track.md` L149 governs scope and warnings. The A page contains perfect-stress and particle projections, the Carter circulation identity with a local flow, the dissipative entropy residual, and narrowly stated first-order model limitations. The B page proves the null-tensor Landau-frame obstruction directly. No observation, measurement, general evolution theorem, global flow, nonlinear instability, or universal material law is asserted.
- The planned inventory is retained: A-page items `lem-tgr-perfect-fluid-projection`, `lem-tgr-carter-circulation`, `lem-tgr-dissipative-entropy-identity`, and `lem-tgr-first-order-model-limits`; B-page item `ex-tgrmath-null-landau-obstruction`. No new intermediate item was needed. The A and B pages remain below the 100-item cap.
- The inventory shorthand `GR-G2` is not a production dependency. Carter circulation instead depends on published `lem-tdmath-local-contraction-flow` and `lem-tdmath-variational-flow-and-commutation`; their Euclidean hypotheses are applied in charts, and uniqueness patches the finitely many local flows along the compact curve.

## Dependency inventory and levels

The batch-53 manifest now contains the actual MC01 item inventory. The item dependency closure inspected for this batch contains 60 existing carriers: the three MC01 draft items below, the five batch-55 draft items, and published mathematical suppliers. No prerequisite carrier is missing, and the in-run graph is acyclic. The direct/transitive MC01 interfaces and their proof status were checked against the current item files, not just their labels.

| Item | Dependency level | In-run suppliers |
|---|---:|---|
| `lem-tgr-perfect-fluid-projection` | 2 | `def-tgr-local-fluid-state` (0), `lem-tgr-local-gibbs-euler` (1) |
| `lem-tgr-carter-circulation` | 3 | `lem-tgr-perfect-fluid-projection` (2), `def-tgr-local-fluid-state` (0) |
| `lem-tgr-dissipative-entropy-identity` | 2 | `def-tgr-local-fluid-state` (0), `lem-tgr-local-gibbs-euler` (1) |
| `lem-tgr-first-order-model-limits` | 3 | `lem-tgr-dissipative-entropy-identity` (2), `def-tgr-local-fluid-state` (0) |
| `ex-tgrmath-null-landau-obstruction` | 2 | `lem-tgr-fluid-frame-projection` (1) |

External published mathematics prerequisites, including the heat-kernel page and its statement-level suppliers, do not raise these in-run item levels. Batch 55 remains level 1 after batch 53 at level 0 in the run ledger.

### MC01 supplier freshness escalation

The current carriers and complete relevant proof bodies were inspected. Their actual interfaces are recorded in consuming `Facts & Assumptions`, proof-contract excerpts, and the cross-batch dependency file. The state definition is current as a carrier; the Gibbs–Euler and frame-projection arguments are complete conditional drafts. However, each MC01 record still says `ready` while its stored item hash no longer matches the current item file:

| Supplier | Recorded hash | Current carrier hash |
|---|---|---|
| `def-tgr-local-fluid-state` | `36e4a355f60c0908c2dd3a0e40b44c3dd6354f9e6553f0aac91b5f03457940d4` | `d880869678fdaf538cef2461c84436aa54176480d41b6824b15e3d051fbfe7fa` |
| `lem-tgr-local-gibbs-euler` | `475b6cdf13a56466970ee4e620395eed1e4db8611f3151c3e43ef381c6ff2905` | `9be4ed52545ba9e7fd5a0e800420e842a32eaea797bc5b6e88e194dfd5c44292` |
| `lem-tgr-fluid-frame-projection` | `d09c0988c51deacc276a46dcb7147c5d5ed9fe197e3c6d7b532da8375b729ee3` | `7b547ce5dabcb086f239be7199af722b68859e75e92e4b591bbbec166f8e35bb` |

The consuming arguments are complete and conditional on the inspected interfaces. All five batch-55 readiness records are escalated because the required MC01 readiness evidence is stale; this batch does not change the supplier records or claim their independent approval. Batch 55 continues using their exact current statements and hypotheses, including the nonempty-open-domain and C2 state-map requirements, Gibbs differentials, and the clause-2 stress decomposition.

## Source reading and qualifications

- Gourgoulhon, [full 37-page lecture-note PDF](https://arxiv.org/pdf/gr-qc/0603009): inspected the complete relevant arguments on PDF pp. 16–24, including the local Gibbs relation, perfect-stress projections, Carter–Lichnerowicz identity, and isentropic circulation specialization. The source's enthalpy-per-particle notation is translated explicitly in the local items.
- Romatschke, [full 25-page article PDF](https://arxiv.org/pdf/0906.4787): inspected the stress/frame discussion and entropy-current derivation on PDF pp. 7–13; PDF p. 7 was also visually inspected. Its entropy derivation is conformal and at zero conserved-charge density, so it is context only for the general diffusion identity proved here. PDF p. 7 prints `u_mu T^{mu nu}=+epsilon u^nu` under its stated `(-+++)` convention. That sign is not consumed; the local items state and derive their conventions independently.
- The pair's mathematical claims are conditional deductions. No experiment or measurement is presented as proof of a model.
- `source-fetch-check --stamp` first rejected the coverage file because the checker requires a `{ "pages": [...] }` wrapper. After correcting the coverage shape, all four listed sources were retrieved and inspected and the checker reported `4/4 source(s) fetch-verified (4 newly stamped)` and `4/4 source(s) resolved (0 documented drops...)`. A subsequent non-stamping check also passed `4/4`; no source retrieval failure or recovery retry remained.

## Scoped checks and readiness

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <five item paths>`: 5 checked, 0 failing after adopting the checker’s dependency-layer numbering.
- `node tools/physics-support/proof-layout.mjs <five item paths>`: 5 items, 16 steps, 0 defects.
- `node tools/physics-support/rendercheck.mjs <five item paths and both pages>`: 7 files passed; no multiline display blocks, KaTeX errors, malformed delimiters, or frontmatter parse errors.
- Strict `proof-contract.mjs` on the five assigned items: 0 errors, 0 warnings, 5/5 checked. Proof-contract coverage of the entire run is blocked by the separate empty frontier page inventory `emg-pcp01`.
- `content-policy.mjs <batch-55 manifest> --manifest-only --authored`: 5 scoped items, 0 errors, 0 warnings. Focused `depcheck.mjs` on the five assigned items passed item and prerequisite-cycle checks.
- The focused item dependency calculation agrees across item frontmatter and the batch manifest: levels 2, 3, 2, 3, 2 in inventory order; no cycle. The run-wide `batch-dependency-levels.mjs check` reports a stale ledger. Its recorded input hash is `949a7d0c47a19fe0e526a4bd4b666ce43d9ea1bd59a953a573f370963527fc0c`; the current input hash is `65f175385be7e95a373fe9494e05bbbcedc44d51bd6dcf3701fd0af80a200234`. The changed `requires` rows are batches 4, 8, 14, 28, 29, 39, and 54; batch 55 remains level 1. This shared ledger was left for the owner.
- The non-stamping source check passed `4/4` fetch-verified and `4/4` resolved. The earlier stamping run recorded all four stamps in the coverage file.
- Each assigned item has a current Step 1 record with `decision: escalated` and `owner: false`, for the MC01 hash mismatch described above. The run-wide Step 1 check reports `closed: false` across 302 items (47 ready); unrelated batch items and empty scaffold pages remain for their owners. These authoring records do not constitute independent review or approval.

## Remaining owner escalations

1. Reconcile the current MC01 carriers with their three hash-stale Step 1 records before these five conditional consumers can be marked ready.
2. Recompute/approve the shared batch dependency-level ledger after its current `requires` rows are reviewed.
3. Restore or complete the separate `emg-pcp01` frontier inventory so run-wide proof-contract coverage can proceed.
