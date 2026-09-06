---
id: fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism
title: "Kunneth over a PID is not always a tensor-product isomorphism"
kind: false-statement
status: draft
origin: pipeline
deps: ["thm-kunneth-theorem-for-free-complexes-over-a-pid"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The assertion that Kunneth over a PID has no Tor correction is false.

## Refutation

**Given:** two copies $C,D$ of the two-term free complex
$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to0$.

1.1 Both $C$ and $D$ have $H_0\cong\mathbb Z/2$ and $H_1=0$, while $\operatorname{Tor}_1^{\mathbb Z}(H_0C,H_0D)cong \operatorname{Tor}_1^{\mathbb Z}(\mathbb Z/2,\mathbb Z/2)cong\mathbb Z/2$. [given]

2.1 In total degree one the Kunneth correction is this nonzero Tor group, so cross product cannot always be a tensor-product isomorphism. [step 1.1] ∎
