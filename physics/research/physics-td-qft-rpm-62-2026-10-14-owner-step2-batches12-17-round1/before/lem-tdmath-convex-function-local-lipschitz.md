---
id: lem-tdmath-convex-function-local-lipschitz
kind: lemma
title: Finite convex functions are locally Lipschitz
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-convex-subset-of-euclidean-space]
dependency_roles:
  def-convex-subset-of-euclidean-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §III.C"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.1 and 7.2–7.3, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Statement

Let $U\subset\mathbb R^d$ be open and convex, and let $f:U\to\mathbb R$ be finite and convex. For every $x_0\in U$, there are a neighborhood $V$ of $x_0$ and $L<\infty$ such that $|f(x)-f(y)|\le L\|x-y\|$ for all $x,y\in V$. The same conclusion holds for finite concave functions by applying the result to $-f$.

## Facts & Assumptions

**Given:** The open convex domain, finite-valued function, and Euclidean norm.

[F1] [[def-convex-subset-of-euclidean-space]]: line segments and finite convex combinations of points in a convex set remain in that set.

## Proof

1.1 Choose a closed cube centered at $x_0$ whose concentric dilation by factor $2$ lies in $U$. Every point of the cube is a convex combination of its finitely many vertices, so [F1] and convexity bound $f$ above there by the largest vertex value $M$. If $x$ lies in the cube, then $2x_0-x$ lies in the dilated cube; convexity gives $f(x_0)\le(f(x)+f(2x_0-x))/2$, hence $f(x)\ge2f(x_0)-M'$, where $M'$ is the finite upper bound on the dilated cube. Thus $f$ is bounded above and below on a ball about $x_0$. [given, F1, construct]

2.1 Choose concentric balls $B(x_0,r)\subset B(x_0,2r)\subset U$ on which $m\le f\le M$. For distinct $x,y\in B(x_0,r/2)$, extend the segment from $x$ through $y$ to $z=y+(r/2)(y-x)/\|y-x\|$, which lies in $B(x_0,2r)$. Put $\theta=\|y-x\|/(r/2+\|y-x\|)$, so $y=(1-\theta)x+\theta z$. Convexity yields $f(y)-f(x)\le\theta(M-m)\le(2(M-m)/r)\|y-x\|$. Repeating with $x,y$ interchanged gives the reverse bound. Negation proves the concave case. [step 1.1, F1, algebra] ∎
