---
id: def-qftx-distributions-on-smooth-manifolds
kind: definition
title: Scalar distributions on smooth manifolds
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-smooth-manifold
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - def-distribution
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-distribution: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, Appendix A
      url: https://arxiv.org/html/1208.1428
      locator: Full-text Appendix A, especially the definition of distributions in local coordinates; the density convention on manifolds is specified here.
verification:
  precheck: pending
---

## Definition

Let $M$ be a Hausdorff, second-countable smooth $n$-manifold without boundary. In a smooth chart $x=(x^1,\ldots,x^n)$, a smooth density is written $\phi_x(x)|dx^1\cdots dx^n|$. On a coordinate change $y=\psi(x)$ its coefficient transforms by
$$ \phi_y(y)=\phi_x(\psi^{-1}(y))\,|\det D\psi^{-1}(y)|. $$
A compactly supported smooth density is one whose support is compact in $M$. Give their space $\mathcal D(M;|\Lambda^nT^*M|)$ the locally convex test-density topology obtained from the usual fixed-compact derivative seminorms in charts and the corresponding LF inductive limit. A scalar distribution on $M$ is a continuous complex-linear functional on this test-density space, with bilinear pairing $\langle u,\omega\rangle$. Write $\mathcal D'(M)$ for these distributions and $\mathcal E'(M)$ for those with compact support. On a product manifold use the same definition with product densities. In a chart this definition is the ordinary distribution definition on an open subset of $\mathbb R^n$; the displayed Jacobian law is the coordinate compatibility condition.

## Definition references

[[def-smooth-manifold]]

[[def-test-function-space-d-of-an-open-set]]

[[def-test-function-topology]]

[[def-distribution]]

