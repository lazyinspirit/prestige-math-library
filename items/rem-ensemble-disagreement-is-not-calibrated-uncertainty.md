---
id: rem-ensemble-disagreement-is-not-calibrated-uncertainty
kind: remark
title: "Ensemble disagreement is not calibrated uncertainty by definition"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-learned-mdp-model
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
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§5.1, PDF p. 26, and §5.3, PDF pp. 27–28: model error estimation, ensemble disagreement, and calibration limitations."
---

## Remark

For an ensemble of $m\ge2$ learned transition rows $\widehat P_1(\cdot\mid s,a),\ldots,\widehat P_m(\cdot\mid s,a)$, define the pairwise disagreement score by

$$u(s,a)=\frac{2}{m(m-1)}\sum_{1\le i<j\le m}\operatorname{TV}(\widehat P_i(\cdot\mid s,a),\widehat P_j(\cdot\mid s,a)).$$

This statistic measures dispersion among the fitted models. By itself it does not specify a probability law for the true model error $\operatorname{TV}(P(\cdot\mid s,a),\widehat P_i(\cdot\mid s,a))$, nor does it assert a calibrated coverage frequency for any error threshold. Calibration requires additional assumptions and a separately proved or empirically checked calibration condition.

## Remark references

[[def-learned-mdp-model|The true and learned transition rows and their total-variation errors.]]

[Levine, Kumar, Tucker, and Fu, *Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems*](https://arxiv.org/pdf/2005.01643).
