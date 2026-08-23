---
id: lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero
kind: lemma
title: 'The boundary of a solid between continuous graphs over a compact Jordan base has content zero'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-solid-between-continuous-graphs-over-a-jordan-base, lem-product-of-content-zero-set-and-interval-has-content-zero, thm-graph-of-continuous-function-on-a-compact-set-has-content-zero, thm-jordan-boundary-criterion, def-null-and-content-zero-in-rn, thm-extreme-value-metric]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables, Theorem 3.1.9"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

Let $K$ be the solid of [[def-solid-between-continuous-graphs-over-a-jordan-base]]. The boundary of $K$ has content zero.

## Facts & Assumptions

**Given:** A compact Jordan set $D\subseteq\mathbb R^m$, continuous $\alpha,\beta:D\to\mathbb R$ with $\alpha\le\beta$, and $K:=\{(u,t):u\in D,\alpha(u)\le t\le\beta(u)\}$.

[F1] If $A\subseteq\mathbb R^m$ has content zero and $c\le d$, then $A\times[c,d]$ has content zero in $\mathbb R^{m+1}$ ([[lem-product-of-content-zero-set-and-interval-has-content-zero]]).

[F2] The graph of every continuous $f:C\to\mathbb R$ on a compact set $C\subseteq\mathbb R^m$ has content zero in $\mathbb R^{m+1}$ ([[thm-graph-of-continuous-function-on-a-compact-set-has-content-zero]]).

[F3] A metric-bounded set is Jordan measurable if and only if its boundary is null, equivalently has content zero ([[thm-jordan-boundary-criterion]]).

## Proof

**Proof technique:** direct.

1.1 If $D=\varnothing$, then $K$ and its boundary are empty. Otherwise the extreme-value theorem bounds both functions in one interval $[c,d]$. Any point of $\partial K$ either projects to $\partial D$, or projects to the interior of $D$ and lies on $t=\alpha(u)$ or $t=\beta(u)$; hence $\partial K\subseteq\operatorname{graph}(\alpha)\cup\operatorname{graph}(\beta)\cup(\partial D\times[c,d])$. Since $D$ is Jordan measurable, [F3] makes $\partial D$ content zero. [given, F3, algebra]

2.1 By [F2] the two graph pieces have content zero, and by [F1] the product $\partial D\times[c,d]$ has content zero. [step 1.1, F1, F2]

3.1 Given a positive tolerance, cover each of the three sets in step 2.1 with total cube volume below one third of it. Their union covers $\partial K$, so the boundary has content zero. [step 2.1, construct, algebra] ∎
