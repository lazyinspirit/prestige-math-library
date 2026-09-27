---
id: thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant
kind: theorem
title: "The boundary topology is well defined and quasi-isometry invariant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-boundary-topology-by-gromov-products, lem-boundary-products-are-independent-of-representative-and-basepoint, lem-quasi-isometries-extend-to-boundary-homeomorphisms, def-axiom-of-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 5.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. For a proper geodesic hyperbolic space, the topology defined on the Gromov
boundary by Gromov products is well defined. Moreover, a quasi-isometry between
proper geodesic hyperbolic spaces induces a homeomorphism of their boundaries.

## Facts & Assumptions

**Given:** AC and proper geodesic hyperbolic spaces $X$ and $Y$.

[F1] The supremal boundary product and any supplied representative product differ by at most $2\kappa$, changing basepoints shifts products by at most their distance, and the threshold-neighbourhood criterion gives a Hausdorff topology ([[lem-boundary-products-are-independent-of-representative-and-basepoint]]).

[F2] Under AC a quasi-isometry of geodesic hyperbolic spaces induces a continuous boundary map, bounded-distance maps induce the same map, and a controlled quasi-inverse supplies a continuous inverse ([[lem-quasi-isometries-extend-to-boundary-homeomorphisms]]).

[A1] AC is used in [F2] for the Morse projection families and coarse-inverse selection ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The boundary product in [[def-boundary-topology-by-gromov-products]] is the supremal product of [F1]. Its comparison with every representative product proves independence of representatives; the basepoint inequality gives cofinal threshold neighbourhoods at any two basepoints. [F1]

2.1 The definition's open-set criterion is exactly the one proved in [F1], including its treatment of threshold sets as neighbourhoods that need not be open. Hence it is a topology and is Hausdorff. [F1, step 1.1]

3.1 By [F2] under [A1], the quasi-isometry induces a continuous map of these boundary topologies. Its controlled quasi-inverse induces a continuous inverse because the bounded-distance composites induce identity maps. This proves the claimed homeomorphism; properness is included in the statement but not required by [F1] or [F2]. [F1, F2, A1, step 2.1] ∎
