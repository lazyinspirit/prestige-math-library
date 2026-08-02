---
id: def-chebyshev-polynomials-first-and-second-kind
kind: definition
title: "Chebyshev polynomials of the first and second kinds by their three-term recurrences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-polynomial-degree-leading-coefficient-and-monic, def-finite-sum, thm-recursion]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 18"
      url: "https://dlmf.nist.gov/18"
pipeline_run: null
---

## Definition

Let $\mathcal P_{\mathbb R}$ be the set of formal real polynomials of
[[def-real-polynomial-degree-leading-coefficient-and-monic]]. Associate to every
$P\in\mathcal P_{\mathbb R}$ an eventually zero coefficient sequence $(p_k)$:
use its displayed finite coefficient list and extend it by zeros when $P\ne0$,
and put $p_k=0$ for every $k$ when $P=0$. Do the same for $Q$, with coefficients
$(q_k)$. Define $P+Q$ coefficientwise and define $PQ$ by the convolution
coefficients
$$
(P+Q)_k=p_k+q_k,\qquad (PQ)_k=\sum_{j=0}^{k}p_jq_{k-j}.
$$
using the real finite sum of [[def-finite-sum]]. In either construction, discard
trailing zero coefficients; if every coefficient is zero, the result is the zero
polynomial. Scalar multiplication and subtraction are the corresponding
coefficientwise operations. Thus these formulas define operations on the formal
coefficient-list objects, independently of evaluation.

Write $1=(1)$ and $X=(0,1)$, and define
$$
\Phi(P,Q):=(Q,2XQ-P)\qquad(P,Q\in\mathcal P_{\mathbb R}).
$$
Apply [[thm-recursion]] to the set
$\mathcal P_{\mathbb R}\times\mathcal P_{\mathbb R}$, first with initial value
$(1,X)$ and then with initial value $(1,2X)$, always using the function $\Phi$.
This gives unique pair sequences $H^T,H^U$. Define $T_n$ and $U_n$ to be the
first coordinates of $H^T_n$ and $H^U_n$, respectively. Since the first
coordinate of $\Phi(P,Q)$ is $Q$, the second coordinate of $H^T_n$ is
$T_{n+1}$ and the second coordinate of $H^U_n$ is $U_{n+1}$. Consequently
$$
T_0=1,\quad T_1=X,\quad T_{n+2}=2XT_{n+1}-T_n,
$$
$$
U_0=1,\quad U_1=2X,\quad U_{n+2}=2XU_{n+1}-U_n
$$
for every $n\in\mathbb N$. These unique sequences are the **Chebyshev
polynomials of the first and second kinds**.
