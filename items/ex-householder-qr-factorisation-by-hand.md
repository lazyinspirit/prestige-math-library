---
id: ex-householder-qr-factorisation-by-hand
kind: example
title: "A short dense matrix admits a worked Householder QR factorisation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Example 3.4.1"
      url: "https://fncbook.com/house/"
---

## Example

For
$$A=\begin{pmatrix}1&1\\1&-1\end{pmatrix},$$

the unit vector $v=\frac{1}{\sqrt{2(2-\sqrt2)}}\binom{1-\sqrt2}{1}$ gives the
Householder reflector

$$H=I-2vv^{\mathsf T}=\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}.$$

Hence

$$A=QR,\qquad Q=H,\qquad R=HA=\begin{pmatrix}\sqrt2&0\\0&\sqrt2\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed matrix $A$, vector $v$, and reflector $H$.

[L1] Successive Householder reflectors produce QR factorisations
([[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]]).

## Verification

**Proof technique:** direct.

1.1 The vector $v$ has norm $1$, and direct multiplication of $I-2vv^{\mathsf T}$ gives the displayed matrix $H$. Since $H^{\mathsf T}H=I$, it is an orthogonal reflector. [given, algebra]

2.1 Multiplying by $A$ gives $$ HA= \frac{1}{\sqrt2} \begin{pmatrix}1&1\\1&-1\end{pmatrix} \begin{pmatrix}1&1\\1&-1\end{pmatrix} = \begin{pmatrix}\sqrt2&0\\0&\sqrt2\end{pmatrix}. $$ Thus $A=QR$ with $Q=H$ and $R$ upper triangular, exactly as predicted by [L1]. [step 1.1, L1, algebra]

3.1 Steps 1.1-2.1 verify the example. [step 1.1, step 2.1] ∎
