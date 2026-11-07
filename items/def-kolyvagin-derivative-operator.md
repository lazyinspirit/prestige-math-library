---
id: def-kolyvagin-derivative-operator
kind: definition
title: "Kolyvagin Derivative Operator"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Benjamin Howard, The Heegner Point Kolyvagin System"
      url: "https://arxiv.org/pdf/1202.6340"
      locator: "§1.7, printed pp. 19–20: the derivative operator and its telescoping identity."
verification:
  precheck: n/a
---

## Definition

Let $\ell$ be a prime and let $\Gamma_\ell=\langle\sigma_\ell\rangle$ be a cyclic group of order $\ell+1$. In its integral group ring $\mathbb Z_p[\Gamma_\ell]$, define the norm element and the Kolyvagin derivative operator by
$$N_\ell=\sum_{i=0}^{\ell}\sigma_\ell^i,\qquad D_\ell=\sum_{i=1}^{\ell}i\sigma_\ell^i.$$
For a squarefree product $n$ of such primes, define $D_n=\prod_{\ell\mid n}D_\ell$ in the tensor product of their group rings, with $D_1=1$.

## Definition references

[Howard, *The Heegner Point Kolyvagin System*, §1.7](https://arxiv.org/pdf/1202.6340)
