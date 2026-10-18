---
id: lem-modc-module-functor-categories-are-finite-semisimple
kind: lemma
title: Module-functor categories are finite semisimple
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - thm-modc-module-categories-are-separable-algebra-modules
  - def-separable-algebra-and-bimodule-in-fusion-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Proposition 7.11.1 and Proposition 7.11.6
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

For finite semisimple right $\mathcal C$-module categories $\mathcal M,\mathcal N$ over a fusion category, the category $\operatorname{Fun}_{\mathcal C}(\mathcal M,\mathcal N)$ of module functors and module-natural transformations is finite semisimple. In addition, evaluation at the tensor unit identifies the regular module endomorphism category $\operatorname{Fun}_{\mathcal C}(\mathcal C,\mathcal C)$ with $\mathcal C$ and sends the identity module functor to $\mathbf1_{\mathcal C}$; hence the unit object of the monoidal $2$-category is simple. Here “finite semisimple” means a $k$-linear abelian category with finitely many simple isomorphism classes, finite-dimensional Hom spaces, and every object a finite direct sum of simples.

## Proof obligation

No local proof is supplied. Use the established module-category/bimodule equivalence with its verified orientation to identify this functor category with a category of bimodules. Then prove semisimplicity and finiteness for bimodules over separable algebra objects by explicitly splitting the relevant module constraints (or supply a complete equivalent argument); the source only asserts finite abelianness in Proposition 7.11.1 and obtains finiteness in Proposition 7.11.6 by a compressed projective-generator argument. The proof must also establish the regular-module identification, including its direction for the right-action convention, so the simple-unit claim follows from simplicity of $\mathbf1_{\mathcal C}$. These are established results whose local proofs remain authoring obligations, not open problems.
