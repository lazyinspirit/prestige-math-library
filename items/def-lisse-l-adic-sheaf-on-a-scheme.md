---
dependency_level: 6
id: def-lisse-l-adic-sheaf-on-a-scheme
kind: definition
title: Lisse finite-rank adic sheaves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-l-adic-sheaf-as-compatible-system
  - def-lisse-zl-etale-sheaf
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Grothendieck et al., SGA 5, Exposé VI, Sections 1.2 and 1.4
      url: https://grothendiecksga.com/read/sga5/en/VI-1.html
---

## Definition

Let $X$ be a scheme and let $\ell$ be a prime. A rational adic sheaf on $X$ is **lisse of rank $r$** if it is isomorphic in the rational adic category to a rank-$r$ finite-free lisse $\mathbb Z_\ell$ system. Such a system consists of finite locally constant free $\mathbb Z/\ell^n\mathbb Z$-sheaves of rank $r$ with the compatible quotient reduction maps, and its rational geometric stalk is the corresponding rank-$r$ $\mathbb Q_\ell$-vector space. A lisse finite-rank sheaf has finite rank on each connected component, with a finite uniform rank bound whenever a finite stratification is being used.

Lissity is an adic condition: the finite-level sheaves may be trivialized by different étale covers as $n$ varies. It does not require an ordinary discrete $\mathbb Q_\ell$-sheaf that becomes constant on one common étale cover. In particular, this definition imposes no finite-image condition on the continuous monodromy of the adic stalk.

## Definition references

[[def-l-adic-sheaf-as-compatible-system]]

[[def-lisse-zl-etale-sheaf]]

[SGA 5, Exposé VI, Sections 1.2 and 1.4](https://grothendiecksga.com/read/sga5/en/VI-1.html)
