---
id: lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold
kind: lemma
title: "The complement of an oriented link is a connected smooth three-manifold"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-oriented-link-in-s-three-and-ambient-isotopy, def-smooth-manifold, def-smooth-embedding,
       def-tubular-neighbourhood-of-an-embedded-submanifold,
       thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold,
       thm-classification-of-connected-covering-spaces,
       def-cw-complex-with-closure-finiteness-and-weak-topology,
       def-topological-manifold-with-and-without-boundary,
       prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure,
       thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere,
       lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension,
       def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice,
       prop-zero-th-singular-homology-is-free-on-path-components]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Aschenbrenner, Friedl and Wilton, Decision problems for 3-manifolds and their fundamental groups, Theorem 3.1, printed p. 211; compact-manifold convention on p. 203, manifolds with boundary are included"
      url: "https://msp.org/gtm/2015/19-1/gtm-v19-n1-p08-s.pdf"
    - title: "E. E. Moise, Affine structures in 3-manifolds. V. The triangulation theorem and Hauptvermutung, Annals of Mathematics 56 (1952), 96-114; triangulation theorem for 3-manifolds (with boundary), finite when the manifold is compact"
      url: "https://doi.org/10.2307/1969769"
    - title: "Allen Hatcher, Algebraic Topology, section 4G (Corollary 4G.3: a paracompact space with a cover whose finite intersections are contractible is homotopy equivalent to its nerve), printed pp. 458-460"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Allen Hatcher, Algebraic Topology, Chapter 3.A and section 3.1 (Alexander duality; the cohomology of a finite CW complex vanishes above its dimension)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Assume the Axiom of Choice. Let $L=K_1\cup\cdots\cup K_r\subset S^3$ be an
oriented link (a finite disjoint union of oriented smoothly embedded circles,
[[def-oriented-link-in-s-three-and-ambient-isotopy]]) with $r\ge1$ components,
and let $X_L:=S^3\setminus L$. Then $X_L$ is a connected smooth $3$-manifold
without boundary, and in particular is path-connected, locally path-connected
and semilocally simply connected; moreover $X_L$ has the homotopy type of a
finite CW complex
([[def-cw-complex-with-closure-finiteness-and-weak-topology]]). Consequently the
covering-space classification
([[thm-classification-of-connected-covering-spaces]]) applies to $X_L$.

## Facts & Assumptions

**Given:** AC and an oriented link $L=K_1\cup\cdots\cup K_r\subset S^3$ with $r\ge1$ components, each the image of a smooth embedding of the standard circle.

[A1] The Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]). It supplies the AC hypotheses of [F4] and [F5], and implies countable choice for the tubular-neighbourhood theorem [F2] ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Each $K_i$ is the image of a smooth embedding of $S^1$, and the $K_i$ are pairwise disjoint, so $L$ is nonempty, compact, and a proper subset of $S^3$ ([[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-smooth-embedding]]).

[F2] Under $\mathrm{AC}_\omega$ every closed smooth embedded submanifold of a smooth manifold $M$ has a tubular neighbourhood, that is, a neighbourhood diffeomorphic to an open neighbourhood of the zero section of its normal bundle with the zero section carried to the submanifold ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[def-tubular-neighbourhood-of-an-embedded-submanifold]]).

[F3] An open subset of a smooth $n$-manifold carries a canonical restricted smooth structure making it a smooth $n$-manifold without boundary ([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]], [[def-smooth-manifold]]). A smooth manifold is locally Euclidean, Hausdorff and second countable ([[def-topological-manifold-with-and-without-boundary]]).

[F4] Each circle $K_i\cong S^1$ carries its standard finite CW structures (one $0$-cell and one $1$-cell, or two of each); the disjoint union of the finitely many $K_i$ therefore carries the disjoint-union CW structure, in which the cells are the disjoint unions of the cells of the factors and the defining clauses of a CW complex (Hausdorff, closure finiteness, weak topology) are inherited ([[def-cw-complex-with-closure-finiteness-and-weak-topology]]). Thus $L$ is a nonempty finite CW complex of dimension $1$, and $H^n(L;R)=0$ for every $n>1$ and every commutative ring $R$ ([[lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension]]).

[F5] Alexander duality: for a nonempty proper compact weakly locally contractible subspace $K\subseteq S^3$ and every commutative unital ring $R$ there are isomorphisms $\widetilde H_i(S^3\setminus K;R)\cong\widetilde H^{2-i}(K;R)$ ([[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]). Here $L$ is weakly locally contractible: near each point $L$ looks like an arc in $S^1$, and every point of $S^1$ has arbitrarily small arc neighbourhoods, which are contractible and lie in $L$.

[F6] **Literature input (finiteness).** Every compact topological $3$-manifold with boundary admits a finite triangulation (Moise’s theorem as stated in Aschenbrenner–Friedl–Wilton, Theorem 3.1, p. 211, under their compact-manifold convention; locator in the references), and a finite triangulation presents the manifold as a finite simplicial complex, hence as a finite CW complex ([[def-cw-complex-with-closure-finiteness-and-weak-topology]]). We use this standard input as quoted: it is not proved in this item. The boundary case is included in the cited theorem. Consequently every compact smooth $3$-manifold with boundary has the homotopy type of a finite CW complex.

[F7] The covering-space classification requires the base to be nonempty, path-connected, locally path-connected and semilocally simply connected ([[thm-classification-of-connected-covering-spaces]]).

## Proof

1.1 **The link exterior and its retraction.** AC supplies the countable-choice hypothesis of [F2] by [A1]. Apply [F2] to each $K_i$. Equip its normal bundle with the metric induced by the standard metric on $S^3$ (identify the quotient normal fibres with the orthogonal complements of the tangent lines). Compactness of the zero section and a finite bundle trivialization cover give a radius $\varepsilon_i>0$ whose closed fibre disks lie inside the tubular domain. Shrink these finitely many radii until their images $N_i$ are pairwise disjoint; this is possible since the $K_i$ are disjoint compact sets. Each $N_i$ is a compact smooth disk bundle with smooth boundary, without needing a global product trivialization. Put $N=\bigcup_iN_i$ and $M_0=S^3\setminus\operatorname{int}N$; local fibre-boundary charts show that $M_0$ is a compact smooth $3$-manifold with boundary $\partial N$. In normalized disk-bundle coordinates $0<|v|\le1$ define $H_u(x,v)=(x,((1-u)+u/|v|)v)$, for $0\le u\le1$. Its radius is $(1-u)|v|+u$, so it stays in the punctured disk bundle, equals the identity at $u=0$, reaches the fibre boundary at $u=1$, and fixes that boundary at every $u$. This formula is independent of local trivializations and glues with the identity on $M_0$. It is a strong deformation retraction $X_L\to M_0$. [A1, F1, F2, given, construct]

1.2 **Local structure.** $X_L$ is the complement in the smooth $3$-manifold $S^3$ of the closed subset $L$, hence is an open subset of $S^3$, and by [F3] it carries a canonical smooth structure making it a smooth $3$-manifold without boundary. In particular every point of $X_L$ has a neighbourhood homeomorphic to an open subset of $\mathbb R^3$: such a set is locally path-connected, and an open Euclidean ball about a point is simply connected, so the point has arbitrarily small simply connected neighbourhoods. Hence $X_L$ is locally path-connected and semilocally simply connected, and it is nonempty because $L\neq S^3$ by [F1]. [F1, F3, given]

1.3 **Connectedness.** By [F5] applied to the ring $R=\mathbb Z$ and the compact weakly locally contractible set $L\subset S^3$ (nonempty and proper by [F1]), $$\widetilde H_0(X_L;\mathbb Z)\cong\widetilde H^{2}(L;\mathbb Z).$$ By [F4], $L$ is a finite CW complex of dimension $1$, so $H^2(L;\mathbb Z)=0$; therefore $\widetilde H_0(X_L;\mathbb Z)=0$. The degree-zero homology theorem [[prop-zero-th-singular-homology-is-free-on-path-components]] identifies this with the augmentation kernel of the free group on path components, so the nonempty $X_L$ has one path component and is connected. [A1, F1, F4, F5]

2.1 **Path-connectedness.** A space that is connected and locally path-connected is path-connected: for $x\in X_L$ the set of points that can be joined to $x$ by a path is open (local path-connectedness) and closed (its complement is also open), hence equals all of the connected space $X_L$. Thus $X_L$ is path-connected. [step 1.2, step 1.3]

2.2 **Finite CW type.** By step 1.1, $M_0$ is a compact smooth $3$-manifold with boundary and $X_L\simeq M_0$. By the literature input [F6], $M_0$ admits a finite triangulation, hence is homeomorphic to a finite simplicial complex, and a finite simplicial complex is a finite CW complex. Therefore $M_0$, and with it $X_L$, has the homotopy type of a finite CW complex. [F6, step 1.1]

3.1 **Conclusion.** Steps 1.2 and 2.1 show that $X_L$ is nonempty, path-connected, locally path-connected and semilocally simply connected, so the hypotheses of the covering-space classification [F7] are satisfied; step 1.2 shows that $X_L$ is a smooth $3$-manifold without boundary, and step 2.2 gives its finite CW homotopy type. This proves every assertion of the statement. [F7, step 1.2, step 2.1, step 2.2] ∎
