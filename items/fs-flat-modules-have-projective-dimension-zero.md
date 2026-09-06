---
id: fs-flat-modules-have-projective-dimension-zero
title: "Flat modules need not have projective dimension zero"
kind: false-statement
status: published
origin: pipeline
deps: ["def-left-and-right-flat-modules-over-an-arbitrary-ring", "def-projective-dimension-of-an-object"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
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

False claim: every flat module has projective dimension zero.

## Refutation

**Given:** the $\mathbb Z$-module $\mathbb Q$.

1.1 The group $\mathbb Q$ is torsion-free, hence flat over the PID $\mathbb Z$. [given]

2.1 If $\mathbb Q$ were projective over $\mathbb Z$, it would be free; every nonzero free abelian group has a nonzero map to $\mathbb Z$, while $\operatorname{Hom}_{\mathbb Z}(\mathbb Q,\mathbb Z)=0$. [step 1.1, algebra]

3.1 Thus $\mathbb Q$ is flat but not projective, so its projective dimension is not zero. [step 2.1, algebra] ∎
