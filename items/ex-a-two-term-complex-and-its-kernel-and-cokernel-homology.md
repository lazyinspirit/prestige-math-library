---
id: ex-a-two-term-complex-and-its-kernel-and-cokernel-homology
kind: example
title: "A two-term complex has kernel and cokernel homology"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homology-object-of-a-chain-complex,
       def-cycle-and-boundary-subobjects-of-a-complex,
       thm-modules-over-a-ring-form-an-abelian-category]
proof_strategy: direct
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

Let $R$ be a ring and let $f:M\to N$ be a homomorphism. Regard
$$0\to M\xrightarrow{f}N\to0$$
as a chain complex with $M$ in degree $1$ and $N$ in degree $0$. Then
$$H_1\cong\ker(f),\qquad H_0\cong\operatorname{coker}(f),$$
and all other homology objects are zero.

## Facts & Assumptions

**Given:** A module homomorphism $f:M\to N$.

[L1] Module categories are abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[L2] Cycles, boundaries, and homology are defined by kernels, images, and the quotient $Z_n/B_n$ ([[def-cycle-and-boundary-subobjects-of-a-complex]], [[def-homology-object-of-a-chain-complex]]).

## Verification

**Proof technique:** direct.

1.1 In degree $1$, the outgoing differential is $f$, so $Z_1=\ker(f)$ and $B_1=0$. In degree $0$, the incoming differential is $f$ and the outgoing one is $0$, so $Z_0=N$ and $B_0=\operatorname{im}(f)$. Every other term is zero. [L1, L2, given, algebra]

2.1 Therefore [L2] gives $$H_1=\ker(f),\qquad H_0=N/\operatorname{im}(f)=\operatorname{coker}(f),$$ and $H_n=0$ for $n\neq0,1$. [L2, step 1.1] ∎
