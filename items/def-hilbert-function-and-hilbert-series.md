---
id: def-hilbert-function-and-hilbert-series
kind: definition
title: "The Hilbert function and formal Hilbert series of a graded module with finite-length pieces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graded-ring-and-graded-module, def-composition-series-and-length-of-a-module]
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §20"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
    - title: "Stacks Project, Section 10.58: Noetherian graded rings"
      url: "https://stacks.math.columbia.edu/tag/00JV"
---

## Definition

Let $S=\bigoplus_{n\ge0}S_n$ be a graded ring and
$M=\bigoplus_{n\in\mathbb Z}M_n$ a graded $S$-module. Assume each homogeneous
piece $M_n$ has finite length as an $S_0$-module and that $M_n=0$ for all
sufficiently negative $n$.

The **Hilbert function** of $M$ is
$$
H_M(n):=\ell_{S_0}(M_n)\qquad (n\in\mathbb Z).
$$

Its **formal Hilbert series** is the formal Laurent series
$$
\operatorname{HS}_M(t):=\sum_{n\in\mathbb Z} H_M(n)t^n.
$$

Thus this is an ordinary formal power series after a shift. For a twist, one has
$$
\operatorname{HS}_{M(a)}(t)=t^{-a}\operatorname{HS}_M(t).
$$
