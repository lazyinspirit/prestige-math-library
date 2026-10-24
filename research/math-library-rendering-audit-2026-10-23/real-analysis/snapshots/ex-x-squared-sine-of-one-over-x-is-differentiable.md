---
id: ex-x-squared-sine-of-one-over-x-is-differentiable
kind: example
title: "The extension of x^2 sin(1/x) by zero is differentiable but its derivative is discontinuous at zero"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule, thm-algebra-of-derivatives, def-derivative, thm-quarter-turn-values-and-shift-formulas, thm-sequential-criterion-for-function-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis"
      url: "https://books.google.com/books/about/Introduction_to_Real_Analysis.html?id=YawbAAAAQBAJ"
    - title: "H. Zeisel, lim sin(x)/x and the definition of pi"
      url: "https://arxiv.org/abs/1302.1167"
pipeline_run: null
---

## Example

Define $f(0)=0$ and $f(x)=x^2\sin(1/x)$ for $x\ne0$. Then $f$ is differentiable on $\mathbb R$, with $f'(0)=0$, but $f'$ is not continuous at $0$.

## Facts & Assumptions

**Given:** The function $f$ of the statement.

[L1] $|\sin u|\le1$, $\sin'=\cos$, and the quarter-turn values of sine/cosine hold ([[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-derivatives]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L2] The chain and derivative-algebra rules, and the derivative definition, hold ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]]).

[L3] A function limit implies the same limit along every punctured convergent sequence ([[thm-sequential-criterion-for-function-limits]]).



## Verification

**Proof technique:** direct.

1.1 The difference quotient at zero is $f(x)/x=x\sin(1/x)$, whose absolute value is at most $|x|$; hence $f'(0)=0$. [L1, L2]

1.2 For $x\ne0$, product and chain rules give $f'(x)=2x\sin(1/x)-\cos(1/x)$. [L1, L2]

2.1 Along $r_n=1/(2\pi(n+1))$, the derivative tends to $-1$; along $s_n=1/((2n+1)\pi)$, it tends to $1$. [step 1.2, L1, algebra]

3.1 Both sequences tend to zero, so [L3] shows that $f'$ has no limit at zero and is not continuous there. [step 2.1, L3] ∎
