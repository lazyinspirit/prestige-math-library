---
id: lem-binomial-series-for-a-repeated-pole
kind: lemma
title: 'Repeated poles expand formally as $(1-\lambda x)^{-j}=\sum_{n\ge0}\binom{n+j-1}{j-1}\lambda^n x^n$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-formal-power-series-unit-criterion, prop-coefficient-extraction-linearity-and-extensionality, def-binomial-coefficient, thm-pascals-rule]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Theorem 4.1.1"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "B. E. Sagan, Combinatorics: The Art of Counting, Section 3.7"
      url: "https://users.math.msu.edu/users/bsagan/Books/Aoc/GSM210.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $\lambda\in R$, and let $j\ge1$. In $R\llbracket x\rrbracket$,

$$\frac{1}{(1-\lambda x)^j}=\sum_{n\ge0}\binom{n+j-1}{j-1}\lambda^nx^n.$$

The binomial coefficient acts by repeated addition in $R$. The formula includes $n=0$, $j=1$, and $\lambda=0$ and is purely formal.

## Facts & Assumptions

**Given:** A commutative ring $R$, an element $\lambda\in R$, and an integer $j\ge1$.

[L1] A formal series is invertible exactly when its constant coefficient is a unit, and its inverse is unique ([[thm-formal-power-series-unit-criterion]]).

[L2] The coefficient of a Cauchy product is $[x^n](fg)=\sum_{i=0}^{n}[x^i]f[x^{n-i}]g$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[L3] Binomial coefficients count finite subsets and satisfy $\binom n0=1$, $\binom nn=1$, and $\binom nk=0$ for $k>n$ ([[def-binomial-coefficient]]).

[L4] The hockey-stick identity is $\sum_{i<n+1}\binom ik=\binom{n+1}{k+1}$ ([[thm-pascals-rule]]).

## Proof

**Proof technique:** induction.

1.1 For $j=1$, put $G=\sum_{n\ge0}\lambda^nx^n$. By [L2], the constant coefficient of $(1-\lambda x)G$ is $1$ and every positive coefficient is $\lambda^n-\lambda\lambda^{n-1}=0$, so $G=(1-\lambda x)^{-1}$ by [L1]; this is the formula because $\binom n0=1$. [base, L1, L2, L3]

2.1 Assume the formula holds for one $j\ge1$. Multiplying its right-hand side by the $j=1$ series from step 1.1, [L2] makes the coefficient of $x^n$ equal to $\lambda^n\sum_{k=0}^{n}\binom{k+j-1}{j-1}$. [ih, step 1.1, L2]

3.1 Terms below $j-1$ vanish by [L3], so [L4] changes the sum in step 2.1 to $\binom{n+j}{j}$; therefore the product is the claimed series for exponent $j+1$. [step 2.1, L3, L4]

4.1 The base case and induction step prove the formula for every $j\ge1$. At $n=0$ the coefficient is $1$, and at $\lambda=0$ all positive coefficients vanish, so the stated boundaries are included. [step 1.1, step 3.1, discharge-induction] ∎
