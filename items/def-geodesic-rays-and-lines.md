---
id: "def-geodesic-rays-and-lines"
kind: "definition"
title: "Oriented geodesic rays, lines, parameters and tails"
status: "draft"
origin: "pipeline"
deps: ["def-geodesic-and-geodesic-metric-space"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §1.2 interval geodesics; §10.4 limit geodesics"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
---

## Definition

In a geodesic metric space ([[def-geodesic-and-geodesic-metric-space]]), an **oriented geodesic ray** is an isometric embedding $\rho:[0,\infty)\to X$. Its origin is $\rho(0)$, its parameter increases in the chosen orientation, and its $T$-tail is $\rho([T,\infty))$, for $T\ge0$.

An **oriented geodesic line** is an isometric embedding $\ell:\mathbb R\to X$. Its origin is $\ell(0)$ and its signed parameter increases in the chosen orientation. Its positive and negative $T$-tails are $\ell([T,\infty))$ and $\ell((-\infty,-T])$. Replacing $\ell(t)$ by $\ell(-t)$ reverses the orientation.

The maps include parameter and origin data; their images alone do not. Two rays have a **common tail** when $\rho([S,\infty))=\sigma([T,\infty))$ for some specified nonnegative $S,T$. Hausdorff distances between rays or lines always refer to their images.
