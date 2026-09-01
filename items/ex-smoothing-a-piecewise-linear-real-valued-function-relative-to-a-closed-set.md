---
id: ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set
kind: example
title: "Smoothing a piecewise-linear real-valued function relative to a closed set"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-relative-whitney-approximation-for-euclidean-valued-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., The Whitney Approximation Theorems"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

Let
$$
f(x):=\max(x,0)
$$
on $\mathbb R$, and let $A:=(-\infty,-1]$. The function is piecewise linear and
already smooth on a neighbourhood of the closed set $A$.

## Facts & Assumptions

**Given:** The function $f(x)=\max(x,0)$ and the closed set $A=(-\infty,-1]$.

## Verification
**Proof technique:** direct.

1.1 The function $f$ is continuous on $\mathbb R$ and smooth on the open neighbourhood $(-\infty,-1/2)$ of $A$. [given]

2.1 Applying [[thm-relative-whitney-approximation-for-euclidean-valued-maps]] with any positive continuous error function produces a smooth map $\widetilde f$ that equals $f$ on a smaller neighbourhood of $A$ and smooths the corner near $0$. [step 1.1] ∎
