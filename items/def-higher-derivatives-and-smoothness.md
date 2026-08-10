---
id: def-higher-derivatives-and-smoothness
kind: definition
title: "Higher derivatives and the classes $C^k$ and $C^\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-derivative, def-continuity-real, def-one-sided-limits, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Definition

Let $I\subseteq\mathbb R$ be an interval and $f:I\to\mathbb R$. Put $f^{(0)}:=f$. Recursively, wherever $f^{(j)}$ is differentiable, put $f^{(j+1)}:=(f^{(j)})'$, with derivatives at endpoints understood in the one-sided sense fixed by [[def-derivative]] and [[def-one-sided-limits]].

For $k\in\mathbb N$, the function is **$k$-times differentiable** on $I$ if $f^{(j)}$ exists on $I$ for every $j\le k$. It is of class **$C^k$** on $I$ if these derivatives exist and every $f^{(j)}$, $0\le j\le k$, is continuous on $I$ ([[def-continuity-real]]). It is **smooth**, or $C^\infty$, if it is $C^k$ for every $k\in\mathbb N$.

Since $0\in\mathbb N$ ([[def-natural-numbers]]), $C^0$ means continuity. The definitions also give $C^{k+1}\subseteq C^k$. Existence of $f^{(k)}$ alone does not assert that $f^{(k)}$ is continuous.
