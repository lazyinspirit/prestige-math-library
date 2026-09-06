---
id: ex-tame-different-exponent
kind: example
title: "A tame different exponent"
status: published
origin: pipeline
deps: [thm-different-exponent-in-tame-and-wild-ramification]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Theorem 4.13"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Example

At the unique prime over $3$ in $\mathbb Q(\sqrt[2]3)$, $e=2$ and the different exponent is $1=e-1$.

## Verification

**Given:** $X^2-3$ is Eisenstein at $3$.

1.1 Eisenstein gives one prime above $3$ with ramification index $2$. [given, algebra]

2.1 Since $3\nmid2$, ramification is tame, and the tame equality gives exponent $2-1=1$. [step 1.1, algebra] ∎
