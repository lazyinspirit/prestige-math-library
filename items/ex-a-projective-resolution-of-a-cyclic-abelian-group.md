---
id: ex-a-projective-resolution-of-a-cyclic-abelian-group
kind: example
title: "A projective resolution of a cyclic abelian group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-free-modules-are-projective-with-choice-boundary]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Example

For $n\ge1$, the cyclic abelian group $\mathbb Z/n\mathbb Z$ admits the projective resolution $$0\to\mathbb Z\xrightarrow{n}\mathbb Z\to\mathbb Z/n\mathbb Z\to0,$$ where the right-hand map is the quotient modulo $n$.
## Facts & Assumptions

**Given:** An integer $n\ge1$.

[L1] Free modules are projective with the recorded choice boundary ([[thm-free-modules-are-projective-with-choice-boundary]]).
## Verification

**Proof technique:** direct.

1.1 The composite of multiplication by $n$ with the quotient modulo $n$ is zero. The kernel of $\mathbb Z\to\mathbb Z/n\mathbb Z$ is exactly $n\mathbb Z$, which is the image of the left map, and the left map is injective. So the sequence is exact. [given, algebra]

2.1 Both copies of $\mathbb Z$ are free abelian groups of rank one and are therefore projective by [L1]. Hence the exact sequence of step 1.1 is a projective resolution of $\mathbb Z/n\mathbb Z$. [L1, step 1.1] ∎
