---
id: ex-parallel-transport-for-a-scalar-linear-ode
kind: example
title: "Parallel transport for a scalar linear ode"
status: draft
origin: pipeline
deps: ["prop-local-frame-formula-for-covariant-differentiation-along-a-curve","thm-existence-and-uniqueness-of-parallel-sections"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Example

On a framed real line bundle along a curve over $[a,b]$, let the scalar connection coefficient evaluated on velocity be $c(t)$, continuous on each of finitely many smooth pieces. Then the parallel equation is $v'=-c(t)v$ and endpoint transport in this frame is
$$v(b)=\exp\left(-\int_a^b c(t)\,dt\right)v(a).$$

## Facts & Assumptions

**Given:** $a\leq b$, a supplied continuous frame smooth on each piece, the induced piecewise continuous coefficient, and initial scalar $v_0$.

[F1] The parallel equation in a line frame is the scalar equation above ([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]]).

[F2] Parallel initial-value sections are unique on finite piecewise smooth curves ([[thm-existence-and-uniqueness-of-parallel-sections]]).

## Verification

1.1 Put $C(t)=\int_a^t c(u)\,du$ and $v(t)=e^{-C(t)}v_0$. The ordinary fundamental theorem of calculus on each continuity piece and chain rule give $v'=-cv$. The function $C$ is continuous across the finite subdivision, so $v$ matches at every corner. Also $C(a)=0$, whence $v(a)=v_0$. By [F1] and [F2] this is the parallel solution. [F1, F2, given]

2.1 Evaluating at $b$ proves the formula. If $c=2$ and $[a,b]=[0,1]$, the multiplier is $e^{-2}$. Zero initial value remains zero, $c=0$ gives the identity, and $a=b$ gives the empty integral and identity. The exponential multiplier is always positive and nonzero. For the reversed curve $h(u)=a+b-u$, its coefficient is $-c(h(u))$; substitution changes the integral's sign, giving the reciprocal multiplier. These finite scalar integrations require no selection of solution branches. [step 1.1] ∎
