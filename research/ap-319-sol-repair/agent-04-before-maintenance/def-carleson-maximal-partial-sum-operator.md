---
id: def-carleson-maximal-partial-sum-operator
kind: definition
title: Carleson maximal partial-sum operator
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references: [{title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 8, pp. 51–52, Theorem 8.7 discussion'}]
status: published
origin: pipeline
---

## Definition

Use $\mathbb T=\mathbb R/\mathbb Z$ with Haar measure $m(\mathbb T)=1$ and the negative-sign Fourier coefficients and symmetric partial sums of [[def-period-one-fourier-coefficients-partial-sums-and-convolution]]. For $f\in L^1(\mathbb T)$ define the **Carleson maximal partial-sum operator** by

$$Cf(x):=\sup_{N\in\mathbb Z_{\ge0}}|S_Nf(x)|\in[0,\infty].$$

Each coefficient is a finite integral independent of the representative of $f$, and each $S_Nf$ is a continuous trigonometric polynomial. Thus $C$ depends only on the $L^1$ class, at every point. For every real $a$, the set $\{Cf>a\}=\bigcup_{N\ge0}\{|S_Nf|>a\}$ is measurable.

Linearity of finite Fourier sums gives $C(f+g)\le Cf+Cg$ and $C(af)=|a|Cf$ for nonzero scalars $a$. Also $C0=0$; with $0\cdot\infty:=0$ the homogeneity identity holds for $a=0$ as well. This is sublinearity with extended nonnegative values. Including $N=0$ retains the constant Fourier coefficient.
