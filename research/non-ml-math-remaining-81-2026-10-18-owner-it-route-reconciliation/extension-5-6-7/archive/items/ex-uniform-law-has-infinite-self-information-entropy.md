---
id: ex-uniform-law-has-infinite-self-information-entropy
kind: example
title: "The uniform law has infinite self-information entropy and zero differential entropy"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-law-entropy-as-self-mutual-information
  - thm-law-entropy-countable-support-characterization
  - rem-general-law-entropy-versus-differential-entropy
  - lem-unit-interval-is-standard-borel
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-borel-sets-are-lebesgue-measurable
  - def-nonnegative-lebesgue-integral
  - def-axiom-of-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "The box-volume supplier assumes countable choice; the self-information entropy theorem inherits AC through measurable-space KL."
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapters 1 and 5 §5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2 §2.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Let $P$ be Lebesgue measure restricted to the Borel unit interval $[0,1]$, and let $X$ be the identity random element on that probability space. Its law entropy $H(X)=I(X;X)$ is $+\infty$, whereas its differential entropy is $0$.

## Facts & Assumptions

**Given:** AC (and hence countable choice) and $P(A)=\lambda_1(A)$ for Borel $A\subseteq[0,1]$.

[A1] AC is used by the self-information KL definition; it implies the countable choice required by the box-volume formula. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] Borel sets are Lebesgue measurable; Lebesgue measure is a measure, and every one-dimensional box with finite endpoints, including a degenerate closed interval, has measure its length under countable choice. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] [[thm-borel-sets-are-lebesgue-measurable]] [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F2] The Borel unit interval is standard Borel. [[lem-unit-interval-is-standard-borel]]

[F3] For a standard-Borel law, self-information entropy is infinite whenever its atomic set has probability less than one. [[def-law-entropy-as-self-mutual-information]] [[thm-law-entropy-countable-support-characterization]]

[F4] Differential entropy for a Lebesgue density $f$ is $-\int f\ln f\,d\lambda_1$, with $0\ln0=0$; the nonnegative Lebesgue integral of the zero function is zero. [[rem-general-law-entropy-versus-differential-entropy]] [[def-nonnegative-lebesgue-integral]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Define $P(A)=\lambda_1(A)$ for Borel $A\subseteq[0,1]$. By [F1], these sets are Lebesgue measurable and the restricted measure is countably additive; the box formula gives $P([0,1])=1$, so P is a probability. For each $x\in[0,1]$, the degenerate interval $[x,x]=\{x\}$ has measure $x-x=0$. Thus every singleton has P-mass zero, and the atomic set $S=\{x:P(\{x\})>0\}$ is empty. [A1, F1, given]

2.1 The identity map on $[0,1]$ has law P, and its value space is standard Borel by [F2]. Since $P(S)=0<1$, [F3] gives $H(X)=+\infty$. [F2, F3, step 1.1]

3.1 Extending the density by zero outside $[0,1]$ gives $f=\mathbf1_{[0,1]}$. On the interval $f\ln f=1\ln1=0$, and off the interval the integrand is zero by the convention in [F4]. Thus $f\ln f$ is the zero function on $\mathbb R$; its integral is zero by [F4], so the differential entropy is $h(f)=0$. [F1, F4, algebra] ∎
