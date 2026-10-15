---
dependency_level: 10
id: ex-fixed-design-gaussian-constant-process-and-unknown-scale
kind: example
title: A constant GP on a repeated fixed design meets the nondegenerate scale branch
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - thm-gaussian-process-posterior-contraction
  - def-standard-normal-and-normal-laws
  - def-probability-measure
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
    - title: A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §3.3, Theorem 3.3
      url: https://arxiv.org/pdf/0806.3024
    - title: Subhashis Ghosal and Aad W. van der Vaart, Convergence rates of posterior distributions for noniid observations, §3
      url: https://arxiv.org/pdf/0708.0491
---

## Statement

Take repeated design point $x_0$, prior $W(x)=Z\sim N(0,1)$, truth $w_0=0$, true standard deviation $\sigma_0=1$, and an independent prior $\sigma\sim\operatorname{Unif}[1/2,3/2]$. For $\epsilon_n=2\sqrt{\log n/n}$, the GP concentration and scale-local-mass conditions hold for all sufficiently large n.

## Facts & Assumptions

**Given:** The stated constant Gaussian prior, fixed design, truth and independent uniform scale prior.

[F1] [[def-standard-normal-and-normal-laws]]: the standard-normal density is bounded below by $\varphi(1)>0$ on $[-1,1]$.

[F2] [[thm-gaussian-process-posterior-contraction]]: under its fixed-design conditions, with $\rho_n=\max\{\epsilon_n,\sqrt{\log n/n}\}$ for every allowed prior and with the sharper $\epsilon_n$ rate for a nonzero Gaussian law, expected posterior mass outside a sufficiently large empirical-L²-plus-scale ball tends to zero.

## Verification

1.1 The support of $W$ is the line of constant functions, which contains $w_0$. The RKHS approximation cost at zero is zero, and $\|W\|_\infty=|Z|$. For $\epsilon\le1$, [F1] gives $\Pr(\|W\|_\infty<\epsilon)\ge2\varphi(1)\epsilon$, so $\phi_0(\epsilon)\le-\log(2\varphi(1)\epsilon)$. [F1, given, algebra]

1.2 At $\epsilon_n=2\sqrt{\log n/n}$, $n\epsilon_n^2=4\log n$ while $-\log(2\varphi(1)\epsilon_n)=\frac12\log n-\frac12\log\log n+O(1)$, so the concentration inequality holds for large n. Also, for $\epsilon_n<1/2$, the uniform scale prior assigns mass $2\epsilon_n$ to $(1-\epsilon_n,1+\epsilon_n)$; its negative log is $O(\log n)=O(n\epsilon_n^2)$. [F1, given, algebra]

2.1 The scale prior is independent and has density one, the true scale lies in the interior of its fixed positive interval, and every design point is $x_0$. Steps 1.1–1.2 verify the concentration and scale-local-mass checks, so the sharper fixed-design conclusion follows from [F2]: this Gaussian law is nonzero and the stated rate already satisfies $\rho_n=\epsilon_n$. [F2, step 1.1, step 1.2] ∎
