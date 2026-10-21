# Step 3a reader report — batch 9

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `9`  
Role: reader

## Opened inventory

The current run status showed Step 3a active with no worker in flight. I read the batch manifest, reader brief, batch 9 proof contracts and author notes, and both assigned page carriers:

- `library/inverse-problems/minimax-estimation-over-inverse-source-classes.md` (A page, draft)
- `library/inverse-problems/minimax-estimation-over-inverse-source-classes-examples.md` (B page, draft)

The seven assigned items were reviewed in their declared dependency levels:

- Level 3: `lem-ip-univariate-gaussian-projection-minimax-comparison`
- Level 5: `lem-ip-power-source-class-as-statistical-ellipsoid`; `thm-ip-general-source-minimax-comparison`
- Level 6: `cor-ip-mild-and-severe-estimation-rates`
- Level 7: `ex-ip-sobolev-minimax-rates`; `ex-ip-analytic-minimax-rates`; `ex-ip-power-source-minimax-rates`

I also opened the A page's three required pages: `deterministic-source-conditions-and-optimal-recovery`, `gaussian-sequence-models-and-risk-decomposition`, and `minimax-lower-bounds-and-information-theoretic-methods`.

The cited direct supplier statements and definitions were consulted in the batch contract's exact locations. They include the run-local model, ellipsoid, cutoff algorithm and exact-risk theorem; power-source definitions and minimum-norm lemma; compact SVD and spectral calculus; Bayes/minimax, loss and randomized-rule definitions; and the cited measure, integration, calculus, power, exponential, logarithm, geometric-series, finite-measure uniqueness, and finite-dimensional-extrema results. The source IDs are: `alg-ip-svd-truncated-estimator`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `cor-exponential-reciprocal-and-positivity`, `cor-integral-over-a-null-set-vanishes`, `cor-mean-value-theorem`, `def-bayes-and-minimax-risk`, `def-borel-sigma-algebra`, `def-canonical-natural`, `def-compact-spectral-filter-and-qualification`, `def-countable-choice`, `def-factorial-and-falling-factorial`, `def-hyperbolic-functions`, `def-integer-power`, `def-ip-gaussian-sequence-inverse-model`, `def-ip-isonormal-white-noise-experiment`, `def-ip-power-source-set`, `def-ip-statistical-ellipsoid-class`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-loss-function-and-risk`, `def-measurable-space`, `def-mixed-improper-integral`, `def-natural-logarithm`, `def-randomized-procedure-as-a-markov-kernel`, `def-real-exponential-function-and-e`, `def-real-power`, `def-statistical-experiment`, `lem-finite-measure-uniqueness-on-a-pi-system`, `lem-ip-index-source-elements-are-minimum-norm`, `lem-limit-preserves-order`, `lem-of-naturals-positive`, `lem-power-laws`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-algebra-of-derivatives`, `thm-borel-sets-are-lebesgue-measurable`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-chain-rule`, `thm-continuous-preimages-of-borel-sets-are-borel`, `thm-derivative-of-exponential`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `thm-exponential-addition-formula`, `thm-exponential-beats-every-polynomial`, `thm-exponential-is-strictly-increasing`, `thm-gaussian-integral`, `thm-geometric-series`, `thm-hyperbolic-identities-and-derivatives`, `thm-induction-principle`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-natural-logarithm-laws`, `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`, `thm-real-power-continuity-and-derivatives`, `thm-real-power-laws`, `thm-singular-value-decomposition-for-compact-operators`, and `thm-substitution-for-improper-integrals`.

## Mathematical review

- The scalar endpoint-prior argument computes the posterior mean and variance for the two-point prior, controls the Gaussian integral using `cosh(x) <= exp(x^2/2)`, and obtains the stated `1/sqrt(2e)` lower bound. The zero-radius case is covered. The risks of the zero and identity estimators are respectively `r^2` and `tau^2`.
- The power-source lemma proves both coefficient inclusions using the fixed right singular basis and the minimum-norm convention. The weights `s_j^{-nu}` are positive and nondecreasing.
- The general comparison theorem's finite-support maximizer, saturation exchange, one-sided directional bound, and finite-product prior argument support the stated `2.2` comparison. The likelihood-ratio extension from finite-coordinate cylinders uses the stated finite-measure uniqueness result. The `Q=0` case is separated.
- The four cutoff balances in the rate corollary have matching below/above-cutoff bounds. The three examples correctly specialize those formulas.
- I read Ding and Mathé, “Minimax rates for statistical inverse problems under general source conditions,” `https://arxiv.org/pdf/1707.01706v2`: §1, equation (9), the complete §2 proof (including Lemma 2), and §3/Table 1. This supports the model, comparison route, and rates. The local proof was checked directly.
- The cited Johnstone 2011 URL timed out. I checked the accessible 2017 draft, `https://imjohnstone.su.domains/GE_08_09_17.pdf`, §2.3 equations (2.29)–(2.33) for the two-point posterior and Bayes-risk formulas, and §4.6 for the bounded-normal-mean comparison. I could not independently confirm the 2011 draft's exact printed pagination.
- No TikZ/tikzcd diagrams occur in the assigned items or pages. The Gaussian sequence model supplier contains a coefficient-space commutative square; its labels and arrows match the coefficient maps and singular-value diagonal operator described in the text.

## Edit and evidence

In `items/ex-ip-power-source-minimax-rates.md`, the Example statement did not specify that `K` acts between real Hilbert spaces or identify `s_j` as its singular values. I added `X,Y`, the compact infinite-rank map `K:X -> Y`, and its positive singular-value sequence tending to zero. I repeated these hypotheses in `Given`. This makes the source ball and the sequence model used in the proof explicit. The evidence is the definitions in `def-ip-power-source-set` and `def-ip-gaussian-sequence-inverse-model`, together with the exact coefficient statement in `lem-ip-power-source-class-as-statistical-ellipsoid`.

I updated the two corresponding derivation claims in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-9.proof-contracts.json`. No `verification.judge` record existed on the item. The earlier hash-bound boundary records were preserved as historical evidence and were not rebound to the edited body.

Checks after the final edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-ip-power-source-minimax-rates.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-ip-power-source-minimax-rates.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/ex-ip-power-source-minimax-rates.md` — 1 item, 3 steps, 0 defects.

The only item-level reference to the repaired example outside its own carrier is its B-page inventory entry; no assigned item consumes it.

## Defect not edited

The published dependency `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` has malformed explanatory prose in its Definition at lines 41–44 and 53–60. It duplicates the “assuming countable choice” clause and leaves the sentence about the outer-measure result grammatically incomplete. The displayed Carathéodory criterion itself is intact, so this is nonfatal to the scalar proof, but the published definition's explanatory text should be rewritten clearly while retaining its Countable Choice condition and theorem reference. The assigned consumer is `lem-ip-univariate-gaussian-projection-minimax-comparison`.

## Page verdicts

- `minimax-estimation-over-inverse-source-classes` (A): pass. Its four-item inventory and three `requires` entries agree with the batch manifest. The page is frontmatter-only, has no summary body, and preserves `page_layout: compact-v1`.
- `minimax-estimation-over-inverse-source-classes-examples` (B): pass. Its three example entries and requirement on the A page agree with the batch manifest. The page is frontmatter-only, has no summary body, and preserves `page_layout: compact-v1`.

## Blocker and coverage limits

There is no mathematical blocker for the assigned claims. The repaired example's historical boundary-review records remain bound to the pre-repair item hash; I preserved them rather than asserting a new review or stamp. The original Johnstone 2011 PDF target timed out, so its exact 2011 page locators remain unverified here; the accessible 2017 draft and local proofs supplied the mathematical check. I initially opened the assigned items before several dependency files, then checked the relevant supplier statements before finalizing; I cannot claim that the file-opening sequence was supplier-first. I did not audit the entire transitive foundation beneath every published supplier.
