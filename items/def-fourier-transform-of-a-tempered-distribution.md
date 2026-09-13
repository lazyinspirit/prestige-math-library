---
id: def-fourier-transform-of-a-tempered-distribution
kind: definition
title: Fourier transform of a tempered distribution
status: published
origin: pipeline
deps: [def-tempered-distribution, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, def-countable-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Definition 11.22 and equation (11.33), p. 127; normalization converted to 2pi"
---

## Definition

Assume [[def-countable-choice|Countable Choice]], exactly as required by the
published Schwartz Fourier theorem.  For $\varphi\in\mathcal S(\mathbb R^n)$
put

$$\widehat\varphi(\xi)=\mathcal F\varphi(\xi) =\int_{\mathbb R^n}\varphi(x)e^{-2\pi i x\cdot\xi}\,dx.$$

For $u\in\mathcal S'(\mathbb R^n)$ define its **Fourier transform** by

$$\langle\mathcal Fu,\varphi\rangle =\langle u,\mathcal F\varphi\rangle \qquad(\varphi\in\mathcal S(\mathbb R^n)).$$

The published automorphism
[[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]
sends Schwartz tests continuously to Schwartz tests, so composition with the
continuous functional of [[def-tempered-distribution]] is again a continuous
complex-linear functional.  Hence $\mathcal Fu\in\mathcal S'$.  The pairing
is bilinear: there is no conjugation and no inverse transform on the
right-hand side.  Countable Choice is used only through the cited published
Fourier construction; transposition itself uses no additional choice.
