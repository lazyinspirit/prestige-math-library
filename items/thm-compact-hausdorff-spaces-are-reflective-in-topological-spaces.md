---
id: thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces
kind: theorem
title: "Under the ultrafilter lemma and dependent choice, compact Hausdorff spaces form a reflective full subcategory of topological spaces"
status: draft
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
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, compact-Hausdorff example after V.8"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Statement

Assume the ultrafilter lemma and dependent choice. The full subcategory $\mathbf{CompHaus}$ of $\mathbf{Top}$ is reflective.

## Facts & Assumptions

**Given:** The ultrafilter lemma and dependent choice.

[L1] Under these hypotheses, supplied SAFT universal arrows assemble into a left adjoint $B:\mathbf{Top}\to\mathbf{CompHaus}$ to the full inclusion ([[thm-saft-yields-the-stone-cech-adjunction]]).

[L2] A full subcategory is reflective when its inclusion has a left adjoint ([[def-reflective-subcategory-and-reflector]]).

## Proof

**Proof technique:** direct.

1.1 The adjunction in [L1] has the compact-Hausdorff inclusion as right adjoint. [L1]

2.1 Therefore [L2] says precisely that $\mathbf{CompHaus}$ is a reflective full subcategory of $\mathbf{Top}$. [step 1.1, L2] ∎
