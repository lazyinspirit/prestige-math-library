---
id: cex-smooth-nonanalytic-data-need-not-have-an-analytic-solution
kind: counterexample
title: Smooth data do not force an analytic solution
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno, §2.4.1, PDF p. 28, nonanalytic Cauchy-data limitation; the flat-function witness and its derivatives are proved locally.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-real-analytic-germ-in-several-variables", "thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form", "thm-exponential-beats-every-polynomial", "thm-derivative-of-exponential", "thm-chain-rule", "thm-algebra-of-derivatives", "cor-exponential-reciprocal-and-positivity"]
---

## Statement refuted

Smooth initial data do not suffice for an analytic solution germ even for $u_t=0$. Define $g(0)=0$ and $g(x)=\exp(-1/x^2)$ for $x\ne0$. This g is smooth and nonanalytic at zero. The problem $u_t=0$, $u(0,x)=g(x)$ has the smooth solution u=g(x), but has no analytic solution germ at $(0,0)$.

## Facts & Assumptions

**Given:** The piecewise flat exponential datum specified in the statement. Smoothness, failure of analyticity, and the analytic trace obstruction are to be proved.

[F1] The exponential is smooth and equals its derivative. ([[thm-derivative-of-exponential]]).

[F2] The one-variable chain rule differentiates composites. ([[thm-chain-rule]]).

[F3] The product and quotient rules apply to differentiable real functions. ([[thm-algebra-of-derivatives]]).

[F4] Exponential decay dominates every polynomial. ([[thm-exponential-beats-every-polynomial]]).

[F5] The real exponential is positive. ([[cor-exponential-reciprocal-and-positivity]]).

[F6] An analytic germ equals its Taylor series with derivative coefficients. ([[def-real-analytic-germ-in-several-variables]]).

## Counterexample

1.1 For x nonzero define polynomials recursively by $P_0(z)=1$ and $P_{m+1}(z)=-z^2P_m^{\prime}(z)+2z^3P_m(z)$. F1–F3 show by successive differentiation that $g^{(m)}(x)=P_m(1/x)\exp(-1/x^2)$ off zero. Indeed $d(1/x)/dx=-1/x^2$ and $d(-1/x^2)/dx=2/x^3$, giving exactly that recurrence. [given, F1, F2, F3]

2.1 With $y=1/x^2\to\infty$, the absolute value of any polynomial in 1/x, and of that polynomial divided by x, is bounded by a constant times an integer power of y for y at least one. F4 makes both products with $\exp(-y)$ tend to zero. Starting with the continuity of g at zero, induction now gives $g^{(m)}(0)=0$: if the mth derivative equals the expression of step 1.1 off zero and is zero at zero, its difference quotient tends to zero, so the next derivative at zero exists and is zero. Its continuity follows from the same bound. Thus g is smooth and all its Taylor coefficients at zero vanish. [step 1.1, F4]

3.1 F5 gives g(x)>0 for x nonzero, arbitrarily close to zero. F6 therefore prevents g from being analytic at zero: its zero Taylor series could not equal those positive values. The function u(t,x)=g(x) is smooth, has u_t=0 and the required trace. If an analytic solution existed, substituting t=0 in its convergent two-variable series would give a convergent series for g with its derivative coefficients, contradicting the preceding conclusion. Hence no analytic germ has those data. [step 2.1, F5, F6] ∎

## Source notes

Ageno, §2.4.1, PDF p. 28, nonanalytic Cauchy-data limitation; the flat-function witness and its derivatives are proved locally.
