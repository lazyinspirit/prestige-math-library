---
id: lem-ip-stiefel-gradient-finite-budget-return-and-feasibility
kind: lemma
title: The Stiefel gradient procedure returns a feasible iterate within its finite budget
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - alg-ip-stiefel-constrained-regularized-gradient
  - thm-stiefel-grassmann-tangent-projections
  - def-stiefel-qr-polar-retractions
  - thm-stiefel-retractions-are-first-order
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references:
    - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 4 (2008)"
      url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf"
    - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
      url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
---

## Statement

For the supplied $C^1$ objective and ambient gradient oracle, the displayed projected vector is the Frobenius metric-dual gradient of the restricted objective, and every polar trial is defined. For every input satisfying the finite-budget Stiefel gradient procedure, it returns after at most $K$ trial evaluations with an output frame $X_{\rm out}\in\operatorname{St}(n,p)$. Every accepted update has nonincreasing objective value, and the returned status is `target-met` exactly when $r(X_{\rm out})\le\tau$; every other returned status has $r(X_{\rm out})>\tau$.

## Statement references

[[alg-ip-stiefel-constrained-regularized-gradient|Finite-budget Stiefel gradient procedure]]

[[thm-stiefel-grassmann-tangent-projections|Stiefel tangent-space formula]]

[[def-stiefel-qr-polar-retractions|Polar retraction formula]]

[[thm-stiefel-retractions-are-first-order|Stiefel-valued polar retraction]]

[Absil, Mahony, and Sepulchre, *Optimization Algorithms on Matrix Manifolds*, Chapter 4, Example 4.1.3](https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf)

[Nicolas Boumal, *An Introduction to Optimization on Smooth Manifolds*, §7.3](https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf)

## Facts & Assumptions

**Given:** The data and inputs of [[alg-ip-stiefel-constrained-regularized-gradient]], including $X_0\in\operatorname{St}(n,p)$, a finite integer $K\ge0$, and positive step sizes $\alpha_k$ for $0\le k<K$.

[F1] [[alg-ip-stiefel-constrained-regularized-gradient]] supplies a $C^1$ objective on the ambient open set and an oracle with $D\Phi(X)[Z]=\langle G(X),Z\rangle_F$. At each current frame $X$, the procedure forms $g=G-X\operatorname{sym}(X^{\mathsf T}G)$ and trials $\eta=-\alpha_k g$.

[F2] [[thm-stiefel-grassmann-tangent-projections]]: $T_X\operatorname{St}(n,p)=\{Z:X^{\mathsf T}Z+Z^{\mathsf T}X=0\}$.

[F3] [[thm-stiefel-retractions-are-first-order]]: the polar map on a Stiefel tangent input is defined and takes values in $\operatorname{St}(n,p)$.

[F4] [[alg-ip-stiefel-constrained-regularized-gradient]]: an accepted candidate becomes the current frame, a rejected candidate returns the previous frame, the finite schedule index increases after each accepted nonterminal trial, and the residual test controls the returned status.

## Proof

1.1 For a current $X\in\operatorname{St}(n,p)$, put $M=X^{\mathsf T}G$. From [F1] and $X^{\mathsf T}X=I_p$, the projected gradient satisfies $X^{\mathsf T}g+g^{\mathsf T}X=M+M^{\mathsf T}-2\operatorname{sym}(M)=0$. Thus $g\in T_X\operatorname{St}(n,p)$ by [F2], and multiplication by $-\alpha_k$ keeps $\eta$ tangent. [given, F1, F2, algebra]

2.1 Put $S=\operatorname{sym}(X^{\mathsf T}G)$, so $S^{\mathsf T}=S$. If $Z\in T_X\operatorname{St}(n,p)$, then $A=X^{\mathsf T}Z$ is skew-symmetric by [F2]. Hence $\langle XS,Z\rangle_F=\operatorname{tr}(SA)=0$: transposing and cyclically reordering gives $\operatorname{tr}(SA)=\operatorname{tr}(A^{\mathsf T}S^{\mathsf T})=-\operatorname{tr}(AS)=-\operatorname{tr}(SA)$. The derivative of the restriction on a tangent $Z$ is therefore $D\Phi(X)[Z]=\langle G,Z\rangle_F=\langle g,Z\rangle_F$. Together with step1.1 this makes $g$ its tangent metric-dual vector. It is unique, since two such tangent vectors differ by a tangent vector whose pairing with itself is zero. This uses only the supplied first derivative, so $C^1$ suffices. [given, F1, F2, step 1.1, algebra]

2.2 The initial frame is in $\operatorname{St}(n,p)$ by the input condition. Whenever a current frame is in $\operatorname{St}(n,p)$, step1.1 makes the trial tangent. Then $(X+\eta)^{\mathsf T}(X+\eta)=I_p+\eta^{\mathsf T}\eta$, so for $v\ne0$ its quadratic form is $\|v\|_2^2+\|\eta v\|_2^2>0$. Thus $X+\eta$ has full column rank, the polar call is in the declared domain of [F3], and [F3] puts its candidate in $\operatorname{St}(n,p)\subset U$. In particular every subsequent objective, residual and oracle evaluation has an input in its supplied domain. An accepted candidate is the next current frame; a rejected candidate returns the previous frame. Hence every current frame and every possible returned frame remains in $\operatorname{St}(n,p)$ by finite induction. [given, F3, F4, step 1.1, algebra]

3.1 The index begins at zero, increases by one after each accepted nonterminal trial, and the loop ends when $k=K$; every other branch returns immediately. Therefore at most $K$ trial evaluations occur. The procedure accepts only candidates with objective no greater than the current value, and its residual test labels an output target-met exactly when its residual is at most $\tau$; every other return branch follows a failed target test and has residual greater than $\tau$. [given, F4, step 2.2, algebra] ∎

