---
id: def-gcd-of-finite-integer-tuple
kind: definition
title: "Greatest common divisor of a finite integer tuple"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-common-divisor-and-gcd
  - cor-common-divisor-divides-gcd
  - thm-recursion
  - thm-induction-principle
proof_strategy: induction
verification:
  precheck: pass
sources:
  references:
    - title: "Greatest common divisor"
      url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
---

## Definition

Use the nonnegative two-integer greatest common divisor, with $\gcd(0,0)=0$. For a nonempty finite tuple $a=(a_1,\ldots,a_k)\in\mathbb Z^k$, define $g_0:=0$ and recursively define $g_j:=\gcd(g_{j-1},a_j)$ for $1\le j\le k$. The greatest common divisor of the tuple is $\gcd(a_1,\ldots,a_k):=g_k$. This is a left-associated convention in the displayed coordinate order. It is $0$ when all entries are zero and is otherwise the unique nonnegative integer that is a common divisor of every entry and is divisible by every common divisor of all entries.

## Definition references

[Greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor)

## Facts & Assumptions

**Given:** A nonempty finite tuple $a=(a_1,\ldots,a_k)\in\mathbb Z^k$ and the recursively defined sequence $g_0,\ldots,g_k$.

[F1] For any two integers $u,v$, $\gcd(u,v)$ is nonnegative, is a common divisor of $u,v$, and is divisible by every common divisor of $u,v$; at $(0,0)$ its value is $0$. ([[def-common-divisor-and-gcd]], [[cor-common-divisor-divides-gcd]])

[F2] A sequence defined by an initial value and a successor rule exists and is unique. ([[thm-recursion]])

[F3] If a property holds at $0$ and is preserved by the successor, then it holds for every natural number. ([[thm-induction-principle]])

## Proof




1.1 By [F2], the rule $g_0=0$ and $g_j=\gcd(g_{j-1},a_j)$ for $1\le j\le k$ defines one unique finite sequence. [given, F2, construct]

1.2 For $r\in\mathbb N$, put $s_r:=\min(r+1,k)$ and let $P(r)$ assert that $g_{s_r}$ is nonnegative, divides each $a_i$ with $1\le i\le s_r$, and is divisible by every common divisor of $a_1,\ldots,a_{s_r}$. Since $k\ge1$, $s_0=1$; [F1] applied to $(0,a_1)$ proves $P(0)$. [given, F1, base]

2.1 Assume $P(r)$ [ih] and set $s=s_r$. If $s=k$, then $s_{r+1}=k$ and $P(r+1)$ is the same assertion. If $s<k$, then $s=r+1$ and $g_{s+1}=\gcd(g_s,a_{s+1})$. By [F1], this is nonnegative and divides both entries, so it divides every coordinate of the longer prefix. Any common divisor of that prefix divides $g_s$ by $P(r)$ and also divides $a_{s+1}$, hence divides $g_{s+1}$ by [F1]. Thus $P(r+1)$ holds. [given, step 1.1, F1, ih, algebra]

3.1 By induction [F3], steps 1.2 and 2.1 prove $P(r)$ for every natural number $r$. At $r=k-1$ we have $s_r=k$, so the full tuple has the stated gcd property. [given, step 1.2, step 2.1, F3, induction]

4.1 If $h$ is another nonnegative common divisor divisible by every common divisor of the tuple, step 3.1 gives $g_k\mid h$ and $h\mid g_k$; nonnegative integers that divide each other are equal. Thus the recursive value is the unique tuple gcd. [given, step 3.1, algebra]

5.1 If every $a_i=0$, each recursion step gives $g_j=\gcd(0,0)=0$. Otherwise [F1] gives a positive gcd at the first nonzero entry, and the property in step 3.1 makes $g_k$ the unique nonnegative common divisor specified in the Definition. [step 1.1, step 3.1, F1, discharge-induction: step 2.1, algebra] ∎
