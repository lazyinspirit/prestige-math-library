---
title: Universal wall groupoid on relative chambers
status: draft
research_item: def-universal-wall-groupoid-artin-tits-normalisers
dependency_level: 15
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 15, Definition 4.3 and the following paragraph
      statement: The groupoid has object set Cham(J), one morphism x^{-1}y from (x,I)
        to (y,K), and composition induced by multiplication in W on the right;
        the morphism across an adjacent wall is v_{a,I}.
      hypotheses: The article's Coxeter-system and relative-chamber conventions, with
        J a subset of the diagram vertices.
      reading_limits: The frozen extracted article text at Definition 4.3 and its
        following paragraph was read for attribution. The justification below is
        local and does not use that definition as a proof premise.
---

PDF p. 15: ` Definition 4.3 and following paragraph `

## Prerequisites

- [def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)
- [def-groupoid-conventions-artin-tits-normalisers](item-def-groupoid-conventions-artin-tits-normalisers)
- [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)
- [prop-adjacent-wall-formula-artin-tits-normalisers](item-prop-adjacent-wall-formula-artin-tits-normalisers)
- [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)
- [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)
- [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)


## Definition

Let $(W,S)$ be a Coxeter system, let $J$ be a subset of its diagram's vertex set, and let $\mathrm{Cham}(J)$ be the algebraic chamber-label set. Thus its elements are pairs $(x,I)$ with $x\in W$, $W_Jx=xW_I$, and $x$ of minimal length in $xW_I$.

The **universal wall groupoid** $\widetilde{\mathcal{BH}}(J)$ has object set $\mathrm{Cham}(J)$. For objects $A=(x,I)$ and $B=(y,K)$, its hom-set $\operatorname{Hom}(A,B)$ is the singleton whose arrow is labelled $x^{-1}y\in W$. Arrows are tagged by their source and target, even when their labels in $W$ coincide. Composition is read from left to right: the arrow $A\to B$ labelled $x^{-1}y$ followed by the arrow $B\to C=(z,L)$ labelled $y^{-1}z$ is the arrow $A\to C$ labelled $(x^{-1}y)(y^{-1}z)=x^{-1}z$.

For the geometric interpretation, assume additionally that $(W,S)$ has finite rank. Identify the labels with the relative chambers by the chamber-labelling bijection, and call two labels adjacent when their corresponding chambers share a wall. For adjacent labels $A=(x,I)$ and $B=(y,K)$, let $a\notin I$ be the wall index supplied by the adjacent-wall proposition. That proposition supplies finiteness of the standard parabolic on the crossing component, as required to define the simple wall-crossing element $v_{a,I}$. The unique arrow $A\to B$ has label $v_{a,I}$. No finiteness of $W$, $W_I$ or $W_{I\cup\{a\}}$ is assumed.

## Definition references

[def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)

[def-groupoid-conventions-artin-tits-normalisers](item-def-groupoid-conventions-artin-tits-normalisers)

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)

[thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)

[def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)

[prop-adjacent-wall-formula-artin-tits-normalisers](item-prop-adjacent-wall-formula-artin-tits-normalisers)

## Justification

The chamber-label definition supplies a nonempty set of objects and a group $W$. Taking the arrows to be the tagged triples $(A,B,x^{-1}y)$ gives a set, with the stated singleton hom-sets. Group associativity makes the prescribed composition associative. The arrow $(A,A,1)$ is an identity, and the arrow $B\to A$ labelled $y^{-1}x$ is the two-sided inverse of the arrow $A\to B$. Hence the category and groupoid axioms in [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) hold. There is an arrow between every ordered pair of objects, so the nonempty groupoid is connected in the sense of [def-groupoid-conventions-artin-tits-normalisers](item-def-groupoid-conventions-artin-tits-normalisers).

In the finite-rank geometric setting, [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers) identifies the algebraic labels with the relative chambers, and [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers) defines adjacency by a shared wall. For adjacent labels, [prop-adjacent-wall-formula-artin-tits-normalisers](item-prop-adjacent-wall-formula-artin-tits-normalisers) supplies the wall index $a\notin I$, finiteness of its crossing component's standard parabolic, and $\omega_{a,I}(x,I)=(y,K)$. The finiteness condition permits the definition in [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers), whose formula gives first coordinate $xv_{a,I}$ for $\omega_{a,I}(x,I)$. Hence $y=xv_{a,I}$. Multiplication by $x^{-1}$ on the left gives $x^{-1}y=v_{a,I}$, as claimed.
