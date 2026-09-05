---
id: cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base
kind: corollary
title: "The underlying ordinary category is change of base along the underlying-hom functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor, thm-the-underlying-category-construction-is-a-two-functor, def-the-internal-hom-and-its-evaluation-morphism]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Categorical Homotopy Theory, Remark 3.5.11"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

The underlying ordinary category construction is the special case of change of
base along the lax monoidal functor $\mathcal V(\mathbf 1,-):\mathcal V\to\mathbf{Set}$.

## Facts & Assumptions

**Given:** The change-of-base and underlying-category constructions.

[L1] Lax monoidal change of base extends to a 2-functor on enriched categories
([[thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor]]).

[L2] The underlying-category construction sends each hom-object to the set of
global elements $\mathcal V(\mathbf 1,-)$
([[thm-the-underlying-category-construction-is-a-two-functor]]).

## Proof

**Proof technique:** direct.

1.1 The hom-objects of the changed-base category along $\mathcal V(\mathbf 1,-)$ are exactly the sets $\mathcal V(\mathbf 1,\mathcal A(A,B))$, which are the hom-sets of $\mathcal A_0$ in [L2]. [L1, L2, given]

2.1 The composition and identity maps are also the same ones: the lax structure on $\mathcal V(\mathbf 1,-)$ is induced by tensoring global elements and then composing in $\mathcal V$, which is exactly how [L2] defines composition and identities in the underlying category. [L2, step 1.1]

3.1 Therefore the underlying ordinary category is the change-of-base instance determined by $\mathcal V(\mathbf 1,-)$. [L1, step 2.1] ∎
