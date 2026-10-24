---
id: def-monotone-class
kind: definition
title: "Monotone classes of sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Definition 2.9"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "A. Dembo, Probability Theory lecture notes, Definition 1.1.43"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. A **monotone class on $X$** is a family
$\mathcal M\subseteq\mathcal P(X)$ satisfying both closure conditions:

1. if $A_0\subseteq A_1\subseteq\cdots$ and every $A_n\in\mathcal M$, then
   $\bigcup_{n\in\mathbb N}A_n\in\mathcal M$;
2. if $A_0\supseteq A_1\supseteq\cdots$ and every $A_n\in\mathcal M$, then
   $\bigcap_{n\in\mathbb N}A_n\in\mathcal M$.

The sequences are indexed by $\mathbb N$ beginning at $0$.
