---
id: ex-kg-divergence-thresholds-for-power-gauges
kind: example
title: "Checking the Khintchine–Groshev power-gauge threshold"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-khintchine-groshev-zero-full-law
  - thm-p-series-real-exponents
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, Theorem 1"
      url: "https://arxiv.org/pdf/0811.0809v3"
    - title: "Glyn Harman, Metric Number Theory, Chapter 4"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Example

For integers $n,m\ge1$, let $\tau\ge0$ and use the power gauge $\psi(h)=h^{-\tau}$. The Khintchine–Groshev series is

$$\sum_{h=1}^{\infty}h^{n-1}\psi(h)^m=\sum_{h=1}^{\infty}h^{n-1-m\tau}.$$

Its threshold is $\tau=n/m$: the series diverges for $0\le\tau\le n/m$ and converges for $\tau>n/m$. Thus, whenever the applicable zero-full theorem hypotheses hold, the approximable set has full measure at and below the threshold and measure zero above it. For example, the thresholds are $\tau=1/2$ for simultaneous approximation in dimensions $(n,m)=(1,2)$, $\tau=2$ for dual approximation in dimensions $(2,1)$, and $\tau=1$ in the monotone scalar case $(1,1)$.

## Example references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, Theorem 1](https://arxiv.org/pdf/0811.0809v3)

[Harman, *Metric Number Theory*, Chapter 4](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** Integers $n,m\ge1$, a real exponent $\tau\ge0$, and the approximation gauge $\psi(h)=h^{-\tau}$.

[F1] For $s\in\mathbb R$, the series $\sum_{h\ge1}h^s$ converges exactly when $s<-1$ and diverges when $s\ge-1$. ([[thm-p-series-real-exponents]])

[F2] For $nm>1$ the homogeneous Khintchine–Groshev theorem applies without monotonicity; in the scalar case it applies when the gauge is non-increasing. ([[thm-khintchine-groshev-zero-full-law]])

## Verification




1.1 Substituting $\psi(h)=h^{-\tau}$ gives $h^{n-1}\psi(h)^m=h^{n-1-m\tau}$. By [F1], convergence is equivalent to $n-1-m\tau<-1$, which rearranges to $m\tau>n$; divergence is equivalent to $m\tau\le n$. [given, F1, algebra]

2.1 If $nm>1$, [F2] converts the two series alternatives into the zero-full measure alternatives. If $n=m=1$, then $\tau\ge0$ makes $\psi$ non-increasing, so the scalar clause of [F2] gives the same threshold. [given, step 1.1, F2, algebra]

3.1 Substituting $(n,m)=(1,2),(2,1),(1,1)$ into $n/m$ gives respectively $1/2$, $2$, and $1$, as stated. [step 1.1, algebra] ∎
