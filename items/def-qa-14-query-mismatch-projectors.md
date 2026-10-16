---
id: def-qa-14-query-mismatch-projectors
kind: definition
title: Query-register projectors and mismatch indicators
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-14-boolean-search-query-model
  - def-qc-register-and-computational-basis
  - def-qc-dirac-notation-conversion
  - thm-qc-computational-basis-orthonormal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; the argument uses only the finite orthonormal address basis.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.3 (PDF pp.7–9): query magnitudes at individual addresses."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§23.2, printed pp.110–114 (PDF pp.119–123): query-address projectors in the adversary method."
---

## Definition

For the address register of [[def-qa-14-boolean-search-query-model]], let $\Pi_j$ be the orthogonal projection onto address $j$, tensored with the identity on the response and work registers, for $0\le j<N$. For any finite input domain $D\subseteq\{0,1\}^N$, define the mismatch matrix $\Delta_j$ by $(\Delta_j)_{x,y}=1$ when $x_{j+1}\ne y_{j+1}$ and $0$ otherwise, for $x,y\in D$. This model has no separate skip-query address; if an implementation adjoins one, its basis projection is included as an additional orthogonal summand.

## Facts & Assumptions

**Given:** $N\ge1$, the finite address register with ordered computational basis, and the response/work tensor factors.

[F1] [[def-qa-14-boolean-search-query-model]]: the address basis is indexed by $0,\ldots,N-1$ and is orthonormal.

[F2] [[thm-qc-computational-basis-orthonormal]]: the declared register basis is an orthonormal basis.

[F3] [[def-qc-dirac-notation-conversion]]: $|i\rangle\langle i|$ is the rank-one map $v\mapsto\langle v,i\rangle i$ in the root inner-product convention.

## Verification

1.1 For each address $j$, $\Pi_j=|j\rangle\langle j|\otimes I$ is self-adjoint and idempotent by [F1]–[F3], so it is an orthogonal projection. If $j\ne k$, orthogonality gives $\Pi_j\Pi_k=0$. [given, F1, F2, F3, algebra]

2.1 The address vectors form a complete basis by [F1]–[F2], hence $\sum_{j=0}^{N-1}|j\rangle\langle j|=I$ and therefore $\sum_{j=0}^{N-1}\Pi_j=I$ on address, response, and work registers. If a no-query basis state is adjoined, the same basis expansion includes its projection and the search-address sum is then at most $I$. [F1, F2, F3, step 1.1, algebra] ∎
