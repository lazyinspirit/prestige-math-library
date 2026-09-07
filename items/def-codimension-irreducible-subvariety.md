---
id: "def-codimension-irreducible-subvariety"
kind: "definition"
title: "Codimension of an irreducible closed subvariety"
deps: ["def-dimension-classical-variety"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §3l and §5j"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
---

## Definition

For a nonempty irreducible closed subvariety $Z$ of an irreducible classical variety $X$, define $\operatorname{codim}_X Z=\dim X-\dim Z$. These are finite integers. In a reducible ambient variety a difference of global dimensions must not be substituted for the height of a local prime; the containing component matters.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.
