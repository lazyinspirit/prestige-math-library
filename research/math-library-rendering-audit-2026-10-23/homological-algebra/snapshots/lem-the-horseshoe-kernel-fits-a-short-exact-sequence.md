---
id: lem-the-horseshoe-kernel-fits-a-short-exact-sequence
kind: lemma
title: "The horseshoe kernel fits into a short exact sequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-degree-zero-horseshoe-lift, def-syzygy-and-cosyzygy-relative-to-a-resolution, thm-snake-lemma-in-an-abelian-category, thm-nine-lemma-in-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-09-01
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
## Statement

With the notation of the degree-zero horseshoe lift, let $$K:=\ker(\lambda_0),\qquad \Omega^1(A'):=\ker(\varepsilon'),\qquad \Omega^1(A''):=\ker(\varepsilon'').$$ Then there is a short exact sequence $$0\to\Omega^1(A')\to K\to\Omega^1(A'')\to0.$$
## Facts & Assumptions

**Given:** The degree-zero horseshoe map $\lambda_0:P'_0\oplus P''_0\twoheadrightarrow A$ from [[lem-degree-zero-horseshoe-lift]].

[L1] The degree-zero horseshoe lift gives a commutative diagram with exact rows ([[lem-degree-zero-horseshoe-lift]]).

[L2] First syzygies are the kernels of the augmentations ([[def-syzygy-and-cosyzygy-relative-to-a-resolution]]).

[L3] The snake lemma extracts an exact kernel sequence from a commutative short-exact diagram ([[thm-snake-lemma-in-an-abelian-category]]).

[L4] The nine-lemma package supplies the exactness compatibilities used in the ambient $3\times3$ diagram ([[thm-nine-lemma-in-an-abelian-category]]).
## Proof

**Proof technique:** direct.

1.1 The map $\lambda_0$ from [L1] fits into a commutative diagram $$0\to P'_0\to P'_0\oplus P''_0\to P''_0\to0$$ over $$0\to A'\to A\to A''\to0,$$ where both rows are exact and the top row is split exact. Applying the snake lemma [L3] gives an exact sequence $$0\to\ker(\varepsilon')\to\ker(\lambda_0)\to\ker(\varepsilon'')\to0.$$ [L1, L3, L4, construct]

2.1 By [L2], these three kernels are exactly $\Omega^1(A')$, $K$, and $\Omega^1(A'')$. Hence the displayed kernel sequence is short exact. [L2, step 1.1] ∎
