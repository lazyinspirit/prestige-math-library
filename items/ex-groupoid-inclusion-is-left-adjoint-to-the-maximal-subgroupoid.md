---
id: ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid
kind: example
title: 'The inclusion of groupoids into categories is left adjoint to the maximal-subgroupoid functor'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isomorphism-groupoid-and-connected-category, prop-isomorphisms-form-the-maximal-subgroupoid, thm-the-adjunction-hom-set-bijection-under-local-smallness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.15'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Example

Let $I:\mathbf{Gpd}\hookrightarrow\mathbf{Cat}$ be the inclusion of small groupoids and let $\operatorname{Core}(\mathcal C)$ be the maximal subgroupoid of a small category $\mathcal C$. Then

$$I\dashv\operatorname{Core}.$$

## Facts & Assumptions

**Given:** A small groupoid $\mathcal G$ and a small category $\mathcal C$.

[F1] A groupoid is a category in which every morphism is an isomorphism ([[def-isomorphism-groupoid-and-connected-category]]).

[F2] The subcategory of all objects and all isomorphisms of $\mathcal C$ is a groupoid containing every subgroupoid of $\mathcal C$ ([[prop-isomorphisms-form-the-maximal-subgroupoid]]).

[L1] A natural hom-set bijection presents an adjunction between locally small categories ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Verification

**Proof technique:** direct.

1.1 Every functor $T:I\mathcal G\to\mathcal C$ sends inverses to inverses, so [F1] and [F2] force every image morphism into $\operatorname{Core}(\mathcal C)$. Keeping the same object and morphism functions gives a unique factor $\bar T:\mathcal G\to\operatorname{Core}(\mathcal C)$. [F1, F2]

1.2 If $K:\mathcal C\to\mathcal D$ is a functor, it sends isomorphisms to isomorphisms and therefore restricts to $\operatorname{Core}(K):\operatorname{Core}(\mathcal C)\to\operatorname{Core}(\mathcal D)$. Identities and composites restrict unchanged, so $\operatorname{Core}$ is a functor. [F1, F2]

2.1 The factorization in step 1.1 and inclusion give inverse bijections $\mathbf{Cat}(I\mathcal G,\mathcal C)\cong\mathbf{Gpd}(\mathcal G,\operatorname{Core}(\mathcal C))$. Their definitions by restriction show naturality in both variables. [step 1.1, step 1.2]

3.1 The categories of small categories and small groupoids are locally small, so [L1] applied to step 2.1 gives $I\dashv\operatorname{Core}$. The construction also covers the empty groupoid and empty category. [step 2.1, L1] ∎
