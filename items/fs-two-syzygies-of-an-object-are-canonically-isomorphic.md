---
id: fs-two-syzygies-of-an-object-are-canonically-isomorphic
kind: false-statement
title: "FALSE: two syzygies of an object are canonically isomorphic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic, def-syzygy-and-cosyzygy-relative-to-a-resolution]
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
    - title: "The Stacks Project, Section 10.109: Rings of finite global dimension"
      url: "https://stacks.math.columbia.edu/tag/00O2"
pipeline_run: frontier-28
---
## Statement

> **False.** Two syzygies of an object are canonically isomorphic.
## Facts & Assumptions

**Given:** The object $\mathbb Z/2\mathbb Z$.

[L1] Syzygies are relative to a displayed projective resolution ([[def-syzygy-and-cosyzygy-relative-to-a-resolution]]).

[L2] Two projective resolutions give only stable isomorphism data for their syzygies ([[cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic]]).
## Refutation

**Proof technique:** direct.

1.1 The standard resolution $$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0$$ has first syzygy $2\mathbb Z\cong\mathbb Z$. The stabilized resolution $$0\to\mathbb Z\oplus\mathbb Z\xrightarrow{(a,b)\mapsto(2a,b)} \mathbb Z\oplus\mathbb Z\to\mathbb Z/2\mathbb Z\to0,$$ with augmentation $(x,y)\mapsto \bar x$, has first syzygy $2\mathbb Z\oplus\mathbb Z\cong\mathbb Z\oplus\mathbb Z$. [L1, algebra]

2.1 The groups $\mathbb Z$ and $\mathbb Z\oplus\mathbb Z$ are not isomorphic, so the two displayed syzygies are certainly not canonically isomorphic. This is exactly why [L2] stops at stable isomorphism rather than literal equality. [L2, step 1.1] ∎
