---
page: phase-field-and-energy-dissipative-discretization-examples
title: Phase-field and dissipative gradient-flow computation — Examples
status: published
items: []
examples:
  - ex-phase-field-allen-cahn-stationary-front
  - ex-phase-field-interface-width-and-grid-resolution
  - cex-phase-field-sav-modified-energy-not-physical-energy
  - ex-phase-field-ch-two-cell-energy-ledger
---

These four worked examples keep exact calculations separate from general
stability claims. The one-dimensional Allen–Cahn front
[[ex-phase-field-allen-cahn-stationary-front]] verifies the stationary ODE
and finite energy on $\mathbb R$; it is not a bounded-interval no-flux
solution. Its profile has a $|u|\le1/2$ transition width
$2\sqrt{2\kappa}\,\varepsilon\,\operatorname{artanh}(1/2)$. The companion
grid calculation [[ex-phase-field-interface-width-and-grid-resolution]]
places a uniform grid of spacing $h$ halfway between samples and shows that
when $h$ exceeds this width, no sample lies inside the transition. This is a
missed-interface example, not a sufficient resolution criterion.

[[cex-phase-field-sav-modified-energy-not-physical-energy]] gives scalar
pairs on a one-cell no-flux mesh of unit cell volume with $\varepsilon=C_0=1$.
The auxiliary values move from $(u^0,r^0)=(1,1)$ to $(u^1,r^1)=(0,1/2)$: $r^2$ decreases
from $1$ to $1/4$, while the physical double-well energy rises from $0$ to
$1/4$. These pairs refute the implication from a modified-energy inequality
alone; they are explicitly not claimed to be a trajectory of the SAV update.

The two-cell ledger
[[ex-phase-field-ch-two-cell-energy-ledger]] takes unit cells, one interior
transmissibility $T=1$, zero boundary flux, unit parameters, and initial data
$(1,-1)$. It reduces the convex-splitting CH step to the unique root
$a\in(0,1)$ of $2a^3+7a-5=0$ and returns $(a,-a)$. The mean remains zero,
and the exact physical energies are $2$ and
$2a^2+\tfrac12(1-a^2)^2<2$. Each calculation is proved in its item carrier.

Companion A page: [[phase-field-and-energy-dissipative-discretization]].
