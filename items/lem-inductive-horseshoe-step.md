---
id: lem-inductive-horseshoe-step
kind: lemma
title: "The inductive horseshoe step"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-degree-zero-horseshoe-lift, lem-the-horseshoe-kernel-fits-a-short-exact-sequence]
proof_strategy: direct
verification:
  audited: 2026-09-01
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
## Statement

Suppose $$0\to K'_n\to K_n\to K''_n\to0$$ is the short exact sequence of current kernels arising in the horseshoe construction. If the tails of projective resolutions of $K'_n$ and $K''_n$ are already chosen, then one more degree of the horseshoe construction produces a projective object $P_{n+1}=P'_{n+1}\oplus P''_{n+1}$ surjecting onto $K_n$ and a new short exact sequence of next kernels.
## Facts & Assumptions

**Given:** The current short exact kernel sequence and the next projective terms of the two side resolutions.

[L1] The degree-zero horseshoe construction produces the next surjection from a direct sum of projectives ([[lem-degree-zero-horseshoe-lift]]).

[L2] The kernel of that new surjection again sits in a short exact sequence with the two side kernels ([[lem-the-horseshoe-kernel-fits-a-short-exact-sequence]]).
## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the short exact sequence $$0\to K'_n\to K_n\to K''_n\to0$$ and to the degree-zero tails of the already chosen projective resolutions of $K'_n$ and $K''_n$. This produces a projective object $P_{n+1}=P'_{n+1}\oplus P''_{n+1}$ together with an epimorphism $P_{n+1}\twoheadrightarrow K_n$. [L1, given, construct]

2.1 Applying [L2] to that new surjection gives the next short exact sequence of kernels. Therefore the horseshoe construction advances by one degree. [L2, step 1.1] ∎
