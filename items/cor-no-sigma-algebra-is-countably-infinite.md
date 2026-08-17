---
id: cor-no-sigma-algebra-is-countably-infinite
kind: corollary
title: "No sigma-algebra is countably infinite"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence, thm-cantor-powerset, thm-schroder-bernstein, def-countable, def-sigma-algebra]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Exercise 2.8"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

There is no countably infinite sigma-algebra.

## Facts & Assumptions

**Given:** A putative countably infinite sigma-algebra $\mathcal A$ on a set $X$.

[L1] Countably infinite means equinumerous with $\mathbb N$ ([[def-countable]]).

[L2] A sigma-algebra with an injective sequence of members contains pairwise disjoint nonempty members indexed by $\mathbb N$ ([[lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence]]).

[L3] A sigma-algebra is closed under countable unions ([[def-sigma-algebra]]).

[L4] There is no surjection $\mathbb N\to\mathcal P(\mathbb N)$ ([[thm-cantor-powerset]]), and injections both ways give a bijection ([[thm-schroder-bernstein]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $\mathcal A$ is countably infinite. By [L1] its bijective listing and [L2] give pairwise disjoint nonempty sets $D_n\in\mathcal A$. [assume-contra, L1, L2]

2.1 As in the preceding theorem, $S\mapsto\bigcup_{n\in S}D_n$ is an injection $\mathcal P(\mathbb N)\to\mathcal A$, using [L3] and disjointness. Composing with a bijection $\mathcal A\to\mathbb N$ gives an injection $\mathcal P(\mathbb N)\to\mathbb N$. [step 1.1, L1, L3]

3.1 The singleton map injects $\mathbb N$ into $\mathcal P(\mathbb N)$, so [L4] would give a bijection and hence a surjection $\mathbb N\to\mathcal P(\mathbb N)$, contradicting Cantor's theorem. Therefore no countably infinite sigma-algebra exists. [step 2.1, L4, discharge-contradiction] ∎
