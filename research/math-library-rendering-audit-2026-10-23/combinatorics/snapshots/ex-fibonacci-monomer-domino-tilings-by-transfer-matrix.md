---
id: ex-fibonacci-monomer-domino-tilings-by-transfer-matrix
kind: example
title: "Monomer–domino tilings of a board give the Fibonacci recurrence and transfer matrix"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fibonacci-and-lucas-sequences, thm-weighted-walks-are-entries-of-transfer-matrix-powers, thm-transfer-matrix-cofactor-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: bijection
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Example 4.7.16"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Example

Let $T_n$ be the number of tilings of a row of $n$ labelled cells by monomers of length one and dominoes of length two. Then

$$T_n=F_{n+1},\qquad \sum_{n\ge0}T_nx^n=\frac{1}{1-x-x^2}.$$

Equivalently, with states $0$ (the current cell is already covered from the left) and $1$ (the current cell is free), the transfer matrix is

$$C=\begin{pmatrix}0&1\\1&1\end{pmatrix},$$

and $T_n=(C^n)_{11}$.

## Facts & Assumptions

**Given:** Linear boards tiled by monomers and dominoes, including the empty tiling at length zero.

[L1] The Fibonacci sequence is determined by $F_0=0$, $F_1=1$, and $F_{n+2}=F_{n+1}+F_n$ ([[def-fibonacci-and-lucas-sequences]]).

[L2] The $(u,v)$ entry of the $n$th power of a transfer matrix counts length-$n$ walks from $u$ to $v$ when all edge weights are one ([[thm-weighted-walks-are-entries-of-transfer-matrix-powers]]).

[L3] A fixed-entry walk generating series is the corresponding cofactor of $I-xC$ divided by $\det(I-xC)$ ([[thm-transfer-matrix-cofactor-formula]]).

## Verification

**Proof technique:** last-tile decomposition and transfer bijection.

1.1 There is one empty tiling and one one-cell tiling, so $T_0=T_1=1$. For $n\ge2$, the last tile is uniquely a monomer after a tiling of length $n-1$ or a domino after one of length $n-2$, so $T_n=T_{n-1}+T_{n-2}$. [given, algebra]

1.2 In the two-state encoding, $1\to1$ places a monomer, $1\to0$ starts a domino, and $0\to1$ completes it. Thus board tilings are in bijection with length-$n$ walks from state $1$ back to state $1$, and [L2] gives $T_n=(C^n)_{11}$. [L2, algebra]

2.1 Comparing the initial values and recurrence in step 1.1 with [L1] gives $T_n=F_{n+1}$ for every $n\ge0$. [step 1.1, L1, algebra]

3.1 Since $I-xC=\left(\begin{smallmatrix}1&-x\\-x&1-x\end{smallmatrix}\right)$ has determinant $1-x-x^2$ and the relevant cofactor is $1$, [L3] gives the displayed generating function. [step 1.2, L3, algebra] ∎
