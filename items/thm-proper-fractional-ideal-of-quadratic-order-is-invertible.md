---
id: thm-proper-fractional-ideal-of-quadratic-order-is-invertible
kind: theorem
title: "Proper fractional ideals of quadratic orders are invertible"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-quadratic-order-of-discriminant
  - lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-fractional-ideal
  - def-product-and-colon-of-fractional-ideals
  - def-field-norm-and-trace
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. V. Sutherland, MIT 18.783 Lecture 17, Elliptic curves with complex multiplication"
      url: "https://ocw.mit.edu/courses/18-783-elliptic-curves-fall-2025/mit18_783_f25_lec_full.pdf"
      locator: "Theorem 17.10 and complete proof, Lecture 17, pp. 3–4"
verification: {}
---

## Statement

Let $\mathcal O$ be a quadratic order in an imaginary quadratic field $K$.
Every nonzero fractional $\mathcal O$-ideal $I$ whose multiplier ring
$(I:I)=\{x\in K:xI\subseteq I\}$ equals $\mathcal O$ is invertible: there is
a fractional ideal $J$ with $IJ=\mathcal O$.

## Statement references

[[def-proper-invertible-ideal-class-group-of-a-quadratic-order|Proper means that the multiplier ring is exactly the order.]]

[Sutherland, MIT 18.783 Lecture 17, Theorem 17.10](https://ocw.mit.edu/courses/18-783-elliptic-curves-fall-2025/mit18_783_f25_lec_full.pdf)

## Facts & Assumptions

**Given:** A quadratic order $\mathcal O$ in an imaginary quadratic field $K$ and a nonzero fractional $\mathcal O$-ideal $I$ with $(I:I)=\mathcal O$.

[F1] [[def-quadratic-order-of-discriminant]]: $\mathcal O$ is a free rank-two $\mathbb Z$-module in $K$ and is closed under multiplication and conjugation.

[F2] [[lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice]]: $I$ is a rank-two lattice; after multiplying by a nonzero scalar it is integral.

[F3] [[def-product-and-colon-of-fractional-ideals]]: products are finite sums of pairwise products, and $(\mathcal O:I)=\{x\in K:xI\subseteq\mathcal O\}$.

[F4] [[def-field-norm-and-trace]]: for $x\in K$, $N(x)=x\bar x$ and $\operatorname{Tr}(x)=x+\bar x$.

## Proof

1.1 Scale $I$ by a nonzero element of $K$ so that it is integral, and choose a $\mathbb Z$-basis $\alpha,\beta$ with $\alpha\ne0$. Write $I=\alpha[1,\tau]$ with $\tau=\beta/\alpha\in K\setminus\mathbb Q$. Let
$$A X^2+B X+C$$
be the primitive integer minimal polynomial of $\tau$, with $A>0$ and $\gcd(A,B,C)=1$. Multiplication by $\alpha$ does not change the multiplier ring, so $(I:I)=( [1,\tau]:[1,\tau])$. [F1, F2, given, choose]

2.1 If $x=u+v\tau$ preserves $[1,\tau]$, then $u,v\in\mathbb Z$ from $x\cdot1\in[1,\tau]$, and $x\tau=-vC/A+(u-vB/A)\tau$ lies in $[1,\tau]$. Thus $A\mid vB$ and $A\mid vC$. Since $\gcd(A,B,C)=1$, prime-power divisibility gives $A\mid v$. Conversely, $A\tau$ preserves $[1,\tau]$ because $A\tau^2=-B\tau-C$. Hence $(I:I)=\mathbb Z+A\mathbb Z\tau$. [F1, step 1.1, algebra]

3.1 The hypothesis $(I:I)=\mathcal O$ and step 2.1 identify $\mathcal O=\mathbb Z+A\mathbb Z\tau$. The product $[1,\tau][1,\bar\tau]$ is generated over $\mathbb Z$ by $1,\tau,\bar\tau,C/A$; after multiplication by $A$, its generators span $A,A\tau,A\bar\tau,C$. The relation $A\bar\tau=-B-A\tau$ and $\gcd(A,B,C)=1$ show that this span is exactly $\mathbb Z+A\mathbb Z\tau$. Therefore $[1,\tau][1,\bar\tau]=A^{-1}\mathcal O$. [F1, F4, step 1.1, step 2.1, algebra]

4.1 Since $I=\alpha[1,\tau]$, step 3.1 gives $I\bar I=(N(\alpha)/A)\mathcal O$. The scalar $N(\alpha)/A$ is nonzero, so $J=(A/N(\alpha))\bar I$ is a fractional ideal and $IJ=\mathcal O$. This is invertibility. [F3, step 3.1, given, algebra] ∎
