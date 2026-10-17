---
id: lem-aggregate-model-error-controls-proximal-candidate
kind: lemma
title: "Vanishing aggregate-model error controls the proximal candidate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-proximal-bundle-serious-null-method
  - lem-proximal-bundle-subproblem-has-unique-minimizer
  - lem-proximal-objective-has-quadratic-growth-from-minimizer
  - def-proper-closed-convex-function-on-rn
  - def-proximal-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - def-euclidean-inner-product
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mateo Díaz and Benjamin Grimmer, Optimal Convergence Rates for the Proximal Bundle Method, §§2–3"
      url: https://arxiv.org/pdf/2105.07874
    - title: "Dominikus Noll, Olivier Prot, and Aude Rondepierre, A proximity control algorithm to minimize nonsmooth and nonconvex functions, §§2–4"
      url: https://www.math.univ-toulouse.fr/~noll/PAPERS/pjo.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $F:\mathbb R^n\to(-\infty,+\infty]$ be proper, closed, and convex, with nonempty closed convex domain $C=\operatorname{dom}F$. Fix $t>0$, a center $x\in C$, and a finite affine model $M\le F$ on $C$. Let $z$ minimize $M(y)+\|y-x\|_2^2/(2t)$ over $C$, set $e=F(z)-M(z)\ge0$, and let $p=\operatorname{prox}_{tF}(x)$. Then
$$\|z-p\|_2^2\le4te.$$
In particular, a sequence of such model errors $e_k\to0$ forces the model candidates to approach their exact proximal points in norm.

## Facts & Assumptions

**Given:** Bundle subproblem existence [[lem-proximal-bundle-subproblem-has-unique-minimizer]], proximal mapping [[def-proximal-mapping]], resolvent/existence [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]], and quadratic growth [[lem-proximal-objective-has-quadratic-growth-from-minimizer]].

[F1] $p$ is the unique minimizer of $Q_F(y)=F(y)+\|y-x\|_2^2/(2t)$ ([[def-proximal-mapping]], [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]).

[F2] The convex function $Q_F$ obeys $Q_F(z)\ge Q_F(p)+\|z-p\|_2^2/(4t)$ ([[lem-proximal-objective-has-quadratic-growth-from-minimizer]]).

## Proof

1.1 Put $Q_M(y)=M(y)+\|y-x\|_2^2/(2t)$. Since $z$ minimizes $Q_M$ over $C$ and $p\in C$, $Q_M(z)\le Q_M(p)$. The pointwise underestimator gives $Q_M(p)\le Q_F(p)$, while $Q_F(z)=Q_M(z)+e$. Hence $Q_F(z)\le Q_F(p)+e$. [given, F1, algebra]

2.1 Apply [F2] to $z$ and combine with step 1.1: $Q_F(p)+\|z-p\|_2^2/(4t)\le Q_F(z)\le Q_F(p)+e$. Subtracting the common finite value and multiplying by $4t>0$ proves the inequality. [F2, step 1.1, algebra] ∎

