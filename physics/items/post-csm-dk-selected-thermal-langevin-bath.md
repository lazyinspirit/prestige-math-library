---
id: post-csm-dk-selected-thermal-langevin-bath
kind: postulate
title: "Adopted inertial velocity Langevin bath"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 0
deps:
  - post-cm01-frames
  - def-axiom-of-choice
  - def-tdmath-ornstein-uhlenbeck-equation
  - thm-tdmath-ornstein-uhlenbeck-model
dependency_roles:
  post-cm01-frames: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
  def-tdmath-ornstein-uhlenbeck-equation: formulation-prerequisite
  thm-tdmath-ornstein-uhlenbeck-model: mathematical-premise
physical_scope: "One scalar component of a nonrelativistic particle's position and inertial velocity along a fixed spatial axis of one inertial frame, understood as the fixed adapted affine chart of the adopted Newtonian spacetime, with constant positive mass, damping rate and bath temperature, additive Brownian forcing, the stated stationary Gaussian preparation, and a prescribed continuous external force. This is an adopted model, not a universal bath law or an experimental report."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Udo Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/pdf/1205.4176"
      locator: "§2.6.1, underdamped Langevin motion and its thermal noise covariance."
    - title: "Grigorios A. Pavliotis, Stochastic Processes and Applications: Diffusion Processes, the Fokker–Planck and Langevin Equations"
      url: "https://www.ma.imperial.ac.uk/~pavl/PavliotisBook.pdf"
      locator: "Chapter 3 §3.7 and Chapter 4 §4.4: the linear OU solution, stationary Gaussian law and covariance."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Postulate

Assume the Axiom of Choice [[def-axiom-of-choice]], the filtered Brownian probability-space convention of [[def-tdmath-ornstein-uhlenbeck-equation]], and the adopted Newtonian spacetime and frame assumptions of [[post-cm01-frames]]. Fix one inertial frame $\Gamma=(o,u,(e_1,e_2,e_3))$ of that postulate: it is a fixed global adapted affine chart, with $o\in A$, $u\in V$, $\tau(u)=1$, and a fixed positively oriented $g$-orthonormal basis $(e_1,e_2,e_3)$ of the spatial displacement space $K=\ker\tau$. Its chart map assigns each event $p\in A$ the unique coordinates $(t_\Gamma(p),\mathbf x_\Gamma(p))$ satisfying $p=o+t_\Gamma(p)u+\sum_{i=1}^3x_{\Gamma,i}(p)e_i$. Let $X=(X_t)_{t\ge0}$ be the scalar position-coordinate process in this chart, measured in metres, whose value is the signed first spatial coordinate along the fixed axis $e_1$. The model tracks only $X$; it does not specify a full particle worldline or assert a law for either of the other spatial coordinates. Let $X_0$ be an $\mathcal F_0$-measurable real-valued random variable. On a measurable event $\Omega_*\in\mathcal F$ with $P(\Omega_*)=1$, assume $t\mapsto X_t(\omega)$ is continuously differentiable and define the velocity coordinate $V_t(\omega):=dX_t(\omega)/dt$ there, measured in metres per second. Thus $X_t=X_0+\int_0^tV_s\,ds$ on $\Omega_*$; values on the null complement do not affect the stochastic conclusions.

Take a primitive particle mass $m>0$ in kilograms, a primitive constant bath temperature $T_b>0$ in kelvins, and the primitive SI Boltzmann constant $k_B>0$ in joules per kelvin. The positive damping rate $\gamma$ is a primitive model parameter in seconds$^{-1}$; the positive noise amplitude $\sigma$ is derived as the square root of $2\gamma k_BT_b/m$ and has units metres seconds$^{-3/2}$. Let $B_t$ be standard scalar Brownian motion with $B_0=0$, variance $t$ in seconds, and future increments independent of the present filtration. Prepare an $\mathcal F_0$-measurable $V_0\sim N(0,k_BT_b/m)$ independently of future Brownian increments. The force $F:[0,\infty)\to\mathbb R$ is a prescribed deterministic locally continuous input in newtons. Adopt

$$V_t=V_0-\gamma\int_0^tV_s\,ds+\frac1m\int_0^tF(s)\,ds+\sigma B_t,\qquad \sigma^2=\frac{2\gamma k_BT_b}{m}.$$

The displayed integral equation is the definition of the stochastic differential notation $dV_t=-\gamma V_t\,dt+F(t)\,dt/m+\sigma\,dB_t$. Brownian increments have units seconds$^{1/2}$, so every term in the equation for $V_t$ has units metres seconds$^{-1}$. When $F=0$, the preparation is the stationary OU Gaussian law because its variance is $\sigma^2/(2\gamma)=k_BT_b/m$; the cited mathematical supplier establishes the specified OU model properties. The thermal noise normalization, Gaussian preparation, constant damping, and deterministic force coupling are adopted assumptions. No measurement, material calibration, nonlinear response, or microscopic derivation of this bath is asserted.
