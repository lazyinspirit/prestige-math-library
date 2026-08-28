---
id: thm-laplacian-kernel-dimension-counts-components
kind: theorem
title: "The multiplicity of the Laplacian eigenvalue $0$ equals the number of connected components"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-connected-graph-and-connected-component, cor-connected-components-partition-the-vertex-set, def-laplacian-matrix-of-a-finite-simple-graph, thm-laplacian-is-positive-semidefinite-and-annihilates-ones, cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, The Matrix-Tree Theorem"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Statement

Let $G$ be a finite simple graph with Laplacian matrix $L(G)$, and let
$C_1,\dots,C_r$ be its connected components. Then

$$\dim\ker L(G)=r.$$

Since $L(G)$ is real symmetric, this is equivalently the multiplicity of the
eigenvalue $0$ of $L(G)$.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with Laplacian matrix $L$ and connected components $C_1,\dots,C_r$.

[L1] The connected components of $G$ partition $V(G)$ ([[cor-connected-components-partition-the-vertex-set]]).

[F1] A connected component is a maximal connected induced subgraph ([[def-connected-graph-and-connected-component]]).

[F2] The Laplacian has diagonal entries $\deg(v)$ and off-diagonal entries $-1$ exactly on adjacent vertex pairs ([[def-laplacian-matrix-of-a-finite-simple-graph]]).

[L2] The Laplacian is positive semidefinite and annihilates the all-ones vector ([[thm-laplacian-is-positive-semidefinite-and-annihilates-ones]]).

[L3] A real symmetric matrix has an orthogonal basis of eigenvectors, so for such a matrix the geometric and algebraic multiplicities of an eigenvalue agree ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 For a vector $x=(x_v)_{v\in V(G)}$, the Laplacian quadratic form is $x^{\mathsf T}Lx=\sum_{\{u,v\}\in E(G)}(x_u-x_v)^2$, because expanding $x^{\mathsf T}(D-A)x$ groups the diagonal terms by degrees and subtracts each edge contribution twice. Therefore, if $Lx=0$, then [L2] gives $0=x^{\mathsf T}Lx$, so every summand vanishes and $x_u=x_v$ on every edge. Conversely, if $x$ is constant on every edge, then for each vertex $u$ every neighbor $v$ of $u$ satisfies $x_v=x_u$, so [F2] gives $(Lx)_u=\deg(u)x_u-\sum_{v\sim u}x_v=0$. Hence $Lx=0$. [F2, L2, algebra]

2.1 By [F1], a function on $V(G)$ is constant on every edge exactly when it is constant on each connected component. By [L1], the indicator vectors $\mathbf 1_{C_1},\dots,\mathbf 1_{C_r}$ are linearly independent and every vector constant on components is a linear combination of them. So step 1.1 shows that these indicator vectors form a basis of $\ker L$, and hence $\dim\ker L=r$. [step 1.1, L1, F1]

3.1 The final equivalence with multiplicity of the eigenvalue $0$ follows from [L3], because $L$ is real symmetric. [step 2.1, L3] ∎
