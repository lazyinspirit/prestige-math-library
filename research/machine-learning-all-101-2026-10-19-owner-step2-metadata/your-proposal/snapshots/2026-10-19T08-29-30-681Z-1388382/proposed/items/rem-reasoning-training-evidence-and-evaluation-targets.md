---
id: rem-reasoning-training-evidence-and-evaluation-targets
kind: remark
title: "Reasoning-training evidence and evaluation targets"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-offline-reinforcement-learning-dataset
  - alg-budgeted-verifier-guided-generation
  - thm-independent-generation-success-and-verifier-error
  - lem-finite-response-likelihood-ratio-change-of-measure
  - alg-finite-group-relative-policy-update
  - thm-group-centered-score-estimator-factor
  - lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "DeepSeek-AI, DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning, original arXiv v1"
      url: "https://arxiv.org/pdf/2501.12948v1"
      locator: "§3 evaluation setup and results; §§4.2–5, reported limitations and unsuccessful attempts."
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition draft"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf"
      locator: "§5.5 importance-sampling coverage, bias, and variance caveats; Chapter 13 §13.4 baseline identity."
    - title: "John Schulman, Filip Wolski, Prafulla Dhariwal, Alec Radford, and Oleg Klimov, Proximal Policy Optimization Algorithms, original arXiv v1"
      url: "https://arxiv.org/pdf/1707.06347v1"
      locator: "§2.3, clipped surrogate and its relation to the unclipped objective."

---

## Reasoning training and evaluation targets

The finite prompt set, response support, token budget, truncation marker, verifier, reward rule, and sampling policy define the distribution to which an evaluation result applies. An empirical pass@1 is the observed fraction of prompts whose single designated sample is correct; oracle pass@N is the fraction with at least one correct response among N candidates; verifier-selected accuracy is the fraction correct among returned responses the verifier accepts. These statistics need not agree, because the verifier can accept an incorrect response, reject a correct one, or select an incorrect candidate even when another candidate in the group is correct.

The proved group-score identity applies only to unnormalized centering under independent draws from the same finite policy. The finite-budget group update additionally divides by a random group standard deviation, clips a sequence-level policy ratio, and reuses samples from a frozen old policy for several inner steps. The identity alone proves no unbiasedness, monotone policy improvement, or convergence claim for that procedure.

For a general finite-horizon offline MDP with fixed stationary target and behavior policies, the cited trajectory-ratio lemma assumes the Axiom of Choice, a shared fixed initial state and transition/reward law, full-horizon absolute continuity, and integrability of the target return or other function being reweighted. Clipping or self-normalization alters the weights, so that exact change-of-measure identity alone does not establish the corresponding clipped or self-normalized equality or a generic offline-policy safety or performance guarantee. A verifier or benchmark score is an evaluation signal and does not certify a mathematical proof.

## Reasoning training and evaluation targets references

[[alg-budgeted-verifier-guided-generation|The budgeted rejection and best-of-N procedures.]]

[[thm-independent-generation-success-and-verifier-error|The finite independent and adaptive success bounds and false-acceptance union bound.]]

[[alg-finite-group-relative-policy-update|The finite sequence-ratio, group-normalized, clipped update procedure.]]

[[thm-group-centered-score-estimator-factor|The exact scope of the unnormalized group-center identity.]]

[[lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative|The general finite-horizon trajectory ratio under AC and full coverage.]]

[[def-axiom-of-choice|AC asserts that every family of nonempty sets has a choice function.]]

[[def-absolutely-continuous-with-respect-to-a-positive-measure|Absolute continuity means every behavior-null measurable set is also target-null.]]

[[def-integrable-real-and-complex-functions-and-their-integrals|A real function is integrable when the integral of its absolute value is finite.]]

[[def-offline-reinforcement-learning-dataset|The fixed-start finite MDP, common transition/reward law, stationary policies, and full-coverage setup.]]

