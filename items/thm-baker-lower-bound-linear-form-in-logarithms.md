---
id: thm-baker-lower-bound-linear-form-in-logarithms
kind: theorem
title: "Baker’s general inhomogeneous lower bound for linear forms in logarithms (proof source gated)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-naive-coefficient-height-of-algebraic-number
  - def-number-field
  - def-complex-exponential
  - def-complex-logarithms-principal-logarithm-and-complex-powers
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Theorem 5.2"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
    - title: "Alan Baker, Linear forms in the logarithms of algebraic numbers, Mathematika 13 (1966), pp. 204–216; primary proof access attempted, full text unavailable"
      url: "https://doi.org/10.1112/S0025579300003971"
    - title: "MathNet record and English full-text access route for Baker’s 1966 article"
      url: "https://www.mathnet.ru/eng/mat434"
verification: {}
---

## Statement

Let $m,d\ge1$, let $\overline{\mathbb Q}:=\{z\in\mathbb C:P(z)=0\text{ for some nonzero }P\in\mathbb Q[T]\}$, let $\alpha_1,\ldots,\alpha_m\in\overline{\mathbb Q}\setminus\{0,1\}$, and let $\gamma,\beta_1,\ldots,\beta_m\in\overline{\mathbb Q}$. Let $A,B\ge1$ be real numbers. Suppose that the degrees $[\mathbb Q(\alpha_i):\mathbb Q]$, $[\mathbb Q(\gamma):\mathbb Q]$, and $[\mathbb Q(\beta_i):\mathbb Q]$ are at most $d$, that their naive coefficient heights satisfy $H_{\mathrm{naive}}(\alpha_i)\le A$ and $H_{\mathrm{naive}}(\gamma),H_{\mathrm{naive}}(\beta_i)\le B$, and that $\ell_i\in\mathbb C$ are arbitrary chosen logarithms with $\exp(\ell_i)=\alpha_i$. If
$$
\Lambda:=\gamma+\beta_1\ell_1+\cdots+\beta_m\ell_m\ne0,
$$
then
$$
|\Lambda|\ge(eB)^{-C},
$$
where $C>0$ is effectively computable from $m,d,A$ and the chosen logarithms $\ell_1,\ldots,\ell_m$.

## Statement references

[[def-naive-coefficient-height-of-algebraic-number]]

[[def-number-field]]

[[def-complex-exponential]]

[[def-complex-logarithms-principal-logarithm-and-complex-powers]]

[Evertse, *Diophantine Equations*, Chapter 5, Theorem 5.2](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

## Facts & Assumptions

**Given:** Algebraic numbers $\alpha_i\ne0,1$, $\gamma$, and $\beta_i$ of degree at most $d$, their stated naive-height bounds, chosen complex logarithms $\ell_i$ of $\alpha_i$, and a nonzero value $\Lambda$ as in the Statement.

[F1] The naive coefficient height is the maximum absolute coefficient of the primitive integer polynomial proportional to the monic minimal polynomial. ([[def-naive-coefficient-height-of-algebraic-number]])

[F2] A chosen complex logarithm $\ell_i$ satisfies $\exp(\ell_i)=\alpha_i$. ([[def-complex-exponential]], [[def-complex-logarithms-principal-logarithm-and-complex-powers]])

## Remarks

Evertse’s Theorem 5.2 recalls this established result but explicitly gives no proof. The available R3 source record says the primary proof source remains access-gated. This draft retains the exact established claim as a separate local-proof obligation and is escalated; it is not used by the homogeneous effective subchain.

## Remarks references

[Evertse, *Diophantine Equations*, Chapter 5, §5.1](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)
