---
id: alg-it-finite-alphabet-blahut-arimoto
kind: algorithm
title: "Finite-alphabet Blahut–Arimoto rate-distortion algorithm"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-information-rate-distortion-function
  - lem-it-rate-distortion-convexity-and-monotonicity
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; each update is a finite sum and a positive normalization."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 4, §4.4, printed pp. 96–97: the finite Blahut iteration and alternating minimizations; Gray expressly does not prove convergence."
    - title: "MIT OpenCourseWare 6.441, Chapter 25: Evaluating R(D)"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5721b7df786b416dadad7c7bb3364d00_MIT6_441S16_chapter_25.pdf"
      locator: "§25.2, PDF pp. 4–5 / printed pp. 258–259: parametric finite rate-distortion optimization and iterative algorithms."
---

## Definition

For the exact-real recurrence, let $p_1,\ldots,p_m>0$ be source probabilities summing to one, let $d_{ij}\ge0$ be finite distortions on a nonempty finite reproduction alphabet $[n]$, let $\beta\ge0$ be finite, and let $q_0$ be any full-support reproduction pmf. For $t=0,1,\ldots$ set
$$
Z_i(q_t)=\sum_{j=1}^n q_t(j)e^{-\beta d_{ij}},\qquad W_t(j\mid i)=\frac{q_t(j)e^{-\beta d_{ij}}}{Z_i(q_t)},\qquad q_{t+1}(j)=\sum_{i=1}^m p_iW_t(j\mid i).
$$
All denominators are positive, every row of $W_t$ sums to one, and $q_{t+1}$ has full support. Define the nats objective $L_\beta(W)=I_{\rm nat}(X;\widehat X)+\beta\mathbb E d(X,\widehat X)$, the current channel value $L_t=L_\beta(W_t)$, and the a-posteriori factor
$$
\gamma_t:=\max_{1\le j\le n}\sum_{i=1}^m p_i\frac{e^{-\beta d_{ij}}}{Z_i(q_t)}\ge1.
$$

For tolerance $\tau>0$, the output is the first processed iteration index $t$ for which the interval procedure below certifies an upper bound $u_t\ge\ln\gamma_t$ with $u_t\le\tau$, together with the current channel $W_t$, its output law $q_{t+1}$, its objective value $L_t$, and interval enclosures of these values and of $\ln\gamma_t$. The exact-real recurrence defines the values being enclosed; the returned intervals are required to contain them.

The certified interval procedure has the following representability conditions: every $p_i$, $d_{ij}$, $\beta$, every coordinate of $q_0$, and $\tau$ is a rational input, with the positivity, normalization, and finiteness conditions above and $\tau>0$. At iteration $t$, evaluate the finite recurrence and objective with outward-rounded intervals, refining precision until the enclosures of all output values and $\ln\gamma_t$ have width less than $1/(t+1)$. If the resulting rational upper endpoint $u_t$ for $\ln\gamma_t$ is at most $\tau$, return the stated output; otherwise proceed to iteration $t+1$. Positive denominators and finite distortions make each finite calculation well-defined. For arbitrary exact-real inputs the recurrence remains mathematically defined, but this interval implementation is specified only under the rational representability conditions. No bit-complexity bound is asserted.
