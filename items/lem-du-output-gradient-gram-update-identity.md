---
id: lem-du-output-gradient-gram-update-identity
kind: lemma
title: "Gradient descent induces an exact output Gram update with a Taylor remainder"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-du-overparameterized-network-architectures-and-gram-kernels
  - thm-shared-parameter-backpropagation-gradient-formula
  - alg-gradient-descent
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
justified_by: []
proof_strategy: direct
axiom_use: "The finite-dimensional differentiability and update identity are choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, §§4 and B.1"
      url: "https://proceedings.mlr.press/v97/du19c.html"
---

## Statement

For any fixed finite real network obeying either architecture recurrence defined on the A page, let $u(\theta)=(f(x_i,\theta))_{i=1}^n\in\mathbb R^n$, let $y=(y_i)_{i=1}^n$, let $J(\theta)\in\mathbb R^{n\times p}$ have row $i$ equal to the gradient of $f(x_i,\theta)$ with respect to the vector of all trainable parameters, and set $G(\theta)=J(\theta)J(\theta)^T$. For the empirical quadratic loss $L(\theta)=\frac12\|u(\theta)-y\|_2^2$, one full-batch gradient-descent step with step size $\eta>0$ satisfies

$$u(\theta^+)=u(\theta)-\eta G(\theta)(u(\theta)-y)+R,$$

where $\theta^+=\theta-\eta J(\theta)^T(u(\theta)-y)$ and $R$ is the first-order Taylor remainder of the differentiable map $u$ at $\theta$ in direction $-\eta J(\theta)^T(u(\theta)-y)$. No size bound on $R$ is asserted here.

## Statement references

[Du et al., gradient-descent dynamics, §§4 and B.1](https://proceedings.mlr.press/v97/du19c.html)

## Facts & Assumptions

**Given:** One finite network, its trainable parameter vector, a fixed data set and labels, and a step size $\eta>0$.

[F1] The network is a finite composition of linear maps and an analytic coordinatewise activation, so its output map is continuously differentiable in all trainable parameters. [[def-du-overparameterized-network-architectures-and-gram-kernels]]

[F2] Reverse accumulation through a finite $C^1$ parameterized recurrence gives the exact parameter gradient, including all parameter uses. [[thm-shared-parameter-backpropagation-gradient-formula]]

[F3] Fixed-step gradient descent updates the parameter by subtracting $\eta$ times the Euclidean gradient. [[alg-gradient-descent]]

[F4] Differentiability in finite-dimensional real parameter spaces means a linear first-order approximation with a remainder $o(\|h\|_2)$. [[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]

## Proof

**Proof technique:** express the loss gradient by the output Jacobian and apply the defining first-order expansion of the output map.

1.1 Write $r=u(\theta)-y$. By the scalar chain rule applied to $\frac12\sum_i(u_i-y_i)^2$, the parameter gradient is $J(\theta)^Tr$. By [F3], $h:=\theta^+-\theta=-\eta J(\theta)^Tr$. [F2, F3, given, algebra]

2.1 Since $u$ is differentiable, [F4] gives $u(\theta+h)=u(\theta)+J(\theta)h+R$, where $R:=u(\theta+h)-u(\theta)-J(\theta)h$ is the first-order remainder. Substitute $h=-\eta J(\theta)^Tr$ to get $J(\theta)h=-\eta J(\theta)J(\theta)^Tr=-\eta G(\theta)r$, which is the claimed identity. [F1, F4, step 1.1, algebra] ∎ 