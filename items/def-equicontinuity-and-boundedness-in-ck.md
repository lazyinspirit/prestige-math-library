---
id: def-equicontinuity-and-boundedness-in-ck
kind: definition
title: "Equicontinuity, pointwise boundedness, and uniform boundedness for families in $C(K,\\mathbb R)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuous-real-functions-on-a-compact-metric-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Ascoli--Arzelà Theorem (MIT)"
      url: "https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf"
pipeline_run: null
---

## Definition

Let $(K,d)$ be a nonempty compact metric space and let $\mathcal F\subseteq C(K,\mathbb R)$ in the sense of [[def-continuous-real-functions-on-a-compact-metric-space]]. The family $\mathcal F$ is **equicontinuous at $a\in K$** when, for every $\varepsilon>0$, there is $\delta>0$ such that for every $f\in\mathcal F$ and every $x\in K$, $d(x,a)<\delta$ implies $|f(x)-f(a)|<\varepsilon$. It is **equicontinuous** when this holds at every $a\in K$.

It is **pointwise bounded** when, for every $a\in K$, the set $\{f(a):f\in\mathcal F\}$ is bounded in $\mathbb R$. It is **uniformly bounded** when a real $M\ge0$ satisfies $|f(x)|\le M$ for every $f\in\mathcal F$ and $x\in K$.
