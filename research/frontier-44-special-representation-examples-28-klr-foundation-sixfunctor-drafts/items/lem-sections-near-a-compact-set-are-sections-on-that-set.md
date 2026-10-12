---
id: lem-sections-near-a-compact-set-are-sections-on-that-set
kind: lemma
title: Sections on a compact set extend to a neighbourhood
status: draft
origin: pipeline
deps:
- def-sheaf-on-topological-space
- def-inverse-image-presheaf-and-sheaf
- thm-a-compact-hausdorff-space-is-regular-and-normal
- thm-locally-compact-hausdorff-basics
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Let $K\subset X$ be compact in a locally compact Hausdorff space and $F$ a sheaf of $k$-vector spaces. The natural map $\varinjlim_{U\supset K}F(U)\to\Gamma(K,F|_K)$ is an isomorphism. Finite representatives can be glued while preserving prescribed zero germs on a disjoint compact collar.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[def-sheaf-on-topological-space]] is used with its stated hypotheses.

[F2] The exact supplier [[def-inverse-image-presheaf-and-sheaf]] is used with its stated hypotheses.

[F3] The exact supplier [[thm-a-compact-hausdorff-space-is-regular-and-normal]] is used with its stated hypotheses.

[F4] The exact supplier [[thm-locally-compact-hausdorff-basics]] is used with its stated hypotheses.

## Proof

1.1 **Given:** a compact K in a locally compact Hausdorff X and a k-sheaf F. Claim: colim_{U⊃K} F(U)=Γ(K,F|K). A section on K is locally represented by ambient sections. Compactness chooses finitely many domains U_i and compact subsets C_i⊂U_i∩K covering K, by finite shrinking in the compact Hausdorff K. On C_i∩C_j the ambient representatives agree as germs, hence on an ambient open W_ij containing this compact intersection. Shrink their ambient domains around C_i so pairwise intersections lie in W_ij: to see the two-set shrinking, take a relatively compact neighbourhood of C_i∪C_j and a smaller W_0 with closure∩(C_i∪C_j) inside W_ij; the disjoint compact parts C_i\W_0 and C_j\W_0 have disjoint neighbourhoods, by compact-Hausdorff normality. Add W_0 to those neighbourhoods, shrink within U_i,U_j, and repeat for the finitely many pairs. The representatives now glue on a neighbourhood of K. Injectivity is equally local: two representatives equal on K agree on a neighbourhood of each point of K, and the union of finitely many such neighbourhoods is a neighbourhood of K. All constructions are k-linear and natural. No cohomological comparison is assumed. [given, construct, algebra]

2.1 A useful strengthened form is simultaneous finite gluing with prescribed zero germs on a compact collar: apply the same argument to the zero representative on that collar. This form is used below to ensure compact support rather than just an unrestricted extension. [given, construct, algebra] ∎

