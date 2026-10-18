# Step 3a reader report — batch 11

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Batch: `11`

## Run state and opened inventory

The recomputed autopilot status was `running` at `3a-read`; no worker was in flight. The assigned manifest lists two draft pages and 21 draft items, with no cross-batch item dependencies.

Opened pages:

- `library/numerical-linear-algebra-and-approximation/randomized-low-rank-approximation.md` (A page; 18 items).
- `library/numerical-linear-algebra-and-approximation/randomized-low-rank-approximation-examples.md` (B page; 3 examples).

Opened assigned items in supplier order:

- Level 0: `def-standard-real-and-normalized-complex-gaussian-matrix-law`; `lem-orthogonal-projector-power-error-inequality`.
- Level 1: `alg-gaussian-randomized-range-finder`; `lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence`; `lem-finite-real-gaussian-increment-comparison`.
- Level 2: `alg-randomized-power-subspace-iteration-with-qr`; `lem-wide-gaussian-matrix-has-full-row-rank-almost-surely`; `lem-real-scaled-gaussian-product-expectation`; `lem-randomized-rangefinder-deterministic-svd-partition-error`.
- Level 3: `thm-randomized-power-rangefinder-error-transfer`; `lem-wide-gaussian-pseudoinverse-frobenius-moments`; `ex-power-rangefinder-loses-small-mode-without-qr`; `ex-gaussian-rangefinder-exact-on-rank-k-matrices`.
- Level 4: `lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail`; `lem-normalized-complex-gaussian-block-affine-spectral-second-moments`.
- Level 5: `lem-normalized-complex-rangefinder-direct-spectral-expectation`; `thm-real-gaussian-rangefinder-expected-spectral-error`.
- Level 6: `thm-gaussian-rangefinder-expected-spectral-error`; `thm-real-gaussian-power-rangefinder-expected-error`; `ex-slow-singular-tail-rangefinder-error-term`.
- Level 7: `thm-gaussian-power-rangefinder-expected-error`.

The 50 unique published direct suppliers named by the assigned item dependencies were opened at the relevant statement or definition sections. They include the Gaussian/measure, SVD/operator-norm, Gamma/Beta, Jensen/Tonelli/Fubini, calculus, and finite-sum suppliers. I also opened `thm-gaussian-integral`, its three local integral lemmas, `def-standard-normal-and-normal-laws`, `lem-normal-density-has-total-mass-one`, `lem-gaussian-even-moment-bound-for-brownian-increments`, `def-pi-via-first-positive-cosine-zero`, `thm-exponential-beats-every-polynomial`, `cor-continuous-functions-are-borel-measurable`, `thm-monotone-convergence-for-the-integral`, and `lem-gamma-density-normalization` to check the relevant definitions and normalization routes. The older batch notes contain earlier and conflicting proof/readiness accounts; I did not treat them as verdicts.

The 18 proof contracts cover the 18 proof-bearing assigned items. Their derivation IDs match the current numbered Proof or Verification steps. The three remaining assigned carriers are definitions/algorithms and have no phase-proof contracts.

## Mathematical review

The real expected-error proof correctly combines the deterministic SVD partition bound, the real scaled-Gaussian product estimate, the Frobenius pseudoinverse moment, and the spectral pseudoinverse tail. The complex moment argument checks out: the reciprocal-Gamma moments, sphere averaging, Jensen reduction over coordinate subsets, and the three tail regimes lead to the stated constants; the rank-shift case includes oversampling values `p=2,3`. The powered theorems preserve the exact range under QR between applications and apply the transfer inequality to the powered matrix. The three examples' calculations also check out, conditional on a valid Gaussian probability law.

The source papers support the real-field results cited from them. HMT §10.1 says that section focuses on the real case and only notes that analogous complex results hold; Theorem 10.6 and its proof give the real expected spectral bound. Martinsson–Tropp §11.4.2 likewise states the Gaussian rangefinder analysis for a real standard-normal sketch. The current normalized-complex moment and rangefinder proofs are local arguments, so I corrected the provenance labels on the mixed-field items listed below. HMT's Theorem 9.1, Algorithm 4.4 and Corollary 10.10, Martinsson–Tropp's Theorem 11.4 and Lemma 11.8, and Chevet's §2 Sudakov–Fernique comparison were checked at their cited locations. The local finite Gaussian comparison proof supplies the interpolation argument rather than treating Chevet's citation as a proof.

Source locators:

- [Halko, Martinsson, and Tropp, *Finding Structure with Randomness*](https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf), §10.1 (PDF p. 54), Theorem 10.6 and proof (pp. 56–57), Theorem 9.1 (p. 50), Algorithm 4.4 (p. 26), and Corollary 10.10 (p. 59).
- [Martinsson and Tropp, *Randomized Numerical Linear Algebra: Foundations & Algorithms*](https://arxiv.org/pdf/2002.01387), Theorem 11.4 (p. 46), §11.4.2 and Theorem 11.5 (p. 47), and Lemma 11.8 (p. 49).
- [S. Chevet, *Séries de variables aléatoires gaussiennes…*](https://www.numdam.org/item/SAF_1977-1978____A14_0.pdf), §2, Sudakov–Fernique comparison theorem (scanned pp. 3–4).

## Edits made

1. Changed `provenance.statement` from `literature-derived` to `ai-altered` in `def-standard-real-and-normalized-complex-gaussian-matrix-law`, `alg-gaussian-randomized-range-finder`, `alg-randomized-power-subspace-iteration-with-qr`, `lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence`, `lem-wide-gaussian-matrix-has-full-row-rank-almost-surely`, `lem-wide-gaussian-pseudoinverse-frobenius-moments`, `lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail`, `thm-randomized-power-rangefinder-error-transfer`, `thm-gaussian-rangefinder-expected-spectral-error`, and `thm-gaussian-power-rangefinder-expected-error`. The exact normalized-complex laws, unitary extensions, complex inverse-Gamma calculations, finite-scan implementation, and expectation-transfer formulation are established locally; the listed source papers supply the real-field context or general pointwise result. Mathematical statements and proofs were unchanged by these metadata edits. No corresponding `verification.judge` records were present, and the current proof contracts did not require edits.

2. Rewrote the A-page summary to describe the local arguments without implying that the expected-error conclusions are fully established while the Gaussian-law and finite-scan measurability prerequisites remain open in this draft.

For the ten changed item files, `reflow` exited 0 and reported each file unchanged. `precheck` exited 0 for all ten: the seven proof-bearing items passed, and the definition/algorithm items reported zero checked proofs and zero failures. The final `proof-layout` command covered all ten changed item paths and reported 10 items, 24 steps, 0 defects.

## Defects not edited

1. `def-standard-real-and-normalized-complex-gaussian-matrix-law`, Definition (lines 25–36, especially 27–31): the item calls the displayed functions probability densities and asserts `E|z|^2=1`, but its dependencies establish only Countable Choice and the existence/completeness of Lebesgue measure. They do not establish `∫ exp(-x^2/2) dx = sqrt(2π)`, the real second moment, the transformed complex density, or its variance-one moment. The available `lem-normal-density-has-total-mass-one` assumes the full Axiom of Choice, not just Countable Choice, and is not a dependency. The downstream invariance, rank, pseudoinverse-moment, and expectation proofs use these probability-law facts. A Countable-Choice-compatible normalization and second-moment result, with finite product normalization, is needed. I left this open because closing it requires an additional justified result and dependency/contract authoring beyond the assigned carriers.

2. `alg-gaussian-randomized-range-finder`, Definition (lines 35–41): the Definition asserts that the finite-scan basis and projector are Borel functions, but the algorithm protocol requires such algorithm properties in a separate proved lemma or theorem. The expected-error consumers need this measurability to define their expectations. A separate result with the finite-stratum proof is needed; no such assigned result exists.

3. `alg-randomized-power-subspace-iteration-with-qr`, Definition (lines 34–38): it asserts measurability of every selected basis as a property of the procedure, without a separate proved result. The power-transfer and expected-error consumers need a measurable projector. A separate result proving measurability of the repeated finite-scan composition is needed; no such assigned result exists.

## Page verdicts

- `randomized-low-rank-approximation` (A): the summary was corrected to state that the current items contain the derivations while naming the unclosed normalization and measurability results. The mathematical exposition is accurate at draft status, but the expected-error results remain unestablished until the three item defects above are closed.
- `randomized-low-rank-approximation-examples` (B): the first sentence of the summary (line 12) says the examples show exact rank-`k` recovery almost surely. Its assigned exact-recovery example relies on the unestablished Gaussian probability-law normalization. The B-page prose was not edited; this page needs owner repair after that dependency is resolved.

## Blocker and coverage limit

The Gaussian-law normalization and algorithm-measurability gaps require separate proof results outside the current 21-item assignment. The B-page summary is also outside this reader's edit scope. The item edits changed provenance metadata in the assigned carriers only; the batch manifest still contains its original provenance labels and may need owner reconciliation if a later gate requires metadata parity.

I reviewed all assigned pages/items and the direct supplier statements needed for their proofs. I did not audit the entire transitive repository dependency closure or unrelated published mathematics; conclusions are limited to the assigned carriers and the dependency/source sections stated above.
