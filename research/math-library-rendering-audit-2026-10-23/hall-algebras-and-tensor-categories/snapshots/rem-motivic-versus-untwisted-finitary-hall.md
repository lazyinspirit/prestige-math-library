---
id: rem-motivic-versus-untwisted-finitary-hall
kind: remark
title: "Motivic stack Hall and untwisted finitary Hall have different carriers"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-motivic-hall-algebra-of-a-finite-quiver
  - def-untwisted-hall-algebra
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §§1.1–1.3"
      url: "https://arxiv.org/pdf/math/0611617v2"
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §§4.1–4.2"
      url: "https://arxiv.org/pdf/1002.4372v1"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** The finitary and motivic products with their stated coefficient
carriers and quotient-first sequence convention.

[F1] On its declared domain of a small finitary abelian category and a
commutative unital coefficient ring, the finitary product has basis symbols
indexed by object isomorphism classes and its coefficient counts subobjects
in $0\to N\to E\to M\to0$
([[def-untwisted-hall-algebra]]). This remark contrasts the defining
carriers; it does not assert that every finite-quiver representation category
meets that supplier's finitary hypotheses.

[F2] The motivic product uses relative stack classes and pullback/pushforward
along the exact-sequence stack
([[def-motivic-hall-algebra-of-a-finite-quiver]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the finitary carrier is a direct sum of copies of the coefficient ring indexed by object isomorphism classes, and each product coefficient is a natural-number subobject count. By [F2], the motivic carrier consists of relative classes of stacks mapping to representation stacks, and its product pulls those families back to a stack of exact sequences before pushing to the middle-object stack. These are different defining carriers and coefficient operations, even though both use the same quotient-first short-exact-sequence order. [F1, F2]

2.1 The definitions provide no map from those natural-number counts to the relative stack classes. Any comparison therefore needs a specified realization and normalization; neither associativity proof alone supplies such a comparison. [F1, F2] ∎

## Remarks

The actual current PA-19 Definition was inspected as the upstream interface;
it remains a draft carrier in its owning pair until ordinary readiness and
review. This item uses only its stated coefficient carrier and product
formula.


