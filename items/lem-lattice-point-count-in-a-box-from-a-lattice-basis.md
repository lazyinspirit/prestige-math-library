---
id: lem-lattice-point-count-in-a-box-from-a-lattice-basis
kind: lemma
title: "A coordinate-box lattice-point bound from a basis"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-full-euclidean-lattice-and-covolume]
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, Lemma 1"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Statement

Let $\Lambda=\mathbb Zb_1+\cdots+\mathbb Zb_m\subseteq\mathbb R^m$ be a full
lattice with basis matrix $B=(b_1\ \cdots\ b_m)$. For real numbers
$R_1,\ldots,R_m\ge0$, put
$Q=\{x\in\mathbb R^m:|x_i|\le R_i\}$ and
$S_j=\sum_{i=1}^m|(B^{-1})_{ji}|R_i$. Then

$$\#(\Lambda\cap Q)\le\prod_{j=1}^m(2\lfloor S_j\rfloor+1).$$

## Statement references

[Heath-Brown, lattice-basis estimates](https://arxiv.org/pdf/math/0405392v1)

## Facts & Assumptions

**Given:** The full lattice $\Lambda$, its basis matrix $B$, and the box $Q$
in the Statement.

[F1] [[def-full-euclidean-lattice-and-covolume]]: A full lattice has a basis
matrix $B$ that is invertible, and every lattice vector has a unique integer
coordinate vector $\lambda$ with $x=B\lambda$.

## Proof

1.1 For $x\in\Lambda\cap Q$, write $x=B\lambda$ with
$\lambda=(\lambda_1,\ldots,\lambda_m)\in\mathbb Z^m$ using [F1]. Then
$\lambda=B^{-1}x$, so for every $j$,
$|\lambda_j|\le\sum_i|(B^{-1})_{ji}|R_i=S_j$. [F1, given, algebra]

2.1 There are at most $2\lfloor S_j\rfloor+1$ integers in the interval
$[-S_j,S_j]$ for each coordinate $\lambda_j$. The map $x\mapsto\lambda$ is
injective by [F1], so multiplying these coordinate bounds proves the displayed
product estimate and finiteness. [step 1.1, F1, algebra] ∎
