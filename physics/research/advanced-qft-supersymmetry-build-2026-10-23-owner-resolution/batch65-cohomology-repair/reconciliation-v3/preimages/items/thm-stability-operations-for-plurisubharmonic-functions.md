---
id: thm-stability-operations-for-plurisubharmonic-functions
kind: theorem
title: "Basic stability operations for plurisubharmonic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plurisubharmonic-function,
       lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.4"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.4 and Exercise 18"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be a domain.

1. If $u_1,\dots,u_N$ are plurisubharmonic on $\Omega$ and
   $\alpha_1,\dots,\alpha_N\ge0$, then
   $$\alpha_1u_1+\cdots+\alpha_Nu_N$$
   is plurisubharmonic, with the zero-coefficient terms omitted.
2. If $u_1,\dots,u_N$ are plurisubharmonic on $\Omega$, then
   $$u(z)=\max\{u_1(z),\dots,u_N(z)\}$$
   is plurisubharmonic.
3. If $u:\Omega\to\mathbb R$ is plurisubharmonic and
   $\phi:\mathbb R\to\mathbb R$ is convex and nondecreasing, then
   $\phi\circ u$ is plurisubharmonic on $\Omega$.

## Facts & Assumptions

**Given:** Plurisubharmonic functions on a domain $\Omega\subseteq\mathbb C^m$; for part 3, a real-valued plurisubharmonic function $u$ on $\Omega$ and a convex nondecreasing function $\phi:\mathbb R\to\mathbb R$.

[L1] Plurisubharmonicity is tested on affine complex lines ([[def-plurisubharmonic-function]]).

[L2] In one complex variable, nonnegative finite sums and finite maxima preserve subharmonicity ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]).

## Proof

**Proof technique:** direct.

1.1 Restrict every function in parts 1 and 2 to an affine complex line in $\Omega$. By [L1], each restriction is subharmonic or identically $-\infty$ on every connected component of the line domain, and [L2] shows that nonnegative finite sums and finite maxima preserve subharmonicity there. Another use of [L1] therefore gives parts 1 and 2. [L1, L2, given]

2.1 For part 3, fix an affine complex line. Its restriction $v$ of $u$ is a real-valued subharmonic function by [L1]. The cited one-variable source result for convex nondecreasing compositions of subharmonic functions makes $\phi\circ v$ subharmonic on each connected component. Because upper semicontinuity is preserved by nondecreasing composition, [L1] shows that $\phi\circ u$ is plurisubharmonic. [L1, step 1.1] ∎
