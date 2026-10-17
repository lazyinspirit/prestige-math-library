# Reader report — batch 40

Run: `physics-remaining-80-2026-10-17`  
Role: independent Step 3a reader  
Scope: batch `40`

## Opened inventory

Batch manifest: `research/physics-remaining-80-2026-10-17-batch-40.pages.json`.

Assigned pages:

- A page `qsm-spin-thermodynamic-limits` — `library/quantum-statistical-mechanics/qsm-spin-thermodynamic-limits.md`.
- B page `qsm-spin-thermodynamic-limits-examples` — `library/quantum-statistical-mechanics/qsm-spin-thermodynamic-limits-examples.md`.

Assigned items, read in supplier-to-consumer order within the batch:

- `def-qsm-translation-invariant-spin-interaction`
- `thm-qsm-quantum-lattice-pressure`
- `lem-qsm-energy-density-concentration`
- `lem-qsm-stationary-spin-entropy-density`
- `thm-qsm-spin-pressure-variational-principle`
- `ex-qsm-uniform-onsite-pressure`

The batch-40 proof contracts were opened at `research/physics-remaining-80-2026-10-17-batch-40.proof-contracts.json`.

Direct dependencies of the assigned items were opened: `def-qsm-bounded-finite-range-interaction`, `def-qsm-local-spin-algebras`, `def-qsm-quasilocal-spin-algebra`, `def-countable-choice`, `def-axiom-of-choice`, `lem-qsm-matrix-exponential-response`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `lem-qsm-integer-lattice-countable`, `lem-qsm-matrix-state-calculus`, `lem-qsm-finite-matrix-cstar-and-state-duality`, `lem-qsm-local-spin-inclusions-isometric`, `lem-qsm-quasilocal-completion`, `def-qsm-infinite-algebraic-state`, `def-qsm-relative-entropy-domain`, `thm-qsm-finite-entropy-composition`, `lem-qsm-spin-state-compactness`, `lem-qsm-consistent-local-states`, `thm-qsm-finite-gibbs-variational`, `def-qc-partial-trace`, `thm-qc-partial-trace-characterization-and-basis-independence`, `thm-qc-partial-trace-positive-and-trace-preserving`, `thm-qsm-trace-cross-log-inequality`, `thm-kullback-leibler-is-nonnegative`, and `thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum`.

## Review and edits

- In `thm-qsm-quantum-lattice-pressure`, the perturbation clause used “boundary perturbation” without defining a spatial support condition. The proof's trace-log Lipschitz estimate in step 1.2 and application in step 6.1 establish the broader exact condition: any self-adjoint `B_n` on `A_{Lambda_n}` with `||B_n||/|Lambda_n| -> 0` preserves the pressure limit. The statement now specifies this sequence and its perturbed normalized log-partition function, and states that no spatial support condition is needed.
- In A page `qsm-spin-thermodynamic-limits`, the summary contained an internal “Step 1” readiness note. I removed that workflow text and aligned the perturbation summary with the theorem's precise condition.
- Updated the pressure theorem's batch-40 contract disposition to record that step 6.1 covers every self-adjoint finite-volume perturbation sequence with sublinear norm and needs no spatial support assumption.
- Checked the assigned consumers `lem-qsm-energy-density-concentration`, `lem-qsm-stationary-spin-entropy-density`, and `thm-qsm-spin-pressure-variational-principle` against the clarified statement. They use the unperturbed pressure limit and do not rely on the perturbation clause; no consumer edits were needed.
- The pressure item had no `verification.judge` record to remove. Reflow reported the item unchanged; precheck passed (`1 checked, 0 failing`); proof-layout reported `1 items, 7 steps, 0 defects`.

No other confirmed defect was found in the assigned items or the opened direct dependency statements and arguments. No empirical observation or physical conclusion is asserted by these mathematical items.

## Page dispositions

- `qsm-spin-thermodynamic-limits` (A): reviewed. The workflow note and undefined perturbation label were repaired as described above. No remaining reader finding in the assigned page or its listed items.
- `qsm-spin-thermodynamic-limits-examples` (B): reviewed. Its page summary and the exact onsite partition-function calculation in `ex-qsm-uniform-onsite-pressure` are consistent. No defect found; no B-page prose was edited.

These are reader dispositions only; no judgment stamp or gate certification was applied.

## Uneditable findings and coverage

No confirmed uneditable finding was identified among the reviewed direct dependencies, so the findings JSON is empty.

All direct declared dependencies of the assigned items were opened. A metadata traversal of the declared `deps` closure returned 1,617 item IDs; I did not independently read every farther-transitive foundational item in that closure. The review checked the exact direct supplier statements and the local arguments used by the assigned claims, along with the selected supporting countability, state-extension, entropy, and partial-trace arguments listed above. This is the coverage limit. There is no other blocker.
