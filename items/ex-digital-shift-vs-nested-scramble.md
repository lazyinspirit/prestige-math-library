---
id: ex-digital-shift-vs-nested-scramble
kind: example
title: "A digital shift and a nested scramble give different error laws"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-digital-shift-randomization
  - def-nested-uniform-scramble
  - lem-digital-shift-marginals-and-net-preservation
  - lem-nested-scramble-marginals-and-net-preservation
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - thm-dynkin-pi-lambda
  - thm-factorization-of-expectations-for-independent-variables
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-geometric-sequence-null
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §§17.5–17.6"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Pierre L’Ecuyer and Christiane Lemieux, Recent Advances in Randomized Quasi-Monte Carlo Methods, §§5.2–5.3, 6.2"
      url: "https://www.math.uwaterloo.ca/~clemieux/papers/survey01.pdf"
---

## Example

Use the base-$2$ net $\{0,1/2\}$ in one dimension and $f(x)=x$. Compare its
digital shift and nested uniform scramble. Both randomizations preserve the
net almost surely and make each point uniform, but their estimate variances differ.

## Facts & Assumptions

**Given:** The input points $0,1/2$, the integrand $f(x)=x$, and the two randomizations.

[F1] [[def-digital-shift-randomization]]: A digital shift adds the same random base-$b$ digit at each position to every point.

[F2] [[def-nested-uniform-scramble]]: A nested scramble uses independent permutations at distinct input-prefix nodes.

[F3] [[lem-digital-shift-marginals-and-net-preservation]]: Digital shifts preserve the net almost surely and make each point uniform.

[F4] [[lem-nested-scramble-marginals-and-net-preservation]]: Nested scrambles preserve the net almost surely and make each point uniform.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: Expectation is integration against the probability law.

[F6] [[def-moments-variance-and-covariance]]: Variance is the centered second moment of a square-integrable variable.

[F7] [[thm-dynkin-pi-lambda]]: Agreement on a generating $\pi$-system determines the Borel probability law.

[F8] [[thm-factorization-of-expectations-for-independent-variables]]: Integrable functions of independent random variables have factored product expectation.

[F9] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: Expectation is linear on integrable real random variables.

[F10] [[lem-geometric-sequence-null]]: $2^{-L}\to0$ as $L\to\infty$.

## Verification

1.1 Under a binary digital shift, the two output first digits are opposite and their later digits agree. Outside the null event that the shared tail is eventually all ones, their numeric half-open representatives therefore have average $\widehat I_{\rm shift}=1/4+T$, where $T=\sum_{k\ge2}S_k2^{-k}$. For any fixed starting position, the event that the independent fair digits are all one from there onward has probability at most $2^{-L}$ for every $L$; [F10] makes each such tail event null, so their countable union is null. A prescribed prefix of $K$ tail digits has probability $2^{-K}$ and places $T$ in a half-open dyadic interval of length $2^{-K-1}$, exactly its probability under $\operatorname{Unif}[0,1/2)$. These intervals generate the Borel sets of $[0,1/2)$, and [F7] gives $T\sim\operatorname{Unif}[0,1/2)$. Hence [F5] and [F6] give $\mathbb E\widehat I_{\rm shift}=1/2$ and $\operatorname{Var}(\widehat I_{\rm shift})=1/48$; the null representative choice does not change these moments. [F1, F5, F6, F7, F10, given, algebra]

1.2 Under nested scrambling, the two distinct first input digits are sent to opposite halves. After that first digit their input-prefix nodes are distinct, so the two subsequent digit streams are independently scrambled. Conditional on which point enters which half, they are independent uniforms on their respective half intervals, and either assignment gives the same law for their average. Hence this is also the unconditional law. Each has variance $(1/2)^2/12=1/48$, so [F8]–[F9] give the average variance $(1/48+1/48)/4=1/96$. [F2, F8, F9, given, algebra]

2.1 By [F3] and [F4], both rules have uniform marginals and preserve the same finite net almost surely. Their estimates nevertheless have variances $1/48$ and $1/96$, respectively, for this $f$. Thus marginal uniformity and almost-sure exact net preservation alone do not determine the randomization error law. [F3, F4, step 1.1, step 1.2] ∎
