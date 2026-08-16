---
id: thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object
kind: theorem
title: "A complete locally small category with a small coseparating set and intersections of all subobject collections has an initial object"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separating-set-and-coseparating-set, def-intersection-of-a-family-of-subobjects, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-small-locally-small-and-large-category, def-limit-and-colimit-of-a-diagram, def-equalizers-and-coequalizers, def-monomorphism-and-epimorphism, cor-equalizers-are-monic-and-coequalizers-are-epic, prop-basic-calculus-of-monomorphisms-and-epimorphisms, lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
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

[L4] For a family of subobjects of $C$ indexed by a **set** $I$, an intersection is a greatest lower bound in the subobject order: a subobject $[p]$ with $[p]\le[m_i]$ for every $i$, such that every $[q]$ with $[q]\le[m_i]$ for all $i$ satisfies $[q]\le[p]$ ([[def-intersection-of-a-family-of-subobjects]]). The hypothesis of this theorem extends the same greatest-lower-bound condition to possibly proper collections of subobjects, and that extension is supplied by the Statement, not by the cited definition.

[L5] Every equalizer morphism is monic ([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

[L6] Identity morphisms are monic and epic, and composites of monomorphisms are monic ([[prop-basic-calculus-of-monomorphisms-and-epimorphisms]]).

[L7] In a pullback square, the pullback of a monomorphism is a monomorphism ([[lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms]]).

## Proof

**Proof technique:** constructive.

1.1 Form the set-indexed product $P=\prod_{K\in\Phi}K$. By the Statement's hypothesis in the sense recorded in [L4], the collection of all subobjects of $P$, possibly a proper collection, has an intersection $i:I\to P$. This invokes that order-theoretic greatest lower bound directly and does not form a proper-class diagram. [L1, L4, given, construct]

2.1 Fix an object $C$. By [L2], the canonical evaluation map $\nu_C:C\to\prod_{K\in\Phi}\prod_{f\in\mathcal C(C,K)}K$ is a set-indexed product map, and [L3] makes it monic. Repeating each projection of $P$ defines $\Delta:P\to\prod_{K\in\Phi}\prod_{f\in\mathcal C(C,K)}K$. Pull back $\nu_C$ along $\Delta$ to obtain $P_C\to P$ with a map $P_C\to C$; that pullback of the monomorphism $\nu_C$ is monic by [L7], so $P_C\to P$ is a subobject of $P$. Since $i$ lies below every subobject of $P$, [L4] gives $I\to P_C$, hence a map $I\to C$. [step 1.1, L1, L2, L3, L4, L7, choose]

3.1 If $f,g:I\rightrightarrows C$, their equalizer $e:E\to I$ is monic by [L5], and the composite $i\circ e:E\to P$ is monic by [L6], hence a subobject of $P$. Minimality of $i$ gives a factorisation $I\to E$ over $P$, so $e$ and $1_I$ — the latter monic by [L6] — represent the same subobject and $e$ is invertible. Therefore $f=g$. Step 2.1 gives existence and this step gives uniqueness for every target, so $I$ is initial. [step 1.1, step 2.1, L4, L5, L6, discharge-construct] ∎
