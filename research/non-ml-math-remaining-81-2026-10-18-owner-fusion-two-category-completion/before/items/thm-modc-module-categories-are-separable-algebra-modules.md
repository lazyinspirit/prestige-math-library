---
id: thm-modc-module-categories-are-separable-algebra-modules
kind: theorem
title: Finite semisimple module categories are separable algebra modules
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-semisimple-module-category-over-fusion-category
  - def-separable-algebra-and-bimodule-in-fusion-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §§7.8–7.11
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Let $\mathcal C$ be a fusion category over an algebraically closed field, and let $\mathcal M$ be a finite semisimple right $\mathcal C$-module category. Construct a separable algebra object $A$ in $\mathcal C$ and a right $\mathcal C$-module equivalence $\mathcal M\simeq\operatorname{Mod}^{l}_{\mathcal C}(A)$, the category of left $A$-modules fixed in [[def-separable-algebra-and-bimodule-in-fusion-category]]. The construction must fix the right-action/internal-Hom convention, give the internal-end multiplication and its separability section, and prove full faithfulness and essential surjectivity. The associated Eilenberg–Watts statement must identify module functors with the correctly oriented bimodules and respect module-natural transformations.

## Proof obligation

No local proof is supplied. EGNO Theorem 7.10.1 proves an algebra-module comparison under an exactness and generator hypothesis, and Corollary 7.10.5 states the finite module-category consequence; Proposition 7.11.1 states the module-functor/bimodule equivalence but says only that its proof repeats the ring-theoretic argument. The local proof must derive the needed hypotheses for a finite semisimple module category, construct the algebra with the declared right-action convention, prove the comparison and bimodule equivalence, and establish that the resulting algebra is separable. These statements are authoring obligations, not open problems, and this item is escalated until those arguments are complete.
