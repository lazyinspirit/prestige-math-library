---
id: thm-jpss-local-rankin-selberg-factor-via-langlands-classification
kind: theorem
title: "JPSS Local Rankin–Selberg Factors via the Langlands Classification"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - thm-jpss-local-rankin-selberg-multiplicativity-for-induced-representations
  - thm-jpss-local-square-integrable-rankin-selberg-factor
  - def-standard-and-rankin-selberg-l-functions-on-gln
dependency_level: 7
sources:
  scraped: []
  references:
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §9"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lectures 2–3"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $K$ be a nonarchimedean local field. Write an irreducible admissible representation $\pi$ of $\mathrm{GL}_r(K)$ and an irreducible admissible representation $\pi'$ of $\mathrm{GL}_t(K)$ in their Langlands classifications as local Langlands sums $\pi=\delta_1\boxplus\cdots\boxplus\delta_a$ and $\pi'=\delta'_1\boxplus\cdots\boxplus\delta'_b$, where each $\delta_i,\delta'_j$ is a quasi-square-integrable representation, including its real determinant twist. Here $\boxplus$ denotes the Langlands sum operation on local representation classes, not a direct sum of vector spaces. Then

$$L(s,\pi\times\pi')=\prod_{i=1}^{a}\prod_{j=1}^{b}L(s,\delta_i\times\delta'_j).$$

## Statement references

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §9](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lectures 2–3](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
