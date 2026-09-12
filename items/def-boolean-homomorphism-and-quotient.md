---
id: def-boolean-homomorphism-and-quotient
kind: definition
title: Boolean homomorphisms and quotient relation
status: published
origin: pipeline
deps: [def-boolean-algebra-for-stone-duality, def-boolean-ideals-filters-and-primality, def-equivalence-relation]
justified_by: [lem-boolean-quotient-congruence]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, Definition 2.3.1, pp. 8–9 (homomorphisms)"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Definition

A **Boolean homomorphism** $h:B\to C$ between [[def-boolean-algebra-for-stone-duality|Boolean algebras]] preserves $0,1,\wedge,\vee,\neg$. An isomorphism is a bijective homomorphism. Define Boolean symmetric difference by

$$a\mathbin{\triangle}b=(a\wedge\neg b)\vee(b\wedge\neg a).$$

For an [[def-boolean-ideals-filters-and-primality|ideal]] $I$ of $B$, put $a\sim_I b$ when $a\mathbin{\triangle}b\in I$. The proposed quotient $B/I$ consists of the [[def-equivalence-relation|equivalence classes]] $[a]$, with proposed operations

$$[a]\wedge[b]=[a\wedge b],\quad [a]\vee[b]=[a\vee b],\quad\neg[a]=[\neg a],\quad0=[0],\quad1=[1].$$

The equivalence, representative independence and Boolean laws are justified by [[lem-boolean-quotient-congruence]]. No representatives are selected as a family. The ideal $I=B$ is allowed; its quotient will be trivial. The **kernel** of a homomorphism means its zero fibre $h^{-1}(\{0\})$.
