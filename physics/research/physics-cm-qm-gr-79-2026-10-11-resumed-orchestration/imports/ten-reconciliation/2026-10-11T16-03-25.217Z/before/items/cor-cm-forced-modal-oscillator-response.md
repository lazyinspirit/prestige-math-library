---
id: cor-cm-forced-modal-oscillator-response
kind: corollary
title: "Forced quadratic system $Mq''+Kq=\\varphi(t)$: decoupled forced modes and the convolution solution"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-quadratic-mode-decomposition, thm-cm-forced-oscillator-variation-of-constants, def-cm-oscillator-model-and-phase-system, thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases, def-interval]
dependency_roles:
  thm-cm-quadratic-mode-decomposition: mathematical-premise
  thm-cm-forced-oscillator-variation-of-constants: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 8.6, formulas (8.76)-(8.81): decoupled harmonic modes of $Mq''+Wq=0$ and their energies; Section 3.2 for the inhomogeneous linear solution structure"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 2.6 (normal modes and their equations), printed pages 40-45"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $M\in M_n(\mathbb R)$ be symmetric positive definite, let $K\in M_n(\mathbb R)$ be symmetric and non-negative, let $S:=M^{-1/2}KM^{-1/2}=O\Lambda O^{\mathsf T}$ with $O$ orthogonal and $\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$, $\lambda_i\ge0$ ([[thm-cm-quadratic-mode-decomposition]]), let $I\subseteq\mathbb R$ be an interval with nonempty interior ([[def-interval]]), let $\varphi:I\to\mathbb R^n$ be continuous and let $t_0\in I$. Put

$$\psi(t):=O^{\mathsf T}M^{-1/2}\varphi(t),\qquad \omega_i:=\sqrt{\lambda_i}\ (\lambda_i>0),$$

and for a $C^2$ curve $q:I\to\mathbb R^n$ put $z:=O^{\mathsf T}M^{1/2}q$. Then:

1. $q$ solves the forced quadratic system $Mq''+Kq=\varphi$ on $I$ if and only if $z$ solves the decoupled forced system
$$z_i''+\lambda_iz_i=\psi_i\qquad(1\le i\le n)$$
on $I$.
2. For each $i$, the unique solution $z_i:I\to\mathbb R$ of the scalar equation in clause 1 with data $z_i(t_0)=\xi_i$, $z_i'(t_0)=\eta_i$ is
$$z_i(t)=\xi_i\cos\bigl(\omega_i(t-t_0)\bigr)+\frac{\eta_i}{\omega_i}\sin\bigl(\omega_i(t-t_0)\bigr)+\frac1{\omega_i}\int_{t_0}^t\sin\bigl(\omega_i(t-s)\bigr)\psi_i(s)\,ds\quad(\lambda_i>0),$$
$$z_i(t)=\xi_i+\eta_i(t-t_0)+\int_{t_0}^t(t-s)\psi_i(s)\,ds\quad(\lambda_i=0).$$
3. Consequently, for every initial datum $(q(t_0),q'(t_0))\in\mathbb R^{2n}$ there is exactly one solution $q:I\to\mathbb R^n$ of $Mq''+Kq=\varphi$ with that datum, and it is $q=M^{-1/2}Oz$ for the $z$ of clause 2.

## Facts & Assumptions

**Given:** The symmetric positive definite $M$, symmetric non-negative $K$, the orthogonal diagonalisation $S=O\Lambda O^{\mathsf T}$, the interval $I$, the continuous $\varphi:I\to\mathbb R^n$, the point $t_0\in I$, and the transformed forcing $\psi=O^{\mathsf T}M^{-1/2}\varphi$.

[F1] The quadratic-mode theorem ([[thm-cm-quadratic-mode-decomposition]]): $q$ is a $C^2$ solution of $Mq''+Kq=0$ on $I$ if and only if $z=O^{\mathsf T}M^{1/2}q$ solves $z_i''+\lambda_iz_i=0$ for all $i$; the map $q\mapsto z$ is a linear bijection with inverse $z\mapsto M^{-1/2}Oz$; and the scalar equations have exactly the solution families $a_i\cos(\omega_it)+b_i\sin(\omega_it)$ for $\lambda_i>0$ and $a_i+b_it$ for $\lambda_i=0$.

[F2] The forced oscillator theorem ([[thm-cm-forced-oscillator-variation-of-constants]]) applies to each scalar equation $z_i''+\lambda_iz_i=\psi_i$ with $m=1$, $c=0$, $k=\lambda_i\ge0$ and continuous $\psi_i$: for every datum there is exactly one solution $z_i:I\to\mathbb R$, equal to $x_h+\int_{t_0}^t g_i(t-s)\psi_i(s)\,ds$, where $x_h$ is the homogeneous solution with that datum and $g_i$ is the homogeneous kernel with $g_i(0)=0$, $g_i'(0)=1$; its explicitly computed values are $g_i(u)=\sin(\omega_iu)/\omega_i$ when $\lambda_i>0$ and $g_i(u)=u$ when $\lambda_i=0$ ([[thm-cm-homogeneous-oscillator-solution-classification]], [[prop-cm-oscillator-degenerate-and-repulsive-cases]], [[def-cm-oscillator-model-and-phase-system]]).

[F3] $M^{1/2}$, $M^{-1/2}$, $O$ and $O^{\mathsf T}=O^{-1}$ are the matrices of the modal theorem; $M^{-1/2}MM^{-1/2}=I_n$ and $O^{\mathsf T}O=I_n$. [given]

## Proof

**Proof technique:** direct; transport the forced system through the modal transformation and apply the scalar forced-oscillator theorem mode by mode.

1.1 Transport: differentiating $q=M^{-1/2}Oz$ twice gives $q''=M^{-1/2}Oz''$, hence $$Mq''+Kq=M^{1/2}O\bigl(z''+O^{\mathsf T}M^{-1/2}KM^{-1/2}Oz\bigr)=M^{1/2}O\bigl(z''+\Lambda z\bigr)$$ by [F3], and $M^{1/2}O$ is invertible. Therefore $Mq''+Kq=\varphi$ is equivalent to $z''+\Lambda z=O^{\mathsf T}M^{-1/2}\varphi=\psi$, which is the decoupled system of clause 1; this also uses [F1] for the $K$-term identity. [F1, F3, algebra]

2.1 The $i$-th scalar equation is an oscillator equation with $m=1$, $c=0$, $k=\lambda_i\ge0$ and continuous forcing $\psi_i$; by [F2] its unique solution on $I$ with data $(\xi_i,\eta_i)$ at $t_0$ is the homogeneous solution with those data plus $\int_{t_0}^tg_i(t-s)\psi_i(s)\,ds$. The homogeneous solution is $\xi_i\cos(\omega_i(t-t_0))+\frac{\eta_i}{\omega_i}\sin(\omega_i(t-t_0))$ when $\lambda_i>0$ (from [F1]) and $\xi_i+\eta_i(t-t_0)$ when $\lambda_i=0$, and the kernels are those listed in [F2]; this gives the two displays of clause 2. [step 1.1, F1, F2]

3.1 Clauses 1 and 2 exhibit $z$ as the unique solution of the decoupled forced system with prescribed data; since $q=M^{-1/2}Oz$ is a bijection with $(q(t_0),q'(t_0))\mapsto(z(t_0),z'(t_0))$ linear and invertible ($q'(t_0)=M^{-1/2}Oz'(t_0)$), clause 3 follows. [step 1.1, step 2.1, F1, F3] ∎
