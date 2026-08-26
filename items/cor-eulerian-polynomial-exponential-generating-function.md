---
id: cor-eulerian-polynomial-exponential-generating-function
kind: corollary
title: "The Eulerian-polynomial exponential generating function in $\\mathbb{Q}(t)\\llbracket x\\rrbracket$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eulerian-recurrence, def-eulerian-number-and-eulerian-polynomial, def-formal-exponential-logarithm-and-powers, thm-formal-exponential-logarithm-identities, prop-formal-derivative-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

In the formal power series ring $\mathbb{Q}(t)\llbracket x\rrbracket$, where
$t$ is an indeterminate,

$$\sum_{n \ge 0}A_n(t)\frac{x^n}{n!}=\frac{t-1}{t-e^{(t-1)x}}.$$

## Facts & Assumptions

**Given:** The Eulerian recurrence, the Eulerian polynomials $A_n(t)=\sum_{k=0}^{n-1}A(n,k)t^k$, and the formal series ring $\mathbb{Q}(t)\llbracket x\rrbracket$.

[L1] The Eulerian numbers satisfy $A(n,k)=(k+1)A(n-1,k)+(n-k)A(n-1,k-1)$ ([[thm-eulerian-recurrence]]).

[L2] Formal $\exp$ and $\log$ are inverse homomorphisms and obey the expected derivative rules ([[thm-formal-exponential-logarithm-identities]], [[prop-formal-derivative-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Summing [L1] against $t^k$ gives the polynomial recurrence $A_n(t)=(1+(n-1)t)A_{n-1}(t)+t(1-t)A'_{n-1}(t)$. [L1, algebra]

2.1 Let $F(x,t):=\sum_{n \ge 0}A_n(t)x^n/n! \in \mathbb{Q}(t)\llbracket x\rrbracket$. Differentiating termwise in $x$ and using step 1.1 yields $(1-tx)\,\partial_x F = F+t(1-t)\,\partial_t F$, with initial condition $F(0,t)=1$. [step 1.1, algebra]

3.1 Put $G(x,t):=(t-1)/(t-e^{(t-1)x}) \in \mathbb{Q}(t)\llbracket x\rrbracket$; this is well defined because the denominator has nonzero constant term $t-1$ in the coefficient field $\mathbb{Q}(t)$. Direct formal differentiation shows that $G$ satisfies the same differential equation and the same initial condition as $F$. Since the recurrence of step 1.1 determines the coefficient of $x^n$ from lower degrees uniquely, the formal solution is unique, so $F=G$. [step 2.1, L2, algebra]

4.1 Therefore $\sum_{n \ge 0}A_n(t)x^n/n!=(t-1)/(t-e^{(t-1)x})$. [step 3.1] ∎
