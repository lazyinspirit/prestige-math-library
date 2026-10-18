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

Let \(p_1,\ldots,p_m>0\) be source probabilities summing to one, let \(d_{ij}\ge0\) be finite distortions on a nonempty finite reproduction alphabet \([n]\), and let \(\beta\ge0\) be finite. Given a full-support initial reproduction pmf \(q_0\), for \(t=0,1,\ldots\) set
\[
Z_i(q_t)=\sum_{j=1}^n q_t(j)e^{-\beta d_{ij}},\qquad
W_t(j\mid i)=\frac{q_t(j)e^{-\beta d_{ij}}}{Z_i(q_t)},\qquad
q_{t+1}(j)=\sum_{i=1}^m p_iW_t(j\mid i).
\]
All denominators are positive, every row of \(W_t\) sums to one, and \(q_{t+1}\) has full support. Define the nats objective \(L_\beta(W)=I_{\rm nat}(X;\widehat X)+\beta\mathbb E d(X,\widehat X)\), the current channel value \(L_t=L_\beta(W_t)\), and the a-posteriori factor
\[
\gamma_t:=\max_{1\le j\le n}\sum_{i=1}^m p_i\frac{e^{-\beta d_{ij}}}{Z_i(q_t)}\ge1.
\]
The certified stopping rule for tolerance \(\tau>0\) is to stop when a rigorous upper interval bound on \(\ln\gamma_t\) is at most \(\tau\); the certificate theorem proves \(L_t-L_\beta^*\le\ln\gamma_t\). When \(p_i,d_{ij},\beta\) are rational inputs, outward-rounded interval evaluation of the finite formulas and exponentials supplies such bounds. The displayed iteration is the exact-real mathematical recurrence; no bit-complexity bound is asserted.
