---
dependency_level: 3
id: lem-dickman-smooth-density-for-bounded-parameters
kind: lemma
title: Dickman smooth-number density on bounded parameter ranges
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-y-smooth-integer-and-smooth-counting-function
- lem-dickman-finite-prime-simplex-integral-representation
- lem-short-interval-prime-sum-calculus
- thm-fundamental-theorem-of-arithmetic
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Hildebrand and Tenenbaum, Integers without large prime factors; direct local reconstruction of bounded-parameter and transform inputs
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
---

## Statement

For every fixed real $U\ge1$, uniformly for real $x,y\ge2$ with $0<u:=\log x/\log y\le U$,

$$\Psi(x,y)=x\rho(u)+O_U\left(\frac{x}{\log y}+1\right).$$

This is a bounded-parameter estimate; its implied constant may depend on $U$.

## Statement references

[[def-y-smooth-integer-and-smooth-counting-function]]

[[lem-dickman-finite-prime-simplex-integral-representation]]

[[lem-short-interval-prime-sum-calculus]]

[[thm-fundamental-theorem-of-arithmetic]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local result [[def-y-smooth-integer-and-smooth-counting-function]] supplies its stated facts under its stated hypotheses.

[F2] The local result [[lem-dickman-finite-prime-simplex-integral-representation]] supplies its stated facts under its stated hypotheses.

[F3] The local result [[lem-short-interval-prime-sum-calculus]] supplies its stated facts under its stated hypotheses.

[F4] The local result [[thm-fundamental-theorem-of-arithmetic]] supplies its stated facts under its stated hypotheses.

## Proof

1.1 If $u\le1$, every integer at most $x$ is $y$-smooth, so $\Psi(x,y)=\lfloor x\rfloor=x\rho(u)+O(1)$. Assume $1<u\le U$ and first take $y$ sufficiently large in terms of $U$. Inclusion-exclusion over the finitely many primes $y<p\le x$ gives $\Psi(x,y)=\sum_{k=0}^{\lfloor U\rfloor}(-1)^k/k!\sum_{p_1,\ldots,p_k>y\text{ distinct},\ p_1\cdots p_k\le x}\lfloor x/(p_1\cdots p_k)\rfloor$, with the $k=0$ term $\lfloor x\rfloor$. Products with more than $u$ factors do not occur, by unique factorization and $p_i>y$. [given, F1, F2, F3, F4, algebra]

2.1 For $k\ge1$, the number of ordered tuples in that sum is $O_U(x/\log y)$. Fixing the first $k-1$ primes with product $q$, a possible last prime requires $x/q>y$, and [F3] bounds their number by $Cx/(q\log y)$. The sum of reciprocal products of the first primes, even after dropping their mutual restrictions, is at most $(\sum_{y<p\le x}1/p)^{k-1}=O_U(1)$ by [F3]. Replacing the floors therefore costs $O_U(x/\log y)$. Allowing repetitions in the resulting weighted prime sum costs $O_U(1/y)$ before multiplication by $x$: select an equal pair, sum $p^{-2}$ over $p>y$, and bound the remaining reciprocal sums by $O_U(1)$. Both errors are admissible. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 Put a point mass $1/p$ at $t=\log p/\log y$ for each $y<p\le y^U$, defining a finite measure $\nu_y$ on $[1,U]$. [F3] gives $\nu_y([1,v])=\log v+O_U(1/\log y)$ uniformly for $1\le v\le U$. Let $S_k(u)$ be its $k$-fold product mass on $t_1+\cdots+t_k\le u$. Then $S_1(u)=J_1(u)+O_U(1/\log y)$. Inductively, $S_k(u)=\int S_{k-1}(u-t)\,d\nu_y(t)$, where functions are zero below their support thresholds. The inductive error integrates to $O_U(1/\log y)$ because $\nu_y([1,U])=O_U(1)$. The remaining function $J_{k-1}(u-t)$ is continuous, nonincreasing in $t$, and has bounded total variation $O_U(1)$. Finite summation by parts, followed by approximation of that monotone function by step functions, bounds the difference of its integrals against $\nu_y$ and $dt/t$ by the cumulative-distribution error times twice its supremum. Hence $S_k(u)=J_k(u)+O_U(1/\log y)$ uniformly in $u\le U$. [given, F1, F2, F3, F4, step 2.1, algebra]

4.1 Insert step 3.1 into the floor expansion from steps 1.1–2.1. The finite simplex representation in [F2] gives exactly the main term $x\rho(u)$, and all errors are $O_U(x/\log y+1)$. For the initially excluded bounded values of $y$, the inequality $0\le\Psi(x,y)\le x$ and $0<\rho(u)\le1$ absorb the error after increasing the constant, since $u\le U$ and $\log y$ is bounded there. This completes the uniform estimate. [given, F1, F2, F3, F4, step 3.1, algebra] ∎
