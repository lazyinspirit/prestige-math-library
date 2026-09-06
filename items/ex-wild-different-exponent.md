---
id: ex-wild-different-exponent
kind: example
title: "A wild different exponent"
status: draft
origin: pipeline
deps: [thm-different-exponent-in-tame-and-wild-ramification]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
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

At the unique prime over $2$ in $\mathbb Q(\sqrt2)$, $e=2$ and the different
exponent is at least $2$.

## Verification

**Given:** $X^2-2$ is Eisenstein at $2$.

1.1 Eisenstein gives a unique prime above $2$ with ramification index $2$. [given, algebra]

2.1 Because $2\mid e$, the extension is wild, so the valid conclusion is the wild lower bound $v_{\mathfrak P}(\mathfrak D_K)\ge2$; no equality $e-1$ is inferred. [step 1.1, algebra] ∎
