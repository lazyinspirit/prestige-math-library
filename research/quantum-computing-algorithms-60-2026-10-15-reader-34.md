# Step 3a reader report — batch 34

Run: `quantum-computing-algorithms-60-2026-10-15`

## Opened inventory

Assigned pages:

- `finite-abelian-hidden-subgroup-algorithms` — `library/quantum-algorithms/finite-abelian-hidden-subgroup-algorithms.md`
- `finite-abelian-hidden-subgroup-algorithms-examples` — `library/quantum-algorithms/finite-abelian-hidden-subgroup-algorithms-examples.md`

Assigned items, read in supplier-before-consumer order:

- A page: `rem-qa-nonabelian-hidden-subgroup-scope`; `lem-qa-annihilator-restriction-cut`; `lem-qa-common-kernel-repetition-bound`; `def-qa-finite-abelian-hidden-subgroup-problem`; `alg-qa-finite-abelian-hidden-subgroup-sample`; `lem-qa-hidden-coset-state-law`; `alg-qa-finite-abelian-hidden-subgroup-reconstruction`; `thm-qa-finite-abelian-hidden-subgroup-sample-law`; `thm-qa-finite-abelian-hidden-subgroup-reconstruction-success`; `thm-qa-finite-abelian-hidden-subgroup-cost`.
- B page: `ex-qa-hsp-common-kernel-recovery`; `ex-qa-hsp-cyclic-subgroup-annihilator`.

Required prerequisite pages opened: `uniform-circuit-families-promise-problems-and-complexity`; `finite-abelian-fourier-analysis`; `effective-numberings-reductions-resources-and-randomness`; `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`; `reversible-computation-ancillas-and-coherent-oracles`; `registers-tensor-products-and-partial-trace`; `measurements-povms-and-instruments`; `circuit-syntax-denotational-semantics-and-measurement`; `pure-and-mixed-states-ensembles-and-schmidt-decomposition`.

Direct item suppliers opened included the finite-abelian dual, character, annihilator, Fourier-transform, orthogonality, and cardinality items from batch 29; the Dirac, register, encoding, tensor, density, partial-trace, and computational-basis items from batches 1–4; and the circuit, oracle, and cost-model items from batches 9, 10, and 14. I also checked the cited published finite-group, finite-sum, trace, complex-root, rational-power, and Chernoff statements used by these proofs. No supplier defect was confirmed.

## Edit and evidence

Edited `thm-qa-finite-abelian-hidden-subgroup-cost`. Its old exact query count followed from the explicit `O_F` call in each sample but did not exclude additional hiding-oracle access inside the supplied preparation or QFT circuits. The sample algorithm accepts supplied circuits with declared access and costs, and the cost model counts named-oracle calls separately from ordinary gates. I added the no-access hypothesis for those circuits to the resource statement and made the corresponding proof steps explicit. The affected entry in `research/quantum-computing-algorithms-60-2026-10-15-batch-34.proof-contracts.json` now records that hypothesis in its derivation. No `verification.judge` record was present on the item to remove.

The review checked the finite-abelian sampling and recovery derivations against Andrew M. Childs, *Lecture Notes on Quantum Algorithms*, Chapter 6 §6.1, PDF pp. 33–37, and Chapter 12 §§12.1–12.3, PDF pp. 50–66 (`research/quantum-algorithms-planning/sources/qa_r2/childs-lecture-notes.txt`; https://www.cs.umd.edu/~amchilds/qa/qa.pdf). The latter sections distinguish the abelian/normal-subgroup weak-sampling result from general nonabelian recovery and explain the circuit and post-processing limits.

I also checked Ronald de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6, Chapter 6 §§6.1.1–6.2.2, PDF pp. 57–64, and §6.3.2, PDF p. 64 (`research/quantum-algorithms-planning/sources/qa_r2/de-wolf-1907.09415.txt`; https://arxiv.org/pdf/1907.09415). The cited arguments support the local abelian coset-state/Fourier-sampling route and caution that general nonabelian query-efficient information alone need not give an efficient measurement or post-processing algorithm.

Validation after the repair: reflow reported the item unchanged; precheck passed (`1 checked, 0 failing`); proof-layout reported `1 item, 4 steps, 0 defects`.

## Defects not edited

None. No proposed withdrawal was identified.

## Page assessments

- `finite-abelian-hidden-subgroup-algorithms`: the summary accurately describes the finite-abelian promise, Fourier sampling, implicit common-kernel output, conditional exact-circuit assumptions, and nonabelian scope limit. No page-prose repair was needed; the cost item now states the no-hiding-oracle-access condition for its exact query bound.
- `finite-abelian-hidden-subgroup-algorithms-examples`: both example summaries match their calculations. The product example's two character kernels intersect in the trivial hidden subgroup; the cyclic example's annihilator labels are exactly $\{0,4,8\}$ with uniform probabilities. No page-prose repair was needed.

## Blocker

No batch-34 blocker. The latest live-run status (2026-10-16 01:55:26 UTC) reports a run-level spec blocker: invalid construction scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12 at `1-scaffold`. This is outside batch 34 ownership.

## Coverage note

Both assigned pages, all 12 assigned item bodies, the nine required page bodies, and direct dependencies used by the assigned proofs were inspected. The relevant finite-abelian and circuit supplier arguments and cited source passages were checked. The complete batch proof-contract file's first bulk display was truncated; I extracted and updated the affected cost-theorem contract, and do not rely on unseen contract text. I did not independently reprove every general-purpose published foundation theorem in the wider transitive dependency graph; the exact cited statements used here were checked. No unresolved mathematical uncertainty remains in the assigned claims reviewed.
