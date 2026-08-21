---
id: def-parallelogram-and-triangle-in-r2
kind: definition
title: "Parallelograms and triangles in $\\mathbb{R}^2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-translation-of-a-set-in-rn, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §7.3"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
pipeline_run: null
---

## Definition

For $p,v,w\in\mathbb R^2$ ([[def-euclidean-inner-product]]), the **closed parallelogram** with base point $p$ and spanning vectors $v,w$ is

$$P(p;v,w):=\{p+sv+tw:0\le s\le1,\ 0\le t\le1\}.$$

For $A,B,C\in\mathbb R^2$, the **closed triangle** with vertices $A,B,C$ is

$$T(A,B,C):=\{A+s(B-A)+t(C-A):s\ge0,\ t\ge0,\ s+t\le1\}.$$

These definitions include singular cases: a spanning vector may vanish, and vertices may be repeated or collinear. They also satisfy $P(p;v,w)=p+P(0;v,w)$ and $T(A,B,C)=A+T(0,B-A,C-A)$ in the notation of [[def-translation-of-a-set-in-rn]].
