---
id: thm-cogdell-global-equal-rank-eulerian-integral
kind: theorem
title: "Cogdell Global Equal-Rank Rankin–Selberg Eulerian Integral"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-unitary-cuspidal-generic-gln-representation
  - def-gln-generic-whittaker-model
  - def-local-rankin-selberg-integral-for-gln-times-glm
  - thm-global-whittaker-functional-factorizes-for-cuspidal-gln
dependency_level: 5
sources:
  scraped: []
  references:
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 2, §§2.3.1–2.3.2"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§0–2"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $F$ be a number field with adele ring $\mathbb A_F$, $n\geq1$, and $\Pi,\Pi'$ globally generic cuspidal automorphic representations of $\mathrm{GL}_n(\mathbb A_F)$. Fix a nontrivial additive character $\psi:F\backslash\mathbb A_F\to\mathbb C^\times$, let $W=\bigotimes_vW_v$ and $W'=\bigotimes_vW'_v$ be factorizable global Whittaker functions for $\psi$ and $\psi^{-1}$, and take $\Phi$ in the Schwartz–Bruhat space $\mathcal S(\mathbb A_F^n)$. Let $N_n$ be the upper-unitriangular subgroup, $e_n=(0,\ldots,0,1)$, and use quotient Haar measures compatible with the product of local self-dual additive measures for $\psi$. Define, initially in a right half-plane of absolute convergence,

$$\Psi_n(s;W,W',\Phi)=\int_{N_n(\mathbb A_F)\backslash\mathrm{GL}_n(\mathbb A_F)}W(g)W'(g)\Phi(e_ng)|\det g|_{\mathbb A_F}^{s}\,dg.$$

This integral has a meromorphic continuation, is bounded in vertical strips away from its poles, and satisfies

$$\Psi_n(s;W,W',\Phi)=\Psi_n(1-s;\widetilde W,\widetilde W',\widehat\Phi),$$

where $w_n$ is the anti-diagonal permutation matrix, $\widetilde W(g)=W(w_n\,{}^tg^{-1})$, $\widetilde W'(g)=W'(w_n\,{}^tg^{-1})$, and $\widehat\Phi(x)=\int_{\mathbb A_F^n}\Phi(y)\psi(\langle x,y\rangle)\,dy$. For factorizable $W,W'$, and $\Phi=\bigotimes_v\Phi_v$, it factors in a right half-plane of absolute convergence as

$$\Psi_n(s;W,W',\Phi)=\prod_v\int_{N_n(F_v)\backslash\mathrm{GL}_n(F_v)}W_v(g_v)W'_v(g_v)\Phi_v(e_ng_v)|\det g_v|_{F_v}^{s}\,dg_v,$$

with absolute and uniform convergence there. The local factors are the equal-rank Rankin–Selberg integrals.

## Statement references

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 2, §§2.3.1–2.3.2, especially Theorem 2.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§0–2](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)
