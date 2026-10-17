---
id: lem-qsm-local-subsystem-trace-tests
kind: lemma
title: Subsystem expectations and reduced finite tensor densities
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsm-local-finite-tensor-state
  - def-qc-partial-trace
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-partial-trace-characterization-and-basis-independence
  - thm-qc-partial-trace-positive-and-trace-preserving
dependency_roles:
  def-qsm-local-finite-tensor-state: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  def-qc-tensor-register-and-permutation: mathematical-premise
  def-qc-tensor-map: mathematical-premise
  thm-qc-partial-trace-characterization-and-basis-independence: mathematical-premise
  thm-qc-partial-trace-positive-and-trace-preserving: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §§2.1.2–2.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: John Preskill, Quantum Computation, Chapter 2, §§2.3–2.3.1
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
---

## Statement

Let $V_A,V_B$ be nonzero finite-dimensional ordered tensor registers as in
[[def-qc-tensor-register-and-permutation]], with the product orthonormal
bases and linear-first inner products specified there. On any such register
$W$, use **finite tensor density** to mean a matrix $R$ with
$R=R^*$, $x^*Rx\ge0$ for every coordinate vector $x$, and
$\operatorname{Tr}R=1$. Here $R^*$ is the conjugate transpose and
$\operatorname{Tr}R$ is the sum of its diagonal entries. A **finite POVM** on
$W$ is a family $(M_a)_{a=1}^r$, $r\ge1$, of Hermitian matrices with
$x^*M_ax\ge0$ for every $x$ and $\sum_aM_a=I_W$; an **effect** is a
Hermitian matrix $M$ with $0\le M\le I_W$, meaning both $M$ and $I_W-M$
are nonnegative in this sense. These conventions extend the identical
coordinate definitions of [[def-qsm-local-finite-tensor-state]] from
$W=(\mathbb C^q)^{\otimes N}$ to arbitrary nonzero finite ordered registers.
Let $\rho$ be a finite tensor density on $V_A\otimes V_B$. Then
$$\rho_A:=\operatorname{Tr}_B\rho$$
is a finite tensor density on $V_A$. For every matrix $A$ on $V_A$,
$$\operatorname{Tr}(\rho_AA)=\operatorname{Tr}(\rho(A\otimes I_B)).$$
For a finite POVM $(M_a)_{a=1}^r$ on $V_A$, the trace pairings of its
outcomes in $\rho_A$ equal the trace pairings of the lifted effects
$M_a\otimes I_B$ in $\rho$.

## Facts & Assumptions

**Given:** The ordered tensor and density conventions specified in the Statement,
a density $\rho$ on $V_A\otimes V_B$, and a finite POVM when the last claim
is used.

[F1] [[def-qc-partial-trace]]: the partial trace contracts the second tensor
factor in the specified product basis.

[F2] [[thm-qc-partial-trace-characterization-and-basis-independence]]: its
trace-pairing identity is
$\operatorname{tr}((\operatorname{Tr}_B R)T)=\operatorname{tr}(R(T\otimes I_B))$.

[F3] [[thm-qc-partial-trace-positive-and-trace-preserving]]: partial trace
preserves non-negativity and total trace.

[F4] [[def-qc-tensor-register-and-permutation]]: the ordered product basis
is orthonormal for the product inner product and spans $V_A\otimes V_B$.

[F5] [[def-qc-tensor-map]]: $M\otimes I_B$ is the linear tensor map sending
$x\otimes y$ to $Mx\otimes y$.

[F6] The Statement's extension of [[def-qsm-local-finite-tensor-state]]:
a finite POVM on any of the stated registers is a family of nonnegative
matrices whose sum is the identity.

## Proof

1.1 By the coordinate definition [F1], $\rho_A$ is the second-factor partial
trace. Apply [F3] to the nonnegative trace-one operator $\rho$. It gives
$\rho_A\ge0$ and $\operatorname{Tr}\rho_A=\operatorname{Tr}\rho=1$;
therefore $\rho_A$ is a finite tensor density by the Statement's explicit
definition on $V_A$. [given, F1, F3]

2.1 Apply [F2] with $R=\rho$ and $T=A$ to obtain the displayed expectation
identity. If $(M_a)$ is a POVM, choose an orthonormal basis
$(b_j)_{j=1}^{\dim V_B}$ of $V_B$. For $x=\sum_jx_j\otimes b_j$, the
product inner product [F4] and tensor map [F5] give
$$\langle(M_a\otimes I_B)x,x\rangle=\sum_j\langle M_ax_j,x_j\rangle\ge0,$$
where nonnegativity of each $M_a$ follows from [F6]; hence every lifted
matrix is nonnegative. Moreover,
$$\sum_{a=1}^rM_a\otimes I_B=\left(\sum_{a=1}^rM_a\right)\otimes I_B=I_A\otimes I_B=I_{V_A\otimes V_B};$$
the final identity holds on every elementary tensor, hence on the whole
finite tensor product by [F5]. Therefore the lifts are a POVM, and each is an
effect because its complement is the sum of the other nonnegative lifts by
[F6]. Substituting $A=M_a$ in the trace-pairing identity shows that each
lifted outcome pairing equals the corresponding reduced-state pairing.
[given, F2, F4, F5, F6, algebra] ∎
