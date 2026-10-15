---
id: ex-degenerate-gp-phi-does-not-bound-unknown-scale-local-mass
kind: example
title: "A degenerate GP concentration function does not bound unknown-scale prior mass"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §3.3"
      url: "https://arxiv.org/pdf/0806.3024"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Convergence rates of posterior distributions for noniid observations, §3"
      url: "https://arxiv.org/pdf/0708.0491"
---

## Statement

Let $W\equiv0$, $w_0=0$, and let its covariance RKHS be $\mathbb H=\{0\}$. Define $\phi_0(\epsilon)=\inf_{h\in\mathbb H,\,|h-w_0|<\epsilon}\{\|h\|_{\mathbb H}^2\}-\log\Pr(|W|<\epsilon)$. For $n$ large, set $\epsilon_n=\sqrt{\log\log n/n}$ and take an independent $\sigma\sim\operatorname{Unif}[1/2,3/2]$ with true value $\sigma_0=1$. Then $\phi_0(\epsilon_n)=0$, $\epsilon_n\to0$, and $n\epsilon_n^2\to\infty$, but
$$-\log\Pr(|\sigma-\sigma_0|<\epsilon_n)\not=O(n\epsilon_n^2).$$
Thus the Gaussian concentration condition alone does not verify the joint local prior-mass bound used by the denominator argument for the unknown-scale branch. This calculation is a proof-gap example, not a posterior counterexample.

## Facts & Assumptions

**Given:** The point-mass Gaussian prior, the displayed rate sequence, and the independent uniform scale prior.

[F1] [[thm-logarithm-derivative-and-integral]]: $\log x=\int_1^x dt/t$ and, for $x\ge1$, $\log x\le2\sqrt{x}$.

## Verification

1.1 The RKHS of the point-mass prior is $\{0\}$; its approximation cost at $w_0=0$ is zero. Also $\Pr(|W|<\epsilon)=1$ for every $\epsilon>0$, so the explicitly defined concentration function satisfies $\phi_0(\epsilon)=0$. [given, algebra]

1.2 For $n$ sufficiently large, $\epsilon_n<1/2$, hence the uniform prior assigns mass $2\epsilon_n$ to $(1-\epsilon_n,1+\epsilon_n)$. Therefore $-\log(2\epsilon_n)=\tfrac12\log n-\tfrac12\log\log\log n-\log2,$ while $n\epsilon_n^2=\log\log n$. Along $n_m=\lceil e^{e^m}\rceil$, the first quantity grows on the order of $e^m$ and the second on the order of $m$, so their ratio is unbounded. [given, algebra]

2.1 Since $\log\log n\to\infty$ and $\log\log n/n\to0$, the rate has $n\epsilon_n^2\to\infty$ and $\epsilon_n\to0$ while the scale interval mass has negative logarithm not $O(n\epsilon_n^2)$ by step 1.2. Thus the Gaussian concentration condition does not establish this particular denominator-mass check; it does not establish failure of posterior contraction. A locally bounded scale density, as in this uniform example, admits a separate parametric contraction argument. [F1, step 1.2, given] ∎
