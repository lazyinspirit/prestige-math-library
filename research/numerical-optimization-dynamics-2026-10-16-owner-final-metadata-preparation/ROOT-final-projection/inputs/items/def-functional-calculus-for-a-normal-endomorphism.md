---
id: def-functional-calculus-for-a-normal-endomorphism
kind: definition
title: "The spectral functional calculus f(T) for a normal endomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-spectral-resolution-and-polynomial-spectral-projections]
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Definition

Let $V$ be a finite-dimensional complex inner product space, let $T:V\to V$ be
normal, and write the spectral resolution from
[[thm-spectral-resolution-and-polynomial-spectral-projections]] as

$$T=\sum_{j=1}^r \lambda_j P_j,$$

where the $\lambda_j$ are the distinct eigenvalues of $T$ and $P_j$ is the
orthogonal projection onto $E_{\lambda_j}(T)$. For a function
$f:\sigma(T)\to\mathbb C$ on the spectrum of $T$, define

$$f(T):=\sum_{j=1}^r f(\lambda_j)P_j.$$

This is the **spectral functional calculus** of $T$. For the identity function
$\operatorname{id}_{\sigma(T)}$, one has $\operatorname{id}_{\sigma(T)}(T)=T$.
