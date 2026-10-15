# Step 3a reader report — batch 29

Run: statistical-models-experiments-62. Scope: batch 29 only.

## Opened inventory

Pages:

- A: library/statistical-models-and-experiments/parametric-survival-and-reliability.md — parametric-survival-and-reliability.
- B: library/statistical-models-and-experiments/parametric-survival-and-reliability-examples.md — parametric-survival-and-reliability-examples.

Assigned items read in supplier-first order:

1. items/def-parametric-survival-and-reliability.md
2. items/thm-exponential-and-weibull-survival-laws.md
3. items/thm-survival-cumulative-hazard-identity.md
4. items/thm-jump-hazard-survival-product.md
5. items/thm-censored-exponential-likelihood-and-mle.md
6. items/ex-exponential-weibull-hazards-and-censored-likelihood.md
7. items/ex-zero-exposure-censored-mle-boundary.md

The cross-batch draft supplier items/def-event-time-observation-schemes.md (batch 28) was opened at its Definition, especially the nonnegative event-time domain and right-censoring map/tie convention at lines 34 and 38. Its consumed interface matches the assigned items.

The relevant Definition/Statement sections of the 49 unique manifest-listed or newly required supplier items were opened. These include: def-cumulative-distribution-function-of-a-random-variable, def-event-time-observation-schemes, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-measure-with-density, def-parametric-statistical-model, def-countable-choice, def-borel-sigma-algebra, def-real-power, def-absolutely-continuous-function, def-dependent-choice, def-dominated-statistical-experiment, def-independent-random-elements, def-likelihood-density, def-statistical-experiment, def-natural-logarithm, and def-real-exponential-function-and-e; prop-measure-monotonicity, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, cor-integral-over-a-null-set-vanishes, cor-mean-value-theorem, cor-exponential-reciprocal-and-positivity, cor-exponential-is-a-bijection-onto-positive-reals, and cor-integral-logarithm-is-strictly-increasing; and thm-probability-law-and-distribution-function-correspondence, thm-real-power-continuity-and-derivatives, thm-derivative-of-exponential, thm-chain-rule, thm-exponential-is-strictly-increasing, thm-logarithm-derivative-and-integral, thm-integral-logarithm-is-unbounded, thm-integral-logarithm-product-law, thm-integral-logarithm-derivative-and-normalisation, cor-integral-logarithm-reciprocals-and-integer-powers, thm-exponential-limits-and-range, thm-ftc-second-part, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-monotone-convergence-for-the-integral, thm-c1-lipschitz-ac-bv-hierarchy, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-lebesgue-measure-of-a-box-of-every-kind, thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures, thm-continuity-from-below-for-measures, thm-independent-random-elements-have-product-joint-law, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-monotone-real-functions-are-borel-measurable, thm-composition-with-borel-functions-preserves-measurability, thm-integration-against-a-density, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, and thm-arithmetic-and-lattice-operations-preserve-measurability. The additional transitive Definition/Statement sections opened were def-law-or-distribution-of-a-random-element and thm-indefinite-integral-of-a-nonnegative-function-is-a-measure.

Run evidence reviewed as context, not verdict: research/statistical-models-experiments-62-batch-29.pages.json, the batch proof contracts, notes, cross-batch dependency record, and coverage record. The actual carriers and dependency statements above controlled the mathematical review.

## Repairs and evidence

- thm-exponential-and-weibull-survival-laws: its construction restricted the density measure to Borel sets without establishing Borel measurability, and treated Lebesgue measure as a measure without making the Countable Choice result explicit. The cited definition def-lebesgue-measure-and-the-lebesgue-sigma-algebra states that those properties are not part of the definition (Definition, lines 52–59). I added the local facts and dependencies to thm-lebesgue-measure-is-a-complete-measure (Statement, lines 35–46) and thm-borel-sets-are-lebesgue-measurable (Statement, lines 35–43), and updated step 3.1 and its proof contract.

- thm-survival-cumulative-hazard-identity: step 1.1 invoked absolute continuity without stating local integrability; it now derives $f\in L^1[0,x]$ from the probability-mass bound. Step 1.2 needed measurability of the survival, reciprocal, and density-hazard product; it now proves survival measurability from its monotonicity and interval preimages, then cites the product-measurability result. Step 3.1 used the inverse relation between logarithm and exponential and $\log 1=0$ without citing their definitions; those facts are now explicit. The proof also isolates the immediate $t=0$ case before applying the positive-interval FTCs. The supplier statements are thm-first-fundamental-theorem-of-calculus-for-l-one, thm-arithmetic-and-lattice-operations-preserve-measurability, def-natural-logarithm, and def-real-exponential-function-and-e. The affected proof contract was updated.

- thm-censored-exponential-likelihood-and-mle: the censoring measure's measurable space and the observation-space sigma-algebra were implicit; the statement now specifies Borel measures and the Borel/discrete product sigma-algebra. The event and censor density products, and the finite product likelihood density, now have an explicit product-measurability supplier. The proof also states that its event-density version at $u=0$ differs from the theorem's displayed version only on the Lebesgue-null singleton, justified by thm-lebesgue-measure-of-a-box-of-every-kind. Its affected proof contract was updated.

- library/statistical-models-and-experiments/parametric-survival-and-reliability.md: the summary now states the initial-survival and choice hypotheses, the first-zero interval and finite-endpoint divergence, and the common censor dominator used by the likelihood result.

No stale verification.judge record was present in the three changed items. Reflow reported unchanged for each changed item; precheck passed for all three. The final batched proof-layout check covered 3 items and 21 steps with 0 defects.

## Unedited findings and page verdicts

No confirmed mathematical defect remains unedited. The draft batch-28 event-time supplier's consumed Definition interface is adequate; no in-run-dependency finding is raised. No published dependency defect was found.

- parametric-survival-and-reliability (A): pass after the summary repair; it now accurately limits the cumulative-hazard claim and likelihood assumptions.
- parametric-survival-and-reliability-examples (B): pass; the summary matches the finite-atom, hazard, and two zero-failure calculations. B-page prose was not edited.

## Blocker

The corrected item deps now include direct suppliers absent from the unchanged batch manifest: thm-exponential-and-weibull-survival-laws adds thm-lebesgue-measure-is-a-complete-measure and thm-borel-sets-are-lebesgue-measurable; thm-survival-cumulative-hazard-identity adds def-natural-logarithm, def-real-exponential-function-and-e, and thm-arithmetic-and-lattice-operations-preserve-measurability; thm-censored-exponential-likelihood-and-mle adds thm-arithmetic-and-lattice-operations-preserve-measurability. The reader edit scope covered assigned item/A-page content and proof-contract updates, not the batch manifest, so the owner must reconcile these direct-dependency entries before dependency-manifest validation.

## Coverage limits

I checked the relevant local Definition/Statement passages and proof loci needed for this batch, but did not re-audit every transitive proof behind published background results or open the bibliography PDFs. No proof here relies on an external source in place of a local result; no web search was needed to resolve mathematical uncertainty.
