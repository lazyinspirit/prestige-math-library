---
id: thm-mahalanobis-distance-is-pseudometric
kind: theorem
title: "The Mahalanobis distance is a pseudometric and comes from a linear feature map"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-mahalanobis-pseudometric
  - prop-operator-positivity-agrees-with-form-positivity-over-the-reals
  - thm-non-negative-operator-characterisations
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-of-square-roots
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Kilian Q. Weinberger and Lawrence K. Saul, Distance Metric Learning for Large Margin Nearest Neighbor Classification, JMLR 10 (2009), 207–244"
      url: "https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf"
    - title: "Aurélien Bellet, Amaury Habrard, and Marc Sebban, A Survey on Metric Learning for Feature Vectors and Structured Data, arXiv:1306.6709v4 (2014)"
      url: "https://arxiv.org/pdf/1306.6709"
aliases: []
landmark: false
proof_strategy: direct
---

## Statement

Let $d\ge1$ and let $M\in\mathbb R^{d\times d}$ be real symmetric and positive semidefinite, meaning $v^TMv\ge0$ for every $v\in\mathbb R^d$. Define $q_M(x,x')=(x-x')^TM(x-x')$ and $d_M(x,x')=\sqrt{q_M(x,x')}$. Then there is a real matrix $L\in\mathbb R^{d\times d}$ with $M=L^TL$ and, for all $x,x'\in\mathbb R^d$, $d_M(x,x')=\|Lx-Lx'\|_2$. Consequently $d_M$ is nonnegative, symmetric, zero on the diagonal, and satisfies the triangle inequality, without asserting separation of distinct points.

## Statement references

[[def-mahalanobis-pseudometric|Definition of q_M and d_M]]

[[prop-operator-positivity-agrees-with-form-positivity-over-the-reals|Positive semidefinite forms and nonnegative operators over the reals]]

[[thm-non-negative-operator-characterisations|Factorization of nonnegative operators]]

[[def-euclidean-inner-product|Euclidean inner product and norm]]

[[thm-cauchy-schwarz-and-the-euclidean-norm|Triangle inequality for the Euclidean norm]]

[[thm-of-square-roots|Nonnegative square-root uniqueness]]

[Weinberger and Saul, §2.1, printed pp. 209–210](https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf)

[Bellet, Habrard, and Sebban, Mahalanobis distance and interpretation, printed pp. 9–10](https://arxiv.org/pdf/1306.6709)

## Facts & Assumptions

**Given:** An integer $d\ge1$, a real symmetric positive-semidefinite matrix $M\in\mathbb R^{d\times d}$, and $x,x'\in\mathbb R^d$.

[F1] For a finite-dimensional real inner-product space, a symmetric bilinear form is positive semidefinite exactly when its associated self-adjoint operator is nonnegative ([[prop-operator-positivity-agrees-with-form-positivity-over-the-reals]]).

[F2] Every nonnegative endomorphism of a finite-dimensional real inner-product space has the form $S^*S$ for a linear endomorphism $S$ ([[thm-non-negative-operator-characterisations]]).

[F3] The Euclidean inner product is $\langle u,v\rangle=\sum_{j=1}^{d}u_jv_j$ and its induced norm satisfies $\|u\|_2^2=\langle u,u\rangle$ ([[def-euclidean-inner-product]]).

[F4] The Euclidean norm is nonnegative, symmetric under sign change, vanishes only at zero, and satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F5] Every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

## Proof

1.1 Regard $M$ as the matrix of an endomorphism $T_M:\mathbb R^d\to\mathbb R^d$, $T_Mv=Mv$. The associated symmetric bilinear form is $(u,v)\mapsto u^TMv$, so its positive-semidefinite hypothesis and [F1] imply that $T_M$ is nonnegative. [given, F1]

2.1 By [F2], there is an endomorphism $S$ with $T_M=S^*S$. Let $L$ be its real matrix in the standard basis; the Euclidean adjoint has matrix $L^T$, hence $M=L^TL$. [step 1.1, F2, algebra]

3.1 For $h=x-x'$, steps 2.1 and [F3] give $q_M(x,x')=h^TMh=h^TL^TLh=\langle Lh,Lh\rangle=\|Lh\|_2^2$. Both $d_M(x,x')$ and $\|Lh\|_2$ are nonnegative and their squares agree, so [F5] gives $d_M(x,x')=\|Lx-Lx'\|_2$. [step 2.1, F3, F5, algebra]

4.1 Nonnegativity, symmetry, and zero diagonal follow from the corresponding properties of the Euclidean norm in [F4]. For any $x,y,z\in\mathbb R^d$, $d_M(x,z)=\|Lx-Lz\|_2\le\|Lx-Ly\|_2+\|Ly-Lz\|_2=d_M(x,y)+d_M(y,z)$ by the triangle inequality in [F4]. The pseudometric axioms follow. [step 3.1, F4] ∎
