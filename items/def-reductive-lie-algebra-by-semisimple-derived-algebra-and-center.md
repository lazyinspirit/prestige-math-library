---
id: def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center
kind: definition
title: Reductive Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-semisimple-lie-algebra-by-vanishing-radical, def-derived-series-and-solvable-lie-algebra, def-lie-subalgebra-ideal-and-center]
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
    - title: "Knapp, Lie Groups Beyond an Introduction, reductive convention in §I.7"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "§I.7, reductive Lie algebras, printed pp. 55–57"
---

## Definition

Let $\mathfrak g$ be a finite-dimensional Lie algebra over a field of
characteristic zero. In this library, $\mathfrak g$ is **reductive** when

$$\mathfrak g=Z(\mathfrak g)\oplus[\mathfrak g,\mathfrak g]$$

as an internal direct sum of vector subspaces and the derived algebra
$[\mathfrak g,\mathfrak g]$ is semisimple in the vanishing-radical sense of
[[def-semisimple-lie-algebra-by-vanishing-radical]]. Thus every element has a
unique expression as a central element plus an element of the derived algebra;
equivalently for the displayed sum, the two subspaces span $\mathfrak g$ and
have zero intersection. The center is as in
[[def-lie-subalgebra-ideal-and-center]], and the derived algebra is the first
term after $\mathfrak g$ in
[[def-derived-series-and-solvable-lie-algebra]].

The zero Lie algebra and every finite-dimensional abelian characteristic-zero
Lie algebra are reductive under this convention: the derived algebra is zero,
which is semisimple, and the center is all of $\mathfrak g$. Other standard
characterizations of reductivity are not used here; their equivalence requires
later structure theory. No choice principle is used.
