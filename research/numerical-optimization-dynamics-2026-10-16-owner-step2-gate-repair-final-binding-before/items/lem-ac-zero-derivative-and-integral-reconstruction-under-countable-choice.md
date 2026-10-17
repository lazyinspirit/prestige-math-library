---
id: lem-ac-zero-derivative-and-integral-reconstruction-under-countable-choice
kind: lemma
title: "AC zero-derivative constancy and integrable-derivative reconstruction under Countable Choice"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-countable-choice
  - def-absolutely-continuous-function
  - def-derivative
  - def-gauge-and-fine-tagged-partition
  - thm-cousins-lemma-for-gauges
  - thm-lebesgue-outer-regularity-for-arbitrary-subsets
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume
  - thm-well-ordering-principle
  - lem-geometric-sequence-null
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - thm-first-fundamental-theorem-of-calculus-for-l-one
  - thm-algebra-of-derivatives
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is assumed for Lebesgue measure, outer regularity and the first L1 fundamental theorem. Gauge radii are uniquely defined by least natural indices; Cousin's finite-partition proof uses deterministic bisection."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem, Corollary 21 and Lemma 22–Theorem 23"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
      locator: "Printed pp. 49–51: classical zero-derivative constancy and reconstruction by subtracting the indefinite integral. The CC-only finite-gauge proof below is supplied locally."
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Theorem 1.4"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
      locator: "Printed p. 3, Chapter 1 §1.2: complete bisection proof that every positive gauge admits a finite fine tagged partition."
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) and let $a\le b$.

1. If $F:[a,b]\to\mathbb R$ is absolutely continuous and $F'=0$ almost everywhere on $(a,b)$, then $F$ is constant.
2. Let $n\ge1$, let $y:[a,b]\to\mathbb R^n$ have absolutely continuous coordinates, and let $h\in L^1([a,b];\mathbb R^n)$. If $y'_j=h_j$ almost everywhere for each coordinate $j$, then, for every $t\in[a,b]$,
$$y(t)=y(a)+\int_a^t h(s)\,ds.$$
Here $h\in L^1([a,b];\mathbb R^n)$ means that each coordinate $h_j$ is Lebesgue integrable, and the integral is the componentwise Lebesgue integral. For $a=b$ it is zero.

## Facts & Assumptions

**Given:** Countable Choice, a compact interval, and the scalar or vector data in the Statement.

[F1] Absolute continuity controls sums of absolute endpoint increments over finite families with pairwise disjoint interiors and sufficiently small total length ([[def-absolutely-continuous-function]]).

[F2] Every gauge on a compact interval admits one finite fine tagged partition; every cell lies in its tag's open gauge neighborhood ([[thm-cousins-lemma-for-gauges]], [[def-gauge-and-fine-tagged-partition]]).

[F3] Under Countable Choice, a null set has an open superset of arbitrarily small Lebesgue measure ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]).

[F4] Under Countable Choice, Lebesgue measure is complete, monotone and additive on disjoint measurable sets and agrees with interval length; finite sets are null and finite unions of null sets are null ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]).

[F5] Every nonempty subset of the naturals has a least element, and $2^{-k}\to0$ ([[thm-well-ordering-principle]], [[lem-geometric-sequence-null]]).

[F6] For $h_j\in L^1$, its indefinite Lebesgue integral is absolutely continuous and, under Countable Choice, has derivative $h_j$ almost everywhere ([[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]], [[thm-first-fundamental-theorem-of-calculus-for-l-one]]).

[F7] Derivatives use the difference-quotient limit and obey the sum and scalar rules ([[def-derivative]], [[thm-algebra-of-derivatives]]).

## Proof

1.1 If $a=b$, both conclusions hold directly. Otherwise fix $a\le s<t\le b$ and $\varepsilon>0$ for claim 1. Let $E$ be a null exceptional set for $F'=0$ on $[s,t]$, enlarged by $s,t$; it is null by [F4]. Restricting [F1] to $[s,t]$, choose $d>0$ so that total interval length below $d$ implies total absolute increment below $\varepsilon/2$. Put $\eta=\varepsilon/(2(t-s+1))$. By [F3], choose one open $U\supseteq E$ with $\lambda(U)<d$. [given, F1, F3, F4, choose]

2.1 For $x\notin E$, define $k(x)$ as the least $k\in\mathbb N_0$ such that $|F(y)-F(x)|\le\eta|y-x|$ whenever $y\in[s,t]$ and $|y-x|<2^{-k}$. This set is nonempty by $F'(x)=0$, [F7] and [F5], including $y=x$ by equality. For $x\in E$, instead take the least $k$ with $(x-2^{-k},x+2^{-k})\subseteq U$; openness and [F5] give existence. Set $\gamma(x)=2^{-k(x)}$. These uniquely specified least integers define one positive gauge; no arbitrary pointwise radius selections are needed. Obtain one finite $\gamma$-fine partition $\{([x_{i-1},x_i],\xi_i)\}_{i=1}^m$ from [F2]. [F2, F5, F7, step 1.1, construct]

3.1 Cells tagged in $E$ lie in $U$. Their interiors are disjoint, and their total length is the measure of their finite union, since shared endpoints form a finite null set. By [F4] this sum is at most $\lambda(U)<d$, so [F1] bounds their total absolute $F$-increment by $\varepsilon/2$; for an empty family the sum is zero. [F1, F4, step 1.1, step 2.1, algebra]

4.1 For every other cell, strict fineness and step 2.1 give $|F(x_i)-F(x_{i-1})|\le|F(x_i)-F(\xi_i)|+|F(\xi_i)-F(x_{i-1})|\le\eta(x_i-x_{i-1})$, because the tag lies in the cell. The sum over these cells is at most $\eta(t-s)<\varepsilon/2$. Telescoping all cells and applying step 3.1 yields $|F(t)-F(s)|<\varepsilon$. Arbitrary positive $\varepsilon$ gives equality, and arbitrary $s,t$ prove claim 1. [F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 For claim 2 with $a<b$, fix a coordinate $j$ and put $I_j(t)=\int_a^t h_j(s)\,ds$. By [F6], $I_j$ is absolutely continuous and $I'_j=h_j$ almost everywhere. The function $H_j=y_j-y_j(a)-I_j$ is absolutely continuous: for each positive tolerance use the [F1] moduli for $y_j,I_j$ at half that tolerance and take their minimum. Outside the union of the two exceptional null sets, [F7] gives $H'_j=0$. Claim 1 makes $H_j$ constant, and $H_j(a)=0$, so $y_j(t)=y_j(a)+I_j(t)$ for all $t$. Applying this argument to the finitely many coordinates proves the displayed vector identity. [given, F1, F4, F6, F7, step 4.1, algebra] ∎
