---
id: prop-the-generating-vector-field-is-invariant-under-its-flow
kind: proposition
title: "The generating vector field is invariant under its own flow"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism, thm-fundamental-theorem-on-flows, prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $\Phi:\mathcal D\to M$ be the maximal flow of a smooth vector field $X$.
Then for each $t$,

$$ (\Phi_t)_*X=X $$

on the common domain of definition.

## Facts & Assumptions

**Given:** The maximal flow $\Phi$ of $X$, a time $t$, and a point $p\in\mathcal D_t$.

[L1] Each time-$t$ flow map is a diffeomorphism between open domains ([[prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains]]).

[L2] The flow satisfies the local group law and its time slices are integral curves of $X$ ([[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\Phi_t$ is a diffeomorphism near $p$, so $(\Phi_t)_*X$ is defined there. Consider the curve $\eta(s):=\Phi_t(\Phi_s(p))=\Phi_{t+s}(p)$, where the second equality is the local group law from [L2]. [L1, L2, given]

2.1 Differentiating $\eta$ at $s=0$ yields $$ \eta'(0)=d(\Phi_t)_p(X_p). $$ But $\eta$ is also the integral curve of $X$ through $\Phi_t(p)$, so $\eta'(0)=X_{\Phi_t(p)}$ by [L2]. Hence $d(\Phi_t)_p(X_p)=X_{\Phi_t(p)}$. [L2, step 1.1]

3.1 Since $p$ was arbitrary, $(\Phi_t)_*X=X$ on the common domain. [step 2.1] ∎
