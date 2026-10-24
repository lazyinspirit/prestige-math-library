---
id: ex-uct-homology-with-z-mod-m-coefficients
title: "Universal-coefficient homology with cyclic coefficients"
kind: example
status: published
origin: pipeline
deps: ["def-chain-complex-with-coefficients-by-tensoring", "def-homology-object-of-a-chain-complex"]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

For $C=(0\to\mathbb Z\xrightarrow{m}\mathbb Z\to0)$ in degrees $1,0$ and coefficients $\mathbb Z/r$, $H_1(C\otimes\mathbb Z/r)=\{\bar x:m\bar x=0\}$ and $H_0(C\otimes\mathbb Z/r)=(\mathbb Z/r)/m(\mathbb Z/r)$.

## Verification

**Given:** the tensor complex $0\to\mathbb Z/r\xrightarrow{m}\mathbb Z/r\to0$.

1.1 Its degree-one homology is the kernel and its degree-zero homology the cokernel of multiplication by $m$. [given]

2.1 These are respectively the $m$-torsion subgroup and quotient displayed in the statement. The calculation follows directly from the two-term tensor complex. [step 1.1, algebra] ∎
