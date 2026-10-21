# Batch 51 authoring notes

## Scope, plan comparison, and live state

- Run: `inverse-problems-knot-theory-all-109-2026-10-19`; pair: `inverse-problem-benchmarking-and-shift` (A order 3098; B order 3099), draft only.
- Controlling source: `research/plan-inverse-problems-track.md`, IP-51, with the binding scope in `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-authoring-direction.md`.
- Plan/spec comparison: the page IDs, titles, category, order, companion, and nine A-page `requires` edges agree between IP-51 and `research/plan-spec.json`. The scaffold manifest had both item arrays empty; the controlling plan supplies the two A items (`def-ip-benchmark-risk-and-compute-budget`, `rem-ip-inversebench-scoped-findings`) and the seven B leaves (five benchmark models, a prior-shift comparison, and a solver-invalid iterate). No scope conflict found.
- Dependency input: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-dependency-levels.json`, SHA-256 `41be181e2562bef4cd2b96ddeb7d72853a4ba7be344ae49cfc976c53dd15d416`; batch 51 is level 8 and requires batches 14, 35, 44, 46, 47, 48, 49, and 50.
- Live native status was checked at the start: Step 1 scaffold, 82/109 batches covered, batch 51 missing, no worker in flight; the run has an owner-held scaffold blocker recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`. This authoring work neither changes that blocker nor makes an owner verdict.

## Source reading and mathematical decisions

- Zheng et al., *InverseBench*, official ICLR 2025 proceedings PDF, full 29-page paper including appendices: `https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf`. Inspected the complete technical sections, main results, Tables 3–12, Appendices A–C, and the five model descriptions. Locators used in items: §§2.1–2.3 and 3–5; Appendix A.1–A.2; Appendix B.1–B.7; Appendix C. Browser extraction rejected the 17,439,918-byte PDF; after searching alternate endpoints, the full official PDF was fetched with `curl` and all 29 pages were extracted and inspected. No claim depends on the unavailable supplemental ZIP.
- InverseBench source implementation, pinned repository revision `1db5932bc2995504491663d1e2c498e7317c5404`: `https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/inverse_scatter.py`. Inspected `full_propagate_to_sensor`, `InverseScatter.forward`, and `compute_svd` (source lines 326–445). The implementation passes a fixed incident field into the linear forward map and forms its cached matrix from that field. Appendix B.1's displayed equation instead writes a contrast-dependent total field inside `H(u_tot ⊙ z)`. The example will state the implemented first-Born map, disclose this paper/code notation discrepancy, and claim no linearity from the printed dependent-field formula.
- Guillaume Bal, *Introduction to Inverse Problems*, full 132-page E6901 lecture notes: `https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf`. Read complete §1.1 (PDF pp. 3–4) and §§8.2–8.3 (PDF pp. 91–97), covering measurement operators, modeling/noise, prior assumptions, regularization, Bayesian likelihoods, and computational limits.
- No source is dropped. The browser retrieval failures are recorded for reconciliation; successful full-text retrieval and source-fetch stamps will be recorded in the source evidence. A-page coverage uses two independent treatments: InverseBench and Bal's full lecture notes. The pinned code is supplemental implementation evidence for the first-Born example.

## Verified supplier interfaces

- `def-ip-forward-map-and-solution-classes`: metric truth/data spaces, forward map, and target-class map; definition only.
- `def-ip-inverse-risk-under-train-and-test-laws`: joint data/target-law risk for deterministic rules and probability kernels; extended nonnegative risk; no train/test inequality without a premise. Its kernel-measurability supplier proof was inspected and its finite/probability-kernel hypotheses match the planned randomized-method interface.
- `def-ip-learned-reconstruction-estimator`: point rules, unrolled maps, denoisers, learned priors, score fields, posterior kernels, and no automatic train-to-test/exactness guarantee.
- `def-ip-operator-and-prior-mismatch`: separates true/working operators, noise laws, model misspecification, and prior-support mismatch; makes no robustness conclusion.
- `def-ip-admissible-constraint-class`: nonempty constrained truth class and restricted forward map; no closedness/convexity assumption is supplied by that definition.
- `def-ip-pde-solver-admissibility-contract`: model-specific finite admissibility test, residual/certificate requirements, and explicit failure statuses; it expressly supplies no universal CFL threshold.
- `def-ip-diffusion-prior-score-and-measurement-score` and `alg-ip-measurement-guided-diffusion-reconstruction`: distinguish exact scores from surrogates and require explicit finite solver/admissibility failure statuses. These do not establish that every InverseBench algorithm is posterior exact.
- The remaining page-level context pages are present in the current plan manifests. The new definition treats candidate methods as supplied black boxes, so it does not import the neural-operator EIT existence theorem, unrolled convergence, or exact-MMSE PnP stationarity into a benchmark claim.

## Pre-authoring inventory and item levels

The scaffold inventory was installed before writing item carriers. Direct in-run levels were computed from actual supplier labels: `def-ip-benchmark-risk-and-compute-budget` level 5; `rem-ip-inversebench-scoped-findings` level 6; all seven B examples level 7. Batch level 8 remains the separate page-requirement schedule level.

- A: `def-ip-benchmark-risk-and-compute-budget` (deps: `def-ip-forward-map-and-solution-classes`, `def-ip-admissible-constraint-class`, `def-ip-inverse-risk-under-train-and-test-laws`, `def-ip-learned-reconstruction-estimator`, `def-ip-operator-and-prior-mismatch`, `def-ip-pde-solver-admissibility-contract`); `rem-ip-inversebench-scoped-findings` (deps: the new benchmark definition, inverse risk, learned reconstruction estimator, operator/prior mismatch, PDE admissibility, diffusion prior score).
- B: `ex-ip-inversebench-first-born-scattering`, `ex-ip-inversebench-multicoil-mri`, `ex-ip-inversebench-black-hole-imaging`, `ex-ip-inversebench-full-waveform-inversion`, `ex-ip-inversebench-navier-stokes`, `ex-ip-inversebench-prior-shift`, and `ex-ip-inversebench-solver-invalid-iterate`.

## Item checkpoints

### `def-ip-benchmark-risk-and-compute-budget` — authored, level 5

- Claim: a benchmark is an evaluation protocol specifying measurable truth/data/target spaces, admissible states, forward/noise kernel, optional numerical solver and failure handling, training/validation/test laws, candidate reconstruction rules, nonnegative measurable loss, uncertainty diagnostic, and a vector of forward/adjoint/gradient/ODE/runtime budgets. It asserts no risk transfer or method ranking.
- Direct logical suppliers: `def-ip-admissible-constraint-class` (nonempty restricted state set), `def-ip-inverse-risk-under-train-and-test-laws` (joint-law risk functional), `def-ip-learned-reconstruction-estimator` (measurable point/kernel procedures), `def-ip-operator-and-prior-mismatch` (operator/noise/prior distinctions), and `def-ip-pde-solver-admissibility-contract` (solver-specific predicate/failure status). The item defines its truth/forward/target interfaces locally. The current supplier statements were inspected; the risk supplier's kernel measurability proof was inspected with its probability-kernel hypotheses.
- Sources: Bal §1.1, PDF pp. 3–4 and §§8.2–8.3, PDF pp. 91–97; Zheng et al. §§2.1–2.3 and 3–4.2, PDF pp. 2–7, plus Appendix B.7.2, PDF pp. 27–28. The definition borrows no theorem about risk generalization or algorithm ranking.
- Axiom/placement: choice-free definition; A page. `verification.precheck: n/a` because it contains no proof phase. No unresolved mathematical prerequisite for this definition.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.
- Checkpoint: the level-6 empirical-scope remark was authored with empirical qualifiers and the first-Born paper/code notation discrepancy.

### `rem-ip-inversebench-scoped-findings` — authored, level 6

- Claim: summarizes InverseBench's five selected tasks, its qualified baseline/forward-query/PDE/step-size/prior-shift findings, and its 1-validation/10-test Navier–Stokes split. It explicitly treats all performance observations as empirical and rejects universal ranking, stability, posterior-exactness, risk-transfer, and robustness conclusions.
- Source discrepancy recorded: the paper's Appendix B.1, PDF p. 22, writes `u_tot = G(u_in ⊙ z)` and then `y = H(u_tot ⊙ z) + e`, which does not exhibit a fixed linear map. The pinned source implementation (`inverse_problems/inverse_scatter.py`, revision `1db5932bc2995504491663d1e2c498e7317c5404`, lines 326–445) passes fixed `uinc_dom_set` into `full_propagate_to_sensor` and forms the cached matrix from that fixed field. The A remark records this discrepancy and scopes the first-Born example to the implementation; no unresolved mathematical dependency remains.
- Direct suppliers: the new benchmark definition; `def-ip-inverse-risk-under-train-and-test-laws`; `def-ip-learned-reconstruction-estimator`; `def-ip-operator-and-prior-mismatch`; `def-ip-pde-solver-admissibility-contract`; `def-ip-diffusion-prior-score-and-measurement-score`. Their current interfaces were inspected; no general performance, calibration, or CFL threshold is imported.
- Sources: Zheng et al., §§3–5, PDF pp. 4–10; Tables 3–12 and Appendices A.1–A.2, B.1–B.7, C, PDF pp. 20–29; pinned implementation lines 326–445. The complete 29-page paper and appendices were retrieved and read; the 132-page Bal lecture notes independently support the protocol definitions.
- Axiom/placement: choice-free, no proof phase; A page. `verification.precheck: n/a`.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.
- Checkpoint: all seven level-7 benchmark examples were authored in plan order; the first-Born example follows the fixed-incident-field implementation and discloses the paper/code notation caveat.

### `ex-ip-inversebench-first-born-scattering` — authored, level 7

- Claim/conventions: the released first-Born implementation is a real-linear map from a real 128×128 permittivity-contrast grid to complex receiver data, with fixed incident fields and fixed Green coefficients. The statement records the paper's physical dimensions, wavelength/background, 20 transmitters, receiver counts, Gaussian noise scale, and train/validation/test counts; it discloses the printed-equation/code discrepancy and uses the implementation-defined operator.
- Direct suppliers: `def-ip-benchmark-risk-and-compute-budget` and `rem-ip-inversebench-scoped-findings`; exact statements are in this batch. The two-step verification checks finite-sum real-linearity and placement in the benchmark protocol; it claims no universal scattering theorem.
- Sources: Zheng et al., §4.1 and Appendix B.1, PDF pp. 6 and 22–23; pinned `inverse_scatter.py`, `full_propagate_to_sensor`, `InverseScatter.forward`, and `compute_svd`, lines 326–445. Source implementation was retrieved and inspected. The paper's displayed `u_tot` expression is not used to prove linearity.
- Axiom/placement: choice-free example, B page; `proof_strategy: direct`, `generation.role: example`.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.
- Checkpoint: the remaining six level-7 benchmark examples were authored, each with source locators and a scoped verification.

### `ex-ip-inversebench-multicoil-mri` — authored, level 7

- Claim/conventions: defines the complex multi-coil measurement map `y_j = P F S_j z + n_j`, with fixed coil-sensitivity maps, Fourier transform, subsampling matrix, raw-data noise, and 320×320 image grid. Records 25,012 training images, 6 tuning images, 94 test images, and source-reported reconstruction/data-misfit metrics; it assumes no Gaussian law for raw data.
- Direct suppliers: the benchmark definition and scoped-finding remark. The formula is real/complex linear in `z` for fixed operators; no method ranking or calibration claim is made.
- Source: Zheng et al., §4.1, PDF p. 7; Appendix B.2, PDF pp. 23–24; Table 4, PDF p. 20.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-black-hole-imaging` — authored, level 7

- Claim/conventions: defines Fourier visibilities with station gains/phases and additive thermal noise, then closure phase on oriented telescope triangles (reversing a stored baseline conjugates its visibility), the implementation's ordered-quadruple log-closure-amplitude ratio, and total flux. Records 50,000 GRMHD training images resized to 64×64, with 5 validation and 100 synthetic test images because the GRMHD set is not public. It claims no uniqueness or posterior calibration.
- Direct suppliers: the benchmark definition and scoped-finding remark. External implementation source confirms the orientation correction and ordered closure-amplitude indices.
- Sources: Zheng et al., §§3–4.1, PDF pp. 4–6, Appendix B.3, PDF pp. 24–25; pinned `inverse_problems/blackhole.py`, lines 110–197 and 231–267.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-full-waveform-inversion` — authored, level 7

- Claim/conventions: states the acoustic pressure-wave equation, velocity target, receiver restriction, finite-difference/Devito solver, mesh, source/receiver geometry, 0.001 s solver-specific CFL-stable time step, noise-free observation label, and CurveFaultB split (50,000 train, 1 validation, 10 test). The time step is reported for this solver only; no universal CFL threshold is asserted.
- Direct suppliers: the benchmark definition and scoped-finding remark. PDE equation/geometry and dataset claims are directly supported by the full source.
- Source: Zheng et al., §3, §4.1, PDF pp. 5–7; Appendix B.4, PDF p. 26.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-navier-stokes` — authored, level 7

- Claim/conventions: defines the periodic two-dimensional vorticity equation, divergence-free velocity, initial-vorticity target, final-time sampling map, Gaussian observation noise, pseudo-spectral adaptive-step solver, 128×128 grid, Reynolds number 200, and 10,000/1/10 train/validation/test split. The small validation/test counts are stated explicitly; no general performance or gradient theorem is asserted.
- Direct suppliers: the benchmark definition and scoped-finding remark; the PDE is fully specified within the Example statement.
- Source: Zheng et al., §3, §4.1, PDF pp. 5–7; Appendix B.5, PDF pp. 26–27; Tables 2 and 8, PDF pp. 5 and 21.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-prior-shift` — authored, level 7

- Claim/conventions: distinguishes an operational same-source fastMRI knee held-out split from deliberate OOD stress tests (black-hole prior versus digits; scattering prior trained on 1–6 cells versus 9-cell sources). It explicitly does not treat dataset-family matching as equality of probability laws and makes no numerical risk or robustness bound.
- Direct suppliers: benchmark definition, scoped-finding remark, inverse-risk functional, and operator/prior-mismatch definition. Their statements separate train/test laws and forbid an unsupported risk transfer.
- Source: Zheng et al., §4.1, §4.3 and Figure 5, PDF pp. 6–10; Appendix C, PDF pp. 28–29.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-solver-invalid-iterate` — authored, level 7

- Claim/conventions: uses a solver-specific FWI admissibility predicate; if a candidate fails it, the call is recorded as failure and receives no PDE data-fit score. The paper's DAPS step-size/CFL failure is qualitative and empirical; the item supplies no exact violating iterate or CFL threshold.
- Direct suppliers: benchmark definition, scoped-finding remark, and PDE solver admissibility contract. That contract supplies model-specific tests and expressly no universal CFL bound.
- Source: Zheng et al., §4.3 and Figure 3, PDF pp. 8–9; Appendix B.4, PDF p. 26.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-multicoil-mri` — authored, level 7

- Claim/conventions: defines the complex multi-coil measurement map `y_j = P F S_j z + n_j`, with fixed coil-sensitivity maps, Fourier transform, subsampling matrix, raw-data noise, and 320×320 image grid. Records 25,012 training images, 6 tuning images, and 94 test images; it assumes no Gaussian law for raw data.
- Direct suppliers: the benchmark definition and scoped-finding remark. The formula is linear in `z` for fixed operators; no method ranking or calibration claim is made.
- Source: Zheng et al., §4.1, PDF p. 7; Appendix B.2, PDF pp. 23–24; Table 4, PDF p. 20.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-black-hole-imaging` — authored, level 7

- Claim/conventions: defines Fourier visibilities with station gains/phases and additive thermal noise, then closure phase on oriented telescope triangles (reversed baselines are conjugated), the implementation's ordered-quadruple log-closure-amplitude ratio, and total flux. Records 50,000 GRMHD training images resized to 64×64, with 5 validation and 100 synthetic test images because the GRMHD set is not public. It claims no uniqueness or posterior calibration.
- Direct suppliers: the benchmark definition and scoped-finding remark. External implementation evidence verifies the orientation correction and ordered closure-amplitude indices.
- Sources: Zheng et al., §§3–4.1, PDF pp. 4–6, Appendix B.3, PDF pp. 24–25; pinned `inverse_problems/blackhole.py`, lines 110–197 and 231–267.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-full-waveform-inversion` — authored, level 7

- Claim/conventions: states the acoustic pressure-wave equation, velocity target, receiver restriction, Devito solver, mesh, source/receiver geometry, 0.001 s solver-specific CFL-stable time step, noise-free observation label, and CurveFaultB split (50,000 train, 1 validation, 10 test). The time step is reported for this solver only; no universal CFL threshold is asserted.
- Direct suppliers: the benchmark definition and scoped-finding remark. The PDE equation, geometry, and dataset claims are supported by the full source.
- Source: Zheng et al., §3, §4.1, PDF pp. 5–7; Appendix B.4, PDF p. 26.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-navier-stokes` — authored, level 7

- Claim/conventions: defines the periodic two-dimensional vorticity equation, divergence-free velocity, initial-vorticity target, final-time sampling map, Gaussian observation noise, pseudo-spectral adaptive-step solver, 128×128 grid, Reynolds number 200, and 10,000/1/10 train/validation/test split. The small validation/test counts are explicit; no general performance or gradient theorem is asserted.
- Direct suppliers: the benchmark definition and scoped-finding remark; the PDE is fully specified within the Example statement.
- Source: Zheng et al., §3, §4.1, PDF pp. 5–7; Appendix B.5, PDF pp. 26–27; Tables 2 and 8, PDF pp. 5 and 21.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-prior-shift` — authored, level 7

- Claim/conventions: distinguishes an operational same-source fastMRI knee held-out split from deliberate OOD stress tests (black-hole prior versus digits; scattering prior trained on 1–6 cells versus 9-cell sources). It explicitly does not treat dataset-family matching as equality of probability laws and makes no numerical risk or robustness bound.
- Direct suppliers: benchmark definition, scoped-finding remark, inverse-risk functional, and operator/prior-mismatch definition. Their statements separate train/test laws and forbid unsupported risk transfer.
- Source: Zheng et al., §4.1, §4.3 and Figure 5, PDF pp. 6–10; Appendix C, PDF pp. 28–29.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

### `ex-ip-inversebench-solver-invalid-iterate` — authored, level 7

- Claim/conventions: uses a solver-specific FWI admissibility predicate; if a candidate fails it, the call is recorded as failure and receives no PDE data-fit score. The paper's DAPS step-size/CFL failure is qualitative and empirical; the item supplies no exact violating iterate or CFL threshold.
- Direct suppliers: benchmark definition, scoped-finding remark, and PDE solver admissibility contract. That contract supplies model-specific tests and expressly no universal CFL bound.
- Source: Zheng et al., §4.3 and Figure 3, PDF pp. 8–9; Appendix B.4, PDF p. 26.
- Axiom/placement: choice-free example on B page; direct proof contract planned.
- Validation: final scoped checks pass for this item; see “Final checks and handoff” below.

## Final checks and handoff

- Plan comparison: the IP-51 design and plan-spec agree on the A/B page IDs, titles, category, order, companion, and all nine A-page requires entries. The design calls for two A items and seven B examples; the authored inventory matches. No plan/design conflict remains to record.
- Current scheduling input is 41be181e2562bef4cd2b96ddeb7d72853a4ba7be344ae49cfc976c53dd15d416. The batch dependency-level assignment remains batch 51, level 8, with prerequisites 14, 35, 44, 46, 47, 48, 49, and 50. Item levels are definition 5, remark 6, and seven examples 7.
- Proof phase labels: final independent verification steps were normalized to phase 2.1 after the normative precheck suggested the terminal-layer labels; proof-contract step IDs and citations were synchronized. The mathematical claims and justifications were unchanged.
- Final scoped checks: precheck passed for all 7 proof-bearing items (2 items are not applicable); strict proof-contract validation passed for 9/9 items with 0 errors/warnings; proof-layout passed for 9 items and 15 steps with 0 defects; rendercheck passed for 11 files; content policy passed for 9 items; focused depcheck passed for all 9 items and both pages, including 729 dependency-closure and 460 page-cycle checks; source fetch verification passed for 7/7 placements with 0 drops; coverage checklist passed for 2 pages and 28 harvested results with 0 errors/warnings.
- Dependency-level scope check over all 213 nonempty manifests checked 1,254 items: all nine batch-51 item levels match the computed values, with no batch-51 errors. The repository-wide level CLI exits 1 on five unrelated empty inventories and seven item-level mismatches. The focused nonempty-manifest computation checks 213 manifests and 1,263 items, with seven errors elsewhere and none in batch 51; no outside item or page was edited.
- Run-level batch dependency recomputation remains blocked by malformed unrelated item frontmatter: items/lem-knot-exterior-irreducible-and-boundary-incompressible-kt18-local.md repeats the top-level axiom_use key (the second declaration starts at line 27). The batch-dependency-levels check exits 1 with a duplicate YAML key error. This belongs to another owner and was left untouched; the current run/batch scheduler state was not changed.
- Source record: the full 29-page ICLR paper and appendices, complete relevant sections of Bal’s 132-page notes, and both pinned implementation files were read. Search/retrieval history and all seven fetch stamps are preserved in source coverage/evidence. The first-Born discrepancy is explicitly resolved in favor of the pinned code implementation; no mathematical supplier remains unresolved.
- Cross-batch evidence lists all nine page-level prerequisites, direct item dependencies, required hypotheses, affected claims, and same-batch supplier order. Page-context edges for EIT, unrolled solvers, and PnP remain non-imported context; no specialized theorem from those pages is claimed.
- A/B page bodies are empty and contain only frontmatter. The engine’s later page_layout: compact-v1 step has not been applied here.
- All nine item-specific Step 1 records are ready and hash-current, with the direct dependencies examined in each record. These are authoring readiness records, not independent review or acceptance.

- Live autopilot status was recomputed from disk after authoring: the run remains in 1-scaffold at 94/109 covered, batch 51 is still listed missing during author drain, and the owner-held Step 1 blocker remains. The blocker and engine state were left unchanged. Recent git history confirms the active run context; no historical handoff was used as status evidence.
