---
id: cex-a-start-vector-orthogonal-to-the-dominant-left-eigendirection-can-defeat-power-iteration
kind: counterexample
title: "For a nonnormal matrix, a start vector orthogonal to the dominant left eigendirection can defeat power iteration"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue]
aliases: []
landmark: false
proof_strategy: direct
verification:
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

**Refuted claim:** once a matrix has a unique dominant eigenvalue, every start
vector makes power iteration converge to its eigendirection.

Let

$$ A= \begin{bmatrix} 2 & 1\\ 0 & 1 \end{bmatrix}, \qquad x_0=\frac1{\sqrt2}\begin{bmatrix}1\\-1\end{bmatrix}. $$

Then $2$ is the unique dominant eigenvalue of $A$, but the power iteration
started from $x_0$ stays fixed at the eigendirection of the smaller eigenvalue
$1$.

## Facts & Assumptions

**Given:** The matrix $A$ and start vector $x_0$ in the statement.

[L1] The convergence theorem requires a nonzero component in the dominant eigendirection ([[thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue]]).

## Counterexample

**Proof technique:** direct.

1.1 The right eigenvectors are $e_1$ for eigenvalue $2$ and $(1,-1)^T$ for eigenvalue $1$. A left eigenvector for eigenvalue $2$ is $(1,1)^T$, and $$ \begin{bmatrix}1&1\end{bmatrix}x_0=0. $$ So the start vector is orthogonal to the dominant left eigendirection. [algebra]
2.1 Direct multiplication gives $$ Ax_0= \frac1{\sqrt2} \begin{bmatrix} 1\\-1 \end{bmatrix} =x_0. $$ Hence every normalised power iterate equals $x_0$. [step 1.1, algebra]
3.1 The power iteration never approaches the dominant eigendirection $e_1$, so the start condition in [L1] is genuinely necessary. [L1, step 2.1] ∎