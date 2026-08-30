---
id: thm-homology-is-an-additive-functor
kind: theorem
title: "Homology is an additive functor"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-functor,
       def-abelian-category,
       thm-a-chain-map-induces-a-well-defined-map-on-homology,
       prop-homology-respects-identities-and-composition,
       thm-the-category-of-complexes-in-an-additive-category-is-additive,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

For each $n\in\mathbb Z$, homology defines an additive functor
$$H_n:\operatorname{Ch}(\mathcal A)\to\mathcal A.$$

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ and an integer $n$.

[L1] A chain map induces a map on homology ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[L2] Those induced maps respect identities and composition ([[prop-homology-respects-identities-and-composition]]).

[L3] An additive functor is a functor that is additive on each hom-group ([[def-additive-functor]]).

[L4] An abelian category is additive, so $\operatorname{Ch}(\mathcal A)$ is also additive and sums of chain maps are defined degreewise ([[def-abelian-category]], [[thm-the-category-of-complexes-in-an-additive-category-is-additive]]).

[L5] Kernels are universal among arrows annihilated by the displayed map ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the assignment $C\mapsto H_n(C)$ and $f\mapsto H_n(f)$ is already a functor. [L1, L2]

1.2 Let $f,g:C\to D$ be chain maps. By [L4], their sum $f+g$ is the chain map with components $f_n+g_n$. Let $$k_C:Z_n(C)\to C_n,\qquad k_D:Z_n(D)\to D_n$$ be the cycle inclusions and $$q_C:Z_n(C)\to H_n(C),\qquad q_D:Z_n(D)\to H_n(D)$$ the homology quotients. Then $$k_D\bigl(Z_n(f)+Z_n(g)\bigr)=f_n k_C+g_n k_C=(f_n+g_n)k_C=k_D Z_n(f+g).$$ Since both maps on cycles are killed by $d_n^D$, the uniqueness in the kernel property [L5] for $k_D$ gives $$Z_n(f+g)=Z_n(f)+Z_n(g).$$ Therefore $$\bigl(H_n(f)+H_n(g)\bigr)q_C=H_n(f)q_C+H_n(g)q_C=q_D Z_n(f)+q_D Z_n(g)=q_D Z_n(f+g).$$ By the uniqueness clause in [L1], this forces $$H_n(f+g)=H_n(f)+H_n(g).$$ [L1, L4, L5, algebra]

2.1 Steps 1.1 and 1.2 are exactly the functoriality and additivity demanded by [L3]. Hence $H_n$ is an additive functor. [L3, step 1.1, step 1.2] ∎
