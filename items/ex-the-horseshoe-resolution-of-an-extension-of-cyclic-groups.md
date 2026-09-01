---
id: ex-the-horseshoe-resolution-of-an-extension-of-cyclic-groups
kind: example
title: "The horseshoe resolution of an extension of cyclic groups"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [ex-a-projective-resolution-of-a-cyclic-abelian-group, thm-horseshoe-lemma-for-projective-resolutions, cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution]
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

For the split short exact sequence $$0\to\mathbb Z/m\mathbb Z\to\mathbb Z/m\mathbb Z\oplus\mathbb Z/n\mathbb Z\to \mathbb Z/n\mathbb Z\to0,$$ the horseshoe resolution is the direct sum of the two standard cyclic-group resolutions: $$0\to\mathbb Z\oplus\mathbb Z\xrightarrow{(a,b)\mapsto(ma,nb)} \mathbb Z\oplus\mathbb Z\to\mathbb Z/m\mathbb Z\oplus\mathbb Z/n\mathbb Z\to0.$$
## Facts & Assumptions

**Given:** Integers $m,n\ge1$.

[L1] A split short exact sequence admits the direct-sum resolution ([[cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution]]).

[L2] The standard cyclic-group resolution is the basic side resolution ([[ex-a-projective-resolution-of-a-cyclic-abelian-group]]).
## Verification

**Proof technique:** direct.

1.1 Exactness is checked componentwise: the kernel of the quotient map onto $\mathbb Z/m\mathbb Z\oplus\mathbb Z/n\mathbb Z$ is $m\mathbb Z\oplus n\mathbb Z$, which is exactly the image of the displayed differential, and that differential is injective. [given, algebra]

2.1 The resolution in step 1.1 is the direct sum of the two side resolutions from [L2], so [L1] identifies it as the horseshoe resolution for this split extension. [L1, L2, step 1.1] ∎
