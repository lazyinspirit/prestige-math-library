---
id: thm-qsm-infinite-spin-kms-existence
kind: theorem
title: Finite-range interacting quantum spin KMS existence
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-qsm-infinite-algebraic-state, def-qsm-kms-state, def-qsm-quasilocal-spin-algebra, lem-qsm-consistent-local-states, lem-qsm-finite-gibbs-kms, lem-qsm-gibbs-strip-limit, lem-qsm-kms-strip-uniqueness, lem-qsm-quasilocal-completion, lem-qsm-finite-matrix-cstar-and-state-duality, lem-qsm-matrix-state-calculus, lem-qsm-spin-state-compactness, thm-qsm-finite-range-spin-dynamics, thm-weierstrass-convergence-holomorphic-functions]
dependency_roles: {def-qsm-infinite-algebraic-state: mathematical-premise, def-qsm-kms-state: mathematical-premise, def-qsm-quasilocal-spin-algebra: mathematical-premise, lem-qsm-consistent-local-states: mathematical-premise, lem-qsm-finite-gibbs-kms: mathematical-premise, lem-qsm-gibbs-strip-limit: mathematical-premise, lem-qsm-kms-strip-uniqueness: mathematical-premise, lem-qsm-quasilocal-completion: mathematical-premise, lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise, lem-qsm-matrix-state-calculus: mathematical-premise, lem-qsm-spin-state-compactness: mathematical-premise, thm-qsm-finite-range-spin-dynamics: mathematical-premise, thm-weierstrass-convergence-holomorphic-functions: mathematical-premise}
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, Corollary 3.4.9 and proof discussion, pp. 76–77; §4.2, pp. 101–102
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 2 §6, pp. 23–24
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
---

## Statement

Let $\Gamma=\mathbb Z^d$, $d\ge1$, have finite on-site spin dimension $q\ge1$ and quasi-local spin algebra $\mathcal A$. Let $\Phi$ be a uniformly bounded finite-range interaction with free-boundary finite-volume Hamiltonians, and let $\alpha_t$ be the strongly continuous thermodynamic dynamics of [[thm-qsm-finite-range-spin-dynamics]]. Fix $\beta>0$ and $\hbar>0$. Assume Countable Choice, the finite-matrix C$^*$-identity, and the finite-matrix state/density-norm interface exactly as stated in Facts [A1]–[A2].

For any increasing finite exhaustion $\Lambda_n\uparrow\Gamma$, extend each finite Gibbs density on $\mathcal A_{\Lambda_n}$ by normalized trace densities on the outside sites, as in [[lem-qsm-gibbs-strip-limit]]. Every pointwise convergent subsequence of these algebraic states has a limit $\omega$ that is a $\beta$-KMS state for $\alpha$ in physical time, with strip width $\beta\hbar$. At least one such subsequential limit exists under [A1]–[A2].

The conclusion is a conditional mathematical existence result for bounded finite-dimensional spin interactions. It does not assert uniqueness, clustering, phase classification, a global infinite-volume Gibbs density matrix, or dynamical relaxation to equilibrium.

## Facts & Assumptions

**Given:** $d\ge1$, finite $q\ge1$, $\Gamma=\mathbb Z^d$, $\beta>0$, $\hbar>0$, a uniformly bounded finite-range interaction $\Phi$, and the free-boundary thermodynamic dynamics.

[A1] Countable Choice and the finite-matrix C$^*$-identity $\|T^*T\|=\|T\|^2$ are the exact assumptions of [[thm-qsm-finite-range-spin-dynamics]]. The current [[lem-qsm-finite-matrix-cstar-and-state-duality]] carrier proves that identity for every nonzero finite local matrix algebra, but remains a draft pending independent review; the dynamics supplier still states the identity as a hypothesis. This theorem therefore records the exact conditional input and does not claim independent acceptance of either draft.

[A2] The finite-matrix state/density correspondence and norm-one trace-functional clauses in [[lem-qsm-finite-matrix-cstar-and-state-duality]] are assumed exactly as used by [[lem-qsm-consistent-local-states]] and [[lem-qsm-spin-state-compactness]]. They are present in a complete current draft argument, but this theorem carries them as explicit conditional inputs and makes no independent acceptance claim.

[F1] [[def-qsm-infinite-algebraic-state]]: an algebraic state is a bounded normalized positive functional on the quasi-local algebra; it is not assumed to be represented by a global trace-class density.

[F2] [[def-qsm-quasilocal-spin-algebra]] and [[lem-qsm-quasilocal-completion]]: the strictly local algebra is norm dense in $\mathcal A$; the completion proof uses the finite-matrix C$^*$-identity of [A1] through [[lem-qsm-finite-matrix-cstar-and-state-duality]].

[F3] [[thm-qsm-finite-range-spin-dynamics]]: under [A1], $\alpha_t$ is a strongly continuous group of isometric $*$-automorphisms and finite-volume dynamics converge in norm on local observables uniformly on compact real-time intervals.

[F4] [[lem-qsm-gibbs-strip-limit]]: under [A1]–[A2], the product-extended finite Gibbs states have pointwise convergent subsequences, and every such limit has bounded analytic strip functions with the required lower and upper boundaries for each local pair.

[F5] [[lem-qsm-kms-strip-uniqueness]]: bounded strip functions with boundary suprema at most $C$ have the same bound throughout, and their locally uniform limits are unique when their lower boundary values are fixed.

[F6] [[thm-weierstrass-convergence-holomorphic-functions]]: a locally uniform limit of holomorphic functions on an open set is holomorphic.

[F7] [[lem-qsm-finite-gibbs-kms]]: each finite Gibbs density has the KMS strip identity for its finite-volume Heisenberg group. Its current Step 1 record is ready against the current [[lem-qsm-matrix-state-calculus]] supplier; it is a finite-volume identity and supplies no infinite-volume result.

## Proof

**Proof technique:** extend the local-pair strip functions by norm approximation and the three-lines bound.

**Given:** [A1]–[A2], [F1]–[F7], the finite-range interaction, and a pointwise limit $\omega$ supplied by [F4].

1.1 The local algebra $\mathcal A_{\mathrm{loc}}$ is norm dense in $\mathcal A$ by [F2]. Fix arbitrary $A,B\in\mathcal A$. Choose sequences $A_j,B_j\in\mathcal A_{\mathrm{loc}}$ with $A_j\to A$ and $B_j\to B$ in norm. They are bounded sequences, so set $M_A:=\sup_j\|A_j\|<\infty$ and $M_B:=\sup_j\|B_j\|<\infty$. [F2, construct]

2.1 For each $j$, [F4] gives a bounded continuous strip function $F_j$ holomorphic in $S_b^\circ$, $b=\beta\hbar$, with lower and upper boundaries $\omega(A_j\alpha_t(B_j))$ and $\omega(\alpha_t(B_j)A_j)$; the finite-volume Gibbs boundary input used by [F4] is the exact identity in [F7]. For $j,k$, each boundary difference is bounded uniformly in real $t$ by $\eta_{jk}:=\|A_j-A_k\|M_B+M_A\|B_j-B_k\|$, because $\|\omega\|=1$ by the exact state interface [A2] and each $\alpha_t$ is isometric by [F3]. Applying the three-lines estimate of [F5] to $F_j-F_k$ gives $\sup_{z\in S_b}|F_j(z)-F_k(z)|\le\eta_{jk}$. Since $(A_j)$ and $(B_j)$ are norm-Cauchy, $\eta_{jk}\to0$ as $j,k\to\infty$. Thus $(F_j)$ is uniformly Cauchy on the whole closed strip. [A1, A2, F3, F4, F5, F7, step 1.1, algebra]

3.1 The uniform limit $F_{A,B}:=\lim_jF_j$ exists on $S_b$ because $\mathbb C$ is complete. It is bounded by $M_AM_B$ and continuous on $S_b$ as a uniform limit of bounded continuous functions. The convergence is locally uniform in the open strip, so [F6] makes $F_{A,B}$ holomorphic on $S_b^\circ$. [step 1.1, step 2.1, F6]

4.1 For fixed real $t$, the lower boundaries converge to $\omega(A\alpha_t(B))$: indeed, $|\omega(A_j\alpha_t(B_j))-\omega(A\alpha_t(B))|\le\|A_j-A\|\,\|B_j\|+\|A\|\,\|B_j-B\|$, using $\|\omega\|=1$ and isometry of $\alpha_t$. The right-hand side tends to zero. The same calculation with the order reversed shows the upper boundaries converge to $\omega(\alpha_t(B)A)$. Since $F_j\to F_{A,B}$ uniformly on $S_b$, its two edge values are therefore the required KMS boundary values. [A2, F3, step 1.1, step 3.1]

5.1 Steps 3.1–2.2 show that for every $A,B\in\mathcal A$ the bounded continuous function $F_{A,B}$ is holomorphic inside and has the two boundaries in [[def-qsm-kms-state]]. Thus $\omega$ is a $\beta$-KMS state for $\alpha$ in physical time. Existence of at least one such subsequential $\omega$ is supplied conditionally by [F4]. [F1, F4, step 3.1, step 4.1] ∎
## Remarks

The theorem uses finite Gibbs states only as an existence construction. It does not identify all KMS states with limits of a particular boundary condition, infer that all stationary states are KMS, or turn the mathematical criterion into an empirical claim about thermalization.
