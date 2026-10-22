---
id: def-bounding-chain-torsion-linking-pairing
kind: definition
title: Bounding-chain expression for a torsion linking pairing
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: §1, printed pp.306–309, finite linking forms, metabolizers and finite characters of branched covers. This is the classical baseline for the local definition/conventions; no independence or obstruction proof is asserted by the definition alone.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

Let $Y$ be a closed oriented $3$-manifold and let $x,y\in\operatorname{Tor}H_1(Y;\mathbb Z)$. Choose integral $1$-cycles $a,b$ representing $x,y$, respectively. For choices of an integer $n>0$ and an integral $2$-chain $C$ with $\partial C=na$, the bounding-chain expression is $(C\cdot b)/n\bmod\mathbb Z\in\mathbb Q/\mathbb Z$, where $C$ and $b$ are placed transversely and intersection signs use the orientation of $Y$. This expression is the torsion linking pairing when its independence of the choices is established.

## Definition references

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §7.6, pp. 140–141](https://chuck-livingston.github.io/math/Concordance_Book.pdf)
