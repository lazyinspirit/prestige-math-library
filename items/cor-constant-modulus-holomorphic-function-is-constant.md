---
id: cor-constant-modulus-holomorphic-function-is-constant
kind: corollary
title: "A holomorphic function of constant modulus on a domain is constant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       thm-zero-complex-derivative-on-a-domain-implies-constant,
       lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, Theorem 3.2.12"
      url: "https://complexanalysis.org/web/sec_cauchy-riemann.html"
pipeline_run: null
---

## Statement

Let $U$ be a complex domain and let $f:U\to\mathbb C$ be holomorphic. If $|f|$ is constant on $U$, then $f$ is constant.

## Facts & Assumptions
**Given:** A domain $U$, a holomorphic $f=u+iv$ on $U$, and a real $c\ge0$ with $|f(z)|=c$ for every $z\in U$.

[L1] Complex modulus is definite and satisfies $|u+iv|^2=u^2+v^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L2] A holomorphic map satisfies $u_x=v_y$, $u_y=-v_x$, and $f'=u_x+iv_x$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L3] A holomorphic function with zero derivative on a domain is constant ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

## Proof

**Proof technique:** cases.

1.1 Suppose first that $c=0$. Then $|f|=0$, so $f=0$ by [L1] and is constant. [assume-case zero, given, L1]

1.2 Suppose next that $c>0$. Differentiating $u^2+v^2=c^2$ in the two real coordinates gives $u u_x+v v_x=0$ and $u u_y+v v_y=0$. [assume-case pos, given, L1, algebra]

2.1 Using [L2], the equations of step 1.2 become $u u_x-v u_y=0$ and $v u_x+u u_y=0$. Their coefficient determinant is $u^2+v^2=c^2>0$, so $u_x=u_y=0$. [step 1.2, L2, algebra]

3.1 Again by [L2], $v_x=-u_y=0$ and $f'=u_x+iv_x=0$ throughout $U$. Hence [L3] makes $f$ constant in the positive-modulus case. [step 2.1, L2, L3]

4.1 The cases $c=0$ and $c>0$ exhaust $c\ge0$, and both give constancy. [step 1.1, step 3.1, cases-exhaustive] ∎
