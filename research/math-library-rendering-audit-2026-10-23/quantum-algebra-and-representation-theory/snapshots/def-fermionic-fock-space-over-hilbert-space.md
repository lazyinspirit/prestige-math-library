---
id: def-fermionic-fock-space-over-hilbert-space
kind: definition
title: Fermionic Fock Space over a Complex Hilbert Space
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 0
deps:
  - def-hilbert-space
  - def-hilbert-exterior-power-and-induced-operator
  - def-countable-choice
  - def-completion-of-a-normed-space
  - thm-metric-completion-exists
  - thm-metric-completion-carries-a-unique-banach-space-structure
  - thm-completion-of-an-inner-product-space-is-hilbert
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.1 and 6.7"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1 and 5.7"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Definition

Assume Countable Choice ([[def-countable-choice]]), and let $H$ be a complex Hilbert space. For each $k\ge0$, let $\Lambda^kH$ be the Hilbert exterior power with the Gram-determinant inner product and wedge convention of [[def-hilbert-exterior-power-and-induced-operator]], with $\Lambda^0H=\mathbb C$. The algebraic direct sum $X_0=\bigoplus_{k\ge0}^{\mathrm{alg}}\Lambda^kH$, where distinct particle-number summands are orthogonal and the inner product on a finite sum is the sum of the component inner products, is an inner-product space. Its norm completion exists under Countable Choice by [[thm-metric-completion-exists]] and has its compatible Banach-space and Hilbert-space structures by [[thm-metric-completion-carries-a-unique-banach-space-structure]] and [[thm-completion-of-an-inner-product-space-is-hilbert]]. The **fermionic Fock space** over $H$ is this Hilbert completion. The **vacuum vector** $\Omega$ is the image of $1\in\Lambda^0H$ in the completion.

On finite sums of decomposable wedges define the creation rule $C(f)\xi=f\wedge\xi$ for $f\in H$. This rule is initially defined on a dense subspace. Its bounded extension and the CAR relations for $C(f)$ and its Hilbert-space adjoint are proved in [[lem-fock-creation-annihilation-satisfy-car]].
