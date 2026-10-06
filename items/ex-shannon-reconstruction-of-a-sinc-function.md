---
id: ex-shannon-reconstruction-of-a-sinc-function
kind: example
title: "Shannon reconstruction of a sinc function"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
design_row: FR-19
generation:
  role: example
deps: [def-normalized-sinc-function, thm-shannon-sampling-for-bandlimited-ltwo-functions, lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, cor-trigonometric-parity-and-pythagorean-identity, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, thm-l-one-l-two-agreement-of-fourier-transform, thm-l-two-fourier-inversion, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 22, Theorem 22.3 and Remark 22.4(2) with Figure 22.1: the sinc kernel vanishes at the other sampling points and the explicit sinc superposition, printed pp. 130-132"
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§3, the Fourier transform definition and §4, Exercise 16(7): the negative-sign Fourier convention and the $L^2$ isometry with square equal to reflection, PDF pp. 4-5; the interval-indicator pair is computed locally by the exponential primitive"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume Countable Choice ([[def-countable-choice]]) and let $\operatorname{sinc}$
be the normalised sinc of [[def-normalized-sinc-function]]. Then
$\widehat{\operatorname{sinc}}=\mathbf 1_{[-1/2,1/2]}$ as $L^2$ Fourier
transforms, so $\operatorname{sinc}$ is band-limited with $h=1$ and band
$[-1/2,1/2]$; its samples are $\operatorname{sinc}(k)=1$ for $k=0$ and
$\operatorname{sinc}(k)=0$ for every nonzero integer $k$; and the Shannon series
of [[thm-shannon-sampling-for-bandlimited-ltwo-functions]] for this $f$ is
$\sum_{k\in\mathbb Z}\operatorname{sinc}(k)\operatorname{sinc}(x-k)=\operatorname{sinc}(x)$,
a single nonzero term at $k=0$ reproducing the function at every $x$. Since
$\sum_k|\operatorname{sinc}(k)|=1<\infty$, the locally uniform clause of the
theorem applies as well. The example checks the signs, the band endpoints
$\pm1/2$ and the $h^{1/2}$ normalisation of the pair.

## Facts & Assumptions

**Given:** Countable Choice, the normalised sinc of [[def-normalized-sinc-function]] and the interval indicator $\mathbf 1=\mathbf 1_{[-1/2,1/2]}$.

[F1] Interval indicator transform, computed from the primitive: for real $t$, $\int_{-1/2}^{1/2}e^{-2\pi it\xi}\,d\xi=\operatorname{sinc}(t)$, because $u(\xi)=e^{-2\pi it\xi}/(-2\pi it)$ has $u'=e^{-2\pi it\xi}$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-complex-derivatives]]) so the complex FTC gives $(\sin(\pi t)/(\pi t))$ for $t\ne0$ by oddness of sine ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]], [[cor-trigonometric-parity-and-pythagorean-identity]]), while at $t=0$ the integral is $1=\operatorname{sinc}(0)$ ([[def-normalized-sinc-function]]); $\mathbf 1\in L^1\cap L^2$.

[F2] On $L^1\cap L^2$ the integral transform represents the $L^2$ transform almost everywhere ([[thm-l-one-l-two-agreement-of-fourier-transform]]); $\mathcal F_2^2=R$ with $Rg(x)=g(-x)$ ([[thm-l-two-fourier-inversion]]).

[F3] Shannon sampling theorem: for $f\in L^2$ band-limited to $[-1/(2h),1/(2h)]$ with continuous representative $f$, $f=\sum_kf(hk)\operatorname{sinc}(\cdot/h-k)$ in $L^2$, and the identity is pointwise everywhere when $\sum_k|f(hk)|<\infty$ ([[thm-shannon-sampling-for-bandlimited-ltwo-functions]]).

[F4] Band-limit normalisation check of [[lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval]]: for $h=1$ the rescaled circular function is $G_1(\theta)=\widehat f(-\theta)$ and its coefficients satisfy $\widehat{G_1}(k)=1^{1/2}f(k)=f(k)$.

## Verification

1.1 By [F1] the $L^1$ transform of $\mathbf 1$ is $\operatorname{sinc}$, so the $L^2$ transform of $\mathbf 1$ is represented by $\operatorname{sinc}$ [F2]. Since $\operatorname{sinc}$ is bounded by the two bounds of [[def-normalized-sinc-function]], it lies in $L^2$, and $\mathcal F_2(\operatorname{sinc})=\mathcal F_2(\mathcal F_2\mathbf 1)=R\mathbf 1=\mathbf 1$, the last equality because $\mathbf 1$ is even and $\mathbf 1\circ(-1)=\mathbf 1$. [F1, F2, given, algebra]

2.1 Thus $\operatorname{sinc}$ is band-limited with $h=1$ and band $[-1/2,1/2]$, and its samples are $\operatorname{sinc}(0)=1$ and $\operatorname{sinc}(k)=0$ for nonzero integers $k$ ([[def-normalized-sinc-function]]). Its Shannon series therefore has the single nonzero term at $k=0$: $\sum_k\operatorname{sinc}(k)\operatorname{sinc}(x-k)=\operatorname{sinc}(x)$ for every $x$, and $\sum_k|\operatorname{sinc}(k)|=1<\infty$, so both clauses of [F3] hold and the reconstruction is pointwise everywhere. The normalisation check [F4] also matches: here $\widehat f=\mathbf 1$, so $G_1(\theta)=\mathbf 1(-\theta)=1$ on the fundamental interval and $\widehat{G_1}(k)=1$ for $k=0$ and $0$ otherwise, which equals $1^{1/2}\operatorname{sinc}(k)$; the Fourier pair is the interval indicator and $\operatorname{sinc}$, with $\mathcal F_2\operatorname{sinc}=\mathbf 1_{[-1/2,1/2]}$. Values at the band endpoints do not affect these $L^2$ classes. [step 1.1, F3, F4, given, algebra] ∎ 