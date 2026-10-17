---
id: thm-l-one-fourier-inversion
kind: theorem
title: L1 Fourier inversion with an integrable transform
deps: ["thm-fourier-inversion-at-lebesgue-points-under-summability", "thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "thm-dominated-convergence", "def-countable-choice", "thm-almost-every-point-is-a-lebesgue-point"]
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
      locator: Corollary 14.8, p.382
---

## Statement

Assume countable choice. If $f\in L^1(\mathbb R^n;\mathbb C)$ and $\widehat f\in L^1$, then
$$g(x)=\int\widehat f(\xi)e^{2\pi ix\cdot\xi}\,d\xi$$
is bounded and continuous, equals f almost everywhere, and equals the specified value at every Lebesgue point of f.

## Facts & Assumptions

**Given:** $n\ge1$, $f,\widehat f\in L^1$ and [[def-countable-choice]].

[F1] Gaussian Fourier means recover each Lebesgue value ([[thm-fourier-inversion-at-lebesgue-points-under-summability]]).

[F2] An $L^1$ transform is bounded and uniformly continuous ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

[F3] Dominated convergence permits passage under an integral with a single integrable majorant ([[thm-dominated-convergence]]).

[F4] Almost every point of a locally integrable function is a Lebesgue point under countable choice ([[thm-almost-every-point-is-a-lebesgue-point]]).

## Proof

1.1 Since $\widehat f\in L^1$, F2 applied to it shows that $g(x)=\mathcal F(\widehat f)(-x)$ is bounded and uniformly continuous. For fixed $x$ and the explicit sequence $t_m=1/(m+1)$, $m\in\mathbb N$, the damped integrands converge pointwise to $\widehat f(\xi)e^{2\pi ix\cdot\xi}$ and have majorant $|\widehat f|$. F3 therefore gives $S_{t_m}f(x)\to g(x)$. [F2, F3, given]

2.1 At any Lebesgue point with value a, F1 gives the same sequence limit a, so $g(x)=a$. Since $f\in L^1$ is locally integrable, F4 gives such points with a=f(x) outside a null set (for complex inputs apply the real conclusion to both components and bound the complex oscillation by their sum). Hence $g=f$ almost everywhere. In particular g represents the original $L^1$ class. Countable choice is precisely inherited from F1 and F4; no statement about all values of an arbitrary representative follows. [F1, F4, step 1.1] ∎
