---
id: lem-a-simple-vanishing-cycle-produces-a-compact-leaf
kind: lemma
title: "A nonzero limitwise-nullhomotopy class yields a compact boundary leaf"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limitwise-nullhomotopy-subgroup-of-a-leaf, lem-a-vanishing-cycle-determines-a-nontrivial-limitwise-nullhomotopy-class, lem-nontrivial-limitwise-nullhomotopy-class-forces-compact-boundary-leaf, def-regular-foliation-atlas, def-leaf-of-a-regular-foliation, def-countable-choice-principle-for-foliation-pair, def-foliation-component-by-mutual-positive-transverse-accessibility]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 19
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a71, Definition1.4/Lemma1.1 and component definition p.2; \u00a77, Theorem7.1 p.19 and proof pp.20\u201325"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ transversely oriented
codimension-one foliation of a closed oriented $3$-manifold $M$, let $L$ be a leaf, and
fix one side $j$. If $\Pi^j_1(L,x)$ is nontrivial for some $x\in L$, then $L$ is compact
and lies in the ambient boundary of a distinct foliation component $S$ defined by mutual
positive transverse accessibility ([[def-foliation-component-by-mutual-positive-transverse-accessibility]]), with $S\cap L=\varnothing$. In particular, a leaf
supporting a vanishing cycle has this property by [[lem-a-vanishing-cycle-determines-a-nontrivial-limitwise-nullhomotopy-class]].

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. A $C^2$ transversely oriented codimension-one foliation $F$ of a closed oriented $3$-manifold $M$, a leaf $L$, a side $j$, and a point $x\in L$ with $\Pi^j_1(L,x)$ nontrivial.

## Proof

**Proof technique:** direct.

1.1 The hypothesis gives a nonzero class in the limitwise-nullhomotopy subgroup $\Pi^j_1(L,x)$, so there is a nontrivial limitwise-nullhomotopy class on the side $j$ of $L$ with base point $x$ ([[def-limitwise-nullhomotopy-subgroup-of-a-leaf]]). [given]

2.1 Applying the supplier result that a nontrivial limitwise-nullhomotopy class forces a compact boundary leaf ([[lem-nontrivial-limitwise-nullhomotopy-class-forces-compact-boundary-leaf]]) to this class yields exactly the conclusion that $L$ is compact and lies in the ambient boundary of a distinct foliation component $S$ defined by mutual positive transverse accessibility, with $S\cap L=\varnothing$ ([[def-foliation-component-by-mutual-positive-transverse-accessibility]]). [step 1.1]

3.1 For the vanishing-cycle input, the bridge result that a vanishing cycle determines a nontrivial limitwise-nullhomotopy class ([[lem-a-vanishing-cycle-determines-a-nontrivial-limitwise-nullhomotopy-class]]) produces the same kind of nonzero class on the approached side, so the implication of step 2.1 applies verbatim; no complement component or weakened embedded input is used, and only the standing countable choice is invoked. [step 2.1] ∎
