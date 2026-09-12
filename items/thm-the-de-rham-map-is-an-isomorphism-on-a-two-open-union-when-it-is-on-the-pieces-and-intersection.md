---
id: "thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection"
kind: "theorem"
title: "The de Rham map is an isomorphism on a two-open union"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-the-de-rham-and-smooth-singular-mayer-vietoris-diagram-commutes-away-from-connectors","lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors","thm-five-lemma-for-modules","def-countable-choice","lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift","thm-smooth-singular-mayer-vietoris-sequence","prop-naturality-of-the-de-rham-map"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M=U\cup V$ be an ordered two-open cover of a smooth manifold, possibly with boundary. If de Rham integration is an isomorphism in every degree on $U$, $V$ and $U\cap V$, then it is an isomorphism in every degree on $M$. A supplied subordinate smooth partition suffices in place of the choice assumption for this implication.

## Facts & Assumptions

[F1] [[lem-the-de-rham-and-smooth-singular-mayer-vietoris-diagram-commutes-away-from-connectors]] identifies the two exact Mayer–Vietoris rows and proves commutation of the restriction and difference squares.

[F2] [[lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors]] proves commutation of the connector square with the same signs and actual integration maps.

[F3] [[thm-five-lemma-for-modules]] gives a middle isomorphism in a commutative five-term diagram of exact module rows when the other four maps are isomorphisms.

[F4] [[def-countable-choice]] supplies the assumption used to obtain the form partition in [F5] and [F2].

[F5] [[lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift]] supplies the exact de Rham row under countable choice or, choice-free, from a supplied subordinate smooth partition.

[F6] [[thm-smooth-singular-mayer-vietoris-sequence]] supplies the exact smooth singular row with the actual small-chain inclusion and the same sign convention, without a choice axiom.

[F7] [[prop-naturality-of-the-de-rham-map]] makes integration commute on cochains with restriction along the four open inclusions and makes it real linear.

## Proof

**Given:** The ordered cover and isomorphism hypotheses in every degree on its two opens and their intersection. Fix an integer $q\ge0$ and put $W=U\cap V$.

1.1 Use the five consecutive terms of the exact de Rham row [F5] and smooth singular row [F6]: $$H^{q-1}(U)\oplus H^{q-1}(V)\longrightarrow H^{q-1}(W)\longrightarrow H^q(M)\longrightarrow H^q(U)\oplus H^q(V)\longrightarrow H^q(W).$$ The vertical maps are integration, with the direct sum of its two component maps at the first and fourth terms. Naturality [F7] gives both restriction squares, and naturality plus linearity gives the $V-U$ difference squares; in the countable-choice branch these are also the squares recorded in [F1]. The actual-small-chain identification in [F6] does not change these equalities: restriction of a global integration cochain to a small simplex in an open set is its integral there. The connector square commutes by [F2]. These are real vector spaces, hence modules over $\mathbb R$. [F1, F2, F5, F6, F7, given]

2.1 The first and fourth vertical maps are isomorphisms: the direct sum of the two hypothesized inverse integration maps is their inverse. The second and fifth vertical maps are the hypothesized isomorphisms on $W$ in degrees $q-1$ and $q$. Thus all four outside vertical maps in step 1.1 are isomorphisms. Applying [F3] proves the middle map $I_M:H^q_{\mathrm{dR}}(M)\to H_\infty^q(M;\mathbb R)$ is both injective and surjective. [F3, step 1.1, given]

3.1 At $q=0$ the first two terms in each row are zero because the groups in degree minus one vanish; their vertical maps are the unique isomorphisms $0\to0$. The initial injections in [F5] and [F6] give exactness at the middle term, so the same five-lemma application applies. In negative degrees both groups on $M$ are zero. This proves the conclusion in every integer degree, including $q=1$ and the top form degree, without assuming any higher singular group vanishes beforehand. [F3, F5, F6, step 2.1]

4.1 Empty opens or overlap produce zero terms, and $U=V=M$ produces diagonal and difference arrows; the same exact rows and proof cover these cases, including a point or the empty manifold. No chains are normalized or simplices discarded in [F6]. Assumption [F4] is used only to obtain the partition underlying the form row and its connector. With a partition supplied, [F5] gives the exact form row and [F2] gives connector compatibility choice-free; the other squares are the direct cochain equalities from [F7]. The five-lemma argument uses the specified inverse maps and no new choice. [F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 3.1] ∎
