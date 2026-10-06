---
id: lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp
kind: lemma
title: 'Subcritical Gaussians show the Hardy threshold $ab=1$ is sharp'
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-countable-choice
  - def-real-power
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - thm-exponential-is-strictly-increasing
  - thm-real-power-continuity-and-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§5, Corollary 5.3, pp. 11–12"
    - title: "Aingeru Fernández-Bertolín and Eugenia Malinnikova, Dynamical Versions of Hardy's Uncertainty Principle: A Survey (arXiv:2210.03369)"
      url: "https://arxiv.org/pdf/2210.03369"
      locator: "Theorem 1 and the higher-dimensional remark, p. 2"
---

## Statement

Assume countable choice. Let $n\ge1$ and let $a,b>0$ with $ab<1$. Then
$(a,1/b)$ is a nonempty open interval, and for every $c$ with $a<c<1/b$ the
Gaussian $f_c(x):=e^{-\pi c|x|^2}$ satisfies
$$|f_c(x)|\le e^{-\pi a|x|^2},\qquad |\widehat{f_c}(\xi)|\le c^{-n/2}e^{-\pi b|\xi|^2}\qquad(x,\xi\in\mathbb R^n).$$
In particular Hardy's two Gaussian bounds hold at every subcritical pair
$ab<1$ with a nonzero function, so the vanishing and classification conclusions
genuinely require $ab\ge1$.

## Facts & Assumptions

**Given:** Countable choice ([[def-countable-choice]]), an integer $n\ge1$, reals $a,b>0$ with $ab<1$, and a real $c$ with $a<c<1/b$.

[F1] Countable choice is assumed; it is the hypothesis carried by the Gaussian transform identity used below ([[def-countable-choice]]).

[F2] For every $t>0$, the Gaussians $e^{-\pi t|x|^2}$ are absolutely integrable and have $L^1$ Fourier transform $t^{-n/2}e^{-\pi|\xi|^2/t}$ at every frequency; every polynomial times a positive real Gaussian is absolutely integrable ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F3] The real exponential is strictly increasing on $\mathbb R$ ([[thm-exponential-is-strictly-increasing]]); the real power $c^s$ of a positive base is a positive real number, and $s\mapsto c^s$, $t\mapsto t^s$ are continuous on their domains ([[def-real-power]], [[thm-real-power-continuity-and-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 The interval and the first bound. Since $b>0$, the inequality $ab<1$ is equivalent to $a<1/b$, so $(a,1/b)$ is a nonempty open interval and the given $c$ satisfies $c>a>0$. The function $f_c$ is continuous and hence measurable, with $f_c>0$ and $f_c(0)=1$. For every $x\in\mathbb R^n$ one has $-\pi c|x|^2\le-\pi a|x|^2$ because $c\ge a$, and the real exponential is strictly increasing [F3], so $0<f_c(x)=e^{-\pi c|x|^2}\le e^{-\pi a|x|^2}$. Hence $|f_c(x)|\le e^{-\pi a|x|^2}$ for every $x$, and $f_c\ne0$. [F3, given]

2.1 The transform and the second bound. By [F2] the Gaussian $f_c$ is absolutely integrable and its $L^1$ Fourier transform is $\widehat{f_c}(\xi)=c^{-n/2}e^{-\pi|\xi|^2/c}$ for every $\xi\in\mathbb R^n$; this is a positive real number. Since $c<1/b$ gives $b<1/c$, one has $-\pi|\xi|^2/c\le-\pi b|\xi|^2$, and strict increase of the exponential [F3] gives $e^{-\pi|\xi|^2/c}\le e^{-\pi b|\xi|^2}$. The factor $c^{-n/2}$ is positive by [F3]. Therefore $|\widehat{f_c}(\xi)|=c^{-n/2}e^{-\pi|\xi|^2/c}\le c^{-n/2}e^{-\pi b|\xi|^2}$ for every $\xi$. [F1, F2, F3, step 1.1]

3.1 Conclusion. By steps 1.1 and 2.1 the nonzero Gaussian $f_c$ satisfies both Gaussian bounds of the subcritical pair $(a,b)$ whenever $a<c<1/b$, and such $c$ exists at every pair with $ab<1$. Hence at every subcritical pair the two Gaussian hypotheses admit a nonzero solution, so the vanishing conclusion cannot hold below that threshold. Nor can the critical classification with rate $a$ hold: $f_c(x)/e^{-\pi a|x|^2}=e^{-\pi(c-a)|x|^2}$ equals $1$ at $0$ and is smaller at $x=(1,0,\ldots,0)$, so is nonconstant. By continuity it cannot be constant almost everywhere either. [given, step 1.1, step 2.1] ∎
