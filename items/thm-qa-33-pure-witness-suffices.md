---
id: thm-qa-33-pure-witness-suffices
kind: theorem
title: A pure witness suffices for a QMA completeness threshold
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-33-qma-promise-class
  - lem-qa-33-witness-acceptance-effect
  - def-qc-density-operator
  - def-qc-dirac-notation-conversion
  - def-trace-of-an-endomorphism
  - prop-trace-is-linear
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: None; the finite spectral decomposition is choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity"
      url: https://arxiv.org/pdf/0804.3401
      locator: §V.1, QMA definition, PDF pp. 18–19
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.1, PDF p. 116
---

## Statement

For a finite QMA verifier with witness acceptance effect $E_x$, if a witness density operator $\rho$ satisfies $\operatorname{Tr}(E_x\rho)\ge c$, then some pure-state density operator $|u\rangle\langle u|$ satisfies $\operatorname{Tr}(E_x|u\rangle\langle u|)\ge c$. Thus allowing mixed witnesses does not increase the completeness threshold.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional witness space, a density operator $\rho$, and its positive contraction $E_x$ from the verifier.

[F1] [[def-qc-density-operator]]: a density operator is nonnegative, self-adjoint, and has trace one.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every finite-dimensional normal endomorphism has an orthonormal eigenbasis.

[F3] [[lem-qa-33-witness-acceptance-effect]]: the acceptance probability of a witness density $\rho$ is $\operatorname{Tr}(E_x\rho)$ and $0\le E_x\le I$.

[F4] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle u|$ is the rank-one map $v\mapsto\langle v,u\rangle u$ for a unit vector $u$.

[F5] [[prop-trace-is-linear]]: the finite-dimensional trace is linear.

[F6] [[def-trace-of-an-endomorphism]]: trace is independent of the chosen ordered basis and is the sum of diagonal entries in that basis.

[F7] [[def-qa-33-qma-promise-class]]: on a YES instance the completeness threshold is witnessed by a density operator satisfying $\operatorname{Tr}(E_x\rho)\ge c$.

## Proof

1.1 By [F1]–[F2], choose an orthonormal eigenbasis $u_1,\ldots,u_d$ for $\rho$, with eigenvalues $\lambda_j\ge0$. Basis independence [F6] and its diagonal-sum definition give $\sum_j\lambda_j=\operatorname{Tr}(\rho)=1$. Thus $\rho=\sum_j\lambda_j|u_j\rangle\langle u_j|$, with zero eigenvalue terms allowed. [given, F1, F2, F4, F6, choose, algebra]

2.1 Linearity [F5] gives $\operatorname{Tr}(E_x\rho)=\sum_j\lambda_j\operatorname{Tr}(E_x|u_j\rangle\langle u_j|)$. By [F3], these terms are precisely the verifier's pure-state acceptance probabilities. By [F4], in an orthonormal basis beginning with $u_j$, the rank-one factor has only its first diagonal entry nonzero after multiplication by $E_x$; [F6] therefore gives $\operatorname{Tr}(E_x|u_j\rangle\langle u_j|)=\langle E_xu_j,u_j\rangle$. This is a convex average; if every positive-weight term were below $c$, its finite weighted average would be below $c$. Hence some $j$ with $\lambda_j>0$ has acceptance at least $c$, so [F7] gives a pure witness meeting the QMA completeness threshold. [F3, F4, F5, F6, F7, step 1.1, algebra] ∎
