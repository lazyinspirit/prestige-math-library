---
id: rem-a-closed-n-manifold-cannot-immerse-in-r-n
kind: remark
title: "A nonempty closed n-manifold cannot immerse in R-n for n at least one"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-immersion-submersion-and-constant-rank-map, cor-local-normal-form-for-immersions, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, cor-rn-is-polygonally-connected-and-locally-path-connected, def-smooth-manifold, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, def-connected-space, def-topological-manifold-without-boundary, def-compact-space, lem-compactness-of-a-subspace-is-ambient]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
dependency_level: 0
---

## Statement

Let $n\ge1$ and let $M$ be a nonempty closed smooth $n$-manifold. Then there is no immersion $M\to\mathbb R^n$; consequently positive codimension is necessary in the equidimensional closed-source case, and every formal immersion of this nonempty $M$ into $\mathbb R^n$ is non-holonomic. More generally, an equidimensional immersion $M^n\to N^n$ from a closed $M$ is a local diffeomorphism, hence an open map, and its image is open and closed in the target; since $M$ is compact and nonempty the image is nonempty compact and open, so it is a union of components of $N$. For $N=\mathbb R^n$ connected and noncompact this is impossible.

## Facts & Assumptions

**Given:** $n\ge1$, a nonempty closed smooth $n$-manifold $M$, a smooth $n$-manifold $N$, and an immersion $f:M\to N$.

[L1] An immersion at $p$ has the local normal form $u\mapsto(u,0)$ in adapted charts ([[cor-local-normal-form-for-immersions]]); in the equidimensional case $m=n$ there are no normal coordinates and the model is $u\mapsto u$ on an open subset of $\mathbb R^n$, so the restriction of $f$ is a diffeomorphism onto an open subset of $N$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[L2] The continuous image of a compact space is compact: pull an open cover of the image back to an open cover of the source, extract a finite subcover, and take its images ([[def-compact-space]], [[lem-compactness-of-a-subspace-is-ambient]]). A compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]); $M$ is compact and $N$ is Hausdorff ([[def-smooth-manifold]], [[def-topological-manifold-without-boundary]]).

[L3] $\mathbb R^n$ is connected for every $n\ge1$ ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]), and a nonempty subset that is both open and closed in a connected space is the whole space ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in M$. Since $f$ is an immersion at $x$ and $\dim M=\dim N=n$, [L1] gives charts near $x$ and $f(x)$ in which $f$ reads as the identity on an open subset of $\mathbb R^n$; hence some open neighbourhood $U_x$ of $x$ is mapped diffeomorphically onto an open subset $f(U_x)$ of $N$. Therefore $f(M)=\bigcup_{x\in M}f(U_x)$ is open in $N$, and $f$ is a local diffeomorphism. [L1, given, choose]

2.1 Since $M$ is nonempty and compact, [L2] makes $f(M)$ nonempty and compact, and since $N$ is Hausdorff, [L2] makes $f(M)$ closed in $N$. [L2, given, step 1.1]

3.1 An open and closed subset of a locally connected space is a union of components; in particular, if $N$ is connected then the nonempty clopen set $f(M)$ equals $N$. Applying this with $N=\mathbb R^n$ and [L3] gives $f(M)=\mathbb R^n$. [L3, step 1.1, step 2.1]

4.1 But $\mathbb R^n$ is not compact: the open cover by the balls of radius $k$, $k\ge1$, has no finite subcover, because a finite union of bounded sets is bounded while $\mathbb R^n$ is unbounded. This contradicts step 2.1 with $f(M)=\mathbb R^n$. Hence no immersion $M\to\mathbb R^n$ exists; since a smooth map $f$ is an immersion exactly when $(f,df)$ is a formal immersion, no formal immersion of this nonempty $M$ into $\mathbb R^n$ is holonomic, and equidimensional immersions into a general target $N$ have image a union of components of $N$ by step 3.1. [step 3.1, algebra, given] ∎
