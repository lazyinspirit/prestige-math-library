---
id: cex-equal-dominant-moduli-can-make-power-iteration-cycle
kind: counterexample
title: "Equal dominant moduli can make power iteration alternate or cycle instead of converging"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-power-iteration]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
---

## Statement refuted

**Refuted claim:** power iteration converges whenever a matrix has an
eigenvalue of largest modulus.

Let

$$ A=\operatorname{diag}(1,-1), \qquad x_0=\frac1{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}. $$

Then the power iteration alternates between two vectors and does not converge.

## Facts & Assumptions

**Given:** The diagonal matrix $A$ and start vector $x_0$ from the statement.

[L1] Power iteration is the recurrence $x_{k+1}=Ax_k/\|Ax_k\|_2$ ([[def-power-iteration]]).

## Counterexample

**Proof technique:** direct.

1.1 Since $A$ is diagonal with entries $1$ and $-1$, $$ x_1= \frac1{\sqrt2}\begin{bmatrix}1\\-1\end{bmatrix}, \qquad x_2= \frac1{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}=x_0. $$ [L1, algebra]

2.1 Therefore $x_{2k}=x_0$ and $x_{2k+1}=x_1$ for every $k\ge0$. The sequence is periodic of period $2$, so it does not converge. [step 1.1, algebra]

3.1 The matrix has dominant modulus $1$, but equal dominant moduli prevent convergence here, refuting the claim. [step 2.1] ∎