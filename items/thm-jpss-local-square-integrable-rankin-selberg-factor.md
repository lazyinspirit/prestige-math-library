---
id: thm-jpss-local-square-integrable-rankin-selberg-factor
kind: theorem
title: "JPSS Local Factors for Square-Integrable GL(n) Representations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation
  - thm-jpss-local-rankin-selberg-multiplicativity-for-induced-representations
  - def-standard-and-rankin-selberg-l-functions-on-gln
dependency_level: 6
sources:
  scraped: []
  references:
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §8"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lectures 2–3"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $K$ be a nonarchimedean local field. Let $\pi_0$ and $\sigma_0$ be unitary supercuspidal representations of $\mathrm{GL}_a(K)$ and $\mathrm{GL}_b(K)$, where a supercuspidal representation is an irreducible admissible representation that is not a subquotient of induction from a proper parabolic subgroup. Let $r=am$, $t=bn$, $t\leq r$, and set $\pi_i=\pi_0\otimes|\det|_K^{(m+1)/2-i}$ for $1\leq i\leq m$ and $\sigma_j=\sigma_0\otimes|\det|_K^{(n+1)/2-j}$ for $1\leq j\leq n$. Let $\pi$ and $\sigma$ be the unique irreducible generic square-integrable constituents of the normalized inductions of $\pi_1\otimes\cdots\otimes\pi_m$ and $\sigma_1\otimes\cdots\otimes\sigma_n$, respectively. Then the local Rankin–Selberg factor satisfies

$$L(s,\pi\times\sigma)=\prod_{j=1}^{n}L(s,\pi_1\times\sigma_j).$$

## Statement references

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §8](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lectures 2–3](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
