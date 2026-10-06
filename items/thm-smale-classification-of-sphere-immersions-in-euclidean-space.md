---
id: thm-smale-classification-of-sphere-immersions-in-euclidean-space
kind: theorem
title: "Smale's classification of sphere immersions in Euclidean space"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration, lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension, lem-the-second-homotopy-group-of-so-three-vanishes, lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number, prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle, lem-formal-immersion-gives-the-tangent-normal-bundle-identity, def-whitney-sum-of-vector-bundles, def-stiefel-space-grassmannian-and-tautological-bundle, ex-orthogonal-and-special-orthogonal-lie-groups, cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes, thm-smale-hirsch-immersion-theorem, def-weak-homotopy-equivalence, def-formal-immersion-between-smooth-manifolds, def-space-of-immersions-and-space-of-formal-immersions, def-countable-choice, cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame, prop-tangent-space-of-a-regular-level-set-is-the-kernel]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §2.1 Theorem 5"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 4–10; $\\pi_0\\operatorname{Imm}(S^n,\\mathbb R^{n+k})\\cong\\pi_n(V_{n,n+k})$ for $k>1$, surjectivity for $k=1$, and $V_{n,n+1}\\simeq\\mathrm{SO}(n+1)$"
    - title: "John Francis, The h-Principle, Lecture 10: Classifying immersions of spheres, after Smale (notes by A. Beaudry)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/10eversing.pdf
      locator: "PDF pp. 1–2; the difference class and the cases $n=k+1$, $n=k+2$"
dependency_level: 13
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $1\le m\le n$, let $F=V_m(\mathbb R^n)\cong O(n)/O(n-m)$ be the Stiefel
manifold of orthonormal $m$-frames, and let
$E=V(TS^m,\varepsilon^n)\to S^m$ be the Stiefel bundle of the section-space
proposition. Its sections are the fibrewise-injection part of the formal
non-holonomic data, and the projection
$\operatorname{FImm}(S^m,\mathbb R^n)\to\Gamma(E)$ forgetting the underlying
map and polar-normalizing the fibrewise injection is a homotopy equivalence, so path components of $\Gamma(E)$ and of
$\operatorname{FImm}(S^m,\mathbb R^n)$ agree.

1. If $n\ge m+2$, then $F$ is simply connected, $E$ admits sections (because
   $TS^m\oplus\varepsilon^{n-m}\cong\varepsilon^n$), and the difference class of
   the evaluation lemma induces a non-canonical bijection
   $\pi_0\Gamma(E)\cong\pi_m(V_m(\mathbb R^n))=\pi_m(O(n)/O(n-m))$. Since the
   Smale–Hirsch derivative map is a weak homotopy equivalence, the same set
   classifies regular homotopy classes of immersions: there is a non-canonical
   bijection between regular homotopy classes of immersions
   $S^m\to\mathbb R^n$ and $\pi_m(O(n)/O(n-m))$, realised by the clutching
   difference class of the tangent framings.
2. If $n=m+1$, then $V_m(\mathbb R^{m+1})\cong\mathrm{SO}(m+1)$ and the
   difference class gives a non-canonical bijection
   $\pi_m(\mathrm{SO}(m+1))\to\pi_0\Gamma(E)\cong\pi_0\operatorname{Imm}(S^m,\mathbb R^{m+1})$;
   in particular, if $\pi_m(\mathrm{SO}(m+1))=0$ then all immersions
   $S^m\to\mathbb R^{m+1}$ are regularly homotopic.
3. The instances used on this page: $m=1$, $n=2$, where
   $\pi_0\operatorname{Imm}(S^1,\mathbb R^2)\cong\mathbb Z$ with the rotation
   number as invariant; and $m=2$, $n=3$, where
   $\pi_2(\mathrm{SO}(3))=0$ and hence all immersions $S^2\to\mathbb R^3$ are
   regularly homotopic.

## Facts & Assumptions

**Given:** Integers $1\le m\le n$, the sphere $S^m$, the Stiefel bundle $E=V(TS^m,\varepsilon^n)$ with fibre $V_m(\mathbb R^n)$, and the space $\Gamma(E)$ of its sections.

[F1] $E$ has fibre $V_m(\mathbb R^n)$ and its sections are isometric injections. Arbitrary smooth bundle monomorphisms $TS^m\to\varepsilon^n$ over the identity correspond homeomorphically to sections of $\mathcal M=\operatorname{Mono}(TS^m,\varepsilon^n)$, whose section space strongly deformation retracts to $\Gamma(E)$ by polar normalization. There is an actual homeomorphism $\operatorname{FImm}(S^m,\mathbb R^n)\cong C^\infty(S^m,\mathbb R^n)\times\Gamma(\mathcal M)$; contracting the first factor and normalizing the second give a homotopy equivalence to $\Gamma(E)$ and a bijection of path components. [[prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle]]

[F2] Evaluation at a basepoint of the section space is a Hurewicz fibration; if the fibre $V_m(\mathbb R^n)$ is simply connected and $\Gamma(E)\ne\varnothing$, the difference class gives a non-canonical bijection $\pi_0\Gamma(E)\cong\pi_m(V_m(\mathbb R^n))$; if $n\ge m+1$, $\pi_m(V_m(\mathbb R^n))=0$ and $\Gamma(E)\ne\varnothing$, then $\Gamma(E)$ is path connected. [[lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration]]

[F3] $V_m(\mathbb R^n)$ is path connected for $n\ge m+1$ and simply connected for $n\ge m+2$, and $V_m(\mathbb R^{m+1})\cong\mathrm{SO}(m+1)$. [[lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension]], [[def-stiefel-space-grassmannian-and-tautological-bundle]]

[F4] $\pi_2(\mathrm{SO}(3))=0$. [[lem-the-second-homotopy-group-of-so-three-vanishes]]

[F5] For $m<n$ the derivative map $D:\operatorname{Imm}(S^m,\mathbb R^n)\to\operatorname{FImm}(S^m,\mathbb R^n)$ is a weak homotopy equivalence, and for compact sources it induces a bijection between regular homotopy classes of immersions and homotopy classes of formal immersions; a weak homotopy equivalence induces a bijection on path components. [[thm-smale-hirsch-immersion-theorem]], [[cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes]], [[def-weak-homotopy-equivalence]], [[def-formal-immersion-between-smooth-manifolds]], [[def-space-of-immersions-and-space-of-formal-immersions]]

[F6] The normal bundle of the standard sphere $S^m\subseteq\mathbb R^{m+1}$ is trivial with global frame $x\mapsto x$ (the radial field is nowhere zero and normal, since $T_xS^m=\ker d(|x|^2-1)_x$), and the tangent-normal identity gives $TS^m\oplus\varepsilon^1\cong\varepsilon^{m+1}$; adding trivial summands gives $TS^m\oplus\varepsilon^{n-m}\cong\varepsilon^n$ for $n\ge m+1$. [[lem-formal-immersion-gives-the-tangent-normal-bundle-identity]], [[def-whitney-sum-of-vector-bundles]], [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]

[F7] $V_m(\mathbb R^n)\cong O(n)/O(n-m)$, with $O(n-m)$ embedded as $\operatorname{diag}(I_m,Q)$; the quotient map takes the first $m$ columns, and $\mathrm{SO}$ and $O$ are the special and full orthogonal groups. [[def-stiefel-space-grassmannian-and-tautological-bundle]], [[ex-orthogonal-and-special-orthogonal-lie-groups]]

[F8] For $m=1$, $n=2$: two formal immersions of $S^1$ into $\mathbb R^2$ are in the same path component exactly when their winding invariants agree, and $\pi_0\Gamma(E)\cong\mathbb Z$ by degree. [[lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number]]

## Proof

1.1 For the quotient identification in [F7], every orthonormal $m$-frame extends to an orthonormal basis by finite-dimensional Gram–Schmidt. Two matrices have the same first $m$ columns exactly when they differ on the right by $\operatorname{diag}(I_m,Q)$ with $Q\in O(n-m)$. Thus the first-column map induces a continuous bijection $O(n)/O(n-m)\to V_m(\mathbb R^n)$; it is a homeomorphism because the source is compact and the target Hausdorff. When $n\ge m+1$, [F6] gives $TS^m\oplus\varepsilon^{n-m}\cong\varepsilon^n$. Inclusion of the tangent summand is a smooth monomorphism; polar-normalizing it by [F1] gives an isometric section of $E$, so $\Gamma(E)\ne\varnothing$. [F1, F3, F6, F7, algebra]

2.1 Clause 1: if $n\ge m+2$, then by [F3] the fibre $V_m(\mathbb R^n)$ is simply connected, and $\Gamma(E)\ne\varnothing$ by step 1.1; hence [F2] gives the non-canonical bijection $\pi_0\Gamma(E)\cong\pi_m(V_m(\mathbb R^n))$, the non-canonicity coming from the choice of trivialisation and of the section used to identify the difference classes. Passing to immersions: the derivative map is a weak homotopy equivalence by [F5], so it induces a bijection $\pi_0\operatorname{Imm}(S^m,\mathbb R^n)\cong\pi_0\operatorname{FImm}(S^m,\mathbb R^n)$, and [F1] identifies the latter with $\pi_0\Gamma(E)$; the resulting bijection between regular homotopy classes of immersions and $\pi_m(V_m(\mathbb R^n))=\pi_m(O(n)/O(n-m))$ is realised by the clutching difference class of the tangent framings. [F1, F2, F3, F5, F7, step 1.1]

2.2 Clause 2: if $n=m+1$, then $V_m(\mathbb R^{m+1})\cong\mathrm{SO}(m+1)$ by [F3], using the unique final normal vector that completes a frame to a positive orthonormal basis. In particular the fibre is path connected, so [F2] and step 1.1 give the surjection $\pi_m(F)\to\pi_0\Gamma(E)$. Its only possible identifications are the evaluation-loop action. Given a loop of evaluated frames $e_t$ based at $e_0$, write $C(e)$ for the uniquely completed oriented matrix and put $A_t=C(e_t)C(e_0)^{-1}$. These matrices define a loop in $\mathrm{SO}(m+1)$ with $A_0=A_1=I$ and $A_te_0=e_t$. For every section $s$ with $s(x_0)=e_0$, the sections $s_t(x)=A_ts(x)$ lift that loop and return to the same section $s$. Thus every evaluation loop acts trivially on every component of the fixed-value section space. The exact-sequence component map is therefore injective as well as surjective, giving the asserted non-canonical bijection $\pi_m(\mathrm{SO}(m+1))\cong\pi_0\Gamma(E)$. By [F5] it also classifies regular homotopy components of immersions; in particular vanishing of this group gives a single component. [F2, F3, F5, F7, step 1.1]

3.1 Clause 3: for $m=1$, $n=2$, clause 2 applies with $\mathrm{SO}(2)=S^1$; the winding invariant of [F8] is a surjection $\pi_0\Gamma(E)\to\mathbb Z$ that is also injective by the classification of formal immersions of the circle, so $\pi_0\Gamma(E)\cong\mathbb Z$ and [F5] gives $\pi_0\operatorname{Imm}(S^1,\mathbb R^2)\cong\mathbb Z$ with the rotation number as invariant. For $m=2$, $n=3$, clause 2 applies with $V_2(\mathbb R^3)\cong\mathrm{SO}(3)$ and $\pi_2(\mathrm{SO}(3))=0$ by [F4], so $\Gamma(E)$ is path connected and all immersions $S^2\to\mathbb R^3$ are regularly homotopic. The Smale–Hirsch input carries its countable-choice hypothesis. [F4, F5, F8, step 2.1, step 2.2] ∎
