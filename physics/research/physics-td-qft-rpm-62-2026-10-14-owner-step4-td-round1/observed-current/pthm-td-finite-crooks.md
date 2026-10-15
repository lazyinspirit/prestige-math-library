---
id: pthm-td-finite-crooks
kind: physics-theorem
title: "Crooks path and work-distribution relation for a finite protocol"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps: [def-td-driven-finite-path-model, def-td-detailed-balance-rate-model, post-td-canonical-protocol-preparation, post-td-stationary-bath-kernel, pthm-td-finite-pathwise-first-law]
dependency_roles:
  def-td-driven-finite-path-model: formulation-prerequisite
  def-td-detailed-balance-rate-model: formulation-prerequisite
  post-td-canonical-protocol-preparation: physical-assumption
  post-td-stationary-bath-kernel: physical-assumption
  pthm-td-finite-pathwise-first-law: physical-result
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
physical_scope: "A path-reversal identity for a finite-state protocol whose stage kernels are reversible with respect to their positive canonical laws; it does not extend to arbitrary driven systems without matching support and reversal assumptions."
sources:
  references:
    - title: "C. Crooks, Entropy production fluctuation theorem and the nonequilibrium work relation for free energy differences"
      url: "https://journals.aps.org/pre/pdf/10.1103/PhysRevE.60.2721"
      locator: "Complete six-page paper; microscopic reversibility and canonical endpoint work relation."
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Sections 3.2.3 and 4.4.1 on forward/reverse work distributions and reversed dynamics."
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Nonequilibrium Work Relations"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Nonequilibrium%20Work%20Relations.pdf"
      locator: "Complete 21-page lecture PDF; comparison of forward and reverse work densities."
---

## Statement

Assume the setup of [[def-td-driven-finite-path-model]], the canonical initial law of [[post-td-canonical-protocol-preparation]], the stationarity model of [[post-td-stationary-bath-kernel]], and, additionally, $\pi_k(i)K_k(i,j)=\pi_k(j)K_k(j,i)$ for every $k,i,j$. For every forward path with positive probability, define its reverse probability by $P_R(\omega^R)=\pi_m(i_m)\prod_{k=1}^mK_k(i_k,i_{k-1})$. Then $P_R(\omega^R)>0$ and $P_F(\omega)/P_R(\omega^R)=e^{\beta(W(\omega)-\Delta F)}$. Consequently, at each work value $w$, $P_F(W=w)=e^{\beta(w-\Delta F)}P_R(W_R=-w)$. The reverse protocol first applies the stage-$k$ reverse transition at fixed $E_k$, then reverses the quench $E_k\to E_{k-1}$; its work is $W_R(\omega^R)=-W(\omega)$.

## Facts & Assumptions

**Given:** The finite protocol with canonical initial and terminal laws, strictly positive $\pi_k$, stationary stage kernels, and the additional stagewise detailed-balance equations.

[F1] [[def-td-driven-finite-path-model]]: quench $k$ changes $E_{k-1}$ to $E_k$ before transition $K_k$; $W$ is work on the system.

[F2] [[def-td-detailed-balance-rate-model]]: the kernel balance equation is $\pi_k(i)K_k(i,j)=\pi_k(j)K_k(j,i)$.

[A1] [[post-td-canonical-protocol-preparation]]: the forward initial law is $\pi_0$.

[A2] [[post-td-stationary-bath-kernel]]: each $K_k$ preserves $\pi_k$.

[F3] [[pthm-td-finite-pathwise-first-law]]: $\Delta E=W+Q_{\mathrm{in}}$ with the stated signs.

## Proof

**Given:** [F1], [F2], [A1], [A2], and [F3].

1.1 Define the reverse path law by starting with $\pi_m(i_m)$ and, in reverse order, using $K_k(i_k,i_{k-1})$ at fixed energy $E_k$ before undoing that quench. By detailed balance, if $K_k(i_{k-1},i_k)>0$ then $K_k(i_k,i_{k-1})>0$, because $\pi_k$ is strictly positive. Thus positive forward paths pair with positive reverse paths. [F1, F2, A1, A2]

2.1 On a paired path, divide the endpoint Gibbs weights and use detailed balance for each transition: $P_F(\omega)/P_R(\omega^R)=[\pi_0(i_0)/\pi_m(i_m)]\prod_{k=1}^m[\pi_k(i_k)/\pi_k(i_{k-1})]$. Substituting $\pi_k(i)=e^{-\beta E_k(i)}/Z_k$ and collecting terms gives $\log(P_F/P_R)=\beta[E_m(i_m)-E_0(i_0)-Q_{\mathrm{in}}]+\log(Z_m/Z_0)=\beta(W-\Delta F)$ by [F3]. [F1, F2, F3, A1, step 1.1, algebra]

3.1 The reversed quench at stage $k$ occurs at state $i_{k-1}$, so its work term is $E_{k-1}(i_{k-1})-E_k(i_{k-1})=-[E_k(i_{k-1})-E_{k-1}(i_{k-1})]$; summing proves $W_R(\omega^R)=-W(\omega)$. Summing the path ratio over the finite set of paths with $W=w$ proves the stated distribution identity. [F1, F3, step 2.1, algebra] ∎
