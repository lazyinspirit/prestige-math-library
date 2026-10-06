---
id: rem-shape-theory
kind: remark
title: "Shape theory"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Homotopy theory replaced by inverse systems of polyhedra, for spaces with bad local structure"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Shape theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Shape_theory_(mathematics)"
    - title: "shape theory (nLab)"
      url: "https://ncatlab.org/nlab/show/shape+theory"
    - title: "Cech cohomology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/%C4%8Cech_cohomology"
pipeline_run: null
---

## Statement

**Shape theory**, created by Borsuk in 1968 and developed by Mardesic and Segal,
replaces homotopy theory for spaces whose local structure is too bad for homotopy
groups to see them. In outline: a compact metric space $X$ is embedded in the
Hilbert cube (or in any absolute retract), one takes the inverse system of its
open neighbourhoods, each of which is homotopy equivalent to a polyhedron, and one
defines morphisms $X \to Y$ not as maps but as morphisms of the associated
inverse systems in the pro-homotopy category. The resulting **shape category** has
the same objects as the homotopy category of compacta and a coarser, better
behaved notion of morphism.

The properties that make it the right framework, none proved here:

* shape and homotopy agree on compacta that are homotopy dominated by finite
  polyhedra, in particular on finite CW complexes and on ANRs;
* Cech cohomology is a shape invariant, whereas singular cohomology is not
  well behaved on such compacta;
* two compacta may have all homotopy groups trivial and different shapes, so
  shape distinguishes spaces that homotopy groups cannot, and it is shape rather
  than weak homotopy type that captures the global form of a bad compactum.

## Remarks

**Not proved in this library.** Nothing above. Neither the construction nor any
of its properties is established here.

**What would prove it.** A homotopy track first, then ANR theory, inverse limits
of spaces, pro-categories, and Cech (co)homology. Shape theory sits well above
everything this library builds, and it is recorded here for orientation only.

**Why it matters here.** The library proves a good deal about compacta with
violent local structure: solenoids, the pseudo-arc, the Knaster-Kuratowski fan,
the closed topologist's sine curve. Every one of those is a point-set object here
and is handled honestly with point-set tools. Shape theory is the name of what is
missing when a reader asks what such a space looks like globally, and it is the
reason the phenomena in [[rem-warsaw-circle-weakly-contractible]] and in
[[rem-homotopy-invariants-of-classical-continua]] are not paradoxes but the
expected behaviour of the wrong invariant.
