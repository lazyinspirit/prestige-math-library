---
id: def-semisimple-lie-algebra-by-vanishing-radical
kind: definition
title: Semisimple Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-radical-of-a-finite-dimensional-lie-algebra]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Definition 4.2"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Definition 4.2, printed p. 20"
---

## Definition

A finite-dimensional Lie algebra $\mathfrak g$ is **semisimple** if its
solvable radical vanishes:

$$\operatorname{rad}(\mathfrak g)=0.$$

Here the radical is the largest solvable ideal from
[[def-radical-of-a-finite-dimensional-lie-algebra]]. Under this convention the
zero Lie algebra is semisimple, because its radical is zero. A nonzero solvable
Lie algebra is not semisimple, since it equals its radical. No assertion about
decomposition into simple ideals is built into this definition; that
characterization requires later structure theory. The definition is valid over
any field and uses no choice principle.
