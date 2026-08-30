---
id: prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive
kind: proposition
title: "The canonical functor from complexes to the homotopy category is additive"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homotopy-category-of-chain-complexes, thm-the-homotopy-category-is-additive, thm-the-category-of-complexes-in-an-additive-category-is-additive]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

Let $Q:\operatorname{Ch}(\mathcal A)\to K(\mathcal A)$ be the functor that is
identity on objects and sends a chain map $f$ to its homotopy class $[f]$.
Then $Q$ is additive.

## Facts & Assumptions

**Given:** An additive category $\mathcal A$.

[L1] Morphisms in $K(\mathcal A)$ are homotopy classes of chain maps ([[def-homotopy-category-of-chain-complexes]]).

[L2] $K(\mathcal A)$ is additive ([[thm-the-homotopy-category-is-additive]]).

[L3] $\operatorname{Ch}(\mathcal A)$ is additive ([[thm-the-category-of-complexes-in-an-additive-category-is-additive]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the functor $Q$ sends each chain map to its coset modulo null-homotopy. Therefore for parallel maps $f,g$, $$Q(f+g)=[f+g]=[f]+[g],\qquad Q(0)=[0]=0,$$ so $Q$ preserves the additive structure on hom-groups. [L1, L2, L3, given, algebra]

2.1 The zero object and biproduct objects of $\operatorname{Ch}(\mathcal A)$ are sent to the same underlying complexes in $K(\mathcal A)$ because $Q$ is identity on objects. Since the structural maps are sent to their homotopy classes and still satisfy the biproduct identities, $Q$ preserves finite biproducts. Hence $Q$ is additive. [L1, L2, step 1.1, algebra] ∎
