---
id: def-coefficientwise-majorisation-of-multivariable-power-series
kind: definition
title: Coefficientwise majorisation
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §2 equation (12), printed p. 5; §3 equation (28), printed p. 7.
status: published
origin: pipeline
deps: ["def-multivariable-power-series"]
---

## Definition

Fix a centre $c$, $n\ge1$ coordinates, and ordinary coefficients as in [[def-multivariable-power-series]]. Put $w=z-c$. For formal expansions $f(c+w)=\sum_\alpha a_\alpha w^\alpha$ and $G(c+w)=\sum_\alpha b_\alpha w^\alpha$, write $f\ll_c G$ if for every $\alpha\in\mathbb N^n$ we have $|a_\alpha|\le b_\alpha$. When the centre is clear, write simply $f\ll G$. In particular every $b_\alpha$ is real and nonnegative. For analytic series $a_\alpha=D^\alpha f(c)/\alpha!$; these are not the unnormalized derivatives. At $c=0$ this is the usual expansion in $z$. Vectors are compared component by component and must have the same number of components. No convergence is required for this relation.

## Source notes

Gantumur, §2 equation (12), printed p. 5; §3 equation (28), printed p. 7.
