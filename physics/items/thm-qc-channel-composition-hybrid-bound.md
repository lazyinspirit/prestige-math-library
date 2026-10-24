---
id: thm-qc-channel-composition-hybrid-bound
kind: theorem
title: "Channel Composition Hybrid Bound"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: ["def-qc-diamond-norm", "def-qc-quantum-channel", "thm-qc-channel-diamond-norm-one", "thm-qc-trace-norm-duality-and-norm-properties", "thm-qc-diamond-norm-ancilla-dimension-bound", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint", "lem-qc-tensor-products-of-operator-matrix-units-form-a-basis"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.3.2–3.3.4, completely bounded trace norm and composition."
---

## Statement

Let $H_0,H_1,H_2$ be nonzero finite-dimensional complex Hilbert spaces, and let $\Phi_0,\Psi_0:\mathcal L(H_0)\to\mathcal L(H_1)$ and $\Phi_1,\Psi_1:\mathcal L(H_1)\to\mathcal L(H_2)$ be finite-dimensional channels. Then
$$\|\Psi_1\circ\Psi_0-\Phi_1\circ\Phi_0\|_\diamond\le\|\Psi_0-\Phi_0\|_\diamond+\|\Psi_1-\Phi_1\|_\diamond.$$

## Facts & Assumptions

**Given:** Nonzero finite-dimensional $H_0,H_1,H_2$ and four channels with the indicated domains and codomains.

[F1] A channel is a completely positive trace-preserving linear map ([[def-qc-quantum-channel]]).

[L1] The diamond norm is the supremum of induced trace norms over all finite ancillas and equals the induced norm at input dimension ([[def-qc-diamond-norm]], [[thm-qc-diamond-norm-ancilla-dimension-bound]]). The ancilla theorem is a current draft.

[L2] Every finite trace norm satisfies its triangle inequality and the induced norm is submultiplicative under composition ([[thm-qc-trace-norm-duality-and-norm-properties]]).

[L3] Each channel has diamond norm one ([[thm-qc-channel-diamond-norm-one]]). The QC06 supplier is draft.

[L4] For each finite $R$, the operators built from products of matrix units span $\mathcal L(H\otimes R)$ ([[lem-qc-tensor-products-of-operator-matrix-units-form-a-basis]]); on them, factorwise tensor-map composition gives $(A\otimes\operatorname{id}_R)\circ(B\otimes\operatorname{id}_R)=(A\circ B)\otimes\operatorname{id}_R$ ([[def-qc-tensor-map]], [[thm-qc-tensor-map-composition-and-adjoint]]).

## Proof


1.1 For any fixed ancillary space $R$, write $\Lambda_R(T)=T\otimes\operatorname{id}_R$. By [L4], the amplification respects composition, so $\|((A\circ B)\otimes\operatorname{id}_R)(X)\|_1\le\|A\otimes\operatorname{id}_R\|_{1\to1}\|B\otimes\operatorname{id}_R\|_{1\to1}\|X\|_1$ for each $X$. Taking suprema over nonzero $X$ and then over $R$ proves $\|A\circ B\|_\diamond\le\|A\|_\diamond\|B\|_\diamond$. The pointwise trace-norm triangle inequality likewise gives the triangle inequality for the diamond norm. [given, L1, L2, L4, algebra]

2.1 The algebraic identity $$\Psi_1\Psi_0-\Phi_1\Phi_0=\Psi_1(\Psi_0-\Phi_0)+(\Psi_1-\Phi_1)\Phi_0$$ holds on every input by expansion. Apply step 1.1 and [L3] to the two terms: the first has diamond norm at most $\|Ψ_1\|_\diamond\|\Psi_0-\Phi_0\|_\diamond=\|\Psi_0-\Phi_0\|_\diamond$, and the second at most $\|\Psi_1-\Phi_1\|_\diamond\|\Phi_0\|_\diamond=\|\Psi_1-\Phi_1\|_\diamond$. The triangle inequality from step 1.1 proves the claimed sum. [given, F1, L2, L3, step 1.1, algebra] ∎

