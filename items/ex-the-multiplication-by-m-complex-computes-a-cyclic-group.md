---
id: ex-the-multiplication-by-m-complex-computes-a-cyclic-group
kind: example
title: "The multiplication-by-m complex computes a cyclic group"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-a-two-term-complex-and-its-kernel-and-cokernel-homology,
       thm-abelian-groups-form-an-abelian-category]
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
    - title: "Romyar Sharifi, Homological Algebra, §2.7"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Example

For a nonzero integer $m$, the two-term complex
$$0\to\mathbb Z\xrightarrow{\times m}\mathbb Z\to0$$
has $H_1=0$ and $H_0\cong\mathbb Z/m\mathbb Z$.

## Facts & Assumptions

**Given:** A nonzero integer $m$.

[L1] The two-term homology computation is $H_1=\ker(f)$ and $H_0=\operatorname{coker}(f)$ ([[ex-a-two-term-complex-and-its-kernel-and-cokernel-homology]]).

[L2] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 Multiplication by a nonzero integer on $\mathbb Z$ has zero kernel, because $mx=0$ forces $x=0$. Its cokernel is the quotient group $\mathbb Z/m\mathbb Z$. [L2, given, algebra]

2.1 Applying [L1] to $f=\times m$ yields $$H_1=0,\qquad H_0\cong\mathbb Z/m\mathbb Z.$$ [L1, step 1.1] ∎
