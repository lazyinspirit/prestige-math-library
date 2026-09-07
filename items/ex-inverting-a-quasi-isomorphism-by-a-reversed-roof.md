---
id: "ex-inverting-a-quasi-isomorphism-by-a-reversed-roof"
kind: "example"
deps: ["prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RR"
      title: "13.11.1–13.11.6"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Let $U=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $-1,0$ and let $s:U\to\mathbb Z/2[0]$ be reduction modulo two at degree zero. The inverse of $Q(s)$ is the roof $\mathbb Z/2[0]\xleftarrow sU\xrightarrow1U$.

## Facts & Assumptions

**Given:** Let $U=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $-1,0$ and let $s:U\to\mathbb Z/2[0]$ be reduction modulo two at degree zero. The inverse of $Q(s)$ is the roof $\mathbb Z/2[0]\xleftarrow sU\xrightarrow1U$.

[F1] A quasi-isomorphism is invertible in the derived category, represented by its reversed roof ([[prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms]]).

## Verification

1.1 Multiplication by two on $\mathbb Z$ is injective with cokernel $\mathbb Z/2$. Thus $s$ is a quasi-isomorphism in all degrees, including the two boundary degrees and the zero terms elsewhere. [given, algebra]

2.1 The inversion rule for localization identifies the displayed reversed roof with $Q(1_U)Q(s)^{-1}$. Composing on either side with $Q(s)$ gives the corresponding identity, proving the asserted inverse explicitly. [F1, step 1.1, algebra] ∎
