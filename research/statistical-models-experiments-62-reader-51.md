# Step 3a reader report — batch 51

Run: `statistical-models-experiments-62`  
Role: reader  
Batch: `51`

## Run state

The autopilot status command reports the run as active in `3a-read`; no work was running when checked. The six assigned items are draft items from this run. I made no item or page edits, so no proof-contract update, reflow, precheck, or proof-layout invocation was needed.

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/temporal-point-process-intensity-and-likelihood.md` (A page)
- `library/statistical-models-and-experiments/temporal-point-process-intensity-and-likelihood-examples.md` (B page)

Assigned items, read in the batch's dependency order:

- `def-temporal-point-process-and-conditional-intensity`
- `lem-conditional-intensity-interevent-survival-and-density`
- `lem-homogeneous-poisson-ordered-event-time-density`
- `thm-conditional-intensity-interevent-law-and-point-pattern-likelihood`
- `ex-terminating-temporal-point-process-with-terminal-mass`
- `ex-poisson-and-history-dependent-temporal-intensities`

The five page prerequisites listed in the batch manifest were opened: `counting-process-compensators-and-integrals`, `poisson-and-cox-point-process-models`, `dominated-experiments-likelihood-and-sufficiency`, `brownian-motion-construction-and-continuity`, and `the-ito-integral-with-respect-to-brownian-motion`.

Direct item dependencies used by the assigned definitions and proofs were opened:

- Temporal model and compensator context: `def-counting-process-intensity-and-compensator-contract`, `def-continuous-time-filtration-and-all-pairs-martingale`, `def-continuous-time-adapted-process-and-martingale`, `def-progressively-measurable-and-predictable-process`, `def-measurable-function-between-measurable-spaces`, `def-measure-kernel-and-probability-kernel`, `def-conditional-law-given-a-random-element`, `def-absolutely-continuous-with-respect-to-a-positive-measure`, `def-radon-nikodym-derivative`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-borel-sets-are-lebesgue-measurable`, and `def-axiom-of-choice`.
- Hazard calculus and terminal-mass context: `def-absolutely-continuous-function`, `cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous`, `thm-first-fundamental-theorem-of-calculus-for-l-one`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `thm-derivative-of-exponential`, `thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant`, `lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous`, `cor-mean-value-theorem`, `thm-continuity-from-above-for-measures`, `def-countable-choice`, and `def-dependent-choice`.
- Finite-window Poisson construction: `def-random-measure-and-locally-finite-point-process`, `def-poisson-and-cox-point-process`, `def-scalar-poisson-count-law`, `lem-poisson-count-law-normalization-and-moments`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-nonnegative-weighted-sums-of-measures`, `def-dirac-measure`, and `prop-dirac-measure-is-a-probability-measure`.
- Likelihood and examples: `def-likelihood-ratio-as-rn-derivative`, `thm-pi-system-criterion-for-independent-sigma-algebras`, `thm-logarithm-derivative-and-integral`, `thm-exponential-is-strictly-increasing`, and `thm-ftc-first-part`.

The two cited source texts were opened at the relevant sections. Rasmussen, *Lecture Notes: Temporal Point Processes and the Conditional Intensity Function*, was checked at §§2.1–2.4, Proposition 2.1 and Example 2.5 (PDF pp. 3–10), and Proposition 3.1 and Example 3.1 (PDF pp. 11–13). These passages cover the conditional hazard, finite cumulative-hazard termination, event-pattern likelihood, marked factors, and homogeneous-Poisson likelihood. Kass, Eden, and Brown, *Analysis of Neural Data*, Chapter 19, was checked at §19.2.2 (ordered Poisson event times), §19.3.2 (general conditional-intensity event-time density), and §19.4 (waiting-time and joint-density derivations; PDF pp. 11–15, 19–21, and 38–39). Rasmussen states the likelihood on `[0,T)`; the assigned proof's finite-density model gives no endpoint atom, and its formula is stated as an almost-everywhere density, so the `(0,T]` convention causes no discrepancy.

## Review and evidence

- `def-temporal-point-process-and-conditional-intensity`: The definition distinguishes the supplied conditional waiting-time law and its no-event hazard from the separate compensator-martingale contract. Its point-process simplicity claim follows from the unit-jump, finite-count, càdlàg assumptions. It does not infer process existence, non-explosion, or stationarity from an intensity formula.
- `lem-conditional-intensity-interevent-survival-and-density`: Step 1 obtains the survivor as one minus the integrated finite-time density and applies the L1 fundamental theorem on compact intervals. Step 2 differentiates the product of the survivor and exponential cumulative hazard where the survivor is positive; absolute continuity and the zero-derivative theorem give the constant one. Step 3 rules out a finite zero of the survivor using local integrability, then takes the decreasing-set limit for the mass at infinity. The hypotheses and the cited calculus and measure-continuity results supply these steps.
- `lem-homogeneous-poisson-ordered-event-time-density`: The finite mixture of iid uniform configurations is a probability law; the multinomial calculation verifies independent Poisson counts on disjoint Borel sets. The diagonal-null and permutation argument gives the ordered density, with the endpoint and empty-pattern cases handled separately. The construction also proves finite count and almost-sure simplicity.
- `thm-conditional-intensity-interevent-law-and-point-pattern-likelihood`: The sequential conditional-kernel factorization includes the final no-event survivor, and the interval hazards telescope to the full integrated hazard. The unit-rate reference density is strictly positive on every simplex and at the empty pattern, so the sectionwise Lebesgue density proves domination and division by `e^{-T}` gives the stated `e^T` ratio. The marked extension explicitly assumes a conditional mark density relative to the common reference mark law and evaluates time intensities on full marked histories.
- `ex-terminating-temporal-point-process-with-terminal-mass`: The indicator intensity integrates to `t ∧ 1`; independent increments give the martingale contract, and the displayed next-event kernel is normalized, measurable, and has terminal mass `e^{-1}` from the empty history. The example does not infer an event after time one.
- `ex-poisson-and-history-dependent-temporal-intensities`: The Poisson ratio and both boundary cases of the MLE are correct. The Hawkes pre-event factors and integrated kernel are evaluated with the stated parameter restrictions. The conclusion remains conditional on a supplied compatible non-explosive law, and it does not assert existence or stability.

No confirmed defect was found in the opened direct suppliers that affects these claims. No repair was made, and there are no unedited defects to route.

## Page verdicts

- `temporal-point-process-intensity-and-likelihood` (A): Pass. The summary accurately describes the model assumptions, terminal survival, likelihood factor, and limits of an intensity specification.
- `temporal-point-process-intensity-and-likelihood-examples` (B): Pass. The summary accurately covers the Poisson likelihood and MLE, the conditional Hawkes calculation, and the positive terminal no-event mass.

## Blockers

None.

## Coverage note

I opened both assigned pages, all six assigned items, the direct item dependencies used by their arguments, all five manifest prerequisite page summaries, and the cited source passages listed above. I did not audit unrelated item collections on the Brownian-motion and Itô prerequisite pages because the assigned claims do not invoke those items.
