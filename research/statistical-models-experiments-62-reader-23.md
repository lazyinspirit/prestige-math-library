# Step 3a reader report — batch 23

Run: `statistical-models-experiments-62`  
Reader scope: batch `23`  
Run status checked from `.autopilot/statistical-models-experiments-62`: active at Step 3a-read.

## Opened inventory

Assigned pages:

- `mediation-effects-and-identification` — `library/statistical-models-and-experiments/mediation-effects-and-identification.md`
- `mediation-effects-and-identification-examples` — `library/statistical-models-and-experiments/mediation-effects-and-identification-examples.md`

Assigned items were read in dependency order:

- `def-controlled-and-natural-mediation-effects`
- `def-simple-markovian-mediation-scm`
- `def-interventionist-mediation-effect`
- `lem-npsem-ie-implies-cross-world-independence-for-mediation`
- `def-natural-effect-identification-assumptions`
- `thm-natural-effect-identification-under-cross-world-independence`
- `cex-natural-effect-cross-world-nonidentification`
- `ex-mediator-confounding-invalidates-natural-effects-formula`
- `ex-treatment-induced-mediator-outcome-confounding-invalidates-natural-effects-formula`

Opened the A page's declared prerequisite pages:

- `potential-outcomes-and-causal-identification`
- `structural-causal-models-dags-and-adjustment`
- `statistical-experiments-models-and-identifiability`
- `markov-kernels-and-markov-chains`
- `conditional-distributions-and-regular-conditional-probability`

Opened the direct item suppliers used by the assigned items: `def-potential-outcomes-and-consistency`, `def-causal-average-treatment-effects`, `def-recursive-structural-causal-model-and-dag`, `def-standard-borel-space`, `def-random-element-and-real-random-variable`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-countable`, `def-measurable-function-between-measurable-spaces`, `def-independent-random-elements`, `def-conditional-independence-given-a-sigma-algebra`, `def-conditional-expectation-given-a-sigma-algebra`, `def-conditional-expectation-as-an-ae-class`, `def-axiom-of-choice`, `def-positivity-for-discrete-treatment`, `def-conditional-law-given-a-random-element`, `def-measure-kernel-and-probability-kernel`, `def-law-or-distribution-of-a-random-element`, `def-regular-conditional-distribution`, `lem-finite-products-of-standard-borel-spaces-are-standard-borel`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`, `lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions`, `thm-conditional-integration-through-a-regular-conditional-law`, `thm-measurability-of-integration-against-a-kernel`, `thm-independent-random-elements-have-product-joint-law`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-change-of-variables-for-expectation`, and `def-identifiability-of-an-estimand`.

The batch proof-contract file was inspected as supporting evidence and checked against the current item bodies; its author assessments were not treated as verdicts. The three draft suppliers owned by other current-run batches (`def-potential-outcomes-and-consistency`, `def-causal-average-treatment-effects`, `def-recursive-structural-causal-model-and-dag`) and the batch-19 supplier `def-positivity-for-discrete-treatment` were checked at the interfaces used here.

## Review and page verdicts

| Subject | Verdict | Review result |
| --- | --- | --- |
| `def-controlled-and-natural-mediation-effects` | Pass | The nested counterfactuals, order of treatment arguments, target population, intervention semantics, and integrability caveat are consistent with the supplied definitions. |
| `def-simple-markovian-mediation-scm` | Pass | The four equations, independence restriction, response substitutions, and exclusion of additional mediator–outcome common causes are explicit and consistent with the recursive SCM supplier. |
| `def-interventionist-mediation-effect` | Pass | Component interventions and dismissible restrictions are stated separately from natural effects; the substantive feasibility and non-identification caveats are present. |
| `lem-npsem-ie-implies-cross-world-independence-for-mediation` | Pass | The product law of the independent errors and bounded Fubini calculation yield the conditional product identities after testing against bounded functions of `L`. Setting one test function to one gives each asserted pairwise conditional independence. |
| `def-natural-effect-identification-assumptions` | Pass | Treatment positivity, mediator support domination, integrability, and the cross-world restriction are stated at the needed level; the independent-error lemma supplies the latter in the specified model. |
| `thm-natural-effect-identification-under-cross-world-independence` | Pass | The proof constructs structural kernels, identifies them with observed conditional laws on treatment-supported strata, transfers the conditional-mean versions under mediator support domination, and derives the nested mean and effect decomposition. |
| `cex-natural-effect-cross-world-nonidentification` | Pass | Both models have the same randomized observed law and satisfy the stated single-world conditions, while the computed natural effects differ. |
| `ex-mediator-confounding-invalidates-natural-effects-formula` | Pass | The true nested means and observed conditional-mean functional are correctly computed; the example explicitly identifies the violated mediator–outcome assumption. |
| `ex-treatment-induced-mediator-outcome-confounding-invalidates-natural-effects-formula` | Pass | The intervention responses, probabilities, conditional means, and formula contrasts are correct; the post-treatment common cause is outside the theorem's model. |
| `mediation-effects-and-identification` | Pass | The summary accurately states the model scope, cross-world qualification, kernel formulation, and limitations of the identification result. |
| `mediation-effects-and-identification-examples` | Pass | The summary accurately describes the two-law counterexample and the separate confounding calculations. |

I independently checked the finite computations in all three B-page items. For the treatment-induced-confounding example, for instance, the observed formula gives `13/25`, `1`, and `1/5` for the three nested-mean terms, hence contrasts `8/25` and `12/25`, while the true contrasts are `1/2` and `3/10`.

## Source checks

- Miguel A. Hernán and James M. Robins, *Causal Inference: What If*, author revision dated 19 August 2026, [official PDF](https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf): Technical Point 23.1, PDF p. 333 (printed p. 324), gives the nested-mean mediation argument and states the cross-world independence condition under NPSEM-IE, not FFRCISTG. Chapter 23.4, PDF pp. 338–339 (printed pp. 329–330), describes substantively meaningful separable components and the distinct component intervention targets. These passages support the definitions and caveats; the local kernel-valued proof supplies the general standard-Borel formulation.
- Judea Pearl, “Causal inference in statistics: An overview,” §5.1.1–§5.1.3, [PDF](https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf), printed pp. 132–136 (PDF pp. 37–40): the controlled effect is defined by intervention on the mediator; natural effects use nested counterfactuals; the discussion states a cross-world independence sufficient condition and gives the direct/indirect decomposition. This is consistent with the local sign convention and algebra.

## Edits, defects, and blockers

- Edits: none. No assigned item or A-page prose required repair.
- Uneditable defects: none found in the assigned batch or the reviewed dependency interfaces.
- Blocker: none.
- No item changed, so reflow, precheck, and proof-layout were not run.

## Coverage limitation

Every assigned item and page, each declared A-page prerequisite page, and every direct item dependency listed in the assigned items was opened. I checked the supplier statements and the local proof arguments materially used by the mediation theorem. I did not recursively audit every foundational dependency behind the already-published supplier proofs.
