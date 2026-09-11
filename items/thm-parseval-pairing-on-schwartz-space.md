---
id: thm-parseval-pairing-on-schwartz-space
kind: theorem
title: Parseval pairing on Schwartz space
deps: ["thm-fourier-inversion-on-schwartz-space", "lem-schwartz-functions-and-all-derivatives-are-integrable", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "def-countable-choice"]
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
      locator: Lemma 14.9, p.383, polarized pairing version
---

## Statement

Assume countable choice. For $f,g\in\mathcal S(\mathbb R^n)$,
$$\int\widehat f(\xi)\overline{\widehat g(\xi)}\,d\xi=\int f(x)\overline{g(x)}\,dx.$$
The pairing is complex-linear in the first variable. In particular $\|\widehat f\|_2=\|f\|_2$.

## Facts & Assumptions

**Given:** [[def-countable-choice]].

[F1] Schwartz inversion holds everywhere with an absolutely integrable transform ([[thm-fourier-inversion-on-schwartz-space]]).

[F2] Schwartz functions are integrable and bounded ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

[F3] Fubini applies to absolutely integrable complex product functions on sigma-finite spaces ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $\overline{g(x)}=\int\overline{\widehat g(\xi)}e^{-2\pi ix\cdot\xi}\,d\xi$. The integrand after multiplying by $f(x)$ is jointly measurable and has absolute double integral $\|f\|_1\|\widehat g\|_1<\infty$, by [F1], [F2] and product integration. Hence [F3] gives $\int f\overline g=\int\overline{\widehat g(\xi)}[\int f(x)e^{-2\pi ix\cdot\xi}\,dx]\,d\xi=\int\widehat f\overline{\widehat g}$. This also proves absolute integrability of the final product; the original product is integrable since $g$ is bounded and $f$ integrable. [F1, F2, F3, given]

2.1 Taking $g=f$ gives equality of the nonnegative square integrals, finite by [F2] for the input and by step 1.1 for its transform. Taking nonnegative square roots proves the norm identity. The displayed pairing is linear in its first entry and conjugate-linear in its second directly from integration and conjugation. [step 1.1, F2, algebra] ∎
