---
id: "cor-module-finite-affine-map-quasi-finite"
kind: "corollary"
title: "Module-finite affine maps have finite fibres"
deps: ["def-module-finite-affine-classical-map", "def-quasi-finite-morphism-classical", "def-fibre-dimension-at-point-classical", "thm-affine-nullstellensatz-correspondence"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Proposition 8.28 and Lemma 8.29, p.185"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Each fibre has coordinate ring a quotient of a finite-dimensional k-algebra. Distinct maximal ideals are pairwise comaximal; the elementary Chinese remainder construction makes the number of them at most the vector-space dimension. Include that finite-ideal CRT argument inline."
---

## Statement

Every module-finite morphism between affine classical algebraic sets is quasi-finite.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For affine classical algebraic sets $X,Y$, call a morphism $f:X\to Y$ module-finite if $k[X]$, via pullback, is a finitely generated $k[Y]$-module. This is the affine module criterion. Empty affine sets are allowed, with zero coordinate ring; the definition does not assert a global affine-preimage criterion for arbitrary varieties. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-module-finite-affine-classical-map]]).

[F2] A morphism $f:X\to Y$ of classical varieties is quasi-finite if every closed-point fibre $X_y$ is a finite set; empty fibres are allowed. Classical morphisms here are of finite type: for an affine target chart and an affine source chart above it, any finite set of $k$-algebra generators of the source ring also generates it over the target ring. The inverse image has a finite affine cover because it is an open of a Noetherian variety. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-quasi-finite-morphism-classical]]).

[F3] For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-fibre-dimension-at-point-classical]]).

[F4] Assume the Axiom of Choice. Let $k$ be an algebraically closed field. 1. The assignments $$ X\longmapsto I(X),\qquad J\longmapsto V(J) $$ induce mutually inverse inclusion-reversing correspondences between affine algebraic sets $X\subseteq \mathbf A_k^n$ and radical ideals $J\subseteq k[x_1,\ldots,x_n]$. 2. Under this correspondence, nonempty irreducible affine algebraic sets correspond exactly to prime ideals. ([[thm-affine-nullstellensatz-correspondence]]).

## Proof

1.1 Put $A=k[Y]$ and $B=k[X]$, a finite $A$-module. For $y\in Y$, the quotient $D=B/\mathfrak m_yB$ is finite-dimensional over $A/\mathfrak m_y=k$. Its reduced quotient is the coordinate ring of the fibre. Thus it suffices to bound the number of distinct maximal ideals of $D$. [F1, F3]

2.1 For any finite family of distinct maximal ideals $\mathfrak n_1,\ldots,\mathfrak n_s$, pairwise comaximality supplies, for every $i\ne j$, an element of $\mathfrak n_j$ congruent to $1$ modulo $\mathfrak n_i$. Multiplying these elements for fixed $i$ produces $e_i$ with residues $1$ at $i$ and $0$ at all other indices. The $e_i$ are linearly independent over $k$, by reduction modulo each $\mathfrak n_i$. Hence $s\le\dim_kD$, so there can only be finitely many maximal ideals. If $D=0$ there are none. [step 1.1]

3.1 Each fibre point gives a distinct evaluation maximal ideal of $D$, and the affine point/ideal correspondence accounts for these points. Thus every fibre is finite, including the empty fibre, and the morphism is quasi-finite by definition. Empty source or target causes no exception. [F2, F4, step 2.1] ∎
