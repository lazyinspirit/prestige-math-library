---
id: lem-qsmx-toric-local-pauli-centralizer
kind: lemma
title: Disk-supported Pauli centralizers are stabilizers
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-toric-cellular-hamiltonian
dependency_roles:
  def-qsmx-toric-cellular-hamiltonian: mathematical-premise
physical_scope: Pure finite-dimensional mathematics on the unperturbed square-torus stabilizer model; no perturbation stability claim.
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: §1, PDF pp. 2–5; primal and dual loop operators and the homology description.
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §§9.6–9.7, PDF pp. 16–21; torus cycles, loop operators, and the four-dimensional toric-code space.
---

## Statement

Let $K_L$ be the square $L\times L$ torus cellulation with $L\ge3$. For $a,b\in\mathbb F_2^E$, let $P(a,b)=X(a)Z(b)$, where $X(a)=\bigotimes_eX^{a_e}$ and $Z(b)=\bigotimes_eZ^{b_e}$. Suppose its edge support is contained in a disk whose complement contains primal cycles $p_1,p_2$ and dual cycles $q_1,q_2$ with $I(p_i,q_j)=\delta_{ij}$. Write $A_v=X(\partial_1^Tv)$ and $B_f=Z(\partial_2f)$. If $P(a,b)$ commutes with every $A_v$ and $B_f$, then there are vertex and face chains $u\in\mathbb F_2^V$ and $w\in\mathbb F_2^F$ such that $a=\partial_1^Tu$ and $b=\partial_2w$. Consequently $P(a,b)$ is a product of the vertex and face stabilizers.

## Statement references

[A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” §1](https://arxiv.org/pdf/quant-ph/9707021)

[John Preskill, *Lecture Notes for Physics 219: Quantum Computation*, §§9.6–9.7](https://www.preskill.caltech.edu/ph219/topological.pdf)

## Facts & Assumptions

**Given:** The square $L\times L$ torus model of [[def-qsmx-toric-cellular-hamiltonian]], $L\ge3$, and a Pauli string $P(a,b)$ satisfying the support and commutation hypotheses.

[F1] [[def-qsmx-toric-cellular-hamiltonian]]: $C_2=\mathbb F_2^F\xrightarrow{\partial_2}C_1=\mathbb F_2^E\xrightarrow{\partial_1}C_0=\mathbb F_2^V$, with $\partial_1\partial_2=0$; $A_v=X(\partial_1^Tv)$, $B_f=Z(\partial_2f)$; the square torus has $L^2$ vertices, $2L^2$ edges, $L^2$ faces, and primal/dual cycles with intersection matrix $I(p_i,q_j)=\delta_{ij}$.

## Proof
1.1 Commutation of $P(a,b)$ with every $A_v$ gives $b\cdot\partial_1^Tv=0$ for every vertex basis vector $v$, hence $\partial_1b=0$. Commutation with every $B_f$ gives $a\cdot\partial_2f=0$ for every face basis vector $f$, hence $\partial_2^Ta=0$. [given, F1, algebra]

1.2 The image of $\partial_1$ is the even-parity subspace of $C_0$: each edge boundary has even parity, while a path from a fixed vertex $v_0$ to any $v\ne v_0$ has boundary $v+v_0$, and these vectors span that subspace. Thus $\operatorname{rank}\partial_1=|V|-1$. A 2-chain lies in $\ker\partial_2$ exactly when its coefficients agree across every adjacent pair of faces; dual-graph connectedness makes these coefficients constant, so $\dim\ker\partial_2=1$ and $\operatorname{rank}\partial_2=|F|-1$. Rank-nullity gives $\dim H_1(K_L;\mathbb F_2)=|E|-(|V|-1)-(|F|-1)=2$. The mod-two intersection pairing with a closed dual cycle vanishes on every face boundary, since each face boundary meets that closed dual cycle an even number of times; it is therefore well defined on $H_1$. The matrix $I(p_i,q_j)=\delta_{ij}$ proves that $p_1,p_2$ are independent; by the dimension calculation they form a basis, and $q_1,q_2$ detect the two coefficients of every homology class. [given, F1, algebra]

2.1 Since $b$ is a cycle and its support is disjoint from $q_1,q_2$, its two intersection numbers vanish. The intersection matrix and the two-dimensionality in step 1.2 imply that $b$ has zero homology class; by the definition of $H_1=\ker\partial_1/\operatorname{im}\partial_2$, there is a face chain $w$ with $b=\partial_2w$. [given, F1, step 1.2]

2.2 The cochain $a$ vanishes on $p_1,p_2$ because its support is disjoint from them. It also vanishes on every boundary $\partial_2w'$ because $\partial_2^Ta=0$. Since $p_1,p_2$ represent a basis of $H_1$, every 1-cycle is a sum of their representatives and a boundary; hence $a$ vanishes on every 1-cycle. Define $\phi$ on $\operatorname{im}\partial_1$ by $\phi(\partial_1c)=a\cdot c$. This is well defined because two chains with the same boundary differ by a cycle, on which $a$ vanishes. Extend $\phi$ linearly to $C_0$ by extending a basis of the finite-dimensional subspace $\operatorname{im}\partial_1$. Then $a=\partial_1^T\phi$, so take $u=\phi$. [given, F1, step 1.2, algebra]

3.1 By $a=\partial_1^Tu$ and $b=\partial_2w$, $X(a)$ is the product of $A_v$ over vertices with $u_v=1$, and $Z(b)$ is the product of $B_f$ over faces with $w_f=1$. Therefore $P(a,b)=X(a)Z(b)$ is the product of those vertex and face stabilizers. [F1, step 2.1, step 2.2, algebra] ∎

## Remarks

The disk and complement condition is essential to this argument: it makes local cycles pair trivially with both complementary dual generators and local cocycles vanish on both complementary primal generators. The lemma concerns the exact unperturbed stabilizer algebra only.
