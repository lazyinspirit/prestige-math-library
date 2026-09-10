---
id: ex-two-filtered-abelian-groups-with-the-same-associated-graded
kind: example
title: Two filtered abelian groups with the same associated graded
deps: ["cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects", "lem-abelian-group-model-for-spectral-sequence-computations", "thm-integers-modulo-n-basic-algebra", "thm-external-direct-product-is-a-group"]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
generation:
  role: example
---




## Example

For A=ℤ/4 filtered by $F_0A=\{0,2\}$ and B=(ℤ/2)² filtered by $F_0B=(ℤ/2)×0$, take $F_{-1}=0$ and $F_1$ the whole group in each case. The two graded families are ℤ/2 at indices 0 and 1 and zero elsewhere, though the groups are not isomorphic.

## Facts & Assumptions

**Given:** The two finite filtrations stated in the example, extended constantly outside -1≤p≤1.

[F1] These filtrations have isomorphic graded families but different exponent behavior ([[cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects]]).

[F2] The cyclic groups, their finite products, ordinary subgroup kernels, and coset quotients are legitimate abelian-group objects ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

[F3] Addition in $\mathbb Z/n$ is addition of residue classes, with $-[a]_n=[-a]_n$ ([[thm-integers-modulo-n-basic-algebra]]).

[F4] A direct product of groups has componentwise operation and homomorphic coordinate projections ([[thm-external-direct-product-is-a-group]]).

## Verification

**Proof technique:** direct.

1.1 At index zero, the isomorphisms from ℤ/2 are [a]₂↦[2a]₄ and [a]₂↦([a]₂,0). By [F3] and [F4] these preserve addition. Their respective images are {0,2} and {(0,0),(1,0)}, each with generator of order 2. These are the two zero-level graded quotients since $F_{-1}=0$. [F1, F2, F3, F4]

2.1 At index one, the quotients map to ℤ/2 by [a]₄+{0,2}↦[a]₂ and $(a,b)+F_0B↦b$. The coset lists {0,2},{1,3}, together with [F3] and the homomorphic second projection of [F4], prove bijectivity and addition preservation. At every other index adjacent pieces coincide, giving zero. Finally 2[1]₄=[2]₄≠0 but 2(a,b)=(0,0), so no group isomorphism exists. [F1, F2, F3, F4, step 1.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
