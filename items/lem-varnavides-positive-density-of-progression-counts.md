---
id: lem-varnavides-positive-density-of-progression-counts
kind: lemma
title: "Positive density forces a positive normalized progression count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-finite-density-k-term-arithmetic-progression
  - def-relative-density-in-a-finite-group
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - thm-standard-representatives-modulo-n
  - thm-szemeredi-finite-density-arithmetic-progressions
  - thm-divisor-function-subpolynomial-bound
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemerédi’s theorem"
      url: "https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf"
      locator: "§1, Theorem 1.2 and §18, Theorem 18.2; the positive-count strengthening is proved locally by the finite averaging argument below"
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Chapter 10, Theorem 10.4 and Exercise 10.0.3; Chapter 11, §11.1"
---

## Statement

Fix an integer $k\ge3$ and a density $0<\delta\le1$. There is an integer $M=M(k,\delta)\ge\max\{k,2\}$ such that every subset of $[M]$ with density at least $\delta/2$ contains a proper $k$-term arithmetic progression. Set $N_0:=M(M+1)$. For every $N\ge N_0$ and every $A\subseteq G=\mathbb Z/N\mathbb Z$ with relative density $|A|/N\ge\delta$, at least $\delta N^2/(4M^3)$ ordered pairs $(x,r)$ satisfy $r\in G$, $jr\ne0$ for every $1\le j\le M$, and $x,x+r,\ldots,x+(k-1)r\in A$.

## Statement references

[[def-finite-density-k-term-arithmetic-progression]]

[[def-relative-density-in-a-finite-group]]

[Gowers, *A new proof of Szemerédi’s theorem*, §18, Theorem 18.2](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

[Tao and Vu, *Additive Combinatorics*, Chapter 10, Theorem 10.4](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** The fixed integer $k\ge3$ and density $0<\delta\le1$. The constants $M,N_0$ will be chosen as part of the conclusion.

[F1] For density $\delta/2$ there is a threshold above which every interval subset has a proper $k$-term progression ([[thm-szemeredi-finite-density-arithmetic-progressions]]). The full unqualified finite-density supplier is now locally proved through the accepted finite hypergraph removal and simplex deduction.

[F2] The relative density and arithmetic progression conventions are those of [[def-relative-density-in-a-finite-group]] and [[def-finite-density-k-term-arithmetic-progression]].

[F3] Residues form the additive group of size $N$ with representatives $0,\ldots,N-1$ ([[def-integers-modulo-n]], [[def-addition-and-multiplication-modulo-n]], [[thm-integers-modulo-n-basic-algebra]], [[thm-standard-representatives-modulo-n]]).

[F4] There is a fixed constant $C>0$ such that the number $d(n)$ of positive divisors satisfies $d(n)\le Cn^{1/4}$ for every $n\ge1$ ([[thm-divisor-function-subpolynomial-bound]]).

## Proof

1.1 Choose an integer $L\ge\max\{k,2\}$ so that [F1] holds for every interval length at least $L$. Choose an integer $M\ge\max\{2L,(8CL^3/\delta)^2\}.$ Then [F1] gives the stated interval property at length $M$. Put $N_0=M(M+1)$, and fix $N\ge N_0$ and $A\subseteq G$ of density at least $\delta$. We first count proper output progressions using the smaller length $L$, and then remove every output difference of order at most $M$. [F1, F4, choose, algebra]

2.1 Let $R_L=\{r\in G:jr\ne0\ (1\le j\le L)\}$. For fixed $j$, a representative solution of $jr=0$ has $jr_0=tN$ with $0\le t<j$, so there are at most $j$ solutions. Consequently $|G\setminus R_L|\le L(L+1)/2\le N/2$, hence $|R_L|\ge N/2$. [F3, step 1.1, algebra]

3.1 For each $r\in R_L$ and $x\in G$ set $B_{x,r}=\{i+1\in[L]:x+ir\in A\}$. Translation is a bijection, so the average over $x$ of $|B_{x,r}|/L$ is at least $\delta$. If a proportion $q_r$ have density at least $\delta/2$, then $\delta\le\delta/2+q_r(1-\delta/2)$, giving $q_r\ge\delta/2$. Thus there are at least $\delta N^2/4$ pairs $(x,r)$ with a dense $B_{x,r}$. In each, choose its lexicographically first index progression $i_0+1,i_0+1+d,\ldots,i_0+1+(k-1)d$ from [F1]. Its image in $A$ is proper: the difference between distinct terms is $jdr$ with $1\le jd\le L-1$, which is nonzero because $r\in R_L$. [F1, F2, F3, step 1.1, step 2.1, construct, algebra]

3.2 Every $s\in G$ has an additive order $h$ dividing $N$: choose its least positive annihilator $h\le N$, and divide $N$ by $h$ to see the remainder also annihilates $s$, hence is zero. For each positive divisor $h\le M$ of $N$, at most $h$ residues are killed by $h$, again by step 2.1. Therefore the number of differences of order at most $M$ is at most $Md(N)\le MCN^{1/4}$. There are at most $N$ starts for each difference, so at most $MCN^{5/4}$ ordered progressions have such a difference. Since $N\ge M^2$ and $M\ge(8CL^3/\delta)^2$, $\frac{MCN^{5/4}}{N^2}=MCN^{-3/4}\le CM^{-1/2}\le\frac\delta{8L^3}.$ This bound includes all short-order outputs, whether or not proper. [F3, F4, step 1.1, step 2.1, algebra]

4.1 A fixed ordered output $(a,a+s,\ldots,a+(k-1)s)$ arises from at most $L^3$ of those pairs. Indeed the chosen index start and step have at most $L$ possibilities each; for a fixed step $d\le L$, the equation $dr=s$ has at most $d\le L$ solutions, by the same representative calculation as step 2.1, and $x=a-i_0r$ is then determined. Thus $A$ contains at least $\delta N^2/(4L^3)$ distinct proper ordered progressions, without yet asserting an order bound on $s=dr$. [F3, step 3.1, algebra]

5.1 Subtract the bound in step 3.2 from the count in step 4.1. At least $\delta N^2/(8L^3)\ge\delta N^2/(4M^3)$ outputs remain, since $M\ge2L$. Each remaining difference $s$ has order exceeding $M$, equivalently $js\ne0$ for every $1\le j\le M$. These are exactly the required output properties. The constants were chosen from $k,\delta$ and a fixed divisor-bound constant only. All progression selections are finite lexicographic choices. [F2, F3, step 1.1, step 4.1, step 3.2, algebra] ∎
