---
id: ex-a-nonzero-tor-correction-in-universal-coefficients
title: "A nonzero Tor correction in universal coefficients"
kind: example
status: published
origin: pipeline
deps: ["thm-universal-coefficient-theorem-for-homology-over-a-pid", "thm-tor-of-two-cyclic-abelian-groups"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For the complex $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to0$ and coefficients $\mathbb Z/2$, the degree-one UCT correction is $\operatorname{Tor}_1^{\mathbb Z}(\mathbb Z/2,\mathbb Z/2)\cong\mathbb Z/2$.

## Verification

**Given:** $H_0C\cong\mathbb Z/2$, $H_1C=0$, and coefficients $\mathbb Z/2$.

1.1 Tensoring produces $0\to\mathbb Z/2\xrightarrow0\mathbb Z/2\to0$, so $H_1(C\otimes\mathbb Z/2)\cong\mathbb Z/2$. [given]

2.1 Since $H_1C\otimes\mathbb Z/2=0$, the degree-one UCT sequence identifies this nonzero group with the stated Tor correction. [step 1.1] ∎
