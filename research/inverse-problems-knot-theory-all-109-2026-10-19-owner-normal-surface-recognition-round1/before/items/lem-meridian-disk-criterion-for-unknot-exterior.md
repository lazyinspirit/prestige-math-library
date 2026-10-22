---
id: lem-meridian-disk-criterion-for-unknot-exterior
kind: lemma
title: "Meridian-disk criterion for unknot recognition"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - lem-essential-disk-boundary-is-longitude
  - def-countable-choice
  - lem-smooth-to-pl-knot-exterior-ambient-isotopy
justified_by: []
aliases: []
proof_strategy: not-supplied
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)"
      url: "https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf"
      locator: "§4, Lemmas 4.1–4.2, printed pp.8–9/web lines 357–383; Lemma 4.1’s disk-to-unknot proof is only one sentence."
    - title: "Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture notes (2009)"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf"
      locator: "§14.2, printed pp.3–4; the disk criterion is stated but the reverse implication is not proved."
---

## Statement

Assume countable choice. Let $K:S^1\to S^3$ be a smooth oriented knot with a supplied product tubular neighborhood, and let $E_K$ be its compact exterior with peripheral torus $T_K$, fibre meridian $\mu$, and the unique degree-one generator $[\lambda]$ of the kernel of $H_1(T_K;\mathbb Z)\to H_1(E_K;\mathbb Z)$ supplied by the product-tube Mayer–Vietoris calculation. Then $K$ is ambient isotopic in the smooth category to the standard unknot if and only if $E_K$ contains a properly embedded piecewise-linear disk $D$ whose boundary is not null-homotopic in $T_K$. Every such disk has $[\partial D]=[\lambda]$ or $-[\lambda]$ and has odd mod-two intersection with the original marked meridian $\mu$.

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy]] — the smooth ambient-isotopy convention.

[[def-knot-exterior]] — compact exterior and boundary torus of the supplied tube.

[[def-knot-meridian-and-preferred-longitude]] — the original meridian and preferred-longitude conventions.

[[lem-essential-disk-boundary-is-longitude]] — boundary-slope and odd-intersection conclusions for every essential disk.

[Hass–Lagarias–Pippenger, Lemmas 4.1–4.2](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — the claimed disk criterion and mod-two form.

## Proof status

The final boundary-slope and parity clause is proved by [[lem-essential-disk-boundary-is-longitude]]. HLP Lemma 4.1 proves the unknot-to-disk direction only by saying that the disk is “clear,” and its disk-to-unknot direction only by saying that an essential disk “can be used” to produce an ambient isotopy; Lemma 4.2 reduces to Lemma 4.1. The missing reverse argument must pass from the exterior disk, capped by the tube annulus, to the stated smooth ambient isotopy. The published Jordan–Brouwer supplier proves separation but does not prove that the complementary closures are balls. A complete PL disk-boundary/unknot theorem with the exact smooth/PL and peripheral hypotheses is unresolved, so this item is escalated.
