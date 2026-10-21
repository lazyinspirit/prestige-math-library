---
id: lem-link-nilpotent-peripheral-presentation-from-diagram
kind: lemma
title: Finite nilpotent peripheral presentation from a link diagram
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-based-string-link-and-labeled-link-peripheral-system
  - def-lower-central-series-and-magnus-expansion-for-links
  - thm-link-wirtinger-presentation-correctness
  - lem-link-wirtinger-local-meridian-conjugacy
  - lem-link-peripheral-longitude-word-from-diagram
  - lem-hall-malcev-lower-central-commutators-add-weights
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable
        3-Manifolds, §2.5
      url: https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content
      locator: Printed pp.16–17, PDF pp.24–25; finite lower-central peripheral
        presentation and Magnus convention. The finite substitution proof is
        supplied locally.
    - title: John Milnor, Link Groups, §6
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf
      locator: Printed pp.192–193, PDF pp.17–18; elimination of Wirtinger arc
        generators for the reduced link group. The finite nilpotent version is
        proved below, without assuming reduced meridian commutativity.
dependency_level: 6
---

## Statement

Assume AC. Let a nonempty labeled oriented closed link have a based regular diagram with an underpass on every component. Choose an initial arc on each component, its positive meridian $x_i$, and the common upper basing. Put $F=\langle x_1,\ldots,x_r\rangle$ and $G=\pi_1(E_L)$. For every $q\ge2$ there are explicit words $l_{i,q}\in F$ representing the preferred longitudes in $G/\Gamma_qG$ such that the meridian map identifies
$$G/\Gamma_qG\cong F/\langle\!\langle\Gamma_qF,[x_i,l_{i,q}]\ (1\le i\le r)\rangle\!\rangle.$$
The words can be chosen coherently through each finite degree. They are obtained through the $(q-1)$st approximation of the crossing-conjugation recursion, initialized by component meridians and using the preceding approximation for every over-arc. In particular this describes the kernel, rather than merely the surjectivity, of the component-meridian map. Quotienting further by commutators of arbitrary conjugates of each component meridian adds exactly those commutators to this presentation.

## Statement references

[[thm-link-wirtinger-presentation-correctness|Positive-meridian Wirtinger presentation]]

[[lem-link-peripheral-longitude-word-from-diagram|Ordered peripheral words]]

[Stees, §2.5, pp.16–17](https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content)

## Facts & Assumptions

**Given:** Full AC, the finite based diagram, and $q\ge2$.

[A1] Full AC supplies the countable-choice hypotheses of the diagram suppliers. [[def-axiom-of-choice]]

[F1] The strand generators and crossing relations give the exterior group, with relation $a_t=o^{-1}a_so$ in source-to-target order and its solved inverse in the other direction. [[thm-link-wirtinger-presentation-correctness]], [[lem-link-wirtinger-local-meridian-conjugacy]]

[F2] The product of signed over-meridians in component traversal order is its blackboard parallel; multiplying by the initial meridian to minus the self-writhe gives its preferred longitude. [[lem-link-peripheral-longitude-word-from-diagram]]

[F3] Commutators of lower-central weights $a,b$ have weight at least $a+b$, and the induced graded commutator pairing is biadditive. [[lem-hall-malcev-lower-central-commutators-add-weights]]

[F4] The lower-central and commutator conventions are $\Gamma_{s+1}H=[H,\Gamma_sH]$ and $[u,v]=uvu^{-1}v^{-1}$. [[def-lower-central-series-and-magnus-expansion-for-links]]

## Proof

1.1 Cut the traversal of component $i$ just before its initial arc. For every other arc $a$ of that component let $v_a$ be the signed product of over-arc symbols encountered before $a$; for the initial arc set $v_a=1$. The nonclosing relations in [F1] successively say $a=v_a^{-1}x_iv_a$. The final relation on that component is $x_i=W_i^{-1}x_iW_i$, with $W_i$ the full traversal product. This rewriting follows by induction along the traversal and does not treat an over-arc as an already eliminated free generator. [A1, F1, given, construct]

2.1 Define words in $F$ simultaneously by $P_a^{(1)}=x_i$ and $P_a^{(s+1)}=v_a(P^{(s)})^{-1}x_iv_a(P^{(s)})$, retaining $P_a^{(s)}=x_i$ at each initial arc. Substitution in a finite word preserves congruence modulo a normal subgroup. If the substituends change modulo $\Gamma_s$, the conjugate of a weight-one generator changes only modulo $\Gamma_{s+1}$, because $[F,\Gamma_s]\subseteq\Gamma_{s+1}$ by [F3]. Consequently $P_a^{(s+1)}\equiv P_a^{(s)}\pmod{\Gamma_{s+1}F}$: the case $s=1$ is equality in the abelianization, and this observation proves the induction. In $G$, the true arc meridian equals $P_a^{(s)}$ modulo $\Gamma_{s+1}G$, by the same induction starting from conjugate meridians in the abelianization. [F1, F3, F4, step 1.1, induction, construct]

3.1 Put $P_a=P_a^{(q-1)}$, $W_i=W_i(P^{(q-1)})$ and $l_{i,q}=x_i^{-\operatorname{wr}_i}W_i$. Step 2.1 and [F2] show that these are longitude lifts in $G/\Gamma_qG$. The relation $[x_i,l_{i,q}]=1$ is equivalent to $[x_i,W_i]=1$. Let $H$ be the quotient of $F$ by these relations and $\Gamma_qF$. Its root-meridian map to $G/\Gamma_qG$ is defined because the true meridian and its true peripheral parallel commute on the boundary torus. Every arc meridian is the image of $P_a$, so this map is onto. [F1, F2, F4, step 2.1, construct]

4.1 Conversely assign every Wirtinger arc the image of $P_a$ in $H$. If an undercrossing does not close its component, its conjugation equation follows from the consecutive partial traversal products evaluated at $P^{(q-1)}$: those products give $P^{(q)}$, and $P^{(q)}\equiv P^{(q-1)}$ modulo $\Gamma_q$ by step 2.1. At the closing crossing the same argument leaves exactly $[x_i,W_i]=1$, imposed in $H$. Thus all crossing relations hold. By [F1] this gives $G\to H$, and it factors through $G/\Gamma_qG$ because $H$ is a quotient of $F/\Gamma_qF$. The two maps are inverse: they fix every root generator of $H$, and step 2.1 says their composite fixes every arc generator of $G/\Gamma_qG$. This proves the displayed presentation and the kernel assertion. [F1, F4, step 2.1, step 3.1, algebra, construct]

5.1 For a fixed finite maximum degree, the iterates in step 2.1 stabilize in every lower quotient; applying the same observation to the finite word $W_i$ proves coherence of $l_{i,q}$. Finally, forming a further quotient adds the prescribed relations to the kernel. Surjectivity in step 3.1 means every conjugating element of $G/\Gamma_qG$ has a lift in $F$, so the added relations are exactly $[u^{-1}x_iu,v^{-1}x_iv]$ for words $u,v\in F$. Their entire normal closure is meant; the argument does not assert this infinite family is finite. [F4, step 2.1, step 4.1, algebra] ∎
