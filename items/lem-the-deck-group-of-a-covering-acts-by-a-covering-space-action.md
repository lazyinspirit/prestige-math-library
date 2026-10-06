---
id: lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action
kind: lemma
title: "The deck group of a connected covering acts by a covering-space action"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
  - def-covering-space-action
  - def-deck-transformation-and-deck-group
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - def-covering-map-and-evenly-covered-neighbourhoods
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $p:E\to B$ be a covering map with connected total space $E$. Then the deck
group $\operatorname{Deck}(p)$ acts on $E$ by a covering-space action: every
$e\in E$ has an open neighbourhood $U$ with $hU\cap U=\varnothing$ for every
nonidentity $h\in\operatorname{Deck}(p)$.

## Facts & Assumptions

**Given:** A covering map $p:E\to B$ with connected total space $E$, a point $e\in E$, and the deck group $\operatorname{Deck}(p)$ acting on $E$ by evaluation.

[F1] A deck transformation is an isomorphism $h:E\to E$ over $B$, and the deck transformations form the group $\operatorname{Deck}(p)$ acting on $E$ by evaluation ([[def-deck-transformation-and-deck-group]]).

[F2] For a covering with connected total space, two deck transformations agreeing at one point are equal; consequently the deck group acts freely on the total space ([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]).

[F3] A covering map $p:E\to B$ has for every $b\in B$ an evenly covered open neighbourhood $W$: the preimage $p^{-1}(W)$ is a disjoint union of open sheets $V_j$, and each restriction $p|_{V_j}:V_j\to W$ is a homeomorphism ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F4] An action of a group on a space $E$ by homeomorphisms is a covering-space action when every $e\in E$ has an open neighbourhood $U$ with $gU\cap U=\varnothing$ for every nonidentity $g$ ([[def-covering-space-action]]).

## Proof

**Proof technique:** direct.

1.1 Put $b:=p(e)$. By [F3] choose an evenly covered open neighbourhood $W$ of $b$ and let $U$ be the sheet of $p^{-1}(W)$ containing $e$. Then $U$ is an open neighbourhood of $e$ and $p|_U:U\to W$ is a homeomorphism, hence injective. [F3, construct]

2.1 Suppose $hU\cap U$ is nonempty. Then some $u\in U$ has $h(u)\in U$, and $p(h(u))=p(u)$ by [F1]. Injectivity of $p|_U$ gives $h(u)=u$. By [F2], a deck transformation fixing any point is the identity. Thus $hU\cap U=\varnothing$ for every nonidentity $h$. No connectedness of the chosen sheet or of the evenly covered neighborhood is needed. [F1, F2, step 1.1]

3.1 Since $e$ was arbitrary and every deck transformation is a homeomorphism, [F4] proves that the deck group acts by a covering-space action. [F1, F4, step 2.1] ∎
