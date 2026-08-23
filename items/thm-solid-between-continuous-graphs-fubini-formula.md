---
id: thm-solid-between-continuous-graphs-fubini-formula
kind: theorem
title: 'A solid between continuous graphs over a compact Jordan base is Jordan measurable and integrates by vertical sections'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-solid-between-continuous-graphs-over-a-jordan-base, lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero, thm-jordan-boundary-criterion, thm-heine-borel-rn, thm-extreme-value-metric, thm-continuous-functions-on-compact-jordan-sets-are-integrable, thm-jordan-fubini-by-sections]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables, Theorem 3.1.9"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

Let $D\subseteq\mathbb R^m$ be compact and Jordan measurable, let $\alpha,\beta:D\to\mathbb R$ be continuous with $\alpha\le\beta$, and put $K:=\{(u,t):u\in D,\alpha(u)\le t\le\beta(u)\}$. The solid $K$ is compact and Jordan measurable, and every continuous $H:K\to\mathbb R$ satisfies $\int_KH=\int_D\left(\int_{\alpha(u)}^{\beta(u)}H(u,t)\,dt\right)du$.

## Facts & Assumptions

**Given:** The data in the Statement, with integrals understood in the multidimensional Riemann sense.

[F1] The boundary of $K$ has content zero ([[lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero]]).

[F2] Every continuous real function on a compact Jordan measurable set is Riemann integrable ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

[F3] If $E\subseteq\mathbb R^{p+q}$ is bounded Jordan, $g:E\to\mathbb R$ is integrable, and outside a content-zero parameter set the sections $E_x$ are Jordan measurable and the restrictions $g_x$ are integrable, then the completed section-integral function is integrable and $\int_Eg=\int(\int_{E_x}g_x)\,dx$; the symmetric coordinate order also holds ([[thm-jordan-fubini-by-sections]]).

[F4] Continuous real functions on a nonempty compact metric space attain finite extrema and are bounded ([[thm-extreme-value-metric]]).

[F5] A Euclidean set is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 If $D=\varnothing$, every assertion and both integrals are zero. Otherwise [F4] bounds $\alpha$ and $\beta$; the defining weak inequalities make $K$ closed, so it is closed and bounded and therefore compact by [F5]. [given, F4, F5, algebra]

2.1 By [F1] the boundary of the bounded set $K$ has content zero, so the Jordan boundary criterion makes $K$ Jordan measurable. [step 1.1, F1]

3.1 By [F2], $H$ is integrable on $K$. For each $u\in D$, the vertical section is exactly $[\alpha(u),\beta(u)]$, and the restriction $t\mapsto H(u,t)$ is continuous and integrable; [F3] therefore gives the displayed iterated formula. [step 2.1, F2, F3]

4.1 If $\alpha(u)=\beta(u)$, the corresponding section is a singleton and its integral is zero. Thus coincident graphs, whether at isolated points or everywhere, require no exceptional convention. [step 3.1, algebra] ∎
