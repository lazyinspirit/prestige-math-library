---
id: cex-unbased-homotopic-based-maps-need-not-induce-the-same-based-homotopy-map-without-basepoint-transport
kind: counterexample
title: Unbased homotopic based maps need not induce the same based homotopy map without basepoint transport
deps: ["prop-higher-homotopy-basepoint-transport-and-moving-homotopies", "lem-finite-cw-basepoints-have-explicit-homotopy-extension", "thm-fundamental-group-of-finite-wedge-of-circles", "thm-reduced-words-form-the-free-group"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1 pp.341–342 basepoint action, finite wedge witness
status: published
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Freely homotopic based maps always induce equal endomorphisms of the fundamental group at the fixed basepoint.

## Facts & Assumptions

[F1] A vertex inclusion in a finite CW complex has unbased HEP. [[lem-finite-cw-basepoints-have-explicit-homotopy-extension]]

[F2] Moving homotopies induce the transport relation, with conjugation by the first-traversed loop. [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]

[F3] The fundamental group of the two-circle wedge is free on its two standard loops. [[thm-fundamental-group-of-finite-wedge-of-circles]]

[F4] Different reduced words are different elements of the free group. [[thm-reduced-words-form-the-free-group]]


## Counterexample

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Let W be the wedge of two quotient circles, with vertex w and standard loops a,b. It has one vertex and two attached 1-cells, hence is a finite CW complex. By F1 the loop a:w×I→W extends to a homotopy $H:W\times I\to W$ with H(-,0)=id. Set g=H(-,1). Since a(0)=a(1)=w, both id and g are based; H is a free homotopy between them with basepoint track a. [F1, F3]

2.1 F2 gives $\mathrm{id}_*=\beta_a g_*$ and $\beta_a(c)=aca^{-1}$. Applying it to b and multiplying in the free group yields $g_*(b)=a^{-1}ba$. By F3 and F4 this is the reduced three-letter word a inverse, b, a; it has no adjacent cancellation and differs from the one-letter reduced word b. Therefore $g_*\ne\mathrm{id}_*$, although the maps are freely homotopic. [F2, F3, F4, step 1.1] ∎
