# Step 3a reader report — batch 16

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Batch: `16`

## Opened inventory

Reviewed both assigned pages:

- A page: `library/mathematical-statistics/chaining-uniform-laws-and-empirical-process-limits.md`
- B page: `library/mathematical-statistics/chaining-uniform-laws-and-empirical-process-limits-examples.md`

Reviewed all eleven assigned item carriers in dependency order:

- Item level 1: `def-glivenko-cantelli-class`, `thm-empirical-risk-oracle-bound`, `lem-empirical-process-bracketing-maximal-inequality`.
- Item level 2: `def-donsker-class-and-asymptotic-equicontinuity`, `thm-dudley-entropy-integral`, `thm-gc-by-bracketing-entropy`, `cex-pointwise-strong-laws-do-not-imply-uniform-law`.
- Item level 3: `lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy`, `ex-threshold-class-is-glivenko-cantelli`.
- Item level 4: `thm-empirical-process-functional-clt`.
- Item level 5: `ex-uniform-empirical-cdf-converges-to-brownian-bridge`.

Opened the direct supplier items used by these carriers. The current-run draft suppliers were `def-empirical-process-and-rademacher-process` (batch 15), `def-covering-packing-bracketing-number-and-metric-entropy` (batch 15), `def-subgaussian-variable-and-vector` and `thm-bernstein-independent-sums` (batch 14), and `def-asymptotic-distribution` (batch 13). These were reviewed as current mathematical sources, independently of the authoring notes.

The published direct suppliers opened were `thm-dominated-convergence`, `thm-almost-sure-convergence-implies-convergence-in-probability`, `lem-probability-measure-basic-identities`, `thm-layer-cake-formula-for-l-p-powers`, `thm-monotone-convergence-for-the-integral`, `cor-cauchy-schwarz-inequality-for-l-two`, `def-countable-choice`, `def-convergence-in-distribution-of-random-elements`, `def-tight-family-of-probability-measures`, `thm-jensen-inequality-for-expectation`, `cor-markov-inequality-for-random-variables`, `thm-kolmogorov-iid-l1-strong-law`, `def-axiom-of-choice`, `def-metric-completion`, `def-metric-space`, `def-multivariate-normal-law`, `def-polish-space`, `def-standard-borel-space`, `def-borel-sigma-algebra`, `cor-first-borel-cantelli-lemma-for-events`, `lem-countable-uniformly-dense-tests-on-a-compact-metric-space`, `lem-characteristic-function-of-a-normal-law`, `thm-c-k-complete-in-the-sup-metric`, `thm-complete-and-totally-bounded-implies-compact`, `thm-cramer-wold-device`, `thm-every-borel-probability-on-a-polish-space-is-tight`, `thm-euclidean-space-complete`, `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`, `thm-metric-completion-exists`, `thm-multivariate-iid-central-limit-theorem`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `thm-uniqueness-of-a-law-from-its-characteristic-function`, `def-identically-distributed-and-iid-random-variables`, `def-probability-measure`, and `lem-subset-of-countable`.

For the Gaussian increment computation, also opened the normal-density and integration interfaces used through the normal-law supplier: `def-standard-normal-and-normal-laws`, `lem-normal-density-has-total-mass-one`, `thm-integration-against-a-density`, `thm-change-of-variables-for-expectation`, `thm-substitution`, and `cor-c-one-change-of-variables-for-l-one-functions`.

Read the run's batch-16 notes, coverage record, cross-batch dependency record, and proof contracts as evidence only. The batch notes and coverage locators did not replace checking the current item statements and proofs. Repository instructions read were `CLAUDE.md` in full, `README.md` in full, the relevant item/page/check sections of `SCHEMA.md`, and the Step 3a/run-control sections of `WORKFLOW.md`.

## Review results

- `def-glivenko-cantelli-class`: definition and measurability conventions are sound. Pointwise approximation, envelope integrability, countable suprema, and the strong-to-probability implication preserve their stated hypotheses.
- `thm-empirical-risk-oracle-bound`: the deterministic two-deviation comparison is valid for the stated nonempty class, finite population-risk infimum, and approximate empirical minimizer. It assumes no exact minimizer.
- `lem-empirical-process-bracketing-maximal-inequality`: the finite Bernstein maximum estimate, cutoff decomposition, envelope tail, and entropy sums are valid. I repaired the limit passage from the finite cutoff decompositions to the empirical-process decomposition; see edits below.
- `def-donsker-class-and-asymptotic-equicontinuity`: the centered semimetric and outer-probability conventions match the empirical-process definitions and the downstream use.
- `thm-dudley-entropy-integral`: the finite maximum bound, deterministic net selection, chaining sum, and residual limit follow under the stated separability, total-boundedness, and entropy hypotheses.
- `thm-gc-by-bracketing-entropy`: the finite endpoint SLLNs and pointwise-dense-class reduction prove convergence in probability without countable choice; the separate strong-law branch uses countable choice only to select covers across countably many scales.
- `lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy`: the bracket construction, cumulative partition entropy bound, envelope-tail limit, and outer-probability transfer are sound after correcting one citation in step 5.1.
- `thm-empirical-process-functional-clt`: the quotient completion, Gaussian finite-dimensional laws, continuous extension, tightness, finite-dimensional CLT, and net approximation establish the stated process limit after the MGF and characteristic-function gaps were repaired. The precheck's canonical step renumbering was adopted and the contract follows the final numbering.
- `cex-pointwise-strong-laws-do-not-imply-uniform-law`: each fixed finite set is null almost surely, while the realized finite sample is a valid witness attaining uniform deviation one. The supremum is the constant measurable function one.
- `ex-threshold-class-is-glivenko-cantelli`: the rational pointwise-dense subclass and the finite interval brackets verify the hypotheses of the strong bracketing law.
- `ex-uniform-empirical-cdf-converges-to-brownian-bridge`: the threshold brackets have width $m^{-1/2}$ in $L^2(P)$, the square-root entropy integral is finite, and the covariance calculation is $\min(s,t)-st$.

No uneditable mathematical defect was confirmed in a dependency. There is no proposed withdrawal or unresolved item finding for batch 16.

## Repairs and evidence

1. In `items/lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy.md`, step 5.1 incorrectly cited `[F3]` (the bracketing-number definition) for convergence of the squared approximation errors. I changed that citation to `[F4]`, the dominated-convergence theorem already in the item's dependencies. Applying it to $|f_k-f|^2\le4F^2$ and $|g_k-g|^2\le4F^2$ proves the needed $L^2(P)$ convergence.

2. In `items/lem-empirical-process-bracketing-maximal-inequality.md`, step 3.1 previously applied the empirical-process map directly to an infinite cutoff decomposition. I added the finite-partial-sum argument: the sums stabilize at the first failed cutoff or telescope to the target, are bounded by $2H$ off the common null set, and converge under the empirical-process map by dominated convergence and finite-sample convergence. Monotone convergence then sums the nonnegative expected maxima; an infinite entropy tail makes the claimed upper bound immediate. The proof contract now records this use of the dominated-convergence supplier.

3. In `items/thm-empirical-process-functional-clt.md`, the original step 3.1 asserted the Gaussian MGF formula without deriving it. The new step 4.1 uses the normal-density representation in the normal-law supplier, completes the square, and evaluates the translated density integral by finite-interval substitution followed by monotone convergence. This establishes the sub-Gaussian increment hypothesis used by the chaining bound.

4. In that functional CLT, the original step 7.1 asserted $L^2$ convergence of approximating Gaussian coordinates without establishing completeness of $L^2$. The final step 8.1 instead uses the pathwise continuous extension to get almost-sure convergence of each finite linear combination, then applies dominated convergence to its bounded characteristic-function integrand. This identifies the limiting finite-dimensional Gaussian laws without an unstated $L^2$-completeness premise.

5. In the assigned A-page summary, I changed the claim that the functional theorem “states ... tightness ... hypothesis.” Tightness of the Gaussian limit is proved in the theorem; it is not an input hypothesis. The revised summary says the theorem states its finite-variance, measurability, and choice hypotheses and proves tightness and process-level convergence.

The affected proof contracts in `research/mathematical-statistics-foundations-37-batch-16.proof-contracts.json` were synchronized with the repaired derivations and final canonical step labels. None of the three repaired items had a `verification.judge` record to remove.

## Authoritative source checks

I checked the relevant statements and arguments in Jon A. Wellner, *Empirical Processes: Theory and Applications*, official University of Washington PDF: [full notes](https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf).

- Chapter 1, §2, Theorem 2.1, printed/PDF pp. 6–9: finite-dimensional convergence plus asymptotic equicontinuity on a totally bounded index pseudometric yields a tight weak process limit; the finite-net approximation proves the convergence step used here.
- Chapter 1, §3, Corollary 3.5, printed/PDF pp. 16–18: the sub-Gaussian entropy-integral maximal bound and continuous-version conclusion.
- Chapter 1, §6, Theorem 6.1, printed/PDF p. 35: finite $L^1(P)$ bracketing number at every positive scale implies the Glivenko–Cantelli law; the local proof also distinguishes its probability and strong branches.
- Chapter 1, §7, Theorems 7.4–7.6, printed/PDF pp. 52–55: the bracketing-entropy Donsker route and expected maximal bounds. The preceding proof gives the nested-partition, cutoff, and telescoping structure independently checked in the local maximal-inequality proof.

The author-hosted Pollard PDF cited by the items returned HTTP 502 when opened. I did not rely on that failed fetch; the local arguments were checked directly and the accessible Wellner source supplied the empirical-process corroboration above.

## Validation, page verdicts, and blocker

- Reflow was run for all three changed item paths; the maximal-inequality proof was reflowed and the other two were already in layout.
- Precheck passes for all three changed items.
- Final batched `node tools/proof-layout.mjs` result: 3 items, 25 steps, 0 defects.
- A page `chaining-uniform-laws-and-empirical-process-limits`: **pass after the summary repair**.
- B page `chaining-uniform-laws-and-empirical-process-limits-examples`: **pass**; its prose and all three examples agree.
- Blocker: **none**. No unresolved mathematical uncertainty remains in the assigned claims.
