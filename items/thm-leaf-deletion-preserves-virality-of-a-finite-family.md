---
id: thm-leaf-deletion-preserves-virality-of-a-finite-family
kind: theorem
title: "Deleting a leaf from each of two forbidden graphs preserves virality"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-viral-property-for-a-finite-family, def-tree-forest-and-leaf]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. IV. New graphs with the Erdős-Hajnal property, Theorem 7.8"
      url: "https://arxiv.org/pdf/2307.06455"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a finite family of finite graphs, and let $H_1,H_2\in
\mathcal F$. For $i=1,2$, let $v_i$ be a leaf of $H_i$, and write
$H_i':=H_i\setminus\{v_i\}$. If

$$\mathcal F_1:=\{H_1'\}\cup(\mathcal F\setminus\{H_1\})$$

and

$$\mathcal F_2:=\{H_2'\}\cup(\mathcal F\setminus\{H_2\})$$

are both viral, then $\mathcal F$ is viral.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ of finite graphs, members $H_1,H_2\in\mathcal F$, and leaves $v_i\in V(H_i)$ for $i=1,2$.

[F1] The Nguyen-Scott-Seymour leaf-deletion theorem states exactly that, under these hypotheses, if the two modified families $\mathcal F_1$ and $\mathcal F_2$ are viral, then $\mathcal F$ is viral.

## Proof

**Proof technique:** direct.

1.1 Form the two modified families $\mathcal F_1$ and $\mathcal F_2$ by deleting the chosen leaves from $H_1$ and $H_2$. The hypothesis says that both families are viral. [given]

2.1 Applying [F1] to the data of step 1.1 gives that $\mathcal F$ is viral. [step 1.1, F1] ∎
