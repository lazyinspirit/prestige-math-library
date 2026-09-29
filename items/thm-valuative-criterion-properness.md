---
id: thm-valuative-criterion-properness
kind: theorem
title: Valuative criterion for properness
status: draft
origin: pipeline
deps:
  - def-proper-morphism
  - def-valuative-diagram-separatedness
  - lem-universally-closed-valuative-existence-quasicompact
  - thm-valuative-criterion-separatedness
  - def-quasi-compact-and-quasi-separated-morphism
  - def-locally-finite-type-and-finite-type-morphism
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.43.1 (tag 0BX5), valuative criterion for properness"
      url: https://stacks.math.columbia.edu/tag/0BX5
    - title: "The Stacks Project, Schemes, Lemma 26.22.1 (tag 01KZ) and Lemma 26.22.2 (tag 01L0)"
      url: https://stacks.math.columbia.edu/tag/01L0
    - title: "Vakil, The Rising Sea, Theorem 11.3.11 and the valuative criteria of §13.7"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Let $f:X\to S$ be a morphism of schemes that is of
finite type and quasi-separated. Then $f$ is proper if and only if every
valuative diagram for $f$ over an arbitrary valuation ring has exactly one
lift. The two hypotheses are not interchangeable: finite type is used only
through quasi-compactness, while quasi-separatedness is a separate hypothesis
on the diagonal, and the separatedness criterion cited below needs it.

## Facts & Assumptions

**Given:** A finite-type, quasi-separated morphism $f:X\to S$, and valuative diagrams for $f$ as below.

[F1] A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated, of finite type, and universally closed. ([[def-proper-morphism]])

[F2] A **valuative diagram** for $f:X\to S$ consists of a valuation ring $R\subseteq K$ with fraction field $K$, a morphism $\operatorname{Spec}K\to X$ and a morphism $\operatorname{Spec}R\to S$ forming a commutative square; a **lift** is a morphism $\operatorname{Spec}R\to X$ making both triangles commute. The uniqueness part of the criterion says every diagram has at most one lift, the existence part says every diagram has at least one. ([[def-valuative-diagram-separatedness]])

[F3] Let $f$ be quasi-compact. Then $f$ is universally closed if and only if every valuative diagram for $f$ over every valuation ring $R\subseteq K$ has a lift $\operatorname{Spec}R\to X$. The quantifier over all valuation rings cannot be weakened to discrete valuation rings under these hypotheses. ([[lem-universally-closed-valuative-existence-quasicompact]])

[F4] Let $f$ be quasi-separated. Then $f$ is separated if and only if every valuative diagram for $f$, with an arbitrary valuation ring $R$ and fraction field $K$, has at most one lift $\operatorname{Spec}R\to X$. ([[thm-valuative-criterion-separatedness]])

[F5] A morphism is of finite type exactly when it is locally of finite type and quasi-compact. ([[def-locally-finite-type-and-finite-type-morphism]])

[F6] A morphism $f:X\to S$ is **quasi-separated** if for affine opens $U,U'\subseteq X$ lying over a common affine open of $S$ the intersection $U\cap U'$ is quasi-compact. ([[def-quasi-compact-and-quasi-separated-morphism]])

[F7] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct, combining the existence and uniqueness halves of the valuative criteria.

1.1 Work with the notions of valuative diagram and lift from [F2]. Assume first that $f$ is proper. Then [F1] makes $f$ separated, of finite type and universally closed, and [F5] makes it quasi-compact. Since $f$ is quasi-compact, the existence half of [F3] gives, for every valuative diagram for $f$ over every valuation ring, at least one lift. Since $f$ is separated and quasi-separated, the forward half of [F4] gives that every such diagram has at most one lift. Hence every valuative diagram has exactly one lift. [F1, F2, F3, F4, F5]

1.2 Assume conversely that every valuative diagram for $f$ over an arbitrary valuation ring has exactly one lift. The hypotheses give that $f$ is of finite type and quasi-separated, so [F5] makes $f$ quasi-compact. Existence of lifts for every diagram, together with quasi-compactness, gives that $f$ is universally closed by the reverse half of [F3]. Uniqueness of lifts, together with quasi-separatedness, gives that $f$ is separated by the reverse half of [F4]. Being separated, of finite type and universally closed, $f$ is proper by [F1]. [F1, F3, F4, F5]

2.1 The argument uses the Axiom of Choice exactly through the two cited criteria [F3] and [F4], each of which assumes it; no further choice is made here. Quasi-separatedness is used only in the uniqueness halves, and it is a separate hypothesis: [F6] defines it by quasi-compactness of intersections of affine opens over a common affine base open, whereas finite type contributes quasi-compactness by [F5]. If $X$ is empty, there is no morphism from the nonempty scheme $\operatorname{Spec}K$ to $X$, so there are no valuative diagrams and both lift conditions hold vacuously. If $S$ is empty, the only morphism $X\to S$ has $X$ empty, and the same reasoning applies. The statement has no endpoint cases. [F5, F6, F7] ∎
