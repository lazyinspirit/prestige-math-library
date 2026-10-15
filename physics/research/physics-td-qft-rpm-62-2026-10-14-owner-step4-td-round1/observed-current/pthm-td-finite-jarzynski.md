---
id: pthm-td-finite-jarzynski
kind: physics-theorem
title: "Jarzynski equality for a finite protocol with stationary kernels"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps: [def-td-driven-finite-path-model, post-td-canonical-protocol-preparation, post-td-stationary-bath-kernel, post-td-canonical-sampling]
dependency_roles:
  def-td-driven-finite-path-model: formulation-prerequisite
  post-td-canonical-protocol-preparation: physical-assumption
  post-td-stationary-bath-kernel: physical-assumption
  post-td-canonical-sampling: physical-assumption
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
physical_scope: "An exact ensemble identity for a finite state space, finite protocol, canonical initial law, and kernels preserving each stage's canonical law; no claim is made for general stochastic processes or for any individual path."
sources:
  references:
    - title: "C. Jarzynski, Nonequilibrium Equality for Free Energy Differences"
      url: "https://www.physics.uci.edu/~tritz/BP/Jarz97.pdf"
      locator: "Complete four-page paper; finite-time work average from canonical initial conditions."
    - title: "C. Crooks, Entropy production fluctuation theorem and the nonequilibrium work relation for free energy differences"
      url: "https://journals.aps.org/pre/pdf/10.1103/PhysRevE.60.2721"
      locator: "Complete six-page paper; canonical endpoint ensembles and work relation."
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Nonequilibrium Work Relations"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Nonequilibrium%20Work%20Relations.pdf"
      locator: "Complete 21-page lecture PDF; work relation and average work consequences."
---

## Statement

For the forward path law of [[def-td-driven-finite-path-model]], under [[post-td-canonical-protocol-preparation]] and [[post-td-stationary-bath-kernel]], the finite expectation satisfies $\mathbb E_F[e^{-\beta W}]=Z_m/Z_0=e^{-\beta\Delta F}$. This is an ensemble identity; it does not say $W=\Delta F$ on each path.

## Facts & Assumptions

**Given:** A nonempty finite state space, finite energies $E_k$, $\beta>0$, a row-stochastic $K_k$, initial law $\pi_0$, and $\pi_kK_k=\pi_k$ at each stage.

[F1] [[def-td-driven-finite-path-model]]: the path law is $\pi_0(i_0)\prod_k K_k(i_{k-1},i_k)$, and work at quench $k$ is $E_k(i_{k-1})-E_{k-1}(i_{k-1})$.

[A1] [[post-td-canonical-protocol-preparation]]: the initial law is $\pi_0(i)=e^{-\beta E_0(i)}/Z_0$.

[A2] [[post-td-stationary-bath-kernel]]: $\sum_i\pi_k(i)K_k(i,j)=\pi_k(j)$.

[L1] [[post-td-canonical-sampling]]: the current draft postulate adopts the finite microstate law $P_\beta(i)=e^{-\beta E(i)}/Z(\beta)$ for finite nonempty $\Omega$ with $0<Z(\beta)<\infty$ and $\beta=(k_{\mathrm B}T)^{-1}$. Only this finite branch is used; the countable and measurable branches are not invoked.

## Proof

**Proof technique:** induction on protocol stages.

**Given:** [F1], [A1], [A2], [L1], with the finite partition sums and canonical laws of the protocol.

1.1 For $k\ge1$ and $j\in\Omega$, define $S_k(j)$ by the finite sum over $i_0,\ldots,i_{k-1}\in\Omega$ of $\pi_0(i_0)\prod_{\ell=1}^kK_\ell(i_{\ell-1},i_\ell)e^{-\beta W_k}$, with $i_k=j$ and $W_k=\sum_{\ell=1}^k[E_\ell(i_{\ell-1})-E_{\ell-1}(i_{\ell-1})]$; put $S_0(j)=\pi_0(j)$. Partitioning this finite sum by the state $i=i_{k-1}$ gives $S_k(j)=\sum_iS_{k-1}(i)e^{-\beta(E_k(i)-E_{k-1}(i))}K_k(i,j)$. The canonical preparation gives the base $S_0(j)=\pi_0(j)=(Z_0/Z_0)\pi_0(j)$ by [A1] and the finite branch of [L1]. [F1, A1, L1, given, base, algebra]

2.1 For the induction step fix $k\in\{1,\ldots,m\}$ and suppose $S_{k-1}(i)=(Z_{k-1}/Z_0)\pi_{k-1}(i)$ for every $i$. [ih, step 1.1, F1]

3.1 Substitute this hypothesis in the recurrence from step 1.1. Since $\pi_{k-1}(i)=e^{-\beta E_{k-1}(i)}/Z_{k-1}$, the previous-stage Boltzmann factor cancels against the quench factor, giving $S_k(j)=(Z_k/Z_0)\sum_i\pi_k(i)K_k(i,j)=(Z_k/Z_0)\pi_k(j)$ by [A2]. This proves the induction step at each stage. [F1, A2, step 1.1, step 2.1, algebra]

4.1 The base and induction step establish $S_k(j)=(Z_k/Z_0)\pi_k(j)$ for all stages. At $k=m$, summing over terminal states and using normalization of $\pi_m$ gives $\mathbb E_F[e^{-\beta W}]=Z_m/Z_0$. By $\Delta F=-\beta^{-1}\log(Z_m/Z_0)$, this equals $e^{-\beta\Delta F}$. [F1, step 1.1, step 3.1, algebra, discharge-induction] ∎
