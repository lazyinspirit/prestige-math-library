---
id: def-author-fc0d6c95270f-normalized-laplacian
kind: definition
title: Normalized graph Laplacian and its nontrivial spectrum
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-edge-order-process-coupling
  - prop-expander-prereq-laplacian-support-kernel
  - prop-expander-prereq-selfadjoint-order-and-norm
  - math:def-adjacency-matrix-of-a-finite-simple-graph
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - math:def-connected-graph-and-connected-component
  - math:def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - math:def-self-adjoint-and-normal-endomorphism
dependency_roles:
  def-expander-prereq-edge-order-process-coupling: mathematical-premise
  prop-expander-prereq-laplacian-support-kernel: mathematical-premise
  prop-expander-prereq-selfadjoint-order-and-norm: mathematical-premise
  math:def-adjacency-matrix-of-a-finite-simple-graph: mathematical-premise
  math:thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  math:def-self-adjoint-and-normal-endomorphism: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Definition

Let $G$ be a simple graph on $V=\{1,\ldots,n\}$, $n\ge2$, with adjacency matrix $A$, degrees $d_i=\sum_j A_{ij}>0$, and $D=\operatorname{diag}(d_1,\ldots,d_n)$. Define $L=D-A$ and the symmetric normalized Laplacian $\mathcal L=D^{-1/2}LD^{-1/2}=I-D^{-1/2}AD^{-1/2}$, where the diagonal matrix $D^{-1/2}$ has entries $d_i^{-1/2}$. List its real eigenvalues with multiplicity as $0=\lambda_1\le\cdots\le\lambda_n$. It is positive semidefinite, and its kernel consists of vectors $D^{1/2}f$ with $f$ constant on each connected component. In particular, connectedness is equivalent to $\lambda_2>0$. For a connected graph define its spectral deviation $\eta(G)=\max_{2\le i\le n}|1-\lambda_i|$ and its nonzero spectral condition number $\kappa(G)=\lambda_n/\lambda_2$.

## Facts & Assumptions

[F1] A simple graph, its edges and connectedness are defined by the edge-process interface ([[def-expander-prereq-edge-order-process-coupling]]).

[F2] The unnormalized graph Laplacian has quadratic form $f^*Lf=\frac12\sum_{i,j}A_{ij}|f_i-f_j|^2$ and kernel equal to the functions constant on each component ([[prop-expander-prereq-laplacian-support-kernel]]).

[F3] A Hermitian matrix is positive semidefinite when its quadratic form is nonnegative on every vector ([[prop-expander-prereq-selfadjoint-order-and-norm]]).

[F4] In a chosen vertex order, the adjacency matrix of a finite simple graph has $A_{ij}=1$ exactly when $\{i,j\}$ is an edge, and $A_{ij}=0$ otherwise. It is real symmetric, entrywise nonnegative and zero on the diagonal ([[math:def-adjacency-matrix-of-a-finite-simple-graph]]).

[F5] A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis ([[math:thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F6] Vertices are in the same connected component exactly when a path joins them; a nonempty graph is connected exactly when it has one component. [[math:def-connected-graph-and-connected-component]]

[F7] An eigenvector of an endomorphism $T$ is a nonzero vector $u$ with $Tu=\lambda u$; $\lambda$ is its eigenvalue, and the corresponding eigenspace is $\ker(T-\lambda I)$. [[math:def-eigenvalue-eigenvector-eigenspace-and-spectrum]]

[F8] A finite-dimensional inner-product-space endomorphism $T$ is self-adjoint when $T^*=T$ and normal when $TT^*=T^*T$. Every self-adjoint endomorphism is normal, since $TT^*=T^2=T^*T$. [[math:def-self-adjoint-and-normal-endomorphism]]

## Justification

**Given:** The objects and hypotheses in the definition.

**Goal:** Establish all stated claims.

1.1 By [F4], $A$ is real symmetric and nonnegative, and its loop-free support graph is $G$ in [F1], so [F2] applies to $L=D-A$. Positive degrees make $D^{1/2}$ and $D^{-1/2}$ invertible real diagonal matrices. The displayed identity for $\mathcal L$ follows by multiplication. For every $x\in\mathbb C^V$, $x^*\mathcal Lx=(D^{-1/2}x)^*L(D^{-1/2}x)\ge0$ by [F2]. Also $\mathcal L$ is real symmetric, hence Hermitian and therefore normal by [F8], so [F3] makes it positive semidefinite and [F5] gives an orthonormal eigenbasis. For every nonzero eigenvector $u$ with eigenvalue $\lambda$ as in [F7], $\lambda=(u^*\mathcal Lu)/(u^*u)$ is real and nonnegative. Thus its eigenvalues can be ordered as stated. [given, F1, F2, F3, F4, F5, F7, F8, algebra]

2.1 Multiplication by the invertible matrices shows $\mathcal Lx=0$ exactly when $L(D^{-1/2}x)=0$. Hence [F2] gives the stated kernel description. By [F6], the indicator functions of the connected components form a basis of $\ker L$, and multiplication by $D^{1/2}$ is an isomorphism from $\ker L$ onto $\ker\mathcal L$. Thus the latter kernel has dimension equal to the number of components, which is at least one. In the eigenbasis of step 1.1, that dimension is the number of zero eigenvalues counted with multiplicity. Consequently $\lambda_1=0$, and zero is simple exactly when $G$ is connected by [F6]; since all eigenvalues are nonnegative and $n\ge2$, this is equivalent to $\lambda_2>0$. In that case the maximum and ratio defining $\eta(G)$ and $\kappa(G)$ are well-defined finite real numbers, with positive denominator. [given, step 1.1, F1, F2, F5, F6, F7, algebra] ∎
