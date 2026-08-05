---
id: thm-basic-cardinal-function-inequalities
kind: theorem
title: "Under choice, $c(X)\\le d(X)\\le w(X)$ and $\\chi(X),L(X)\\le w(X)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-weight-density-and-character, def-lindelof-degree-and-cellularity, lem-weight-is-well-defined, lem-density-is-well-defined, lem-character-is-well-defined, lem-lindelof-degree-is-well-defined, lem-cellularity-is-well-defined, def-axiom-of-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---
## Statement

Assuming choice, $c(X)\le d(X)\le w(X)$ and $\chi(X),L(X)\le w(X)$.

## Facts & Assumptions

**Given:** A topological space $X$, the Axiom of Choice, a basis $\mathcal B$ of cardinality $w(X)$, and a dense subset $D$ of cardinality $d(X)$.

[L1] The raw definitions make $w(X)$ and $d(X)$ the least cardinalities of a basis and a dense subset, make $\chi(X)$ the supremum of the local characters, make $L(X)$ the least cardinal bounding subcovers, and make $c(X)$ the supremum of sizes of pairwise-disjoint nonempty open families ([[def-weight-density-and-character]], [[def-lindelof-degree-and-cellularity]]).

[A1] The Axiom of Choice chooses one member from each nonempty set in a family ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose one point from each nonempty $B\in\mathcal B$; the chosen set meets every nonempty open set because $\mathcal B$ is a basis, so it is dense and has cardinality at most $|\mathcal B|$. [A1, L1]

1.2 For each $x\in X$, the subfamily $\{B\in\mathcal B:x\in B\}$ is a local base at $x$ and has cardinality at most $|\mathcal B|$, so every local character, and therefore its supremum $\chi(X)$, is at most $w(X)$. [L1]

1.3 Given an open cover, choose for each $B\in\mathcal B$ that lies in a cover member one such member; these at most $|\mathcal B|$ chosen sets still cover $X$, so $L(X)\le w(X)$. [A1, L1]

1.4 For a pairwise-disjoint family $\mathcal U$ of nonempty open sets, choose a point of $D\cap U$ for each $U\in\mathcal U$; disjointness makes this assignment injective into $D$, so $|\mathcal U|\le d(X)$ and $c(X)\le d(X)$. [A1, L1]

2.1 Steps 1.1, 1.2, 1.3 and 1.4 give $c(X)\le d(X)\le w(X)$ and $\chi(X),L(X)\le w(X)$. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
