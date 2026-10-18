---
id: alg-it-finite-alphabet-blahut-arimoto
kind: algorithm
title: "Finite-alphabet Blahut–Arimoto rate-distortion algorithm"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-it-information-rate-distortion-function
  - lem-it-rate-distortion-convexity-and-monotonicity
  - alg-certified-elementary-range-evaluation
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; each update is a finite sum and a positive normalization."
provenance:
  statement: ai-altered
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

For the exact-real recurrence, write $[m]=\{1,\ldots,m\}$ and $[n]=\{1,\ldots,n\}$ for positive integers $m,n$. Let $p_1,\ldots,p_m>0$ be source probabilities summing to one, let $d_{ij}\ge0$ be finite distortions for $(i,j)\in[m]\times[n]$, let $\beta\ge0$ be finite, and let $q_0$ be any full-support reproduction pmf. For $t=0,1,\ldots$ set
$$
Z_i(q_t)=\sum_{j=1}^n q_t(j)e^{-\beta d_{ij}},\qquad W_t(j\mid i)=\frac{q_t(j)e^{-\beta d_{ij}}}{Z_i(q_t)},\qquad q_{t+1}(j)=\sum_{i=1}^m p_iW_t(j\mid i).
$$
All denominators are positive, every row of $W_t$ sums to one, and $q_{t+1}$ has full support. Define the nats objective $L_\beta(W)=I_{\rm nat}(X;\widehat X)+\beta\mathbb E d(X,\widehat X)$, the current channel value $L_t=L_\beta(W_t)$, and the a-posteriori factor
$$
\gamma_t:=\max_{1\le j\le n}\sum_{i=1}^m p_i\frac{e^{-\beta d_{ij}}}{Z_i(q_t)}\ge1.
$$

For $\tau>0$, the output is the first processed iteration index $t$ for which a rigorous upper interval endpoint $u_t\ge\ln\gamma_t$ satisfies $u_t\le\tau$, together with $W_t$, $q_{t+1}$, $L_t$, and interval enclosures of these values and $\ln\gamma_t$. Compute the objective by
$$L_t=\sum_{i=1}^m\sum_{j=1}^n p_iW_t(j\mid i)\ln\frac{W_t(j\mid i)}{q_{t+1}(j)}+\beta\sum_{i=1}^m\sum_{j=1}^n p_iW_t(j\mid i)d_{ij}.$$
The exact-real recurrence defines all values being enclosed.

The certified interval procedure is defined only when every $p_i,d_{ij},\beta,q_0(j)$ and $\tau$ is rational, with the positivity, normalization, finiteness and full-support conditions above and $\tau>0$. Execute the following loops. For $t=0,1,2,\ldots$, try precisions $r=2,3,4,\ldots$ in order. At precision $r$, use the dyadic format $(p,e_{\min},e_{\max})=(r^2,-r,r)$ and truncation index $N=r$ in [[alg-certified-elementary-range-evaluation]]. Round each rational input outward to an interval in this format. Build a finite typed expression DAG for the recurrence from $q_0$ through $q_t$, and request enclosures for every $W_t(j\mid i)$, $q_{t+1}(j)$, $L_t$, and $s_{j,t}:=\sum_i p_i e^{-\beta d_{ij}}/Z_i(q_t)$. If rounding any input overflows or the evaluator returns a non-finite status, increase $r$ and repeat this precision loop. Otherwise form the interval $G_t=[\max_j\underline{s}_{j,t},\max_j\overline{s}_{j,t}]$ from the rational endpoints of the $s_{j,t}$ enclosures, and evaluate $\ln G_t$ with the same format and truncation index. If this evaluation is non-finite, increase $r$ and repeat. Continue increasing $r$ until all requested output enclosures, including that of $\ln\gamma_t$, have width less than $1/(t+1)$. Let $u_t$ be the upper endpoint of the resulting $\ln G_t$ enclosure. If $u_t\le\tau$, return the stated output and enclosures; otherwise end the precision loop and proceed to $t+1$. For arbitrary exact-real inputs the recurrence remains mathematically defined, but this interval implementation is specified only under the rational representability conditions. No bit-complexity bound is asserted.
