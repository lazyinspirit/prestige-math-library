---
id: thm-pole-characterizations
kind: theorem
title: "Characterizations of poles"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-singularity-types, def-simple-pole, thm-removable-singularity-characterizations, thm-zero-order-factorization-holomorphic-function, thm-algebra-of-complex-derivatives, cor-complex-differentiability-implies-continuity, thm-laurent-expansion-annulus, thm-laurent-regular-principal-decomposition]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
    - title: "David Greenfield, Rutgers Math 403 diary"
      url: "https://sites.math.rutgers.edu/~greenfie/mill_courses/math403/diary2.html"
pipeline_run: null
---

## Statement

Let $f$ be holomorphic on a punctured disc $0<|z-a|<R$. Then the following are
equivalent:

1. $a$ is a pole of $f$;
2. the Laurent expansion of $f$ has a finite nonzero principal part;
3. $|f(z)|\to\infty$ as $z\to a$;
4. $1/f$ extends holomorphically across $a$ and vanishes there.

If these conditions hold and the principal part is

$$c_{-m}(z-a)^{-m}+c_{-(m-1)}(z-a)^{-(m-1)}+\cdots+c_{-1}(z-a)^{-1}$$

with $c_{-m}\ne0$, then the pole order is $m$.

## Facts & Assumptions

**Given:** A function $f$ holomorphic on $0<|z-a|<R$ and its Laurent expansion $f(z)=\sum_{n\in\mathbb Z}c_n(z-a)^n$ there.

[L1] A removable singularity is exactly one whose principal part is zero, and a holomorphic function with a finite limit at $a$ extends across $a$ with that value ([[thm-removable-singularity-characterizations]]).

[L2] A holomorphic function has a zero of finite order $m$ exactly when it factors as $(z-a)^m g(z)$ with $g$ holomorphic and $g(a)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[L3] Reciprocal and product rules hold for holomorphic functions, and a holomorphic function is continuous ([[thm-algebra-of-complex-derivatives]], [[cor-complex-differentiability-implies-continuity]]).

[L4] A pole of order $m$ means that $(z-a)^mf(z)$ extends holomorphically across $a$ with a nonzero value there ([[def-isolated-singularity-types]]); order $1$ is the special case of a simple pole ([[def-simple-pole]]).

[L5] Every holomorphic function on a punctured disc has a Laurent expansion there, and a removable singularity gives a regular part that extends holomorphically across the centre ([[thm-laurent-expansion-annulus]], [[thm-removable-singularity-characterizations]], [[thm-laurent-regular-principal-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $a$ is a pole of order $m$. Then [L4] gives a holomorphic extension $g$ of $(z-a)^mf(z)$ with $g(a)\ne0$. The singularity of $g$ at $a$ is removable, so [L5] writes $g(z)=\sum_{n\ge0}b_n(z-a)^n$ near $a$ with $b_0=g(a)\ne0$; dividing by $(z-a)^m$ gives $f(z)=\sum_{n\ge0}b_n(z-a)^{n-m}$, whose principal part is finite and nonzero and ends at $(z-a)^{-m}$. [L4, L5]

1.2 Suppose the principal part is finite and nonzero, and let $m$ be the largest index with $c_{-m}\ne0$. Then $g(z):=(z-a)^mf(z)=c_{-m}+\sum_{k\ge1-m}c_k(z-a)^{k+m}$ has zero principal part, so [L1] makes $g$ holomorphic at $a$ with $g(a)=c_{-m}\ne0$. Therefore $a$ is a pole of order $m$ by [L4]. [L1, L4]

1.3 Suppose $|f(z)|\to\infty$ as $z\to a$. Then $f$ is nonzero on some punctured neighbourhood of $a$, so $h:=1/f$ is holomorphic there by [L3], and $h(z)\to0$. By [L1], $h$ extends holomorphically across $a$ with value $0$, proving condition 4. [L1, L3]

1.4 Suppose condition 4 holds. By [L2], the extension of $1/f$ factors as $(z-a)^mu(z)$ for some $m\ge1$ and some holomorphic $u$ with $u(a)\ne0$; shrinking the disc if needed, $u$ stays nonzero there, so $f(z)=(z-a)^{-m}u(z)^{-1}$ and $a$ is a pole of order $m$ by [L3] and [L4]. [L2, L3, L4]

2.1 The extension $g$ of step 1.1 is continuous and nonzero at $a$, so $|g(z)|\ge\delta>0$ near $a$; therefore $|f(z)|=|g(z)||z-a|^{-m}\ge\delta|z-a|^{-m}\to\infty$. [step 1.1, L3]

3.1 Step 1.1 proves $1\Rightarrow2$, step 2.1 proves $1\Rightarrow3$, step 1.2 proves $2\Rightarrow1$, step 1.3 proves $3\Rightarrow4$, and step 1.4 proves $4\Rightarrow1$; hence all four conditions are equivalent, and the pole order is the largest negative exponent present in the finite principal part. [step 1.1, step 2.1, step 1.2, step 1.3, step 1.4] ∎
