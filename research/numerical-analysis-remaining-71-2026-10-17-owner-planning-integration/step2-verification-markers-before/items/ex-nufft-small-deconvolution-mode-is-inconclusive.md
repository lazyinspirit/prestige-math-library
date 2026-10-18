---
id: ex-nufft-small-deconvolution-mode-is-inconclusive
kind: example
title: A positive mode multiplier too small to certify
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms-examples
dependency_level: 5
proof_strategy: direct
deps:
  - alg-nufft-certified-gaussian-gridding-type1-type2
  - def-dyadic-floating-point-format-and-directed-rounding
  - def-real-elementary-functions-and-domains
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - lem-nonnegative-square-root-exists-and-unique
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Statement

Use the dyadic interval format with precision $p=5$ and exponent limits $e_{\min}=-2$, $e_{\max}=8$, and select the matching operationwise model with a valid unit-roundoff bound $u=1/32$. Set the common range truncation index to $J=64$, twiddle bound to $\epsilon_{\rm tw}=1/32$, phase tolerance to $\delta_\phi=1/32$, phase precisions to $p_{\phi,0}=5$ and $p_{\phi,\max}=8$, and the FFT recursion cap to $d_{\rm FFT}=4$. Give the algorithm one type-1 source $x_0=0,c_0=1$, mode bound $K=7$, one candidate $\tau=1/40$, $M=16$, $w=L=1$, and requested positive absolute tolerance $\varepsilon_{\rm req}=1$. Its least positive subnormal is $\eta=2^{-6}=1/64$. The exact smallest deconvolution multiplier
$$d_{\min}=\sqrt{1/40}\,e^{-49\pi/40}$$
is positive but less than $\eta$. Therefore a finite outward dyadic lower endpoint for this multiplier cannot be positive, and the algorithm must reject the candidate as inconclusive at its positive-lower-bound check (or at an earlier range check); it cannot return a certified result using this candidate.

## Facts & Assumptions

**Given:** The displayed one-dimensional candidate and dyadic format, with $p=5$, $e_{\min}=-2$, $e_{\max}=8$, and $u=1/32$.

[F1] [[def-dyadic-floating-point-format-and-directed-rounding]]: the least positive subnormal is $2^{e_{\min}-p+1}$, and every positive finite representable number is at least that value.

[F2] [[def-real-elementary-functions-and-domains]]: $e^x=\sum_{n=0}^\infty x^n/n!$.

[F3] [[cor-exponential-reciprocal-and-positivity]] and [[thm-exponential-is-strictly-increasing]]: $e^x>0$, $e^{-x}=1/e^x$, and the real exponential is strictly increasing.

[F4] [[alg-nufft-certified-gaussian-gridding-type1-type2]]: the candidate requires a positive certified lower endpoint for $d_{\min}$ and rejects it if the lower endpoint is nonpositive; a non-finite elementary-range result is also inconclusive.

[F5] [[lem-nonnegative-square-root-exists-and-unique]]: the nonnegative square root of a positive number is positive and order comparisons follow from squaring nonnegative quantities.

[F6] [[def-real-elementary-functions-and-domains]]: $\pi=4\int_0^1(1+t^2)^{-1}\,dt\ge2>0$, since the integrand is at least $1/2$ on $[0,1]$.

## Proof

1.1 The format's subnormal spacing is $\eta=2^{-2-5+1}=2^{-6}=1/64$ by [F1], and the exact multiplier is positive by [F3], [F5] and $\tau=1/40>0$. Since $1/40<1/36=(1/6)^2$, [F5] gives $\sqrt{1/40}<1/6$; also $\pi\ge2$ by [F6]. Thus $d_{\min}=\sqrt{1/40}\,e^{-49\pi/40}<\frac16e^{-49/20}.$ For $x=49/20>0$, the positive exponential series gives $e^x>\sum_{n=0}^{5}\frac{x^n}{n!}=\frac{4{,}277{,}427{,}349}{384{,}000{,}000}>\frac{32}{3}.$ Taking positive reciprocals therefore yields $d_{\min}<\frac16\cdot\frac3{32}=1/64=\eta$. [given, F1, F2, F3, F5, F6, algebra]

2.1 By [F1], any positive finite dyadic endpoint is at least $\eta$. A sound lower endpoint for the exact multiplier must be at most $d_{\min}<\eta$ by step 1.1, so it cannot be positive. The algorithm's explicit check [F4] consequently rejects this candidate as inconclusive if its finite multiplier enclosure is reached; if an earlier range operation is non-finite, [F4] gives the same inconclusive outcome. Thus this candidate cannot yield a certified transform result. [F1, F4, step 1.1, algebra] ∎
