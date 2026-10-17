---
id: ex-tgr-independent-redshifted-cells
kind: example
title: Independent redshifted finite cells
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 10
deps:
  - post-tgr-stationary-equilibrium
  - post-tgr-selected-gibbs-kms-preparation
  - pthm-tgr-local-kms-clock-temperature
  - def-tgr-framework-units
  - def-tgr-charged-liouville-data
  - thm-tgr-electrochemical-stationarity
  - thm-tgr-finite-cell-gibbs-factorization
  - def-countable-choice
dependency_roles:
  post-tgr-stationary-equilibrium: physical-assumption
  post-tgr-selected-gibbs-kms-preparation: physical-assumption
  pthm-tgr-local-kms-clock-temperature: physical-result
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-charged-liouville-data: formulation-prerequisite
  thm-tgr-electrochemical-stationarity: mathematical-premise
  thm-tgr-finite-cell-gibbs-factorization: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "An exact two-cell finite-dimensional Gibbs/KMS construction at two points of a Rindler stationary domain, conditional on the adopted bath and the specified neutral whole-shell stationarity input; no measured realization or interacting/infinite-volume state."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected Summer 2016 lecture notes, §3.4"
      url: https://arxiv.org/pdf/1311.2717
      locator: "Complete 157-page lecture-note PDF; finite Gibbs/KMS strip calculation, printed pp. 74–77."
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, author-hosted lecture notes, Chapter 1 §7"
      url: https://arxiv.org/pdf/math-ph/0107009
      locator: "Complete 36-page lecture-note PDF; Chapter 1 §7, printed p. 13: KMS strip boundary identity and norm bound. The positive orbitwise time-rescaling used here is proved in [[pthm-tgr-local-kms-clock-temperature]]; the source's rescaling sentence for $\\alpha_{\\gamma t}$ has the reciprocal factor and is not relied upon."
---

## Example

Let $L>0$ be a length in metres and $T_K>0$ a reference temperature in kelvins. On the connected open Rindler domain $O=\mathbb R_{x^0}\times(0,\infty)_x\times\mathbb R_y\times\mathbb R_z$, use length coordinates $x^0=ct$ and the metric

$$ds^2=-\left(\frac{x}{L}\right)^2(dx^0)^2+dx^2+dy^2+dz^2.$$

Choose the future direction of increasing $x^0$ and the Killing field $\xi=\partial_{x^0}$. The selected lapse is $N(x)=x/L$. Define $\beta_K:=(k_BT_K)^{-1}>0$ in joules$^{-1}$ and adopt the stationary-bath temperature field $T(x)=T_KL/x$, so the inverse-temperature vector is $\beta=\beta_K\xi=\xi/(k_BT_K)$. For the global-stationarity input of [[thm-tgr-finite-cell-gibbs-factorization]], use an auxiliary neutral species with rest mass $m>0$, charge $q=0$, chemical potential $\mu=0$, global potential $A=0$, and compensator $\Lambda_\xi=0$. This auxiliary kinetic sector is a supplier hypothesis for the finite-cell construction; it is not identified with the two quantum cells.

Set $x_1:=L$, $x_2:=2L$ and place the cells at $p_i:=(x^0=0,x=x_i,y=0,z=0)\in O$, as in the placement map of [[post-tgr-selected-gibbs-kms-preparation]]. For $t_K,\tau\in\mathbb R$, define
$$\gamma_i(t_K):=(ct_K,x_i,0,0),\qquad \Gamma_i(\tau):=(c\tau/N_i,x_i,0,0).$$
Here $t_K$ is the Killing-flow parameter in seconds and $\tau$ is proper time in seconds. Each $\gamma_i$ is a smooth future-directed timelike integral curve of $c\xi$ through $p_i$; since $N_i=x_i/L$ is constant on it, $\Gamma_i(\tau)=\gamma_i(\tau/N_i)$ and $g(d\Gamma_i/d\tau,d\Gamma_i/d\tau)=-c^2$. Thus $\tau=N_it_K$ is the proper-time relation on the two worldlines. For each $i\in\{1,2\}$ take $\mathcal H_i=\mathbb C^2$ with an orthonormal basis $\{|0_i\rangle,|1_i\rangle\}$, let $Q_i=0$, and set

$$H_i=\Delta_i|1_i\rangle\langle1_i|,\qquad \Delta_i>0\text{ joules}.$$

Set $q=0$ for the cells and use $\mu_i=0$. Then $N_1=1$, $N_2=2$, $T_1=T_K$, and $T_2=T_K/2$. With $\beta_i=N_i\beta_K=(k_BT_i)^{-1}$, the exact local partition functions and states are

$$Z_i=1+e^{-\beta_i\Delta_i},\qquad \rho_i=\frac{|0_i\rangle\langle0_i|+e^{-\beta_i\Delta_i}|1_i\rangle\langle1_i|}{Z_i}.$$

The total state and Killing-time generator are

$$\rho=\rho_1\otimes\rho_2=\frac{e^{-\beta_K(H_1+2H_2)}}{Z_1Z_2},\qquad G_K=H_1+2H_2.$$

This is a positive normalized finite-dimensional state. It is $\beta_K$-KMS for the Killing-time dynamics and its $i$th cell state is $\beta_i$-KMS for the local proper-time dynamics of [[pthm-tgr-local-kms-clock-temperature]]. The equality $N_iT_i=T_K$ is exact within this constructed model; no observation, material-realization claim, infinite-volume limit, or interaction between cells is asserted.

## Facts & Assumptions

**Given:** The displayed Rindler metric and stationary bath, $L,T_K,\Delta_1,\Delta_2>0$, the two noninteracting two-level cells, and the auxiliary neutral kinetic-sector inputs.

[F1] [[def-tgr-framework-units]] fixes the signature $(-,+,+,+)$, length coordinates $x^0=ct$, and dimensionless lapse for a length-normalized Killing field.

[F2] [[thm-tgr-electrochemical-stationarity]]: for smooth $T>0$, $\mu$, a future timelike Killing field, and the charged exponential ansatz, whole-future-shell stationarity is equivalent to $\beta$ Killing and $d\zeta=-cq\,\iota_\beta F$; with a global compensator it yields the required constants. Its proof carries $\mathrm{AC}_\omega$ through the smooth-geometry suppliers.

[F3] [[thm-tgr-finite-cell-gibbs-factorization]] constructs the finite product density and proves its KMS property when the cells are finite-dimensional, noninteracting, $[H_i,Q_i]=0$, and the common stationary/gauge/whole-shell hypotheses hold.

[F4] [[pthm-tgr-local-kms-clock-temperature]] proves the orbitwise rescaling from the constructed $\beta_K$-KMS cell state to a $N_i\beta_K$-KMS proper-time state, with width $\hbar N_i\beta_K$ seconds.

[A1] [[post-tgr-stationary-equilibrium]] is adopted for this selected comoving bath only; the geometry does not imply that every material admits the bath.

[A2] [[post-tgr-selected-gibbs-kms-preparation]] adopts the constructed finite density as this model's state assignment; it does not claim thermalization or a generic curved-spacetime state.

[A3] The cells are uncoupled and have $Q_i=0$. The auxiliary kinetic species is neutral, $m>0$, $A=0$, $\Lambda_\xi=0$, and $\mu=0$; it supplies the theorem's stationarity condition and is not a cell degree of freedom.

[A4] The auxiliary future massive shell, charged transport, and exponential ansatz use the exact formulation in [[def-tgr-charged-liouville-data]].

[F5] [[def-countable-choice]] is the inherited $\mathrm{AC}_\omega$ assumption of [F2] and [F3].

## Verification

**Proof technique:** Verify the selected Rindler carrier and neutral stationarity input, then apply the exact finite-cell factorization and orbitwise KMS suppliers.

1.1 The metric is smooth and has signature $(-,+,+,+)$ on $x>0$. The coordinate transformation $X=x\cosh(x^0/L)$, $X^0=x\sinh(x^0/L)$ gives $-(dX^0)^2+dX^2=-(x/L)^2(dx^0)^2+dx^2$, so this is the Rindler wedge. The metric coefficients are independent of $x^0$, hence $\xi$ is Killing, and $g(\xi,\xi)=-(x/L)^2<0$ gives $N=x/L$. Moreover $\partial_{x^0}X^0=(x/L)\cosh(x^0/L)>0$, so $\xi$ is future directed. [given, A1, F1, algebra]

2.1 With $T=T_KL/x$, $u=\xi/N$ gives $\beta=u/(k_BT)=\xi/(k_BT_K)$, a Killing field. By [A3]–[A4], the auxiliary inputs have $F=dA=0$, $\zeta=\mu/(k_BT)=0$, and $q=0$, so $d\zeta=-cq\,\iota_\beta F=0$ in the exact transport formulation. The forward direction of [F2] therefore gives whole-future-shell stationarity and the global compensator condition required by [F3]. [given, A3, A4, F2, F3, step 1.1, algebra]

3.1 At $x_1=L$ and $x_2=2L$, step 1.1 gives $N_1=1$ and $N_2=2$. The adopted field has $T_i=T_K/N_i$, and the two cells satisfy $[H_i,Q_i]=0$, $Q_i=0$, and $\mu_i=q=0$. Thus the finite-cell hypotheses of [F3] hold with $G_K=N_1H_1+N_2H_2=H_1+2H_2$ and $\beta_i=N_i\beta_K$. Applying [F3] gives the positive finite partition sums and the product state in the Example. The construction is conditional on [F5], inherited through [F2]. [given, A2, A3, F2, F3, F5, step 1.1, step 2.1, algebra]

4.1 The eigenvalues of $H_i$ in the displayed basis are $0$ and $\Delta_i$, so their traces are $Z_i=1+e^{-\beta_i\Delta_i}$ and the normalized diagonal densities are exactly the displayed $\rho_i$. Since $\beta_i=N_i\beta_K$, their tensor product equals $e^{-\beta_K(H_1+2H_2)}/(Z_1Z_2)$. [F3, step 3.1, algebra]

5.1 Apply [F4] separately to the two cells. Their Killing-time KMS parameter is $\beta_K$; the constant lapse rescalings give local parameters $N_1\beta_K$ and $N_2\beta_K$, equal to $(k_BT_1)^{-1}$ and $(k_BT_2)^{-1}$. This establishes the stated model prediction only and reports no experiment. [A2, F4, step 3.1, step 4.1, algebra] ∎
