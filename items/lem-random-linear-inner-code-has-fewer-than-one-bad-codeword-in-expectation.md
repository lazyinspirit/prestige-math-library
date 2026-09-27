---
id: lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation
kind: lemma
title: "A random inner linear code has fewer than one bad word in expectation"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-explicit-constant-rate-constant-distance-code, lem-chernoff-bound-for-bernoulli-trials, def-expectation-on-a-finite-probability-space, cor-expectation-of-an-indicator-is-probability, def-independent-families-of-event-classes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §9 (binary inner code with a probabilistic existence argument), printed pp. 29-30."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §17.5.2 (distance of a code, counting bound), printed pp. 346-347."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $m\ge1$, let $M$ be a uniformly random binary $16m\times m$ matrix whose $16m^2$ entries are independent fair bits, and let $\operatorname{wt}$ denote Hamming weight in $\mathbb F_2^{16m}$. Then the expected number of nonzero $u\in\mathbb F_2^m$ with $\operatorname{wt}(Mu)<4m$ satisfies
$$\mathbb E\Bigl[\#\{u\in\mathbb F_2^m\setminus\{0\}:\operatorname{wt}(Mu)<4m\}\Bigr]\ \le\ (2^m-1)e^{-m}\ <\ \Bigl(\frac2e\Bigr)^m\ <\ 1 .$$
Consequently, with positive probability a random matrix has no such $u$, and the map $u\mapsto Mu$ of every such matrix is injective with relative distance at least $1/4$ and rate $1/16$, in the conventions of [[def-explicit-constant-rate-constant-distance-code]]. The deterministic construction of such a matrix is the content of [[lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time]].

## Facts & Assumptions

**Given:** an integer $m\ge1$, the uniform random matrix $M$ with independent fair entry bits, and the set of nonzero $u\in\mathbb F_2^m$.

[F1] For $N\ge1$ the Hamming weight of $x\in\{0,1\}^N$ is the number of nonzero coordinates, and the relative distance of two binary words of length $N$ is their Hamming distance divided by $N$ ([[def-explicit-constant-rate-constant-distance-code]]).

[L1] If $X_1,\dots,X_k$ are independent Bernoulli$(p)$ variables with sum $S$ and mean $\mu=pk$, then for $0<\alpha<1$, $\Pr[S\le(1-\alpha)\mu]\le\exp(-\alpha^2\mu/2)$ ([[lem-chernoff-bound-for-bernoulli-trials]]).

[L2] On a finite probability space the expectation of a sum of random variables is the sum of the expectations, and the expectation of an indicator is the probability of its event ([[def-expectation-on-a-finite-probability-space]], [[cor-expectation-of-an-indicator-is-probability]]).

[L3] A finite family of classes of events is independent when the probability of every finite intersection of chosen events factors as the product of their probabilities; events determined by disjoint blocks of independent coordinates therefore factorize ([[def-independent-families-of-event-classes]]).

## Proof

**Proof technique:** direct.

1.1 Fix $u\ne0$ and let $Y_i$ be the $i$-th coordinate of $Mu$, so $Y_i=\sum_{j\le m}M_{ij}u_j$ in $\mathbb F_2$ and $\operatorname{wt}(Mu)=\sum_{i\le16m}Y_i$. For fixed $u\ne0$ the row $i$ of $M$ has at least one free coordinate in the support of $u$, and the entries of the row are independent fair bits, so $Y_i$ is a fair bit; distinct rows involve disjoint blocks of entries and are independent, so $Y_1,\dots,Y_{16m}$ is an independent family of Bernoulli$(1/2)$ variables by [L3]. [F1, L3, algebra]

2.1 Applying [L1] to this family with $k=16m$, $p=1/2$, $\mu=8m$ and $\alpha=1/2$ gives $\Pr[\operatorname{wt}(Mu)\le4m]\le e^{-m}$, and since weights are integers, $\Pr[\operatorname{wt}(Mu)<4m]\le\Pr[\operatorname{wt}(Mu)\le4m]\le e^{-m}$. [L1, step 1.1, algebra]

3.1 By [L2] the expectation of the number of bad $u$ is the sum of the probabilities $\Pr[\operatorname{wt}(Mu)<4m]$ over the $2^m-1$ nonzero $u$, hence at most $(2^m-1)e^{-m}<2^me^{-m}=(2/e)^m$; since $2<e$, this is strictly less than $1$. [L2, step 2.1, algebra]

4.1 A random variable with expectation $<1$ takes a value $<1$, so some matrix $M$ has no $u\ne0$ with $\operatorname{wt}(Mu)<4m$; for such $M$ the weight of $Mu$ is at least $4m$ for every nonzero $u$, whence $Mu\ne0$ and $u\mapsto Mu$ is injective, with relative distance at least $4m/(16m)=1/4$ and rate $m/(16m)=1/16$ in the conventions of [F1]. [F1, step 3.1, algebra] ∎

## Remarks

- The strict inequality $\operatorname{wt}(Mu)<4m$ is what produces relative distance $1/4$ rather than the weaker $1/4-\varepsilon$; it is also what makes the counting bound $<1$ rather than $\le1$, which is needed in step 4.1 to conclude existence without any tie.
- The argument uses only the $2^m-1$ nonzero messages and the fairness of the row functionals; the value $16$ is chosen so that the mean $8m$ of the weight is twice the threshold $4m$, giving the Chernoff exponent $m$ and the base $2/e<1$. With $16m$ rows replaced by $cm$ rows for a constant $c>8$, the same computation gives the base $2\exp\bigl(-c(1-8/c)^2/4\bigr)$, which is less than $1$ exactly when $c^2-(16+4\ln2)c+64>0$; the positive root of that quadratic is about $14.3$, so the same estimate tolerates any number of rows $cm$ with $c$ above that root, and $c=16$ is the convenient integer choice.
- The positive-probability statement is already enough for a non-uniform existence claim; the point of [[lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time]] is to make the matrix computable rather than merely existent.
