---
id: cex-two-projective-resolutions-with-nonisomorphic-first-syzygies
kind: counterexample
title: "Two projective resolutions with nonisomorphic first syzygies"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [ex-a-projective-resolution-of-a-cyclic-abelian-group, cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic]
generation:
  role: counterexample
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
    - title: "The Stacks Project, Section 10.109: Rings of finite global dimension"
      url: "https://stacks.math.columbia.edu/tag/00O2"
pipeline_run: frontier-28
---
## Statement refuted

Two projective resolutions of the same object must have isomorphic first syzygies.
## Facts & Assumptions

**Given:** The object $\mathbb Z/2\mathbb Z$.

[L1] The standard cyclic-group resolution is projective ([[ex-a-projective-resolution-of-a-cyclic-abelian-group]]).

[L2] First syzygies from two projective resolutions are only stably isomorphic in general ([[cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic]]).
## Counterexample

1.1 The standard resolution $$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0$$ has first syzygy $2\mathbb Z\cong\mathbb Z$. The stabilized resolution $$0\to\mathbb Z\oplus\mathbb Z\xrightarrow{(a,b)\mapsto(2a,b)} \mathbb Z\oplus\mathbb Z\to\mathbb Z/2\mathbb Z\to0$$ is again projective and exact, and its first syzygy is $2\mathbb Z\oplus\mathbb Z\cong\mathbb Z\oplus\mathbb Z$. [L1, algebra]

2.1 The groups $\mathbb Z$ and $\mathbb Z\oplus\mathbb Z$ are not isomorphic, so the first syzygies of these two projective resolutions are not isomorphic. This is why [L2] stops at stable isomorphism. [L2, step 1.1] ∎
