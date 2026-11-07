---
id: thm-jpss-local-rankin-selberg-multiplicativity-for-induced-representations
kind: theorem
title: "JPSS Multiplicativity of Local Rankin–Selberg Factors"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation
  - def-standard-and-rankin-selberg-l-functions-on-gln
dependency_level: 5
sources:
  scraped: []
  references:
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§3–7"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lectures 2–3"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $K$ be a nonarchimedean local field, let $\pi$ be a representation of $\mathrm{GL}_r(K)$ of Whittaker type, and let $\sigma_i$ be representations of $\mathrm{GL}_{t_i}(K)$ of Whittaker type for $1\leq i\leq p$, where $t_1+\cdots+t_p=t$. Let $Q$ be the standard parabolic subgroup of $\mathrm{GL}_t(K)$ with block sizes $t_1,\ldots,t_p$, and let $\sigma=\operatorname{Ind}_{Q}^{\mathrm{GL}_t(K)}(\sigma_1\otimes\cdots\otimes\sigma_p)$ be normalized parabolic induction, whose inducing functions transform by the square root of the modulus character of $Q$. Define $\gamma(s,\pi\times\sigma,\psi)=\epsilon(s,\pi\times\sigma,\psi)L(1-s,\pi^\vee\times\sigma^\vee)/L(s,\pi\times\sigma)$ from the local factors and functional equation. Then

$$\gamma(s,\pi\times\sigma,\psi)=\prod_{i=1}^{p}\gamma(s,\pi\times\sigma_i,\psi),$$

and

$$L(s,\pi\times\sigma)\in\left(\prod_{i=1}^{p}L(s,\pi\times\sigma_i)\right)\mathbb C[q^s,q^{-s}],$$

where the latter means that the quotient of the left side by the displayed product is a Laurent polynomial in $q^{-s}$.

## Statement references

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§3–7](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lectures 2–3](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
