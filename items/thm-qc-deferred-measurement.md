---
id: thm-qc-deferred-measurement
kind: theorem
title: "Finite instruments can be coherently deferred"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - lem-qc-coherent-record-isometry
  - lem-qc-instrument-output-space-is-nonzero
  - lem-qc-finite-isometry-unitary-extension
  - def-qc-classical-control-and-measurement-circuit
  - def-qc-measurement-branch-output-law
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-dimension
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-qc-tensor-register-and-permutation
  - def-qc-kraus-representation
  - def-qc-tensor-map
  - thm-qc-tensor-map-composition-and-adjoint
  - def-qc-completely-positive-map
  - def-qc-partial-trace
  - def-qc-dirac-notation-conversion
justified_by: []
dependency_level: 9
proof_strategy: direct
axiom_use: "None; the construction uses finite outcome and Kraus families."
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

## Statement

Let $(\mathcal I_a)_{a\in\Omega}$ be a finite instrument from a nonzero finite-dimensional complex inner-product space $H$ to a finite-dimensional complex inner-product space $K$, with finite nonempty observed outcome set $\Omega$. After observing $a$, suppose the circuit applies a specified finite unitary suffix $S_a$ on $K$. For every finite-dimensional complex inner-product reference space $R$ and every input operator $X\in\mathcal L(H\otimes R)$, the measured circuit's unnormalized branch on $K\otimes R$ is
$$\mathcal J_a^{(R)}(X):=(S_a\otimes I_R)(\mathcal I_a^{(R)}(X))(S_a^\dagger\otimes I_R),$$
where, after choosing an ordered orthonormal basis of $R$, $\mathcal I_a^{(R)}$ denotes the finite ancillary block amplification on $\mathcal L(H\otimes R)$: if $X=[X_{kl}]$, then $\mathcal I_a^{(R)}(X)=[\mathcal I_a(X_{kl})]$. This is the block extension in the complete-positivity definition. The coherent construction retains the observed label register until terminal readout. Its outcome-$a$ branch, after tracing out the hidden Kraus and padding registers but retaining the label, is $\mathcal J_a^{(R)}(X)\otimes|e_a\rangle\langle e_a|$ on $K\otimes R$ and the label register (up to the canonical factor permutation); discarding the label gives the same data-reference branch map. Thus it preserves the complete outcome law and all correlations with $R$. This is an exact denotational statement: any newly used dilation or block operation must be listed and charged by a gate or oracle model; no same-alphabet synthesis or cost bound is asserted.

## Facts & Assumptions

**Given:** The finite instrument, finite outcome set, branch-specific unitary suffixes, and arbitrary finite-dimensional reference space $R$.

[F1] [[lem-qc-coherent-record-isometry]]: there are common-length finite branch Kraus families $M_{a,j}$ with $\sum_{a,j}M_{a,j}^\dagger M_{a,j}=I_H$ and an isometry $Vx=\sum_{a,j}M_{a,j}x\otimes e_a\otimes f_j$ whose observed-label branch recovers $\mathcal I_a$ after the hidden record is traced.

[F2] [[lem-qc-finite-isometry-unitary-extension]]: after finite ancilla padding, an isometry $V:H\to K\otimes E$ is the restriction of a surjective isometry $W$ on equal-dimensional input and output registers with a fixed zero ancilla.

[F3] [[def-qc-classical-control-and-measurement-circuit]]: an observed label selects its specified unitary suffix; its block operation is an explicit model capability or a separately constructed and charged operation.

[F4] [[def-qc-completely-positive-map]]: for each finite reference register $R=\mathbb C^r$, the amplified map sends a block matrix $[X_{kl}]$ to the block matrix $[\mathcal I_a(X_{kl})]$.

[F5] [[def-qc-kraus-representation]]: a finite family $(M_{a,j})_j$ represents $\mathcal I_a$ when $\mathcal I_a(Y)=\sum_jM_{a,j}YM_{a,j}^\dagger$ for every $Y\in\mathcal L(H)$.

[F6] [[def-qc-tensor-map]] and [[thm-qc-tensor-map-composition-and-adjoint]]: tensor maps act on elementary tensors factorwise, preserve compositions, and satisfy $(M\otimes I_R)^\dagger=M^\dagger\otimes I_R$.

[F7] [[def-qc-tensor-register-and-permutation]]: factor permutations are defined on the ordered product basis and preserve the product inner product.

[F8] [[def-qc-partial-trace]]: tracing a finite register factor sums its diagonal basis coordinates.

[F9] [[def-qc-measurement-branch-output-law]]: branch weights are instrument output traces; only positive-weight branches are normalized, and hidden Kraus indices are not outcomes.

[F10] [[def-dimension]] and [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional $R$ has dimension $r\ge0$ and an ordered orthonormal basis of that length; dimension zero means $R=0$.

[F11] [[def-qc-dirac-notation-conversion]]: $|e_a\rangle\langle e_a|$ is the rank-one map $z\mapsto\langle z,e_a\rangle e_a$ for a unit label vector $e_a$.

[F12] [[lem-qc-instrument-output-space-is-nonzero]]: a finite instrument from nonzero $H$ has nonzero output space $K$, as required by the finite unitary-extension lemma.

[F13] [[thm-qc-computational-basis-orthonormal]]: every specified computational basis vector of a positive-level register has norm one.

## Proof


1.1 By [F12], $K$ is nonzero. By [F1], choose finite branch Kraus families, pad them to a common positive length, and form the coherent record isometry $V:H\to K\otimes E$. By [F2], pad the input by a finite clean register and extend $V$ to a surjective isometry $W$ satisfying $W(x\otimes a_0)=Vx\otimes b_0$. [given, F1, F2, F12, construct]

1.2 Reorder $K\otimes E$ so the observed label register is first, followed by $K$, the hidden register, and the padding register; this is the canonical basis permutation of [F7]. Apply the block operation from [F3] on the observed label and $K$, acting identically on the hidden register, padding register, and reference, then undo the permutation. On the label-$a$ subspace this applies $S_a$ and leaves the two environment registers unchanged. [given, F3, F7, construct]

2.1 Let $Jx=x\otimes a_0$ be the input-padding inclusion. Checking on each elementary vector $x\otimes r$ gives $(W\otimes I_R)(J\otimes I_R)(x\otimes r)=Vx\otimes b_0\otimes r$; these vectors span, and [F6] makes the tensor extensions well-defined. Hence the inclusion maps agree on all vectors, and conjugating any operator $X$ by them gives the corresponding equality of extended output operators. This remains true for vectors and operators entangled across $H$ and $R$. [step 1.1, F6, algebra]

2.2 Put $r=\dim R$. If $r=0$, [F10] gives $R=0$, hence $X=0$ and the amplification identity is immediate. Otherwise choose an ordered orthonormal basis $(c_k)_{k<r}$ of $R$ by [F10] and use it to identify the reference with $\mathbb C^r$. Write $X=[X_{kl}]$ in blocks. By [F4], block $(k,l)$ of $\mathcal I_a^{(R)}(X)$ is $\mathcal I_a(X_{kl})=\sum_jM_{a,j}X_{kl}M_{a,j}^\dagger$ by [F5]. By [F6], the same is block $(k,l)$ of $\sum_j(M_{a,j}\otimes I_R)X(M_{a,j}^\dagger\otimes I_R)$. Equality of all blocks proves this finite-Kraus formula for every $X$. [given, step 1.1, F4, F5, F6, F10, choose]

3.1 For each $a$, the observed-label projection keeps only the terms with label $a$ in the coherent isometry. Retain that label and take the partial trace [F8] only over the hidden Kraus register and the padding register; the trace keeps equal hidden indices $j$, and [F13] gives $\langle b_0,b_0\rangle=1$ for the returned padding. The label factor is $|e_a\rangle\langle e_a|$ by [F11]. Thus, after canonical factor permutation, the label-resolved branch operator is $$\left(\sum_j(S_aM_{a,j}\otimes I_R)X(S_aM_{a,j}\otimes I_R)^\dagger\right)\otimes|e_a\rangle\langle e_a| =(S_a\otimes I_R)\mathcal I_a^{(R)}(X)(S_a^\dagger\otimes I_R)\otimes|e_a\rangle\langle e_a|.$$ This equals $\mathcal J_a^{(R)}(X)\otimes|e_a\rangle\langle e_a|$ by step 2.1 and step 2.2 and [F6]. Taking the partial trace of the label factor gives exactly $\mathcal J_a^{(R)}(X)$ because $e_a$ is unit by [F13]. [step 1.1, step 2.1, step 2.2, step 1.2, F1, F5, F6, F8, F11, F13, algebra]

4.1 Taking traces of equal branch operators gives the same outcome probabilities. Division gives the same conditional operator only when the shared branch weight is positive; when it is zero both descriptions assign $\bot$ by [F9]. Equality for arbitrary $X$ on $H\otimes R$ preserves all reference correlations. The finite-dimensional operator construction asserts no additional implementation or cost. [given, step 3.1, F9, algebra] ∎

