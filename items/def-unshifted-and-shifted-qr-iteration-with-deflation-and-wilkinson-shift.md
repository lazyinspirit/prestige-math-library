---
id: def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift
kind: definition
title: "Unshifted QR iteration, shifted QR iteration, deflation, and the Wilkinson shift"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-full-reduced-and-column-pivoted-computational-qr-factorisations,
       def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Per-Olof Persson, The QR Algorithm I"
      url: "https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/f1ce20d2c382d61127d8948b42dd0c86_MIT18_335JS19_lec16_reading.pdf"
    - title: "Per-Olof Persson, The QR Algorithm II"
      url: "https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/d4f8857f9e8ee47812874c91a30f60c0_MIT18_335JS19_lec17_reading.pdf"
---

## Definition

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$ and let $A_0\in M_n(\mathbb F)$.

1. The **unshifted QR iteration** factors
   $$A_k=Q_kR_k$$
   with $Q_k$ unitary and $R_k$ upper triangular, then sets
   $$A_{k+1}:=R_kQ_k.$$
2. Given shifts $\mu_k\in\mathbb F$, the **shifted QR iteration** factors
   $$A_k-\mu_k I=Q_kR_k$$
   and sets
   $$A_{k+1}:=R_kQ_k+\mu_k I.$$
3. Given a declared tolerance $\tau_k\ge0$, **numerical deflation** at index
   $j$ occurs when $|(A_k)_{j+1,j}|\le\tau_k$: that entry is then replaced by
   $0$, splitting the matrix into the two diagonal blocks separated at index
   $j$. **Exact deflation** is the special case $\tau_k=0$.
4. For a real symmetric tridiagonal matrix, the **Wilkinson shift** is the
   eigenvalue of the trailing $2\times2$ principal block that is nearer to the
   bottom-right entry; away from a tie, this eigenvalue is unique.
