---
id: ex-duplicate-rbf-sites-singular-gram-matrix
kind: example
title: "Duplicate sites make the kernel Gram matrix singular"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-rbf-kernels-sites-and-augmented-interpolation]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with scattered zeros, Math. Comp. 74 (2005), §1"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_functions_with_scattered_zeros_with_applications_to_radial_basis_function_surface_fitting"
---

## Example

Let $K(x,y)=\phi(|x-y|)$ be any radial kernel, and let a site list contain $x_1=x_2$.

## Facts & Assumptions

**Given:** A radial kernel and a finite site list with $x_1=x_2$.

[F1] A radial kernel has Gram entries $K_{ij}=\phi(|x_i-x_j|)$, and ordinary RBF interpolation is defined on distinct sites. ([[def-rbf-kernels-sites-and-augmented-interpolation]])

## Verification

1.1 For every row index $i$, the equal sites give $K_{i1}=\phi(|x_i-x_1|)=\phi(|x_i-x_2|)=K_{i2}$. Thus the first two columns, and by symmetry the first two rows, coincide. [F1, given, algebra]

2.1 The nonzero vector $e_1-e_2$ is therefore in the nullspace of the Gram matrix, so the matrix is singular. This example violates the distinct-site hypothesis in [F1] and is not a counterexample to the interpolation theorem. [step 1.1, F1, algebra] ∎