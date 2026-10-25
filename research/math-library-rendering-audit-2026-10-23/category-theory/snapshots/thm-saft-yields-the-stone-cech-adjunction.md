---
id: thm-saft-yields-the-stone-cech-adjunction
kind: theorem
title: "With the SAFT initial comma objects supplied for all spaces, they assemble into the compact-Hausdorff reflection and agree on Tychonoff spaces with the constructed Stone-Cech adjunction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses, thm-special-adjoint-functor-theorem-objectwise-form, thm-special-adjoint-functor-theorem-functor-form, thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces, thm-adjoints-are-unique-up-to-unique-natural-isomorphism]
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "E. Riehl, Category Theory in Context, example 4.7.12"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Assume the ultrafilter lemma and dependent choice. For every topological space $X$, objectwise SAFT gives an initial object of $(X\downarrow I)$ for the inclusion $I:\mathbf{CompHaus}\hookrightarrow\mathbf{Top}$. If these initial objects are supplied for all $X$, they assemble into a left adjoint $B:\mathbf{Top}\to\mathbf{CompHaus}$.

After restricting the domain to Tychonoff spaces, $B$ is naturally isomorphic, as a left adjoint to the same inclusion, to the chosen Stone-Cech compactification functor $\beta$.

## Facts & Assumptions

**Given:** The ultrafilter lemma, dependent choice, and a supplied family of the objectwise initial comma objects.

[L1] Under these choice principles, the compact-Hausdorff inclusion satisfies the explicit supplied-well-powering SAFT hypotheses ([[prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses]]).

[L2] Objectwise SAFT gives initial comma objects, and a supplied family of them assembles into a left adjoint ([[thm-special-adjoint-functor-theorem-objectwise-form]], [[thm-special-adjoint-functor-theorem-functor-form]]).

[L3] On Tychonoff spaces, the chosen Stone-Cech functor is left adjoint to the compact-Hausdorff inclusion ([[thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces]]).

[L4] Two left adjoints to the same functor are naturally isomorphic by a unique natural isomorphism compatible with the adjunctions ([[thm-adjoints-are-unique-up-to-unique-natural-isomorphism]]).

## Proof

**Proof technique:** constructive.

1.1 For each topological space $X$, [L1] and the objectwise part of [L2] give an initial object of $(X\downarrow I)$. [L1, L2, construct]

2.1 Applying the functor form of [L2] to the supplied family assembles these universal arrows into $B\dashv I$. [step 1.1, L2]

3.1 Restrict $B$ and $I$ to Tychonoff spaces. By [L3], both $B$ and $\beta$ are left adjoint to the same compact-Hausdorff inclusion, so [L4] supplies the unique compatible natural isomorphism $B\cong\beta$. [step 2.1, L3, L4, discharge-construct] ∎
