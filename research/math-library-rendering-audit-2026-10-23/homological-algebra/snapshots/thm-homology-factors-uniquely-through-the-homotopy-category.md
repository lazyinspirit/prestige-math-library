---
id: thm-homology-factors-uniquely-through-the-homotopy-category
kind: theorem
title: "Homology factors uniquely through the homotopy category"
status: published
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homotopy-category-of-chain-complexes, thm-chain-homotopic-maps-induce-the-same-map-on-homology, thm-homology-is-an-additive-functor, prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.8: The homotopy category"
      url: "https://stacks.math.columbia.edu/tag/05RN"
pipeline_run: frontier-25
---

## Statement

Fix $n\in\mathbb Z$. Let
$$Q:\operatorname{Ch}(\mathcal A)\to K(\mathcal A)$$
be the canonical quotient functor for an abelian category $\mathcal A$. Then
there is a unique additive functor
$$\overline H_n:K(\mathcal A)\to\mathcal A$$
such that
$$H_n=\overline H_n\circ Q.$$

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ and an integer $n$.

[L1] Homotopic chain maps induce the same map on homology ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[L2] Homology is an additive functor on chain complexes ([[thm-homology-is-an-additive-functor]]).

[L3] The quotient functor $Q$ is additive ([[prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive]]).

[L4] Morphisms in $K(\mathcal A)$ are homotopy classes of chain maps ([[def-homotopy-category-of-chain-complexes]]).

## Proof

**Proof technique:** direct.

1.1 Define $\overline H_n(C):=H_n(C)$ on objects and $$\overline H_n([f]):=H_n(f)$$ on morphisms. This is well defined because [L1] shows that homotopic representatives have the same homology map, and [L4] says those are exactly the equal morphisms in $K(\mathcal A)$. [L1, L4, given, construct]

2.1 Because $H_n$ is additive by [L2] and $Q$ is additive by [L3], the definition in step 1.1 gives an additive functor with $H_n=\overline H_nQ$. Uniqueness is immediate from [L4]: every morphism of $K(\mathcal A)$ is a class $[f]$, so any factorization must send $[f]$ to $H_n(f)$. [L2, L3, L4, step 1.1, discharge-construct] ∎
