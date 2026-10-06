---
id: ex-an-open-parallelizable-manifold-immerses-in-euclidean-space-of-equal-dimension
kind: example
title: "An open parallelizable manifold immerses in Euclidean space of equal dimension"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-smale-hirsch-for-open-source-manifolds, rem-a-closed-n-manifold-cannot-immerse-in-r-n, def-formal-immersion-between-smooth-manifolds, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-local-frame-and-global-frame-of-a-vector-bundle, cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame, def-countable-choice]
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
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
    - title: "Janek Wilhelm, The Smale–Hirsch Immersion Theorem and other Applications to Closed Manifolds, §§1–2, PDF pp. 1–3 (Theorem 1, relative parametric C⁰-dense h-principle for immersions with q > n; microextension and local h-principle 8.3.1)"
      url: https://www2.mathematik.hu-berlin.de/~wendl/Sommer2025/hPrinzip/20250530_Wilhelm.pdf
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
dependency_level: 10
---

## Example

Assume $\mathrm{AC}_\omega$. Let $M$ be an open (no compact component) smooth $m$-manifold whose tangent bundle is trivial, $TM\cong M\times\mathbb R^m$; for instance $M=\mathbb R^m$ minus a point, the open annulus $S^1\times(0,1)\subset\mathbb R^2$ in the case $m=2$, or any open subset of $\mathbb R^m$. Then $M$ immerses in $\mathbb R^m$, and even every formal immersion $M\to\mathbb R^m$ (equivalently, after fixing a global frame of $TM$ and the standard frame of $T\mathbb R^m$, a pair consisting of a smooth map $M\to\mathbb R^m$ and a smooth map $M\to GL_m(\mathbb R)$) is homotopic through formal immersions to a genuine immersion. Indeed a global frame of $TM$ together with the standard frame of $T\mathbb R^m$ defines a formal immersion $(f,F)$ for every smooth $f$, and the open-source Smale–Hirsch theorem deforms it to a genuine immersion in the equidimensional case. For $m\ge1$, a nonempty closed $m$-manifold is excluded by the equidimensional obstruction, so the open-source hypothesis is essential. In dimension zero an open manifold in this convention is empty; nonempty compact zero-manifolds do admit immersions into $\mathbb R^0$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and an open (no compact component) smooth $m$-manifold $M$ whose tangent bundle is trivial, $TM\cong M\times\mathbb R^m$.

[F1] A vector bundle is trivial if and only if it has a global frame, and a global frame is the same as a family of everywhere linearly independent sections ([[def-local-frame-and-global-frame-of-a-vector-bundle]], [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]).

[L1] The open-source Smale–Hirsch theorem: for an open source $M$ and $m\le n$ the derivative map $D:\operatorname{Imm}(M,N)\to\operatorname{FImm}(M,N)$ is a weak homotopy equivalence, with the relative parametric form; in particular every formal immersion is homotopic through formal immersions to a genuine immersion ([[thm-smale-hirsch-for-open-source-manifolds]]).

[L2] A smooth map $f:M\to\mathbb R^m$ together with a bundle map $F:TM\to T\mathbb R^m$ over $f$ that is fibrewise injective is a formal immersion ([[def-formal-immersion-between-smooth-manifolds]]); after fixing frames of both trivial bundles, smooth bundle maps $TM\to T\mathbb R^m$ over a fixed base correspond exactly to smooth matrix-valued maps $M\to\operatorname{Mat}_{m\times m}(\mathbb R)$; the fibrewise injective maps correspond exactly to smooth maps $M\to GL_m(\mathbb R)$ ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

## Verification

**Proof technique:** direct.

1.1 Choose a global frame of $TM$ by [F1] and the standard frame of $T\mathbb R^m$; for any smooth $f:M\to\mathbb R^m$, define $F$ to be the bundle map over $f$ that carries the frame of $TM$ to the standard frame of $T\mathbb R^m$ fibrewise. Then $F$ is a fibrewise linear isomorphism, hence fibrewise injective, and $(f,F)$ is a formal immersion by [L2]. [F1, L2, given, construct]

2.1 Since $M$ has no compact component, [L1] applies in the equidimensional case $m=n$: the formal immersion $(f,F)$ is homotopic through formal immersions to a genuine immersion $g:M\to\mathbb R^m$, so $M$ immerses in $\mathbb R^m$ and every formal immersion is homotopic through formal immersions to a genuine one. [L1, step 1.1]

3.1 For $m\ge1$, a nonempty closed $m$-manifold is excluded: by the equidimensional obstruction [[rem-a-closed-n-manifold-cannot-immerse-in-r-n]] no nonempty closed $m$-manifold immerses in $\mathbb R^m$, so openness of the source is essential; the examples $M=\mathbb R^m$ minus a point, the open annulus $S^1\times(0,1)\subset\mathbb R^2$, and open subsets of $\mathbb R^m$ have trivial tangent bundles and no compact component, so the theorem applies to them. For $m=0$, the no-compact-component condition forces $M=\varnothing$, since each point is a compact component; its unique map to $\mathbb R^0$ is an immersion. The countable-choice assumption of [L1] is inherited. [L1, step 2.1] ∎

