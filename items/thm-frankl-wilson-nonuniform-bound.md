---
id: thm-frankl-wilson-nonuniform-bound
kind: theorem
title: "An $L$-intersecting family on $[n]$ with $\\lvert L\\rvert=s$ has at most $\\sum_{i=0}^{s}\\binom{n}{i}$ members"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-l-intersecting-family, lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction, lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube, def-incidence-vector-of-a-subset, lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size, def-monomials-multidegree-and-total-degree, def-binomial-coefficient, cor-cardinality-of-the-power-set, def-linear-independence, def-dimension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §4.3"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 17"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Statement

Let $\mathcal{F}=\{F_1,\dots,F_m\}$ be an $L$-intersecting family on $[n]$, where
$L\subseteq\mathbb{N}$ is finite with $\lvert L\rvert=s$. Then

$$m\le\sum_{i=0}^{s}\binom{n}{i}.$$

## Facts & Assumptions

**Given:** an $L$-intersecting family $\mathcal{F}=\{F_1,\dots,F_m\}$ on $[n]$, ordered so that $\lvert F_1\rvert\le\cdots\le\lvert F_m\rvert$, with $\lvert L\rvert=s$.

[L1] The multilinear monomials of total degree at most $s$ span a space of dimension $\sum_{i=0}^{s}\binom{n}{i}$ on the cube ([[lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube]]).

[L2] Over $\mathbb R$, incidence vectors satisfy $\langle v_A,v_B\rangle=|A\cap B|$ ([[lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size]]).

[F1] The power set of $[n]$ has $2^n$ elements, and $\sum_{i=0}^{s}\binom ni=2^n$ when $s\ge n$ ([[cor-cardinality-of-the-power-set]], [[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 If $s>n$, then [F1] makes the claimed right-hand side $2^n=|\mathcal P([n])|$, so the bound follows from $\mathcal F\subseteq\mathcal P([n])$. Hence suppose $s\le n$. Work over $\mathbb R$, and for each $i$ define $$f_i(x):=\prod_{\ell\in L,\ \ell<\lvert F_i\rvert}\bigl(\langle x,v_{F_i}\rangle-\ell\bigr).$$ This is a polynomial of total degree at most $s$. [given, F1]

2.1 Evaluating at $v_{F_i}$, [L2] gives $\langle v_{F_i},v_{F_i}\rangle=\lvert F_i\rvert$, so every factor in $f_i(v_{F_i})$ is a positive integer and therefore $f_i(v_{F_i})\ne0$. [L2, step 1.1]

2.2 If $j<i$, then $\lvert F_i\cap F_j\rvert\in L$ and also $\lvert F_i\cap F_j\rvert\le\lvert F_j\rvert\le\lvert F_i\rvert$. Equality with $\lvert F_i\rvert$ would force $F_i\subseteq F_j$ and then $F_i=F_j$, impossible. So $\lvert F_i\cap F_j\rvert$ is an element of $L$ strictly below $\lvert F_i\rvert$, and [L2] makes the corresponding factor of $f_i(v_{F_j})$ equal to $0$. [L2, step 1.1]

3.1 Let $\widetilde f_i$ be the multilinear reduction of $f_i$. By the cube-agreement lemma, $\widetilde f_i(v_{F_i})\ne0$ and $\widetilde f_i(v_{F_j})=0$ for $j<i$. If $\sum_ic_i\widetilde f_i=0$ and $j$ is the least index with $c_j\ne0$, evaluation at $v_{F_j}$ kills the terms with index larger than $j$ by the vanishing just proved and kills the earlier ones by minimality, leaving $c_j\widetilde f_j(v_{F_j})=0$, a contradiction. Thus the functions are linearly independent. [step 2.1, step 2.2, algebra]

4.1 Each $\widetilde f_i$ is multilinear of total degree at most $s$, so [L1] places all of them in a vector space of dimension $\sum_{i=0}^{s}\binom{n}{i}$. Since they are independent, there can be at most that many of them. Hence $m\le\sum_{i=0}^{s}\binom{n}{i}$. [L1, step 3.1] ∎

## Remarks

- The ordering by size is the one-sided feature that removes the need for a uniformity hypothesis.
