---
id: thm-canonical-image-of-james-space-has-codimension-one
kind: theorem
title: "The canonical image of James space has codimension one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, lem-james-space-dual-and-bidual-identification, def-reflexive-banach-space]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Theorem 2.81, Step 6, printed p.106"
pipeline_run: phase-2-next-18
---

## Statement

Assume Countable Choice. The canonical image of $J$ is a closed subspace of
codimension one in $J^{**}$. In particular, $J$ is not reflexive.

## Facts & Assumptions

[A1] Countable Choice holds ([[def-countable-choice]]).

[L1] Under Countable Choice, $J^{**}$ is isometrically $J\oplus\mathbb R\mathbf1$, and the canonical image is the zero-constant summand ([[lem-james-space-dual-and-bidual-identification]]).

[L2] Reflexivity means surjectivity of the canonical map into the bidual ([[def-reflexive-banach-space]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 By [A1] and [L1], the quotient of $J^{**}$ by its canonical $J$ summand is [given, A1, L1]
identified by $x+\lambda\mathbf1\mapsto\lambda$ with $\mathbb R$. The scalar $\lambda=\lim_nz_n$ satisfies $|\lambda|\le\|z\|_{J^{**}}$ because singleton endpoint variations are $|z_n|$, so the zero-constant summand is closed. [A1, L1]

2.1 The constant sequence $\mathbf1$ has bidual norm one and is not in the [given, L2, L1, step 1.1]
canonical image, since elements of $J\subset c_0$ tend to zero. Thus the quotient is nonzero and exactly one-dimensional. The canonical map is not surjective, so [L2] says $J$ is not reflexive. [L1, L2, step 1.1] ∎
