---
id: ex-qftx-n2-quadratic-prepotential
kind: example
title: Constant gauge-coupling matrix from the quadratic N=2 prepotential
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 7
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-extended-actions-examples
deps:
  - post-qftx-n2-vector-hypermultiplet-model
dependency_roles:
  post-qftx-n2-vector-hypermultiplet-model: physical-assumption
physical_scope: "A finite-dimensional calculation of the gauge-coupling Hessian in the adopted quadratic ultraviolet N=2 model; it does not establish an exact low-energy effective action."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

For the adopted microscopic prepotential $\mathcal F_{\mathrm{UV}}(\Phi)=\frac{i}{2g^2}\kappa_{\mathbb C}(\Phi,\Phi)$ with $g>0$ and $\kappa(T_a,T_b)=\delta_{ab}$, the Hessian $\mathcal F_{ab}=\partial_a\partial_b\mathcal F_{\mathrm{UV}}$ is the constant matrix $i\delta_{ab}/g^2$. Its imaginary part is positive definite and independent of the scalar field $\Phi$. This is a property of the adopted quadratic ultraviolet model; it does not assert a non-polynomial low-energy prepotential.

## Example references

[[post-qftx-n2-vector-hypermultiplet-model]]

## Facts & Assumptions

**Given:** The quadratic ultraviolet prepotential and positive dimensionless coupling in the N=2 model.

[A1] [[post-qftx-n2-vector-hypermultiplet-model]]: $g>0$, $\kappa(T_a,T_b)=\delta_{ab}$, and $\mathcal F_{\mathrm{UV}}(\Phi)=\frac{i}{2g^2}\kappa_{\mathbb C}(\Phi,\Phi)$.

## Verification

**Given:** [A1] and coordinates $\Phi=\sum_{a=1}^3\Phi^aT_a$ on $\mathfrak{su}(2)_{\mathbb C}$.

1.1 Bilinearity and the normalized basis give $\mathcal F_{\mathrm{UV}}=\frac{i}{2g^2}\sum_{a=1}^3(\Phi^a)^2$. Differentiating this polynomial first in $\Phi^a$ and then in $\Phi^b$ yields $\mathcal F_{ab}=i\delta_{ab}/g^2$, with no dependence on $\Phi$. [given, A1, algebra]

2.1 Since $g>0$, for every nonzero $z\in\mathbb C^3$ the Hermitian quadratic form of the imaginary part is $\sum_a|z^a|^2/g^2>0$. Thus the coupling matrix is positive definite, including at $\Phi=0$. [given, A1, step 1.1, algebra] ∎

