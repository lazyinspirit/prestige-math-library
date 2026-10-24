---
id: def-local-transversal-to-a-regular-foliation
kind: definition
title: "Local transversals to a regular foliation"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
  - def-regular-foliation-atlas
  - def-smooth-distribution-on-a-manifold
  - def-embedded-submanifold-and-slice-chart
  - def-codimension-and-hypersurface
  - thm-regular-foliations-and-integrable-distributions-correspond
  - def-countable-choice
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), the
standing choice assumption of the smooth-distribution setting
([[def-smooth-distribution-on-a-manifold]]). Let $F$ be a regular foliation of
codimension $q$ on a smooth $n$-manifold $M$
([[def-regular-foliation-atlas]]); by
[[thm-regular-foliations-and-integrable-distributions-correspond]] its tangent
distribution $D=TF$ is the integrable rank-$(n-q)$ smooth subbundle of $TM$
whose maximal connected integral manifolds are the leaves.

A subset $T\subseteq M$ is a **local transversal to $F$ at $x\in T$** when $T$
is an embedded submanifold of $M$ of dimension $q$ containing $x$
([[def-embedded-submanifold-and-slice-chart]],
[[def-codimension-and-hypersurface]]) with

$$T_xM=D_x\oplus T_xT .$$

Equivalently, $T_xT$ is a linear complement of $D_x$ in $T_xM$. Since
$\dim T_xT=q$ and $\dim D_x=n-q$, the sum condition alone already forces the
sum to be direct and to fill $T_xM$; writing it as a direct sum records both
clauses at once. The condition is imposed at the single point $x$: it is a
local transversality condition at $x$, and it says exactly that $T$ meets the
leaf through $x$ transversely at $x$. In particular a codimension-one
submanifold meeting a leaf tangentially at $x$ is not a local transversal to
$F$ at $x$. The definition specialises the general transversality of a
submanifold to the leaf distribution $D$; the atlas convention and the
dimension $q$ come from the foliation, so no new structure is introduced.
