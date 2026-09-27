---
id: lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time
kind: lemma
title: "Conditional expectation constructs the inner code deterministically"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation, def-expectation-on-a-finite-probability-space, def-explicit-constant-rate-constant-distance-code]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
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
    - title: "Irit Dinur, The PCP theorem by gap amplification, §9 (explicit binary inner code obtained by derandomizing the counting argument), printed pp. 29-30."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §7.4 and §17.5.2 (method of conditional expectations; code distance), printed pp. 123-125 and 346-347."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For every integer $m\ge1$ there is a deterministic algorithm which, given $m$, runs in time polynomial in $2^m m$ and outputs a binary $16m\times m$ matrix $M$ such that $\operatorname{wt}(Mu)\ge4m$ for every nonzero $u\in\mathbb F_2^m$. Hence $u\mapsto Mu$ is an injective $\mathbb F_2$-linear map $\mathbb F_2^m\to\mathbb F_2^{16m}$ of rate $1/16$ and relative distance at least $1/4$, in the conventions of [[def-explicit-constant-rate-constant-distance-code]], the same algorithm serves every $m$, and the output matrix is a function of $m$ alone, with no random choices.

## Facts & Assumptions

**Given:** an integer $m\ge1$, the number $N:=16m^2$ of entries, and the identification of binary $16m\times m$ matrices with the points of $\Omega:=\{0,1\}^N$ by listing the entries in a fixed order.

[F1] For the uniform random matrix $M$ on $\Omega$ and $X(M):=\#\{u\in\mathbb F_2^m\setminus\{0\}:\operatorname{wt}(Mu)<4m\}$ one has $\mathbb EX<1$; indeed $\mathbb EX\le(2^m-1)e^{-m}<(2/e)^m<1$ ([[lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation]]).

[F2] On a finite probability space with weights, the expectation of a real random variable is the weighted sum $\sum_\omega X(\omega)w(\omega)$; on $\Omega$ the uniform weights are $2^{-N}$ ([[def-expectation-on-a-finite-probability-space]]).

[F3] For binary words, Hamming weight and relative distance are as in the code conventions; an injective linear map with minimum nonzero weight at least $4m$ has relative distance at least $4m/(16m)=1/4$ and rate $m/(16m)=1/16$ ([[def-explicit-constant-rate-constant-distance-code]]).

## Proof

**Proof technique:** constructive.

1.1 For a partial assignment $a\in\{0,1\}^s$ of the first $s$ entries let $F(a):=\{M\in\Omega: M_j=a_j\text{ for }j\le s\}$ be its fiber and define
$$\bar X(a):=\frac{1}{\lvert F(a)\rvert}\sum_{M\in F(a)}X(M)=2^{-(N-s)}\sum_{M\in F(a)}X(M),$$
the average of $X$ over the fiber. Then $\bar X(\varnothing)=\mathbb EX$ by [F2], and for every $s<N$
$$\bar X(a)=\tfrac12\bigl(\bar X(a0)+\bar X(a1)\bigr),$$
because $F(a)$ is the disjoint union of the two fibers $F(a0)$ and $F(a1)$, which have equal size $2^{N-s-1}$; this is the elementary averaging identity for finite sums. [F2, algebra]

1.2 Fix $a\in\{0,1\}^s$ and $u\ne0$. A row $i$ is *determined* for $(a,u)$ when all coordinates $j$ in the support of $u$ have $a_j$ already fixed, in which case the $i$-th bit of $Mu$ equals the known value $\sum_{j\in\operatorname{supp}u}M_{ij}u_j$; otherwise that bit is a fair coin, because at least one of its summands is an undecided uniform bit and the bits of distinct rows are independent. Writing $D_u$ for the number of determined rows whose determined bit is $1$ and $R_u$ for the number of undetermined rows, the conditional law of $\operatorname{wt}(Mu)$ over the uniform fiber $F(a)$ is $D_u+\operatorname{Bin}(R_u,\tfrac12)$; hence $\Pr[\operatorname{wt}(Mu)<4m\mid F(a)]=\Pr[\operatorname{Bin}(R_u,\tfrac12)<4m-D_u]$, a number of the form $2^{-R_u}c$ with $c$ a nonnegative integer. [algebra, given]

2.1 Define a path of partial assignments by $a_0:=\varnothing$ and, for $s<N$, $a_{s+1}:=a_s0$ if $\bar X(a_s0)\le\bar X(a_s1)$ and $a_{s+1}:=a_s1$ otherwise, so ties go to the $0$ branch; this is a deterministic choice. The averaging identity of step 1.1 gives $\bar X(a_{s+1})\le\bar X(a_s)$ at every step, hence $\bar X(a_N)\le\bar X(\varnothing)=\mathbb EX<1$ by [F1]. [F1, step 1.1, construct]

3.1 The terminal fiber is a single matrix $M^*$, so $\bar X(a_N)=X(M^*)$ is a nonnegative integer strictly below $1$, hence equal to $0$: the produced matrix satisfies $\operatorname{wt}(M^*u)\ge4m$ for every nonzero $u$. [step 2.1, algebra, discharge-construct]

4.1 For the running time, evaluating $\bar X(a)$ for one partial assignment means summing the $2^m-1$ conditional probabilities of step 1.2; for each $u$, the support, the numbers $D_u$ and $R_u$ and the binomial tail are computed in $O(m)$ operations using a precomputed table of the binomial coefficients $\binom{R}{t}$ for $R\le16m$, and all arithmetic is exact on integers of $O(m)$ bits, so one evaluation costs $O(2^m m^2)$ and the whole path costs $O(2^m m^4)$ operations, which is polynomial in $2^m m$. By step 3.1 the output has $\operatorname{wt}(M^*u)\ge4m$ for all $u\ne0$, so it is injective and has rate $1/16$ and relative distance at least $1/4$ by [F3]. [F3, step 1.2, step 3.1, discharge-construct, algebra] ∎

## Remarks

- The argument is the method of conditional expectations in its finite form: no conditional expectation as an abstract object is needed, only the identity that the average over a fiber is the average of the averages over the two half-fibers. That is also why the procedure is deterministic: the two candidate values are computed exactly, not estimated.
- The inner code is produced in time polynomial in $2^m m$, which is polynomial in the message length of the concatenated code of [[def-reed-solomon-outer-code-and-binary-linear-inner-code]] because that message length is $2^{m-1}m$. The procedure is uniform in $m$, so no choice of a matrix is made anywhere on the page: every consumer uses the matrix $M^*$ output for its own $m$.
