---
id: cor-cm-forced-modal-oscillator-response
kind: corollary
title: "Forced quadratic system $Mq''+Kq=\\varphi(t)$: decoupled forced modes and the convolution solution"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-quadratic-mode-decomposition, thm-cm-forced-oscillator-variation-of-constants, def-cm-oscillator-model-and-phase-system, thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases, thm-sine-and-cosine-derivatives, thm-chain-rule, def-interval]
dependency_roles:
  thm-cm-quadratic-mode-decomposition: mathematical-premise
  thm-cm-forced-oscillator-variation-of-constants: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
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

[F1] The quadratic-mode theorem ([[thm-cm-quadratic-mode-decomposition]]) supplies the positive-definite square-root factors and an orthogonal diagonalisation $S=O\Lambda O^{\mathsf T}$ with $\lambda_i\ge0$. Its scalar solution classification is stated only for intervals containing $0$; the present interval $I$ is arbitrary, so the proof below uses only this algebraic diagonalisation and verifies the forced scalar responses at the prescribed $t_0$.

[F2] The forced oscillator theorem ([[thm-cm-forced-oscillator-variation-of-constants]]) applies on this arbitrary interval $I$ at the specified $t_0$: with $m=1$, $c=0$, $k=\lambda_i\ge0$ and continuous $\psi_i$, it gives exactly one solution and its homogeneous-plus-convolution formula. The homogeneous classification ([[thm-cm-homogeneous-oscillator-solution-classification]]) and degenerate proposition ([[prop-cm-oscillator-degenerate-and-repulsive-cases]]) classify homogeneous solutions on every interval. For $\lambda_i>0$, translating an interval by $-t_0$ gives one containing $0$, where the classification determines the homogeneous member from its data; for $\lambda_i=0$ the proposition directly determines the affine member from its value and derivative at $t_0$. Trigonometric derivatives and values at zero are $(\sin)'=\cos$, $(\cos)'=-\sin$, $\sin0=0$, and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[F4] The chain rule used below is [[thm-chain-rule]].

[F3] $M^{1/2}$, $M^{-1/2}$, $O$ and $O^{\mathsf T}=O^{-1}$ are the matrices of the modal theorem; $M^{-1/2}MM^{-1/2}=I_n$ and $O^{\mathsf T}O=I_n$. [given]

## Proof

**Proof technique:** direct; transport the forced system through the modal transformation and apply the scalar forced-oscillator theorem mode by mode.

1.1 Transport: differentiating $q=M^{-1/2}Oz$ twice gives $q''=M^{-1/2}Oz''$, hence $$Mq''+Kq=M^{1/2}O\bigl(z''+O^{\mathsf T}M^{-1/2}KM^{-1/2}Oz\bigr)=M^{1/2}O\bigl(z''+\Lambda z\bigr)$$ by the definition of $S$ and [F1], and $M^{1/2}O$ is invertible. Therefore $Mq''+Kq=\varphi$ is equivalent to $z''+\Lambda z=O^{\mathsf T}M^{-1/2}\varphi=\psi$, which is the decoupled system of clause 1. [F1, F3, algebra]

2.1 The $i$-th scalar equation is an oscillator equation with $m=1$, $c=0$, $k=\lambda_i\ge0$ and continuous forcing $\psi_i$; by [F2] its unique solution on $I$ with data $(\xi_i,\eta_i)$ at $t_0$ is the homogeneous solution with those data plus $\int_{t_0}^tg_i(t-s)\psi_i(s)\,ds$. If $\lambda_i>0$, set $h_i(t)=\xi_i\cos(\omega_i(t-t_0))+\frac{\eta_i}{\omega_i}\sin(\omega_i(t-t_0))$. By the chain rule and trigonometric derivatives in [F2], $h_i''+\lambda_i h_i=0$, $h_i(t_0)=\xi_i$, and $h_i'(t_0)=\eta_i$; translating any competing homogeneous solution to an interval containing $0$ and applying the classification in [F2] proves uniqueness. If $\lambda_i=0$, $h_i(t)=\xi_i+\eta_i(t-t_0)$ directly solves the homogeneous equation with the required data and is the unique affine family member. Likewise $g_i(u)=\sin(\omega_i u)/\omega_i$ for $\lambda_i>0$ and $g_i(u)=u$ for $\lambda_i=0$ solve the homogeneous equation and have $g_i(0)=0$, $g_i'(0)=1$; the classified families give uniqueness of the kernel. Substitution in the forced theorem's formula gives exactly the two expressions in clause 2. [step 1.1, F2, F4]

3.1 Clauses 1 and 2 exhibit $z$ as the unique solution of the decoupled forced system with prescribed data; since $q=M^{-1/2}Oz$ is a bijection with $(q(t_0),q'(t_0))\mapsto(z(t_0),z'(t_0))$ linear and invertible ($q'(t_0)=M^{-1/2}Oz'(t_0)$), clause 3 follows. [step 1.1, step 2.1, F1, F3] ∎

