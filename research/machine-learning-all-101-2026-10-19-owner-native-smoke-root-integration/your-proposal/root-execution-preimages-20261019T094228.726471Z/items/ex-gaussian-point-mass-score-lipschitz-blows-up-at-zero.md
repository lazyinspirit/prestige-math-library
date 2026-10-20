---
id: ex-gaussian-point-mass-score-lipschitz-blows-up-at-zero
kind: example
title: The score Lipschitz bound blows up for a point mass
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
axiom_base: Full AC
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-gaussian-smoothed-data-law-and-transition-density
  - thm-gaussian-mixture-score-and-global-lipschitz-bound
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Wenpin Tang, Nizar Touzi, Zikun Zhang, and Xun Yu Zhou, Tweedie's Formulae and Diffusion Generative Models Beyond Gaussian"
      url: "https://arxiv.org/pdf/2605.19391"
      locator: "Section 1, equations (1.1)–(1.3), Gaussian score formula; the point-mass specialization is computed locally."
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
      locator: "Chapter 5, §§5.1–5.2, Gaussian transition density context, PDF pp. 67–69."
---

## Example

For $a\in\mathbb R^d$, $\delta_a$ denotes the probability measure concentrated at $a$. For $q>0$, write $\phi_q(z)=(2\pi q)^{-d/2}\exp(-|z|^2/(2q))$.

Let $d\ge1$, $T>0$, and $a\in\mathbb R^d$; take $\mu=\delta_a$. Let $g:[0,T]\to(0,\infty)$ be continuously differentiable with $0<g_{\min}\le g(t)\le g_{\max}$, and set $v(t)=\int_0^t g(r)^2\,dr$. Then $p_t(x)=\phi_{v(t)}(x-a)$ and

$$s_t(x)=\nabla\log p_t(x)=-\frac{x-a}{v(t)},\qquad D_xs_t(x)=-\frac{I_d}{v(t)}.$$

The exact global Lipschitz constant of $s_t$ is $1/v(t)$. For every $0<\epsilon<T$, its best uniform Lipschitz constant on $[\epsilon,T]$ is $1/v(\epsilon)$, which diverges as $\epsilon\downarrow0$.

## Example references

[Tang, Touzi, Zhang, and Zhou, *Tweedie's Formulae and Diffusion Generative Models Beyond Gaussian*, Section 1](https://arxiv.org/pdf/2605.19391)

[Särkkä and Solin, *Applied Stochastic Differential Equations*, Chapter 5, §§5.1–5.2](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

## Facts & Assumptions

**Given:** The point-mass initial law, Gaussian convolution, and score convention from the example.

[A1] The full Axiom of Choice is inherited from the smoothing and score interfaces. [[def-axiom-of-choice]]

[F1] The Gaussian-smoothed density of a compact initial law is the mixture $p_t(x)=\int\phi_{v(t)}(x-z)\,\mu(dz)$. [[def-gaussian-smoothed-data-law-and-transition-density]]

[F2] The score and posterior mean satisfy $s_t(x)=-(x-m_{t,x})/v(t)$ and its derivative is $-I_d/v(t)+C_{t,x}/v(t)^2$. [[thm-gaussian-mixture-score-and-global-lipschitz-bound]]

## Proof

**Given:** The example's point mass and the score identities in [F2].

1.1 Substituting $\mu=\delta_a$ into [F1] gives $p_t(x)=\phi_{v(t)}(x-a)$. The posterior measure $\nu_{t,x}$ is then $\delta_a$, so its mean is $a$ and its covariance matrix is zero. [A1, F1, F2, given]

2.1 Applying [F2] yields $s_t(x)=-(x-a)/v(t)$ and $D_xs_t=-I_d/v(t)$. For any $x\ne y$, $|s_t(x)-s_t(y)|=|x-y|/v(t)$, so the global Lipschitz constant is exactly $1/v(t)$. On $[\epsilon,T]$, $v$ is increasing, making the largest such constant $1/v(\epsilon)$. Since $v(\epsilon)\le g_{\max}^2\epsilon\to0$ and $v(\epsilon)>0$, this bound tends to infinity. [F2, step 1.1, given, algebra] ∎