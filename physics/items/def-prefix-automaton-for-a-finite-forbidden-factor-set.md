---
id: def-prefix-automaton-for-a-finite-forbidden-factor-set
kind: definition
title: "The longest-suffix prefix automaton for a finite set of forbidden factors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-words-factor-avoidance-and-prefix-states]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Proposition 4.7.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Definition

Let $\Sigma$ be a finite alphabet and let $B$ be a finite nonempty set of nonempty words over $\Sigma$. With $S_B$ as in [[def-finite-words-factor-avoidance-and-prefix-states]], the **prefix automaton for $B$** has state set $S_B$, initial state $\varepsilon$, and the following transitions.

For $s\in S_B$ and $a\in\Sigma$, reject the letter $a$ if the concatenation $sa$ contains a factor in $B$. Otherwise define $\delta(s,a)$ to be the longest suffix of $sa$ that belongs to $S_B$, and put an edge labelled $a$ from $s$ to $\delta(s,a)$. This state exists because $\varepsilon\in S_B$, and it is unique because suffixes of distinct lengths are distinct.

For enumeration, give every edge weight $1$ over $\mathbb Z$. Different letters that induce the same transition remain parallel edges, so the associated transfer-matrix entry is the number of such letters.
