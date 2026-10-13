---
page: cm-math-approximation-examples
title: Cm Math Approximation — Examples
status: published
items: []
examples:
  - ex-cm-oscillator-cases-computed
  - ex-cm-resonant-forcing-and-amplitude-peak
  - ex-cm-uniform-force-and-linear-drag
  - ex-cm-pendulum-linearization-bound-check
  - ex-cm-averaging-oscillatory-deviation-check
  - ex-cm-adiabatic-drift-check
  - cex-cm-nonuniqueness-without-state-lipschitz
  - ex-cm-domain-escape-in-finite-time
requires:
  - cm-math-approximation
  - darboux-lhopital-and-taylor
  - monotone-functions-and-discontinuities
  - cm-math-balances
  - cm-math-dynamics
---

The companion page to [[cm-math-approximation]] gathers explicit worked checks
for its oscillator, forcing, linearization, averaging and adiabatic results.
Everything here is mathematics: the items carry `domain: mathematics`, depend
only on mathematical suppliers, and make no physical or empirical claim.

[[ex-cm-oscillator-cases-computed]] solves five initial value problems of the
homogeneous model, one in each discriminant case and in the degenerate
$k\le0$ cases; [[ex-cm-resonant-forcing-and-amplitude-peak]] checks the
resonant solution $\tfrac12t\sin t$ of $x''+x=\cos t$ and evaluates the
amplitude maximum in its two regimes;
[[ex-cm-uniform-force-and-linear-drag]] treats constant forcing with the
convolution formula, including the approach to terminal velocity under linear
drag. [[ex-cm-pendulum-linearization-bound-check]] verifies the quadratic
remainder and growth constants for $F(\theta,\omega)=(\omega,-\sin\theta)$ on
the ball of radius $1/2$ and evaluates the resulting error bound for a small
datum. [[ex-cm-averaging-oscillatory-deviation-check]] computes the average and
deviation for $f(t,x)=\cos t$, checks the trapping hypothesis, and compares the
theorem's bound with the exact solution on $[0,100]$;
[[ex-cm-adiabatic-drift-check]] exhibits the exactly invariant quantity
$I(1+\varepsilon\cos\theta)$ for the branch $K=I+\varepsilon I\cos\theta$,
verifies the trapping in the stated action window, and evaluates the drift
bound. [[cex-cm-nonuniqueness-without-state-lipschitz]] is the counterexample
$x'=\sqrt{|x|}$ through the origin, showing that continuity of the field cannot
replace the Lipschitz hypothesis in the uniqueness results, and
[[ex-cm-domain-escape-in-finite-time]] shows a solution of a bounded field
leaving its domain at a finite time.
