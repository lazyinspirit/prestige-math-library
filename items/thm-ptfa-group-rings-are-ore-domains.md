---
id: thm-ptfa-group-rings-are-ore-domains
kind: theorem
title: PTFA group rings embed in skew fields of fractions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-group-ring
  - def-poly-torsion-free-abelian-group
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - lem-torsion-free-abelian-extensions-preserve-group-ring-domains
  - lem-ptfa-groups-have-finite-folner-sets
  - lem-folner-group-ring-domains-have-ore-fractions
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Tim D. Cochran, Kent E. Orr, and Peter Teichner, “Knot concordance,
        Whitney towers and L²-signatures”
      url: https://arxiv.org/pdf/math/9908117
      locator: §2.1, Proposition 2.5; the proof cites the PTFA group-ring Ore theorem
---

## Statement

Let G be a PTFA group and let QG be its group ring over the rational field. Then QG has no zero divisors and satisfies both the left and right Ore conditions. Consequently QG embeds in a skew field of fractions in which every nonzero element of QG is invertible.

## Statement references

[[lem-torsion-free-abelian-extensions-preserve-group-ring-domains]]

[[lem-ptfa-groups-have-finite-folner-sets]]

[[lem-folner-group-ring-domains-have-ore-fractions]]

[COT, §2.1, Proposition 2.5 and its cited group-ring argument](https://arxiv.org/pdf/math/9908117)

## Facts & Assumptions

**Given:** A PTFA group G with a finite subnormal series whose factors are torsion-free abelian.

[F1] PTFA means that G has such a finite subnormal series; each subgroup need only be normal in the next ([[def-poly-torsion-free-abelian-group]]).

[F2] The rational group ring has the group elements as a basis, bilinear group-law multiplication and a nonzero identity ([[def-group-ring]], [[thm-group-ring-is-a-unital-algebra-with-basis-g]]).

[F3] If $H\trianglelefteq L$ with $L/H$ torsion-free abelian and $\mathbb Q[H]$ has no zero divisors, then $\mathbb Q[L]$ has no zero divisors, including for nonsplit extensions ([[lem-torsion-free-abelian-extensions-preserve-group-ring-domains]]).

[F4] Every group with the finite subnormal series in [F1] satisfies the finite left Folner condition without a choice axiom ([[lem-ptfa-groups-have-finite-folner-sets]]).

[F5] A group-ring with no zero divisors and finite left Folner sets has both Ore common-multiple properties and an explicitly constructed division ring of fractions in which every element is a right fraction $as^{-1}$ ([[lem-folner-group-ring-domains-have-ore-fractions]]).

## Proof

**Given:** The data in the Statement.

1.1 Fix a finite series $1=G_0\trianglelefteq G_1\trianglelefteq\cdots\trianglelefteq G_m=G$ as in [F1]. Its base ring $\mathbb Q[G_0]=\mathbb Q$ has no zero divisors. For each $j<m$, apply [F3] to $G_j\trianglelefteq G_{j+1}$ and its torsion-free abelian quotient. Induction gives absence of zero divisors in $\mathbb Q[G]$. The domain supplier keeps the conjugation automorphisms and cocycle units of the extension in its leading-coefficient product, so this induction assumes neither a splitting nor normality of each $G_j$ in the final group. [F1, F2, F3, given, algebra]

1.2 By [F4], the same finite subnormal series gives finite left Folner sets in $G$. That supplier constructs finite sets directly across each group extension, with only finitely many coset lifts for each test, rather than assuming an invariant mean or adding a choice principle. [F1, F4, given]

2.1 Apply [F5] to the ring from step 1.1 and the finite sets from step 1.2. It gives nonzero common right multiples $ax=by$ of every nonzero $a,b$, and the group-inversion anti-automorphism gives nonzero common left multiples. It then constructs a division ring from equivalence classes of right-linear maps on nonzero right ideals, embeds $\mathbb Q[G]$ injectively, and shows every element of that division ring is $as^{-1}$ with $0\ne s\in\mathbb Q[G]$. These are exactly both Ore conditions and the required skew field of fractions. The length-zero case is already included by the base field. [F2, F5, step 1.1, step 1.2, algebra] ∎
