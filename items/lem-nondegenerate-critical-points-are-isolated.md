---
id: lem-nondegenerate-critical-points-are-isolated
kind: lemma
title: "Nondegenerate critical points are isolated"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-hessian-of-a-function-at-a-critical-point, def-nondegenerate-critical-point-nullity-index-and-coindex, thm-coordinate-formula-for-the-differential-of-a-function, thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: dimension split
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

Let $f:M\to\mathbb R$ be smooth. Every nondegenerate critical point of $f$ has
an open neighbourhood containing no other critical point of $f$.

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$ and a nondegenerate critical
point $p$ of $f$.

[F1] A critical point is nondegenerate exactly when its Hessian has trivial
kernel ([[def-hessian-of-a-function-at-a-critical-point]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[L1] In coordinates $x=(x^1,\dots,x^n)$,
$$df_q=\sum_i\frac{\partial(f\circ x^{-1})}{\partial x^i}(x(q))\,dx^i_q.$$
([[thm-coordinate-formula-for-the-differential-of-a-function]])

[L2] A $C^1$ map $\mathbb R^n\to\mathbb R^n$ with invertible derivative at a
point is a local diffeomorphism there
([[thm-euclidean-inverse-function-theorem]]).

## Proof

**Proof technique:** dimension split.

1.1 If $\dim M=0$, then $\{p\}$ is open in $M$, so it already contains no other point and hence no other critical point. [given]

1.2 Assume $\dim M=n>0$. Choose a chart $x:U\to\mathbb R^n$ with $x(p)=0$, write $g:=f\circ x^{-1}$, and define $G(u):=(\partial_1g(u),\dots,\partial_ng(u))$. By [L1], for $q\in U$ one has $df_q=0$ exactly when $G(x(q))=0$. [L1, given, assume-case[ positive-dimension], construct]

2.1 The derivative $DG(0)$ is the Hessian matrix of $g$ at $0$, and [F1] makes it invertible because $p$ is nondegenerate. [F1, step 1.2]

3.1 Applying [L2] to $G$ at $0$ gives a neighbourhood $W$ of $0$ in which $G^{-1}(0)=\{0\}$. Therefore the corresponding neighbourhood $x^{-1}[W]\subseteq U$ contains no critical point except $p$. [L2, step 2.1]

4.1 The zero-dimensional case is step 1.1, and the positive-dimensional case is step 3.1. Hence every nondegenerate critical point is isolated. [step 1.1, step 3.1] ∎
