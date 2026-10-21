---
id: alg-ip-measurement-guided-diffusion-reconstruction
kind: algorithm
title: Measurement-guided reverse-kernel reconstruction
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - lem-ip-conditional-score-and-tweedie-identities
  - def-ip-diffusion-prior-score-and-measurement-score
  - def-measure-kernel-and-probability-kernel
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems (2024), arXiv:2410.00083
      url: https://arxiv.org/pdf/2410.00083
    - title: Yang Song et al., Score-Based Generative Modeling through Stochastic Differential Equations (2021), arXiv:2011.13456
      url: https://arxiv.org/pdf/2011.13456
    - title: Hyungjin Chung et al., Diffusion Posterior Sampling for General Noisy Inverse Problems (2023), arXiv:2209.14687
      url: https://arxiv.org/pdf/2209.14687
    - title: "Simon J. D. Prince, Understanding Deep Learning, Chapter 18: Diffusion Models (2026), pp. 363–387; full course notes"
      url: https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html
---

## Definition

Let $N\ge1$ be finite, let $0=t_0<t_1<\dots<t_N$, let $d\ge1$ and let the state space be $\mathbb R^d$, and let $(\mathsf Y,\mathcal Y)$ be a measurable observation space. Fix a measurable forward operator $\mathcal A:\mathbb R^d\to\mathsf Y$, an observation $y\in\mathsf Y$, and a nonnegative measurable likelihood function $\ell_y:\mathbb R^d\to[0,\infty)$ obtained by fixing $y$ in a likelihood density relative to a fixed sigma-finite measure on $\mathsf Y$. A **measurement-guided reverse-kernel reconstruction procedure** takes a finite Borel score field $\widehat s_\theta:\mathbb R^d\times\{t_0,\dots,t_N\}\to\mathbb R^d$; a terminal reference probability $\nu_N$ on the Borel sets of $\mathbb R^d$ and a sampler that returns an exact draw or failure within finite initialization budget $b_{\mathrm{init}}$; and, for each $k$, a measurable correction space $(\mathsf C_k,\mathcal C_k)$, its failure-augmented measurable space $\mathsf C_k^\dagger=\mathsf C_k\sqcup\{\bot\}$ with $\sigma$-algebra $\mathcal C_k^\dagger=\{D,D\cup\{\bot\}:D\in\mathcal C_k\}$, a measurable correction map $C_{k,\widehat s_\theta,\mathcal A,\ell_y}:\mathbb R^d\times\mathsf Y\to\mathsf C_k^\dagger$, a probability kernel $Q_{\theta,k}(\cdot\mid x,y,a)$ from $\mathbb R^d\times\mathsf Y\times\mathsf C_k$ with its product sigma-algebra to $\mathbb R^d$ with its Borel sigma-algebra, and a sampler that returns an exact draw from that kernel or failure within finite per-step budget $b_k$. The correction map may use the supplied score, forward operator and likelihood and, when supplied for the exact-score option, the prior and scale map. It may also take, for each step, a declared Borel map $\Pi_{k-1}:\mathbb R^d\to\mathbb R^d$ and a Borel admissible set $A_{k-1}\subseteq\mathbb R^d$. Each per-step budget includes correction evaluation, kernel sampling and any declared projection. First draw $x_N$ from $\nu_N$ within $b_{\mathrm{init}}$; if initialization fails, return the terminal-initialization failure status. For $k=N,N-1,\dots,1$, compute $a_k=C_{k,\widehat s_\theta,\mathcal A,\ell_y}(x_k,y)$; if $a_k=\bot$, return the correction failure status at $k$; otherwise draw $x_{k-1}$ from $Q_{\theta,k}(\cdot\mid x_k,y,a_k)$ within $b_k$; if drawing fails, return the sampling failure status at $k$; if $\Pi_{k-1}$ is supplied, apply it to $x_{k-1}$ and return the admissibility failure status at $k-1$ if evaluation fails or its output is outside $A_{k-1}$. If $k>1$, continue at $k-1$ with the resulting state $x_{k-1}$; if $k=1$, return $x_0$ with completed status. A correction may use a declared surrogate without additional likelihood or noising assumptions. If it uses the exact measurement score at step $k$, the caller must also declare a Borel probability measure $\mu$ on $\mathbb R^d$ and a map $\sigma:\{t_1,\dots,t_N\}\to(0,\infty)$ associating each reverse-schedule time with its Gaussian-noising scale. For every such step, the forward noising convention at $t_k$ must be $X_{\sigma(t_k)}=X_0+\sigma(t_k)Z$, where $X_0\sim\mu$ and $Z\sim N(0,I_d)$ is independent of $X_0$, and the observation variable $Y$ with conditional density $\ell_y$ must be conditionally independent of $Z$ given $X_0$, and $\ell_y$ must be bounded, strictly positive and Borel measurable with $0<Z_y=\int\ell_y(u)\,\mu(du)<\infty$. The exact correction then uses $g_{\sigma(t_k)}(x_k,y)=\nabla_x\log\int\ell_y(u)Q_{\sigma(t_k)}(x_k,du)$, with $Q_{\sigma(t_k)}$ formed from this prior and Gaussian noising as in the conditional-score and Tweedie identities. The procedure returns an algorithmic sample; it makes no posterior-exactness claim unless the terminal law and all transition and projection conditions are separately certified.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners,align=center] (init) at (0,0) {draw $x_N\sim\nu_N$ within $b_{\mathrm{init}}$};
  \node[draw,rounded corners,align=center] (corr) at (3.5,0) {$a_k=C_k(x_k,y)$; check $a_k\ne\bot$};
  \node[draw,rounded corners,align=center] (kernel) at (7.5,0) {draw $x_{k-1}\sim Q_{\theta,k}(\cdot\mid x_k,y,a_k)$};
  \node[draw,rounded corners,align=center] (proj) at (11.5,0) {optional $\Pi_{k-1}$; check $A_{k-1}$};
  \node[draw,diamond,aspect=2,align=center] (next) at (15.3,0) {$k=1?$};
  \node[draw,rounded corners,align=center] (out) at (15.3,-1.8) {return $x_0$};
  \node[draw,rounded corners,align=center] (stop) at (7.5,-2.2) {first failure status};
  \draw[->] (init)--(corr);
  \draw[->] (corr)--(kernel);
  \draw[->] (kernel)--(proj);
  \draw[->] (proj)--(next);
  \draw[->] (next.south)--node[right]{$k=1$}(out.north);
  \draw[->] (next.north) -- ++(0,1.5) -| node[pos=0.25,above,align=center]{$k>1$: continue at $k-1$\\with the just-produced state}(corr.north);
  \draw[->] (init.south)--(stop.north);
  \draw[->] (corr.south)--(stop.north);
  \draw[->] (kernel.south)--(stop.north);
  \draw[->] (proj.south)--(stop.north);
\end{tikzpicture}
```

The upper return arrow repeats the reverse step with the newly produced state and decremented index. The downward arrows record immediate stopping at a failed initialization, correction, kernel draw, or declared projection. The diagram is an operational flow description and asserts no distributional identity.

## Definition references

[[def-ip-diffusion-prior-score-and-measurement-score]]

[[def-measure-kernel-and-probability-kernel]]

[Daras et al., §§2.4 and 3](https://arxiv.org/pdf/2410.00083)

[Song et al., §5 and predictor-corrector algorithms](https://arxiv.org/pdf/2011.13456)

[Chung et al., §3.1 and Algorithms 1–2](https://arxiv.org/pdf/2209.14687)

[Prince, Chapter 18, “Diffusion models”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html)
