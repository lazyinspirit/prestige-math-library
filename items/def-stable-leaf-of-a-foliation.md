---
id: def-stable-leaf-of-a-foliation
kind: definition
title: "Stable leaves"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-saturated-neighbourhood-of-a-leaf, def-regular-foliation-atlas]
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
dependency_level: 1
---

## Definition

Let $F$ be a regular foliation of a smooth manifold $M$
([[def-regular-foliation-atlas]]) and let $L$ be a leaf of $F$.

The leaf $L$ is **stable** when every open neighbourhood $W$ of $L$ in $M$
contains a saturated neighbourhood of $L$
([[def-saturated-neighbourhood-of-a-leaf]]); equivalently, when the saturated
neighbourhoods of $L$ form a fundamental system of neighbourhoods of $L$.

More generally, a subset $B\subseteq M$ is **stable in the sense of Reeb** when
for every open neighbourhood $W$ of $B$ there is an open neighbourhood
$W'\subseteq W$ of $B$ such that every leaf of $F$ meeting $W'$ is contained in
$W$. For a leaf $B=L$ this is equivalent to stability of $L$: if such a $W'$
exists, then its saturation
$U=\bigcup\{L' : L'\text{ a leaf and } L'\cap W'\neq\varnothing\}$ is open and saturated (each box carries an open set to its open plaque saturation, and finite plaque transport carries this property along every leaf), contains $L$, and satisfies $U\subseteq W$ by the property of $W'$,
so $U$ is a saturated neighbourhood of $L$ inside $W$; conversely a saturated
neighbourhood $U\subseteq W$ of $L$ is itself a neighbourhood $W'\subseteq W$ of
$L$ every leaf meeting which is contained in $U\subseteq W$.

Stability of a leaf is a neighbourhood property: it depends only on the germ of
the foliation along $L$, since both quantifiers involve neighbourhoods of $L$.
This is the property that the local and global Reeb stability theorems below
establish under their finiteness hypotheses.
