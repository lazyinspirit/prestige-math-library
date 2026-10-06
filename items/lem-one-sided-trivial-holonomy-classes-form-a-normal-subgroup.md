---
id: lem-one-sided-trivial-holonomy-classes-form-a-normal-subgroup
kind: lemma
title: "One-sided trivial-holonomy classes form a normal subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holonomy-representation-and-holonomy-group-of-a-leaf, def-germ-of-a-local-diffeomorphism-at-a-point, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a72, printed pp. 5\u20136 (the normal subgroups $N_j$ and quotients $P_j=\\pi_1/N_j$)"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented
codimension-one foliation, $L$ a leaf, $x\in L$, and $j$ one of its two sides. The
classes in $\pi_1(L,x)$ whose one-sided holonomy germ is the identity form a normal
subgroup $N_j(L,x)\triangleleft\pi_1(L,x)$. Consequently the quotient
$P_j(L,x)=\pi_1(L,x)/N_j(L,x)$ used to define ordinary one-sided limit cycles is a
group.

## Facts & Assumptions

**Given:** A transversely oriented codimension-one foliation $F$, a leaf $L$, a base point $x\in L$, one side $j$ of $L$, and the standing countable choice assumption.

## Proof

**Proof technique:** direct.

1.1 By the definition of the holonomy representation, each class in $\pi_1(L,x)$ is assigned the germ of the return map along its reversed representative, on the chosen side (the library homomorphism convention), and the transverse orientation makes these germs side-preserving, so the assignment is a group homomorphism from $\pi_1(L,x)$ to the group of side-preserving germs of local diffeomorphisms of a half-transversal of the given side ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]], [[def-germ-of-a-local-diffeomorphism-at-a-point]]). [given]

2.1 The classes in $\pi_1(L,x)$ whose one-sided holonomy germ is the identity are exactly the kernel of that homomorphism; the kernel of a group homomorphism is a normal subgroup, so the indicated classes form $N_j(L,x)\triangleleft\pi_1(L,x)$, and the quotient $P_j(L,x)=\pi_1(L,x)/N_j(L,x)$ used to define ordinary one-sided limit cycles is a group; no choice principle beyond the standing assumption is used. [step 1.1] ∎
