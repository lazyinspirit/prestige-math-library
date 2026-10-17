---
id: thm-tgr-finite-cell-gibbs-factorization
kind: theorem
title: Constructed independent cell Gibbs states
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - lem-qsm-matrix-state-calculus
  - lem-qsm-finite-gibbs-kms
  - thm-tgr-electrochemical-stationarity
  - def-countable-choice
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-finite-gibbs-kms: mathematical-premise
  thm-tgr-electrochemical-stationarity: mathematical-premise
  def-countable-choice: mathematical-premise
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

Let $(M,g)$ be a smooth time-oriented Lorentzian four-manifold with signature $(-,+,+,+)$, and let $O\subseteq M$ be a connected open set on which a smooth future-directed timelike Killing field $\xi$ is defined. Use length coordinates $x^0=ct$ and the corresponding dimensionless components of $\xi$. Define its dimensionless lapse $N(x):=\sqrt{-g_x(\xi_x,\xi_x)}>0$. Let $c>0$ be the speed of light in $\mathrm{m\,s^{-1}}$, $k_B>0$ Boltzmann's constant in $\mathrm{J\,K^{-1}}$, and let $A$ be a global smooth real one-form with SI components in tesla-metres, $F:=dA$ with components in teslas, and $\Lambda_\xi:O\to\mathbb R$ a global smooth compensator in tesla-metres with $\mathcal L_\xi A=d\Lambda_\xi$. Define $\Phi_\xi(x):=-c\bigl((\iota_\xi A)_x-\Lambda_\xi(x)\bigr)$ in volts. Let $T:O\to(0,\infty)$ and $\mu:O\to\mathbb R$ be smooth fields in kelvins and joules per particle. Fix a common particle rest mass $m>0$ in kilograms and charge $q\in\mathbb R$ in coulombs, put $M:=mc^2>0$ in joules, and define $u:=\xi/N$, $\beta:=u/(k_BT)$ in $\mathrm{J^{-1}}$, and $\zeta:=\mu/(k_BT)$ dimensionlessly. On the future massive shell $\mathcal P_M^+(O):=\{(x,P)\in TO:g_x(P,P)=-M^2,\ P\text{ future-directed}\}$, where $P$ has energy-vector units and $g_x(P,P)$ has units $\mathrm{J^2}$, let $f(x,P):=\exp\bigl(\zeta(x)+g_x(\beta(x),P)\bigr)$, as defined for the same charged data in [[thm-tgr-electrochemical-stationarity]], and assume the exact whole-shell stationarity condition $\mathcal L_{F,q}f(x,P)=0$ for every $(x,P)\in\mathcal P_M^+(O)$, where $\mathcal L_{F,q}$ is the charged transport field in that supplier's formulation. This is the stationarity premise of [[thm-tgr-electrochemical-stationarity]]. Choose a cell-location map $\chi:\{1,\ldots,r\}\to O$ and set $x_i:=\chi(i)$. Define the lapse, compensated potential, proper temperature, and chemical potential at cell $i$ by evaluation:
$$N_i:=N(x_i),\qquad \Phi_i:=\Phi_\xi(x_i),\qquad T_i:=T(x_i),\qquad \mu_i:=\mu(x_i).$$
The same theorem supplies constants $T_K>0$ and $\mu_K\in\mathbb R$ such that
$$N_iT_i=T_K,\qquad N_i\mu_i+q\Phi_i=\mu_K,$$
where $q$ is the common particle charge in coulombs. This use of the charged smooth-geometry supplier retains its explicit $\mathrm{AC}_\omega$ assumption.

Set $\beta_K=(k_BT_K)^{-1}>0$ in joules$^{-1}$, $\beta_i=N_i\beta_K=(k_BT_i)^{-1}$, $H_K=\sum_{i=1}^r(N_iH_i+q\Phi_iQ_i)$, and $Q=\sum_{i=1}^rQ_i$. Then the grand generator $G_K:=H_K-\mu_KQ$ is Hermitian and
$$G_K=\sum_{i=1}^rN_i(H_i-\mu_iQ_i).$$
The finite partition sums
$$Z_i:=\operatorname{Tr}_{\mathcal H_i}e^{-\beta_i(H_i-\mu_iQ_i)},\qquad Z:=\operatorname{Tr}_{\mathcal H}e^{-\beta_KG_K}$$
are positive and finite, with $Z=\prod_{i=1}^r Z_i$. The normalized Gibbs density factorizes exactly:
$$\rho:=Z^{-1}e^{-\beta_KG_K}=\bigotimes_{i=1}^r\rho_i,\qquad \rho_i:=Z_i^{-1}e^{-\beta_i(H_i-\mu_iQ_i)}.$$
It is a $\beta_K$-KMS state for the grand-generator dynamics on the full finite matrix algebra. On the neutral subalgebra $\mathcal A_0:=\{B\in\mathcal B(\mathcal H):[B,Q]=0\}$, grand-generator and physical $H_K$ dynamics coincide, so the restricted state is $\beta_K$-KMS for the physical dynamics there. This constructs only independent finite cells; it does not claim that an interacting system's reduced cell states are Gibbs states.

## Facts & Assumptions

**Given:** The finite cells, commuting local Hamiltonians and number operators, common charge and gauge reference, positive lapse and temperature, and the global stationarity hypotheses in the Statement.

[A1] The cell-location map is $\chi:\{1,\ldots,r\}\to O$, $x_i=\chi(i)$, and $N_i=N(x_i)$, $\Phi_i=\Phi_\xi(x_i)$, $T_i=T(x_i)$, and $\mu_i=\mu(x_i)$. On $O$, $N=\sqrt{-g(\xi,\xi)}>0$, $u=\xi/N$, $\Phi_\xi=-c(\iota_\xi A-\Lambda_\xi)$, $\beta=u/(k_BT)$, and $\zeta=\mu/(k_BT)$. The exact stationarity premise is $\mathcal L_{F,q}f=0$ at every future-shell point for $f(x,P)=\exp(\zeta(x)+g_x(\beta(x),P))$ on $g(P,P)=-M^2$ with $P$ future-directed, in the charged transport formulation used by [[thm-tgr-electrochemical-stationarity]]; the global compensator is required for its constants.

[A2] [[def-countable-choice]] states that every countable family of nonempty sets has a choice function. It is the explicit foundational assumption of the smooth charged-geometry carrier used by [[thm-tgr-electrochemical-stationarity]]; this theorem and its consumers retain that assumption, with no stronger choice principle.

[F1] [[lem-qsm-matrix-state-calculus]]: every Hermitian matrix on a nonzero finite-dimensional complex inner-product space has a real spectral decomposition, independent of the basis inside each eigenspace; its finite trace is cyclic.

[F2] [[lem-qsm-finite-gibbs-kms]]: for a finite-dimensional Hermitian generator $G$ and $\beta>0$, $\rho_G=e^{-\beta G}/\operatorname{Tr}(e^{-\beta G})$ is stationary and is KMS for $\alpha_t(B)=e^{itG/\hbar}Be^{-itG/\hbar}$ with physical-time strip width $\beta\hbar$ seconds.

[F3] [[thm-tgr-electrochemical-stationarity]]: under the connected-domain and smooth-field hypotheses, stationarity means $\mathcal L_{F,q}f=0$ on the entire future massive shell for $f(x,P)=\exp(\zeta(x)+g_x(\beta(x),P))$; with the global potential compensator it yields constants $T_K>0$ and $\mu_K$ such that $NT=T_K$ and $N\mu+q\Phi_\xi=\mu_K$ throughout $O$. Evaluation at $x_i=\chi(i)$ gives the cell relations. This supplier carries [A2]. Its current item is draft with a current ready Step 1 record; that records authoring readiness, not independent proof acceptance.

The QSM suppliers [F1] and [F2] are also current draft carriers with current ready Step 1 records; their proof status is not upgraded by this use.

## Proof

1.1 Apply [F3] under the inherited smooth charged-geometry assumption [A2] and the exact whole-shell stationarity premise in [A1]. For each cell $T_i=T_K/N_i$ and $\mu_i=(\mu_K-q\Phi_i)/N_i$. The geometric and thermodynamic quantities use the conventions in [A1]. Therefore $\beta_i=1/(k_BT_i)=N_i\beta_K$, and the local grand generator $G_i:=N_i(H_i-\mu_iQ_i)$ satisfies $G_i=N_iH_i+(q\Phi_i-\mu_K)Q_i$. Summing this identity gives $G_K=\sum_iG_i=H_K-\mu_KQ$. [given, A1, A2, F3, algebra]

2.1 Each pair $H_i,Q_i$ is simultaneously diagonalizable: diagonalize $Q_i$ using [F1]; each eigenspace of $Q_i$ is invariant under $H_i$ because $H_iQ_i=Q_iH_i$; diagonalize the Hermitian restriction of $H_i$ on each of the finitely many eigenspaces. The resulting orthonormal basis of $\mathcal H_i$ diagonalizes $G_i$. The tensor products of these bases form an orthonormal basis of $\mathcal H$, and in that basis $G_K=\sum_iG_i$ has eigenvalue $\sum_i g_{i,a_i}$ on the basis vector indexed by $(a_1,\ldots,a_r)$. [given, F1, step 1.1, construct]

3.1 The finite trace in that product basis is $$Z=\sum_{a_1,\ldots,a_r}\prod_{i=1}^r e^{-\beta_Kg_{i,a_i}}=\prod_{i=1}^r\left(\sum_{a_i}e^{-\beta_Kg_{i,a_i}}\right)=\prod_{i=1}^rZ_i.$$ Each factor is a finite sum of strictly positive reals, so $0<Z_i<\infty$ and $0<Z<\infty$. Dividing each diagonal weight by this product gives $\rho=\bigotimes_i Z_i^{-1}e^{-\beta_KG_i}=\bigotimes_i\rho_i$, and $\beta_KG_i=\beta_i(H_i-\mu_iQ_i)$. [given, step 1.1, step 2.1, algebra]

4.1 Apply [F2] to the finite-dimensional Hermitian matrix $G_K$ and $\beta_K>0$: $\rho$ is a state and is KMS for $\alpha^G_t(B)=e^{itG_K/\hbar}Be^{-itG_K/\hbar}$ on $\mathcal B(\mathcal H)$. [given, F2, step 3.1]

5.1 Since $[H_K,Q]=0$, the exponentials of these two matrices commute and $e^{itG_K/\hbar}=e^{itH_K/\hbar}e^{-it\mu_KQ/\hbar}$. For $B\in\mathcal A_0$, $B$ commutes with $Q$, so $\alpha^G_t(B)=e^{itH_K/\hbar}Be^{-itH_K/\hbar}=:\alpha^H_t(B)$. The algebra $\mathcal A_0$ is closed under products, adjoints and linear combinations and is invariant under $\alpha^H_t$. Restricting the state and the same bounded strip functions from step 4.1 to $A,B\in\mathcal A_0$ proves the physical $H_K$ KMS condition there. No KMS claim for charged observables is made. [given, F2, step 1.1, step 4.1, algebra] ∎

## Remarks

All deductions are conditional on the actual interfaces in [F1]–[F3]. In particular, the charged redshift relation is used at its stated global-compensator and whole-shell hypotheses; no generic curved-spacetime quantum state is inferred.
