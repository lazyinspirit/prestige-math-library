---
id: thm-shtuka-fixed-point-count-has-cuspidal-plus-lower-rank-expansion
kind: theorem
title: "Truncated shtuka Lefschetz counts have cuspidal and lower-rank spectral expansions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - thm-drinfeld-shtuka-stacks-have-partial-frobenius-and-hecke-correspondences
  - thm-arthur-selberg-truncated-trace-input-for-shtuka-lefschetz-counts
  - def-axiom-of-choice
  - def-countable-choice
  - thm-existence-hardernarasimhan-truncation-for-drinfeld-shtukas
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: >-
  AC and Countable Choice are inherited from the adelic trace-formula input and
  the Hecke action; the geometric fixed-point count is not asserted in a
  weaker axiom branch.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter I, Theorem I.13, printed pp. 31–33."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§2, fixed-point-counting strategy and the cuspidal plus proper-Levi terms."
---

## Statement

Assume AC and Countable Choice. Let $X/\mathbb F_q$ be a smooth projective geometrically connected curve, $F=\mathbb F_q(X)$, $r\ge2$, and $N\subset X$ a finite level. Let $f$ be a level-$N$ Hecke function modulo the degree-one idèle action, let $t\in\mathbb Z$, let $p$ be a truncation polygon sufficiently convex as a function of $X,N$ and $\operatorname{supp}(f)$, and let $\alpha\in\mathbb R$. Let $T_f$ be the finite set of places where $f$ is not spherical, and let $\mathcal A^r_N$ be the finite set of cuspidal representations appearing in the degree-one-idèle quotient of the level-$N$ cuspidal spectrum. For distinct closed places $\infty,0\in|X|\setminus T_f$, put $d_\infty=\deg(\infty)$, $d_0=\deg(0)$, and choose positive integers $s',u'$ with $d_0u'-d_\infty s'=t$. Here $\operatorname{Lef}$ is the stack-weighted intersection number of the graph of the Hecke/Frobenius correspondence with the graph of the specified partial Frobenius. The fixed-point Lefschetz numbers for the two partial-Frobenius sequences

$$n\longmapsto \operatorname{Lef}^{r,p,\alpha}_{\operatorname{Frob}^{n}_{\infty},0}\!\left(f\times\operatorname{Frob}_{\infty}^{d_\infty s'}\times\operatorname{Frob}_{0}^{d_0u'}\right),\qquad n\longmapsto \operatorname{Lef}^{r,p,\alpha}_{\infty,\operatorname{Frob}^{n}_{0}}\!\left(f\times\operatorname{Frob}_{\infty}^{d_\infty s'}\times\operatorname{Frob}_{0}^{d_0u'}\right)$$

are periodic and have the same mean. For sufficiently large $d_\infty,d_0$ and sufficiently large $d_\infty s'$ or $d_0u'$, that mean is

$$\sum_{\pi\in\mathcal A^r_N}\operatorname{Tr}_{\pi}(f)q^{\frac{r-1}{2}(d_0u'+d_\infty s')}\left(\sum_{j=1}^{r}z_j(\pi_\infty)^{-s'}\right)\left(\sum_{j=1}^{r}z_j(\pi_0)^{u'}\right)+\sum_{a\in I}c_a(d_\infty s')^{m_a}\lambda_a^{d_\infty s'}\left(\sum_{j=1}^{r'_a}z_j(\pi'_{a,\infty})^{-s'}\right)\left(\sum_{j=1}^{r_a}z_j(\pi_{a,0})^{u'}\right),$$

where $I$ is finite, $m_a\ge0$, $c_a,\lambda_a$ are scalars, $\pi_a,\pi'_a$ are cuspidal automorphic representations of ranks $r_a,r'_a<r$, and $z_j$ denotes the normalized unramified Hecke eigenvalue.

## Statement references

[Laurent Lafforgue, Theorem I.13](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §2](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Proof obligations

Theorem I.13 is stated in the source, but its proof uses Chapter I Theorems I.7 and I.9, Proposition I.10, the full 1997 Arthur–Selberg trace-formula arguments, and the geometric shtuka counting formula. Those arguments have not been locally reconstructed. The finite-level mean, the periodicity, and the exact coefficients in the lower-rank terms remain proof obligations.
