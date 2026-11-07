---
id: thm-cogdell-global-same-rank-rankin-selberg-analytic-continuation-and-functional-equation
kind: theorem
title: "Cogdell Global Same-Rank Rankin–Selberg Analytic Continuation and Functional Equation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unitary-cuspidal-generic-gln-representation
  - def-local-rankin-selberg-integral-for-gln-times-glm
  - thm-cogdell-global-equal-rank-eulerian-integral
  - thm-global-whittaker-functional-factorizes-for-cuspidal-gln
  - thm-global-whittaker-genericity-localizes-to-every-place
  - thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation
  - thm-jacquet-archimedean-local-equal-rank-rankin-selberg-functional-equation
  - thm-unramified-rankin-selberg-euler-factor-for-equal-ranks
dependency_level: 6
sources:
  scraped: []
  references:
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 4, §4.1"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§0–2"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $F$ be a number field, $\mathbb A_F$ its adele ring, $n\geq1$, and $\Pi,\Pi'$ cuspidal automorphic representations of $\mathrm{GL}_n(\mathbb A_F)$ that are globally generic. Let $\psi:F\backslash\mathbb A_F\to\mathbb C^\times$ be a nontrivial additive character, write $\psi_v$ for its local components, and define the completed function $\Lambda(s,\Pi\times\Pi')=\prod_v L(s,\Pi_v\times\Pi'_v)$ and $\epsilon(s,\Pi\times\Pi',\psi)=\prod_v\epsilon(s,\Pi_v\times\Pi'_v,\psi_v)$, with the local factors and local epsilon factors in the Rankin–Selberg convention. Then $\Lambda(s,\Pi\times\Pi')$, initially defined by its convergent Euler product in a right half-plane, extends meromorphically to $\mathbb C$, is bounded on vertical strips away from its poles, and satisfies

$$\Lambda(s,\Pi\times\Pi')=\epsilon(s,\Pi\times\Pi',\psi)\Lambda(1-s,\Pi^\vee\times(\Pi')^\vee).$$

Here $\Pi^\vee$ denotes the contragredient automorphic representation. The global epsilon factor is the finite product of the local epsilon factors; the product of the local central-character signs in the equal-rank local functional equations is (1), since the global central character is trivial on the diagonally embedded $-1\in F^\times$.

Here $L(s,\Pi\times\Pi')=\prod_{v\text{ finite}}L(s,\Pi_v\times\Pi'_v)$ denotes the finite part, so $\Lambda(s,\Pi\times\Pi')=L(s,\Pi\times\Pi')\prod_{v\mid\infty}L(s,\Pi_v\times\Pi'_v)$. The functional equation above is for the completed function.

## Statement references

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 4, §4.1](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§0–2](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)
