---
id: rem-truncated-training-and-exact-hypergradients
kind: remark
title: "Exact stationary sensitivities and finite training derivatives are different"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-adjoint-hypergradient-with-residual
  - def-smooth-bilevel-learning-problem
  - thm-finite-iteration-sensitivity-bound-and-residual-limitation
  - thm-shared-parameter-backpropagation-gradient-formula
  - thm-smooth-bilevel-hypergradient-formula
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 4 Part 2, §§6.3.1–6.3.2"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec06.pdf"
---

## Boundary

Let $p,m\ge0$, let $\Theta\subseteq\mathbb R^p$ be open with $\theta_0\in\Theta$, let $D\subseteq\mathbb R^m$ be an open convex neighborhood of $z_*$, and let $G:U\to\mathbb R^m$ be $C^2$ on an open neighborhood $U$ of $D\times\{\theta_0\}$. Here $C^1$ means total differentiability with continuous derivative, $C^2$ means the derivative map is $C^1$, and vector and operator norms are Euclidean and induced Euclidean norms. Write $G_z:=D_zG$ and $G_\theta:=D_\theta G$ for the state and parameter derivatives. Suppose $z_*=G(z_*,\theta_0)$, $G(D,\theta_0)\subseteq D$, $0\le q<1$, $\|G_z(z,\theta_0)\|\le q$ on $D$, and $G_z,G_\theta$ are Lipschitz in $z$ with constants $L_z,L_\theta$. Let $z_0:\Theta\to\mathbb R^m$ be $C^1$, with all finite iterates at $\theta_0$ lying in $D$, and define $z_{k+1}(\theta)=G(z_k(\theta),\theta)$. Let $\phi$ be the exact local fixed-point branch, $s_*:=D\phi(\theta_0)$, $e_K:=Dz_K(\theta_0)$, $\delta_0:=\|z_0(\theta_0)-z_*\|_2$, $d_0:=\|Dz_0(\theta_0)-s_*\|$, and $C:=L_z\|s_*\|+L_\theta$. For every integer $K\ge1$,

$$\|e_K-s_*\|\le q^K d_0+C K q^{K-1}\delta_0,$$

where $q^0=1$ when $q=0$ and $K=1$. For the fixed-point residual $r_K:=z_K(\theta_0)-G(z_K(\theta_0),\theta_0)$, the primal-state estimate is $(1-q)\|z_K(\theta_0)-z_*\|_2\le\|r_K\|_2$. This primal residual estimate alone does not imply that the derivative of the finite $K$-step graph equals the exact fixed-point sensitivity.

For a separate finite shared-parameter recurrence, let $p_0,q_0\ge1$, let $\Theta_0\subseteq\mathbb R^{p_0}$ and $H\subseteq\mathbb R^{q_0}$ be open, let $T\ge0$, let $h_0:\Theta_0\to H$ and $\Phi_t:\Theta_0\times H\to H$ for $1\le t\le T$ and $\ell:\Theta_0\times H\to\mathbb R$ be $C^1$ on open domains containing the trajectory at $\theta\in\Theta_0$, and suppose every piecewise primitive is evaluated in one unique strict open $C^1$ branch. Set $h_t=\Phi_t(\theta,h_{t-1})$ and $J_T(\theta)=\ell(\theta,h_T)$; derivative matrices use Euclidean coordinates and transposes are Euclidean. Backpropagation differentiates this finite scalar graph: with $A_t=D_\theta\Phi_t(\theta,h_{t-1})$, $B_t=D_h\Phi_t(\theta,h_{t-1})$, $\lambda_T=(D_h\ell(\theta,h_T))^T$, and $\lambda_{t-1}=B_t^T\lambda_t$, its derivative is

$$\nabla_\theta J_T(\theta)=(D_\theta\ell(\theta,h_T))^T+\sum_{t=1}^T A_t^T\lambda_t+(Dh_0(\theta))^T\lambda_0.$$

This is the derivative of the finite training computation. The exact implicit hypergradient is the derivative of a local stationary or fixed-point branch. In particular, a small training residual is not by itself an error bound for the derivative of a stopped iteration; contraction and sensitivity hypotheses such as those stated above are needed.

## Boundary references

[[thm-finite-iteration-sensitivity-bound-and-residual-limitation|Finite fixed-point sensitivity and residual bounds]]

[[thm-shared-parameter-backpropagation-gradient-formula|Gradient of a finite shared-parameter recurrence]]

[[alg-adjoint-hypergradient-with-residual|Adjoint solve and measured residual]]

[[thm-smooth-bilevel-hypergradient-formula|Exact local stationary-branch hypergradient]]
