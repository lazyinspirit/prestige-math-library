---
id: def-closed-epsilon-pseudospectrum
kind: definition
title: "Closed epsilon-pseudospectrum in the spectral norm"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-singular-values-of-an-endomorphism
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Youcef Saad, Numerical Methods for Large Eigenvalue Problems, 2nd ed., §3.5"
      url: https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf
    - title: "Mark Embree, Matrix Theory course notes, §5.3"
      url: https://personal.math.vt.edu/embree/math5524/chapter5.pdf
---

## Definition

For a complex matrix $A\in\mathbb C^{n\times n}$ with $n\ge1$ and $\epsilon>0$, its **closed $\epsilon$-pseudospectrum** is

$$\Lambda_\epsilon(A):=\{z\in\mathbb C:\sigma_{\min}(zI-A)\le\epsilon\},$$

where $\sigma_{\min}$ is the smallest singular value from [[def-singular-values-of-an-endomorphism]]. This is the unstructured complex perturbation convention in the spectral norm [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]. In particular, real $A$ is regarded as a complex matrix and admissible perturbations may be complex. The non-strict inequality fixes the boundary: points with $\sigma_{\min}(zI-A)=\epsilon$ are included.
