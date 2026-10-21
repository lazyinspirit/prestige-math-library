---
id: ex-singular-hessian-nonisolated-inner-minimum
kind: example
title: "A singular Hessian leaves the minimizing branch undetermined"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-smooth-bilevel-learning-problem
  - thm-smooth-bilevel-hypergradient-formula
justified_by: []
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Stephen Gould et al., On Differentiating Parameterized Argmin and Argmax Problems with Application to Bi-level Optimization, §3.2"
      url: "https://arxiv.org/pdf/1607.05447"
    - title: "J. Lebl, Basic Analysis II, §8.5.1, Theorem 8.5.6"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
---

## Example

For $\theta\in\mathbb R$ and state $(u,v)\in\mathbb R^2$, let $f(\theta,(u,v))=\frac12(u-\theta)^2$ and outer objective $g((u,v),\theta)=v$. The global minimizer set is $\{(\theta,v):v\in\mathbb R\}$ and the inner Hessian is $\begin{pmatrix}1&0\\0&0\end{pmatrix}$, which is singular. The two smooth minimizing branches $(\theta,0)$ and $(\theta,\theta)$ give outer objectives $0$ and $\theta$, with derivatives $0$ and $1$. Thus without a branch-selection rule the minimizing set determines no unique hypergradient, and the nonsingular-Hessian hypothesis of the local formula fails.

## Example references

[[def-smooth-bilevel-learning-problem|Stationary branch and outer objective]]

[[thm-smooth-bilevel-hypergradient-formula|Nonsingular-Hessian hypothesis of the local formula]]

## Facts & Assumptions

**Given:** The smooth inner loss and outer objective in the example. Verify the minimizing set, Hessian, and the two branch derivatives.

[F1] [[def-smooth-bilevel-learning-problem]]: a local stationary branch is a $C^1$ selection $w^*(\theta)$ satisfying the stationarity residual equation.

[F2] [[thm-smooth-bilevel-hypergradient-formula]]: an invertible state Hessian at a stationary base point guarantees a unique local $C^1$ stationary branch and its inverse-Hessian hypergradient formula.

## Verification

1.1 The inner loss is nonnegative and equals zero exactly when $u=\theta$, independently of $v$. Therefore its full global minimizer set is $\{(\theta,v):v\in\mathbb R\}$. [given, algebra]

1.2 Its state gradient is $(u-\theta,0)^T$ and its Hessian is $\begin{pmatrix}1&0\\0&0\end{pmatrix}$, whose kernel contains $(0,1)^T$ and is therefore singular. [given, algebra]

2.1 The maps $w_0^*(\theta)=(\theta,0)$ and $w_1^*(\theta)=(\theta,\theta)$ are both $C^1$ and lie in the minimizing set from step 1.1 for every $\theta$. Their outer objectives are $g(w_0^*(\theta),\theta)=0$ and $g(w_1^*(\theta),\theta)=\theta$, so their derivatives are respectively $0$ and $1$. [F1, step 1.1, given, algebra]

3.1 Since these two admissible selections yield distinct derivatives and step 1.2 violates the invertibility hypothesis in [F2], the input does not determine one hypergradient through the argmin set, and the local formula does not apply. [F2, step 1.2, step 2.1, algebra] ∎
