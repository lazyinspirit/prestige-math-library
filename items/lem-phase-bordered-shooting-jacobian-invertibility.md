---
id: lem-phase-bordered-shooting-jacobian-invertibility
kind: lemma
title: "A simple neutral multiplier and transverse phase make the shooting Jacobian invertible"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - def-local-periodic-orbit-poincare-and-floquet-data
  - lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier
  - prop-simple-eigenvalues-admit-left-right-normalization
  - def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue
  - thm-spectrum-is-the-root-set-of-the-characteristic-polynomial
  - def-characteristic-polynomial-of-a-matrix
  - thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-rank-nullity
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
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

[F4] Eigenvalues are precisely the roots of the characteristic polynomial ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]], [[def-characteristic-polynomial-of-a-matrix]]). Here algebraic multiplicity means the multiplicity of that root; over $\mathbb C$ the characteristic polynomial factors into linear factors counted with multiplicity ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]) and a finite-dimensional operator has Jordan form ([[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]).

[F5] The monodromy is the state derivative of the flow ([[def-local-periodic-orbit-poincare-and-floquet-data]]). For the $C^2$ field in [F1], the finite-regularity maximal-flow theorem supplies a $C^2$ flow with time derivative $\partial_t\phi_t(x)=f(\phi_t(x))$ ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F6] The derivative of a composition is the composition of its derivatives ([[thm-chain-rule-for-total-derivatives]]).

[F7] For linear maps between finite-dimensional spaces of equal dimension, injectivity is equivalent to surjectivity ([[thm-rank-nullity]]).

## Proof
1.1 By [F1] and [F5], differentiating in $x$ gives $M-I_d$, differentiating in $T$ gives $f(\phi_T(x_*))=f_*$, and differentiating the phase row gives $(c^\top,0)$. This is the displayed matrix by [F6]. [F1, F5, F6]

2.1 Suppose $1$ is algebraically simple. Then [F4] implies that the complex eigenspace for eigenvalue $1$ is one-dimensional. By [F2] its spanning eigenvector $f_*$ is real, so the real kernel is $\mathbb R f_*$ and rank-nullity gives $\operatorname{rank}_{\mathbb R}(M-I_d)=d-1$. Choose a real basis $v_1,\ldots,v_{d-1}$ of $\operatorname{range}(M-I_d)$. The $d-1$ real linear forms $w\mapsto v_j^\top w$ are independent: if a linear combination vanishes for every $w$, then the row $\bigl(\sum_j a_jv_j\bigr)^\top$ is zero, so $\sum_j a_jv_j=0$ and basis independence forces every coefficient $a_j$ to vanish. Rank-nullity therefore gives a nonzero real $w_0$ with $v_j^\top w_0=0$ for every $j$. Thus $w_0^\top(M-I_d)=0$. It is a compatible left eigenvector with the real right eigenvector $f_*$, so [F3], applied over $\mathbb C$, gives $w_0^\top f_*\ne0$. This pairing is real; normalize $w=w_0/(w_0^\top f_*)$, so $w$ is real, $w^\top M=w^\top$, and $w^\top f_*=1$. For $Q=I-f_*w^\top$ and $W=\ker w^\top$, one has $Qf_*=0$, $Q|_W=I_W$, and $QM=M-f_*w^\top M=M-f_*w^\top=M-Mf_*w^\top=MQ$. Hence $Q$ is the projection onto $W$, $M$ preserves $W$, and $M-I_d$ maps $W$ into $W$. Its restriction to $W$ is injective: a kernel vector there would be an eigenvector independent of $f_*$, contrary to simplicity. Since $W$ is finite dimensional, [F7] makes the restriction invertible. For $J(u,\tau)=(r,s)$, left multiplication of the first row by $w^\top$ gives $\tau=w^\top r$. Write $u=u_W+\alpha f_*$ with $u_W\in W$; applying $Q$ to the first row and using its commutation with $M$ gives $u_W=((M-I_d)|_W)^{-1}Qr$, and the phase row gives $\alpha=(s-c^\top u_W)/(c^\top f_*)$. Thus nonzero $c^\top f_*$ gives a unique solution for every right-hand side, so $J$ is invertible. Moreover, $|\tau|\le\|w\|_2\|r\|_2$, $\|u_W\|_2\le K_W\|Q\|_2\|r\|_2$, and $|\alpha|\le(|s|+\|c\|_2K_W\|Q\|_2\|r\|_2)/|c^\top f_*|$. By the triangle inequality and $\|r\|_2,|s|\le\|(r,s)\|_2$, these bounds yield the stated estimate. [F2, F3, F4, F7, step 1.1, given, algebra]

2.2 If $c^\top f_*=0$, then $J(f_*,0)=0$, so $J$ is singular. Now suppose the algebraic multiplicity of $1$ exceeds one. If the complex eigenspace has dimension at least two, its real kernel also has dimension at least two: for the real matrix $M-I_d$, its complex kernel consists exactly of $u+iv$ with $u$ and $v$ in the real kernel. Choose a real $v\in\ker(M-I_d)$ independent of $f_*$. If $c^\top f_*=0$ the preceding argument applies; otherwise $u=v-(c^\top v)/(c^\top f_*)f_*$ is nonzero, lies in $\ker(M-I_d)$, and satisfies $c^\top u=0$, so $J(u,0)=0$. If instead the eigenspace is one-dimensional, Jordan form [F4] supplies a generalized vector which, after rescaling, satisfies $(M-I_d)v=f_*$ over $\mathbb C$. Since $M-I_d$ and $f_*$ are real, $\operatorname{Re}v$ is a real generalized vector satisfying the same equation; replace $v$ by this real vector. If $c^\top f_*=0$, $J(f_*,0)=0$; if not, put $u=v-(c^\top v)/(c^\top f_*)f_*$. Then $c^\top u=0$ and $(M-I_d)u=f_*$, so $J(u,-1)=0$. In every nonsimple case $J$ is singular. [F2, F4, step 1.1, algebra, construct]

3.1 Steps 2.1–2.2 prove both directions of the invertibility criterion. [step 2.1, step 2.2] ∎
