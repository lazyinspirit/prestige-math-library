# Step 3a reader report — batch 32

Run: statistical-models-experiments-62

## Inventory opened

Assigned pages:

- library/statistical-models-and-experiments/nelson-aalen-kaplan-meier-greenwood.md (A).
- library/statistical-models-and-experiments/nelson-aalen-kaplan-meier-greenwood-examples.md (B).

Assigned items, read supplier-first:

- def-nelson-aalen-kaplan-meier-greenwood-estimators.
- lem-finite-support-risk-set-proportion-limits.
- thm-finite-support-nelson-aalen-kaplan-meier-consistency.
- lem-uniform-right-censoring-risk-set-convergence.
- thm-pointwise-nelson-aalen-kaplan-meier-greenwood-limit.
- ex-kaplan-meier-hand-risk-set-and-support-loss.

Dependency statements and proofs opened to check these claims:

- Observation/statistic interfaces: def-event-time-observation-schemes, def-statistic-and-estimator, def-identically-distributed-and-iid-random-variables, def-axiom-of-choice, and def-choice-function.
- Counting-process assumptions and predictable integrands: def-counting-process-intensity-and-compensator-contract, def-progressively-measurable-and-predictable-process, def-continuous-time-filtration-and-all-pairs-martingale, def-continuous-time-adapted-process-and-martingale, def-conditional-expectation-as-an-ae-class, def-product-sigma-algebra-and-finite-product-sigma-algebras, def-continuous-time-stopping-time, and thm-generated-sigma-algebra-exists-and-is-minimal.
- Bracket and stopping arguments: thm-compensated-counting-process-brackets, def-optional-and-predictable-brackets-for-counting-processes, lem-continuous-predictable-bracket-uniqueness, lem-continuous-finite-variation-martingale-is-zero, lem-elementary-counting-integral-preserves-martingales, lem-finite-variation-integration-by-parts-for-counting-process-martingales, lem-bounded-stopping-preserves-cadlag-square-integrable-martingales, thm-doob-lp-maximal-inequality, thm-taking-out-what-is-known, thm-monotone-convergence-for-the-integral, and def-bounded-variation-and-total-variation.
- Integral completion and asymptotic limits: def-elementary-predictable-counting-process-integral, lem-elementary-counting-process-integral-isometry, def-l2-counting-process-integral, lem-predictable-step-processes-dense-in-compensator-l2, thm-l2-counting-process-integral-isometry, thm-riesz-fischer-completeness-of-l-p, cor-conditional-lp-contraction, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-dominated-convergence, thm-iid-terminal-influence-limit, thm-multivariate-iid-central-limit-theorem, thm-vector-slutsky, thm-first-and-second-order-delta-method-for-random-vectors, def-independent-families-of-event-classes, def-asymptotically-linear-estimator-and-influence-function, def-covariance-matrix-of-a-random-vector, and def-op-and-little-op-stochastic-bounds.
- Current-run consumers checked for the estimator endpoint change: alg-aalen-johansen-cumulative-incidence-estimator, ex-competing-event-risk-versus-cause-incidence, and ex-logrank-crossing-hazards-zero-score.
- The assigned contract artifact research/statistical-models-experiments-62-batch-32.proof-contracts.json was opened and updated with current source quotes and endpoint-boundary evidence.

## Findings and edits

The estimator definition admitted event times in [0,∞) through def-event-time-observation-schemes, and its discrete-support discussion allowed an event support point at zero. Its formulas nevertheless integrated and multiplied only over (0,t]. For T=0 almost surely and C=1 almost surely, the old Kaplan–Meier formula was identically 1 while S(0)=P(T>0)=0; the old Nelson–Aalen sum also omitted the baseline hazard increment q_1=1.

I repaired def-nelson-aalen-kaplan-meier-greenwood-estimators: dN_n is now the finite event-counting measure on [0,∞), its time-zero atom is explicit, and the Nelson–Aalen, Kaplan–Meier, and Greenwood formulas include [0,t]. The text states that this agrees with the usual (0,t] formulas when there is no baseline event and notes that a baseline event gives N_i(0)=1, outside a model contract that requires N_i(0)=0. I also broadened the finite-support risk-set lemma and consistency theorem to allow a_1=0; the theorem's induction now starts from P(T≥a_1)=1 and explicitly handles the baseline event update. The estimator's Greenwood description now says its asymptotic interpretation requires assumptions that justify it and is not asserted by the formula alone.

The endpoint and model qualifications were aligned in the assigned finite-support theorem, pointwise theorem, and hand example facts. The pointwise theorem assumes T_i>0 almost surely, so its proof is unchanged and has no time-zero event contribution. The hand example has events only at 1 and 2, so its computations are unchanged. The Aalen–Johansen procedure already includes baseline events; with no baseline event, its comparison to the (0,t] formulas remains valid. The other checked consumers use positive event times under their stated examples.

The statistical source checks support the repair and caveat:

- Lu Tian, STAT331 Unit 3: Kaplan–Meier (KM) Estimator, PDF p. 1 gives the IID independent-censoring setup, permits a first mass point v_1=0, defines its first discrete hazard as P(T=v_1), and includes it in the product limit. PDF pp. 10–11 derive Greenwood's formula as an approximation. [Source PDF](https://web.stanford.edu/~lutian/coursepdf/unit5.pdf).
- Qiqing Yu, Survival Analysis, §4.2.2, finite-support proof of Theorem 1 (PDF pp. 35–36 in the cited copy), writes the product limit over every support point a_k≤t and proves its finite-support limit by the strong law without excluding a zero support point. [Source PDF](https://people.math.binghamton.edu/qyu/ftp/surv5.pdf).
- Lu Tian, STAT331 Unit 12: 1-Sample Problem: General Asymptotic Results, PDF pp. 4–9 and 12, supplies the cited continuous-time Nelson–Aalen and Kaplan–Meier asymptotic context; the assigned pointwise theorem provides its own fixed-time argument under its explicit model contract. [Source PDF](https://web.stanford.edu/~lutian/coursepdf/stat331-onesample.pdf).

The proof contract was synchronized for the changed definitions and their assigned citations; a stale copied quote for the current compensator-contract definition was also synchronized. No changed item had a verification.judge record to remove.

## Page verdicts

- A page nelson-aalen-kaplan-meier-greenwood: sound after the estimator endpoint repair. Its summaries of finite-support consistency, the continuous-time pointwise limit, and Greenwood's non-exact variance interpretation agree with the reviewed items. No page prose edit was needed.
- B page nelson-aalen-kaplan-meier-greenwood-examples: sound. Its summary matches the hand calculation and the two event laws with identical observed-data laws and distinct survival tails. No page prose edit was needed.

## Validation and blocker

- Reflow: all five changed items reported unchanged and exited 0.
- Precheck: the definition reported 0 checked, 0 failing; the other four items each reported PASS and 0 failing.
- Final proof layout: 5 items, 17 steps, 0 defects.
- No blocker and no uneditable defect remains.

Coverage limitation: I reviewed the direct cited targets and the current-run counting-process bracket and L²-integration proofs needed for the pointwise result, but did not re-audit unrelated transitive proofs behind published interfaces.
