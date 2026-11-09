---
id: op-rank-two-threefold-uniqueness
kind: open-problem
title: Rank-two uniqueness on singular threefolds
status: draft
domain: mathematics
deps:
  - def-vector-bundle-classes
  - def-motivic-chern-classes
  - math:def-axiom-of-choice
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 3, Corollary D, the following paragraph, and Notation and conventions
      reading_limits: The cited article text was read for the formulation,
        conventions, and stated status. The arXiv abstract page and version
        history were consulted; no exhaustive subsequent-literature search was
        performed.
dependency_level: 15
---

## Open problem
Assume the Axiom of Choice and the suitable universes used by the supplied constructions. Let $k$ be an algebraically closed field and let $X$ be a normal singular affine threefold of finite type over $k$. For rank-two vector bundles $E$ and $F$ on $X$, do the equalities $c_1(E)=c_1(F)$ in $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ and $c_2(E)=c_2(F)$ in $H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ imply $E\cong F$?

Here an affine threefold of finite type over $k$ is a scheme $\operatorname{Spec}A$, with $A$ a finitely generated commutative $k$-algebra, of Krull dimension three. Normal means that every local ring is an integrally closed domain; singular means that at least one local ring is not regular. A rank-two vector bundle is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X^2$, and $E\cong F$ means an invertible $\mathcal O_X$-linear map. The supplied construction assigns to such a bundle its first and second integral motivic Chern classes in the indicated motivic cohomology groups, invariant under isomorphism. Equivalently, the question asks whether the map $(c_1,c_2)$ from the set of isomorphism classes of rank-two bundles to the product of these two groups is injective.

## Open problem references
[[def-vector-bundle-classes]]

[[def-motivic-chern-classes]]

[[math:def-axiom-of-choice]]

## Status
Fasel and Yakerson state this uniqueness question as open immediately after Corollary D. At that location they state surjectivity of $(c_1,c_2)$ for normal affine threefolds over algebraically closed fields; surjectivity alone does not settle injectivity. This entry records the article's status as of its cited 2026 version, not an exhaustive assessment of subsequent work. No solution is asserted.

The Choice assumption is inherited from the supplied bundle-class and motivic Chern-class constructions used to formulate the question.
