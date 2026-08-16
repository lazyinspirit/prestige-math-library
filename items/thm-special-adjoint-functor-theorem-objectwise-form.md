---
id: thm-special-adjoint-functor-theorem-objectwise-form
kind: theorem
title: "Special adjoint functor theorem, objectwise form with explicit intersection smallness or preservation data"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object, def-well-powered-and-co-well-powered-category, lem-wide-pullbacks-compute-intersections-independently-of-representatives, lem-the-comma-category-projection-strictly-creates-limits-preserved-by-the-functor, def-separating-set-and-coseparating-set, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-small-locally-small-and-large-category, def-preservation-reflection-creation-continuity-and-cocontinuity]
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-16
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

Let $U:\mathcal A\to\mathcal C$, where $\mathcal A$ is complete and locally small, $\mathcal C$ is locally small, and $\mathcal A$ has a supplied small coseparating set. Assume that $U$ preserves all small limits. Fix $C\in\mathcal C$. Suppose in addition one of the following data is supplied:

1. $\mathcal A$ has a supplied well-powering; or
2. every collection of subobjects in $\mathcal A$ has a specified intersection and $U$ preserves the pullbacks of the corresponding families of monomorphisms, including the possibly proper collections invoked in the proof.

Then $(C\downarrow U)$ has an initial object.

Preservation of all small limits is required in **both** branches, not only in the first. The proof produces the initial object inside $(C\downarrow U)$ from [[thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object]], which needs $(C\downarrow U)$ to be complete, and the comma projection creates only those limits that $U$ preserves. The second branch is therefore not a weakening of that hypothesis: it adds preservation data for the possibly proper collections, rather than treating such a collection as a small diagram.

Without it the conclusion fails. Take $\mathcal A=\mathcal C=\mathbf{Set}$, let $U$ be the constant functor at the two-element set $2$, and let $C=1$. Then $\mathbf{Set}$ is complete and locally small, $\{2\}$ is a small coseparating set, every collection of subobjects has its intersection, and $U$ carries each wide pullback of monomorphisms to a cone that is again a limit, since the diagram is connected and $U$ is constant; so the branch-2 data is supplied. But $U$ is not continuous — it does not preserve the empty limit — and $(1\downarrow U)$ is the disjoint union of two copies of $\mathbf{Set}$, one for each map $1\to2$, which has no initial object.

## Facts & Assumptions

**Given:** The functor, fixed object, categorical hypotheses including preservation of all small limits by $U$, and one of the two supplied branches in the Statement.

[L1] A complete locally small category with a small coseparating set and intersections of all subobject collections has an initial object ([[thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object]]).

[L2] A supplied well-powering gives, as data for every object $C$ at once, a set $M_C$ of monomorphisms into $C$ containing a representative of every subobject class of $C$ ([[def-well-powered-and-co-well-powered-category]]).

[L3] A set-indexed wide pullback computes the intersection independently of representatives ([[lem-wide-pullbacks-compute-intersections-independently-of-representatives]]).

[L4] The comma projection strictly creates every projected limit preserved by $U$ ([[lem-the-comma-category-projection-strictly-creates-limits-preserved-by-the-functor]]).

[L5] A coseparating set detects distinct maps by postcomposition ([[def-separating-set-and-coseparating-set]]), completeness concerns all small limits ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]), a functor is continuous when it preserves all small limits ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]), and local smallness makes hom-collections sets ([[def-small-locally-small-and-large-category]]).

## Proof

**Proof technique:** cases.

1.1 The comma category is locally small because its hom-collections are subsets of those in $\mathcal A$. The set of all comma objects $C\to U(K)$ with $K$ in the supplied coseparating set is again a set by local smallness of $\mathcal C$, and it is coseparating by [L5]. [L5]

1.2 Assume the supplied-well-powering branch. The subobjects of a fixed comma object project injectively into subobject classes of its $\mathcal A$-component: the projection preserves and reflects monomorphisms, and preservation of pullbacks makes the projected monomorphisms remain monic after applying $U$. By [L2] they therefore admit a supplied set of representatives. Their wide pullback exists by completeness, is preserved by continuity, and [L3] and [L4] create its intersection in the comma category. [assume-case powered, L2, L3, L4, L5]

1.3 Assume the direct-intersection branch. Intersect the projected collection using the stated class-intersection datum, including its empty-collection case, and use the separately supplied preservation of that family-of-monomorphisms pullback to construct the comma structure arrow. This invokes no proper-class diagram and does not infer that preservation from the assumed continuity, which covers only small diagrams. [assume-case direct, L4, L5]

2.1 In either branch, $\mathcal A$ is complete and $U$ preserves all small limits by hypothesis, so [L4] creates every small limit in $(C\downarrow U)$ and the comma category is complete for small diagrams. It is locally small, has the coseparating set of step 1.1, and has all the subobject intersections needed by [L1] — from the representative sets of step 1.2 in the first branch, and from the supplied class intersections of step 1.3 in the second. Hence [L1] gives an initial object of $(C\downarrow U)$. [step 1.1, step 1.2, step 1.3, L1, L4, L5, given, cases-exhaustive] ∎
