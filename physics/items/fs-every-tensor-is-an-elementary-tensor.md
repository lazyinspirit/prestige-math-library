---
id: fs-every-tensor-is-an-elementary-tensor
kind: false-statement
title: "False: every element of $M\\otimes_RN$ is an elementary tensor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tensor-product-basis-from-bases, lem-standard-basis-of-f-n]
aliases: []
landmark: false
short: "Not every tensor is elementary"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Haynes Miller, Lectures on Algebraic Topology I, §20"
      url: "https://math.mit.edu/~hrm/papers/905-notes-aug19.pdf"
pipeline_run: null
---

## Statement

**False claim:** every element of a tensor product is an elementary tensor.

For any field $F$, if $e_1,e_2$ and $f_1,f_2$ are the standard bases of two copies of $F^2$, then

$$e_1\otimes f_1+e_2\otimes f_2$$

is not an elementary tensor.

## Facts & Assumptions

**Given:** A field $F$ and two copies of $F^2$.

[L1] The two standard coordinate vectors form a basis of $F^2$ ([[lem-standard-basis-of-f-n]]).

[L2] The four tensors $e_i\otimes f_j$ form a basis of $F^2\otimes_FF^2$ ([[thm-tensor-product-basis-from-bases]]).

## Refutation

**Proof technique:** direct.

1.1 Suppose $e_1\otimes f_1+e_2\otimes f_2$ were elementary. By [L1], write its factors as $ae_1+be_2$ and $cf_1+df_2$. [given, L1, assume-hyp]

2.1 Expanding the elementary tensor gives coefficients $ac,ad,bc,bd$ on the ordered basis $e_1\otimes f_1,e_1\otimes f_2,e_2\otimes f_1,e_2\otimes f_2$. Uniqueness of coefficients in [L2] therefore yields $ac=bd=1$ and $ad=bc=0$. [step 1.1, L2, algebra]

3.1 From $ac=1$, both $a$ and $c$ are nonzero. Then $ad=0$ forces $d=0$, contradicting $bd=1$. Hence the displayed tensor is not elementary and the claim is false. [step 2.1, algebra] ∎
