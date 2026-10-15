---
id: post-td-mechanical-conjugate-identification
kind: postulate
title: Mechanical pressure-volume work coupling
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Positive-temperature simple-compressible equilibrium charts coupled to a quasistatic, frictionless planar piston of constant area; other work coordinates and nonequilibrium force laws are excluded.
deps:
  - def-td-equilibrium-state-domain
  - def-td-system-and-permitted-exchanges
  - def-td-si-quantities
  - def-td-process-and-protocol
  - def-td-temperature-pressure-chemical-potential
  - post-td-first-law-energy
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  post-td-first-law-energy: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.2.4
      url: https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §§2.6 and 2.9
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
---

## Postulate

For a simple-compressible system whose only admitted mechanical equilibrium coordinate is volume, adopt the following piston coupling. The boundary is a planar piston with constant area $A>0$ in $\mathrm{m^2}$ and outward displacement coordinate $\ell$ in metres; increasing $\ell$ increases the enclosed volume by $dV=A\,d\ell$. Define the positive mechanical pressure $p_{\mathrm{mech}}$ as the outward normal force exerted by the system on the piston divided by $A$, so $p_{\mathrm{mech}}$ is in pascals. When the system is in quasistatic frictionless mechanical equilibrium with this piston, adopt the identification

$$p_{\mathrm{mech}}=p_c,$$

where $p_c$ is the entropic pressure of [[def-td-temperature-pressure-chemical-potential]]. With $W_{\mathrm{on}}$ positive for work done on the system, the same coupling assigns the incremental mechanical work

$$\delta W_{\mathrm{on}}=-p_{\mathrm{mech}}A\,d\ell=-p_c\,dV.$$

The sign agrees with [[def-td-process-and-protocol]]: compression has $dV<0$ and positive work on the system. This is an adopted, regime-limited physical assumption, not a deduction from the entropy derivative or from the first-law balance [[post-td-first-law-energy]]. It makes no claim for friction, nonquasistatic processes, changing piston area, shear, surface forces, fields, composition transfer, or other generalized coordinates.
