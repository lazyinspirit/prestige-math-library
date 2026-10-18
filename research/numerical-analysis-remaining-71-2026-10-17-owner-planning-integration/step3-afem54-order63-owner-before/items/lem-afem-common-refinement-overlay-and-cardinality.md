---
id: "lem-afem-common-refinement-overlay-and-cardinality"
kind: "lemma"
title: "Common NVB refinement and overlay cardinality"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 2
deps:
  - "def-afem-nvb-labelled-triangulation-family"
  - "lem-afem-nvb-shape-regularity-and-three-generation-properties"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 4"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture4.pdf"
      locator: "§§4.1–4.3, closure complexity, localized upper bound, and restricted
        P1 Laplace complexity, PDF pp. 1–4."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: pass
---
## Statement

For two compatible conforming NVB descendants $\mathcal T_1,\mathcal T_2$ of the same initial mesh $\mathcal T_0$, the union of their bisection forests defines a smallest common conforming overlay $\mathcal T_1\oplus\mathcal T_2$ and
$$\#(\mathcal T_1\oplus\mathcal T_2)\le\#\mathcal T_1+\#\mathcal T_2-\#\mathcal T_0.$$

## Facts & Assumptions

**Given:** A fixed compatible labeled initial triangulation and two of its finite conforming bisection forests.

[F1] Compatible initial labels and the midpoint bisection rule uniquely assign labels to descendant edges, independent of which incident triangle generates the shared edge ([[def-afem-nvb-labelled-triangulation-family]], [[lem-afem-nvb-shape-regularity-and-three-generation-properties]]).

## Proof

1.1 Let $F_i$ be the finite binary forest for $\mathcal T_i$. Their node union $F=F_1\cup F_2$ is a forest: every nonroot node keeps its parent, and a node is either a leaf in both forests or has its same two children in at least one; if it has children in either forest, the union contains both. The common initial edges have equal labels. Induct on the bisection depth of any shared edge: its midpoint is uniquely determined by the segment, and its two half-edge labels are determined by the same generation rule [F1]; therefore both incident forests prescribe the same descendants on that edge. The leaves of $F$ consequently form a matching conforming triangulation refining both $\mathcal T_1$ and $\mathcal T_2$. Any common refinement must contain every node split in either forest, so it contains $F$ and refines its leaf partition. Thus this is the smallest common conforming overlay. [F1, given, construct]

2.1 For each initial root, a finite full binary tree with $i$ internal nodes has $i+1$ leaves; induction on $i$ proves this because splitting one leaf increases the leaf count by one. The internal nodes of $F$ are the union of the internal nodes of $F_1,F_2$, so $\#\operatorname{Int}(F)\le\#\operatorname{Int}(F_1)+\#\operatorname{Int}(F_2).$ Summing the leaf identity over the $\#\mathcal T_0$ roots gives $\#\mathcal T_i=\#\mathcal T_0+\#\operatorname{Int}(F_i)$ and the same identity for the overlay. Substitution proves the inequality. [step 1.1, algebra] ∎
