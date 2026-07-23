---
id: thm-reals-field
kind: theorem
title: "The reals form a field"
status: published
origin: session
deps: [def-real-numbers, thm-cauchy-ring, lem-null-ideal, lem-null-maximal]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

$\mathbb{R} = \mathcal{C}/\mathcal{N}$ ([[def-real-numbers]]) is a field.

## Facts & Assumptions

**Given:** Classes $[(a_n)], [(b_n)] \in \mathbb{R}$.

[L1] $\mathcal{N}$ is an ideal of $\mathcal{C}$ ([[lem-null-ideal]]).

[L2] $\mathcal{C}$ is a commutative ring with $1$ ([[thm-cauchy-ring]]).

[L3] Maximality construction: for non-null $(a_n)$ there is Cauchy $(b_n)$ with $(a_n b_n) - 1$ null ([[lem-null-maximal]]).

[L4] The constant sequence $1$ is not a null sequence (its terms stay at $1$), so $\mathcal{N}$ is a proper ideal and $\hat 1 \ne \hat 0$ ([[def-null-sequence]]).

## Proof

**Proof technique:** direct.

1.1 Operations on classes via representatives are well defined: for $z, w \in \mathcal{N}$, $\bigl((a+z)+(b+w)\bigr) - (a+b) = z + w \in \mathcal{N}$ and $(a+z)(b+w) - ab = aw + zb + zw \in \mathcal{N}$, since ideals absorb products and sums. [L1, L2]

2.1 The ring axioms descend to the quotient because the operations are well defined and $\mathcal{C}$ is a ring, verified on representatives; $\hat 1 \ne \hat 0$ since the constant sequence $1$ is not null. [step 1.1, L1, L2, L4]

2.2 Inverses: a nonzero class has a non-null representative $(a_n)$; taking $(b_n)$ from the maximality construction, $(a_n)(b_n) - 1 \in \mathcal{N}$, so $[(b_n)]$ is a multiplicative inverse of $[(a_n)]$. [step 1.1, L3]

3.1 $\mathbb{R}$ is a commutative ring with $1 \ne 0$ in which every nonzero element is invertible: a field. [step 2.1, step 2.2] ∎
