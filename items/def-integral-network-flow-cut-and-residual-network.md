---
id: def-integral-network-flow-cut-and-residual-network
kind: definition
title: "Finite integral networks, feasible flows, values, cuts and residual networks"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multigraph-loop-and-digraph, def-directed-walk-trail-path-cycle-and-strong-connectivity, def-finite-cardinality, def-finite-sum-in-a-commutative-monoid]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Goemans, Lecture notes on flows and cuts"
      url: "https://math.mit.edu/~goemans/18453S17/flowscuts.pdf"
pipeline_run: null
---

## Definition

A **finite integral $s$-$t$ network** is a tuple
$\mathcal N=(V,A,\operatorname{tail},\operatorname{head},s,t,c)$ where $V$ and
the *labelled* arc set $A$ are finite, $s,t\in V$ are distinct,
$$\operatorname{tail},\operatorname{head}:A\longrightarrow V,$$
every arc $a\in A$ has $\operatorname{tail}(a)\ne\operatorname{head}(a)$,
$c:A\to\mathbb N$, no arc enters $s$, and no arc leaves $t$. Parallel and
antiparallel arcs are allowed because distinct elements of $A$ remain distinct.

A **feasible integral flow** is $f:A\to\mathbb N$ with $0\le f(a)\le c(a)$ and
$$\sum_{\operatorname{tail}(a)=v}f(a)=\sum_{\operatorname{head}(a)=v}f(a)\quad(v\in V\setminus\{s,t\}).$$
Its **value** is $|f|:=\sum_{\operatorname{tail}(a)=s}f(a)$. An $s$-$t$
**cut** is a set $S\subseteq V$ with $s\in S$, $t\notin S$; its capacity is
$c(S):=\sum_{\operatorname{tail}(a)\in S,\operatorname{head}(a)\notin S}c(a)$.

The **residual network** of $f$ has the labelled copies
$$R_f=\{(a,+):f(a)<c(a)\}\cup\{(a,-):f(a)>0\}.$$
On these copies, put
$$\begin{aligned}\operatorname{tail}_f(a,+)&=\operatorname{tail}(a),&\operatorname{head}_f(a,+)&=\operatorname{head}(a),&r_f(a,+)&=c(a)-f(a),\\\operatorname{tail}_f(a,-)&=\operatorname{head}(a),&\operatorname{head}_f(a,-)&=\operatorname{tail}(a),&r_f(a,-)&=f(a).\end{aligned}$$
For $x,y\in V$, an $x$-$y$ **residual path** is a sequence
$\rho_1,\ldots,\rho_k$ of members of $R_f$, with $k\ge1$, for which
$$\operatorname{tail}_f(\rho_1)=x,\qquad \operatorname{head}_f(\rho_k)=y,\qquad \operatorname{head}_f(\rho_i)=\operatorname{tail}_f(\rho_{i+1})\quad(1\le i<k),$$
and the vertex list
$$x,\operatorname{head}_f(\rho_1),\ldots,\operatorname{head}_f(\rho_k)=y$$
has no repetitions. Thus the path records the selected labelled copies, so
$(a,-)$ never coincides with a forward copy of an antiparallel original arc.

## Remarks

- Capacities and flows are natural numbers here. No rational, real, or
  infinite-capacity termination assertion is part of this definition.
