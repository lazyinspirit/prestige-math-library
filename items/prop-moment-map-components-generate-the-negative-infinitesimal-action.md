---
id: prop-moment-map-components-generate-the-negative-infinitesimal-action
kind: proposition
title: Moment map components generate the negative infinitesimal action
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions, def-hamiltonian-vector-field-and-hamiltonian-function, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, Definition 22.1(1), printed pages 133--134
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Definition 7.12, printed page 83
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $\mu:M\to\mathfrak g^*$ be an infinitesimal
moment map for a symplectic action, so that
$d\mu^\xi=-\iota_{\xi_M}\omega$ for every $\xi\in\mathfrak g$. Then for every
$\xi$ the Hamiltonian vector field of the component $\mu^\xi$ is the negative
of the fundamental field:

$$X_{\mu^\xi}=-\xi_M .$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a symplectic action, an infinitesimal moment map $\mu$, and $\xi\in\mathfrak g$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field dependency of [F1].

[F1] The component moment equation reads $d\mu^\xi=-\iota_{\xi_M}\omega$. [[def-moment-map-and-component-hamiltonian]].

[F2] $\iota$ is linear in its vector-field slot, so $\iota_{-\xi_M}\omega=-\iota_{\xi_M}\omega$. [[def-hamiltonian-vector-field-and-hamiltonian-function]].

[F3] For every smooth $H$ there is a unique smooth vector field $X_H$ satisfying $\iota_{X_H}\omega=dH$. [[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]].

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], $d\mu^\xi=-\iota_{\xi_M}\omega=\iota_{-\xi_M}\omega$: the covector $d\mu^\xi$ is obtained by contracting $\omega$ with the field $-\xi_M$. [F1, F2, given]

2.1 The field $-\xi_M$ is smooth because $\xi_M$ is. So $-\xi_M$ is a smooth vector field whose contraction with $\omega$ equals $d\mu^\xi$, the differential of the smooth function $\mu^\xi$. [step 1.1]

3.1 By [F3] the field $X_{\mu^\xi}$ with $\iota_{X_{\mu^\xi}}\omega=d\mu^\xi$ exists and is the only such field, and [step 1.1] exhibits $-\xi_M$ as such a field; hence $X_{\mu^\xi}=-\xi_M$. [A1, F3, step 2.1] ∎
