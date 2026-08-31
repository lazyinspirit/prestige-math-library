---
id: def-condition-number-of-a-simple-eigenvalue
kind: definition
title: "The normwise condition number of a simple eigenvalue"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [prop-simple-eigenvalues-admit-left-right-normalization,
       def-inner-product-norm]
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Computations - Perturbation theory"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-22.html"
---

## Definition

Let $\lambda$ be a simple eigenvalue of $A$. The **normwise first-order
condition number** of $\lambda$ is

$$\kappa(\lambda;A):=\sup_{\|H\|_2=1} |D\lambda(A)[H]|,$$

where, for any compatible nonzero right and left eigenvectors $x,y$, we set

$$D\lambda(A)[H]:=\frac{y^\ast Hx}{y^\ast x}.$$

The denominator is nonzero by
[[prop-simple-eigenvalues-admit-left-right-normalization]]. Any other compatible
pair differs by nonzero rescalings because the two eigenspaces are
one-dimensional, and those factors cancel from the quotient, so this definition
is independent of the chosen pair. The later eigenvalue-derivative theorem
shows that this functional is the actual derivative of every local simple
eigenvalue branch.
