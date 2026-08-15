---
id: ex-binary-words-avoiding-101
kind: example
title: "Binary words avoiding $101$ have generating function $(1+x^2)/(1-2x+x^2-x^3)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-prefix-automaton-for-a-finite-forbidden-factor-set, thm-transfer-matrix-cofactor-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: transfer-matrix
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $a_n$ be the number of binary words of length $n$ that avoid $101$. Then

$$\sum_{n\ge0}a_nx^n=\frac{1+x^2}{1-2x+x^2-x^3}.$$

The first values are

$$a_0,a_1,\ldots,a_6=1,2,4,7,12,21,37.$$

## Facts & Assumptions

**Given:** The singleton forbidden set $B=\{101\}$ over $\{0,1\}$.

[L1] The prefix automaton uses the allowed proper-prefix states and the longest suffix transition ([[def-prefix-automaton-for-a-finite-forbidden-factor-set]]).

[L2] Its fixed-entry walk series are cofactors of $I-xA$ divided by $\det(I-xA)$ ([[thm-transfer-matrix-cofactor-formula]]).

## Verification

**Proof technique:** transfer matrix with finite enumeration check.

1.1 By [L1], the states are $\varepsilon,1,10$ and, in that order, their transfer matrix is $A=\left(\begin{smallmatrix}1&1&0\\0&1&1\\1&0&0\end{smallmatrix}\right)$. The missing transition from $10$ on $1$ is precisely the rejected factor $101$. [given, L1]

2.1 Avoiding words are walks from $\varepsilon$ to any state. Summing the three corresponding entries supplied by [L2], or solving $(I-xA)y=\mathbf1$, gives $(1+x^2)/(1-2x+x^2-x^3)$. [step 1.1, L2, algebra]

3.1 Direct enumeration by length gives $1,2,4,7,12,21,37$ through length six. These values also satisfy $a_n=2a_{n-1}-a_{n-2}+a_{n-3}$ for $3\le n\le6$, as the denominator in step 2.1 requires. [step 2.1, algebra] ∎
