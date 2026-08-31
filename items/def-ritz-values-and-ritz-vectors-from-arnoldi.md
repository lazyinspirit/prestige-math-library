---
id: def-ritz-values-and-ritz-vectors-from-arnoldi
kind: definition
title: "Ritz values and Ritz vectors extracted from the Arnoldi Hessenberg reduction"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization,
       def-eigenvalue-eigenvector-eigenspace-and-spectrum]
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Definition

Let Arnoldi run through step $m$ and write

$$H_m:=Q_m^\ast A Q_m.$$

An eigenvalue $\theta$ of $H_m$ is a **Ritz value** of $A$ from the Arnoldi
subspace $K_m(A,b)$.

If $y\ne0$ satisfies

$$H_my=\theta y,$$

then the lifted vector

$$u:=Q_my$$

is the corresponding **Ritz vector**.
