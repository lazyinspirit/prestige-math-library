---
id: def-kuratowski-distance-map
kind: definition
title: "The based Kuratowski distance map into bounded continuous functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function-space, def-metric-space]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "James Dugundji, Topology"
      url: "https://dokumen.pub/topology-12th-printingnbsped-9780697068897.html"
pipeline_run: frontier-29
---

## Definition

Let $(M,d)$ be a nonempty metric space ([[def-metric-space]]) and fix a basepoint
$o\in M$. Inside the real function space $\mathbb R^M$ of
[[def-function-space]], write $C_b(M)$ for the set of bounded continuous
real-valued functions on $M$, equipped with the supremum norm

$$\|f\|_\infty:=\sup_{z\in M}|f(z)|.$$

For each $x\in M$, define a function $K_o(x):M\to\mathbb R$ by

$$K_o(x)(z):=d(x,z)-d(o,z)\qquad (z\in M).$$

The triangle inequality gives

$$|K_o(x)(z)|=|d(x,z)-d(o,z)|\le d(x,o),$$

so $K_o(x)$ is bounded. The same inequality in the $z$ variable shows that
$K_o(x)$ is $2$-Lipschitz, hence continuous. Therefore $K_o(x)\in C_b(M)$ for
every $x\in M$.

The resulting map

$$K_o:M\to C_b(M),\qquad x\mapsto K_o(x),$$

is the **based Kuratowski distance map**.

## Remarks

- The subtraction by $d(o,\cdot)$ is what keeps the target bounded when the
  metric space itself is unbounded.
