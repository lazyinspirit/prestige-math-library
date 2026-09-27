---
id: thm-leaf-deletion-preserves-virality-of-a-finite-family
kind: theorem
title: "Deleting a leaf and a complementary leaf preserves virality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family, def-coleaf-of-a-graph, def-viral-property-for-a-finite-family]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Nguyen, Scott and Seymour, Induced subgraph density IV, Theorem 7.8"
      url: "https://arxiv.org/pdf/2307.06455"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $\mathcal F$ be a finite family of finite graphs, and let $H_1,H_2\in
\mathcal F$. Suppose $v_1$ is a leaf of $H_1$ and $v_2$ is a leaf of
$\overline{H_2}$. Put $H_i'=H_i-v_i$ for $i=1,2$. If

$$\mathcal F_1:=\{H_1'\}\cup(\mathcal F\setminus\{H_1\}),\qquad \mathcal F_2:=\{H_2'\}\cup(\mathcal F\setminus\{H_2\})$$

are viral, then $\mathcal F$ is viral.

## Facts & Assumptions

**Given:** The family and vertices in the statement.

[L1] A leaf of $\overline{H_2}$ is a co-leaf of $H_2$
([[def-coleaf-of-a-graph]]).

[L2] The finite-family leaf/co-leaf theorem proves virality from exactly
these two modified-family hypotheses
([[thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $v_2$ is a co-leaf of $H_2$. The modified families of [L2] for leaf $v_1$ and co-leaf $v_2$ are precisely $\mathcal F_1$ and $\mathcal F_2$. [given, L1, L2]

2.1 Both modified families are viral by hypothesis. Applying [L2] therefore gives virality of $\mathcal F$. [given, step 1.1, L2] ∎

## Source notes

The earlier version required two ordinary leaves. The cited Theorem 7.8
requires a leaf in $H_1$ and a leaf in $\overline{H_2}$; the bar on
$H_2$ is essential. The old two-leaf claim is superseded, not used.
