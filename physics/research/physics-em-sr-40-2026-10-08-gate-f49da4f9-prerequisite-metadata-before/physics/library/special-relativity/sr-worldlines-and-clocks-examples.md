---
page: sr-worldlines-and-clocks-examples
title: "Worldlines And Clocks — Examples"
status: draft
library: physics
items: []
examples:
  - ex-sr-clock-at-rest-in-a-chart
  - ex-sr-proper-time-of-a-straight-worldline
  - ex-sr-proper-time-reparametrization
  - ex-sr-four-velocity-and-acceleration-of-a-circular-worldline
  - ex-sr-observer-split-worked
  - cex-sr-null-curves-have-no-proper-time-parametrization
  - cex-sr-spacelike-curves-have-no-proper-time
  - cex-sr-past-directed-timelike-parametrization-is-not-a-worldline
---

These worked examples and counterexamples exercise the worldline and clock
calculus of [[sr-worldlines-and-clocks]] on exact rational data. The clock at
rest in an inertial chart has proper time equal to coordinate time, four-velocity
$(c,0,0,0)$ and vanishing four-acceleration
([[ex-sr-clock-at-rest-in-a-chart]]); the straight worldline at
$\beta = 3/5$ runs slow by the factor $4/5 = 1/\gamma$ with
$U = (5c/4,3c/4,0,0)$ and $A = 0$
([[ex-sr-proper-time-of-a-straight-worldline]]). The cubic reparametrization
$u \mapsto u^{3}$ of a straight worldline gives the same elapsed proper time
$28/c$ computed twice, and its restriction to $[-1,1]$ exhibits a zero tangent
at the origin where the broad length-integral identity still holds but no
worldline structure remains ([[ex-sr-proper-time-reparametrization]]).

Uniform circular motion is carried through the coordinate form of the
decomposition theorem: $\gamma$ and $|w|$ are constant, $w \cdot a = 0$, the
four-acceleration is $(0,\gamma^{2}a)$ with
$\eta(A,A) = \gamma^{4}R^{2}\omega^{4}$, the static case $\omega = 0$ is
retained, and the specialization $R\omega = 3c/5$ gives $\gamma = 5/4$ and
acceleration magnitude $(15c\omega)/16$
([[ex-sr-four-velocity-and-acceleration-of-a-circular-worldline]]), while the
observer split $n = e_0$, $u = (5/4,3/4,0,0)$ computes $\gamma = 5/4$,
$h(u) = (0,3/4,0,0)$ and $w = (0,3c/5,0,0)$ with all projection identities
checked ([[ex-sr-observer-split-worked]]).

The counterexamples delimit the future timelike hypothesis of the proper-time
construction: a straight future null line has vanishing integrand, constant
formal length integral and no unit timelike tangent; its proper-time function
is undefined
([[cex-sr-null-curves-have-no-proper-time-parametrization]]); a straight
spacelike line makes $-\eta(x',x')$ negative so the square root is not real
([[cex-sr-spacelike-curves-have-no-proper-time]]); and reversing the
orientation of a timelike line leaves the proper-time integrand unchanged while
destroying the worldline property, showing that the parametrization, not merely
the image, is part of the definition
([[cex-sr-past-directed-timelike-parametrization-is-not-a-worldline]]).
