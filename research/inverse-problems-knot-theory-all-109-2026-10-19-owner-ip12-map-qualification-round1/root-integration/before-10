---
id: ex-ip-adjoint-range-feature-is-estimable
kind: example
title: An adjoint-range feature has an exact one-probe estimator
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-feature-estimability-through-adjoint-range
  - def-ip-compact-linear-inverse-model
  - lem-finite-rank-operators-are-compact
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Kretschmann and Werner, Maximum a posteriori testing in statistical inverse problems, §1.1"
      url: https://arxiv.org/pdf/2402.00686
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §1.2.2"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Example

Assume Countable Choice. Let $X=H=\mathbb R^2$ with the Euclidean inner product, let $K(x_1,x_2)=(x_1,x_2/2)$, fix $\epsilon>0$, and let $Z$ be a jointly Gaussian centered family on $H$, linear into $L^2$ with covariance $\mathbb E[Z(g)Z(k)]=\langle g,k\rangle_H$. Define $Y_x(g)=\langle Kx,g\rangle_H+\epsilon Z(g)$ and consider the feature $\phi(x_1,x_2)=x_1$. The map $K$ is compact, $K^*(1,0)=(1,0)$, and the observation $Y_x(1,0)$ is an unbiased exact estimator of $\phi(x)$ with variance $\epsilon^2$. Thus the feature vector lies in the adjoint range and is exactly estimable by one probe.

## Example references

[[def-ip-feature-estimability-through-adjoint-range|Exact linear feature estimability through the adjoint range]]

[[def-ip-compact-linear-inverse-model|Compact linear inverse model between Hilbert spaces]]

[[lem-finite-rank-operators-are-compact|Finite-rank operators are compact]]

## Facts & Assumptions

**Given:** The finite-dimensional inverse model and feature in the Example, with $\epsilon>0$.

[F1] A feature $x\mapsto\langle x,h\rangle$ is exactly estimable by one probe precisely when $h\in R(K^*)$. [[def-ip-feature-estimability-through-adjoint-range]]

[F2] In a compact inverse model, the parameter and data spaces are Hilbert spaces and the forward map is compact and linear. [[def-ip-compact-linear-inverse-model]]

[F3] Every bounded finite-rank operator is compact. [[lem-finite-rank-operators-are-compact]]

## Proof

1.1 The matrix of $K$ in the standard basis is $\operatorname{diag}(1,1/2)$, so its range is two-dimensional and it is bounded. It is compact by [F3], hence it satisfies the compact inverse-model hypothesis [F2]. The matrix is self-adjoint, so $K^*=K$ and $K^*(1,0)=(1,0)$, the Riesz vector of $\phi$. [given, F2, F3, algebra]

2.1 The isonormal model gives $\mathbb E_xY_x(1,0)=\langle Kx,(1,0)\rangle=x_1$ and $\operatorname{Var}_xY_x(1,0)=\epsilon^2\|(1,0)\|^2=\epsilon^2$. Since [F1] applies to the feature vector $(1,0)=K^*(1,0)$, this probe is exact and has the asserted finite variance. [given, F1, step 1.1, algebra] ∎