---
id: def-shattering-and-vc-dimension
kind: definition
title: "Shattering and the Vapnik–Chervonenkis dimension of a set family"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-cardinality, thm-subset-of-a-finite-set, cor-cardinality-of-the-power-set, def-natural-numbers, def-nat-order]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal{F}\subseteq\mathcal{P}([n])$ and let $T\subseteq[n]$.

The **trace** of $\mathcal{F}$ on $T$ is

$$\mathcal{F}\vert_T:=\{\,F\cap T:F\in\mathcal{F}\,\}.$$

The family $\mathcal{F}$ **shatters** $T$ when

$$\mathcal{F}\vert_T=\mathcal{P}(T).$$

The **VC dimension** of $\mathcal{F}$ is the greatest integer $d\ge0$ such that
some subset $T\subseteq[n]$ with $\lvert T\rvert=d$ is shattered. For the empty
family we set $\operatorname{VC}(\varnothing):=0$ by convention.

This maximum is well defined: every shattered set is a subset of the finite set
$[n]$, so its size lies in $\{0,\dots,n\}$, and for any nonempty family the empty
set is shattered because every trace on $\varnothing$ is $\varnothing$.

## Remarks

- A one-element family has VC dimension $0$: it shatters $\varnothing$ and no
  singleton.
