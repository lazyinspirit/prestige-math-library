---
id: def-car-algebra-over-hilbert-space
kind: definition
title: CAR C*-Algebra over a Complex Hilbert Space
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 7
deps:
  - def-finite-dimensional-car-algebra
  - thm-finite-dimensional-car-algebra-is-matrix-algebra
  - lem-car-finite-subspace-inclusions-are-isometric
  - def-c-star-algebra
  - def-hilbert-space
  - def-countable-choice
  - def-completion-of-a-normed-space
  - thm-metric-completion-exists
  - thm-metric-completion-carries-a-unique-banach-space-structure
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
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.4–6.7"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1, 4.2 and 5.7"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Definition

Assume Countable Choice ([[def-countable-choice]]) for this norm-completion construction, and let $H$ be a complex Hilbert space. Order its finite-dimensional complex subspaces by inclusion. This is a directed system because the span $F+G$ of any two finite-dimensional subspaces is finite-dimensional. To each such $F$, assign the finite-dimensional CAR C*-algebra of [[thm-finite-dimensional-car-algebra-is-matrix-algebra]], with the generator-preserving maps of [[lem-car-finite-subspace-inclusions-are-isometric]]. Identify each stage with its image under these injective maps and let $\mathsf{CAR}_{\mathrm{loc}}(H)$ be their algebraic union.

The common finite-stage norm is well defined on this union because every inclusion is isometric. Under Countable Choice, [[thm-metric-completion-exists]] supplies a metric completion and [[thm-metric-completion-carries-a-unique-banach-space-structure]] equips it with the compatible Banach-space structure; this is the norm completion of [[def-completion-of-a-normed-space]]. Define the **CAR C\*-algebra over $H$**, $\mathsf{CAR}(H)$, to be this norm completion of $\mathsf{CAR}_{\mathrm{loc}}(H)$. Addition, multiplication, scalar multiplication, and involution are the compatible finite-stage operations; submultiplicativity and isometry of the involution make them extend continuously to the completion, and the C*-identity passes to limits. The identity is nonzero because the zero-dimensional stage is $\mathbb C$ and every inclusion preserves its unit. For $f\in H$, write $c(f)$ for the image of the generator in the stage $\operatorname{span}\{f\}$; the universal inductive-limit property and its norm are proved in [[thm-general-car-has-universal-inductive-limit-norm]].

## Remarks

For finite-dimensional $F,G\subseteq H$, put $E=F\cap G$. The square illustrates compatibility of the finite-stage inclusions, and the last two arrows show passage to the algebraic union and its norm completion.

```tikzcd
\mathsf{CAR}(E) \arrow[r, "\iota_{E,F}"] \arrow[d, "\iota_{E,G}"'] & \mathsf{CAR}(F) \arrow[d, "\iota_{F,F+G}"] \\
\mathsf{CAR}(G) \arrow[r, "\iota_{G,F+G}"'] & \mathsf{CAR}(F+G) \arrow[d, "j_{F+G}"] \\
& \mathsf{CAR}_{\mathrm{loc}}(H) \arrow[d, "k"] \\
& \mathsf{CAR}(H)
```

Here $\mathsf{CAR}(V)$ denotes the finite-dimensional C*-completion at a finite subspace $V$. Each $\iota_{U,V}$ is the isometric unital $*$-homomorphism sending $c_U(f)$ to $c_V(f)$, $j_{F+G}$ is its stage's isometric inclusion into the union, and $k$ is the isometric completion map with dense image. Both paths around the square send $c_E(f)$ to $c_{F+G}(f)$ for $f\in E$, so they agree on the generators and hence on the finite-stage algebra. The diagram illustrates the construction; its definition and the cited proofs do not depend on the picture.
