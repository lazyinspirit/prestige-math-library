---
id: "def-binary-digit-restriction-set"
kind: "definition"
title: "Sets defined by permitted binary digit positions"
deps: ["thm-geometric-series", "def-series", "def-countable"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Example 1.3.2 and Example 1.4.2
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

Let $\mathbb N_+=\{1,2,\ldots\}$ and $S\subseteq\mathbb N_+$. Define the **binary digit restriction set**

$$A_S=\left\{\sum_{k=1}^{\infty}a_k2^{-k}:a_k\in\{0,1\},\ a_k=0\text{ if }k\notin S\right\},\qquad a_S(n)=\#(S\cap\{1,\ldots,n\}).$$

Here $n\ge0$ and $a_S(0)=0$. The series is the positive-start-index series of [[def-series]], convergent since its tails are bounded by the geometric tails of [[thm-geometric-series]]. In particular $A_S\subseteq[0,1]$ and $0\in A_S$. The cardinality symbol uses [[def-countable]]. Membership requires the existence of an allowed expansion; points with two binary expansions are retained if either expansion is allowed. No choice of a preferred expansion is part of this definition.
