---
id: rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis
kind: remark
title: "A repeated eigenvalue has no canonical eigenfunction basis"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 11
deps: [def-axiom-of-choice, def-countable-choice, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-real-and-complex-inner-product-space, def-symmetric-elliptic-weak-eigenpair, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, eigenvalues repeated according to multiplicity, printed p. 100 (read in full)'
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 9, eigenfunction expansions and basis dependence, printed pp. 51-56 (read in full)'
verification:
  precheck: n/a
---

## Remark

Assume the Axiom of Choice and Countable Choice. For a symmetric elliptic Dirichlet operator on a nonempty bounded open set $\Omega$, fix a weak eigenvalue $\lambda$ with eigenspace $E_\lambda$ of dimension $m\ge2$ ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-symmetric-elliptic-weak-eigenpair]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]). The subspace $E_\lambda$ and the orthogonal projection $P_\lambda$ onto it are intrinsic to $L$ (and to the shifted solution operator), but no particular orthonormal basis of $E_\lambda$ is: for every unitary $U$ of the $m$-dimensional Hilbert space $E_\lambda$ the family $\{Ue_j\}$ is another orthonormal eigenbasis, and every nonzero $u\in E_\lambda$ is an eigenfunction. Consequently downstream statements must refer to $E_\lambda$, to its dimension (the multiplicity), or to $U$-invariant quantities, and never to "the" eigenfunctions of a repeated eigenvalue. This concerns only the non-canonical choice of basis, not the existence of a Hilbert basis asserted by the discrete spectral theorem.

Among the invariant objects are the eigenspace $E_\lambda$, the orthogonal projection $P_\lambda$ onto it, and the multiplicity $\dim E_\lambda$, which is finite by [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]; the eigenfunctions themselves are $L^2$ classes, and no canonical representative of a class is selected either ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-real-and-complex-inner-product-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-countable-choice]], [[def-axiom-of-choice]]). The remark records a convention for downstream statements; it proves nothing beyond linear algebra inside the finite-dimensional space $E_\lambda$.
