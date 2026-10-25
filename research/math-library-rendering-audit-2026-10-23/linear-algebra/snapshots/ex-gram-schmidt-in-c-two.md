---
id: ex-gram-schmidt-in-c-two
kind: example
title: "Gram–Schmidt on an explicit basis of $\\mathbb C^2$ with conjugation visible"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-standard-coordinate-inner-products, thm-gram-schmidt-orthonormalisation, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For the linear-first standard inner product on $\mathbb C^2$, Gram–Schmidt applied to $v_0=(1,i)$ and $v_1=(1,1)$ produces

$$e_0=\frac{(1,i)}{\sqrt2},\qquad e_1=\left(\frac{1+i}{2},\frac{1-i}{2}\right).$$

## Facts & Assumptions

**Given:** The vectors $v_0=(1,i)$ and $v_1=(1,1)$ in $\mathbb C^2$.

[L1] The standard complex inner product is $\langle x,y\rangle=\sum_kx_k\overline{y_k}$ ([[prop-standard-coordinate-inner-products]]).

[L2] Gram–Schmidt uses the coefficient $\langle v_k,e_j\rangle$ under the linear-first convention ([[thm-gram-schmidt-orthonormalisation]]).

[L3] Complex conjugation sends $i$ to $-i$ and satisfies $|1\pm i|^2=2$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Verification

**Proof technique:** computation.

1.1 From [L1], $\lVert v_0\rVert=\sqrt2$, so $e_0=v_0/\sqrt2$. The projection coefficient is $\langle v_1,e_0\rangle=(1-i)/\sqrt2$. [L1, L2, L3]

2.1 Subtraction gives $u_1=v_1-\langle v_1,e_0\rangle e_0=((1+i)/2,(1-i)/2)$. By [L3], $\lVert u_1\rVert^2=1$, so $e_1=u_1$. [step 1.1, L1, L3, algebra]

3.1 Direct use of [L1] gives $\langle e_1,e_0\rangle=0$ and, by conjugate symmetry, $\langle e_0,e_1\rangle=0$. Both vectors have norm one, so the displayed list is orthonormal. [step 1.1, step 2.1, L1, L3] ∎
