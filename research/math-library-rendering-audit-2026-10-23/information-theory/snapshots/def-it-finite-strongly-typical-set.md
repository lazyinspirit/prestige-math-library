---
id: def-it-finite-strongly-typical-set
kind: definition
title: "Finite strongly typical sets with support restriction"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the alphabet and empirical counts are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Chapter 2, typical sequences; Lecture 13, distributed lossy source coding."
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "Chapter 11, §11.1, method of types; Chapter 15, §15.2, jointly typical sequences."
---

## Definition

Let $\mathcal A$ be a finite nonempty alphabet, let $P$ be a probability vector on $\mathcal A$ in the sense of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]], and let $n\ge1$. Write $\operatorname{supp}(P):=\{a\in\mathcal A:P(a)>0\}$. For $a^n=(a_1,\ldots,a_n)\in\mathcal A^n$, its empirical distribution is $\widehat P_{a^n}(a):=n^{-1}|\{t:a_t=a\}|$. For $\delta>0$, define the support-restricted strongly typical set by
$$T_\delta^{(n)}(P):=\{a^n\in\operatorname{supp}(P)^n:|\widehat P_{a^n}(a)-P(a)|\le\delta P(a)\text{ for every }a\text{ with }P(a)>0\}.$$
For a finite joint law $P_{XA}$ and a fixed $x^n$, write $T_\delta^{(n)}(P_{A|X}\mid x^n):=\{a^n:(x^n,a^n)\in T_\delta^{(n)}(P_{XA})\}$. This conditional set is empty if $x^n$ is outside the support of $P_X$. Zero-probability letters are excluded exactly, so no logarithm of zero occurs in likelihood calculations on these sets.

## Remarks

The relative tolerance is used to keep support and likelihood ratios explicit. Each finite alphabet gives finitely many empirical distributions, and every sequence in $T_\delta^{(n)}(P)$ has its empirical frequencies within a stated multiplicative tolerance of $P$.
