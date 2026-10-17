---
id: ex-tikhonov-bias-noise-tradeoff
kind: example
title: "Increasing the Tikhonov parameter trades smaller data response for more bias"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-tikhonov-error-chain-with-discretization-and-residual
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap5.pdf"
      locator: "Slides 2–6 on the forward error and bias/data perturbation split."
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapter 6, Tikhonov functional and normal equation."
---

## Example

Assume Countable Choice. In the scalar problem $A=1$, $x^\dagger=1$, and $e=0.1$, the data are
$b=1.1$. At $\lambda=0.01$, the regularization bias is $1/101$ and the
data-noise contribution has magnitude $10/101$. At $\lambda=1$, the
corresponding magnitudes are $1/2$ and $1/20$. This pair of parameter choices
shows the tradeoff; it does not assert a universally optimal parameter rule.

## Facts & Assumptions

**Given:** Countable Choice, $A=1$, $x^\dagger=1$, $e=0.1$, $b=Ax^\dagger+e=1.1$, and the two positive parameter values; verify the regularization bias and data-noise terms.

[F1] [[thm-tikhonov-error-chain-with-discretization-and-residual]]: For finite matrices, $x^\dagger-A^\#_\lambda b=(I-A^\#_\lambda A)x^\dagger -A^\#_\lambda e$ with $A^\#_\lambda=(A^*A+\lambda I)^{-1}A^*$.

## Verification

1.1 In this scalar case $A^\#_\lambda=1/(1+\lambda)$, so the bias magnitude is $|1-A^\#_\lambda A|=\lambda/(1+\lambda)$ and the noise magnitude is $|A^\#_\lambda e|=0.1/(1+\lambda)$ by [F1]. [given, F1, algebra]

2.1 At $\lambda=0.01$ these values are $0.01/1.01=1/101$ and $0.1/1.01=10/101$; at $\lambda=1$ they are $1/2$ and $0.1/2=1/20$. The two components move in opposite directions for these choices, with no parameter-choice guarantee asserted. [step 1.1, algebra] ∎
