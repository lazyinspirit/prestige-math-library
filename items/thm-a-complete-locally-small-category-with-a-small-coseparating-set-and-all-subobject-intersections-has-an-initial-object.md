---
id: thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object
kind: theorem
title: "A complete locally small category with a small coseparating set and intersections of all subobject collections has an initial object"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separating-set-and-coseparating-set, def-intersection-of-a-family-of-subobjects, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-small-locally-small-and-large-category, def-limit-and-colimit-of-a-diagram, def-equalizers-and-coequalizers, def-monomorphism-and-epimorphism]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, lemma 4.7.11"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, theorem V.8.1"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be complete and locally small, let $\Phi$ be a supplied small coseparating set, and suppose that every collection of subobjects of any fixed object has an intersection as a greatest lower bound. Then $\mathcal C$ has an initial object.

The intersection hypothesis is about collections of subobjects and is not being represented as a limit of a proper-class diagram.

## Facts & Assumptions

**Given:** The category $\mathcal C$, the supplied coseparating set $\Phi$, and the intersection hypothesis in the Statement.

[L1] Completeness supplies every product and equalizer indexed by a set ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]], [[def-limit-and-colimit-of-a-diagram]]).

[L2] Local smallness makes each $\mathcal C(C,K)$ a set ([[def-small-locally-small-and-large-category]]).

[L3] A coseparating set detects distinct parallel maps by postcomposition ([[def-separating-set-and-coseparating-set]]).

[L4] An intersection is the greatest lower bound of the stated collection in the subobject order ([[def-intersection-of-a-family-of-subobjects]]).

[L5] Equalizers are monomorphisms, and composites and pullbacks of monomorphisms are monic ([[def-equalizers-and-coequalizers]], [[def-monomorphism-and-epimorphism]]).

## Proof

**Proof technique:** constructive.

1.1 Form the set-indexed product $P=\prod_{K\in\Phi}K$. By hypothesis, the collection of all subobjects of $P$, possibly a proper collection, has an intersection $i:I\to P$. This invokes the stated order-theoretic intersection directly and does not form a proper-class diagram. [L1, L4, construct]

2.1 Fix an object $C$. By [L2], the canonical evaluation map $\nu_C:C\to\prod_{K\in\Phi}\prod_{f\in\mathcal C(C,K)}K$ is a set-indexed product map, and [L3] makes it monic. Repeating each projection of $P$ defines $\Delta:P\to\prod_{K\in\Phi}\prod_{f\in\mathcal C(C,K)}K$. Pull back $\nu_C$ along $\Delta$ to obtain a subobject $P_C\to P$ with a map $P_C\to C$. Since $i$ lies below every subobject of $P$, [L4] gives $I\to P_C$, hence a map $I\to C$. [step 1.1, L1, L2, L3, L4, L5, choose]

3.1 If $f,g:I\rightrightarrows C$, their equalizer $e:E\to I$ is monic by [L5], and $i\circ e:E\to P$ is a subobject. Minimality of $i$ gives a factorisation $I\to E$ over $P$, so $e$ and $1_I$ represent the same subobject and $e$ is invertible. Therefore $f=g$. Step 2.1 gives existence and this step gives uniqueness for every target, so $I$ is initial. [step 1.1, step 2.1, L4, L5, discharge-construct] ∎
