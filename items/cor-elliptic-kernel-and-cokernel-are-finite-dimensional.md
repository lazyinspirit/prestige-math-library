---
id: cor-elliptic-kernel-and-cokernel-are-finite-dimensional
kind: corollary
title: "The elliptic kernel and cokernel are finite dimensional"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 11
deps: [def-axiom-of-choice, def-compact-linear-operator, def-countable-choice, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-shifted-elliptic-solution-operator, def-wkp-zero-as-a-sobolev-closure, lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem, lem-kernel-of-identity-minus-compact-is-finite-dimensional, lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation, thm-fredholm-alternative-for-identity-minus-compact, thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems, lem-range-of-identity-minus-compact-is-closed, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-orthogonal-decomposition-by-a-closed-subspace]
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
      locator: 'Section 4.9, Theorem 4.24(2), printed p. 107 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 5, Section 5.1, Theorem 5.1, printed pp. 101-104 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice and Countable Choice. In the setting of [[thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems]] the weak homogeneous space $N=\{u\in H^1_0(\Omega):a(u,v)=0\ \forall v\}$ and the weak adjoint space $N^*=\{v\in H^1_0(\Omega):a^*(v,w)=0\ \forall w\}$ are finite-dimensional over $\mathbb K$ with $\dim N=\dim N^*$. Explicitly $N=\ker(I-\mu K_\mu)$ and $N^*=\ker(I-\mu K^*_\mu)$ as subspaces of $L^2(\Omega)$ ([[lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation]], [[lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem]]), so this common dimension is the dimension of $E_1(T)=\ker(T-I)$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]), for each compact operator $T=\mu K_\mu$ and $T=\mu K^*_\mu$. When the common dimension is positive, $1$ is an eigenvalue and this dimension is its **geometric multiplicity**; when it is zero, $1$ is not an eigenvalue. No equality of algebraic multiplicities is asserted. The common geometric multiplicity is independent of the admissible shift $\mu\ge\beta$.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a bounded open set $\Omega\subseteq\mathbb R^n$; the divergence-form operator with form $a$ and adjoint $a^*$; a fixed $\mu\ge\beta$; the shifted solution operators $K_\mu,K^*_\mu$.

[F1] Identifications: $N=\{u\in H^1_0(\Omega):(I-\mu K_\mu)u=0\}$ and $N^*=\{v\in H^1_0(\Omega):(I-\mu K^*_\mu)v=0\}$; moreover $\ker(I-\mu K_\mu)\subseteq H^1_0(\Omega)$ and $\ker(I-\mu K^*_\mu)\subseteq H^1_0(\Omega)$, so the two sets are exactly the indicated kernels in $L^2(\Omega)$ ([[lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation]], [[lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem]], [[def-shifted-elliptic-solution-operator]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F2] Abstract Fredholm dimension: for a compact operator $\mu K_\mu$ on $L^2(\Omega)$ and $A=I-\mu K_\mu$, the kernel and the cokernel of $A$ are finite dimensional with equal dimensions; the kernel of the transpose $A^*$ is finite dimensional ([[thm-fredholm-alternative-for-identity-minus-compact]], [[lem-kernel-of-identity-minus-compact-is-finite-dimensional]], [[def-compact-linear-operator]], [[def-axiom-of-choice]]). The range of $A=I-\mu K_\mu$ is closed by [[lem-range-of-identity-minus-compact-is-closed]]; AC supplies its DC premise by [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]. By [[thm-orthogonal-decomposition-by-a-closed-subspace]], $L^2=\operatorname{ran}A\oplus(\operatorname{ran}A)^\perp$. The adjoint identity gives $(\operatorname{ran}A)^\perp=\ker(I-\mu K^*_\mu)$, and $v\mapsto v+\operatorname{ran}A$ restricts to a linear bijection from this orthogonal kernel onto the cokernel.

[F3] The weak spaces $N,N^*$ are the homogeneous and adjoint homogeneous solution spaces of the weak elliptic problem, and the abstract identities of [F1] hold for every admissible shift $\mu\ge\beta$ ([[thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems]]).

[F4] For a linear endomorphism $T$, its eigenspace for eigenvalue $1$ is $E_1(T)=\ker(T-I)$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]). Its dimension is the geometric multiplicity used here; algebraic multiplicity is not part of this conclusion.

## Proof

**Proof technique:** direct.

1.1 Identifications. By [F1], $N=\ker(I-\mu K_\mu)$ and $N^*=\ker(I-\mu K^*_\mu)$ as subspaces of $L^2(\Omega)$: an element of either kernel lies in $H^1_0(\Omega)$ because the range of the corresponding solution operator is contained in $H^1_0(\Omega)$. [F1, given]

2.1 Finite dimension and equality. Since $\mu K_\mu$ is compact on the Banach space $L^2(\Omega)$, [F2] gives $\dim\ker(I-\mu K_\mu)<\infty$ and $\dim\ker(I-\mu K_\mu)=\dim\operatorname{coker}(I-\mu K_\mu)$. Under the Riesz identification of $L^2(\Omega)$ with its dual, the annihilator of the range is $\ker(I-\mu K^*_\mu)$, so the cokernel dimension equals $\dim\ker(I-\mu K^*_\mu)$; by step 1.1 these are $\dim N$ and $\dim N^*$, both finite, with $\dim N=\dim N^*$. [F2, step 1.1, given]

3.1 Independence of the shift and geometric multiplicity. For a further admissible shift $\mu'\ge\beta$ the same argument with $\mu'$ gives $N=\ker(I-\mu'K_{\mu'})$ and $\dim N=\dim N^*$; the spaces $N,N^*$ themselves are defined by the weak equations alone and do not mention any shift, so the common dimension is independent of the choice of admissible $\mu$. By [F4], when positive, these dimensions are the geometric multiplicities of eigenvalue $1$ of $\mu K_\mu$ and $\mu K^*_{\mu}$, respectively, because $N$ and $N^*$ are exactly their eigenspaces. This identifies no algebraic multiplicity. [F1, F3, F4, step 2.1, given, algebra] ∎
