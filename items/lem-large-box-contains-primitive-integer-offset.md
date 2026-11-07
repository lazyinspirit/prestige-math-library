---
id: lem-large-box-contains-primitive-integer-offset
kind: lemma
title: "Every sufficiently large box contains an offset primitive with its denominator"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-gcd-of-finite-integer-tuple
  - def-number-theoretic-mobius-function
  - def-unit-group-modulo-n-and-euler-totient
  - thm-euler-totient-product-formula
  - thm-fundamental-theorem-of-arithmetic
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, A note on zero-one laws in metrical Diophantine approximation, §3"
      url: "https://arxiv.org/pdf/0803.2355v1"
---

## Statement

For every integer $m\ge1$ and real $\varepsilon>0$, there is an integer $H_0=H_0(m,\varepsilon)$ such that for every integer $H\ge H_0$ and every $t=(t_1,\ldots,t_m)\in\mathbb R^m$, there is a vector $p=(p_1,\ldots,p_m)\in\mathbb Z^m$ satisfying

$$\|p-t\|_\infty<\varepsilon H,\qquad \gcd(H,p_1,\ldots,p_m)=1.$$

## Statement references

[Beresnevich and Velani, *A note on zero-one laws in metrical Diophantine approximation*, §3](https://arxiv.org/pdf/0803.2355v1)

## Facts & Assumptions

**Given:** An integer $m\ge1$, a real $\varepsilon>0$, an integer $H\ge1$, and an arbitrary real center vector $t$.

[F1] Möbius inclusion-exclusion gives $\sum_{d\mid g}\mu(d)=1$ if $g=1$ and $0$ otherwise; the nonzero summands correspond to subsets of the distinct prime divisors of $g$. ([[def-number-theoretic-mobius-function]], [[thm-fundamental-theorem-of-arithmetic]])

[F2] The number of unit residue classes modulo $H$ is $\varphi(H)$ and $\varphi(H)/H=\prod_{p\mid H}(1-1/p)$. ([[def-unit-group-modulo-n-and-euler-totient]], [[thm-euler-totient-product-formula]])

[F3] The tuple gcd equals $1$ exactly when its only common divisors are $1$ and $-1$. ([[def-gcd-of-finite-integer-tuple]])

## Proof




1.1 For each coordinate let $I_j=(t_j-\varepsilon H,t_j+\varepsilon H)$, of length $L=2\varepsilon H$. For a positive divisor $d\mid H$, let $N_{d,j}$ be the number of multiples of $d$ in $I_j$. Consecutive multiples are spaced by $d$, so every open interval of length $L$ contains a number of them differing from $L/d$ by at most $1$. Thus $N_{d,j}=L/d+e_{d,j}$ with $|e_{d,j}|\le1$, uniformly in the center $t_j$. [given, algebra]

2.1 Count vectors $p$ in $I_1\times\cdots\times I_m$ with tuple gcd $(H,p_1,\ldots,p_m)=1$. By [F1], their number is $\displaystyle N(H,t)=\sum_{d\mid H}\mu(d)\prod_{j=1}^mN_{d,j}.$ Expanding each product around $L/d$ gives $\displaystyle N(H,t)=L^m\prod_{p\mid H}(1-p^{-m})+E,\qquad |E|\le\sum_{r=0}^{m-1}\binom mr L^r\sum_{d\mid H,\,\mu(d)\ne0}d^{-r}.$ For $r=0$ the inner sum is $2^{\omega(H)}$, where $\omega(H)$ is the number of distinct prime divisors of $H$; for $r=1$ it is at most $1+\log H$; for $r\ge2$ it is at most $\sum_{d=1}^{\infty}d^{-2}<2$. [given, step 1.1, F1, algebra]

3.1 If $m\ge2$, then $\displaystyle \prod_{p\mid H}(1-p^{-m})\ge\prod_{p\mid H}(1-p^{-2})\ge\prod_{k=2}^{R}(1-k^{-2})>\frac12,$ where $R$ is at least the largest prime divisor of $H$; the finite product telescopes to $(R+1)/(2R)$. Also $2^{\omega(H)}\le H$. The error bound in step 2.1 is therefore $O_{m,\varepsilon}(H^{m-1}+H\log H)=o(H^m)$, while its main term is at least $(2\varepsilon H)^m/2$. Hence $N(H,t)>0$ for every center $t$ once $H$ is sufficiently large. [given, step 2.1, algebra]

3.2 Suppose $m=1$. The main term in step 2.1 is $2\varepsilon\varphi(H)$ by [F2]. From [F2] and prime factorization, $\displaystyle \frac{\varphi(H)^2}{H}=\prod_{p^a\parallel H}p^{a-2}(p-1)^2\ge\frac12,$ since the factor is at least $1$ for every prime power except $2^1$, whose factor is $1/2$. Moreover $2^{\omega(H)}=o(\sqrt H)$: if $k=\omega(H)$ then $H\ge(k+1)!$, so along $k\to\infty$ one has $2^k/\sqrt H\le2^k/\sqrt{(k+1)!}\to0$, while for bounded $k$ the same ratio tends to zero as $H\to\infty$. Thus the error in step 2.1 is $o(\sqrt H)$, whereas the main term is at least $2\varepsilon\sqrt{H/2}$. Hence $N(H,t)>0$ uniformly in $t$ for all sufficiently large $H$. [given, step 2.1, F2, algebra]

4.1 In either case there is a counted vector $p$ in the product of intervals, so $|p_j-t_j|<\varepsilon H$ for every $j$ and its tuple gcd with $H$ is $1$. This is the assertion. [step 3.1, step 3.2, F3, algebra] ∎
