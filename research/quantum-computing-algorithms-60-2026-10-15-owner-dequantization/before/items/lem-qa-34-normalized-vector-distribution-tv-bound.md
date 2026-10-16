---
id: lem-qa-34-normalized-vector-distribution-tv-bound
kind: lemma
title: Squared-vector distributions are close in total variation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-34-l2-sample-query-access
  - def-qa-34-end-to-end-error-contract
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
---

## Statement

Let $x,y\in\mathbb R^n$ be nonzero, and define $D_x(i)=x_i^2/\|x\|_2^2$ and $D_y(i)=y_i^2/\|y\|_2^2$. Then
$$d_{\rm TV}(D_x,D_y)\le\frac{2\|x-y\|_2}{\|x\|_2}.$$
The bound is valid even when its right side exceeds $1$.

## Facts & Assumptions

**Given:** Nonzero real vectors $x,y\in\mathbb R^n$.

[F1] [[def-qa-34-l2-sample-query-access]]: $D_x(i)=x_i^2/\|x\|_2^2$ for nonzero $x$, and likewise for $y$.

[F2] [[def-qa-34-end-to-end-error-contract]]: $d_{\rm TV}(p,q)=\tfrac12\sum_i|p_i-q_i|$ for distributions on a common finite alphabet.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: Cauchy–Schwarz and the triangle inequality hold for the Euclidean norm.

## Proof


1.1 Put $a=\|x\|_2>0$, $b=\|y\|_2>0$, $u=x/a$, and $v=y/b$. Then $\|u\|_2=\|v\|_2=1$ by their definitions. [given, F1, construct]

2.1 Using $|u_i^2-v_i^2|=|u_i-v_i||u_i+v_i|$ and [F3], $d_{\rm TV}(D_x,D_y)=\tfrac12\sum_i|u_i-v_i||u_i+v_i|\le\tfrac12\|u-v\|_2\|u+v\|_2\le\|u-v\|_2.$ [step 1.1, F2, F3, algebra]

3.1 Since $u-v=(x-y)/a+y(1/a-1/b)$, [F3] gives $\|u-v\|_2\le\frac{\|x-y\|_2}{a}+b\left|\frac1a-\frac1b\right|=\frac{\|x-y\|_2+|b-a|}{a}\le\frac{2\|x-y\|_2}{a},$ where $|b-a|\le\|x-y\|_2$ is the reverse triangle inequality. Combining this with step 2.1 proves the result. [step 1.1, step 2.1, F3, algebra] ∎
