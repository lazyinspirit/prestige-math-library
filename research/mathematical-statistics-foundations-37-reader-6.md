# Step 3a reader report — batch 6

Run: `mathematical-statistics-foundations-37`  
Batch: `6`  
Role: `reader-6`

## Opened inventory

Assigned pages opened in full:

- `library/mathematical-statistics/finite-sample-point-estimation-and-unbiased-optimality.md`
- `library/mathematical-statistics/finite-sample-point-estimation-and-unbiased-optimality-examples.md`

All ten assigned items were opened. The batch items were read in their declared dependency levels:

- `lem-dirac-integral-evaluation`
- `lem-statistic-induces-deterministic-procedure`
- `def-bias-and-mean-squared-error`
- `thm-bias-variance-decomposition`
- `def-unbiased-estimator-and-umvu`
- `thm-rao-blackwell`
- `thm-lehmann-scheffe`
- `ex-binomial-sample-proportion`
- `ex-biased-estimator-lower-mse`
- `ex-rao-blackwell-bernoulli-observation`

Current-run suppliers opened as needed:

- `def-statistical-experiment`
- `def-parametric-statistical-model`
- `def-randomized-procedure-as-a-markov-kernel`
- `def-estimand-on-a-statistical-model`
- `lem-procedure-action-law-is-measurable`
- `def-statistic-and-estimator`
- `def-loss-function-and-risk`
- `def-sufficient-statistic`
- `def-complete-statistic`

Published mathematical suppliers opened as needed:

- `def-sigma-algebra`, `def-measurable-space`, `def-measure`, `def-probability-measure`, `def-measure-kernel-and-probability-kernel`, `def-measurable-function-between-measurable-spaces`
- `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `def-nonnegative-simple-measurable-function`, `def-integral-of-a-nonnegative-simple-function`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-moments-variance-and-covariance`, `def-variance-and-covariance`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `cor-cauchy-schwarz-inequality-for-l-two`
- `def-sigma-algebra-generated-by-a-function`, `def-conditional-expectation-given-a-sigma-algebra`, `def-conditional-expectation-as-an-ae-class`, `def-axiom-of-choice`, `cor-conditional-lp-contraction`, `thm-conditional-expectation-is-the-l2-orthogonal-projection`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-standard-borel-space`
- `def-bernoulli-and-binomial-random-variables`, `def-independence-of-finite-random-variables`, `lem-bernoulli-and-binomial-mean-and-variance`, `cor-covariance-vanishes-under-independence`, `thm-variance-of-a-finite-sum`, `thm-factorization-of-expectations-for-independent-variables`, `lem-variance-and-covariance-identities-for-random-variables`, `thm-covariance-bilinearity-and-symmetry`, `thm-linearity-of-expectation`, `cor-expectation-linearity-monotonicity-and-modulus-bound`

The batch manifest, reader brief, batch cross-dependency record, batch coverage record, relevant proof contracts, SCHEMA sections, and the applicable WORKFLOW section were also opened. The live autopilot status was recomputed from `.autopilot/` and confirmed that stage 3a-read is active.

## Repairs and evidence

- `thm-bias-variance-decomposition`: added the Cauchy–Schwarz dependency and an explicit probability-space bound showing (E_\theta|T|\leq(E_\theta T^2)^{1/2}<\infty). The centering step now states why the mean of (T-\mu) is zero and why the squared terms are integrable. The affected batch proof contract was updated. There was no stale `verification.judge` record. Reflow reported unchanged; precheck passed.
- `thm-rao-blackwell`: made explicit that each pushforward (P_\theta^S) is a probability measure and that the common conditional kernel is a parameter-independent randomized procedure on the pushforward experiment, so the measurable-kernel supplier applies. The proof now establishes integrability of (g(S)) before invoking the conditional-expectation definition and states why (g(S)-\psi(\theta)) lies in the (L^2(\sigma(S))) subspace. Added the direct randomized-procedure dependency and updated the affected proof contract. There was no stale `verification.judge` record. Reflow reported unchanged; precheck passed.
- `thm-lehmann-scheffe`: made the uniqueness step explicit: equality in Rao–Blackwellization makes the competitor measurable with respect to (\sigma(S)); its measurable integrable representative is its own conditional expectation, and uniqueness of versions identifies it with the complete-statistic representative. Added the conditional-expectation dependencies and updated the proof contract. There was no stale `verification.judge` record. Reflow reported unchanged; precheck passed.
- `ex-rao-blackwell-bernoulli-observation`: specified the finite product data space, restricted the endpoint conditional-law description to supported fibers, and checked event-evaluation measurability of the finite kernel. The verification now checks finite variance, standard-Borel hypotheses, and the Bernoulli mean explicitly. Added the standard-Borel dependency and updated the proof contract. There was no stale `verification.judge` record. Reflow reported unchanged; precheck passed.

Final proof-layout run on all four changed item paths: `4 items, 12 steps, 0 defects`.

No page prose or other assigned items were edited.

## Uneditable dependency findings

1. `thm-covariance-bilinearity-and-symmetry`, Statement, lines 28–30: the statement gives no common probability-space or square-integrability hypothesis. Its covariance supplier `lem-variance-and-covariance-identities-for-random-variables` explicitly assumes square-integrable variables on one probability space. A general formulation needs a common probability space and (L^2) variables; alternatively state the finite-probability-space scope. Assigned consumer: `ex-binomial-sample-proportion` through the variance-sum dependency.
2. `thm-variance-of-a-finite-sum`, Statement, lines 30–33: “finite family” specifies the number of variables, not a finite probability space or finite moments. The cited variance/covariance definition is restricted to one finite probability space, and the general moment definition requires square integrability. State a common probability space and square-integrability (or explicitly restrict to a finite probability space). The assigned binomial example itself has bounded coordinates on a finite product space, so this omission does not invalidate that local calculation. Assigned consumer: `ex-binomial-sample-proportion`.
3. `thm-variance-of-a-finite-sum`, Sources, lines 21–22: the Matoušek–Vondrák reference gives “Section 6.1,” but the retrievable CMU course copy with the same filename has the variance-sum formula at Lemma 5.1.3 and labels Section 6.1 as the Lovász Local Lemma. The item needs an edition-specific locator or a corrected source URL. This is a source-locator finding; the item’s local expansion proof is sound under its intended finite setting. Assigned consumer: `ex-binomial-sample-proportion`.
4. `lem-bernoulli-and-binomial-mean-and-variance`, Facts [L2] and Proof step 3.1, lines 39 and 53: the cited `thm-linearity-of-expectation` assumes a finite probability space, while the lemma’s statement permits Bernoulli variables on a general probability space. The general (L^1)-linearity result is available in the transitive supplier closure, but it is not the cited [L2]; replace that citation with the general result, or state a finite-product model hypothesis. The assigned consumer uses the Bernoulli part, whose local calculation is valid. Assigned consumer: `ex-biased-estimator-lower-mse`.

## Source checks

The local measure argument was checked against [Axler, *Measure, Integration & Real Analysis*, Example 2.55](https://measure.axler.net/MIRA.pdf) and [Tao, *An Introduction to Measure Theory*, Examples 1.4.22 and 1.4.29](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf). The statistical theorem citations were checked at [Deligiannidis, Theorem 6.1 and proof, PDF pp. 34–35, and Theorem 6.5, PDF p. 38](https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf), [Gregory, STAT 713 Lecture 6, slides 8–11](https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_06_slides_annotated.pdf), [Martin, *Advanced Statistical Theory*, Definition 5.1, PDF p. 101, and Theorem 5.1, PDF p. 102](https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf), and [Shao, STAT 709 Lecture 15, Theorem 3.1, PDF p. 2](https://pages.cs.wisc.edu/~shao/stat709/stat709-15.pdf). The variance identity and source-locator issue were checked against the [CMU Matoušek–Vondrák PDF copy](https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15850-f20/www/handouts/matousek-vondrak-prob-ln.pdf). The shorter URL in the published item did not open; the indexed CMU course copy with the same filename was readable, so the edition/URL association remains uncertain and the locator finding is reported with that limitation.

## Page verdicts

- `finite-sample-point-estimation-and-unbiased-optimality` (A page): pass after the two theorem proof repairs. The page summary accurately describes the items’ risk, unbiasedness, common-kernel, completeness, finite-moment, and AC scopes. No remaining A-page prose defect.
- `finite-sample-point-estimation-and-unbiased-optimality-examples` (B page): pass after the Bernoulli conditional-law example repair. The summary accurately describes all three examples and their endpoint behavior. The published variance-sum source findings above remain for routing; the binomial example supplies a finite product model with bounded variables, so its use is valid.

## Blocker

No content blocker.

## Coverage note

Some published covariance/variance and conditional-expectation consumers were opened before or in parallel with their secondary suppliers, and the finite standard-Borel definition was opened after the Bernoulli conditional-law example prompted that check. Those supplier statements and proofs were reviewed before final verdicts, but file-access order was not strictly supplier-first for those branches; I did not reread the consumers under the one-read-per-session constraint. I did not re-audit every foundation beneath the published measure and Lp theorems. The original short CMU URL for the Matoušek–Vondrák source did not open; an indexed CMU course copy with the same filename was used, leaving edition/URL association uncertain as recorded above.
