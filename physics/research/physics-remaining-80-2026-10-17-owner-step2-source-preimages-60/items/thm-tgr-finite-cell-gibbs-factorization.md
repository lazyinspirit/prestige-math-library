---
id: thm-tgr-finite-cell-gibbs-factorization
kind: theorem
title: Constructed independent cell Gibbs states
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - lem-qsm-matrix-state-calculus
  - lem-qsm-finite-gibbs-kms
  - thm-tgr-electrochemical-stationarity
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-finite-gibbs-kms: mathematical-premise
  thm-tgr-electrochemical-stationarity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, Definition 3.4.4 and finite Gibbs/KMS calculation, printed pp. 74, 76–77
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7 and Chapter 2 §6, printed pp. 13–14, 24
      url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement

Let $r\ge1$ be finite. For each cell $i\in\{1,\ldots,r\}$, let $\mathcal H_i$ be a complex Hilbert space of finite dimension $d_i\ge1$, let $H_i=H_i^*$ be a Hermitian proper Hamiltonian in joules, and let $Q_i=Q_i^*$ be a dimensionless number observable whose eigenvalues lie in $\mathbb N_0$. Assume $[H_i,Q_i]=0$. Operators $H_i,Q_i$ on the total space $\mathcal H:=\bigotimes_{i=1}^r\mathcal H_i$ mean their lifts acting on the $i$th tensor factor and as the identity on the other factors; no intercell interaction is included.

Suppose the cells are sampled from one connected stationary Lorentzian domain with a timelike Killing field $\xi$, a global smooth potential $A$ and compensator $\Lambda_\xi$ satisfying $\mathcal L_\xi A=d\Lambda_\xi$, and smooth local temperature and chemical-potential fields satisfying the charged whole-future-mass-shell stationarity hypotheses of [[thm-tgr-electrochemical-stationarity]]. At cell $i$, write $N_i=\sqrt{-g(\xi,\xi)}>0$ for the dimensionless lapse, $\Phi_i=-c(\iota_\xi A-\Lambda_\xi)$ for the gauge-compensated potential in volts, $T_i>0$ for proper temperature in kelvins, and $\mu_i\in\mathbb R$ for chemical potential in joules per particle. The same theorem supplies constants $T_K>0$ and $\mu_K\in\mathbb R$ such that
$$N_iT_i=T_K,\qquad N_i\mu_i+q\Phi_i=\mu_K,$$
where $q$ is the common particle charge in coulombs.

Set $\beta_K=(k_BT_K)^{-1}>0$ in joules$^{-1}$, $\beta_i=N_i\beta_K=(k_BT_i)^{-1}$, $H_K=\sum_{i=1}^r(N_iH_i+q\Phi_iQ_i)$, and $Q=\sum_{i=1}^rQ_i$. Then the grand generator $G_K:=H_K-\mu_KQ$ is Hermitian and
$$G_K=\sum_{i=1}^rN_i(H_i-\mu_iQ_i).$$
The finite partition sums
$$Z_i:=\operatorname{Tr}_{\mathcal H_i}e^{-\beta_i(H_i-\mu_iQ_i)},\qquad Z:=\operatorname{Tr}_{\mathcal H}e^{-\beta_KG_K}$$
are positive and finite, with $Z=\prod_{i=1}^r Z_i$. The normalized Gibbs density factorizes exactly:
$$\rho:=Z^{-1}e^{-\beta_KG_K}=\bigotimes_{i=1}^r\rho_i,\qquad \rho_i:=Z_i^{-1}e^{-\beta_i(H_i-\mu_iQ_i)}.$$
It is a $\beta_K$-KMS state for the grand-generator dynamics on the full finite matrix algebra. On the neutral subalgebra $\mathcal A_0:=\{B\in\mathcal B(\mathcal H):[B,Q]=0\}$, grand-generator and physical $H_K$ dynamics coincide, so the restricted state is $\beta_K$-KMS for the physical dynamics there. This constructs only independent finite cells; it does not claim that an interacting system's reduced cell states are Gibbs states.

## Facts & Assumptions

**Given:** The finite cells, commuting local Hamiltonians and number operators, common charge and gauge reference, positive lapse and temperature, and the global stationarity hypotheses in the Statement.

[A1] For the charged geometric interface, $N=\sqrt{-g(\xi,\xi)}>0$ is dimensionless, $u=\xi/N$, $\Phi_\xi=-c(\iota_\xi A-\Lambda_\xi)$ is in volts, and $\beta=u/(k_BT)$ and $\zeta=\mu/(k_BT)$ are defined from smooth fields with $T>0$ ([[thm-tgr-electrochemical-stationarity]], Statement).

[F1] [[lem-qsm-matrix-state-calculus]]: every Hermitian matrix on a nonzero finite-dimensional complex inner-product space has a real spectral decomposition, independent of the basis inside each eigenspace; its finite trace is cyclic.

[F2] [[lem-qsm-finite-gibbs-kms]]: for a finite-dimensional Hermitian generator $G$ and $\beta>0$, $\rho_G=e^{-\beta G}/\operatorname{Tr}(e^{-\beta G})$ is stationary and is KMS for $\alpha_t(B)=e^{itG/\hbar}Be^{-itG/\hbar}$ with physical-time strip width $\beta\hbar$ seconds.

[F3] [[thm-tgr-electrochemical-stationarity]]: under its connected-domain, smooth-field, positive-temperature, global-potential-compensator and whole-mass-shell stationarity hypotheses, $NT=T_K$ and $N\mu+q\Phi_\xi=\mu_K$ for constants $T_K>0$ and $\mu_K$. Its current item is draft with a current ready Step 1 record; that records authoring readiness, not independent proof acceptance.

The QSM suppliers [F1] and [F2] are also current draft carriers with current ready Step 1 records; their proof status is not upgraded by this use.

## Proof

1.1 By [F3], for each cell $T_i=T_K/N_i$ and $\mu_i=(\mu_K-q\Phi_i)/N_i$. The geometric and thermodynamic quantities use the conventions in [A1]. Therefore $\beta_i=1/(k_BT_i)=N_i\beta_K$, and the local grand generator $G_i:=N_i(H_i-\mu_iQ_i)$ satisfies $G_i=N_iH_i+(q\Phi_i-\mu_K)Q_i$. Summing this identity gives $G_K=\sum_iG_i=H_K-\mu_KQ$. [given, A1, F3, algebra]

2.1 Each pair $H_i,Q_i$ is simultaneously diagonalizable: diagonalize $Q_i$ using [F1]; each eigenspace of $Q_i$ is invariant under $H_i$ because $H_iQ_i=Q_iH_i$; diagonalize the Hermitian restriction of $H_i$ on each of the finitely many eigenspaces. The resulting orthonormal basis of $\mathcal H_i$ diagonalizes $G_i$. The tensor products of these bases form an orthonormal basis of $\mathcal H$, and in that basis $G_K=\sum_iG_i$ has eigenvalue $\sum_i g_{i,a_i}$ on the basis vector indexed by $(a_1,\ldots,a_r)$. [given, F1, step 1.1, construct]

3.1 The finite trace in that product basis is $$Z=\sum_{a_1,\ldots,a_r}\prod_{i=1}^r e^{-\beta_Kg_{i,a_i}}=\prod_{i=1}^r\left(\sum_{a_i}e^{-\beta_Kg_{i,a_i}}\right)=\prod_{i=1}^rZ_i.$$ Each factor is a finite sum of strictly positive reals, so $0<Z_i<\infty$ and $0<Z<\infty$. Dividing each diagonal weight by this product gives $\rho=\bigotimes_i Z_i^{-1}e^{-\beta_KG_i}=\bigotimes_i\rho_i$, and $\beta_KG_i=\beta_i(H_i-\mu_iQ_i)$. [given, step 1.1, step 2.1, algebra]

4.1 Apply [F2] to the finite-dimensional Hermitian matrix $G_K$ and $\beta_K>0$: $\rho$ is a state and is KMS for $\alpha^G_t(B)=e^{itG_K/\hbar}Be^{-itG_K/\hbar}$ on $\mathcal B(\mathcal H)$. [given, F2, step 3.1]

5.1 Since $[H_K,Q]=0$, the exponentials of these two matrices commute and $e^{itG_K/\hbar}=e^{itH_K/\hbar}e^{-it\mu_KQ/\hbar}$. For $B\in\mathcal A_0$, $B$ commutes with $Q$, so $\alpha^G_t(B)=e^{itH_K/\hbar}Be^{-itH_K/\hbar}=:\alpha^H_t(B)$. The algebra $\mathcal A_0$ is closed under products, adjoints and linear combinations and is invariant under $\alpha^H_t$. Restricting the state and the same bounded strip functions from step 4.1 to $A,B\in\mathcal A_0$ proves the physical $H_K$ KMS condition there. No KMS claim for charged observables is made. [given, F2, step 1.1, step 4.1, algebra] ∎

## Remarks

All deductions are conditional on the actual interfaces in [F1]–[F3]. In particular, the charged redshift relation is used at its stated global-compensator and whole-shell hypotheses; no generic curved-spacetime quantum state is inferred.
