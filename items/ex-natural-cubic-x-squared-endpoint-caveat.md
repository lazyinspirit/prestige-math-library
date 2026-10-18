---
id: ex-natural-cubic-x-squared-endpoint-caveat
kind: example
title: The natural interpolant of x squared has a second-order endpoint error
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-natural-cubic-spline
  - thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots
  - thm-clamped-cubic-spline-interpolant-exists-uniquely
  - thm-clamped-cubic-spline-fourth-order-error
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter IV,
        pp. 43–45
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For $H>0$, interpolate $f(x)=x^2$ naturally at $0,H,2H$. The error on the
first interval is $H^2/16$ at its midpoint, even though $f^{(4)}=0$. The
clamped interpolant with exact endpoint slopes is $f$ itself. This displays
why the fourth-order bound for the clamped method requires compatible
boundary data.

## Facts & Assumptions

**Given:** $H>0$, the data $(0,0)$, $(H,H^2)$, $(2H,4H^2)$ for $x^2$, and the natural endpoint conditions.

[F1] [[thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]] gives the natural second-derivative system and the cubic piece formula.

[F2] [[thm-clamped-cubic-spline-interpolant-exists-uniquely]]: for strictly increasing knots and prescribed endpoint slopes there is a unique clamped cubic interpolant.

[F3] [[thm-clamped-cubic-spline-fourth-order-error]] gives the fourth-order bound when the endpoint slopes equal those of the target function.

[A1] The knots are $0,H,2H$ and the target function is $f(x)=x^2$.

## Verification

1.1 The interval lengths are both $H$, and the two secant slopes are $H$ and $3H$. The natural endpoint second derivatives are zero. The single interior equation from [F1] is $4H M_1=6(3H-H)=12H$, hence $M_1=3$. [A1, F1, algebra]

2.1 Substituting $M_0=0$, $M_1=3$, $y_0=0$, and $y_1=H^2$ into the first-interval formula in [F1] gives $s(x)=x^3/(2H)+Hx/2$. Thus $s(H/2)=5H^2/16$ whereas $f(H/2)=H^2/4=4H^2/16$, so the absolute error is $H^2/16>0$. [A1, F1, step 1.1, algebra]

3.1 Since $f^{(4)}=0$, a general natural-boundary estimate of the form $C H^4\|f^{(4)}\|_\infty$ would force zero error, contradicting step 2.1. The polynomial $f$ has the prescribed clamped slopes $f'(0)=0$ and $f'(2H)=4H$, so [F2] makes it the unique clamped interpolant; [F3] also gives zero error. [A1, F2, F3, step 2.1, algebra] ∎
