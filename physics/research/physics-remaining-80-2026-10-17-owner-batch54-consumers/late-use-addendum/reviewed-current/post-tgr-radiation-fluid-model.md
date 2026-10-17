---
id: post-tgr-radiation-fluid-model
kind: postulate
title: "Separate no-conserved-number radiation fluid branch"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-tgr-entropy-only-radiation-state
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-entropy-only-radiation-state: formulation-prerequisite
physical_scope: "Smooth entropy-only radiation perfect-fluid model with positive temperature and an adopted positive equation-of-state parameter; no conserved-number current, quantum blackbody calibration, measured material claim, or general solution-existence claim is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.2–4.3 and 5.2–5.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page lecture notes; PDF pp. 14–18, equations (4.4), (4.10)–(4.14), and (5.4)–(5.9): perfect-fluid stress, local state variables, first-law conventions, and the energy projection of stress conservation. The notes use particle-number variables."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2022), §§X.3.1–X.3.2 and XI.2"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics22/Hydrodynamics2022.pdf"
      locator: "Full 202-page notes; PDF pp. 157–160 (§§X.3.1–X.3.2) and 177–178 (§XI.2, equations (XI.17)–(XI.19)): perfect-fluid stress/entropy context and zero-conserved-charge ultrarelativistic scaling, including epsilon proportional to T^4 and s proportional to T^3. These passages do not fix a_R."
---

## Postulate

Use the smooth time-oriented Lorentzian geometry, metric-selected Levi-Civita connection $\nabla$, and length-coordinate conventions of [[def-tgr-framework-units]], with signature $(-,+,+,+)$. On an open region $O$ of a smooth four-manifold without boundary, take a smooth positive temperature field $T:O\to(0,\infty)$ and a smooth future unit observer-congruence field $u$ satisfying $g(u,u)=-1$. Adopt the separate entropy-only state maps of [[def-tgr-entropy-only-radiation-state]] with a fixed parameter $a_R>0$ in $\mathrm{J\,m^{-3}\,K^{-4}}$:

$$\varepsilon=a_RT^4,\qquad p=\frac13a_RT^4,\qquad s=\frac43a_RT^3,\qquad h:=\varepsilon+p.$$

The fields $\varepsilon,p,h$ have units $\mathrm{J\,m^{-3}}=\mathrm{Pa}$ and $s$ has units $\mathrm{J\,K^{-1}\,m^{-3}}$. Adopt the perfect stress tensor and its source-free balance

$$\mathsf T^{ab}:=h\,u^au^b+p\,g^{ab},\qquad \nabla_a\mathsf T^{ab}=0$$

on the specified smooth background. In the proper-time velocity convention $U^a:=c u^a$, this is equivalently $\mathsf T^{ab}=(h/c^2)U^aU^b+p g^{ab}$ with $g(U,U)=-c^2$. This branch has no conserved particle-number coordinate, particle-number current, or chemical-potential field. It adopts an effective equation of state and perfect-stress balance; it does not determine $a_R$ from quantum statistics, assert that a physical system realizes these maps, report a measurement, or derive an Einstein-field equation.
