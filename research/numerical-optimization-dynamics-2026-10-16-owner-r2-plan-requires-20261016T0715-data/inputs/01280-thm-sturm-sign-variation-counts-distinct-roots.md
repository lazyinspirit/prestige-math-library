---
id: thm-sturm-sign-variation-counts-distinct-roots
kind: theorem
title: Sturm sign variation counts distinct real polynomial roots
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-polynomial-ring-over-a-commutative-ring
  - def-formal-derivative-of-a-polynomial
  - thm-polynomial-division-algorithm-over-a-field
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-algebra-of-continuous-functions
  - thm-intermediate-value
  - def-real-numbers
  - thm-reals-field
  - thm-reals-ordered-field
  - cor-factor-theorem-over-a-commutative-ring
  - prop-formal-derivative-laws
verification:
  precheck: pass
sources:
  references:
    - title: "Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, §2"
      url: "https://www.maths.tcd.ie/~odunlain/1263/book.pdf"
    - title: "Marc Moreno Maza, Tutorial on real root isolation of polynomial systems, §§12–14"
      url: "https://www.csd.uwo.ca/~mmorenom/Publications/RS-SAV-Tutorial.pdf"
---

## Statement

Let $P\in\mathbb Q[x]$ be nonconstant with $\gcd(P,P')=1$. Define $P_0=P$, $P_1=P'$, and recursively
$$
P_{j+1}=-\operatorname{rem}(P_{j-1},P_j)
$$
until the final nonzero term $P_s$, which is constant. For a real $t$ that is not a root of $P$, let $V(t)$ be the number of sign changes in $P_0(t),\ldots,P_s(t)$ after zero entries are deleted. If $a<b$ and $P(a)P(b)\ne0$, then the number of distinct real roots of $P$ in $(a,b)$ is
$$
V(a)-V(b).
$$
---

## Facts & Assumptions

**Given:** A nonconstant squarefree $P\in\mathbb Q[x]$, its Sturm sequence, and real endpoints $a<b$ with $P(a)P(b)\ne0$.

[F1] Polynomial division over a field gives the Euclidean remainder with smaller degree ([[thm-polynomial-division-algorithm-over-a-field]]).

[F2] Formal differentiation obeys the product rule and the degree bound ([[prop-formal-derivative-laws]]).

[F3] Every real polynomial function is continuous ([[thm-algebra-of-continuous-functions]]).

[F4] A continuous function on $[a,b]$ takes every value between its endpoint values ([[thm-intermediate-value]]).

[F5] A nonzero polynomial has at most its degree many distinct roots, by the factor theorem and degree additivity ([[cor-factor-theorem-over-a-commutative-ring]], [[thm-polynomial-degree-of-a-product-over-a-domain]]).

## Proof

1.1 The degrees of nonzero Euclidean remainders strictly decrease by [F1], so the sequence terminates. Since the stated gcd is $1$, the last nonzero remainder is a nonzero constant $c$. Backward substitution in the division equations gives $A,B\in\mathbb Q[x]$ with $AP_0+BP_1=c$; dividing by $c$ gives a Bezout identity with right side $1$. [given, F1, F2, algebra, construct]

1.2 Between zeros of the sequence, every polynomial keeps its sign: a sign change would give a zero by [F3] and [F4]. Each term has finitely many zeros by [F5], so it suffices to compute how $V$ changes when a real point crosses a zero of one or more sequence terms. [F3, F4, F5]

2.1 No two consecutive terms can vanish at the same real $c$. By step 1.1 there are $A,B\in\mathbb Q[x]$ with $AP_0+BP_1=1$; evaluating at $c$ rules out a common zero of $P_0,P_1$ even over $\mathbb C$. For $1\le j<s$, the recurrence $P_{j-1}=Q_jP_j-P_{j+1}$ propagates simultaneous zeros of $P_j,P_{j+1}$ backward to $P_0,P_1$. [step 1.1, F1, algebra]

3.1 Suppose $P_j(c)=0$ for an internal index $1\le j<s$. The no-adjacent-zero property in [step 2.1] makes $P_{j-1}(c)$ and $P_{j+1}(c)$ nonzero, and the recurrence gives $P_{j-1}(c)=-P_{j+1}(c)$. They have opposite signs. On either side of $c$, the signs of these neighbors are fixed; after zero entries are deleted, the adjacent nonzero neighbors of each internal zero contribute exactly one sign change. If several internal terms vanish at $c$, their indices are nonconsecutive, so these adjacent-pair contributions may share an endpoint but remain distinct terms in the total variation. Thus internal zeros do not change $V$. [step 2.1, F1, algebra]

4.1 If $P_0(c)=0$, then squarefreeness gives $P_1(c)=P_0'(c)\ne0$. Factor $P_0(x)=(x-c)u(x)$ by [F5]; the product rule gives $u(c)=P_1(c)$, so near $c$ the sign of $P_0(x)P_1(x)$ is the sign of $x-c$. Thus the initial pair contributes one sign change just to the left and none just to the right. Any simultaneous internal zeros contribute no net change by [step 3.1], so $V$ decreases by exactly one as $c$ is crossed from left to right. [step 2.1, step 3.1, F2, F3, F5]

5.1 The endpoints are not roots of $P$ by hypothesis. As one moves from $a$ to $b$, $V$ is constant except at the finitely many roots of sequence terms; by [step 3.1] internal zeros do not change it and by [step 4.1] each distinct root of $P$ lowers it by one. Therefore $V(a)-V(b)$ is exactly the number of distinct roots in $(a,b)$. [given, step 1.2, step 3.1, step 4.1] ∎
