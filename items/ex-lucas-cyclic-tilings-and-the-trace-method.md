---
id: ex-lucas-cyclic-tilings-and-the-trace-method
kind: example
title: "Cyclic monomer–domino tilings are counted by Lucas numbers through a matrix trace"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fibonacci-and-lucas-sequences, cor-closed-walk-trace-generating-functions, cor-cayley-hamilton-recurrences-for-matrix-powers]
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

Use the two-state Fibonacci graph with transfer matrix

$$C=\begin{pmatrix}0&1\\1&1\end{pmatrix}.$$

A closed state walk of length $n$ encodes a monomer–domino tiling of $n$ cyclically arranged labelled cells, with state $1$ meaning that the next cell is free and state $0$ meaning that it is already covered by a domino started at the preceding cell. With the conventions inherited from closed walks, length zero has two empty boundary states, length one has one monomer tiling, and length two has three tilings. The number of these cyclic tilings is

$$\operatorname{tr}(C^n)=L_n\qquad(n\ge0).$$

Consequently,

$$\sum_{n\ge0}L_nx^n=\frac{2-x}{1-x-x^2}.$$

## Facts & Assumptions

**Given:** The Fibonacci transfer graph and the stated small-size cyclic convention.

[L1] The Lucas sequence begins $L_0=2,L_1=1$ and satisfies $L_{n+2}=L_{n+1}+L_n$ ([[def-fibonacci-and-lucas-sequences]]).

[L2] The closed-walk series of a transfer matrix is the generating series of the traces of its powers ([[cor-closed-walk-trace-generating-functions]]).

[L3] Cayley–Hamilton makes the trace sequence of powers of an invertible $2\times2$ matrix satisfy the recurrence given by its characteristic polynomial ([[cor-cayley-hamilton-recurrences-for-matrix-powers]]).

## Verification

**Proof technique:** closed-walk bijection and recurrence identification.

1.1 The transitions $1\to1$, $1\to0$, and $0\to1$ respectively place a monomer, start a domino, and finish that domino. Closing the state walk matches the boundary conditions at the marked seam, giving the asserted cyclic-tiling encoding and the stated counts for $n=0,1,2$. [given, algebra]

1.2 The matrix $C$ is invertible, has characteristic polynomial $t^2-t-1$, and has $\operatorname{tr}(C^0)=2$ and $\operatorname{tr}(C)=1$. Thus [L3] and [L1] give $\operatorname{tr}(C^n)=L_n$ for every $n\ge0$. [L1, L3, algebra]

2.1 By [L2], the cyclic-tiling series is the trace series. Directly, $\operatorname{adj}(I-xC)$ has trace $2-x$ and $\det(I-xC)=1-x-x^2$, so the trace formula in [L2] gives the displayed quotient. [step 1.1, step 1.2, L2, algebra] ∎
