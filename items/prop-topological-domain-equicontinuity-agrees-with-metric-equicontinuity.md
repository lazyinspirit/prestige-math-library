---
id: prop-topological-domain-equicontinuity-agrees-with-metric-equicontinuity
kind: proposition
title: "Topological-domain equicontinuity agrees with metric equicontinuity on a metric domain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness, def-equicontinuity, lem-metric-ball-neighbourhood-base]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Section 45"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces, give $X$ its metric topology, and let $\mathcal F\subseteq C(X,Y)$. Then $\mathcal F$ is equicontinuous in the topological-domain sense if and only if it is equicontinuous in the published metric epsilon-delta sense.

## Facts & Assumptions

**Given:** Metric spaces $X,Y$ and a family $\mathcal F\subseteq C(X,Y)$.

[L1] Topological-domain equicontinuity requires, for each $x$ and $\varepsilon>0$, one neighbourhood $U$ of $x$ on which every $f\in\mathcal F$ satisfies $d_Y(f(y),f(x))<\varepsilon$ ([[def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness]]).

[L2] Metric equicontinuity requires, for each $x$ and $\varepsilon>0$, one $\delta>0$ such that $d_X(x,y)<\delta$ implies $d_Y(f(x),f(y))<\varepsilon$ for all $f\in\mathcal F$ ([[def-equicontinuity]]).

[L3] Every metric neighbourhood of $x$ contains a positive-radius open ball about $x$ ([[lem-metric-ball-neighbourhood-base]]).

## Proof

**Proof technique:** direct.

1.1 Suppose [L1] holds, and fix $x\in X$ and $\varepsilon>0$. Choose its common neighbourhood $U$; by [L3], some ball $B(x,\delta)$ lies in $U$. The same $\delta$ works for every $f\in\mathcal F$, so [L2] holds. [L1, L3]

1.2 Conversely suppose [L2] holds. For fixed $x$ and $\varepsilon>0$, let $\delta>0$ be the common radius supplied there. The open neighbourhood $B(x,\delta)$ then satisfies [L1] for every $f\in\mathcal F$. [L1, L2]

2.1 Steps 1.1 and 1.2 prove both directions without changing the order of the family quantifier. [step 1.1, step 1.2] ∎
