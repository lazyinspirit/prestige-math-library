---
id: lem-isoparametric-cofactor-normal-perturbation
kind: lemma
title: Cofactor, surface-Jacobian, and normal perturbation bounds
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-isoparametric-curved-cell-map
  - def-curved-domain-geometry-approximation
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2023, Part III, Chapter 8
      url: https://people.tamu.edu/~guermond/M661_FALL_2023/chap08.pdf
    - title: Gerald Dziuk and Charles M. Elliott, Finite element methods for surface PDEs, Acta Numerica 22 (2013)
      url: https://wrap.warwick.ac.uk/id/eprint/53966/1/WRAP_Elliott_DziEll13a.pdf
verification:
  precheck: pass
---

## Statement

Let $A=D\Phi$ and $A_h=D\Phi_h$ be orientation-preserving cell-map derivatives with $\det A,\det A_h\ge j_*>0$, $\|A\|_{op},\|A_h\|_{op}\le M$, and $\|A-A_h\|_{op}\le e_1$. For every unit reference-facet normal $\widehat n$, define the surface Jacobians $J_\Gamma(A)=\|\operatorname{cof}(A)\widehat n\|$, $J_\Gamma(A_h)=\|\operatorname{cof}(A_h)\widehat n\|$, and mapped unit normals $n_\Gamma(A)=\operatorname{cof}(A)\widehat n/J_\Gamma(A)$ and $n_\Gamma(A_h)=\operatorname{cof}(A_h)\widehat n/J_\Gamma(A_h)$. Then
$$\|\operatorname{cof}(A)-\operatorname{cof}(A_h)\|_{op}+|J_\Gamma(A)-J_\Gamma(A_h)|+|n_\Gamma(A)-n_\Gamma(A_h)|\le C(d,M,j_*)e_1.$$
For any regular reference-facet parametrization $\widehat f$, the chart Gram-metric factor of [[def-isoparametric-curved-cell-map]] is $\sqrt{\det(D\widehat f^T A^T A D\widehat f)}=J_\Gamma(A)\sqrt{\det(D\widehat f^T D\widehat f)}$, pointwise with $A=D\Phi(\widehat f)$. Thus $J_\Gamma(A)$ is the surface-area factor relative to reference-facet area; it equals the chart factor when the reference chart has unit area factor. The same relation holds for $A_h$.

## Facts & Assumptions

**Given:** Orientation-preserving invertible matrices $A,A_h\in\mathbb R^{d\times d}$ with determinant lower bound $j_*$, operator norm upper bound $M$, derivative gap $e_1$, and a unit reference normal $\widehat n$.

[F1] [[def-isoparametric-curved-cell-map]]: for a reference facet chart $\widehat f$, the physical surface factor is the square root of the Gram determinant of $D(\Phi\circ\widehat f)$.

[F2] [[def-curved-domain-geometry-approximation]]: $e_1=\|D\Phi-D\Phi_h\|_{L^\infty;op}$.

## Proof

1.1 Each entry of $\operatorname{cof}(A)$ is a signed $(d-1)$-minor, hence a polynomial of degree $d-1$ in the entries of $A$. On the bounded matrix ball $\|A\|_{op},\|A_h\|_{op}\le M$, its derivative is bounded by a constant depending only on $d,M$. The mean-value inequality therefore gives $\|\operatorname{cof}(A)-\operatorname{cof}(A_h)\|_{op}\le C(d,M)\|A-A_h\|_{op}=C(d,M)e_1$. [F1, F2, given, algebra]

1.2 Let $T$ have orthonormal columns spanning the reference facet tangent space, so $Q=[T,\widehat n]$ is orthogonal. The squared Gram-metric surface factor is $\det(T^TA^TAT)$. The identity $\operatorname{cof}(A)^T\operatorname{cof}(A)=\operatorname{cof}(A^TA)$ and orthogonal covariance of cofactors show $\widehat n^T\operatorname{cof}(A^TA)\widehat n$ is the bottom-right cofactor of $Q^TA^TAQ$, which is exactly $\det(T^TA^TAT)$. Therefore $\|\operatorname{cof}(A)\widehat n\|^2=\det(T^TA^TAT)$. For a regular chart write $D\widehat f=TR$, where $R$ is an invertible $(d-1)\times(d-1)$ matrix. Then $\det(D\widehat f^TA^TAD\widehat f)=\det(R)^2\det(T^TA^TAT)$ and $\det(D\widehat f^TD\widehat f)=\det(R)^2$. Taking positive square roots gives the stated chart-factor relation, also for $A_h$. [F1, given, algebra]

2.1 If $\sigma_1(A)\ge\cdots\ge\sigma_d(A)>0$ are the singular values, the smallest singular value of $\operatorname{cof}(A)$ is $\prod_{i=2}^d\sigma_i(A)=\det(A)/\sigma_1(A)\ge j_*/M$. Thus $J_\Gamma(A)\ge j_*/M$, and the same bound holds for $A_h$. The reverse triangle inequality and step 1.1 give $|J_\Gamma(A)-J_\Gamma(A_h)|\le C(d,M)e_1$. [F1, given, step 1.1, algebra]

3.1 Put $a=\operatorname{cof}(A)\widehat n$ and $b=\operatorname{cof}(A_h)\widehat n$. For nonzero vectors, $|a/|a|-b/|b||\le 2|a-b|/\min(|a|,|b|)$. The lower bounds from step 2.1 and the cofactor gap from step 1.1 therefore imply $|n_\Gamma(A)-n_\Gamma(A_h)|\le C(d,M,j_*)e_1$. Combining the three estimates proves the result. [step 1.1, step 2.1, algebra] ∎
