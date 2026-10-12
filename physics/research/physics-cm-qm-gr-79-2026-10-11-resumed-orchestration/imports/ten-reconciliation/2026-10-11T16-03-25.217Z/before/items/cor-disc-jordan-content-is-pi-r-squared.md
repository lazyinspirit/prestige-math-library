---
id: cor-disc-jordan-content-is-pi-r-squared
kind: corollary
title: "A closed disc of radius $r\\ge0$ has Jordan content $\\pi r^2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-riemann-graph-area-equals-jordan-content, thm-disc-area-is-pi-r-squared, def-jordan-inner-and-outer-content]
justified_by: []
aliases: []
landmark: true
short: "$\\operatorname{cont}(D_r)=\\pi r^2$"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §§7.2–7.3"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
pipeline_run: null
---

## Statement

A closed disc of radius $r\ge0$ has Jordan content $\pi r^2$.

## Facts & Assumptions

**Given:** A real radius $r\ge0$ and the closed disc $D_r:=\{(x,y)\in\mathbb R^2:x^2+y^2\le r^2\}$.

[L1] For every $r>0$, the Riemann area of the closed disc of radius $r$ is $\pi r^2$ ([[thm-disc-area-is-pi-r-squared]]).

[L2] Every degenerate rectangle has Jordan content $0$ ([[def-jordan-inner-and-outer-content]]).

[L3] A region between continuous graphs is compact and Jordan measurable, and its graph area equals its Jordan content ([[prop-riemann-graph-area-equals-jordan-content]]).

## Proof

**Proof technique:** cases.

1.1 In the case $r=0$, the disc is the singleton $\{(0,0)\}=[(0,0),(0,0)]$, a degenerate rectangle, so [L2] gives $\operatorname{cont}(D_0)=0=\pi0^2$. [assume-case zero, L2]

1.2 In the case $r>0$, the disc is the region on $[-r,r]$ between the continuous graphs $y=-\sqrt{r^2-x^2}$ and $y=\sqrt{r^2-x^2}$; [L3] identifies its Jordan content with its Riemann graph area, which [L1] evaluates as $\pi r^2$. [assume-case pos, L1, L3]

2.1 The cases $r=0$ and $r>0$ exhaust $r\ge0$, and each gives $\operatorname{cont}(D_r)=\pi r^2$. [step 1.1, step 1.2, cases-exhaustive] ∎
