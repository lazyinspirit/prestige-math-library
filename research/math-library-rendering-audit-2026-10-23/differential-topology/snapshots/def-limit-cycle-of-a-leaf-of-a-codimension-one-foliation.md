---
id: def-limit-cycle-of-a-leaf-of-a-codimension-one-foliation
kind: definition
title: "Limit cycles of a leaf"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-one-sided-trivial-holonomy-classes-form-a-normal-subgroup, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-local-transversal-to-a-regular-foliation, def-germ-of-a-local-diffeomorphism-at-a-point, def-based-loops-and-fundamental-group, def-leaf-of-a-regular-foliation, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
dependency_level: 6
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a72, printed pp. 4\u20136 (Definitions 2.1\u20132.2 and the quotient $P_j=\\pi_1/N_j$)"
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented
codimension-one foliation, $L$ a leaf, and $x\in L$. For a chosen side $j$ of $L$, let
$N_j(L,x)\triangleleft \pi_1(L,x)$ be the subgroup of classes whose one-sided normal-
fence holonomy germ is the identity. The quotient $P_j(L,x)=\pi_1(L,x)/N_j(L,x)$ is
Novikov’s one-sided limit-cycle group. A class $[\alpha]$ is a **limit cycle on side
$j$** precisely when its image in $P_j(L,x)$ is nonidentity, equivalently its one-sided
holonomy germ is nonidentity. The two groups $P_+(L,x)$ and $P_-(L,x)$ record ordinary
right and left limit cycles.

## Remarks

The separate [[def-limitwise-nullhomotopy-subgroup-of-a-leaf|limitwise-nullhomotopy subgroup]]
$\Pi^j_1(L,x)$ is defined later on this page as a set of classes in $N_j(L,x)$
whose sufficiently small displaced loops are nullhomotopic in their leaves.
Its containment in $N_j(L,x)$ is part of that definition; it is distinct from
the ordinary limit-cycle quotient $P_j(L,x)$ defined here.
