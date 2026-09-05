---
id: thm-strong-enriched-yoneda-lemma-as-a-particular-end
kind: theorem
title: "Strong enriched Yoneda lemma as a particular end"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-weak-enriched-yoneda-lemma, thm-a-closed-monoidal-category-is-enriched-in-itself, def-the-internal-hom-and-its-evaluation-morphism, thm-the-unit-is-an-internal-hom-unit]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (2.31) to (2.33)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 7.3"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

Assume $\mathcal V$ is symmetric monoidal right closed and locally small, and
that its collection of objects is a set. Let $\mathcal A$ be a small
$\mathcal V$-category, let $K\in\mathcal A$, and let
$F:\mathcal A\to\mathcal V$ be a $\mathcal V$-functor. Then the object $FK$
represents the enriched-wedge functor for the enriched end

$$A\longmapsto[\mathcal A(K,A),FA],$$

so there is a natural isomorphism in $\mathcal V$

$$FK\cong\int_A[\mathcal A(K,A),FA].$$

Thus this particular enriched end exists without assuming that every enriched
end or the whole enriched functor category exists.

## Facts & Assumptions

**Given:** A symmetric monoidal right-closed locally small base $\mathcal V$
whose collection of objects is a set, a small $\mathcal V$-category
$\mathcal A$, an object $K$, and a $\mathcal V$-functor
$F:\mathcal A\to\mathcal V$.

[L1] The weak enriched Yoneda lemma gives natural bijections
$\operatorname{Nat}_{\mathcal V}(\mathcal A(K,-),G)\cong\mathcal V(\mathbf 1,GK)$
for every $\mathcal V$-functor $G:\mathcal A\to\mathcal V$
([[thm-weak-enriched-yoneda-lemma]]).

[L2] In a right-closed base, a morphism $X\to[Y,Z]$ is equivalent to a morphism
$X\otimes Y\to Z$, and global elements of $[Y,Z]$ are morphisms $Y\to Z$
([[def-the-internal-hom-and-its-evaluation-morphism]], [[thm-the-unit-is-an-internal-hom-unit]]).

[L3] An enriched end is an object representing enriched wedges, whose
dinaturality equations use the hom-objects of the enriching category rather
than only the arrows of its underlying ordinary category.

[L4] The base $\mathcal V$ is a $\mathcal V$-category under its internal homs
([[thm-a-closed-monoidal-category-is-enriched-in-itself]]).

## Proof

**Proof technique:** direct.

1.1 Fix an object $X$ of $\mathcal V$. An enriched wedge from $X$ to the displayed enriched end is, by [L2] and [L3], the same data as a family of morphisms $X\otimes\mathcal A(K,A)\to FA$ satisfying the enriched dinaturality equations. After transposing by [L2], these are exactly the components and enriched naturality equations of a $\mathcal V$-natural transformation $\mathcal A(K,-)\Rightarrow[X,F-]$, where $[X,F-]$ is obtained by applying $[X,-]$ objectwise in the self-enrichment of [L4]. [L2, L3, L4, given]

2.1 Apply [L1] to the functor $G=[X,F-]$. This gives a bijection between the wedge data of step 1.1 and $\mathcal V(\mathbf 1,[X,FK])\cong\mathcal V(X,FK)$, the second bijection coming from [L2]. The correspondence is natural in $X$. [L1, L2, step 1.1]

3.1 Step 2.1 says exactly that morphisms $X\to FK$ are in natural bijection with wedges from $X$ to the displayed diagram. By [L3], that is the universal property of the end, so $FK$ is the end $\int_A[\mathcal A(K,A),FA]$. [L3, step 2.1]

4.1 Therefore the particular end exists and is naturally isomorphic to $FK$. [step 3.1] ∎
