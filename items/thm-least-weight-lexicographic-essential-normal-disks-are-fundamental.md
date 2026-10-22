---
id: thm-least-weight-lexicographic-essential-normal-disks-are-fundamental
kind: theorem
title: Least-weight lexicographic essential normal disks are fundamental
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - lem-essential-pl-disks-admit-normal-replacements
  - lem-nonfundamental-least-weight-essential-disks-have-a-pure-boundary-obstruction
  - lem-minimum-boundary-exchange-cycles-force-an-impossible-zero-edge-normal-component
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 10
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Complete Chapter5, printed pp.360–374, fundamental normal-surface construction in adapted coordinates; normal-surface/exchange context for the local formulation here. The source has additional separation/adapted-coordinate hypotheses and is not attributed the present original-coordinate refinement.
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

## Statement

Let $M$ be a compact PL three-manifold with a finite simplicial triangulation $T$. Among its essential normal disks choose one of least edge weight, and among those choose $F$ with lexicographically least normal vector. Then $F$ is fundamental in the original seven-coordinate system of $T$.

Consequently, if $M$ contains a properly embedded PL disk whose boundary is not null-homotopic in $\partial M$, it contains such a disk that is a fundamental normal surface. No ambient orientability, irreducibility or exclusion of projective planes is required, and no choice hypothesis is introduced.

## Statement references

[[def-normal-surface-coordinate-box]] — admissible normal vectors and fundamentalness in the original triangulation.

[[lem-minimum-boundary-exchange-cycles-force-an-impossible-zero-edge-normal-component]] — the final finite cycle contradiction.

## Facts & Assumptions

**Given:** The finite triangulation and either the extremal normal disk of the first assertion or an essential proper PL disk for the consequence.

[F1] Every essential proper PL disk has an essential normal replacement in the same triangulation. ([[lem-essential-pl-disks-admit-normal-replacements]])

[F2] A nontrivial admissible decomposition of a least-weight essential normal disk produces the reduced original-triangulation pair of an inessential-boundary disk and an annulus or Mobius band, with at least two proper double arcs. This reduction includes the finite exclusions of spherical and projective-plane summands. ([[lem-nonfundamental-least-weight-essential-disks-have-a-pure-boundary-obstruction]])

[F3] Such a reduced boundary pair cannot occur for a least-weight essential disk whose vector is lexicographically least: its finite minimum-leaf cycle produces a nonempty zero-edge component of a genuine partial regular resolution. ([[lem-minimum-boundary-exchange-cycles-force-an-impossible-zero-edge-normal-component]])

## Proof

1.1 Suppose the vector of $F$ were not fundamental. By [[def-normal-surface-coordinate-box]], it would be $x+y$ for two nonzero admissible integer vectors. Their quad supports are compatible, since their nonnegative sum has at most one quad type in any tetrahedron. Thus [F2] supplies its actual original-triangulation reduced boundary pair. The assumed weight and lexicographic minimality are exactly those of [F3], which excludes that pair. This contradiction proves fundamentalness of $F$. [given, F2, F3, contradiction, algebra]

2.1 For the consequence, normalize the given essential disk by [F1]. The set of essential normal disks is therefore nonempty. Its edge weights are positive integers, so choose their least value. Among vectors at this value, lexicographic minimization requires only finitely many natural-number minima: minimize the first coordinate, then the second among those retained, and so on through the $7t$ coordinates. Each step leaves a nonempty set, and the resulting vector is realized by an essential normal disk. This finite construction uses no selection from an infinite family. Apply step 1.1 to that disk to obtain the claimed fundamental one in the same triangulation. [given, F1, step 1.1, construct] ∎
