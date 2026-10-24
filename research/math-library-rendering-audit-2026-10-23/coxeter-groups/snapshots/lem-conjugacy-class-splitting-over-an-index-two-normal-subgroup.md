---
id: lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup
kind: lemma
title: 'A conjugacy class in an index-two normal subgroup remains one class or splits into two equal classes, with a centralizer criterion'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugacy-class-and-centralizer, def-normal-subgroup, def-index]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: frontier-11
---

## Statement

Let $H\trianglelefteq G$ have index $2$, and let $x\in H$. The $G$-conjugacy
class of $x$ is either one $H$-conjugacy class or the disjoint union of two
$H$-conjugacy classes of equal cardinality. It remains one class if and only if
$C_G(x)$ contains an element outside $H$; equivalently, it splits if and only
if $C_G(x)\subseteq H$.

## Facts & Assumptions

**Given:** A normal subgroup $H\trianglelefteq G$ of index $2$ and $x\in H$.

[F1] A normal subgroup is invariant under conjugation ([[def-normal-subgroup]]).

[F2] The conjugacy class and centralizer are $\{gxg^{-1}:g\in G\}$ and $\{g\in G:gx=xg\}$ ([[def-conjugacy-class-and-centralizer]]).

[F3] Index $2$ means that the coset set has two elements ([[def-index]]).

## Proof

**Proof technique:** direct.

1.1 Choose $t\in G\setminus H$. By [F3], $G=H\sqcup tH$. [F3, choose]

2.1 Let $C$ be the $H$-class of $x$. Using [F1] and step 1.1, the $G$-class is $C\cup tCt^{-1}$; these are $H$-classes and therefore are equal or disjoint. [F1, F2, step 1.1, algebra]

3.1 Conjugation by $t$ is a bijection $C\to tCt^{-1}$, so in the disjoint case the two classes have equal cardinality. [step 2.1, algebra]

3.2 The classes agree exactly when $txt^{-1}=hxh^{-1}$ for some $h\in H$, which is equivalent to $h^{-1}t\in C_G(x)$. This element lies outside $H$. [F2, step 1.1, step 2.1, algebra]

3.3 Conversely, if $c\in C_G(x)\setminus H$, then $c=h^{-1}t$ for some $h\in H$, and $txt^{-1}=hxh^{-1}\in C$; hence the two classes agree. [F2, step 1.1, step 2.1, algebra]

4.1 Steps 3.2--3.3 give the outside-centralizer criterion; negating it gives the equivalent containment criterion for splitting. [step 3.2, step 3.3] ∎
