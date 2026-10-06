---
id: lem-an-ambient-isotopy-preserves-the-orientation-of-an-invariant-round-sphere
kind: lemma
title: "An ambient isotopy preserves the orientation of an invariant round sphere"
status: published
origin: session
dependency_level: 5
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-ck-and-multi-index-notation-in-several-variables,
       def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy,
       def-induced-boundary-orientation,
       cor-diffeomorphisms-preserve-interior-and-boundary,
       prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       def-orientable-manifold,
       thm-intermediate-value,
       cor-determinant-is-a-polynomial-in-the-matrix-entries,
       def-higher-derivatives-and-smoothness,
       def-directional-and-partial-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2, 6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)"
      url: "https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf"
---

## Statement

Let $H:\mathbb R^3\times I\to\mathbb R^3$ be an ambient isotopy with $H_0=\mathrm{id}$ ([[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]]) and suppose $H_1$ maps the closed unit ball $B^3\subseteq\mathbb R^3$ to itself. Then $H_1$ restricts to a diffeomorphism of the unit sphere $S^2=\partial B^3$ of degree $+1$; that is, $H_1|_{S^2}$ preserves the boundary orientation of $S^2$ ([[def-induced-boundary-orientation]]). Consequently, if $r:\mathbb R^3\to\mathbb R^3$ is a linear reflection in a plane through the origin (so $\det r=-1$ and $r$ preserves $S^2$), there is no such ambient isotopy with $H_1|_{S^2}=r|_{S^2}$.

## Facts & Assumptions

**Given:** An ambient isotopy $H:\mathbb R^3\times I\to\mathbb R^3$ with $H_0=\mathrm{id}$ and $H_1(B^3)=B^3$.

[F1] Each $H_t$ is a diffeomorphism of $\mathbb R^3$ and $H$ is smooth; in particular every differential $dH_t(x)$ is an invertible linear map ([[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]], [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F2] The entries of the Jacobian matrix of the smooth map $(x,t)\mapsto H_t(x)$ are partial derivatives of a $C^\infty$ function of several variables and are therefore continuous; the determinant is a polynomial in the matrix entries ([[def-ck-and-multi-index-notation-in-several-variables]], [[def-directional-and-partial-derivatives]], [[cor-determinant-is-a-polynomial-in-the-matrix-entries]]).

[L1] A continuous real function on $I=[0,1]$ that never vanishes and is positive at $0$ is positive everywhere ([[thm-intermediate-value]]).

[L2] A diffeomorphism of manifolds with boundary maps the boundary onto the boundary and the interior onto the interior ([[cor-diffeomorphisms-preserve-interior-and-boundary]]).

[L3] The boundary orientation of $S^2=\partial B^3$ is the outward-normal-first orientation of [[def-induced-boundary-orientation]] applied to the oriented closed ball; $S^2$ is a nonempty connected orientable boundaryless manifold ([[def-orientable-manifold]]).

[L4] A diffeomorphism between nonempty connected oriented boundaryless manifolds has degree $+1$ if it preserves orientation and $-1$ if it reverses it ([[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]]). A linear reflection $r$ with $\det r=-1$ restricts to a diffeomorphism of $S^2$ that reverses the outward-normal-first boundary orientation, since $r$ maps the ball onto itself, carries outward normals to outward normals, and reverses the ambient orientation; hence $r|_{S^2}$ has degree $-1$ by the same proposition.

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\mathbb R^3$ and put $\varphi(t):=\det dH_t(x)$ for $t\in I$. The function $\varphi$ is continuous on $I$ by [F2], and it never vanishes because each $dH_t(x)$ is invertible by [F1]; since $\varphi(0)=\det\mathrm{id}=1>0$, the intermediate value property [L1] gives $\varphi(t)>0$ for every $t\in I$. Hence $dH_t(x)$ is orientation-preserving at every $(x,t)$, and in particular $H_1$ preserves the orientation of $\mathbb R^3$ at every point. [F1, F2, L1]

2.1 Since $H_1$ is a diffeomorphism and $H_1(B^3)=B^3$, [L2] shows that $H_1$ maps the interior of $B^3$ onto the interior and the sphere $S^2=\partial B^3$ onto itself; thus $H_1|_{S^2}:S^2\to S^2$ is a diffeomorphism. Moreover $dH_1$ carries the outward transverse direction of $S^2$ at each $p$ to the outward transverse direction at $H_1(p)$: the interior maps to the interior, so a tangent vector pointing into the ball maps to a vector pointing into the ball, and an outward transverse vector maps to an outward transverse vector: the inward boundary coordinate of the image vanishes at the boundary, is positive on the interior side, and has nonzero normal derivative by invertibility, so that derivative is positive. Orthogonality to the sphere need not be preserved. [F1, L2, step 1.1]

3.1 The restriction $H_1|_{S^2}$ preserves the outward-normal-first boundary orientation of [L3]: if $(v_1,v_2)$ is a positive basis of $T_pS^2$, so that $(n_p,v_1,v_2)$ is a positive basis of $T_p\mathbb R^3$ with $n_p$ outward, then step 1.1 makes $(dH_1(n_p),dH_1(v_1),dH_1(v_2))$ positive at $H_1(p)$, and $dH_1(n_p)$ is an outward vector by step 2.1, so $(dH_1(v_1),dH_1(v_2))$ is a positive basis of $T_{H_1(p)}S^2$. Hence $H_1|_{S^2}$ is an orientation-preserving diffeomorphism of $S^2$, and [L4] gives $\deg(H_1|_{S^2})=+1$. [L3, L4, step 1.1, step 2.1]

4.1 Let $r:\mathbb R^3\to\mathbb R^3$ be a linear reflection, $\det r=-1$, preserving $S^2$. By [L4] the restriction $r|_{S^2}$ reverses the boundary orientation and has degree $-1$, while every diffeomorphism $H_1|_{S^2}$ arising as above has degree $+1$ by step 3.1; therefore $H_1|_{S^2}=r|_{S^2}$ is impossible, and no such ambient isotopy can restrict to the reflection. [L4, step 3.1] ∎
