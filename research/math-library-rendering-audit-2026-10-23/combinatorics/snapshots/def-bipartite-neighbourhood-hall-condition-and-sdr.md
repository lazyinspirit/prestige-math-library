---
id: def-bipartite-neighbourhood-hall-condition-and-sdr
kind: definition
title: "Bipartite neighbourhoods, Hall's condition and systems of distinct representatives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bipartite-graph, def-graph-adjacency-incidence-neighbourhood-and-degree, def-finite-cardinality, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "F. Gotti, Matching and Hall's Theorem"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/30.%20Matchings%20and%20Hall%27s%20Theorem/Matching%20and%20Hall%27s%20Theorem.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite bipartite graph with specified parts $X$ and $Y$. For
$S\subseteq X$, its **neighbourhood in $Y$** is
$$N(S):=\{y\in Y:xy\in E(G)\text{ for some }x\in S\}.$$
The pair $(X,Y)$ satisfies **Hall's condition (on $X$)** if
$|N(S)|\ge |S|$ for every $S\subseteq X$.

For any indexed family $(A_x)_{x\in X}$, write $U:=\bigcup_{x\in X}A_x$. A
**system of distinct representatives (SDR)** is an injection $r:X\to U$ such
that $r(x)\in A_x$ for every $x\in X$.

When $X$ and $U$ are finite, the **incidence graph** of the family is the
finite bipartite graph with the disjoint tagged parts
$$X_{\mathrm L}:=\{(x,\mathrm L):x\in X\},\qquad U_{\mathrm R}:=\{(u,\mathrm R):u\in U\}.$$
and an edge $(x,\mathrm L)(u,\mathrm R)$ exactly when $u\in A_x$. For
$S\subseteq X$, its left tagged copy has neighbourhood
$$N(S_{\mathrm L})=\{(u,\mathrm R):u\in\bigcup_{x\in S}A_x\}.$$
