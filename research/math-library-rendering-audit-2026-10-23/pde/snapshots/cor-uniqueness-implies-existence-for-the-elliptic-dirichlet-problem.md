---
id: cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem
kind: corollary
title: "Uniqueness implies existence for the elliptic Dirichlet problem"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 12
deps: [cor-elliptic-kernel-and-cokernel-are-finite-dimensional, def-axiom-of-choice, def-bounded-linear-operator, def-countable-choice, def-shifted-elliptic-solution-operator, lem-neumann-series-and-small-perturbations-of-bounded-inverses, lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation, thm-bounded-inverse-theorem, thm-fredholm-alternative-for-identity-minus-compact, thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems]
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
      locator: 'Section 4.9, Theorem 4.24(1), printed p. 107 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.2, Theorem 10.10, printed pp. 235-236 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice and Countable Choice. In the setting of [[thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems]] suppose both homogeneous problems are trivial: $a(u,v)=0$ for all $v\in H^1_0(\Omega)$ implies $u=0$, and $a^*(v,w)=0$ for all $w\in H^1_0(\Omega)$ implies $v=0$ (the two conditions are equivalent by the finite dimension and equality of dimensions in [[cor-elliptic-kernel-and-cokernel-are-finite-dimensional]]). Then for every $f\in L^2(\Omega)$ there is exactly one $u\in H^1_0(\Omega)$ with $a(u,v)=(f,v)_{L^2}$ for all $v\in H^1_0(\Omega)$. Moreover the solution map $f\mapsto u$ is a bounded linear operator from $L^2(\Omega)$ to $H^1_0(\Omega)$: explicitly $u=K_\mu(I-\mu K_\mu)^{-1}f$ for every admissible $\mu\ge\beta$, with $(I-\mu K_\mu)^{-1}$ bounded on $L^2(\Omega)$ ([[def-shifted-elliptic-solution-operator]], [[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]).

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a bounded open set $\Omega\subseteq\mathbb R^n$; the weak Dirichlet problem for form $a$ and adjoint $a^*$; a fixed $\mu\ge\beta$; the compact operator $\mu K_\mu$ on $L^2(\Omega)$; and the assumption that both homogeneous problems are trivial.

[F1] Fredholm alternative: exactly one of the alternatives of [[thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems]] holds; alternative (2) holds exactly when the homogeneous problem has a nonzero solution; alternative (1) gives existence and uniqueness for every $f\in L^2(\Omega)$.

[F2] The homogeneous space $N$ of [$F1$] equals $\ker(I-\mu K_\mu)$, and $u$ is a weak solution with datum $f$ exactly when $(I-\mu K_\mu)u=K_\mu f$ ([[lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation]], [[cor-elliptic-kernel-and-cokernel-are-finite-dimensional]], [[def-shifted-elliptic-solution-operator]]).

[F3] Abstract Fredholm alternative: for a compact $K$ on a Banach space, $I-K$ is injective if and only if it is surjective, and then it is boundedly invertible ([[thm-fredholm-alternative-for-identity-minus-compact]], [[thm-bounded-inverse-theorem]], [[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]).

[F4] Bounded linear operators compose to bounded linear operators, and $K_\mu:L^2(\Omega)\to H^1_0(\Omega)$ is bounded linear ([[def-bounded-linear-operator]], [[def-shifted-elliptic-solution-operator]]).

## Proof

**Proof technique:** direct.

1.1 Existence and uniqueness. If the homogeneous problem is trivial then $N=\{0\}=\ker(I-\mu K_\mu)$ by [F2], so alternative (2) of [F1] is excluded; by the dichotomy of [F1] alternative (1) holds. Hence for every $f\in L^2(\Omega)$ the weak problem has exactly one solution $u\in H^1_0(\Omega)$. The triviality of the adjoint homogeneous problem is not needed for this conclusion, and the two triviality hypotheses are equivalent by [[cor-elliptic-kernel-and-cokernel-are-finite-dimensional]]. [F1, F2, given]

2.1 Bounded solution map. Under the hypothesis $N=\{0\}$ the operator $A:=I-\mu K_\mu$ is injective on $L^2(\Omega)$, so [F3] makes it boundedly invertible there; since $u$ is a weak solution with datum $f$ exactly when $Au=K_\mu f$ by [F2], the unique solution is $u=A^{-1}K_\mu f$. The operator $K_\mu$ commutes with $A=I-\mu K_\mu$, hence also with $A^{-1}$, so $u=K_\mu A^{-1}f$. Both factors in this expression are bounded linear operators, with $K_\mu$ mapping into $H^1_0(\Omega)$ by [F4], so $f\mapsto u$ is a bounded linear operator from $L^2(\Omega)$ to $H^1_0(\Omega)$; the expression is independent of the admissible shift because $u$ is. [F2, F3, F4, step 1.1, given, algebra]

3.1 Conclusion. Steps 1.1 and 2.1 give existence, uniqueness and the bounded solution map for every $f\in L^2(\Omega)$, with the explicit representation $u=K_\mu(I-\mu K_\mu)^{-1}f$; no compactness is used beyond the Fredholm alternative inherited from $\mu K_\mu$, and the Axiom of Choice supplies the hypotheses of the Rellich compactness and abstract Fredholm suppliers. [F1, F3, step 1.1, step 2.1, given] ∎ 
