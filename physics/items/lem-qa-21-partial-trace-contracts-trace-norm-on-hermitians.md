---
id: lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians
kind: lemma
title: Partial trace contracts the trace norm on Hermitian operators
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qc-trace-norm
  - thm-qc-trace-norm-spectral-formula
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-real-and-complex-inner-product-space
  - def-trace-of-an-endomorphism
justified_by: []
proof_strategy: direct
axiom_use: None; only finite-dimensional spectral decomposition and finite tensor coordinates are used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §1.1.3, Eq. (1.183)
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Appendix A.5"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $H_A,H_E$ be finite-dimensional complex inner-product spaces and let $X=X^\dagger$ be an endomorphism of $H_A\otimes H_E$. Then
$$\|\operatorname{Tr}_E X\|_1\le\|X\|_1.$$
The trace norm and partial trace are those of [[def-qc-trace-norm]] and [[def-qc-partial-trace]]. If either factor is zero-dimensional, both sides are zero.

## Facts & Assumptions

**Given:** Finite-dimensional complex-inner-product spaces $H_A,H_E$ and a Hermitian endomorphism $X$ of $H_A\otimes H_E$.

[F1] [[def-qc-trace-norm]]: $\|Z\|_1$ is the sum of the singular values of $Z$.

[F2] [[thm-qc-trace-norm-spectral-formula]]: $\|Z\|_1=\operatorname{tr}\sqrt{Z^\dagger Z}$.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional normal endomorphism has an orthonormal eigenbasis.

[F4] [[def-qc-partial-trace]]: in ordered orthonormal product bases, $(\operatorname{Tr}_E X)_{i i'}=\sum_jX_{(i,j),(i',j)}$.

[F5] [[thm-qc-partial-trace-characterization-and-basis-independence]]: $\operatorname{tr}((\operatorname{Tr}_E X)Y)=\operatorname{tr}(X(Y\otimes I_E))$ for every endomorphism $Y$ of $H_A$.

[F6] [[def-qc-tensor-map]]: $(Y\otimes I_E)(x\otimes e)=Yx\otimes e$ on elementary tensors.

[F7] [[def-qc-tensor-register-and-permutation]]: the product inner product and ordered product basis are the finite tensor-product convention.

[F8] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|Y\|=\max_{\|x\|=1}\|Yx\|$ on a nonzero domain.

[F9] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle x,y\rangle|\le\|x\|\|y\|$.

[F10] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: each finite-dimensional inner-product factor has an orthonormal basis.

[F11] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and [[def-real-and-complex-inner-product-space]]: $\langle Tx,y\rangle=\langle x,T^\dagger y\rangle$, and the root inner product is conjugate-symmetric.

[F12] [[def-trace-of-an-endomorphism]]: trace is the sum of diagonal entries in any ordered basis.

## Proof

**Given:** As in Facts & Assumptions.

1.1 If either tensor factor is zero-dimensional, then $X=0$ and the claimed inequality follows from the empty coordinate sum in [F4]; assume both factors are nonzero for the rest of the proof. For any Hermitian $Z$ on a nonzero finite-dimensional complex-inner-product space, [F3] gives an orthonormal eigenbasis $(e_i)$ with eigenvalues $\lambda_i$. The adjoint identity [F11] and conjugate symmetry make $\lambda_i=\langle Ze_i,e_i\rangle=\langle e_i,Ze_i\rangle=\overline{\lambda_i}$, so each $\lambda_i$ is real. For every Hermitian $Y$ with $\|Y\|\le1$, [F12] gives $\operatorname{tr}(ZY)=\sum_i\lambda_i\langle Ye_i,e_i\rangle_{\rm root}$. Again [F11] makes each diagonal entry real, and [F8]–[F9] put it in $[-1,1]$. Thus $|\operatorname{tr}(ZY)|\le\sum_i|\lambda_i|=\|Z\|_1$: in the eigenbasis, $Z^\dagger Z$ has eigenvalues $\lambda_i^2$, so [F2] its nonnegative square root has eigenvalues $|\lambda_i|$, and [F1], [F2], [F12] give the trace norm sum. Equality is attained by the Hermitian contraction acting by $\operatorname{sgn}(\lambda_i)$ on each $e_i$ (and by $0$ when $\lambda_i=0$). Hence $\|Z\|_1=\sup_{Y=Y^\dagger,\ \|Y\|\le1}|\operatorname{tr}(ZY)|$. [F1, F2, F3, F4, F8, F9, F11, F12, choose, cases, algebra]

1.2 Formula [F4] shows $\operatorname{Tr}_E X$ is Hermitian: transposing and conjugating its $(i,i')$ entry gives $\sum_j\overline{X_{(i',j),(i,j)}}=\sum_jX_{(i,j),(i',j)}$. If $Y=Y^\dagger$ and $\|Y\|\le1$, choose an orthonormal basis $(f_j)$ of $H_E$ by [F10] and write arbitrary $\xi=\sum_jx_j\otimes f_j$ and $\zeta=\sum_jy_j\otimes f_j$. The product inner product and tensor-map action [F6]–[F7] give $\langle(Y\otimes I_E)\xi,\zeta\rangle=\sum_j\langle Yx_j,y_j\rangle=\sum_j\langle x_j,Yy_j\rangle=\langle\xi,(Y\otimes I_E)\zeta\rangle$ by self-adjointness and [F11], so $Y\otimes I_E$ is Hermitian. Also [F6]–[F8] give $\|(Y\otimes I_E)\xi\|^2=\sum_j\|Yx_j\|^2\le\sum_j\|x_j\|^2=\|\xi\|^2$, so $\|Y\otimes I_E\|\le1$. [given, F4, F6, F7, F8, F10, F11, algebra]

2.1 For the remaining nonzero-factor case, apply the variational identity in step 1.1 to $\operatorname{Tr}_E X$. For each allowed $Y$, [F5] and step 1.2 give $|\operatorname{tr}((\operatorname{Tr}_E X)Y)|=|\operatorname{tr}(X(Y\otimes I_E))|\le\|X\|_1$, using step 1.1 for the Hermitian contraction $Y\otimes I_E$. Taking the supremum proves the claimed inequality. [F1, F4, F5, step 1.1, step 1.2] ∎
