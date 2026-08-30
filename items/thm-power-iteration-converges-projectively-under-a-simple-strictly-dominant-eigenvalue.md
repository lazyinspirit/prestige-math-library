---
id: thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue
kind: theorem
title: "If a diagonalisable matrix has a simple eigenvalue of strictly largest modulus and the start vector has a nonzero component in that eigendirection, power iteration converges projectively at the eigenvalue-ratio rate"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-diagonalisable-endomorphism, def-power-iteration]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $n\ge2$, and let
$A\in M_n(\mathbb F)$ be diagonalisable with eigenvalues
$\lambda_1,\dots,\lambda_n$ and eigenvectors $v_1,\dots,v_n$, where
$|\lambda_1|>|\lambda_2|\ge\cdots\ge|\lambda_n|$ and $\lambda_1$ is simple. Let
$x_0=\sum_{i=1}^n c_i v_i$ with $c_1\neq0$, and let $(x_k)$ be the power
iteration of [[def-power-iteration]]. Then there exist scalars
$\alpha_k\in\mathbb F$ with $|\alpha_k|=1$ such that

$$
\|\alpha_k x_k-\tfrac{v_1}{\|v_1\|_2}\|_2=O\!\left(\left|\frac{\lambda_2}{\lambda_1}\right|^k\right).
$$

In particular, $x_k$ converges to the eigendirection of $\lambda_1$
projectively.

## Facts & Assumptions

**Given:** A diagonalisable matrix $A$ with the displayed eigenvalue ordering, and a start vector $x_0=\sum_i c_i v_i$ with $c_1\neq0$.

[L1] A diagonalisable endomorphism admits an eigenbasis ([[def-diagonalisable-endomorphism]]).

[L2] Power iteration is the normalised recurrence $x_{k+1}=Ax_k/\|Ax_k\|_2$ ([[def-power-iteration]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the chosen eigenvectors form a basis, so for every $k\ge0$, $$ A^k x_0 =\lambda_1^k\left(c_1v_1+\sum_{i=2}^n c_i\left(\frac{\lambda_i}{\lambda_1}\right)^k v_i\right). $$ [L1, given, algebra]

1.2 The strict modulus inequality and $n\ge2$ imply $\lambda_1\neq0$.
In the eigenbasis, the $v_1$-coefficient of $A^kx_0$ is
$c_1\lambda_1^k\neq0$, so $A^kx_0\neq0$ for every $k\ge0$. Therefore the
iteration of [L2] is defined at every step and has the same direction as
$A^kx_0$. Moreover, because $|\lambda_i/\lambda_1|<1$ for $i\ge2$, the
bracket in step 1.1 tends to $c_1v_1$. [L2, step 1.1, algebra]

2.1 Let $\alpha_k$ cancel the phase of $\lambda_1^k c_1$. Then step 1.1 gives $$ \alpha_k x_k= \frac{v_1+\sum_{i=2}^n (c_i/c_1)(\lambda_i/\lambda_1)^k v_i} {\left\|v_1+\sum_{i=2}^n (c_i/c_1)(\lambda_i/\lambda_1)^k v_i\right\|_2}. $$ The numerator differs from $v_1$ by $O(|\lambda_2/\lambda_1|^k)$, so the same is true after normalisation. [step 1.1, step 1.2, algebra]

3.1 Therefore the normalised iterates converge projectively to the eigendirection of $v_1$, and the convergence rate is $O(|\lambda_2/\lambda_1|^k)$. [step 2.1] ∎
