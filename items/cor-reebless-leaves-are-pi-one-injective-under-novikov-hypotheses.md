---
id: cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses
kind: corollary
title: "Reebless leaves are pi-one-injective and transverse loops are essential"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-novikov-reeb-component-theorem, def-reeb-component-in-a-cooriented-three-manifold-foliation, def-induced-homomorphism-on-fundamental-groups, def-based-loops-and-fundamental-group, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 22
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "\u00a74.6, printed pp. 163-166; \u00a74.6, printed p. 167"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ transversely oriented codimension-one foliation of a closed oriented $3$-manifold $M$ containing no Reeb component. Then: (i) for every leaf $L$ of $F$ the inclusion-induced homomorphism $\pi_1(L)\to\pi_1(M)$ is injective; and (ii) every closed transversal to $F$ represents a nontrivial class in $\pi_1(M)$.

## Facts & Assumptions

**Given:** A $C^2$ transversely oriented codimension-one foliation $F$ of a closed oriented three-manifold $M$ with no Reeb component ([[def-reeb-component-in-a-cooriented-three-manifold-foliation]]).

[F1] If some leaf has non-injective inclusion-induced homomorphism $\pi_1(L)\to\pi_1(M)$, or some closed transversal is null-homotopic in $M$, then $F$ contains a Reeb component ([[thm-novikov-reeb-component-theorem]]).

[F2] The inclusion-induced homomorphism on fundamental groups is defined by $\pi_1$-functoriality ([[def-induced-homomorphism-on-fundamental-groups]], [[def-based-loops-and-fundamental-group]]).

[F3] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 If a leaf inclusion $\pi_1(L)\to\pi_1(M)$ were not injective, alternative (a) of [F1] would produce a Reeb component in $F$, contradicting Reeblessness; hence every leaf inclusion is injective. [F1, F2, given]

1.2 If a closed transversal were null-homotopic in $M$, alternative (b) of [F1] would produce a Reeb component in $F$, again contradicting Reeblessness; hence every closed transversal represents a nontrivial class in $\pi_1(M)$. [F1, F2, given]

2.1 Both asserted conclusions therefore hold under the same $C^2$, coorientation, closedness and $\mathrm{AC}_\omega$ hypotheses, the proof being the two contrapositives of Novikov's Reeb component theorem and consuming only the standing countable choice from [F3]. [F1, F3, step 1.1, step 1.2] ∎
