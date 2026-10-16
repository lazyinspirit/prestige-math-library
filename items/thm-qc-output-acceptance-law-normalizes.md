---
id: thm-qc-output-acceptance-law-normalizes
kind: theorem
title: "The partial-output acceptance law is a finite probability law"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qc-quantum-acceptance-probability
  - def-qc-promise-computation-model
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - def-qc-povm-and-outcome-law
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - def-finite-probability-space-and-event
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-bessel-inequality-and-finite-parseval-identity
  - def-real-and-complex-inner-product-space
  - def-trace-of-an-endomorphism
  - def-matrix-product-and-identity-matrix
  - def-linear-isometry-and-orthogonal-or-unitary-operator
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Sections III.2 and IV.1"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For every finite promise computation, every length $n$, and every classical input $x\in\{0,1\}^n$, the output weights $p_{C_n}(z\mid x)$ from [[def-qc-quantum-acceptance-probability]] are nonnegative and sum to one over $z\in\{0,1\}^{|O_n|}$. The acceptance probability is the probability of the event $\{z:A_n(x,z)=1\}$, lies in $[0,1]$, and agrees with the finite computational-basis POVM outcome law on the named output register.

## Facts & Assumptions

**Given:** A length-$n$ finite promise computation, an input $x\in\{0,1\}^n$, its unitary circuit denotation, and its ordered tuple $O_n$ of distinct output wires.

[F1] [[def-qc-promise-computation-model]]: the input is the ordered computational-basis vector $|x\rangle$ with zero-initialized auxiliary wires; only the named output wires are measured, and the total predicate $A_n(x,z)$ determines acceptance.

[F2] [[def-qc-quantum-acceptance-probability]]: after moving the named wires to the front, $p_{C_n}(z\mid x)$ is the finite sum of $|\langle P_{O_n}\psi_x,e_{z,w}\rangle_{\rm root}|^2$ over every unmeasured string $w$.

[F3] [[def-qc-register-and-computational-basis]] and [[thm-qc-computational-basis-orthonormal]]: each finite qubit register has its specified ordered computational basis, which is orthonormal; the zero-qubit register is the one-dimensional space $\mathbb C$ with basis $\{1\}$.

[F4] [[def-qc-tensor-register-and-permutation]]: the ordered product basis is orthonormal, and a wire permutation sends that basis bijectively to the basis in the reordered factors.

[F5] [[thm-bessel-inequality-and-finite-parseval-identity]]: in a finite orthonormal basis, the squared norm is the sum of squared coordinate moduli and each coordinate is the root inner product with its basis vector.

[F6] [[def-real-and-complex-inner-product-space]]: the root inner product is linear in its first argument and conjugate-linear in its second.

[F7] [[def-qc-povm-and-outcome-law]]: its outcome-law formula applies to a density operator on a nonzero finite-dimensional complex inner-product space, with weights $\operatorname{tr}(\rho E_a)$.

[F8] [[def-qc-povm-and-outcome-law]]: for a finite POVM $(E_a)$ and a density operator $\rho$, the outcome weight is $\operatorname{tr}(\rho E_a)$.

[F9] [[def-qc-partial-trace]]: in ordered product bases, $(\operatorname{Tr}_W\rho)_{z,z'}=\sum_w\rho_{(z,w),(z',w)}$.

[F10] [[thm-qc-partial-trace-characterization-and-basis-independence]]: $\operatorname{tr}((\operatorname{Tr}_W\rho)T)=\operatorname{tr}(\rho(T\otimes I_W))$ for every output-register endomorphism $T$.

[F11] [[def-trace-of-an-endomorphism]]: in any ordered basis, the trace is the sum of the diagonal entries.

[F12] [[def-matrix-product-and-identity-matrix]]: matrix multiplication is the finite row-by-column sum.

[F13] [[def-finite-probability-space-and-event]]: nonnegative weights on a finite outcome set that sum to one define a probability space, and each subset is an event whose probability is the sum of its weights.

[A1] [[def-qc-circuit-syntax-and-register-order]] specifies distinct ordered gate supports and disjoint-support layers on the complete register. [[def-qc-circuit-denotational-semantics]] proves that their chronological product is a unitary on that complete ordered register, including the empty-circuit identity.

## Proof


1.1 Write $\psi_x=U_{C_n}(|x\rangle\otimes|0^{a(n)}\rangle)$ and $\varphi=P_{O_n}\psi_x$. The input and zero-auxiliary vector has norm one by the computational-basis orthonormality in [F3]. By [A1] the circuit denotation is unitary, so it preserves norm. The permutation in [F4] bijects an orthonormal product basis; expanding in that basis and applying [F5] shows that it also preserves norm. Hence $\|\varphi\|^2=1$. [given, F1, F3, F4, F5, A1]

2.1 Expand $\varphi=\sum_{z,w}c_{z,w}e_{z,w}$ in the finite product basis, where $c_{z,w}=\langle\varphi,e_{z,w}\rangle_{\rm root}$ by [F5] and [F6]. Parseval gives $\sum_{z,w}|c_{z,w}|^2=1$. Each $p_{C_n}(z\mid x)=\sum_w|c_{z,w}|^2$ is nonnegative, and summing over $z$ gives one. By [F13] these weights form a finite probability space on the output strings. Its acceptance event is $\{z:A_n(x,z)=1\}$, so its probability is $p_{C_n}(x)$ and lies in $[0,1]$. [step 1.1, F2, F5, F6, F13, algebra]

3.1 Let $\rho$ be the endomorphism with coordinate matrix $vv^\dagger$, where $v=(c_{z,w})_{z,w}$. This matrix is Hermitian, and for every coordinate vector $y$, $\langle\rho y,y\rangle_{\rm root}=y^\dagger vv^\dagger y=|v^\dagger y|^2\ge0$. Also $\operatorname{tr}(\rho)=\sum_{z,w}|c_{z,w}|^2=1$ by [F11] and step 2.1. Thus $\rho$ is a density operator by [F7]. Put $\rho_O=\operatorname{Tr}_W\rho$. Its entries are $\sum_w c_{z,w}\overline{c_{z',w}}$ by [F9], so $(\rho_O)_{z,z'}=\overline{(\rho_O)_{z',z}}$. For any output-register vector $u$, the root pairing gives $\langle\rho_Ou,u\rangle_{\rm root}=\sum_w|\sum_z\overline{c_{z,w}}u_z|^2\ge0$; its trace is $\sum_{z,w}|c_{z,w}|^2=1$. Therefore $\rho_O$ is a density operator, including when $O_n$ or $W_n$ is empty. [step 2.1, F6, F7, F9, F11, algebra]

4.1 For each output string $z$, let $P_z$ be the coordinate projection that fixes the output basis vector $e_z$ and annihilates every $e_{z'}$ with $z'\ne z$. The product basis in [F3] and [F4] makes these nonnegative orthogonal projections with $\sum_zP_z=I$. They form the finite computational-basis POVM. By [F8], [F10], [F11], and [F12], its outcome weight is $$\operatorname{tr}(\rho_OP_z)=\operatorname{tr}(\rho(P_z\otimes I_W))=\sum_w|c_{z,w}|^2=p_{C_n}(z\mid x),$$ where the middle equality is the diagonal trace in the product basis and [F2] gives the last equality. Summing over the accepting outputs identifies its event probability with $p_{C_n}(x)$. If $O_n$ is empty, its output set has the single empty string and $P_z=I_{\mathbb C}$; if $W_n$ is empty, the sum over $w$ has its single empty-string term. The same formulas cover both cases. [step 3.1, F2, F3, F4, F8, F10, F11, F12, algebra] ∎

