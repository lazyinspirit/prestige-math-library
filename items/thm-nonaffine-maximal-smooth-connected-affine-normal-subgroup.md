---
id: thm-nonaffine-maximal-smooth-connected-affine-normal-subgroup
kind: theorem
title: "Every algebraic group has a largest smooth connected affine normal subgroup"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-affine-normal-subgroup-products, lem-nonaffine-connected-group-geometrically-connected, thm-nonaffine-group-scheme-normal-subgroup-quotient, lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Proposition 8.2 and Proposition 6.42, p.149"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Lemma 3.1.4"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume the Axiom of Choice. Every separated finite-type $k$-group scheme $G$ has a largest smooth connected affine closed normal subgroup $N$. It contains every subgroup with these properties, not just one subgroup of maximal dimension. The quotient $G/N$ has no nontrivial smooth connected affine closed normal subgroup. Neither $G$ nor the field is assumed smooth or perfect for these assertions.

## Facts & Assumptions

[F1] Products of two smooth connected affine closed normal subgroups have the same properties. Smooth connected groups are geometrically integral. ([[lem-nonaffine-affine-normal-subgroup-products]], [[lem-nonaffine-connected-group-geometrically-connected]])

[F2] Represented normal quotients exist with fppf projection; extensions of affine, smooth, or connected groups inherit the respective property. ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]])

## Proof

**Given:** AC and $G$ as in the statement.

1.1 The trivial subgroup belongs to the specified class. Its members have nonnegative integer dimensions bounded by $\dim G$, so choose $N$ of largest dimension. For any other member $H$, [F1] gives a member $NH$ containing $N$ and $H$. Maximal dimension forces $\dim NH=\dim N$. Since $NH$ is geometrically integral by [F1], a proper closed subset has smaller dimension; hence $N=NH$ as subsets. Both schemes are smooth and reduced, so their closed-immersion ideal has zero radical and is zero; equality is scheme theoretic. Therefore $H\subset N$. This proves that $N$ is largest and makes it unique. [F1, given, choose, algebra]

2.1 Form $q:G\to Q=G/N$ by [F2]. If $Q$ had a nontrivial smooth connected affine closed normal subgroup $A$, its scheme preimage $P=G\times_QA$ would be a closed normal subgroup with exact sequence $1\to N\to P\to A\to1$, since the projection is the base change of $q$. By [F2], $P$ is affine, smooth, and connected. The largest-subgroup assertion then gives $P\subset N$, while its surjection onto $A$ and $P/N=A$ would force $A$ trivial. This contradiction proves the quotient assertion. AC is inherited from [F1]–[F2]. [F1, F2, step 1.1, construct] ∎
