---
id: thm-stiefel-grassmann-tangent-projections
kind: theorem
title: Tangent spaces and Frobenius projections on Stiefel and Grassmann
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-stiefel-grassmann-optimization-conventions
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - prop-tangent-space-of-a-regular-level-set-is-the-kernel
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf"
    locator: "Complete 37-page chapter, §§3.3.2, 3.4.4, 3.5.7, 3.6.2 and 3.6.4: Stiefel/Grassmann structures, tangent and horizontal spaces, Frobenius projections and gradients."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§3.6–3.8, 7.3 and 9.16: embedded metrics, gradients, Stiefel frames and Grassmann quotient geometry."
verification:
  precheck: n/a
---

## Statement

For $X\in\operatorname{St}(n,r)$, the tangent space and its Frobenius
orthogonal projection are
$$T_X\operatorname{St}(n,r)=\{Z:X^{\mathsf T}Z+Z^{\mathsf T}X=0\},\qquad \Pi_X^{\rm St}(G)=G-X\operatorname{sym}(X^{\mathsf T}G).$$
For $[X]\in\operatorname{Gr}(r,n)$, its tangent vectors have unique horizontal
representatives $Z$ with $X^{\mathsf T}Z=0$, and the quotient-metric projection
of an ambient $G$ to this horizontal space is
$$\Pi_X^{\rm Gr}(G)=(I-XX^{\mathsf T})G.$$

## Facts & Assumptions

**Given:** $1\le r\le n$, $X^{\mathsf T}X=I_r$, and the Frobenius metrics of [[def-stiefel-grassmann-optimization-conventions]].

[F1] The Stiefel constraint map is $F(X)=X^{\mathsf T}X-I_r$, and the Grassmannian is the quotient of orthonormal frames by the right orthogonal action ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F2] At a regular level, the tangent space is the kernel of the differential ([[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

## Proof

**Proof technique:** differentiate the Stiefel constraint and orthogonally decompose matrices.

1.1 The derivative of $F$ at $X$ is $DF_X[Z]=X^{\mathsf T}Z+Z^{\mathsf T}X$. It is onto the symmetric matrices because for any symmetric $H$, the choice $Z=XH/2$ gives $DF_X[Z]=H$. Thus $0$ is a regular value; [F2] identifies the tangent space with the displayed kernel. [F1, F2, given, algebra]

2.1 Write $S=\operatorname{sym}(X^{\mathsf T}G)$. Then $X^{\mathsf T}(G-XS)+(G-XS)^{\mathsf T}X=0$, so $G-XS$ is tangent. For every symmetric $H$ and tangent $Z$, $\langle XH,Z\rangle_F=\operatorname{tr}(H X^{\mathsf T}Z)=0$ because $X^{\mathsf T}Z$ is skew-symmetric. Hence $XS$ is normal and $G-XS$ is the orthogonal projection. [given, step 1.1, algebra]

2.2 The vertical tangent to the right action is $X\Omega$ with $\Omega^{\mathsf T}=-\Omega$. Every Stiefel tangent $Z$ decomposes as $Z=X\Omega+(I-XX^{\mathsf T})Z$, where $\Omega=X^{\mathsf T}Z$ is skew and the second term is horizontal. These summands are orthogonal, so the quotient tangent is represented uniquely by the horizontal summand. [F1, given, step 1.1, algebra]

3.1 The matrix $(I-XX^{\mathsf T})G$ is horizontal. For every horizontal $Z$, $\langle G-(I-XX^{\mathsf T})G,Z\rangle_F=\langle XX^{\mathsf T}G,Z\rangle_F=0$, since $X^{\mathsf T}Z=0$. Therefore it is the quotient-metric projection. Under $X\mapsto XQ$ and $G\mapsto GQ$ it becomes $(I-XX^{\mathsf T})GQ$, the same tangent vector in the changed representative. [F1, given, step 2.2, algebra] ∎