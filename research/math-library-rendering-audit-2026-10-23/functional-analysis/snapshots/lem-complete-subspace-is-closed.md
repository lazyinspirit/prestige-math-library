---
id: lem-complete-subspace-is-closed
kind: lemma
title: "A complete normed subspace is closed under countable choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-banach-space, def-normed-subspace, thm-complete-subspace-iff-closed, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: locally-repaired
    date: 2026-09-10
    scope: "Owner-authorized direction-specific choice propagation; no independent judge"
    delegated_by: owner
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

Assume countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).
Let $V$ be a normed space and let $W\subseteq V$ be a normed subspace. If $W$ is
complete for its restricted norm, then $W$ is closed in $V$.

## Facts & Assumptions

**Given:** A normed space $V$ and a normed subspace $W\subseteq V$.

[A1] Countable choice ([[def-countable-choice]]).

[F1] Completeness for the norm metric is the Banach-space condition ([[def-banach-space]]).

[L1] The normed-subspace metric is the ambient metric restricted to $W\times W$, and the inclusion is an isometric embedding ([[def-normed-subspace]]).

[L2] Under countable choice, a complete subspace of any metric space is closed in the ambient space ([[thm-complete-subspace-iff-closed]], claim 1). Its proof uses choice only to select, for each fixed adherent point, a sequence of points in the subspace from shrinking nonempty balls. It does not require completeness of the ambient space.

## Proof

**Proof technique:** direct.

1.1 By [L1], the metric on $W$ induced by the restricted norm is exactly the ambient norm metric restricted to $W$. [L1]

2.1 The hypothesis that $W$ is complete for its restricted norm therefore says that $W$ is complete as a metric subspace of $V$. [step 1.1, F1, given]

3.1 Apply [L2] under [A1]. For each fixed point in the closure, [A1] supplies the approximating sequence; completeness and uniqueness of its ambient limit then put that point in $W$. Thus $W$ is closed in $V$. No simultaneous selection of sequences for all closure points is required. [step 2.1, A1, L2] ∎
