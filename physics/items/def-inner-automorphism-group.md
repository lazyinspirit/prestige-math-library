---
id: def-inner-automorphism-group
kind: definition
title: 'Inner automorphisms and $\operatorname{Inn}(G)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-conjugation-is-an-automorphism, thm-automorphisms-form-a-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Milne, Group Theory, Automorphisms of Groups"
      url: "https://math.libretexts.org/Workbench/Group_Theory_4e_%28Milne%29/03%3A_Automorphisms_and_Extensions/3.01%3A_Automorphisms_of_groups"
pipeline_run: null
---

## Definition

Inner automorphisms and $\operatorname{Inn}(G)$.

For $g\in G$, write $c_g(x)=gxg^{-1}$.  By
[[thm-conjugation-is-an-automorphism]], $c_g\in\operatorname{Aut}(G)$.  Define

$$\operatorname{Inn}(G):=\{c_g:g\in G\}\subseteq\operatorname{Aut}(G).$$
