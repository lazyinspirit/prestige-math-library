# Batch 12 notes — Mixture Dynamics And Shells

Run `physics-td-qft-rpm-62-2026-10-14`, role beta, batch 12. This records draft authoring and scoped checks; it is not independent mathematical approval.

## Authority and plan reconciliation

The current owner authoring direction was read and applied. The eight reserved A-page results are all present. The five additional A-page definitions supply local mathematical interfaces used by those results; the manifest's empty `plan-spec.json` item list was a pre-authoring placeholder, not an inventory conflict. The A page has 13 carriers against its 36-item reservation and the hard limit of 100. The B page has four leaf examples against its 12-item reservation and the same hard limit. Both pages remain draft.

The design section's “Declared earlier prerequisites” names the earlier thermodynamics page `td-math-ensembles-and-limits`. The current dispatch and plan-spec additionally require eight imported mathematical prerequisite pages. I retained all nine page edges and the matching explicit item dependencies; the design line is treated as the earlier track-page dependency rather than a cancellation of the mathematical suppliers. No shared plan or prerequisite metadata was edited.

## Prerequisite carrier reconciliation

The eight imported mathematical pages are present in the read-only root library. The specific statements and proofs used for change of variables, product integration, Euclidean measure, symplectic volume, Brownian motion and the Itô integral, and finite-measure ergodic results were inspected. Their actual hypotheses, conventions, domains, and proof status are recorded in the item facts, direct dependencies, and proof-contract supplier excerpts. No imported original was edited.

The `td-math-ensembles-and-limits` page and its current draft item `thm-tdmath-general-trace-gibbs-model` were inspected. The supplier's first clause assumes AC, a nonzero complex Hilbert space, a semibounded self-adjoint operator with a spectral PVM, and a positive trace-class Gibbs exponential; it supplies a finite or countable complete orthonormal energy eigenbasis with finite-dimensional eigenspaces. The consumer `thm-tdmath-discrete-quantum-cesaro-dephasing` records and proves its conditional use of exactly this interface. The interface matches, but the supplier remains draft and is not accepted as proved.

The batch-11 page prerequisite remains open. Its current notes and cross-batch record identify the required `td-math-nonsmooth-equilibrium` edge as unresolved because `cor-tdmath-ordered-finite-mixture-envelope` changed after its Step 1 and contract records; the strict batch-4 proof-contract check records six stale/missing mappings, and batch 4 still has the `td-math-ordered-composition` edge open. Batch-11 records therefore remain escalated. This is the exact page-level blocker inherited by batch 12. All batch-12 arguments and examples were completed conditionally without treating batch 11 as accepted, and no batch-11 supplier or other pair was edited.

## Inventory and item dependency levels

The batch-12 dependency graph was recomputed against the 21 batch-11 items and 17 batch-12 items. All 17 batch-12 labels match the in-run calculation; no cycle was found. Direct item dependencies and roles are in the manifest and carrier frontmatter.

| Level | Batch-12 items |
|---|---|
| 0 | `def-tdmath-mixture-generator-space-and-energy`, `def-tdmath-elastic-collision-kernel`, `def-tdmath-finite-site-shell-and-canonical-law`, `def-tdmath-ornstein-uhlenbeck-equation`, `def-tdmath-regular-energy-shell`, `thm-tdmath-continuous-ideal-gas-block-limit`, `thm-tdmath-hamiltonian-measure-and-recurrence`, `cex-tdmath-nonconcave-ensemble-inequivalence` |
| 1 | `thm-tdmath-compact-continuous-mixture-attainment`, `thm-tdmath-independent-microcanonical-block-limit`, `thm-tdmath-ornstein-uhlenbeck-model`, `thm-tdmath-regular-collision-entropy`, `thm-tdmath-regular-energy-shell-measure`, `cex-tdmath-nonergodic-volume-flow` |
| 2 | `cex-tdmath-noncompact-mixture-nonattainment` |
| 3 | `thm-tdmath-discrete-quantum-cesaro-dephasing` |
| 4 | `ex-tdmath-pure-state-versus-average-entropy` |

The quantum result is level 3 because its actual batch-11 supplier is level 2. B examples remain leaf consumers of the A page. Dependency levels affect authoring priority, not a wait barrier.

## Mathematical scope and qualifications

The finite-site shell theorem states its shell center, width, and uniform law and proves only the claimed finite-alphabet limits. The continuous ideal-gas result fixes its phase-space and SI conventions and gives conditional block limits under its displayed positive-parameter assumptions; no measured resolution is attributed to a shell. Mixture attainment uses compactness and continuity exactly as stated; B includes explicit noncompact and nonconcave countermodels.

The Hamiltonian result keeps flow existence/domain and finite invariant-measure hypotheses explicit. Recurrence and Birkhoff averages do not establish ergodicity; space-mean identification is made only under a separate ergodicity assumption. The Ornstein–Uhlenbeck result is a deduction from the stated Brownian and Itô model and bath parameters; no noise measurement or calibration is asserted. The collision result adopts the symmetric weak collision identity and regularity/integrability assumptions; molecular chaos and the arrow-of-time premise are not derived from microscopic reversibility. The shell-measure result excludes critical levels and proves chart-partition independence and the weighted area formula under the stated compact regular-band hypotheses. The quantum Cesàro limit retains degenerate energy blocks and does not assert pointwise-time dephasing. No experiment, observed precision, or statistical inference is introduced.

## Full-text source and recovery record

The coverage file records exact URLs, locators, per-item support, disposition, fetch stamps, searches, recovery attempts, and alternatives. The nine fetch-verified full texts are:

- David Tong, *Statistical Physics*, Ch. 1, §§1.2–1.4: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
- David Tong, *Statistical Physics*, Ch. 2, ideal-gas phase-space integral and canonical momentum law: https://davidtong.org/teaching/statistical-physics/statmechhtml/S2
- Daniel Arovas, complete 635-page *Lecture Notes on Thermodynamics and Statistical Mechanics*, §§4.2–4.6, pp. 192–217: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
- G. A. Pavliotis, complete 155-page *Stochastic Processes and Applications*, §3.7 and §§4.1–4.2: https://www.ma.imperial.ac.uk/~pavl/PavliotisBook.pdf
- Paul Eastman, *Introduction to Statistical Mechanics*, Ch. 8.2, Liouville theorem: https://web.stanford.edu/~peastman/statmech/phasespace.html
- David Tong, *Kinetic Theory*, Part 2, §2.1 pp. 14–16 and §§2.2–2.3 pp. 20–35: https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf
- David Tong, *Kinetic Theory*, Part 3, §§3.1.2–3.2.3, pp. 54–70: https://www.damtp.cam.ac.uk/user/tong/kintheory/three.pdf
- R. Fitzpatrick, *Plasma Physics*, Boltzmann H-Theorem, equations (3.123)–(3.144): https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html
- Hocky Research Group, complete 8-page *Statistical Mechanics Lecture 5: Ideal Gas*: https://hockygroup.com/teaching/statmech/notes/2021/Lecture5-IdealGas.pdf

The A page is supported across its claims by multiple independent full-text treatments, including complete lecture notes and books; the manifest maps each item to the sources that support its exact scope. Specialized claims such as the quantum Cesàro limit are proved locally under the stated hypotheses. The five MIT OCW sources whose full bodies could not be stamped are excluded from the verified item-source inventory, with their histories retained in coverage: 8.333 Lectures 7, 9, 12, and 13, and 16.55 Lecture 9. Each retains the initial attempt and five recovery retries. Four failures were unverifiable compressed-PDF page counts because `mutool` is unavailable; the other URL returned HTTP 404. Alternative full texts were searched, retrieved, and read; complete local conditional arguments and item-specific dependencies are recorded under each `source_resolution`. The five source drops do not remove mathematical coverage.

Coverage contains 29 harvested results. `coverage-checklist` reports 0 errors and 0 warnings; final `source-fetch-check --stamp` reports 9/14 fetch-verified and 14/14 resolved (five documented drops, with zero new stamps).

## Scoped checks and run-wide blockers

- `content-policy`: 17 items, 0 errors and 0 warnings.
- `physics-content` scoped validation: 17 items, 0 errors.
- `depcheck --items-file`: 17 focused items, 0 errors and 0 warnings.
- `rendercheck`: all 17 item files and both pages, 0 errors.
- `proof-contract --strict`: 12 proof-bearing items, 66 step mappings, 0 errors and 0 warnings. Supplier excerpts quote the current exact statements and state the actual supplier status.
- `proof-layout`: all 12 changed proof-bearing items, 66 steps, 0 defects. The application checkout has no installed `tsx` package, so the ordinary fallback cannot resolve its `@/` aliases. The required checker was run against the actual application `ItemBody` with a temporary compatibility loader under `/private/tmp`; every item passed individually.
- Scoped item dependency recomputation: all 17 batch-12 levels matched across the batch-11/12 graph.
- Earlier final-proof-format precheck: 12 proof-bearing items, 0 failures; no proof-step text changed after that pass.

The run-wide `item-dependency-levels.mjs check` remains blocked by out-of-scope manifest defects: 24 empty scaffold inventories (`td-math-convex-contact-and-mixing`, its examples page, `rpm-external-charge-examples`, `rpm-exact-flat-orbits-examples`, and the QFT page/example pairs `qft-mg01`, `qft-mg03`, `qft-mx02`, `qft-mx03`, `qft-g01`, `qft-g02`, `qft-x02`, `qft-x03`, `qft-f04`, and `qft-ir03`); plus six unrelated stale labels: `pthm-td-stable-tempered-free-cube-grand-pressure` (4, computed 6), `pthm-td-controlled-continuum-thermodynamic-limit` (5, computed 9), `pthm-td-controlled-thermodynamic-ensemble-duality` (4, computed 6), `pthm-td-interacting-three-ensemble-local-limit` (5, computed 10), `pthm-td-qualified-van-hove-and-exterior-limit` (5, computed 7), and `ex-td-volume-sized-external-field` (6, computed 8). No unrelated manifest was edited; the batch-12 scoped result is clean.

## Run state and readiness

The repository contains `.physics-autopilot/physics-td-qft-rpm-62-2026-10-14`; `.autopilot/` is absent. The requested read-only autopilot `status` command reports that live status is unavailable because the workflow revision differs and shows the last report: batch 12 is in flight, the scaffold stage is held for owner repair/recertification, and the recorded scheduling scope differs from the current run manifests. No autopilot state or shared scheduling file was changed.

All 17 batch-12 Step 1 records are escalated, not ready, because the required batch-11 page edge remains open as detailed above. Each record's `dependencies` list contains that item's direct supplier IDs; its reason records the applicable page-level blocker. The quantum record additionally records the exact inspected draft interface for `thm-tdmath-general-trace-gibbs-model`. No prior escalation was overwritten and no record is owner-authored. Final independent review and owner closure of the upstream edge remain required; completion records are not approval.
