---
id: thm-log-modulus-of-a-holomorphic-function-is-subharmonic
kind: theorem
title: "The logarithm of the modulus of a holomorphic function is subharmonic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-c-two-characterization-of-plane-subharmonicity, thm-zero-order-factorization-holomorphic-function, lem-local-holomorphic-logarithm-nonvanishing-function-on-disc, cor-holomorphic-functions-are-real-analytic-and-smooth]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a complex domain and let $f$ be holomorphic on
$\Omega$, not identically zero on any connected component. Define
$$u(z)=\log|f(z)|,$$
with the convention $u(z)=-\infty$ at the zeros of $f$. Then $u$ is
subharmonic on $\Omega$.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on a complex domain $\Omega$, not identically zero on any connected component.

[L1] A $C^2$ real function is subharmonic exactly when its Laplacian is nonnegative ([[thm-c-two-characterization-of-plane-subharmonicity]]).

[L2] Near a zero $a$ of order $m$, the function $f$ factors as $f(z)=(z-a)^m g(z)$ with $g$ holomorphic and $g(a)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[L3] A holomorphic nonvanishing function on a disc has a holomorphic logarithm there ([[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]]).

[L4] Holomorphic functions are smooth, so their real and imaginary parts admit the second derivatives used in [L1] ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

## Proof

**Proof technique:** direct.

1.1 Let $D\subseteq\Omega$ be a disc on which $f$ has no zeros. By [L3], there is a holomorphic function $L$ on $D$ with $\exp L=f$. Writing $L=\alpha+i\beta$, one has $\alpha=\log|f|$ on $D$. Since $L$ is holomorphic and smooth by [L4], the Cauchy-Riemann equations imply $\Delta\alpha=0$, so [L1] makes $\log|f|$ subharmonic on every zero-free disc. [L1, L3, L4]

2.1 Fix a zero $a$ of $f$, and let $m=\operatorname{ord}_a(f)$. By [L2], on a small disc about $a$ one has $f(z)=(z-a)^m g(z)$ with $g(a)\ne0$. Shrinking if necessary, $g$ has no zeros there, so step 1.1 makes $\log|g|$ harmonic and hence subharmonic on that disc. [L2, step 1.1]

3.1 On the punctured disc around $a$, [step 2.1, algebra]
$$u(z)=m\log|z-a|+\log|g(z)|.$$
The function $\log|z-a|$ is harmonic on the punctured disc, and at the center $a$ its value is $-\infty$ while every circle average is finite; hence it is subharmonic there. Therefore the right-hand side is subharmonic on the whole disc, agreeing with $u$ away from $a$ and with $u(a)=-\infty$ at the center. [step 2.1, algebra]

4.1 Every point of $\Omega$ lies either on a zero-free disc covered by step 1.1 or on a zero-containing disc covered by step 3.1. So $u$ is subharmonic throughout $\Omega$. [step 1.1, step 3.1] ∎
