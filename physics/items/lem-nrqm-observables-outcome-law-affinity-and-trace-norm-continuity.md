---
id: lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity
aliases: [nrqm-observables-outcome-law-affinity-and-trace-norm-continuity]
kind: lemma
domain: mathematics
title: "Affinity and trace-norm continuity of the scalar spectral law"
status: published
origin: pipeline
dependency_level: 5
deps: [def-countable-choice, def-hilbert-space, def-projection-valued-measure, def-trace-class-operator, def-trace-of-a-trace-class-operator, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-state-geometry-density-set-convex-and-complete, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-state-geometry-density-set-convex-and-complete: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Sections 3.1 and 6.3, printed pages 88-95 and 139-145 (traces, trace norm and generated probabilities from a projection-valued measure)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3, printed pages 121-126 (the trace rule for mixtures of states)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]). Let $A$ be a self-adjoint operator on $H$ with spectral projection-valued measure $E_A$ ([[def-projection-valued-measure]]). For a self-adjoint trace-class operator $T$ on $H$ ([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]]) and a Borel set $B\subseteq\mathbb R$ put
$$\Phi_T(B):=\operatorname{tr}\bigl(TE_A(B)\bigr)\in\mathbb C .$$
Then:

(a) $|\Phi_T(B)|\le\|T\|_1$ for every Borel set $B$; the map $T\mapsto\Phi_T(B)$ is real-linear on the self-adjoint trace-class operators; and for every density operator $\rho$ one has $0\le\Phi_\rho(B)\le1$, so that $\mu^{A}_\rho:=\Phi_\rho$ is a probability measure on the Borel sets with $\mu^{A}_\rho(\mathbb R)=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (b)).

(b) If $\rho=\sum_nw_n\rho_n$ is a statistical mixture of density operators $\rho_n$ with weights $w_n\ge0$, $\sum_nw_n=1$, the trace-norm convergent sum of [[lem-nrqm-state-geometry-density-set-convex-and-complete]], then for every Borel set $B$
$$\mu^{A}_{\rho}(B)=\sum_nw_n\,\mu^{A}_{\rho_n}(B),$$
the series converging absolutely.

(c) For density operators $\rho,\sigma$ one has
$$\sup\{\,|\mu^{A}_{\rho}(B)-\mu^{A}_{\sigma}(B)|:\ B\subseteq\mathbb R\ \text{Borel}\,\}\le\|\rho-\sigma\|_1,$$
and if density operators $\rho_k$ converge to $\rho$ in trace norm, then $\mu^{A}_{\rho_k}(B)\to\mu^{A}_{\rho}(B)$ uniformly over all Borel sets $B$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice ([[def-countable-choice]]); a nonzero complex Hilbert space $H$; a self-adjoint operator $A$ with spectral PVM $E_A$; self-adjoint trace-class operators $T$ and density operators $\rho,\rho_n,\sigma$ on $H$; Borel sets $B\subseteq\mathbb R$.

[F1] **Projections and the trace ideal.** Every $E_A(B)$ is an orthogonal projection, hence $\|E_A(B)\|\le1$; for trace-class $T$ and bounded $S$ the product $TS$ is trace class with $\|TS\|_1\le\|T\|_1\|S\|$ ([[def-projection-valued-measure]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]] clause 2).

[F2] **Trace linearity and bound.** The trace is linear on the trace-class operators and $|\operatorname{tr}S|\le\|S\|_1$ for every trace-class $S$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]] clauses 1 and 4).

[F3] **Scalar law.** For a density operator $\rho$ with spectral expansion $\rho=\sum_nw_nT_{u_n,u_n}$, $w_n\ge0$, $\sum_nw_n=1$, $(u_n)$ orthonormal, and every PVM $E$, the assignment $B\mapsto\operatorname{tr}(\rho E(B))$ is a probability measure and $\operatorname{tr}(\rho E(B))=\sum_nw_n\|E(B)u_n\|^2$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a) and (b)).

[F4] **Convex combinations of states.** If $\rho_n$ are density operators and $w_n\ge0$, $\sum_nw_n=1$ over a finite or countable index set, then $\rho:=\sum_nw_n\rho_n$ converges in trace norm to a density operator ([[lem-nrqm-state-geometry-density-set-convex-and-complete]]).

## Proof

1.1 [Contraction and trace bound] By [F1] the operator $TE_A(B)$ is trace class with $\|TE_A(B)\|_1\le\|T\|_1\|E_A(B)\|\le\|T\|_1$, since $E_A(B)$ is an orthogonal projection of norm at most one; [F2] gives $|\Phi_T(B)|=|\operatorname{tr}(TE_A(B))|\le\|TE_A(B)\|_1\le\|T\|_1$. [given, F1, F2, algebra]

1.2 [Real-linearity and positivity on states] For self-adjoint trace-class $S,T$ and real $a,b$ the operator $aS+bT$ is self-adjoint and trace class, and [F2] gives $\Phi_{aS+bT}(B)=\operatorname{tr}((aS+bT)E_A(B))=a\operatorname{tr}(SE_A(B))+b\operatorname{tr}(TE_A(B))=a\Phi_S(B)+b\Phi_T(B)$; this proves real-linearity. If $\rho$ is a density operator with expansion $\rho=\sum_nw_nT_{u_n,u_n}$, then [F3] gives $\Phi_\rho(B)=\sum_nw_n\|E_A(B)u_n\|^2\ge0$ and $\Phi_\rho(B)\le\sum_nw_n\|u_n\|^2=1$; together with [F3] this makes $\mu^{A}_\rho=\Phi_\rho$ a probability measure. [given, F1, F2, F3, algebra]

2.1 [Affinity under mixtures] Let $\rho_n$ be density operators and $w_n\ge0$, $\sum_nw_n=1$, with trace-norm convergent sum $\rho=\sum_nw_n\rho_n$, a density operator by [F4]. Writing $S_N:=\sum_{n\le N}w_n\rho_n$, [F1] gives $\|S_NE_A(B)-\rho E_A(B)\|_1\le\|S_N-\rho\|_1\|E_A(B)\|\le\|S_N-\rho\|_1\to0$; by [F2] and continuity of the scalar limit, $\operatorname{tr}(\rho E_A(B))=\lim_N\operatorname{tr}(S_NE_A(B))=\lim_N\sum_{n\le N}w_n\operatorname{tr}(\rho_nE_A(B))=\sum_nw_n\mu^{A}_{\rho_n}(B)$, the series converging absolutely because the finite partial sums of the nonnegative terms are bounded by the limit $\mu^{A}_\rho(B)\le1$. [given, step 1.2, F1, F2, F4, algebra]

2.2 [Uniform trace-norm continuity] For Borel $B$, $\rho-\sigma$ is self-adjoint and trace class, so step 1.1 gives $|\mu^{A}_{\rho}(B)-\mu^{A}_{\sigma}(B)|=|\Phi_{\rho-\sigma}(B)|\le\|\rho-\sigma\|_1$; taking the supremum over Borel sets yields the displayed bound, and the convergence assertion follows by applying it to $\rho_k-\rho$. [given, step 1.1, algebra]

3.1 [Conclusion] Step 1.2 proves the bound, real-linearity, positivity and probability-measure clauses of (a); step 2.1 proves the mixture identity (b); step 2.2 proves the uniform bound and continuity (c). [step 1.1, step 1.2, step 2.1, step 2.2] ∎
