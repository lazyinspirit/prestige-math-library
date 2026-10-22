---
id: thm-haken-normal-essential-disk-existence
kind: theorem
title: "Haken normal essential-disk existence theorem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-normal-surface-coordinate-box
  - lem-essential-pl-disks-admit-normal-replacements
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
      locator: "§5, Theorem 5.4, printed p.12/web lines 502–506; the source states the theorem and directs readers to earlier proofs."
    - title: "Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture notes (2009)"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf"
      locator: "§§14.1–14.4, complete six-page note; it cites rather than proves Haken essential-surface completeness."
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf"
      locator: "Introduction§d, printed pp.253–254, and complete Chapter5, printed pp.360–374. Chapter5 proves its fundamental-surface construction under the additional condition that every embedded sphere separates, in an adapted cell/normal decomposition."

---

## Statement

Let $M$ be a compact triangulated piecewise-linear $3$-manifold with nonempty boundary and with no embedded projective plane. If $M$ contains a properly embedded disk whose boundary is not null-homotopic in $\partial M$, then $M$ contains such a disk that is a fundamental normal surface.

## Statement references

[[def-normal-surface-coordinate-box]] — normal disks, normal-coordinate vectors and fundamentalness.

[Hass–Lagarias–Pippenger, Theorem 5.4](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — Haken's essential-surface theorem and the no-projective-plane hypothesis.

## Source proof status

HLP §5, Theorem 5.4, gives the required existence statement but its proof is a citation to Haken’s Chapter5, Schubert’s Section5 and other papers. The authentic full Haken article has now been acquired. Its complete Chapter5, including the reduced-pair construction of Satz7, the irregular-switch reduction of Satz8, the sphere analysis of Satz9 and the double-induction fundamental-surface argument, has been read. That proved argument explicitly assumes that every embedded sphere separates as well as that no embedded projective plane exists. It also uses coordinates for a cell/normal decomposition adapted to a prescribed boundary curve. Introduction§d,p.254 announces the general essential-disk claim, but the complete proof in Chapter5 does not discharge these transfers to the preserved general Statement about the original standard triangulation.

The normal essential-disk replacement, without an irreducibility hypothesis or an isotopy claim, is proved locally by [[lem-essential-pl-disks-admit-normal-replacements]]. The remaining obligation is the reduced normal-sum disk-patch argument producing a fundamental essential disk in the full no-projective-plane scope, including nonseparating spheres and the original triangulation. No proof of that remaining step is supplied here. The full claim remains present and escalated; neither the announcement nor a proof with additional hypotheses is treated as its proof.
