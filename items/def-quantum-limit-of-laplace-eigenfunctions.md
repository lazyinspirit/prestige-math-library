---
id: def-quantum-limit-of-laplace-eigenfunctions
kind: definition
title: "Quantum limit of Laplace eigenfunctions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-weight-zero-maass-form-on-gamma0n
  - def-hyperbolic-laplacian-on-the-upper-half-plane
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§1, Theorem 1 and the discussion of weak-* limits, printed pp. 1–2."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§2, Theorem 1.2 and Remarks 2–4, pp. 11–13."
---

## Definition

Let $M=SL_2(\mathbb Z)\backslash\mathbb H$ with hyperbolic area measure $d\mu=y^{-2}dx\,dy$. Let $(u_j)$ be smooth, square-integrable, weight-zero functions on $M$ that satisfy $\Delta_{\mathbb H}u_j=\lambda_j u_j$ and have vanishing constant Fourier coefficient at the cusp, with $\int_M|u_j|^2d\mu=1$ and $\lambda_j\to+\infty$; put $\nu_j=|u_j|^2d\mu$. A quantum limit of $(u_j)$ is a finite positive Borel measure $\nu$ on $M$ of total mass at most $1$ such that $\int_M\psi\,d\nu_{j_k}\to\int_M\psi\,d\nu$ for every compactly supported continuous function $\psi:M\to\mathbb C$ along some subsequence $(j_k)$.

## Definition references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §1, Theorem 1 and the discussion of weak-* limits, printed pp. 1–2.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §2, Theorem 1.2 and Remarks 2–4, pp. 11–13.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

[[def-weight-zero-maass-form-on-gamma0n]]

[[def-hyperbolic-laplacian-on-the-upper-half-plane]]
