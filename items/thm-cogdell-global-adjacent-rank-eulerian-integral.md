---
id: thm-cogdell-global-adjacent-rank-eulerian-integral
kind: theorem
title: "Cogdell Global Eulerian Rankin–Selberg Integral for Adjacent Ranks"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-unitary-cuspidal-generic-gln-representation
  - def-gln-generic-whittaker-model
  - def-local-rankin-selberg-integral-for-gln-times-glm
  - thm-global-whittaker-genericity-localizes-to-every-place
  - thm-global-whittaker-functional-factorizes-for-cuspidal-gln
dependency_level: 5
sources:
  scraped: []
  references:
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 2, §2.2"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§0–2"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $F$ be a number field, $\mathbb A_F$ its adele ring, $n\geq2$, and $\Pi,\Pi'$ globally generic cuspidal automorphic representations of $\mathrm{GL}_n(\mathbb A_F)$ and $\mathrm{GL}_{n-1}(\mathbb A_F)$. Fix a nontrivial additive character $\psi:F\backslash\mathbb A_F\to\mathbb C^\times$. Let $W=\bigotimes_vW_v$ and $W'=\bigotimes_vW'_v$ be factorizable global Whittaker functions for $\psi$ and $\psi^{-1}$, respectively. Write $N_m$ for the upper-unitriangular subgroup of $\mathrm{GL}_m$, embed $h\in\mathrm{GL}_{n-1}$ as $\operatorname{diag}(h,1)$, and give the quotient $N_{n-1}(\mathbb A_F)\backslash\mathrm{GL}_{n-1}(\mathbb A_F)$ its product quotient measure. Define, initially where absolutely convergent,

$$\Psi(s;W,W')=\int_{N_{n-1}(\mathbb A_F)\backslash\mathrm{GL}_{n-1}(\mathbb A_F)}W(\operatorname{diag}(h,1))W'(h)|\det h|_{\mathbb A_F}^{s-1/2}\,dh.$$

For factorizable data this integral has an entire continuation, is bounded in vertical strips, and satisfies

$$\Psi(s;W,W')=\Psi(1-s;\widetilde W,\widetilde W'),$$

where $\widetilde W(g)=W(w_n\,{}^tg^{-1})$, $\widetilde W'(h)=W'(w_{n-1}\,{}^th^{-1})$, and $w_m$ is the anti-diagonal permutation matrix in rank $m$. In a right half-plane of absolute convergence the global integral factors as

$$\Psi(s;W,W')=\prod_v\int_{N_{n-1}(F_v)\backslash\mathrm{GL}_{n-1}(F_v)}W_v(\operatorname{diag}(h_v,1))W'_v(h_v)|\det h_v|_{F_v}^{s-1/2}\,dh_v,$$

with absolute and uniform convergence there. The product factors are the adjacent-rank local Rankin–Selberg integrals.

## Statement references

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 2, §2.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§0–2](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)
