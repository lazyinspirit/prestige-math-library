---
id: lem-parallel-integer-vectors-share-a-primitive-direction
kind: lemma
title: "Parallel integer vectors share a primitive integer direction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-gcd-of-finite-integer-tuple
  - thm-bezout-identity
  - thm-induction-principle
  - lem-int-cancellation
proof_strategy: induction
verification:
  precheck: pass
sources:
  references:
    - title: "Glyn Harman, Metric Number Theory, Chapter 4"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Statement

Let $n\ge1$ and let $q,r\in\mathbb Z^n\setminus\{0\}$. If $r=tq$ for some real number $t$, then there are a vector $u\in\mathbb Z^n$, nonzero integers $a,b$, and integers $c_1,\ldots,c_n$ such that $q=au$, $r=bu$, $\gcd(u_1,\ldots,u_n)=1$, and $\sum_{j=1}^n c_ju_j=1$.

## Statement references

[Harman, *Metric Number Theory*, Chapter 4](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** Nonzero integer vectors $q,r$, real scalar $t$ with $r=tq$, and the tuple-gcd fold convention.

[F1] The tuple gcd is a positive common divisor of a nonzero tuple and divides every coordinate. ([[def-gcd-of-finite-integer-tuple]])

[F2] For integers $x,y$ not both zero there exist integers $c,d$ with $cx+dy=\gcd(x,y)$. ([[thm-bezout-identity]])

[F3] Multiplication by a nonzero integer is cancellative. ([[lem-int-cancellation]])

[L1] If a property holds at $0$ and is preserved by the successor, it holds for every natural number. ([[thm-induction-principle]])

## Proof




1.1 Put $g_0=0$ and $g_j=\gcd(g_{j-1},q_j)$ for $1\le j\le n$. Then $g_n=\gcd(q_1,\ldots,q_n)>0$ by [F1], so the divisor property gives integers $u_j$ with $q_j=g_nu_j$ for every $j$. [given, F1, construct]

1.2 For $j\in\mathbb N$, put $s_j:=\min(j,n)$ and let $P(j)$ assert that $g_{s_j}$ is an integer linear combination of $q_1,\ldots,q_{s_j}$. At $j=0$ the empty sum is $g_0=0$, so $P(0)$ holds. [given, base]

2.1 Assume $P(j)$ [ih] and put $s=s_j$. If $s=n$, then $s_{j+1}=n$ and the same linear combination proves $P(j+1)$. If $s<n$, then $s=j$; if $g_s=q_{s+1}=0$, then $g_{s+1}=0$ and it is the zero linear combination. Otherwise [F2] gives integers $e,f$ with $g_{s+1}=eg_s+fq_{s+1}$, and substituting the combination from $P(j)$ yields an integer linear combination of $q_1,\ldots,q_{s+1}$. Thus $P(j+1)$ holds. [given, step 1.1, F2, ih, algebra]

3.1 By [L1], the base step 1.2 and successor step 2.1 prove $P(j)$ for every natural number $j$. In particular $P(n)$ gives integers $c_1,\ldots,c_n$ with $g_n=\sum_{j=1}^n c_jq_j$. [given, step 1.2, step 2.1, L1, induction]

4.1 Substituting $q_j=g_nu_j$ from step 1.1 into step 3.1 and cancelling the nonzero integer $g_n$ by [F3] gives $\sum_jc_ju_j=1$. Thus $u$ has no common divisor other than $1$ and $-1$, so its nonnegative tuple gcd is $1$. [step 1.1, step 3.1, F1, F3, algebra]

5.1 Since $q=g_nu$ and $r=tq$, one has $r=(tg_n)u$. Taking the integer linear combination from step 4.1 gives $tg_n=\sum_jc_jr_j\in\mathbb Z$. Set $a=g_n$ and $b=tg_n$. Both are nonzero integers because $q,r$ are nonzero. Then $q=au$ and $r=bu$, with $u$ primitive as established in step 4.1. [given, step 1.1, step 4.1, discharge-induction: step 2.1, algebra] ∎
