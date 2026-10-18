---
id: ex-pin-reflection-and-scalar-kernel-in-the-plane
kind: example
title: A Pin generator reflects one coordinate and has scalar kernel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations-examples
dependency_level: 7
deps:
  - lem-twisted-clifford-adjoint-reflection-and-scalar-kernel
  - thm-real-pin-spin-image-kernel-and-compactness
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.3"
      url: https://arxiv.org/pdf/0805.0311
    - title: "Eckhard Meinrenken, Lie groups and Clifford algebras, Chapter 2 §4.1"
      url: https://www.math.toronto.edu/mein/teaching/LieClifford/cl12.pdf
---

## Example

Let $V=\mathbb R^2$ with orthonormal basis $e_1,e_2$, positive quadratic form, and Clifford relations $e_i^2=1$, $e_1e_2=-e_2e_1$. The Pin element $e_1$ acts by $(x,y)\mapsto(-x,y)$ under the twisted adjoint. The kernel of the twisted action restricted to Pin is exactly $\{1,-1\}$.

## Facts & Assumptions

**Given:** The stated Clifford relations and the Pin twisted action.

[F1] An anisotropic vector acts by its hyperplane reflection and the unrestricted twisted kernel is scalar ([[lem-twisted-clifford-adjoint-reflection-and-scalar-kernel]]).

[F2] The Pin map is onto the orthogonal group with kernel $\{1,-1\}$ ([[thm-real-pin-spin-image-kernel-and-compactness]]).

## Verification

**Proof technique:** direct.

1.1 From the polarized relation, $e_1e_2+e_2e_1=0$. Thus $\rho_{e_1}(e_1)=-e_1e_1e_1=-e_1$ and $\rho_{e_1}(e_2)=-e_1e_2e_1=e_2$. Linearity gives $(x,y)\mapsto(-x,y)$, the reflection in $e_1^\perp$. [given, F1, algebra]

2.1 By [F1], every Pin element acting trivially is a nonzero real scalar $\lambda$. Its norm is $N(\lambda)=\lambda^2$; Pin requires this norm to be $\pm1$, so positivity gives $\lambda^2=1$ and $\lambda=\pm1$. Both scalars act trivially, agreeing with [F2]. [F1, F2, algebra] ∎
