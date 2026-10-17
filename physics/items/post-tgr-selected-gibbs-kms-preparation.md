---
id: post-tgr-selected-gibbs-kms-preparation
kind: postulate
title: Actually constructed Gibbs/KMS preparation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - post-tgr-stationary-equilibrium
  - def-tgr-framework-units
  - thm-tgr-finite-cell-gibbs-factorization
  - def-qsm-kms-state
  - def-countable-choice
dependency_roles:
  post-tgr-stationary-equilibrium: formulation-prerequisite
  def-tgr-framework-units: formulation-prerequisite
  thm-tgr-finite-cell-gibbs-factorization: mathematical-premise
  def-qsm-kms-state: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "An adopted canonical state assignment for finitely many independent finite-dimensional cells in one selected stationary bath, conditional on the exact global stationarity and potential hypotheses of the finite-cell theorem; no generic curved-spacetime or infinite-volume KMS state, thermalization dynamics, or empirical realization."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected Summer 2016 lecture notes, §3.4"
      url: https://arxiv.org/pdf/1311.2717
      locator: "Complete 157-page lecture-note PDF; Definition 3.4.4 and finite Gibbs/KMS discussion, printed pp. 74–77."
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, author-hosted lecture notes, Chapter 1 §7"
      url: https://arxiv.org/pdf/math-ph/0107009
      locator: "Complete 36-page lecture-note PDF; Chapter 1 §7, printed p. 13: KMS strip boundary identity and norm bound. The finite Gibbs/KMS statement used here is proved in the local finite-cell supplier."
---

## Postulate

Adopt the selected stationary bath of [[post-tgr-stationary-equilibrium]] on its connected smooth Lorentzian domain. A finite-cell preparation in this item means exactly the setup of [[thm-tgr-finite-cell-gibbs-factorization]]: finitely many $r\ge1$ noninteracting cells with finite-dimensional complex Hilbert spaces $\mathcal H_i$, Hermitian proper Hamiltonians $H_i$ in joules, and dimensionless Hermitian number matrices $Q_i$ with nonnegative integer eigenvalues and $[H_i,Q_i]=0$. Their tensor product is $\mathcal H=\bigotimes_{i=1}^r\mathcal H_i$; each cell operator acts as the identity on the other factors.

Choose a placement map $p:\{1,\ldots,r\}\to O$ assigning each cell to a spacetime event, and write $p_i:=p(i)$. Let $N_\xi(x):=\sqrt{-g_x(\xi_x,\xi_x)}$ be the dimensionless lapse field, and let $T:O\to(0,\infty)$ and $\mu:O\to\mathbb R$ be the smooth proper-temperature and chemical-potential fields in the stationarity hypotheses. Evaluate them at the assigned event:
$$N_i:=N_\xi(p_i),\qquad T_i:=T(p_i),\qquad \mu_i:=\mu(p_i).$$
Assume the same connected stationary geometry, selected future timelike Killing field $\xi$, common charge $q$ in coulombs, global smooth potential $A$, global compensator $\Lambda_\xi$ satisfying $\mathcal L_\xi A=d\Lambda_\xi$, and charged whole-future-mass-shell stationarity hypotheses as in that theorem; no patchwise potential is substituted. Using the length-coordinate convention and $c>0$ in metres per second from [[def-tgr-framework-units]], define the global gauge-compensated potential scalar $\Phi_\xi:O\to\mathbb R$ by $\Phi_\xi(x):=-c(\iota_\xi A-\Lambda_\xi)(x)$ in volts, and set $\Phi_i:=\Phi_\xi(p_i)$. The common parameters satisfy $N_iT_i=T_K>0$ and $N_i\mu_i+q\Phi_i=\mu_K$. The theorem's geometric stationarity argument is conditional on the Axiom of Countable Choice, $\mathrm{AC}_\omega$ ([[def-countable-choice]]); no stronger choice axiom is used here.

Put $\beta_K=(k_BT_K)^{-1}$ in joules$^{-1}$, $\beta_i=N_i\beta_K=(k_BT_i)^{-1}$, $H_K=\sum_i(N_iH_i+q\Phi_iQ_i)$, $Q=\sum_iQ_i$, and $G_K=H_K-\mu_KQ=\sum_iN_i(H_i-\mu_iQ_i)$. The finite-cell theorem constructs

$$Z_i=\operatorname{Tr}_{\mathcal H_i}e^{-\beta_i(H_i-\mu_iQ_i)},\qquad Z=\operatorname{Tr}_{\mathcal H}e^{-\beta_KG_K}=\prod_i Z_i,$$

$$\rho_i=Z_i^{-1}e^{-\beta_i(H_i-\mu_iQ_i)},\qquad \rho=Z^{-1}e^{-\beta_KG_K}=\bigotimes_i\rho_i.$$

For $X\in\mathcal B(\mathcal H)$, write $\omega_\rho(X)=\operatorname{Tr}(\rho X)$ and define the Killing-time grand-generator dynamics, with $t_K$ in seconds, by

$$\alpha^G_{t_K}(X)=e^{it_KG_K/\hbar}Xe^{-it_KG_K/\hbar},\qquad \hbar>0\text{ in joule-seconds}.$$

The referenced finite-dimensional theorem proves that $\rho$ is a normalized positive state and is $\beta_K$-KMS for $\alpha^G$; the physical-time strip has width $\hbar\beta_K$ seconds under [[def-qsm-kms-state]]. Its restriction to observables commuting with $Q$ is also KMS for the physical $H_K$ dynamics. This postulate adopts that actually constructed finite state as the state assignment for this specified model. It asserts no state on an infinite-volume algebra, no trace-class stress exponential in generic curved quantum field theory, no approach to equilibrium, and no observed preparation or material realization.
