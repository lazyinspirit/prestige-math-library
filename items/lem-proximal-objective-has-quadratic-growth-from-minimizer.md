---
id: lem-proximal-objective-has-quadratic-growth-from-minimizer
kind: lemma
title: "A quadratic regularization has quadratic growth from its minimizer"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-proper-closed-convex-function-on-rn
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

Let $F:\mathbb R^n\to(-\infty,+\infty]$ be convex, let $t>0$, $v\in\mathbb R^n$, and suppose $p$ minimizes $Q(y)=F(y)+\|y-v\|_2^2/(2t)$ with $Q(p)<+\infty$. Then for every $z$ with $F(z)<+\infty$,
$$Q(z)\ge Q(p)+\frac{\|z-p\|_2^2}{4t}.$$

## Facts & Assumptions

**Given:** The extended-real convexity convention [[def-proper-closed-convex-function-on-rn]] and Euclidean quadratic identity [[def-euclidean-inner-product]].

[F1] Convexity gives $F((p+z)/2)\le(F(p)+F(z))/2$ for finite-valued endpoints ([[def-proper-closed-convex-function-on-rn]]).

[F2] The midpoint identity is $\|(p+z)/2-v\|_2^2=(\|p-v\|_2^2+\|z-v\|_2^2)/2-\|p-z\|_2^2/4$ ([[def-euclidean-inner-product]]).

[F3] Since $Q(p)<+\infty$ and the quadratic term is finite, $F(p)<+\infty$; together with the stated $F(z)<+\infty$, both endpoints are in the finite domain required for [F1].

## Proof

1.1 [F3] puts both endpoints in the finite domain. Apply [F1] to $p,z$ and combine with [F2], after multiplying the latter by $1/(2t)$, to obtain $Q((p+z)/2)\le(Q(p)+Q(z))/2-\|z-p\|_2^2/(8t)$. [F1, F2, F3, algebra]

2.1 Minimality gives $Q(p)\le Q((p+z)/2)$. Combining with step 1.1 and rearranging yields $Q(z)\ge Q(p)+\|z-p\|_2^2/(4t)$, including $z=p$ with equality. [given, step 1.1, algebra] ∎

