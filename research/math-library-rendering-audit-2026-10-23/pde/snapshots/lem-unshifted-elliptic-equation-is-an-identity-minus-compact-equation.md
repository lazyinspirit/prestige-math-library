---
id: lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation
kind: lemma
title: "On bounded domains, the unshifted equation is an identity-minus-compact equation"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-axiom-of-choice, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-shifted-elliptic-solution-operator, def-uniformly-elliptic-divergence-form-operator, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, lem-shifted-elliptic-solution-operator-is-compact-on-ltwo]
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
      locator: 'Section 4.9, proof of Theorem 4.24, equations (4.29)-(4.31), printed pp. 107-108 (read in full)'
    - title: 'Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)'
      url: 'https://www.math.toronto.edu/almut/Brezis.pdf'
      locator: 'Chapter 9, Section 9.8, reduction of the eigenproblem to the compact operator $T$, printed p. 311 (read in full)'
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, let $\mu\ge\beta$ and let $K_\mu$ be the shifted solution operator of [[def-shifted-elliptic-solution-operator]] for the form $a$ of [[def-uniformly-elliptic-divergence-form-operator]]. For $f\in L^2(\Omega)$ and $u\in H^1_0(\Omega)$ the following are equivalent:
1. $a(u,v)=(f,v)_{L^2}$ for every $v\in H^1_0(\Omega)$, i.e. $u$ is a weak Dirichlet solution in the sense of [[def-weak-dirichlet-solution-for-a-divergence-form-operator]];
2. $(I-\mu K_\mu)u=K_\mu f$ as elements of $L^2(\Omega)$, where $I$ is the identity of $L^2(\Omega)$.

Both sides of (2) lie in $H^1_0(\Omega)$. Thus for arbitrary open $\Omega$ the weak equation is equivalent to this identity-minus-bounded-operator equation. If $\Omega$ is bounded, also assume the Axiom of Choice; then $K_\mu$ on $L^2(\Omega)$, and hence $\mu K_\mu$, is compact by [[lem-shifted-elliptic-solution-operator-is-compact-on-ltwo]], so (2) is an identity-minus-compact Fredholm equation. The algebraic equivalence applies to the general divergence-form operator, including nonsymmetric lower-order terms.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$; a fixed $\mu\ge\beta$; the shifted solution operator $K_\mu$ of the general divergence-form operator; $f\in L^2(\Omega)$ and $u\in H^1_0(\Omega)$.

[F1] Definition of $K_\mu$: for $g\in L^2(\Omega)$, $K_\mu g$ is the unique class in $H^1_0(\Omega)$ with $a_\mu(K_\mu g,v)=(g,v)_{L^2}$ for all $v\in H^1_0(\Omega)$, where $a_\mu=a+\mu(\cdot,\cdot)_{L^2}$; $K_\mu$ is linear and maps $L^2(\Omega)$ into $H^1_0(\Omega)$ ([[def-shifted-elliptic-solution-operator]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F2] Weak Dirichlet solutions: $u$ is a weak solution of $a(u,v)=(f,v)_{L^2}$ for every $v\in H^1_0(\Omega)$ exactly when the identity holds for all test classes $v\in H^1_0(\Omega)$ with datum $f\in L^2(\Omega)$ ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F3] Compactness: if $\Omega$ is bounded and the Axiom of Choice holds, the $L^2$ realization of $K_\mu$ is compact, hence so is $\mu K_\mu$, and $I-\mu K_\mu$ is an identity-minus-compact operator on $L^2(\Omega)$ ([[lem-shifted-elliptic-solution-operator-is-compact-on-ltwo]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Equivalence. Condition (1) says $a(u,v)=(f,v)_{L^2}$ for all $v\in H^1_0(\Omega)$. Adding $\mu(u,v)_{L^2}$ to both sides, this is equivalent to $a_\mu(u,v)=(f+\mu u,v)_{L^2}$ for all $v\in H^1_0(\Omega)$, where $f+\mu u\in L^2(\Omega)$. By the defining uniqueness clause of [F1] for the datum $f+\mu u$, this holds exactly when $u=K_\mu(f+\mu u)$ in $H^1_0(\Omega)$. Rearranging the linear identity gives $u-\mu K_\mu u=K_\mu f$, that is $(I-\mu K_\mu)u=K_\mu f$ in $L^2(\Omega)$, and conversely the same rearrangement recovers the defining identity for $f+\mu u$ and hence condition (1). No symmetry of $a$ and no sign condition on the lower-order coefficients is used. [F1, F2, given, algebra]

1.2 Location of the two sides. Since $u\in H^1_0(\Omega)$ by hypothesis and $K_\mu$ maps $L^2(\Omega)$ into $H^1_0(\Omega)$, both $u$ and $\mu K_\mu u$, hence both sides of (2), lie in $H^1_0(\Omega)$ ($\mu K_\mu u\in H^1_0$ because $H^1_0$ is a linear subspace); the equality itself is an equality of $L^2$ classes. [F1, given, algebra]

2.1 Compact case. If $\Omega$ is bounded and the Axiom of Choice is assumed, [F3] makes the $L^2$ realization of $\mu K_\mu$ compact, so (2) is the equation $(I-C)u=K_\mu f$ with $C:=\mu K_\mu$ compact, an identity-minus-compact equation; for unbounded $\Omega$ the equivalence of step 1.1 remains valid as an identity-minus-bounded-operator equation and no compactness or Fredholm claim is made. [F3, step 1.1, step 1.2, given] ∎ 