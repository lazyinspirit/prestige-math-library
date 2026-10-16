---
id: def-qa-24-singular-value-transform
kind: definition
title: Odd and even singular-value transforms
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qa-24-pue-svd-data
  - def-qc-dirac-notation-conversion
justified_by:
  - lem-qa-24-singular-transform-basis-independence
axiom_use: "None; only finite-dimensional SVD data are used."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Definition 16"
      url: https://arxiv.org/pdf/1806.01838
      locator: "PDF p. 18."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §§29.2–29.3"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Printed pp. 144–147; PDF pp. 152–155, Hermitian special case."
---

## Definition

Let $A:H_R\to H_L$ be the PUE map of [[def-qa-24-pue-svd-data]], with positive singular-value decomposition $A=\sum_{j=1}^{r}\sigma_j|u_j\rangle\langle v_j|$. Let $p:[-1,1]\to\mathbb C$ be a scalar function.

If $p$ is **odd**, define the odd singular-value transform by

$$p^{\mathrm{SV}}_{\mathrm{odd}}(A):H_R\to H_L,\qquad p^{\mathrm{SV}}_{\mathrm{odd}}(A)=\sum_{j=1}^{r}p(\sigma_j)|u_j\rangle\langle v_j|.$$

If $p$ is **even**, define its right-space transform by

$$p^{\mathrm{SV}}_{R}(A):H_R\to H_R,\qquad p^{\mathrm{SV}}_{R}(A)=\sum_{j=1}^{r}p(\sigma_j)|v_j\rangle\langle v_j|+p(0)\Pi_{\ker A},$$

where $\Pi_{\ker A}$ is the orthogonal projection in $H_R$ onto $\ker A$. The left-space version is

$$p^{\mathrm{SV}}_{L}(A):H_L\to H_L,\qquad p^{\mathrm{SV}}_{L}(A)=\sum_{j=1}^{r}p(\sigma_j)|u_j\rangle\langle u_j|+p(0)\Pi_{\ker A^*}.$$

The odd transform annihilates the right kernel because oddness gives $p(0)=0$; the even transforms use the canonical kernel projections. The resulting operators are independent of the chosen SVD by [[lem-qa-24-singular-transform-basis-independence]].
