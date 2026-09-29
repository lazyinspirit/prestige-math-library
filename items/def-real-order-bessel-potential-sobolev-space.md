---
id: def-real-order-bessel-potential-sobolev-space
kind: definition
title: Real-order Bessel-potential completion H^s
status: draft
origin: pipeline
deps:
  - def-bessel-potential-pre-hilbert-norm-on-schwartz-space
  - lem-bessel-potential-norm-is-positive-definite
  - def-completion-of-a-normed-space
  - thm-metric-completion-carries-a-unique-banach-space-structure
  - def-countable-choice
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Section 12.1.2, Definition 12.3 and formula (12.5), printed p. 140 (the weighted norm; the completion model below is constructed locally)"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "Section 4, (4.14) and Proposition 4.8, printed pp. 68–69 (weighted-space context; completion presentation is local)"
---

## Definition

Assume Countable Choice ([[def-countable-choice]]). For $n\ge1$ and
$s\in\mathbb R$, define $H^s(\mathbb R^n)$ to be the normed-space completion
of $\mathcal S(\mathbb R^n)$ with the positive-definite norm
$q_s(u)=\|\langle\xi\rangle^s\widehat u\|_2$ from
[[def-bessel-potential-pre-hilbert-norm-on-schwartz-space]] and
[[lem-bessel-potential-norm-is-positive-definite]].

Concretely, its elements are equivalence classes $[u_j]$ of norm-Cauchy
sequences $(u_j)_{j\in\mathbb N}$ in Schwartz space, where
$(u_j)\sim(v_j)$ exactly when
$\lim_{j\to\infty}q_s(u_j-v_j)=0$. The metric completion carries the unique
compatible Banach-space structure supplied by
[[def-completion-of-a-normed-space]] and
[[thm-metric-completion-carries-a-unique-banach-space-structure]]; its norm
is $\|[u_j]\|_{H^s}=\lim_j q_s(u_j)$. The constant-sequence map
$u\mapsto[(u,u,\ldots)]$ is the canonical dense linear isometry from Schwartz
space. At this definition stage $H^s$ is an abstract completion; no
identification with a subset of $\mathcal S'(\mathbb R^n)$ is implicit.

The only choice assumption is Countable Choice, used by the cited metric
completion theorem in its countable-sequence construction and completeness
argument. No full Axiom of Choice or dependent choice is assumed.
