---
id: lem-graphical-lasso-finite-budget-properties
kind: lemma
title: "Coordinate minimization, positive-definiteness invariant and termination of the finite-budget graphical-lasso procedure"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-graphical-lasso-coordinate-descent
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Friedman, Hastie and Tibshirani, Sparse inverse covariance estimation with the lasso"
      url: "https://hastie.su.domains/Papers/graph.pdf"
      locator: "Sections 2–3 supply the block/lasso updates; bounded-loop and guarded-output claims are local consequences of the defined truncation."
---

## Statement

Let $p\ge2$ be an integer, $S\in\mathbb S_+^p$ be real symmetric positive semidefinite, $\lambda>0$, and $R,K$ be positive integers. Execute the finite-budget block and cyclic-coordinate graphical-lasso procedure with these inputs in exact real arithmetic, treating its finite-dimensional matrix operations as exact operations. The initialized matrix and every accepted matrix $W$ are symmetric positive definite. In every block reached before failure, its principal matrix $V$ is positive definite, every $V_{\ell\ell}>0$, and every coordinate update is well-defined and uniquely minimizes
$$Q_{V,s}(\beta)=\tfrac12\beta^TV\beta-s^T\beta+\lambda\sum_{k=1}^{p-1}|\beta_k|$$
with all other coordinates fixed. Each candidate matrix is finite and symmetric; it is accepted exactly when positive definite. The procedure terminates after at most $RpK(p-1)$ coordinate updates and $Rp$ candidate eigenvalue tests, returning either `failure` or a symmetric positive-definite matrix $\Theta=W^{-1}$. These assertions do not assert convergence of the iterates or global optimality for the sparse-precision objective.

## Statement references

[[alg-graphical-lasso-coordinate-descent]]

[[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

## Facts & Assumptions

**Given:** The inputs and execution specified in the Statement.

[F1] The procedure initializes $W=S+\lambda I_p$, uses the same temporary permutation for $S$ and $W$, resets $\beta=0$ for each block, makes $K$ finite cyclic sweeps with the specified soft-threshold update, restores the original indexing, accepts a candidate only if all its eigenvalues are positive, and returns $W^{-1}$ after $R$ outer sweeps unless an explicit guard returns `failure`. [[alg-graphical-lasso-coordinate-descent]].

[F2] Every real symmetric matrix has an orthonormal eigenbasis, by applying the real spectral theorem to its self-adjoint endomorphism on Euclidean space. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]].

## Proof

**Proof technique:** direct.

1.1 Initially $W$ is symmetric, and for every nonzero $x\in\mathbb R^p$, $x^TWx=x^TSx+\lambda\|x\|^2\ge\lambda\|x\|^2>0$. Thus initialization is positive definite. If the current $W$ is positive definite, reindexing both its rows and columns only reindexes this quadratic form. For a nonzero $z\in\mathbb R^{p-1}$, extending $z$ by a last zero in the temporary ordering gives $z^TVz>0$. Hence $V$ is positive definite and $V_{\ell\ell}=e_\ell^TVe_\ell>0$ at each coordinate. [given, F1, algebra]

2.1 Hold all coordinates except $\beta_\ell=t$ fixed, and write $v=V_{\ell\ell}>0$ and $r=s_\ell-\sum_{k\ne\ell}V_{\ell k}\beta_k$. Expanding the symmetric quadratic gives $Q_{V,s}(\beta)=q(t)+C$, where $q(t)=\tfrac12vt^2-rt+\lambda|t|$ and $C$ is independent of $t$. Put $a=(r-\lambda)/v$ if $r>\lambda$, $a=0$ if $|r|\le\lambda$, and $a=(r+\lambda)/v$ if $r<-\lambda$. In these three cases respectively put $u=1$, $u=r/\lambda$, and $u=-1$. Then $va-r+\lambda u=0$, $|u|\le1$, and $ua=|a|$, so $|t|-|a|-u(t-a)=|t|-ut\ge0$. Consequently $q(t)-q(a)=\tfrac12v(t-a)^2+\lambda(|t|-|a|-u(t-a))\ge\tfrac12v(t-a)^2$, and the lower bound is strictly positive whenever $t\ne a$. Thus $a=\mathsf{Soft}(r,\lambda)/v$ is the unique coordinate minimizer. All quantities are real and division is by a positive number, so finitely many such updates produce a finite real vector $\beta$; the nonpositive-diagonal guard cannot fire while the current $W$ is positive definite. [F1, step 1.1, algebra]

3.1 For such a block, $V\beta$ and $d$ are finite and the block candidate $\begin{pmatrix}V&V\beta\\(V\beta)^T&d\end{pmatrix}$ is symmetric. Restoring original indexing preserves symmetry. By [F2] any symmetric candidate $A$ has a representation $A=UDU^T$ with $U$ orthogonal and $D$ real diagonal. The identity $x^TAx=\sum_iD_{ii}(U^Tx)_i^2$ shows that $A$ is positive definite if all $D_{ii}>0$; conversely applying positive definiteness to $x=Ue_i$ shows that every $D_{ii}>0$. Thus the candidate guard accepts exactly the positive-definite candidates. Initialization, the within-block reasoning and this acceptance rule give induction over all reached blocks: every accepted $W$ is symmetric positive definite, and each later block again has the properties proved above until a candidate guard returns `failure`. [F1, F2, step 1.1, step 2.1, algebra]

4.1 There are at most $Rp$ blocks, each with $K(p-1)$ coordinate updates and one finite-dimensional eigenvalue test; early failure only decreases these counts. Every reached operation is well-defined by the preceding steps and the stipulated exact matrix operations, so execution terminates with failure or completes all blocks. In the latter case the final $W=UDU^T$ has positive diagonal eigenvalues by step 3.1. Hence $W^{-1}=UD^{-1}U^T$ exists, is symmetric and has $x^TW^{-1}x=\sum_iD_{ii}^{-1}(U^Tx)_i^2>0$ for every nonzero $x$. This proves every asserted property without a convergence or global-optimizer inference. [given, F1, F2, step 2.1, step 3.1, algebra] ∎
