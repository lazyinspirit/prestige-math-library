---
id: def-symmetric-elliptic-weak-eigenpair
kind: definition
title: "Symmetric elliptic weak eigenpairs"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, def-countable-choice, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-l-p-space-as-a-quotient-by-null-functions, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.3, Corollary 4.8 and the weak Dirichlet eigenfunction definition, printed p. 94 (read in full)'
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.10, the self-adjoint eigenproblem, printed p. 108 (read in full)'
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 5, Laplace eigenfunctions, printed pp. 33-41 (read in full)'
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], a **weak eigenpair** of the Dirichlet problem for $L$ is a pair $(\lambda,u)$ with $\lambda\in\mathbb R$, $u\in H^1_0(\Omega)\setminus\{0\}$ and
$$a(u,v)=\lambda(u,v)_{L^2}\qquad\text{for every }v\in H^1_0(\Omega);$$
$\lambda$ is a **weak eigenvalue** and $u$ a **weak eigenfunction**. The eigenspace $E_\lambda:=\{u\in H^1_0(\Omega):a(u,v)=\lambda(u,v)_{L^2}\ \forall v\}$ is a closed linear subspace. Weak eigenpairs are exactly operator eigenpairs: $(\lambda,u)$ is a weak eigenpair if and only if $u\in D(L)\setminus\{0\}$ and $Lu=\lambda u$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]). Eigenfunctions are $L^2$ equivalence classes; no canonical representative or canonical vector in a multiple eigenspace is selected. The **multiplicity** of $\lambda$ is $\dim E_\lambda$, with no finiteness assertion for general open $\Omega$.

**Well-definedness, recorded with the definition.** $E_\lambda$ is a linear subspace because $a$ and the $L^2$ pairing are linear in the first argument; it is closed in $H^1_0(\Omega)$ because both $u\mapsto a(u,v)$ and $u\mapsto(u,v)_{L^2}$ are continuous on $H^1_0(\Omega)$ for each fixed $v$: boundedness of $a$ and the estimate $|(u,v)_{L^2}|\le\|u\|_{L^2}\|v\|_{L^2}\le\|u\|_{H^1_0}\|v\|_{H^1_0}$ show that weak limits of vectors in $E_\lambda$ remain in $E_\lambda$. The equivalence with operator eigenpairs is the definition of $D(L)$ and $Lu$: the weak identity for $(\lambda,u)$ says exactly that the datum $f=\lambda u$ represents $a(u,\cdot)$ on $H^1_0(\Omega)$, which, together with $u\ne0$, is the pair of conditions $u\in D(L)\setminus\{0\}$ and $Lu=\lambda u$. The eigenvalue $\lambda$ is required to be real, as is forced for the symmetric form once $u\ne0$: taking $v=u$ gives $\lambda\|u\|_{L^2}^2=a(u,u)=\overline{a(u,u)}$. All equalities are equalities of $L^2$ and $H^1_0$ classes ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-uniformly-elliptic-divergence-form-operator]], [[def-countable-choice]]); no regularity of eigenfunctions and no boundary values beyond membership in $H^1_0$ are asserted.
