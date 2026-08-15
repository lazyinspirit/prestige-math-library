---
id: ex-fibonacci-generating-function-and-binet-formula
kind: example
title: 'The Fibonacci generating function and Binet formula over $\mathbb Q(\sqrt5)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fibonacci-and-lucas-sequences, thm-linear-recurrence-iff-rational-generating-function, thm-closed-form-for-a-linear-recurrence-over-a-splitting-field, rem-reciprocal-root-convention-for-recurrences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Example 4.1.2"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Example

Let $(F_n)$ be the Fibonacci sequence and put

$$\phi=\frac{1+\sqrt5}{2},\qquad \widehat\phi=\frac{1-\sqrt5}{2}.$$

Then, in $\mathbb Q\llbracket x\rrbracket$,

$$\sum_{n\ge0}F_nx^n=\frac{x}{1-x-x^2},$$

and, in the splitting field $\mathbb Q(\sqrt5)$,

$$F_n=\frac{\phi^n-\widehat\phi^n}{\sqrt5}\qquad(n\ge0).$$

## Facts & Assumptions

**Given:** The Fibonacci initial values and recurrence.

[L1] The Fibonacci sequence satisfies $F_0=0$, $F_1=1$, and $F_{n+2}=F_{n+1}+F_n$ ([[def-fibonacci-and-lucas-sequences]]).

[L2] Multiplication by the reciprocal recurrence denominator converts a recurrence into its finite numerator ([[thm-linear-recurrence-iff-rational-generating-function]]).

[L3] Over a characteristic-zero splitting field, distinct characteristic roots give a unique linear combination of their powers ([[thm-closed-form-for-a-linear-recurrence-over-a-splitting-field]]).

[L4] The factors $t-\lambda$ of the characteristic polynomial correspond to the factors $1-\lambda x$ of the reciprocal denominator ([[rem-reciprocal-root-convention-for-recurrences]]).

## Verification

**Proof technique:** direct.

1.1 If $F(x)=\sum_{n\ge0}F_nx^n$, coefficient extraction using [L1] gives $(1-x-x^2)F(x)=x$; [L2] therefore gives the displayed rational generating function. [given, L1, L2, algebra]

1.2 The polynomial $t^2-t-1$ factors as $(t-\phi)(t-\widehat\phi)$ in $\mathbb Q(\sqrt5)[t]$, in agreement with [L4]. [L4, algebra]

2.1 By [L3], $F_n=A\phi^n+B\widehat\phi^n$. The equations $A+B=F_0=0$ and $A\phi+B\widehat\phi=F_1=1$ give $A=1/\sqrt5$ and $B=-1/\sqrt5$. [step 1.2, L1, L3, algebra]

3.1 Substitution in step 2.1 proves Binet's formula, including $n=0$ and $n=1$. [step 2.1] ∎
