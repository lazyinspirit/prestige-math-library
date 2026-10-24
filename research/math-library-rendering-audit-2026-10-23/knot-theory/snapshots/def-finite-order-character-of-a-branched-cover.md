---
id: def-finite-order-character-of-a-branched-cover
kind: definition
title: Finite-order characters of a cyclic branched cover
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: §1, printed pp.306–309, finite linking forms, metabolizers and finite characters of branched covers. This is the classical baseline for the local definition/conventions; no independence or obstruction proof is asserted by the definition alone.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---

## Definition

Assume AC. Let $K$ be a smooth oriented knot, let $q\ge2$, and let $M=\Sigma_q(K)$ be its $q$-fold cyclic branched cover. A character is a homomorphism $\chi:H_1(M;\mathbb Z)\to\mathbb Q/\mathbb Z$. Its order is its order in $\operatorname{Hom}(H_1(M;\mathbb Z),\mathbb Q/\mathbb Z)$; it is finite-order when this order is finite and has prime-power order when its order is $p^e$ for a prime $p$ and $e\ge1$. It vanishes on a subgroup $P$ when $\chi(x)=0$ for every $x\in P$.

## Definition references

[[def-cyclic-branched-cover-of-a-knot|The q-fold cyclic branched cover]]

[[def-axiom-of-choice|Axiom of Choice]]
