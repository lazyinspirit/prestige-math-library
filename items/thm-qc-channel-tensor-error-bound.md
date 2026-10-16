---
id: thm-qc-channel-tensor-error-bound
kind: theorem
title: "Channel Tensor Error Bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: ["def-qc-diamond-norm", "def-qc-quantum-channel", "thm-qc-diamond-norm-ancilla-dimension-bound", "thm-qc-channel-diamond-norm-one", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint", "thm-qc-wire-permutation-is-unitary", "lem-qc-tensor-products-of-operator-matrix-units-form-a-basis", "thm-singular-value-decomposition", "thm-qc-trace-norm-duality-and-norm-properties", "lem-qc-trace-norm-tensor-product"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.3.2–3.3.4, tensor-product and composition properties."
---

## Statement

For nonzero finite-dimensional complex Hilbert spaces $H_i,K_i$ and linear maps $\Phi_i:\mathcal L(H_i)\to\mathcal L(K_i)$, $i=1,2$,
$$\|\Phi_1\otimes\Phi_2\|_\diamond=\|\Phi_1\|_\diamond\|\Phi_2\|_\diamond.$$
Consequently, if $\Phi_i,\Psi_i:\mathcal L(H_i)\to\mathcal L(K_i)$ are channels, then
$$\|\Phi_1\otimes\Phi_2-\Psi_1\otimes\Psi_2\|_\diamond\le\|\Phi_1-\Psi_1\|_\diamond+\|\Phi_2-\Psi_2\|_\diamond.$$

## Facts & Assumptions

**Given:** Nonzero finite-dimensional input and output spaces, two linear maps, and, for the error bound, four channels with matching factor domains and codomains.

[L1] The diamond norm is the supremum of amplified induced trace norms; the ancilla dimension can be capped at the input dimension, and an attaining rank-one input exists ([[def-qc-diamond-norm]], [[thm-qc-diamond-norm-ancilla-dimension-bound]]). The dimension-bound carrier is a current draft.

[L2] The trace norm of a tensor product of finite-dimensional maps is the product of the trace norms ([[lem-qc-trace-norm-tensor-product]]).

[L3] Factor reorderings are unitary by [[thm-qc-wire-permutation-is-unitary]]. If $U,V$ are unitary, then $(UAV)^*(UAV)=V^*A^*AV$, whose eigenvalues equal those of $A^*A$ by unitary conjugacy; hence $UAV$ has the same singular values and trace norm as $A$ ([[thm-singular-value-decomposition]]).

[L5] Tensor maps act on elementary tensors factorwise ([[def-qc-tensor-map]]); their composition is factorwise, and tensoring identities gives the identity on the tensor product ([[thm-qc-tensor-map-composition-and-adjoint]]).

[L7] Products of matrix units form a basis of the full tensor-product operator space, so equalities checked on those product operators hold for every input ([[lem-qc-tensor-products-of-operator-matrix-units-form-a-basis]]).

[F1] The trace norm satisfies the triangle inequality ([[thm-qc-trace-norm-duality-and-norm-properties]]).

[F2] A channel is a completely positive trace-preserving linear map ([[def-qc-quantum-channel]]).

[L6] Every channel has diamond norm one ([[thm-qc-channel-diamond-norm-one]]).

## Proof


1.1 Put $a=\|\Phi_1\|_\diamond$ and $b=\|\Phi_2\|_\diamond$. For any finite ancilla $R$, let $S_{\rm mid}:K_1\otimes H_2\otimes R\to H_2\otimes K_1\otimes R$ and $S_{\rm out}:K_2\otimes K_1\otimes R\to K_1\otimes K_2\otimes R$ be the wire swaps from [L3]. For each product matrix unit $X=X_1\otimes X_2\otimes X_R$ on $H_1\otimes H_2\otimes R$, factorwise tensor-map composition [L5] shows that first applying $\Phi_1\otimes\operatorname{id}_{H_2\otimes R}$, conjugating by $S_{\rm mid}$, applying $\Phi_2\otimes\operatorname{id}_{K_1\otimes R}$, and conjugating by $S_{\rm out}$ gives $\Phi_1(X_1)\otimes\Phi_2(X_2)\otimes X_R$. This is exactly $(\Phi_1\otimes\Phi_2\otimes\operatorname{id}_R)(X)$. By the matrix-unit basis [L7], equality holds for every operator $X$. The two amplified maps have induced trace norms at most $a$ and $b$; conjugating by the wire swaps preserves trace norm by [L3]. Hence the composite output has trace norm at most $ab\|X\|_1$, and taking the suprema proves $\|\Phi_1\otimes\Phi_2\|_\diamond\le ab$. [given, L1, L3, L5, L7, algebra]

2.1 By [L1], choose unit rank-one operators $X_i=R_{x_i,y_i}$ on an ancilla of dimension $\dim H_i$ attaining $\|\Phi_i\|_\diamond$. The tensor input $X_1\otimes X_2$ has trace norm $\|X_1\|_1\|X_2\|_1=1$ by [L2]. After the factor reordering, its output is $(\Phi_1\otimes\operatorname{id}_{\mathbb C^{\dim H_1}})(X_1)\otimes(\Phi_2\otimes\operatorname{id}_{\mathbb C^{\dim H_2}})(X_2)$ by [L5] and [L7]; its trace norm is the product of the two output trace norms by [L2]. It is therefore an admissible test showing $\|\Phi_1\otimes\Phi_2\|_\diamond\ge ab$. Together with step 1.1 this proves multiplicativity. [given, L1, L2, L3, L5, L7, step 1.1, algebra]

3.1 Use the exact identity $$\Phi_1\otimes\Phi_2-\Psi_1\otimes\Psi_2=(\Phi_1-\Psi_1)\otimes\Phi_2+\Psi_1\otimes(\Phi_2-\Psi_2).$$ For each ancilla, [F1] gives the triangle inequality for the amplified trace norm; taking its supremum gives the diamond-norm triangle inequality. By [F2] the four factor maps are channels, so step 2.1 bounds the two tensor terms by $\|\Phi_1-\Psi_1\|_\diamond\|\Phi_2\|_\diamond$ and $\|\Psi_1\|_\diamond\|\Phi_2-\Psi_2\|_\diamond$. Both channel norms equal one by [L6], giving the stated sum. [given, F1, F2, L1, L6, step 2.1, algebra] ∎

