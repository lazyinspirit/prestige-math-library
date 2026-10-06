---
id: def-ltwo-operator-associated-with-a-symmetric-elliptic-form
kind: definition
title: "The $L^2$ operator associated with a symmetric elliptic form"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [def-bounded-coercive-and-symmetric-sesquilinear-forms, def-complex-conjugate-real-imaginary-part-and-modulus, def-countable-choice, def-formal-adjoint-and-adjoint-weak-dirichlet-problem, def-l-p-space-as-a-quotient-by-null-functions, def-shifted-elliptic-solution-operator, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, lem-elliptic-form-is-well-defined-and-bounded, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.8, the domain $D=\operatorname{ran}(K)$ and the operator $L$ on $L^2$, printed p. 106 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.3, Corollary 4.8 and its proof, printed pp. 94-96 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.1, the operator $\bar L$ and its domain, printed pp. 227-228 (read in full)'
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. **Symmetric case.** Let $\Omega\subseteq\mathbb R^n$ be open and let $a$ be the divergence-form sesquilinear form of [[def-uniformly-elliptic-divergence-form-operator]] with $b^i\equiv0$, coefficients satisfying $a^{ij}=\overline{a^{ji}}$ a.e. and real $c$, all measurable and essentially bounded, and with uniform ellipticity constant $\theta$. Thus $a(u,v)=\int_\Omega(a^{ij}D_ju\overline{D_iv}+cu\overline v)\,dx$ is a bounded symmetric form, $a(u,v)=\overline{a(v,u)}$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-formal-adjoint-and-adjoint-weak-dirichlet-problem]]). Define
$$D(L):=\Big\{u\in H^1_0(\Omega):\ \exists f\in L^2(\Omega)\text{ with }a(u,v)=(f,v)_{L^2}\ \forall v\in H^1_0(\Omega)\Big\},\qquad Lu:=f .$$
This is well defined: if $f,g$ both satisfy the defining identity then $(f-g,v)_{L^2}=0$ for every $v\in H^1_0(\Omega)$, and $H^1_0(\Omega)$ is dense in $L^2(\Omega)$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]), so $f=g$ in $L^2(\Omega)$. The space $D(L)$ is a linear subspace of $H^1_0(\Omega)$ containing the range of every shifted solution operator ([[def-shifted-elliptic-solution-operator]]), and $L:D(L)\to L^2(\Omega)$ is linear. With only bounded measurable coefficient hypotheses, $D(L)$ may be a proper subspace of the form domain $H^1_0(\Omega)$; those hypotheses alone do not assert $C_c^\infty(\Omega)\subseteq D(L)$. Membership $u\in D(L)$ with $Lu=f$ is exactly the weak statement of $Lu=f$ with zero boundary values in $L^2$ data ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]).

**Well-definedness and symmetry, recorded with the definition.** Boundedness of $a$ on $H^1(\Omega)$ is [[lem-elliptic-form-is-well-defined-and-bounded]] with $b=0$, and symmetry follows by conjugating the defining integrand: with $a^{ij}=\overline{a^{ji}}$ and $c$ real, $\overline{a(v,u)}=\int_\Omega\bigl(\overline{a^{ji}}D_ju\overline{D_iv}+\overline c\,\overline v u\bigr)dx=a(u,v)$ after re-indexing. Hence the pair $a,\langle\cdot,\cdot\rangle_{L^2}$ is the symmetric sesquilinear pair whose weak identity defines $D(L)$. The representing datum is unique by the density argument above, so $Lu$ is a well-defined class; linearity of $L$ follows from linearity of $a$ and of the $L^2$ pairing. The range inclusion $\operatorname{ran}K_\mu\subseteq D(L)$ holds because $K_\mu g$ satisfies $a(K_\mu g,v)=a_\mu(K_\mu g,v)-\mu(K_\mu g,v)_{L^2}=(g-\mu K_\mu g,v)_{L^2}$ for all $v\in H^1_0(\Omega)$, with datum $g-\mu K_\mu g\in L^2(\Omega)$ ([[def-shifted-elliptic-solution-operator]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-countable-choice]]). No claim of self-adjointness, closedness, density of $D(L)$, or identification with a classical differential expression is made here; those belong to the following items.
