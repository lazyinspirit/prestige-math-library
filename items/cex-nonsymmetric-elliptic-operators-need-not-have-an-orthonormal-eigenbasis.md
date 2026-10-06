---
id: cex-nonsymmetric-elliptic-operators-need-not-have-an-orthonormal-eigenbasis
kind: counterexample
title: "Coercive non-symmetric forms need not have an orthonormal eigenbasis"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [cor-a-simple-eigenvalue-has-one-dimensional-eigenspace, def-bounded-coercive-and-symmetric-sesquilinear-forms, def-characteristic-polynomial-of-a-matrix, def-countable-choice, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-hilbert-space, def-matrix-product-and-identity-matrix, def-real-and-complex-inner-product-space, def-self-adjoint-positive-unitary-and-normal-operator, thm-cauchy-schwarz-in-an-inner-product-space, thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.1 (symmetry hypothesis of Theorem 4.2) and Section 4.4 (nonsymmetric forms), printed pp. 83-86 and 98-100 (read in full)'
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 4, symmetry and ellipticity hypotheses of the discrete spectral theorem, printed pp. 27-28 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

Every bounded coercive sesquilinear form on a finite-dimensional Hilbert space has an orthonormal basis of eigenvectors.

## Facts & Assumptions

**Given:** the field $\mathbb K\in\{\mathbb R,\mathbb C\}$, the matrix $M=\begin{pmatrix}2&2\\0&1\end{pmatrix}$ acting on $\mathbb K^2$, and the form $a(u,v):=(Mu,v)$.

[F1] Sesquilinear forms, boundedness and coercivity: a form is bounded when $|a(u,v)|\le C\|u\|\|v\|$ and coercive with constant $\alpha>0$ when $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$; the adjoint form is $a^*(u,v)=\overline{a(v,u)}$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F2] Finite-dimensional Hilbert-space data: $\mathbb K^2$ carries the standard inner product, linear in the first argument and conjugate-linear in the second, and $(Mu,v)$ is computed by matrix multiplication ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]], [[def-matrix-product-and-identity-matrix]]).

[F3] Eigenvalue data for endomorphisms of finite-dimensional spaces: eigenvalues form $\sigma_{\mathbb K}(T)=\{\lambda:\chi_T(\lambda)=0\}$ for the characteristic polynomial $\chi_T$ of the matrix of $T$, and an eigenvalue of algebraic multiplicity one spans a one-dimensional eigenspace ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-characteristic-polynomial-of-a-matrix]], [[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]], [[cor-a-simple-eigenvalue-has-one-dimensional-eigenspace]]).

[F4] Cauchy--Schwarz: $|(u,v)|\le\|u\|\|v\|$ in an inner product space ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Counterexample

1.1 The Hermitian part of $M$ is $H:=\tfrac12(M+M^*)=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ and $\operatorname{Re}a(u,u)=(Hu,u)$ for $u=(u_1,u_2)$. Writing $x=|u_1|$ and $y=|u_2|$, the elementary bound $2\operatorname{Re}(u_2\overline{u_1})\ge-2xy$ gives $\operatorname{Re}a(u,u)\ge 2x^2-2xy+y^2$. With $\varphi:=\tfrac{1+\sqrt5}{2}$ one has $\alpha:=\tfrac{3-\sqrt5}{2}=2-\varphi>0$ and $\varphi^{-1}=\varphi-1=1-\alpha$, hence $2x^2-2xy+y^2-\alpha(x^2+y^2)=\varphi\bigl(x-y/\varphi\bigr)^2\ge0$. Therefore $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$, so $a$ is coercive with constant $\alpha$. [F1, F2, given, algebra]

1.2 Boundedness: for all $u,v$ one has $|a(u,v)|=|(Mu,v)|\le\|Mu\|\,\|v\|$ by [F4], and the coordinate estimate $$\|Mu\|^2=|2u_1+2u_2|^2+|u_2|^2\le(4+4+1)(|u_1|^2+|u_2|^2)=9\|u\|^2$$ obtained from Cauchy--Schwarz in the two-dimensional index gives $\|Mu\|\le3\|u\|$; hence $|a(u,v)|\le3\|u\|\|v\|$ and $a$ is bounded. [F2, F4, algebra]

1.3 Eigenvalues and eigenvectors: the characteristic polynomial of $M$ is $\chi_M(\lambda)=(2-\lambda)(1-\lambda)$, whose roots are $1$ and $2$; by [F3] the spectrum is $\{1,2\}$, both roots are simple, and each eigenspace is one-dimensional. Solving $(M-2I)u=0$ gives $u_2=0$, so $E_2=\mathbb K\,(1,0)$, and solving $(M-I)u=0$ gives $u_1+2u_2=0$, so $E_1=\mathbb K\,(2,-1)$. The two exhibited eigenvectors satisfy $((2,-1),(1,0))=2\ne0$. [F2, F3, given, algebra]

2.1 No orthonormal eigenbasis exists. Suppose $u,v$ were an orthogonal pair of nonzero eigenvectors; since $E_1$ and $E_2$ are one-dimensional and distinct, after relabelling $u\in E_2$ and $v\in E_1$, so $u=c(1,0)$ and $v=d(2,-1)$ with $c,d\ne0$, and step 1.3 gives $(u,v)=2c\overline d\ne0$, a contradiction. Thus no orthogonal pair of eigenvectors exists, although $a$ is bounded and coercive by steps 1.1 and 1.2 and all its eigenvalues $1,2$ are real. The displayed form is therefore a counterexample to the refuted statement: the symmetry hypothesis of the symmetric elliptic spectral theorem is not redundant. [F1, F3, step 1.1, step 1.2, step 1.3] ∎

