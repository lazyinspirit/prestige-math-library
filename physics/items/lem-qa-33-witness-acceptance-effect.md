---
id: lem-qa-33-witness-acceptance-effect
kind: lemma
title: A finite verifier induces an effect on its witness
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-33-witness-verifier-interface
  - def-qc-povm-and-outcome-law
  - thm-qc-povm-probabilities-normalize
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - thm-trace-of-ab-equals-trace-of-ba
  - def-qc-density-operator
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite matrix identities and unitary compression.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity"
      url: https://arxiv.org/pdf/0804.3401
      locator: §V.1, QMA verifier definition, PDF pp. 18–19
    - title: "John Watrous, The Theory of Quantum Information"
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: §§2.1–2.3, density operators and POVM outcome law
---

## Statement

For every verifier interface of [[def-qa-33-witness-verifier-interface]], the compression $E_x=J_x^*U_n^*P_xU_nJ_x$ is a positive contraction on $W_n$. For every witness density operator $\rho$, its terminal acceptance probability, summed over every unmeasured wire, equals $\operatorname{Tr}(E_x\rho)\in[0,1]$.

## Facts & Assumptions

**Given:** The finite input and witness registers and zero-initialized workspace, circuit unitary $U_n$, accepting output projection $P_x$, and witness embedding $J_x$.

[F1] [[def-qa-33-witness-verifier-interface]]: $J_x$ embeds $\psi$ as $|x\rangle\otimes\psi\otimes|0^{a(n)}\rangle$, $U_n$ is unitary, and $E_x=J_x^*U_n^*P_xU_nJ_x$.

[F2] [[thm-qc-partial-trace-characterization-and-basis-independence]]: $\operatorname{Tr}(\operatorname{Tr}_B R\,T)=\operatorname{Tr}(R(T\otimes I_B))$ for finite tensor factors.

[F3] [[thm-trace-of-ab-equals-trace-of-ba]]: the finite matrix trace satisfies $\operatorname{Tr}(AB)=\operatorname{Tr}(BA)$ for compatible rectangular matrices.

[F4] [[thm-qc-povm-probabilities-normalize]]: for a density operator and a finite POVM, its weights $\operatorname{Tr}(\rho E_a)$ are nonnegative and sum to one.

[F5] [[def-qc-povm-and-outcome-law]]: a finite POVM has positive effects summing to identity, and its outcome weight on $\rho$ is $\operatorname{Tr}(\rho E_a)$.

[F6] [[def-qc-partial-trace]]: the partial trace over a finite tensor factor is defined by summing equal-index matrix entries in the ordered product basis.

[F7] [[def-qc-density-operator]]: a density operator is nonnegative and has trace one on a nonzero finite-dimensional space.

## Proof

1.1 Put $Q=U_nJ_x$. The input basis vector and clean zero state are unit vectors, so $J_x$ is an isometry; $U_n$ is unitary, hence $Q^*Q=I$. Then $E_x=Q^*P_xQ$ and $I-E_x=Q^*(I-P_x)Q$. For every $v\in W_n$, $\langle E_xv,v\rangle=\langle P_xQv,Qv\rangle=\|P_xQv\|^2\ge0$, and $\langle(I-E_x)v,v\rangle=\|(I-P_x)Qv\|^2\ge0$. Therefore $0\le E_x\le I$. [given, F1, algebra]

2.1 For a density operator $\rho$, [F7] gives the state hypotheses for the two-outcome POVM $(E_x,I-E_x)$ defined in [F5]. Applying [F4] gives $\operatorname{Tr}(E_x\rho)\in[0,1]$. [step 1.1, F4, F5, F7]

3.1 The post-circuit state is $\sigma=U_n(J_x\rho J_x^*)U_n^*$. By [F6] and the partial-trace identity [F2], the probability of the accepting projection on the named output register equals $\operatorname{Tr}(P_x\sigma)$, where $P_x$ is the accepting projection tensored with identity on all unmeasured wires; [F5] gives this projective measurement outcome law. Cyclicity [F3] and finite matrix multiplication give $\operatorname{Tr}(P_xU_nJ_x\rho J_x^*U_n^*)=\operatorname{Tr}(J_x^*U_n^*P_xU_nJ_x\rho)=\operatorname{Tr}(E_x\rho)$. The projection $P_x$ sums the probabilities over all unmeasured basis strings, so this is the stated terminal acceptance probability. [given, F1, F2, F3, F5, F6, F7, algebra] ∎
