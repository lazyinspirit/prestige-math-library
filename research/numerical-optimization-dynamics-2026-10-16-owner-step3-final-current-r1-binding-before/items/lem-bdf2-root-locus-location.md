---
id: lem-bdf2-root-locus-location
kind: lemma
title: "BDF2 roots on or outside the unit disk map to the closed right half-plane"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-variable-step-bdf2-with-selected-implicit-branch
  - def-absolute-stability-regions-for-one-step-and-multistep-methods
  - def-linear-multistep-method-consistency-order-and-root-condition
  - lem-complex-conjugation-and-modulus-laws
  - lem-complex-modulus-of-real-embedding-equals-real-absolute-value
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.9"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Masayuki Yano, James Douglass Penn, George Konidaris, and Anthony T. Patera, Math, Numerics, and Programming (for Mechanical Engineers), Unit IV, Chapter 21"
      url: "https://ocw.mit.edu/courses/2-086-numerical-computation-for-mechanical-engineers-spring-2013/64e7bed65373841c988a0fd98e1ae16e_MIT2_086S13_Unit4_Textbook.pdf"

---
## Statement

On a uniform grid, the variable-step BDF2 algorithm of [[alg-variable-step-bdf2-with-selected-implicit-branch]] has the scalar test-equation polynomial

$$P_z(\zeta)=(3-2z)\zeta^2-4\zeta+1,\qquad z=h\lambda.$$

If $\zeta$ is a root and $|\zeta|\ge1$, then $\operatorname{Re}z\ge0$. Equality is possible only for $z=0$ and $\zeta=1$.

## Facts & Assumptions

**Given:** A uniform step $h>0$, the scalar test equation $y'=\lambda y$, and a root $\zeta$ of the BDF2 test polynomial.

[F1] [[alg-variable-step-bdf2-with-selected-implicit-branch]]: when adjacent step ratios equal one, the update is $(3Y_{n+1}-4Y_n+Y_{n-1})/(2h)=f(t_{n+1},Y_{n+1})$.

[F2] [[def-linear-multistep-method-consistency-order-and-root-condition]]: a linear multistep method has characteristic polynomials $\rho$ and $\sigma$, and substitution of $f(t,y)=\lambda y$ gives the characteristic polynomial $\rho(\zeta)-z\sigma(\zeta)$.

[F3] [[def-absolute-stability-regions-for-one-step-and-multistep-methods]]: the test variable is $z=h\lambda$, and the multistep test polynomial is $\pi_z(\zeta)=\rho(\zeta)-z\sigma(\zeta)$.

[F4] [[lem-complex-conjugation-and-modulus-laws]]: complex modulus is nonnegative and definite, $|uv|=|u||v$, and $u\overline{u}=|u|^2$.

[F5] [[lem-complex-modulus-of-real-embedding-equals-real-absolute-value]]: the complex modulus of the embedded real number $1$ is $1$.

## Proof
1.1 Setting $r_n=1$ in [F1] gives $3Y_{n+1}-4Y_n+Y_{n-1}=2h f(t_{n+1},Y_{n+1})$. Substituting $f(t,y)=\lambda y$ and a trial mode $Y_n=\zeta^n$, the polynomial convention in [F2] gives $(3-2z)\zeta^2-4\zeta+1=0$. [F1, F2, F3, algebra]

2.1 The constant term is one, so $\zeta\ne0$. Put $w=1/\zeta$, $a=\operatorname{Re}w$, and $r=|w|$. By [F4] and [F5], $1=|1|=|\zeta w|=|\zeta||w|$, so $r=1/|\zeta|$. Solving the equation in step 1.1 for $z$ gives $z=3/2-2w+w^2/2$. Writing $w=a+bi$, [F4] gives $r^2=a^2+b^2$ and hence $\operatorname{Re}(w^2)=a^2-b^2=2a^2-r^2$; therefore $\operatorname{Re}z=(1-a)^2+(1-r^2)/2$. [F4, F5, step 1.1, algebra]

3.1 If $|\zeta|>1$, then step 2.1 gives $r<1$, hence $\operatorname{Re}z>0$. If $|\zeta|=1$, then $r=1$, so $\operatorname{Re}z=(1-a)^2\ge0$; equality forces $a=1$. Writing $w=1+bi$, [F4] gives $1=r^2=1+b^2$, so $b=0$ and $w=1$, hence $\zeta=1$ and $z=0$. This proves both assertions. [F4, step 2.1, algebra] ∎
