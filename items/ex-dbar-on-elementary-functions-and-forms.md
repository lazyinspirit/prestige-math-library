---
id: ex-dbar-on-elementary-functions-and-forms
kind: example
title: Elementary partial and dbar calculations
status: published
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - def-wirtinger-operators-in-several-complex-variables
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.4"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Definition 4.4.1, printed p. 137, PDF lines 11136–11164. It defines the type operators used here; the specific polynomial and its coefficient calculations are derived in this item."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Example

On $\mathbb C^2$, let $f(z)=z_1^2\bar z_2+\bar z_1^2$ and $\eta=f\,dz_2$.
Then
$$\partial f=2z_1\bar z_2\,dz_1,\qquad \bar\partial f=2\bar z_1\,d\bar z_1+z_1^2\,d\bar z_2,$$
and
$$\partial\eta=2z_1\bar z_2\,dz_1\wedge dz_2,\qquad \bar\partial\eta=2\bar z_1\,d\bar z_1\wedge dz_2+z_1^2\,d\bar z_2\wedge dz_2.$$
In the last term, $d\bar z_2\wedge dz_2=-dz_2\wedge d\bar z_2$.

## Facts & Assumptions

**Given:** The polynomial $f=z_1^2\bar z_2+\bar z_1^2$ and the smooth form $\eta=f\,dz_2$ on $\mathbb C^2$.

[F1] On a form $a_{I,J}dz^I\wedge d\bar z^J$, the $\partial$ coefficient formula is $(\partial_{z_j}a_{I,J})\,dz_j\wedge dz^I\wedge d\bar z^J$ ([[def-bigraded-complex-differential-forms]]).

[F2] The Wirtinger operator is $\partial_{z_k}f=\tfrac12(\partial_{x_k}f-i\,\partial_{y_k}f)$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F3] The Wirtinger operator is $\partial_{\bar z_k}f=\tfrac12(\partial_{x_k}f+i\,\partial_{y_k}f)$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F4] The $\bar\partial$ coefficient formula is $(\partial_{\bar z_j}a_{I,J})\,d\bar z_j\wedge dz^I\wedge d\bar z^J$ ([[def-bigraded-complex-differential-forms]]).

[F5] The two type operators obey the graded product rule; on functions the sign is positive ([[thm-d-dbar-decomposition-and-identities]]).

[F6] The exterior derivative is the sum $d=\partial+\bar\partial$ ([[thm-d-dbar-decomposition-and-identities]]).

## Proof

**Proof technique:** direct.

1.1 The coordinate Wirtinger derivatives give the displayed derivatives of $f$. [F2, F3, F5, given, algebra]
From [F2]–[F3] and $z_k=x_k+iy_k$, one has $\partial_{z_j}z_k=\delta_{jk}$, $\partial_{z_j}\bar z_k=0$, $\partial_{\bar z_j}z_k=0$, and $\partial_{\bar z_j}\bar z_k=\delta_{jk}$. The scalar product rule [F5] therefore gives $\partial_{z_1}f=2z_1\bar z_2$, $\partial_{z_2}f=0$, $\partial_{\bar z_1}f=2\bar z_1$, and $\partial_{\bar z_2}f=z_1^2$. Wedge these coefficients with their corresponding one-forms to obtain the displayed $\partial f$ and $\bar\partial f$.

2.1 Applying the type coefficient formulas to $\eta=f\,dz_2$ yields the two displayed form derivatives. [F1, F4, step 1.1, given, algebra]
The only type factor in $\eta$ is $dz_2$. Thus [F1]–[F4] give $\partial\eta=(2z_1\bar z_2\,dz_1)\wedge dz_2$ and $\bar\partial\eta=(2\bar z_1\,d\bar z_1+z_1^2\,d\bar z_2)\wedge dz_2$. Anticommutativity gives $d\bar z_2\wedge dz_2=-dz_2\wedge d\bar z_2$, so the sign in the last summand is as stated.

3.1 Their sum is the exterior derivative of this example. [F6, step 2.1, given, algebra]
By [F6], $d\eta=\partial\eta+\bar\partial\eta$, so the two explicitly computed type components in step 2.1 add to $d\eta$ with the same wedge sign.
∎
