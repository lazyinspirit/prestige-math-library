---
id: cex-nrqmx-finite-matrix-ccr
kind: counterexample
domain: mathematics
title: Finite matrices cannot satisfy exact canonical commutation relations
status: published
origin: pipeline
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: Anthony W. Knapp, Advanced Real Analysis, Digital Second Edition, Chapter II, §5, trace-class definitions and cyclicity exercise, pp. 49–52 (the proof here is the explicit finite sum)
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
---

## Statement refuted

For every positive integer $d$ and every $\hbar>0$, there exist matrices $Q,P\in M_d(\mathbb C)$ such that $QP-PQ=i\hbar I_d$.

## Facts & Assumptions

**Given:** A positive integer $d$, $\hbar>0$, arbitrary complex $d\times d$ matrices $Q,P$, and $\operatorname{tr}(M):=\sum_{j=1}^dM_{jj}$ for $M\in M_d(\mathbb C)$.

[A1] The proposed pair, if it existed, would satisfy $QP-PQ=i\hbar I_d$.

## Counterexample

1.1 By the definition of matrix multiplication, $\operatorname{tr}(QP)=\sum_{j=1}^d\sum_{k=1}^dQ_{jk}P_{kj}$ and $\operatorname{tr}(PQ)=\sum_{j=1}^d\sum_{k=1}^dP_{jk}Q_{kj}$. Interchanging the finite indices $j,k$ in the second sum and commuting complex scalars makes the sums equal, so $\operatorname{tr}(QP-PQ)=0$. [given, algebra]

2.1 Taking the trace in [A1] gives $0=i\hbar\operatorname{tr}(I_d)=i\hbar d$, which is impossible because $d\ge1$ and $\hbar>0$. Therefore the proposed universal existence statement is false. [A1, step 1.1, algebra] ∎

## Remarks

This proof concerns bounded finite matrices. It does not differentiate a Weyl relation for unbounded generators or supply a domain argument for such a differentiation.
