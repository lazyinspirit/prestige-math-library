---
id: prop-the-null-set-definition-is-independent-of-the-smooth-atlas
kind: proposition
title: "The null-set definition is independent of the smooth atlas"
status: published
dependency_level: 2
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-subset-of-a-smooth-manifold,
       lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets,
       thm-lipschitz-images-of-null-sets-in-rn-are-null,
       def-smooth-manifold, def-smoothly-compatible-charts,
       def-null-and-content-zero-in-rn,
       prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure,
       lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it,
       def-countable-choice, thm-n-cross-n-countable, thm-geometric-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-step5-published-install-r1/receipts/prop-the-null-set-definition-is-independent-of-the-smooth-atlas.json
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. If $\mathcal A$ and $\mathcal B$ are smooth atlases on the same smooth manifold
$M$, then a subset $E\subseteq M$ is $\mathcal A$-null if and only if it is
$\mathcal B$-null.

## Facts & Assumptions

**Given:** Countable choice and smooth atlases $\mathcal A$ and $\mathcal B$ on a smooth manifold $M$, and a subset $E\subseteq M$.

[F1] In positive dimension, a set is atlas-null when every chart image in that atlas is Euclidean null; in dimension zero atlas-nullity means the set is empty ([[def-null-subset-of-a-smooth-manifold]]).

[L1] For a $C^1$ map and prescribed source and target charts, each point of a compact source set has a neighbourhood on whose closure the coordinate representative is Lipschitz ([[lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets]]).

[F2] Charts belonging to the same smooth structure have smooth transition maps in their displayed coordinates; in particular the identity map has $C^1$ coordinate representatives ([[def-smooth-manifold]], [[def-smoothly-compatible-charts]]).

[F3] An open subset of a smooth manifold carries its restricted smooth structure ([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

[L4] Global Lipschitz maps $\mathbb R^m\to\mathbb R^m$ preserve Euclidean null sets, and Euclidean nullity passes to subsets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]], [[def-null-and-content-zero-in-rn]]).

[L2] Under countable choice, every manifold open cover has a countable subordinate coordinate-ball cover ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

[A1] Countable choice selects one witness from each set in a countable family of nonempty witness sets; in particular it selects cube-cover sequences for countable null families ([[def-countable-choice]]).

[L3] A double sequence can be flattened and the geometric budgets $\varepsilon2^{-j-1}$ sum to $\varepsilon$ ([[thm-n-cross-n-countable]], [[thm-geometric-series]]).

## Proof
**Proof technique:** direct.

1.1 If $\dim M=0$, [F1] says that either atlas declares $E$ null exactly when $E=\varnothing$, proving the equivalence. Assume now $m=\dim M\ge1$, that $E$ is $\mathcal A$-null, and fix $(V,\psi)\in\mathcal B$. For $(U,\varphi)\in\mathcal A$ and $p\in U\cap V$, set $T=\psi\circ\varphi^{-1}$ on $\varphi(U\cap V)$. By [F2], $T$ is $C^1$. Apply [L1] to the identity of $M$, the restricted source chart $(U\cap V,\varphi)$, the target chart $(V,\psi)$, and the compact set $\{p\}$. It supplies an open neighbourhood $O$ of $p$ in $U\cap V$ on whose coordinate closure $T$ is Lipschitz. Choose a closed cube $Q\subseteq\varphi(O)$ with $\varphi(p)$ in its interior and put $W=\varphi^{-1}(\operatorname{int}Q)$. These $W$, with all their displayed chart and cube witnesses, form an open cover of $V$. [F1, F2, L1, given, cases, choose, construct]

1.2 Write $Q=\prod_{i<m}[a_i,b_i]$ and define $r_Q:\mathbb R^m\to Q$ by $(r_Q(x))_i=\min\{b_i,\max\{a_i,x_i\}\}$. Each scalar clamp changes distances by at most the original distance; summing the squares gives $\|r_Q(x)-r_Q(y)\|_2\le\|x-y\|_2$. Thus $T\circ r_Q$ is a global Lipschitz map and agrees with $T$ on $\varphi(W)$. Since $\varphi(E\cap W)$ is a subset of the null set $\varphi(E\cap U)$, [L4] gives that $\psi(E\cap W)=(T\circ r_Q)(\varphi(E\cap W))$ is null in the prescribed $\psi$ coordinates. [F1, L4, step 1.1, construct, algebra]

2.1 View $V$ as an open smooth manifold by [F3]. Apply [L2] to its cover from step 1.1, obtaining a finite or countable subordinate coordinate-ball cover $(W_j)_{j\ge0}$, with the empty or finite case handled by empty sets after the last term. Use [A1] to select a containing member $W$ and its chart and cube witnesses for each nonempty $W_j$. By step 1.2 and the subset clause of [L4], $C_j=\psi(E\cap W_j)$ is Euclidean null. Since these sets cover $E\cap V$, $\psi(E\cap V)=\bigcup_{j\ge0}C_j$. [F3, L2, A1, L4, step 1.1, step 1.2, choose]

3.1 Fix $\varepsilon>0$. Each null $C_j$ admits a sequence of closed-cube covers with total volume at most $\varepsilon2^{-j-1}$. Use [A1] to choose these sequences simultaneously. Flatten them by [L3]; the resulting sequence covers $\bigcup_j C_j$ and has total volume at most $\sum_j\varepsilon2^{-j-1}=\varepsilon$. Thus $\psi(E\cap V)$ is null. Since $(V,\psi)$ was arbitrary, $E$ is $\mathcal B$-null. Interchanging $\mathcal A$ and $\mathcal B$ gives the reverse implication; step 1.1 already covers dimension zero. [A1, L3, step 1.1, step 2.1] ∎
