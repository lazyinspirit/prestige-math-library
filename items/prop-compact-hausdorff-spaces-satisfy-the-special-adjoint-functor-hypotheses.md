---
id: prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses
kind: proposition
title: "Under the ultrafilter lemma and dependent choice, compact Hausdorff spaces satisfy the explicit SAFT hypotheses for their inclusion into topological spaces"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both, thm-closed-subspace-of-a-compact-space-is-compact, thm-a-compact-hausdorff-space-is-regular-and-normal, thm-compactness-under-continuous-maps, def-well-powered-and-co-well-powered-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, compact-Hausdorff example after V.8"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
    - title: "E. Riehl, Category Theory in Context, example 4.7.12"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Assume the ultrafilter lemma and dependent choice. The category $\mathbf{CompHaus}$ is complete and locally small, has the coseparating object $[0,1]$, and has a supplied well-powering by closed subspace inclusions. Its full inclusion
$$I:\mathbf{CompHaus}\hookrightarrow\mathbf{Top}$$
preserves all small limits. Hence it satisfies the supplied-well-powering branch of the special adjoint functor theorem.

## Facts & Assumptions

**Given:** The ultrafilter lemma and dependent choice.

[L1] Under the ultrafilter lemma, arbitrary products of compact Hausdorff spaces are compact ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

[L2] The category $\mathbf{Top}$ has all small limits, computed on underlying sets ([[thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both]]).

[L3] A closed subspace of a compact space is compact, and a compact Hausdorff space is normal and $T_1$ ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[L4] A continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

[L5] Under dependent choice, $[0,1]$ is coseparating in $\mathbf{CompHaus}$ ([[thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces]]).

[L6] A supplied well-powering is a set of representative monomorphisms for every subobject class ([[def-well-powered-and-co-well-powered-category]]).

## Proof

**Proof technique:** direct.

1.1 A small limit in $\mathbf{Top}$ is constructed from a product and an equalizer. By [L1] the required compact-Hausdorff product is compact, and the equalizer is a closed subspace because the codomain is Hausdorff; [L3] makes it compact, while subspaces of Hausdorff spaces are Hausdorff. Thus the topological limit lies in $\mathbf{CompHaus}$ and the inclusion preserves it, including the empty limit. [L1, L2, L3]

2.1 Every monomorphism into a compact Hausdorff space is an injective continuous map. Its image is compact and hence closed in the Hausdorff codomain; by [L4] the domain is homeomorphic to that image. Thus each subobject is represented by the inclusion of a closed subset, and these inclusions form a set indexed by the power set of the underlying set. This is a supplied well-powering in the sense of [L6], and intersections are the corresponding set-indexed closed subspaces. [step 1.1, L3, L4, L6]

3.1 Local smallness follows because continuous maps form subsets of function sets. Combining completeness and continuity from step 1.1, the supplied well-powering from step 2.1, and the coseparating object from [L5] gives exactly the supplied-well-powering SAFT hypotheses. The ultrafilter lemma is spent in [L1], while dependent choice is spent in [L5]. [step 1.1, step 2.1, L5, L6] ∎
