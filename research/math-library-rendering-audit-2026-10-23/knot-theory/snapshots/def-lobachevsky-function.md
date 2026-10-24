---
id: def-lobachevsky-function
kind: definition
title: "Lobachevsky function"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "Definition 9.2, printed p.174"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

For real $\theta$, define the Lobachevsky function
$$
\Lambda(\theta)=-\int_0^\theta \log|2\sin u|\,du,
$$
where the integral is interpreted improperly at zeros of $\sin u$.

## Definition references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Definition 9.2](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)
