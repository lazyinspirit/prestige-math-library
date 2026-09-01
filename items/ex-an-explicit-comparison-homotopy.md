---
id: ex-an-explicit-comparison-homotopy
kind: example
title: "An explicit comparison homotopy"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [ex-comparison-maps-between-two-resolutions-of-a-cyclic-group, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
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

On two copies of the standard projective resolution $$0\to\mathbb Z\xrightarrow{n}\mathbb Z\to\mathbb Z/n\mathbb Z\to0,$$ the degreewise maps $f_0=f_1=1$ and $g_0=g_1=1+n$ are two different comparison maps lifting the identity on $\mathbb Z/n\mathbb Z$. They are joined by the explicit chain homotopy $s_0=1:\mathbb Z\to\mathbb Z$.
## Facts & Assumptions

**Given:** An integer $n\ge1$ and two copies of the standard resolution.

[L1] Comparison maps lifting the same object morphism are homotopic ([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).
## Verification

**Proof technique:** direct.

1.1 Because $1+n\equiv1\pmod n$ and $(1+n)n=n(1+n)$, the degreewise maps $f_i=1$ and $g_i=1+n$ are both augmentation-preserving chain maps lifting $1_{\mathbb Z/n\mathbb Z}$. They are distinct as maps on $\mathbb Z$ whenever $n\ne0$. [given, algebra]

2.1 Let $s_0:\mathbb Z\to\mathbb Z$ be the identity map. Then $$g_0-f_0=n=d_1s_0,\qquad g_1-f_1=n=s_0d_1,$$ so $s_0$ is a chain homotopy from $f_\bullet$ to $g_\bullet$. This is the explicit homotopy predicted by [L1]. [L1, step 1.1, discharge-construct] ∎
