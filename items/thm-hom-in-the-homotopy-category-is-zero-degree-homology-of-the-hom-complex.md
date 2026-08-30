---
id: thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex
kind: theorem
title: "Hom in the homotopy category is zero-degree homology of the Hom complex"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hom-complex-of-chain-complexes, prop-zero-cocycles-in-the-hom-complex-are-chain-maps, def-null-homotopic-chain-map, def-homotopy-classes-of-chain-maps, def-homotopy-category-of-chain-complexes]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.14: Homotopy and the shift functor"
      url: "https://stacks.math.columbia.edu/tag/0119"
    - title: "The Stacks Project, Section 12.16: Graded objects"
      url: "https://stacks.math.columbia.edu/tag/09MF"
pipeline_run: frontier-25
---

## Statement

For chain complexes $C_\bullet,D_\bullet$ in an abelian category, there is a
natural isomorphism
$$\operatorname{Hom}_{K(\mathcal A)}(C,D)\cong H_0(\underline{\operatorname{Hom}}(C,D)_\bullet).$$

## Facts & Assumptions

**Given:** Chain complexes $C_\bullet$ and $D_\bullet$.

[L1] Degree-$0$ cycles in the Hom complex are exactly chain maps ([[prop-zero-cocycles-in-the-hom-complex-are-chain-maps]]).

[L2] A degree-$0$ chain map is null-homotopic exactly when it is a boundary in the Hom complex ([[def-null-homotopic-chain-map]]).

[L3] Homotopy classes are chain maps modulo null-homotopic maps ([[def-homotopy-classes-of-chain-maps]]).

[L4] Morphisms in $K(\mathcal A)$ are those homotopy classes ([[def-homotopy-category-of-chain-complexes]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the group of $0$-cycles in $\underline{\operatorname{Hom}}(C,D)_\bullet$ is exactly the group of chain maps $C_\bullet\to D_\bullet$. By [L2], its subgroup of $0$-boundaries is exactly the null-homotopic chain maps. [L1, L2, given, algebra]

2.1 Therefore $$H_0(\underline{\operatorname{Hom}}(C,D))=Z_0/B_0$$ is the quotient of the chain maps by the null-homotopic ones. By [L3] this is $[C,D]_K$, and [L4] identifies that quotient with $\operatorname{Hom}_{K(\mathcal A)}(C,D)$. [L3, L4, step 1.1, algebra] ∎
