---
id: ex-index-obstructs-naive-polynomial-factorization
kind: example
title: "Index 2 obstructs reading factorisation from Z[sqrt 5] modulo 2"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [ex-nonmaximal-quadratic-order, cor-order-index-discriminant-formula]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "William Stein, Algebraic Number Theory, Section 6.1"
      url: "https://wstein.org/books/ant/ant.pdf"
---

## Example

For $A=\mathbb Z[\sqrt5]\subsetneq\mathcal O_K$ with $K=\mathbb Q(\sqrt5)$,
reduction of the power polynomial $X^2-5$ modulo $2$ gives
$(X+1)^2$. But $\mathcal O_K/2\mathcal O_K\cong\mathbb F_2[X]/(X^2+X+1)$,
which is a field. Thus the repeated factor in the nonmaximal power order is
not a factorisation assertion about $\mathcal O_K$.

## Facts & Assumptions

**Given:** $K=\mathbb Q(\sqrt5)$, $A=\mathbb Z[\sqrt5]$, and $\omega=(1+\sqrt5)/2$.

[F1] The order $A$ has index $2$ in $\mathcal O_K$ ([[ex-nonmaximal-quadratic-order]]).

[F2] The index-discriminant formula detects this nonmaximality ([[cor-order-index-discriminant-formula]]).

## Verification

**Proof technique:** direct.

1.1 In $A/2A$, the class of $\sqrt5$ satisfies $X^2-5\equiv X^2+1=(X+1)^2$, so $A/2A\cong\mathbb F_2[X]/((X+1)^2)$ has a nonzero nilpotent. [F1, given, algebra]

2.1 The element $\omega$ satisfies $\omega^2-\omega-1=0$. Hence $\mathcal O_K/2\mathcal O_K\cong\mathbb F_2[X]/(X^2+X+1)$; the polynomial has no root in $\mathbb F_2$, so this quotient is a field. [F1, step 1.1, algebra]

3.1 The two quotient rings cannot agree, and [F2] identifies the reason as the index divisible by $2$. Therefore reduction of the power polynomial in $A$ cannot by itself describe factorisation in the maximal order. [F2, step 1.1, step 2.1] ∎
