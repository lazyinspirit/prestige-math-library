---
id: lem-dirichlet-three-four-one-logarithmic-derivative-inequality
kind: lemma
title: "The three-four-one logarithmic-derivative inequality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-dirichlet-character-modulo-q
  - def-dirichlet-l-function
  - thm-dirichlet-l-euler-product
  - thm-von-mangoldt-logarithmic-derivative-zeta
  - def-complex-exponential
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-weierstrass-convergence-holomorphic-functions
  - def-prime
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 69–72, the 3–4–1 logarithmic-derivative inequalities in the proofs of Theorems 24.18–24.19."
---

## Statement

Let $\chi$ be a Dirichlet character modulo $q$, let $t\in\mathbb R$, and let $\sigma>1$. Then
$$3\left(-\frac{\zeta'}{\zeta}(\sigma)\right)+4\operatorname{Re}\left(-\frac{L'}{L}(\sigma+it,\chi)\right)+\operatorname{Re}\left(-\frac{L'}{L}(\sigma+2it,\chi^2)\right)\ge0.$$
The character $\chi^2$ is taken modulo $q$; if $\chi(p)=0$ at a prime dividing $q$, its terms in the two $L$-series vanish.

## Statement references

[Montgomery–Vaughan, Chapter 24, proofs of Theorems 24.18–24.19](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** A Dirichlet character $\chi$ modulo $q$, a real $t$, and $\sigma>1$.

[F1] For $\operatorname{Re}s>1$, the Dirichlet $L$-function has its absolutely convergent Euler product and logarithmic derivative series ([[def-dirichlet-character-modulo-q]], [[def-dirichlet-l-function]], [[thm-dirichlet-l-euler-product]]).

[F2] For $\sigma>1$, $-\zeta'(\sigma)/\zeta(\sigma)=\sum_{p,m\ge1}(\log p)p^{-m\sigma}$ ([[thm-von-mangoldt-logarithmic-derivative-zeta]]).

[F3] If $p\nmid q$, then $|\chi(p)|=1$, while $\chi(p)=0$ if $p\mid q$ ([[def-dirichlet-character-modulo-q]]). The complex exponential obeys its addition and Euler modulus laws, the modulus is determined by real and imaginary parts, and $\log$ obeys the quotient law ([[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

**Proof technique:** expand the three logarithmic derivatives into absolutely convergent prime-power series.

1.1 On each half-plane $\operatorname{Re}s\ge1+\varepsilon$, the logarithmic series $\sum_{p,m\ge1}\chi(p)^m/(mp^{ms})$ and its derivative converge normally (compare the derivative series with $\sum_{n\ge2}(\log n)n^{-1-\varepsilon}$). Differentiating the Euler product [F1] termwise therefore gives $-L\prime/L(s,\chi)=\sum_{p,m\ge1}\chi(p)^m(\log p)p^{-ms}$. The same expansion for $\chi^2$, together with [F2], is absolutely convergent when $\sigma>1$. For $p\nmid q$, put $w=\chi(p)^m\exp(-imt\log p)$, with $p^{-imt}:=\exp(-imt\log p)$; [F3] gives $|w|=1$. The coefficient of $(\log p)p^{-m\sigma}$ in the combined expression is $3+4\operatorname{Re}w+\operatorname{Re}(w^2)$. [given, F1, F2, F3]

2.1 Write $w=x+iy$. By the real-imaginary modulus identity in [F3], $|w|=1$ gives $x^2+y^2=1$, and therefore $\operatorname{Re}(w^2)=x^2-y^2=2x^2-1$. Hence $$3+4\operatorname{Re}w+\operatorname{Re}(w^2)=2(1+x)^2\ge0.$$ For $p\mid q$, the two $L$-series terms vanish and the zeta contribution is $3(\log p)p^{-m\sigma}>0$. Every prime-power contribution is therefore nonnegative; summing the absolutely convergent series proves the inequality. [step 1.1, F1, F2, F3, algebra] ∎

