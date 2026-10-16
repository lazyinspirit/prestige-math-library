---
id: thm-qc-one-control-unitary-two-cnot
kind: theorem
title: Exact Controlled One-Qubit Unitary with Two CNOTs
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-controlled-unitary-access
  - def-qc-cnot-and-control-target-order
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - thm-qc-computational-basis-orthonormal
  - thm-qc-one-qubit-euler-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---

## Statement

For every $U\in U(2)$, the exact controlled matrix $C(U)=\operatorname{diag}(I_2,U)$ is realized with two CNOTs and one-qubit gates only. The scalar phase of $U$ is implemented as a phase gate on the control and is not discarded.

## Facts & Assumptions

**Given:** Control-first order, the exact controlled-unitary convention, and $U\in U(2)$.

[F1] [[thm-qc-one-qubit-euler-decomposition]]: $U=e^{i\delta}R_z(\alpha)R_y(\theta)R_z(\beta)$ for real parameters, with $\delta=0$ possible when $\det U=1$.

[F2] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: axis rotations are $R_{\mathbf n}(t)=\exp(-it\,\mathbf n\cdot\boldsymbol\sigma/2)$ and $R_z=R_{(0,0,1)}$.

[F3] [[def-qc-cnot-and-control-target-order]]: the first-wire-control CNOT maps $|a,t\rangle$ to $|a,t\oplus a\rangle$ and is the block $C(X)=\operatorname{diag}(I,X)$.

[F4] [[def-qc-controlled-unitary-access]]: $C(U)=\operatorname{diag}(I,U)$ in control-first order.

[F5] [[def-qc-circuit-denotational-semantics]]: later-applied gates multiply on the left of earlier gates.

[F6] [[def-qc-elementary-circuit-resources]]: the declared gate count counts only the named gate occurrences from the operation model.

[F7] [[thm-qc-computational-basis-orthonormal]]: the ordered computational basis of a register is orthonormal.

## Proof



1.1 Put $V=R_z(\alpha)R_y(\theta)R_z(\beta)\in SU(2)$, and define $A=R_z(\alpha)R_y(\theta/2),\quad B=R_y(-\theta/2)R_z(- (\alpha+\beta)/2),\quad C=R_z((\beta-\alpha)/2).$ Using additivity of same-axis rotations gives $ABC=I$. The rotations in [F1] follow the axis convention [F2]. Direct multiplication with the matrices in [F1] gives $XR_y(t)X=R_y(-t)$ and $XR_z(t)X=R_z(-t)$; therefore $AXBXC=R_z(\alpha)R_y(\theta)R_z(\beta)=V$. [given, F1, F2, algebra]

2.1 The displayed matrix product $(I\otimes A)\,\mathrm{CNOT}\,(I\otimes B)\,\mathrm{CNOT}\,(I\otimes C)$ has chronological gate order $I\otimes C$, CNOT, $I\otimes B$, CNOT, $I\otimes A$ by [F5]. By [F3] and [F7], each CNOT is a unitary basis permutation, and the full product is block diagonal in the control basis. On control value $0$ its target block is $ABC=I$; on value $1$ the two CNOTs apply $X$ between the target factors, so the block is $AXBXC=V$. Hence the product is exactly $C(V)$ by [F4]. [step 1.1, F3, F4, F5, F7, algebra]

3.1 Since $U=e^{i\delta}V$, block multiplication gives $C(U)=(P_{e^{i\delta}}\otimes I)C(V)$, where $P_{e^{i\delta}}=\operatorname{diag}(1,e^{i\delta})$. This is one additional one-qubit control gate and preserves the exact scalar phase. By [F6], it adds no CNOT occurrences, so the exact count remains two for every $U\in U(2)$. [step 2.1, F1, F4, F6, algebra] ∎
