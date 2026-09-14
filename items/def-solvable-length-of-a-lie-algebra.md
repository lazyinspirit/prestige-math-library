---
id: def-solvable-length-of-a-lie-algebra
kind: definition
title: Solvable length of a Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-derived-series-and-solvable-lie-algebra]
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
    - title: "Milne, Lie Algebras, §3.2"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Definition 3.2 and the derived-series convention, printed p. 16"
---

## Definition

If $\mathfrak g$ is solvable, its **derived length** (or **solvable length**) is

$$\operatorname{dl}(\mathfrak g)=\min\{m\geq0:\mathfrak g^{(m)}=0\},$$

where $\mathfrak g^{(m)}$ is the derived series from
[[def-derived-series-and-solvable-lie-algebra]]. The minimum exists precisely
because solvability makes the displayed subset of $\mathbb N$ nonempty.

With this indexing, $\operatorname{dl}(0)=0$, while every nonzero abelian Lie
algebra has derived length $1$. We leave the derived length undefined for a
nonsolvable Lie algebra rather than assigning it the symbol $\infty$.
