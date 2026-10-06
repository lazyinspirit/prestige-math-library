---
id: thm-barsotti-chevalley-perfect-field-group-variety
kind: theorem
title: "Barsotti-Chevalley over a perfect field: unique smooth affine normal subgroup"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-dependent-choice, def-abelian-variety-over-a-field, prop-abelian-variety-commutativity-from-rigidity, thm-abelian-variety-is-projective, prop-nonaffine-smooth-group-pseudo-abelian-quotient, thm-nonaffine-pseudo-abelian-perfect-field-is-complete, lem-nonaffine-connected-group-geometrically-connected, lem-proper-geometrically-integral-affine-scheme-is-point, thm-nonaffine-group-scheme-normal-subgroup-quotient]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-24.md
      - research/frontier-38-owner-30-dispatch/reader-reader-24.result.json
      - research/frontier-38-owner-30-step5-hash-24-post-5a.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Proposition 8.6 and Theorems 8.26-8.27, pp.154-155"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Theorem 4.3.2 and Theorem 4.3.4 with Lemma 4.3.5"
      url: https://arxiv.org/pdf/1509.03059
    - title: "Conrad, A modern proof of Chevalley's theorem on algebraic groups, Theorem 1.1 and inseparable descent discussion"
      url: https://virtualmath1.stanford.edu/~conrad/papers/chev.pdf
---

## Statement

Assume AC and DC. Let $k$ be perfect and let $G$ be a connected group variety over $k$, meaning a smooth connected separated finite-type $k$-group scheme. There is a unique smooth connected affine closed normal subgroup $N\subset G$ such that $A=G/N$ is an abelian variety. The projection is faithfully flat of finite presentation, with scheme kernel $N$. Thus there is an exact sequence of fppf group sheaves
$$1\longrightarrow N\longrightarrow G\longrightarrow A\longrightarrow1.$$
The quotient $A$ is commutative and projective. The subgroup $N$ is the largest smooth connected affine normal subgroup of $G$. Both perfectness and the group-variety hypothesis belong to this uniqueness assertion.

## Facts & Assumptions

[F1] Exact Proposition 8.6 gives the unique largest smooth connected affine normal subgroup with pseudo-abelian quotient, over any field. Exact Theorem 8.26 makes pseudo-abelian groups proper over perfect fields. ([[prop-nonaffine-smooth-group-pseudo-abelian-quotient]], [[thm-nonaffine-pseudo-abelian-perfect-field-is-complete]])

[F2] Smooth connected groups are geometrically integral; a proper geometrically integral affine scheme is a point. Represented normal quotients have fppf projection and the stated scheme kernel. ([[lem-nonaffine-connected-group-geometrically-connected]], [[lem-proper-geometrically-integral-affine-scheme-is-point]], [[thm-nonaffine-group-scheme-normal-subgroup-quotient]])

[F3] Proper geometrically connected smooth groups are abelian varieties, are commutative, and are projective by the local Stacks route. ([[def-abelian-variety-over-a-field]], [[prop-abelian-variety-commutativity-from-rigidity]], [[thm-abelian-variety-is-projective]])

## Proof

**Given:** AC, DC, perfect $k$, and connected group variety $G/k$.

1.1 Apply the first exact reduction in [F1] to obtain its largest smooth connected affine normal subgroup $N$ and smooth connected pseudo-abelian quotient $A$. The completeness theorem in [F1] makes $A$ proper because $k$ is perfect. Its connectedness is geometric by [F2], so [F3] identifies it as an abelian variety and proves commutativity and projectivity. The quotient projection and its kernel give the exact fppf sequence by [F2]. [F1, F2, F3, given, construct]

2.1 Conversely an abelian variety has no nontrivial smooth connected affine closed subgroup: any such subgroup is proper as a closed subscheme, geometrically integral by [F2], and a point by [F2]. Thus an abelian quotient is pseudo-abelian. If another smooth connected affine normal $N'$ has abelian quotient, the uniqueness clause of the first reduction in [F1] gives $N'=N$. Its largest-subgroup clause also gives the stated maximality. AC and DC are inherited from the exact reductions and projectivity suppliers; they are included in the statement. [F1, F2, F3, step 1.1, algebra] ∎
