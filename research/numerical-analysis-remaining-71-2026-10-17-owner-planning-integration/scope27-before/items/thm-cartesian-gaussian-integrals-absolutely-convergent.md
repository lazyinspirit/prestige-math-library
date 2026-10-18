---
id: thm-cartesian-gaussian-integrals-absolutely-convergent
kind: theorem
title: Absolute convergence and local parameter domination for Gaussian basis integrals
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-cartesian-gaussian-primitives-and-contractions, lem-cartesian-gaussian-moments-and-parameter-derivatives, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence]
proof_strategy: direct
axiom_use: None. Tonelli, Fubini, and dominated convergence apply to explicit Lebesgue-integrable majorants; no choice principle is used.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; one- and two-electron Gaussian integral definitions and Coulomb reduction, pp. 17–27. Absolute-convergence majorants are supplied here."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §§II–III, pp. 5–15. Local singular-integrability arguments are supplied here."
---

## Statement

Every overlap, kinetic, point-nucleus attraction, and two-electron Coulomb integral defined in [[def-cartesian-gaussian-primitives-and-contractions]] exists absolutely for finite Cartesian Gaussian contractions. The same holds after any fixed finite number of spatial derivatives or one derivative with respect to a primitive center or positive exponent. With nuclear positions fixed, if primitive centers remain in compact sets and all exponents remain in a compact subset of $(0,\infty)$, these differentiated integrands have a common integrable majorant. Thus differentiation with respect to primitive centers or exponents may be passed under any of these integrals.

## Facts & Assumptions

**Given:** Finite contractions as in [[def-cartesian-gaussian-primitives-and-contractions]], with positive exponents, fixed finite polynomial degrees, and (for the local domination assertion) centers and exponents in the compact parameter sets of the Statement.

[F1] [[def-cartesian-gaussian-primitives-and-contractions]]: each primitive is a polynomial times $e^{-a\|x-A\|^2}$, and the Coulomb kernels are $\|x-C\|^{-1}$ and $\|x-y\|^{-1}$.

[F2] [[lem-cartesian-gaussian-moments-and-parameter-derivatives]]: every polynomial times $e^{-p\|x\|^2}$ is absolutely integrable for $p>0$.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative integrands may be estimated by iterated integrals.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: an absolutely integrable complex integrand has a well-defined product integral and equal iterated integrals.

[F5] [[thm-dominated-convergence]]: a common integrable majorant permits passage of a pointwise parameter-derivative limit through an integral.

## Proof

1.1 Repeated product-rule differentiation shows that every fixed spatial or primitive-parameter derivative is a finite sum of polynomial-Gaussian terms. If centers $A$ range over compact sets and exponents satisfy $a\ge a_0>0$, then $\|x-A\|^2\ge\tfrac12\|x\|^2-\|A\|^2$. Each such term is therefore bounded by $K(1+\|x\|)^N e^{-a_0\|x\|^2/2}$ for finite $K,N$ uniform on those parameter sets. This majorant is integrable by [F2], so each pair product is in $L^1\cap L^\infty$; products involving $\Delta\psi$ have the same form. [given, F1, F2, algebra]

2.1 The overlap and kinetic integrands are polynomial-Gaussian products and are absolutely integrable by step 1.1. For a nuclear center $C$, the pair product is bounded on $\|x-C\|<1$. To check local kernel integrability without a radial-coordinate formula, partition $0<\|z\|<1$ into $A_k=\{2^{-(k+1)}\le\|z\|<2^{-k}\}$: on $A_k$, $\|z\|^{-1}\le2^{k+1}$ and $A_k$ lies in a cube of volume $8\cdot2^{-3k}$, so $\int_{A_k}\|z\|^{-1}dz\le16\cdot4^{-k}$. The sum is $64/3$. Outside this unit ball the kernel is at most one, so the remaining integral is bounded by the pair product's $L^1$ norm. This proves absolute convergence of the point-nucleus attraction. [given, F1, F3, step 1.1, algebra]

3.1 Let $f,g$ be two pair products from finite contractions; by step 1.1 they belong to $L^1\cap L^\infty$. On $\|x-y\|<1$, Tonelli [F3] and $z=y-x$ give the bound $\|f\|_1\|g\|_\infty\int_{\|z\|<1}\|z\|^{-1}dz\le(64/3)\|f\|_1\|g\|_\infty$ by the shell calculation in step 2.1. On the complement, $\|x-y\|^{-1}\le1$, giving bound $\|f\|_1\|g\|_1$. Hence the two-electron integrand is absolutely integrable, and [F4] supplies its product and iterated integral meanings. [given, F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 Primitive-center and exponent derivatives only increase the polynomial degrees of the Gaussian factors; the singular centers $C$ and diagonal $x=y$ are fixed. The near-nucleus and near-diagonal estimates in steps 2.1 and 3.1 therefore apply uniformly to their difference quotients using the same compact-uniform Gaussian bounds as step 1.1. Applying [F5] passes each derivative through the integral. Finite linearity extends every result from primitives to contractions. [given, F1, F3, F5, step 1.1, step 2.1, step 3.1, algebra] ∎
