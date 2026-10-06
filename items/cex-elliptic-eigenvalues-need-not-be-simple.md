---
id: cex-elliptic-eigenvalues-need-not-be-simple
kind: counterexample
title: "Elliptic eigenvalues need not be simple"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [def-axiom-of-choice, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-orthogonality-and-orthogonal-complement, def-sobolev-space-wkp-and-its-norm, def-symmetric-elliptic-weak-eigenpair, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, thm-courant-fischer-minimax-for-elliptic-eigenvalues, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, thm-ftc-second-part, thm-sine-and-cosine-addition-formulas, ex-dirichlet-laplacian-eigenpairs-on-an-interval, thm-tonelli-and-fubini-for-completed-product-measures, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 2, rectangle Dirichlet spectrum and repeated eigenvalues, printed p. 16 (read in full)'
    - title: 'Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)'
      url: 'https://www.math.toronto.edu/almut/Brezis.pdf'
      locator: 'Chapter 9, Section 9.8, eigenvalues counted with multiplicity in Theorem 9.31, printed p. 311 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.1, eigenvalues listed according to multiplicity after Theorem 10.5, printed p. 227 (read in full)'
verification:
  precheck: pass
---

## Statement refuted

Every eigenvalue of the Dirichlet Laplacian on a bounded domain has one-dimensional eigenspace, so the eigenvalues listed with multiplicity have no repetitions.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; the square $\Omega=(0,\pi)^2$, the functions $u(x,y)=\sin x\,\sin 2y$ and $v(x,y)=\sin 2x\,\sin y$, and the Dirichlet Laplacian form $a(w,\varphi)=\int_\Omega\nabla w\cdot\overline{\nabla\varphi}$ ([[def-uniformly-elliptic-divergence-form-operator]] with $a^{ij}=\delta^{ij}$).

[F1] The interval construction [[ex-dirichlet-laplacian-eigenpairs-on-an-interval]], F3 and Verification 1.1, supplies the sine derivatives, endpoint zeros and rescaled cutoff with derivative bound used below. Sobolev conventions: $H^1_0(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in the $H^1$ norm, and $-\Delta u=5u$, $-\Delta v=5v$ classically because each factor is an eigenfunction of $-d^2/dx^2$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]], [[thm-sine-and-cosine-addition-formulas]]).

[F2] Weak eigenpairs: $(\lambda,w)$ is a weak Dirichlet eigenpair exactly when $w\in H^1_0(\Omega)\setminus\{0\}$ and $a(w,\varphi)=\lambda(w,\varphi)_{L^2}$ for all $\varphi\in H^1_0(\Omega)$ ([[def-symmetric-elliptic-weak-eigenpair]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] Orthogonality and independence: nonzero $L^2$-orthogonal classes are linearly independent, and $L^2$-orthogonality is defined by the vanishing of $(w_1,w_2)_{L^2}$ ([[def-orthogonality-and-orthogonal-complement]]).

[F4] Multiplicity: the discrete spectral theorem lists the eigenvalues with finite multiplicity, one occurrence per dimension of the eigenspace, and Courant--Fischer uses that list ([[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], [[thm-courant-fischer-minimax-for-elliptic-eigenvalues]], [[def-axiom-of-choice]], [[def-countable-choice]]).

[F5] The Euclidean product measure identification and completed-product Fubini theorem ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]], [[thm-tonelli-and-fubini-for-completed-product-measures]]) apply to the bounded smooth integrands on this finite-measure square and justify factorization of the integrals below. Integration: $\int_0^\pi\sin(mx)\sin(nx)\,dx=0$ for distinct positive integers $m\ne n$ and $\int_0^\pi\sin^2(nx)\,dx=\pi/2$, by the product-to-sum formula and the second fundamental theorem of calculus ([[thm-sine-and-cosine-addition-formulas]], [[thm-ftc-second-part]]).

## Counterexample

1.1 Membership in $H^1_0$. For $\varepsilon>0$ small let $\chi_\varepsilon\in C_c^\infty(0,\pi)$ satisfy $0\le\chi_\varepsilon\le1$, $\chi_\varepsilon=1$ on $[2\varepsilon,\pi-2\varepsilon]$, $\chi_\varepsilon=0$ outside $[\varepsilon,\pi-\varepsilon]$ and $|\chi_\varepsilon'|\le C/\varepsilon$; put $w_\varepsilon(x,y):=\chi_\varepsilon(x)\chi_\varepsilon(y)w(x,y)$ for $w=u$ or $w=v$. Then $w_\varepsilon\in C_c^\infty(\Omega)$. Let $A_\varepsilon$ be the union of the boundary strips where either cutoff differs from $1$; its area is $O(\varepsilon)$. The sine factors give $|w|\le C_1\varepsilon$ on $A_\varepsilon$, while $|\nabla w|\le C_2$ on the whole square. Thus $\|w_\varepsilon-w\|_{L^2}^2=O(\varepsilon^3)$. For the gradient, $\nabla(w_\varepsilon-w)=(\chi_\varepsilon(x)\chi_\varepsilon(y)-1)\nabla w+w\nabla(\chi_\varepsilon(x)\chi_\varepsilon(y))$; the first term has squared $L^2$ norm $O(\varepsilon)$, and on the support of the cutoff derivatives $|w|\le C_1\varepsilon$, so the second term is bounded pointwise and supported on area $O(\varepsilon)$, also giving squared $L^2$ norm $O(\varepsilon)$. Hence $w_\varepsilon\to w$ in $H^1(\Omega)$, and $u,v\in H^1_0(\Omega)$ by the closure definition [F1]. [F1, given, algebra]

1.2 Weak eigenidentity. For every $\varphi\in C_c^\infty(\Omega)$, integration by parts on the square has no boundary term and $-\Delta u=5u$, $-\Delta v=5v$ by [F1], so $$a(w,\varphi)=\int_\Omega\nabla w\cdot\overline{\nabla\varphi}=\int_\Omega(-\Delta w)\overline\varphi=5\int_\Omega w\overline\varphi .$$ Given arbitrary $\varphi\in H^1_0(\Omega)$, choose $\varphi_k\in C_c^\infty(\Omega)$ with $\varphi_k\to\varphi$ in $H^1$; both pairings are continuous in the $H^1$ norm, so passing to the limit extends the identity to all $\varphi\in H^1_0(\Omega)$. By [F2], $u$ and $v$ are weak Dirichlet eigenfunctions with the common eigenvalue $5=1^2+2^2=2^2+1^2$. [F1, F2, given, algebra]

2.1 Orthogonality and dimension. The inner product factors: $(u,v)_{L^2}=\bigl(\int_0^\pi\sin x\sin 2x\,dx\bigr)\bigl(\int_0^\pi\sin 2y\sin y\,dy\bigr)=0$ by [F5] (both one-dimensional integrals vanish), while the same factorization gives $\|u\|_{L^2}^2=\|v\|_{L^2}^2=(\pi/2)^2>0$, so both are nonzero classes. Hence $u$ and $v$ are $L^2$-orthogonal nonzero classes, so they are linearly independent by [F3], and the eigenspace of the eigenvalue $5$ has dimension at least two. [F3, F5, step 1.2, given, algebra]

3.1 Conclusion. The eigenspace of dimension at least two established in step 2.1 contains the linearly independent eigenfunctions $u,v$, so the eigenvalue $5$ occurs with multiplicity at least two in the list of [F4]; the refuted statement, that all eigenvalues of the Dirichlet Laplacian on a bounded domain are simple (no repetitions in the list with multiplicity), therefore fails on the square. [F4, step 2.1, given] ∎ 
