---
id: def-enriched-weighted-limit
kind: definition
title: "Enriched weighted limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-set-weighted-limit-and-weighted-colimit, def-enriched-functor, thm-a-closed-monoidal-category-is-enriched-in-itself]
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (3.1) to (3.7)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Definition 7.4.1"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Definition

Assume $\mathcal V$ is symmetric monoidal right closed and its collection of
objects is a set, so that it is enriched in itself and enriched opposites are
defined using the symmetry
([[thm-a-closed-monoidal-category-is-enriched-in-itself]]).
Let $\mathcal A$ be a small $\mathcal V$-category, let
$T:\mathcal A\to\mathcal B$ be a $\mathcal V$-functor, and let
$W:\mathcal A\to\mathcal V$ be a $\mathcal V$-functor
([[def-enriched-functor]]).

An **enriched weighted limit** of $T$ by $W$ is an object $\{W,T\}$ of
$\mathcal B$ together with an isomorphism in $\mathcal V$

$$\mathcal B(B,\{W,T\})\cong[\mathcal A,\mathcal V](W,\mathcal B(B,T-))$$

natural in $B$, whenever the enriched functor category and the displayed
hom-object are formed. Dually, for a weight on $\mathcal A^{\mathrm{op}}$, an
**enriched weighted colimit** is an object $W\star T$ with

$$\mathcal B(W\star T,B)\cong[\mathcal A^{\mathrm{op}},\mathcal V](W,\mathcal B(T-,B))$$

natural in $B$.

This is the direct enriched analogue of
[[def-set-weighted-limit-and-weighted-colimit]]: sets are replaced by objects
of $\mathcal V$, hom-sets by enriched hom-objects, and ordinary natural
transformations by enriched ones.
