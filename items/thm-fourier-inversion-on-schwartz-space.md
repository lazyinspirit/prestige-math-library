---
id: thm-fourier-inversion-on-schwartz-space
kind: theorem
title: Fourier inversion on Schwartz space
deps: ["thm-fourier-transform-maps-schwartz-space-continuously-to-itself", "lem-schwartz-functions-and-all-derivatives-are-integrable", "thm-l-one-fourier-inversion", "def-countable-choice"]
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
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Theorem 11.15, pp.124–125
---

## Statement

Assume countable choice. For every $f\in\mathcal S(\mathbb R^n)$ and every $x\in\mathbb R^n$,
$$f(x)=\int_{\mathbb R^n}\widehat f(\xi)e^{2\pi ix\cdot\xi}\,d\xi.$$
The integral is absolutely convergent.

## Facts & Assumptions

**Given:** $f\in\mathcal S$ and [[def-countable-choice]].

[F1] The Fourier transform preserves Schwartz space ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]).

[F2] Schwartz functions are integrable ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

[F3] If $f,\widehat f\in L^1$, inversion gives its value at every Lebesgue point ([[thm-l-one-fourier-inversion]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], both $f$ and $\widehat f$ are integrable, and the displayed integral is absolutely convergent since the exponential has modulus one. Fix $x$. Smoothness implies continuity, so for every $\varepsilon>0$ some $\delta>0$ gives $|f(x-y)-f(x)|<\varepsilon$ for $|y|<\delta$. Averaging over any ball of radius $0<r<\delta$ bounds its mean oscillation by $\varepsilon$. Thus $x$ is a Lebesgue point with specified value $f(x)$. [F1, F2, given]

2.1 Apply [F3] at this arbitrary point. This proves the formula everywhere, inheriting exactly the countable-choice assumption of these three suppliers. The proof never exchanges an undamped double Fourier integral. [step 1.1, F3] ∎
