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
sources:
  scraped: []
  references:
    - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 4 (2008)"
      url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf"
    - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
      url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
---

## Statement

For every input satisfying the finite-budget Stiefel gradient procedure, it returns after at most $K$ trial evaluations with an output frame $X_{\rm out}\in\operatorname{St}(n,p)$. Every accepted update has nonincreasing objective value, and the returned status is `target-met` exactly when $r(X_{\rm out})\le\tau$; every other returned status has $r(X_{\rm out})>\tau$.

## Statement references

[[alg-ip-stiefel-constrained-regularized-gradient|Finite-budget Stiefel gradient procedure]]

[[thm-stiefel-grassmann-tangent-projections|Stiefel tangent-space formula]]

[[def-stiefel-qr-polar-retractions|Polar retraction formula]]

[[thm-stiefel-retractions-are-first-order|Stiefel-valued polar retraction]]

[Absil, Mahony, and Sepulchre, *Optimization Algorithms on Matrix Manifolds*, Chapter 4, Example 4.1.3](https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf)

[Nicolas Boumal, *An Introduction to Optimization on Smooth Manifolds*, §7.3](https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf)

## Facts & Assumptions

**Given:** The data and inputs of [[alg-ip-stiefel-constrained-regularized-gradient]], including $X_0\in\operatorname{St}(n,p)$, a finite integer $K\ge0$, and positive step sizes $\alpha_k$ for $0\le k<K$.

[F1] [[alg-ip-stiefel-constrained-regularized-gradient]]: at each current frame $X$, the procedure forms $g=G-X\operatorname{sym}(X^{\mathsf T}G)$ and trials $\eta=-\alpha_k g$.

[F2] [[thm-stiefel-grassmann-tangent-projections]]: $T_X\operatorname{St}(n,p)=\{Z:X^{\mathsf T}Z+Z^{\mathsf T}X=0\}$.

[F3] [[thm-stiefel-retractions-are-first-order]]: the polar map on a Stiefel tangent input is defined and takes values in $\operatorname{St}(n,p)$.

[F4] [[alg-ip-stiefel-constrained-regularized-gradient]]: an accepted candidate becomes the current frame, a rejected candidate returns the previous frame, the finite schedule index increases after each accepted nonterminal trial, and the residual test controls the returned status.

## Proof

1.1 For a current $X\in\operatorname{St}(n,p)$, put $M=X^{\mathsf T}G$. From [F1] and $X^{\mathsf T}X=I_p$, the projected gradient satisfies $X^{\mathsf T}g+g^{\mathsf T}X=M+M^{\mathsf T}-2\operatorname{sym}(M)=0$. Thus $g\in T_X\operatorname{St}(n,p)$ by [F2], and multiplication by $-\alpha_k$ keeps $\eta$ tangent. [given, F1, F2, algebra]

2.1 The initial frame is in $\operatorname{St}(n,p)$ by the input condition. Whenever a current frame is in $\operatorname{St}(n,p)$, step 1.1 makes the trial tangent and [F3] puts the polar candidate in $\operatorname{St}(n,p)$. An accepted candidate is the next current frame; a rejected candidate returns the previous frame. Hence every current frame and every possible returned frame remains in $\operatorname{St}(n,p)$ by finite induction. [given, F3, F4, step 1.1, algebra]

3.1 The index begins at zero, increases by one after each accepted nonterminal trial, and the loop ends when $k=K$; every other branch returns immediately. Therefore at most $K$ trial evaluations occur. The procedure accepts only candidates with objective no greater than the current value, and its residual test labels an output target-met exactly when its residual is at most $\tau$; every other return branch follows a failed target test and has residual greater than $\tau$. [given, F4, step 2.1, algebra] ∎
