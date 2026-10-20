---
id: rem-offline-rl-distribution-shift-and-pessimism
kind: remark
title: "Off-policy estimates do not guarantee offline policy safety"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - alg-doubly-robust-ope
  - alg-trajectory-importance-sampling-ope
  - def-axiom-of-choice
  - def-offline-reinforcement-learning-dataset
  - thm-offline-coverage-impossibility-example
  - thm-trajectory-importance-sampling-is-unbiased
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§5.5, printed pp. 128–132; product weights, WIS normalization, and variance."
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§§3.2–4.2; IS/WIS variance discussion and the finite-horizon DR estimator."
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§2.4, §3.5, §§4.3–4.4, and §5.1; distribution shift, policy constraints, uncertainty, and model exploitation."
---

## Limits of offline evaluation and policy optimization

Under the finite-horizon data assumptions above, full trajectory-law coverage, true known behavior propensities, and integrable weighted returns, the ordinary trajectory and per-decision importance-sampling estimators are unbiased for the expected return of the fixed target policy. In this finite trajectory setting their finite numerical outputs have finite variance, but they do not provide a variance bound uniform over behavior policies, a confidence bound, or a guarantee that the target policy outperforms the behavior policy. For each fixed model, horizon, and sample size, the trajectory dataset space is finite; after any fixed finite assignment on the behavior-null unsupported event, each estimator has finitely many finite values, so its second moment and variance are finite. Product weights can vary exponentially with horizon; self-normalization and clipping can change finite-sample expectations. With missing coverage, two environments can agree on every logged trajectory and assign different values to an unobserved action. A conservative policy constraint explicitly restricts candidate policies, for example by limiting their divergence from the behavior policy; a pessimistic value adjustment lowers predicted values for poorly supported actions. These choices can reduce unsupported action selection but can also limit policy improvement, and they are not by themselves safety guarantees. Model exploitation occurs when optimization selects state-action pairs where an approximate dynamics or value model overpredicts return; optimizing such errors can worsen real performance. A finite-sample safety or performance guarantee needs its own assumptions and error bounds.

## Limits of offline evaluation and policy optimization references

[[def-offline-reinforcement-learning-dataset|The fixed-data, target-policy, behavior-policy, and full-coverage conventions.]]

[[alg-trajectory-importance-sampling-ope|OIS, PDIS, and the self-normalized WIS procedure.]]

[[alg-doubly-robust-ope|The finite-horizon doubly robust residual estimator.]]

[[thm-offline-coverage-impossibility-example|A finite example showing that missing behavior support can prevent value identification.]]

[[thm-trajectory-importance-sampling-is-unbiased|Under finite-horizon coverage and the stated behavior-data assumptions, OIS and PDIS are unbiased.]]

[Sutton and Barto, Reinforcement Learning: An Introduction, 2nd ed.](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf)

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

[Levine, Kumar, Tucker, and Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems](https://arxiv.org/pdf/2005.01643)
