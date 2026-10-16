# Step 3a reader report — batch 12

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: `reader-12`  
Review date: 2026-10-16

## Opened inventory

Assigned pages:

- `library/quantum-computing/approximate-universality-and-solovay-kitaev.md`
- `library/quantum-computing/approximate-universality-and-solovay-kitaev-examples.md`

Assigned items, read in manifest dependency order:

- Level 0: `def-qc-effective-unitary-matrix-input`, `def-qc-inverse-closed-dense-su2-gate-set`, `lem-qc-fixed-dimension-interval-arithmetic`, `lem-qc-irrational-rotation-dense-on-circle`, `lem-qc-su2-near-identity-logarithm`.
- Level 1: `lem-qc-compact-su2-base-net`.
- Level 4: `lem-qc-pauli-vector-multiplication`.
- Level 5: `lem-qc-su2-balanced-commutator`, `lem-qc-two-axis-su2-generation`.
- Level 6: `lem-qc-clifford-t-projective-density`, `lem-qc-commutator-error-cancellation`.
- Level 7: `alg-qc-solovay-kitaev-unitary-compiler`.
- Level 8: `thm-qc-solovay-kitaev-error-and-resource-bound`.
- Level 9: `thm-qc-solovay-kitaev-bit-complexity`, `thm-qc-fixed-arity-unitary-error-budget`, `ex-qc-solovay-kitaev-error-budget`.
- Level 10: `thm-qc-controlled-phase-approximation`.

The assigned pages and items were compared with `research/quantum-computing-algorithms-60-2026-10-15-batch-12.pages.json`. I also opened `briefs/reader.md`, `CLAUDE.md`, `README.md`, the relevant sections of `SCHEMA.md` and `WORKFLOW.md`, and the batch-12 authoring notes, item inventory, cross-batch dependency record, and proof-contract file. No earlier Step 3 reader result for batch 12 was present when this review began.

Supplier interfaces needed for the assigned proofs were opened, including:

`def-effective-binary-encoding-and-decoder`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `lem-integer-part`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-addition-and-real-extension`, `thm-kernel-and-fibres-of-complex-exponential`, `thm-sine-and-cosine-parametrize-the-unit-circle`, `thm-sine-and-cosine-derivatives`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-termwise-differentiation-of-complex-power-series`, `thm-chain-rule-for-complex-derivatives`, `thm-algebra-of-complex-derivatives`, `thm-zero-complex-derivative-on-a-domain-implies-constant`, `cor-complex-differentiability-implies-continuity`, `def-natural-logarithm`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-cofunction-supplementary-and-reflection-identities`, `thm-double-angle-and-power-reduction-identities`, `thm-intermediate-value`, `thm-closed-unit-ball-compact-iff-finite-dimensional`, `def-qc-pauli-matrices`, `cor-mean-value-theorem`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `def-number-field`, `cor-algebraic-integer-minimal-polynomial-criterion`, `thm-sine-and-cosine-addition-formulas`, `thm-quarter-turn-values-and-shift-formulas`, `thm-natural-logarithm-laws`, `def-non-negative-and-positive-operator`, `thm-of-square-roots`, `cor-triangle-inequality-for-inner-product-norm`, `def-qc-tensor-register-and-permutation`, `def-qc-controlled-phase-rotation`, `lem-qc-global-phase-under-control`, `def-qc-controlled-unitary-access`, and `def-qc-global-phase-equivalence`.

The draft Pauli, one-qubit gate, tensor-register, controlled-phase, controlled-access, and global-phase suppliers were checked at the interfaces used by batch 12. The tensor-register and global-phase-under-control proof sections were also read where their arguments were used.

## Mathematical review and page verdicts

**A page — no remaining page-level defect.** The summary accurately separates the inverse-closed dense-gate and certified-net hypotheses for the SU(2) recursion, its polylogarithmic word-length result, the finite-precision model, and the boundary between an unconditional global phase and a phase inside a control. The fixed-arity error budget is explicitly conditional on a supplied exact factorization; it does not assert a uniform exact-synthesis theorem.

**B page — no defect.** The three-factor product error bound follows by telescoping, unitarity, and submultiplicativity. The three scalar phases combine into one phase for the entire unconditional block, as the page summary says.

The assigned proofs were checked from their stated hypotheses and the exact supplier interfaces. In particular, the SU(2) logarithm, balanced-commutator construction and error cancellation, two-axis generation, Clifford+T density, Solovay–Kitaev recurrence, finite-precision branch conditions and cost estimates, full-register error extension, and controlled-phase parity identities were checked directly. The 14 proof-contract entries in the batch scope were cross-checked for scope, supplier-citation locations, and step maps; the base-net contract was updated with the repaired derivation.

The relevant literature passages were consulted as context and checked for scope: Dawson and Nielsen, [*The Solovay–Kitaev Algorithm*](https://arxiv.org/pdf/quant-ph/0505030), §2 Definition 1 and Theorem 1, §3, and §§4.1–4.2 (PDF pp. 2–10). These give the inverse-closed dense-set hypotheses, operator-norm recursion and length/time recurrences, balanced-commutator and commutator-error arguments; §3 explicitly says the exact-arithmetic analysis does not charge finite-precision arithmetic. Van Melkebeek and Watson, [*Time-Space Efficient Simulations of Quantum Computations*](https://theoryofcomputing.org/articles/v008a001/v008a001.pdf), Theorems 4.3 and 4.5 and §§4.3.2–4.3.3 (PDF pp. 26–38), state a finite-precision SK result and give its d=2 construction. Their theorem takes finite-precision matrix inputs; the assigned bit-complexity theorem uses Cauchy-name inputs, so its bound was reviewed from the local proof rather than inferred from that source.

## Edit and evidence

- Repaired `items/lem-qc-compact-su2-base-net.md`, Proof 2.1–3.1. The Statement allowed any finite set `G ⊂ SU(2)` with dense generated subgroup, but the original proof selected word values from the subgroup without establishing that positive words in `G` are dense. The repair preserves the broader Statement: compactness supplies finite balls of radius `1/n`; a pigeonhole argument makes positive powers of each generator approach the identity and hence its inverse; the closed semigroup of positive-word values therefore contains the dense generated subgroup. The finite-subcover argument then supplies the requested net. The proof defines the cover size and exponent by least natural numbers and uses only finite word selections, so no choice principle is added.
- Updated `research/quantum-computing-algorithms-60-2026-10-15-batch-12.proof-contracts.json` for this item: its step 2.1 derivation and supplier uses now match the proof, a step 3.1 derivation is recorded, and the empty-set, endpoint, and nonempty-choice boundary evidence points to the current steps. The item had no `verification.judge` record to remove.
- Reflow: `node tools/tsx-run.mjs tools/reflow.mts items/lem-qc-compact-su2-base-net.md` — unchanged.
- Precheck: `node tools/tsx-run.mjs tools/precheck.mts items/lem-qc-compact-su2-base-net.md` — pass, 1 checked, 0 failing.
- Final layout check: `node tools/proof-layout.mjs items/lem-qc-compact-su2-base-net.md` — 1 item, 3 steps, 0 defects.

## Uneditable defects

None found in an assigned page or in the supplier interfaces needed to verify the assigned claims. No finding remains for the findings JSON.

## Blocker

The on-disk autopilot status was `running`, with Step 3a reading active and no worker process in flight. It also reported a pre-existing `1-scaffold` stage-spec blocker: `Invalid construction scheduling item identity def-qc-effective-unitary-matrix-input in batch 12`. This is a workflow blocker, not a mathematical defect in the definition. Run state and scaffold records were left untouched.

## Coverage limitation

I did not audit every proof in the full transitive prerequisite closure or the prose of every page listed in the A page's `requires` metadata. I opened the assigned carriers and the supplier interfaces needed for their claims. The cited finite-precision paper uses a different input model from the local Cauchy-name theorem, as noted above.
