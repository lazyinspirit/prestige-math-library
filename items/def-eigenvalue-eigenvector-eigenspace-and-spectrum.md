---
id: def-eigenvalue-eigenvector-eigenspace-and-spectrum
kind: definition
title: 'Eigenvalues, eigenvectors, eigenspaces $E_\lambda(T)=\ker(T-\lambda I)$, and the spectrum $\sigma_F(T)$ of an endomorphism'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-map, def-kernel-and-image-of-a-linear-map, def-vector-space-of-linear-maps]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §§12.1–12.4'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ and let $T:V\to V$ be linear. A scalar $\lambda\in F$ is an **eigenvalue** of $T$ when there is a nonzero vector $v\in V$ such that

$$T(v)=\lambda v.$$

Such a vector is an **eigenvector belonging to $\lambda$**. The **eigenspace** belonging to $\lambda$ is

$$E_\lambda(T):=\ker(T-\lambda I_V)=\{v\in V:T(v)=\lambda v\}.$$

Thus $E_\lambda(T)$ is a linear subspace and always contains $0_V$, while $\lambda$ is an eigenvalue exactly when $E_\lambda(T)\ne\{0_V\}$. The **spectrum of $T$ over $F$** is

$$\sigma_F(T):=\{\lambda\in F:\lambda\text{ is an eigenvalue of }T\}.$$

In particular, the unique endomorphism of the zero space has empty spectrum.
