---
id: lem-pseudo-residuals-are-negative-score-gradient
kind: lemma
title: "Pseudo-residuals are the negative gradient in sample-score space"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
dependency_level: 1
deps:
  - def-negative-gradient-pseudo-residual
  - def-total-derivative-in-euclidean-space
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-total-derivatives
  - def-directional-and-partial-derivatives
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - def-jacobian-matrix-and-gradient
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., 12th printing'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
    - title: 'Alexey Natekin and Alois Knoll, "Gradient boosting machines, a tutorial," Frontiers in Neurorobotics 7 (2013), Article 21'
      url: 'https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2013.00021/full'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Statement

Let $N\ge1$, let $(x_i,y_i)_{i=1}^N$ be a finite sample, let $f:\mathcal X\to\mathbb R$, and let $U\subseteq\mathbb R$ be open with $z_i=f(x_i)\in U$ for every $i$. Suppose each scalar loss $t\mapsto\ell(y_i,t)$ is defined on $U$ and differentiable at $z_i$. Write $\partial_2\ell(y_i,z_i)=\left.\frac{d}{dt}\ell(y_i,t)\right|_{t=z_i}$ and define $\Phi:U^N\to\mathbb R$ by $\Phi(w)=\sum_{i=1}^N\ell(y_i,w_i)$. Then $\Phi$ is totally differentiable at $z$, its derivative in a score increment $v=(v_1,\ldots,v_N)$ is

$$D\Phi(z)v=\sum_{i=1}^N\partial_2\ell(y_i,z_i)v_i,$$

and its Euclidean gradient is $\nabla\Phi(z)=(\partial_2\ell(y_i,z_i))_{i=1}^N$. For these possibly local losses, define the pseudo-residual by $r_i(f)=-\partial_2\ell(y_i,z_i)$; this agrees with the usual definition when the loss is finite-valued on all of $\mathcal Y\times\mathbb R$. Then the pseudo-residual vector associated with $f$ on this sample is exactly $-\nabla\Phi(z)$ in sample-score space.

## Statement references

[Trevor Hastie, Robert Tibshirani, and Jerome Friedman, *The Elements of Statistical Learning*, 2nd ed., §§10.10.1–10.10.3, equations (10.35)–(10.37), printed pp. 358–361](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Alexey Natekin and Alois Knoll, “Gradient boosting machines, a tutorial,” §§2.3–2.4](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2013.00021/full)

## Facts & Assumptions

**Given:** Sample scores $z_i=f(x_i)$ in an open scalar domain $U$ and scalar losses differentiable at those scores.

[F1] [[def-negative-gradient-pseudo-residual]]: For a finite-valued loss on $\mathcal Y\times\mathbb R$ whose sampled sections are differentiable at the scores, the empirical score loss is $\Phi(z)=\sum_i\ell(y_i,z_i)$, and the pseudo-residual is $r_i=-\partial_2\ell(y_i,z_i)$.

[F2] [[def-total-derivative-in-euclidean-space]]: Total differentiability at a point means a linear first-order approximation whose remainder divided by the increment norm tends to zero.

[F3] [[thm-chain-rule-for-total-derivatives]]: If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable and $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$.

[F4] [[thm-algebra-of-total-derivatives]]: Finite sums of totally differentiable maps are totally differentiable and their derivatives add.

[F5] [[def-directional-and-partial-derivatives]]: A coordinate partial derivative is the directional derivative along the corresponding standard basis direction.

[F6] [[thm-total-derivative-computes-directional-and-partial-derivatives]]: When a total derivative exists, its value on each coordinate direction is the corresponding partial derivative.

[F7] [[def-jacobian-matrix-and-gradient]]: For a scalar-valued function, the Euclidean gradient is the vector of coordinate partial derivatives in standard coordinate order.

## Proof

1.1 For each $i$, let $\pi_i(z)=z_i$ and $g_i(t)=\ell(y_i,t)$. The coordinate projection has derivative $D\pi_i(z)v=v_i$ because its linear approximation has zero remainder. Differentiability of $g_i$ at $z_i$ gives $g_i(z_i+u)=g_i(z_i)+\partial_2\ell(y_i,z_i)u+o(|u|)$, so $Dg_i(z_i)u=\partial_2\ell(y_i,z_i)u$. [given, F2, construct]

2.1 By the chain rule, $\psi_i=g_i\circ\pi_i$ is totally differentiable and $D\psi_i(z)v=\partial_2\ell(y_i,z_i)v_i$. [F3, step 1.1]

3.1 Since $\Phi=\sum_{i=1}^N\psi_i$, the finite-sum rule gives $D\Phi(z)v=\sum_{i=1}^N\partial_2\ell(y_i,z_i)v_i$. [F4, step 2.1, induction]

4.1 Evaluating step 3.1 on the coordinate direction that changes only $z_i$ gives $\partial_{z_i}\Phi(z)=\partial_2\ell(y_i,z_i)$ by [F5] and [F6], so [F7] gives the asserted gradient. Extend the sampled loss sections by zero outside $U$ to obtain a finite-valued loss on $\{y_1,\ldots,y_N\}\times\mathbb R$. Since $U$ is open, this extension agrees with each original section near $z_i$ and has the same derivative there. Thus [F1] applied to the extension yields exactly the locally defined $r_i(f)$, independently of the values outside $U$. Consequently $(r_i(f))_{i=1}^N=-\nabla\Phi(z)$, also agreeing with [F1] whenever the original loss is globally defined. [given, F1, F5, F6, F7, step 3.1, construct] ∎
