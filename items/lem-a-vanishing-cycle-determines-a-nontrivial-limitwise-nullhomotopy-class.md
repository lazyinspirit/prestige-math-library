---
id: lem-a-vanishing-cycle-determines-a-nontrivial-limitwise-nullhomotopy-class
kind: lemma
title: "A vanishing cycle determines a nonzero limitwise-nullhomotopy class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vanishing-cycle-of-a-codimension-one-foliation, def-limitwise-nullhomotopy-subgroup-of-a-leaf, def-regular-foliation-atlas, def-flat-chart-for-a-distribution, def-plaque-of-a-flat-chart, def-countable-choice-principle-for-foliation-pair, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 11
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a73, printed pp. 9\u201310; \u00a76, printed pp. 16\u201319 (Theorem 6.1 uses nonzero $\\Pi^j_1$, not the ordinary limit-cycle group)"
    - title: "Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov\u2019s Theorem (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)"
      url: "https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf"
      locator: "\u00a73.2.2, printed p. 49 (Definition 3.3)"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented
codimension-one foliation and let $(\sigma_t)_{0\le t\le1}$ be a vanishing cycle
supported on $L_1$. For the side $j$ approached by the transverse trace annulus, the
class $[\sigma_1]$ is a nonzero element of $\Pi^j_1(L_1,x)$, where $x=\sigma_1(1)$. In
particular its one-sided holonomy germ is the identity, so this conclusion does not say
that $[\sigma_1]$ is an ordinary limit cycle.

## Facts & Assumptions

**Given:** A transversely oriented codimension-one foliation $F$, a vanishing cycle $(\sigma_t)_{0\le t\le1}$ supported on $L_1$, the side $j$ approached by the transverse trace annulus, and the standing countable choice assumption.

[F1] A vanishing cycle supported on $L_1$ is a jointly $C^2$ family of loops $\sigma_t$ lying in leaves $L_t$, with $[\sigma_1]$ nonzero in $\pi_1(L_1)$, each $\sigma_t$ null-homotopic in $L_t$ for $t<1$, and transverse point tracks. ([[def-vanishing-cycle-of-a-codimension-one-foliation]]).

## Proof

**Proof technique:** direct.

1.1 Let $x=\sigma_1(1)$; by [F1] the trace map is jointly $C^2$, its point tracks are transverse, and $[\sigma_1]\neq1$ in $\pi_1(L_1)$, while near $t=1$ the trace annulus is a one-sided transverse fence for $\sigma_1$ because $S^1\times[0,1]$ is compact and the tracks are transverse. [F1, given]

2.1 Cover the compact annulus by finitely many foliation charts and subdivide it into rectangles contained in single charts; in each rectangle plaque coordinates identify the upper loop with the normal displacement of the lower loop up to a path inside a plaque ([[def-flat-chart-for-a-distribution]], [[def-plaque-of-a-flat-chart]]), the identifications agree on shared edges, and the C² plaque transport of specified charts preserves the regularity (`lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity`), so for every sufficiently small positive parameter the trace loop $\sigma_t$ is leafwise homotopic to the corresponding normal displacement of $\sigma_1$. [step 1.1]

3.1 For $t<1$ the loop $\sigma_t$ is closed and null-homotopic on its leaf by [F1], so the leafwise homotopic displaced loop of $\sigma_1$ is closed and null-homotopic as well; closedness of all sufficiently small positive displacements is exactly triviality of the one-sided holonomy germ of $[\sigma_1]$, and null-homotopy of those displacements is the predicate $Q_j$, so $[\sigma_1]$ is a nonzero element of $\Pi^j_1(L_1,x)$ by [F1] and the class-level definition of the limitwise-nullhomotopy subgroup, with only the standing countable choice used. [F1, step 2.1] ∎
