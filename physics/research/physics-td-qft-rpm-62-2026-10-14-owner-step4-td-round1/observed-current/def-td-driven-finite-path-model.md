---
id: def-td-driven-finite-path-model
kind: definition
title: "Finite driven protocol and path work"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps: [def-td-finite-microstate-model]
dependency_roles:
  def-td-finite-microstate-model: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "A finite-microstate, finite-stage, single-reservoir protocol model with externally changed energies and discrete bath transitions; the internal-energy reading uses a common fixed chart with bulk center-of-mass dynamics suppressed, and a common rest chart requires constant center-of-mass velocity over the modeled interval; it does not assert that a material apparatus has this dynamics."
sources:
  references:
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Nonequilibrium Work Relations"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Nonequilibrium%20Work%20Relations.pdf"
      locator: "Complete 21-page lecture PDF; slides on forward/reverse work distributions and the Jarzynski and Crooks relations."
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Sections 2.3, 3.2.1, and 3.2.3."
---

## Definition

Take $\Omega$ to be a finite nonempty microstate set as in [[def-td-finite-microstate-model]]: distinct elements count as distinct microstates, and the physical energy values are finite and measured in joules in the declared rest frame. For the physical internal-energy interpretation, use one declared fixed Galilean chart for every stage, with the bulk center-of-mass and separately tracked external-energy sectors suppressed from this finite protocol. The companion mechanical model supplies the center-of-mass data required by the microstate supplier; when the common chart is called a center-of-mass rest chart throughout the protocol, its center-of-mass velocity is constant over the modeled interval, and one constant boost selects that chart. This fixed-chart idealization does not infer a rest chart from the finite set or transition kernels, and does not describe an accelerating bulk body. Fix an integer $m\ge1$ and stage energy functions $E_k:\Omega\to\mathbb R\,\mathrm J$ for $k=0,\ldots,m$, with the energy offsets fixed by the declared protocol model. Fix inverse temperature $\beta>0$ in joules$^{-1}$. The finite partition sum and canonical probability vector at stage $k$ are $Z_k=\sum_{i\in\Omega}e^{-\beta E_k(i)}$ and $\pi_k(i)=e^{-\beta E_k(i)}/Z_k$. Since $\Omega$ is nonempty and finite and each energy is finite, $0<Z_k<\infty$ and $\pi_k$ is a strictly positive probability vector.

A transition kernel at stage $k$ is a matrix $K_k(i,j)\ge0$ with $\sum_{j\in\Omega}K_k(i,j)=1$. In the forward stage order, the energy changes instantaneously from $E_{k-1}$ to $E_k$ while the state is still $i_{k-1}$; the subsequent bath transition samples $i_k$ using $K_k(i_{k-1},i_k)$ at fixed energy $E_k$. A path is $\omega=(i_0,\ldots,i_m)\in\Omega^{m+1}$. The initial law is a probability vector $\mu_0:\Omega\to[0,1]$ with $\sum_{i\in\Omega}\mu_0(i)=1$. Its path probability is $P_F(\omega)=\mu_0(i_0)\prod_{k=1}^mK_k(i_{k-1},i_k)$; summing over all paths gives $1$ by the normalization of $\mu_0$ and the row sums of the kernels.

Work on the system is positive when energy is supplied to it, and heat into the system is positive when a bath transition raises its energy. Define $W(\omega)=\sum_{k=1}^m[E_k(i_{k-1})-E_{k-1}(i_{k-1})]$ and $Q_{\mathrm{in}}(\omega)=\sum_{k=1}^m[E_k(i_k)-E_k(i_{k-1})]$, both in joules. Define $F_k=-\beta^{-1}\log Z_k$ and $\Delta F=F_m-F_0=-\beta^{-1}\log(Z_m/Z_0)$. These are finite-model quantities; their physical interpretation is conditional on the adopted preparation and transition assumptions.
