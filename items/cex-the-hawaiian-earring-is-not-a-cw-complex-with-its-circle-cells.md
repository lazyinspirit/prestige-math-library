---
id: cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells
kind: counterexample
title: The Hawaiian earring is not a CW complex with its punctured circles as cells
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cw-complex-with-closure-finiteness-and-weak-topology]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Appendix A
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement refuted

The Hawaiian earring is a CW complex with the common tangency point as its $0$-cell and each circle minus that point as an open $1$-cell.

## Counterexample

**Given:** The union in $\mathbb R^2$ of circles $C_n$ of radius $1/n$
centered at $(1/n,0)$, tangent at the origin.

**Proof technique:** direct.

1.1 For each $n\geq1$, take the explicit point $p_n=(1/n,1/n)$ in the proposed open cell $C_n\setminus\{0\}$, and put $S=\{p_n:n\geq1\}$. In the Euclidean subspace topology of the earring, $p_n\to0$, while $0\notin S$; therefore $S$ is not closed. [given]

2.1 If the proposed cells formed a CW complex, the closure of each $1$-cell would be its circle $C_n$, and the closure of the $0$-cell would be $\{0\}$. Each $C_n\cap S=\{p_n\}$ is closed in $C_n$, and $\{0\}\cap S=\varnothing$. The weak-topology condition of [[def-cw-complex-with-closure-finiteness-and-weak-topology]] would therefore make $S$ closed in the earring, contradicting step 1.1. Hence the proposed cell structure is not a CW complex. [step 1.1, given] ∎
