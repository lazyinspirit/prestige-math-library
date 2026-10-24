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
deps: [def-the-standard-smooth-step-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., The Whitney Approximation Theorems"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

Let
$$ f(x):=\max(x,0) $$
on $\mathbb R$, and let $A:=(-\infty,-1]$. The function is piecewise linear and
already smooth on a neighbourhood of the closed set $A$.

## Facts & Assumptions

**Given:** The function $f(x)=\max(x,0)$ and the closed set $A=(-\infty,-1]$.

## Verification
**Proof technique:** direct.

1.1 The function $f$ is continuous on $\mathbb R$ and smooth on the open neighbourhood $(-\infty,-1/2)$ of $A$. [given]

1.2 Let $\varepsilon:\mathbb R\to(0,\infty)$ be any continuous error function. By continuity at $0$, choose $0<\delta<\min\{1/2,\varepsilon(0)/2\}$ such that $\varepsilon(x)>\varepsilon(0)/2$ whenever $|x|\le\delta$. [given, construct]

2.1 Let $\sigma$ be the standard smooth step from [[def-the-standard-smooth-step-function]] and set $\widetilde f(x)=x\sigma((x+\delta)/(2\delta))$. This is smooth, equals $0=f(x)$ for $x\le-\delta$, and equals $x=f(x)$ for $x\ge\delta$. In particular it agrees with $f$ on the open neighbourhood $(-\infty,-\delta)$ of $A$. [step 1.2, construct]

3.1 For $|x|\le\delta$, the bound $0\le\sigma\le1$ gives $|\widetilde f(x)-f(x)|\le|x|\le\delta<\varepsilon(0)/2<\varepsilon(x)$; outside this interval the error is $0<\varepsilon(x)$. Thus this explicit smoothing has the stated relative agreement and arbitrary positive continuous error control. [step 1.2, step 2.1, algebra] ∎
