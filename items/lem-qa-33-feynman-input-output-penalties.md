---
id: lem-qa-33-feynman-input-output-penalties
kind: lemma
title: Input and output penalties on history states
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-33-feynman-kitaev-history-hamiltonian
  - def-qa-33-qma-promise-class
justified_by: []
proof_strategy: direct
axiom_use: None; the claims are finite orthogonal-block expansions.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §4, input/output terms, PDF pp. 11–13
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §4, PDF pp. 6–8
---

## Statement

Let $N=T+1$ and let $|\eta_\phi\rangle$ be the history of an arbitrary normalized initial computation state $\phi$ for [[def-qa-33-feynman-kitaev-history-hamiltonian]]. Let $N_{bad}$ be the number of initially clean ancilla bits equal to one, let $p_{bad}$ be the probability that the ancilla register is not all zero, and let $p_{rej}$ be the verifier rejection probability at time $T$. Then
$$\langle\eta_\phi|H_{in}|\eta_\phi\rangle=\mathbb E[N_{bad}]/N\ge p_{bad}/N,\qquad\langle\eta_\phi|H_{out}|\eta_\phi\rangle=p_{rej}.$$
Moreover, the squared norm removed by orthogonally projecting $|\eta_\phi\rangle$ onto $\ker(H_{in}+H_{out})$ is exactly $(p_{bad}+p_{rej})/N$: the input constraint removes the entire dirty-ancilla component at clock time zero, and the output constraint removes the reject component at clock time $T$. In particular, a clean-ancilla history with acceptance at least $1-\epsilon$ has zero input energy and output energy at most $\epsilon$.

## Facts & Assumptions

**Given:** The normalized history, the clean-ancilla input subspace, and the one-bit accept output convention.

[F1] [[def-qa-33-feynman-kitaev-history-hamiltonian]]: the history has equal squared clock amplitude $1/N$, $H_{in}$ checks dirty ancillas only at time zero, and $H_{out}$ has coefficient $N$ at time $T$.

[F2] [[def-qa-33-qma-promise-class]]: verifier acceptance and rejection are complementary terminal measurement probabilities.

## Proof

1.1 Expand the history in the orthogonal legal clock basis. In $H_{in}$ the projector $|0\rangle\langle0|_{C_1}$ is one exactly on $c_0$ and zero on $c_t$ for $t\ge1$. At $c_0$, the sum of ancilla projectors has expectation $\mathbb E[N_{bad}]$ in $\phi$; since $N_{bad}\ge1$ on the dirty subspace, this expectation is at least $p_{bad}$. The history clock weight is $1/N$, proving the input identity and inequality. [F1, algebra]

2.1 The output projector $|1\rangle\langle1|_{C_T}$ is one only on legal clock word $c_T$. The history weight there is $1/N$; multiplying by the explicit coefficient $N$ cancels it. The remaining computation state is $U_T\cdots U_1\phi$, whose reject-bit probability is $p_{rej}$ by [F2]. Thus the output identity holds. The kernel of $H_{in}+H_{out}$ imposes a zero-ancilla projector only at clock $c_0$ and the accept projector only at clock $c_T$; these clock sectors are orthogonal, so the removed squared norm is $(p_{bad}+p_{rej})/N$. For a clean ancilla $p_{bad}=0$ and every input penalty vanishes; acceptance at least $1-\epsilon$ gives $p_{rej}\le\epsilon$. [F1, F2, step 1.1, algebra] ∎
