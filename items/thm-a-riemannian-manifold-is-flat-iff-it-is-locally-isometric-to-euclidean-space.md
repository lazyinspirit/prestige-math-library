---
id: thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space
kind: theorem
title: A Riemannian manifold is flat iff it is locally isometric to Euclidean space
status: draft
origin: pipeline
deps: ["thm-a-flat-connection-admits-local-parallel-frames", "def-riemann-curvature-four-tensor", "def-levi-civita-connection", "lem-commuting-independent-vector-fields-give-a-coordinate-system", "def-riemannian-isometry-and-local-isometry", "thm-gram-schmidt-orthonormalisation", "prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 11.2.1 and Lemma 11.2.3 with complete proofs, printed pages 73–74
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, Theorem 7.3 and complete proof, printed pages 119–121
    - title: Will J. Merry, Differential Geometry (2021)
      url: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
      locator: Theorem 33.9, local triviality of a flat connection
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $(M^n,g)$ be a boundaryless Riemannian manifold. Then
$\operatorname{Rm}=0$ if and only if every point has a neighborhood
Riemannian-isometric to an open subset of Euclidean $\mathbb R^n$.

## Facts & Assumptions

[F1] A flat finite-rank connection admits a local frame of parallel sections.
[[thm-a-flat-connection-admits-local-parallel-frames]].

[F2] The four-tensor is $\operatorname{Rm}(X,Y,Z,T)=g(R(X,Y)Z,T)$.
[[def-riemann-curvature-four-tensor]].

[F3] The Levi–Civita connection is torsion free and metric compatible.
[[def-levi-civita-connection]].

[F4] A commuting pointwise-independent frame is a coordinate frame locally.
[[lem-commuting-independent-vector-fields-give-a-coordinate-system]].

[F5] A Riemannian local isometry is a local diffeomorphism pulling back the
target metric to the source metric. [[def-riemannian-isometry-and-local-isometry]].

[F6] Gram–Schmidt orthonormalizes any supplied finite independent list by a
finite recursion. [[thm-gram-schmidt-orthonormalisation]].

[F7] A smooth function with zero differential is constant on each connected
component. [[prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component]].

## Proof

**Given:** A point $p\in M$.

1.1 Suppose first that a neighborhood $U$ of $p$ has a local isometry $y$ to an open subset of Euclidean space. In the coordinate frame $\partial_i$ induced by $y$, [F5] gives $g(\partial_i,\partial_j)=\delta_{ij}$. Write $\Gamma_{ijk}=g(\nabla_{\partial_i}\partial_j,\partial_k)$. Torsion freeness in [F3] makes $\Gamma_{ijk}=\Gamma_{jik}$, while metric compatibility and the constant metric coefficients make $\Gamma_{ijk}=-\Gamma_{ikj}$. Alternating these two relations around the three indices gives $\Gamma_{ijk}=-\Gamma_{ijk}$, so every $\Gamma_{ijk}=0$. [F3, F5, algebra]

1.2 Conversely suppose $\operatorname{Rm}=0$. Nondegeneracy of $g$ in [F2] gives $R=0$, so [F1] supplies near $p$ a parallel frame $(V_1,\ldots,V_n)$. Shrink its domain to a connected coordinate neighborhood. Metric compatibility [F3] gives $d(g(V_i,V_j))=0$; by [F7], every entry of this Gram matrix is constant there. [F1, F2, F3, F7]

2.1 Thus every coordinate field in step 1.1 is parallel on $U$. Substitution in the curvature commutator gives $R(\partial_i,\partial_j)\partial_k=0$; tensoriality and [F2] give $\operatorname{Rm}=0$ on $U$. Since such neighborhoods cover $M$, local Euclidean isometry implies $\operatorname{Rm}=0$ globally. [F2, step 1.1, algebra]

2.2 Apply [F6] to $(V_1(p),\ldots,V_n(p))$. The resulting orthonormal basis is obtained by an invertible constant matrix $C$; applying that same matrix to the fields defines a parallel frame $(E_1,\ldots,E_n)$. The Gram matrix is constant by step 1.2 and equals the identity at $p$, so this frame is orthonormal throughout the neighborhood. [F6, step 1.2, algebra, construct]

3.1 Torsion freeness and parallelness give $[E_i,E_j]=\nabla_{E_i}E_j-\nabla_{E_j}E_i=0$. By [F4], after shrinking again there are coordinates $(x^1,\ldots,x^n)$ with $E_i=\partial/\partial x^i$. Consequently $g_{ij}=g(E_i,E_j)=\delta_{ij}$, so the coordinate map is a local diffeomorphism satisfying $g=x^*g_{\mathrm{Euc}}$ and hence is a Riemannian local isometry by [F5]. This proves the reverse implication at the arbitrary point $p$. [F3, F4, F5, step 2.2]

4.1 In dimension zero, each point is itself an open neighborhood and is isometric to the unique open subset $\mathbb R^0$, while both curvature tensors vanish. In dimension one the same proof applies and the pair skews force curvature to vanish. The empty manifold satisfies both universal conditions. The boundaryless hypothesis is essential to the stated target: a boundary point cannot have a neighborhood locally diffeomorphic to an open subset of $\mathbb R^n$. No infinite or global selection is made. [F2, F5, step 1.1, step 2.1, step 1.2, step 2.2, step 3.1] ∎
