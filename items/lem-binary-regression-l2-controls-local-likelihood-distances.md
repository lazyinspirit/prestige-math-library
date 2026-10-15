---
id: lem-binary-regression-l2-controls-local-likelihood-distances
kind: lemma
title: "The L² link norm controls binary-regression likelihood distances"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-natural-logarithm
  - def-probability-measure
  - def-measure-with-density
  - cor-mean-value-theorem
  - cor-differentiable-implies-continuous
  - thm-chain-rule
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
axiom_use: "AC is used only for the directional KL convention."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §3.2, Theorem 3.2 and Lemma 3.2"
      url: "https://arxiv.org/pdf/0806.3024"
    - title: "Bas J. K. Kleijn, Aad W. van der Vaart and Harry van Zanten, Lectures on Nonparametric Bayesian Statistics, Chapter 9 and §12.2"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf"
---

## Statement

Let $G$ be a probability measure on $(\mathsf X,\mathcal A)$, let $\Psi:\mathbb R\to(0,1)$ be differentiable, and suppose
$$L:=\sup_{u\in\mathbb R}|\Psi'(u)|<\infty,\qquad R:=\sup_{u\in\mathbb R}\left|\frac{\Psi'(u)}{\Psi(u)(1-\Psi(u))}\right|<\infty.$$
For measurable real functions $w,w_0$, define Bernoulli densities relative to $G\otimes\#$, where $\#$ is counting measure on $\{0,1\}$, by
$$q_w(x,y)=\Psi(w(x))^y(1-\Psi(w(x)))^{1-y},\qquad q_{w_0}(x,y)=\Psi(w_0(x))^y(1-\Psi(w_0(x)))^{1-y}.$$
If $w-w_0\in L^2(G)$, then, with $d_2(q_w,q_{w_0})^2=\int|q_w-q_{w_0}|^2\,d(G\otimes\#)$,
$$d_2(q_w,q_{w_0})^2\le2L^2\|w-w_0\|_{L^2(G)}^2,$$
$$\mathrm{KL}(Q_{w_0}\Vert Q_w)\le\frac{LR}{2}\|w-w_0\|_{L^2(G)}^2,\qquad E_{Q_{w_0}}\!\left[\left(\log\frac{q_w(X,Y)}{q_{w_0}(X,Y)}\right)^2\right]\le R^2\|w-w_0\|_{L^2(G)}^2.$$

## Facts & Assumptions

**Given:** A probability covariate law $G$, a differentiable link into $(0,1)$ with the stated bounds, and the displayed Bernoulli joint densities.

[A1] Assume AC for the directional Kullback–Leibler convention [[def-axiom-of-choice]].

[F1] [[cor-differentiable-implies-continuous]] and [[cor-mean-value-theorem]]: differentiability gives continuity on each closed interval, and the mean-value theorem bounds increments by an intermediate derivative.

[F2] [[thm-chain-rule]] and [[thm-logarithm-derivative-and-integral]]: derivatives of $\log\Psi(u)$ and $\log(1-\Psi(u))$ are respectively $\Psi'(u)/\Psi(u)$ and $-\Psi'(u)/(1-\Psi(u))$.

## Proof

1.1 For each $x$, [F1] gives $|\Psi(w(x))-\Psi(w_0(x))|\le L|w(x)-w_0(x)|$. The two values of $y$ contribute the same squared difference to $d_2^2$, so integration gives $d_2^2=2\int|\Psi(w)-\Psi(w_0)|^2dG\le2L^2\|w-w_0\|_2^2$. [F1, given, algebra]

1.2 Fix $x$ and write $u_0=w_0(x)$. The Bernoulli directional divergence at $x$ is $k_x(u)=\Psi(u_0)\log\frac{\Psi(u_0)}{\Psi(u)}+(1-\Psi(u_0))\log\frac{1-\Psi(u_0)}{1-\Psi(u)}.$ By [F2] and the chain rule, $k_x'(u)=\frac{\Psi'(u)}{\Psi(u)(1-\Psi(u))}(\Psi(u)-\Psi(u_0))$. Thus $|k_x'(u)|\le RL|u-u_0|$ by [F1], and integration from $u_0$ to $w(x)$ yields $|k_x(w(x))|\le(RL/2)|w(x)-w_0(x)|^2$. Integrating over $G$ and using $\mathrm{KL}(Q_{w_0}\Vert Q_w)=\int k_x(w(x))\,G(dx)$ proves the stated upper bound. [A1, F1, F2, given, algebra]

2.1 The derivatives in [F2] have absolute values at most $R$: indeed $\Psi'/\Psi=(\Psi'/[\Psi(1-\Psi)])(1-\Psi)$ and $\Psi'/(1-\Psi)=(\Psi'/[\Psi(1-\Psi)])\Psi$. The mean-value theorem therefore bounds both Bernoulli log-probability ratios at $x$ by $R|w(x)-w_0(x)|$. Their squared conditional average under $Y|X=x\sim\operatorname{Bernoulli}(\Psi(w_0(x)))$ is at most $R^2|w(x)-w_0(x)|^2$; integrating over $G$ proves the log-square bound. [F1, F2, given, algebra] ∎
## Source notes

The source derives the same comparison through the function $\Psi'/[\Psi(1-\Psi)]$. The proof here supplies the pointwise derivative and integration bounds, and states the joint-density $L^2(G\otimes\#)$ convention explicitly.
