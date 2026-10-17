---
id: lem-locally-finite-unions-and-closures
kind: lemma
title: "Locally finite families remain locally finite after taking closures, closure commutes with their union, and a locally finite union of closed sets is closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cover-refinement-and-local-finiteness, thm-closure-characterisation-top, def-topological-space]
justified_by: []
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
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "S. Semmes, Topology notes, Sections 5.13–5.14 (Rice University)"
      url: "https://math.rice.edu/~semmes/math443b.pdf"
pipeline_run: null
---

## Statement

Let $\{A_i\}_{i\in I}$ be a locally finite family of subsets of a topological
space $X$. Then $\{\overline{A_i}\}_{i\in I}$ is locally finite and
$$\overline{\bigcup_{i\in I}A_i}=\bigcup_{i\in I}\overline{A_i}.$$
Consequently, a locally finite union of closed subsets of $X$ is closed.

## Facts & Assumptions

**Given:** A locally finite family $\{A_i\}_{i\in I}$ in a topological space $X$.

[F1] Local finiteness says that each point has a neighbourhood meeting only finitely many $A_i$ ([[def-cover-refinement-and-local-finiteness]]).

[L1] A point belongs to $\overline A$ exactly when every neighbourhood of it meets $A$, and $\overline A$ is the smallest closed superset of $A$ ([[thm-closure-characterisation-top]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and a neighbourhood $N$ of $x$ meeting only $A_{i_1},\ldots,A_{i_n}$. Choose an open neighbourhood $O$ of $x$ with $O\subseteq N$. If $O\cap\overline{A_j}\ne\varnothing$, choose $y\in O\cap\overline{A_j}$; the open neighbourhood $O$ of $y$ then meets $A_j$, so $N$ meets $A_j$ and $j\in\{i_1,\ldots,i_n\}$. [F1, L1]

1.2 The inclusion $\bigcup_i\overline{A_i}\subseteq\overline{\bigcup_iA_i}$ holds because each $\overline{A_i}$ is contained in every closed set containing $A_i$, in particular in $\overline{\bigcup_iA_i}$. [L1]

2.1 Thus $O$ meets only $\overline{A_{i_1}},\ldots,\overline{A_{i_n}}$, so the closed family is locally finite. [step 1.1, F1]

2.2 Let $x\in\overline{\bigcup_iA_i}$ and take $N$ as in step 1.1; if $x\notin\bigcup_i\overline{A_i}$, then for each $i_k$ an open neighbourhood of $x$ misses $A_{i_k}$, and its finite intersection with an open neighbourhood inside $N$ misses every $A_i$, contradicting the closure criterion. [step 1.1, L1]

3.1 Hence $\overline{\bigcup_iA_i}=\bigcup_i\overline{A_i}$ by steps 1.2 and 2.2; if every $A_i$ is closed, the right-hand side is $\bigcup_iA_i$, so that union is closed. [step 1.2, step 2.2, L1] ∎
