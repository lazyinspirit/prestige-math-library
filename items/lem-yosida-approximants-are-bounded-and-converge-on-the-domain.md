---
id: lem-yosida-approximants-are-bounded-and-converge-on-the-domain
kind: lemma
title: "Yosida approximants are bounded and converge on the domain"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps:
  - lem-yosida-resolvent-converges-strongly-to-the-identity
  - def-yosida-approximants
  - def-resolvent-of-a-closed-operator
  - cor-resolvent-power-estimates-for-semigroup-generators
  - lem-operator-norm-is-a-norm
  - def-operator-norm
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 3, Lemma 3.4, printed pp. 72-73"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, Lemma 11.15, printed pp. 263-264"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Under the hypotheses of [[lem-yosida-resolvent-converges-strongly-to-the-identity]], let $A_\lambda=\lambda AR(\lambda,A)$ be the Yosida approximants ([[def-yosida-approximants]]). Then $\|A_\lambda\| \le\lambda^2\frac{M}{\lambda-\omega}+|\lambda|$ for $\lambda>\omega$, and $A_\lambda x\to Ax$ as $\lambda\to\infty$ for every $x\in D(A)$.

## Facts & Assumptions

**Given:** The hypotheses of [[lem-yosida-resolvent-converges-strongly-to-the-identity]] on the closed densely defined operator $A$, and the Yosida approximants $A_\lambda=\lambda AR(\lambda,A)=\lambda^2R(\lambda,A)-\lambda I$ ([[def-yosida-approximants]]).

[F1] $A_\lambda=\lambda^2R(\lambda,A)-\lambda I$ is bounded with $\|A_\lambda\|\le\lambda^2\|R(\lambda,A)\|+|\lambda|$ ([[def-yosida-approximants]], [[lem-operator-norm-is-a-norm]], [[def-operator-norm]]).

[F2] $\|R(\lambda,A)\|\le M/(\lambda-\omega)$ and $\lambda R(\lambda,A)x\to x$ for all $x\in X$, $\lambda R(\lambda,A)Ax\to Ax$ for $x\in D(A)$ (the bound is a hypothesis of [[lem-yosida-resolvent-converges-strongly-to-the-identity]], which proves both convergence conclusions).

[F3] For $x\in D(A)$ one has $AR(\lambda,A)x=R(\lambda,A)Ax$: both equal $\lambda R(\lambda,A)x-x$ by the resolvent identity ([[def-resolvent-of-a-closed-operator]]).



## Proof

**Proof technique:** direct: the norm bound from the identity form, and pointwise convergence from the strong resolvent convergence.

1.1 By [F1] and [F2], $\|A_\lambda\|\le\lambda^2\frac{M}{\lambda-\omega}+|\lambda|$ for $\lambda>\omega$, which is the asserted bound. [F1, F2]

1.2 For $x\in D(A)$, $A_\lambda x=\lambda AR(\lambda,A)x=\lambda R(\lambda,A)Ax$ by [F3]; by [F2] the right-hand side converges to $Ax$ as $\lambda\to\infty$. Hence $A_\lambda x\to Ax$ for every $x\in D(A)$. [F2, F3]

2.1 Both conclusions hold for every $\lambda>\omega$, and no uniform convergence on all of $D(A)$ or on bounded sets is claimed. [step 1.1, step 1.2] ∎
