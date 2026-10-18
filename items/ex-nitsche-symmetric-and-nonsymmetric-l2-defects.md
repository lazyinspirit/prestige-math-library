---
id: ex-nitsche-symmetric-and-nonsymmetric-l2-defects
kind: example
title: Symmetric cancellation and the nonsymmetric L2 boundary defect
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  [
    def-nitsche-boundary-penalty-forms,
    thm-symmetric-nitsche-l2-error-under-dual-regularity,
    thm-nonsymmetric-nitsche-l2-error-with-boundary-defect,
    lem-nitsche-h-one-zero-functions-have-zero-facet-traces,
    lem-nitsche-fractional-weak-green-and-flux-cancellation,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Assume Countable Choice. On the unit reference triangle, the affine function $v(x,y)=x$ gives a finite witness that the symmetric form contains an extra adjoint-consistency term: $a_h^1(v,v)-a_h^0(v,v)=-\int_{\partial\Omega}v\partial_nv=-1/2$. In the duality calculation for an error $e$ and a zero-trace adjoint solution $\zeta_e$, that same term cancels the boundary flux in the symmetric $L^2$ identity. It is absent from the nonsymmetric form, which leaves the separate pairing $\int_{\partial\Omega}e\partial_n\zeta_e$.

## Facts & Assumptions

**Given:** Countable Choice; the unit triangle; $v=x$; the symmetric and nonsymmetric forms of [[def-nitsche-boundary-penalty-forms]]; and an error/adjoint pair in the hypotheses of both L2 theorems, including their stated regularity assumptions.

[F1] On the diagonal, $a_h^1(v,v)-a_h^0(v,v)=-\sum_F\int_Fv\partial_nv$ by the two form definitions ([[def-nitsche-boundary-penalty-forms]]).

[F2] A function in $H^1_0(\Omega)$ has zero boundary-facet trace ([[lem-nitsche-h-one-zero-functions-have-zero-facet-traces]]).

[F3] Under the exact and adjoint regularity/PDE hypotheses stated in the two L2 theorems, the fractional weak Green supplier proves their Green identities and interior flux cancellation ([[lem-nitsche-fractional-weak-green-and-flux-cancellation]]).

## Verification

**Given:** The finite triangle calculation and the duality setup in [F3].

1.1 The triangle has edges $y=0$, $x=0$, and $x+y=1$. On the first edge $\partial_nv=0$; on the second $v=0$; on the diagonal $n=(1,1)/\sqrt2$, $\partial_nv=1/\sqrt2$, and the arclength parametrization $(t,1-t)$ has $ds=\sqrt2\,dt$. Therefore $\sum_F\int_Fv\partial_nv=\int_0^1t\,dt=1/2$. Substitution in [F1] gives the asserted finite difference $-1/2$. [F1, given, algebra]

2.1 For the adjoint Poisson equation, [F3] gives $\|e\|_2^2=\int_\Omega\nabla e\cdot\nabla\zeta_e-\sum_F\int_Fe\partial_n\zeta_e$. The symmetric form contains the transposed term $-\sum_F\int_Fe\partial_n\zeta_e$; after subtracting the zero-trace discrete test, the remaining flux is paired with the adjoint interpolation error. The nonsymmetric form has no transposed consistency term; its zero-trace discrete tests satisfy $a_h^0(e,z_h)=\int_\Omega\nabla e\cdot\nabla z_h$, leaving the full pairing $-\sum_F\int_Fe\partial_n\zeta_e$ in the error identity. Thus the symmetric method reduces the adjoint boundary defect to an approximation residual, while the nonsymmetric method retains it. The zero boundary traces used here follow from [F2], and the two $L^2$ theorem items retain their distinct hypotheses and rates. [F1, F2, F3, given, algebra] ∎
