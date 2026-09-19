---
id: rem-ito-versus-stratonovich-boundary
kind: remark
title: "Ito versus Stratonovich boundary"
status: draft
origin: pipeline
deps: [def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, def-elementary-predictable-brownian-integrand, thm-localized-ito-integral, def-quadratic-covariation-of-brownian-ito-processes, thm-ito-formula-one-dimensional, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.3"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Remark

This block uses the **left-endpoint Ito convention** throughout: the integral
$\int_0^tH\,dB$ of an elementary integrand
[[def-elementary-predictable-brownian-integrand]] is the finite sum with
coefficients evaluated at the left endpoints of the partition intervals
[[def-ito-integral-of-an-elementary-predictable-process]]. The integral for a
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

**Why the conventions differ.** The reason the midpoint convention cannot
simply be replaced by the left-endpoint one is quadratic variation: the
increments of the integrator do not vanish fast enough for the difference of
the two Riemann-type sums to be negligible. The Ito formula
[[thm-ito-formula-one-dimensional]] exhibits the same phenomenon internally:
the second-order term involving $\sigma^2\partial^2_xf$ has no counterpart in
ordinary calculus, and it is exactly the term that a Stratonovich-type
convention would absorb into the chain rule. The covariation
[[def-quadratic-covariation-of-brownian-ito-processes]] is the invariant that
controls that term, and it is defined here only for deterministic partition
sequences.

No proof is attached: this remark records the convention boundary of the
preceding definitions rather than a new mathematical assertion.
