---
id: thm-primitive-dirichlet-l-analytic-continuation
kind: theorem
title: "Analytic continuation of primitive Dirichlet L-functions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-completed-dirichlet-l-function, lem-fourier-transform-of-a-gaussian, thm-twisted-poisson-summation, thm-riemann-zeta-meromorphic-continuation]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, Theorems 16.7-16.8"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

If primitive $\chi$ is nonprincipal, then $L(s,\chi)$ and $\Lambda(s,\chi)$
extend to entire functions. For the principal primitive character modulo $1$,
$L=\zeta$ is meromorphic with its unique simple pole at $s=1$, while
$\Lambda(s,\chi)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ is meromorphic with simple
poles at $s=0$ and $s=1$.

## Facts & Assumptions

**Given:** A primitive character $\chi$ modulo $q$ of parity $a$.

[F1] The Gaussian has the stated Fourier transform ([[lem-fourier-transform-of-a-gaussian]]).

[F2] Twisted Poisson summation has the displayed $q$-normalization ([[thm-twisted-poisson-summation]]).

[F3] Zeta is meromorphic with its unique pole at $1$ ([[thm-riemann-zeta-meromorphic-continuation]]).

## Proof

**Proof technique:** direct.

1.1 Mellin-transform $\sum_{n\ge1}\chi(n)n^a e^{-\pi n^2t/q}$; for $\operatorname{Re}s>1$ this equals a nonzero constant times $\Lambda(s,\chi)$. [given, algebra]

2.1 Apply [F1] in [F2] to transform the theta kernel under $t\mapsto1/t$. Splitting the Mellin integral at $1$ gives two rapidly decaying integrals, hence an entire continuation when $\chi$ is nonprincipal. [F1, F2, step 1.1]

3.1 The only primitive principal case is $q=1$. Splitting the Mellin integral for the Jacobi theta kernel and separating its constant term continues $\pi^{-s/2}\Gamma(s/2)\zeta(s)$ meromorphically, with the two boundary terms giving simple poles at $s=0$ and $s=1$. Equivalently, the standard entire completion is $$\tfrac12s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s).$$ Fact [F3] separately says that $L=\zeta$ itself has only its simple pole at $s=1$. [F1, F3, step 2.1, algebra] ∎
