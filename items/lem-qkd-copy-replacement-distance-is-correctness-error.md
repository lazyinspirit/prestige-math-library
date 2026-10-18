---
id: lem-qkd-copy-replacement-distance-is-correctness-error
kind: lemma
title: Replacing Bob's key by a copy of Alice's costs the correctness error
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - lem-qkd-classical-key-copy-map-is-channel
  - lem-qkd-trace-norm-adds-over-classical-blocks
  - def-qc-density-operator
  - def-trace-of-an-endomorphism
  - def-qc-quantum-channel
  - def-qc-completely-positive-map
  - def-qc-trace-distance
  - def-qc-trace-norm
  - def-qc-register-and-computational-basis
  - thm-qc-trace-norm-unitary-invariance-and-positive-formula
  - thm-qc-trace-norm-duality-and-norm-properties
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite classical blocks and finite-dimensional trace norms.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christopher Portmann and Renato Renner, Cryptographic Security of Quantum Key Distribution (2014), §4.3, Theorem 4.1 proof
      url: https://arxiv.org/pdf/1409.3525
    - title: Joseph M. Renes, Quantum Information Theory, ETH Zürich lecture notes (HS2014; revised 4 February 2015), §8.3
      url: https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf
    - title: John Watrous, The Theory of Quantum Information (2018), Chapter 1, §1.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Statement

Let $\mathsf K,\mathsf T$ be finite nonempty alphabets and let $H_E$ be a nonzero finite-dimensional adversary space. Consider a normalized state classical in $A,B,T$,

$$\rho_{ABTE}=\sum_{a,b\in\mathsf K,\ t\in\mathsf T}|a,b,t\rangle\langle a,b,t|\otimes R_E^{a,b,t},$$

where each $R_E^{a,b,t}$ is nonnegative. Define Alice's $ATE$ marginal by

$$\rho_{ATE}:=\sum_{a,t}|a,t\rangle\langle a,t|\otimes\sum_bR_E^{a,b,t},$$

and let $\gamma_{ABTE}:=\mathcal C(\rho_{ATE})$ for the classical key-copy channel $\mathcal C$ of [[lem-qkd-classical-key-copy-map-is-channel]]. Then

$$D(\rho_{ABTE},\gamma_{ABTE})=\Pr[K_A\ne K_B]=\sum_{a\ne b,t}\operatorname{tr}(R_E^{a,b,t}).$$

## Facts & Assumptions

**Given:** The normalized finite block state in the Statement and its finite alphabets.

[F1] [[def-qc-density-operator]] and [[def-trace-of-an-endomorphism]]: a state is nonnegative with trace one, and trace is the sum of finite diagonal entries.

[F2] [[lem-qkd-classical-key-copy-map-is-channel]] and [[def-qc-quantum-channel]]: $\mathcal C$ is completely positive and trace-preserving and copies each classical $A$ block into the shared key block $(A,B)$; complete positivity includes positivity on states by [[def-qc-completely-positive-map]].

[F3] [[def-qc-trace-distance]]: for density operators, $D(X,Y)=\tfrac12\|X-Y\|_1$.

[F4] [[lem-qkd-trace-norm-adds-over-classical-blocks]]: the trace norm of a finite self-adjoint block-diagonal operator is the sum of the block trace norms.

[F5] [[thm-qc-trace-norm-unitary-invariance-and-positive-formula]]: for every nonnegative operator $P$, $\|P\|_1=\operatorname{tr}(P)$.

[F6] [[thm-qc-trace-norm-duality-and-norm-properties]]: the trace norm is homogeneous, in particular $\|-P\|_1=\|P\|_1$.

## Proof

1.1 The blocks of $\rho_{ATE}$ are the finite sums $\sum_bR_E^{a,b,t}$, so they are nonnegative. Their traces sum to the trace of $\rho_{ABTE}$ by [F1], hence to one; therefore $\rho_{ATE}$ is a density operator. Complete positivity and trace preservation [F2] show that $\gamma_{ABTE}=\mathcal C(\rho_{ATE})$ is also a density operator, as required for [F3]. [given, F1, F2, algebra]

2.1 By [F2], $\gamma_{ABTE}$ has block $\sum_bR_E^{a,b,t}$ in each key-diagonal slot $(a,a,t)$ and zero in every slot $(a,b,t)$ with $b\ne a$. Thus $\rho_{ABTE}-\gamma_{ABTE}$ has block $R_E^{a,b,t}$ in each slot with $a\ne b$, block $-\sum_{b\ne a}R_E^{a,b,t}$ in slot $(a,a,t)$, and zero elsewhere. Each displayed nonzero block is self-adjoint because it is a positive block or its negative. [given, F2, step 1.1]

3.1 Apply [F4] to these orthogonal classical blocks. For $a\ne b$, [F5] gives $\|R_E^{a,b,t}\|_1=\operatorname{tr}(R_E^{a,b,t})$. The sum $\sum_{b\ne a}R_E^{a,b,t}$ is nonnegative, so [F5] and [F6] give $\|-\sum_{b\ne a}R_E^{a,b,t}\|_1=\sum_{b\ne a}\operatorname{tr}(R_E^{a,b,t})$. Therefore $\|\rho_{ABTE}-\gamma_{ABTE}\|_1=2\sum_{a\ne b,t}\operatorname{tr}(R_E^{a,b,t})$. Dividing by $2$ as in [F3] proves the equality with the mismatch probability. [given, F3, F4, F5, F6, step 1.1, step 2.1, algebra] ∎
