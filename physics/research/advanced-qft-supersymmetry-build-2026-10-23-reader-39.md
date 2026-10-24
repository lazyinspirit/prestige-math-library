# Reader report — batch 39

Run: `advanced-qft-supersymmetry-build-2026-10-23`

Role: independent Step 3a reader.

## Opened inventory

Pages:

- `library/advanced-qft-and-supersymmetry/qftx-noninvertible-symmetries.md` (A page). Draft status, title, `items` inventory, prerequisites, and `page_layout: compact-v1` match the assigned manifest. The body is empty.
- `library/advanced-qft-and-supersymmetry/qftx-noninvertible-symmetries-examples.md` (B page). Draft status, title, `examples` inventory, prerequisites, and `page_layout: compact-v1` match the assigned manifest. The body is empty.

Assigned items were read in dependency order:

1. `def-aqft-ising-fusion-data` — exact Ising fusion rules, associator entries, and duality data.
2. `lem-aqft-ising-fusion-data-coherence` — finite semisimple category structure, unitarity, pentagon, triangle, and snake identities.
3. `pthm-aqft-noninvertible-defect-realization` — finite periodic-chain model, duality map, fusion, junctions, and declared slide invariance.
4. `ex-aqft-ising-fusion-object-noninvertible` — multiplicity argument excluding a right inverse to `sigma`.
5. `ex-aqft-ising-chain-three-site-noninvertible-defect` — three-site specialization and explicit nonzero vector in the kernel of `D_3^2`.

Dependency context opened:

- `def-aqft-noninvertible-defect-fusion` (draft, run batch 15) and its relevant mathematical prerequisites `def-fusion-and-multifusion-category`, `def-tensor-and-multitensor-category`, and imported published `def-monoidal-category`.
- `def-aqft-topological-defect` (draft, run batch 36); its model-bound correlator and allowed-isotopy definition is used only for the theorem's explicitly restricted finite-model slides.
- All five assigned proof-contract entries and the assigned pages and item carriers.

## Review and edits

- In `items/lem-aqft-ising-fusion-data-coherence.md`, the pentagon diagram in Remarks sent the final lower path arrow upward to the wrong object. Changed that arrow to the rightward arrow ending at `a⊗(b⊗(c⊗d))`. The diagram now depicts both associator composites between the same source and target. The proof remains independent of the diagram.
- In `items/pthm-aqft-noninvertible-defect-realization.md`, the statement referred to a dual Hamiltonian and the proof used `\widehat H_L` without defining it. Added the exact finite dual Hamiltonian with periodic half-integer indices. The proof now records the reflection action on each dual `X` and `ZZ` term before reindexing the cyclic sums. Reviewed its assigned consumer `ex-aqft-ising-chain-three-site-noninvertible-defect`: that example uses the `D_3^2=I+P_3` consequence and does not rely on the newly explicit dual-Hamiltonian notation, so its claim remains valid.
- Updated the theorem's affected derivation, finite-check evidence, and risk note in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-39.proof-contracts.json`. Neither changed item had a `verification.judge` record to remove.

## Evidence and checks

- The primary finite-lattice source, Aasen, Mong, and Fendley, *Topological Defects on the Lattice I: The Ising Model*, was checked at §3.2 (PDF pp. 9–11, especially (3.21)–(3.22)) and §§4.1–4.3 (PDF pp. 17–22, especially (4.4), (4.6), and (4.14)–(4.21)). These give the duality kernel, local intertwiners, junction weights, and Ising F data. The local finite proof does not infer an empirical result or a continuum limit.
- Simon, *Topological Quantum: Lecture Notes and Proto-Book*, §§9.2–9.3 (PDF pp. 119–121; book pagination 104–105), gives the Ising Hadamard F matrix and pentagon discussion. The exact local pentagon checker was inspected and run: `PASS: 19683 exact channel assignments; 132 nonzero; 0 failures`.
- Fröhlich, Fuchs, Runkel, and Schweigert, *Kramers–Wannier Duality from Conformal Defects*, PDF pp. 2–5, was checked as a separate critical-CFT account; it supplies no premise for the finite-chain deduction. Carqueville, *Lecture Notes on 2-Dimensional Defect TQFT*, §2.1 is cited only for the oriented 2D defect-TQFT setting; no continuum or general TQFT conclusion is drawn from it.
- Required repair checks: reflow on the theorem reported unchanged; theorem precheck passed. Final `proof-layout` on both changed items reported 2 items, 14 steps, 0 defects.

## Defects not edited

No mathematical, source, or diagram defect remains unedited in the reviewed assigned items or pages. The theorem's finite-model slide claim is expressly limited to its declared insertion-free gaps; it is not treated as a claim of arbitrary continuum isotopy or empirical realization.

## Page verdicts

- `qftx-noninvertible-symmetries`: pass after the assigned-item repair; page metadata and inventory are correct, and the body remains empty.
- `qftx-noninvertible-symmetries-examples`: pass; page metadata and inventory are correct, and the body remains empty.

## Blocker

The run's batch-39 manifest retains the pre-repair statement mirror for `pthm-aqft-noninvertible-defect-realization` and does not contain the newly explicit `\widehat H_L` formula. This reader's authorized write scope covers assigned item carriers and A-page prose, not the manifest. Owner/engine reconciliation may be needed before any workflow check that requires a current manifest statement mirror. No report finding is submitted for this reader-repaired carrier.

## Coverage note

All two assigned pages, five assigned items, and the exact supplier statements needed for the claims were opened. Source checks covered the cited passages used for the finite-lattice construction and Ising F data. I did not re-audit unrelated portions of the batch-15 supplier's fusion-2-category discussion or unrelated transitive definitions behind the imported monoidal-category supplier.
