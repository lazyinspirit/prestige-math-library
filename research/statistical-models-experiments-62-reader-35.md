# Step 3a reader report — batch 35

Run: `statistical-models-experiments-62`  
Batch: `35`  
Role: independent reader

## Inventory reviewed

Read the batch-35 manifest, proof contracts, coverage record, and cross-batch dependency record. Opened both assigned pages:

- `library/statistical-models-and-experiments/competing-risks-and-cumulative-incidence.md` (A page)
- `library/statistical-models-and-experiments/competing-risks-and-cumulative-incidence-examples.md` (B page)

Read all six assigned items, with suppliers before consumers:

1. `def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence`
2. `thm-cause-specific-cumulative-incidence-decomposition`
3. `alg-aalen-johansen-cumulative-incidence-estimator`
4. `lem-aalen-johansen-fixed-time-output-is-a-statistic`
5. `cex-observed-first-cause-does-not-identify-latent-failure-times`
6. `ex-competing-event-risk-versus-cause-incidence`

Opened the dependency items needed to check these definitions, arguments, and calculations: `def-event-time-observation-schemes`; `def-law-or-distribution-of-a-random-element`; `def-random-element-and-real-random-variable`; `def-probability-measure`; `def-measure-with-density`; `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`; `thm-integration-against-a-density`; `thm-continuity-from-above-for-measures`; `thm-continuity-from-below-for-measures`; `prop-measure-of-a-set-difference`; `lem-extended-reals-complete`; `thm-monotone-real-functions-are-borel-measurable`; `thm-threshold-characterisations-of-real-and-extended-real-measurability`; `def-independent-random-elements`; `def-identically-distributed-and-iid-random-variables`; `def-nelson-aalen-kaplan-meier-greenwood-estimators`; `def-statistic-and-estimator`; `def-statistical-experiment`; `def-measurable-function-between-measurable-spaces`; `thm-arithmetic-and-lattice-operations-preserve-measurability`; `cor-additivity-of-the-nonnegative-lebesgue-integral`; `prop-order-and-scalar-rules-for-the-nonnegative-integral`; `prop-the-nonnegative-integral-agrees-with-the-simple-integral`; `thm-monotone-convergence-for-the-integral`; `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`; `prop-closure-properties-of-measurable-functions-used-by-the-integral`; `def-estimand-on-a-statistical-model`; `def-identifiability-of-an-estimand`; `def-observational-equivalence`; and `def-parametric-statistical-model`.

Also read `CLAUDE.md`, `README.md`, `briefs/reader.md`, `SCHEMA.md`, the relevant Step 3 section of `WORKFLOW.md`, and the live autopilot status. The run remains active; no worker was in flight at the status check.

## Findings and edits

I repaired one assigned item. `lem-aalen-johansen-fixed-time-output-is-a-statistic` called the output a statistic without placing its sample space in a statistical experiment, while `def-statistic-and-estimator` defines a statistic relative to an experiment. I added the hypothesis that the displayed Borel sample space is the sample space of any statistical experiment and made the conclusion relative to that experiment. The proof is unchanged. I updated the lemma's derivation claim in `research/statistical-models-experiments-62-batch-35.proof-contracts.json` to record that scope. No `verification.judge` record was present to remove. Reflow and precheck passed, and the final proof-layout check reported 1 item, 2 steps, 0 defects. No page prose was edited.

One uneditable defect was found in the current-run batch-32 dependency `def-nelson-aalen-kaplan-meier-greenwood-estimators`, which is a direct dependency of the assigned Aalen–Johansen algorithm. In `## Definition`, the Nelson–Aalen integral and Kaplan–Meier product use `(0,t]` and `0<u≤t`, while the finite-support formula allows `a_1=0`. The event-time observation definition permits times in `[0,∞)` and imposes no exclusion of baseline events. For one subject with event time `T_1=0<C_1`, the observed event occurs at `U_1=0`; the displayed product omits it and returns survival `1`, and the Nelson–Aalen sum omits its unit risk increment. The finite-support target includes `q_1=1` when `a_1=0`. The supplier must either include time zero in the formulas or state and carry a strict-positive-time hypothesis. This is a fatal missing-hypothesis defect in the supplier; batch 35 does not own it. The assigned algorithm itself explicitly processes `u=0`, so this finding does not allege an error in that local procedure.

At review time I independently hashed the observed source bytes as `4dc289af1cac1f2dc079e62b3c0a1691aa9570ab445fc5ce8c3930f91ef65453`; this matches the immutable batch-32 pre-reader snapshot. The source changed later in this turn. Its current hash is `2a4d894660c640f9355d5407100af862d613ac8fb8e5690071d3b9fe988da489`, and its current formulas include time zero. I rechecked the assigned consumers against that changed definition: the Aalen–Johansen algorithm already handles `u=0`, and the example uses only times 1 and 2. The finding is bound to the pre-reader bytes above; the current hash is not the observed defect.

## Page verdicts

- **`competing-risks-and-cumulative-incidence` — pass.** Its summary matches the local definition, the measure-valued identity including atoms, and the finite-sample tied-time procedure. The algorithm’s baseline-event convention and the statistic lemma are explicit. The proof steps and contracts are aligned with the claims.
- **`competing-risks-and-cumulative-incidence-examples` — pass.** The two latent-law pushforwards are equal while the latent laws differ. The two risk-set calculations give Aalen–Johansen incidences `3/8` and `5/16`; both cause-specific product-limit complements are `7/16`. The page summary accurately describes these results.

## Source checks and limits

The Tartu competing-risks lecture gives the continuous CIF identity on slide 17 and the Aalen–Johansen update on slide 23; the corresponding source locations were PDF pages 55 and 57: [lecture PDF](https://bendixcarstensen.com/SPE/2015/h3-allslides.pdf). Austin, Lee, and Fine’s “Crude Incidence” section describes the CIF comparison and the overestimation from using Kaplan–Meier complements for competing causes, paragraphs 173–185: [article](https://pmc.ncbi.nlm.nih.gov/articles/PMC4741409/). I also opened the cited NIST Kaplan–Meier section 8.2.1.5, which describes the risk-count product-limit calculation. The direct fetch of the cited Stanford PDF timed out; I do not claim to have read its full text.

I did not audit dependency branches not needed by the assigned claims, including the conditional-kernel existence branch of `def-event-time-observation-schemes` and the Greenwood variance assertion in the Nelson–Aalen dependency. No blocker remains for this batch’s reader report; the batch-32 pre-reader defect is recorded against its bound snapshot, and the current source reflects a subsequent endpoint correction.
