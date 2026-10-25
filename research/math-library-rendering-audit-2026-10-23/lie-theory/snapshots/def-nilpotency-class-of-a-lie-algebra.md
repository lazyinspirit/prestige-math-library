---
id: def-nilpotency-class-of-a-lie-algebra
kind: definition
title: Nilpotency class of a Lie algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra]
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
    - title: "Milne, Lie Algebras, §2.1"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Definition 2.1, printed p. 11"
---

## Definition

If $\mathfrak g$ is nilpotent, its **nilpotency class** is

$$\operatorname{cl}(\mathfrak g)=\min\{c\geq0:\gamma_{c+1}(\mathfrak g)=0\},$$

where $\gamma_r$ is the lower central series from
[[def-lower-central-series-and-nilpotent-lie-algebra]]. Nilpotence makes the
displayed subset of $\mathbb N$ nonempty, so its least element exists.

This convention gives $\operatorname{cl}(0)=0$. A nonzero Lie algebra has
class $1$ exactly when it is abelian. The class is left undefined for a
nonnilpotent Lie algebra.
