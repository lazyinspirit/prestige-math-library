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

Assume the prescribed static background in [[post-tgr-fixed-static-gas-preparation]] and consider its two alternative classical branches. Let
$$Z_1(\beta_K)=\int_B\int_{\mathbb R^3}e^{-\beta_K\mathcal N(x)E(\hat p)}\frac{dV_h(x)\,d^3\hat p}{h_*^3},\qquad dV_h=\sqrt{\det(h_{ij}(x))}\,d^3x.$$
Then $0<Z_1<\infty$. In the fixed-particle canonical branch, for the selected integer $M\ge1$, the normalizer is $Z_M=Z_1^M/M!$. In the grand-canonical branch, for dimensionless fugacity $z>0$, the normalizer is $\Xi=e^{zZ_1}$.

For either classical branch, define its coefficient $\alpha$ by $\alpha=M/Z_1$ in the fixed-particle branch and $\alpha=z$ in the grand-canonical branch. Its proper local expected particle phase-space density is
$$f_\alpha(x,\hat p)=\alpha h_*^{-3}e^{-\beta_K\mathcal N(x)E(\hat p)}.$$
Define proper local number density $n=\int f_\alpha\,d^3\hat p$, energy density $\varepsilon=\int E f_\alpha\,d^3\hat p$, and isotropic pressure $P=\frac13\int\hat p\cdot\nabla_{\hat p}E\,f_\alpha\,d^3\hat p$. With $T_K=(k_B\beta_K)^{-1}$, both branches satisfy
$$T_{\rm loc}(x)=\frac{T_K}{\mathcal N(x)},\qquad P=nk_BT_{\rm loc},\qquad \partial_iP=-(\varepsilon+P)\partial_i\log\mathcal N.$$
Only in the grand-canonical branch, if $z=e^{\beta_K\mu_K}$ for a Killing-normalized chemical parameter $\mu_K\in\mathbb R$ measured in joules, rewriting the local weight as $e^{-\beta_K\mathcal N(E-\mu_{\rm loc})}$ gives $\mu_{\rm loc}=\mu_K/\mathcal N$.

In the finite fermion-mode branch, let $E_j=\mathcal N_j\epsilon_j$ with $\epsilon_j=\sqrt{m^2c^4+c^2|\hat p_j|^2}$, $\mathcal N_j>0$, $\beta_K>0$, and $\mu_K\in\mathbb R$. The normalized diagonal state has
$$\langle n_j\rangle=\frac{1}{e^{\beta_K(E_j-\mu_K)}+1}=\frac{1}{e^{\beta_j(\epsilon_j-\mu_j)}+1},\qquad \beta_j=\beta_K\mathcal N_j,\quad \mu_j=\frac{\mu_K}{\mathcal N_j}.$$
Both conclusions are conditional model deductions on the fixed background or finite supplied mode set. They assert no Einstein equation, gas backreaction, arbitrary curved-space spectrum, or observed equilibrium.

## Facts & Assumptions

**Given:** The compact finite spatial region, smooth static metric/lapse bounds, positive particle mass and canonical parameters, and exactly one selected preparation: fixed-particle canonical, grand-canonical, or the separate finite-mode branch.

[A1] The Postulate supplies $g=-\mathcal N^2(dx^0)^2+h_{ij}dx^idx^j$, $0<\mathcal N_0\le\mathcal N\le\mathcal N_1$, the classical local energy $E(\hat p)$ and either fixed particle count $M$ or grand fugacity $z$, or the separate finite mode energies and occupancy basis. ([[post-tgr-fixed-static-gas-preparation]])

[F1] For the bounded-lapse static metric and classical gas, the one-particle integral is finite and positive; the fixed-particle branch has $Z_M=Z_1^M/M!$, and the grand-canonical branch has $\Xi=e^{zZ_1}$ with $f_z=z h_*^{-3}e^{-\beta_K\mathcal N E}$. Its local identities include $T_{\rm loc}=T_K/\mathcal N$, $P=nk_BT_{\rm loc}$, $\partial_iP=-(\varepsilon+P)\partial_i\log\mathcal N$, and, when $z=e^{\beta_K\mu_K}$, $\mu_{\rm loc}=\mu_K/\mathcal N$. ([[lem-tgr-static-gas-finite-normalization]])

[F2] For a finite bit-string occupation basis and finite real energies, the trace is $\prod_j(1+e^{-\beta(E_j-\mu)})$ and each occupation marginal is $(e^{\beta(E_j-\mu)}+1)^{-1}$. ([[lem-tgr-finite-static-mode-occupation-trace]])

## Proof

1.1 The metric, positive lapse bounds, compact finite-volume region, and positive parameters in [A1] meet the hypotheses of [F1], which gives $0<Z_1<\infty$ and the normalizer for whichever classical branch is selected. In the fixed-particle branch, put $d\lambda_1=dV_h\,d^3\hat p/h_*^3$. The normalized $M$-particle Gibbs density relative to $d\lambda_1^{\otimes M}/M!$ is $M!Z_1^{-M}\prod_{a=1}^M e^{-\beta_K\mathcal N(x_a)E(\hat p_a)}$. Its one-particle marginals are $Z_1^{-1}e^{-\beta_K\mathcal N E}d\lambda_1$, so summing their densities gives $f_M=(M/Z_1)h_*^{-3}e^{-\beta_K\mathcal N E}$. For comparison only, choose any $z_0>0$ in the grand-canonical result [F1] and set $f_{z_0}=z_0h_*^{-3}e^{-\beta_K\mathcal N E}$; then $f_M=(M/(z_0Z_1))f_{z_0}$. This positive constant scales $n$, $\varepsilon$, $P$, and $\partial_iP$ equally, while $T_{\rm loc}$ is unchanged because it depends only on $\beta_K\mathcal N$. Therefore the pressure and hydrostatic identities from [F1] hold for $f_M$ too. The comparison does not introduce fugacity into the fixed-particle preparation. [given, A1, F1, algebra]

1.2 For the finite mode set, apply [F2] with the finite real values $E_j=\mathcal N_j\epsilon_j$, $\beta=\beta_K$, and $\mu=\mu_K$. This gives a positive finite trace, a normalized diagonal state, and $\langle n_j\rangle=(e^{\beta_K(\mathcal N_j\epsilon_j-\mu_K)}+1)^{-1}$. [A1, F2]

2.1 In the grand-canonical branch only, $z=e^{\beta_K\mu_K}$ makes $z e^{-\beta_K\mathcal N E}=e^{-\beta_K\mathcal N(E-\mu_K/\mathcal N)}$, so the local chemical parameter is $\mu_{\rm loc}=\mu_K/\mathcal N$. [A1, F1, step 1.1, algebra]

3.1 The definitions $\beta_j=\beta_K\mathcal N_j$ and $\mu_j=\mu_K/\mathcal N_j$ imply $\beta_j(\epsilon_j-\mu_j)=\beta_K(\mathcal N_j\epsilon_j-\mu_K)$. Substitution yields the stated local-parameter occupation exactly for each supplied mode. [step 1.2, algebra] ∎
