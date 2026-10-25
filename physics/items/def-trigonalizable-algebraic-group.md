---
id: def-trigonalizable-algebraic-group
kind: definition
title: Trigonalizable algebraic groups
dependency_level: 5
deps:
  - def-affine-scheme
  - def-group-scheme-over-a-field
  - def-morphism-and-closed-subgroup-scheme
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - def-unipotent-algebraic-group
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Definition 16.1 and the paragraph following it, printed p. 324
---
## Definition

Let $k$ be a field. An affine algebraic group $G$ over $k$ (an affine group scheme of finite type over $k$, [[def-affine-scheme]], [[def-group-scheme-over-a-field]]) is **trigonalizable** if every simple rational representation of $G$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]) has dimension $1$ over $k$.

Equivalently, by the criterion proved as [[lem-trigonalizable-iff-invariant-flags]], every finite-dimensional rational representation of $G$ admits a basis in which $G$ acts through upper triangular matrices, i.e. the representation is isomorphic to one factoring through the upper triangular group scheme $T_n$ of some $\mathrm{GL}_n$.

Both unipotent groups ([[def-unipotent-algebraic-group]]) and diagonalizable groups are trigonalizable: for a unipotent group every simple representation is trivial of dimension one by definition, and for a diagonalizable group the character eigenspace decomposition exhibits every simple representation as one-dimensional. The formulation by simple representations is the one used in the induction proving Lie-Kolchin; the flag formulation is the one used to embed trigonalizable groups into $T_n$.
