---
id: lem-divisor-function-subpower-bound
kind: lemma
title: "Subpower bound for the generalized divisor function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-fundamental-theorem-of-arithmetic
  - def-real-power
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-exponential-is-strictly-increasing
  - thm-real-power-laws
  - lem-power-monotone
  - lem-integer-part
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, second edition"
      url: "https://www.shoup.net/ntb/ntb-v2_0.pdf"
      locator: "Chapter 2, §2.9, Exercise 2.49(b), printed p. 49"
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
      locator: "Chapter 2, Exercise 2.9(c),(f), printed p. 34"
---

## Statement

For every positive integer $r$ and every real $\varepsilon>0$, there is a
constant $C_{r,\varepsilon}>0$ such that, for every integer $n\ge1$,
$$d_r(n)\le C_{r,\varepsilon}n^\varepsilon,$$
where $d_r(n)$ is the number of ordered $r$-tuples of positive integers
$(n_1,\ldots,n_r)$ satisfying $n_1\cdots n_r=n$.

## Statement references

[Shoup, Chapter 2, §2.9, Exercise 2.49(b)](https://www.shoup.net/ntb/ntb-v2_0.pdf)

[Koukoulopoulos, Chapter 2, Exercise 2.9(c),(f)](https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf)

[[def-real-power]]

## Facts & Assumptions

**Given:** A positive integer $r$, a real $\varepsilon>0$, and an integer $n\ge1$.

[F1] [[thm-fundamental-theorem-of-arithmetic]]: every integer $n\ge1$ has a finite prime factorization, unique up to reordering.

[F2] [[def-real-power]]: for every positive base $x$ and real exponent $y$, $x^y=\exp(y\log x)$.

[F3] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\log$ is the inverse of $\exp$, is strictly increasing on $(0,\infty)$, and $\log1=0$.

[F4] [[thm-exponential-is-strictly-increasing]]: $\exp$ is strictly increasing on $\mathbb R$.

[F5] [[thm-real-power-laws]]: for positive bases and real exponents, $(xy)^u=x^uy^u$ and $(x^u)^v=x^{uv}$.

[F6] [[lem-power-monotone]]: if $0\le x\le y$ and $a\ge1$ is an integer, then $x^a\le y^a$.

[F7] [[lem-integer-part]]: for every real $x$ there is an integer $\lfloor x\rfloor$ with $\lfloor x\rfloor\le x<\lfloor x\rfloor+1$.

## Proof

**Proof technique:** direct.

1.1 Write $n=\prod_{p\mid n}p^{a_p}$ using [F1], with distinct primes $p$ and positive integer exponents $a_p$; for $n=1$ this is the empty product. By unique factorization, an ordered tuple $(n_1,\ldots,n_r)$ with product $n$ is equivalent to choosing, independently for each $p\mid n$, nonnegative exponents $b_{p,1},\ldots,b_{p,r}$ with $\sum_{i=1}^r b_{p,i}=a_p$. The number of such exponent choices for a fixed $p$ is $\binom{a_p+r-1}{r-1}$: represent the $a_p$ units as stars and insert $r-1$ separators in the $a_p+r-1$ positions, allowing adjacent separators and separators at either end. Therefore $$d_r(n)=\prod_{p\mid n}\binom{a_p+r-1}{r-1},$$ including $d_r(1)=1$ by the empty-product convention. [given, F1, construct, algebra]

2.1 For every integer $a\ge0$, each weak composition of $a$ into $r$ parts is represented by at least one word of length $a$ over an $r$-letter alphabet, and distinct compositions have disjoint sets of representing words; hence $\binom{a+r-1}{r-1}\le r^a$. If $p\ge r^{1/\varepsilon}$, [F3] gives $\log(r^{1/\varepsilon})=(1/\varepsilon)\log r\le\log p$. Multiplying by $\varepsilon>0$ and using [F4] gives $r=\exp(\log r)\le\exp(\varepsilon\log p)=p^\varepsilon$. Since $a_p\ge1$, [F6] and [F5] yield $\binom{a_p+r-1}{r-1}\le r^{a_p}\le(p^\varepsilon)^{a_p}=p^{\varepsilon a_p}$. [step 1.1, given, F2, F3, F4, F5, F6, algebra]

3.1 For a prime $p<r^{1/\varepsilon}$, set $u_a=\binom{a+r-1}{r-1}p^{-\varepsilon a}$ and $b_p:=p^{-\varepsilon}$. Since $p\ge2$, [F3] gives $\log p>\log1=0$, whence $-\varepsilon\log p<0$; by [F2] and [F4], $0<b_p=\exp(-\varepsilon\log p)<1$. Its consecutive ratio is $$\frac{u_{a+1}}{u_a}=\frac{a+r}{a+1}b_p =b_p\left(1+\frac{r-1}{a+1}\right).$$ Let $\delta_p:=1-b_p$ and $\lambda_p:=(1+b_p)/2<1$. Define $A_p:=\lfloor 2b_p(r-1)/\delta_p\rfloor+1$ using [F7]. Then $a+1>A_p>2b_p(r-1)/\delta_p$ for every $a\ge A_p$, and consequently $$\frac{u_{a+1}}{u_a} <b_p+\frac{\delta_p}{2}=\lambda_p.$$ Thus $u_a\le u_{A_p}$ for every $a\ge A_p$, and the finite sum $C_p:=\sum_{a=0}^{A_p}u_a$ bounds every $u_a$ and satisfies $C_p\ge u_0=1$. By [F7], only finitely many positive integers, hence finitely many primes, lie below $r^{1/\varepsilon}$. Multiplying the bounds from step 2.1 and these finitely many bounds in step 1.1 gives $$d_r(n)\le\left(\prod_{p<r^{1/\varepsilon}}C_p\right)n^\varepsilon.$$ Here the prime-power product equals $n^\varepsilon$ by [F5] and the factorization in step 1.1. The finite product is a positive constant depending only on $r,\varepsilon$, and it equals $1$ when its index set is empty. [step 1.1, step 2.1, F2, F3, F4, F5, F7, algebra] ∎

