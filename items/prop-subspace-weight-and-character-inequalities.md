---
id: prop-subspace-weight-and-character-inequalities
kind: proposition
title: "Under choice, for $Y\\subseteq X$, $w(Y)\\le w(X)$ and $\\chi(y,Y)\\le\\chi(y,X)$"
status: published
origin: session
deps: [def-weight-density-and-character, def-subspace-topology-top]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "D. H. Fremlin, Measure Theory, Chapter 5A", url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"}]}
pipeline_run: null
---
## Statement
Assuming choice, $Y\subseteq X$ implies $w(Y)\le w(X)$ and $\chi(y,Y)\le\chi(y,X)$ for $y\in Y$.
## Facts & Assumptions
**Given:** A subspace $Y\subseteq X$, a basis $\mathcal B$ of $X$ of cardinality $w(X)$, and a local base $\mathcal N_y$ at $y\in Y$ of cardinality $\chi(y,X)$.

[L1] In the subspace topology, the open subsets of $Y$ are the traces $U\cap Y$ of open subsets $U$ of $X$ ([[def-subspace-topology-top]]).

[L2] Weight is the least cardinality of a basis and local character is the least cardinality of a neighbourhood base at a point ([[def-weight-density-and-character]]).
## Proof

**Proof technique:** direct.

1.1 The family $\{B\cap Y:B\in\mathcal B\}$ is a basis of $Y$ by [L1] and has cardinality at most $|\mathcal B|=w(X)$. [L1]

1.2 The family $\{N\cap Y:N\in\mathcal N_y\}$ is a local base at $y$ in $Y$ by [L1] and has cardinality at most $|\mathcal N_y|=\chi(y,X)$. [L1]

2.1 Applying the two minima in [L2] to the families of steps 1.1 and 1.2 yields $w(Y)\le w(X)$ and $\chi(y,Y)\le\chi(y,X)$. [step 1.1, step 1.2, L2] ∎
