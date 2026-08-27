---
id: cor-modulus-powers-of-holomorphic-functions-are-subharmonic
kind: corollary
title: "Positive powers of the modulus of a holomorphic function are subharmonic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-log-modulus-of-a-holomorphic-function-is-subharmonic]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $f$ be holomorphic on a complex domain $\Omega$, not identically zero on any
connected component, and let $p>0$. Then the function
$$z\longmapsto |f(z)|^p$$
is subharmonic on $\Omega$.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on a complex domain $\Omega$, not identically zero on any connected component, and a real number $p>0$.

[L1] The function $\log|f|$, with value $-\infty$ at the zeros of $f$, is subharmonic ([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]]).

## Proof

**Proof technique:** direct.

1.1 Put $u=\log|f|$. By [L1], for every closed disc $\overline{D(a,r)}\subseteq\Omega$, [L1, algebra]
$$u(a)\le\frac1{2\pi}\int_0^{2\pi}u(a+re^{it})\,dt.$$
Exponentiating and using Jensen's inequality for the convex increasing map $x\mapsto e^{px}$ gives
$$|f(a)|^p=e^{pu(a)}\le\frac1{2\pi}\int_0^{2\pi}e^{pu(a+re^{it})}\,dt=\frac1{2\pi}\int_0^{2\pi}|f(a+re^{it})|^p\,dt.$$
[L1, algebra]

2.1 The function $|f|^p$ is continuous, hence upper semicontinuous, and is not identically zero on a connected component because $f$ is not identically zero there. Step 1.1 is exactly the submean inequality, so $|f|^p$ is subharmonic. [step 1.1, given] ∎
