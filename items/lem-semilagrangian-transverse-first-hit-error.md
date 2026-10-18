---
id: lem-semilagrangian-transverse-first-hit-error
kind: lemma
title: "A transverse backward boundary hit has a certified time and trace error bound"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-hybrid-mode-guard-reset-system
  - lem-hybrid-guard-derivative-along-mode
  - lem-transverse-hybrid-event-time-error
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-norm-inequality-for-the-vector-valued-integral
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Statement

Let $J=[a,b]$ be a compact bracket, let $y$ be an exact incoming characteristic on $J$, and let $g(t,x)$ be a boundary guard that is $L_g$-Lipschitz in its state argument on a tube containing the exact path and a dense reconstruction $U$. Suppose $h(t):=g(t,y(t))$ has a root $\tau\in J$ and a declared orientation $\sigma\in\{-1,1\}$ with $\sigma h'(t)\ge\nu>0$ throughout $J$. If
$$\sup_{t\in J}\|y(t)-U(t)\|_2\le\eta,\qquad |g(\widehat\tau,U(\widehat\tau))|\le\varepsilon,\qquad \widehat\tau\in J,$$
then the matched first-hit time satisfies
$$|\widehat\tau-\tau|\le\Delta:=\frac{L_g\eta+\varepsilon}{\nu}.$$
If the boundary value $\beta(t,x)$ is Lipschitz in time and state with constants $L_t^\beta,L_x^\beta$ on the same tube and $\|y'(t)\|_2\le M$, then
$$|\beta(\widehat\tau,U(\widehat\tau))-\beta(\tau,y(\tau))|\le L_t^\beta\Delta+L_x^\beta(\eta+M\Delta).$$
This is a local one-hit bound. It gives no conclusion at grazing, unresolved, or simultaneous events.

## Facts & Assumptions

**Given:** A smooth mode characteristic, a boundary guard and orientation, a matched transverse first-hit bracket, a dense-output error bound, a reported guard residual, and the stated boundary-data Lipschitz bounds.

[F1] [[def-hybrid-mode-guard-reset-system]]: a smooth mode follows its ODE until a selected guard event; the event orientation is part of the guard data.

[F2] [[lem-hybrid-guard-derivative-along-mode]]: along $y'=b(t,y)$, the guard derivative is $h'(t)=\partial_tg(t,y(t))+D_xg(t,y(t))b(t,y(t))$.

[F3] [[lem-transverse-hybrid-event-time-error]]: dense state error $\eta$, guard residual $\varepsilon$, guard state-Lipschitz constant $L_g$, and transverse margin $\nu$ imply $|\widehat\tau-\tau|\le(L_g\eta+\varepsilon)/\nu$ on the matched bracket.

[F4] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: a mode trajectory increment equals the oriented integral of its vector field.

[F5] [[thm-norm-inequality-for-the-vector-valued-integral]]: for ordered endpoints $c\le d$, $\|\int_c^d f\|_2\le\int_c^d\|f\|_2$; reversed oriented integrals must first be rewritten with ordered endpoints.

## Proof

1.1 If $a=b$, then $\widehat\tau=\tau=a$, so the time error is zero and hence at most $\Delta$. The stated bounds give $\|U(a)-y(a)\|_2\le\eta$; the state-Lipschitz bound for $\beta$ gives $|\beta(a,U(a))-\beta(a,y(a))|\le L_x^\beta\eta\le L_t^\beta\Delta+L_x^\beta(\eta+M\Delta)$. Here $\Delta\ge0$ from the error and residual bounds, $\nu>0$, and the nonnegative Lipschitz constant $L_g$, while $M,L_t^\beta,L_x^\beta\ge0$. Assume $a<b$ below. [given, algebra]

1.2 By [F2], the transversality hypothesis is the mode derivative condition required by [F3]. Apply [F3] to this matched bracket with the stated $\eta,\varepsilon,L_g,\nu$; it yields the unique transverse root and the displayed bound $|\widehat\tau-\tau|\le\Delta$. [given, F1, F2, F3]

2.1 By [F4], the increment is the oriented integral from $\tau$ to $\widehat\tau$. Set $c=\min(\tau,\widehat\tau)$ and $d=\max(\tau,\widehat\tau)$; changing orientation only negates the vector integral, so [F5] gives $\|y(\widehat\tau)-y(\tau)\|_2\le\int_c^d\|y'(r)\|_2\,dr\le M(d-c)=M|\widehat\tau-\tau|\le M\Delta$. The triangle inequality with the dense-output bound gives $\|U(\widehat\tau)-y(\tau)\|_2\le\eta+M\Delta$. Apply the time and state Lipschitz inequalities for $\beta$ to obtain the second displayed bound. [given, F4, F5, step 1.2, algebra] ∎

## Remarks

An inflow/exit implementation must use a certified first-hit bracket and return `unresolved` when the bracket or orientation is not certified. This local result does not propagate errors through resets or an event list; those require the full finite-separated-event hypotheses of [[thm-finite-hybrid-trajectory-error-under-separated-events]].
