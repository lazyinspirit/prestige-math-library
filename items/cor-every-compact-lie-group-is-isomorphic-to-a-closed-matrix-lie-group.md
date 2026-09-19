---
id: cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group
kind: corollary
title: Every compact Lie group is a closed matrix group
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group, lem-no-small-subgroups-in-a-lie-group, def-axiom-of-choice, def-lie-group-homomorphism-isomorphism-and-automorphism, thm-cartans-closed-subgroup-theorem, thm-continuous-homomorphisms-between-lie-groups-are-smooth, thm-local-homology-detects-interior-points-boundary-points-and-dimension, thm-smooth-inverse-function-theorem-on-manifolds, prop-exponential-map-is-natural-for-lie-group-homomorphisms]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, Corollary 4.22 and its proof"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every compact Lie group has a faithful
finite-dimensional unitary representation and is therefore isomorphic to a
closed subgroup of $U(N)$ for some $N$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice and a compact Lie group $G$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the density theorem behind [L1].

[L1] For distinct points $x\ne y$ of $G$ there is a finite-dimensional unitary representation $\pi$ with $\pi(x)\ne\pi(y)$ ([[cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group]]).

[L2] There is an open identity neighbourhood $U$ containing no subgroup other than $\{e\}$ ([[lem-no-small-subgroups-in-a-lie-group]]).

[L3] Direct sums of finite-dimensional representations are finite-dimensional; a continuous injective map from a compact space to a Hausdorff space is a homeomorphism onto its image, which is compact hence closed; and the unitary group $U(N)$ is a closed subgroup of $\mathrm{GL}_N(\mathbb C)$ ([[cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group]], [[def-lie-group-homomorphism-isomorphism-and-automorphism]]).

[L4] Under countable choice, a closed subgroup has its unique embedded Lie-group structure and every continuous homomorphism of finite-dimensional real Lie groups is smooth. Homeomorphic nonempty manifolds have equal dimension, a smooth map with invertible differential has a smooth local inverse, and a smooth Lie-group homomorphism intertwines exponential maps ([[thm-cartans-closed-subgroup-theorem]], [[thm-continuous-homomorphisms-between-lie-groups-are-smooth]], [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]], [[thm-smooth-inverse-function-theorem-on-manifolds]], [[prop-exponential-map-is-natural-for-lie-group-homomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 Choose $U$ as in [L2]. For every $x\in G\setminus U$ there is, by [L1], a finite-dimensional unitary representation $\pi_x$ with $\pi_x(x)\ne\mathrm{id}$; by continuity of $\pi_x$ there is an open neighbourhood $V_x$ of $x$ on which $\pi_x$ is nontrivial (does not contain the identity value). The sets $\{V_x\}$ cover the compact set $G\setminus U$, so finitely many of them, say $V_{x_1},\dots,V_{x_m}$, already cover it. [L1, L2]

2.1 Let $\pi:=\pi_{x_1}\oplus\dots\oplus\pi_{x_m}$ be the direct sum, a finite-dimensional unitary representation. If $g\in\ker\pi$ then $\pi_{x_j}(g)=\mathrm{id}$ for all $j$; by the choice of the $V_{x_j}$ this forces $g\notin G\setminus U$, so $g\in U$, and $\ker\pi$ is a subgroup contained in $U$, hence $\ker\pi=\{e\}$ by [L2]. Thus $\pi$ is faithful. [L2, step 1.1]

3.1 A faithful representation is an injective continuous homomorphism $\pi:G\to U(N)$, with $N=\sum_j\dim\pi_{x_j}$; its domain is compact and $U(N)$ is Hausdorff, so $\pi$ is a homeomorphism onto its compact image $H:=\pi(G)$, which is therefore closed in $U(N)$. Give $H$ its unique embedded Lie-group structure by [L4]. The corestriction $\pi:G\to H$ is a continuous homomorphism and hence smooth by [L4]. Since it is a homeomorphism, $\dim G=\dim H$ by [L4]. If $X\in\ker(d\pi_e)$, naturality of the exponential gives $\pi(\exp(tX))=\exp(t,d\pi_eX)=e$ for every $t$; injectivity of $\pi$ then gives $\exp(tX)=e$, and differentiation at $t=0$ yields $X=0$. Thus $d\pi_e$ is injective and, by equality of dimensions, is an isomorphism. Translation makes $d\pi$ invertible everywhere, so [L4] gives smooth local inverses. They agree with the global set-theoretic inverse, proving that $\pi:G\to H$ is a Lie-group isomorphism. Hence $G$ is isomorphic to the closed matrix Lie group $H\le U(N)$. [A1, L3, L4, step 2.1]∎
