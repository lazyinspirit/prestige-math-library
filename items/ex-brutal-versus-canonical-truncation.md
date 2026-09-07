---
id: "ex-brutal-versus-canonical-truncation"
kind: "example"
deps: ["def-brutal-truncation-of-a-complex", "def-canonical-truncation-of-a-complex", "lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/0118"
      title: "12.15, all four chain and four cochain truncations"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For $X=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $0,1$, its four truncations at zero are $\sigma^{\leq0}X=\mathbb Z[0]$, $\tau^{\leq0}X=0$, $\sigma^{\geq0}X=X$, and $\tau^{\geq0}X=X$.

## Facts & Assumptions

**Given:** For $X=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $0,1$, its four truncations at zero are $\sigma^{\leq0}X=\mathbb Z[0]$, $\tau^{\leq0}X=0$, $\sigma^{\geq0}X=X$, and $\tau^{\geq0}X=X$.

[F1] Brutal truncations simply delete terms ([[def-brutal-truncation-of-a-complex]]).

[F2] Canonical truncations use a kernel at an upper cut and a cokernel at a lower cut ([[def-canonical-truncation-of-a-complex]]).

[F3] Canonical truncations preserve the cohomology on the retained side ([[lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]]).

## Verification

1.1 Upper brutal truncation retains the degree-zero $\mathbb Z$ and deletes the next term. Upper canonical truncation replaces it by $\ker(2)=0$. All lower degrees are already zero. [F1, F2, algebra]

2.1 The lower brutal truncation deletes only already-zero terms. The lower canonical boundary is $\operatorname{coker}(0\to\mathbb Z)=\mathbb Z$, so its differential remains multiplication by two. Thus both lower truncations equal $X$. Its $H^0$ is zero, agreeing with the canonical upper truncation and disagreeing with the brutal upper truncation. The four constructions need not be four distinct complexes. [F1, F2, F3, step 1.1, algebra] ∎
