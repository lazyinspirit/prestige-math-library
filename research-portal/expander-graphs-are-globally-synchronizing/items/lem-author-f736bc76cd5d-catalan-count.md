---
id: lem-author-f736bc76cd5d-catalan-count
kind: lemma
title: Dyck words and elementary Catalan growth
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-sequences-in-an-ordered-field
  - math:def-rational-power
  - math:lem-rational-power-monotone
  - math:lem-rational-power-laws
  - math:thm-binomial-theorem
  - math:lem-cut-archimedean
  - math:def-binomial-coefficient
dependency_roles:
  math:def-sequences-in-an-ordered-field: mathematical-premise
  math:def-rational-power: mathematical-premise
  math:lem-rational-power-monotone: mathematical-premise
  math:lem-rational-power-laws: mathematical-premise
  math:thm-binomial-theorem: mathematical-premise
  math:lem-cut-archimedean: mathematical-premise
  math:def-binomial-coefficient: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

A Dyck word of length $2k$, for integer $k\ge1$, is a sequence of $k$ symbols $+1$ and $k$ symbols $-1$ whose every initial partial sum is nonnegative. Write $C_k$ for the number of these words. Then $C_k=\binom{2k}{k}/(k+1)$ and

$$\frac{4^k}{(2k+1)(k+1)}\le C_k\le4^k.$$

In the real-sequence sense of [[math:def-sequences-in-an-ordered-field]], $C_k^{1/(2k)}\to2$. The integer $\binom{m}{r}=m!/(r!(m-r)!)$ counts the $r$-element subsets of an $m$-element set, where $m!=1\cdot2\cdots m$ and $0!=1$.

## Facts & Assumptions

[F1] A real sequence converges to a real number when, for every positive tolerance, all sufficiently late terms lie within that tolerance ([[math:def-sequences-in-an-ordered-field]]).

[F2] For $a>0$ and integer $N\ge1$, $a^{1/N}$ denotes the unique positive $N$-th root of $a$, as a rational power ([[math:def-rational-power]]).

[F3] For positive real bases and rational exponents, rational powers are positive and obey product, inverse and composition laws ([[math:lem-rational-power-laws]]); a positive rational power is increasing in its positive base ([[math:lem-rational-power-monotone]]).

[F4] For real $x,y$ and integer $n\ge0$, $(x+y)^n=\sum_{j=0}^n\binom{n}{j}x^jy^{n-j}$ ([[math:thm-binomial-theorem]]).

[F5] The natural numbers are unbounded in the real numbers: for every real $B$ there is a natural number $K>B$ ([[math:lem-cut-archimedean]]).

[F6] For natural numbers $m,r$, $\binom{m}{r}$ is the number of $r$-element subsets of any $m$-element set ([[math:def-binomial-coefficient]]).

## Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

1.1 By [F6], there are $\binom{2k}{k}$ balanced words: choose the positions of the $+1$ symbols. Reflect every symbol through the first time a balanced word has partial sum $-1$. This maps the words failing the nonnegative condition bijectively to words with total sum $2$, having $k+1$ positive symbols and $k-1$ negative symbols. The inverse reflects through the first partial sum $1$ of such a word. Thus $C_k=\binom{2k}{k}-\binom{2k}{k+1}=\binom{2k}{k}/(k+1)$. The subset formula follows by counting ordered lists of distinct selected elements and dividing by their $r!$ orders. [given, F6, construct, algebra]

1.2 Put $D_k=(2k+1)(k+1)$. For $k\ge2$, the formula $\binom{2k}{3}=(2k)(2k-1)(2k-2)/6$ gives $\binom{2k}{3}\ge k^3/3$, while $D_k\le6k^2$, so $\binom{2k}{3}/D_k\ge k/18$. Fix $\delta>0$. By [F5], choose a natural number $K>1+18\delta^{-3}$. For every integer $k\ge K$, one has $k\ge2$ and $(k/18)\delta^3>1$. By [F4] and nonnegativity of all binomial terms, $(1+\delta)^{2k}\ge\binom{2k}{3}\delta^3>D_k$ for all such $k$. [F4, F5, algebra, choose]

2.1 By [F4] with $x=y=1$ and $n=2k$, the sum of all $2k+1$ binomial coefficients in row $2k$ is $2^{2k}=4^k$; equivalently, count every subset according to its size. The central coefficient is maximal: consecutive coefficients have ratio $(2k-r)/(r+1)$, at least one up to the center and at most one thereafter. Hence $4^k/(2k+1)\le\binom{2k}{k}\le4^k$, giving the displayed inequalities. [F4, step 1.1, algebra]

3.1 Since $D_k>0$ and $1+\delta>0$, [F2] and [F3] applied to step 1.2 give $D_k^{1/(2k)}\le1+\delta$ for all $k\ge K$. The bounds of step 2.1 imply $C_k>0$; by the positive-root order, product, inverse and composition laws in [F2] and [F3], $2/(1+\delta)\le 2/D_k^{1/(2k)}\le C_k^{1/(2k)}\le2$. Given any real tolerance $\varepsilon>0$, set $\delta=\varepsilon/4>0$ and choose $K$ as in step 1.2. For every $k\ge K$, $|C_k^{1/(2k)}-2|\le2-2/(1+\delta)=2\delta/(1+\delta)<\varepsilon$. This is the limit assertion by [F1]. [F1, F2, F3, step 2.1, step 1.2, algebra, choose] ∎
