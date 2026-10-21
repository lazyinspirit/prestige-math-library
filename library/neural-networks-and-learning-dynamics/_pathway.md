---
category: neural-networks-and-learning-dynamics
status: published
parts:
  - part: architectures-and-expressivity
    title: Architectures and expressivity
    pages:
      - feedforward-networks-and-universal-approximation
      - relu-approximation-rates-and-depth-expressivity
      - convolution-and-group-equivariance
      - message-passing-graph-neural-networks
      - recurrent-and-state-space-networks
      - attention-and-transformer-expressivity
      - neural-operators-and-physics-informed-learning
  - part: differentiation-and-optimization
    title: Differentiation, optimization and initialization
    pages:
      - automatic-differentiation-and-backpropagation
      - nonconvex-gradient-descent-and-stationarity
      - stochastic-gradient-descent-for-learning
      - momentum-and-accelerated-training
      - adaptive-gradient-optimizers
      - initialization-and-signal-propagation
  - part: interpolation-and-kernels
    title: Implicit bias, interpolation and kernel limits
    pages:
      - implicit-bias-of-gradient-training
      - overparameterized-training-and-interpolation
      - marchenko-pastur-law-and-edge-bounds
      - sample-covariance-resolvent-limits
      - minimum-norm-interpolation-and-double-descent
      - neural-tangent-kernels-and-lazy-training
  - part: mean-field-and-generalization
    title: Mean-field dynamics and generalization
    pages:
      - wasserstein-metric-and-continuity-equation
      - wasserstein-gradient-flow-existence-and-stability
      - mean-field-training-and-feature-learning
      - norm-and-margin-generalization-for-neural-networks
      - compression-generalization-for-trained-networks
      - algorithmic-stability-of-stochastic-training
  - part: efficient-training-and-adaptation
    title: Efficient training and adaptation
    pages:
      - bilevel-learning-hypergradients-and-implicit-layers
      - exact-tiled-attention-and-memory-aware-differentiation
      - low-rank-adaptation-and-parameter-update-geometry
---

## architectures-and-expressivity

Begin with feedforward approximation, then study depth, equivariance, graph message passing, recurrence, attention and neural operators. Read the architecture and topology assumptions literally. Expressivity results do not by themselves establish an effective training method or a generalization guarantee.

## differentiation-and-optimization

Backpropagation supplies the differentiation interface for gradient-based training. Continue through nonconvex descent, stochastic gradients, momentum and adaptive methods, with initialization as a separate signal-propagation problem. Preserve each algorithm convention and its stated finite-iteration or asymptotic guarantee.

## interpolation-and-kernels

Study implicit bias and overparameterized interpolation alongside their linear and kernel prerequisites. Read the Marchenko-Pastur and sample-covariance resolvent pairs before double descent. Neural tangent kernels describe a particular training regime and should not be treated as a universal account of feature learning.

## mean-field-and-generalization

Read Wasserstein geometry before the gradient-flow existence and stability pair, then apply that interface to mean-field training. Norm, margin, compression and stochastic stability provide separate generalization arguments. Their classical risk and federated-learning prerequisites remain in Statistical Learning and Classical Models.

## efficient-training-and-adaptation

Bilevel learning follows differentiation and its implicit-function prerequisites. Tiled attention and low-rank adaptation follow the attention and backpropagation pages. These methods distinguish exact algebraic identities from approximate solves, finite-precision effects and empirical claims about adaptation quality.
