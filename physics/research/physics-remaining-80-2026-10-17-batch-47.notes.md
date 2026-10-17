# Batch 47 — authoring notes

Run: `physics-remaining-80-2026-10-17`  
Pair: `qsm-dt-response` / `qsm-dt-response-examples`  
Role: beta; batch: 47.

## Scope and plan reconciliation

- The binding owner direction was read before authoring and controls over earlier dispatch text. The complete T0–T6 design in `research/plan-quantum-statistical-mechanics-track.md` §“Trace-class bounded-observable response” (L349 onward) was read. Its finite, normal trace-class, graph-domain, quasi-local, pure-point, Green–Kubo, and example boundaries are retained.
- Current `research/plan-spec.json` page requirements were followed: A requires `qsm-finite-range-spin-dynamics`, `relations-functions-and-quotients`, and `the-lebesgue-integral-and-the-convergence-theorems`; B requires only A, `qsm-dt-response`.
- The original reservation embedded in the design and stored at `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json` differs: A also lists `qsm-quasilocal-states` and `qsm-states-ensembles`; B also lists `qsm-states-ensembles`. Current plan-spec controls page-level `requires`; those older pages remain actual item-level/transitive dependencies where exact carriers are used. The plan-spec item arrays for these pages are empty, while the research reservation contains 14 original A items and 2 original B examples.
- Five local mathematical prerequisites were added on A before consumers use them: `lem-qsm-dt-banach-volterra-dyson`, `lem-qsm-dt-finite-matrix-trace-ideal`, `lem-qsm-dt-lorentzian-distribution-limits`, `lem-qsm-dt-stationary-variance-integral-identity`, and `lem-qsm-dt-trace-gibbs-correlation-series`. Final placement is 19 A items / 2 B examples, below the 100-item page cap.
- The older research inventory overdeclared the general density-trace definition for finite unitary dynamics and general trace-state calculus for finite matrix Kubo/FDT. Current finite branches use inspected finite matrix state/Gibbs and trace-norm interfaces; the normal trace-class and trace-Gibbs branches retain their exact general density/trace-state dependencies, including their explicit Choice cost. The finite FDT proof uses its local Lorentzian distribution lemma, not a duplicate direct dominated-convergence edge.
- No plan, published item/page, imported mathematical original, run-wide state, decision ledger outside this batch, or owner verdict was edited.

## Dependency inventory and levels

The initial batch schedule marked batch 47 level 3 with `requires:["39"]`. Recomputing the graph from the current manifests and direct item dependencies gives batch 47 level 3 with direct in-run supplier batches `["36","38","39"]`. Levels remain 3 because batch 39 is level 2; batches 36 and 38 are levels 0 and 1. The extra direct edges come from current item-level uses of batch-36 finite matrix/Gibbs/trace-state carriers and batch-38 quasi-local algebra/state carriers.

The shared `research/physics-remaining-80-2026-10-17-batch-dependency-levels.json` still records only batch 39 and its input hash is stale. The owner must refresh that run-wide scheduling record. It was not edited here. The current graph is acyclic. Exact batch/page/item interfaces and statuses are in `research/physics-remaining-80-2026-10-17-batch-47.dependency-inputs.json` and `research/physics-remaining-80-2026-10-17-batch-47.cross-batch-dependencies.json`.

| Item | Direct in-run suppliers (batch / level) | Item level |
|---|---|---:|
| `lem-qsm-dt-banach-volterra-dyson` | — | 0 |
| `lem-qsm-dt-finite-matrix-trace-ideal` | `lem-qsm-matrix-state-calculus` (36 / 0) | 1 |
| `lem-qsm-dt-lorentzian-distribution-limits` | — | 0 |
| `lem-qsm-dt-stationary-variance-integral-identity` | — | 0 |
| `thm-qsm-dt-normal-state-kubo` | `def-qsm-density-trace-state` (36 / 0), Banach helper (47 / 0) | 1 |
| `thm-qsm-dt-finite-unitary` | matrix calculus (36 / 0), finite Gibbs KMS (36 / 1) | 2 |
| `thm-qsm-dt-cesaro-dephasing` | finite unitary (47 / 2) | 3 |
| `thm-qsm-dt-finite-kubo` | finite unitary (47 / 2), matrix calculus (36 / 0), trace-ideal helper (47 / 1), Banach helper (47 / 0) | 3 |
| `thm-qsm-dt-finite-recurrence` | finite unitary (47 / 2) | 3 |
| `thm-qsm-dt-strong-domain-response` | Banach helper (47 / 0), normal Kubo (47 / 1) | 2 |
| `post-qsm-dt-isolated-model` | finite unitary (47 / 2), normal measurement postulate (36 / 2) | 3 |
| `post-qsm-dt-physical-control` | normal measurement postulate (36 / 2), finite Kubo (47 / 3) | 4 |
| `thm-qsm-dt-spectral-fdt` | matrix calculus (36 / 0), Lorentzian helper (47 / 0), finite Kubo (47 / 3), finite unitary (47 / 2) | 4 |
| `lem-qsm-dt-trace-gibbs-correlation-series` | trace-Gibbs variational (36 / 4), trace-state calculus (36 / 1) | 5 |
| `thm-qsm-dt-trace-gibbs-correlation-measure` | trace-Gibbs variational (36 / 4), correlation series (47 / 5) | 6 |
| `pthm-qsm-dt-prepared-response` | physical-control postulate (47 / 4), isolated-model postulate (47 / 3), finite Kubo (47 / 3) | 5 |
| `thm-qsm-dt-algebraic-kubo` | matrix C*-identity (36 / 1), interaction (39 / 3), quasi-local algebra (38 / 4), consistent local states (38 / 7), finite-range dynamics (39 / 6), Banach helper (47 / 0) | 8 |
| `thm-qsm-dt-isolated-dc-obstruction` | correlation measure (47 / 6) | 7 |
| `thm-qsm-dt-variance-green-kubo` | matrix C*-identity (36 / 1), algebraic Kubo (47 / 8), variance helper (47 / 0) | 9 |
| `ex-qsm-dt-bounded-oscillator-response` | trace-Gibbs variational (36 / 4), strong-domain response (47 / 2) | 5 |
| `ex-qsm-dt-qubit-isolated-response` | matrix exponential response (36 / 1), finite Kubo (47 / 3), spectral FDT (47 / 4) | 5 |

The item-level calculations match all 21 manifest labels. Dependency levels set supplier-first dispatch order; they were not used as a wait barrier. All direct prerequisites were inspected before the final readiness records; batch-36/38/39 draft suppliers have current hash-bound Step 1-ready records, and external mathematical suppliers are published.

## Cross-batch supplier status and stale evidence

- Current batch-39 `thm-qsm-finite-range-spin-dynamics` source is `ad6cd344…0108a1`; its current official Step 1 record is hash-current/ready. The dated `research/physics-remaining-80-2026-10-17-owner-qsm39-final-adoption/resolution.json` says the finite-matrix C*-identity/group scientific gap is resolved and calls out five unrelated batch-40 consumers still pending.
- The older `research/physics-remaining-80-2026-10-17-batch-39.cross-batch-dependencies.json` and the current prose at the bottom of `library/quantum-statistical-mechanics/qsm-finite-range-spin-dynamics.md` still say the C*-identity/group supplier is open or pending. Those are stale against the later owner resolution and official current Step 1 rows. This page is outside batch 47 and was not changed. The local algebraic Kubo proof uses the exact current interaction/algebra/group interfaces and stays conditional on those mathematical statements; Step 1 ready is authoring readiness, not independent proof approval.
- The stale shared batch schedule listed batch 47 as depending only on batch 39. Current recomputation adds batches 36 and 38 from actual item-level dependencies, while retaining level 3. The owner-controlled graph row is the proposed placement to refresh. No assigned carrier is missing and no dependency cycle was found.

## Source reading and harvest

Four complete authoritative texts were retrieved and inspected; locators, raw-file checksums, harvest entries, and per-result dispositions are in the batch coverage file. The two independent linear-response treatments are Kubo and MIT; the full course/book-length notes by Simon and Naaijkens cover independent response and spin-dynamics context.

- [Ryogo Kubo, “Statistical-Mechanical Theory of Irreversible Processes I”](https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf), complete 17-page scan; §2 printed pp. 572–575. Inspected the isolated perturbation convention, stationary ensemble, density/expectation response, commutator kernel, causal convolution, and higher-order range. The sign was reconciled with local (H-epsilon h(t)B); higher-order coefficients are out of scope.
- [MIT OCW 8.512, Lecture 1: Linear Response Theory](https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf), complete 11-page note; §§1.1–1.5, pp. 1–8. Inspected interaction-picture integral equation, first-order commutator response, causal kernel, Lehmann spectrum, and zero-temperature fluctuation–dissipation discussion; the note’s (hbar=1) and weak-field/adiabatic assumptions were not imported.
- [Steven H. Simon, *Lecture Notes for Quantum Matter*](https://www-thphys.physics.ox.ac.uk/people/SteveSimon/QCM2023/QuantumMatter.pdf), complete 216-page text; Chapter 8 §8.2, printed pp. 118–122 (PDF pp. 127–131). Inspected both perturbation representations, ordered Dyson expansion, response kernel, causality, and regulator; its formal/pure-state derivation is contextual support, not the exact norm-remainder proof.
- [Pieter Naaijkens, *Quantum Spin Systems on Infinite Lattices*](https://arxiv.org/pdf/1311.2717), complete 157-page notes; §3.3.11 and Theorem 3.3.12 with proof, printed pp. 69–71. Inspected local derivation analyticity and thermodynamic automorphism-group construction; the source’s stronger local analyticity claims were not imported.

All four sources pass `source-fetch-check --stamp` (4/4 fetch-verified, 0 newly stamped, 4/4 resolved). No retrieval failed, no recovery retry was needed, no source was dropped, and no `source_resolution` entry was warranted. Coverage yields 10 harvested results with explicit inline/included or reasoned out-of-scope dispositions; no measurements or statistical inferences are claimed.

## Authored argument and physical scope

- The normal-state result is conditional on full Choice and a stationary trace-class density. It uses only bounded observables, trace-norm commutators, trace cyclicity for trace-class/bounded factors, and the Banach Dyson estimate. It does not use (ho H), (ho H A), or finite energy/entropy moments.
- The finite result fixes the initial Gibbs matrix and drives with (H-epsilon h(t)B). Its response sign and time ordering were checked against both source conventions; the exact unitary interaction-picture solution gives a quadratic finite-time remainder.
- The strong Schrödinger conclusion is restricted to (B(D(H))subset D(H)) and a bounded extension of ([H,B]); the graph-space continuity estimate and reversed-time surjectivity are explicit.
- The spectral FDT uses the stated Fourier convention, principal-value/Lorentzian distribution limits, finite-temperature detailed balance, and an explicitly separate zero-frequency atom. Finite Cesàro dephasing and finite recurrence do not imply relaxation.
- The trace-Gibbs branch states its open-interval trace-class hypothesis and proves absolute correlation-series control before reindexing detailed balance. The pure-point obstruction proves nonintegrability only in this isolated discrete-spectrum branch.
- The quasi-local response uses an invariant algebraic state on the actual finite-range automorphism group, not a global trace Hamiltonian. The Green–Kubo limit is conditional on absolute integrability and identifies a positive variance limit; it is not a universal transport law or a classical joint trajectory.
- The two B examples are exact model calculations with no reported apparatus, measurements, or empirical precision. The postulates are adopted assumptions; `pthm-qsm-dt-prepared-response` is a conditional model prediction.

## Final checks and readiness

- Strict proof contracts: 21/21 items, 0 errors and 0 warnings; every fact link has an exact supplier-section excerpt, every canonical numbered step has a claim/input worksheet, all eight standard boundary cases are dispositioned, and applicable finite matrix calculations are recorded.
- Precheck: 19 proof-bearing items, 0 failures after adopting the canonical dependency-layer phase numbering. Proof layout on all 21 explicit item files: 71 steps, 0 defects.
- Author check passed on the final 21-item/2-page scope. Rendercheck passed for all 21 items and 2 pages with YAML and actual KaTeX parsing. Content policy passed for 21 items. Scoped depcheck passed with a 1,635-item/512-page prerequisite-cycle closure; scoped fwdcheck passed with a 1,618-item/519-page dependency/forward closure; extcheck reports 0 recorded-not-proved items and 0 consequences in its full 33,928-item scan.
- Coverage checklist passed: 1 A page, 10 harvested results, 0 errors/warnings. Fetch check: 4/4 sources verified, 0 new stamps, 4/4 resolved.
- All 21 assigned Step 1 records are `ready`, hash-current, and `owner:false`; they include every direct dependency. The record is authoring readiness only and not independent scientific approval.
- The full run batch-dependency-level check reports stale shared data: stored batch 47 level 3 requires only 39; current computed graph is level 3 and requires 36, 38, and 39. The full item-dependency-level check is blocked by 50 other empty run-manifest inventories (including `emg-mm03`, `qsm-dt-channels`, and `tgr-c04`) and the unrelated `pthm-emg-matter-symmetry-charges` label (stored 5, computed 7). A scoped calculation confirms all 21 batch-47 item levels match and has no assigned cycles. Shared run scheduling/manifests were not edited.
- The run-wide proof-contract-coverage utility cannot scope to batch 47 and currently stops at the unrelated empty frontier inventory `emg-mm03`. The local strict proof-contract gate above passed for the complete assigned scope.
- Owner follow-up: refresh the shared batch-dependency-levels row for batch 47 to include current direct suppliers 36, 38, and 39; reconcile the stale pending note on the batch-39 page against its final owner adoption/current Step 1 evidence. No batch-47 readiness item is escalated for a missing carrier.

No independent approval or run-level closure is claimed.
