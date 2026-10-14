# Step 3a reader report — batch 14

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Batch: `14`

## Opened inventory

The run status was recomputed from `.autopilot/`: the run is live at `3a-read`, with no result yet for batch 14. I read the batch manifest, its proof contracts, coverage and cross-batch dependency records, and both assigned pages:

- A page: `library/mathematical-statistics/concentration-inequalities-and-tail-bounds.md`
- B page: `library/mathematical-statistics/concentration-inequalities-and-tail-bounds-examples.md`

I opened all 12 assigned items. In dependency order, the A-page items are:

1. `def-subgaussian-variable-and-vector`
2. `thm-hoeffding-independent-bounded-sums`
3. `thm-bernstein-independent-sums`
4. `lem-epsilon-net-of-unit-sphere-has-cardinality-bound`
5. `lem-doob-martingale-differences-inherit-coordinate-oscillations`
6. `thm-subexponential-independent-sums`
7. `thm-finite-subgaussian-maximum-and-epsilon-net`
8. `thm-mcdiarmid-bounded-differences`

The B-page items are `ex-rademacher-sum-concentration`, `ex-gaussian-maximum-concentration`, `ex-subgaussian-vector-norm-via-net`, and `cex-finite-variance-does-not-imply-subgaussian-tail`.

I checked the current cited supplier statements and definitions for the assigned proof inferences, including the expectation and independence conventions, finite product law, conditional expectation, conditional Hoeffding bound, Fubini, product sigma-algebras, exponential and MGF facts, Markov and probability identities, variance, Jordan content and volume, finite maxima, Cauchy–Schwarz, and the real-analysis facts used in the Gaussian computation. The conditional Hoeffding supplier proof was read in full. The exact source inventory is bound in the 12 batch contracts; strict contract validation passed for all 12.

Authoritative cross-checks consulted:

- John Duchi, [*Lecture Notes on Statistics and Information Theory*](https://web.stanford.edu/class/stats311/lecture-notes.pdf), Chapter 4, Propositions 4.1.16–4.1.18 (PDF pp. 69–70) and Proposition 4.2.5 (PDF pp. 79–80), for the restricted-MGF sub-exponential bounds and the bounded-differences/Doob-martingale route.
- Philippe Rigollet and Jan-Christian Hütter, [*High-Dimensional Statistics*](https://arxiv.org/pdf/2310.19244v1), Definition 1.2 (PDF p. 22), Lemma 1.18 (PDF pp. 34–35), and Theorem 1.13 (PDF pp. 30–31), for the proxy conventions, volumetric net comparison, and concentration context. The assigned sphere-net proof is checked from its local Jordan-volume argument.
- Jon A. Wellner, [*Empirical Processes: Theory and Applications*](https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf), Lemma 3.3 (PDF pp. 19–20), for the bounded variance-sensitive Bernstein formulation.

## Repairs

- `lem-doob-martingale-differences-inherit-coordinate-oscillations`, Proof 1.1 and 2.2: the original 1.1 asserted an (L^1) bound for section integrals without establishing it. I removed that stronger assertion and used clause 3 of the cited Fubini theorem, which directly supplies integrable section-integral versions after zeroing the exceptional set. In 2.2, I replaced the unexplained essential-infimum/supremum invocation with explicit least almost-everywhere upper and greatest almost-everywhere lower bounds. The revised proof establishes their almost-everywhere attainment by countable additivity of each pushforward law, bounds their width using positive-measure level sets and the pointwise oscillation hypothesis, and proves measurability by applying Fubini to level-set indicators. The statement and dependency set are unchanged, so the authored manifest remains aligned. The proof contract was updated with the law citation and revised derivations.
- `cex-finite-variance-does-not-imply-subgaussian-tail`, Counterexample 1.4: the original sentence used symmetry to assert $\mathbb E X=0$ before it had established that the signed expectation exists. The revised step first uses monotone convergence and the telescoping comparisons to prove $\mathbb E|X|<\infty$; it then cancels the opposite atom contributions, which are now absolutely summable, and concludes finite variance. The proof contract was updated to match.

No other confirmed defect was found in the assigned items. Neither page needed an edit.

## Page verdicts

- `concentration-inequalities-and-tail-bounds` (A): pass for page prose. Its title and summary match the eight current items and retain their independence, boundedness, variance, measurability, and choice qualifications.
- `concentration-inequalities-and-tail-bounds-examples` (B): pass for page prose. Its title and summary match the four examples/counterexample. The B page is read-only for this assignment and was not edited.

## Unedited findings and blocker

No confirmed defect remains unedited. No published or other-batch dependency defect was confirmed. There is no blocker.

## Validation

- `tools/reflow.mts` on both changed items: unchanged output.
- `tools/precheck.mts` on both changed items: pass, 0 failures each.
- `tools/proof-contract.mjs ... --strict --items <all 12 batch items>`: 12/12 checked, 0 errors, 0 warnings.
- `tools/proof-layout.mjs` on both changed items in one command: 2 items, 12 steps, 0 defects.

Coverage is limited to the assigned pages/items and their cited supplier statements/definitions needed for these proofs; I did not independently re-audit every proof in the transitive published dependency closure.
