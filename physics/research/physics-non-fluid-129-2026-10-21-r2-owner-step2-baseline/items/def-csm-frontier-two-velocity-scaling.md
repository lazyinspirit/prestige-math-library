---
id: def-csm-frontier-two-velocity-scaling
kind: definition
title: Two-velocity periodic diffusive-scaling model
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions]
dependency_roles:
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Thomas Hillen and Amanda Swan, The Diffusion Limit of Transport Equations in Biology, Lecture Notes in Mathematics 2167, 2016"
      url: "https://www.math.ualberta.ca/~thillen/paper/HillenSwan12withStyle.pdf"
      locator: "§2.1, equations (8)–(13), for the two-velocity Goldstein–Kac system and its density/flux equations; §2.2 for periodic boundary conditions."
    - title: "Thomas Hillen and Hans G. Othmer, The Diffusion Limit of Transport Equations Derived from Velocity-Jump Processes, SIAM Journal on Applied Mathematics 61(3), 2000"
      url: "https://www-users.cse.umn.edu/~othmer/papers/hill1.pdf"
      locator: "§1, equations (1.2)–(1.4), pp. 752–753: the velocity-jump model, its density/flux balance and telegraph equation."
    - title: "Edward A. Codling, Michael J. Plank and Simon Benhamou, Random Walk Models in Biology, Journal of the Royal Society Interface 5(25), 2008"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2504494/"
      locator: "§2.7, equations (2.21)–(2.28): the symmetric two-velocity switching model, telegraph equation and convention for the turning rate."
---

## Definition

Fix a period $L>0$ metres and let $\mathbb T_L:=\mathbb R/(L\mathbb Z)$. A smooth periodic function on $\mathbb T_L$ means an $L$-periodic $C^\infty$ function on $\mathbb R$. For a periodic integrable function $g$, use the normalized spatial measure $dm_L=dx/L$ on a period and write

$$\|g\|_{2,L}^2:=\frac1L\int_0^L |g(x)|^2\,dx.$$

Elements of $L^2(\mathbb T_L,dm_L;\mathbb C)$ are equivalence classes modulo equality almost everywhere. For $n\in\mathbb Z$, define the wave number $\kappa_n:=2\pi n/L$, character $e_n(x):=\exp(i\kappa_n x)$, and Fourier coefficient $\widehat g(n):=L^{-1}\int_0^L g(x)e^{-i\kappa_nx}\,dx$. These formulas are independent of the chosen representative of $x$ in $\mathbb T_L$.

Let $c>0$ be a speed in $\mathrm{m\,s^{-1}}$, let $\lambda>0$ be a switching-rate parameter in $\mathrm{s^{-1}}$, and let $\epsilon>0$ be dimensionless. For smooth real initial data $f_{+,0},f_{-,0}$ on $\mathbb T_L$, the two-velocity periodic model is the linear Cauchy problem below; when these functions represent physical densities, also require $f_{\pm,0}\ge0$.

$$\partial_t f_+^\epsilon+\frac{c}{\epsilon}\partial_x f_+^\epsilon=\frac{\lambda}{\epsilon^2}(f_-^\epsilon-f_+^\epsilon),\qquad \partial_t f_-^\epsilon-\frac{c}{\epsilon}\partial_x f_-^\epsilon=\frac{\lambda}{\epsilon^2}(f_+^\epsilon-f_-^\epsilon),\qquad f_\pm^\epsilon(\cdot,0)=f_{\pm,0}.$$

Here $x\in\mathbb T_L$, $t\ge0$ is measured in seconds, and $f_\pm$ have the units of a linear number density, $\mathrm{m^{-1}}$. The speed magnitude is $c/\epsilon$, and from either velocity state the rate of switching to the opposite state is $\lambda/\epsilon^2$. Define the total density $\rho^\epsilon:=f_+^\epsilon+f_-^\epsilon$, the flux $j^\epsilon:=(c/\epsilon)(f_+^\epsilon-f_-^\epsilon)$, and the total mass $M^\epsilon(t):=\int_0^L\rho^\epsilon(x,t)\,dx$.

## Definition references

[[def-l-p-space-as-a-quotient-by-null-functions]]

