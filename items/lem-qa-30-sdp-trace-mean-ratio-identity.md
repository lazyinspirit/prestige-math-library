---
id: lem-qa-30-sdp-trace-mean-ratio-identity
kind: lemma
title: "Flagged trace ratio returns a Gibbs-state observable mean"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-30-sdp-reference-state-access
  - def-qc-register-and-computational-basis
  - def-qc-dirac-notation-conversion
  - thm-trace-of-ab-equals-trace-of-ba
  - prop-trace-is-linear
  - lem-qa-30-hermitian-product-trace-real
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joran van Apeldoorn et al., Quantum SDP-solvers: Better upper and lower bounds"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
---

## Statement

Let $G=G^*$ and $M=M^*$ be $d\times d$ matrices with $d\ge1$ and $\|M\|\le1$. Set $g=e^{-G/2}$, $B>0$, and $\rho_G=e^{-G}/\operatorname{tr}(e^{-G})$. Prepare $|\Phi_d\rangle$, apply a block whose top-left amplitude is $g/B$ to the first register, then a block whose squared top-left compression is $(I+M/2)/4$ to that register. Let $p_M$ be the probability that all work flags are zero. Let $p_0$ be the corresponding probability when $M=0$. Then $p_0>0$ and
$$\frac{p_M}{p_0}=1+\frac12\operatorname{tr}(M\rho_G).$$

## Facts & Assumptions

**Given:** The maximally entangled vectorization identity, trace cyclicity, and the finite positive square root for the observable block.

[F1] [[def-qa-30-sdp-reference-state-access]]: $|\Phi_d\rangle=d^{-1/2}\sum_i|i,i\rangle$.

[F2] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is cyclic for compatible matrices.

[F3] [[prop-trace-is-linear]]: trace is linear.

[F4] [[lem-qa-30-hermitian-product-trace-real]]: the trace ratio terms involving Hermitian matrices are real.

## Proof

**Proof technique:** direct.

1.1 For any $d\times d$ matrix $X$, direct expansion of [F1] gives $\langle\Phi_d|(X\otimes I)|\Phi_d\rangle_D=d^{-1}\sum_i\langle i|X|i\rangle_D=\operatorname{tr}(X)/d$. If $F$ is the second block's top-left amplitude, then $F^*F=(I+M/2)/4$. The composite success operator on the first register is $Fg/B$, so $p_M=\frac1{dB^2}\operatorname{tr}(gF^*Fg)=\frac1{4dB^2}\operatorname{tr}(e^{-G}(I+M/2)),$ where the second equality follows from [F2]. [given, F1, F2, algebra]

2.1 With $M=0$, step 1.1 gives $p_0=\operatorname{tr}(e^{-G})/(4dB^2)>0$, since every eigenvalue of $e^{-G}$ is strictly positive. Linearity [F3] and the definition of $\rho_G$ now give $p_M/p_0=1+\operatorname{tr}(e^{-G}M)/(2\operatorname{tr}(e^{-G}))=1+\frac12\operatorname{tr}(M\rho_G)$. The traces are real by [F4]. [given, F3, F4, step 1.1, algebra] ∎
