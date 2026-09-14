---
id: thm-james-space-is-isometrically-isomorphic-to-its-bidual
kind: theorem
title: "James space is isometrically isomorphic to its bidual"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, lem-james-space-dual-and-bidual-identification]
justified_by: []
forward_refs: []
aliases: []
landmark: true
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
      locator: "Theorem 2.81, Step 7, printed p.106"
pipeline_run: phase-2-next-18
---

## Statement

Assume Countable Choice. The James space $J$ is linearly isometric to its
bidual $J^{**}$, although its canonical embedding is not onto.

## Facts & Assumptions

[A1] Countable Choice holds ([[def-countable-choice]]).

[L1] Under Countable Choice, $J^{**}$ is the max-of-cyclic-and-endpoint
variation sequence space, and every element is a constant plus an element of
$J$ ([[lem-james-space-dual-and-bidual-identification]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Define $T:J\to J^{**}$ by $(Tx)_n=x_{n+1}-x_1$ for $n\ge1$. It is linear. If $p=(1\le p_1<\cdots<p_k)$ is a positive tuple, direct substitution gives [given, L1, A1]

$$q_p(Tx)=q_{(p_1+1,\ldots,p_k+1)}(x),\qquad r_p(Tx)=q_{(1,p_1+1,\ldots,p_k+1)}(x).$$

Every tuple for $x$ either contains $1$ or, after shifting down, has one of
these two forms. Therefore [L1] gives $\|Tx\|_{J^{**}}=\|x\|_J$; in
particular $T$ is injective. [A1, L1, direct calculation]

2.1 Let $z\in J^{**}$ and set $\lambda=\lim_{n\to\infty}z_n$, supplied by [given, L1, step 1.1] [L1]. Define $x_1=-\lambda$ and $x_{n+1}=z_n-\lambda$ for $n\ge1$. Then $x_n\to0$, the identities in step 1.1 read backwards show $\|x\|_J=\|z\|_{J^{**}}<\infty$, and $Tx=z$. Thus $T$ is surjective and is a linear isometry. [L1, step 1.1]

3.1 This $T$ is not the canonical embedding: by [L1] the latter misses the [given, L1, step 2.1] nonzero constant summand. Hence isometric isomorphism does not make $J$ reflexive. [L1, step 1.1, 2.1] ∎