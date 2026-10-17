---
id: thm-lcg-full-period-and-adjacent-dependence
kind: theorem
title: "The power-of-two mixed LCG has full period but dependent adjacent states"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-linear-congruential-generator-mod-power-of-two
  - def-uniform-finite-probability-space
  - thm-fundamental-theorem-of-arithmetic
  - def-prime
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "J. Jung, Monte-Carlo Methods lecture notes, Theorem 3.6 (Hull-Dobell)"
      url: "https://jjung.perso.univ-pau.fr/Enseignements/AlgoAv/MonteCarlo.pdf"
---

## Statement

For the LCG of [[alg-linear-congruential-generator-mod-power-of-two]], assume $w\ge2$, $a\equiv1\pmod4$, and $c$ odd. For every seed the state sequence has exact period $2^w$. If the seed is chosen uniformly from $\{0,\ldots,2^w-1\}$, every $x_n$ is uniform on that finite set, but $(x_n,x_{n+1})$ is not an independent uniform pair.

## Facts & Assumptions

**Given:** The LCG recurrence, $M=2^w$, $w\ge2$, $a\equiv1\pmod4$, and odd $c$.

[F1] The update is $x_{n+1}=[ax_n+c]_M$ and the output state is a residue modulo $M$. [[alg-linear-congruential-generator-mod-power-of-two]]

[F2] The uniform probability law on a finite set assigns equal mass to every point. [[def-uniform-finite-probability-space]]

[F3] Every positive integer factors into primes uniquely up to order. The only positive divisors of $2$ are $1$ and $2$, so $2$ is prime. [[thm-fundamental-theorem-of-arithmetic]], [[def-prime]]

## Proof

1.1 For $m\ge1$, let $S_m=\sum_{j=0}^{m-1}a^j$. Induction on $m$ in the affine recurrence gives $x_m\equiv a^m x_0+cS_m\pmod{2^w}$, and the same formula holds from any starting state. [given, F1, algebra]

2.1 For every $k\ge0$, $a^{2^k}\equiv1\pmod{2^{k+2}}$. The base case is $a\equiv1\pmod4$. If $a^{2^k}=1+q2^{k+2}$, then squaring gives $a^{2^{k+1}}=1+q2^{k+3}+q^2 2^{2k+4}$, whose difference from $1$ is divisible by $2^{k+3}$. [given, step 1.1, algebra]

3.1 Write $S_{2^k}=2^k q_k$. For $k=0$, $q_0=1$ is odd. The identity $S_{2^{k+1}}=S_{2^k}(1+a^{2^k})$ and $a^{2^k}\equiv1\pmod4$ show that $(1+a^{2^k})/2$ is odd; hence $q_{k+1}=q_k(1+a^{2^k})/2$ is odd. [given, step 2.1, algebra]

4.1 For every $0\le k<w$, the affine iterate in step 1.1 and facts from steps 2.1 and 3.1 give $x_{2^k}-x_0\equiv(a^{2^k}-1)x_0+cS_{2^k}\equiv 2^k\pmod{2^{k+1}}$. Indeed, the first summand is divisible by $2^{k+2}$, while $S_{2^k}=2^kq_k$ with $q_k$ odd and $c$ odd; thus a return at $2^k$ is impossible modulo $2^{k+1}$. [F1, step 1.1, step 2.1, step 3.1, algebra]

4.2 Taking $k=w$ in the affine iterate from step 1.1 shows $x_{2^w}\equiv x_0\pmod{2^w}$: the first summand $(a^{2^w}-1)x_0$ is divisible by $2^{w+2}$ and $cS_{2^w}$ by $2^w$. Thus a least positive return time $d$ exists. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 This least return time divides $2^w$. Indeed, write $2^w=qd+r$ with $0\le r<d$. Determinism and $x_d=x_0$ imply $x_{n+d}=x_n$ for all $n\ge0$, so $x_{2^w}=x_r$. Since $x_{2^w}=x_0$, minimality of $d$ forces $r=0$, hence $2^w=dh$ for some positive integer $h$. By [F3], factor $d$ and $h$ into primes; their combined list is a prime factorization of $2^w$, whose prime list consists of $w$ copies of the prime $2$. Uniqueness in [F3] implies every prime factor of $d$ is 2, so $d=2^j$ for some $0\le j\le w$. If $j<w$, step 4.1 shows $x_{2^j}\ne x_0$ modulo $2^{j+1}$ and therefore modulo $2^w$, contradiction. Hence $d=2^w$, for every seed. [F3, step 4.1, step 4.2, algebra]

6.1 The map $x\mapsto[ax+c]_{2^w}$ is injective: if two outputs agree then $2^w\mid a(x-y)$. Since $a$ is odd, $2\mid ad$ implies $2\mid d$; canceling a factor $2$ and repeating $w$ times gives $2^w\mid x-y$. Thus the map is a permutation of the finite state set. By [F2], a uniform seed therefore remains uniform at every time. The adjacent-pair law is supported on exactly the $2^w$ pairs $(x,[ax+c]_{2^w})$, while the product of two uniform marginals assigns positive mass to all $2^{2w}$ pairs. Since $w\ge2$, $2^w<2^{2w}$, so the adjacent states are dependent. [given, F1, F2, algebra] ∎
