---
id: ex-a-great-sphere-is-totally-geodesic
kind: example
title: A great sphere is totally geodesic
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-a-regular-level-set-is-an-embedded-submanifold", "prop-tangent-space-of-a-regular-level-set-is-the-kernel", "prop-christoffel-formula-for-the-levi-civita-connection", "prop-connection-laws-in-directional-form", "thm-the-induced-connection-is-levi-civita", "thm-weingarten-equation-and-adjointness-of-the-shape-operator", "def-totally-geodesic-submanifold"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Proposition 5.13 with complete proof, printed pages 82–83, and Exercise 8.4, printed page 139
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 15.3.1 with complete proof, printed pages 117–118
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $n\geq1$ and $0\leq k\leq n$, set
$V=\mathbb R^{k+1}\times\{0\}\subseteq\mathbb R^{n+1}$, and regard

$$S^k=S^n\cap V$$

as an equatorial subsphere with the induced round metric. Then
$S^k\subseteq S^n$ is totally geodesic. The countable-choice assumption is
inherited exactly through the general induced-connection, normal-projection,
and shape-operator interfaces.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\geq1$, $0\leq k\leq n$, and the standard equatorial inclusion of unit round spheres.

[F1] Countable choice permits a choice from every sequence of nonempty sets. [[def-countable-choice]].

[F2] A regular level set is an embedded submanifold whose tangent space is the kernel of the defining differential. [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]].

[F3] The Christoffel formula and the connection Leibniz rule compute the Euclidean Levi–Civita connection in Cartesian coordinates. [[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-connection-laws-in-directional-form]].

[F4] For an embedded Riemannian submanifold, its intrinsic Levi–Civita connection is the tangential projection of the ambient one. [[thm-the-induced-connection-is-levi-civita]].

[F5] The Weingarten identity is $\langle S_\nu X,Y\rangle=\langle\mathrm{II}(X,Y),\nu\rangle$. [[thm-weingarten-equation-and-adjointness-of-the-shape-operator]].

[F6] An embedded Riemannian submanifold is totally geodesic exactly when its second fundamental form vanishes. [[def-totally-geodesic-submanifold]].

## Verification

**Proof technique:** compute the shape operators in constant normal directions.

1.1 On $\mathbb R^{r+1}$ the function $q(z)=\langle z,z\rangle$ has differential $dq_z(w)=2\langle z,w\rangle$, which is nonzero on $q^{-1}(1)$. Thus [F2] makes each $S^r$ an embedded boundaryless hypersurface with $T_xS^r=x^\perp$.  Consequently at $x\in S^k$ one has $T_xS^k=V\cap x^\perp\subseteq T_xS^n$, the equatorial inclusion is embedded with the usual induced round metric, and its normal space inside $T_xS^n$ is exactly $V^\perp$: this subspace lies in $x^\perp$, is orthogonal to $V\cap x^\perp$, and has the required dimension $n-k$. [F2, given, algebra]

2.1 For each standard basis vector $a\in\{e_{k+2},\ldots,e_{n+1}\}\subseteq V^\perp$, define the smooth tangent field $A(y)=a-\langle a,y\rangle y$ on $S^n$. Along $S^k$ one has $\langle a,x\rangle=0$, so $A(x)=a$ and this restriction is a normal field to $S^k$ inside $S^n$ by step 1.1. For $X\in T_xS^k\subseteq V$, Cartesian differentiation gives $D_XA=-\langle a,X\rangle x-\langle a,x\rangle X=0$. By [F3]–[F4], $\overline\nabla^{S^n}_XA=(D_XA)^\top=0$. Hence the shape operator for $S^k\subseteq S^n$ is $S_aX=-(\overline\nabla^{S^n}_XA)^\top=0$. [F3, F4, step 1.1, algebra]

3.1 For tangent vectors $X,Y$, [F5] and step 2.1 give $\langle\mathrm{II}(X,Y),a\rangle=\langle S_aX,Y\rangle=0$ for every displayed basis vector $a$ of $V^\perp$. By step 1.1 the vector $\mathrm{II}(X,Y)$ itself lies in $V^\perp$, so it is zero. Thus $\mathrm{II}=0$, and [F6] proves that $S^k$ is totally geodesic in $S^n$. [F5, F6, step 1.1, step 2.1, algebra]

4.1 Every admitted sphere is nonempty. For $k=0$, its tangent bundle is zero and the calculation makes $\mathrm{II}$ the zero bilinear form. For $k=n$, the displayed normal basis is empty and the normal bundle has rank zero, so $\mathrm{II}=0$ automatically. The proof includes $k=1$ and all other intermediate dimensions; the round metrics are positive definite and both manifolds are boundaryless. Only the finite, explicitly displayed normal basis is used. The stated $\mathrm{AC}_\omega$ is inherited through [F2], [F4]–[F6], and the calculation adds no choice. There is no interval, endpoint, or biconditional claim. [F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 3.1] ∎
