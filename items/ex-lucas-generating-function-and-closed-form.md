---
id: ex-lucas-generating-function-and-closed-form
kind: example
title: "The Lucas generating function and its two-root closed form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fibonacci-and-lucas-sequences, thm-linear-recurrence-iff-rational-generating-function, thm-closed-form-for-a-linear-recurrence-over-a-splitting-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Example 4.7.16"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Example

With $\phi=(1+\sqrt5)/2$ and $\widehat\phi=(1-\sqrt5)/2$, the Lucas sequence satisfies

$$\sum_{n\ge0}L_nx^n=\frac{2-x}{1-x-x^2}$$

in $\mathbb Q\llbracket x\rrbracket$, and

$$L_n=\phi^n+\widehat\phi^n$$

in $\mathbb Q(\sqrt5)$ for every $n\ge0$.

## Facts & Assumptions

**Given:** The Lucas initial values and recurrence.

[L1] The Lucas sequence satisfies $L_0=2$, $L_1=1$, and $L_{n+2}=L_{n+1}+L_n$ ([[def-fibonacci-and-lucas-sequences]]).

[L2] A recurrence beginning at zero has a rational generating function whose numerator is obtained by multiplying by its reciprocal denominator ([[thm-linear-recurrence-iff-rational-generating-function]]).

[L3] Distinct roots of a characteristic polynomial give a unique pure-exponential closed form over a characteristic-zero splitting field ([[thm-closed-form-for-a-linear-recurrence-over-a-splitting-field]]).

## Verification

**Proof technique:** direct.

1.1 For $L(x)=\sum_{n\ge0}L_nx^n$, [L1] gives $(1-x-x^2)L(x)=L_0+(L_1-L_0)x=2-x$, so [L2] proves the generating-function formula. [given, L1, L2, algebra]

1.2 Since $t^2-t-1=(t-\phi)(t-\widehat\phi)$, [L3] gives $L_n=A\phi^n+B\widehat\phi^n$. [L3, algebra]

2.1 The initial equations $A+B=2$ and $A\phi+B\widehat\phi=1$ have the solution $A=B=1$, because $\phi+\widehat\phi=1$. [step 1.2, L1, algebra]

3.1 Substitution in step 2.1 proves the displayed closed form for all $n\ge0$. [step 2.1] ∎
