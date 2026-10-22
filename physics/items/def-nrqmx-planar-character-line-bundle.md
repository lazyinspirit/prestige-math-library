---
id: def-nrqmx-planar-character-line-bundle
kind: definition
domain: mathematics
library: mathematics
title: "The quotient line bundle associated with a planar exchange character"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - lem-nrqmx-planar-two-particle-config-fundamental-group
  - def-quotient-topology
  - def-complex-numbers-and-arithmetic
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-group-action
  - def-based-loops-and-fundamental-group
  - def-covering-map-and-evenly-covered-neighbourhoods
dependency_roles:
  lem-nrqmx-planar-two-particle-config-fundamental-group: mathematical-premise
  def-quotient-topology: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-group-action: mathematical-premise
  def-based-loops-and-fundamental-group: mathematical-premise
  def-covering-map-and-evenly-covered-neighbourhoods: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation, §II.A.1"
      url: "https://arxiv.org/pdf/0707.1889"
---

## Definition

Use the pointed coordinate identification
$$C_2(\mathbb R^2)\cong\mathbb R^2\times(0,\infty)\times\mathbb R/\mathbb Z,$$
which sends $q_0=\{(1,0),(-1,0)\}$ to $(0,1,[0])$, to write
$$X:=C_2(\mathbb R^2)\cong\mathbb R^2\times(0,\infty)\times\mathbb R/\mathbb Z.$$
Put $\widetilde X:=\mathbb R^2\times(0,\infty)\times\mathbb R$ and define
$$p(c,\rho,t):=(c,\rho,[t])\in X,\qquad T_n(c,\rho,t):=(c,\rho,t+n)\quad(n\in\mathbb Z).$$
Define $U(1):=\{z\in\mathbb C:|z|=1\}$ under complex multiplication. Let
$\chi:\mathbb Z\to U(1)$ satisfy
$\chi(0)=1$ and $\chi(m+n)=\chi(m)\chi(n)$ for all $m,n\in\mathbb Z$.
Let $\mathbb Z$ act on
$\widetilde X\times\mathbb C$ by
$$n\cdot((c,\rho,t),z):=((c,\rho,t+n),\chi(n)^{-1}z).$$
The homomorphism law for $\chi$ makes this a group action, and its orbits
define the quotient relation.
Define the **character quotient** and its projection by
$$L_\chi:=(\widetilde X\times\mathbb C)/\mathbb Z, \qquad \Pi_\chi([\widetilde x,z]):=p(\widetilde x),$$
with the quotient topology on $L_\chi$. Since $p(T_n\widetilde x)=p(\widetilde x)$,
it induces a continuous map $\Pi_\chi:L_\chi\to X$. Once $p$ is known to be
a covering map, the **monodromy** of this quotient around a based loop means
the fiber map obtained by lifting the loop and keeping its complex coordinate
$z$ constant along the lift.

For this item, a **unitary flat complex line bundle** over a space $X$ means a
continuous surjection $\Pi:L\to X$ with local trivializations
$\Pi^{-1}(U)\cong U\times\mathbb C$ over open sets $U$, whose changes of fiber
coordinate on overlaps are multiplication by functions $g:U\cap V\to U(1)$
that are locally constant (constant on some neighbourhood of each point).
The definition above names the quotient data; the following theorem verifies
that $L_\chi$ has these line-bundle and flatness properties.

## Definition references

[[lem-nrqmx-planar-two-particle-config-fundamental-group]]

[[def-quotient-topology]]

[[def-complex-numbers-and-arithmetic]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

[[def-group-action]]

[[def-based-loops-and-fundamental-group]]

[[def-covering-map-and-evenly-covered-neighbourhoods]]

## Remarks

The inverse in the deck action is chosen so that parallel transport by keeping
the lifted fiber coordinate fixed gives monodromy $\chi(n)$ around the loop
whose lift ends at $T_n\widetilde x$.
