---
id: thm-qa-13-iterative-likelihood-query-count
kind: theorem
title: "Exact query count for the finite-grid iterative estimator"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-13-iterative-likelihood-amplitude-estimation
  - def-qa-12-prepared-success-subspace
  - def-qa-quantum-query-complexity
  - def-qa-13-amplitude-estimation-task
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
## Statement

Across the finite-grid schedule with $K\ge1$ and $S\ge1$, forward $A$ calls equal $S\sum_{k=0}^K(m_k+1)$, inverse $A^*$ calls equal $S\sum_{k=0}^K m_k$, and both zero-input reflections and good-predicate reflections equal $S\sum_{k=0}^K m_k$. Thus the total number of $A/A^*$ calls is $S\sum_{k=0}^K(2m_k+1)=S(1+\sum_{k=1}^K(2^k+1))=O(S2^K)$. This count gives no finite-sample success guarantee.

## Facts & Assumptions

**Given:** The finite-grid iterative schedule and its explicitly supplied and charged prepared-success-subspace access contract.

[F1] Stage $k$ has $S$ shots and uses $m_k$ Grover iterates after one fresh $A$ preparation ([[alg-qa-13-iterative-likelihood-amplitude-estimation]]).

[F2] The signed iterate is $Q=-AS_0A^*S_{\rm good}$, and the matching prepared-success-subspace contract supplies and charges one call to each of $A,A^*,S_0,S_{\rm good}$ per uncontrolled iterate ([[def-qa-13-amplitude-estimation-task]], [[def-qa-12-prepared-success-subspace]]).

[F3] The query model counts these oracle uses separately from ordinary gates ([[def-qa-quantum-query-complexity]]).

## Proof

1.1 A shot in stage $k$ uses one initial $A$ and then $m_k$ iterates. Each iterate contributes one more $A$, one $A^*$, one zero-input reflection, and one good reflection by [F2]. Therefore the per-stage counts are respectively $S(m_k+1)$, $Sm_k$, $Sm_k$, and $Sm_k$. [given, F1, F2, algebra]

2.1 Summing over $k=0,\ldots,K$ gives the first four formulas. Since $m_0=0$ and $m_k=2^{k-1}$ for $k\ge1$, $2m_k+1=2^k+1$ for $k\ge1$, yielding the stated total. The geometric sum is $O(2^K)$, so the total is $O(S2^K)$. [F1, F3, step 1.1, algebra]

3.1 The call totals established in steps 1.1 and 2.1 only tally explicitly invoked queries. By [F1], the analyzed procedure is a finite-grid likelihood schedule with no finite-sample success guarantee; [F3] counts its declared query actions but supplies no probability or approximation-error bound. Thus this resource count establishes no success theorem. [given, F1, F3, step 1.1, step 2.1] ∎

