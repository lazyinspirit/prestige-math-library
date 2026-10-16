---
id: lem-qc-cnot-pauli-action
kind: lemma
title: CNOT Pauli action
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-pauli-matrices
  - thm-qc-pauli-algebra
  - def-qc-controlled-unitary-access
  - def-qc-cnot-and-control-target-order
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-tensor-map-composition-and-adjoint
justified_by: []
dependency_level: 8
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: "John Watrous, Understanding Quantum Information and Computation, Lesson 14"
      url: https://jhwatrous.github.io/UQIC.pdf
    - title: "Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406196
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; the gate rules are finite basis and matrix calculations."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $n\ge2$ and let distinct $c,t\in\{1,\ldots,n\}$ be control and target indices. For CNOT $C_{c\to t}$ acting on $y\in\mathbb F_2^n$ by toggling coordinate $t$ by $y_c$, conjugation sends

$$P(k,x,z)\longmapsto P(k,x',z'),\qquad x'_t=x_t+x_c,\quad z'_c=z_c+z_t,$$

with all other coordinates unchanged and additions in $\mathbb F_2$. In particular, $X_c\mapsto X_cX_t$, $Z_c\mapsto Z_c$, $X_t\mapsto X_t$, and $Z_t\mapsto Z_cZ_t$; the phase coordinate $k$ is unchanged in the fixed $X^xZ^z$ order.

## Facts & Assumptions

**Given:** $n\ge2$, distinct control and target wires $c,t\in\{1,\ldots,n\}$, the ordered computational basis, and the phase-aware Pauli convention.

[F1] [[def-qc-pauli-matrices]]: X flips a one-bit computational basis vector and Z multiplies it by (-1)^b.

[F2] [[thm-qc-pauli-algebra]]: X and Z are Hermitian involutions.

[F3] [[def-qc-controlled-unitary-access]]: controlled access has control-first block form C(U)=diag(I,U).

[F4] [[def-qc-cnot-and-control-target-order]]: on the first two wires, CNOT sends |a,t> to |a,t+a> with first wire control.

[F5] [[def-qc-tensor-register-and-permutation]], [[def-qc-tensor-map]], and [[thm-qc-tensor-map-composition-and-adjoint]]: the ordered product basis and tensor maps extend local actions factorwise and preserve products.

[F6] [[def-qc-tensor-register-and-permutation]]: a wire permutation is the unique linear extension of the corresponding permutation of ordered product-basis vectors.

## Proof

1.1 For control $c=1$ and target $t=2$, the controlled-X definition [F3,F4] gives $C|y_1,\ldots,y_n\rangle=|y_1,\ldots,y_t+y_c,\ldots,y_n\rangle$. Applying this rule twice gives $C^2=I$; it permutes the ordered orthonormal basis, so $C=C^*$. On a basis vector, in $C X_c C$ the right CNOT first changes $y_t$ to $y_t+y_c$, the middle $X_c$ changes $y_c$ to $y_c+1$, and the left CNOT changes the target to $y_t+y_c+(y_c+1)=y_t+1$. Thus $C X_c C=X_cX_t$. In $C X_t C$, the right CNOT changes the target to $y_t+y_c$, the middle $X_t$ toggles it, and the left CNOT toggles it back by $y_c$, leaving $y_t+1$; hence $C X_t C=X_t$. The middle $Z_c$ contributes $(-1)^{y_c}$ and the two CNOTs restore the bits, giving $C Z_c C=Z_c$. The middle $Z_t$ contributes $(-1)^{y_t+y_c}$, giving $C Z_t C=Z_cZ_t$. [given, F1, F2, F3, F4, F5, algebra]

2.1 For arbitrary distinct wires $c,t\in\{1,\ldots,n\}$, assign source positions $0,1$ to $c-1,t-1$. This partial assignment is injective; list its remaining source and target positions in increasing order and match them in order to extend it to a permutation $\sigma$. By [F6], $P_\sigma$ moves those factors into the first two positions and permutes an orthonormal basis bijectively, so $P_\sigma$ is unitary. The operator $P_\sigma^{-1}(C_{1\to2}\otimes I_{\rm remaining})P_\sigma$ therefore has the stated basis action, and its Pauli conjugation rules are the first-two-wire rules of step 1.1 with local wire names $1,2$ replaced by $c,t$. [given, F4, F6, step 1.1, construct, algebra]

3.1 Write $P(k,x,z)$ as its ordered product of all $X$-factor maps followed by all $Z$-factor maps. Conjugation preserves this product order. Using step 2.1, the images of the $X$ factors combine to $X_c^{x_c}X_t^{x_t+x_c}$ with all other $X$ exponents unchanged; the images of the $Z$ factors combine to $Z_c^{z_c+z_t}Z_t^{z_t}$ with all other $Z$ exponents unchanged. Tensor-map composition in [F5] justifies these factorwise products, and no $X$ factor is moved past a $Z$ factor. Thus no scalar is introduced, $k$ is unchanged, and the stated binary updates follow. [given, F5, step 2.1, algebra] ∎
