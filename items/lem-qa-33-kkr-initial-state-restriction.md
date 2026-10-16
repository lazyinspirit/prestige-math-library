---
id: lem-qa-33-kkr-initial-state-restriction
kind: lemma
title: KKR restriction to correctly initialized witness histories
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-33-feynman-kitaev-history-hamiltonian
  - lem-qa-33-kkr-two-qubit-propagation-restriction
  - lem-qa-33-projection-lemma
  - lem-qa-33-feynman-input-output-penalties
justified_by: []
proof_strategy: direct
axiom_use: None; the restriction is an explicit endpoint compression.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §5, Restriction 4 to initialized input, PDF pp. 16–18
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §4, input penalty and output energy, PDF pp. 11–13
---

## Statement

Fix an input-specific verifier circuit with only its witness unrestricted initially and all other work qubits in the checked zero-initialized set $A$. For $T\ge1$, use the history map and endpoint penalties of [[def-qa-33-feynman-kitaev-history-hamiltonian]]. Write $V=U_T\cdots U_1$, and let $S_{prop}$ be the span of all full correct-propagation histories for this circuit, identified isometrically with their initial computation vectors. When the padding hypotheses of [[lem-qa-33-kkr-two-qubit-propagation-restriction]] hold, this is the space obtained by that restriction. On $S_{prop}$, the compressed input term is
$$H_{in}|_{S_{prop}}=\frac1{T+1}\sum_{a\in A}|1\rangle\langle1|_a,$$
where $A$ is the checked zero-initialized workspace set, and the compressed output term is the transported reject projector $V^*(|0\rangle\langle0|_{out}\otimes I)V$. Thus the kernel of $H_{in}|S_{prop}$ consists of histories initialized with zero workspace. If $A\ne\varnothing$, its least positive eigenvalue is at least $1/(T+1)$; if $A=\varnothing$, the input term is zero and the restriction is immediate. If $K_{in}$ bounds the norm of the remaining output term, choose
$$J_{in}/(T+1)>2K_{in}+K_{in}^2/\epsilon_{in}.$$
Then the final projection-lemma error is below $\epsilon_{in}$. For an amplified verifier with YES acceptance at least $3/4$ and NO acceptance at most $1/4$, the compressed output energy is at most $1/4$ on YES and at least $3/4$ on NO.

## Facts & Assumptions

**Given:** The input-specific verifier and initial-vector identification in the Statement, correctly propagated histories, the input/output penalties, and an amplified verifier with the stated completeness and soundness.

[F1] [[lem-qa-33-kkr-two-qubit-propagation-restriction]] identifies its restricted space with full verifier histories under its stated padding hypotheses; no padding is needed for the endpoint calculation here.

[F2] [[lem-qa-33-projection-lemma]]: a penalty with gap $J$ changes the compressed minimum by at most $K_{in}^2/(J-2K_{in})$.

[F3] [[lem-qa-33-feynman-input-output-penalties]] gives input history energy $\mathbb E[N_{bad}]/(T+1)$ and output history energy equal to rejection probability.

[F4] [[def-qa-33-feynman-kitaev-history-hamiltonian]] defines the linear history map $R\phi=(T+1)^{-1/2}\sum_{t=0}^T V_t\phi\otimes|c_t\rangle$, where $V_0=I$ and $V_t=U_t\cdots U_1$, and the endpoint penalties used here.

## Proof

1.1 By [F4], orthogonal clock sectors give $R^*R=(T+1)^{-1}\sum_tV_t^*V_t=I$, so $R$ is an isometry onto $S_{prop}$. The clock factors in $H_{in}$ and $H_{out}$ select only times $0$ and $T$, respectively. Direct multiplication gives $R^*H_{in}R=(T+1)^{-1}\sum_{a\in A}|1\rangle\langle1|_a$ and $R^*H_{out}R=V^*(|0\rangle\langle0|_{out}\otimes I)V$, agreeing with the energy identities of [F3] and requiring no padding. Under the padding hypotheses, [F1] identifies this same image with the preceding KKR restriction space. The input compression has eigenvalues $r/(T+1)$, where $r$ counts workspace bits equal to one, so its kernel is exactly the zero-workspace subspace. If $A\ne\varnothing$, every positive eigenvalue is at least $1/(T+1)$; if $A=\varnothing$, the input operator is zero on all of $S_{prop}$. [F1, F3, F4, algebra]

2.1 If $A\ne\varnothing$, the weighted input penalty has nonzero gap $J_{in}/(T+1)$. Apply [F2] with the compressed output term as $H_1$ and this input penalty as $H_2$; the chosen inequality makes the correction strictly less than $\epsilon_{in}$. If $A=\varnothing$, the input penalty is zero, its kernel is all of $S_{prop}$, and no projection error is incurred. On the restricted kernel, [F3] identifies the least output energy with minimum rejection probability over witness states. Completeness $3/4$ gives energy at most $1/4$; soundness $1/4$ gives rejection at least $3/4$ for every clean witness, so the restricted NO minimum is at least $3/4$. [F2, F3, step 1.1, algebra] ∎
