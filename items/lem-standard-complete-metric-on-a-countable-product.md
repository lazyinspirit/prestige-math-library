---
id: lem-standard-complete-metric-on-a-countable-product
kind: lemma
title: "The standard weighted metric on a countable product of bounded complete metric spaces is complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-product-topology, def-complete-metric-space, def-series, thm-geometric-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Let $((X_n,d_n))_{n\in\mathbb N}$ be complete metric spaces with $d_n\le1$. On $\prod_nX_n$, the formula $D(x,y)=\sum_{n=0}^{\infty}2^{-(n+1)}d_n(x_n,y_n)$ defines a complete metric inducing the product topology. The empty product is the one-point space.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] **The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$. The **product** is $$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$ and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the product are equal exactly when they agree at every index, functions being equal when they have the same domain and the same values. For $j \in I$ the $j$-th **projection** is $$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$ ([[def-product-topology]]).

[F2] Let $(X,d)$ be a metric space (def-metric-space). ([[def-complete-metric-space]]).

[F3] Throughout, $\mathbb{R}$ is the complete ordered field (def-real-numbers) and a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$ (def-sequence), written $(a_k)$; recall that $\mathbb{N}$ contains $0$. ([[def-series]]).

[F4] Let $r \in \mathbb{R}$ and let $r^k$ be the integer power (def-integer-power), so that $r^0 = 1$ for every $r$, including $r = 0$. 1. If $|r| < 1$ then the series $\sum r^k$ converges (def-series) and $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$ 2. If $|r| \ge 1$ then $\sum r^k$ diverges. The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular $\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to $1$. Which starting index is meant has to be said, and it is said here. ([[thm-geometric-series]]).

## Proof

**Proof technique:** direct.

1.1 Use the sum of $2^{-n}$ times the bounded coordinate metrics. [given, F1, F2]

2.1 Its balls and finite-coordinate basic neighbourhoods generate the same product topology. [step 1.1, F1]

3.1 A Cauchy sequence is coordinatewise Cauchy; assemble the coordinate limits and use a finite-head plus geometric-tail estimate. [step 2.1, F3, F1, F4]

4.1 Treat the empty product as a singleton. [step 3.1, F1]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎
