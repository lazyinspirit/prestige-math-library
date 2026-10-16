---
id: alg-qa-13-iterative-likelihood-amplitude-estimation
kind: algorithm
title: "Iterative no-QFT amplitude estimation by finite-grid likelihood"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-13-amplitude-estimation-task
  - def-qa-12-prepared-success-subspace
  - alg-qa-12-amplitude-amplification
  - lem-qa-13-grover-eigenphase-relation
  - def-qc-projective-measurement
  - def-qa-quantum-query-algorithm
  - lem-qa-13-real-cyclotomic-comparison
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Suzuki et al., Amplitude estimation without phase estimation, complete article, §§2–3.2"
      url: "https://arxiv.org/pdf/1904.10246"
---
## Definition

**Input.** An instance of the task [[def-qa-13-amplitude-estimation-task]] with the same $H,|0\rangle,A,\Pi_{\rm good}$ supplied under the prepared-success-subspace access contract of [[def-qa-12-prepared-success-subspace]]. That contract supplies and charges the uncontrolled calls to $A,A^*,S_0,S_{\rm good}$ and the good/bad projective measurement; no controlled access is used. Also require integers $K,S,J\ge1$. Set $m_0=0$ and $m_k=2^{k-1}$ for $1\le k\le K$. For each $k=0,\ldots,K$ and each of $S$ repetitions, prepare a fresh $A|0\rangle$, apply exactly $m_k$ signed Grover iterates using [[alg-qa-12-amplitude-amplification]], and measure the good/bad projective measurement; let $h_k$ be the number of good outcomes. For grid labels $j=0,\ldots,J$, put $\theta_j=j\pi/(2J)$ and
$$L_j=\prod_{k=0}^K\sin^{2h_k}((2m_k+1)\theta_j)\cos^{2(S-h_k)}((2m_k+1)\theta_j),$$
where a zero factor with exponent zero is $1$. Compare these finitely many real algebraic likelihoods exactly using [[lem-qa-13-real-cyclotomic-comparison]], choose the least $j$ attaining the maximum, and return $\sin^2\theta_j$. Each shot uses a fresh state and ordinary measurement. This is a finite-grid likelihood procedure, not a finite-sample $\epsilon,\delta$ guarantee; no such guarantee is asserted here.

## Facts & Assumptions

**Given:** The same supplied and charged uncontrolled access contract, integers $K,S,J\ge1$, and a fresh good/bad projective measurement at every shot.

[F1] The Grover iterate rotates the prepared state so that after $m$ iterates its good probability is $\sin^2((2m+1)\theta)$ ([[lem-qa-13-grover-eigenphase-relation]]).

[F2] The measurement outcomes are the two orthogonal good/bad projections ([[def-qc-projective-measurement]]).

[F3] The real likelihood values are finite cyclotomic algebraic numbers and admit terminating exact comparisons ([[lem-qa-13-real-cyclotomic-comparison]]).

[F4] Each oracle/state-preparation call is an explicit query resource ([[def-qa-quantum-query-algorithm]]).

[F5] The fixed-count amplification procedure applies exactly the declared number of signed $Q$ iterates and then the good/bad projective instrument, with no controlled-$A$ call ([[alg-qa-12-amplitude-amplification]]).

## Proof

1.1 Inductively applying the rotation matrix from [F1] to $\cos\theta B+\sin\theta G$ gives $Q^{m_k}\psi=\cos((2m_k+1)\theta)B+\sin((2m_k+1)\theta)G$. Its good projection therefore has squared norm $\sin^2((2m_k+1)\theta)$, so the listed good/bad measurement has the Bernoulli likelihood factors displayed in the definition. [given, F1, F2, algebra]

1.2 Set $\zeta=e^{\pi i/J}$, a primitive $2J$th root of unity. For $m=m_k$, $\sin^2((2m+1)\theta_j)=(2-\zeta^{(2m+1)j}-\zeta^{-(2m+1)j})/4$, and the squared cosine is one minus this value. Thus each $L_j$ is a real rational polynomial value at $\zeta$. The comparison procedure [F3] decides every pair exactly, including equality; the finite set $\{0,\ldots,J\}$ therefore has a maximizing label, and the least-label tie rule determines a unique output. [given, F3, algebra]

2.1 Every stage has finitely many shots and iterates because $K,S$ are finite. Fresh state preparations and measurements are part of the instructions, so no controlled $Q$ or QFT call is used. The likelihood selection is finite by step 1.2, but this argument establishes neither a sample-size error bound nor an $\epsilon,\delta$ guarantee. [given, F4, F5, step 1.1, step 1.2] ∎
