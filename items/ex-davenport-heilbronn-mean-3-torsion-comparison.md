---
id: ex-davenport-heilbronn-mean-3-torsion-comparison
kind: example
title: "Comparing the real and imaginary quadratic 3-torsion means"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Bhargava, Shankar, and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms, Theorem 2"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "Theorem 2, real and imaginary means"
verification: {}
---

## Example

Suppose a real quadratic family has limiting mean $3$-torsion size $4/3$ and an imaginary quadratic family has limiting mean $3$-torsion size $2$. Then the imaginary-to-real ratio is $3/2$, and the imaginary mean exceeds the real mean by $2/3$.

## Example references

[[thm-davenport-heilbronn-mean-3-torsion-quadratic-class-groups]]

[Bhargava, Shankar, and Tsimerman, Theorem 2](https://arxiv.org/pdf/1005.0672)

## Facts & Assumptions

**Given:** Two limiting mean values, $m_{\mathrm{real}}=4/3$ and $m_{\mathrm{imag}}=2$.

[A1] The values are explicit inputs to this arithmetic example; their number-theoretic validity is addressed by the separate mean-theorem item and is not assumed as a proved supplier here.

## Verification
1.1 The difference is $m_{\mathrm{imag}}-m_{\mathrm{real}}=2-\frac43=\frac23$. [given, algebra]

2.1 Since $m_{\mathrm{real}}=4/3\ne0$, the ratio is $m_{\mathrm{imag}}/m_{\mathrm{real}}=2/(4/3)=3/2$. Together with step 1.1 this proves both comparisons. [given, step 1.1, algebra] ∎
