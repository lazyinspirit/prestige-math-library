---
id: lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells
kind: lemma
title: A compact subspace of a CW complex meets only finitely many cells
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cw-complex-with-closure-finiteness-and-weak-topology, prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition, def-axiom-of-choice]
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Appendix A, Proposition A.1
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Every compact subspace of a CW complex meets only finitely many open cells.

## Facts & Assumptions

**Given:** A compact $K\subseteq X$, where $X$ is a CW complex.

[A1] The Axiom of Choice supplies a choice function on the nonempty subsets of the set of cells meeting $K$, and a point in each chosen nonempty cell intersection ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** contradiction.

1.1 If $K$ met infinitely many cells, use [A1] recursively on the nonempty set of cells remaining after finitely many earlier choices, obtaining distinct met cells and points $x_i\in K$ in them. Put $S=\{x_i:i\geq1\}$. Induction over the skeleta shows that $S\cap X^n$ is closed in $X^n$: on the boundary of each characteristic $n$-disk this follows from the induction hypothesis, and the disk interior contains at most one $x_i$. The weak topology then closes the induction. [A1, given, assume-contra]

2.1 The same argument applies to every subset of $S$, so $S$ is a closed discrete subspace of $K$. An infinite discrete space is not compact, contradicting compactness of the closed subspace $S\subseteq K$. [step 1.1, discharge-contradiction] ∎
