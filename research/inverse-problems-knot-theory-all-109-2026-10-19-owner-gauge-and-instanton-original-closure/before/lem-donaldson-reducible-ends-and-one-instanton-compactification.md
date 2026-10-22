---
id: lem-donaldson-reducible-ends-and-one-instanton-compactification
kind: lemma
title: Reducible ends and compactification of the one-instanton moduli space
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - lem-asd-regularity-perturbation-and-orientability
  - lem-uhlenbeck-compactness-and-removable-singularities
  - lem-taubes-positive-definite-instanton-existence
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: §§II.1–II.4 and III.3–III.4, printed pp. 287–294 and 302–315; reducible slices, spectral flow, and Taubes end
---

## Statement

Let $X$ be a closed simply connected oriented smooth four-manifold with positive-definite intersection form, let $P\to X$ have structure group $SU(2)$ and $c_2(P)[X]=-1$, and choose a regular perturbation of $F_A^-=0$ with the determinant-line orientation from the regularity module. The compactification of the resulting five-dimensional one-instanton moduli space is an oriented compact five-manifold whose boundary consists of the Taubes small-instanton end, identified with $X$, and the links of the finitely many reducible ends. Each reducible link and its boundary orientation are determined by the local circle-stabilizer slice and its spectral-flow label. No other boundary strata occur.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, §§II.1–II.4 and III.3–III.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

**Given:** The sign-fixed moduli setup, regular perturbation and orientation, compactness/removability, and Taubes instanton existence.

[F1] The moduli set and deformation operator use $F_A^-=0$ and charge $c_2(P)[X]=-1$. [[def-asd-moduli-fredholm-index-and-lattice-setup]]

[F2] Regularity and determinant-line orientation are the required local input for an oriented five-dimensional regular moduli space. [[lem-asd-regularity-perturbation-and-orientability]]

[F3] Convergent subsequences, bubble points, and removable singularities are the compactness input. [[lem-uhlenbeck-compactness-and-removable-singularities]]

[F4] The irreducible small-instanton end exists under the positive-definite hypothesis. [[lem-taubes-positive-definite-instanton-existence]]

[L1] `lem-asd-reducible-connection-classification-and-spectral-flow` is the proposed A-page supplier for the reducible classification and signed link labels; it is not currently supplied.

[L2] `thm-taubes-small-instanton-gluing-and-compactified-end` is the proposed A-page supplier for the end parametrization and inverse gluing map; it is not currently supplied.

## Proof

**Given:** The moduli setup and the four preceding interfaces [F1]–[F4].

1.1 The prior modules specify the equation, oriented regular moduli, compactness input, and existence of the small-instanton end. [F1, F2, F3, F4]

1.2 They do not classify reducible strata or prove the compactified end and its boundary orientations; these require [L1] and [L2]. The claimed compact five-manifold and complete boundary description are therefore not concluded here. [L1, L2, step 1.1]

## Unresolved proof obligations

This module still needs the complete reducible-connection classification, the local equivariant slice at each circle stabilizer, the spectral-flow computation of each link orientation, the Taubes gluing map and its inverse, and a proof that compactness leaves no further ends. Donaldson §§II–III outline these constructions but depend on the analytic modules above. Those source passages have been inspected; no exact local proof is supplied here. Escalated.
