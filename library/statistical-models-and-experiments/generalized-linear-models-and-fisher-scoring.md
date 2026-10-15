---
page: generalized-linear-models-and-fisher-scoring
title: Generalized linear models and Fisher scoring
status: published
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
  - lem-fisher-scoring-irls-is-well-defined
  - lem-nested-model-deviance-nonnegative
  - thm-irls-is-fisher-scoring-step
examples: []
---

This page specifies finite independent response vectors under an explicit product sampling law, then derives the generalized linear model's mean, variance, and likelihood derivatives. The algorithm defines one minimum-norm IRLS update; a separate theorem identifies it with Fisher scoring under additional regularity and invertible-information hypotheses. A scientific application must separately provide its [[scientific-statistical-model-contracts|model contract]] for observation units, predictor and response roles, target, conditioning, and model-adequacy assumptions. The canonical-link concavity result gives at most one finite stationary point, and any such point is the unique global maximizer, when the parameter domain is open and convex, the design has full column rank, the common scale is positive, the cumulant curvature is positive throughout the predictor image, and the fixed response vector has positive component densities throughout the parameter domain; it does not guarantee existence. The algorithm makes one finite update, with no convergence or termination claim. Deviance is defined only for nested models on common support with finite suprema, and nesting proves nonnegativity. No generic chi-square calibration, deviance-residual law, or goodness-of-fit conclusion is asserted.
