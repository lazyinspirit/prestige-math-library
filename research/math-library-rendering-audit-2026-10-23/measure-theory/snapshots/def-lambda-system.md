---
id: def-lambda-system
kind: definition
title: "Lambda-systems, or Dynkin systems"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: [def-dynkin-system]
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
    - title: "A. Dembo, Probability Theory lecture notes, Definition 1.1.36"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. A **lambda-system**, or **Dynkin system**, on $X$ is a family
$\mathcal D\subseteq\mathcal P(X)$ such that:

1. $X\in\mathcal D$;
2. if $A,B\in\mathcal D$ and $A\subseteq B$, then $B\setminus A\in\mathcal D$;
3. if $A_0\subseteq A_1\subseteq\cdots$ and every $A_n\in\mathcal D$, then
   $\bigcup_{n\in\mathbb N}A_n\in\mathcal D$.
