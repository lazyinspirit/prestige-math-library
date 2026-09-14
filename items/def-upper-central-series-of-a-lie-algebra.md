---
id: def-upper-central-series-of-a-lie-algebra
kind: definition
title: Upper central series of a Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lie-subalgebra-ideal-and-center, def-quotient-lie-algebra]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Proposition 2.5"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Proposition 2.5 and its central-series notation, printed p. 12"
---

## Definition

The **upper central series** of a Lie algebra $\mathfrak g$ is the ascending
sequence of ideals

$$Z_0(\mathfrak g)=0,\qquad Z_{r+1}(\mathfrak g)/Z_r(\mathfrak g)=Z\bigl(\mathfrak g/Z_r(\mathfrak g)\bigr).$$

Here the right side is the center ([[def-lie-subalgebra-ideal-and-center]]) of
the quotient Lie algebra ([[def-quotient-lie-algebra]]). Equivalently,

$$Z_{r+1}(\mathfrak g)=\{x\in\mathfrak g:[\mathfrak g,x]\subseteq Z_r(\mathfrak g)\}.$$

The equivalence also shows inductively that $Z_{r+1}$ is an ideal containing
$Z_r$: it is the inverse image of a central ideal under the quotient map. In
particular $Z_1(\mathfrak g)=Z(\mathfrak g)$. For the zero Lie algebra every
term is zero.
