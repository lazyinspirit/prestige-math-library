---
id: cex-it-expected-random-code-error-does-not-give-maximal-error
kind: counterexample
title: Small expected average code error need not control maximal error
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-discrete-memoryless-channel, def-fixed-length-channel-code, def-fixed-length-channel-code-errors]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the example is a finite deterministic code and a singleton ensemble.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_obligations:
  - Give a finite DMC code with one message of error one and all other messages correct.
  - Compute both average and maximal error and realize the code as a singleton random ensemble.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.2"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 19, §19.2; average and maximal error criteria and expurgation.
    - title: MIT 6.441 Information Theory, Lecture 12, Spring 2010
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/107335d1797be9009a90467e27d1fd7a_MIT6_441S10_lec12.pdf
      locator: PDF pp. 1–3; expurgating bad codewords to control maximal error.
---

## Statement refuted

Expected average error tending to zero for singleton random-code ensembles on finite DMCs forces the corresponding maximal errors to tend to zero.

## Facts & Assumptions

**Given:** $M\ge2$, input/output alphabet $\{1,\ldots,M-1\}$, and the noiseless DMC $W(y\mid x)=\mathbf1\{y=x\}$.

[F1] [[def-fixed-length-channel-code]]: a fixed-length code consists of an encoder from messages to input words and a deterministic decoder from outputs to messages.

[F2] [[def-fixed-length-channel-code-errors]]: average error is the uniform-message mean, and maximal error is the largest individual error.

## Counterexample

For every integer $M\ge2$, there is a singleton random-code ensemble on a finite noiseless DMC whose expected average error is $1/M$ while the code's maximal error is $1$. Thus a small expected average error alone does not make every message's error small.

1.1 Use blocklength one, encode message $m$ as $x=m$ for $1\le m\le M-1$ and encode message $M$ as $x=1$. Decode output $y$ as message $y$. These maps are defined on the stated finite alphabets and form a code by [F1]. [F1, given, construct]

2.1 On the noiseless channel, messages $1,\ldots,M-1$ are decoded correctly, while message $M$ is decoded as $1$ and is always wrong. Hence [F2] gives average error $1/M$ and maximal error $1$. Take the random-code ensemble to put probability one on this single code; its expected average error remains $1/M$, while its maximal error remains $1$. Letting $M\to\infty$ proves the claimed separation. [F2, step 1.1] ∎
