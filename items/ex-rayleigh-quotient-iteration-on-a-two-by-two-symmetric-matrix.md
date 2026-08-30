---
id: ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix
kind: example
title: "Rayleigh-quotient iteration on a $2\\times2$ symmetric matrix exhibits fast local convergence"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence]
aliases: []
landmark: false
proof_strategy: computation
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

## Example

Let

$$A=\operatorname{diag}(2,1),\qquad x(t)=\frac{1}{\sqrt{1+t^2}}\begin{bmatrix}1\\t\end{bmatrix}.$$

If $t\neq0$, one Rayleigh-quotient iteration step started from $x(t)$ has new
slope $-t^3$. At $t=0$ the start vector is already an eigenvector and the
Rayleigh-quotient step is not defined because the shifted matrix is singular.
Thus small nonzero errors cube in one step.

## Facts & Assumptions

**Given:** The symmetric matrix $A$ and the unit start vector $x(t)$.

[L1] At positive sufficiently small distance from a simple Hermitian
eigendirection, whenever the next step is defined, Rayleigh-quotient iteration
reduces that distance cubically
([[thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence]]).

## Verification

**Proof technique:** computation.

1.1 The Rayleigh quotient of $x(t)$ is $$ \mu(t)=\frac{2+t^2}{1+t^2}. $$ Therefore $$ A-\mu(t)I = \begin{bmatrix} \dfrac{t^2}{1+t^2} & 0\\[4pt] 0 & -\dfrac1{1+t^2} \end{bmatrix}. $$ [algebra]

2.1 If $t=0$, then $\mu(0)=2$ and $$ A-\mu(0)I=\operatorname{diag}(0,-1) $$ is singular, so [[def-rayleigh-quotient-iteration]] does not define a next iterate at that start vector. If $t\neq0$, solving $(A-\mu(t)I)y=x(t)$ gives $$ y\propto \begin{bmatrix} \dfrac{1+t^2}{t^2}\\[4pt] -(1+t^2)t \end{bmatrix}, $$ so after normalisation the new slope is $$ \frac{y_2}{y_1}=-t^3. $$ [step 1.1, algebra]

3.1 Thus every sufficiently small nonzero slope error $t$ becomes $-t^3$ in one step, which is the explicit two-dimensional form of the cubic behaviour from [L1]. [L1, step 2.1] ∎
