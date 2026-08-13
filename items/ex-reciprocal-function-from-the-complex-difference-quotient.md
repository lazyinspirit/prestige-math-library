---
id: ex-reciprocal-function-from-the-complex-difference-quotient
kind: example
title: "$z\\mapsto1/z$ is holomorphic on $\\mathbb C\\setminus\\{0\\}$ with derivative $-1/z^2$, directly from the difference quotient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complex-differentiability-holomorphic-and-entire, lem-complex-conjugation-and-modulus-laws]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: frontier-12
---

## Example

The reciprocal function $f(z)=1/z$ is holomorphic on the punctured plane $\mathbb C\setminus\{0\}$, and
$$f'(z)=-\frac1{z^2}.$$

## Facts & Assumptions
**Given:** A point $z\in\mathbb C\setminus\{0\}$.

[L1] Complex differentiability is the existence of the punctured-domain difference-quotient limit, and holomorphy on an open set means complex differentiability at each point of that set ([[def-complex-differentiability-holomorphic-and-entire]]).

[L2] The complex modulus is multiplicative, satisfies $|z+w|\le|z|+|w|$, and vanishes exactly at $0$ ([[lem-complex-conjugation-and-modulus-laws]]). Applying the triangle inequality to $z=(z+h)+(-h)$, and using $|-h|=|-1||h|=|h|$, gives the reverse form $|z+h|\ge|z|-|h|$.

## Verification

**Proof technique:** direct computation.

1.1 If $0<|h|<|z|/2$, then $|z+h|\ge |z|-|h|>|z|/2>0$, so $z+h$ remains in the punctured plane. [L2]

2.1 For such $h$, $$\frac{f(z+h)-f(z)}h=-\frac1{z(z+h)}.$$ [step 1.1, algebra]

3.1 The error from the proposed derivative satisfies $$\left|-\frac1{z(z+h)}+\frac1{z^2}\right|=\frac{|h|}{|z|^2|z+h|}\le\frac{2|h|}{|z|^3}\longrightarrow0.$$ [step 1.1, step 2.1, L2, algebra]

4.1 Hence $f'(z)=-1/z^2$ by [L1]. Since $z$ was arbitrary in $\mathbb C\setminus\{0\}$, $f$ is holomorphic there. The point $0$ is absent from the function's domain, not merely exceptional for the derivative formula. [step 3.1, L1] ∎
