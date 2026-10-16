# Step 3a reader report — batch 33

Run: `quantum-computing-algorithms-60-2026-10-15`  
Batch: `33`  
Reader: `reader-33`

## Opened inventory

Assigned pages:

- `library/quantum-algorithms/shors-factoring-algorithm.md` (A)
- `library/quantum-algorithms/shors-factoring-algorithm-examples.md` (B)

All 15 assigned items were read in dependency-level order:

- Level 0: `alg-qa-shor-uniform-residue-sampler`, `lem-qa-crt-sign-vector-factorization`, `lem-qa-even-order-square-root`, `lem-qa-prime-power-order-two-adic-law`, `lem-qa-shor-residue-gcd-branch`.
- Level 1: `thm-qa-order-to-factor-success`.
- Level 18: `alg-qa-shor-factoring`, `def-qa-shor-cost-accounting`.
- Level 19: `lem-qa-shor-perfect-power-precheck`, `thm-qa-shor-residue-sampler-correct-and-cost`.
- Level 20: `thm-qa-order-to-factor-correctness`, `thm-qa-shor-factoring-cost`.
- Level 21: `thm-qa-shor-factoring-success`, `ex-qa-shor-factorization-of-fifteen`, `ex-qa-shor-factorization-retry-branches`.

The seven prerequisite pages listed by the A-page manifest were opened: `quantum-order-finding-and-rational-reconstruction`, `divisibility-gcd-and-bezout`, `primitive-roots-and-unit-groups-modulo-n`, `congruences-and-the-chinese-remainder-theorem`, `monoids-groups-and-subgroups`, `uniform-circuit-families-promise-problems-and-complexity`, and `primes-and-the-fundamental-theorem-of-arithmetic`. The B page’s required A page was opened first.

Direct item suppliers opened included the modular-ring, integer-order, divisibility, gcd, Bézout, coprimality, prime-factorization, unit-group, CRT, group-order, p-adic valuation, and finite-probability suppliers declared by the batch items. Exact carriers included `def-integers-modulo-n`, `thm-integers-modulo-n-basic-algebra`, `thm-standard-representatives-modulo-n`, `thm-unit-criterion-modulo-n`, `thm-chinese-remainder-theorem`, `thm-unit-group-chinese-remainder-decomposition`, `thm-unit-group-modulo-odd-prime-power-is-cyclic`, `lem-order-characterisation`, `def-common-divisor-and-gcd`, `lem-divisor-bound`, `lem-gcd-basic-values`, `thm-bezout-identity`, `lem-coprime-criterion`, `lem-coprime-divides-product`, `thm-fundamental-theorem-of-arithmetic`, `thm-canonical-prime-factorisation`, `cor-order-of-element-divides-group-order`, `thm-product-probability-has-independent-coordinate-events`, `thm-countable-product-of-probability-spaces`, `thm-continuity-from-above-for-measures`, and `cor-layer-cake-formulas-for-random-variables`.

Relevant in-run order-finding suppliers opened included `alg-qa-modular-order-finding`, `thm-qa-modular-order-finding-success`, `thm-qa-modular-order-finding-cost`, `alg-qa-modular-multiplication-circuit`, `thm-qa-modular-multiplication-circuit-correctness`, `thm-qa-modular-arithmetic-cost`, `def-qa-classical-bit-cost`, `def-qc-circuit-cost-model`, `alg-qa-quantum-phase-estimation`, `thm-qa-phase-estimation-superposition-law`, `thm-qa-phase-estimation-success-and-tail`, `lem-qa-phase-estimation-outcome-kernel`, `lem-qa-phase-estimation-geometric-sum`, `lem-qa-phase-estimation-nearest-grid-bound`, `thm-qa-phase-estimation-exact-grid`, `alg-qa-rational-reconstruction-from-phase-sample`, `def-qa-rational-phase-reconstruction`, `def-convergents-of-regular-continued-fraction`, `thm-qa-rational-reconstruction-correctness`, `thm-qa-rational-reconstruction-bit-cost`, `lem-qa-rational-reconstruction-candidate-uniqueness`, and `lem-qa-totient-ratio-logarithmic-lower-bound`. Additional focused suppliers opened were `thm-division-algorithm-in-z`, `lem-integer-part`, `lem-qa-finite-rational-legendre-criterion`, `def-qa-circular-phase-distance`, `lem-qa-phase-estimation-sine-chord-bounds`, `thm-qc-computational-basis-orthonormal`, `lem-orthogonality-of-characters-on-a-finite-cyclic-group`, `alg-qc-reversible-embedding`, `def-qc-coherent-function-oracle`, `thm-qc-reversible-xor-oracle-unitary`, `def-qc-clean-and-dirty-ancillas`, `thm-qc-reversible-embedding-cost`, `def-qc-dirac-notation-conversion`, `alg-qa-exact-binary-qft-circuit`, `thm-qa-exact-binary-qft-circuit-correct`, `thm-qa-exact-binary-qft-gate-count`, `thm-qa-phase-estimation-access-cost`, and `lem-pairwise-coprime-divisibility`.

The batch evidence opened was the page manifest, rendered item bundle, proof contracts, cross-batch dependency list, source-coverage record, and batch notes. The existing task-named reader report and findings JSON were also read as historical evidence, not verdicts. The 12 proof-contract records were compared with their current derivations, cited suppliers, boundary cases, and finite checks. The three assigned definition/algorithm items have no phase-proof contract records.

## Source review

I read Shor’s order-to-factor argument in §5 “Prime factorization” of [Shor’s paper](https://arxiv.org/pdf/quant-ph/9508027), PDF pp. 15–16, and the factoring reduction in §5.2 of [de Wolf’s notes](https://arxiv.org/pdf/1907.09415), PDF/printed pp. 37–38. Shor states the odd-order and global-minus-sign failure conditions and sketches the (1-2^{-(k-1)}) bound using CRT and cyclic odd-prime-power unit groups. De Wolf explains the initial gcd branch and the half-order gcd reduction for odd non-prime-powers. The local CRT-sign, valuation-distribution, and finite-probability proofs supply the detailed argument used by this batch. I verified the local sample set `{1,…,N−1}` separately; the included unit `a=1` does not change conditional uniformity in the unit branch.

## Review and edits

The even/perfect-power preprocessing, exact sampler law, random-residue gcd branch, local two-adic order distribution, CRT sign criterion, true-order success bound, candidate verification, outer retry composition, cost branches, and both examples were checked. The (1/2) true-order reduction bound and the pointwise (3/4) exact-order bound combine to give at least (3/8) success on a unit attempt; the proof does not assume independence between those events. The minimum-positive attempt cap satisfies ((5/8)^T\le\delta). The displayed arithmetic for 15, 35, 14, and 81 is correct.

Edits made:

- [alg-qa-shor-factoring](../items/alg-qa-shor-factoring.md): added explicit capped-power and modular-power loops for the perfect-power comparisons and outer candidate checks, and spelled out the exact integer loop that computes (T). These close under-specified instructions while preserving the input/output behavior. Its direct and indirect consumers (`lem-qa-shor-perfect-power-precheck`, both Shor correctness/cost/success theorems, both examples, and the A-page summary) were reviewed against the clarified procedure. There is no proof contract or stale `verification.judge` record for this algorithm.
- [thm-qa-shor-residue-sampler-correct-and-cost](../items/thm-qa-shor-residue-sampler-correct-and-cost.md): corrected the per-block bit-length claim. When (M=N-1=2^h), the accepted value (b=M-1) maps to output (M=2^h), which can require (h+1) bits. The proof now states at most (h+1) bits for increment/output and retains the valid (O(h)) transition bound. The step 3.1 derivation in the proof contract was updated; prior boundary-review evidence was preserved without recertification. No stale `verification.judge` record existed.

After the final item edits, reflow reported both changed items unchanged. Precheck returned 0 failures for the algorithm (0 proof sections applicable) and passed the sampler theorem. The batched final command `node tools/proof-layout.mjs items/alg-qa-shor-factoring.md items/thm-qa-shor-residue-sampler-correct-and-cost.md` reported 2 items, 3 proof steps, 0 defects.

## Defects not editable in this batch

- `lem-pairwise-coprime-divisibility`, Proof step 1.1: after obtaining a prime (q) dividing both (n_i) and (n_j), the proof says (q) divides (gcd(n_i,n_j)=1). Its declared dependencies give the greatest-common-divisor maximum property, which yields (q\le\gcd(n_i,n_j)=1), not (q\mid\gcd(n_i,n_j)). That inequality contradicts (q>1) and is the needed repair; alternatively cite a common-divisor-divides-gcd result. This published supplier is reached by assigned consumer `lem-qa-crt-sign-vector-factorization` through `thm-chinese-remainder-theorem`. Routed as a nonfatal unlicensed inference.
- `thm-rational-continued-fraction-termination`, Proof steps 1.1, 1.3, and 3.1: tags and punctuation interrupt unfinished sentences. For example, step 1.1 has “Applying [F1] to. [given, F1, algebra] (u_0) and (v_0) gives”; step 1.3 has “suppose. [F1, F3, induction, algebra]” before the display; step 3.1 repeats its concluding clause after an internal tag group. The arguments are recognizable, but the proof section is malformed and needs the tag groups moved to the ends of complete steps. This published supplier is reached by assigned consumer `alg-qa-shor-factoring` through the modular order-finding and rational-reconstruction chain. Routed as a nonfatal ill-formed defect.
- `thm-qa-modular-arithmetic-cost`, Proof step 2.2: the proof asserts that schoolbook division, multiplication, subtraction, and reduction each cost (O(n^2)) transitions. Its cited cost definitions specify what transitions are charged; the division theorem establishes quotient/remainder existence, but neither gives a long-division procedure or its transition bound. The proof needs an explicit binary long-division algorithm with (O(n)) quotient positions and (O(n)) work per position, or a local result proving that bound. Assigned consumer `thm-qa-shor-factoring-cost` depends on this current batch-32 supplier. Routed as a nonfatal unlicensed inference. The observed current source hash is recorded in the findings JSON.

## Page verdicts

- `shors-factoring-algorithm` (A): its prose and mathematical summary are sound; the procedure clarification is recorded above. The published and in-run dependency findings remain routed, so the dependent proofs/cost claim are not fully closed at this handoff.
- `shors-factoring-algorithm-examples` (B): passes. Both examples match the procedure, including the first perfect-power hit for 81 and the two retry branches.

## Blocker

No batch-33-specific blocker prevented this review. The disk-recomputed run status at 2026-10-16 03:05 UTC still reports the run active with no worker in flight; the global 1-scaffold graph remains invalid because of `def-qc-effective-unitary-matrix-input` in batch 12, and 3a-collect reports `collect-36` failed three times. These are outside this assignment.

## Coverage note

All 15 assigned items, both assigned pages, the seven A-page prerequisites, and the direct item dependencies needed for their claims were opened. I did not audit the full 1,326-item mechanical transitive prerequisite closure or every foundation beneath those suppliers; nested items were opened where their specific claims were needed. The source review covered the relevant factoring-reduction passages, not the full contents of either book/paper.
