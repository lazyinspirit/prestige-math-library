---
id: thm-qa-finite-abelian-subgroup-annihilator-cardinality
kind: theorem
title: Subgroup-annihilator cardinality
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-subgroup-annihilator, def-subgroup, def-additive-character-of-a-finite-abelian-group, cor-subgroups-of-abelian-groups-are-normal, def-quotient-group, def-index, thm-quotient-group-laws, thm-qa-finite-abelian-dual-has-same-cardinality, thm-lagrange, cor-quotient-of-an-abelian-group-is-abelian, lem-coset-membership-and-equality, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---


## Statement

For a subgroup $H\le G$ of a finite abelian group, descent and inflation identify $H^\perp$ with the character dual of $G/H$. Consequently
$$|H^\perp|=|G/H|=[G:H]=\frac{|G|}{|H|},\qquad |H^\perp|\,|H|=|G|.$$
The quotient convention is left cosets, with additive notation.

## Facts & Assumptions

**Given:** A finite abelian group $G$ and subgroup $H\le G$.

[F1] Every subgroup of an abelian group is normal ([[cor-subgroups-of-abelian-groups-are-normal]]).

[F2] The quotient $G/H$ consists of cosets with well-defined group operation, and its order is the index $[G:H]$ ([[def-quotient-group]], [[thm-quotient-group-laws]], [[def-index]]).

[F3] A quotient of an abelian group is abelian ([[cor-quotient-of-an-abelian-group-is-abelian]]).

[F4] Cosets satisfy $g+H=g'+H$ exactly when $g'-g\in H$ ([[lem-coset-membership-and-equality]]).

[F5] A finite abelian group $Q$ with an invariant-factor decomposition has $|\widehat Q|=|Q|$, including the empty decomposition of the trivial group ([[thm-qa-finite-abelian-dual-has-same-cardinality]]).

[F6] Lagrange's theorem gives $|G|=[G:H]|H|$ for finite $G$ and subgroup $H$ ([[thm-lagrange]]).

[F7] A subgroup contains the group identity, so $|H|\ge1$ ([[def-subgroup]]).

[F8] An additive character is a homomorphism to $\mathbb C^\times$ and sends the identity to $1$ ([[def-additive-character-of-a-finite-abelian-group]]).

[F9] $H^\perp$ consists exactly of the characters trivial on every element of $H$ ([[def-qa-finite-abelian-subgroup-annihilator]]).

[F10] Every finite abelian group has an invariant-factor decomposition; the trivial group corresponds to the empty list ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

## Proof

1.1 By [F1] the quotient is defined; [F2] gives its group law, and [F3] makes $Q:=G/H$ finite abelian. Finiteness also follows from the finite coset partition in [F6]. [F1, F2, F3, F6]

1.2 Let $\pi:G\to Q$ be $\pi(g)=g+H$. The quotient law in [F2] gives $\pi(g+g')=(g+H)+(g'+H)=\pi(g)+\pi(g')$, so $\pi$ is a homomorphism. For $h\in H$, $\pi(h)=H$, the identity coset; every character sends the identity to $1$. Thus for $\psi\in\widehat Q$, $\psi\circ\pi$ is a character by [F8] and is trivial on $H$, so [F9] shows inflation maps $\widehat Q$ into $H^\perp$. [F2, F3, F8, F9, given, construct]

1.3 For $\chi\in H^\perp$, define $\widetilde\chi(g+H):=\chi(g)$. If $g+H=g'+H$, [F4] gives $g'-g\in H$, hence $\chi(g')=\chi(g)\chi(g'-g)=\chi(g)$; so $\widetilde\chi$ is well defined. For cosets $g+H,g'+H$, the quotient law [F2] gives $\widetilde\chi((g+H)+(g'+H))=\chi(g+g')=\chi(g)\chi(g')$, so $\widetilde\chi$ is a character of $Q$. [F2, F4, F8, construct]

2.1 For every $g\in G$, $(\widetilde\chi\circ\pi)(g)=\widetilde\chi(g+H)=\chi(g)$; for every $\psi\in\widehat Q$ and coset $g+H$, descent of its inflation returns $\widetilde{(\psi\circ\pi)}(g+H)=(\psi\circ\pi)(g)=\psi(g+H)$. Thus inflation and descent are inverse bijections. Since $Q$ is finite abelian by step 1.1, [F10] supplies an invariant-factor decomposition of $Q$, with the empty list allowed when $Q$ is trivial. Applying [F5] to this decomposition gives $|H^\perp|=|\widehat Q|=|Q|$, and by [F2], $|Q|=[G:H]$. [step 1.1, step 1.2, step 1.3, F2, F5, F10]

3.1 Lagrange [F6] gives $|G|=[G:H]|H|$. Combining with step 2.1 gives $|H^\perp|\,|H|=|G|$, and division by the positive integer $|H|$ from [F7] gives $|H^\perp|=|G|/|H|$. [step 2.1, F6, F7] ∎
