---
id: alg-box-muller-finite-bit-transform
kind: algorithm
title: "Finite-bit Box–Muller with certified elementary-function evaluators"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - thm-independent-fair-bit-streams-produce-uniforms
  - thm-midpoint-bit-stream-coupling-and-error
  - lem-box-muller-product-density-and-radius-moment
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

Input a bit budget $b\ge1$, two disjoint ideal fair-bit subsequences that produce independent uniforms by [[thm-independent-fair-bit-streams-produce-uniforms]], and deterministic evaluators with the following contracts at requested precision. The midpoint inputs are as defined in [[thm-midpoint-bit-stream-coupling-and-error]]; the exact real reference transform is the Box–Muller map of [[lem-box-muller-product-density-and-radius-moment]].

- A logarithm evaluator returns $\widehat\ell$ and $\eta_\ell\ge0$ with $|\widehat\ell-\log u|\le\eta_\ell$ for every supplied dyadic $u\in(0,1)$, or returns inconclusive.
- A square-root evaluator returns $\widehat r$ and $\eta_s\ge0$ with $|\widehat r-\sqrt q|\le\eta_s$ for every supplied $q\ge0$, or returns inconclusive.
- A trigonometric evaluator returns $\widehat t\in\mathbb R^2$ and $\eta_t\ge0$ with $\|\widehat t-(\cos(2\pi v),\sin(2\pi v))\|_2\le\eta_t$ for every supplied dyadic $v\in(0,1)$, or returns inconclusive. Its bound includes angle and $\pi$ evaluation error.

Take the first $b$ bits from each disjoint subsequence, form the midpoint values $u_j=(K_j+1/2)2^{-b}$, and call the logarithm evaluator on $u_1$. If $-2\widehat\ell<0$, return inconclusive. Otherwise call the square-root evaluator on $q=-2\widehat\ell$ and the trigonometric evaluator on $u_2$. If any call is inconclusive, return inconclusive. Return
$$\widehat Z=\widehat r\,\widehat t,\qquad \eta_r=\sqrt{2\eta_\ell}+\eta_s,\qquad \eta_t,$$
where $\eta_r$ is a certified bound for the radius error relative to $\sqrt{-2\log u_1}$. The procedure consumes $2b$ random bits and three certified function calls when successful. Its arithmetic supplier interface is not an IID source or an exact-normal oracle.
