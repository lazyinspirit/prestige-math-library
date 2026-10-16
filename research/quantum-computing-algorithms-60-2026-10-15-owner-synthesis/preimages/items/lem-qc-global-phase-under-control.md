---
id: lem-qc-global-phase-under-control
kind: lemma
title: Global Phase Under Control
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps:
  - def-qc-controlled-unitary-access
  - def-qc-global-phase-equivalence
  - def-qc-density-operator
  - def-qc-povm-and-outcome-law
  - thm-qc-povm-probabilities-normalize
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---
## Statement

Let $H$ be a nonzero finite-dimensional target space, let $U$ be unitary on $H$, and let $|\lambda|=1$. In control-first order put
$$C(U)=\begin{pmatrix}I_H&0\\0&U\end{pmatrix},\qquad P_\lambda=\begin{pmatrix}1&0\\0&\lambda\end{pmatrix}.$$
Then $C(\lambda U)=(P_\lambda\otimes I_H)C(U)$. A scalar multiplying an entire output leaves every defined finite-POVM outcome law unchanged, whereas a scalar attached to a target matrix inside a control gives a phase on only the active control block; applying $P_{\overline\lambda}$ on the control restores the exact controlled matrix.

## Facts & Assumptions

**Given:** The target space and unitary, a unit scalar $\lambda$, control-first ordering, and—when considering the measurement clause—any density operator $\rho$ on the output space and any finite POVM $(E_a)_{a\in\Omega}$. An unconditional output scalar acts on the density by $(\lambda I)\rho(\lambda I)^*$.

[F1] [[def-qc-controlled-unitary-access]]: controlled access is the block operator $C(U)=\operatorname{diag}(I_H,U)$ on the control-first register.

[F2] [[def-qc-global-phase-equivalence]]: matrices are phase-equivalent when one is a scalar multiple of the other by a unit-modulus complex number; this is distinct from exact matrix equality.

[F3] [[def-qc-density-operator]]: a density operator is a nonnegative endomorphism of trace one on a nonzero finite-dimensional complex inner-product space.

[F4] [[def-qc-povm-and-outcome-law]]: for a density operator $\rho$ and a finite POVM $(E_a)$, the outcome weight is $p_\rho(a)=\operatorname{tr}(\rho E_a)$.

[F5] [[thm-qc-povm-probabilities-normalize]]: when its density and finite complete-effect-family hypotheses hold, the defined POVM outcome weights form a probability distribution.

## Proof


1.1 The diagonal blocks of $C(\lambda U)$ are $I_H$ and $\lambda U$. Multiplying the blocks of $(P_\lambda\otimes I_H)C(U)$ gives $I_H$ and $\lambda U$, so the two full matrices are equal exactly. [given, F1, algebra]

1.2 Under the whole-output update specified in the Given, $(\lambda I)\rho(\lambda I)^*=\lambda\overline\lambda\rho=\rho$ because $|\lambda|=1$. Hence the whole-output scalar leaves the density operator unchanged. [given, F3, algebra]

2.1 By [F2], $U$ and $\lambda U$ are phase-equivalent as target matrices. If $\lambda\ne1$, $P_\lambda$ is not a scalar multiple of the identity: its diagonal entries are $1$ and $\lambda$. Thus step 1.1 places a phase on only the active control block. Left multiplication by $P_{\overline\lambda}\otimes I_H$ changes the blocks back to $I_H,U$, so it restores $C(U)$ exactly. For $\lambda=1$ no correction is needed. [given, F2, step 1.1, algebra]

3.1 By [F4], each defined measurement weight is $\operatorname{tr}(\rho E_a)$. The equality of density operators in step 1.2 makes these weights identical for every outcome $a$. Under the normalized-law conclusion [F5], the two probability distributions therefore agree. The global scalar in step 1.2 preserves the whole measurement law, while the controlled target scalar in step 1.1 does not become a whole-output scalar. [F4, F5, step 1.2, step 1.1, algebra] ∎
