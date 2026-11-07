---
id: lem-compact-piecewise-smooth-fourier-parseval
kind: lemma
title: "Fourier Parseval identity for compact piecewise smooth functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
axiom_use: "The proof uses finite partitions and explicit integrable tail bounds."
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-fourier-transform-of-a-gaussian, thm-riemann-fubini-on-product-rectangles, thm-ftc-second-part]
sources:
  references:
    - title: "Matomäki and Radziwiłł, Multiplicative Functions in Short Intervals"
      url: "https://arxiv.org/pdf/1501.04585v4"
      locator: "Lemma 14; finite-band identity extracted from the locally reconstructed short-interval Parseval proof."
---

## Statement

If $B$ is bounded, piecewise continuously differentiable on the closures of finitely many pieces, and supported in a fixed compact interval, and $G(v)=\int_{\mathbb R}B(t)e^{itv}dt$, then
$$\int_{\mathbb R}|G(v)|^2\,dv=2\pi\int_{\mathbb R}|B(t)|^2\,dt.$$
Both integrals converge absolutely. Values at finitely many breakpoints are irrelevant.

## Statement references

[Matomäki and Radziwiłł, Lemma 14](https://arxiv.org/pdf/1501.04585v4)

## Facts & Assumptions

**Given:** The function $B$ in the Statement.

[F1] The Fourier transform of a real Gaussian is a Gaussian with the stated normalization. [[lem-fourier-transform-of-a-gaussian]]

[F2] Finite-rectangle Riemann integrals may be interchanged, and compact integrals of continuous derivatives evaluate by endpoint differences. [[thm-riemann-fubini-on-product-rectangles]] [[thm-ftc-second-part]]

## Proof

1.1 If $B$ is bounded, piecewise continuously differentiable on the closures of finitely many pieces, and supported in a fixed compact interval and $G(v)=\int B(t)e^{itv}dt$, then $$\int_{\mathbb R}|G(v)|^2dv=2\pi\int_{\mathbb R}|B(t)|^2dt.$$ To prove it, insert $e^{-\epsilon v^2}$ on the left, expand the square on finite rectangles, and use [F1–F2]. The resulting Gaussian kernel is an approximate identity of total mass $2\pi$; at all but finitely many jump points it converges to $B$, and its tails are explicitly exponentially bounded. Finite partition and uniform continuity away from jumps pass to the limit on the right. [F1, F2, given, construct, algebra]

2.1 On the left, integration by parts on each smooth piece gives $G(v)=O((1+|v|)^{-1})$, so the Gaussian may be removed by splitting at a large $|v|$ and using the integrable $v^{-2}$ tail. This proves the identity without a general $L^2$ extension or a choice axiom. [F2, step 1.1, given, algebra] ∎
