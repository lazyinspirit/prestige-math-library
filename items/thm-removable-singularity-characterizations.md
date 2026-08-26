---
id: thm-removable-singularity-characterizations
kind: theorem
title: "Characterizations of removable singularities"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-singularity-types, def-principal-part-laurent-series, thm-laurent-expansion-annulus, thm-laurent-coefficient-formula-and-uniqueness, thm-laurent-regular-principal-decomposition, cor-complex-differentiability-implies-continuity]
aliases: []
landmark: true
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

Let $f$ be holomorphic on a punctured disc $0<|z-a|<R$. The following are
equivalent:

1. $a$ is a removable singularity of $f$ ([[def-isolated-singularity-types]]);
2. the principal part of the Laurent expansion of $f$ at $a$ is $0$
   ([[def-principal-part-laurent-series]]);
3. $f$ is bounded on some punctured neighbourhood of $a$;
4. $f$ has a finite limit as $z\to a$;
5. $(z-a)f(z)\to0$ as $z\to a$.

When these conditions hold, the holomorphic extension satisfies
$F(a)=\lim_{z\to a}f(z)$.

## Facts & Assumptions

**Given:** A function $f$ holomorphic on $0<|z-a|<R$ and its Laurent expansion $f(z)=\sum_{n\in\mathbb Z}c_n(z-a)^n$ there.

[L1] Every holomorphic function on a punctured disc has a Laurent expansion there, its coefficients are unique, and the regular part extends holomorphically across the centre ([[thm-laurent-expansion-annulus]], [[thm-laurent-coefficient-formula-and-uniqueness]], [[thm-laurent-regular-principal-decomposition]]).

[L2] A removable singularity is exactly one admitting a holomorphic extension across the centre ([[def-isolated-singularity-types]]).

[L3] A holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 If $a$ is removable, let $F$ be a holomorphic extension to $|z-a|<\varepsilon$; by [L3], $F$ is continuous at $a$, so $F$ is bounded on some smaller disc, and hence $f$ is bounded on the corresponding punctured disc. [L2, L3]

1.2 If $f$ has a finite limit at $a$, then $f$ is bounded on some punctured neighbourhood of $a$. [given, algebra]

1.3 Suppose $|f(z)|\le M$ whenever $0<|z-a|<\varepsilon$. For $m\ge1$ and $0<\rho<\varepsilon$, the coefficient formula gives $$|c_{-m}|\le\frac{1}{2\pi}\int_{|\zeta-a|=\rho}|f(\zeta)|\,|\zeta-a|^{m-1}|d\zeta|\le M\rho^m.$$ [L1, assume-hyp, algebra]

1.4 If the principal part is $0$, then $f(z)=\sum_{n\ge0}c_n(z-a)^n$ on the punctured disc, and [L1] makes this regular part holomorphic on $|z-a|<R$; defining $F(a)=c_0$ therefore extends $f$ holomorphically across $a$, so the singularity is removable. [L1, L2]

2.1 Since step 1.3 holds for every sufficiently small $\rho>0$, letting $\rho\to0$ gives $c_{-m}=0$ for every $m\ge1$; so the principal part is $0$. [step 1.3]

2.2 The extension from step 1.4 is continuous at $a$ by [L3], so $f(z)\to F(a)=c_0$ and, multiplying by $z-a$, one gets $(z-a)f(z)\to0$. [step 1.4, L3]

3.1 Suppose $(z-a)f(z)\to0$, and put $g(z):=(z-a)f(z)$ on the punctured disc. Then $g$ is holomorphic there and bounded near $a$, so the argument of steps 1.3 and 2.1 applied to the Laurent expansion $g(z)=\sum_{n\in\mathbb Z}c_n(z-a)^{n+1}$ gives $c_{-m}=0$ for every $m\ge2$. [step 1.3, step 2.1, L1]

4.1 With the coefficients from step 3.1 gone, $g(z)=c_{-1}+\sum_{n\ge0}c_n(z-a)^{n+1}$, and [L1] makes the tail a holomorphic function vanishing at $a$; the hypothesis $g(z)\to0$ therefore forces $c_{-1}=0$. So the whole principal part of $f$ is $0$. [step 2.2, step 3.1, L1]

5.1 Step 1.1 proves $1\Rightarrow3$, step 1.2 proves $4\Rightarrow3$, steps 1.3 and 2.1 prove $3\Rightarrow2$, step 1.4 proves $2\Rightarrow1$, step 2.2 proves $2\Rightarrow4$ and $2\Rightarrow5$, and steps 3.1 and 4.1 prove $5\Rightarrow2$; therefore all five conditions are equivalent, and the extension value is the finite limit from step 2.2. [step 1.1, step 1.2, step 2.1, step 1.4, step 2.2, step 4.1] ∎
