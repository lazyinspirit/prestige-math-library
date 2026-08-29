---
id: ex-jensen-formula-for-a-polynomial
kind: example
title: "Jensen's formula for a polynomial"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-jensen-formula-on-a-disc]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 §1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

For $f(z)=1-z$, Jensen's formula on any disc $|z|\le R$ with $R>1$ reads

$$0=\frac{1}{2\pi}\int_0^{2\pi}\log|1-Re^{it}|\,dt-\log R,$$

because $f(0)=1$ and the only zero inside the disc is $a_1=1$.

## Facts & Assumptions

**Given:** The polynomial $f(z)=1-z$ and a radius $R>1$.

[F1] Jensen's formula expresses the boundary mean of $\log|f|$ in terms of
$f(0)$ and the interior zeros ([[thm-jensen-formula-on-a-disc]]).

## Verification

1.1 The function satisfies $f(0)=1\ne0$, and its unique zero is $a_1=1$, which lies in $|z|<R$ because $R>1$. [given, algebra]

2.1 Applying [F1] with this single zero gives $0=\frac{1}{2\pi}\int_0^{2\pi}\log|1-Re^{it}|\,dt-\log R$, equivalently $\frac{1}{2\pi}\int_0^{2\pi}\log|1-Re^{it}|\,dt=\log R$. [F1, step 1.1, algebra] ∎
