---
id: def-singular-chain-complex-and-singular-homology
kind: definition
title: "The singular chain complex and singular homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-boundary-operator, thm-the-singular-boundary-squares-to-zero, def-cycle-and-boundary-subobjects-of-a-complex, def-homology-object-of-a-chain-complex]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: frontier-30
---

## Definition

For a topological space $X$ and an abelian group $G$, the singular chain groups
and boundary maps of [[def-singular-boundary-operator]] form the
**singular chain complex**
$$C_\bullet(X;G):=\bigl(\cdots\to C_n(X;G)\xrightarrow{\partial_n}C_{n-1}(X;G)\to\cdots\bigr),$$
because [[thm-the-singular-boundary-squares-to-zero]] gives
$\partial_{n-1}\partial_n=0$.

Its degree-$n$ cycles and boundaries are
$$Z_n^{\mathrm{sing}}(X;G):=\ker\partial_n,\qquad B_n^{\mathrm{sing}}(X;G):=\operatorname{im}\partial_{n+1},$$
in the sense of [[def-cycle-and-boundary-subobjects-of-a-complex]].

The **$n$th singular homology group** is the homology object of this chain
complex:
$$H_n^{\mathrm{sing}}(X;G):=Z_n^{\mathrm{sing}}(X;G)\big/B_n^{\mathrm{sing}}(X;G),$$
equivalently $H_n(C_\bullet(X;G))$ in the notation of
[[def-homology-object-of-a-chain-complex]]. When the coefficient group is
$\mathbb Z$, write simply $C_n(X)$ and $H_n(X)$ when no confusion can arise.
