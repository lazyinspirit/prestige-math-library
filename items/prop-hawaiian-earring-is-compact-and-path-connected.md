---
id: prop-hawaiian-earring-is-compact-and-path-connected
kind: proposition
title: "The Hawaiian earring is compact and path-connected"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euclidean-spheres-and-closed-balls, thm-heine-borel-rn, def-path-connected, prop-real-line-mod-integers-is-compact-and-path-connected, thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle, thm-componentwise-limits-and-continuity, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
short: "the Hawaiian earring"
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
    - title: "Allen Hatcher, Algebraic Topology, Example 1.25"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

For every integer $n\ge1$, let $C_n$ be the circle of radius $1/n$ centred at $(1/n,0)$, and put

$$\mathbb H=\bigcup_{n\ge1}C_n\subseteq\mathbb R^2.$$

The Hawaiian earring $\mathbb H$ is compact and path-connected.

## Facts & Assumptions

**Given:** The circles $C_n=S_2((1/n,0),1/n)$ for integers $n\ge1$, and their union $\mathbb H$.

[F1] A Euclidean sphere $S_2(c,r)$ is the set of points $x$ with $\lVert x-c\rVert_2=r$ ([[def-euclidean-spheres-and-closed-balls]]).

[L1] A subset of $\mathbb R^2$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[F2] A space is path-connected when every pair of its points can be joined by a continuous path in it ([[def-path-connected]]).

[L2] The circle $\mathbb R/\mathbb Z$ is path-connected, and its standard map to the geometric unit circle is a homeomorphism ([[prop-real-line-mod-integers-is-compact-and-path-connected]], [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]).

[L3] A map into $\mathbb R^m$ is continuous exactly when its component functions are continuous; sums and scalar multiples of continuous Euclidean-valued maps are continuous ([[thm-componentwise-limits-and-continuity]]).

[L4] The Euclidean norm satisfies the reverse triangle inequality $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2$ and is continuous ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L5] For every real $\varepsilon>0$ there is an integer $N\ge1$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 Each $C_n$ contains the origin because its centre has norm $1/n$, and its radius is positive because $n\ge1$. Thus the displayed union is nonempty and no circle of radius $1/0$ occurs. [given, F1, construct, algebra]

2.1 If $x\in C_n$, then $\lVert x\rVert_2\le\lVert x-(1/n,0)\rVert_2+1/n=2/n\le2$, so $\mathbb H$ is bounded. [step 1.1, F1, algebra]

2.2 Each $C_n$ is closed: if $x\notin C_n$, then $\eta=|\lVert x-(1/n,0)\rVert_2-1/n|/2>0$, and [L4] shows that the ball of radius $\eta$ about $x$ misses $C_n$. Now let $x\notin\mathbb H$ and write $d=\lVert x\rVert_2>0$. By [L5], choose $N\ge1$ with $2/N<d/2$. Every $C_n$ with $n\ge N$ lies in the ball of radius $d/2$ about $0$, while the union of the circles with $1\le n<N$ is a finite, possibly empty, closed union that misses $x$. Intersecting a neighbourhood of $x$ disjoint from that finite union with the ball of radius $d/2$ about $x$ gives a neighbourhood disjoint from all of $\mathbb H$. Hence $\mathbb H$ is closed. [step 1.1, F1, L4, L5, algebra]

3.1 Steps 2.1 and 2.2 make $\mathbb H$ closed and bounded in $\mathbb R^2$, so it is compact by [L1]. [step 2.1, step 2.2, L1]

4.1 The affine map $z\mapsto(1/n,0)+(1/n)z$ carries the unit circle homeomorphically onto $C_n$, so [L2] and [L3] make each $C_n$ path-connected. Given $x\in C_m$ and $y\in C_n$, join $x$ to the common origin inside $C_m$ and then the origin to $y$ inside $C_n$; concatenating the paths gives a path in $\mathbb H$. Thus $\mathbb H$ is path-connected. [step 1.1, F2, L2, L3, construct] ∎
