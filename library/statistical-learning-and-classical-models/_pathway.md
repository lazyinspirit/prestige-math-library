---
category: statistical-learning-and-classical-models
status: published
parts:
  - part: risk-and-generalization
    title: Risk, complexity and generalization
    pages:
      - prediction-problems-risks-and-empirical-minimization
      - finite-class-pac-learning-and-erm
      - vc-dimension-growth-and-pac-classification
      - rademacher-complexity-and-generalization
      - algorithmic-stability-and-generalization
      - compression-and-pac-bayes-generalization
      - calibration-proper-losses-and-surrogate-classification
      - minimax-learning-lower-bounds-and-optimal-rates
  - part: prediction-and-kernels
    title: Prediction, kernels and ensembles
    pages:
      - ml02-linear-sparse-models
      - ml02-linear-classification
      - ml02-rkhs-svm
      - ml02-gaussian-process-regression
      - ml02-cart
      - ml02-random-forests
      - ml02-boosting
      - ml02-metric-learning
      - sketched-kernel-learning-and-certified-solves
  - part: structure-and-representations
    title: Clustering, latent structure and causal discovery
    pages:
      - ml02-clustering-mixtures
      - ml02-spectral-clustering
      - ml02-dimension-reduction
      - ml02-latent-representations
      - ml02-graphical-models
      - ml02-causal-pc
      - ml02-causal-anm
      - semi-supervised-graph-propagation-and-pseudolabeling-limits
  - part: shift-and-deployment
    title: Shift, calibration and deployment
    pages:
      - distribution-shift-and-domain-adaptation
      - adversarial-robustness-and-robust-risk
      - fairness-criteria-and-impossibility-boundaries
      - predictive-calibration-and-uncertainty-under-shift
      - monotone-risk-calibration-and-deployment-guarantees
      - active-querying-version-spaces-and-abstention
  - part: privacy-and-federation
    title: Privacy, private learning and federation
    pages:
      - ml02-differential-privacy
      - ml02-private-learning
      - ml02-federated-optimization
---

## risk-and-generalization

Start with prediction problems and risk, then develop PAC guarantees, VC dimension, Rademacher complexity, stability, compression and minimax limits. These pages provide the language for the later model families. Their guarantees retain the stated sampling, boundedness and measurability conditions.

## prediction-and-kernels

Develop linear and sparse prediction, classifiers, kernel regularization and Gaussian-process prediction. Trees lead to bagging and boosting; nearest-neighbor methods provide a complementary geometric viewpoint. Read the kernel and Gaussian-process interfaces before the certified approximate-solve extension.

## structure-and-representations

Continue through mixtures, spectral clustering, dimension reduction, latent factors and graphical structure. The causal-discovery pages distinguish observational equivalence from identifiability. Semi-supervised graph propagation follows its spectral and risk prerequisites and makes its nonidentification limits explicit.

## shift-and-deployment

Use the earlier risk and generalization results to study distribution shift, robustness and fairness. Predictive calibration precedes monotone risk calibration and deployment guarantees. Active querying draws on the earlier PAC and VC results; its feedback protocol differs from passive learning.

## privacy-and-federation

Begin with privacy mechanisms and composition, then study private empirical minimization and federated optimization. These methods use the earlier classical models and statistical guarantees. They supply context for the stochastic-training stability results in Neural Networks and Learning Dynamics.
