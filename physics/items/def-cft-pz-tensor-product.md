---
id: def-cft-pz-tensor-product
kind: definition
title: "P(z)-tensor product in a module category"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-pz-intertwining-map
dependency_roles:
  "def-cft-pz-intertwining-map": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part III"
      url: "https://arxiv.org/pdf/1012.4197v2"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 3
---

## Statement

Let A be an abelian group, let Ã contain A as a subgroup, and let V be a strongly A-graded Möbius or conformal vertex algebra. Let C be a specified full category of strongly Ã-graded generalized V-modules, with the grading-preserving morphisms commuting with the Möbius operators specified by the P(z)-map supplier. For z∈C×, write $\mathcal M[P(z)]_X^{W_1,W_2}$ for the vector space of P(z)-intertwining maps of type $\binom{X}{W_1\ W_2}$, as defined by the P(z)-intertwining-map convention. A P(z)-tensor product of W1,W2∈C is an object T∈C and a P(z)-intertwining map ι:W1⊗W2→T̄ such that for every X∈C, composition with ι gives a natural bijection Hom_C(T,X)→$\mathcal M[P(z)]_X^{W_1,W_2}$. Existence is an additional theorem or hypothesis, not part of the definition.

## Statement references

[[def-cft-pz-intertwining-map]]

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-cft-pz-intertwining-map]]: Let A be abelian, Ã contain A as a subgroup, V be a strongly A-graded Möbius or conformal vertex algebra, and W1,W2,W3 be strongly Ã-graded generalized V-modules with the specified generalized-weight decompositions and Möbius operators. Fix $z∈C×$. A P(z)-intertwining map of type (W3;W1,W2) is a linear map $I:W1⊗W2→W̄3=\prod _{h∈C}W3_[h]$ whose Ã-degrees add, for which $π_{h-m}I(w1⊗w2)=0$ for all sufficiently large integers m for each fixed h,w1,w2, and which satisfies the P(z)-Jacobi identity and, for $j=-1,0,1, L(j)I(w1⊗w2)=I(w1⊗L(j)w2)+\sum _{i=0}^{j+1}\operatorname{binom}(j+1,i)z^i I((L(j-i)w1)⊗w2)$. There is no L(-1)-derivative axiom for I. Formal variables x0,x1 are independent; z is a fixed complex number.

## Proof

1.1 The universal property represents the functor assigning to X the space of P(z)-intertwining maps W1,W2→X. [given, F1, algebra]

2.1 If (T,ι) and (T',ι') both represent this functor, universality gives unique maps each way carrying the universal maps to one another; uniqueness forces their composites to be identities. Thus the product, when it exists, is unique up to unique isomorphism. [given, F1, step 1.1, algebra] ∎
