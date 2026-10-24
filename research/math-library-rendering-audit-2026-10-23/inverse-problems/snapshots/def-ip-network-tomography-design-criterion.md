---
id: def-ip-network-tomography-design-criterion
kind: definition
title: "Split and coverage condition for a multicast design"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps: [def-ip-tree-probing-experiment]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "B. Xi, G. Michailidis, and V. N. Nair, Estimating Network Loss Rates Using Active Tomography, Journal of the American Statistical Association 101 (2006), 1430–1448"
      url: "https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf"
      locator: "§3.2, Proposition 1, PDF p. 5 (printed p. 1434)"
    - title: "E. Lawrence, G. Michailidis, and V. N. Nair, Statistical Inverse Problems in Active Network Tomography, IMS Lecture Notes–Monograph Series 54 (2007), 24–44"
      url: "https://arxiv.org/pdf/0708.1079"
      locator: "§3.1, PDF pp. 5–6 (printed pp. 28–29)"
---

## Definition

For a finite-tree probe design $\mathcal C=((C_d,N_d))_{d=1}^D$, a receiver $r\in R$ is **covered** if $r\in C_d$ for some $d$. For a nonroot internal vertex $v$, a design $C_d$ **splits** $v$ if there are distinct children $c,c'$ of $v$ and receivers $r,s\in C_d$ such that $r$ lies in the subtree rooted at $c$ and $s$ lies in the subtree rooted at $c'$. The design satisfies the **split/coverage condition** if every receiver is covered and every nonroot internal vertex is split by at least one design.

## Definition references

[[def-ip-tree-probing-experiment|Finite-tree multicast loss experiments]]

[Xi, Michailidis, and Nair, §3.2, Proposition 1](https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf)

[Lawrence, Michailidis, and Nair, §3.1](https://arxiv.org/pdf/0708.1079)
