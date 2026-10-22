---
id: thm-qsmx-double-lattice-projectors
kind: theorem
title: Gauge averaging and flatness commute
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsmx-finite-group-double
  - def-qsmx-finite-group-lattice-operators
dependency_roles:
  def-qsmx-finite-group-double: mathematical-premise
  def-qsmx-finite-group-lattice-operators: mathematical-premise
justified_by: []
physical_scope: Exact finite-dimensional group-valued lattice projector model on a closed connected cellulation; no perturbation-stability or thermodynamic-limit claim.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: "§4, equations (11)–(14), PDF pp. 11–12; vertex gauge averaging, face flatness, commuting projectors, and frustration-free Hamiltonian."
    - title: Alexander Cowtan and Shahn Majid, Quantum Double Aspects of Surface Code Models
      url: https://arxiv.org/pdf/2107.04411
      locator: "§3, PDF pp. 7–9; oriented finite-group lattice actions, orthogonal projectors, their commutation, and the vacuum subspace."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $G$ be a finite group and let $\Sigma$ be a finite oriented cellulation of a closed connected surface, with vertex gauge permutations $U_v(x)$, vertex averages $A_v$, face flatness projectors $B_f$, and Hamiltonian $H_\Sigma$ defined using the group-element edge basis and oriented boundary holonomies. Here an orthogonal projection means a linear map $P$ with $P=P^*=P^2$; a self-adjoint operator $T$ is positive when $\langle\psi,T\psi\rangle\ge0$ for every $\psi$; and the finite sum is **frustration-free** when its summands have a common nonzero kernel vector. Its ground energy means its least eigenvalue. Then all $A_v$ and $B_f$ are commuting orthogonal projections. The Hamiltonian $H_\Sigma$ is positive and has a nonzero common zero vector for all terms $I-A_v$ and $I-B_f$; hence the finite model is frustration-free with ground energy zero.

## Statement references

[[def-qsmx-finite-group-double]]

[[def-qsmx-finite-group-lattice-operators]]

[A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” §4](https://arxiv.org/pdf/quant-ph/9707021)

[Alexander Cowtan and Shahn Majid, “Quantum Double Aspects of Surface Code Models,” §3](https://arxiv.org/pdf/2107.04411)

## Facts & Assumptions

**Given:** A finite group $G$ and a finite oriented cellulation of a closed connected surface with the edge basis, gauge permutations, face holonomies, projectors, and Hamiltonian specified above.

[F1] [[def-qsmx-finite-group-double]]: $G$ is finite and the local edge factor is the Hilbert space $\mathbb C[G]$ with orthonormal group basis.

[F2] [[def-qsmx-finite-group-lattice-operators]]: $U_v(x)$ sends each edge label $g_a$ to $k_{s(a)}g_a k_{t(a)}^{-1}$; $A_v$ averages these permutations; $B_f$ is diagonal with eigenvalue $1$ exactly when the oriented face holonomy is $e$.

## Proof

1.1 For a fixed vertex $v$, applying $U_v(y)$ and then $U_v(x)$ sends each edge label to $(xy)g_a$ at an outgoing incidence, to $g_a(xy)^{-1}$ at an incoming incidence, and to $(xy)g_a(xy)^{-1}$ on a loop based at $v$. All other labels remain fixed. Thus $U_v(x)U_v(y)=U_v(xy)$; each $U_v(x)$ is a permutation of an orthonormal basis and is unitary. [F2, algebra]

1.2 In the configuration basis, each $B_f$ is diagonal with entries in $\{0,1\}$. Therefore $B_f^*=B_f$ and $B_f^2=B_f$, so every $B_f$ is an orthogonal projection. [F2, algebra]

1.3 For distinct vertices $v,w$, their gauge permutations commute: on a shared edge they act at opposite ends, as left multiplication by one group element and right multiplication by the inverse of the other, and these operations commute; on all other edges at least one action is the identity. Thus $A_vA_w=A_wA_v$. Since all $B_f$ are diagonal in the same configuration basis, they commute pairwise. [F2, algebra]

1.4 Under a gauge change $k_u=x$ at $u=v$ and $k_u=e$ elsewhere, a face-boundary holonomy based at a vertex $u_0$ changes to $k_{u_0}H_fk_{u_0}^{-1}$: along the closed boundary walk the intermediate factors $k_u^{-1}k_u$ cancel. The condition $H_f=e$ is invariant under conjugation, so $U_v(x)$ preserves every eigenspace of $B_f$ and commutes with $B_f$. Averaging over $x$ gives $A_vB_f=B_fA_v$. [F2, algebra]

2.1 Taking adjoints in the finite average gives $A_v^*=|G|^{-1}\sum_xU_v(x^{-1})=A_v$. Also $A_v^2=|G|^{-2}\sum_{x,y}U_v(xy)=|G|^{-1}\sum_zU_v(z)=A_v$, since each $z\in G$ has exactly $|G|$ factorizations $xy=z$. Hence $A_v$ is an orthogonal projection. [given, F1, step 1.1, algebra]

3.1 Each complement $I-A_v$ and $I-B_f$ is an orthogonal projection, hence positive. Their finite sum $H_\Sigma$ is positive. [step 2.1, step 1.2, algebra]

4.1 For a vertex assignment $\mathbf y=(y_v)_{v\in V}\in G^V$, define the pure-gauge edge configuration $g_a=y_{s(a)}y_{t(a)}^{-1}$. The holonomy around every face telescopes to $e$, so each such basis vector lies in the $+1$ eigenspace of every $B_f$. The set $\mathcal P$ of distinct pure-gauge configurations is finite because $G^V$ is finite, and nonempty by taking every $y_v=e$. Each $U_v(x)$ permutes $\mathcal P$, because it replaces $y_v$ by $xy_v$ and leaves other vertex labels fixed. Therefore $\psi:=\sum_{\mathbf g\in\mathcal P}|\mathbf g\rangle$ is nonzero, $U_v(x)\psi=\psi$ for every $v,x$, and consequently $A_v\psi=B_f\psi=\psi$ for every $v,f$. This gives a common zero vector of all positive terms in $H_\Sigma$, proving frustration-freeness and ground energy zero. [F1, F2, step 1.1, step 2.1, step 1.2, step 3.1, construct] ∎
