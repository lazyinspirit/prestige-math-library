---
id: lem-qa-32-simon-function-register-instrument
kind: lemma
title: Computational-basis instruments and conditional states on two registers
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 6
deps:
  - def-qc-instrument-and-conditional-state
  - def-qc-completely-positive-map
  - def-qc-density-operator
  - def-qc-dirac-notation-conversion
  - def-non-negative-and-positive-operator
  - def-trace-of-an-endomorphism
  - prop-trace-is-linear
  - thm-trace-of-ab-equals-trace-of-ba
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
proof_strategy: direct
axiom_use: "None; all outcome sets, registers, and sums are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Section 2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 3, Section 3.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $A,B$ be nonzero finite-dimensional registers with ordered orthonormal bases $(e_a)_{a\in\Lambda}$ and $(g_b)_{b\in\Gamma}$. Define $P_a e_{a'}=\delta_{a,a'}e_a$ and $Q_b g_{b'}=\delta_{b,b'}g_b$; tensor products of these maps use [[def-qc-tensor-map]]. The maps

$$ \mathcal I_a(R)=(P_a\otimes I_B)R(P_a\otimes I_B),\qquad \mathcal J_b(R)=(I_A\otimes Q_b)R(I_A\otimes Q_b) $$

form finite instruments on $A\otimes B$. If $\psi=\sum_{a,b}c_{a,b}e_a\otimes g_b$ is a unit vector, then their outcome probabilities are

$$ p_A(a)=\sum_b|c_{a,b}|^2,\qquad p_B(b)=\sum_a|c_{a,b}|^2. $$

For a positive-probability outcome, the conditional state is the rank-one density operator on the normalized projected vector. This applies to measuring either register of the Simon state after its coherent XOR query.

## Facts & Assumptions

**Given:** Two nonzero finite registers, their ordered orthonormal bases, and a unit vector on their tensor product. Verify both measurement instruments and their branch laws.

[F1] [[def-qc-instrument-and-conditional-state]]: a finite instrument has complex-linear completely positive branch maps and satisfies $\sum_a\operatorname{tr}(\mathcal I_a(R))=\operatorname{tr}(R)$ for every input operator; positive-probability conditional states are $\mathcal I_a(\rho)/\operatorname{tr}(\mathcal I_a(\rho))$.

[F2] [[def-qc-completely-positive-map]]: complete positivity requires every finite ancilla amplification of each branch map to preserve nonnegative operators.

[F3] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

[F4] [[thm-qc-computational-basis-orthonormal]] and [[lem-qc-tensor-product-basis-and-dimension]]: the ordered product basis is orthonormal.

[F5] [[thm-trace-of-ab-equals-trace-of-ba]] and [[def-trace-of-an-endomorphism]]: finite-dimensional trace is basis-independent and obeys the cyclic identity for compatible matrices.

[F6] [[def-qc-density-operator]]: a density operator is nonnegative and has trace one.

[F7] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle v|$ denotes the rank-one map $w\mapsto\langle w,v\rangle_{\rm root}u$; in orthonormal coordinates its matrix is $u v^\dagger$.

[F8] [[def-qc-tensor-map]]: a tensor map acts factorwise on elementary tensors and extends linearly; an identity factor leaves its coordinate unchanged.

## Proof

1.1 Each basis projection $P_a$ and $Q_b$ is diagonal with entries $0$ or $1$, hence self-adjoint and idempotent; distinct projections in each family are orthogonal and each family sums to the identity. By [F8], their lifted maps $P_a\otimes I_B$ and $I_A\otimes Q_b$ are self-adjoint idempotents, and each lifted family sums to $I_{A\otimes B}$. [given, F4, F8, construct]

1.2 The product basis $(e_a\otimes g_b)_{a,b}$ is orthonormal by [F4]. Therefore the coordinates of $\psi$ satisfy $\sum_{a,b}|c_{a,b}|^2=1$. By [F7], $\rho=|\psi\rangle\langle\psi|$ has matrix $v v^\dagger$, so for every coordinate vector $u$ its quadratic form is $u^\dagger v v^\dagger u=|v^\dagger u|^2\ge0$ and its trace is $\sum_{a,b}|c_{a,b}|^2=1$. Hence $\rho$ is a density operator by [F6]. [given, F4, F6, F7, algebra]

2.1 Each branch map is complex-linear. For any finite reference register $R$, write an operator $Q$ on $(A\otimes B)\otimes R$ in the ancilla blocks of [F2]. Its amplified branch sends each block $Q_{ij}$ to $CQ_{ij}C$, so [F8] identifies the full block matrix as $Q'=(C\otimes I_R)Q(C\otimes I_R)$, where $C$ is the lifted projector from step 1.1. If $Q$ is nonnegative, then $Q'$ is self-adjoint and $\langle Q'u,u\rangle=\langle Q(C\otimes I_R)u,(C\otimes I_R)u\rangle\ge0$ for every $u$ by [F3], so every amplification preserves nonnegative operators. Thus each branch is completely positive by [F2]. [given, F2, F3, F8, step 1.1, algebra]

2.2 Write $v$ for the coordinate column of $\psi$ and $C$ for either lifted projector. By [F7], the corresponding branch is $Cvv^\dagger C=(Cv)(Cv)^\dagger$. For outcome $a$, $(P_a\otimes I_B)\psi=\sum_b c_{a,b}e_a\otimes g_b$, so the diagonal entry at each coordinate $(a,b)$ is $|c_{a,b}|^2$ and every other diagonal entry is zero; off-diagonal entries within the selected $a$-subspace can be nonzero. Its trace is $\sum_b|c_{a,b}|^2$. For outcome $b$, $(I_A\otimes Q_b)\psi=\sum_a c_{a,b}e_a\otimes g_b$, so the diagonal entry at each coordinate $(a,b)$ is $|c_{a,b}|^2$ and every other diagonal entry is zero; off-diagonal entries within the selected $b$-subspace can be nonzero. Its trace is $\sum_a|c_{a,b}|^2$. These traces are the asserted probabilities by [F1]. [F1, F4, F5, F7, step 1.1, step 1.2, algebra]

3.1 For every operator $R$, cyclicity of trace and idempotence give $\sum_a\operatorname{tr}((P_a\otimes I_B)R(P_a\otimes I_B)) =\operatorname{tr}\!\left(R\sum_a(P_a\otimes I_B)\right) =\operatorname{tr}(R).$ The same calculation gives $\sum_b\operatorname{tr}((I_A\otimes Q_b)R(I_A\otimes Q_b))=\operatorname{tr}(R)$. Together with step 2.1 these are the finite-instrument conditions of [F1]. [F1, F5, step 1.1, step 2.1, algebra]

4.1 If a branch vector $w=C\psi$ has positive probability $p=\sum_i|w_i|^2$ from step 2.2, its conditional operator in [F1] is $|(w/\sqrt p)\rangle\langle(w/\sqrt p)|$. Its coordinate quadratic form is nonnegative and its trace is $\sum_i|w_i|^2/p=1$, so it is a density operator by [F6]–[F7]; a zero-probability branch has no conditional state by [F1]. [F1, F6, F7, step 2.2, algebra] ∎
