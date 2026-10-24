---
id: lem-open-subsets-of-r-are-countable-unions-of-rational-intervals
kind: lemma
title: "Every open subset of the real line is a countable union of open intervals with rational endpoints"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rational-points-and-boxes-in-rn, lem-subset-of-countable]
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Proposition 2.8"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

Every open set $U\subseteq\mathbb R$ is a countable union of intervals $(a,b)$
with $a,b\in\mathbb Q$ and $a<b$. For $U=\varnothing$, the indexing family is
empty.

## Facts & Assumptions

**Given:** An open subset $U$ of $\mathbb R$.

[L1] For $n\ge1$, the rational open boxes form a countable basis for the product topology on $\mathbb R^n$ ([[thm-rational-points-and-boxes-in-rn]]).

[L2] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal I_U$ be the family of rational open intervals contained in $U$. By [L1] with $n=1$, this is a subfamily of a countable family, so [L2] makes it at most countable. [L1, L2, construct]

2.1 Every member of $\mathcal I_U$ lies in $U$. Conversely, the basis clause of [L1] puts each $x\in U$ in some $I\in\mathcal I_U$. Thus $U=\bigcup\mathcal I_U$; when $U$ is empty both sides are empty. [step 1.1, L1] ∎
