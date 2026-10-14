---
page: losses-risk-and-decision-rules
title: "Loss, Risk and Decision Theory"
status: draft
items:
  - lem-finite-dimensional-integral-jensen-for-convex-loss
  - lem-prior-and-model-kernel-define-joint-law
  - def-loss-function-and-risk
  - def-risk-domination-and-admissibility
  - def-bayes-and-minimax-risk
  - thm-randomization-does-not-improve-convex-action-loss
  - thm-bayes-rule-minimizes-prior-risk
examples: []
---

This page defines nonnegative loss and its possibly infinite sampling risk for
deterministic and randomized rules. It separates pointwise risk domination and
admissibility from prior-averaged Bayes risk and worst-case minimax risk. Under
explicit measurability and standard-Borel hypotheses, a measurable posterior
minimizer minimizes prior risk. For closed convex finite-dimensional action
sets, a randomized rule for which, at every $\theta$, $P_\theta$-almost every
data value has finite first moment and barycenter in the action set can be
replaced by its measurable barycenter without increasing convex loss; the local
integral Jensen proof states its extended-convexity convention, choice
assumptions and boundary conditions.
