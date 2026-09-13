---
id: thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
kind: theorem
title: Fourier differentiation and multiplication identities on tempered distributions
status: published
origin: pipeline
deps: [thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions, def-fourier-transform-of-a-tempered-distribution, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
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
      locator: "Equations (11.36)–(11.37), p. 128; converted from D=-i partial to the 2pi convention"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Theorem 8.4.3(b), p. 129"
proof_strategy: direct
---

## Statement

Assume Countable Choice.  For $u\in\mathcal S'(\mathbb R^n)$ and every
multi-index $\alpha$,

$$\mathcal F(\partial^\alpha u) =(2\pi i\xi)^\alpha\mathcal Fu, \qquad \mathcal F(x^\alpha u) =\left(-\frac1{2\pi i}\right)^{|\alpha|} \partial_\xi^\alpha\mathcal Fu.$$

Every operation and equality is in $\mathcal S'(\mathbb R^n)$.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]],
$u\in\mathcal S'(\mathbb R^n)$, and a multi-index $\alpha$.

[F1] Derivatives and polynomial products on $\mathcal S'$ use the bilinear
transpose conventions
([[thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions]]).

[F2] The distributional Fourier transform is the bilinear transpose of the
Schwartz transform ([[def-fourier-transform-of-a-tempered-distribution]]).

[F3] On Schwartz tests,
$\mathcal F(\partial_j\varphi)=2\pi i\xi_j\mathcal F\varphi$ and
$\partial_j\mathcal F\varphi=\mathcal F(-2\pi ix_j\varphi)$
([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]), and all
test operations involved are continuous
([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]]).

## Proof

**Proof technique:** first-order test calculation and iteration.

1.1 Fix a coordinate $j$ and a Schwartz test $\varphi$; transposition gives the following calculation. [F1, F2, F3]

$$\begin{aligned} \langle\mathcal F(\partial_j u),\varphi\rangle &=-\langle u,\partial_j(\mathcal F\varphi)\rangle\\ &=2\pi i\langle u,\mathcal F(\xi_j\varphi)\rangle =\langle2\pi i\xi_j\mathcal Fu,\varphi\rangle. \end{aligned}$$

The first minus sign is the distributional derivative sign; the second
identity is the second formula in [F3]. [F1, F2, F3]

1.2 The first formula in [F3] gives $x_j\mathcal F\varphi=(2\pi i)^{-1}\mathcal F(\partial_j\varphi)$, so transposition yields the second calculation. [F1, F2, F3]

$$\langle\mathcal F(x_ju),\varphi\rangle =\frac1{2\pi i}\langle\mathcal Fu,\partial_j\varphi\rangle =-\frac1{2\pi i}\langle\partial_j\mathcal Fu,\varphi\rangle.$$

[F1, F2, F3]

2.1 Coordinate derivatives and coordinate multipliers commute among themselves in the relevant families.  Iterating steps 1.1 and 1.2 $|\alpha|$ times therefore gives the two multi-index identities.  For $\alpha=0$ both reduce to $\mathcal Fu=\mathcal Fu$.  Countable Choice is used only through the published Schwartz Fourier identity. [step 1.1, step 1.2] ∎
