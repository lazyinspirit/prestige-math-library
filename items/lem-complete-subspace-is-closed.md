---
id: lem-complete-subspace-is-closed
kind: lemma
title: "A complete normed subspace is closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-banach-space, def-normed-subspace, thm-complete-subspace-iff-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Kyriakos Keremedis and Eliza Wajch, On densely complete metric spaces and extensions of uniformly continuous functions in ZF"
      url: "https://arxiv.org/pdf/1901.08709.pdf"
pipeline_run: frontier-27
---

## Statement

Let $V$ be a normed space and let $W\subseteq V$ be a normed subspace. If $W$ is
complete for its restricted norm, then $W$ is closed in $V$.

## Facts & Assumptions

**Given:** A normed space $V$ and a normed subspace $W\subseteq V$.

[L1] The normed-subspace metric is the ambient metric restricted to $W\times W$, and the inclusion is an isometric embedding ([[def-normed-subspace]]).

[L2] A complete subspace of any metric space is closed in the ambient space ([[thm-complete-subspace-iff-closed]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the metric on $W$ induced by the restricted norm is exactly the ambient norm metric restricted to $W$. [L1]

2.1 The hypothesis that $W$ is complete for its restricted norm therefore says that $W$ is complete as a metric subspace of $V$. [step 1.1, given]

3.1 Applying [L2] to that metric subspace shows that $W$ is closed in the ambient normed space $V$. [step 2.1, L2] ∎
