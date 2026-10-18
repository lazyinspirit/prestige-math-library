---
id: thm-periodic-pic-deposition-potential-gather-adjointness
kind: theorem
title: Periodic PIC deposition and potential gather are adjoint
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-periodic-pic-grid-and-inner-product, def-periodic-pic-shape-assignment-and-gather]
proof_strategy: direct
axiom_use: No choice principle is used; the identity is a finite sum.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Sections 2-2-3 and 5-2
      url: https://djvu.online/file/cjOfwRgltjv1g
---

## Statement

Let $\rho^+_j=h^{-d}\sum_pq_pw_j(X_p)$ be the deposited density before background subtraction for an admissible algebraic shape $w_j$ of [[def-periodic-pic-shape-assignment-and-gather]], and let $G_X$ be its scalar potential gather. For every grid scalar $\phi$,
$$ \langle\rho^+,\phi\rangle_h=\sum_{p=1}^P q_p(G_X\phi)_p . $$ For the neutralized density $\rho=\rho^+-Q/L^d$ the corresponding identity is $$ \langle\rho,\phi\rangle_h=\sum_pq_p(G_X\phi)_p-Q\bar\phi . $$
Thus the background term vanishes in the zero-mean potential gauge.

## Facts & Assumptions

**Given:** The grid inner product, particle positions and charges, and the deposition and gather formulas.

[F1] [[def-periodic-pic-grid-and-inner-product]]: $\langle u,v\rangle_h=h^d\sum_ju_jv_j$ and $\bar\phi=L^{-d}\langle\phi,1\rangle_h$.

[F2] [[def-periodic-pic-shape-assignment-and-gather]]: $\rho^+_j=h^{-d}\sum_pq_pw_j(X_p)$ and $(G_X\phi)_p=\sum_jw_j(X_p)\phi_j$.

## Proof

1.1 Substitute [F2] into the left pairing and cancel $h^d h^{-d}$: $\langle\rho^+,\phi\rangle_h =h^d\sum_jh^{-d}\sum_pq_pw_j(X_p)\phi_j =\sum_pq_p\sum_jw_j(X_p)\phi_j .$ The finite inner sum is $(G_X\phi)_p$ by [F2], proving the first identity. [given, F1, F2, algebra]

2.1 The background contributes $\left\langle Q/L^d,\phi\right\rangle_h =Q L^{-d}h^d\sum_j\phi_j=Q\bar\phi$ by [F1]. Subtract this term from step 1.1 to obtain the second identity. [F1, step 1.1, algebra] ∎
