---
id: cor-matern-mesh-ratio-conditioning-bound
kind: corollary
title: "Bounded mesh ratio gives an h^{-2s} exact condition-number bound"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - lem-separated-sites-matern-gram-bound
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-linear-change-of-variables-for-lebesgue-measure
  - def-condition-number-of-a-nonsingular-linear-system
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with
        scattered zeros, Math. Comp. 74 (2005), §3.1"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_func\
        tions_with_scattered_zeros_with_applications_to_radial_basis_function_s\
        urface_fitting"
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 34–36"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Fix Matérn parameters $d\ge1$, $\nu>0$, $a>0$, $s=\nu+d/2$, an admitted bounded domain $\Omega$, and a mesh-ratio bound $\rho_0>0$. There is $C=C(\Omega,d,\nu,a,\rho_0)$ such that every finite nonempty distinct site set $X\subset\Omega$ with $N\ge2$, $0<q_X\le1$, $0<h_X\le1$, and $\rho_X=h_X/q_X\le\rho_0$ satisfies
$$\kappa_2(K_X)\le C h_X^{-2s}.$$
The one-site case has condition number $1$. This is an exact-arithmetic condition-number estimate for the Gram matrix; it does not bound the error of a floating-point solver.

## Facts & Assumptions

**Given:** Countable Choice, fixed parameters, a bounded domain, a finite distinct site set with $h_X\le1$, and the stated mesh-ratio bound.

[F1] For $N\ge2$ and separation radius $0<q_X\le1$, $\kappa_2(K_X)\le C_0Nq_X^{-2\nu}$; for $N=1$ the condition number is $1$. ([[lem-separated-sites-matern-gram-bound]])

[F2] The domain lies in a fixed ball and the disjoint balls of radius $q_X$ about the sites have volume proportional to $q_X^d$; finite additivity gives the corresponding packing bound. ([[def-rbf-kernels-sites-and-augmented-interpolation]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-linear-change-of-variables-for-lebesgue-measure]])

[F3] The mesh ratio and separation radius satisfy $\rho_X=h_X/q_X$, and the condition number is finite for each invertible Gram matrix. ([[def-rbf-kernels-sites-and-augmented-interpolation]], [[def-condition-number-of-a-nonsingular-linear-system]])

[A1] Countable Choice is inherited from the Matérn separation estimate [F1] and the Lebesgue measure and ball-packing suppliers used in [F2]. ([[def-countable-choice]])



**Proof technique:** packing followed by the separation estimate.

## Proof

**Proof technique:** packing followed by the separation estimate.

**Given:** The hypotheses above.

1.1 Suppose $N\ge2$ and write $q=q_X\le1$. Choose $z_0$ and $R>0$ with $\Omega\subset B(z_0,R)$. The site balls $B(x_i,q)$ are pairwise disjoint and lie in $B(z_0,R+1)$. Their measures are $q^d\lambda(B(0,1))$ by [F2], so finite additivity and the positive finite unit-ball measure give $$Nq^d\lambda(B(0,1))\le(R+1)^d\lambda(B(0,1)),$$ and therefore $N\le C_\Omega q^{-d}$. [F2, A1, given, algebra]

2.1 Since $q\le1$, combine [F1] with step 1.1 to get $\kappa_2(K_X)\le C_1q^{-(d+2\nu)}=C_1q^{-2s}$. [F1, step 1.1, algebra]

3.1 The mesh-ratio bound implies $q=h_X/\rho_X\ge h_X/\rho_0$, so $q^{-2s}\le\rho_0^{2s}h_X^{-2s}$. Step 2.1 gives the desired estimate. [F1, F3, step 2.1, algebra] ∎