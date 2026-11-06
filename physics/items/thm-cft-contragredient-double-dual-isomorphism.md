---
id: thm-cft-contragredient-double-dual-isomorphism
kind: theorem
title: Double contragredient of a grading-restricted generalized module
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
deps:
  - thm-cft-contragredient-module-well-defined
  - def-cft-contragredient-generalized-module
  - thm-cft-contragredient-generalized-module
  - def-grading-restricted-generalized-vertex-module
justified_by: []
proof_strategy: direct
domain: mathematics
library: mathematics
dependency_roles:
  thm-cft-contragredient-module-well-defined: mathematical-premise
  def-cft-contragredient-generalized-module: mathematical-premise
  thm-cft-contragredient-generalized-module: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I"
      url: https://arxiv.org/pdf/1012.4193
      locator: "Theorem 2.34, PDF pp. 67–68: the grading-restricted generalized module and its double contragredient are identified; the proof refers to FHL Theorems 5.2.1 and 5.3.1 and HLZ Lemma 2.22."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $M$ be a grading-restricted generalized module for a conformal vertex algebra, and let $M'$ be its restricted contragredient from the Definition on this page. The restricted double contragredient $M''=(M')'$ is naturally isomorphic to $M$ as a generalized module; under the evaluation identification on each finite-dimensional generalized weight space, the module actions agree.

## Statement references

[[def-cft-contragredient-generalized-module]]

[[thm-cft-contragredient-generalized-module]]

[[def-grading-restricted-generalized-vertex-module]]

## Facts & Assumptions

**Given:** The module and restricted contragredient in the unchanged Statement, including the page's joint finite-component convention when it is used.

[F1] [[thm-cft-contragredient-generalized-module]] supplies the contragredient module and the unchanged finite-dimensional generalized weight spaces, or joint weight spaces in the component convention.

[F2] [[thm-cft-contragredient-module-well-defined]] proves that componentwise evaluation $e_M:M\to M''$ is a module isomorphism in the single-module setting, using the actual involution of the opposite-state operator.

[F3] [[def-cft-contragredient-generalized-module]] fixes precisely that opposite formula, while [[def-grading-restricted-generalized-vertex-module]] supplies finite-dimensionality and finite weight support.

## Proof

1.1 For every finite-dimensional generalized-weight block, evaluation identifies $M_{[h]}$ with $M_{[h]}^{**}$. Taking their algebraic direct sum gives a bijection $e_M:M\to M''$, characterized by $\langle e_M(m),\lambda\rangle=\langle\lambda,m\rangle$. In the joint convention the same construction on $M_{[\lambda]}$ is a bijection of joint-weight direct sums, by F1. No full algebraic dual of an infinite direct sum is substituted for this restricted dual. [given, F1, F3, algebra]

2.1 For a single module F2 proves equivariance for this exact evaluation map. For a joint module, fix j and all the other joint eigenvalues $\beta$ as in F1's fibre construction. F2 applied to $M^{j,\beta}$ says that the restriction of $e_M$ commutes with every jth field. The direct-sum formula in step 1.1 is the same fibre evaluation for every j and $\beta$, so $e_M$ commutes with every component field; it is therefore a module isomorphism in the component convention too. [F1, F2, step 1.1, algebra]

3.1 For a module map $f:M\to N$, commutation with each $L_j(0)$ means that f preserves each generalized or joint weight block. Thus its restricted transpose $f':N'\to M'$ is defined, and its double transpose obeys $\langle f''e_M(m),\nu\rangle=\langle e_M(m),f'(\nu)\rangle=\langle\nu,f(m)\rangle=\langle e_Nf(m),\nu\rangle$ for every restricted functional $\nu$. Such functionals separate each weight block, hence $f''e_M=e_Nf$. This proves naturality of the module isomorphism. [F1, F3, step 1.1, step 2.1, algebra] ∎
