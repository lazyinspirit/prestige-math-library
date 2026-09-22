---
id: cor-lambda-identity-minus-compact-has-index-zero
kind: corollary
title: Lambda identity minus compact has index zero
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-fredholm-index-is-stable-under-compact-perturbations, def-fredholm-operator-cokernel-and-index, def-compact-linear-operator, def-bounded-linear-operator, def-banach-space, def-linear-map, def-quotient-vector-space-coset-notation, lem-linear-combinations-of-compact-operators-are-compact, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5 pp.187–188, Theorem 6.27"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.4, index of lambda I minus compact"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a Banach space
over $\mathbb R$ or $\mathbb C$, let $K:X\to X$ be a compact operator
([[def-compact-linear-operator]]) and let $\lambda\ne0$ be a scalar. Then
$\lambda I-K$ is a Fredholm operator and
$\operatorname{ind}(\lambda I-K)=0$
([[def-fredholm-operator-cokernel-and-index]]).

## Facts & Assumptions

[A1] If $A$ is Fredholm and $C$ is compact then $A+C$ is Fredholm with $\operatorname{ind}(A+C)=\operatorname{ind}A$ ([[thm-fredholm-index-is-stable-under-compact-perturbations]]).

[A2] A scalar multiple of a compact operator is compact ([[lem-linear-combinations-of-compact-operators-are-compact]]); the identity is bounded linear, $\lambda I$ is invertible with inverse $\lambda^{-1}I$ for $\lambda\ne0$, and an invertible bounded operator is Fredholm of index $0$, because its kernel and cokernel are the zero spaces ([[def-linear-map]], [[def-bounded-linear-operator]], [[def-fredholm-operator-cokernel-and-index]], [[def-quotient-vector-space-coset-notation]], [[def-banach-space]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, a Banach space $X$ over $\mathbb R$ or $\mathbb C$, a compact $K:X\to X$ and a scalar $\lambda\ne0$.

1.1 The operator $\lambda I$ is bounded and invertible with inverse $\lambda^{-1}I$, hence Fredholm with $\operatorname{ind}(\lambda I)=\dim\{0\}-\dim\{0\}=0$. [A2]

1.2 The operator $-K$ is compact by [A2], and $\lambda I-K=\lambda I+(-K)$ is a compact perturbation of the Fredholm operator $\lambda I$. [A2, algebra]

2.1 By [A1] the operator $\lambda I-K$ is Fredholm and $\operatorname{ind}(\lambda I-K)=\operatorname{ind}(\lambda I)=0$, which is the claim. [step 1.1, step 1.2, A1] ∎
