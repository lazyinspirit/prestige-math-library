---
id: lem-thom-isomorphisms-glue-over-two-trivializing-opens
kind: lemma
title: Thom isomorphisms glue over two trivializing opens
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-thom-isomorphism-for-a-trivial-oriented-bundle, thm-mayer-vietoris-sequence-in-singular-cohomology, def-relative-singular-cochain-complex, thm-cover-small-inclusion-is-a-chain-homotopy-equivalence, def-relative-cup-product, thm-cup-product-leibniz-identity, prop-relative-cup-products-are-natural-and-compatible-with-connectors, thm-five-lemma-for-modules]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Mayer–Vietoris proof of the Thom isomorphism, printed pp.195–196"
---

## Statement

Let $U,V$ be open in $B$.  Suppose an oriented metric bundle has compatible
normalized Thom classes on $U$, $V$, and $W=U\cap V$, and cup product with
each is a Thom isomorphism.  Then the local classes glue to a unique normalized
Thom class on $U\cup V$, and cup product with it is an isomorphism.

## Facts & Assumptions

**Given:** The ordered two-open cover and the compatible local Thom data in the
statement.

[F1] [[thm-thom-isomorphism-for-a-trivial-oriented-bundle]] supplies the local
isomorphisms when the three restrictions are trivial; the proof below uses
only the isomorphisms stipulated in the statement.

[F2] [[thm-mayer-vietoris-sequence-in-singular-cohomology]] gives the base
two-open sequence with its difference convention.

[F3] [[def-relative-singular-cochain-complex]] and
[[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]] give the same
small-chain construction for the disk/sphere pair.

[F4] [[def-relative-cup-product]] gives the small-chain relative cup product,
and [[thm-cup-product-leibniz-identity]] gives its cochain Leibniz rule.
[[prop-relative-cup-products-are-natural-and-compatible-with-connectors]]
then gives naturality and the pair-connector identities.

[F5] [[thm-five-lemma-for-modules]] turns an isomorphism on four neighboring
terms of an exact ladder into one on the middle term.

## Proof

**Proof technique:** relative Mayer–Vietoris and the five lemma.

1.1 Put $D_T=D(\xi)|_T$ and $S_T=S(\xi)|_T$. Let
$C_*^{\mathcal U}(D_{U\cup V},S_{U\cup V})$ be the quotient of
$C_*(D_U)+C_*(D_V)$ by its sphere subcomplex. The small-chain subdivision
of [F3] makes its inclusion in the ordinary relative chain complex a
chain-homotopy equivalence. There is a degreewise split exact chain sequence
$$0\to C_*(D_W,S_W)\to C_*(D_U,S_U)\oplus C_*(D_V,S_V)\to C_*^{\mathcal U}(D_{U\cup V},S_{U\cup V})\to0,$$
where the last map is addition and the first is the signed pair of
inclusions. Dualizing this split sequence gives a termwise exact cochain
sequence whose first term is the small relative cochain complex and whose
other maps are restriction and restriction-difference. Transporting its
cohomology through the small-chain equivalence gives the ordinary relative
Mayer–Vietoris sequence. The usual kernel/image chase in [F2] fixes its
connecting map and signs. [F2, F3]

2.1 Compatibility says $(u_U,u_V)$ lies in the kernel of the relative difference map.  Exactness in step 1.1 supplies $u\in H^n(D_{U\cup V},S_{U\cup V};R)$ restricting to both local classes.  Each fiber lies in at least one open set, so these restrictions show that $u$ is normalized. [F1, step 1.1]

3.1 For every $k$, place the base Mayer–Vietoris sequence from [F2] over the relative sequence of step 1.1 shifted by $n$, and use cup product with $u$ vertically. Restrictions commute by relative naturality in [F4]. For the Mayer–Vietoris connector, choose a cochain on one member lifting a difference cocycle. The lower connector is represented by its coboundary. The Leibniz rule in [F4], together with $\delta u=0$, says that the coboundary of the lifted cochain cupped with $u$ is its coboundary cupped with $u$, up to the fixed degree sign. Thus the connector square commutes with that unit sign by a direct calculation in the termwise split small-cochain sequences of step 1.1. The four outer vertical maps at the $U$, $V$, and $W$ terms are the stipulated local Thom isomorphisms. Hence [F5] makes the middle map $H^k(U\cup V;R)\to H^{k+n}(D_{U\cup V},S_{U\cup V};R)$ an isomorphism. [F2, F4, F5, step 1.1, step 2.1]

4.1 If $u'$ is another normalized gluing class, the isomorphism in step 3.1 writes $u-u'=\pi^*a\smile u$ for a unique $a\in H^0(U\cup V;R)$.  Restriction to any fiber evaluates $a$ at its basepoint times the orientation generator; normalization makes this zero, so $a$ vanishes on every component and $u=u'$.  If $U$, $V$, or $W$ is empty, the sequence reduces to an identity or disjoint finite additivity and the same argument applies.  Rank zero, the zero ring, a one-set cover, zero classes, both difference-map endpoints, and every graded connector sign are included.  Exactness supplies one class for one compatible pair; it does not choose an indexed family, so no AC is used. [F2, F4, step 1.1, step 2.1, step 3.1] ∎
