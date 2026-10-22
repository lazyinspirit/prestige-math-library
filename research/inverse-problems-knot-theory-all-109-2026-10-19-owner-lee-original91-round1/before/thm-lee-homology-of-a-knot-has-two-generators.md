---
id: thm-lee-homology-of-a-knot-has-two-generators
kind: theorem
title: Lee homology of a knot has two generators
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - thm-lee-filtered-homology-is-an-oriented-link-invariant
  - def-countable-choice
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC_omega is used only through finite Reidemeister sequences in the
  filtered-invariance theorem; the rank count is finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: Jacob Rasmussen, Khovanov homology and the slice genus,
        arXiv:math/0402131v1
      url: https://arxiv.org/pdf/math/0402131v1
      locator: §2.4 and §3.1, printed pp. 5–7
    - title: Curtis T. McMullen, 4-Manifolds, Stanford lecture notes
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: §§5.5–5.6, printed pp. 94–99
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be a nonempty oriented knot in the standard oriented three-sphere. Its rational Lee homology is a two-dimensional vector space. For every finite regular diagram of $K$, the two homology classes obtained from the two orientations by the oriented-resolution parity-of-nesting rule form a basis, and the induced quantum filtration is independent of the diagram.

## Statement references

[[lem-lee-filtered-spectral-sequence-and-two-orientation-classes|Canonical Lee orientation classes and their basis theorem]]

[[thm-lee-filtered-homology-is-an-oriented-link-invariant|Diagram-independent filtered Lee homology]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §§2.4 and 3.1](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §§5.5–5.6](https://web.stanford.edu/~cm5/4Mnotes.pdf)

## Facts & Assumptions

**Given:** A knot diagram and its two possible orientations.

[F1] For a diagram with $c$ components, the $2^c$ canonical orientation cycles form a basis of Lee homology ([[lem-lee-filtered-spectral-sequence-and-two-orientation-classes]]).

[F2] Filtered Lee homology is independent of the diagram of the oriented link ([[thm-lee-filtered-homology-is-an-oriented-link-invariant]]).

[A1] $\mathrm{AC}_\omega$ is the countable-choice principle used by the finite diagram-move supplier ([[def-countable-choice]]).

## Proof

**Given:** $\mathrm{AC}_\omega$ and a finite regular diagram $D$ of $K$.

1.1 A knot has exactly one component, so it has exactly $2^1=2$ orientations. Applying [F1] with $c=1$ shows that the associated canonical classes are linearly independent and span $H(C_L(D;\mathbb Q))$. Thus its dimension is two. [F1, given, algebra]

2.1 If $D'$ is another diagram of the same oriented knot, [A1] supplies the axiom branch used in [F2], and [F2] gives an isomorphism of Lee homology preserving the induced filtration. Therefore the dimension and filtered vector-space type computed from $D$ agree with those computed from $D'$. The two canonical classes on each diagram form a basis by step 1.1; no identification of individual basis vectors across diagrams is needed for the claimed rank or filtration invariance. [A1, F2, step 1.1] ∎