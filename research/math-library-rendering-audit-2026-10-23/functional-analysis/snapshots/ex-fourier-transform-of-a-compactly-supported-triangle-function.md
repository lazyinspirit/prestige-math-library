---
id: ex-fourier-transform-of-a-compactly-supported-triangle-function
kind: example
title: Triangle function and squared sinc
deps: ["thm-fourier-transform-converts-convolution-to-products", "ex-fourier-transform-of-an-interval-indicator", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: §14.1
---

## Example

Assume countable choice. The triangle $T(x)=\max(1-|x|,0)$ on $\mathbb R$ has $\widehat T(\xi)=(\sin(\pi\xi)/(\pi\xi))^2$, with value one at zero.

## Facts & Assumptions

**Given:** [[def-countable-choice]] and $I=\mathbf1_{[-1/2,1/2]}$.

[F1] The interval indicator I has sinc transform, with value one at zero ([[ex-fourier-transform-of-an-interval-indicator]]).

[F2] Fourier turns integrable convolution into multiplication ([[thm-fourier-transform-converts-convolution-to-products]]).

## Verification

1.1 The integral $(I*I)(x)$ is the length of $[-1/2,1/2]\cap[x-1/2,x+1/2]$. For $0\le x\le1$ this length is $1-x$; for $-1\le x\le0$ it is $1+x$; for $|x|>1$ the intervals are disjoint. At $|x|=1$ the intersection is a null singleton. Thus $I*I=T$ everywhere. [given]

2.1 By F1 and F2, $\widehat T=\widehat I^2$ gives the displayed squared sinc. At zero the value is one, also equal to $\int_{-1}^1(1-|x|)dx=2[x-x^2/2]_0^1=1$. Countable choice is inherited from the indicator and convolution suppliers. [F1, F2, step 1.1] ∎
