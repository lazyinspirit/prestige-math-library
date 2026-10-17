---
id: thm-finite-iteration-sensitivity-bound-and-residual-limitation
kind: theorem
title: "Finite fixed-point iteration sensitivities differ from the implicit sensitivity with an explicit bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-differentiate-finite-fixed-point-iteration, thm-euclidean-implicit-function-theorem, thm-forward-mode-computes-directional-derivative, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Atilım Güneş Baydin and Barak A. Pearlmutter, Automatic Differentiation of Algorithms for Machine Learning, complete arXiv text, §§2–3"
      url: "https://arxiv.org/pdf/1404.7456"
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.6 and proof, §8.5.1"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
dependency_level: 3
---

## Statement

Let $G(z,\theta)$ be $C^2$ near $(z_*,\theta_0)$, with $z_*=G(z_*,\theta_0)$. Let $D$ be an open convex state neighborhood of $z_*$ on which $G$ is defined and $C^2$ near $D\times\{\theta_0\}$. Assume $G(D,\theta_0)\subseteq D$, $\|G_z(z,\theta_0)\|\le q<1$, and $G_z,G_\theta$ are Lipschitz in $z$ with constants $L_z,L_\theta$. Let the initial map $z_0(\theta)$ be $C^1$ and its iterates remain in $D$. Write $s_*=D\phi(\theta_0)$ for the local exact fixed-point branch supplied by the implicit function theorem, $e_k=D_\theta z_k(\theta_0)$, $\delta_0=\|z_0(\theta_0)-z_*\|$, $d_0=\|e_0-s_*\|$, and $C=L_z\|s_*\|+L_\theta$. For every integer $K\ge1$,
$$\|z_K(\theta_0)-z_*\|\le q^K\delta_0,\qquad \|e_K-s_*\|\le q^K d_0+C K q^{K-1}\delta_0,$$
with $q^0=1$ when $q=0,K=1$. If $R(z,\theta)=z-G(z,\theta)$ and $r_K=R(z_K(\theta_0),\theta_0)$, then $(1-q)\|z_K-z_*\|\le\|r_K\|$. The derivative error is not bounded by the residual alone: for $G(z,\theta)=qz+(1-q)\theta$, $\theta_0=0$, and $z_0(\theta)=0$, every finite $K$ has residual zero at $\theta_0$ but $e_K=1-q^K\ne1=s_*$ when $0<q<1$.

## Facts & Assumptions

**Given:** The $C^2$ iteration map, invariant convex state neighborhood, contraction and derivative-Lipschitz bounds, fixed point, differentiable initial map, and finite iteration count.

[F1] [[alg-differentiate-finite-fixed-point-iteration]]: $z_{k+1}=G(z_k,\theta)$, and the procedure applies forward mode to the finite composition.

[F2] [[thm-euclidean-implicit-function-theorem]]: for $R(z,\theta)=z-G(z,\theta)$, an invertible $R_z$ at a fixed point gives a local $C^1$ solution branch and its derivative formula.

[F3] [[thm-forward-mode-computes-directional-derivative]]: exact forward mode returns the derivative of the finite graph in every input direction.

[F4] [[thm-chain-rule-for-total-derivatives]]: derivatives of finite compositions satisfy the chain rule.

[A1] The stated invariant-neighborhood, contraction, Lipschitz, and initial-map hypotheses hold on the neighborhoods used below.

## Proof

**Proof technique:** differentiate the finite recurrence and compare it with the fixed-point equation.

1.1 Put $A_*=G_z(z_*,\theta_0)$. Since $\|A_*\|\le q<1$, the series $\sum_{j=0}^{\infty}A_*^j$ converges in operator norm: its tails are bounded by the corresponding geometric tails $\sum q^j$. The finite partial sums satisfy $(I-A_*)\sum_{j=0}^{N}A_*^j=\sum_{j=0}^{N}A_*^j(I-A_*)=I-A_*^{N+1}$, which tends to $I$; hence $R_z=I-A_*$ is invertible. [A1, given, construct, algebra]

2.1 Apply [F2] to $R(z,\theta)=z-G(z,\theta)$. The exact branch derivative $s_*$ satisfies $s_*=A_*s_*+B_*$, where $B_*=G_\theta(z_*,\theta_0)$. The primal recurrence and contraction give $\|z_{k+1}-z_*\|=\|G(z_k,\theta_0)-G(z_*,\theta_0)\|\le q\|z_k-z_*\|$; induction yields $\|z_k-z_*\|\le q^k\delta_0$. [F2, A1, step 1.1, algebra]

3.1 By [F4], the derivative of $z_{k+1}=G(z_k,\theta)$ is $e_{k+1}=A_ke_k+B_k$, where $A_k=G_z(z_k,\theta_0)$ and $B_k=G_\theta(z_k,\theta_0)$; [F3] computes that exact finite-graph derivative. Subtract $s_*=A_*s_*+B_*$ to obtain $e_{k+1}-s_*=A_k(e_k-s_*)+(A_k-A_*)s_*+(B_k-B_*)$. [F1, F2, F3, F4, step 2.1, algebra]

3.2 Set $D_k=\|e_k-s_*\|$. Taking norms and applying the hypotheses gives $D_{k+1}\le qD_k+C\|z_k-z_*\|\le qD_k+C\delta_0q^k$ by step 2.1. For $K=1$ this gives $D_1\le qd_0+C\delta_0$. If $D_K\le q^Kd_0+C\delta_0\sum_{j=0}^{K-1}q^{K-1-j}q^j$, then
$D_{K+1}\le q^{K+1}d_0+C\delta_0\sum_{j=0}^{K-1}q^{K-j}q^j+C\delta_0q^K=q^{K+1}d_0+C\delta_0\sum_{j=0}^{K}q^{K-j}q^j.$
Induction proves the sum bound for every $K\ge1$. Each summand equals $q^{K-1}$, including the stated convention at $q=0,K=1$, so the sum is $Kq^{K-1}$. [A1, step 2.1, step 3.1, algebra]

4.1 The residual identity $r_K=(z_K-z_*)-(G(z_K,\theta_0)-G(z_*,\theta_0))$ and the triangle inequality imply $(1-q)\|z_K-z_*\|\le\|r_K\|$. For the stated scalar example, $z_*=\theta$, $z_k(0)=0$ and $r_K=0$; differentiating the recurrence gives $e_{k+1}=q e_k+(1-q)$, $e_0=0$, hence $e_K=1-q^K$, whereas $s_*=1$. Thus a finite-iteration derivative is a different target even at zero primal residual, with its discrepancy still bounded by step 3.2. [A1, step 2.1, step 3.1, step 3.2, algebra] ∎
