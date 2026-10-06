---
id: def-saturated-neighbourhood-of-a-leaf
kind: definition
title: "Saturated neighbourhoods of a leaf"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-foliation-atlas, def-leaf-of-a-regular-foliation]
justified_by: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§1.3.6, printed p. 10 (PDF p. 11); §2.1, printed pp. 11–14 (PDF pp. 12–15); §2.2, printed pp. 14–15 (PDF pp. 15–16)"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.2, printed pp. 140–143 (PDF pp. 149–152); §4.3, printed pp. 144–145 (PDF pp. 153–154), Example 4.7; Lemma 4.24, printed p. 155 (PDF p. 164)"
dependency_level: 0
---

## Definition

Let $F$ be a regular foliation of a smooth manifold $M$
([[def-regular-foliation-atlas]]) and let $L$ be a leaf of $F$
([[def-leaf-of-a-regular-foliation]]).

An open set $U\subseteq M$ is **saturated**, or **invariant**, for $F$ when it
is a union of leaves of $F$; equivalently, when for every $x\in U$ the whole
leaf of $F$ through $x$ is contained in $U$. The equivalence is immediate from
the definitions: a union of leaves has the pointwise property, and conversely
the set of leaves meeting $U$ covers $U$ by the pointwise property, so $U$ is
their union.

A **saturated neighbourhood of $L$** is a saturated open set $U\subseteq M$
with $L\subseteq U$. If $U$ is saturated then $F$ restricts to a regular
foliation of $U$: restrict the foliation charts to their intersections with
$U$ and take connected components of their slices as plaques. These restricted
charts form an atlas of the open submanifold $U$
([[def-regular-foliation-atlas]]). Since $U$ contains every leaf meeting it,
every plaque chain in such a leaf remains in $U$, so the restricted leaves are
exactly the leaves of $F$ meeting $U$ ([[def-leaf-of-a-regular-foliation]]).

The neighbourhood conclusion of Reeb stability below is stated as the
existence, for every neighbourhood $W$ of $L$ in $M$, of a saturated
neighbourhood $U\subseteq W$ of $L$; this property of $L$ is recorded
separately below as **stability** of the leaf.
