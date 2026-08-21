---
id: prop-basic-operations-preserving-convexity
kind: proposition
title: "Nonnegative combinations, affine precomposition, and finite pointwise maxima preserve convexity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, def-euclidean-linear-map, def-finite-sum, lem-finite-sum-laws, lem-finite-set-has-max]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §§3.2.1–3.2.3"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

The following operations preserve convexity on their natural convex domains:

1. a finite linear combination $\sum_j a_jf_j$ with $a_j\ge0$;
2. precomposition $f\circ A$ with an affine map $A(x)=Tx+b$, where $T$ is Euclidean linear ([[def-euclidean-linear-map]]).

The pointwise maximum of a nonempty finite family of convex functions on a common convex domain is convex.

Finite sums and maxima use [[def-finite-sum]], [[lem-finite-sum-laws]], and [[lem-finite-set-has-max]].

## Facts & Assumptions

**Given:** Convex functions on the domains named in the Statement.

[F1] The function $f:C\to\mathbb R$ is convex when $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for all $x,y\in C$ and $t\in[0,1]$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

## Proof

**Proof technique:** direct.

1.1 For a nonnegative finite combination, multiply the inequality [F1] for $f_j$ by $a_j\ge0$ and add over $j$. This gives the convexity inequality for $\sum_ja_jf_j$. [F1, algebra]

1.2 An affine map satisfies $A((1-t)x+ty)=(1-t)A(x)+tA(y)$. Applying [F1] to the outer function gives convexity of $f\circ A$ on the convex preimage domain. [F1, algebra]

2.1 Let $g=\max_j f_j$. For each $j$, [F1] gives $$f_j((1-t)x+ty)\le(1-t)f_j(x)+tf_j(y)\le(1-t)g(x)+tg(y).$$ Taking the nonempty finite maximum over $j$ proves the inequality for $g$. [F1, algebra] ∎
