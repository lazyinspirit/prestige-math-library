---
id: prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component
kind: proposition
title: "A smooth function with zero differential is constant on each connected component"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-differential-sends-curve-velocities-to-composite-curve-velocities, cor-zero-derivative-implies-constant, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

If $f:M\to\mathbb R$ is smooth and $df_p=0$ for every $p\in M$, then $f$ is constant on each connected component of $M$.

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$ with $df_p=0$ for every $p\in M$.

[L1] The differential sends curve velocities to composite curve velocities ([[thm-the-differential-sends-curve-velocities-to-composite-curve-velocities]]).

[L2] A continuous real-valued function on an interval with zero derivative at every interior point is constant ([[cor-zero-derivative-implies-constant]]).

[F1] Smooth charts are diffeomorphisms onto Euclidean open sets ([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

## Proof

**Proof technique:** direct.

1.1 Let $C$ be a connected component of $M$ and fix $p\in C$. We claim that the fiber $$ S:=\{q\in C:f(q)=f(p)\} $$ is open in $C$. [given]

1.2 Let $q\in C$. Choose a smooth chart $(U,x)$ around $q$ and an open Euclidean ball $B$ with $x(q)\in B\subseteq x(U)$; put $W:=x^{-1}(B)$. For any $r\in W$, the map $$ \gamma_{q,r}(t):=x^{-1}\bigl((1-t)x(q)+tx(r)\bigr)\qquad(0\le t\le 1) $$ is a smooth curve in $W$ from $q$ to $r$ by [F1]. For each $t_0\in[0,1]$, apply [L1] to the shifted curve $s\mapsto \gamma_{q,r}(t_0+s)$ at $s=0$; since $df_{\gamma_{q,r}(t_0)}=0$, this gives $(f\circ\gamma_{q,r})'(t_0)=0$. Thus [L2] makes $f\circ\gamma_{q,r}$ constant on $[0,1]$, so $f(r)=f(q)$. Therefore $f$ is constant on $W$. [F1, L1, L2, given, choose]

2.1 Step 1.2 shows that every fiber of $f|_C$ is open in $C$. Hence $S$ is open, and so is its complement $C\setminus S$, which is the union of the other fibers. Since $C$ is connected and $S$ is nonempty, one must have $C\setminus S=\varnothing$. Therefore $f$ is constant on $C$. [step 1.1, step 1.2]

3.1 Because the connected component $C$ was arbitrary, $f$ is constant on each connected component of $M$. [step 2.1] ∎
