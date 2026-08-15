---
id: thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces
kind: theorem
title: "Under dependent choice, the unit interval is a coseparating object in compact Hausdorff spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separating-set-and-coseparating-set, thm-urysohn-lemma, thm-a-compact-hausdorff-space-is-regular-and-normal]
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

Assume the Axiom of Dependent Choice. In the category of compact Hausdorff spaces, the unit interval $[0,1]$ is a coseparating object: if $f,g:X\rightrightarrows Y$ are distinct continuous maps, there is a continuous $h:Y\to[0,1]$ with $h\circ f\ne h\circ g$.

## Facts & Assumptions

**Given:** Compact Hausdorff spaces $X,Y$ and distinct continuous maps $f,g:X\rightrightarrows Y$, under dependent choice.

[L1] Every compact Hausdorff space is normal and $T_1$, so singleton subsets are closed ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[L2] Under dependent choice, disjoint closed subsets of a normal space are separated by a continuous map to $[0,1]$ taking the values $0$ and $1$ on them ([[thm-urysohn-lemma]]).

[L3] A coseparating object distinguishes distinct parallel maps by postcomposition ([[def-separating-set-and-coseparating-set]]).

## Proof

**Proof technique:** direct.

1.1 Since $f\ne g$, fix $x\in X$ with $f(x)\ne g(x)$. By [L1], the singleton sets $\{f(x)\}$ and $\{g(x)\}$ are disjoint closed subsets of the normal space $Y$. [given, L1, choose]

2.1 By [L2], there is a continuous $h:Y\to[0,1]$ with $h(f(x))=0$ and $h(g(x))=1$. Thus $(hf)(x)\ne(hg)(x)$, so $hf\ne hg$ and [L3] proves that $[0,1]$ is coseparating. Both endpoints are used, and the only nonempty selection is the displayed point $x$. [step 1.1, L2, L3] ∎
