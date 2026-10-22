---
id: thm-qsmx-thermal-mutual-information-bound
kind: theorem
title: Boundary energy bounds thermal mutual information
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-qsmx-information-conventions
  - def-qsm-relative-entropy-domain
  - def-qc-partial-trace
  - lem-it-partial-traces-of-a-state-are-states
  - lem-qsm-matrix-state-calculus
  - thm-qsm-finite-entropy-composition
  - thm-nrqm-composites-finite-partial-trace-and-schmidt
  - thm-qsm-finite-gibbs-variational
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qsmx-information-conventions: mathematical-premise
  def-qsm-relative-entropy-domain: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  lem-it-partial-traces-of-a-state-are-states: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-qsm-finite-entropy-composition: mathematical-premise
  thm-nrqm-composites-finite-partial-trace-and-schmidt: mathematical-premise
  thm-qsm-finite-gibbs-variational: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael M. Wolf, Frank Verstraete, Matthew B. Hastings, and J. Ignacio Cirac, Area laws in quantum systems: mutual information and correlations, arXiv:0704.3906v2, §Mutual information and correlations"
      url: https://arxiv.org/pdf/0704.3906v2
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, finite-dimensional entropy and Gibbs free-energy identity
      url: https://arxiv.org/pdf/1311.2717v2
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, §§5.2.1–5.2.3, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $\mathcal H_A,\mathcal H_B$ be nonzero finite-dimensional complex inner-product spaces. Let $H_A=H_A^*$ act on $\mathcal H_A$, let $H_B=H_B^*$ act on $\mathcal H_B$, and let $H_{\partial}=H_{\partial}^*$ act on $\mathcal H_A\otimes\mathcal H_B$. Set

$$H:=H_A\otimes I_B+I_A\otimes H_B+H_{\partial}.$$

For $\beta>0$, define $Z_\beta:=\operatorname{Tr}(e^{-\beta H})$ and the finite Gibbs density $\rho_\beta:=e^{-\beta H}/Z_\beta$. Then

$$I(A:B)_{\rho_\beta}\le 2\beta\|H_{\partial}\|_{\mathrm{op}},$$

where $I(A:B)$ uses dimensionless entropy in nats and $\|K\|_{\mathrm{op}}:=\sup_{\|v\|=1}\|Kv\|$ is the operator norm. If a specified family of lattice partitions additionally has a declared boundary-size count $|\partial A|$ (the number of crossing interaction terms) and satisfies $\|H_{\partial}\|_{\mathrm{op}}\le C|\partial A|$ for a specified $C\ge0$, then $I(A:B)_{\rho_\beta}\le 2\beta C|\partial A|$ for that family; no lattice geometry or boundary-scaling hypothesis is otherwise assumed. When $H$ is measured in joules, $\beta$ has units J$^{-1}$ and $C$ has units J, so the bound is dimensionless.

## Statement references

[[def-qsmx-information-conventions]]

[[thm-qsm-finite-gibbs-variational]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The spaces and Hermitian matrices in the Statement, $\beta>0$, natural logarithms, and a fixed $k_B>0$ with units J/K when physical units are assigned. Put $T=(k_B\beta)^{-1}$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. This is inherited through the Gibbs variational supplier in [F1] and its [F2] relative-entropy-domain dependency [[def-qsm-relative-entropy-domain]]; the finite matrix calculation in this item makes no infinite-dimensional selection.

[F1] [[thm-qsm-finite-gibbs-variational]]: for a finite Hermitian Hamiltonian, its Gibbs density minimizes $\operatorname{Tr}(H\omega)-T S_{\mathrm{phys}}(\omega)$ over all density matrices, including rank-deficient competitors, with $S_{\mathrm{phys}}=k_BS$ and $T=(k_B\beta)^{-1}$. Its relative-entropy-domain dependency, recorded as [F2] in that supplier, carries Choice through the declared supplier chain; its own [A1] records energy and units.

[F2] [[lem-it-partial-traces-of-a-state-are-states]]: both marginals of a finite bipartite density operator are density operators.

[F3] [[thm-nrqm-composites-finite-partial-trace-and-schmidt]]: for every finite bipartite endomorphism $R$ and local endomorphism $A$, $\operatorname{Tr}((\operatorname{Tr}_B R)A)=\operatorname{Tr}(R(A\otimes I_B))$, with the corresponding identity for tracing the first factor.

[F4] [[def-qsmx-information-conventions]]: $S(\rho)=-\operatorname{Tr}(\rho\log\rho)$ and $I(A:B)_\rho=S(\rho_A)+S(\rho_B)-S(\rho_{AB})$.

[F5] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have orthonormal eigenbases with real eigenvalues; positive matrices have nonnegative spectral weights, and the finite trace is cyclic.

[F6] [[thm-qsm-finite-entropy-composition]]: for finite-dimensional density matrices, the physical entropy of a tensor product is the sum of the physical entropies of its factors, including rank-deficient factors. Its declared supplier chain carries the same Choice hypothesis in [A1].

## Proof

1.1 By [F5], $H$ has finitely many real eigenvalues, so $e^{-\beta H}$ is positive definite and $Z_\beta>0$. Thus $\rho_\beta$ is a finite Gibbs density to which [F1] applies. Its marginals $\rho_A:=\operatorname{Tr}_B\rho_\beta$ and $\rho_B:=\operatorname{Tr}_A\rho_\beta$ are density operators by [F2]. [given, F1, F2, F5, algebra]

2.1 Set $\tau:=\rho_A\otimes\rho_B$. Tensor products of orthonormal eigenbases show that $\tau$ is positive semidefinite with eigenvalues $p_iq_j$, whose sum is $(\sum_i p_i)(\sum_jq_j)=1$; hence $\tau$ is a density operator. By [F6], $S_{\mathrm{phys}}(\tau)=S_{\mathrm{phys}}(\rho_A)+S_{\mathrm{phys}}(\rho_B)$. Since $k_B>0$ and $S_{\mathrm{phys}}=k_BS$, division by $k_B$ gives $S(\tau)=S(\rho_A)+S(\rho_B)$. Therefore [F4] gives $S(\tau)-S(\rho_\beta)=I(A:B)_{\rho_\beta}$. [given, F4, F5, F6, step 1.1, algebra]

3.1 Define $F_\beta(\omega):=\operatorname{Tr}(H\omega)-\beta^{-1}S(\omega)$ for finite density matrices. Since $T S_{\mathrm{phys}}=T k_BS=\beta^{-1}S$, [F1] applies to this functional and yields $F_\beta(\rho_\beta)\le F_\beta(\tau)$. Rearranging and using step 2.1 gives $\beta^{-1}I(A:B)_{\rho_\beta}\le\operatorname{Tr}(H(\tau-\rho_\beta))$. [A1, given, F1, step 2.1, algebra]

4.1 The coordinate formula in [F3] gives $\operatorname{Tr}_B(\rho_A\otimes\rho_B)=\rho_A$ and $\operatorname{Tr}_A(\rho_A\otimes\rho_B)=\rho_B$, since each factor has trace one. The defining trace-pairing identities in [F3], with cyclicity from [F5], then show that the expectations of $H_A\otimes I_B$ in $\tau$ and $\rho_\beta$ agree, and likewise for $I_A\otimes H_B$. Thus both local terms cancel in the trace on the right of step 3.1, leaving $\operatorname{Tr}(H(\tau-\rho_\beta))=\operatorname{Tr}(H_{\partial}(\tau-\rho_\beta))$. [step 1.1, step 2.1, step 3.1, F3, F5, algebra]

5.1 Diagonalize $H_{\partial}=\sum_j\lambda_jP_j$ by [F5]. For any density matrix $\omega$, the numbers $w_j:=\operatorname{Tr}(P_j\omega)$ are nonnegative (each is a sum of nonnegative diagonal expectations of $\omega$ on an orthonormal basis of $\operatorname{ran}P_j$) and sum to one. Thus $|\operatorname{Tr}(H_{\partial}\omega)|=|\sum_j\lambda_jw_j|\le\sum_j|\lambda_j|w_j\le\max_j|\lambda_j|=\|H_{\partial}\|_{\mathrm{op}}$. Applying this absolute bound to $\tau$ and $\rho_\beta$ gives $\operatorname{Tr}(H_{\partial}(\tau-\rho_\beta))\le2\|H_{\partial}\|_{\mathrm{op}}$. Combine this with steps 3.1 and 4.1 and multiply by $\beta>0$ to obtain the claimed inequality. Substituting the additional family bound $\|H_{\partial}\|_{\mathrm{op}}\le C|\partial A|$ yields its stated conditional area scaling. [given, F5, step 3.1, step 4.1, algebra] ∎
