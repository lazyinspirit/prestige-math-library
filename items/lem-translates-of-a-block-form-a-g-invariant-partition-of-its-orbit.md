---
id: lem-translates-of-a-block-form-a-g-invariant-partition-of-its-orbit
kind: lemma
title: "The translates of a block partition its orbit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-block-and-block-system-for-a-group-action]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Statement

Let $G$ act on $\Omega$, and let $B \subseteq \Omega$ be a block. Then the
family
$$\mathcal T_B := \{\, g \cdot B : g \in G \,\}$$
has pairwise equal-or-disjoint members, its union is
$$G \cdot B := \{\, g \cdot b : g \in G,\ b \in B \,\},$$
and it is preserved by the action of $G$. Hence $\mathcal T_B$ is a
$G$-invariant partition of $G \cdot B$.

## Facts & Assumptions

**Given:** A left action of $G$ on $\Omega$ and a block $B \subseteq \Omega$.

[L1] A block is a nonempty subset $B$ such that for every $g \in G$ one has either $g \cdot B = B$ or $(g \cdot B) \cap B = \varnothing$ ([[def-block-and-block-system-for-a-group-action]]).

## Proof

**Proof technique:** direct.

1.1 If $g \cdot B$ meets $h \cdot B$, choose $x \in (g \cdot B) \cap (h \cdot B)$. Then $h^{-1} \cdot x \in (h^{-1}g) \cdot B \cap B$, so [L1] gives $(h^{-1}g) \cdot B = B$. [L1, choose]

1.2 By definition every point of $\bigcup \mathcal T_B$ has the form $g \cdot b$ with $g \in G$ and $b \in B$, and every such point lies in the translate $g \cdot B$. So $\bigcup \mathcal T_B = G \cdot B$. [given, algebra]

2.1 From step 1.1, $g \cdot B = h \cdot B$ whenever the two translates meet. Thus distinct translates are disjoint. [step 1.1]

3.1 For $k \in G$ one has $k \cdot (g \cdot B) = (kg) \cdot B$, which is again in $\mathcal T_B$. Hence $G$ permutes the members of $\mathcal T_B$, and steps 2.1 and 1.2 make it a $G$-invariant partition of $G \cdot B$. [step 2.1, step 1.2, algebra] ∎
