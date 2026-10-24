---
id: def-bessel-potential-pre-hilbert-norm-on-schwartz-space
kind: definition
title: Weighted Fourier candidate norm on Schwartz space
status: published
origin: pipeline
deps:
  - lem-japanese-bracket-powers-preserve-schwartz-space
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - lem-schwartz-space-is-dense-in-l-two
  - lem-complex-lp-completeness-density-and-inner-product
  - def-countable-choice
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Section 12.1.2, Definition 12.3 and formula (12.5), printed p. 140 (the weighted Fourier norm formula)"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "Section 4, formulas (4.14) and (4.17), printed pp. 68–69; Fourier normalization converted"
---

## Definition

Assume Countable Choice. Fix $n\ge1$ and $s\in\mathbb R$, and let
$\widehat u=\mathcal F u$ use the repository's negative-sign $2\pi$ Fourier
transform. For $u,v\in\mathcal S(\mathbb R^n)$ define
$$Q_s(u,v)=\int_{\mathbb R^n}\langle\xi\rangle^{2s}\widehat u(\xi)\overline{\widehat v(\xi)}\,d\xi,\qquad q_s(u)=\bigl\|\langle\xi\rangle^s\widehat u\bigr\|_{L^2}.$$

The integral is finite and $Q_s$ is linear in its first variable. Indeed,
Fourier transformation preserves Schwartz space
([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]),
the bracket multiplier preserves it
([[lem-japanese-bracket-powers-preserve-schwartz-space]]), and Schwartz
functions define $L^2$ classes
([[lem-schwartz-space-is-dense-in-l-two]]); the complex $L^2$ pairing and
Cauchy–Schwarz are those of
[[lem-complex-lp-completeness-density-and-inner-product]]. Since the weight
is real and positive, $Q_s(u,v)$ is the corresponding $L^2$ pairing of
$\langle\xi\rangle^s\widehat u$ and $\langle\xi\rangle^s\widehat v$.
At this stage $q_s$ is only the candidate seminorm; the next item proves that
its kernel is zero.

The Countable Choice assumption ([[def-countable-choice]]) is inherited from the cited Fourier and
complex $L^2$ interfaces. The integral definition itself makes no selection,
and no full Axiom of Choice is used. With the repository convention
$\mathcal F(\partial_j u)=2\pi i\xi_j\mathcal F u$, this definition asserts
no equality at integer order with a derivative-sum norm or the norm defined
by the symbol $(1+4\pi^2|\xi|^2)^{k/2}$.
