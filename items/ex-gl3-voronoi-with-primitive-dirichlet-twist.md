---
dependency_level: 9
id: ex-gl3-voronoi-with-primitive-dirichlet-twist
kind: example
title: "A Primitive-Character-Twisted GL3 Voronoi Sum"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-full-level-gl3-automorphic-distribution
  - thm-gl3-voronoi-summation-full-level
  - thm-gl3-standard-and-twisted-l-function-functional-equation
  - def-standard-gl3-l-function-and-dirichlet-twist
  - def-primitive-dirichlet-character-and-conductor
  - def-parity-dirichlet-character
  - def-gauss-sum-dirichlet-character
  - lem-primitive-gauss-sum-twist
  - thm-primitive-gauss-sum-norm
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), §§5–6"
      url: "https://arxiv.org/pdf/math/0408100v3"
pipeline_run: number-theory-all-141-2026-10-25
---

## Facts & Assumptions

[F1] [[def-full-level-gl3-automorphic-distribution]]: $\tau$ has normalized coefficients $a_{r,s}$ and parameters satisfying $\sum_j\lambda_j=0$ and $\sum_j\delta_j=0$.

[F2] [[def-standard-gl3-l-function-and-dirichlet-twist]]: $L(s,\tau\otimes\chi)=\sum_{n\geq1}a_{1,n}\chi(n)n^{-s}$ initially in a right half-plane, $G_0(s)=2(2\pi)^{-s}\Gamma(s)\cos(\pi s/2)$, and $G_1(s)=2i(2\pi)^{-s}\Gamma(s)\sin(\pi s/2)$.

[F3] [[thm-gl3-voronoi-summation-full-level]]: an additive twist $e(-na/c)$ of $\sum_{n\ne0}a_{q,n}f(n)$ is transformed into the divisor sum with Kloosterman factors and kernel $F$ appearing below.

[F4] [[lem-primitive-gauss-sum-twist]]: for primitive $\chi$ modulo $Q$, $\sum_{a\bmod Q}\overline{\chi(a)}e(an/Q)=\chi(n)g_{\overline\chi}$ for every integer $n$.

[F5] [[thm-gl3-standard-and-twisted-l-function-functional-equation]]: under the stated full-level cuspidal, primitive-character, parity, and parameter hypotheses, the twisted standard L-functions satisfy the displayed Mellin functional equation.

[F6] [[thm-primitive-gauss-sum-norm]]: for a primitive character modulo $Q$, its Gauss sum has absolute value $\sqrt Q$, so $g_{\overline\chi}\ne0$.

## Example

Assume Countable Choice. Let $\tau$ be a cuspidal full-level GL3 automorphic distribution with parameters $\lambda=(\lambda_1,\lambda_2,\lambda_3)$ and $\delta=(\delta_1,\delta_2,\delta_3)$ satisfying $\sum_j\lambda_j=0$ and $\sum_j\delta_j=0$ in $\mathbb Z/2\mathbb Z$. Let $\chi$ be a primitive character of conductor $Q>1$ and parity $\chi(-1)=(-1)^\epsilon$. Let $q\geq1$ and let $f$ be either a Schwartz function vanishing to infinite order at $0$ or a smooth function on $\mathbb R\setminus\{0\}$ for which $(\operatorname{sgn}x)^{\delta_3}|x|^{-\lambda_3}f(x)$ extends to a Schwartz function. Let $F$ be the iterated transform
$$F(t)=\int_{\mathbb R}\int_{\mathbb R}\int_{\mathbb R}f\!\left(\frac{x_1x_2x_3}{t}\right)\prod_{j=1}^3\left((\operatorname{sgn}x_j)^{\delta_j}|x_j|^{-\lambda_j}e(-x_j)\right)\,dx_3\,dx_2\,dx_1,$$
continued holomorphically in $\lambda$ from the region $\operatorname{Re}\lambda_1>\operatorname{Re}\lambda_2>\operatorname{Re}\lambda_3$. Define $g_\chi=\sum_{a\bmod Q}\chi(a)e(a/Q)$ and $g_{\overline\chi}=\sum_{a\bmod Q}\overline{\chi(a)}e(a/Q)$. For $m\ne0$, write $S(u,v;m)=\sum_{x\in(\mathbb Z/|m|\mathbb Z)^\times}e((ux+v\bar x)/m)$, where $\bar x$ is inverse to $x$ modulo $|m|$. In the outer sum below, $\bar a$ is any integer inverse of $a$ modulo $Q$; the Kloosterman argument $q\bar a$ is independent of the chosen lift modulo $Qq/d$, because changing the lift by $Q$ changes this argument by $qQ=d(Qq/d)$. Then the primitive character twist of the GL3 sum is
$$\sum_{n\ne0}a_{q,n}\chi(n)f(n)=\frac{1}{g_{\overline\chi}}\sum_{a\in(\mathbb Z/Q\mathbb Z)^\times}\overline{\chi(a)}\sum_{\substack{d\geq1\\d\mid Qq}}\sum_{m\ne0}\frac{Q}{|m|d}\,a_{m,d}\,S(-q\bar a,m;Qq/d)\,F\!\left(\frac{md^2}{Q^3q}\right).$$
Writing $\widetilde\tau=(-1)^{\delta_2}\vartheta^*\tau$ for the phase-fixed dual with $\vartheta(g)=w_{\mathrm{long}}(g^{\mathsf T})^{-1}w_{\mathrm{long}}^{-1}$, its Mellin transform also has the relation
$$L(1-s,\widetilde\tau\otimes\overline\chi)=Q^{3s}g_\chi^{-3}\left(\prod_{j=1}^3G_{\epsilon+\delta_j}(s+\lambda_j)\right)L(s,\tau\otimes\chi).$$

## Example references

[Miller and Schmid, *Automorphic Distributions, L-functions, and Voronoi Summation for GL(3)*, §§5–6](https://arxiv.org/pdf/math/0408100v3)

[[def-standard-gl3-l-function-and-dirichlet-twist|The phase-fixed dual and twisted standard L-functions]]

## Verification

**Given:** A cuspidal full-level distribution $\tau$, a primitive character $\chi$ modulo $Q>1$, its parity $\epsilon$, and the test function $f$ from the Example.

1.1 For each integer $n$, [F4] gives $\chi(n)=g_{\overline\chi}^{-1}\sum_{a\bmod Q}\overline{\chi(a)}e(an/Q)$, and [F6] ensures that the denominator is nonzero. Substituting this finite identity into the left side of the Voronoi sum gives $\sum_{n\ne0}a_{q,n}\chi(n)f(n)=\frac{1}{g_{\overline\chi}}\sum_{a\in(\mathbb Z/Q\mathbb Z)^\times}\overline{\chi(a)}\sum_{n\ne0}a_{q,n}e(an/Q)f(n)$. The sum over $a$ is finite, and $\overline\chi(a)=0$ on nonunits. [given, F1, F4, F6, algebra]

2.1 For each unit $a\bmod Q$, apply [F3] with modulus $c=Q$ and additive parameter $a_0=-a$. Then $e(-na_0/Q)=e(an/Q)$ and an inverse of $a_0$ modulo $Q$ is $-\bar a$. This gives the Kloosterman factor $S(-q\bar a,m;Qq/d)$ and the transform argument $md^2/(Q^3q)$. [step 1.1, F3, choose, algebra]

3.1 Changing the chosen inverse $\bar a$ by $Q$ changes $q\bar a$ by $qQ=d(Qq/d)$, a multiple of the Kloosterman modulus, so the displayed factor is independent of that lift. Substituting the [F3] formula into step 1.1 and collecting its finite outer sum yields the asserted twisted Voronoi identity; finite linear combinations preserve the series interpretation of [F3]. [step 1.1, step 2.1, F3, algebra]

4.1 The assumptions of [F5] are exactly the stated full-level cuspidality, primitivity, parity, and parameter-sum conditions. Applying [F5] gives the displayed relation between $L(s,\tau\otimes\chi)$ and $L(1-s,\widetilde\tau\otimes\overline\chi)$. [given, F5] ∎
