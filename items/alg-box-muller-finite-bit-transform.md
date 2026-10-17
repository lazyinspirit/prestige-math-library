---
id: alg-box-muller-finite-bit-transform
kind: algorithm
title: "Finite-bit Box–Muller with certified elementary-function evaluators"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 13
deps:
  - thm-independent-fair-bit-streams-produce-uniforms
  - thm-midpoint-bit-stream-coupling-and-error
  - lem-box-muller-product-density-and-radius-moment
  - alg-budgeted-validated-range-evaluation
  - thm-budgeted-range-evaluation-terminates-and-is-sound
  - alg-na-certified-unit-circle-phase
  - thm-na-certified-unit-circle-phase-enclosure
  - thm-logarithm-derivative-and-integral
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter V §4.4, generating normal random variates"
      url: "https://luc.devroye.org/chapter_five.pdf"
    - title: "E. M. Raz, Lecture Notes in Probability, Chapter 5, Exercise 5.2"
      url: "https://ma.huji.ac.il/~razk/Teaching/LectureNotes/LectureNotesProbability.pdf"
---

## Definition

Input an integer bit budget $b\ge1$, two disjoint ideal fair-bit subsequences as in
[[thm-independent-fair-bit-streams-produce-uniforms]], and a fixed deterministic
configuration consisting of finite dyadic format parameters, positive integer
series truncation indices $N\ge1$ and nonnegative integer total split budgets
$B\ge0$ for the log/root interval evaluators, positive dyadic log/root width
targets, and phase parameters with exact rational $0<\tau\le1/4$, integer exponent limits
$e_{\min}\le e_{\max}$, integer precisions $2\le p_0\le p_{\max}$,
and a positive integer elementary-series cap $J\ge1$. Every call uses
these fixed parameters; a failed call returns `inconclusive` with its supplier
status. No success at a requested width is promised for arbitrary fixed budgets.
The midpoint convention is [[thm-midpoint-bit-stream-coupling-and-error]], and
the exact reference transform is [[lem-box-muller-product-density-and-radius-moment]].

1. Take the first $b$ bits from each subsequence and form the exact dyadics
   $u_j=(K_j+1/2)2^{-b}$. Enclose $u_1$ by directed dyadic endpoints in the
   selected format. If this is non-finite or its lower endpoint is not
   positive, return `inconclusive`; underflow may not turn a log argument
   into an accepted interval containing zero.

2. Apply [[alg-budgeted-validated-range-evaluation]] to the logarithm DAG on
   that interval with the configured finite parameters and log width target.
   On `certified(L,X)`, write $L=[L_-,L_+]$ and set
   $\widehat\ell=L_-$, $\eta_\ell=L_+-L_-$. The natural logarithm equals
   the integral logarithm by [[thm-logarithm-derivative-and-integral]], so
   $L_-\le\log u_1<0$. Compute the exact dyadic $q=-2\widehat\ell\ge0$.

3. Enclose $q$ by directed endpoints in the configured format; reject
   non-finite endpoints or a negative lower endpoint. Apply the same budgeted
   procedure to its square-root DAG with the root width target. On a
   certified interval $S=[S_-,S_+]$, set $\widehat r=S_-$ and
   $\eta_s=S_+-S_-$. The range guarantee of
   [[thm-budgeted-range-evaluation-terminates-and-is-sound]] gives
   $|\widehat\ell-\log u_1|\le\eta_\ell$ and
   $|\widehat r-\sqrt q|\le\eta_s$. Width differences and the products in
   these instructions are exact dyadic arithmetic.

4. Call [[alg-na-certified-unit-circle-phase]] on the exact rational
   $q_{\rm phase}=2u_2$ and configured phase parameters. On its certified
   return $(\widehat w,\epsilon)$, set
   $\widehat t=(\Re\widehat w,\Im\widehat w)$ and $\eta_t=\epsilon$.
   By [[thm-na-certified-unit-circle-phase-enclosure]],
   $\|\widehat t-(\cos(2\pi u_2),\sin(2\pi u_2))\|_2\le\eta_t$,
   including pi, angle, truncation and directed-endpoint errors. This is the
   existing phase routine, with its existing canonical-pi bridge.

5. Return the exact dyadic vector $\widehat Z=\widehat r\,\widehat t$ and
   the dyadic certificates $\eta_\ell,\eta_s,\eta_t$. If any preceding
   supplier call has a non-finite status, propagate it as `inconclusive`.
   Final vector multiplication is exact dyadic multiplication; rounding it
   further requires a separate added error certificate.

The output is the dyadic vector together with the reported evaluator certificates.
Its arithmetic suppliers provide neither an IID source nor exact normal output.
