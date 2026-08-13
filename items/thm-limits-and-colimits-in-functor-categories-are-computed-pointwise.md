---
id: thm-limits-and-colimits-in-functor-categories-are-computed-pointwise
kind: theorem
title: "For small source and index categories, chosen target limits and colimits compute the corresponding functor-category limits and colimits pointwise"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-category, prop-size-of-functor-categories, def-limit-and-colimit-of-a-diagram, thm-chosen-limits-and-colimits-assemble-into-functors, lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic, prop-limit-colimit-duality, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: pointwise-construction
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Proposition 3.3.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Let $\mathcal A$ and $\mathcal J$ be small and let
$D:\mathcal J\to[\mathcal A,\mathcal C]$. If each diagram
$j\mapsto D(j)(a)$ has a chosen limit, these limits form a limit of $D$ in the
functor category. The dual statement holds pointwise for chosen colimits.

## Facts & Assumptions

**Given:** The two small categories, the diagram $D$, and a chosen limiting
cone $(L(a),\lambda^a_j)$ at every $a\in\mathcal A$.

[F1] The functor category has functors as objects and natural transformations
as morphisms; the small-source hypotheses ensure the stated size control
([[def-functor-category]], [[prop-size-of-functor-categories]]).

[F2] A limit is characterized by existence and uniqueness of cone factors
([[def-limit-and-colimit-of-a-diagram]]).

[L1] Chosen limits act functorially on natural transformations
([[thm-chosen-limits-and-colimits-assemble-into-functors]]).

[L2] Limit legs are jointly monic
([[lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic]]).

[L3] Colimits are the formal dual ([[prop-limit-colimit-duality]]).

[F3] Choice selects an element from every set in a family of nonempty sets
([[def-axiom-of-choice]]).

## Proof

**Proof technique:** pointwise construction.

1.1 For $h:a\to b$, the maps $D(j)(h):D(j)(a)\to D(j)(b)$ form a natural transformation of $\mathcal J$-diagrams. By [L1] they induce $L(h):L(a)\to L(b)$ with $\lambda^b_jL(h)=D(j)(h)\lambda^a_j$. [F1, L1]

1.2 Given a cone $\xi:X\Rightarrow D$ in the functor category, pointwise universality gives a unique $u_a:X(a)\to L(a)$ with $\lambda^a_ju_a=\xi_{j,a}$. For $h:a\to b$, naturality of $\xi_j$ makes $L(h)u_a$ and $u_bX(h)$ equal after every $\lambda^b_j$; [L2] makes them equal. Thus the $u_a$ form a natural transformation $u:X\Rightarrow L$. [F1, F2, L2]

2.1 Identity and composition for $L$ follow either from [L1] or by composing with every $\lambda^a_j$ and applying [L2]. Thus $L:\mathcal A\to\mathcal C$ is a functor, and the displayed equations say each $\lambda_j:L\Rightarrow D(j)$ is natural. [F1, L1, L2, step 1.1]

2.2 The transformation $u$ factors the cone componentwise. Any other factor has the same component at every $a$ by pointwise uniqueness, hence equals $u$. By [F2], $(L,\lambda)$ is a limit in the functor category. [F1, F2, step 1.2]

3.1 If only existence, rather than chosen limits, is assumed, [F3] selects the pointwise cones over the set of objects of the small category $\mathcal A$. Reversing the whole construction by [L3] proves the colimit assertion. [F3, L3, step 1.1, step 2.1, step 1.2, step 2.2] ∎
