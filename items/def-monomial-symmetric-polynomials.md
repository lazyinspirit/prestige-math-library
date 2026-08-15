---
id: def-monomial-symmetric-polynomials
kind: definition
title: "Monomial symmetric polynomials indexed by partitions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-symmetric-polynomial]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Chapter 7, Sections 7.1-7.2"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Definition

A **partition of length at most $n$** is a tuple $\lambda=(\lambda_1,\ldots,\lambda_n)$ of natural numbers with $\lambda_1\ge\cdots\ge\lambda_n$. Its **monomial symmetric polynomial** is

$$m_\lambda(x_1,\ldots,x_n):=\sum_{a\in\operatorname{Orb}(\lambda)}x_1^{a_1}\cdots x_n^{a_n},$$

where $\operatorname{Orb}(\lambda)$ is the set of distinct tuples obtained by permuting the coordinates of $\lambda$. Thus repeated monomials are counted once, not with their stabilizer multiplicity. The sum is symmetric by construction.
