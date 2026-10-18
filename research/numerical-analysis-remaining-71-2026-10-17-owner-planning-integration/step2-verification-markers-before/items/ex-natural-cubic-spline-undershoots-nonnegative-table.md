---
id: ex-natural-cubic-spline-undershoots-nonnegative-table
kind: example
title: A natural cubic spline undershoots a nonnegative table
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-natural-cubic-spline, alg-pchip-slope-selection, thm-pchip-shape-preserving-no-overshoot, lem-derivative-algebra-and-chain-rules]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Consider the nonnegative table $(x_i,y_i)=((0,1),(1,0),(2,0),(3,1))$. On the three unit cells, with $t=x-i$ on cell $[i,i+1]$, define
$$S_0(t)=1-\frac65t+\frac15t^3,\qquad S_1(t)=-\frac35t(1-t),\qquad S_2(t)=\frac35t+\frac35t^2-\frac15t^3.$$
These pieces form a natural cubic spline interpolating the table, but $S_1(t)<0$ for $0<t<1$. PCHIP on the same data has a flat middle segment at zero and remains between the nonnegative cell endpoints.

## Facts & Assumptions

**Given:** The four tabulated nodes and values, the displayed piecewise cubic $S$, and exact real arithmetic.

[F1] [[def-natural-cubic-spline]]: a natural cubic spline is $C^2$, piecewise cubic, and has second derivative zero at its first and last knots.

[F2] [[alg-pchip-slope-selection]]: PCHIP selects zero interior slope when adjacent secants have nonpositive product and uses the Hermite pieces from the resulting nodal slopes.

[F3] [[thm-pchip-shape-preserving-no-overshoot]]: every PCHIP cell is monotone between its endpoint values; a flat cell is constant.

[F4] [[lem-derivative-algebra-and-chain-rules]]: the power rule $(x^m)'=mx^{m-1}$ holds for every integer $m\ge1$.

## Verification
1.1 Each displayed piece has endpoint values $S_0(0)=1$, $S_0(1)=0$, $S_1(0)=S_1(1)=0$, $S_2(0)=0$, and $S_2(1)=1$, so the pieces interpolate the given table. By [F4], their first derivatives are $S_0'=-6/5+3t^2/5$, $S_1'=-3/5+6t/5$, and $S_2'=3/5+6t/5-3t^2/5$; the derivative values match at both shared knots. Their second derivatives are $S_0''=6t/5$, $S_1''=6/5$, and $S_2''=6/5-6t/5$; these match at shared knots, and $S_0''(0)=S_2''(1)=0$. By [F1], this is a natural cubic spline. [given, F1, F4, algebra]

2.1 For $0<t<1$, $S_1(t)=-3t(1-t)/5<0$, although every tabulated value is nonnegative. Thus the natural cubic spline undershoots the data range on the middle cell. [given, step 1.1, algebra]

3.1 The secants are $d_0=-1$, $d_1=0$, and $d_2=1$. By [F2], the interior slopes at nodes $1$ and $2$ are both zero because each neighboring pair includes a zero secant; the Hermite piece joining the two zero values with zero slopes is constant zero. By [F3], the first and last PCHIP pieces remain between $1$ and $0$, and between $0$ and $1$, respectively. Hence PCHIP is nonnegative throughout the interval and does not reproduce the natural spline's undershoot. [F2, F3, given, algebra] ∎