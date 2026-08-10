---
id: thm-diagonal-ramsey-counting-lower-bound
kind: theorem
title: "Erdős's finite counting bound $R(k,k)>2^{k/2}$ for every $k\\ge3$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-off-diagonal-ramsey-number, def-binomial-coefficient, thm-binomial-closed-formula, thm-cardinality-of-a-set-of-functions, thm-sum-rule, thm-product-rule, def-rational-power, lem-rational-power-monotone, def-nat-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Fox et al., Graph Ramsey Theory, Section 2.1"
      url: "https://math.mit.edu/~fox/paper-graphramsey.pdf"
pipeline_run: null
---

## Statement

For every natural $k\ge3$, the diagonal Ramsey number satisfies

$$R(k,k)>2^{k/2},$$

where $R$ is [[def-off-diagonal-ramsey-number]], real rational powers are those of [[def-rational-power]] and [[lem-rational-power-monotone]], and the finite powers and products below use [[def-nat-power]], [[thm-product-rule]] and [[thm-sum-rule]].

## Facts & Assumptions

**Given:** A natural $k\ge3$ and $N:=\lfloor2^{k/2}\rfloor$; binomial coefficients are as in [[def-binomial-coefficient]].

[L1] Then $A^{B}$ is finite and $\lvert A^{B}\rvert = \lvert A\rvert^{\lvert B\rvert}$ ([[thm-cardinality-of-a-set-of-functions]]).

[L2] $\binom{n}{k}\cdot k!\cdot (n-k)! = n!$ ([[thm-binomial-closed-formula]]).

## Proof

**Proof technique:** direct.

1.1 There are $\binom N2$ edges in $K_N$, and [L1] therefore counts exactly $2^{\binom N2}$ red-blue edge colourings. [L1]

2.1 For a fixed $k$-vertex set, exactly $2\cdot2^{\binom N2-\binom k2}$ colourings make all its edges monochromatic. Summing these finite bad sets over the $\binom Nk$ choices, with overlaps allowed, shows that a colouring with no monochromatic $k$-set exists whenever $2\binom Nk2^{-\binom k2}<1$. [step 1.1, L1]

3.1 From [L2], $\binom Nk\le N^k/k!$. Since $N\le2^{k/2}$, the left side in step 2.1 is at most $2^{1+k/2}/k!$. At $k=3$ this is $2^{5/2}/6<1$; thereafter the ratio of the bound for $k+1$ to that for $k$ is $\sqrt2/(k+1)<1$. Hence the strict inequality holds for every $k\ge3$. [step 2.1, L2, algebra]

4.1 Step 2.1 supplies a colouring on $N$ vertices with no monochromatic $k$-set, so $R(k,k)>N$. As $R(k,k)$ is an integer and $N=\lfloor2^{k/2}\rfloor$, this implies $R(k,k)\ge N+1>2^{k/2}$. [step 3.1] ∎
