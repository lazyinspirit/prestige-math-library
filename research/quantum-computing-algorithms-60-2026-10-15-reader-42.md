# Step 3a reader report — batch 42

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Date: 2026-10-16

## Opened inventory

Assigned pages:

- A: `library/quantum-algorithms/quantum-walk-search-and-element-distinctness.md`
- B: `library/quantum-algorithms/quantum-walk-search-and-element-distinctness-examples.md`

All 19 assigned items were opened and reviewed in dependency order:

- `def-qa-18-marked-set-and-stationary-mass`
- `def-qa-18-classical-hitting-time`
- `lem-qa-18-absorbing-walk-discriminant-decomposition`
- `lem-qa-18-symmetric-compressed-walk-bound`
- `thm-qa-18-classical-spectral-hitting-bound`
- `def-qa-18-random-access-gate-model`
- `alg-qa-18-reversible-walk-finding`
- `def-qa-18-element-distinctness-johnson-walk`
- `def-qa-18-canonical-skip-list-for-element-distinctness`
- `lem-qa-18-johnson-walk-spectrum`
- `thm-qa-18-reversible-search-cost`
- `alg-qa-18-szegedy-phase-detection`
- `lem-qa-18-johnson-stored-data-query-access`
- `thm-qa-18-element-distinctness-query-cost`
- `thm-qa-18-detection-correctness-cost`
- `thm-qa-18-element-distinctness-qr-access-gate-cost`
- `cex-qa-18-query-cost-is-not-gate-cost`
- `ex-qa-18-johnson-walk-parameters`
- `ex-qa-18-element-distinctness-unique-collision`

The 13 manifest-listed dependency pages were opened: `quantum-phase-estimation`, `discrete-quantum-walks-and-szegedy-theory`, `the-polynomial-hierarchy-and-relativization`, `measurements-povms-and-instruments`, `recurrence-transience-and-hitting-times-for-markov-chains`, `the-spectral-theorem-and-singular-value-decomposition`, `registers-tensor-products-and-partial-trace`, `circuit-syntax-denotational-semantics-and-measurement`, `uniform-circuit-families-promise-problems-and-complexity`, `controlled-gates-phase-and-entanglement`, `reversible-computation-ancillas-and-coherent-oracles`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, and `trigonometric-and-oscillatory-examples-in-one-variable`.

Supplier statements opened as needed included `def-qa-17-finite-reversible-chain`, `def-qa-17-absolute-spectral-gap`, `def-qa-17-szegedy-transition-isometry`, `def-qa-17-walk-access-model`, `thm-qa-17-szegedy-spectral-mapping`, `thm-qa-17-discriminant-self-adjoint`, `thm-qa-17-walk-access-cost`, the QPE outcome/tail, superposition, exact-grid, and access-cost results, the projective-measurement outcome law and instrument/conditional-state definitions, `thm-qc-deferred-measurement`, finite-field existence and irreducible-polynomial results, Boolean-oracle/reversible-embedding and QRAM gate definitions, and the triangle and reverse-triangle inequalities.

## Repairs and evidence

- `def-qa-18-element-distinctness-johnson-walk`: required an injective value encoding. Without injectivity, equality of stored words need not mean equality of function values, so the marked predicate could be wrong.
- `def-qa-18-canonical-skip-list-for-element-distinctness`: made the fixed polynomial-basis field representation part of the finite schema and clarified that canonical storage is relative to that representation and the supplied hash seed. This supplies the missing deterministic interpretation of field elements, bucket labels, and stored values.
- `lem-qa-18-johnson-walk-spectrum`: added the finite reversible-chain and absolute-gap definitions as dependencies. The proof now establishes that the symmetric stochastic Johnson matrix has uniform stationary law and satisfies detailed balance, identifies the constant vector as its eigenvalue-one space, and derives the absolute gap from the restricted operator norm rather than assuming the convention.
- `alg-qa-18-reversible-walk-finding` and `thm-qa-18-reversible-search-cost`: replaced real-valued execution instructions and transcendental ceiling tests by dyadic rational inputs and exact integer/rational or algebraic comparisons. Replaced the Basel-series precision schedule with rational `β_i=γ/(16i²)` and the elementary finite bound `Σ_{j≤n}j⁻²≤2`; updated the derived constants and cited the finite Gregory–Leibniz bound used for π comparisons. The theorem statement now explains how dyadic inputs preserve the real-promise asymptotics.
- `alg-qa-18-szegedy-phase-detection`: specified the supplied binary marked/unmarked test as a Lüders instrument. A marked result measures, verifies, and outputs a marked label; an unmarked result continues in the normalized conditional branch while preserving coherence among unmarked labels. Added the outcome-law, instrument, and conditional-state prerequisites.
- `thm-qa-18-detection-correctness-cost`: distinguished the projective outcome probability from the conditional state update and made `C_mark` include the Lüders test and marked-label readout/verification.
- `thm-qa-18-element-distinctness-query-cost`: chose dyadic lower bounds for the gap and marked mass and a fixed dyadic failure target, with factor-two bounds establishing the claimed asymptotic query cost.
- `thm-qa-18-element-distinctness-qr-access-gate-cost`: clarified the injective encoding and full-DAG Boolean-depth parameters; supplied a reversible bitonic-sort construction; made field representation, overflow and overrun caps, coin-label orthogonality, seed-preserving deferred measurement, and direct output verification explicit. The proof now bounds the capped-versus-ideal error, chooses a fixed `N₀` that preserves positive success, and separates the proved polylogarithmic local operations from the assumed full row-access and subset-preparation costs. Its steps were stratified so their step references point only to preceding prerequisites.
- A-page summary: changed “exact row-reflection and walk-query counts” to “proved row-reflection and walk-query bounds,” matching the upper bounds established in the local lemma.

The affected proof-contract entries were regenerated for `lem-qa-18-johnson-walk-spectrum`, `thm-qa-18-reversible-search-cost`, `thm-qa-18-detection-correctness-cost`, `thm-qa-18-element-distinctness-query-cost`, and `thm-qa-18-element-distinctness-qr-access-gate-cost`. No changed item had a stale `verification.judge` record.

Evidence consulted:

- Magniez, Nayak, Roland, and Santha, “Search via Quantum Walk,” Theorem 4 (PDF p. 5) for the reversible-chain search cost and §§2–3 (PDF pp. 4–5) for the discriminant/absorbing-walk setup: [arXiv PDF](https://arxiv.org/pdf/quant-ph/0608026).
- Childs, *Lecture Notes on Quantum Algorithms*, Chapter 20 §§20.2–20.3 (printed pp. 92–93), for the Johnson/Hamming walk, gap and update-cost conventions: [lecture notes](https://www.cs.umd.edu/~amchilds/qa/qa.pdf).
- Ambainis, “Quantum Walk Algorithm for Element Distinctness,” Theorem 4 and §6.2, for history-independent storage, bounded-time handling, QRAM swaps, buckets/skip lists, and the hybrid analysis: [arXiv HTML](https://arxiv.org/html/quant-ph/0311001v9).

## Unedited findings

None. No proposed withdrawal was identified.

## Page verdicts

- A page `quantum-walk-search-and-element-distinctness`: **pass after the summary wording repair**. The page claims match the reviewed local proofs and their stated resource qualifications.
- B page `quantum-walk-search-and-element-distinctness-examples`: **pass**. The query-versus-gate counterexample and finite Johnson-walk calculations were checked against their definitions and theorem dependencies.

## Validation and blockers

- Reflow ran for all nine changed items and reported them unchanged.
- Precheck passed for the five proof-bearing changed items; the four definition/algorithm items had no proof phase to check.
- The required single proof-layout run covered all nine changed item paths: 9 items, 38 steps, 0 defects.
- No tests were run.
- Batch 42 has no blocker. The live run status at 2026-10-16 03:32 UTC still reports the out-of-scope invalid scaffold item in batch 12 and `collect-47` failed three times; these do not block this batch’s review.

## Coverage note

Every assigned item and both assigned pages were opened, as were the manifest-listed dependency pages and supplier claims needed for the checks above. The dependency review was limited to those relevant statements and proofs; unrelated content elsewhere on the dependency pages was not audited. No unresolved mathematical uncertainty remains in the assigned claims.
