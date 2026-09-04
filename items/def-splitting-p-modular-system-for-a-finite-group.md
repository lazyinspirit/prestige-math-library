---
id: def-splitting-p-modular-system-for-a-finite-group
kind: definition
title: "A splitting p-modular system for a finite group is a p-modular system whose fraction and residue fields split the needed group algebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-modular-system, def-splitting-field-for-a-finite-group]
verification:
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

Let $G$ be a finite group. A **splitting $p$-modular system for $G$** is a
$p$-modular system $(K,\mathcal O,k)$ such that both $K$ and $k$ are splitting
fields for every subgroup $H\le G$.

Thus the characteristic-$0$ fraction field and the characteristic-$p$ residue
field satisfy the splitting-field condition of
[[def-splitting-field-for-a-finite-group]] simultaneously for the determinate
family of subgroups of $G$.
