---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
dependency_level: 6
id: ex-iid-functional-data-block-bootstrap
kind: example
title: IID functional data in the block bootstrap regime
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-l2-m-approximable-causal-bernoulli-shift
  - def-axiom-of-choice
  - thm-moving-block-bootstrap-clt-for-dependent-data
  - thm-tapered-block-bootstrap-clt-for-dependent-data
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Assume the Axiom of Choice. In $H=L^2([0,1])$, let $e$ be the constant function $1$ and let $X_t=\varepsilon_t e$, where the innovations $\varepsilon_t$ are independent with $P(\varepsilon_t=1)=P(\varepsilon_t=-1)=1/2$. This IID functional series satisfies the moving and tapered block bootstrap theorems with $b_n=\lceil n^{1/3}\rceil$ and, in tapered mode, the window $w(u)=\mathbf1_{[0,1]}(u)$.

## Verification

**Given:** AC and the IID signs, constant function, block lengths and window in the Example.

[F1] [[def-l2-m-approximable-causal-bernoulli-shift]] retains the most recent $m$ innovations when forming $X_{t,m}$.

[F2] [[thm-moving-block-bootstrap-clt-for-dependent-data]] and [[thm-tapered-block-bootstrap-clt-for-dependent-data]] give conditional Gaussian mean limits and Hilbert–Schmidt covariance consistency under their stated process, block and taper conditions, assuming [[def-axiom-of-choice]].

1.1 The filter $f(s_0,s_1,\ldots)=s_0e$ is measurable: it is the coordinate projection followed by a map from the finite innovation space to $H$. We have $EX_t=0$ and $E\|X_t\|_H^2=1$. For every $m\ge1$, the retained current innovation gives $X_{t,m}=X_t$ exactly, so $\delta_m=0$. Thus both $\sum_{m\ge1}\delta_m<\infty$ and $m\delta_m\to0$ hold. Independence and identical laws follow directly because each $X_t$ depends only on its own IID innovation. [F1, given, algebra]

2.1 The integer lengths satisfy $1\le\lceil n^{1/3}\rceil\le n$, $b_n\to\infty$ and $b_n/\sqrt n\le n^{-1/6}+n^{-1/2}\to0$. The window vanishes off $[0,1]$, takes values in $[0,1]$, is positive near $1/2$, symmetric, and nondecreasing on $[0,1/2]$. Every midpoint weight equals one, so $W_{b_n}=\sqrt{b_n}>0$ and $a_{b_n}=1$. All assumptions of both theorems are therefore met, giving their stated conditional law and covariance limits for this IID example. [F2, given, step 1.1, algebra] ∎
