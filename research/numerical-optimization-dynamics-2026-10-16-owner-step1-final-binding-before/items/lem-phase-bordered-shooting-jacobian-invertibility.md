---
id: lem-phase-bordered-shooting-jacobian-invertibility
kind: lemma
title: "A simple neutral multiplier and transverse phase make the shooting Jacobian invertible"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - def-local-periodic-orbit-poincare-and-floquet-data
  - lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier
  - prop-simple-eigenvalues-admit-left-right-normalization
  - def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-rank-nullity
  - thm-fundamental-theorem-for-autonomous-smooth-odes
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Statement

At a phase-fixed periodic point $x_*$ with period $T$, let $M=D_x\phi_T(x_*)$, let $f_*=f(x_*)\ne0$, and let $c=D\psi(x_*)$ for the affine phase $\psi(x)=c^\top(x-x_{\rm ref})$. The derivative of the phase-bordered shooting residual is
$$ J=\begin{bmatrix}M-I_d&f_*\\c^\top&0\end{bmatrix}. $$
It is invertible if and only if $1$ is an algebraically simple eigenvalue of $M$ and $c^\top f_*\ne0$. In the simple case choose real left/right eigenvectors $w,f_*$ with $w^\top f_*=1$, put $Q=I-f_*w^\top$ and $W=\ker w^\top$, and let $K_W=\|((M-I_d)|_W)^{-1}\|_{2\to2}$. All vector and matrix norms below are Euclidean and induced Euclidean norms, and the product norm on $(u,\tau)\in\mathbb R^d\times\mathbb R$ is Euclidean. Then
$$ \|J^{-1}\|_{2\to2}\le K_W\|Q\|_2+\|w\|_2+ \frac{\|f_*\|_2\bigl(1+\|c\|_2K_W\|Q\|_2\bigr)}{|c^\top f_*|}. $$
The period column is the exact time-sensitivity $f_*$.

## Facts & Assumptions

**Given:** A nonconstant autonomous periodic orbit, the phase residual of [[def-phase-bordered-periodic-orbit-bvp]], its monodromy $M$, and the affine phase covector $c$.

[F1] The phase-bordered residual is $G(x,T)=(\phi_T(x)-x,\psi(x))$, with $\psi(x)=c^\top(x-x_{\rm ref})$ ([[def-phase-bordered-periodic-orbit-bvp]]).

[F2] The tangent vector $f_*$ is a right eigenvector of $M$ for eigenvalue $1$ ([[lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier]]).

[F3] For a simple eigenvalue, compatible left and right eigenvectors pair nontrivially and can be normalized by $w^*f_*=1$ ([[prop-simple-eigenvalues-admit-left-right-normalization]], [[def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue]]).

[F4] Eigenvalues and algebraic multiplicities are defined by the characteristic polynomial ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]); over $\mathbb C$ the characteristic polynomial factors into linear factors counted with multiplicity ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]) and a finite-dimensional operator has Jordan form ([[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]).

[F5] The monodromy is the derivative of the flow and the time derivative is the vector field ([[def-local-periodic-orbit-poincare-and-floquet-data]], [[thm-fundamental-theorem-for-autonomous-smooth-odes]]).

[F6] The derivative of a composition is the composition of its derivatives ([[thm-chain-rule-for-total-derivatives]]).

[F7] For linear maps between finite-dimensional spaces of equal dimension, injectivity is equivalent to surjectivity ([[thm-rank-nullity]]).

## Proof
1.1 By [F1] and [F5], differentiating in $x$ gives $M-I_d$, differentiating in $T$ gives $f(\phi_T(x_*))=f_*$, and differentiating the phase row gives $(c^\top,0)$. This is the displayed matrix by [F6]. [F1, F5, F6]

2.1 Suppose $1$ is algebraically simple. Since $M$ is real and $1$ is a simple real eigenvalue, [F3] permits real $w$ with $w^\top M=w^\top$ and $w^\top f_*=1$. The projection $Q=I-f_*w^\top$ has range $W=\ker w^\top$, and $M$ preserves $W$. The restriction of $M-I_d$ to $W$ is injective: a kernel vector there would be an eigenvector independent of $f_*$, contrary to simplicity. Since $W$ is finite dimensional, [F7] makes the restriction invertible. For $J(u,\tau)=(r,s)$, left multiplication of the first row by $w^\top$ gives $\tau=w^\top r$. Write $u=u_W+\alpha f_*$ with $u_W\in W$; applying $Q$ to the first row gives $u_W=((M-I_d)|_W)^{-1}Qr$, and the phase row gives $\alpha=(s-c^\top u_W)/(c^\top f_*)$. Thus nonzero $c^\top f_*$ gives a unique solution for every right-hand side, so $J$ is invertible. Moreover, $|\tau|\le\|w\|_2\|r\|_2$, $\|u_W\|_2\le K_W\|Q\|_2\|r\|_2$, and $|\alpha|\le(|s|+\|c\|_2K_W\|Q\|_2\|r\|_2)/|c^\top f_*|$. By the triangle inequality and $\|r\|_2,|s|\le\|(r,s)\|_2$, these bounds yield the stated estimate. [F2, F3, F4, F7, step 1.1, given, algebra]

2.2 If $c^\top f_*=0$, then $J(f_*,0)=0$, so $J$ is singular. Now suppose the algebraic multiplicity of $1$ exceeds one. If $\ker(M-I_d)$ has dimension at least two, choose $v\in\ker(M-I_d)$ independent of $f_*$. If $c^\top f_*=0$ the preceding argument applies; otherwise $u=v-(c^\top v)/(c^\top f_*)f_*$ is nonzero, lies in $\ker(M-I_d)$, and satisfies $c^\top u=0$, so $J(u,0)=0$. If instead the eigenspace is one-dimensional, Jordan form [F4] supplies a generalized vector $v$ with $(M-I_d)v=f_*$ after rescaling. If $c^\top f_*=0$, $J(f_*,0)=0$; if not, put $u=v-(c^\top v)/(c^\top f_*)f_*$. Then $c^\top u=0$ and $(M-I_d)u=f_*$, so $J(u,-1)=0$. In every nonsimple case $J$ is singular. [F2, F4, step 1.1, algebra, construct]

3.1 Steps 2.1–3.1 prove both directions of the invertibility criterion. [step 2.1, step 2.2] ∎
