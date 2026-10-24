---
id: thm-smooth-bilevel-hypergradient-formula
kind: theorem
title: "Hypergradient of a smooth local stationary branch"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-smooth-bilevel-learning-problem
  - thm-chain-rule-for-total-derivatives
  - thm-euclidean-implicit-function-theorem
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stephen Gould et al., On Differentiating Parameterized Argmin and Argmax Problems with Application to Bi-level Optimization, §3"
      url: "https://arxiv.org/pdf/1607.05447"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 4 Part 2, §6.3.1"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec06.pdf"
    - title: "J. Lebl, Basic Analysis II, §8.5.1, Theorem 8.5.6 and proof"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
---

## Statement

Let $p,d\ge1$, let $\Theta\subseteq\mathbb R^p$ and $W\subseteq\mathbb R^d$ be open, and let $f:\Theta\times W\to\mathbb R$ be $C^2$ and $g:W\times\Theta\to\mathbb R$ be $C^1$. Here $C^1$ means total differentiability with continuous derivative, and $C^2$ means the derivative map is $C^1$. Define $F(\theta,w)=\nabla_w f(\theta,w)$, $H(\theta,w)=D_wF(\theta,w)$, and $B(\theta,w)=D_\theta F(\theta,w)$. Suppose $F(\theta_0,w_0)=0$ and $H(\theta_0,w_0)$ is invertible. Then there are open neighborhoods $P\subseteq\Theta$ and $Q\subseteq W$ of $\theta_0$ and $w_0$ and a unique $C^1$ local stationary branch $w^*:P\to Q$ through $(\theta_0,w_0)$, meaning $w^*(\theta_0)=w_0$ and $F(\theta,w^*(\theta))=0$ for every $\theta\in P$. After shrinking $P$ if necessary, $H(\theta,w^*(\theta))$ is invertible and

$$Dw^*(\theta)=-H(\theta,w^*(\theta))^{-1}B(\theta,w^*(\theta)).$$

Write $H^{-T}:=(H^{-1})^T$. For $J(\theta)=g(w^*(\theta),\theta)$, where $\partial_\theta g$ holds $w$ fixed and gradients are column vectors, the hypergradient is

$$\nabla_\theta J(\theta)=\partial_\theta g(w^*(\theta),\theta)-B(\theta,w^*(\theta))^T H(\theta,w^*(\theta))^{-T}\nabla_w g(w^*(\theta),\theta).$$

The local branch need not be a global inner optimizer. In the separate global regime where, for every $\theta\in P$, $f(\theta,\cdot)$ is defined on all of $\mathbb R^d$ and, for some $\mu>0$, satisfies $f(\theta,v)\ge f(\theta,u)+\nabla_w f(\theta,u)^T(v-u)+\frac{\mu}{2}\|v-u\|_2^2$ for every $u,v\in\mathbb R^d$, each stationary point is the unique global minimizer.

## Statement references

[[def-smooth-bilevel-learning-problem|Bilevel stationary-problem notation and strong-convexity convention]]

[[thm-euclidean-implicit-function-theorem|Local branch existence, uniqueness, and derivative formula]]

[[thm-chain-rule-for-total-derivatives|Finite-dimensional chain rule]]

## Facts & Assumptions

**Given:** Open parameter and state domains, the $C^2$ inner objective, the $C^1$ outer objective, a stationary point $(\theta_0,w_0)$, and an invertible inner Hessian at that point.

[F1] [[def-smooth-bilevel-learning-problem]]: $F=\nabla_w f$ is the inner stationarity residual, $H=D_wF$, $B=D_\theta F$, and the local outer objective is $J(\theta)=g(w^*(\theta),\theta)$.

[F2] [[thm-euclidean-implicit-function-theorem]]: for a $C^1$ residual with zero value and invertible state-block derivative, there are neighborhoods with a unique $C^1$ solution branch.

[L1] [[thm-euclidean-implicit-function-theorem]]: after shrinking the neighborhoods, the state-block derivative stays invertible along the branch and its derivative is minus the inverse state Jacobian times the parameter Jacobian.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition of finite-dimensional totally differentiable maps is the composition of their derivatives.

## Proof

1.1 Put $F(\theta,w)=\nabla_w f(\theta,w)$. Since $f$ is $C^2$, this residual is $C^1$ on the open product domain; it vanishes at $(\theta_0,w_0)$ and its state derivative is the invertible matrix $H(\theta_0,w_0)$. Applying [F2] gives open neighborhoods and a unique $C^1$ local branch $w^*$ through that point. [given, F1, F2, construct]

2.1 The derivative clause of [L1], evaluated along this branch after shrinking its parameter neighborhood, gives $Dw^*(\theta)=-H(\theta,w^*(\theta))^{-1}B(\theta,w^*(\theta))$. [step 1.1, F1, L1, algebra]

2.2 The map $\theta\mapsto (w^*(\theta),\theta)$ is $C^1$, so [F3] applied to $g$ and this map yields $\nabla_\theta J=\partial_\theta g+(Dw^*)^T\nabla_w g$. [step 1.1, F1, F3, algebra]

3.1 Substitute step 2.1 into step 2.2 and use $(H^{-1}B)^T=B^TH^{-T}$. This is the asserted column-gradient hypergradient formula. [step 2.1, step 2.2, algebra]

4.1 In the stated global regime, fix any $\theta\in P$ and any stationary point $u\in\mathbb R^d$, so $\nabla_w f(\theta,u)=0$. For every $v\ne u$, the strong-convexity inequality gives $f(\theta,v)\ge f(\theta,u)+\frac{\mu}{2}\|v-u\|_2^2>f(\theta,u)$. Thus this arbitrary stationary point is the unique global minimizer, proving the claim for every stationary point wherever the global regime holds. [given, step 1.1, algebra] ∎
