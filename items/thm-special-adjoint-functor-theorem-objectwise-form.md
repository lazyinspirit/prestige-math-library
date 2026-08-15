---
id: thm-special-adjoint-functor-theorem-objectwise-form
kind: theorem
title: "Special adjoint functor theorem, objectwise form with explicit intersection smallness or preservation data"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object, def-well-powered-and-co-well-powered-category, lem-wide-pullbacks-compute-intersections-independently-of-representatives, lem-the-comma-category-projection-strictly-creates-limits-preserved-by-the-functor, def-separating-set-and-coseparating-set, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-small-locally-small-and-large-category]
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, theorem V.8.2 and corollary"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
    - title: "E. Riehl, Category Theory in Context, theorem 4.7.10"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $U:\mathcal A\to\mathcal C$, where $\mathcal A$ is complete and locally small, $\mathcal C$ is locally small, and $\mathcal A$ has a supplied small coseparating set. Fix $C\in\mathcal C$. Suppose one of the following data is supplied:

1. $\mathcal A$ has a supplied well-powering and $U$ preserves all small limits; or
2. every collection of subobjects in $\mathcal A$ has a specified intersection and $U$ preserves the pullbacks of the corresponding families of monomorphisms, including the possibly proper collections invoked in the proof.

Then $(C\downarrow U)$ has an initial object. The second branch is stronger than continuity: it states the extra preservation data rather than treating a proper collection as a small diagram.

## Facts & Assumptions

**Given:** The functor, fixed object, categorical hypotheses, and one of the two supplied branches in the Statement.

[L1] A complete locally small category with a small coseparating set and intersections of all subobject collections has an initial object ([[thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object]]).

[L2] A supplied well-powering gives a set-indexed representative family for the subobjects of each object ([[def-well-powered-and-co-well-powered-category]]).

[L3] A set-indexed wide pullback computes the intersection independently of representatives ([[lem-wide-pullbacks-compute-intersections-independently-of-representatives]]).

[L4] The comma projection strictly creates every projected limit preserved by $U$ ([[lem-the-comma-category-projection-strictly-creates-limits-preserved-by-the-functor]]).

[L5] A coseparating set detects distinct maps by postcomposition ([[def-separating-set-and-coseparating-set]]), completeness concerns all small limits ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]), and local smallness makes hom-collections sets ([[def-small-locally-small-and-large-category]]).

## Proof

**Proof technique:** cases.

1.1 The comma category is locally small because its hom-collections are subsets of those in $\mathcal A$. The set of all comma objects $C\to U(K)$ with $K$ in the supplied coseparating set is again a set by local smallness of $\mathcal C$, and it is coseparating by [L5]. [L5]

1.2 Assume the supplied-well-powering branch. The subobjects of a fixed comma object project injectively into subobject classes of its $\mathcal A$-component: the projection preserves and reflects monomorphisms, and preservation of pullbacks makes the projected monomorphisms remain monic after applying $U$. By [L2] they therefore admit a supplied set of representatives. Their wide pullback exists by completeness, is preserved by continuity, and [L3] and [L4] create its intersection in the comma category. [assume-case powered, L2, L3, L4, L5]

1.3 Assume the direct-intersection branch. Intersect the projected collection using the stated class-intersection datum, including its empty-collection case, and use the separately supplied preservation of that family-of-monomorphisms pullback to construct the comma structure arrow. This invokes no proper-class diagram and does not infer the preservation from continuity. [assume-case direct, L4, L5]

2.1 In either branch, the comma category is complete for small diagrams by [L4], locally small, has the coseparating set of step 1.1, and has all the subobject intersections needed by [L1]. Hence [L1] gives an initial object of $(C\downarrow U)$. [step 1.1, step 1.2, step 1.3, L1, L4, cases-exhaustive] ∎
