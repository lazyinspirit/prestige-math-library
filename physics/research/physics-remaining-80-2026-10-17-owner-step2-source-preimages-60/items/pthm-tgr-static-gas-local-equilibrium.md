---
id: pthm-tgr-static-gas-local-equilibrium
kind: physics-theorem
title: "Constructed static gas redshift and hydrostatics"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgr-fixed-static-gas-preparation
  - lem-tgr-static-gas-finite-normalization
  - lem-tgr-finite-static-mode-occupation-trace
dependency_roles:
  post-tgr-fixed-static-gas-preparation: physical-assumption
  lem-tgr-static-gas-finite-normalization: mathematical-premise
  lem-tgr-finite-static-mode-occupation-trace: mathematical-premise
justified_by: []
physical_scope: "Exact classical ideal-gas normalization, redshifted local thermodynamic parameters, pressure and hydrostatic identity on the prescribed bounded-lapse static background, plus the separate finite-mode trace identity. No Einstein backreaction, generic curved-space mode spectrum, self-gravitating star, or empirical equilibrium assertion."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
      locator: "Complete 36-page paper retrieved; §III, PDF pp. 8–11, derives the Maxwell–Jüttner law, local pressure/energy relations, Tolman/Klein parameters and hydrostatic condition for a self-gravitating model. The local proof here uses a prescribed background and explicitly excludes backreaction."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete 191-page notes retrieved; §§1.3–1.4 and §§3.5–3.6, PDF pp. 23–34 and 96–108, for canonical weights, finite partition factors and Fermi occupations."
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas"
      url: "https://arxiv.org/pdf/1908.10806"
      locator: "Complete 62-page paper retrieved; §III, PDF pp. 19–21, for relativistic local Fermi–Dirac energy, temperature and chemical-potential parameters. The result below is restricted to explicitly supplied finite modes."
proof_strategy: direct
verification:
  precheck: pass
---


## Statement

Assume the prescribed static background and either preparation branch in [[post-tgr-fixed-static-gas-preparation]]. In the classical branch, the one-particle Killing-energy partition integral is strictly positive and finite; for $M\ge1$ identical classical particles $Z_M=Z_1^M/M!$, and grand fugacity $z>0$ gives $\Xi=e^{zZ_1}$. With $f(x,\hat p)=zh_*^{-3}e^{-\beta_K\mathcal N(x)E(\hat p)}$, define proper local number density $n=\int f\,d^3\hat p$, energy density $\varepsilon=\int E f\,d^3\hat p$, and isotropic pressure $P=\frac13\int\hat p\cdot\nabla_{\hat p}E\,f\,d^3\hat p$. Then
$$T_{\rm loc}(x)=\frac{T_K}{\mathcal N(x)},\qquad P=nk_BT_{\rm loc},\qquad \partial_iP=-(\varepsilon+P)\partial_i\log\mathcal N,$$
where $T_K=(k_B\beta_K)^{-1}$. If $z=e^{\beta_K\mu_K}$, then $\mu_{\rm loc}=\mu_K/\mathcal N$.

In the finite fermion-mode branch, let $E_j=\mathcal N_j\epsilon_j$ with $\epsilon_j=\sqrt{m^2c^4+c^2|\hat p_j|^2}$, $\mathcal N_j>0$, $\beta_K>0$, and $\mu_K\in\mathbb R$. The normalized diagonal state has
$$\langle n_j\rangle=\frac{1}{e^{\beta_K(E_j-\mu_K)}+1}=\frac{1}{e^{\beta_j(\epsilon_j-\mu_j)}+1},\qquad \beta_j=\beta_K\mathcal N_j,\quad \mu_j=\frac{\mu_K}{\mathcal N_j}.$$
Both conclusions are conditional model deductions on the fixed background or finite supplied mode set. They assert no Einstein equation, gas backreaction, arbitrary curved-space spectrum, or observed equilibrium.

## Facts & Assumptions

**Given:** The compact finite spatial region, smooth static metric/lapse bounds, positive particle mass and canonical parameters, and the selected classical or finite-mode preparation.

[A1] The Postulate supplies $g=-\mathcal N^2(dx^0)^2+h_{ij}dx^idx^j$, $0<\mathcal N_0\le\mathcal N\le\mathcal N_1$, the classical local energy $E(\hat p)$, or the finite mode energies and occupancy basis. ([[post-tgr-fixed-static-gas-preparation]])

[F1] For the bounded-lapse static metric and classical canonical gas, $0<Z_1<\infty$, all required moments and derivatives exist, $Z_M=Z_1^M/M!$, $\Xi=e^{zZ_1}$, $T_{\rm loc}=T_K/\mathcal N$, $P=nk_BT_{\rm loc}$, $\partial_iP=-(\varepsilon+P)\partial_i\log\mathcal N$, and $\mu_{\rm loc}=\mu_K/\mathcal N$. ([[lem-tgr-static-gas-finite-normalization]])

[F2] For a finite bit-string occupation basis and finite real energies, the trace is $\prod_j(1+e^{-\beta(E_j-\mu)})$ and each occupation marginal is $(e^{\beta(E_j-\mu)}+1)^{-1}$. ([[lem-tgr-finite-static-mode-occupation-trace]])

## Proof

1.1 In the classical branch, the metric, lapse lower bound, compact finite-volume region, and positive parameters in [A1] meet the hypotheses of [F1]. Thus the canonical normalization and grand/fixed-particle partition formulas hold, and [F1] gives the local definitions and identities for $T_{\rm loc}$, $P$, and $\varepsilon$. [given, A1, F1]

1.2 For the finite mode set, apply [F2] with the finite real values $E_j=\mathcal N_j\epsilon_j$, $\beta=\beta_K$, and $\mu=\mu_K$. This gives a positive finite trace, a normalized diagonal state, and $\langle n_j\rangle=(e^{\beta_K(\mathcal N_j\epsilon_j-\mu_K)}+1)^{-1}$. [A1, F2]

2.1 The $x$-dependence in the classical preparation enters through $H_K=\mathcal N(x)E(\hat p)$, so [F1] identifies $\beta_{\rm loc}=\beta_K\mathcal N$ and $T_{\rm loc}=1/(k_B\beta_{\rm loc})=T_K/\mathcal N$. Substituting $z=e^{\beta_K\mu_K}$ into the same local weight gives $\mu_{\rm loc}=\mu_K/\mathcal N$. The pressure and hydrostatic identities are exactly those proved in [F1]. [A1, F1, step 1.1, algebra]

3.1 The definitions $\beta_j=\beta_K\mathcal N_j$ and $\mu_j=\mu_K/\mathcal N_j$ imply $\beta_j(\epsilon_j-\mu_j)=\beta_K(\mathcal N_j\epsilon_j-\mu_K)$. Substitution yields the stated local-parameter occupation exactly for each supplied mode. [step 1.2, algebra] ∎
