# Step 3a reader report — batch 21

Run: `statistical-models-experiments-62`  
Batch: `21`

## Opened inventory

Pages:

- `library/statistical-models-and-experiments/standardization-and-ipw-identification.md` (A page)
- `library/statistical-models-and-experiments/standardization-and-ipw-identification-examples.md` (B page)

Assigned items, in dependency level order:

- Level 0: `alg-standardization-for-a-causal-mean`; `alg-inverse-probability-weighting-for-a-causal-mean`; `lem-conditional-treatment-indicator-factorization`.
- Level 1: `ex-positivity-failure-prevents-standardization-and-ipw-identification`.
- Level 2: `thm-inverse-probability-weighting-identifies-a-causal-mean`.
- Level 3: `thm-standardization-identifies-a-causal-mean`; `ex-extreme-ipw-weights-under-poor-overlap`; `ex-weight-truncation-changes-the-ipw-target`.
- Level 4: `ex-standardization-and-ipw-two-strata-calculation`.

Opened direct and proof-relevant dependency items:

- Probability and conditional expectation: `def-probability-measure`; `def-random-element-and-real-random-variable`; `def-conditional-probability-given-a-sigma-algebra`; `def-conditional-expectation-as-an-ae-class`; `def-conditional-expectation-given-a-sigma-algebra`; `def-expectation-of-a-nonnegative-or-integrable-random-variable`; `def-axiom-of-choice`; `def-conditional-independence-given-a-sigma-algebra`; `thm-conditional-expectation-exists-by-radon-nikodym`; `lem-conditional-expectation-is-unique-almost-surely`; `thm-basic-algebra-and-order-properties-of-conditional-expectation`; `thm-tower-property-of-conditional-expectation`; `thm-taking-out-what-is-known`; `thm-dominated-convergence`; `thm-monotone-convergence-for-the-integral`; `cor-conditional-lp-contraction`; `cor-expectation-of-an-indicator-is-probability`.
- Causal identification: `def-potential-outcomes-and-consistency`; `def-conditional-exchangeability-of-potential-outcomes`; `def-positivity-for-discrete-treatment`; `def-causal-average-treatment-effects`; `lem-conditional-independence-equivalences-and-preservation`; `lem-conditional-independence-integrable-factorization`; `def-identifiability-of-an-estimand`; `def-estimand-on-a-statistical-model`; `thm-identifiability-iff-constant-on-equivalence-classes`.
- Batch-19 supplier and its relevant proof sources: `thm-discrete-treatment-potential-outcome-mean-identification`; `def-standard-borel-space`; `def-conditional-law-given-a-random-element`; `def-law-or-distribution-of-a-random-element`; `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`; `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`; `thm-conditional-integration-through-a-regular-conditional-law`; `thm-change-of-variables-for-expectation`.
- Also checked the scope of `thm-doob-dynkin-lemma`; its conditioning map is real-valued, so it does not by itself cover the assigned theorems' arbitrary measurable covariate random element.

The batch proof-contract file `research/statistical-models-experiments-62-batch-21.proof-contracts.json` was reviewed as evidence, not treated as a verdict.

## Repairs made

- `thm-standardization-identifies-a-causal-mean`, Proof 2.1–3.1: supplied a factorization argument for real `sigma(L)`-measurable versions that works for an arbitrary measurable state space of `L`. It factors the five conditional versions through `L`, compares their integrable functions under the common covariate law, and explicitly transfers the expectation under `Q` to that under `P`. Added `thm-change-of-variables-for-expectation` to `deps` and cited it in Facts and the affected proof-contract derivations. The theorem's Statement is unchanged.
- `thm-inverse-probability-weighting-identifies-a-causal-mean`, Proof 1.1 and 4.1: supplied the same factorization argument for the two propensity versions, established their equality under the common covariate law, and used the change-of-variables result to transfer the observed-coordinate weighted integral. Added `thm-change-of-variables-for-expectation` and `lem-conditional-expectation-is-unique-almost-surely` to `deps`, Facts, and the affected proof-contract derivations. The theorem's Statement is unchanged.
- Neither repaired item had a `verification.judge` record. Reflow and precheck passed for both items. Final proof-layout check: 2 items, 10 steps, 0 defects.

No assigned page prose or other batch item was edited.

## Defects not edited

- In-run dependency `thm-discrete-treatment-potential-outcome-mean-identification` (batch 19), Proof 2.2: the proof uses signed event integrals of `v_a=E_P[Y^a|sigma(L)]` under `P_a` before establishing `v_a` integrable under `P_a`; that estimate appears in step 3.1. Since `P(A=a)>0` and `v_a` is integrable under `P`, the missing estimate is immediate:
  `E_{P_a}|v_a| = E_P[1_{A=a}|v_a|]/P(A=a) <= E_P|v_a|/P(A=a) < infinity`.
  Move it before step 2.2. This is nonfatal and is routed in `research/statistical-models-experiments-62-reader-findings-21.json` to assigned consumer `thm-standardization-identifies-a-causal-mean`.

## Page verdicts

- `standardization-and-ipw-identification` (A): pass. The summary accurately limits the results to fixed discrete or atomic treatment values, conditional-class population identities, almost-sure positivity, and the stated causal assumptions. The no-uniform-overlap caveat and exclusion of continuous-treatment pointwise formulas agree with the items.
- `standardization-and-ipw-identification-examples` (B): pass. The summary covers the finite-stratum calculation, near-positivity weights, weight capping, and the compatible-law nonidentification example without adding a mathematical claim.

## Blocker and coverage note

No blocker. The batch-19 theorem was opened before all of its recursively cited suppliers; the relevant conditional-independence, regular-conditional-law, and integration sources were opened afterward and used to complete the review. I did not re-audit unrelated transitive prerequisites of published foundational items.
