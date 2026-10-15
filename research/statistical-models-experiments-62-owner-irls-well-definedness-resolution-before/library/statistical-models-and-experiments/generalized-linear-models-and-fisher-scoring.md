---
page: generalized-linear-models-and-fisher-scoring
title: Generalized linear models and Fisher scoring
status: draft
items:
  - def-glm-observation-family
  - lem-glm-product-density
  - lem-glm-mean-and-variance-identities
  - def-generalized-linear-model
  - thm-canonical-glm-score-and-hessian
  - thm-glm-general-link-score-and-information
  - def-nested-model-deviance
  - thm-canonical-glm-strict-concavity
  - alg-fisher-scoring-irls
  - lem-nested-model-deviance-nonnegative
  - thm-irls-is-fisher-scoring-step
examples: []
---

This page specifies finite independent response vectors under an explicit product sampling law, then derives the generalized linear model's mean, variance, likelihood derivatives, and Fisher-scoring/IRLS step. A scientific application must separately provide its [[scientific-statistical-model-contracts|model contract]] for observation units, predictor and response roles, target, conditioning, and model-adequacy assumptions. The canonical-link concavity result guarantees at most one finite stationary maximizer when the design has full column rank and the cumulant curvature is positive; it does not guarantee existence. The algorithm is one finite update, with no convergence or termination claim. Deviance is defined only for nested models on common support with finite suprema, and nesting proves nonnegativity. No generic chi-square calibration, deviance-residual law, or goodness-of-fit conclusion is asserted.
