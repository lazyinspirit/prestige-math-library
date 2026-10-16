---
id: lem-qc-clifford-lifts-symplectic-transvections
kind: lemma
title: Clifford circuits lift binary symplectic transvections
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-binary-symplectic-form
  - def-qc-clifford-normalizer
  - thm-qc-pauli-product-and-adjoint
  - thm-qc-hermitian-pauli-phase-criterion
  - def-qc-tensor-register-and-permutation
  - lem-qc-hadamard-pauli-action
  - lem-qc-phase-gate-pauli-action
  - lem-qc-cnot-pauli-action
justified_by: []
dependency_level: 9
sources:
  references:
    - title: "Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406196
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: "John Watrous, Understanding Quantum Information and Computation, Lesson 14"
      url: https://jhwatrous.github.io/UQIC.pdf
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; each circuit and reduction is finite and uses no choice principle."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For every nonzero $v=(x,z)\in V_n$, the transvection $\tau_v(w)=w+\omega(w,v)v$ is induced on binary Pauli labels by an explicit Clifford circuit made from local $H$, $S$, $S^*$, CNOT, and wire swaps. Its mod-$4$ phase lift is computed by applying the exact gate update rules in sequence; no phase coordinate is suppressed.

## Facts & Assumptions

**Given:** $n\ge1$, a nonzero label $v=(x,z)\in V_n$, the ordered phase-aware Pauli convention, and a gate word $G$ whose binary action $M_G$ is the composition of the gate-label updates.

[F1] [[lem-qc-hadamard-pauli-action]]: $H_j$ swaps $(x_j,z_j)$ and changes $k$ to $k+2x_jz_j$ modulo $4$.

[F2] [[lem-qc-phase-gate-pauli-action]]: $S_j$ sends $(x_j,z_j,k)$ to $(x_j,z_j+x_j,k+x_j)$; solving these equations for the input shows $S_j^*$ sends $(x_j,z_j,k)$ to $(x_j,z_j+x_j,k-x_j)$.

[F3] [[lem-qc-cnot-pauli-action]]: CNOT $c\to t$ sends $x_t$ to $x_t+x_c$, $z_c$ to $z_c+z_t$, and leaves the other bits and $k$ unchanged.

[F4] [[thm-qc-hermitian-pauli-phase-criterion]]: if $h\in\{0,1\}$ represents $x\cdot z\in\mathbb F_2$, then $P(h,x,z)$ is Hermitian and has label $(x,z)$.

[F5] [[def-qc-tensor-register-and-permutation]]: a wire swap permutes the ordered product-basis factors, so its conjugation permutes the corresponding $x,z$ coordinates and leaves the phase unchanged.

[F6] [[def-qc-binary-symplectic-form]]: $\omega((x,z),(x',z'))=x\cdot z'+z\cdot x'$ over $\mathbb F_2$.

[F7] [[def-qc-clifford-normalizer]]: $\mathcal C_n$ is the unitary normalizer of $\mathcal P_n$ and is closed under products and adjoints.

## Proof

1.1 Each listed gate and its inverse normalizes $\mathcal P_n$ by its exact Pauli action. On binary labels, $H_j$ preserves $\omega$ because swapping $x_j,z_j$ in both arguments leaves $x_jz'_j+z_jx'_j$ unchanged by [F6]. For $S_j$, the local pairing becomes $x_j(z'_j+x'_j)+(z_j+x_j)x'_j=x_jz'_j+z_jx'_j+2x_jx'_j$, equal to the old value in $\mathbb F_2$; its inverse has the same label action. For CNOT $c\to t$, write $a=(x,z)$ and $b=(u,w)$, with $w$ the $z$-part of $b$. The affected contribution after the updates in [F3] is $x_c(w_c+w_t)+(x_t+x_c)w_t+(z_c+z_t)u_c+z_t(u_t+u_c)$. The added terms $x_cw_t$ and $z_tu_c$ each occur twice and cancel, leaving the original pairing. By [F5], wire swaps permute the paired coordinate summands and preserve the form. Hadamard and swap are involutions, CNOT is self-inverse, and $S_j^*$ is the inverse of $S_j$; hence each binary gate map is invertible. Thus every finite gate word $G$ has an invertible symplectic map $M_G$, and its unitary lies in $\mathcal C_n$ by [F7]. [given, F1, F2, F3, F5, F6, F7, algebra]

2.1 Let $h\in\{0,1\}$ be the representative of $x\cdot z\in\mathbb F_2$, so $P(h,x,z)$ is Hermitian by [F4]. Choose a wire $p$ on which $v$ is nonzero and swap it to wire $1$. On each supported wire, the local factor is proportional to $X$, $Y$, or $Z$. Apply no gate to an $X$ factor, $H$ to a $Z$ factor, and $S^*$ to a $Y$ factor; [F1] and [F2] send each local binary label to $X$, while their phase updates compute the accumulated scalar exactly modulo $4$. The resulting binary label is the nonempty product of $X$ on the support of $v$. [given, F1, F2, F4, F5, step 1.1, construct, algebra]

3.1 For each other supported wire $j$, apply CNOT $1\to j$. By [F3], it sends $X_1X_j$ to $X_1$, so the finite list removes all $X_j$ labels while retaining $X_1$; then apply $H_1$ to change $X_1$ to $Z_1$. This constructs a circuit $C$ with $CP(h,x,z)C^*=\pm Z_1$: conjugation preserves Hermiticity, so the phase of an image with label $(0,e_1)$ is $0$ or $2$ modulo $4$. For $D=C^*$, the induced symplectic map sends the label $z_1=(0,e_1)$ of $Z_1$ to $v$. [given, F1, F3, F4, step 2.1, construct, algebra]

4.1 The binary action of $S_1$ is $\tau_{z_1}$ by [F2], since [F6] gives $\omega((x,z),(0,e_1))=x_1$. Therefore $DS_1D^*$ acts by $M_D\tau_{z_1}M_D^{-1}=\tau_v$: for any $w$, symplecticity of $M_D$ gives $M_D(M_D^{-1}w+\omega(M_D^{-1}w,z_1)z_1)=w+\omega(w,v)v$. The circuit lies in $\mathcal C_n$ by step 1.1. [given, F1, F2, F6, step 1.1, step 3.1, algebra]

5.1 Each gate formula in [F1]–[F3] gives the exact image phase in $\mathbb Z/4\mathbb Z$ as well as the binary label; [F5] gives the exact no-change phase for swaps. Induction on the finite gate list for $DS_1D^*$ therefore computes each generator-image phase by repeated application of those formulas, without replacing it by its binary parity. [F1, F2, F3, F5, step 4.1, induction] ∎
