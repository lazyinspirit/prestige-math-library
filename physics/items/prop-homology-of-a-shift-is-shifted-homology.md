---
id: prop-homology-of-a-shift-is-shifted-homology
kind: proposition
title: "Homology of a shift is shifted homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-shift-of-a-chain-complex, def-homology-object-of-a-chain-complex]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.14: Homotopy and the shift functor"
      url: "https://stacks.math.columbia.edu/tag/0119"
pipeline_run: frontier-25
---

## Statement

For every chain complex $C_\bullet$, every integer $k$, and every degree $n$,
there is a natural isomorphism
$$H_n(C[k])\cong H_{n-k}(C).$$

## Facts & Assumptions

**Given:** A chain complex $C_\bullet$ and integers $n,k$.

[L1] The shifted differential is $$d^{C[k]}_n=(-1)^k d^C_{n-k},$$ so $C[k]_n=C_{n-k}$ ([[def-shift-of-a-chain-complex]]).

[L2] Homology is the quotient of cycles by boundaries ([[def-homology-object-of-a-chain-complex]]).

## Proof

**Proof technique:** direct.

1.1 Because the differential in [L1] differs from $d^C_{n-k}$ only by the unit $(-1)^k$, its kernel and image are the same subobjects. Hence $$Z_n(C[k])=Z_{n-k}(C),\qquad B_n(C[k])=B_{n-k}(C).$$ [L1, given, algebra]

2.1 Applying [L2] to the equalities of step 1.1 yields $$H_n(C[k])=Z_n(C[k])/B_n(C[k])\cong Z_{n-k}(C)/B_{n-k}(C)=H_{n-k}(C).$$ [L2, step 1.1, algebra] ∎
