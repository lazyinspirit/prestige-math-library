---
page: sr-worldlines-and-clocks
title: "Worldlines And Clocks"
status: published
library: physics
items:
  - def-sr-regular-causal-curve-and-worldline
  - lem-sr-weak-piecewise-causal-integrability
  - def-sr-proper-time
  - def-sr-piecewise-proper-time
  - lem-sr-piecewise-proper-time-reparametrization-invariance
  - lem-sr-proper-time-parametrization
  - lem-sr-proper-time-reparametrization-invariance
  - def-sr-four-velocity-and-four-acceleration
  - thm-sr-proper-time-and-observer-decomposition
  - post-sr-free-trajectories-and-clock-hypothesis
  - pthm-sr-four-velocity-norm-and-orthogonality
examples: []
---

This page develops the worldline, proper-time and clock calculus of the flat
classical special-relativity model on top of the affine Minkowski primitives of
[[sr-spacetime-primitives]]. Curves $x : I \to A$ are defined with their
intrinsic difference-quotient derivative in $V$, their $C^{k}$ and piecewise
$C^{1}$ regularity classes, and their causal character read from the model's
vector classification; a future timelike worldline is a $C^{1}$ curve whose
tangent is future timelike everywhere, and a weak piecewise version allows
finitely many kinks with finite one-sided quotient tangents and no
derivative-limit hypothesis ([[def-sr-regular-causal-curve-and-worldline]]).

Proper time along a future timelike worldline is defined by the oriented
integral $\tau(s) = c^{-1}\int_{s_0}^{s}\sqrt{-\eta(x',x')}\,du$
([[def-sr-proper-time]]), and the direct computation of the moving-clock factor
$\gamma$ at $\beta = 3/5$ is worked on the examples page
([[ex-sr-proper-time-of-a-straight-worldline]]). The improper-integral
machinery for weak piecewise histories is supplied first: endpoint continuity,
the coordinate domination $|z'| \le y^{0'}$ by the nonnegative time derivative,
finite improper integrals with exact endpoint increments, and the displacement
inequalities $D^{0} > 0$, $|D_{\text{spatial}}| \le D^{0}$, with strict
timelikeness inherited from any future timelike tangent
([[lem-sr-weak-piecewise-causal-integrability]]). Total proper time for the
weak class is the partition-independent finite sum of the piece integrals,
agreeing with the ordinary Riemann formula under continuous extension of the
derivative ([[def-sr-piecewise-proper-time]]), and it is invariant under
regular increasing weak piecewise changes of parameter
([[lem-sr-piecewise-proper-time-reparametrization-invariance]]).

Proper time then produces a parametrization: $\tau$ is strictly increasing and
$C^{1}$ with $\tau' = c^{-1}\sqrt{-\eta(x',x')} > 0$, its inverse
$\rho$ is $C^{1}$ with $\rho' = 1/(\tau'\circ\rho)$, and the reparametrized
worldline $x \circ \rho$ has tangent $x'/\tau'$, the four-velocity of the next
definition, with the same elapsed proper time ([[lem-sr-proper-time-parametrization]],
[[lem-sr-proper-time-reparametrization-invariance]]). The four-velocity
$U = x'/\tau'$ and the four-acceleration $A = U'/\tau'$ are defined for these
worldlines, together with the model's notion of a point observer as a future
unit timelike vector ([[def-sr-four-velocity-and-four-acceleration]]), and the
main theorem packages the identities $\eta(U,U) = -c^{2}$,
$\eta(U,A) = 0$, the rest-space projection $h(v) = v + \eta(n,v)n$ with its
positive definite complement $n^{\perp}$, the relative velocity
$w = c\,h(u)/\gamma$ with $\gamma = -\eta(n,u) \ge 1$ and the coordinate
formulas for $U$, $A$ and $\eta(A,A)$
([[thm-sr-proper-time-and-observer-decomposition]]).

Finally the page adopts the physical assumptions that make the mathematics
read as physics: free massive particles follow straight future timelike lines,
and ideal clocks read proper time with no acceleration-dependent term, for the
$C^{1}$ and weak piecewise classes under regular increasing reparametrization
([[post-sr-free-trajectories-and-clock-hypothesis]]). The conditional physical
consequences — clock readings, the unit norm and orthogonality identities, the
vanishing four-acceleration of ideal clocks carried by free massive test
particles on the same worldline, and the subluminal speed relative to every
ideal observer — are collected as a physics theorem
([[pthm-sr-four-velocity-norm-and-orthogonality]]), with the idealizations of
the postulates carried explicitly to the conclusion.
