---
id: lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph
kind: lemma
title: Shape operator and Gauss-Kronecker curvature of a graph
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-euclidean-hypersurface-normal-shape-operator-and-curvature
- lem-smooth-euclidean-hypersurface-graph-and-localization
- thm-determinant-multiplicative
- def-determinant-of-a-linear-operator
- thm-symmetry-of-higher-mixed-partials
- lem-surface-integral-is-independent-of-c-one-boundary-charts
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Ved Datar, Lectures on Riemannian Geometry
    url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    locator: Definition 14.2.1 and Corollary 14.2.2, printed p.104; Example 14.2.4, p.105; Definition 14.2.7 and Remark 14.2.8, p.106. The explicit graph determinant is derived locally in this item or its suppliers.
---

## Statement

Let $n\ge2$, let $U\subseteq\mathbb R^{n-1}$ be open, let $h\in C^\infty(U;\mathbb R)$, and let $S=\{(y,h(y)):y\in U\}\subseteq\mathbb R^n$ be the graph with the unit normal $\nu(y)=(-\nabla h(y),1)/\sqrt{1+|\nabla h(y)|^2}$ of positive last coordinate. At $p=(y,h(y))$ the shape operator $S_\nu$ of $S$ with respect to $\nu$ satisfies $\det S_\nu=\det D^2h(y)/(1+|\nabla h(y)|^2)^{(n+1)/2}$. In particular the extrinsic Gaussian (Gauss-Kronecker) curvature of $S$ vanishes at $p$ if and only if $\det D^2h(y)=0$.

## Facts & Assumptions

**Given:** $h\in C^\infty(U)$, $X(y)=(y,h(y))$, $b=\sqrt{1+|\nabla h|^2}$, and $\nu=(-\nabla h,1)/b$.

[F1] The local Euclidean shape operator is $S_\nu=-d\nu$, and it agrees with the usual hypersurface operator; curvature is its determinant. ([[def-euclidean-hypersurface-normal-shape-operator-and-curvature]], [[lem-smooth-euclidean-hypersurface-graph-and-localization]])

[F2] Determinants are multiplicative and invariant under change of basis. ([[thm-determinant-multiplicative]], [[def-determinant-of-a-linear-operator]])

[F3] Mixed second partials agree. ([[thm-symmetry-of-higher-mixed-partials]])

[F4] The graph Gram determinant and surface density are $1+|\nabla h|^2$ and its square root. ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

## Proof

**Proof technique:** direct; differentiate orthogonality and compute the determinant in the graph frame.

1.1 The columns $X_j=(e_j,h_j)$ are independent, and their Gram matrix is $G=I+\nabla h\nabla h^T$. The vector $\nu$ is unit and perpendicular to each column. Hence $G$ is positive definite and this is the positive-last-coordinate normal. Differentiating $\nu\cdot X_k=0$ gives $\langle S_\nu X_j,X_k\rangle=-\partial_j\nu\cdot X_k=\nu\cdot X_{jk}=h_{jk}/b$. In particular the normal component of $X_{jk}=h_{jk}e_n$ is $(h_{jk}/b)\nu$; the vertical vector $e_n$ itself need not be normal. [given, F1, F3, algebra]

2.1 If $A$ is the matrix of $S_\nu$ in the frame $X_j$, the pairing in step 1.1 says $GA=D^2h/b$. Consequently $A=G^{-1}D^2h/b$, and multiplicativity gives $\det S_\nu=\det D^2h/(b^{n-1}\det G)=\det D^2h/(1+|\nabla h|^2)^{(n+1)/2}$. The denominator is positive, so curvature vanishes exactly when the Hessian determinant vanishes. The Euclidean equivalence in [F1] identifies this determinant with the promised extrinsic Gaussian curvature. [F1, F2, F4, step 1.1, algebra] ∎
