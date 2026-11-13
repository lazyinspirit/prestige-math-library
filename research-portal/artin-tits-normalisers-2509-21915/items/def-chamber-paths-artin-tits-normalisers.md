---
id: def-chamber-paths-artin-tits-normalisers
kind: definition
title: Chamber paths, concatenation and wall words
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-chambers-walls-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - prop-adjacent-wall-formula-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
  - thm-relative-chamber-labelling-input-artin-tits-prerequisites
dependency_roles:
  def-chambers-walls-artin-tits-normalisers: mathematical-premise
  def-chamber-labels-artin-tits-normalisers: mathematical-premise
  def-simple-wall-crossing-artin-tits-normalisers: mathematical-premise
  prop-adjacent-wall-formula-artin-tits-normalisers: mathematical-premise
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  thm-relative-chamber-labelling-input-artin-tits-prerequisites: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: definition
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 13, §3.4, before Proposition 3.29
      statement: A path is a sequence of pairwise consecutively adjacent chambers,
        with its first and last chambers as source and target and length one
        less than the number of chambers. Matching paths concatenate. Each
        consecutive pair gives a simple wall crossing, and the associated
        element is the ordered product of its crossing elements.
      hypotheses: The relative chamber arrangement and its Coxeter-system and
        chamber-label notation in §§2–3; consecutive chambers are adjacent.
      reading_limits: The frozen extracted article text at the cited passage was read
        for attribution. This citation is not used as a proof of the
        definition's well-definedness.
dependency_level: 15
---

## Definition

Work in the finite-rank relative chamber arrangement with fixed $J\subseteq\Gamma_0$ and Coxeter group $W$ of the adjacent-wall formula. Its chambers are labelled by pairs $(x,I)\in\mathrm{Cham}(J)$: $W_Jx=xW_I$ and $x$ has minimum word length in $xW_I$. A chamber is a connected component of the arrangement complement; two distinct chambers are adjacent when they share a wall, meaning a codimension-one intersection of a chamber closure with an arrangement hyperplane.

A **path** is a finite nonempty sequence $p=((x_1,I_1),\ldots,(x_m,I_m))$ of chamber labels such that each consecutive pair labels adjacent chambers. Its source is $s(p)=(x_1,I_1)$, its target is $t(p)=(x_m,I_m)$, and its length is $m-1$. If $q=((y_1,K_1),\ldots,(y_n,K_n))$ and $t(p)=s(q)$, their **concatenation** is $p*q=((x_1,I_1),\ldots,(x_m,I_m),(y_2,K_2),\ldots,(y_n,K_n))$.

For each consecutive pair, let $a_i\in\Gamma_0\setminus I_i$ be the index supplied by the adjacent-wall formula, so that $\omega_{a_i,I_i}(x_i,I_i)=(x_{i+1},I_{i+1})$. The length-one path consisting of this pair is called a **simple wall crossing**, and is denoted $\omega_{a_i,I_i}:(x_i,I_i)\to(x_{i+1},I_{i+1})$. Thus $p$ is the ordered concatenation of its simple wall crossings when $m>1$. Define its **wall word element** by $v_p=v_{a_1,I_1}\cdots v_{a_{m-1},I_{m-1}}\in W$, where each $v_{a_i,I_i}$ is the simple wall-crossing element. When $m=1$, the empty product is the identity of $W$.

## Definition references

[[def-relative-cone-artin-tits-normalisers]]

[[thm-relative-chamber-labelling-input-artin-tits-prerequisites]]

[[def-chambers-walls-artin-tits-normalisers]]

[[def-chamber-labels-artin-tits-normalisers]]

[[def-simple-wall-crossing-artin-tits-normalisers]]

[[prop-adjacent-wall-formula-artin-tits-normalisers]]

## Justification

The relative-cone definition specifies the relative arrangement in its finite-dimensional real Coxeter setting. The relative chamber-labelling theorem identifies its chambers bijectively with the algebraic labels, and the chamber and label definitions specify the objects and adjacency relation. The adjacent-wall formula supplies a unique crossing index for each ordered adjacent pair and ensures that the corresponding crossing element is defined. Hence the finite sequence determines its ordered list of crossing elements and their product in $W$ uniquely. When two endpoints match, omitting the repeated endpoint leaves the original consecutive adjacencies on both sides of the join, so concatenation is again a path. The one-chamber case has no crossings and its product is the group identity.

## Source notes

The article reference attributes the terminology and construction. The well-definedness argument uses the declared local definitions and adjacent-wall formula.
