---
dependency_level: 10
id: ex-binary-regression-logistic-intercept-gp
kind: example
title: A one-point logistic GP regression satisfies the L² link branch
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - thm-gaussian-process-posterior-contraction
  - def-standard-normal-and-normal-laws
  - def-probability-measure
  - def-real-exponential-function-and-e
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §3.2, Theorem 3.2
      url: https://arxiv.org/pdf/0806.3024
    - title: Bas J. K. Kleijn, Aad W. van der Vaart and Harry van Zanten, Lectures on Nonparametric Bayesian Statistics, Chapters 9–10
      url: https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf
---

## Statement

Let the covariate space contain one point $x_0$, let $G=\delta_{x_0}$, and take $W(x_0)=Z\sim N(0,1)$. With the logistic link $\Psi(u)=(1+e^{-u})^{-1}$ and truth $w_0(x_0)=0$, the hypotheses of the binary-regression branch hold at $\epsilon_n=\sqrt{\log n/n}$ for all sufficiently large n.

## Facts & Assumptions

**Given:** The one-point covariate law, logistic link, constant Gaussian prior and true response probability $f_0(x_0)=1/2$.

[F1] [[def-standard-normal-and-normal-laws]]: $Z$ has density $\varphi(z)=e^{-z^2/2}/\sqrt{2\pi}$ and positive mass on every interval around zero.

[F2] [[thm-gaussian-process-posterior-contraction]]: under its binary-regression hypotheses, expected posterior mass outside a sufficiently large $L^2(G)$ ball tends to zero.

## Verification

1.1 Differentiation gives $\Psi'(u)=\Psi(u)(1-\Psi(u))$, so $|\Psi'(u)|\le1/4$ and $|\Psi'(u)/[\Psi(u)(1-\Psi(u))]|=1$. The true response probability is $\Psi(0)=1/2\in(0,1)$, and $w_0=0$ is in the support of the scalar standard-normal prior. [given, algebra]

1.2 Here $L^2(G)$ is isometric to $\mathbb R$ and $\|W\|_{L^2(G)}=|Z|$. The RKHS approximation cost at zero is zero. By [F1], for $0<\epsilon\le1$, $\Pr(|Z|<\epsilon)\ge2\varphi(1)\epsilon$, so $\phi_0(\epsilon_n)\le-\log(2\varphi(1)\epsilon_n)$. With $\epsilon_n=\sqrt{\log n/n}$, this is at most $n\epsilon_n^2=\log n$ for all sufficiently large n. [F1, given, algebra]

2.1 The joint Bernoulli density relative to $G\otimes\#$ is bounded by one, and the constant-process evaluation is jointly measurable. Steps 1.1–1.2 verify the remaining link, truth-support and concentration conditions; applying the binary-regression branch of [F2] yields expected posterior contraction in $L^2(G)$. [F2, step 1.1, step 1.2] ∎
