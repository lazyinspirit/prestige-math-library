# Step 5a reader report — batch 3

Run: `frontier-36-complete`  
Batch: `3`  
Role: `reader-3`

## Scope and opened inventory

I read `research/frontier-36-complete-batch-3.pages.json` and `briefs/reader.md`, then opened both assigned page files and all 37 item files named by the manifest. I read the current item mathematics and followed the cited dependency arguments needed to check the claims; the manifest and proof contracts were used only to navigate and identify obligations.

Assigned pages:

- A page: `library/probability/recurrence-transience-and-hitting-times-for-markov-chains.md`
- B page: `library/probability/recurrence-transience-and-hitting-times-for-markov-chains-examples.md`

Assigned A-page items (27):

1. `def-transition-matrix-and-n-step-transition-probabilities`
2. `lem-matrix-chapman-kolmogorov-equations`
3. `def-accessibility-communication-and-irreducibility`
4. `lem-communication-is-an-equivalence-relation`
5. `def-hitting-return-and-visit-times`
6. `def-recurrent-and-transient-state`
7. `thm-renewal-decomposition-at-successive-return-times`
8. `thm-recurrence-transience-equivalent-criteria`
9. `def-green-kernel-of-a-transient-chain`
10. `lem-green-kernel-resolvent-identity`
11. `thm-recurrence-and-transience-are-class-properties`
12. `cor-an-irreducible-chain-is-either-recurrent-or-transient`
13. `thm-hitting-probability-is-the-minimal-nonnegative-harmonic-extension`
14. `lem-finite-irreducible-chain-hitting-time-geometric-tail`
15. `thm-dirichlet-problem-for-finite-state-hitting-probabilities`
16. `def-period-of-a-state`
17. `lem-period-is-constant-on-a-communicating-class`
18. `def-aperiodic-chain`
19. `def-simple-symmetric-walk-on-zd`
20. `cor-recurrence-of-the-one-dimensional-simple-symmetric-random-walk`
21. `cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk`
22. `cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three`
23. `def-nonnegative-discrete-drift-for-countable-chains`
24. `thm-first-step-equations-for-nonnegative-exit-costs`
25. `thm-superharmonic-majorants-bound-exit-costs`
26. `cor-expected-exit-time-solves-the-poisson-equation`
27. `thm-lyapunov-drift-bound-for-markov-chain-hitting-times`

Assigned B-page items (10):

1. `ex-communicating-classes-of-a-finite-chain`
2. `ex-gamblers-ruin-hitting-probabilities-from-harmonicity`
3. `ex-birth-and-death-chain-recurrence-criterion`
4. `ex-green-kernel-for-a-biased-random-walk-on-the-integers`
5. `ex-period-two-of-simple-random-walk-on-a-bipartite-graph`
6. `ex-lazy-chain-is-aperiodic`
7. `cex-recurrence-is-not-a-property-shared-by-different-communicating-classes`
8. `cex-a-bounded-harmonic-boundary-value-problem-can-be-nonunique-without-almost-sure-boundary-hitting`
9. `cex-a-transient-chain-can-return-with-positive-probability`
10. `ex-negative-drift-reflected-walk-has-a-finite-mean-small-set-hitting-time`

For the kernel, path-law, stopping-time, return-series, and counting arguments, I also opened the relevant current dependency statements and proofs, including `thm-chapman-kolmogorov-equations`, `lem-matrix-chapman-kolmogorov-equations`, `thm-discrete-strong-markov-property`, `thm-markov-property-for-bounded-future-path-functionals`, `lem-bounded-function-form-of-the-markov-property`, `thm-finite-dimensional-laws-of-a-markov-chain`, `def-discrete-stopping-time`, `def-sigma-algebra-at-a-stopping-time`, `lem-stopped-random-variable-is-measurable-at-the-stopping-time`, `def-time-homogeneous-markov-chain-with-transition-kernel`, `def-initial-distribution-of-a-markov-chain`, `def-iterated-transition-kernels`, `def-composition-of-probability-kernels`, `lem-kernel-composition-is-well-defined-and-associative`, `thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums`, `cor-canonical-markov-chain-on-path-space`, and `def-stochastic-process-and-finite-dimensional-distributions`.

I also checked the measure-limit results used in the countable-sum and stopped-process arguments (`thm-monotone-convergence-for-the-integral`, `thm-continuity-from-above-for-measures`, `thm-tonelli-for-nonnegative-double-series`, `thm-conditional-monotone-convergence`, `thm-fatou-lemma`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, and `thm-measurability-of-integration-against-a-kernel`). For the lattice-walk estimates I opened `thm-weighted-am-gm-real`, `thm-real-stirling-formula`, `lem-stirling-formula-up-to-a-positive-constant`, `lem-stirling-constant-from-wallis`, `cor-central-binomial-coefficient-asymptotic-from-wallis`, `thm-wallis-product-for-pi`, `lem-wallis-integrals-recurrence-and-squeeze`, `thm-binomial-closed-formula`, `def-binomial-coefficient`, `def-multinomial-coefficient`, `thm-multinomial-theorem`, `thm-p-series-rational`, `thm-direct-comparison-test`, and `thm-vandermonde-identity`. `thm-dominated-convergence` and `cor-layer-cake-formulas-for-random-variables` were also opened where relevant to expectation claims.

## Findings and edits

### Repaired: higher-dimensional simple-walk direction indices

In `items/cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three.md`, the authored kernel and related direction-coordinate formulas used a zero-based range `j<d`, while the assigned definition `items/def-simple-symmetric-walk-on-zd.md` defines the standard basis as `e_1,...,e_d` and gives transition mass for `j=1,...,d`. The old one-state contract also named `e_0`, which is outside that definition. This was a real indexing mismatch: as written, the kernel did not unambiguously give the declared `2d` neighbors and could invoke an undefined basis vector.

I changed the kernel and all linked direction sums/products to the consistent range `j=1,...,d`, made the standard basis range explicit, and changed the multinomial composition tuple to `a_1,...,a_d`. I updated the corresponding proof-contract derivation and changed its one-state witness from `e_0` to `e_1`. This is supported by the assigned walk definition and independently matches Durrett, *Probability: Theory and Examples*, 5th ed., §5.4, Example 5.4.2 (printed p. 288), which assigns probability `1/(2d)` to each of `±e_j`, `j=1,...,d`. The rest of the count, balanced multinomial maximum, Stirling estimate, and Green-series argument checks with these ranges. No stale `verification.judge` record was present in this item to remove.

Required validation after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three.md` — passed.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three.md` — passed: 1 checked, 0 failing.

No other assigned item or page prose was edited. No uneditable mathematical defect remains from this review.

## Page verdicts

- A page `recurrence-transience-and-hitting-times-for-markov-chains`: no prose defect found. Its summary accurately describes the recurrence/transience criteria, communicating classes, Green kernels, periods, simple lattice walks, and exit-cost/Lyapunov results represented by the assigned items.
- B page `recurrence-transience-and-hitting-times-for-markov-chains-examples`: no prose defect found. Its overview matches the examples and counterexamples in the assigned B-page items. The checked examples derive their conclusions locally where cited source passages omit a needed factor or hypothesis; no source-dependent defect remains in the page prose.

## Blocker and coverage limitation

The requested Autopilot status recomputation could not establish live run status: `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run frontier-36-complete --state-dir .autopilot/frontier-36-complete` exited 2, reporting that the workflow revision differs and historical receipts cannot be adopted under the new stage numbering, then that no run is configured and no `status.md` exists. The dispatch manifest and current assigned artifacts were still available, and this limits run-state verification only. I read both assigned pages, all 37 assigned item files, the listed load-bearing dependencies, and the cited source passages used for the audited claims; no further blocker affected the mathematical review.

## Source passages checked

- Rick Durrett, *Probability: Theory and Examples*, 5th ed., §§5.2–5.4: successive-return factorization (§5.2, Theorem 5.2.6, printed p. 278); recurrence/Green criteria (§5.3, Theorems 5.3.1–5.3.2, printed pp. 281–282); one-dimensional escape calculation (§5.3, printed pp. 285–286); simple-walk return probabilities and higher-dimensional transience (§5.4, printed pp. 288–290). Official PDF: <https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf>.
- David Levin, Yuval Peres, and Elizabeth Wilmer, *Markov Chains and Mixing Times*, 2nd ed.: period invariance (§1.3, Lemma 1.6, p. 7); communication classes (§1.7, pp. 15–16); gambler's ruin (§2.1, Proposition 2.1, p. 21); harmonic extension (§9.2, Proposition 9.1, pp. 117–118); biased-walk examples (§§9.4–9.5); recurrence examples (§21.1, pp. 291–293). Official PDF: <https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf>.
- Jean Roch, *Lecture Notes on Measure-Theoretic Probability Theory*, Note 24: first-step equations (§2, Theorem 24.4, pp. 3–4); finite-target hitting tail and superharmonic bounds (§3, Lemma 24.6 and Theorems 24.7–24.8, pp. 5–7). Official PDF: <https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf>. The assigned local proof supplies its own nonempty-target hypothesis and uses a finite-time Fatou argument where the source's displayed limiting equality needs care.
