---
id: def-countable-mode-car-algebra
kind: definition
title: Countably Infinite-Mode CAR C*-Algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 6
deps:
  - lem-finite-mode-car-canonical-inclusions-are-isometric
  - def-finite-mode-car-algebra
  - thm-finite-mode-car-algebra-is-full-matrix-algebra
  - def-c-star-algebra
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §6.4"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1 and 4.2"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Definition

Let $\mathbb N=\{1,2,\ldots\}$ be the countable mode set. For each $n$ take the universal finite-mode C*-algebra $\mathsf{CAR}_n$ whose dense algebraic presentation is [[def-finite-mode-car-algebra]]. Identify each stage with its image in the next under the isometric inclusion of [[lem-finite-mode-car-canonical-inclusions-are-isometric]]. The inclusions are compatible, injective, and preserve the C*-norm. Their union $\mathsf{CAR}_{\mathrm{loc}}=\bigcup_{n\ge0}\mathsf{CAR}_n$ is therefore a normed $*$-algebra with norm $\|x\|=\|x\|_{\mathsf{CAR}_n}$ whenever $x\in\mathsf{CAR}_n$; isometry makes this independent of the stage. Define the **countably infinite-mode CAR C*-algebra** $\mathsf{CAR}_{\mathbb N}$ to be the norm completion of $\mathsf{CAR}_{\mathrm{loc}}$ in the sense of [[def-c-star-algebra]]. Its canonical generator $a_j$ is the image of the $j$th finite-mode generator in any stage $n\ge j$. The C*-axioms pass to the completion because each finite stage satisfies them and multiplication and involution are continuous. The universal property of this inductive-limit construction is proved in [[thm-countable-mode-car-has-universal-inductive-limit-norm]].
