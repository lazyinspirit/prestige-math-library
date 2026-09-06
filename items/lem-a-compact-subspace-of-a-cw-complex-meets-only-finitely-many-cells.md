---
id: lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells
kind: lemma
title: A compact subspace of a CW complex meets only finitely many cells
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cw-complex-with-closure-finiteness-and-weak-topology, prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition]
proof_strategy: contradiction
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Appendix A, Proposition A.1
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

Every compact subspace of a CW complex meets only finitely many open cells.

## Facts & Assumptions

**Given:** A compact $K\subseteq X$, where $X$ is a CW complex.

## Proof

**Proof technique:** contradiction.

1.1 If $K$ met infinitely many cells, choose $x_i\in K$ in pairwise distinct cells and put $S=\{x_i:i\geq1\}$. Induction over the skeleta shows that $S\cap X^n$ is closed in $X^n$: on the boundary of each characteristic $n$-disk this follows from the induction hypothesis, and the disk interior contains at most one $x_i$. The weak topology then closes the induction. [given, assume-contra]

2.1 The same argument applies to every subset of $S$, so $S$ is a closed discrete subspace of $K$. An infinite discrete space is not compact, contradicting compactness of the closed subspace $S\subseteq K$. [step 1.1, discharge-contradiction] ∎
