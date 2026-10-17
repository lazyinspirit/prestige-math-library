---
id: lem-coordinate-separable-penalty-is-proper-closed-convex
kind: lemma
title: "Finite separable block penalties are proper, closed, and convex"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-proper-closed-convex-function-on-rn
  - thm-induction-principle
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §3.3"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Lecture 3, §3.3"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Statement

Let $n\ge1$ be finite, let $d_i\ge1$, and let each $g_i:\mathbb R^{d_i}\to(-\infty,+\infty]$ be proper, closed, and convex in the epigraph convention of [[def-proper-closed-convex-function-on-rn]]. On the product $\mathbb R^{d_1}\times\cdots\times\mathbb R^{d_n}$ define $g(x)=\sum_{i=1}^n g_i(x_i)$. Then $g$ is proper, closed, and convex. The proof below uses only finite construction and the closed epigraphs of the separate terms.

## Facts & Assumptions

**Given:** A finite nonempty block list and the functions in the Statement.

[F1] [[def-proper-closed-convex-function-on-rn]]: each $g_i$ has nonempty effective domain, satisfies the extended-real convexity inequality, and has closed epigraph.

[F2] [[thm-induction-principle]]: a property true at the base index and preserved at each successor holds for every natural index in the finite block list.

[A1] Each block dimension $d_i$ is finite and positive, and the index set has size $n\ge1$.

## Proof

1.1 For each $i$, [F1] gives a point in $\operatorname{dom}g_i$. The empty tuple is a choice for the first zero blocks; if a tuple has been constructed for the first $k<n$ blocks, append one point from the nonempty $\operatorname{dom}g_{k+1}$. Induction [F2] gives a tuple $x$ in all $n$ domains, so $g(x)<+\infty$ and $g$ is proper. Only finitely many choices are made. [A1, F1, F2, construct]

1.2 If $g(x),g(y)<+\infty$ and $0\le\theta\le1$, apply the convexity inequality in [F1] to each pair $(x_i,y_i)$ and add the finitely many inequalities. If either endpoint has infinite $g$ value, the extended-real inequality is automatic under the endpoint convention. Thus $g$ is convex. [F1, given, algebra]

1.3 Fix a block $i$ and a real $c$. Its weak sublevel $C_{i,c}=\{u_i:g_i(u_i)\le c\}$ is closed: the map $u_i\mapsto(u_i,c)$ preserves Euclidean distances and is continuous, so $C_{i,c}$ is its preimage of the closed set $\operatorname{epi}g_i$ from [F1]. Therefore, whenever $g_i(x_i)>c$, the open complement of $C_{i,c}$ is a neighborhood of $x_i$ throughout which $g_i>c$. [F1, given, algebra]

2.1 Take any $(x,t)\notin\operatorname{epi}g$. If all $g_i(x_i)$ are finite, put $s=\sum_i g_i(x_i)>t$ and $c_i=g_i(x_i)-(s-t)/(2n)$. By step 1.3, each $x_i$ has an open neighborhood on which $g_i>c_i$, so their product is a neighborhood of $x$ on which $g(u)>\sum_i c_i=(s+t)/2$. With $\eta=(s-t)/4>0$, the product of these neighborhoods and $(t-\eta,t+\eta)$ misses $\operatorname{epi}g$, because its height coordinate is below $t+\eta<(s+t)/2$. [A1, step 1.3, given, algebra]

2.2 If some $g_i(x_i)=+\infty$, take the least such index $i$. For each $j\ne i$, put $c_j=g_j(x_j)-1$ when that value is finite, and $c_j=0$ when it is infinite. Choose $B=t+1-\sum_{j\ne i}c_j$. Since $g_i(x_i)>B$ and $g_j(x_j)>c_j$, step 1.3 supplies an open neighborhood of each block on which the corresponding strict lower bound holds. Throughout their product, $g(u)>B+\sum_{j\ne i}c_j=t+1$. Restrict the epigraph-height coordinate to $(t-1/2,t+1/2)$; this neighborhood also misses $\operatorname{epi}g$. [A1, step 1.3, given, algebra]

3.1 Every point outside $\operatorname{epi}g$ is covered by one of steps 2.1 or 2.2, so its complement is open and $\operatorname{epi}g$ is closed. Together with properness from step 1.1 and convexity from step 1.2, this proves the Statement without converting an arbitrary sequential-closure claim into topological closedness. [step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎

