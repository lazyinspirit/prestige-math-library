---
id: ex-neural-game-nonconvergence
kind: example
title: A finite adversarial gradient game can cycle
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - thm-optimal-discriminator-and-js-divergence
aliases: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Ian J. Goodfellow et al., Generative Adversarial Nets, arXiv:1406.2661v1"
      url: "https://arxiv.org/pdf/1406.2661"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let $\theta,\varphi\in\mathbb R$ be a generator and discriminator parameter, and let the generator minimize and the discriminator maximize the shared payoff $L(\theta,\varphi)=\theta\varphi$. Starting from any $(\theta_0,\varphi_0)\ne(0,0)$, use one exact unit-step generator gradient descent update followed by one exact unit-step discriminator gradient ascent update, with the discriminator update evaluated at the new generator parameter:
$$
\theta_{n+1}=\theta_n-\partial_\theta L(\theta_n,\varphi_n),\qquad \varphi_{n+1}=\varphi_n+\partial_\varphi L(\theta_{n+1},\varphi_n).
$$
The resulting parameter sequence repeats after six steps and does not converge. This scalar bilinear game is a finite-parameter adversarial-game illustration, not the GAN cross-entropy objective or a neural GAN; it shows why a distribution-space optimum alone is not a finite-parameter training-convergence theorem.

## Example references

[[thm-optimal-discriminator-and-js-divergence|Unrestricted distribution-space optimum and its scope]]

[Goodfellow et al., §4.2, final paragraph on finite MLP parameterization, complete 9-page paper](https://arxiv.org/pdf/1406.2661)

## Facts & Assumptions

**Given:** $\theta_n,\varphi_n\in\mathbb R$, payoff $L(\theta,\varphi)=\theta\varphi$, generator descent first, discriminator ascent second at the updated $\theta$, unit step size, and a nonzero initial pair.

[F1] [[thm-optimal-discriminator-and-js-divergence]]: the proved GAN optimum is for the unrestricted distribution-space objective, and it asserts no convergence for finite neural alternating optimization.

## Verification

**Given:** The scalar payoff and exact alternating update rule in the Example, with $(\theta_0,\varphi_0)\ne(0,0)$.

1.1 For $h\ne0$, $\bigl(L(\theta+h,\varphi)-L(\theta,\varphi)\bigr)/h=\bigl((\theta+h)\varphi-\theta\varphi\bigr)/h=\varphi$, so $\partial_\theta L=\varphi$. Likewise $\bigl(L(\theta,\varphi+h)-L(\theta,\varphi)\bigr)/h=\theta$, so $\partial_\varphi L=\theta$. [given, algebra]

2.1 Substitution into the update gives $\theta_{n+1}=\theta_n-\varphi_n$ and $\varphi_{n+1}=\varphi_n+\theta_{n+1}=\theta_n$. Thus $x_{n+1}=Mx_n$ for $x_n=(\theta_n,\varphi_n)^\mathsf T$ and $M=\begin{pmatrix}1&-1\\1&0\end{pmatrix}$. [given, step 1.1, algebra]

3.1 Matrix multiplication gives $M^2=\begin{pmatrix}0&-1\\1&-1\end{pmatrix}$ and $M^3=-I$. Hence $x_{n+3}=-x_n$ and $x_{n+6}=x_n$ for every $n$. [step 2.1, algebra]

4.1 Since $x_0\ne0$, the subsequence $(x_{6k})_{k\ge0}$ is constantly $x_0$ and $(x_{6k+3})_{k\ge0}$ is constantly $-x_0\ne x_0$. These subsequences have different limits, so $(x_n)$ does not converge. The computed cycle is for this explicitly defined toy game; [F1] shows it supplies no conclusion about convergence of GAN neural training. [given, F1, step 3.1, algebra] ∎
