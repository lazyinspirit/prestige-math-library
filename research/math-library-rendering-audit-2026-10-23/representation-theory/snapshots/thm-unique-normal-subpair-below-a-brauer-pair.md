---
id: thm-unique-normal-subpair-below-a-brauer-pair
kind: theorem
title: Unique normal subpair below a Brauer pair
deps: [def-normal-inclusion-of-brauer-pairs, def-relative-brauer-homomorphism, lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Jacobsen, Block fusion systems and the center of the group ring, §§1.1 and 2.2, pp.3–8 and 13–18
      url: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf
proof_strategy: direct
---

## Statement

If $(P,e)$ is a local Brauer pair and $Q\trianglelefteq P$, exactly one block $f$ of $kC_G(Q)$ satisfies $(Q,f)\trianglelefteq(P,e)$.

## Facts & Assumptions

**Given:** A local pair $(P,e)$ and a normal subgroup $Q\trianglelefteq P$.

[F1] Normal inclusion requires a $P$-stable block with relative Brauer product $e$. ([[def-normal-inclusion-of-brauer-pairs]])

[F2] Non-singleton block orbits have zero relative Brauer image. ([[lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums]])

[F3] The relative Brauer map is a unital surjective algebra homomorphism on its fixed-algebra domain. ([[def-relative-brauer-homomorphism]])

## Proof

**Proof technique:** direct.

1.1 Partition the primitive central block decomposition of $1$ in $kC_G(Q)$ into its $P$-orbits. The non-singleton orbit sums map to zero. The remaining blocks are individually $P$-stable. Their relative images are orthogonal central idempotents whose sum is one: multiplicativity preserves idempotence and orthogonality. For centrality, lift an arbitrary target element through the surjective relative map; its lift commutes with each central source block, so their images commute. [F1, F2, F3]

2.1 Multiply this sum by primitive central $e$. Each product is either $0$ or $e$, since a nontrivial product would split $e$; at least one equals $e$ because the sum of products is $e\ne0$, and at most one can equal $e$ by orthogonality. Its preimage block $f$ is $P$-stable and satisfies the required equation. Every normal subpair must be one of these $P$-stable blocks by [F1], proving uniqueness as well as existence. [F1, step 1.1] ∎

## Sources

Jacobsen, Block fusion systems and the center of the group ring, §§1.1 and 2.2, pp.3–8 and 13–18. Local argument and conventions as displayed above.
