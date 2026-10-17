---
id: def-csm-dk-kinetic-macroscopic-fields
kind: definition
title: "Kinetic density, velocity, covariance stress and heat flux"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-reflection-collision-gain
  - def-countable-choice
dependency_roles:
  def-csm-dk-reflection-collision-gain: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: "https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html"
---

## Definition

Use the velocity space $\mathbb R^3$ and Lebesgue measure $dv$ fixed by [[def-csm-dk-reflection-collision-gain]]. Let $\Omega=\prod_{j=1}^3(\mathbb R/L_j\mathbb Z)$ be a flat periodic spatial domain with periods $L_j>0$ (in metres in the physical interpretation), and let $I\subseteq\mathbb R$ be an open time interval. Let $F:\Omega\times\mathbb R^3\times I\to[0,\infty)$ be a measurable number density in position and velocity. At each $(r,t)$ where the integrals below are finite, assume $0<n(r,t):=\int_{\mathbb R^3}F(r,v,t)\,dv<\infty$ and $\int |v|^3F(r,v,t)\,dv<\infty$. Fix a particle mass $m>0$ in kilograms, with number count dimensionless. In SI, $F$ has units $\mathrm{m}^{-3}(\mathrm{m\,s^{-1}})^{-3}$.

Define $(x\otimes y)_{ij}=x_i y_j$, $\nabla_r\cdot T$ by $(\nabla_r\cdot T)_i=\sum_j\partial_{r_j}T_{ij}$, and $A:B=\sum_{i,j}A_{ij}B_{ij}$. Define the number density $n$, mass density $\rho=mn$, mean velocity $u=n^{-1}\int vF\,dv$, kinetic covariance momentum flux

$$\Pi=m\int_{\mathbb R^3}(v-u)\otimes(v-u)F\,dv,$$

internal kinetic-energy density $e=\tfrac12\operatorname{tr}\Pi$, and heat-flux vector

$$q=\frac m2\int_{\mathbb R^3}|v-u|^2(v-u)F\,dv.$$

Their SI units are respectively $\mathrm{m}^{-3}$, $\mathrm{kg\,m^{-3}}$, $\mathrm{m\,s^{-1}}$, pascals, $\mathrm{J\,m^{-3}}$, and $\mathrm{J\,m^{-2}\,s^{-1}}$. The tensor $\Pi$ is symmetric because each integrand $(v-u)\otimes(v-u)$ is symmetric, and it is positive semidefinite because for every $\xi\in\mathbb R^3$, $\xi^{\mathsf T}\Pi\xi=m\int[\xi\cdot(v-u)]^2F\,dv\ge0$. It is the kinetic momentum-flux covariance; in the balance law below it enters with a plus sign, while a continuum tensile-stress variable defined from it would be $-\Pi$.
