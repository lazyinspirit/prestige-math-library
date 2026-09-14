---
id: def-simple-semisimple-and-reductive-lie-algebras
kind: definition
title: Simple, semisimple, and reductive Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-semisimple-lie-algebra-by-vanishing-radical, def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center, def-lie-subalgebra-ideal-and-center]
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
    - title: "Milne, Lie Algebras, §§4 and 6"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Definition 4.2 and §6, Proposition 6.2, printed pp. 20 and 42"
---

## Definition

Let $\mathfrak g$ be a finite-dimensional Lie algebra over a field $k$.

- It is **simple** if it is nonabelian and its only ideals are $0$ and
  $\mathfrak g$.
- It is **semisimple** if
  $\operatorname{rad}(\mathfrak g)=0$, as in
  [[def-semisimple-lie-algebra-by-vanishing-radical]].
- When $\operatorname{char}k=0$, it is **reductive** when
  $$\mathfrak g=Z(\mathfrak g)\oplus[\mathfrak g,\mathfrak g]$$
  and the derived algebra $[\mathfrak g,\mathfrak g]$ is semisimple, as in
  [[def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center]].

The word “nonabelian” in the first clause excludes one-dimensional abelian
Lie algebras from being simple. The zero Lie algebra is semisimple under the
vanishing-radical convention and, when $\operatorname{char}k=0$, is reductive,
with both displayed summands zero. These are conventions, not yet the structure theorem that every
semisimple algebra is a direct sum of simple ideals.
