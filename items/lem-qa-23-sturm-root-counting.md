---
id: lem-qa-23-sturm-root-counting
kind: lemma
title: Sturm signed remainders count distinct real polynomial roots
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-field
  - def-ordered-field
  - def-polynomial-ring-over-a-commutative-ring
  - def-polynomial-degree-leading-coefficient-and-monic
  - def-formal-derivative-of-a-polynomial
  - thm-polynomial-division-algorithm-over-a-field
  - thm-algebra-of-continuous-functions
  - thm-intermediate-value
  - def-real-numbers
  - thm-reals-field
  - thm-reals-ordered-field
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, §2, Sturm's Theorem"
      url: "https://www.maths.tcd.ie/~odunlain/1263/book.pdf"
    - title: "Sturm's Theorem, EPFL lecture note"
      url: "https://lara.epfl.ch/w/_media/sar10/sturms_proof.pdf"
---

## Statement

Let $K\subseteq\mathbb R$ be an ordered subfield and let $f\in K[t]$ be nonconstant and square-free, where **square-free means** $\gcd(f,f')=1$. Put $f_0=f$, $f_1=f'$, and, while the next remainder is nonzero, set $f_{j+1}=-\operatorname{rem}(f_{j-1},f_j)$. For $x\in K$, let $V(x)$ be the number of sign changes in $(f_0(x),\ldots,f_m(x))$ after deleting zero entries, where $f_m$ is the last nonzero member. If $a,b\in K$, $a<b$, and $f(a)f(b)\ne0$, then the number of distinct real roots of $f$ in $(a,b)$ is $V(a)-V(b)$.

## Facts & Assumptions

**Given:** An ordered subfield $K\subseteq\mathbb R$, a nonconstant $f\in K[t]$ with $\gcd(f,f')=1$, and $a<b$ with $f(a)f(b)\ne0$.

[F1] [[thm-polynomial-division-algorithm-over-a-field]]: division by a nonzero polynomial over a field gives a quotient and a remainder of strictly smaller degree, with the quotient and remainder unique.

[F2] [[def-formal-derivative-of-a-polynomial]]: if $f(t)=\sum_j a_jt^j$, then $f'(t)=\sum_{j\ge1}j a_jt^{j-1}$.

[F3] [[def-field]] and [[def-ordered-field]]: $K$ is a field with a compatible total order; since $K\subseteq\mathbb R$, every root considered below is ordered as a real number.

[F4] [[thm-algebra-of-continuous-functions]]: every polynomial function $\mathbb R\to\mathbb R$ is continuous.

[F5] [[thm-intermediate-value]]: a continuous real function on a closed interval takes every value between its endpoint values.

[F6] [[thm-reals-field]] and [[thm-reals-ordered-field]]: $\mathbb R$ is a field with a compatible total order, so division in $\mathbb R[t]$ and signs of real polynomial values are defined.

## Proof

1.1 Each nonzero remainder has degree smaller than its divisor by [F1], so the chain terminates. The Euclidean algorithm preserves the common divisors of $f$ and $f'$, and their gcd is $1$ by the square-free hypothesis; hence the last nonzero member is a nonzero constant. A nonzero polynomial has only finitely many real roots: repeatedly divide by $t-c$ at each distinct root $c$ in $\mathbb R[t]$; each division lowers degree, so there can be no more roots than the original degree. [F1, given, algebra]

2.1 For each intermediate index $0<j<m$, the division identity is $f_{j-1}=q_jf_j-f_{j+1}$. If $f_j(c)=0$, then $f_{j-1}(c)=-f_{j+1}(c)$. No two consecutive members can vanish at one point: the identity would propagate a common zero to the final nonzero constant. Thus both neighbors are nonzero and have opposite signs at $c$. [F1, step 1.1]

3.1 A polynomial $h$ with $h(c)\ne0$ keeps its sign in some interval about $c$: division by $t-c$ gives $h(t)=h(c)+(t-c)k(t)$, and the finite polynomial $k$ is bounded on $[c-1,c+1]$ by the sum of the absolute values of its coefficients times the corresponding powers of $|c|+1$. Taking $|t-c|$ small enough makes $|(t-c)k(t)|<|h(c)|$. Therefore, near a zero $c$ of an intermediate $f_j$, its two neighboring members keep their opposite signs; whether $f_j$ is positive, negative, or zero, those three entries contribute exactly one sign change. Intermediate zeros do not change $V$, including at an endpoint where $f_0$ is nonzero. [F1, step 2.1, algebra]

4.1 If $c$ is a root of $f_0=f$, then $f_1(c)=f'(c)\ne0$: otherwise the Euclidean algorithm and [F1] give polynomials $u,v\in K[t]$ with $uf+vf'=1$, and evaluating at $c$ would give $0=1$. Division in $\mathbb R[t]$ gives $f(t)=(t-c)h(t)$ by [F6]. Expanding $h$ in powers of $t-c$, the coefficient of $(t-c)$ in $f$ is $h(c)$; the formal derivative formula [F2] says this coefficient is $f'(c)$. By step 3.1, $h$ keeps the sign of $f'(c)$ near $c$, so $f$ changes sign exactly once there, from the opposite sign to the same sign as $f'(c)$. The first pair $(f_0,f_1)$ therefore loses exactly one sign change as $t$ passes left to right through $c$. [F1, F2, F3, F6, given, step 3.1]

5.1 The chain has finitely many roots by step 1.1. Every chain member is a real polynomial and so is continuous by [F4]; if its sign changed between two consecutive zeros, [F5] would give an additional zero. Thus between the finitely many chain-root locations all signs are fixed by [F6]. At every intermediate-member zero the variation is unchanged by step 3.1, and at every root of $f$ it decreases by one by step 4.1. Since $f(a)f(b)\ne0$, neither endpoint is a root of $f$; summing the changes from $a$ to $b$ gives $V(a)-V(b)$ equal to the number of distinct roots of $f$ in $(a,b)$. [F1, F4, F5, F6, step 1.1, step 3.1, step 4.1, given] ∎



