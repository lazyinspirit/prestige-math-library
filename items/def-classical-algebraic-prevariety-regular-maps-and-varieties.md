---
id: def-classical-algebraic-prevariety-regular-maps-and-varieties
kind: definition
title: "Classical algebraic prevarieties, regular maps, and varieties"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraically-closed-field, def-affine-algebraic-set, def-ringed-space, def-morphism-ringed-spaces, def-irreducible-topological-space-and-subset]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry, Definitions 5.2 and 5.7"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---
## Definition

Fix an algebraically closed field $k$. A **classical algebraic prevariety** over
$k$ is a quasi-compact locally ringed space over $k$ that is covered by open
subspaces isomorphic, as locally ringed spaces over $k$, to affine algebraic sets with
their regular-function sheaves. Equivalently, it admits a finite such affine
cover. A map is **regular** when it is a morphism of these locally ringed
spaces over $k$; equivalently, this can be checked on affine charts. Thus its
maps on structure sheaves respect the fixed $k$-algebra structures.

A prevariety is **separated** when the equalizer of every pair of regular maps
into it is closed. A (classical) **algebraic variety** is a separated
prevariety. In the comparison below, “irreducible classical variety” means a
nonempty variety whose underlying topological space is irreducible.
