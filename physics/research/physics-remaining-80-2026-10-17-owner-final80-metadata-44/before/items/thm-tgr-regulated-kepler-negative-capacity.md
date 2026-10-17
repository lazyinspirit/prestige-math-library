---
id: thm-tgr-regulated-kepler-negative-capacity
kind: theorem
title: "Negative Gibbs-volume capacity in a finite regulated shell"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-tgr-regulated-kepler-shell-law
dependency_roles:
  def-tgr-regulated-kepler-shell-law: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Under [[def-tgr-regulated-kepler-shell-law]], let $E=-e$, $\delta=er_0/A\in(0,1/16]$, and
$$z(\delta)=\frac{\delta^{3/2}(1-\delta)^{3/2}}{J(\delta)},\qquad \mathcal B(\delta)=\frac32+z(\delta).$$
For the Gibbs-volume entropy $S_G(E)=k_B\log\Omega(E)$ and temperature convention $1/T_G=dS_G/dE$,
$$T_G(E)=\frac{e}{k_B\mathcal B(\delta)},\qquad C_G(E):=\frac{dE}{dT_G} =-\frac{k_B\mathcal B(\delta)^2}{\mathcal B(\delta)-\delta\mathcal B'(\delta)}<0.$$
The denominator is at least $1$. This is a finite regulated mathematical branch with the stated entropy convention; it does not identify a universal operational temperature or dynamical stability.

## Facts & Assumptions

**Given:** Positive $\mu,A,r_0$, $R>16r_0$, energy $E=-e$ with $A/R<e\le A/(16r_0)$, and the Gibbs-volume convention.

[F1] The relative Hamiltonian, phase volume, and entropy convention are defined by the regulated shell item, with $\Omega(-e)=C A^3 e^{-3/2}J(er_0/A)$ for a positive constant $C$. ([[def-tgr-regulated-kepler-shell-law]])


## Proof

1.1 Write $e=-E$ and $\delta=er_0/A$. Differentiating $\log\Omega=C_1-\frac32\log e+\log J(\delta)$ with respect to $E=-e$, and using $J'(\delta)=-\delta^{1/2}(1-\delta)^{3/2}$, gives $dS_G/dE=k_B(\frac32+z)/e=k_B\mathcal B/e$. Its reciprocal is the stated positive $T_G$. [F1, algebra]

1.2 On $[1/4,1/2]\subseteq[\delta,1]$, $s^{1/2}\ge1/2$ and $(1-s)^{3/2}\ge1/4$, so $J(\delta)\ge1/32$. Also $\delta^{3/2}\le1/64$ and $(1-\delta)^{3/2}\le1$, hence $0<z\le1/2$. [F1, algebra]

2.1 Differentiating $T_G=e/[k_B\mathcal B(\delta)]$ with respect to $e$, using $d\delta/de=\delta/e$, yields
$$\frac{dT_G}{de}=\frac{\mathcal B-\delta\mathcal B'}{k_B\mathcal B^2}.$$
Since $E=-e$, inversion gives the displayed formula for $C_G$, provided $\mathcal B-\delta\mathcal B'>0$. [step 1.1, algebra]

3.1 Logarithmic differentiation of $z$ gives
$$\delta z'=\frac32z\frac{1-2\delta}{1-\delta}+z^2\le\frac32z+z^2,$$
because $0<\delta\le1/16$ makes $(1-2\delta)/(1-\delta)\le1$. Therefore
$$\mathcal B-\delta\mathcal B'=\frac32+z-\delta z' \ge\frac32-\frac z2-z^2\ge1$$
when $0<z\le1/2$. Step 2.1 now gives $C_G<0$ throughout the branch. [step 2.1, step 1.2, algebra] ∎
