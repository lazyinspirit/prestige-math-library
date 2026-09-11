---
id: cor-convolution-approximate-identities-from-fourier-multipliers
kind: corollary
title: Fourier multipliers of approximate identities
deps: ["thm-fourier-transform-converts-convolution-to-products", "thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "thm-l-one-approximate-identities-converge-in-l-p", "def-l-one-approximate-identity-on-rn", "lem-complex-translation-and-approximate-identity-interfaces", "def-countable-choice"]
status: draft
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Theorem 14.7 and Lemma 14.12; MT15 supplies the norm theorem
---

## Statement

Assume countable choice. For any complex $L^1$ approximate identity $(K_\varepsilon)$, $\widehat K_\varepsilon(\xi)\to1$ at each frequency. For $f\in L^1$, $\widehat{f*K_\varepsilon}=\widehat f\,\widehat K_\varepsilon\to\widehat f$ uniformly. Also $f*K_\varepsilon\to f$ in every finite $L^p$ norm for which $f\in L^p$.

## Facts & Assumptions

**Given:** $n\ge1$, [[def-countable-choice]], and the unit-mass, bounded-norm and absolute-tail conditions of [[def-l-one-approximate-identity-on-rn]].

[F1] Complex approximate identities converge in finite $L^p$ norms ([[lem-complex-translation-and-approximate-identity-interfaces]]).

[F2] The convolution transform equals the product of transforms ([[thm-fourier-transform-converts-convolution-to-products]]).

[F3] The supremum norm of a transform is bounded by the input $L^1$ norm ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

## Proof

1.1 Put $M=\sup_\varepsilon\|K_\varepsilon\|_1$. Unit mass gives $\widehat K_\varepsilon(\xi)-1=\int K_\varepsilon(y)(e^{-2\pi iy\cdot\xi}-1)\,dy$. For fixed $\xi$, its modulus is bounded by $M\sup_{|y|<\delta}|e^{-2\pi iy\cdot\xi}-1|+2\int_{|y|\ge\delta}|K_\varepsilon(y)|\,dy$. The latter tail tends to zero (bound it by the defining tail outside $\delta/2$), and the first term tends to zero with $\delta$. This proves the pointwise multiplier limit. [given]

2.1 F1 applies to every stated finite p and gives norm convergence, including p=1. By F2 and F3, $\|\widehat f\,\widehat K_\varepsilon-\widehat f\|_\infty=\|\mathcal F(f*K_\varepsilon-f)\|_\infty\le\|f*K_\varepsilon-f\|_1\to0$. Thus uniform transform convergence follows from norm approximation, not merely the pointwise multiplier limit. Countable choice is inherited from F1 and F2. [F1, F2, F3, step 1.1] ∎
