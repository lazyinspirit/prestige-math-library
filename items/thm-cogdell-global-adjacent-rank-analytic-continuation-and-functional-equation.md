---
id: thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation
kind: theorem
title: "Cogdell Global Analytic Continuation, Functional Equation, and Vertical-Strip Boundedness for Adjacent Ranks"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - thm-cogdell-global-adjacent-rank-eulerian-integral
  - thm-global-whittaker-functional-factorizes-for-cuspidal-gln
  - thm-global-whittaker-genericity-localizes-to-every-place
  - thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation
  - thm-jacquet-archimedean-local-rankin-selberg-functional-equation-and-test-vectors
  - thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks
dependency_level: 6
sources:
  scraped: []
  references:
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lectures 2–4, especially Theorems 2.1 and 4.1"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§0–2"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $F$ be a number field, $\mathbb A_F$ its adele ring, $n\geq2$, and $\Pi,\Pi'$ cuspidal automorphic representations of $\mathrm{GL}_n(\mathbb A_F)$ and $\mathrm{GL}_{n-1}(\mathbb A_F)$ that are globally generic. Let $\psi:F\backslash\mathbb A_F\to\mathbb C^\times$ be a nontrivial additive character, write $\psi_v$ for its local components, and define the completed function $\Lambda(s,\Pi\times\Pi')=\prod_v L(s,\Pi_v\times\Pi'_v)$ and $\epsilon(s,\Pi\times\Pi',\psi)=\prod_v\epsilon(s,\Pi_v\times\Pi'_v,\psi_v)$ in the Rankin–Selberg convention. Then the Euler product for $\Lambda(s,\Pi\times\Pi')$ extends meromorphically to $\mathbb C$, is bounded in every vertical strip away from poles, and satisfies

$$\Lambda(s,\Pi\times\Pi')=\epsilon(s,\Pi\times\Pi',\psi)\Lambda(1-s,\Pi^\vee\times(\Pi')^\vee).$$

In this adjacent-rank case the global Rankin–Selberg integral is entire and bounded in vertical strips, and for factorizable data it has the Eulerian product and functional equation stated in the preceding Cogdell integral theorem, with no additional cyclic right translation in the adjacent-rank case. No corresponding vertical-strip boundedness claim is made here for rank difference greater than one.

Here $L(s,\Pi\times\Pi')=\prod_{v\text{ finite}}L(s,\Pi_v\times\Pi'_v)$ denotes the finite part, so $\Lambda(s,\Pi\times\Pi')=L(s,\Pi\times\Pi')\prod_{v\mid\infty}L(s,\Pi_v\times\Pi'_v)$. The functional equation above is for the completed function.

## Statement references

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lectures 2–4, especially Theorems 2.1 and 4.1](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§0–2](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)
