---
id: def-poset-interval-and-finiteness-conditions
kind: definition
title: "Intervals in a poset; locally finite, lower-finite and upper-finite posets"
status: published
origin: session
deps: [def-partial-order, def-countable, def-finite-cardinality, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
pipeline_run: null
---

## Definition

Let $(P,\le)$ be a poset ([[def-partial-order]]). For comparable elements $x\le y$, the **closed interval** from $x$ to $y$ is

$$[x,y]:=\{z\in P:x\le z\le y\}.$$

The **principal ideal** below $y$ and the **principal filter** above $x$ are

$$P_{\le y}:=\{z\in P:z\le y\},\qquad P_{\ge x}:=\{z\in P:x\le z\}.$$

The poset $P$ is

- **locally finite** when $[x,y]$ is finite for every $x\le y$;
- **lower-finite** when $P_{\le y}$ is finite for every $y\in P$;
- **upper-finite** when $P_{\ge x}$ is finite for every $x\in P$.

Here finite has the meaning of [[def-countable]], and finite cardinalities are those of [[def-finite-cardinality]]. Every lower-finite poset is locally finite because $[x,y]\subseteq P_{\le y}$, and every upper-finite poset is locally finite because $[x,y]\subseteq P_{\ge x}$; both conclusions use that a subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

## Remarks

Local finiteness controls sums over one interval $[x,y]$. It does not imply that a whole principal ideal or principal filter is finite. The one-sided hypotheses are therefore stated separately because global inversion sums range over those larger sets.
