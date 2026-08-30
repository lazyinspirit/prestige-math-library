---
id: ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate
kind: example
title: "Power iteration on a diagonal matrix shows the $|\\lambda_2/\\lambda_1|^k$ convergence rate explicitly"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Let

$$ A=\operatorname{diag}(4,1), \qquad x_0=\frac1{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}. $$

Then

$$ x_k=\frac{1}{\sqrt{1+16^{-k}}}\begin{bmatrix}1\\4^{-k}\end{bmatrix}, $$

so the error in direction is exactly of order $4^{-k}=|\lambda_2/\lambda_1|^k$.

## Facts & Assumptions

**Given:** The diagonal matrix $A$ and starting vector $x_0$ in the statement.

[L1] For an $n\times n$ diagonalisable matrix with $n\ge2$, a simple strictly
dominant eigenvalue, and a start vector having nonzero component in its
eigendirection, power iteration converges projectively at the dominant
eigenvalue ratio
([[thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue]]).

## Verification

**Proof technique:** computation.

1.1 Since $A^k x_0=2^{-1/2}(4^k,1)^T$, normalising gives $$ x_k= \frac{1}{\sqrt{16^k+1}} \begin{bmatrix} 4^k\\1 \end{bmatrix} = \frac{1}{\sqrt{1+16^{-k}}} \begin{bmatrix} 1\\4^{-k} \end{bmatrix}. $$ [algebra]
2.1 The second coordinate of $x_k$ is asymptotic to $4^{-k}$, so the angle to the dominant eigendirection $\mathbb Fe_1$ decays like $4^{-k}$. This is exactly the rate predicted by [L1]. [L1, step 1.1, algebra] ∎
