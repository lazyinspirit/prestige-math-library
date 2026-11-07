---
dependency_level: 2
id: def-pure-isobaric-automorphic-sum
kind: definition
title: "Pure Isobaric Automorphic Sum"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-adelic-gln-automorphic-representation
  - def-unitary-cuspidal-generic-gln-representation
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), §1.1"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §0"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $F$ be a number field and $N\ge1$. A pure isobaric automorphic representation of $\mathrm{GL}_N(\mathbb A_F)$ is an automorphic representation $\Pi$ with a Langlands isobaric decomposition

$$\Pi=\pi_1\boxplus\cdots\boxplus\pi_k,$$

where $k\ge1$, each $\pi_j$ is an automorphic representation of $\mathrm{GL}_{n_j}(\mathbb A_F)$ that is unitary and cuspidal in the senses defined for adelic representations, and $\sum_{j=1}^k n_j=N$. The symbol $\boxplus$ denotes the Langlands isobaric-sum operation on automorphic representations, not a direct sum of vector spaces. The constituent data are unordered, repeated constituents are allowed, and no nonunitary real-power twist $|\det|^{t_j}$ is included; no genericity condition is imposed on the constituents by this definition.

## Definition references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, §1.1](https://arxiv.org/pdf/2309.07534v2)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §0](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)
