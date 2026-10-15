---
id: post-td-linear-ornstein-uhlenbeck-bath
kind: postulate
title: "Linear Ornstein-Uhlenbeck bath model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps: [def-tdmath-ornstein-uhlenbeck-equation, def-td-si-quantities, def-td-galilean-rest-frame]
dependency_roles:
  def-tdmath-ornstein-uhlenbeck-equation: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-galilean-rest-frame: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "One-dimensional overdamped motion in a harmonic potential, with constant positive mobility and stiffness, one fixed positive bath temperature, additive Gaussian white-noise modeling, and no inertia or memory."
sources:
  references:
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Sections 2.1, 2.3, and 5.2 on overdamped Langevin dynamics, stochastic energetics, and harmonic traps."
---

## Postulate

Choose a Galilean inertial chart $\mathcal F$ as defined in [[def-td-galilean-rest-frame]] for the specified fixed closed trap-and-bath body, assumed to have positive total mass and the center-of-mass map required there, and take $\mathcal F$ to be that body's center-of-mass rest frame. In this chart let $\mathbf r_c\in\mathbb R^3$ be the fixed trap-center position and let $\mathbf e\in\mathbb R^3$ be a fixed unit vector along the modeled trap axis. For a particle position $\mathbf r\in\mathbb R^3$, define the signed displacement $x=\langle\mathbf r-\mathbf r_c,\mathbf e\rangle$ in metres; the process $X_t$ in [[def-tdmath-ornstein-uhlenbeck-equation]] is this coordinate of the particle position at time $t$. Thus $U(x)=kx^2/2$ is the harmonic potential relative to the trap center, not an absolute spatial coordinate. Using the SI conventions and exact $k_{\mathrm B}$ of [[def-td-si-quantities]], take stiffness $k>0$ in joules per square metre, constant mobility $\mu>0$ in square metres per joule-second, and bath temperature $T_b>0$ kelvin. Adopt the one-dimensional overdamped model $dX_t=-\gamma X_t\,dt+\sigma\,dB_t$, interpreted through the integral equation of [[def-tdmath-ornstein-uhlenbeck-equation]], with $\gamma=\mu k$ in seconds$^{-1}$ and $\sigma^2=2\mu k_{\mathrm B}T_b$ in square metres per second. Here $B$ is standard Brownian motion with its stated filtration and increment hypotheses, and the bath noise is independent of the initial preparation. This Einstein noise relation and the linear Markov model are physical assumptions. They do not follow from equilibrium thermodynamics alone and do not report a measured spectrum or calibration.
