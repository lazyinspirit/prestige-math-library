---
id: lem-loop-products-in-a-topological-group-agree-up-to-homotopy
kind: lemma
title: "Pointwise multiplication and concatenation of loops in a topological group agree up to homotopy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-topological-group, def-based-loops-and-fundamental-group, def-homotopy-relative-and-path-homotopy, thm-product-universal-property, lem-continuity-is-local-and-pastes, lem-algebra-of-continuous-real-maps-on-a-space]
justified_by: []
aliases: []
landmark: true
short: "two loop products agree"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 1, Problem 3"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a topological group with identity $e$, and let $\alpha,\beta:[0,1]\to G$ be loops based at $e$. Their pointwise product $(\alpha\cdot\beta)(t)=\alpha(t)\beta(t)$ is endpoint-fixed homotopic both to $\alpha*\beta$ and to $\beta*\alpha$. Consequently pointwise multiplication descends to loop classes and agrees there with loop concatenation.

## Facts & Assumptions

**Given:** A topological group $G$ with identity $e$ and based loops $\alpha,\beta$ at $e$.

[F1] Multiplication $m:G\times G\to G$, $m(x,y)=xy$, is continuous ([[def-topological-group]]).

[F2] The product $[\alpha][\beta]$ traverses $\alpha$ first and $\beta$ second, using the concatenated loop $\alpha*\beta$ ([[def-based-loops-and-fundamental-group]]).

[F3] An endpoint-fixed path homotopy is a continuous map $H:[0,1]^2\to G$ that keeps the two path endpoints fixed throughout ([[def-homotopy-relative-and-path-homotopy]]).

[L1] A map into a product is continuous exactly when all its components are continuous ([[thm-product-universal-property]]).

[L2] Maps continuous on the members of a finite closed cover and agreeing on overlaps paste to a continuous map ([[lem-continuity-is-local-and-pastes]]).

[L3] Finite sums, products, maxima, and minima of continuous real-valued maps are continuous, and quotients are continuous wherever their denominators do not vanish ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

## Proof

**Proof technique:** constructive.

1.1 The map $K:[0,1]^2\to G$, $K(s,t)=\alpha(s)\beta(t)$, is continuous, and $K(0,0)=K(1,0)=K(0,1)=K(1,1)=e$. [given, F1, L1, construct]

2.1 For $u,t\in[0,1]$, put $$A_u(t)=\min\left\{\frac{t}{1-u/2},1\right\},\qquad B_u(t)=\max\left\{\frac{t-u/2}{1-u/2},0\right\}.$$ Since $1-u/2\ge1/2$, [L2] and [L3] make these functions continuous on the parameter square. Hence $H_1(t,u)=K(A_u(t),B_u(t))$ is an endpoint-fixed homotopy: at $u=0$ it is $\alpha(t)\beta(t)$, and at $u=1$ it traverses $\alpha$ first and $\beta$ second, so it is $\alpha*\beta$ under [F2]. [step 1.1, F2, F3, L1, L2, L3]

3.1 The formula $H_2(t,u)=K(B_u(t),A_u(t))$ is another endpoint-fixed homotopy. At $u=0$ it is again $\alpha(t)\beta(t)$, while at $u=1$ it traverses $\beta$ first and $\alpha$ second, so it is $\beta*\alpha$. [step 1.1, step 2.1, F2, F3]

4.1 If $\alpha$ or $\beta$ is replaced by an endpoint-fixed homotopic loop, multiplying the two homotopies pointwise gives an endpoint-fixed homotopy by [F1] and [L1]. Thus pointwise multiplication is well defined on loop classes, and steps 2.1 and 3.1 identify it with both concatenation orders. [step 2.1, step 3.1, F1, L1, discharge-construct] ∎
