---
id: lem-near-identity-c-one-maps-sandwich-cubes
kind: lemma
title: "A $C^1$ map uniformly close to the identity derivative sandwiches a cube between contracted and expanded cubes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c-one-map-and-local-inverse, thm-mean-value-inequality-for-total-derivatives, thm-banach-fixed-point, thm-euclidean-space-complete, thm-complete-subspace-iff-closed, def-metric-ball, lem-p-norms-are-norms-and-induce-the-published-metrics]
justified_by: []
aliases: []
landmark: false
proof_strategy: fixed-point
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Lemma 6.1.3"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $C(a,r)=\{x:\|x-a\|_\infty\le r\}$ with $r>0$, let $W\subseteq\mathbb R^n$ be convex and open with $C(a,r)\subseteq W$, and let $F:W\to\mathbb R^n$ be $C^1$. Assume $F(a)=a$ and, for some $0\le q<1$,
$$\|(DF(z)-I)v\|_2\le \frac q{\sqrt n}\|v\|_2$$
for every $z\in W$ and $v\in\mathbb R^n$. Then
$$C(a,(1-q)r)\subseteq F(C(a,r))\subseteq C(a,(1+q)r).$$
Moreover, $F$ is injective on $C(a,r)$.

## Facts & Assumptions

**Given:** The cube, the $C^1$ map, and the strict derivative error bound in the statement.

[L1] A uniform bound on total derivatives over a convex open set gives the corresponding Euclidean Lipschitz bound ([[thm-mean-value-inequality-for-total-derivatives]]).

[L2] A contraction of a nonempty complete metric space has a unique fixed point ([[thm-banach-fixed-point]]).

[L3] Euclidean space is complete and every closed subspace of a complete metric space is complete ([[thm-euclidean-space-complete]], [[thm-complete-subspace-iff-closed]]).

[L4] The Euclidean and sup norms satisfy $\|w\|_\infty\le\|w\|_2\le\sqrt n\|w\|_\infty$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

## Proof

**Proof technique:** fixed-point.

1.1 Put $R=F-I$ and use [L1] with the Euclidean--sup norm comparison [L4] to obtain the following contraction estimate. [L1, L4, given]
$$\|R(x)-R(y)\|_\infty\le q\|x-y\|_\infty$$
on the cube. In particular $\|R(x)\|_\infty\le qr$, so $F(x)=x+R(x)$ lies in $C(a,(1+q)r)$.

2.1 Fix $z\in C(a,(1-q)r)$ and define $S_z(x)=z-R(x)$. Step 1.1 gives $S_z(C(a,r))\subseteq C(a,r)$ and makes $S_z$ a $q$-contraction. The cube is a nonempty closed subset of complete Euclidean space, so [L2]--[L3] give $x\in C(a,r)$ with $S_z(x)=x$, equivalently $F(x)=z$. This proves the inner containment. [L2, L3, step 1.1]

3.1 If $F(x)=F(y)$, then $x-y=R(y)-R(x)$, so step 1.1 gives $\|x-y\|_\infty\le q\|x-y\|_\infty$. Since $q<1$, $x=y$. The assumptions $r>0$ and $q<1$ are essential to the nondegenerate fixed-point argument. [step 1.1, algebra] ∎
