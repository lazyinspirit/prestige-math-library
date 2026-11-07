---
id: thm-level-zero-shtuka-lefschetz-count-has-cuspidal-plus-lower-rank-expansion
kind: theorem
title: "Level-at-zero shtuka Lefschetz counts have cuspidal and lower-rank spectral expansions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - thm-shtuka-fixed-point-count-has-cuspidal-plus-lower-rank-expansion
  - thm-arthur-selberg-truncated-trace-input-for-shtuka-lefschetz-counts
  - def-axiom-of-choice
  - def-countable-choice
  - thm-existence-hardernarasimhan-truncation-for-drinfeld-shtukas
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: >-
  AC and Countable Choice are carried through the global Hecke and
  Arthur–Selberg inputs; no weaker branch is asserted.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter II §2, Theorem II.15, printed pp. 54–59."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§2, level structures and the fixed-point trace expansion."
---

## Statement

Assume AC and Countable Choice. Let $X/\mathbb F_q$ be a smooth projective geometrically connected curve, $F=\mathbb F_q(X)$, $r\ge2$, and let $N$ contain a closed place $0$ with multiplicity $m_0$. Fix a rank-$r$ local shtuka model $\widehat F$ at $0$ whose zero is $0$ and whose pole is absent, and let $p:[0,r]\to\mathbb R_{\ge0}$ be a truncation polygon sufficiently convex as a function of $X,N$. There are finitely many scalars $c_\iota,\lambda_\iota$, integers $m_\iota\ge0$, and cuspidal automorphic representations $\pi_\iota$ of ranks $r_\iota\le r$, unramified outside $N$, such that for every closed place $\infty\in|X\setminus N|$ and all sufficiently large $s$ divisible by both $\deg(\infty)$ and $\deg(0)m_0$, writing $s'=s/\deg(\infty)$, the level-zero Lefschetz number on the $p$-truncated shtuka stack is

$$\operatorname{Lef}^{r,p\le p}_{N,\widehat F,\infty}(\operatorname{Frob}^{s})=\sum_{\iota}c_\iota s^{m_\iota}\lambda_\iota^{s}\left(\sum_{j=1}^{r_\iota}z_j(\pi_{\iota,\infty})^{-s'}\right).$$

## Statement references

[Laurent Lafforgue, Theorem II.15](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §2](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Proof obligations

The source states that the proof is similar to Theorem I.13, but its omitted details include the level-at-zero transfer calculation and the 1997 Arthur–Selberg Theorem 12′ input. Neither is a current locally proved supplier. The construction of the local model and the exact multiplicities in the expansion remain unresolved.
