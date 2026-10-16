---
id: def-qc-classical-control-and-measurement-circuit
kind: definition
title: "Finite measurement branches and classical control"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - thm-qc-instrument-outcome-law-normalizes
  - thm-qc-instrument-induces-povm
  - def-qc-controlled-unitary-access
justified_by: []
dependency_level: 8
proof_strategy: direct
axiom_use: "None; outcome sets, gate families, and sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

A measurement stage on a finite-dimensional input register is specified by a finite nonempty observed outcome set $\Omega$ and an instrument $(\mathcal I_a)_{a\in\Omega}$ as in [[def-qc-instrument-and-conditional-state]]. For an input density operator $\rho$, its unnormalized branch output is $\tau_a=\mathcal I_a(\rho)$ and its branch weight is $p_a=\operatorname{tr}(\tau_a)$. The positive weights sum to one by [[thm-qc-instrument-outcome-law-normalizes]]. The unique POVM induced by the instrument, supplied by [[thm-qc-instrument-induces-povm]], has effects $E_a$ satisfying $p_a=\operatorname{tr}(\rho E_a)$. A conditional output is assigned only when $p_a>0$, using the rule in [[def-qc-instrument-and-conditional-state]]; when $p_a=0$ the value is $\bot$.

A finite classical controller may retain the observed history $a$ and select a specified finite unitary suffix $S_a$ on the quantum data. Its branch map is $X\mapsto S_a\mathcal I_a(X)S_a^\dagger$. The index $a$ is the observed outcome; any Kraus index used to represent $\mathcal I_a$ is an unobserved environment label and is not stored as classical data.

A **finite measurement history tree** for a circuit on the fixed register $D=\mathcal Q_n$ is a finite rooted tree whose internal node $h$ carries a finite nonempty outcome set $\Omega_h$ and an instrument $(\mathcal I^h_a)_{a\in\Omega_h}$ from $D$ to $D$. The edge from $h$ to its child $ha$ carries a specified finite unitary $S_{h,a}:D\to D$; its branch map is $X\mapsto S_{h,a}\mathcal I^h_a(X)S_{h,a}^\dagger$. Leaves may carry a specified finite terminal POVM on $D$. The fixed data register is the wire register of [[def-qc-circuit-syntax-and-register-order]]. A history is the ordered list of observed edge labels from the root; a hidden Kraus index is never included in it. Since the tree is finite and each node has finitely many children, every history and every sum over histories below is finite.

For a coherent representation, order $\Omega$ and use the computational basis $(e_a)_{a\in\Omega}$ of the finite label register $Q_{|\Omega|}$. On the orthogonal decomposition $Q_{|\Omega|}\otimes K=\bigoplus_{a\in\Omega}(\operatorname{span}\{e_a\}\otimes K)$, define the mathematical block operator by
$$B\!\left(\sum_{a\in\Omega} e_a\otimes x_a\right):=\sum_{a\in\Omega}e_a\otimes S_ax_a.$$
Its control availability is part of the operation model. In the one-bit case, [[def-qc-controlled-unitary-access]] specifies the exact access meaning of $C(U)$; an ordinary black-box call to $U$ does not grant a controlled call. For larger outcome sets the displayed block gate is likewise an explicit operation, or must be constructed and charged by the chosen model. No gate-set implementation or efficiency bound is part of this definition. A finite history tree is interpreted by applying this definition at each node.

## Facts & Assumptions

**Given:** A finite nonempty outcome set $\Omega$, a finite instrument, an ordered label basis, and a finite family of branch-specific unitaries $(S_a)_{a\in\Omega}$.

[F1] [[def-qc-instrument-and-conditional-state]]: each branch map is completely positive, its trace contributes to the outcome law, and conditional outputs are divided by the branch weight only when that weight is positive.

[F2] [[thm-qc-instrument-outcome-law-normalizes]]: for every density input, the branch weights form a finite probability distribution.

[F3] [[thm-qc-instrument-induces-povm]]: there is a unique POVM $(E_a)$ with $\operatorname{tr}(\mathcal I_a(X))=\operatorname{tr}(XE_a)$ for every input operator $X$.

[F4] [[def-qc-register-and-computational-basis]] and [[def-qc-tensor-register-and-permutation]]: the label register has an ordered orthonormal basis and the tensor product has the product inner product.

[F5] [[def-qc-controlled-unitary-access]]: controlled access is an explicit operation capability and is not inferred from a matrix for $U$.

## Proof



1.1 Put $m=|\Omega|\ge1$ and write an arbitrary vector of $Q_m\otimes K$ uniquely as $\sum_{a\in\Omega}e_a\otimes x_a$. The block formula sends it to $\sum_ae_a\otimes S_ax_a$; orthogonality of the $e_a$ makes distinct label blocks orthogonal. [given, F4, construct]

1.2 By [F1]–[F3], the observed law is the instrument branch law, equals the induced POVM law, and the conditional state is assigned only on a positive-weight branch. The $\bot$ convention applies on every zero-probability branch; the history tree records only its observed edge labels. [given, F1, F2, F3]

2.1 For vectors $\sum_ae_a\otimes x_a$ and $\sum_ae_a\otimes y_a$, the product inner product gives $\langle Bx,By\rangle=\sum_a\langle S_ax_a,S_ay_a\rangle=\sum_a\langle x_a,y_a\rangle=\langle x,y\rangle$. The block map with $S_a^\dagger$ in each block is its two-sided inverse, so $B$ is a surjective isometry. [given, step 1.1, algebra]

3.1 Step 2.1 establishes the mathematical block unitary. Its inclusion as a circuit operation still requires the explicit access or construction promised by the model, as required by [F5]; the definition grants no additional oracle or gate capability. [F5, step 2.1] ∎
