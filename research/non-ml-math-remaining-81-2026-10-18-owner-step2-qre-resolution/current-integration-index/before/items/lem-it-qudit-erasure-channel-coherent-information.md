---
id: lem-it-qudit-erasure-channel-coherent-information
kind: lemma
title: Coherent information of a qudit erasure channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-qudit-erasure-channel
  - lem-it-qudit-erasure-channel-complement-and-degradability
  - lem-it-quantum-coherent-information-complement-identity
  - lem-it-flagged-state-entropy-formula
  - def-it-von-neumann-entropy
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Proposition 8.17 and §8.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, Proposition 24.7.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---
## Statement

Let $\mathcal E_{d,\epsilon}$ be the finite-dimensional erasure channel with data dimension $d\ge1$ and erasure probability $\epsilon\in[0,1]$, with the complementary dilation in [[lem-it-qudit-erasure-channel-complement-and-degradability]]. For every input state $\rho$,

$$I_c(\rho,\mathcal E_{d,\epsilon})=(1-2\epsilon)S(\rho).$$

## Facts & Assumptions

**Given:** $d\ge1$, $\epsilon\in[0,1]$, and the input state $\rho$ in the Statement.

[F1] [[lem-it-qudit-erasure-channel-complement-and-degradability]]: the receiver state is $(1-\epsilon)\rho\oplus\epsilon|e_B\rangle\langle e_B|$ and the complementary state is $\epsilon\rho\oplus(1-\epsilon)|e_E\rangle\langle e_E|$ under the declared data-flag identifications.

[F2] [[lem-it-quantum-coherent-information-complement-identity]]: $I_c(\rho,\mathcal E)=S(\mathcal E(\rho))-S(\mathcal E^c(\rho))$.

[F3] [[lem-it-flagged-state-entropy-formula]]: $S(p\rho\oplus(1-p)|e\rangle\langle e|)=h(p)+pS(\rho)$, including $p=0,1$.

## Proof

1.1 Apply [F3] to the two states in [F1]. Their entropies are $h(\epsilon)+(1-\epsilon)S(\rho)$ and $h(1-\epsilon)+\epsilon S(\rho)$, respectively. By the definition of $h$ and the logarithm product and reciprocal laws in [[thm-natural-logarithm-laws]], $h(1-\epsilon)=h(\epsilon)$, including the endpoint convention $0\ln0=0$. [F1, F3, given, algebra]

2.1 Subtract the complementary-output entropy from the receiver-output entropy as in [F2]. The equal binary-entropy terms from step 1.1 cancel, leaving $(1-2\epsilon)S(\rho)$. The derivation is valid at $\epsilon=0,1$ by [F3], so no open-interval restriction is needed. [F2, F3, step 1.1, algebra, cases] ∎

