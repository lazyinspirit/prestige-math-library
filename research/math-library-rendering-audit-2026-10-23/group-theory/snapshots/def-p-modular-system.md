---
id: def-p-modular-system
kind: definition
title: "A p-modular system is a characteristic-zero fraction field over a complete discrete valuation ring with residue field of characteristic p"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-discrete-valuation-ring, def-adic-topology-on-a-module, def-separated-and-complete-filtered-module]
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
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Definition

Fix a prime $p$. A **$p$-modular system** is a triple $(K,\mathcal O,k)$ such
that:

$$\mathcal O\subseteq K \text{ is a complete discrete valuation ring},\qquad K=\operatorname{Frac}(\mathcal O),\qquad k=\mathcal O/\mathfrak m,$$

where $\mathfrak m$ is the maximal ideal of $\mathcal O$, the fraction field
$K$ has characteristic $0$, and the residue field $k$ has characteristic $p$.

The completeness is with respect to the $\mathfrak m$-adic topology from
[[def-adic-topology-on-a-module]] and
[[def-separated-and-complete-filtered-module]], and the valuation-ring
condition is the one recorded in [[def-discrete-valuation-ring]].
