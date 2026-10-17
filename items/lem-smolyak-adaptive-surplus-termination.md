---
id: lem-smolyak-adaptive-surplus-termination
kind: lemma
title: Termination of finite-cap surplus selection
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 5
deps: [alg-dimension-adaptive-smolyak-surplus-selection, def-smolyak-cubature]
justified_by: []
proof_strategy: direct
axiom_use: None. The candidate set is finite and ties are settled by a fixed order.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §3"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
---

## Statement

Let $\Gamma$ be the finite downward-closed candidate cap of
[[alg-dimension-adaptive-smolyak-surplus-selection]]. The algorithm preserves a
downward-closed accepted set $\Lambda\subseteq\Gamma$ and terminates after at
most $|\Gamma|$ accepted index additions, returning one of its declared
statuses.

## Facts & Assumptions

**Given:** The finite cap $\Gamma$, a finite evaluation budget, and the procedure of [[alg-dimension-adaptive-smolyak-surplus-selection]].

[F1] [[alg-dimension-adaptive-smolyak-surplus-selection]]: if the baseline node count exceeds the budget, the procedure returns `budget-too-small` with empty $\Lambda$ and no sampled nodes; otherwise the initial accepted set is $\{0\}$ and its admissible frontier is processed; an index is admitted only after every immediate predecessor is already accepted; accepted, active, and budget-uncomputed candidates are recorded so they are not processed twice; each nonterminal loop removes one selected index from the active set, accepts it, and processes newly admissible neighbors, or returns a status.

[F2] [[def-smolyak-cubature]]: a multi-index set is downward closed when it contains each immediate predecessor of each positive coordinate index.

## Proof

1.1 If the baseline node count exceeds the budget, the procedure returns immediately with empty $\Lambda$, which is vacuously downward closed. Otherwise the initial set $\{0\}$ is downward closed. Assume the current $\Lambda$ is downward closed and the algorithm admits $\ell$. For any $\mu\le\ell$ coordinatewise with $\mu\ne\ell$, choose $j$ with $\mu_j<\ell_j$. Then $\ell_j>0$, so admissibility gives $\ell-e_j\in\Lambda$, and $\mu\le\ell-e_j$; downward closure gives $\mu\in\Lambda$. Thus $\Lambda\cup\{\ell\}$ is downward closed, and induction over additions preserves the invariant. [given, F1, F2, construct]

2.1 Every accepted addition is a previously unaccepted element of finite $\Gamma$, and the procedure records each computed or budget-uncomputed candidate so it cannot be processed repeatedly. Each candidate's node set and detail expansion are finite. Hence there are at most $|\Gamma|$ additions and finitely many candidate inspections; when none remains computable the algorithm returns `budget-exhausted` or `frontier-exhausted`, while the undersized initial budget returns `budget-too-small`. [given, F1, step 1.1, algebra] ∎
