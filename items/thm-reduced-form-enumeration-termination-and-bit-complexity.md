---
id: thm-reduced-form-enumeration-termination-and-bit-complexity
kind: theorem
title: "Reduced-Form Enumeration Terminates in O(|D| log²|D|) Bit Operations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-enumerate-reduced-forms-of-negative-fundamental-discriminant
  - lem-leading-coefficient-bound-for-a-reduced-form
  - thm-reduced-form-enumeration-correctness-and-completeness
  - def-binary-quadratic-form-class-number
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, §§9.3–9.4"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
---

## Statement

Let $D<0$ be a negative fundamental discriminant, so either $D$ is squarefree
and $D\equiv1\pmod4$, or $D=4d$ for squarefree $d\equiv2$ or $3\pmod4$.
Use the enumerator defined for this input. The number $h(D)$ denotes the
number of proper-equivalence classes of primitive positive-definite integral
forms of discriminant $D$. For $(a,b,c)$, the form is
$ax^2+bxy+cy^2$; primitive means $\gcd(a,b,c)=1$, and positive definite
means positive on every nonzero real pair. Proper equivalence uses
determinant-one integer changes of variables. In binary encoding, let
$n=\lceil\log_2(|D|+1)\rceil$ be the bit length of the magnitude of $D$. If addition,
subtraction, comparison, multiplication and integer division use the usual
schoolbook bit algorithms and each gcd uses the Euclidean remainder procedure
specified in the enumerator, then its coefficient loops visit every primitive
reduced positive-definite triple of discriminant $D$, and the procedure
terminates after $O(|D|n^2)=O(|D|\log^2|D|)$ bit operations. A reduced
positive-definite form here has $|b|\le a\le c$ and $b\ge0$ when $|b|=a$ or
$a=c$. With output streamed, the procedure uses $O(n)$ working bits; storing
all $h(D)$ output triples uses an additional $O(h(D)n)$ bits.

## Statement references

[[alg-enumerate-reduced-forms-of-negative-fundamental-discriminant]]

[[lem-leading-coefficient-bound-for-a-reduced-form]]

[[thm-reduced-form-enumeration-correctness-and-completeness]]

[[def-binary-quadratic-form-class-number]]

[William Stein, *Elementary Number Theory and Elliptic Curves*, §§9.3–9.4](https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf)

[Andrew Granville, *Binary Quadratic Forms*, Chapter 4](https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf)

## Facts & Assumptions

**Given:** A negative fundamental discriminant $D$, the enumerator's exact
loops and Euclidean gcd procedure, and binary encoding with the stated
schoolbook arithmetic model.

[F1] The enumerator finds the greatest integer $A$ satisfying
$3A^2\le|D|$ by integer binary search
([[alg-enumerate-reduced-forms-of-negative-fundamental-discriminant]]).

[F2] The enumerator scans $1\le a\le A$ and $-a\le b\le a$, applies the
parity and divisibility tests, computes $c$, and applies the primitive and
reduced-form filters
([[alg-enumerate-reduced-forms-of-negative-fundamental-discriminant]]).

[F3] Each pairwise gcd starts from absolute values and iterates
$(r,s)\mapsto(s,r\bmod s)$ until $s=0$
([[alg-enumerate-reduced-forms-of-negative-fundamental-discriminant]]).

[L1] Every reduced positive-definite form of discriminant $D$ has
$a\le\sqrt{|D|/3}$
([[lem-leading-coefficient-bound-for-a-reduced-form]]).

[L2] The enumerator outputs every primitive, positive-definite, reduced form
of discriminant $D$ and exactly one representative for every proper-equivalence
class, so the output list has $h(D)$ entries
([[thm-reduced-form-enumeration-correctness-and-completeness]]).

[F4] For $D<0$ with $D\equiv0$ or $1\pmod4$, $h(D)$ is the number of
proper-equivalence classes of primitive positive-definite integral forms of
discriminant $D$ ([[def-binary-quadratic-form-class-number]]).

## Proof

1.1 Put $N=|D|$. In the squarefree branch, a negative integer $D\equiv1\pmod4$ has $D\le-3$; in the $D=4d$ branch, $|D|\ge4$. Thus $N\ge3$. The search begins with $L=0$ and $U=N+1$, so $0\le\sqrt{N/3}<U$. At each iteration, $3M^2\le N$ is equivalent to $M\le\sqrt{N/3}$; replacing $L$ by $M$ or $U$ by $M$ preserves $L\le\sqrt{N/3}<U$. The positive integer interval length shrinks until $U=L+1$, when $A=L=\lfloor\sqrt{N/3}\rfloor$. [F1, given, algebra]

1.2 For each $a$, there are at most $2a+1$ values of $b$. Hence the number of candidate pairs is at most $\sum_{a=1}^{A}(2a+1)=A^2+2A=O(|D|)$, since $A^2\le|D|/3$ and $A\le\sqrt{|D|}$. [F2, given, algebra]

2.1 Let $(a,b,c)$ be a primitive reduced positive-definite triple of discriminant $D$. By [L1], $a\le\sqrt{|D|/3}$, so step 1.1 and [F2] put the integer $a$ in the outer loop. Reducedness gives $-a\le b\le a$; the discriminant equation gives $b\equiv D\pmod2$ and $4a\mid b^2-D$. By [L2], this primitive reduced triple is output by the enumerator, so it passes the nested-gcd and reduced-boundary filters; consequently its coefficient pair occurs in the loops and it is retained. [F2, L1, L2, step 1.1, given, algebra]

3.1 For any candidate, $a,|b|\le A=O(\sqrt{|D|})$. If $c$ is computed, then $0<c=(b^2+|D|)/(4a)\le(A^2+|D|)/(4a)\le|D|/(3a)\le|D|/3$. Thus every arithmetic operand has $O(n)$ bits. [F2, step 2.1, algebra]

4.1 For Euclidean gcd, if either nonnegative input is zero, the procedure returns the other. Otherwise order the inputs as $r_0\ge r_1>0$; this requires at most one swap. In the remainder sequence $r_{i-1}=q_ir_i+r_{i+1}$, every two divisions give $r_{i+2}<r_i/2$: if $r_{i+1}\le r_i/2$ this follows from $r_{i+2}<r_{i+1}$, and otherwise $q_{i+1}=1$ and $r_{i+2}=r_i-r_{i+1}<r_i/2$. Therefore there are at most $2n+1$ divisions. If $m_i$ is the bit length of $r_i$, division $i$ has at most $m_{i-1}-m_i+1$ quotient-bit positions, each requiring $O(n)$ comparison/subtraction work. Their total number is $m_0-m_k+k=O(n)$ by telescoping, so each gcd costs $O(n^2)$ bit operations. The algorithm uses two gcd computations per candidate. [F3, step 3.1, algebra]

5.1 The square-root search has $O(n)$ rounds because the interval width is at least halved; each round's multiplication and comparison cost $O(n^2)$, so the search costs $O(n^3)$. The parity, comparison, multiplication, exact-division and two gcd computations for one candidate cost $O(n^2)$ by steps 3.1 and 4.1. Since $n\le|D|$ for $|D|\ge3$, the search cost is absorbed by $O(|D|n^2)$. [F1, F2, F3, step 1.1, step 3.1, step 4.1, algebra]

6.1 Multiplying the $O(|D|)$ candidate count from step 1.2 by the $O(n^2)$ per-candidate cost from step 5.1 gives $O(|D|n^2)$ operations. The coefficient loops and square-root search are finite, and Euclidean remainders strictly decrease until zero, so the procedure terminates. A streaming implementation stores only a constant number of $O(n)$-bit values. By [L2] and [F4], storing the complete list of $h(D)$ triples adds $O(h(D)n)$ bits. [L2, F4, step 1.2, step 5.1, algebra] ∎
