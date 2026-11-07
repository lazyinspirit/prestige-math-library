---
id: lem-short-window-fourier-correlation-identity
kind: lemma
title: "Short-window Fourier identity for correlations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Matom\u00e4ki\u2013Radziwi\u0142\u0142\u2013Tao"
      url: https://arxiv.org/pdf/1503.05121v3
      locator: "Lemma 1.4, PDF p. 3"
---

## Statement

Let $f:\mathbb Z\to\mathbb C$ have finite support, let $L>0$, and put $e(t)=\exp(2\pi it)$ and $C_f(r)=\sum_n f(n)\overline{f(n+r)}$. Then
$$\int_0^1\left(\int_{\mathbb R}\left|\sum_{x\le n\le x+L}f(n)e(\alpha n)\right|^2dx\right)^2d\alpha=\sum_{r\in\mathbb Z}(L-|r|)_+^2|C_f(r)|^2.$$
Also the integral of the inner parenthesis over $\alpha\in[0,1]$ is $L\sum_n|f(n)|^2$. Closed interval endpoints have no effect on these Lebesgue integrals.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

## Proof

1.1 Expand the squared modulus inside the $x$ integral. The $x$ for which both $n,m$ belong to $[x,x+L]$ form the intersection $[n-L,n]\cap[m-L,m]$, of length $(L-|n-m|)_+$. Group by $m=n+r$. The inner parenthesis is therefore the finite trigonometric polynomial $\sum_r(L-|r|)_+C_f(r)e(-\alpha r)$. [given, algebra]

2.1 This polynomial is real and nonnegative, so its square is its absolute square. Expanding it and using $\int_0^1e(j\alpha)d\alpha=1$ for $j=0$ and $0$ for nonzero integers $j$ proves the first identity. Integrating the polynomial itself retains only $r=0$, proving the second identity. All sums are finite, and all integrands are bounded with compact $x$ support. [step 1.1, algebra] ∎
