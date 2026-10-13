---
page: sr-accelerated-observers-examples
title: "Accelerated Observers — Examples"
status: published
library: physics
items: []
examples:
  - ex-sr-bell-congruence-rest-separation-worked
  - ex-sr-rindler-radar-distance-worked
  - cex-sr-rindler-radar-distance-is-not-symmetric
  - cex-sr-rindler-horizon-is-not-a-physical-boundary
  - ex-sr-guided-ring-sagnac-worked
---

These leaf examples and counterexamples work the accelerated-observer page on
exact rationals and logarithms. The Rindler radar example computes the complete
round trips at $\rho_m=2\rho_0$ and $\rho_m=\rho_0/2$ with reflection events
$(3\rho_0/2,5\rho_0/2)$ and $(3\rho_0/8,5\rho_0/8)$, both with radar distance
$\rho_0\log 2$ but rest distances $\rho_0$ and $\rho_0/2$, and the reflector at
$3\rho_0/2$ shows equal rest distance but strictly smaller radar distance, so
radar distance is not a function of rest distance
([[ex-sr-rindler-radar-distance-worked]]). The companion counterexample
interchanges the two coaxial observers and computes the two radar distances
$\rho_0\log 2$ and $2\rho_0\log 2$ between the same pair of worldlines, refuting
symmetry of the radar assignment ([[cex-sr-rindler-radar-distance-is-not-symmetric]]).

The horizon counterexample refutes three exact claims about the null plane
$x^1=x^0$: an explicit future timelike segment crosses it, causally related
events lie on opposite sides, and the metric is everywhere the nondegenerate
constant $\operatorname{diag}(-1,1,1,1)$. The full plane is the boundary of the
causal past of each Rindler observer; only its half-plane $x^1=x^0\ge0$ lies
on the boundary of the Rindler chart image $W=\{x^1>|x^0|\}$. The surviving
horizon statement restricts reachability of particular congruence worldlines
([[cex-sr-rindler-horizon-is-not-a-physical-boundary]]). The Sagnac example
specializes the guided-ring theorem to $\Omega R=3c/5$: return times
$5\pi R/c$ and $5\pi R/(4c)$, chart-time difference $15\pi R/(4c)$, detector
proper-time difference $3\pi R/c$, chart-time rest-line holonomy
$15\pi R/(8c)$, exactly half the chart-time difference, and its proper-time
counterpart $3\pi R/(2c)$, exactly half the detector proper-time difference,
with the clock conversion factor $4/5$ between the two holonomies, and the inertial
limit at $\Omega=0$ ([[ex-sr-guided-ring-sagnac-worked]]). The final example
works the quadratic Bell congruence $q(t)=\frac12\alpha t^2$ on the two-sided
subluminal domain $|t|<c/\alpha$: $G_{11}=\gamma^2$, rest separation
$\gamma(t)L$ with minimum $L$ at $t=0$, expansion $\gamma^3\alpha^2t/c^3$ of
both signs, and the exact check $\beta=3/5$, $\gamma=5/4$, $G_{11}=25/16$,
$\theta(s,s)=75\alpha/(64c^2)$ ([[ex-sr-bell-congruence-rest-separation-worked]]).
Every item is a conditional model computation with ideal clocks, ideal light
rays and ideal reflectors; none asserts a measurement or an empirical
conclusion, and no item takes a supply from another item of this page.
