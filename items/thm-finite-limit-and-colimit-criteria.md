---
id: thm-finite-limit-and-colimit-criteria
kind: theorem
title: "Finite, nonempty finite, and connected finite (co)limit criteria in terms of products, equalizers, pullbacks, terminal objects, and their duals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-empty-limits-and-colimits-are-terminal-and-initial-objects, def-products-and-coproducts, def-equalizers-and-coequalizers, def-pullbacks-and-pushouts, thm-small-limits-from-products-and-equalizers, thm-small-colimits-from-coproducts-and-coequalizers, prop-limit-colimit-duality]
justified_by: []
aliases: []
landmark: true
proof_strategy: equivalence
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Categories, Lemmas 4.18.2 to 4.18.4"
      url: "https://stacks.math.columbia.edu/download/categories.pdf"
    - title: "E. Riehl, Category Theory in Context, Theorem 3.5.17"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

For a category $\mathcal C$:

1. all finite limits exist if and only if finite products and equalizers exist,
   equivalently if and only if a terminal object and pullbacks exist;
2. all nonempty finite limits exist if and only if binary products and
   equalizers exist, equivalently if and only if binary products and
   pullbacks exist;
3. all finite connected limits exist if and only if pullbacks and equalizers
   exist.

Reversing arrows gives the three colimit criteria, with coproducts,
coequalizers, an initial object, and pushouts.

## Facts & Assumptions

**Given:** A category $\mathcal C$.

[F1] Empty limits are terminal objects, and empty colimits are initial objects
([[prop-empty-limits-and-colimits-are-terminal-and-initial-objects]]).

[F2] Products, equalizers, pullbacks, and their duals have their stated
universal properties ([[def-products-and-coproducts]],
[[def-equalizers-and-coequalizers]], [[def-pullbacks-and-pushouts]]).

[L1] A limit is constructed from products over the objects and arrows of its
index category and an equalizer ([[thm-small-limits-from-products-and-equalizers]]).

[L2] The dual coproduct-coequalizer construction gives colimits
([[thm-small-colimits-from-coproducts-and-coequalizers]]).

[L3] Formal duality reverses every hypothesis and conclusion
([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** equivalence of constructions.

1.1 For a finite index category, both products in [L1] are finite, so finite products and equalizers give all finite limits. Conversely, discrete finite diagrams and parallel pairs show that all finite limits give finite products and equalizers. [L1, F2]

1.2 If the finite index category is nonempty, its object and arrow sets are nonempty, so the two products in [L1] can be built by iterated binary products without a terminal object. This proves sufficiency from binary products and equalizers; those constructions themselves have nonempty finite shapes, proving necessity. If binary products and pullbacks exist, the equalizer of $f,g:A\rightrightarrows B$ is obtained by pulling $(f,g):A\to B\times B$ back along the diagonal $B\to B\times B$. Conversely, nonempty finite limits include binary products and pullbacks. This proves every equivalence in clause 2. [L1, F2]

1.3 For a finite connected diagram, choose a spanning tree in its finite underlying undirected graph and root it at one object. Start with the root object. When a leaf is attached by an arrow directed from the leaf toward the constructed subtree, pull back the current apex along that arrow; when the arrow points toward the leaf, its required leg is the composite of the existing leg with that arrow and the apex does not change. Induction constructs the universal cone for the tree. For each remaining diagram arrow, take the equalizer of the two maps from the current apex to its codomain, and repeat finitely many times. The result represents exactly the cones over the whole diagram. Conversely, pullbacks and equalizers have finite connected indexing categories. This proves both directions of clause 3, including the one-object case, where loops are imposed by equalizers. [F2]

2.1 A terminal object and binary products give every finite product by iteration, including the zero-factor product. An equalizer of $f,g:A\rightrightarrows B$ is the pullback of $(f,g):A\to B\times B$ along the diagonal $B\to B\times B$. Hence a terminal object and pullbacks give all finite limits by step 1.1. [F1, F2, step 1.1]

3.1 Conversely, finite limits include the terminal object and every pullback. Thus both formulations in clause 1 are equivalent in both directions. [F1, F2, step 1.1, step 2.1]

4.1 Applying [L3] to steps 1.1, 1.2, 1.3, 2.1, and 3.1 exchanges every construction with the one in [L2] and proves all three colimit equivalences, including the empty boundary through [F1]. [F1, L2, L3, step 1.1, step 2.1, step 3.1, step 1.2, step 1.3] ∎
