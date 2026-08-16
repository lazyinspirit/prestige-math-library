---
id: thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces
kind: theorem
title: "With the ultrafilter lemma, dependent choice, and a supplied family of SAFT initial objects, compact Hausdorff spaces form a reflective full subcategory of topological spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, thm-saft-yields-the-stone-cech-adjunction]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, compact-Hausdorff example after V.8"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Statement

Assume the ultrafilter lemma and dependent choice, and suppose that an initial object of $(X\downarrow I)$ is supplied for every topological space $X$, where $I:\mathbf{CompHaus}\hookrightarrow\mathbf{Top}$ is the full inclusion. Then $\mathbf{CompHaus}$ is a reflective full subcategory of $\mathbf{Top}$.

The supplied family is essential data and is not a consequence of the objectwise existence: under the library's convention, separate existence for each $X$ does not choose one initial object over the proper class of all topological spaces.

## Facts & Assumptions

**Given:** The ultrafilter lemma, dependent choice, and a supplied family of initial objects of $(X\downarrow I)$, one for every topological space $X$.

[L1] Under these choice principles, if the objectwise SAFT initial comma objects are supplied for all topological spaces, they assemble into a left adjoint $B:\mathbf{Top}\to\mathbf{CompHaus}$ to the full inclusion ([[thm-saft-yields-the-stone-cech-adjunction]]).

[L2] A full subcategory is reflective when its inclusion has a left adjoint ([[def-reflective-subcategory-and-reflector]]).

## Proof

**Proof technique:** direct.

1.1 The family of initial comma objects assumed in the Given is exactly the supplied family that [L1] requires, so [L1] yields the adjunction $B\dashv I$, whose right adjoint is the compact-Hausdorff inclusion. [L1, given]

2.1 Therefore [L2] says precisely that $\mathbf{CompHaus}$ is a reflective full subcategory of $\mathbf{Top}$. [step 1.1, L2] ∎
