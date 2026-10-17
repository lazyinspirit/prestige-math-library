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
  - def-axiom-of-choice
  - def-tdmath-ornstein-uhlenbeck-equation
  - thm-tdmath-ornstein-uhlenbeck-model
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-tdmath-ornstein-uhlenbeck-equation: formulation-prerequisite
  thm-tdmath-ornstein-uhlenbeck-model: mathematical-premise
physical_scope: "One scalar component of the inertial velocity of a nonrelativistic particle in one fixed Newtonian inertial coordinate, with constant positive mass, damping rate and bath temperature, additive Brownian forcing, the stated stationary Gaussian preparation, and a prescribed continuous external force. This is an adopted model, not a universal bath law or an experimental report."
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
---

## Postulate

Assume the Axiom of Choice [[def-axiom-of-choice]] and the filtered Brownian probability-space convention of [[def-tdmath-ornstein-uhlenbeck-equation]]. Use one Brownian motion and one process on $[0,\infty)$; equations and the continuous-force condition are understood on each finite interval $[0,t_f]$, $t_f>0$. The one-dimensional coordinate $x\in\mathbb R$ is signed displacement along a fixed spatial axis in one chosen Newtonian inertial coordinate: within that coordinate, inertial means that an isolated free particle has constant coordinate velocity. Let $X_0$ be an $\mathcal F_0$-measurable real-valued initial position coordinate, measured in metres; its law and dependence on $V_0$ are unrestricted because the conclusions concern velocity and displacement increments. Position $X_t$ is measured in metres and velocity $V_t$ in metres per second; they satisfy $X_t=X_0+\int_0^tV_s\,ds$, so the continuous velocity paths make $X_t$ continuously differentiable and $V_t=dX_t/dt$.

Take a primitive particle mass $m>0$ in kilograms, a primitive constant bath temperature $T_b>0$ in kelvins, and the primitive SI Boltzmann constant $k_B>0$ in joules per kelvin. The positive damping rate $\gamma$ is a primitive model parameter in seconds$^{-1}$; the positive noise amplitude $\sigma$ is derived as the square root of $2\gamma k_BT_b/m$ and has units metres seconds$^{-3/2}$. Let $B_t$ be standard scalar Brownian motion with $B_0=0$, variance $t$ in seconds, and future increments independent of the present filtration. Prepare $V_0\sim N(0,k_BT_b/m)$ independently of those future increments. The force $F:[0,\infty)\to\mathbb R$ is a prescribed deterministic locally continuous input in newtons. Adopt

$$V_t=V_0-\gamma\int_0^tV_s\,ds+\frac1m\int_0^tF(s)\,ds+\sigma B_t,\qquad \sigma^2=\frac{2\gamma k_BT_b}{m}.$$

The displayed integral equation is the definition of the stochastic differential notation $dV_t=-\gamma V_t\,dt+F(t)\,dt/m+\sigma\,dB_t$. Brownian increments have units seconds$^{1/2}$, so every term in the equation for $V_t$ has units metres seconds$^{-1}$. When $F=0$, the preparation is the stationary OU Gaussian law because its variance is $\sigma^2/(2\gamma)=k_BT_b/m$; the cited mathematical supplier establishes the specified OU model properties. The thermal noise normalization, Gaussian preparation, constant damping, and deterministic force coupling are adopted assumptions. No measurement, material calibration, nonlinear response, or microscopic derivation of this bath is asserted.
