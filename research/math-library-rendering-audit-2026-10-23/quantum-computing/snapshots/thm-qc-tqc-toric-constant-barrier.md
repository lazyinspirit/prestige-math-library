---
id: thm-qc-tqc-toric-constant-barrier
kind: theorem
title: A toric logical string has constant energy barrier
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-qc-tqc-toric-energy-barrier
  - def-qc-tqc-toric-hamiltonian
  - thm-qc-tqc-toric-gap
  - lem-qc-tqc-toric-string-syndrome
  - def-qc-tqc-toric-logical-loops
justified_by: []
proof_strategy: direct
axiom_use: "None; the path applies finitely many single-edge Pauli operators."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
---

## Statement

If $J_e\le J_m$, the horizontal logical string $\bar Z_1$ has
$\mathcal B_L(\bar Z_1)\le4J_e$. If $J_m<J_e$, the dual horizontal logical
string $\bar X_2$ has $\mathcal B_L(\bar X_2)\le4J_m$. In either case a
noncontractible logical loop of the cheaper species has barrier at most
$4\min(J_e,J_m)$, independently of $L$.

## Facts & Assumptions

**Given:** $L\ge3$, fixed $J_e,J_m>0$, the finite toric Hamiltonian, and the specified logical loops.

[F1] [[def-qc-tqc-toric-energy-barrier]]: the barrier is the minimum peak energy excess over all paths of single-edge Pauli errors ending at the specified logical operator.

[F2] [[thm-qc-tqc-toric-gap]]: the ground energy is $E_g=-L^2(J_e+J_m)$.

[F3] [[lem-qc-tqc-toric-string-syndrome]]: an edge-simple open primal Z trail or dual X trail has the respective defects at exactly its two endpoints; a closed such trail has no defects.

[F4] [[def-qc-tqc-toric-logical-loops]]: $\bar Z_1$ is the horizontal primal loop with edges $h_{i,0}$, and $\bar X_2$ is the dual horizontal loop with crossed edges $v_{i,0}$.

[F5] [[def-qc-tqc-toric-hamiltonian]]: $H_L$ is the finite sum of star terms $-J_eA_{i,j}$ and plaquette terms $-J_mB_{i,j}$.

## Proof

1.1 Suppose $J_e\le J_m$. Apply $Z_{h_{0,0}},Z_{h_{1,0}},\ldots,Z_{h_{L-1,0}}$ in that order. After $k$ factors with $1\le k<L$, the partial string is a primal trail from $q_{0,0}$ to $q_{k,0}$; these endpoints are distinct, so [F3] gives exactly two e defects and no m defects. By [F5], changing one star eigenvalue from $+1$ to $-1$ changes its energy contribution from $-J_e$ to $+J_e$, an increase of $2J_e$; the excess is therefore $4J_e$. After the last factor the path is closed and has zero syndrome by [F3]. This is an elementary path in [F1] whose peak excess is at most $4J_e$. [given, F1, F2, F3, F4, F5, construct, algebra]

1.2 Suppose $J_m<J_e$. Apply $X_{v_{0,0}},X_{v_{1,0}},\ldots,X_{v_{L-1,0}}$ in that order. The crossed dual edges form a closed horizontal dual loop. After $k$ factors with $1\le k<L$, the dual trail has distinct endpoint faces $f_{L-1,0}$ and $f_{k-1,0}$; [F3] gives exactly two m defects and no e defects. By [F5], each m defect raises the energy by $2J_m$, so the excess is $4J_m$. The final closed trail has zero syndrome by [F3] and ends at $\bar X_2$. This is an elementary path in [F1] with peak excess at most $4J_m$. [given, F1, F2, F3, F4, F5, construct, algebra]

2.1 If $J_e\le J_m$, step 1.1 gives $4J_e=4\min(J_e,J_m)$. If $J_m<J_e$, step 1.2 gives $4J_m=4\min(J_e,J_m)$. The bound is independent of $L$. [step 1.1, step 1.2, algebra] ∎

