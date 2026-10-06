---
id: rem-homotopy-invariants-of-classical-continua
kind: remark
title: "Classical continua: the point-set half is in scope, the homotopy half is not"
status: draft
origin: session
proved_here: false
deps: [rem-shape-theory]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "The Knaster-Kuratowski fan, the pseudo-arc and the solenoids are point-set objects here"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Knaster-Kuratowski fan (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Knaster%E2%80%93Kuratowski_fan"
    - title: "Pseudo-arc (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudo-arc"
    - title: "Solenoid (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Solenoid_(mathematics)"
    - title: "solenoid (nLab)"
      url: "https://ncatlab.org/nlab/show/solenoid"
pipeline_run: null
---

## Statement

Three classical continua are **not** deferred as point-set objects, and this item
exists to record exactly where the line falls for each of them.

**In scope, and to be proved in this library.**

* **Cantor's leaky tent, the Knaster-Kuratowski fan.** A subspace of the plane
  defined in pure ZF from the Cantor set: the fan is connected, and deleting its
  apex leaves a totally disconnected space. Both halves are elementary point-set
  arguments.
* **The pseudo-arc.** A chainable, hereditarily indecomposable continuum;
  its construction as an intersection of crooked chains, its
  indecomposability, Bing's theorems that it is homogeneous and that it is
  homeomorphic to each of its nondegenerate subcontinua, are point-set results.
* **The solenoids $\Sigma_p$**, realised as the inverse limit of the system
  $S^1 \xleftarrow{z \mapsto z^p} S^1 \xleftarrow{z \mapsto z^p} \cdots$, or as
  intersections of nested solid tori. That $\Sigma_p$ is a compact connected
  metrizable abelian topological group, that it is an indecomposable continuum,
  and that it is not locally connected, are point-set facts.

**Deferred: their homotopy- and shape-theoretic invariants.** Specifically, and
not proved here: that the Cech cohomology of the $p$-adic solenoid is
$\check{H}^1(\Sigma_p;\mathbb{Z}) \cong \mathbb{Z}[1/p]$, so that solenoids with
different $p$ are not homeomorphic and none of them has the homotopy type of a CW
complex; that the pseudo-arc is tree-like and therefore has trivial shape,
although it is not contractible; and, for all three spaces, any statement that
their homotopy groups, homology or cohomology are what they are.

## Remarks

**Not proved in this library:** exactly the invariants named above, and nothing
else about these spaces.

**What would prove it.** Cech cohomology and inverse limits, and the shape
category of [[rem-shape-theory]]; for the CW statement, the homotopy machinery of
[[rem-homology-and-cohomology]] as well.

**Why it matters here.** These continua are among the best examples the library
has of how badly a connected compact metric space can behave, and it would be a
mistake to defer them wholesale merely because algebraic topology has famous
things to say about them. DEFERRED.md is explicit on this point: the objects
themselves are in scope, and only the invariants are deferred. The practical rule
for authoring is that any claim about these spaces phrased in terms of
connectedness, compactness, indecomposability, homogeneity or the structure of
their subcontinua is to be proved; any claim phrased in terms of homotopy,
homology, cohomology or shape is to be recorded here with a citation.
