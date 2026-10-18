---
id: def-fermionic-fock-space-over-hilbert-space
kind: definition
title: Fermionic Fock Space over a Complex Hilbert Space
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 0
deps:
  - def-hilbert-space
  - def-hilbert-exterior-power-and-induced-operator
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.1 and 6.7"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1 and 5.7"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Definition

Let $H$ be a complex Hilbert space. For each $k\ge0$, let $\Lambda^kH$ be the Hilbert exterior power with the Gram-determinant inner product and wedge convention of [[def-hilbert-exterior-power-and-induced-operator]], with $\Lambda^0H=\mathbb C$. The **fermionic Fock space** over $H$ is the Hilbert completion of the algebraic direct sum $\bigoplus_{k\ge0}^{\mathrm{alg}}\Lambda^kH$, where distinct particle-number summands are orthogonal and the inner product on a finite sum is the sum of the inner products of its components. The **vacuum vector** $\Omega$ is $1\in\Lambda^0H$.

On finite sums of decomposable wedges define the creation rule $C(f)\xi=f\wedge\xi$ for $f\in H$. This rule is initially defined on a dense subspace. Its bounded extension and the CAR relations for $C(f)$ and its Hilbert-space adjoint are proved in [[lem-fock-creation-annihilation-satisfy-car]].
