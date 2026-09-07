---
id: "fs-brutal-and-canonical-truncation-are-the-same"
kind: "false-statement"
deps: ["def-brutal-truncation-of-a-complex", "def-canonical-truncation-of-a-complex"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "Boundary check against the licensed construction"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Brutal and canonical truncation of a complex at the same degree always coincide, even up to derived isomorphism.

## Facts & Assumptions

**Given:** Brutal and canonical truncation of a complex at the same degree always coincide, even up to derived isomorphism.

[F1] Brutal truncation retains the original boundary term ([[def-brutal-truncation-of-a-complex]]).

[F2] Canonical upper truncation replaces its boundary term by the kernel of the outgoing differential ([[def-canonical-truncation-of-a-complex]]).

## Refutation

1.1 Take $X=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $0,1$, zero elsewhere. Brutal upper truncation at zero is $\sigma^{\leq0}X=\mathbb Z[0]$. Canonical upper truncation has degree-zero term $\ker(2:\mathbb Z\to\mathbb Z)=0$, hence $\tau^{\leq0}X=0$. [F1, F2, algebra]

2.1 Their degree-zero cohomology groups are $\mathbb Z$ and zero, so they are neither equal complexes nor isomorphic derived objects. The endpoint kernel correction changes the answer. [step 1.1, algebra] ∎
