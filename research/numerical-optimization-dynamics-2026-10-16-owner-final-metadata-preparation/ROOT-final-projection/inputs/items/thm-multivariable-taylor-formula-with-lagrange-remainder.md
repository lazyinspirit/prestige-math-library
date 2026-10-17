---
id: thm-multivariable-taylor-formula-with-lagrange-remainder
kind: theorem
title: "Multivariable Taylor formula with a Lagrange remainder along a line segment"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multivariable-taylor-polynomial, lem-derivatives-along-a-line-have-the-multinomial-expansion, cor-taylor-lagrange-and-cauchy-remainders, def-convex-subset-of-euclidean-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "MAT237 notes: Taylor's theorem in several variables"
      url: "https://www.math.toronto.edu/courses/mat237y1/20199/notes/Chapter2/S2.6.html"
pipeline_run: null
---

## Statement

Let $k\in\mathbb N$, let $U\subseteq\mathbb R^m$ be open and convex, $a,a+h\in U$, and $f\in C^{k+1}(U)$. Write $\iota:\mathbb N\to\mathbb R$ for the canonical-natural map of [[def-multivariable-taylor-polynomial]]. Then some $\theta\in(0,1)$ satisfies

$$f(a+h)=T_kf(a;h)+\sum_{|\alpha|=k+1}\frac{D^\alpha f(a+\theta h)}{\iota(\alpha!)}h^\alpha.$$

## Facts & Assumptions

**Given:** The hypotheses of the statement.

[L1] Convexity keeps the segment $a+th$ in $U$ for $0\le t\le1$ ([[def-convex-subset-of-euclidean-space]]).

[L2] On an open interval containing $[0,1]$, the derivatives of $t\mapsto f(a+th)$ have the multi-index expansion through order $k+1$ ([[lem-derivatives-along-a-line-have-the-multinomial-expansion]]).

[L3] By [[cor-taylor-lagrange-and-cauchy-remainders]], if a one-variable function has derivatives through order $k+1$ on $[0,1]$ with the required endpoint continuity, then some $\theta\in(0,1)$ satisfies

$$g(1)=\sum_{j=0}^{k}\frac{g^{(j)}(0)}{\iota(j!)}+\frac{g^{(k+1)}(\theta)}{\iota((k+1)!)}$$

by the Lagrange remainder formula.

## Proof

**Proof technique:** direct.

1.1 Put $I:=\{t\in\mathbb R:a+th\in U\}$ and $g(t):=f(a+th)$. The set $I$ is open, contains $[0,1]$ by [L1], and is an interval because $U$ is convex. Hence [L2] shows that $g$ has the derivatives through order $k+1$ required by [L3]. [L1, L2]

2.1 Apply [L3] to $g$ between $0$ and $1$. [step 1.1, L3, choose]

3.1 Substitute the formula of [L2] for $g^{(j)}(0)$ and $g^{(k+1)}(\theta)$; the degree-$k$ part is the definition of $T_kf(a;h)$. [step 2.1, L2, algebra] ∎
