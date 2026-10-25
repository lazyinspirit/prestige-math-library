---
id: lem-a-collar-product-region-deformation-retracts-onto-its-face
kind: lemma
title: "A product collar deformation retracts onto its face"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-smooth-collar-of-a-manifold-boundary, def-retraction-and-deformation-retract, def-homotopy-equivalence, def-singular-chain-complex-of-a-pair, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-naturality-of-the-long-exact-sequence-of-a-pair, thm-five-lemma-for-a-morphism-of-long-exact-sequences, thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology, def-relative-singular-homology]
justified_by: []
aliases: []
landmark: false
proof_strategy: explicit-formulas
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Sections 2.1-2.2 (relative homology and long exact sequences)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
dependency_level: 0
---

## Statement

Let $M$ be a smooth manifold (possibly with boundary) and let
$C=M\times[0,1]$ be a product collar with face $M_0=M\times\{0\}$ (the
restriction of a smooth collar,
[[def-smooth-collar-of-a-manifold-boundary]]). Then the projection
$$r:C\to M_0,\qquad r(x,t):=(x,0),$$
is a strong deformation retraction ([[def-retraction-and-deformation-retract]]),
and consequently for every abelian group $G$ and every $i$ the relative homology
$H_i(C,M_0;G)$ vanishes: the map of pairs $r:(C,M_0)\to(M_0,M_0)$ induces
isomorphisms on relative homology
([[def-relative-singular-homology]]).

## Facts & Assumptions

**Given:** A smooth manifold $M$, the product collar $C=M\times[0,1]$ with face $M_0=M\times\{0\}$, and an abelian group $G$.

[F1] A strong deformation retraction of $X$ onto $A\subseteq X$ is a retraction $r:X\to A$ together with a homotopy $H:\operatorname{id}_X\simeq_A i\circ r$ fixing $A$ pointwise ([[def-retraction-and-deformation-retract]]).

[F2] A map $f:X\to Y$ is a homotopy equivalence when there is $g:Y\to X$ with $g\circ f\simeq\operatorname{id}_X$ and $f\circ g\simeq\operatorname{id}_Y$ ([[def-homotopy-equivalence]]).

[L1] A homotopy equivalence induces an isomorphism on singular homology in every degree and every coefficient group ([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]).

[F3] For $A\subseteq X$ the sequence $\cdots\to H_n(A;G)\to H_n(X;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A;G)\to\cdots$ is exact ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F4] A map of pairs induces a commuting morphism of the two pair long exact sequences, including the connecting maps ([[thm-naturality-of-the-long-exact-sequence-of-a-pair]]).

[F5] If four comparison maps of a morphism of long exact sequences in an abelian category are isomorphisms, then so is the fifth ([[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]).

[L2] The relative chain group is $C_n(X,A;G)=C_n(X;G)/C_n(A;G)$, so $C_n(X,X;G)=0$ and $H_n(X,X;G)=0$ for all $n$ ([[def-singular-chain-complex-of-a-pair]], [[def-relative-singular-homology]]).

## Proof

**Proof technique:** explicit formulas.

1.1 Define $H((x,t),s):=(x,(1-s)t)$ for $(x,t)\in C$ and $s\in[0,1]$. This is continuous, being the restriction of the smooth map $M\times[0,1]^2\to C$, and it satisfies $H((x,t),0)=(x,t)$, $H((x,t),1)=(x,0)=r(x,t)$ and $H((x,0),s)=(x,0)$ for every $(x,t)\in C$ and every $s$. Thus $r$ is a retraction of $C$ onto $M_0$ and $H$ is a homotopy from $\operatorname{id}_C$ to $i\circ r$ fixing $M_0$ pointwise, so by [F1] the projection $r$ is a strong deformation retraction onto $M_0$. [F1, given, construct]

2.1 Since $r\circ i=\operatorname{id}_{M_0}$ and $H$ displays $i\circ r\simeq\operatorname{id}_C$, the maps $r$ and the inclusion $i:M_0\to C$ are homotopy inverses, so $r$ is a homotopy equivalence by [F2]. By [L1], for every $j$ the induced map $H_j(r;G):H_j(C;G)\to H_j(M_0;G)$ is an isomorphism. [F2, L1, step 1.1]

3.1 The map $r$ is a map of pairs $r:(C,M_0)\to(M_0,M_0)$, so by [F4] it induces a morphism from the exact sequence of [F3] for $(C,M_0)$ to that for $(M_0,M_0)$: $$\cdots\to H_j(M_0;G)\to H_j(C;G)\to H_j(C,M_0;G)\to H_{j-1}(M_0;G)\to\cdots$$ compared with $$\cdots\to H_j(M_0;G)\to H_j(M_0;G)\to H_j(M_0,M_0;G)\to H_{j-1}(M_0;G)\to\cdots.$$ In this morphism the comparison map on $H_j(C;G)$ is the isomorphism of step 2.1, and every comparison map on a copy of $H_j(M_0;G)$ is the identity, because on the subspace $M_0$ the map $r$ is the identity. [F3, F4, step 2.1]

4.1 Fix $i$ and apply [F5] to the five-term window of this morphism centred on the comparison map $H_i(C,M_0;G)\to H_i(M_0,M_0;G)$: by step 3.1 the four surrounding comparison maps are isomorphisms (each is either an identity or $H_j(r;G)$), so the relative comparison map is an isomorphism. [F5, step 3.1]

5.1 The relative complex of the pair $(M_0,M_0)$ is the zero complex by [L2], so $H_i(M_0,M_0;G)=0$; hence $H_i(C,M_0;G)=0$ for every $i$, and the map of pairs $r$ induces these isomorphisms on relative homology. [L2, step 4.1] ∎

## Remarks

- **The general collar case.** A smooth collar neighbourhood of $\partial M$ is diffeomorphic to a product ([[def-smooth-collar-of-a-manifold-boundary]]), so the lemma applies to it verbatim; this is the form used to identify the relative homology of the top sublevel pair in the relative Morse inequalities.
- **Choice.** The homotopy $H$ and the retraction $r$ are explicit formulas, so no choice principle is used to define the deformation; the cited homological suppliers are used as published.
- **Empty cases.** If $M=\varnothing$ then $C=\varnothing=M_0$ and all groups vanish; the argument applies with $H$ the empty map.
