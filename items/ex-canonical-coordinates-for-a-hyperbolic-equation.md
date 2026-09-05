---
id: ex-canonical-coordinates-for-a-hyperbolic-equation
kind: example
title: "Characteristic coordinates reduce a constant-coefficient hyperbolic equation to mixed form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant,
       thm-two-variable-constant-coefficient-canonical-principal-forms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Example

For the wave-type equation

$$u_{xx}-u_{yy}=0,$$

the characteristic coordinates

$$\xi=x+y,\qquad \eta=x-y$$

turn the principal part into

$$u_{\xi\eta}=0$$

up to the nonzero factor $4$.

## Facts & Assumptions

**Given:** The constant-coefficient hyperbolic operator $u_{xx}-u_{yy}$.

[L1] Constant-coefficient hyperbolic principal parts admit canonical linear
coordinates ([[thm-two-variable-constant-coefficient-canonical-principal-forms]]).

[L2] Characteristic directions are coordinate invariant and are determined by
the characteristic families ([[thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant]]).

## Verification

**Proof technique:** direct.

1.1 The principal quadratic form is $\xi_x^2-\xi_y^2$, so the characteristic covectors are proportional to $d(x+y)$ and $d(x-y)$, and [L2] shows that using $\xi=x+y$ and $\eta=x-y$ follows the two characteristic families. [L2]

2.1 In these coordinates, $\partial_x=\partial_\xi+\partial_\eta$ and $\partial_y=\partial_\xi-\partial_\eta$, so $u_{xx}-u_{yy}=(\partial_\xi+\partial_\eta)^2u-(\partial_\xi-\partial_\eta)^2u=4u_{\xi\eta}$; this is the mixed canonical form, equivalent to the hyperbolic normal form from [L1] after a further linear recombination of $\xi$ and $\eta$. [L1, step 1.1] ∎
