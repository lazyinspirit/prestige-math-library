---
id: def-ferrers-young-diagram-conjugate-partition-and-durfee-square
kind: definition
title: "Ferrers and Young diagrams, conjugate partitions, self-conjugacy, and the Durfee square"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-partition-of-a-positive-integer,
       def-twelvefold-way-ball-box-conventions]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Definition

Let $\lambda$ be a partition written in the page convention of
[[def-twelvefold-way-ball-box-conventions]]. For a nonempty partition, write

$$\lambda = (\lambda_1,\dots,\lambda_r), \qquad \lambda_1 \ge \cdots \ge \lambda_r > 0.$$

Also adjoin the empty partition

$$\varnothing_{\mathrm{part}}:=()$$

of $0$.

The **Ferrers diagram** (or **Young diagram**) of a nonempty partition $\lambda$
is the set of cells

$$\{(i,j) : 1 \le i \le r,\ 1 \le j \le \lambda_i\},$$

drawn as left-justified rows, with row $i$ containing $\lambda_i$ cells.

The Ferrers diagram of $\varnothing_{\mathrm{part}}$ is the empty set of cells.

The **conjugate partition** of a nonempty partition $\lambda$ is obtained by
transposing this diagram:
for $1\le j\le\lambda_1$, its $j$-th part is the number of rows of $\lambda$
of length at least $j$. Equivalently,

$$\lambda'_j = |\{\, i : \lambda_i \ge j \,\}| \qquad (1\le j\le\lambda_1).$$

The conjugate of $\varnothing_{\mathrm{part}}$ is again
$\varnothing_{\mathrm{part}}$.

The partition is **self-conjugate** when $\lambda'=\lambda$.

The **Durfee length** of $\varnothing_{\mathrm{part}}$ is $0$. For a nonempty
partition $\lambda$, the **Durfee length** $d(\lambda)$ is the largest integer
$d \ge 1$ such that $\lambda_d \ge d$. The **Durfee square** is the
$d(\lambda)\times d(\lambda)$ square of cells in the upper-left corner of the
Ferrers diagram, and for $\varnothing_{\mathrm{part}}$ it is the empty
$0\times0$ square.
