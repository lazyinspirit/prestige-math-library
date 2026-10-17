---
id: lem-one-step-modified-energy-defect
kind: lemma
title: The finite modified Hamiltonian has a bounded one-step defect
status: published
origin: pipeline
dependency_level: 5
deps:
  - thm-extreme-value-metric
  - cor-mean-value-theorem
  - thm-chain-rule-for-total-derivatives
  - lem-finite-modified-hamiltonian-exists
  - lem-truncated-modified-flow-matches-map
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - prop-a-hamiltonian-is-conserved-along-its-own-flow
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 3: Backward error analysis"
      url: "https://www.unige.ch/~hairer/poly_geoint/week3.pdf"
      locator: "PDF pp. 5–7"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 42–44"
---

## Statement

Fix $N\ge r$ and a compact comparison tube $K'\Subset U$. Let $H_h^{[N]}$ be the finite modified Hamiltonian from [[lem-finite-modified-hamiltonian-exists]]. Suppose $z$, $\Phi_h(z)$, the exact time-$h$ flow of $X_{H_h^{[N]}}$ from $z$, and the line segment joining those two endpoints all lie in $K'$. For sufficiently small $0<h\le1$, there is a constant $C_1$ independent of $z,h$ such that
$$|H_h^{[N]}(\Phi_h(z))-H_h^{[N]}(z)|\le C_1h^{N+1}.$$

## Facts & Assumptions

**Given:** The fixed finite modified Hamiltonian, an admitted numerical step, and the compact comparison tube and segment.

[A1] The method endpoint, modified-flow endpoint, and comparison segment lie in $K'\Subset U$.

[F1] On a compact initial set with method branches defined on a neighborhood and a compact tube containing the comparison flows and Taylor segments, the one-step map and time-$h$ modified flow differ by at most $C_Nh^{N+2}$. The needed neighborhood and tube will be constructed in step 1.1. [[lem-truncated-modified-flow-matches-map]]

[F2] A Hamiltonian is constant along every integral curve of its own Hamiltonian vector field, without a completeness assumption. [[prop-a-hamiltonian-is-conserved-along-its-own-flow]]

[F3] A smooth local Hamiltonian vector field has a local integral curve from each admitted initial state. [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]

[F4] Use the Euclidean norm and its induced operator norm. Each $H_j$ and $H$ is smooth, so each derivative norm $\|DH_j\|_{\mathrm{op}}$ and $\|DH\|_{\mathrm{op}}$ is continuous and bounded on compact $K'$ by the extreme-value theorem. For $0<h\le h_0\le1$, the finite sum $DH_h^{[N]}=DH+\sum_{j=r}^Nh^jDH_j$ is therefore bounded there by one constant $G_N$ independent of $h$. [[lem-finite-modified-hamiltonian-exists]], [[thm-extreme-value-metric]]

[F5] The scalar mean-value theorem applies to a function continuous on a closed interval and differentiable in its interior. [[cor-mean-value-theorem]]

[F6] The derivative of a composition is given by the total-derivative chain rule. [[thm-chain-rule-for-total-derivatives]]

## Proof

**Proof technique:** compare one step with its energy-preserving modified flow.

1.1 Since an instance has $z\in K'$, assume $K'\ne\varnothing$; otherwise the estimate is vacuous. Set $K=K'$. The local method construction in [[lem-finite-modified-hamiltonian-exists]] gives smooth step branches on a neighborhood of $K$ for uniformly small $|h|$: cover $K$ by finitely many smaller convex balls whose enlarged closed balls lie in $U$, and take the minimum of their positive step bounds. For midpoint, the construction identifies every admitted ball with the same local branch by its common Picard sequence. The enlarged balls control all method stages and spatial Taylor segments. For the modified flow, apply [F3] to the smooth augmented field $(w,s)\mapsto(X_{H_s^{[N]}}(w),0)$ on $U\times\mathbb R$. Its open flow domain contains $\{0\}\times K\times[-1,1]$; compactness gives a common interval $[-\delta,\delta]$ of existence, with $\delta>0$. The projected flow image of this compact time-state-parameter product is a compact subset of $U$. Together with the finitely many enlarged balls it gives a compact tube $K''\Subset U$ containing the trajectories and all Taylor segments; the latter are taken within individual convex balls, without assuming $K'$ convex. After decreasing the common step bound to at most $\min(\delta,1)$, [F1] applies with initial set $K$ and control tube $K''$, giving one $C_N$ independent of $z\in K'$ and $h$. The stipulated endpoint segment in [A1] remains in the original $K'$ for the scalar energy comparison. [A1, F1, F3, F4, given, choose]

1.2 By [F3], the modified Hamiltonian vector field has a local flow from $z$. By [F2], that flow preserves $H_h^{[N]}$, so $H_h^{[N]}(\varphi_h^{[N]}(z))=H_h^{[N]}(z)$. [F2, F3, given]

2.1 Parameterize the segment in [A1] by $\gamma(t)=H_h^{[N]}(\varphi_h^{[N]}(z)+t(\Phi_h(z)-\varphi_h^{[N]}(z)))$. By [F4] and [F6], $|\gamma'(t)|\le G_N\|\Phi_h(z)-\varphi_h^{[N]}(z)\|$; [F5] then bounds the endpoint difference by the same quantity. Thus $|H_h^{[N]}(\Phi_h(z))-H_h^{[N]}(\varphi_h^{[N]}(z))|\le G_N\|\Phi_h(z)-\varphi_h^{[N]}(z)\|\le G_NC_Nh^{N+2}$ by [F1]. For $h\le1$ this is at most $G_NC_Nh^{N+1}$. Substituting the equality from step 1.2 proves the statement with $C_1=G_NC_N$. [A1, F1, F4, F5, F6, step 1.1, step 1.2, algebra] ∎
