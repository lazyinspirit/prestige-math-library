---
id: thm-every-complex-number-has-a-square-root
kind: theorem
title: 'Every complex number has a square root, by an explicit Cartesian formula'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, thm-of-square-roots, thm-reals-ordered-field, lem-of-square-monotone]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. K. Srivastava, Complex Analysis lecture notes"
      url: "https://fac.iitg.ac.in/rksri/MA547%20Complex%20Analysis%20lecture%20notes%202025.pdf"
pipeline_run: frontier-11
---

## Statement

Every $z=a+bi\in\mathbb C$ has a square root. If $b\ne0$, one square root is
$$u+vi,\qquad u=\sqrt{\frac{|z|+a}{2}},\qquad v=\frac{b}{2u}.$$
If $b=0$, one may take $\sqrt a$ when $a\ge0$, and
$i\sqrt{-a}$ when $a<0$.

## Facts & Assumptions

**Given:** A complex number $z=a+bi$.

[F1] $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]), and hence $|z|^2=a^2+b^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F2] Every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

[F3] The real numbers form an ordered field ([[thm-reals-ordered-field]]).

[F4] Squaring is order-preserving and order-reflecting on nonnegative elements ([[lem-of-square-monotone]]).

## Proof

**Proof technique:** cases.

1.1 Suppose $b=0$ and $a\ge0$. Then [F2] gives $(\sqrt a)^2=a=z$. [assume-case nonnegative, F2]

1.2 Suppose $b=0$ and $a<0$. Then [F2] gives $(i\sqrt{-a})^2=a=z$. [assume-case negative, F2, F3, algebra]

1.3 Suppose $b\ne0$. Then $b^2>0$, so [F1] gives $|z|^2>a^2$. If $a\ge0$, [F4] yields $|z|>a$; if $a<0$, it yields $|z|>-a$. In either case $|z|+a>0$. [assume-case nonzero, F1, F3, F4]

2.1 By [F2], $u=\sqrt{(|z|+a)/2}$ exists and is positive; hence $v=b/(2u)$ is defined. [F2, F3, step 1.3]

3.1 From $4u^2=2(|z|+a)$ and [F1], $$v^2=\frac{b^2}{4u^2} =\frac{|z|^2-a^2}{2(|z|+a)} =\frac{|z|-a}{2}.$$ [F1, step 2.1, algebra]

4.1 Therefore $u^2-v^2=a$ and $2uv=b$, so coordinate multiplication gives $(u+vi)^2=a+bi=z$. [step 2.1, step 3.1, algebra]

5.1 The cases $b=0$ with $a\ge0$, $b=0$ with $a<0$, and $b\ne0$ are exhaustive, so every complex number has a square root. [step 1.1, step 1.2, step 4.1, cases-exhaustive] ∎
