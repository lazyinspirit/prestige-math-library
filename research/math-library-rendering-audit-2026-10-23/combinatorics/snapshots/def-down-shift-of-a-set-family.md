---
id: def-down-shift-of-a-set-family
kind: definition
title: "The down-shift $S_j$ of a set family at a point $j$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-cardinality, thm-subset-of-a-finite-set, def-sum-over-a-finite-index-set, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.5"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal{F}\subseteq\mathcal{P}([n])$ and let $j<n$.

For a set $F\in\mathcal{F}$, define

$$s_j(F,\mathcal{F})=\begin{cases} F\setminus\{j\},&j\in F\text{ and }F\setminus\{j\}\notin\mathcal{F},\\[2pt] F,&\text{otherwise}. \end{cases}$$

The **down-shift** of $\mathcal{F}$ at $j$ is

$$S_j(\mathcal{F}):=\{\,s_j(F,\mathcal{F}):F\in\mathcal{F}\,\}.$$

Also define the **weight**

$$w(\mathcal{F}):=\sum_{F\in\mathcal{F}}\lvert F\rvert.$$

The next lemma shows that $S_j(\mathcal{F})$ has the same number of members as
$\mathcal{F}$ and never larger weight.

## Remarks

- The family is shifted only when the lower set is not already present. That is
  the clause that keeps the operation from collapsing two sets to one.
