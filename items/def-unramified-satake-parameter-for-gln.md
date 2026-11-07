---
id: def-unramified-satake-parameter-for-gln
kind: definition
title: "Unramified Satake Parameter for GL(n)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-unitary-cuspidal-generic-gln-representation
  - def-standard-and-rankin-selberg-l-functions-on-gln
dependency_level: 4
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§0 and 8–9"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lectures 2–3"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $F$ be a number field, $v$ a finite place of $F$, $F_v$ its completion, $\mathcal O_v$ its ring of integers, and $q_v$ the cardinality of the residue field. A local representation $\pi_v$ of $\mathrm{GL}_n(F_v)$ is unramified if it has a nonzero vector fixed by $\mathrm{GL}_n(\mathcal O_v)$. For an unramified component of an adelic automorphic representation, use the standard local Langlands parameter and local-factor convention fixed in the definition of the standard and Rankin–Selberg $L$-functions on $\mathrm{GL}(n)$. Its Satake parameter is the unordered multiset $\{\alpha_{1,v},\ldots,\alpha_{n,v}\}\subset\mathbb C^\times$ of eigenvalues, counted with algebraic multiplicity, of Frobenius on its standard local parameter. At such a place inertia acts trivially and the monodromy operator is zero, so its standard local factor is $\prod_{i=1}^n(1-\alpha_{i,v}q_v^{-s})^{-1}$.

## Definition references

[[def-standard-and-rankin-selberg-l-functions-on-gln]]

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§0 and 8–9](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lectures 2–3](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
