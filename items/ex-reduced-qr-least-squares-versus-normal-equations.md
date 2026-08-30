---
id: ex-reduced-qr-least-squares-versus-normal-equations
kind: example
title: "Reduced QR avoids the condition-number squaring seen in the normal equations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number]
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
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 3.3.3 and Example 3.3.2"
      url: "https://fncbook.com/qr/"
---

## Example

Let
$$A=\begin{pmatrix}1&0\\0&10^{-4}\\0&0\end{pmatrix},\qquad b=\begin{pmatrix}1\\1\\0\end{pmatrix}.$$
Then $A$ already has reduced QR factorisation
$A=\widehat Q\widehat R$ with
$\widehat Q=(e_1,e_2)$ and
$\widehat R=\operatorname{diag}(1,10^{-4})$. The least-squares solution is
$x=(1,10^4)^{\mathsf T}$, while
$\kappa_2(\widehat R)=10^4$ and
$\kappa_2(A^{\mathsf T}A)=10^8$.

## Facts & Assumptions

**Given:** The displayed matrix $A$, vector $b$, and reduced QR factorisation.

[L1] Reduced QR solves full-column-rank least squares through
$\widehat R x=\widehat Q^*b$ and avoids the condition-number square of the
normal equations
([[thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number]]).

## Verification

**Proof technique:** direct.

1.1 The columns of $A$ are already orthogonal, so $\widehat Q=(e_1,e_2)$ and $\widehat R=\operatorname{diag}(1,10^{-4})$ form a reduced QR factorisation. Also $\widehat Q^*b=(1,1)^{\mathsf T}$. [given, algebra]

2.1 Solving $\widehat R x=\widehat Q^*b$ gives $x_1=1$ and $10^{-4}x_2=1$, hence $x=(1,10^4)^{\mathsf T}$. The factor $\widehat R$ has spectral condition number $10^4$, whereas $A^{\mathsf T}A=\operatorname{diag}(1,10^{-8})$ has spectral condition number $10^8$. This is exactly the contrast described in [L1]. [step 1.1, L1, algebra]

3.1 Steps 1.1-2.1 verify the example. [step 1.1, step 2.1] ∎
