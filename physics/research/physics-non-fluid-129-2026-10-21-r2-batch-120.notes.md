# Batch 120 authoring and evidence

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: 120  
Page pair: `tgrx-hawking-approximation` / `tgrx-hawking-approximation-examples`

## Plan and inventory

The assigned task and design section agree with the current `plan-spec.json` row on order 937, titles, category/library, companion, and the two named page prerequisites `tgrx-collapse-scattering` and `tgr-phs02`. The run-specific `owner-authoring-direction.md` was not present.

Assigned item inventory and current in-run item levels:

| Item | Kind/page | In-run item suppliers | Level |
|---|---|---|---:|
| `post-tgrx-free-collapse-scattering` | postulate / A | `def-tgrx-exponential-ray-channel` (0); `def-qftx-wavefront-hadamard` (2) | 3 |
| `pthm-tgrx-conditional-hawking-occupation` | physics theorem / A | postulate above (3); `prop-tgrx-collapse-channel-spectrum` (1) | 4 |
| `rem-tgrx-three-black-hole-states` | remark / B | postulate above (3) | 4 |

The B page contains the planned state-distinction remark. The A page has two items; the B page has one. Page capacity is not a concern.

The planned postulate requires a Hadamard state, so its exact mathematical definition is needed. I inspected `def-qftx-wavefront-hadamard` and its current definition interface, including the distribution and local wavefront conventions. Its carrier exists in batch 58, is a definition with no proof section, and has a current Step 1 readiness record of `ready`. I also inspected the full current proofs of `def-tgrx-exponential-ray-channel` and `prop-tgrx-collapse-channel-spectrum`; their current Step 1 readiness records are `ready`. Those records establish authoring readiness only, not independent proof acceptance; draft/precheck status was not treated as a missing prerequisite. The published `post-tgr-exponential-current-and-spectral-thermometer` was read in full for the exact reduced-current conventions and its explicit exclusion of collapse, scattering, detector, and empirical-temperature claims.

## Plan conflict and owner escalation

The current plan row lists only `tgrx-collapse-scattering` and `tgr-phs02` as A-page prerequisites. I added the direct item dependency `post-tgrx-free-collapse-scattering -> def-qftx-wavefront-hadamard` and the A-page requirement `qftx-microlocal-products` (batch 58), because the postulate adopts a Hadamard state and must state that term at the exact supplied definition. I did not edit the shared plan. The item use is checked against the actual definition and its hypotheses; the unresolved issue is the unplanned cross-batch page edge. The cross-batch page row remains `open`, and the three assigned Step 1 readiness records are `escalated` for owner plan resolution. No carrier is missing, and the escalation is not based on a draft label, pending format stamp, or absent independent approval.

Proposed owner resolution: confirm the exact `qftx-microlocal-products` page edge in the plan, or direct an exact already-approved mathematical definition and page placement. Do not remove or weaken the Hadamard assumption. The affected postulate, its conditional theorem, and the B remark are all authored under that dependency.

## Conditional claim and scope

The postulate specifies a smooth globally hyperbolic collapse model, a fixed Schwarzschild exterior, a massless minimally coupled scalar equation, Hadamard and incoming-ground conditions, an exact exponential null-ray label, a passive mode channel, continuous \(\Gamma_\ell(\omega)\), and operator-norm convergence of the number forms on each fixed positive-frequency interval. The four-dimensional-to-one-dimensional channel identification and the convergence remain adopted premises; the carrier does not prove radial scattering/local decay, solve Einstein evolution, assert a detector construction, or make an observation.

The theorem uses the supplied Fourier spectrum and passive-loss identity. It proves the finite packet integral, then takes the packet-concentration limit only after the late-time limit. It retains the finite-width spectral integral, states the SI temperature scale as an unobserved spectral parameter, and makes no trans-Planckian robustness or finite-time error claim. The B remark distinguishes the exterior ground, collapse/Unruh, and two-sided Hartle-Hawking settings without asserting a Kerr equilibrium state. The cited mathematical channel proposition already includes a TikZ diagram of the same two-mode rotation; the theorem proof uses the displayed matrix algebra and does not rely on the diagram.

## Full-text source harvest

The A page uses two independent full-text treatments, including complete lecture notes, and one additional review. Relevant sections were read in full; the whole-source reading extent is not claimed.

| Source | Locator read | Supported items and disposition |
|---|---|---|
| Ted Jacobson, [Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect](https://arxiv.org/pdf/gr-qc/0308048), complete 59-page lecture notes | §§6.2.1–6.2.2, printed pp. 32–38, equations (6.1)–(6.26) | Postulate: fixed-background collapse setup, packet split and source assumptions included; its local free-fall vacuum condition is context, not silently identified with the postulate's operator-norm assumption. Theorem: exponential redshift, negative-frequency norm and greybody factor included; narrow-band source calculation is not treated as a finite-width error bound. |
| Stefan Hollands and Robert M. Wald, [Quantum fields in curved spacetime](https://arxiv.org/pdf/1401.2026), complete 77-page review | §2.3(c), PDF pp. 26–31, equations (52)–(60) | Postulate: Hadamard, incoming-ground and settled Schwarzschild assumptions included; the stronger fixed-band operator-norm convergence is explicitly an extra model premise. Theorem: equation (56)'s normalized late packet occupation and greybody factor included; the local finite-band integral is proved from the adopted direct-integral hypothesis. B remark: the distinct Boulware, Unruh and Hartle-Hawking conditions included. |
| Robert M. Wald, [The Thermodynamics of Black Holes](https://arxiv.org/pdf/gr-qc/9912119), complete 46-page review | §3, PDF pp. 10–15 | Postulate/theorem: fixed-background, exterior-only calculation and natural-unit temperature convention included; the SI conversion is derived locally. B remark: collapse, Unruh, and equilibrium states are kept distinct; no Kerr-state existence conclusion is inferred. |

The retrieval stamp records 3 unique full PDFs and 5 page/source uses: all 5 fetched and verified, with 0 drops. Jacobson: 683,877 bytes, 59 pages, SHA-256 prefix `68f722c6a8218839`; Hollands–Wald: 561,777 bytes, 77 pages, prefix `175e5e2741add92d`; Wald: 357,742 bytes, 46 pages, prefix `e6699e090f21eea0`. Exact successful-fetch times and full fetch stamps are in `batch-120.coverage.json`. No retrieval failed, so no source-resolution recovery record or dropped source was needed.

## Cross-batch edges

`batch-120.cross-batch-dependencies.json` is a JSON array with five direct rows: the A-page edges to `tgrx-collapse-scattering` (verified) and `qftx-microlocal-products` (open owner plan resolution), plus the postulate's item edges to `def-tgrx-exponential-ray-channel` and `def-qftx-wavefront-hadamard`, and the theorem's edge to `prop-tgrx-collapse-channel-spectrum` (all three scoped item uses verified). The evidence text distinguishes a scoped interface check from independent proof approval. Published `tgr-phs02` is outside this run and is not represented as an in-run edge.

## Checks and readiness

- Scoped item dependency levels: 8 in-run items across 4 pages checked; assigned levels are 3, 4, and 4 as listed above.
- Batch dependency levels: recomputed for all 129 batches; the last successful check recorded batch 120 at level 1 with requirements `58` and `119` (run maximum level 5). The latest check is stale: the current graph calculation still gives batch 120 level 1 with requirements 58 and 119, but its input hash changed from recorded `477e4926f913bd61321482f4a18b9a05332cfe3f9495387ffc4f6bffc316b7d9` to current `e4e67355645cb467447925376c3dfe1f3dc5b6454228ab6ca5eb0775bf1e41aa` while manifests in batches 13, 17, 21, 25, 27, 34, 36, 62, 100, 102, 116, 117, and 122 were newer than the recorded snapshot. Recompute the global record after those writers drain.
- Precheck: 3 carriers selected, 2 checked, 0 failures; the theorem passes, postulate passes nonproof structure, and remark is not applicable. The checker proposed phase renumbering; that exact repair was adopted before this pass.
- Proof layout: 3 explicit items, 5 theorem steps, 0 defects.
- Rendercheck: 5 assigned item/page files, no YAML, math, or diagram errors.
- Content policy: 3 assigned items, 0 errors and 0 warnings.
- Focused depcheck: 3 assigned items, 0 errors and 0 warnings; 2,506 dependency-closure items and 396 dependency-closure pages checked.
- Strict proof-contract validation: the postulate and theorem contracts pass. The remark is nonproof content and has no proof contract.
- Source fetch check: 5/5 page/source uses verified, 0 drops.
- The unscoped item-level checker is not a batch-120 result: it reported 110 other empty scaffold inventories and a level mismatch for `lem-nrqmx-finite-symplectic-implementers`; the batch-120 dependency closure passes. The unscoped proof-contract-coverage tool likewise stops on the unrelated empty inventory `qsmx-lieb-robinson-spectral-flow-examples`. These unrelated items/pages were not edited.

Final readiness disposition uses `step1-decisions.mjs record` without `--owner`: all three assigned items are `escalated` for the precise plan/dependency change above. Each record hash was checked against the current item/dependency closure after recording.

