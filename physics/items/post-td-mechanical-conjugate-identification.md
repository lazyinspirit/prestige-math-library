---
id: post-td-mechanical-conjugate-identification
kind: postulate
title: Mechanical pressure-volume work coupling
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Smooth positive-temperature single-phase charts for simple-compressible systems coupled to a rigid planar constant-area piston along a C1 path of equilibrium states with zero net normal force and no tangential friction; other work coordinates and paths outside this idealized regime are excluded.
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
    - title: David Tong, Statistical Physics, Chapter 4, §4.2 The First Law
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
dependency_level: 6
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

For a simple-compressible system whose only admitted mechanical equilibrium coordinate is volume, model the piston as a planar boundary of fixed area $A>0$ in $\mathrm{m^2}$ that translates only along its outward unit normal without changing shape. Let $\ell$ in metres be its outward displacement coordinate, so the enclosed volume is $V_*+A\ell$ for a fixed reference value $V_*$. Let $\Omega$ be an open positive-temperature single-phase chart of equilibrium states, with equilibrium states as in [[def-td-equilibrium-state-domain]].

A **quasistatic piston leg** in this postulate is a map $\theta\mapsto(U(\theta),V(\theta),n,\ell(\theta))$ on a compact interval $J=[\alpha,\beta]\subseteq\mathbb R$, with $\alpha<\beta$, of a dimensionless parameter, fixed composition $n$, $V(\theta)=V_*+A\ell(\theta)$, and the system in an equilibrium state at every $\theta\in J$. Each coordinate function is continuous on $J$, differentiable on $(\alpha,\beta)$, and has a derivative extending continuously to $J$; equivalently the leg is $C^1$ in its Euclidean coordinates. A **piecewise-$C^1$ quasistatic piston path** is a finite concatenation of these legs with matching endpoint state and piston position. The path is **frictionless** when the tangential contact force vanishes on every leg. It is in **mechanical equilibrium** when the net normal force on the piston is zero at every path point; thus the external load balances the system's outward normal force. Write $F_{\mathrm{sys}}(\theta)$ for the signed outward normal force component, measured in newtons, exerted by the system on the piston, and define the oriented mechanical pressure by $p_{\mathrm{mech}}(\theta):=F_{\mathrm{sys}}(\theta)/A$, in pascals.

For every such path, adopt the identification

$$p_{\mathrm{mech}}=p_c,$$

where $p_c$ is the derivative-defined pressure of [[def-td-temperature-pressure-chemical-potential]], evaluated at $(U(\theta),V(\theta),n)$. With $W_{\mathrm{on}}$ positive for work done on the system, the system's outward work on the piston is $F_{\mathrm{sys}}\,d\ell$, so the coupling assigns the work increment along the path

$$\delta W_{\mathrm{on}}=-p_{\mathrm{mech}}A\,d\ell=-p_c\,dV.$$

Here $\delta W_{\mathrm{on}}$ denotes an increment along the stated path; no path-independence is asserted. This is an adopted, regime-limited physical assumption, not a deduction from the entropy derivative or from the first-law balance [[post-td-first-law-energy]]. It makes no claim for friction, paths outside the quasistatic regime, changing piston area, shear, surface forces, fields, composition transfer, or other generalized coordinates.
