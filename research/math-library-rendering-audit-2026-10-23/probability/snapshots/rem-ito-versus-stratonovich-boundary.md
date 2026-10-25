---
id: rem-ito-versus-stratonovich-boundary
kind: remark
title: "Ito versus Stratonovich boundary"
status: published
origin: pipeline
deps: [def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, def-elementary-predictable-brownian-integrand, thm-localized-ito-integral, def-quadratic-covariation-of-brownian-ito-processes, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.3"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
verification:
  audited: 2026-09-22
---

## Remark

This block uses the **left-endpoint Ito convention** throughout: the integral
$\int_0^tH\,dB$ of an elementary integrand
[[def-elementary-predictable-brownian-integrand]] is the finite sum with
coefficients $\xi_k$ measurable at the left time $t_k$ of each interval
$(t_k,t_{k+1}]$
[[def-ito-integral-of-an-elementary-predictable-process]]. This describes
the information available to the coefficient; with the left-open interval
convention it does not assert $\xi_k=H_{t_k}$. The integral for a
globally square-integrable predictable process is its $L^2$ extension
[[def-ito-integral-for-square-integrable-predictable-processes]], while the
extension to locally square-integrable predictable processes is obtained by
localization [[thm-localized-ito-integral]].

**What is not defined here.** Symmetric (Stratonovich) sums of the form
$\sum_k\tfrac12(H_{t_k}+H_{t_{k+1}})(B_{t_{k+1}}-B_{t_k})$, the
Stratonovich integral, and any Ito--Stratonovich conversion rule are not
defined or asserted on this page. None of the items above may be read as
identifying a Stratonovich integral with an Ito integral plus a correction
term; that identity would require its own definition, hypotheses and proof and
belongs to a later stochastic-calculus development.

**Finite-sum distinction.** For any fixed finite partition and any specified real endpoint values H_k and B_k, subtraction gives the exact identity
$$\sum_k\tfrac12(H_k+H_{k+1})(B_{k+1}-B_k)-\sum_k H_k(B_{k+1}-B_k)=\tfrac12\sum_k(H_{k+1}-H_k)(B_{k+1}-B_k).$$
Indeed each summand on the left simplifies to half the product of the two increments. These are cross-increment sums of the kind used in
[[def-quadratic-covariation-of-brownian-ito-processes]]. They need not vanish merely because the mesh tends to zero; neither their convergence nor the convergence of either integral sum is asserted here for an arbitrary predictable integrand. For constant H the difference is exactly zero, whereas for H_k=B_k it is half the sum of squared increments.

An arbitrary predictable diffusion coefficient does not come with a covariation or a symmetric-integral conversion theorem. In particular this remark does not identify a correction for the complete stochastic integrand with just a Hessian term in an Ito formula. Such a claim needs its own hypotheses and proof. “Symmetric” above means the average of endpoint values, not evaluation at the time midpoint.

This finite algebraic comparison specifies a convention boundary; it defines no Stratonovich integral. No choices are made here, and the cited integral constructions retain their own declared AC and version assumptions.
