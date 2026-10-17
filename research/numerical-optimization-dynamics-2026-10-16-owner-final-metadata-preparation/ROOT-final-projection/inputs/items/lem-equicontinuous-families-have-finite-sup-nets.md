---
id: lem-equicontinuous-families-have-finite-sup-nets
kind: lemma
title: "An equicontinuous pointwise-bounded family in $C(K,\\mathbb R)$ has a finite net in the supremum metric"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-equicontinuity-on-a-compact-domain-is-uniform, lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness, def-totally-bounded, def-continuous-real-functions-on-a-compact-metric-space, def-metric-compactness]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Ascoli--Arzelà Theorem (MIT)"
      url: "https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf"
pipeline_run: null
---

## Statement

An equicontinuous pointwise-bounded family $\mathcal F\subseteq C(K,\mathbb R)$ is totally bounded for the supremum metric.

## Facts & Assumptions

**Given:** A positive real $\varepsilon$ and an equicontinuous pointwise-bounded family $\mathcal F$.

[L1] Uniform equicontinuity gives a finite set $E\subseteq K$ such that agreement within $\varepsilon/3$ at every point of $E$ forces agreement within $\varepsilon$ everywhere ([[lem-equicontinuity-on-a-compact-domain-is-uniform]]).

[L2] The family is uniformly bounded ([[lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness]]).

[L3] Totally bounded means that every positive radius admits a finite covering by metric balls ([[def-totally-bounded]]).

## Proof

**Proof technique:** constructive.

1.1 Choose a finite $\delta$-net $E=\{a_0,\ldots,a_N\}$ in $K$ from the uniform equicontinuity radius for $\varepsilon/3$. [L1, construct]

1.2 By [L2], every vector $(f(a_0),\ldots,f(a_N))$ lies in one bounded box in $\mathbb R^{N+1}$; cover that box by finitely many coordinate cubes of side less than $\varepsilon/3$. [L2, construct]

2.1 Choose one member of $\mathcal F$ from each nonempty inverse image of such a cube. Every $f\in\mathcal F$ and its chosen representative differ by less than $\varepsilon/3$ on $E$. [step 1.2, construct]

3.1 For any $x\in K$, choose $a_i\in E$ with $d(x,a_i)<\delta$ and use equicontinuity for both functions and step 2.1 to obtain $|f(x)-g(x)|<\varepsilon$. [step 1.1, step 2.1, L1, algebra]

4.1 The finitely many representatives form an $\varepsilon$-net, so $\mathcal F$ is totally bounded. [step 3.1, L3, discharge-construct] ∎
