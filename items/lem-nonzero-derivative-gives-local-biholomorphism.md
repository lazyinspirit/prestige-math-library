---
id: lem-nonzero-derivative-gives-local-biholomorphism
kind: lemma
title: "A nonzero complex derivative gives a local biholomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-holomorphic-functions-are-real-analytic-and-smooth, cor-jacobian-determinant-of-a-holomorphic-map, thm-euclidean-inverse-function-theorem, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, thm-continuous-image-of-a-connected-space, def-biholomorphic-map, lem-euclidean-polygonal-paths-are-continuous, thm-path-connected-implies-connected]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "$f'(a)\\ne0$ gives a local biholomorphism"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 1.10"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

If $f$ is holomorphic near $a$ and $f'(a)\ne0$, then $f$ is biholomorphic between neighbourhoods of $a$ and $f(a)$.

On suitable complex domains $V$ and $W$ with $a\in V$ and $f(a)\in W$, the restriction $f|_V:V\to W$ is biholomorphic ([[def-biholomorphic-map]]), and its inverse $g$ satisfies
$$g'(w)=\frac1{f'(g(w))}\qquad(w\in W).$$

## Facts & Assumptions

**Given:** A holomorphic function $f$ on an open neighbourhood of $a$ with $f'(a)\ne0$. Holomorphic functions are smooth as real maps near $a$ ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[L1] For a holomorphic map $f=u+iv$, its real Jacobian determinant is $|f'|^2$, and this determinant is positive exactly where $f'\ne0$ ([[cor-jacobian-determinant-of-a-holomorphic-map]]).

[L2] If a $C^1$ map between open subsets of $\mathbb R^n$ has invertible derivative at $a$, then it restricts to a $C^1$ bijection between open neighbourhoods, whose inverse $g$ satisfies $Dg(y)=Df(g(y))^{-1}$ ([[thm-euclidean-inverse-function-theorem]]).

[L3] A real totally differentiable plane map is complex differentiable exactly when its real derivative is multiplication by a complex number; that number is its complex derivative ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L4] A continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]], claim 1).

[L5] A segment $t\mapsto(1-t)v_0+tv_1$ that lies in a subset $A$ is a continuous path in $A$, and a path-connected subset of a topological space is a connected subset ([[lem-euclidean-polygonal-paths-are-continuous]], [[thm-path-connected-implies-connected]], claim 2).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\det Df(a)=|f'(a)|^2>0$, so the real derivative $Df(a)$ is invertible. [L1, given]

2.1 Apply [L2] to the underlying smooth real map: there are open neighbourhoods $V_0$ of $a$ and $W_0$ of $f(a)$ such that $f|_{V_0}:V_0\to W_0$ is bijective with a $C^1$ inverse $g$. [step 1.1, L2]

3.1 At every $w\in W_0$, the derivative $Df(g(w))$ is multiplication by $f'(g(w))$ by [L3], and it is invertible by the inverse-function construction. Hence $Dg(w)=Df(g(w))^{-1}$ is multiplication by $1/f'(g(w))$; [L3] makes $g$ complex differentiable there with the displayed derivative. [step 2.1, L3, algebra]

4.1 Choose a disc $V$ centred at $a$ with closure contained in $V_0$, and put $W:=f[V]$. The disc $V$ is nonempty and open, and the triangle inequality keeps the segment between any two of its points inside it, so [L5] makes $V$ connected and hence a complex domain. The homeomorphism $f|_{V_0}$ makes $W$ open, while [L4] makes it connected as the continuous image of $V$. Thus $V$ and $W$ are complex domains, and steps 2.1 and 3.1 show that $f|_V$ and its inverse are holomorphic. Hence $f|_V:V\to W$ is biholomorphic. [step 2.1, step 3.1, L4, L5, given] ∎
