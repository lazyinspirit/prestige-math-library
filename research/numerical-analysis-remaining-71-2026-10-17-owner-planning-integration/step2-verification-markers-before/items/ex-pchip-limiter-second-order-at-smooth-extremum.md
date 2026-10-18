---
id: ex-pchip-limiter-second-order-at-smooth-extremum
kind: example
title: PCHIP loses third-order value accuracy next to a smooth extremum
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [alg-pchip-slope-selection, def-piecewise-cubic-hermite-interpolant, thm-pchip-third-order-away-from-extrema, lem-derivative-algebra-and-chain-rules, thm-heine-borel-r, thm-extreme-value-r]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $f(x)=x^2$ and use the uniform nodes $-2h,-h,0,h,2h$, where $h>0$. The function is smooth and has a strict extremum at zero. On the cell $[-h,0]$, PCHIP's local maximum error is at least $2h^2/27$, so the third-order estimate of [[thm-pchip-third-order-away-from-extrema]] cannot be extended across this extremum.

## Facts & Assumptions

**Given:** $h>0$, $f(x)=x^2$, the five stated nodes, and exact real arithmetic.

[F1] [[alg-pchip-slope-selection]]: opposite-sign neighboring secants give zero interior slope; same-sign secants use the weighted harmonic mean.

[F2] [[def-piecewise-cubic-hermite-interpolant]]: the segment is formed from endpoint values and slopes using $H_{00},H_{01},H_{10},H_{11}$.

[F3] [[thm-pchip-third-order-away-from-extrema]]: the third-order value bound assumes a uniform grid and a derivative bounded away from zero on the whole interval.

[F4] [[lem-derivative-algebra-and-chain-rules]]: the power rule $(x^m)'=mx^{m-1}$ holds for every integer $m\ge1$.

[F5] [[thm-heine-borel-r]]: every closed interval $[u,v]$ with $u\le v$ is compact.

[F6] [[thm-extreme-value-r]]: a continuous real function on a nonempty compact subset of $\mathbb R$ attains its maximum.

## Verification
1.1 The four secants are $d_0=-3h$, $d_1=-h$, $d_2=h$, and $d_3=3h$. At $x=-h$, the equal-width weights are $3h,3h$, so [F1] gives $m(-h)=6h/(3h/(-3h)+3h/(-h))=-3h/2$. At $x=0$ the adjacent secants have opposite signs, so [F1] gives $m(0)=0$. [given, F1, algebra]

2.1 With $t=(x+h)/h$ on $[-h,0]$, [F2] gives $P_h(x)/h^2=H_{00}(t)-\frac32H_{10}(t)=1-\frac32t+\frac12t^3$, whereas $f(x)/h^2=(1-t)^2$. Therefore $(P_h(x)-f(x))/h^2=\frac12t(1-t)^2$. [F2, step 1.1, algebra]

3.1 On this cell, step 2.1 gives the error $E(x)=|P_h(x)-f(x)|=\frac{h^2}{2}t(1-t)^2$, since $0\le t\le1$. This expression extends to a polynomial in $x$ through $t=(x+h)/h$, so [F4] makes it differentiable, hence continuous, on the cell. As $h>0$, the interval $[-h,0]$ is nonempty and compact by [F5]; [F6] therefore gives an attained maximum of $E$ there. Since $t=1/3$ corresponds to a point of the cell and step 2.1 gives $E=2h^2/27$ at that point, the maximum is at least $2h^2/27$. A uniform bound $|P_h-f|\le Ch^3$ on cells adjacent to this extremum would then imply $2/27\le Ch$ for every sufficiently small $h$, which is impossible as $h\to0$. The hypothesis $|f'|\ge c>0$ in [F3] also fails because [F4] gives $f'(0)=0$. [F3, F4, F5, F6, step 2.1, given, algebra] ∎
