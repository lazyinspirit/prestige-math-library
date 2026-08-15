---
id: thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces
kind: theorem
title: 'Under the ultrafilter lemma and dependent choice, Stone-Cech compactification is left adjoint to the compact-Hausdorff inclusion'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-stone-cech-compactification, thm-stone-cech-evaluation-closure-universal-property, lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice, def-subcategory-and-full-subcategory, thm-objectwise-universal-arrows-assemble-into-a-left-adjoint, cor-a-compact-hausdorff-space-is-tychonoff]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.6.13'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Example 6.3.14'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Assume the ultrafilter lemma and dependent choice. On the category of Tychonoff spaces, chosen Stone–Čech compactifications define a functor $\beta$ left adjoint to the full inclusion

$$J:\mathbf{CompHaus}\hookrightarrow\mathbf{Tych}.$$

For each Tychonoff space $X$, the unit is its compactification map $\eta_X:X\to J\beta X$.

## Facts & Assumptions

**Given:** The ultrafilter lemma and dependent choice, and a chosen Stone–Čech compactification $(\beta X,\eta_X)$ for every Tychonoff space $X$.

[F1] A Stone–Čech compactification $(B,i)$ of $X$ has the property that every continuous map $X\to K$ to a compact Hausdorff space extends uniquely to a continuous map $B\to K$ ([[def-stone-cech-compactification]]).

[F2] Under the ultrafilter lemma and dependent choice, the evaluation-closure construction is a Stone–Čech compactification of every Tychonoff space ([[thm-stone-cech-evaluation-closure-universal-property]]).

[F3] Under dependent choice, every compact Hausdorff space embeds in a cube $[0,1]^J$ for some set $J$ ([[lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice]]).

[F5] Every compact Hausdorff space is Tychonoff ([[cor-a-compact-hausdorff-space-is-tychonoff]]).

[F4] A full subcategory contains all ambient morphisms between its objects ([[def-subcategory-and-full-subcategory]]).

[L1] Chosen objectwise universal arrows assemble uniquely into a left adjoint ([[thm-objectwise-universal-arrows-assemble-into-a-left-adjoint]]).

## Proof

**Proof technique:** direct.

1.1 By [F5] every compact Hausdorff space is Tychonoff, so [F4] makes $J:\mathbf{CompHaus}\hookrightarrow\mathbf{Tych}$ a well-defined full inclusion; [F3] is what supplies the embedding used inside [F2]. The hypotheses in [F2] supply $(\beta X,\eta_X)$, and [F1] says precisely that it is a universal arrow from $X$ to $J$. [F1, F2, F3, F4, F5]

1.2 For a continuous map $a:X\to Y$, apply [F1] to $\eta_Ya:X\to\beta Y$ and define $\beta a:\beta X\to\beta Y$ as its unique extension. [F1, construct]

2.1 Extension uniqueness gives $\beta(1_X)=1_{\beta X}$ and $\beta(ba)=\beta(b)\beta(a)$, and the defining equations make $\eta$ natural. [step 1.2, F1]

3.1 Thus the chosen universal arrows assemble by [L1] into $\beta\dashv J$. The assumptions are exactly those used in [F2] and [F3]; the assembly step adds no choice principle. [step 1.1, step 2.1, L1, F2, F3] ∎
