---
id: thm-vaughan-identity-for-von-mangoldt-sums
kind: theorem
title: "Vaughan decomposition of von Mangoldt sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-von-mangoldt-function
  - def-number-theoretic-mobius-function
  - cor-von-mangoldt-mobius-inversion-formula
  - thm-fundamental-theorem-of-arithmetic
  - thm-canonical-prime-factorisation
  - thm-von-mangoldt-divisor-sum-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 18, equation (18.2.1)"
      url: "https://kskedlaya.org/18.785/bombieri2.pdf"
    - title: "Terence Tao, 254A Notes 3, Lemma 18"
      url: "https://terrytao.wordpress.com/2015/01/10/254a-notes-3-the-large-sieve-and-the-bombieri-vinogradov-theorem/"
---

## Statement

Let $y,z\ge1$ be real numbers and let $n$ be a positive integer with $n>z$.
Writing all sums over positive integer divisors, one has

$$
\Lambda(n)= \sum_{\substack{b\mid n\\b\le y}}\mu(b)\log\frac nb -\sum_{\substack{b\mid n,\ c\mid n/b\\b\le y,\ c\le z}}\mu(b)\Lambda(c) +\sum_{\substack{b\mid n,\ c\mid n/b\\b>y,\ c>z}}\mu(b)\Lambda(c).
$$

Equivalently, the divisibility condition $c\mid n/b$ in the last two sums may
be written $bc\mid n$.

## Statement references

[Kedlaya, Chapter 18, equation (18.2.1)](https://kskedlaya.org/18.785/bombieri2.pdf)

[Tao, Notes 3, Lemma 18](https://terrytao.wordpress.com/2015/01/10/254a-notes-3-the-large-sieve-and-the-bombieri-vinogradov-theorem/)

## Facts & Assumptions

**Given:** Real numbers $y,z\ge1$ and a positive integer $n>z$.

[F1] [[cor-von-mangoldt-mobius-inversion-formula]]: For every positive integer $m$,
$\Lambda(m)=\sum_{d\mid m}\mu(d)\log(m/d).$

[F2] [[thm-von-mangoldt-divisor-sum-identity]]: For every positive integer $m$,
$$\sum_{c\mid m}\Lambda(c)=\log m.$$

[F3] [[def-number-theoretic-mobius-function]]: For positive $m$, $\mu(m)=0$
if a prime square divides $m$; otherwise, if $m$ has $r$ distinct prime
divisors, $\mu(m)=(-1)^r$.

[F4] [[thm-fundamental-theorem-of-arithmetic]]: Every positive integer is a
finite product of primes, and this factorization is unique up to reordering.

[F5] [[thm-canonical-prime-factorisation]]: Given a finite injective list of
primes containing every prime divisor of a positive integer $m$, the theorem
expresses $m$ as the product of those primes to their uniquely determined
exponents.

## Proof

1.1 Let $m>1$ be a positive integer. By [F4], write its prime factorization, and group equal primes to obtain the canonical form $m=\prod_{i<r}p_i^{e_i}$ with distinct primes $p_i$; [F5] identifies the exponents with their valuations. A divisor has nonzero Möbius value exactly when each exponent is $0$ or $1$; these divisors are indexed by subsets $S\subseteq\{0,\ldots,r-1\}$ and have Möbius value $(-1)^{|S|}$ by [F3]. Since $r\ge1$, their sum is $\sum_{d\mid m}\mu(d)=\sum_{S\subseteq\{0,\ldots,r-1\}}(-1)^{|S|}=(1-1)^r=0$. [F3, F4, F5, given, algebra]

1.2 Apply [F1] to $n$ and split its finite divisor sum at $y$: $\Lambda(n)=\sum_{b\mid n,\ b\le y}\mu(b)\log(n/b)+\sum_{b\mid n,\ b>y}\mu(b)\log(n/b)$. [F1, given, algebra]

2.1 If $c\mid n$ and $c\le z$, then $m=n/c$ is a positive integer greater than $1$, since $n>z\ge c$. By step 1.1, $\sum_{b\mid m}\mu(b)=0$; partitioning these divisors at $y$ gives $\sum_{b\mid m,\ b>y}\mu(b)=-\sum_{b\mid m,\ b\le y}\mu(b)$. [step 1.1, given, algebra]

2.2 For each divisor $b>y$ in the second sum, apply [F2] to $n/b$. The result is the finite double sum $\sum_{b\mid n,\ b>y}\mu(b)\log(n/b)=\sum_{b\mid n,\ c\mid n/b,\ b>y}\mu(b)\Lambda(c)$. [F2, step 1.2, algebra]

3.1 Split the last sum into $c\le z$ and $c>z$. In the part with $c\le z$, regroup the finite sum first by $c$ and use step 2.1 with $m=n/c$; this converts the inner sum over $b>y$ to its negative over $b\le y$. The part with $c>z$ is unchanged. [step 2.1, step 2.2, algebra]

4.1 Substituting these two pieces into step 1.2 gives exactly the two double sums and the initial small-$b$ sum in the statement. All sums are finite because each summation variable divides $n$. [step 1.2, step 3.1, algebra] ∎
