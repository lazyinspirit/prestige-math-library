---
id: ex-binary-words-avoiding-consecutive-ones
kind: example
title: "Binary words avoiding $11$ are counted by $F_{n+2}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fibonacci-and-lucas-sequences, def-prefix-automaton-for-a-finite-forbidden-factor-set, thm-transfer-matrix-cofactor-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: transfer-matrix
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Proposition 4.7.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Example

Let $a_n$ be the number of binary words of length $n$ that avoid $11$. Then

$$a_n=F_{n+2},\qquad \sum_{n\ge0}a_nx^n=\frac{1+x}{1-x-x^2}.$$

The proper-prefix states $\varepsilon,1$ have transfer matrix

$$A=\begin{pmatrix}1&1\\1&0\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The singleton forbidden set $B=\{11\}$ over $\{0,1\}$.

[L1] The Fibonacci numbers satisfy their recurrence and fixed initial values ([[def-fibonacci-and-lucas-sequences]]).

[L2] The prefix automaton sends a state and letter to the longest allowed proper-prefix suffix, rejecting a completed forbidden factor ([[def-prefix-automaton-for-a-finite-forbidden-factor-set]]).

[L3] Fixed-entry walk generating functions are the corresponding cofactors of $I-xA$ divided by its determinant ([[thm-transfer-matrix-cofactor-formula]]).

## Verification

**Proof technique:** transfer matrix.

1.1 By [L2], state $\varepsilon$ has transitions labelled $0$ to $\varepsilon$ and $1$ to $1$, while state $1$ has only the transition labelled $0$ to $\varepsilon$. This gives the displayed matrix. [given, L2]

2.1 Every avoiding word labels one walk from $\varepsilon$ to either state. Since $I-xA=\left(\begin{smallmatrix}1-x&-x\\-x&1\end{smallmatrix}\right)$, summing the first-row entries of its inverse via [L3] gives $(1+x)/(1-x-x^2)$. [step 1.1, L3, algebra]

3.1 Its coefficients begin $a_0=1,a_1=2$ and satisfy $a_{n+2}=a_{n+1}+a_n$, so comparison with [L1] gives $a_n=F_{n+2}$. [step 2.1, L1, algebra] ∎
