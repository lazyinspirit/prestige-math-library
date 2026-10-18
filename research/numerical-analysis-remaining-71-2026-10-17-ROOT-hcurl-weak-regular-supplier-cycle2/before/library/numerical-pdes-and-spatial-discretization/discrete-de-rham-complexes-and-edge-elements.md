---
page: discrete-de-rham-complexes-and-edge-elements
title: Discrete de Rham complexes and edge-element foundations
status: draft
items:
  - def-na-hcurl-space
  - lem-na-contractible-lipschitz-polyhedron-boundary-connected
  - lem-na-lipschitz-scalar-h1-h2-extension
  - lem-na-graded-whitney-mesh-size-and-boundary-shifts
  - def-na-lowest-order-whitney-de-rham-spaces
  - def-na-zero-tangential-hcurl
  - lem-na-compact-support-hcurl-fourier-splitting
  - lem-na-weak-local-potentials-and-continuation
  - lem-na-hcurl-curlfree-potential-contractible
  - cex-na-canonical-edge-moments-not-bounded-on-hcurl
  - def-na-curl-curl-kernel-quotient-gauge
  - lem-na-nedelec-edge-unisolvence
  - lem-na-weak-hcurl-tangential-trace
  - lem-na-lipschitz-support-and-zero-boundary-closure
  - lem-na-whitney-moments-commute-with-grad-curl-div
  - thm-na-stable-mixed-curl-curl-kernel-quotient
  - lem-na-full-dirichlet-hcurl-regular-decomposition
  - thm-na-regular-decomposition-zero-tangential-hcurl
  - thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes
  - lem-na-relative-curl-kernel-is-zero-boundary-gradients
  - lem-na-whitney-averaged-pullback-moment-bounds
  - lem-na-whitney-cochain-correction-and-strong-convergence
  - thm-na-uniformly-bounded-commuting-cochain-projection
  - lem-na-discrete-gradient-lift-gap-estimate
  - thm-na-discrete-compactness-and-poincare-lowest-order-nedelec
examples: []
---

On an oriented matching tetrahedral mesh, the local edge field associated with an oriented edge $[i,j]$ is $\phi_{ij}=\lambda_i\nabla\lambda_j-\lambda_j\nabla\lambda_i$. The oriented edge circulation determines this field; oriented face fluxes determine the next Raviart–Thomas field, and cell integrals determine the top-degree data. Covariant and contravariant Piola maps preserve their corresponding moments. Stokes and Gauss–Green identify the gradient, curl, and divergence maps with the oriented incidence maps.

The following diagram records the relation between finite element fields and simplicial cochains. The vertical maps $J^k$ send each field to its vertex values, edge circulations, face fluxes, or cell integrals; after the initial constant inclusion, the lower arrows are coboundaries dual to oriented simplex boundaries.

```tikzcd
\mathbb R \arrow[r,hook] & W_h^0 \arrow[r,"\nabla"] \arrow[d,"J^0"'] & N_h^1 \arrow[r,"\operatorname{curl}"] \arrow[d,"J^1"'] & N_h^2 \arrow[r,"\operatorname{div}"] \arrow[d,"J^2"'] & N_h^3 \arrow[d,"J^3"'] \\
\mathbb R \arrow[r,hook] & C^0(\mathcal T;\mathbb R) \arrow[r,"\delta^0"] & C^1(\mathcal T;\mathbb R) \arrow[r,"\delta^1"] & C^2(\mathcal T;\mathbb R) \arrow[r,"\delta^2"] & C^3(\mathcal T;\mathbb R)
```

The local moment identities make each square commute; the diagram records this bookkeeping and is not used as a proof. The finite cochain complex has the simplicial cohomology of the mesh realization. It is exact in positive degrees on a nonempty contractible realization; for general topology its full-space harmonic components have dimensions given by the first and second Betti numbers. The curl-curl formulation fixes a representative orthogonal to the curl kernel and controls the quotient in the curl energy norm.

The analytic suppliers include scalar extension across bounded Lipschitz graph boundaries, a weak local-to-global potential argument, and a Fourier construction of a regular decomposition with both summands in zero-boundary Sobolev spaces. The full and relative commuting projections are distinct families: the full family acts on the unrestricted complex, while the relative family preserves the zero-boundary complex and supplies the degree-zero gradient identity used in compactness. Canonical edge moments are defined for polynomial fields and smooth inputs; they do not extend to bounded functionals on all of $H(\operatorname{curl})$. On a contractible polyhedron the relative curl kernel is exactly $\nabla H_0^1$, which yields discrete compactness and the curl Poincaré estimate after removing the discrete gradient gauge. For nontrivial topology, the relative harmonic component must also be removed from that estimate.
