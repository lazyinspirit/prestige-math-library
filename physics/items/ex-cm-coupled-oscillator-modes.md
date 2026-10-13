---
id: ex-cm-coupled-oscillator-modes
kind: example
title: "Two coupled equal masses: mode frequencies sqrt(k/m) and sqrt((k+2c)/m), and the free zero mode when k=0"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-quadratic-mode-decomposition, lem-cm-positive-definite-matrix-square-roots, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-matrix-product-and-identity-matrix, thm-sine-and-cosine-derivatives, def-euclidean-inner-product]
dependency_roles:
  thm-cm-quadratic-mode-decomposition: mathematical-premise
  lem-cm-positive-definite-matrix-square-roots: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 8.4, formulas (8.77)-(8.81): the spring-chain harmonic example and its modes"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 2.6 (normal modes of coupled oscillators), printed pages 40-45"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Let $m>0$, $k\ge0$ and $c\ge0$, and consider the constant-coefficient system $Mq''+Kq=0$ on $\mathbb R^2$ with

$$M=\begin{pmatrix}m&0\\0&m\end{pmatrix},\qquad K=\begin{pmatrix}k+c&-c\\-c&k+c\end{pmatrix}.$$

Then $K$ is symmetric and non-negative, $S=M^{-1/2}KM^{-1/2}=K/m$ has eigenvalues $\lambda_1=k/m$ with eigenvector $\frac1{\sqrt2}(1,1)$ and $\lambda_2=(k+2c)/m$ with eigenvector $\frac1{\sqrt2}(1,-1)$, and the general solution is the sum of the modal solutions of [[thm-cm-quadratic-mode-decomposition]]:

- if $k>0$ the first mode oscillates with angular frequency $\omega_1=\sqrt{k/m}$, while if $k=0$ it is the free affine mode $a_1+b_1t$ along $\frac1{\sqrt2}(1,1)$;
- the second mode oscillates with angular frequency $\omega_2=\sqrt{(k+2c)/m}$ whenever $k+2c>0$, and if $k=c=0$ it is also a free affine mode $a_2+b_2t$ along $\frac1{\sqrt2}(1,-1)$.

In particular a zero eigenvalue is not an oscillator but a free mode.

## Facts & Assumptions

**Given:** The numbers $m>0$, $k\ge0$, $c\ge0$, the matrices $M=mI_2$ and $K$ displayed above, and the vectors $w_1=\frac1{\sqrt2}(1,1)$, $w_2=\frac1{\sqrt2}(1,-1)$.

[L1] The quadratic-mode theorem applies to $M$ symmetric positive definite and $K$ symmetric non-negative, produces the eigenvalues and modes of $S=M^{-1/2}KM^{-1/2}$, and gives the general solution and the modal energies ([[thm-cm-quadratic-mode-decomposition]]).

[L2] $M^{1/2}=\sqrt m\,I_2$ and $M^{-1/2}=\frac1{\sqrt m}I_2$ ([[lem-cm-positive-definite-matrix-square-roots]], [[def-matrix-product-and-identity-matrix]]).

## Verification

**Proof technique:** direct; multiply the explicit matrices and apply the theorem.

1.1 $S=M^{-1/2}KM^{-1/2}=K/m$, and $$Sw_1=\frac1m\begin{pmatrix}k+c&-c\\-c&k+c\end{pmatrix}\frac{1}{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}=\frac{1}{\sqrt2}\frac{1}{m}\begin{pmatrix}k\\k\end{pmatrix}=\frac{k}{m}w_1,$$ $$Sw_2=\frac1m\begin{pmatrix}k+c&-c\\-c&k+c\end{pmatrix}\frac{1}{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}=\frac{1}{\sqrt2}\frac{1}{m}\begin{pmatrix}k+2c\\-(k+2c)\end{pmatrix}=\frac{k+2c}{m}w_2 .$$ Since $w_1,w_2$ are orthonormal, $O=(w_1\ w_2)$ is orthogonal and diagonalises $S$ with the displayed eigenvalues; the eigenvalues are non-negative, $\lambda_1=k/m>0$ exactly when $k>0$, and $\lambda_2=(k+2c)/m>0$ exactly when $k+2c>0$. [given, L2, algebra]

2.1 By [L1] the general solution is $q=M^{-1/2}Oz$, where each modal coordinate is given by the theorem according to the sign of its eigenvalue: if $k>0$ then $z_1=a_1\cos(\omega_1t)+b_1\sin(\omega_1t)$ with $\omega_1=\sqrt{\lambda_1}$, and if $k=0$ then $z_1=a_1+b_1t$; if $k+2c>0$ then $z_2=a_2\cos(\omega_2t)+b_2\sin(\omega_2t)$ with $\omega_2=\sqrt{\lambda_2}$, and if $k=c=0$ then $z_2=a_2+b_2t$. The modal energies are constant. The verification of the scalar solution formulas is the one given by the theorem via [[thm-sine-and-cosine-derivatives]]. [step 1.1, L1]

3.1 The zero-mode branch $k=0$: then $\lambda_1=0$ and the first modal solution is the affine motion $a_1+b_1t$ along $w_1$ by [L1], which is unbounded unless $b_1=0$; the second eigenvalue is $2c/m\ge0$, with $2c/m>0$ when $c>0$, so the second mode oscillates with frequency $\sqrt{2c/m}$ unless also $c=0$, in which case both modes are affine. Thus when $k=0<c$ the only free direction is $\frac1{\sqrt2}(1,1)$, while when $k=c=0$ both independent directions are free; in either case a zero mode is not an oscillator. [step 1.1, L1, algebra] ∎

## Remarks

- The example is the two-body spring model rewritten in normal coordinates. The potential $U(q)=\frac k2(q_1^2+q_2^2)+\frac c2(q_1-q_2)^2$ has Hessian $K$, so this is also the linearisation of the mechanical system at the equilibrium $q=0$ by [[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]]; the example verifies the modal computation on explicit matrices and claims nothing about the nonlinear system.
