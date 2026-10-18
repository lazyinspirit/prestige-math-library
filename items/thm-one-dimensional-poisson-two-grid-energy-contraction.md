---
id: thm-one-dimensional-poisson-two-grid-energy-contraction
kind: theorem
title: "The symmetric 1D Poisson two-grid cycle is uniformly contractive"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [lem-one-dimensional-poisson-smoothing-and-approximation,
       thm-two-grid-energy-contraction-under-joint-estimate,
       def-symmetric-two-grid-error-operator]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
  - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
    url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Statement

For the nested one-dimensional Poisson grids and prolongation of
[[lem-one-dimensional-poisson-smoothing-and-approximation]], take the
pre-smoothing error map to be $S^\nu$, with $S=I-A_h/\lambda_{\max}(A_h)$,
and take the post-smoother to be its $A_h$-adjoint. The resulting symmetric
two-grid error map satisfies

$$\|E\|_{A_h}\le\frac{2}{2\nu+1}\le\frac23<1\qquad(\nu\ge1),$$

uniformly for all even $N=2M\ge4$. This proves one concrete level-uniform
two-grid rate; it does not assert convergence of an arbitrary AMG hierarchy.

## Facts & Assumptions

**Given:** The one-dimensional Poisson matrices, piecewise-linear prolongation, exact Galerkin correction, and $\nu\ge1$ Richardson sweeps specified in [[lem-one-dimensional-poisson-smoothing-and-approximation]].

[F1] [[lem-one-dimensional-poisson-smoothing-and-approximation]]: $\|CS^\nu e\|_{A_h}^2\le2(2\nu+1)^{-1}\|e\|_{A_h}^2$ for every fine error $e$.

[F2] [[def-symmetric-two-grid-error-operator]]: the symmetric two-grid map is $E=(S^\nu)^{*_{A_h}}CS^\nu$.

[F3] [[thm-two-grid-energy-contraction-under-joint-estimate]]: a joint estimate with $0\le\rho<1$ implies $\|E\|_{A_h}\le\rho$.

## Proof
1.1 By [F1], the pre-smoother $S^\nu$ satisfies the joint estimate with $\rho=2/(2\nu+1)$. For $\nu\ge1$, $0<\rho\le2/3<1$. [given, F1, algebra]

2.1 Apply [F3] to the symmetric error map [F2] with this value of $\rho$. It follows that $\|E\|_{A_h}\le2/(2\nu+1)\le2/3$, independently of $N$. [F2, F3, step 1.1] ∎