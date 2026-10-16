---
id: lem-qa-35-smp-prior-message-decomposition
kind: lemma
title: "Conditioning on a private message separates average acceptance"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: ["def-qa-35-finite-probability-entropy-and-stochastic-matrices"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ilan Newman and Mario Szegedy, Public vs. Private Coin Flips in One Round Communication Games"
      url: https://dl.acm.org/doi/10.1145/237814.238004
      locator: "§4.1–4.2, PDF pp.4–9, matrix packing theorem and complete proof."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Statement

Let A,B be N×m row-stochastic matrices, M∈[0,1]^{m×m}, and let C=AMBᵀ satisfy C_xx≥0.99 and C_xy≤0.01 for x≠y. For every probability row vector D with ||D||₂²≤0.01 there are weights q_j and probability rows D_j with D=Σ_jq_jD_j such that, for rows X_j=(M_ij)_{i=1}^m (the transposes of the columns of M), Σ_j q_j(DA)X_jᵀ≤0.02 and Σ_jq_j(D_jA)X_jᵀ≥0.99.

## Facts & Assumptions

**Given:** $N,m\ge1$, row-stochastic $A,B\in[0,1]^{N\times m}$, $M\in[0,1]^{m\times m}$, and $C=AMB^{\mathsf T}$ with $C_{xx}\ge0.99$ and $C_{xy}\le0.01$ when $x\ne y$. Let $D$ be a probability row vector with $\|D\|_2^2\le0.01$.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: A matrix $A\in[0,1]^{N\times m}$ is row-stochastic when each row sums to one.

## Proof

**Proof technique:** direct.

1.1 For each message index $j$, set $q_j=\sum_xD_xB_{xj}$. If $q_j>0$, put $D^{(j)}_x=D_xB_{xj}/q_j$; if $q_j=0$, put $D^{(j)}=D$. Then each $D^{(j)}$ is a probability vector, $\sum_jq_j=1$, and $\sum_jq_jD^{(j)}=D$, because $\sum_jB_{xj}=1$; zero-weight terms contribute nothing. [given, F1, algebra, construct]

2.1 Let $X_j=(M_{ij})_{i=1}^m$ be the transpose of column $j$ of $M$. Reordering finite sums gives $\sum_jq_j(D^{(j)}A)X_j^{\mathsf T}=\sum_xD_x(AMB^{\mathsf T})_{xx}\ge0.99.$ Also $\sum_jq_j(DA)X_j^{\mathsf T}=DAMB^{\mathsf T}D^{\mathsf T}$. Write $C=I+E$. Since all entries of $C$ are probabilities, $|E_{xy}|\le0.01$; hence this last quantity is at most $\sum_xD_x^2+0.01(\sum_xD_x)^2\le0.02$. These are the required decomposition and acceptance bounds. [given, step 1.1, F1, algebra] ∎
