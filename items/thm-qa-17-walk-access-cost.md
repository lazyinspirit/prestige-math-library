---
id: thm-qa-17-walk-access-cost
kind: theorem
title: "Exact row-preparation access count for one and two walk steps"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-17-walk-access-model
  - def-qa-17-szegedy-walk
  - thm-qa-17-discriminant-self-adjoint
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-circuit-cost-model
  - def-qc-dirac-notation-conversion
  - def-qc-tensor-register-and-permutation
  - prop-adjoint-algebra
  - thm-self-adjoint-idempotents-are-exactly-orthogonal-projections
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §18.2"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For a nonempty chain in the row-preparation implementation of [[def-qa-17-walk-access-model]], the full-workspace word $S V_P R_0 V_P^*$ restricts on the clean-work subspace to the logical one-reflection step $U=S(2TT^*-I)$. One such uncontrolled step uses exactly one call each to $V_P^*$ and $V_P$, one clean-state reflection $R_0$, and one swap $S$. The factorwise controlled implementation controls each constituent, including both row-preparation calls, $R_0$, and $S$; this count describes that implementation. A $W=U^2$ step uses exactly two such $U$ implementations. Query calls, gate counts, description bits, uniform-generation time, and precision are recorded as separate cost coordinates.

## Facts & Assumptions

**Given:** A nonempty finite row-stochastic kernel, the row-preparation unitary and its specified clean work state, the explicitly listed inverse and controlled capabilities, the clean-state reflection, and the swap implementation.

[F1] [[def-qa-17-walk-access-model]]: $V_P$ is unitary and sends each clean input $|x,0,0_W\rangle$ to $T|x\rangle\otimes|0_W\rangle$; $R_0=2(I_X\otimes|0,0_W\rangle\langle0,0_W|)-I$; the swap is $S$ on the first two registers and identity on work.

[F2] [[def-qa-17-szegedy-walk]]: the logical operators are $R_A=2TT^*-I$, $U=SR_A$, and $W=U^2$.

[F3] [[thm-qa-17-discriminant-self-adjoint]]: $T^*T=I$, so $T$ is an isometry and its row vectors form an orthonormal list.

[F4] [[def-qc-controlled-unitary-access]]: on a control-first register, $C(A)=\operatorname{diag}(I,A)$; products of such blocks implement the controlled product word.

[F5] [[def-qc-inverse-unitary-access]]: inverse access is the explicitly granted $V_P^*=V_P^{-1}$ operation, with its cost declared separately.

[F6] [[def-qc-circuit-cost-model]]: circuit-description, gate, depth, width, generator, oracle-query and precision costs are distinct coordinates, with inapplicable coordinates recorded as such.

[F7] [[def-qc-tensor-register-and-permutation]]: the ordered product basis is orthonormal and factor permutations act on that basis in the specified order.

[F8] [[prop-adjoint-algebra]]: adjoints reverse products, so $(TT^*)^*=TT^*$.

[F9] [[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]]: a self-adjoint idempotent is the orthogonal projection onto its range.

## Proof

1.1 By [F3], $T^*T=I$, so $\Pi:=TT^*$ is idempotent; [F8] gives $\Pi^*=\Pi$, and [F9] identifies it as the orthogonal projection onto $\operatorname{ran}T$ (it maps into $\operatorname{ran}T$ and fixes every $Tv$). Let $J:\mathbb C^X\to\mathbb C^X\otimes\mathbb C^X\otimes W$ send $|x\rangle$ to $|x,0,0_W\rangle$. The orthonormal product basis [F7] makes $J$ an isometry and gives $JJ^*=I_X\otimes|0,0_W\rangle\langle0,0_W|$. By [F1], $V_PJ=T\otimes|0_W\rangle$. Hence, using [F5] and unitarity of $V_P$,
$$V_PR_0V_P^*=2(V_PJ)(V_PJ)^*-I=2\bigl(TT^*\otimes|0_W\rangle\langle0_W|\bigr)-I.$$
For any logical state $h\in\mathbb C^{X\times X}$, this operator sends $h\otimes|0_W\rangle$ to $(2TT^*-I)h\otimes|0_W\rangle=R_Ah\otimes|0_W\rangle$. The extended swap sends $h\otimes|0_W\rangle$ to $Sh\otimes|0_W\rangle$. Thus the word $SV_PR_0V_P^*$ restricts to $SR_A=U$ and returns the work register to its clean state. [F1, F2, F3, F5, F7, F8, F9, algebra]

2.1 Reading $SV_PR_0V_P^*$ from right to left applies one $V_P^*$ call, one $R_0$, one $V_P$ call, and one swap. The inverse and forward preparation, reflection and swap costs are therefore each charged once in this implementation. [F1, F2, F5, step 1.1, algebra]

3.1 In the factorwise controlled implementation, replace each factor in step 2.1 by its control-first block. By [F4], their product is the controlled full word: the control-zero block is identity and the control-one block is $SV_PR_0V_P^*$. It uses controlled $V_P^*$, $R_0$, $V_P$, and $S$, with each declared cost charged separately; without one of these capabilities this particular construction is unavailable. [F1, F4, step 2.1, given]

4.1 By [F2], $W=U^2$ is two successive $U$ steps, and step 1.1 shows the work state is clean again after each step. Thus exactly two copies of the step counts in step 2.1 implement $W$. The resource coordinates remain separate by [F6]. [F2, F6, step 1.1, step 2.1, algebra] ∎
