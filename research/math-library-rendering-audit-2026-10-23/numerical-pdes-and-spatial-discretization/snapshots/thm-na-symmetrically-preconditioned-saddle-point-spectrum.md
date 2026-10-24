---
id: thm-na-symmetrically-preconditioned-saddle-point-spectrum
kind: theorem
title: "Spectrum of a symmetrically pressure-mass-preconditioned saddle system"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-na-symmetric-saddle-point-system-and-block-preconditioners
  - thm-na-pressure-schur-spectral-equivalence-from-infsup
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-rank-nullity
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michele Benzi, Gene H. Golub, and Jörg Liesen, Numerical solution of
        saddle point problems"
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/bgl04.pdf"
      locator: "§3.1 and §10.1.1, printed pp. 14–15 and 61–63: block diagonal
        preconditioning and its exact-Schur eigenvalue polynomial."
verification:
  precheck: pass
---

## Statement

Assume the hypotheses and Schur bounds of
[[thm-na-pressure-schur-spectral-equivalence-from-infsup]], with constants
$\alpha,\Lambda,C_b,\beta>0$. For $\gamma>0$, use
$P_\gamma=\operatorname{diag}(A,\gamma M_Q)$ from
[[def-na-symmetric-saddle-point-system-and-block-preconditioners]], and set
$$ a_\gamma=\frac{\beta^2}{\Lambda\gamma},\qquad b_\gamma=\frac{C_b^2}{\alpha\gamma},\qquad \lambda_\pm(s)=\frac{1\pm\sqrt{1+4s}}2. $$
Let $\mu_1,\ldots,\mu_m$ be the eigenvalues, with multiplicity, of
$(\gamma M_Q)^{-1/2}S(\gamma M_Q)^{-1/2}$. Then
$a_\gamma\le\mu_j\le b_\gamma$, and the symmetric square-root-preconditioned
saddle matrix has eigenvalues
$$ \{\lambda_-(\mu_j),\lambda_+(\mu_j):1\le j\le m\} \quad\text{and }1\text{ with multiplicity }n-m. $$
Consequently its spectrum is contained in
$$ [\lambda_-(b_\gamma),\lambda_-(a_\gamma)]\;\cup\; \{1\}\;\cup\; [\lambda_+(a_\gamma),\lambda_+(b_\gamma)], $$
where the eigenvalue $1$ has multiplicity zero if $n=m$. This is a spectral
estimate for the stated scaled block preconditioner, not an iteration-count
or generic solver-speed claim.

## Facts & Assumptions

**Given:** Real finite-dimensional spaces $V,Q$, an SPD velocity matrix $A$,
full-row-rank constraint matrix $B$, pressure mass matrix $M_Q$, and the
inf-sup, continuity, and energy-equivalence hypotheses of the Schur theorem.

[F1] The saddle matrix is
$K=\begin{pmatrix}A&B^T\\B&0\end{pmatrix}$, the positive Schur matrix is
$S=BA^{-1}B^T$, and $P_\gamma=\operatorname{diag}(A,\gamma M_Q)$ is the
block preconditioner
([[def-na-symmetric-saddle-point-system-and-block-preconditioners]]).

[F2] The Schur quadratic form satisfies
$(\beta^2/\Lambda)M_Q\le S\le(C_b^2/\alpha)M_Q$
([[thm-na-pressure-schur-spectral-equivalence-from-infsup]]).

[F3] Every self-adjoint endomorphism of a finite-dimensional real inner
product space has an orthonormal eigenbasis
([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F4] Rank-nullity gives $\dim V=\dim\ker T+\dim\operatorname{im}T$ for a
linear map on a finite-dimensional space ([[thm-rank-nullity]]).

## Proof
1.1 By [F3], the SPD matrices $A$ and $\gamma M_Q$ have symmetric positive square roots and inverse square roots. Put $$ T=(\gamma M_Q)^{-1/2}BA^{-1/2},\qquad X=P_\gamma^{-1/2}KP_\gamma^{-1/2} =\begin{pmatrix}I&T^T\\T&0\end{pmatrix}. $$ Then $TT^T=(\gamma M_Q)^{-1/2}S(\gamma M_Q)^{-1/2}$. Congruencing [F2] by $(\gamma M_Q)^{-1/2}$ shows $a_\gamma I\le TT^T\le b_\gamma I$. Hence $TT^T$ is positive definite and all its eigenvalues $\mu_j$ lie in $[a_\gamma,b_\gamma]$. [F1, F2, F3, algebra]

2.1 By [F3], choose an orthonormal eigenbasis $y_1,\ldots,y_m$ of $TT^T$, with eigenvalues $\mu_j>0$. Set $x_j=T^Ty_j/\sqrt{\mu_j}$. Then $Tx_j=\sqrt{\mu_j}y_j$ and $$ x_i^Tx_j=\frac{y_i^TTT^Ty_j}{\sqrt{\mu_i\mu_j}}=\delta_{ij}, $$ so the $x_j$ are orthonormal. On the two-dimensional space spanned by $(x_j,0)$ and $(0,y_j)$, $X$ has matrix $$ \begin{pmatrix}1&\sqrt{\mu_j}\\\sqrt{\mu_j}&0\end{pmatrix}, $$ whose characteristic polynomial is $\lambda^2-\lambda-\mu_j$. Its two roots are $\lambda_-(\mu_j)$ and $\lambda_+(\mu_j)$. [F1, F3, step 1.1, algebra]

3.1 The matrix $TT^T$ is positive definite by step 1.1, so for every $y\in\mathbb R^m$, $x=T^T(TT^T)^{-1}y$ satisfies $Tx=y$. Thus $T:\mathbb R^n\to\mathbb R^m$ is onto, and [F4] gives $\dim\ker T=n-m$. For $x\in\ker T$, $X(x,0)=(x,0)$, giving eigenvalue $1$ on this kernel. The $m$ orthonormal pairs from step 2.1 and this $n-m$ dimensional kernel account for all $n+m$ dimensions and hence for the full spectrum of $X$. [F1, F4, step 1.1, step 2.1, algebra]

4.1 If $C$ is the Cholesky factor in the symmetric-preconditioning definition, then $P_\gamma=CC^T$. Let $O=P_\gamma^{-1/2}C$; step 1.1 gives $OO^T=I$, so $O$ is orthogonal and $$ C^{-1}KC^{-T}=O^T(P_\gamma^{-1/2}KP_\gamma^{-1/2})O. $$ Therefore the published Cholesky-symmetric preconditioning has the same spectrum as $X$. Since $\lambda_-$ decreases and $\lambda_+$ increases on $s>0$, the eigenvalue intervals follow from step 1.1. [F1, F3, step 1.1, step 3.1, algebra] ∎
