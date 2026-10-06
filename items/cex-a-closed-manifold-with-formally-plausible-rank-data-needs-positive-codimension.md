---
id: cex-a-closed-manifold-with-formally-plausible-rank-data-needs-positive-codimension
kind: counterexample
title: "A closed manifold with formally plausible rank data needs positive codimension"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [rem-a-closed-n-manifold-cannot-immerse-in-r-n, thm-smale-hirsch-immersion-theorem, def-formal-immersion-between-smooth-manifolds, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-local-frame-and-global-frame-of-a-vector-bundle, cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]
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
dependency_level: 12
---

## Statement refuted

The $n$-torus $T^n=S^1\times\cdots\times S^1$ admits formal immersions into $\mathbb R^n$ for every $n\ge1$: it is a product of circles, the standard angular fields give a global frame of $TT^n\cong T^n\times\mathbb R^n$, and the identity bundle map is fibrewise injective. Yet no nonempty closed $n$-manifold — in particular not $T^n$ — admits an immersion into $\mathbb R^n$. Thus the rank data $TM\oplus\nu\cong\varepsilon^n$ with $\nu$ of rank zero is formally plausible but geometrically impossible, and the equidimensional closed-source case genuinely needs the positive-codimension hypothesis; the Smale–Hirsch theorem is not contradicted, because its closed-source form requires $m<n$.

## Facts & Assumptions

**Given:** The $n$-torus $T^n=S^1\times\cdots\times S^1$ for $n\ge1$.

[F1] Use the finite product atlas obtained from the standard two-arc atlas of each circle. Its tangent charts have smooth derivative transitions and, together with the angular frame, explicitly identify $TT^n$ with the smooth product $T^n\times\mathbb R^n$; the finite atlas and a fixed rational-ball basis establish the tangent total-space structure without choice. Thus $TT^n$ is trivial: the product of the standard angular fields of the circle factors is a global frame, and a vector bundle with a global frame is trivial ([[def-local-frame-and-global-frame-of-a-vector-bundle]], [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[L1] A vector bundle map over a base map that is a fibrewise linear isomorphism of trivialized bundles is fibrewise injective, hence determines a formal immersion ([[def-formal-immersion-between-smooth-manifolds]]).

[L2] No nonempty closed $n$-manifold admits an immersion into $\mathbb R^n$ ([[rem-a-closed-n-manifold-cannot-immerse-in-r-n]]); the closed-source form of the Smale–Hirsch theorem requires positive codimension $m<n$ ([[thm-smale-hirsch-immersion-theorem]]).

## Counterexample

**Proof technique:** direct.

1.1 For the explicitly constructed tangent bundles of [F1], the standard angular fields of the circle factors give a global frame of $TT^n$, so $TT^n\cong T^n\times\mathbb R^n$ by [F1]; pairing this frame with the standard frame of $T\mathbb R^n$ defines the identity bundle map over any chosen smooth base map, in particular over a constant map, and this map is a fibrewise linear isomorphism, hence fibrewise injective. Thus $(f,F)$ is a formal immersion $T^n\to\mathbb R^n$ for every $n\ge1$, and the rank data $TT^n\oplus\nu\cong\varepsilon^n$ with $\nu$ of rank zero are formally realized. [F1, L1, given, construct]

2.1 Yet no nonempty closed $n$-manifold, in particular not $T^n$, admits an immersion into $\mathbb R^n$, by [L2]; the equidimensional obstruction applies verbatim to $T^n$, which is closed and nonempty. Hence the formal datum of step 1.1 is not holonomic, and the equidimensional closed-source case genuinely needs the positive-codimension hypothesis. [L2, step 1.1]

3.1 The Smale–Hirsch theorem is not contradicted: its closed-source form requires $m<n$, so it makes no assertion about this example; the example shows the rank data alone do not force the existence of an immersion when the source is closed and the codimension is zero. [L2, step 2.1] ∎
