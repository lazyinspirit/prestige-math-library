---
id: def-qc-fault-location-path-and-rectangle
kind: definition
title: "Fault Locations, Paths, and Rectangles"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-qc-noise-channel-model
  - def-qc-finite-channel-location-schedule
dependency_level: 10
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Toric code recovery, fault-tolerant recovery, fault-tolerant gates (2011 handwritten lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
---

## Definition

For a finite channel-location schedule $C$, its elementary fault locations are the elements of the finite set $L(C)$ in [[def-qc-noise-channel-model]] and [[def-qc-finite-channel-location-schedule]]. A fault path is a subset $F\subseteq L(C)$; it records where faults occur, not the CPTP maps chosen at those locations.

Fix a recursively replaced gadget family. A level-zero rectangle is one elementary location. A level-$(r+1)$ rectangle is the complete set of elementary locations used by one level-$r$ operation gadget, including its declared preparation, correction, measurement, reset, classical-control, and idle locations. Its level-$r$ child rectangles partition its elementary location set; in the ordinary rectangle recursion these child sets are disjoint. Let $a$ be a uniform upper bound on the number of child rectangles in any such parent. The extended rectangle for a gate is the union of its rectangle and its adjacent correction rectangles; extended rectangles may overlap and are not covered by the disjoint-child convention.

Use a separate integer $b$ for a uniform upper bound on the number of elementary locations in a level-one extended rectangle. The constants $a$ and $b$ count different objects.

