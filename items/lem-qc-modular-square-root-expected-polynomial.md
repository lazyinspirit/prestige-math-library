---
id: lem-qc-modular-square-root-expected-polynomial
kind: lemma
title: Exact randomized modular square roots in expected polynomial time
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - thm-eulers-criterion-for-legendre-symbol
  - thm-count-of-quadratic-residues-modulo-prime
  - thm-z-mod-p-is-a-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Appendix C, Lemma C.12 and Remark C.22
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 0
---

## Statement

Given a prime integer $p$ and an integer $a$, there is an exact randomized algorithm that returns a square root of $a$ modulo $p$ or correctly reports that none exists. With ordinary binary integers, schoolbook arithmetic and independent unbiased random bits, its expected bit cost is polynomial in the input length; after reducing $a$ modulo $p$, it is $O((1+\log p)^4)$. Every returned answer is correct, and the algorithm terminates with probability one. The input promise that $p$ is prime is not a primality test.

## Facts & Assumptions

**Given:** A prime $p$ and an integer $a$ in binary; random bits are independent and unbiased.

[F1] Euler's criterion gives $a^{(p-1)/2}=(a/p)$ modulo an odd prime ([[thm-eulers-criterion-for-legendre-symbol]]).

[F2] Exactly half the nonzero classes modulo an odd prime are nonsquares ([[thm-count-of-quadratic-residues-modulo-prime]]).

[F3] The residue ring modulo a prime is a field ([[thm-z-mod-p-is-a-field]]).

## Proof


1.1 Reduce $a$ modulo $p$. If $p=2$, return its residue; if $a=0$, return zero. Otherwise [F1] rejects exactly the nonsquares by testing $a^{(p-1)/2}=-1$. In the remaining case write $p-1=2^s q$ with $q$ odd and $s\ge1$. Repeatedly sample $z$ uniformly from $1,\ldots,p-1$ until $z^{(p-1)/2}=-1$. Uniform sampling is implemented by drawing $\lceil\log_2p\rceil$ bits and rejecting zero and integers at least $p$. Each draw is accepted with probability at least $1/4$, and each accepted $z$ is a nonsquare with probability $1/2$ by [F2]; thus this search has bounded expected trials and terminates almost surely. [given, F1, F2, construct, algebra]

2.1 Set $x=a^{(q+1)/2}$, $t=a^q$, $c=z^q$ and $M=s$, all modulo $p$. Then $x^2=at$, $c$ has exact multiplicative order $2^M$, and $t^{2^{M-1}}=1$ by the tests in step 1.1. While $t\ne1$, find the least $m\ge1$ with $t^{2^m}=1$ by successive squaring; it satisfies $m<M$. Put $b=c^{2^{M-m-1}}$ and replace $(x,t,c,M)$ by $(xb,tb^2,b^2,m)$. The identity $x^2=at$ is preserved. The old $t$ has order exactly $2^m$, so $t^{2^{m-1}}=-1$: in a field, the only roots of $X^2-1$ are $1,-1$ by factorization. Likewise $b^2$ has order $2^m$ and its $2^{m-1}$-st power is $-1$. Therefore the new $t$ has order dividing $2^{m-1}$, while the new $c$ has order $2^m$. The invariants are maintained and $M$ strictly decreases. After at most $s$ iterations, $t=1$ and $x^2=a$. Return $x$. [F1, F3, step 1.1, algebra, construct]

3.1 Put $B=1+\lceil\log_2p\rceil$. Every modular integer has $O(B)$ bits. Schoolbook multiplication and division use $O(B^2)$ bit operations; binary repeated squaring computes a power with $O(B)$-bit exponent in $O(B)$ modular multiplications. These bounds follow directly by forming at most $B$ shifted rows for multiplication and eliminating at most $B$ quotient digits for division. Step 1.1 uses an expected bounded number of such powers. Each of the at most $B$ iterations in step 2.1 uses at most $O(B)$ modular multiplications to find $m$ and compute $b$. Its total cost is $O(B^4)$. Initial reduction has cost polynomial in the original length of $a$ and $p$. Thus the algorithm has the asserted expected bit bound; only the nonsquare search is randomized, and its outcome never changes the correctness of the final answer. [step 1.1, step 2.1, algebra] ∎

