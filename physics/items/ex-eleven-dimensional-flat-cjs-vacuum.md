---
id: ex-eleven-dimensional-flat-cjs-vacuum
kind: example
title: Flat Eleven-Dimensional CJS Bosonic Vacuum
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - post-eleven-dimensional-cjs-supergravity-action
  - pthm-eleven-dimensional-cjs-bosonic-field-equations
  - def-eleven-dimensional-lorentzian-geometry
  - thm-eleven-dimensional-levi-civita-existence-and-uniqueness
dependency_roles:
  post-eleven-dimensional-cjs-supergravity-action: physical-assumption
  pthm-eleven-dimensional-cjs-bosonic-field-equations: physical-result
  def-eleven-dimensional-lorentzian-geometry: mathematical-premise
  thm-eleven-dimensional-levi-civita-existence-and-uniqueness: mathematical-premise
aliases: []
physical_scope: "Exact example of a source-free classical bosonic solution in the adopted two-derivative CJS truncation. It asserts neither supersymmetry nor quantum stability."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

On $M=\mathbb R^{1,10}$ with coordinates $x^0,\ldots,x^{10}$, orientation $dx^0\wedge\cdots\wedge dx^{10}$, and metric

$$g=\eta=-(dx^0)^2+\sum_{i=1}^{10}(dx^i)^2,$$

take $C_3=0$, so $F_4=dC_3=0$. This is an exact source-free bosonic solution of the field equations in [[pthm-eleven-dimensional-cjs-bosonic-field-equations]] for the action of [[post-eleven-dimensional-cjs-supergravity-action]].

## Facts & Assumptions

**Given:** The adopted source-free CJS bosonic action and its field equations, and the stated smooth flat Lorentzian fields on $\mathbb R^{1,10}$.

[F1] [[def-eleven-dimensional-lorentzian-geometry]] fixes the signature and Hodge-star convention; [[thm-eleven-dimensional-levi-civita-existence-and-uniqueness]] gives the Levi-Civita coefficients from the metric.

[F2] [[post-eleven-dimensional-cjs-supergravity-action]] and [[pthm-eleven-dimensional-cjs-bosonic-field-equations]] specify the model and the conditional classical equations being checked.

## Proof

**Proof technique:** direct substitution.

1.1 The metric components are constant, so every partial derivative $\partial_Mg_{NQ}$ vanishes. The Christoffel formula in [[thm-eleven-dimensional-levi-civita-existence-and-uniqueness]] therefore gives $\Gamma^P{}_{MN}=0$. Substitution in the stated curvature convention gives $R^P{}_{QMN}=0$, hence $R_{MN}=0$ and $R=0$. [F1, algebra]

2.1 Since $C_3=0$, $F_4=dC_3=0$; linearity of $d$ and $*_g$ gives $dF_4=0$, $ *_gF_4=0$, $d *_gF_4=0$, and $F_4\wedge F_4=0$. Thus the four-form equation is zero equals zero. Every component $F_{MABC}F_N{}^{ABC}$ and $F_{ABCD}F^{ABCD}$ is zero, while $R_{MN}=0$ by step 1.1, so the Einstein equation also holds. [F1, F2, step 1.1, algebra]

3.1 Each term of the action density vanishes for these fields. The configuration is therefore an exact solution of the stated source-free classical bosonic equations. No Killing-spinor condition or supersymmetry conclusion is asserted. [F2, step 1.1, step 2.1] ∎
