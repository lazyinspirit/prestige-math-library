---
page: invariant-domain-and-entropy-stable-conservative-schemes
title: Positivity, invariant domains and entropy-stable systems fluxes
status: published
requires:
  - conservative-finite-volume-weak-limits
  - riemann-solvers-for-hyperbolic-systems
  - high-resolution-tvd-eno-and-weno-methods
items:
  - def-pe03-convex-invariant-domain
  - def-pe03-system-entropy-pair-and-potential
  - alg-pe03-convex-scaling-positivity-limiter
  - def-pe03-first-order-hll-finite-volume-update
  - def-pe03-euler-positive-margin-domain
  - lem-pe03-euler-llf-split-state-positive
  - def-pe03-tadmor-entropy-conservative-flux
  - prop-pe03-euler-state-and-margin-domains-are-convex-and-closed
  - def-pe03-entropy-stable-dissipative-flux
  - lem-pe03-hll-half-cell-riemann-averages
  - thm-pe03-hll-update-preserves-convex-invariant-domain
  - thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux
  - thm-pe03-convex-scaling-limiter-preserves-mean-and-node-positivity
  - thm-pe03-ideal-gas-llf-branch-preserves-positivity
examples: []
---

This page gives a first-order HLL invariant-domain result from the exact
two-wave flux algebra. Given cell means in the convex admissible set, its
hypothesis requires each adjacent half-cell average of the approximate HLL
fan to lie there, with the local half-cell CFL coefficients nonnegative.
Membership of every HLL middle state in the set is a sufficient condition for
that hypothesis, not a necessary one. On the symmetric local Lax–Friedrichs
branch, the HLL middle state is a
convex average of Euler flux-split states; a separate calculation proves
density and internal-energy positivity when the supplied speed is at least
$|u|+c$. That speed bound is a sufficient admitted branch, not a bound proved
for all HLL estimates.

The entropy section defines the system entropy pair, entropy variables,
potential, entropy-conservative two-point flux, and positive-semidefinite
dissipation. A periodic semidiscrete finite-volume solution satisfies a local
cell entropy inequality. No fully discrete entropy result follows from it.
The convex-scaling limiter preserves the mean and the stated positive margin
at its finite quadrature nodes. It supplies no pointwise-in-cell positivity
claim away from those nodes.

In the diagram, $x$ is distance from one HLL interface, $t$ is time, and the
two lines are the supplied speeds $S_L<0<S_R$. The dashed verticals are the
centres of the adjacent cells, each a distance $h/2$ from the interface. The
CFL restrictions keep the waves inside those half-cells through $\Delta t$;
the labels describe the approximate HLL fan used to compute its half-cell
averages. The diagram records conventions only; the proofs use the HLL flux
formula and coefficient identities.

```tikz
\begin{tikzpicture}[x=2.0cm,y=1.3cm]
  \draw[->] (-1.45,0) -- (1.5,0) node[right] {$x$};
  \draw[->] (-1.4,0) -- (-1.4,1.25) node[above] {$t$};
  \draw[dashed] (-0.5,0) -- (-0.5,1.05);
  \draw[dashed] (0.5,0) -- (0.5,1.05);
  \draw[thick] (0,0) -- (-0.36,1);
  \draw[thick] (0,0) -- (0.36,1);
  \node at (-0.98,0.7) {$U_L$};
  \node at (0,0.68) {$U_*$};
  \node at (0.98,0.7) {$U_R$};
  \node[below] at (-0.5,0) {$-h/2$};
  \node[below] at (0.5,0) {$h/2$};
  \node[above right] at (-0.36,1) {$S_L$};
  \node[above left] at (0.36,1) {$S_R$};
  \node[below right] at (0,0) {$0$};
  \node[left] at (-1.4,1) {$\Delta t$};
\end{tikzpicture}
```

## Prerequisite interface

The approved PE03 design declares [[conservative-finite-volume-weak-limits]],
[[riemann-solvers-for-hyperbolic-systems]], and
[[high-resolution-tvd-eno-and-weno-methods]] as page prerequisites. The
Riemann-solvers page supplies the hyperbolic-system and HLL-flux definitions
used by the corresponding item dependencies. This page defines its own
first-order HLL state update; its proofs do not invoke the finite-volume
weak-limit theorem or a MUSCL, ENO, WENO, TVD, or fully discrete time-stepping
result.

