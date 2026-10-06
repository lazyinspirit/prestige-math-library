---
id: thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems
kind: theorem
title: "The Fredholm alternative for weak elliptic Dirichlet problems"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [def-axiom-of-choice, def-compact-linear-operator, def-countable-choice, def-formal-adjoint-and-adjoint-weak-dirichlet-problem, def-l-p-space-as-a-quotient-by-null-functions, def-shifted-elliptic-solution-operator, def-uniformly-elliptic-divergence-form-operator, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem, lem-elliptic-fredholm-range-condition-translates-to-adjoint-kernel-orthogonality, lem-kernel-of-identity-minus-compact-is-finite-dimensional, lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation, thm-fredholm-alternative-for-identity-minus-compact, lem-range-of-identity-minus-compact-is-closed, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-orthogonal-decomposition-by-a-closed-subspace]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.9, Theorem 4.24 (Fredholm alternative for $L$), printed pp. 107-108 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 5, Section 5.1, Theorem 5.1 and the no-zero-eigenvalue hypothesis, printed pp. 101-104 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.1, Theorem 10.5 and the spectral discussion, printed pp. 227-228 (read in full)'
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be bounded open, $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $L,a$ be as in [[def-uniformly-elliptic-divergence-form-operator]] with ellipticity constant $\theta$ and coefficient bounds $M_a,M_b,M_c$. Let $a^*$ be the adjoint form of [[def-formal-adjoint-and-adjoint-weak-dirichlet-problem]]. Consider the weak Dirichlet problem $a(u,v)=(f,v)_{L^2}$ for all $v\in H^1_0(\Omega)$, with datum $f\in L^2(\Omega)$ ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]). Then exactly one of the following alternatives holds.
(1) The homogeneous problem $a(u,v)=0$ for all $v\in H^1_0(\Omega)$ has only the solution $u=0$. Then for every $f\in L^2(\Omega)$ the problem has exactly one weak solution $u\in H^1_0(\Omega)$.
(2) The homogeneous problem has a nonzero solution. Then both homogeneous solution spaces
$$N:=\{u\in H^1_0(\Omega):a(u,v)=0\ \forall v\},\qquad N^*:=\{v\in H^1_0(\Omega):a^*(v,w)=0\ \forall w\}$$
are finite-dimensional and nontrivial with $\dim N=\dim N^*$; for $f\in L^2(\Omega)$ the problem has a solution if and only if $(f,v)_{L^2}=0$ for every $v\in N^*$; and whenever a solution exists the solution set is an affine translate of $N$, so uniqueness fails.
The data class is $L^2(\Omega)$; the weaker class $H^{-1}(\Omega)$ is deliberately not treated here.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a bounded open set $\Omega\subseteq\mathbb R^n$; the divergence-form operator $L$ and form $a$ with constants $\theta,M_a,M_b,M_c$; the adjoint form $a^*$; a fixed $\mu\ge\beta$; the shifted solution operator $K_\mu$ and its adjoint $K^*_\mu$; and $f\in L^2(\Omega)$.

[F1] Operator reduction: for $u\in H^1_0(\Omega)$ the weak equation $a(u,v)=(f,v)_{L^2}$ for all $v\in H^1_0(\Omega)$ is equivalent to $(I-\mu K_\mu)u=K_\mu f$ in $L^2(\Omega)$, and both sides of that equation lie in $H^1_0(\Omega)$ ([[lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation]]).

[F2] Compactness and the abstract alternative: $A:=I-\mu K_\mu$ is an identity-minus-compact operator on the Banach space $L^2(\Omega)$, the homogeneous spaces satisfy $N=\ker A$ and, under the Riesz identification, $N^*=\ker A^*$, and $K_\mu f\in\operatorname{ran}A$ if and only if $(f,v)_{L^2}=0$ for every $v\in N^*$ ([[lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem]], [[lem-elliptic-fredholm-range-condition-translates-to-adjoint-kernel-orthogonality]], [[thm-fredholm-alternative-for-identity-minus-compact]], [[lem-kernel-of-identity-minus-compact-is-finite-dimensional]], [[def-compact-linear-operator]], [[def-axiom-of-choice]]).

[F3] Abstract Fredholm alternatives: for a compact $K$ on a Banach space and $A=I-K$, either $A$ is injective, in which case it is bijective with bounded inverse, or $\ker A$ and the cokernel are finite dimensional and nontrivial with equal dimensions ([[thm-fredholm-alternative-for-identity-minus-compact]]). The range of $A=I-\mu K_\mu$ is closed by [[lem-range-of-identity-minus-compact-is-closed]]; AC supplies its DC premise by [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]. By [[thm-orthogonal-decomposition-by-a-closed-subspace]], $L^2=\operatorname{ran}A\oplus(\operatorname{ran}A)^\perp$. The adjoint identity gives $(\operatorname{ran}A)^\perp=\ker(I-\mu K^*_\mu)$, and $v\mapsto v+\operatorname{ran}A$ restricts to a linear bijection from this orthogonal kernel onto the cokernel.

[F4] Data conventions: weak solutions are $H^1_0$ classes, the datum $f\in L^2(\Omega)$ acts through the conjugate-linear pairing $v\mapsto(f,v)_{L^2}$, and the adjoint form is $a^*(v,w)=\overline{a(w,v)}$ ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]], [[def-formal-adjoint-and-adjoint-weak-dirichlet-problem]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-shifted-elliptic-solution-operator]], [[def-uniformly-elliptic-divergence-form-operator]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Identification of the spaces. By [F1] with $f=0$, a class $u\in H^1_0(\Omega)$ solves the homogeneous problem $a(u,v)=0$ for all $v$ if and only if $(I-\mu K_\mu)u=0$; since $\operatorname{ran}K_\mu\subseteq H^1_0(\Omega)$, this identifies $N$ with $\ker A$, where $A=I-\mu K_\mu$ is bounded on $L^2(\Omega)$. By [F2] the adjoint homogeneous space $N^*$ is, under the Riesz identification of $L^2(\Omega)$ with its dual, exactly the kernel of the transpose $A^*$, and for $f\in L^2(\Omega)$ the solvability of the weak problem is equivalent to $K_\mu f\in\operatorname{ran}A$, hence to $(f,v)_{L^2}=0$ for every $v\in N^*$. [F1, F2, F4, given]

2.1 The two alternatives. Since $\mu K_\mu$ is compact, [F3] gives exactly the following dichotomy for $A=I-\mu K_\mu$: either $A$ is injective, hence bijective with bounded inverse, or $\ker A\ne\{0\}$ and both $\ker A$ and the cokernel are finite dimensional with equal dimensions. In the first case $\ker A=N=\{0\}$ by step 1.1. [F2, F3, step 1.1, given]

3.1 Case (1). Assume $N=\{0\}$. Then $A$ is injective, so by step 2.1 it is bijective and boundedly invertible; for every $f\in L^2(\Omega)$ the equation $Au=K_\mu f$ has the unique solution $u=A^{-1}K_\mu f\in L^2(\Omega)$; the equation gives $u=K_\mu f+\mu K_\mu u\in H^1_0(\Omega)$, and then [F1] shows that it solves the weak problem, and by the equivalence [F1] any weak solution gives a solution of $Au=K_\mu f$, so the weak solution is unique. This proves alternative (1). [F1, step 2.1, given]

3.2 Case (2). Assume $N\ne\{0\}$. Then $\ker A=N$ is nontrivial and finite dimensional, and by step 2.1 its dimension equals that of the cokernel, which under the Riesz identification is $\dim\ker A^*=\dim N^*$; so $N$ and $N^*$ are finite-dimensional and nontrivial with $\dim N=\dim N^*$. By step 1.1 the weak problem is solvable exactly when $(f,v)_{L^2}=0$ for every $v\in N^*$. If $u_0$ is one solution, then for any $u$ the class $u-u_0$ satisfies the homogeneous problem, i.e. lies in $N$, and conversely $u_0+n$ with $n\in N$ is a solution; hence the solution set is the affine translate $u_0+N$, which is not a singleton because $N\ne\{0\}$, so uniqueness fails. This proves alternative (2). [F1, F2, step 1.1, step 2.1, given, algebra]

4.1 Exhaustiveness. Steps 3.1 and 3.2 cover the two mutually exclusive possibilities of step 2.1, so exactly one of the alternatives holds; the datum class is $L^2(\Omega)$ throughout, no $H^{-1}(\Omega)$ data are used, and the Axiom of Choice is inherited only through the compactness of $K_\mu$ and the abstract Fredholm alternative. [F2, F3, step 3.1, step 3.2, given] ∎ 