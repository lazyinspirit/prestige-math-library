---
id: def-continuous-real-functions-on-a-compact-metric-space
kind: definition
title: "The space $C(K,\\mathbb{R})$ of continuous real-valued functions on a nonempty compact metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-space, def-metric-continuity, def-metric-compactness, lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Definition

Let $(K,d)$ be a nonempty compact metric space
([[def-metric-compactness]]). Define

$$C(K,\mathbb{R}):=\{\,f\in\mathbb{R}^{K}:f:(K,d)\to(\mathbb{R},d_{\mathbb{R}})\text{ is continuous}\,\},$$

where $\mathbb{R}^{K}$ is the function space of [[def-function-space]] and
$d_{\mathbb{R}}(s,t)=|s-t|$ is the usual metric
([[lem-real-line-is-a-metric-space]], [[def-metric-continuity]]).

This definition introduces the set of continuous functions only. Boundedness
and the supremum metric are assertions to be proved, not clauses of the
definition.
