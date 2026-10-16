# Step 3a reader report — batch 31

Run: `quantum-computing-algorithms-60-2026-10-15`  
Reader: `reader-31`

## Scope and opened inventory

Opened both assigned pages:

- A page `quantum-phase-estimation`.
- B page `quantum-phase-estimation-examples`.

Opened all 14 assigned items, in their batch dependency order: `lem-qa-phase-estimation-geometric-sum`, `lem-qa-phase-estimation-sine-chord-bounds`, `def-qa-circular-phase-distance`, `def-qa-eigenphase-estimation-model`, `alg-qa-quantum-phase-estimation`, `lem-qa-phase-estimation-outcome-kernel`, `thm-qa-phase-estimation-access-cost`, `lem-qa-phase-estimation-nearest-grid-bound`, `lem-qa-phase-estimation-tail-bound`, `thm-qa-phase-estimation-exact-grid`, `thm-qa-phase-estimation-superposition-law`, `thm-qa-phase-estimation-success-and-tail`, `ex-qa-exact-phase-estimation`, and `ex-qa-phase-estimation-nearest-grid-and-tail`.

Opened direct proof suppliers needed to check the QPE phase convention, geometric and trigonometric bounds, binary-QFT circuit, finite measurement law, trace and partial-trace calculations, spectral decomposition, and query-cost arithmetic. These included the exponential addition/kernel results; finite-sum and induction items; sine/cosine derivative, monotonicity, parity and MVT items; register, tensor, circuit, gate, measurement and instrument items; finite Fourier inversion and character orthogonality; trace identities; and natural-number arithmetic. Also read the relevant De Wolf §4.5 source passage on binary QFT product factors and circuit ordering.

## Findings and repairs

- `lem-qa-phase-estimation-outcome-kernel`, Fact F10 and proof step 3.1: the normalization expansion now states the needed identity $\overline{\exp(it)}=\exp(-it)$. It follows from unit modulus in `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, the addition law in `thm-complex-exponential-addition-and-real-extension`, the series definition at zero, conjugation/modulus laws in `lem-complex-conjugation-and-modulus-laws`, and inverse uniqueness in `thm-complex-numbers-form-a-field`. The Euler corollary is now a direct dependency. Those local statements were opened and checked; the corollary cites Jirka's *Basic Analysis I*, complex exponential section, https://www.jirka.org/ra/html/sec_complexexp.html.
- `lem-qa-phase-estimation-nearest-grid-bound`, steps 1.1–2.1: the choice at wrap-around is explicit, and the fact that the integer lifts of labels cover all integers is derived by applying `lem-integer-part` to $k/Q$. Step 2.1 records both nearest labels at a half-grid tie, including the wrap-around tie. Step 3.1 now derives the equal moduli for the two signs from Euler's formula and the cited sine/cosine parity theorem. These statements were checked against `lem-integer-part`, `def-qa-circular-phase-distance`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, and `cor-trigonometric-parity-and-pythagorean-identity`.
- `lem-qa-phase-estimation-tail-bound`, step 1.1: the negative-sign denominator case now gives the explicit Euler/parity identity that makes its modulus equal to the positive-sign case. The cited parity result states both cosine evenness and sine oddness.
- `thm-qa-phase-estimation-superposition-law`: the statement now distinguishes the Kraus operators $K_y$ from the instrument maps and says explicitly that the system instrument follows phase-register discard. Its grid/off-grid claims now identify $K_y$ and the corresponding effects. Fact F1 derives normality of the unitary before applying the complex spectral theorem. Facts F15–F16 and proof step 3.1 cite and use the tensor-map adjoint and finite ancilla block-amplification results; the partial-trace calculation is stated for arbitrary operators, as required for complete positivity. Step 3.2 now matches the effect-level statement. Step 5.1 proves the witness unitary by norm preservation and explicitly checks the geometric quotient's numerator and denominator.
- `ex-qa-phase-estimation-nearest-grid-and-tail`, Fact F4: expanded the cited theorem summary to include both the nearest-label lower bound used in step 1.1 and the tail bound used in step 2.1. Its proof-contract citation already quoted the full theorem statement.

The task-owned proof contract at `research/quantum-computing-algorithms-60-2026-10-15-batch-31.proof-contracts.json` now records the new exponential identity sources, tensor-map/block-amplification suppliers, corrected step derivations, and matching boundary evidence. None of the five changed items contained a `verification.judge` record.

## Validation

Reflow reported `unchanged` and precheck passed for each changed item: `lem-qa-phase-estimation-outcome-kernel`, `lem-qa-phase-estimation-nearest-grid-bound`, `lem-qa-phase-estimation-tail-bound`, `thm-qa-phase-estimation-superposition-law`, and `ex-qa-phase-estimation-nearest-grid-and-tail`. The first layout pass caught a missing closing `$` in the new nearest-grid tie sentence; that delimiter was repaired, then reflow/precheck were rerun for that item. The final batched command `node tools/proof-layout.mjs` over the five changed paths reported **5 items, 25 steps, 0 defects**.

## Page verdicts

- **A page `quantum-phase-estimation`: pass.** The page summary accurately describes the access models, inverse-QFT convention, measurement, outcome law, probability bounds, resource counts, superposition instrument, and controlled-inverse caveat. No page prose edit was needed.
- **B page `quantum-phase-estimation-examples`: pass.** The exact-grid example gives the complete law and estimate. The second example's tied nearest labels, four tail labels, exact total, and comparison with the proved bound are correct. No page prose edit was needed.

No confirmed defect remained outside my edit scope; the findings array is empty. The reviewed QFT convention and bit order were also checked against the local De Wolf source text `research/quantum-algorithms-planning/sources/qa_r1/de-wolf-1907.09415.txt`, §4.5, extracted lines 2900–3108. Its product-factor derivation and reverse-order circuit description match the local positive-sign QFT and final wire-reversal convention.

## Blocker

The recomputed autopilot status reports a pre-existing specification blocker in `1-scaffold`: construction scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12 is invalid. This is outside batch 31 and did not block the mathematical review. All assigned pages and items, and the dependency statements used to check their claims, were opened; I did not exhaustively re-audit every transitive proof in the library.
