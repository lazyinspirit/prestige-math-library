---
id: lem-completed-primitive-dirichlet-l-has-order-at-most-one
kind: lemma
title: "Order bound for the completed primitive Dirichlet L-function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-completed-dirichlet-l-function
  - def-dirichlet-l-function
  - def-parity-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - lem-dirichlet-character-values
  - lem-fourier-transform-of-a-gaussian
  - thm-dirichlet-l-euler-product
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-primitive-dirichlet-l-functional-equation
  - thm-stirling-formula-gamma
  - thm-twisted-poisson-summation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Montgomery and Vaughan, Multiplicative Number Theory I, Chapter 10"
      url: "https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/14.0_pp_326_357_Analytic_properties_of_the_zeta_function_and_L-functions.pdf"
      locator: "Theorem 10.16, completed-function Hadamard factorization and order-one growth."
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed."
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
      locator: "Chapter 14, completed primitive Dirichlet L-functions and their order-one factorization."
verification: {}
---

## Statement

Let $q>1$ and let $\chi$ be a primitive Dirichlet character modulo $q$ with parity $a\in\{0,1\}$. The completed function
$$\Lambda(s,\chi)=\left(\frac q\pi\right)^{(s+a)/2}\Gamma\!\left(\frac{s+a}{2}\right)L(s,\chi)$$
is entire and has order exactly one; explicitly, for a constant $C_{q,\chi}>0$,
$$\max_{|s|\le R}|\Lambda(s,\chi)|\le \exp\!\bigl(C_{q,\chi}(R+1)\log(R+3)\bigr)\qquad(R\ge1).$$

## Statement references

[[def-primitive-dirichlet-character-and-conductor|Primitive Dirichlet character and conductor]]

[[def-parity-dirichlet-character|Parity of a Dirichlet character]]

[[def-dirichlet-l-function|Dirichlet L-function]]

[[def-completed-dirichlet-l-function|Completed Dirichlet L-function]]

[Montgomery and Vaughan, Chapter 10, Theorem 10.16](https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/14.0_pp_326_357_Analytic_properties_of_the_zeta_function_and_L-functions.pdf)

[Davenport, Chapter 14](https://djvu.online/file/Rh8B8jEVpxFgk)

## Facts & Assumptions

**Given:** A primitive nonprincipal character $\chi$ modulo $q>1$, parity $a$, and the completed normalization in the Statement.

[F1] The completion is entire for a primitive nonprincipal character, and its normalization is the one displayed in the Statement. ([[thm-primitive-dirichlet-l-analytic-continuation]], [[def-completed-dirichlet-l-function]])

[F2] The Gaussian transform and twisted Poisson summation give the primitive theta transformation with root number $\varepsilon(\chi)$ of modulus one. ([[lem-fourier-transform-of-a-gaussian]], [[thm-twisted-poisson-summation]], [[thm-primitive-dirichlet-l-functional-equation]])

[F3] Character values have modulus at most one. ([[lem-dirichlet-character-values]])

[F4] Real Stirling bounds $\Gamma(u)$ by $\exp(O(u\log(u+2)))$ for real $u\ge1$. ([[thm-stirling-formula-gamma]])

[F5] The Euler product is nonzero for $\operatorname{Re}s>1$, so $\Lambda(s,\chi)$ is not identically zero. ([[thm-dirichlet-l-euler-product]])

[F6] For $\operatorname{Re}s>1$, $L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$. ([[def-dirichlet-l-function]])

## Proof

**Proof technique:** direct.

**Given:** The primitive character and parity in the Statement.

1.1 Put $\theta_\chi(t)=\sum_{n\in\mathbb Z}n^a\chi(n)e^{-\pi n^2t/q}$ for $t>0$, with $n^0=1$. Since $q>1$, $\chi(0)=0$. Absolute convergence permits termwise Mellin integration on $\operatorname{Re}s>1$, giving $2\Lambda(s,\chi)=\int_0^\infty\theta_\chi(t)t^{(s+a)/2-1}\,dt$. The transformation in [F2], followed by $t=1/u$ on $(0,1)$, gives the continued identity $$2\Lambda(s,\chi)=\int_1^\infty\theta_\chi(t)t^{(s+a)/2-1}\,dt+\varepsilon(\chi)\int_1^\infty\theta_{\bar\chi}(t)t^{(1-s+a)/2-1}\,dt.$$ Both integrals converge locally uniformly for every complex $s$, because the theta sums have no zero term and decay exponentially as $t\to\infty$. The identity on $\operatorname{Re}s>1$ and holomorphic continuation [F1] establish it everywhere. [F1, F2, F3, given, algebra]

2.1 For $t\ge1$, [F3] and $n^2\ge |n|$ give $|\theta_\chi(t)|\le 2\sum_{n\ge1}n e^{-\pi nt/q}\le C_q e^{-c_qt}$ for positive constants $C_q,c_q$; the same bound holds for $\bar\chi$. If $|s|\le R$, each power of $t$ in the two integrals in step 1.1 has modulus at most $t^{(R+2)/2}$ for $t\ge1$. Thus each integral is at most $$C_q\int_1^\infty e^{-c_qt}t^{(R+2)/2}\,dt\le C_qc_q^{-(R+4)/2}\Gamma\!\left(\frac{R+4}{2}\right).$$ By [F4] the logarithm of this bound is $O_{q,\chi}((R+1)\log(R+3))$. [F3, F4, step 1.1, algebra]

3.1 Step 2.1 gives the maximum-modulus estimate in the Statement after increasing its constant to cover bounded $R$. By [F5], the entire function is nonzero; hence its order is defined. Since $\log\log M_\Lambda(R)\le \log R+O(\log\log(R+3))$, the definition of order gives order at most one. [F5, step 2.1, algebra]

4.1 For real $R\to\infty$, the absolutely convergent series in [F6] and the bound $|\chi(n)|\le1$ from [F3] give $L(R,\chi)=1+o(1)$, because $\sum_{n\ge2}n^{-R}\to0$. Stirling's formula in [F4] then yields $\log|\Lambda(R,\chi)|=\frac R2\log R+O_{q,\chi}(R)$. Therefore $\log\log M_\Lambda(R)\ge\log R+o(\log R)$, so the order is at least one. Together with step 3.1 the order is exactly one. [F3, F4, F5, F6, step 3.1, algebra] ∎ 