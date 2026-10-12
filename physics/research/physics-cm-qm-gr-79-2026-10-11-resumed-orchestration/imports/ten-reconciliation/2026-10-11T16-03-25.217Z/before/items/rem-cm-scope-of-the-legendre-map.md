---
id: rem-cm-scope-of-the-legendre-map
kind: remark
title: "Scope of the Legendre map: regular versus hyperregular, the meaning of the covector datum, and the limits of the branch description"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-legendre-map-in-a-time-dependent-chart, lem-cm-legendre-map-local-invertibility, prop-cm-hamiltonian-branch-identities, prop-cm-mechanical-chart-lagrangian-is-hyperregular]
dependency_roles:
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  lem-cm-legendre-map-local-invertibility: mathematical-premise
  prop-cm-hamiltonian-branch-identities: mathematical-premise
  prop-cm-mechanical-chart-lagrangian-is-hyperregular: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 8.2 (Legendre Transformation between Lagrangian and Hamiltonian mechanics) and Section 8.4 (Hamiltonian in Different Coordinate Systems)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.1.1 (the convexity requirement for the Legendre transform and its inverse), printed pages 82-83"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Remarks

- **Regularity is local; hyperregularity is global in the fibre.** The derivative criterion of
  [[lem-cm-legendre-map-local-invertibility]] produces inverse branches only near points where the
  velocity Hessian is nonsingular, whereas hyperregularity as defined in
  [[def-cm-legendre-map-in-a-time-dependent-chart]] demands a bijection of each velocity fibre
  onto the full momentum fibre with globally defined inverse. Neither condition implies the other
  in a fixed problem, and the propositions on this page state explicitly which hypothesis each
  conclusion uses: the differential and energy identities
  [[prop-cm-hamiltonian-branch-identities]] use a branch, and the elimination in
  [[thm-cm-hamilton-phase-action-stationarity]] uses a global branch for the chart.

- **The mechanical chart is the positive example.** For
  $\mathcal L(t,q,v)=\tfrac12v^{\mathsf T}G(t,q)v+A(t,q)\cdot v-V(t,q)$ with $G$ symmetric
  positive definite, [[prop-cm-mechanical-chart-lagrangian-is-hyperregular]] proves
  hyperregularity and computes the Hamiltonian explicitly. The companion page records the
  degenerate cases: a regular Lagrangian whose velocity gradient is not onto the momentum fibre is
  not hyperregular, and the identically zero Lagrangian is not even regular, so it admits no
  Legendre inverse at all.

- **The covector datum $A$ and the momentum.** In the mechanical chart the momentum is
  $p=Gv+A$; it is a covector determined by the chart data, not $\text{mass}\times\text{velocity}$
  unless $G$ is a constant scalar matrix and $A=0$. The datum $A$ is a mathematical field on the
  chart and is not, in this development, an electromagnetic potential; identifying $A$ with a
  physical vector potential is a modelling step belonging to the consuming physics items, and
  requires its own assumptions and units.

- **No completeness or global solvability is asserted.** The branch description of the motion is
  local in the momentum variable and requires the invertibility hypotheses above. It does not
  assert that the Euler–Lagrange or Hamilton equations have global solutions, and the finite-time
  breakdown of a solution is not excluded by anything on this page.
