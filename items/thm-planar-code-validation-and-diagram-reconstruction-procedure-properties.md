---
id: thm-planar-code-validation-and-diagram-reconstruction-procedure-properties
kind: theorem
title: "Planar-code validation and reconstruction procedure properties"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - alg-planar-code-validation-and-diagram-reconstruction
  - lem-planar-diagram-code-realizability-and-face-validation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999), section 1"
      url: "https://arxiv.org/pdf/math/9807016"
      locator: "§1 Introduction, finite graph diagram representation and crossing data, web text lines 102–121"
    - title: "Jeff Erickson, Planar Graphs, Computational Topology lecture notes (2023)"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Rotation Systems and Formalities and Trivialities, lines 49–72"
---

## Statement

For every finite input in the three code formats, the validation and
reconstruction procedure terminates. It returns an invalid-code reason
exactly when the first failed syntax, incidence, orientation, component,
connectedness, face-count, or outer-face condition in its stated order occurs;
otherwise it returns the crossing-disk/edge-band model of the represented
oriented diagram, its oriented components, its face cycles, and its selected
outer face.

## Statement references

[[alg-planar-code-validation-and-diagram-reconstruction]] — the ordered finite procedure and its output record.

[[lem-planar-diagram-code-realizability-and-face-validation]] — Euler face-count criterion for spherical realization.

[Hass–Lagarias–Pippenger, §1](https://arxiv.org/pdf/math/9807016) — finite graph encoding of oriented link diagrams.

[Erickson, “Planar Graphs”](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html) — finite dart, rotation, face, and outer-face data.

## Facts & Assumptions

**Given:** A finite tagged Gauss, signed DT, or oriented PD input with its declared crossing count and, when nonempty, its crossing data and outer-face field.

[F1] [[def-planar-diagram-gauss-and-dowker-codes]]: Gauss labels occur as one over-visit and one under-visit at each crossing; signed DT codes pair each odd visit with a distinct even visit and carry a separate crossing-sign vector; PD codes give the edge incidences, oriented strands, opposite over/under pairs, crossing signs, and face selector.

[F2] [[alg-planar-code-validation-and-diagram-reconstruction]]: the procedure checks the header, code-specific visit or record conditions, incidences, valence, over/under pairs, strand orientations, crossing-sign order, component cycles, crossing-graph connectedness, face cycles, Euler count, and outer-face identifier in the listed order, then builds the finite crossing-disk/edge-band model.

[F3] [[lem-planar-diagram-code-realizability-and-face-validation]]: a nonempty connected code satisfying the local crossing and orientation conditions has a spherical realization exactly when $V-E+F=2$; choosing one face gives its plane model. The crossingless one-component code is realized by the standard circle.

[F4] [[def-planar-diagram-gauss-and-dowker-codes]]: at $c=0$, the Gauss word and DT data are empty, the PD data are `Loop[1]`, an orientation marker is either `ccw` or `cw`, and the outer-face marker is `outside`.

## Proof

1.1 The input records are finite. Each label count, vector check, incidence count, and crossing check scans a finite list. Each component traversal marks at least one previously unvisited outgoing dart until it closes or reports a repeated/missing dart; since there are finitely many darts, it makes at most $|D|+1$ such visits. The crossing-connectivity scan uses the finite vertex and edge lists, and the face computation iterates a permutation of finite $D$, so it lists at most $|D|$ face cycles. The spanning-tree selection and disk/band construction use finite edge lists. If $c=0$, the separate branch ends after a finite comparison with its six allowed format-and-orientation combinations. Thus every input reaches a return after finitely many operations. [given, F2, construct]

2.1 Every `Invalid` return is made immediately after its named predicate fails, and the procedure reaches predicates in the displayed order. Hence the returned reason and witness identify the first failed check. Conversely, if a finite input fails one of the stated checks, the finite scan reaches the first such failure and returns the corresponding invalid record before any later check. [given, F2, step 1.1]

2.2 Suppose a nonempty input passes the code-format, incidence, valence, strand, over/under, crossing-sign, component, and connectedness checks. Its finite tables then define the fixed-point-free edge involution $\alpha$, the clockwise crossing rotation $\sigma$, and the face permutation $\phi=\alpha\circ\sigma$. The procedure's face scan lists exactly the cycles of this permutation by finite orbit tracing. It accepts the face stage precisely when their count satisfies $V-E+F=2$ and the supplied outer-face identifier names one of those cycles. By [F3], these conditions are necessary and sufficient for the spherical model, and deleting a point in the selected face gives the plane diagram returned in the output record. [given, F1, F2, F3, step 1.1]

3.1 In the crossingless branch, the accepted forms are exactly the six format-and-orientation combinations in [F4], representing its two normalized one-component codes. The local realization in [F3] realizes each marked orientation by a circle with two sphere faces; every other zero-crossing input is rejected by the preceding format comparison. The nonempty and crossingless branches exhaust the possible nonnegative values of $c$, so the procedure terminates and has exactly the stated rejection and acceptance behavior. [given, F2, F3, F4, step 2.1, step 2.2] ∎
