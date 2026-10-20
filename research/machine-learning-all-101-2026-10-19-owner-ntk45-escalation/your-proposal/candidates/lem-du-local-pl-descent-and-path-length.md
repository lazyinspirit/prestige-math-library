---
id: lem-du-local-pl-descent-and-path-length
kind: lemma
title: "Local Gram positivity and loss smoothness give confined gradient descent"
status: draft
origin: pipeline
dependency_level: 0
pipeline_run: machine-learning-all-101-2026-10-19
deps: [alg-gradient-descent, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, lem-taylor-integral-remainder, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
proof_strategy: direct
axiom_use: "The finite-dimensional argument is choice-free."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Du, Lee, Li, Wang and Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Appendices B, C, E and G"
      url: "https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf"
---

## Statement

Let $u:\mathbb R^p\to\mathbb R^n$ be $C^2$, $L=\frac12\|u-y\|^2$, and $r_0=u(\theta_0)-y$. On the closed ball $B(\theta_0,R)$ suppose a block $J_*$ of the output Jacobian satisfies $J_*J_*^T\succeq(\lambda/2)I_n$ and $\|\nabla^2L\|\le S$, with $\lambda,S>0$. If $R>2\sqrt2\|r_0\|/\sqrt\lambda$ and $0<\eta\le1/S$, every fixed-step gradient-descent iterate stays in the ball,

$$L(\theta_k)\le(1-\eta\lambda/2)^kL(\theta_0),\qquad\sum_{k\ge0}\|\theta_{k+1}-\theta_k\|\le2\sqrt2\|r_0\|/\sqrt\lambda.$$

The assertion is trivial for $r_0=0$; otherwise the hypotheses imply $0<\eta\lambda/2\le1$.

## Statement references

[Du et al., output Gram descent mechanism](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

## Facts & Assumptions

**Given:** The output map, quadratic loss, ball, spectral and Hessian bounds, and step size.

[F1] Gradient descent uses $\theta^+=\theta-\eta\nabla L(\theta)$. [[alg-gradient-descent]]

[F2] For a scalar $C^2$ function on a segment, the first-order Taylor remainder is the integral of its second derivative against the linear remainder kernel. [[lem-taylor-integral-remainder]]

[F3] The Hessian norm is the induced operator norm on the finite-dimensional Euclidean parameter space. [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[F4] Euclidean Cauchy–Schwarz gives $|a^Tb|\le\|a\|_2\|b\|_2$ for all real vectors of the same finite dimension. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

## Proof

1.1 Write $g=\nabla L=J^Tr$. Since $JJ^T\succeq J_*J_*^T$, $\|g\|^2=r^TJJ^Tr\ge(\lambda/2)\|r\|^2=\lambda L$ in the ball. For any step $\theta^+=\theta-hg$, $0<h\le\eta$, whose segment stays in the ball, put $\psi(s)=L(\theta-sg)$ for $0\le s\le h$. Then $\psi'(0)=-\|g\|^2$ and $\psi''(s)=g^TH_sg$, where $H_s=\nabla^2L(\theta-sg)$. By Euclidean Cauchy–Schwarz [F4] and the induced norm [F3], $|g^TH_sg|\le\|g\|\|H_sg\|\le\|g\|\|H_s\|\|g\|\le S\|g\|^2$; for $g=0$ the same bound is immediate. By [F2], $L^+=L-h\|g\|^2+\int_0^h(h-s)\psi''(s)\,ds\le L-h(1-Sh/2)\|g\|^2\le(1-h\lambda/2)L$. If $L>0$, nonnegativity of $L^+$ gives $h\lambda/2\le1$. [F1, F2, F3, F4, given, algebra]

2.1 For such a segment with $L>0$, $\sqrt L-\sqrt{L^+}=(L-L^+)/(\sqrt L+\sqrt{L^+})\ge h\|g\|^2/(4\sqrt L)\ge(\sqrt\lambda/4)h\|g\|$. If $L=0$, $r=0$ and hence $g=0$, so the step is stationary. Telescoping any finite sequence of admissible full or truncated steps gives total parameter path length at most $4\sqrt{L_0}/\sqrt\lambda=2\sqrt2\|r_0\|/\sqrt\lambda$. [step 1.1, algebra]

3.1 Suppose there is a first proposed full step exiting the ball. Truncate that step at the first intersection with its boundary; this is a segment of length $h\|g\|$ with $h\le\eta$, wholly in the ball. Step 2.1 applies to all previous steps and this truncated step, giving total path length strictly less than $R$. Reaching the boundary from $\theta_0$ requires length at least $R$, a contradiction. Thus no exit occurs. Step 1.1 applied at every full step gives the loss rate, and taking the supremum of finite partial path lengths in step 2.1 gives the asserted series bound. [step 1.1, step 2.1, algebra] ∎  
