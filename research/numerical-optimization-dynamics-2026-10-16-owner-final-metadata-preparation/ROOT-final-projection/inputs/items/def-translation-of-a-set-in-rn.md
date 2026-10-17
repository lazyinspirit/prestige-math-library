---
id: def-translation-of-a-set-in-rn
kind: definition
title: "Translation of a subset of $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Definition

Let $n\ge 1$, let $E\subseteq\mathbb R^n$, and let $a\in\mathbb R^n$ ([[def-euclidean-inner-product]]). The **translate** of $E$ by $a$ is

$$E+a:=\{x+a:x\in E\}.$$

Translation by $a$ is the bijection $\tau_a(x)=x+a$, whose inverse is $\tau_{-a}$. In particular, $\varnothing+a=\varnothing$.
