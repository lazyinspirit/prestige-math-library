---
id: lem-conditional-treatment-indicator-factorization
kind: lemma
title: "Conditional treatment-indicator factorization"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-conditional-independence-given-a-sigma-algebra
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-dominated-convergence
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, updated 2026 author-hosted edition, Chapter 2, Technical Point 2.3"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "The Mathematics of Indirect Treatment Comparisons, Chapter 10, Lemma 10.3 and Theorem 10.3 proof"
      url: "https://choxos.github.io/Mathematics-of-ITC/chapters/part2/10-adjustment-methods.html"
---

## Statement

Assume the Axiom of Choice (AC) for the conditional-expectation existence convention used here. Let $(\Omega,\mathcal F,P)$ be a probability space, let $\mathcal G\subseteq\mathcal F$ be a sub-$\sigma$-algebra, let $A$ be a random element, and let $C$ be a measurable set in its state space. If $Z$ is a real integrable random variable and $Z\perp\!\!\!\perp A\mid\mathcal G$, then, with $I=\mathbf 1_{\{A\in C\}}$,
$$E[IZ\mid\mathcal G]=E[I\mid\mathcal G]E[Z\mid\mathcal G]\quad\text{almost surely}.$$
The conclusion holds for every integrable $Z$, not only bounded outcomes.

## Facts & Assumptions

**Given:** AC, a probability space, $\mathcal G\subseteq\mathcal F$, random elements $A,Z$, a measurable treatment set $C$, $Z\in L^1(P)$, and $Z\perp\!\!\!\perp A\mid\mathcal G$.

[A1] AC is assumed for existence of the conditional-expectation classes; $Z$ is integrable and conditionally independent of $A$ given $\mathcal G$.

[F1] Conditional independence means the bounded-product conditional-expectation identity for every pair of bounded measurable functions. ([[def-conditional-independence-given-a-sigma-algebra]])

[F2] Under AC, $E[X\mid\mathcal G]$ denotes the almost-sure class of integrable $\mathcal G$-measurable conditional-expectation versions. ([[def-conditional-expectation-as-an-ae-class]])

[F3] Conditional expectation preserves order and constants, preserves expectation, and satisfies $E|E[X\mid\mathcal G]|\le E|X|$ for integrable $X$. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F4] If measurable $Z_n\to Z$ almost everywhere and $|Z_n|\le |Z|$ for integrable $Z$, then $Z_n\to Z$ in $L^1$. ([[thm-dominated-convergence]])

## Proof

1.1 Set $I=\mathbf 1_{\{A\in C\}}$, $e=E[I\mid\mathcal G]$, and $U=E[Z\mid\mathcal G]$. These conditional-expectation classes exist under AC, and $0\le e\le1$ almost surely by positivity and preservation of constants. [given, A1, F2, F3]

2.1 For each integer $n\ge1$, put $Z_n=\max(-n,\min(Z,n))$. The functions $z\mapsto\max(-n,\min(z,n))$ are bounded and measurable, so [F1] applied to $1_C(A)$ and this truncation of $Z$ gives $E[IZ_n\mid\mathcal G]=eE[Z_n\mid\mathcal G]$. [A1, F1, step 1.1]

2.2 By [F4], $Z_n\to Z$ in $L^1$. Since $|I|\le1$, $IZ_n\to IZ$ in $L^1$; [F3] then gives $E[IZ_n\mid\mathcal G]\to E[IZ\mid\mathcal G]$ in $L^1$ and $eE[Z_n\mid\mathcal G]\to eU$ in $L^1$, using $0\le e\le1$. [F3, F4, step 1.1]

3.1 The two sides of step 2.1 are equal for every $n$ and converge in $L^1$ to the two sides claimed in the Statement. Uniqueness of limits in $L^1$ gives $E[IZ\mid\mathcal G]=eU$ almost surely. [step 2.1, step 2.2] ∎
