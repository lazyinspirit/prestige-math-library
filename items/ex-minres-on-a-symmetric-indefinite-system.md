---
id: ex-minres-on-a-symmetric-indefinite-system
kind: example
title: "MINRES still minimizes the residual on a small symmetric indefinite system"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods"
      url: "https://www.netlib.org/templates/templates.html"
---

## Example

Take

$$A=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad b=\binom11,\qquad x_0=\binom00.$$

Then $A$ is symmetric and indefinite. MINRES at step $1$ gives the residual
minimizer in the one-dimensional affine Krylov space.

## Facts & Assumptions

**Given:** The displayed Hermitian indefinite system.

[L1] For Hermitian matrices, including indefinite ones, MINRES minimizes the
Euclidean residual over $x_0+K_m(A,r_0)$
([[thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space]]).

## Verification
**Proof technique:** direct calculation.

1.1 Here $r_0=b$, so $q_1=r_0/\|r_0\|_2=(1,1)^T/\sqrt2$ and $$Aq_1=\binom{1/\sqrt2}{-1/\sqrt2},\qquad \alpha_1=q_1^TAq_1=0,\qquad \beta_1=1,\qquad q_2=\binom{1/\sqrt2}{-1/\sqrt2}.$$ Thus the first Lanczos matrix is $$\bar T_1=\binom01,$$ and the step-$1$ least-squares problem is $$\min_{y\in\mathbb R}\left\|\binom{\sqrt2}{0}-\binom0y\right\|_2,$$ whose unique minimizer is $y_1=0$. Therefore $x_1=x_0+q_1y_1=0$. [algebra]

2.1 The affine space $x_0+K_1(A,r_0)$ is $\{t(1,1)^T:t\in\mathbb R\}$. For such a vector, $$b-A\binom tt=\binom{1-t}{1+t},\qquad \left\|b-A\binom tt\right\|_2^2=(1-t)^2+(1+t)^2=2+2t^2,$$ which is minimized exactly at $t=0$. So the explicit computation in step 1.1 matches [L1]. [L1, step 1.1, algebra] ∎
