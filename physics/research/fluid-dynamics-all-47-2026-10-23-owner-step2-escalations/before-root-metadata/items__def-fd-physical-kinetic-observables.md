---
id: def-fd-physical-kinetic-observables
kind: definition
title: Kinetic number, mass and thermal observables
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
physical_scope: >-
  SI definitions for the single-species, three-dimensional, translational
  kinetic model on states with positive number density and, when temperature
  is used, positive centered second moment. No isotropy or empirical equation
  of state is assumed by the definitions.
deps:
  - def-fd-kinetic-density
  - post-fd-boltzmann-model
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  post-fd-boltzmann-model: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 10"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ae32d4e53c9fa0bee4171378caa4ea84_MIT8_333F13_Lec10.pdf"
      locator: "Section III.G, printed pp. 64–67; collision moments, pressure tensor, internal kinetic energy, and heat flux."
    - title: "David Tong, Lectures on Kinetic Theory, Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
      locator: "Sections 2.4.1–2.4.2, printed pp. 35–42; number density, mass density, mean velocity, pressure tensor, and ideal-fluid moments."
verification:
  precheck: pending
---

## Definition

Work in three spatial and velocity dimensions, with $x$ in metres, $v$ in metres per second, and a nonnegative measurable one-particle number density $f(x,v,t)$ as defined by the kinetic-density model. Adopt Countable Choice $\mathrm{AC}_\omega$ as in that definition, and put $v_*=1\,\mathrm{m\,s^{-1}}$ and $\omega_3(v)=\sum_{j=0}^3(|v|/v_*)^j$. Assume $\int_{\mathbb R^3}\omega_3(v)f(x,v,t)\,d^3v<\infty$ at the state under consideration. Use the primitive fixed particle mass $m>0$ in kilograms and Boltzmann constant $k_B>0$ in joules per kelvin from the adopted Boltzmann model. The number density, mass density, mean velocity, peculiar velocity, translational temperature, stress, heat flux, and energy below are derived moment quantities. Where $n(x,t)>0$, define the number density, mass density, mean velocity, peculiar velocity, and translational temperature by

$$n(x,t)=\int_{\mathbb R^3}f\,d^3v,\qquad \rho(x,t)=m n(x,t),\qquad u(x,t)=\frac1{n(x,t)}\int_{\mathbb R^3}v f\,d^3v,\qquad c(x,v,t)=v-u(x,t),$$

$$T(x,t)=\frac{m}{3k_B n(x,t)}\int_{\mathbb R^3}|v-u(x,t)|^2 f(x,v,t)\,d^3v.$$

Use $u$ only where $n>0$, and use $T$ in the positive-temperature branch only where the centered second moment is strictly positive. Define the kinetic stress tensor, heat-flux vector, and total kinetic-energy density by

$$P(x,t)=m\int_{\mathbb R^3}c\otimes c\,f\,d^3v,\qquad q(x,t)=\frac m2\int_{\mathbb R^3}|c|^2c\,f\,d^3v,\qquad E(x,t)=\frac m2\int_{\mathbb R^3}|v|^2f\,d^3v.$$

Here $n$ is in $\mathrm{m^{-3}}$, $\rho$ in $\mathrm{kg\,m^{-3}}$, $u$ in $\mathrm{m\,s^{-1}}$, $T$ in kelvins, $P$ in pascals, $q$ in $\mathrm{W\,m^{-2}}$, and $E$ in $\mathrm{J\,m^{-3}}$. The definitions impose no isotropy on $P$; $p$ will denote a separate scalar pressure only in a specified local-equilibrium conclusion.

Let $f_{\rm ref}>0$ be a constant reference density with the same units as $f$. Where both $\int f|\log(f/f_{\rm ref})|\,d^3v$ and $\int |v|f|\log(f/f_{\rm ref})|\,d^3v$ are finite, define the dimensionless-log kinetic entropy integral, its flux, the physical kinetic entropy density, and its flux by

$$h=\int_{\mathbb R^3}f\log(f/f_{\rm ref})\,d^3v,\qquad J_H=\int_{\mathbb R^3}v f\log(f/f_{\rm ref})\,d^3v,\qquad s_{\rm kin}=-k_Bh,\qquad j_{\rm kin}=-k_BJ_H.$$

Thus $s_{\rm kin}$ has units $\mathrm{J\,m^{-3}\,K^{-1}}$ and $j_{\rm kin}$ has units $\mathrm{J\,m^{-2}\,s^{-1}\,K^{-1}}$. These are kinetic-model observables; $s_{\rm kin}$ is not the fine-grained Gibbs entropy of a reversible many-particle state.

## Definition references

Current draft K01 definition of a nonnegative measurable kinetic density with finite absolute velocity moments through order 3: [[def-fd-kinetic-density|kinetic density and moment domain]].

Current draft single-species Boltzmann postulate supplying the fixed mass and Boltzmann-constant parameters: [[post-fd-boltzmann-model|single-species elastic Boltzmann model]].

[MIT OpenCourseWare 8.333, Lecture 10, §III.G (collision moments, pressure tensor, and heat flux)](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ae32d4e53c9fa0bee4171378caa4ea84_MIT8_333F13_Lec10.pdf)

[David Tong, Lectures on Kinetic Theory, §§2.4.1–2.4.2 (kinetic moments and ideal-fluid variables)](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)
