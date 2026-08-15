---
id: thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms
kind: theorem
title: "A family of diagonalisable endomorphisms of a finite-dimensional space is simultaneously diagonalisable if and only if its members commute pairwise"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simultaneous-diagonalisability-of-a-family, lem-commuting-endomorphisms-preserve-eigenspaces, thm-invariant-restrictions-of-diagonalisable-endomorphisms-are-diagonalisable, thm-diagonalisability-eigenspace-direct-sum-criterion, cor-dimensions-of-matrix-and-linear-map-spaces, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Theorem 5.2 and Corollary 5.4'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Statement

Let $\mathcal T$ be a family of diagonalisable endomorphisms of a finite-dimensional vector space. Then $\mathcal T$ is simultaneously diagonalisable if and only if its members commute pairwise.

## Facts & Assumptions

**Given:** A family $\mathcal T$ of diagonalisable endomorphisms of a finite-dimensional space $V$.

[L1] Commuting endomorphisms preserve each other's eigenspaces ([[lem-commuting-endomorphisms-preserve-eigenspaces]]).

[L2] The restriction of a diagonalisable endomorphism to an invariant subspace is diagonalisable ([[thm-invariant-restrictions-of-diagonalisable-endomorphisms-are-diagonalisable]]).

[L3] The space $\mathcal L(V,V)$ is finite-dimensional, with dimension $(\dim V)^2$ ([[cor-dimensions-of-matrix-and-linear-map-spaces]]).

[L4] $\operatorname{span}(S)$ is the intersection of all subspaces containing $S$, hence the smallest such subspace ([[def-linear-combination-and-span]]); and $\operatorname{span}(S)=L(S)$, the set of finite linear combinations of elements of $S$ ([[lem-span-is-the-set-of-linear-combinations]]).

[L5] A diagonalisable endomorphism's distinct eigenspaces have direct sum equal to the whole space ([[thm-diagonalisability-eigenspace-direct-sum-criterion]]).

[L6] Simultaneous diagonalisability means that one basis diagonalises every member of the family ([[def-simultaneous-diagonalisability-of-a-family]]).

## Proof

**Proof technique:** direct.

1.1 First suppose $\mathcal T$ is finite and pairwise commuting. Induct on its size. For the empty family any basis works. For a nonempty family, choose one member $T$. Its eigenspaces have direct sum $V$ by [L5]; by [L1] every remaining member preserves each eigenspace, and by [L2] every restriction is diagonalisable. Applying the induction hypothesis within each eigenspace and concatenating the resulting bases gives one common eigenbasis. [L1, L2, L5, choose]

1.2 For an arbitrary pairwise commuting family, [L3] makes $U=\operatorname{span}(\mathcal T)$ finite-dimensional. Choose a finite basis of $U$; by [L4], each basis vector is a finite linear combination of members of $\mathcal T$. The union of the finitely many supports is a finite subfamily $\mathcal T_0$ spanning $U$. [L3, L4, choose]

1.3 Conversely, if one basis diagonalises every member of $\mathcal T$ as in [L6], then every pair is represented by diagonal matrices, which commute. The represented endomorphisms therefore commute. [L6, given, algebra]

2.1 Step 1.1 gives a common eigenbasis for $\mathcal T_0$. Every member of $\mathcal T$ lies in its span, so it is represented by a linear combination of diagonal matrices in that basis and is diagonal too. Hence [L6] makes $\mathcal T$ simultaneously diagonalisable. [step 1.1, step 1.2, L6]

3.1 Steps 2.1 and 1.3 prove both directions, including empty families and the zero space. [step 2.1, step 1.3] ∎
