---
id: def-finite-linking-form-and-metabolizer
kind: definition
title: Finite nonsingular linking forms and metabolizers
status: draft
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
verification:
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

A finite nonsingular linking form is a pair $(A,\lambda)$, where $A$ is a finite abelian group and $\lambda:A\times A\to\mathbb Q/\mathbb Z$ is symmetric and induces an isomorphism $A\to\operatorname{Hom}(A,\mathbb Q/\mathbb Z)$. For $P\le A$, put $P^\perp=\{a\in A:\lambda(a,p)=0\text{ for every }p\in P\}$. A metabolizer is a subgroup $P$ with $P=P^\perp$; equivalently, $\lambda$ vanishes on $P\times P$ and $|P|^2=|A|$.

## Definition references

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §7.6, pp. 140–141](https://chuck-livingston.github.io/math/Concordance_Book.pdf)
